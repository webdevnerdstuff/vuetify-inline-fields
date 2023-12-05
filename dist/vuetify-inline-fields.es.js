import { Fragment as fe, reactive as Le, computed as v, watchEffect as Ge, toRefs as Eo, capitalize as To, isVNode as ni, Comment as ti, unref as u, warn as Rt, inject as ve, ref as M, provide as De, shallowRef as re, defineComponent as Ne, camelize as zo, h as Nt, getCurrentInstance as li, onBeforeUnmount as Ze, watch as K, readonly as bl, onScopeDispose as ke, effectScope as Cl, toRaw as on, TransitionGroup as oi, Transition as gn, createVNode as d, mergeProps as Z, onBeforeMount as Do, nextTick as Ie, withDirectives as Fe, resolveDirective as Qe, vShow as Wn, isRef as hn, onMounted as Mn, toRef as ne, Text as ai, resolveDynamicComponent as ii, Teleport as sn, cloneVNode as ri, createTextVNode as Lo, vModelText as si, mergeModels as Pe, useModel as un, openBlock as J, createBlock as he, useSlots as cn, createElementBlock as ie, normalizeClass as ee, normalizeStyle as ge, renderSlot as Ae, normalizeProps as ye, createCommentVNode as pe, createElementVNode as xe, toDisplayString as Il, useAttrs as dn, withCtx as ue, mergeDefaults as kn, onUnmounted as wn, createSlots as He, renderList as Ye, guardReactiveProps as Ce, withKeys as St } from "vue";
import { useTheme as Sl } from "vuetify";
import { useWindowSize as ui } from "@vueuse/core";
/**
 * @name @wdns/vuetify-inline-fields
 * @version 1.0.1
 * @description Vuetify Inline Fields Component Library offers a comprehensive collection of reusable UI components to create elegant and efficient inline form fields within your applications.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-inline-fields/
 * @repository https://github.com/webdevnerdstuff/vuetify-inline-fields
 * @license MIT License
 */
const Fn = Symbol("identifier"), Vn = { elevation: 5, variant: "flat" }, ot = { cancelButtonColor: "default", cancelButtonSize: "x-small", cancelButtonTitle: "Cancel", cancelButtonVariant: "text", cancelIcon: void 0, cancelIconColor: "default", cardField: !1, cardOffsetX: 0, cardOffsetY: 0, cardProps: () => ({}), cell: !1, cellUnderlineFullWidth: !0, closeSiblings: !1, color: "primary", density: "compact", disabled: !1, displayAppendIcon: void 0, displayAppendIconColor: void 0, displayAppendIconSize: "x-small", displayAppendInnerIcon: void 0, displayAppendInnerIconColor: void 0, displayAppendInnerIconSize: "x-small", displayPrependIcon: void 0, displayPrependIconColor: void 0, displayPrependIconSize: "x-small", displayPrependInnerIcon: void 0, displayPrependInnerIconColor: void 0, displayPrependInnerIconSize: "x-small", emptyText: "empty", fieldOnly: !1, hideCancelIcon: !0, hideDetails: !0, label: "", loading: !1, loadingWait: !0, name: "", tableField: !0, underlineColor: "primary", underlineStyle: "dotted", underlineWidth: "2px", underlined: !0, valueColor: "default" }, Bl = { autofocus: !0 }, jt = { hideCancelIcon: !1, hideSaveIcon: !1, loadingIcon: void 0, loadingIconColor: "primary", saveButtonColor: "primary", saveButtonSize: "x-small", saveButtonTitle: "Save", saveButtonVariant: "text", saveIcon: void 0, saveIconColor: "primary" }, Wo = { falseValue: !1, iconFalse: void 0, iconFalseColor: "danger", iconFalseTitle: "No", iconTrue: void 0, iconTrueColor: "success", iconTrueTitle: "Yes", icons: !0, trueValue: !0 }, ci = { ...ot, ...Wo, ...jt, falseIcon: void 0, icons: !0, trueIcon: void 0 }, di = { ...ot, ...Bl, ...jt, clearIcon: void 0, clearable: !1, hideSelected: !0, itemTitle: "title", itemValue: "value", items: () => [], menu: !0, variant: "underlined" }, pi = { ...ot, ...Wo, icons: !0, falseIcon: "" }, vi = { ...Bl, ...jt, ...ot, autoGrow: !0, rows: 1, truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, Mo = { ...ot, ...Bl, ...jt, truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, fi = { fa: { checkboxFalse: "$checkboxOff", checkboxTrue: "far fa-square-check", clear: "$clear", false: "$close", loading: "fa-circle-notch", save: "fa-floppy-disk", true: "$complete" }, mdi: { checkboxFalse: "$checkboxOff", checkboxTrue: "mdi:mdi-checkbox-outline", clear: "$clear", false: "$close", loading: "mdi-loading", save: "mdi-content-save", true: "$complete" } }, We = (e) => {
  const { icon: t, iconOptions: n, name: l } = e;
  if (t)
    return t;
  const a = fi[n == null ? void 0 : n.defaultSet];
  if (!a)
    throw new Error(`VInlineFields: No VInlineFields default ${n == null ? void 0 : n.defaultSet} icon set found for ${l}. Please set the icon prop.`);
  const i = a[l];
  if (!i)
    throw new Error(`VInlineFields: No ${l} icon found. Please set the icon prop, or set the default icon set to 'mdi' or 'fa'`);
  return i;
};
function H(e, t) {
  return (n) => Object.keys(e).reduce((l, a) => {
    const i = typeof e[a] == "object" && e[a] != null && !Array.isArray(e[a]) ? e[a] : { type: e[a] };
    return l[a] = n && a in n ? { ...i, default: n[a] } : i, t && !l[a].source && (l[a].source = t), l;
  }, {});
}
const se = H({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component"), $e = typeof window < "u", xl = $e && "IntersectionObserver" in window;
function Nl(e, t, n) {
  const l = t.length - 1;
  if (l < 0)
    return e === void 0 ? n : e;
  for (let a = 0; a < l; a++) {
    if (e == null)
      return n;
    e = e[t[a]];
  }
  return e == null || e[t[l]] === void 0 ? n : e[t[l]];
}
function at(e, t) {
  if (e === t)
    return !0;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t))
    return !1;
  const n = Object.keys(e);
  return n.length === Object.keys(t).length && n.every((l) => at(e[l], t[l]));
}
function Xe(e, t, n) {
  if (t === !0)
    return e === void 0 ? n : e;
  if (t == null || typeof t == "boolean")
    return n;
  if (e !== Object(e)) {
    if (typeof t != "function")
      return n;
    const a = t(e, n);
    return a === void 0 ? n : a;
  }
  if (typeof t == "string")
    return function(a, i, c) {
      return a != null && i && typeof i == "string" ? a[i] !== void 0 ? a[i] : Nl(a, (i = (i = i.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), c) : c;
    }(e, t, n);
  if (Array.isArray(t))
    return Nl(e, t, n);
  if (typeof t != "function")
    return n;
  const l = t(e, n);
  return l === void 0 ? n : l;
}
function te(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0;
}
function ll(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function wt(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const jl = Object.freeze({ enter: 13, tab: 9, delete: 46, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39, end: 35, home: 36, del: 46, backspace: 8, insert: 45, pageup: 33, pagedown: 34, shift: 16 });
function Yt(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function Ro(e, t) {
  const n = {}, l = new Set(Object.keys(e));
  for (const a of t)
    l.has(a) && (n[a] = e[a]);
  return n;
}
function Gl(e, t, n) {
  const l = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    t.some((c) => c instanceof RegExp ? c.test(i) : c === i) && !(n != null && n.some((c) => c === i)) ? l[i] = e[i] : a[i] = e[i];
  return [l, a];
}
function bn(e, t) {
  const n = { ...e };
  return t.forEach((l) => delete n[l]), n;
}
const No = /^on[^a-z]/, ol = (e) => No.test(e), yi = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function it(e) {
  const [t, n] = Gl(e, [No]), l = bn(t, yi), [a, i] = Gl(n, ["class", "style", "id", /^data-/]);
  return Object.assign(a, t), Object.assign(i, l), [a, i];
}
function Ke(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function An(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function ql(e, t) {
  return e + (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length));
}
function Bn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const l = {};
  for (const a in e)
    l[a] = e[a];
  for (const a in t) {
    const i = e[a], c = t[a];
    ll(i) && ll(c) ? l[a] = Bn(i, c, n) : Array.isArray(i) && Array.isArray(c) && n ? l[a] = n(i, c) : l[a] = c;
  }
  return l;
}
function jo(e) {
  return e.map((t) => t.type === fe ? jo(t.children) : t).flat();
}
function pn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (pn.cache.has(e))
    return pn.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return pn.cache.set(e, t), t;
}
function Bt(e, t) {
  if (!t || typeof t != "object")
    return [];
  if (Array.isArray(t))
    return t.map((n) => Bt(e, n)).flat(1);
  if (Array.isArray(t.children))
    return t.children.map((n) => Bt(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertySymbols(t.component.provides).includes(e))
      return [t.component];
    if (t.component.subTree)
      return Bt(e, t.component.subTree).flat(1);
  }
  return [];
}
function kl(e) {
  const t = Le({}), n = v(e);
  return Ge(() => {
    for (const l in n.value)
      t[l] = n.value[l];
  }, { flush: "sync" }), Eo(t);
}
function Ft(e, t) {
  return e.includes(t);
}
function Ul(e) {
  return e[2].toLowerCase() + e.slice(3);
}
pn.cache = /* @__PURE__ */ new Map();
const je = () => [Function, Array];
function Hl(e, t) {
  return !!(e[t = "on" + To(t)] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function Go(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
    n[l - 1] = arguments[l];
  if (Array.isArray(e))
    for (const a of e)
      a(...n);
  else
    typeof e == "function" && e(...n);
}
function al(e) {
  let t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
  const n = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((l) => `${l}${t ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(n)];
}
function qo(e, t, n) {
  let l, a = e.indexOf(document.activeElement);
  const i = t === "next" ? 1 : -1;
  do
    a += i, l = e[a];
  while ((!l || l.offsetParent == null || !((n == null ? void 0 : n(l)) ?? 1)) && a < e.length && a >= 0);
  return l;
}
function Vt(e, t) {
  var l, a, i, c;
  const n = al(e);
  if (t)
    if (t === "first")
      (l = n[0]) == null || l.focus();
    else if (t === "last")
      (a = n.at(-1)) == null || a.focus();
    else if (typeof t == "number")
      (i = n[t]) == null || i.focus();
    else {
      const s = qo(n, t);
      s ? s.focus() : Vt(e, t === "next" ? "first" : "last");
    }
  else
    e !== document.activeElement && e.contains(document.activeElement) || ((c = n[0]) == null || c.focus());
}
function At(e, t) {
  if (!($e && typeof CSS < "u" && CSS.supports !== void 0 && CSS.supports(`selector(${t})`)))
    return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function Uo(e) {
  return e.some((t) => !ni(t) || t.type !== ti && (t.type !== fe || Uo(t.children))) ? e : null;
}
const Ho = ["top", "bottom"], mi = ["start", "end", "left", "right"];
function il(e, t) {
  let [n, l] = e.split(" ");
  return l || (l = Ft(Ho, n) ? "start" : Ft(mi, n) ? "top" : "center"), { side: Yl(n, t), align: Yl(l, t) };
}
function Yl(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function Xt(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function Kt(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function Xl(e) {
  return { side: e.align, align: e.side };
}
function Kl(e) {
  return Ft(Ho, e.side) ? "y" : "x";
}
class vn {
  constructor(t) {
    let { x: n, y: l, width: a, height: i } = t;
    this.x = n, this.y = l, this.width = a, this.height = i;
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
function Jl(e, t) {
  return { x: { before: Math.max(0, t.left - e.left), after: Math.max(0, e.right - t.right) }, y: { before: Math.max(0, t.top - e.top), after: Math.max(0, e.bottom - t.bottom) } };
}
function Yo(e) {
  return Array.isArray(e) ? new vn({ x: e[0], y: e[1], width: 0, height: 0 }) : e.getBoundingClientRect();
}
function wl(e) {
  const t = e.getBoundingClientRect(), n = getComputedStyle(e), l = n.transform;
  if (l) {
    let a, i, c, s, o;
    if (l.startsWith("matrix3d("))
      a = l.slice(9, -1).split(/, /), i = +a[0], c = +a[5], s = +a[12], o = +a[13];
    else {
      if (!l.startsWith("matrix("))
        return new vn(t);
      a = l.slice(7, -1).split(/, /), i = +a[0], c = +a[3], s = +a[4], o = +a[5];
    }
    const r = n.transformOrigin, y = t.x - s - (1 - i) * parseFloat(r), m = t.y - o - (1 - c) * parseFloat(r.slice(r.indexOf(" ") + 1)), f = i ? t.width / i : e.offsetWidth + 1, p = c ? t.height / c : e.offsetHeight + 1;
    return new vn({ x: y, y: m, width: f, height: p });
  }
  return new vn(t);
}
function xn(e, t, n) {
  if (e.animate === void 0)
    return { finished: Promise.resolve() };
  let l;
  try {
    l = e.animate(t, n);
  } catch {
    return { finished: Promise.resolve() };
  }
  return l.finished === void 0 && (l.finished = new Promise((a) => {
    l.onfinish = () => {
      a(l);
    };
  })), l;
}
const ht = /* @__PURE__ */ new WeakMap(), Sn = 2.4, Zl = 0.2126729, Ql = 0.7151522, eo = 0.072175, gi = 0.55, hi = 0.58, bi = 0.57, Ci = 0.62, bt = 0.03, no = 1.45, Ii = 5e-4, Si = 1.25, Bi = 1.25, to = 0.078, lo = 12.82051282051282, Ct = 0.06, oo = 1e-3;
function ao(e, t) {
  const n = (e.r / 255) ** Sn, l = (e.g / 255) ** Sn, a = (e.b / 255) ** Sn, i = (t.r / 255) ** Sn, c = (t.g / 255) ** Sn, s = (t.b / 255) ** Sn;
  let o, r = n * Zl + l * Ql + a * eo, y = i * Zl + c * Ql + s * eo;
  if (r <= bt && (r += (bt - r) ** no), y <= bt && (y += (bt - y) ** no), Math.abs(y - r) < Ii)
    return 0;
  if (y > r) {
    const m = (y ** gi - r ** hi) * Si;
    o = m < oo ? 0 : m < to ? m - m * lo * Ct : m - Ct;
  } else {
    const m = (y ** Ci - r ** bi) * Bi;
    o = m > -oo ? 0 : m > -to ? m - m * lo * Ct : m + Ct;
  }
  return 100 * o;
}
function Kn(e) {
  Rt(`Vuetify: ${e}`);
}
function Jt(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
const io = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, xi = { rgb: (e, t, n, l) => ({ r: e, g: t, b: n, a: l }), rgba: (e, t, n, l) => ({ r: e, g: t, b: n, a: l }), hsl: (e, t, n, l) => ro({ h: e, s: t, l: n, a: l }), hsla: (e, t, n, l) => ro({ h: e, s: t, l: n, a: l }), hsv: (e, t, n, l) => Zn({ h: e, s: t, v: n, a: l }), hsva: (e, t, n, l) => Zn({ h: e, s: t, v: n, a: l }) };
function Hn(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && Kn(`'${e}' is not a valid hex color`), { r: (16711680 & e) >> 16, g: (65280 & e) >> 8, b: 255 & e };
  if (typeof e == "string" && io.test(e)) {
    const { groups: t } = e.match(io), { fn: n, values: l } = t, a = l.split(/,\s*/).map((i) => i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(i) / 100 : parseFloat(i));
    return xi[n](...a);
  }
  if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((l) => l + l).join("") : [6, 8].includes(t.length) || Kn(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && Kn(`'${e}' is not a valid hex(a) color`), function(l) {
      l = function(o) {
        return o.startsWith("#") && (o = o.slice(1)), o = o.replace(/([^0-9a-f])/gi, "F"), (o.length === 3 || o.length === 4) && (o = o.split("").map((r) => r + r).join("")), o.length !== 6 && (o = ql(ql(o, 6), 8, "F")), o;
      }(l);
      let [a, i, c, s] = function(o) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        const y = [];
        let m = 0;
        for (; m < o.length; )
          y.push(o.substr(m, r)), m += r;
        return y;
      }(l, 2).map((o) => parseInt(o, 16));
      return s = s === void 0 ? s : s / 255, { r: a, g: i, b: c, a: s };
    }(t);
  }
  if (typeof e == "object") {
    if (Yt(e, ["r", "g", "b"]))
      return e;
    if (Yt(e, ["h", "s", "l"]))
      return Zn(Xo(e));
    if (Yt(e, ["h", "s", "v"]))
      return Zn(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Zn(e) {
  const { h: t, s: n, v: l, a } = e, i = (s) => {
    const o = (s + t / 60) % 6;
    return l - l * n * Math.max(Math.min(o, 4 - o, 1), 0);
  }, c = [i(5), i(3), i(1)].map((s) => Math.round(255 * s));
  return { r: c[0], g: c[1], b: c[2], a };
}
function ro(e) {
  return Zn(Xo(e));
}
function Xo(e) {
  const { h: t, s: n, l, a } = e, i = l + n * Math.min(l, 1 - l);
  return { h: t, s: i === 0 ? 0 : 2 - 2 * l / i, v: i, a };
}
const _t = Symbol.for("vuetify:defaults");
function Fl() {
  const e = ve(_t);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Rn(e, t) {
  const n = Fl(), l = M(e), a = v(() => {
    if (u(t == null ? void 0 : t.disabled))
      return n.value;
    const i = u(t == null ? void 0 : t.scoped), c = u(t == null ? void 0 : t.reset), s = u(t == null ? void 0 : t.root);
    if (l.value == null && !(i || c || s))
      return n.value;
    let o = Bn(l.value, { prev: n.value });
    if (i)
      return o;
    if (c || s) {
      const r = Number(c || 1 / 0);
      for (let y = 0; y <= r && o && "prev" in o; y++)
        o = o.prev;
      return o && typeof s == "string" && s in o && (o = Bn(Bn(o, { prev: o }), o[s])), o;
    }
    return o.prev ? Bn(o.prev, o) : o;
  });
  return De(_t, a), a;
}
function ki() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Fl();
  const l = Se("useDefaults");
  if (t = t ?? l.type.name ?? l.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const a = v(() => {
    var s;
    return (s = n.value) == null ? void 0 : s[e._as ?? t];
  }), i = new Proxy(e, { get(s, o) {
    var y, m, f, p;
    const r = Reflect.get(s, o);
    return o === "class" || o === "style" ? [(y = a.value) == null ? void 0 : y[o], r].filter((g) => g != null) : typeof o != "string" || function(g, h) {
      var b, B;
      return ((b = g.props) == null ? void 0 : b[h]) !== void 0 || ((B = g.props) == null ? void 0 : B[pn(h)]) !== void 0;
    }(l.vnode, o) ? r : ((m = a.value) == null ? void 0 : m[o]) ?? ((p = (f = n.value) == null ? void 0 : f.global) == null ? void 0 : p[o]) ?? r;
  } }), c = re();
  return Ge(() => {
    if (a.value) {
      const s = Object.entries(a.value).filter((o) => {
        let [r] = o;
        return r.startsWith(r[0].toUpperCase());
      });
      c.value = s.length ? Object.fromEntries(s) : void 0;
    } else
      c.value = void 0;
  }), { props: i, provideSubDefaults: function() {
    const s = function(o) {
      let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Se("injectSelf");
      const { provides: y } = r;
      if (y && o in y)
        return y[o];
    }(_t, l);
    De(_t, v(() => c.value ? Bn((s == null ? void 0 : s.value) ?? {}, c.value) : s == null ? void 0 : s.value));
  } };
}
function Qn(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return Kn("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = H(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(n) {
      return Ro(n, t);
    }, e.props._as = String, e.setup = function(n, l) {
      const a = Fl();
      if (!a.value)
        return e._setup(n, l);
      const { props: i, provideSubDefaults: c } = ki(n, n._as ?? e.name, a), s = e._setup(i, l);
      return c(), s;
    };
  }
  return e;
}
function Q() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (t) => (e ? Qn : Ne)(t);
}
function rt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return Q()({ name: n ?? To(zo(e.replace(/__/g, "-"))), props: { tag: { type: String, default: t }, ...se() }, setup(l, a) {
    let { slots: i } = a;
    return () => {
      var c;
      return Nt(l.tag, { class: [e, l.class], style: l.style }, (c = i.default) == null ? void 0 : c.call(i));
    };
  } });
}
function Ko(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; )
      e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({ composed: !0 }) !== document ? null : t;
}
const Ot = "cubic-bezier(0.4, 0, 0.2, 1)";
function Se(e, t) {
  const n = li();
  if (!n)
    throw new Error(`[Vuetify] ${e} ${t || "must be called from inside a setup function"}`);
  return n;
}
function qe() {
  const e = Se(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return pn((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let Jo = 0, xt = /* @__PURE__ */ new WeakMap();
function Me() {
  const e = Se("getUid");
  if (xt.has(e))
    return xt.get(e);
  {
    const t = Jo++;
    return xt.set(e, t), t;
  }
}
function Zo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
  for (; e; ) {
    if (t ? wi(e) : Vl(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Pt(e, t) {
  const n = [];
  if (t && e && !t.contains(e))
    return n;
  for (; e && (Vl(e) && n.push(e), e !== t); )
    e = e.parentElement;
  return n;
}
function Vl(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const t = window.getComputedStyle(e);
  return t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function wi(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function ae(e) {
  Se("useRender").render = e;
}
function Al(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = M(), l = M();
  if ($e) {
    const a = new ResizeObserver((i) => {
      e == null || e(i, a), i.length && (l.value = t === "content" ? i[0].contentRect : i[0].target.getBoundingClientRect());
    });
    Ze(() => {
      a.disconnect();
    }), K(n, (i, c) => {
      c && (a.unobserve(wt(c)), l.value = void 0), i && a.observe(wt(i));
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: bl(l) };
}
function fn(e, t) {
  let n;
  function l() {
    n = Cl(), n.run(() => t.length ? t(() => {
      n == null || n.stop(), l();
    }) : t());
  }
  K(e, (a) => {
    a && !n ? l() : a || (n == null || n.stop(), n = void 0);
  }, { immediate: !0 }), ke(() => {
    n == null || n.stop();
  });
}
function me(e, t, n) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (y) => y, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (y) => y;
  const i = Se("useProxiedModel"), c = M(e[t] !== void 0 ? e[t] : n), s = pn(t), o = v(s !== t ? () => {
    var y, m, f, p;
    return e[t], !(!((y = i.vnode.props) != null && y.hasOwnProperty(t)) && !((m = i.vnode.props) != null && m.hasOwnProperty(s)) || !((f = i.vnode.props) != null && f.hasOwnProperty(`onUpdate:${t}`)) && !((p = i.vnode.props) != null && p.hasOwnProperty(`onUpdate:${s}`)));
  } : () => {
    var y, m;
    return e[t], !(!((y = i.vnode.props) != null && y.hasOwnProperty(t)) || !((m = i.vnode.props) != null && m.hasOwnProperty(`onUpdate:${t}`)));
  });
  fn(() => !o.value, () => {
    K(() => e[t], (y) => {
      c.value = y;
    });
  });
  const r = v({ get() {
    const y = e[t];
    return l(o.value ? y : c.value);
  }, set(y) {
    const m = a(y), f = on(o.value ? e[t] : c.value);
    f !== m && l(f) !== y && (c.value = m, i == null || i.emit(`update:${t}`, m));
  } });
  return Object.defineProperty(r, "externalValue", { get: () => o.value ? e[t] : c.value }), r;
}
Me.reset = () => {
  Jo = 0, xt = /* @__PURE__ */ new WeakMap();
};
const Qo = Symbol.for("vuetify:locale");
function _l() {
  const e = ve(Qo);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function st() {
  const e = ve(Qo);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const so = Symbol.for("vuetify:theme"), Be = H({ theme: String }, "theme");
function _e(e) {
  Se("provideTheme");
  const t = ve(so, null);
  if (!t)
    throw new Error("Could not find Vuetify theme injection");
  const n = v(() => e.theme ?? t.name.value), l = v(() => t.themes.value[n.value]), a = v(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), i = { ...t, name: n, current: l, themeClasses: a };
  return De(so, i), i;
}
const ze = H({ tag: { type: String, default: "div" } }, "tag"), Fi = H({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function Ee(e, t, n) {
  return Q()({ name: e, props: Fi({ mode: n, origin: t }), setup(l, a) {
    let { slots: i } = a;
    const c = { onBeforeEnter(s) {
      l.origin && (s.style.transformOrigin = l.origin);
    }, onLeave(s) {
      if (l.leaveAbsolute) {
        const { offsetTop: o, offsetLeft: r, offsetWidth: y, offsetHeight: m } = s;
        s._transitionInitialStyles = { position: s.style.position, top: s.style.top, left: s.style.left, width: s.style.width, height: s.style.height }, s.style.position = "absolute", s.style.top = `${o}px`, s.style.left = `${r}px`, s.style.width = `${y}px`, s.style.height = `${m}px`;
      }
      l.hideOnLeave && s.style.setProperty("display", "none", "important");
    }, onAfterLeave(s) {
      if (l.leaveAbsolute && (s != null && s._transitionInitialStyles)) {
        const { position: o, top: r, left: y, width: m, height: f } = s._transitionInitialStyles;
        delete s._transitionInitialStyles, s.style.position = o || "", s.style.top = r || "", s.style.left = y || "", s.style.width = m || "", s.style.height = f || "";
      }
    } };
    return () => {
      const s = l.group ? oi : gn;
      return Nt(s, { name: l.disabled ? "" : e, css: !l.disabled, ...l.group ? void 0 : { mode: l.mode }, ...l.disabled ? {} : c }, i.default);
    };
  } });
}
function ea(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return Q()({ name: e, props: { mode: { type: String, default: n }, disabled: Boolean }, setup(l, a) {
    let { slots: i } = a;
    return () => Nt(gn, { name: l.disabled ? "" : e, css: !l.disabled, ...l.disabled ? {} : t }, i.default);
  } });
}
function na() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", n = zo(`offset-${t}`);
  return { onBeforeEnter(i) {
    i._parent = i.parentNode, i._initialStyle = { transition: i.style.transition, overflow: i.style.overflow, [t]: i.style[t] };
  }, onEnter(i) {
    const c = i._initialStyle;
    i.style.setProperty("transition", "none", "important"), i.style.overflow = "hidden";
    const s = `${i[n]}px`;
    i.style[t] = "0", i.offsetHeight, i.style.transition = c.transition, e && i._parent && i._parent.classList.add(e), requestAnimationFrame(() => {
      i.style[t] = s;
    });
  }, onAfterEnter: a, onEnterCancelled: a, onLeave(i) {
    i._initialStyle = { transition: "", overflow: i.style.overflow, [t]: i.style[t] }, i.style.overflow = "hidden", i.style[t] = `${i[n]}px`, i.offsetHeight, requestAnimationFrame(() => i.style[t] = "0");
  }, onAfterLeave: l, onLeaveCancelled: l };
  function l(i) {
    e && i._parent && i._parent.classList.remove(e), a(i);
  }
  function a(i) {
    const c = i._initialStyle[t];
    i.style.overflow = i._initialStyle.overflow, c != null && (i.style[t] = c), delete i._initialStyle;
  }
}
const Vi = H({ target: [Object, Array] }, "v-dialog-transition"), ta = Q()({ name: "VDialogTransition", props: Vi(), setup(e, t) {
  let { slots: n } = t;
  const l = { onBeforeEnter(a) {
    a.style.pointerEvents = "none", a.style.visibility = "hidden";
  }, async onEnter(a, i) {
    var f;
    await new Promise((p) => requestAnimationFrame(p)), await new Promise((p) => requestAnimationFrame(p)), a.style.visibility = "";
    const { x: c, y: s, sx: o, sy: r, speed: y } = co(e.target, a), m = xn(a, [{ transform: `translate(${c}px, ${s}px) scale(${o}, ${r})`, opacity: 0 }, {}], { duration: 225 * y, easing: "cubic-bezier(0.0, 0, 0.2, 1)" });
    (f = uo(a)) == null || f.forEach((p) => {
      xn(p, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * y, easing: Ot });
    }), m.finished.then(() => i());
  }, onAfterEnter(a) {
    a.style.removeProperty("pointer-events");
  }, onBeforeLeave(a) {
    a.style.pointerEvents = "none";
  }, async onLeave(a, i) {
    var m;
    await new Promise((f) => requestAnimationFrame(f));
    const { x: c, y: s, sx: o, sy: r, speed: y } = co(e.target, a);
    xn(a, [{}, { transform: `translate(${c}px, ${s}px) scale(${o}, ${r})`, opacity: 0 }], { duration: 125 * y, easing: "cubic-bezier(0.4, 0, 1, 1)" }).finished.then(() => i()), (m = uo(a)) == null || m.forEach((f) => {
      xn(f, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * y, easing: Ot });
    });
  }, onAfterLeave(a) {
    a.style.removeProperty("pointer-events");
  } };
  return () => e.target ? d(gn, Z({ name: "dialog-transition" }, l, { css: !1 }), n) : d(gn, { name: "dialog-transition" }, n);
} });
function uo(e) {
  var n;
  const t = (n = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : n.children;
  return t && [...t];
}
function co(e, t) {
  const n = Yo(e), l = wl(t), [a, i] = getComputedStyle(t).transformOrigin.split(" ").map((B) => parseFloat(B)), [c, s] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let o = n.left + n.width / 2;
  c === "left" || s === "left" ? o -= n.width / 2 : c !== "right" && s !== "right" || (o += n.width / 2);
  let r = n.top + n.height / 2;
  c === "top" || s === "top" ? r -= n.height / 2 : c !== "bottom" && s !== "bottom" || (r += n.height / 2);
  const y = n.width / l.width, m = n.height / l.height, f = Math.max(1, y, m), p = y / f || 0, g = m / f || 0, h = l.width * l.height / (window.innerWidth * window.innerHeight), b = h > 0.12 ? Math.min(1.5, 10 * (h - 0.12) + 1) : 1;
  return { x: o - (a + l.left), y: r - (i + l.top), sx: p, sy: g, speed: b };
}
Ee("fab-transition", "center center", "out-in"), Ee("dialog-bottom-transition"), Ee("dialog-top-transition"), Ee("fade-transition");
const Ai = Ee("scale-transition");
Ee("scroll-x-transition"), Ee("scroll-x-reverse-transition"), Ee("scroll-y-transition"), Ee("scroll-y-reverse-transition"), Ee("slide-x-transition"), Ee("slide-x-reverse-transition");
const la = Ee("slide-y-transition");
Ee("slide-y-reverse-transition");
const _i = ea("expand-transition", na()), oa = ea("expand-x-transition", na("", !0)), Oi = H({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), we = Q(!1)({ name: "VDefaultsProvider", props: Oi(), setup(e, t) {
  let { slots: n } = t;
  const { defaults: l, disabled: a, reset: i, root: c, scoped: s } = Eo(e);
  return Rn(l, { reset: i, root: c, scoped: s, disabled: a }), () => {
    var o;
    return (o = n.default) == null ? void 0 : o.call(n);
  };
} }), Cn = H({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function In(e) {
  return { dimensionStyles: v(() => ({ height: te(e.height), maxHeight: te(e.maxHeight), maxWidth: te(e.maxWidth), minHeight: te(e.minHeight), minWidth: te(e.minWidth), width: te(e.width) })) };
}
const aa = H({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...se(), ...Cn() }, "VResponsive"), po = Q()({ name: "VResponsive", props: aa(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: l } = function(i) {
    return { aspectStyles: v(() => {
      const c = Number(i.aspectRatio);
      return c ? { paddingBottom: String(1 / c * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: a } = In(e);
  return ae(() => {
    var i;
    return d("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [a.value, e.style] }, [d("div", { class: "v-responsive__sizer", style: l.value }, null), (i = n.additional) == null ? void 0 : i.call(n), n.default && d("div", { class: ["v-responsive__content", e.contentClass] }, [n.default()])]);
  }), {};
} }), ut = H({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), ln = (e, t) => {
  let { slots: n } = t;
  const { transition: l, disabled: a, ...i } = e, { component: c = gn, ...s } = typeof l == "object" ? l : {};
  return Nt(c, Z(typeof l == "string" ? { name: a ? "" : l } : s, i, { disabled: a }), n);
};
function vo(e, t) {
  var l;
  const n = (l = e._observe) == null ? void 0 : l[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const Ol = { mounted: function(e, t) {
  if (!xl)
    return;
  const n = t.modifiers || {}, l = t.value, { handler: a, options: i } = typeof l == "object" ? l : { handler: l, options: {} }, c = new IntersectionObserver(function() {
    var m;
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], o = arguments.length > 1 ? arguments[1] : void 0;
    const r = (m = e._observe) == null ? void 0 : m[t.instance.$.uid];
    if (!r)
      return;
    const y = s.some((f) => f.isIntersecting);
    !a || n.quiet && !r.init || n.once && !y && !r.init || a(y, s, o), y && n.once ? vo(e, t) : r.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = { init: !1, observer: c }, c.observe(e);
}, unmounted: vo }, Pi = H({ alt: String, cover: Boolean, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...aa(), ...se(), ...ut() }, "VImg"), ia = Q()({ name: "VImg", directives: { intersect: Ol }, props: Pi(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, t) {
  let { emit: n, slots: l } = t;
  const a = Se("VImg"), i = re(""), c = M(), s = re(e.eager ? "loading" : "idle"), o = re(), r = re(), y = v(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), m = v(() => y.value.aspect || o.value / r.value || 0);
  function f(S) {
    if ((!e.eager || !S) && (!xl || S || e.eager)) {
      if (s.value = "loading", y.value.lazySrc) {
        const O = new Image();
        O.src = y.value.lazySrc, B(O, null);
      }
      y.value.src && Ie(() => {
        var O;
        n("loadstart", ((O = c.value) == null ? void 0 : O.currentSrc) || y.value.src), setTimeout(() => {
          var C;
          if (!a.isUnmounted)
            if ((C = c.value) != null && C.complete) {
              if (c.value.naturalWidth || g(), s.value === "error")
                return;
              m.value || B(c.value, null), s.value === "loading" && p();
            } else
              m.value || B(c.value), h();
        });
      });
    }
  }
  function p() {
    var S;
    a.isUnmounted || (h(), B(c.value), s.value = "loaded", n("load", ((S = c.value) == null ? void 0 : S.currentSrc) || y.value.src));
  }
  function g() {
    var S;
    a.isUnmounted || (s.value = "error", n("error", ((S = c.value) == null ? void 0 : S.currentSrc) || y.value.src));
  }
  function h() {
    const S = c.value;
    S && (i.value = S.currentSrc || S.src);
  }
  K(() => e.src, () => {
    f(s.value !== "idle");
  }), K(m, (S, O) => {
    !S && O && c.value && B(c.value);
  }), Do(() => f());
  let b = -1;
  function B(S) {
    let O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const C = () => {
      if (clearTimeout(b), a.isUnmounted)
        return;
      const { naturalHeight: k, naturalWidth: A } = S;
      k || A ? (o.value = A, r.value = k) : S.complete || s.value !== "loading" || O == null ? (S.currentSrc.endsWith(".svg") || S.currentSrc.startsWith("data:image/svg+xml")) && (o.value = 1, r.value = 1) : b = window.setTimeout(C, O);
    };
    C();
  }
  Ze(() => {
    clearTimeout(b);
  });
  const V = v(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), _ = () => {
    var C;
    if (!y.value.src || s.value === "idle")
      return null;
    const S = d("img", { class: ["v-img__img", V.value], style: { objectPosition: e.position }, src: y.value.src, srcset: y.value.srcset, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: c, onLoad: p, onError: g }, null), O = (C = l.sources) == null ? void 0 : C.call(l);
    return d(ln, { transition: e.transition, appear: !0 }, { default: () => [Fe(O ? d("picture", { class: "v-img__picture" }, [O, S]) : S, [[Wn, s.value === "loaded"]])] });
  }, U = () => d(ln, { transition: e.transition }, { default: () => [y.value.lazySrc && s.value !== "loaded" && d("img", { class: ["v-img__img", "v-img__img--preload", V.value], style: { objectPosition: e.position }, src: y.value.lazySrc, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), z = () => l.placeholder ? d(ln, { transition: e.transition, appear: !0 }, { default: () => [(s.value === "loading" || s.value === "error" && !l.error) && d("div", { class: "v-img__placeholder" }, [l.placeholder()])] }) : null, D = () => l.error ? d(ln, { transition: e.transition, appear: !0 }, { default: () => [s.value === "error" && d("div", { class: "v-img__error" }, [l.error()])] }) : null, R = () => e.gradient ? d("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, E = re(!1);
  {
    const S = K(m, (O) => {
      O && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          E.value = !0;
        });
      }), S());
    });
  }
  return ae(() => {
    const S = po.filterProps(e);
    return Fe(d(po, Z({ class: ["v-img", { "v-img--booting": !E.value }, e.class], style: [{ width: te(e.width === "auto" ? o.value : e.width) }, e.style] }, S, { aspectRatio: m.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => d(fe, null, [d(_, null, null), d(U, null, null), d(R, null, null), d(z, null, null), d(D, null, null)]), default: l.default }), [[Qe("intersect"), { handler: f, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: i, image: c, state: s, naturalWidth: o, naturalHeight: r };
} }), Nn = H({ border: [Boolean, Number, String] }, "border");
function jn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : qe();
  return { borderClasses: v(() => {
    const n = hn(e) ? e.value : e.border, l = [];
    if (n === !0 || n === "")
      l.push(`${t}--border`);
    else if (typeof n == "string" || n === 0)
      for (const a of String(n).split(" "))
        l.push(`border-${a}`);
    return l;
  }) };
}
function Pl(e) {
  return kl(() => {
    const t = [], n = {};
    if (e.value.background)
      if (Jt(e.value.background)) {
        if (n.backgroundColor = e.value.background, !e.value.text && Jt(l = e.value.background) && !/^((rgb|hsl)a?\()?var\(--/.test(l)) {
          const a = Hn(e.value.background);
          if (a.a == null || a.a === 1) {
            const i = function(c) {
              const s = Math.abs(ao(Hn(0), Hn(c)));
              return Math.abs(ao(Hn(16777215), Hn(c))) > Math.min(s, 50) ? "#fff" : "#000";
            }(a);
            n.color = i, n.caretColor = i;
          }
        }
      } else
        t.push(`bg-${e.value.background}`);
    var l;
    return e.value.text && (Jt(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), { colorClasses: t, colorStyles: n };
  });
}
function Je(e, t) {
  const n = v(() => ({ text: hn(e) ? e.value : t ? e[t] : null })), { colorClasses: l, colorStyles: a } = Pl(n);
  return { textColorClasses: l, textColorStyles: a };
}
function Dn(e, t) {
  const n = v(() => ({ background: hn(e) ? e.value : t ? e[t] : null })), { colorClasses: l, colorStyles: a } = Pl(n);
  return { backgroundColorClasses: l, backgroundColorStyles: a };
}
const Gn = H({ elevation: { type: [Number, String], validator(e) {
  const t = parseInt(e);
  return !isNaN(t) && t >= 0 && t <= 24;
} } }, "elevation");
function qn(e) {
  return { elevationClasses: v(() => {
    const t = hn(e) ? e.value : e.elevation, n = [];
    return t == null || n.push(`elevation-${t}`), n;
  }) };
}
const en = H({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function nn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : qe();
  return { roundedClasses: v(() => {
    const n = hn(e) ? e.value : e.rounded, l = [];
    if (n === !0 || n === "")
      l.push(`${t}--rounded`);
    else if (typeof n == "string" || n === 0)
      for (const a of String(n).split(" "))
        l.push(`rounded-${a}`);
    return l;
  }) };
}
const $i = [null, "default", "comfortable", "compact"], Ue = H({ density: { type: String, default: "default", validator: (e) => $i.includes(e) } }, "density");
function tn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : qe();
  return { densityClasses: v(() => `${t}--density-${e.density}`) };
}
const Ei = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function ct(e, t) {
  return d(fe, null, [e && d("span", { key: "overlay", class: `${t}__overlay` }, null), d("span", { key: "underlay", class: `${t}__underlay` }, null)]);
}
const rn = H({ color: String, variant: { type: String, default: "elevated", validator: (e) => Ei.includes(e) } }, "variant");
function dt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : qe();
  const n = v(() => {
    const { variant: i } = u(e);
    return `${t}--variant-${i}`;
  }), { colorClasses: l, colorStyles: a } = Pl(v(() => {
    const { variant: i, color: c } = u(e);
    return { [["elevated", "flat"].includes(i) ? "background" : "text"]: c };
  }));
  return { colorClasses: l, colorStyles: a, variantClasses: n };
}
const ra = H({ divided: Boolean, ...Nn(), ...se(), ...Ue(), ...Gn(), ...en(), ...ze(), ...Be(), ...rn() }, "VBtnGroup"), fo = Q()({ name: "VBtnGroup", props: ra(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = _e(e), { densityClasses: a } = tn(e), { borderClasses: i } = jn(e), { elevationClasses: c } = qn(e), { roundedClasses: s } = nn(e);
  Rn({ VBtn: { height: "auto", color: ne(e, "color"), density: ne(e, "density"), flat: !0, variant: ne(e, "variant") } }), ae(() => d(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, l.value, i.value, a.value, c.value, s.value, e.class], style: e.style }, n));
} }), sa = H({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), ua = H({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function ca(e, t) {
  let n = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
  const l = Se("useGroupItem");
  if (!l)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const a = Me();
  De(Symbol.for(`${t.description}:id`), a);
  const i = ve(t, null);
  if (!i) {
    if (!n)
      return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const c = ne(e, "value"), s = v(() => !(!i.disabled.value && !e.disabled));
  i.register({ id: a, value: c, disabled: s }, l), Ze(() => {
    i.unregister(a);
  });
  const o = v(() => i.isSelected(a)), r = v(() => o.value && [i.selectedClass.value, e.selectedClass]);
  return K(o, (y) => {
    l.emit("group:selected", { value: y });
  }), { id: a, isSelected: o, toggle: () => i.select(a, !o.value), select: (y) => i.select(a, y), selectedClass: r, value: c, disabled: s, group: i };
}
function da(e, t) {
  let n = !1;
  const l = Le([]), a = me(e, "modelValue", [], (r) => r == null ? [] : yo(l, Ke(r)), (r) => {
    const y = function(m, f) {
      const p = [];
      return f.forEach((g) => {
        const h = m.findIndex((b) => b.id === g);
        if (~h) {
          const b = m[h];
          p.push(b.value != null ? b.value : h);
        }
      }), p;
    }(l, r);
    return e.multiple ? y : y[0];
  }), i = Se("useGroup");
  function c() {
    const r = l.find((y) => !y.disabled);
    r && e.mandatory === "force" && !a.value.length && (a.value = [r.id]);
  }
  function s(r) {
    if (e.multiple && Kn('This method is not supported when using "multiple" prop'), a.value.length) {
      const y = a.value[0], m = l.findIndex((g) => g.id === y);
      let f = (m + r) % l.length, p = l[f];
      for (; p.disabled && f !== m; )
        f = (f + r) % l.length, p = l[f];
      if (p.disabled)
        return;
      a.value = [l[f].id];
    } else {
      const y = l.find((m) => !m.disabled);
      y && (a.value = [y.id]);
    }
  }
  Mn(() => {
    c();
  }), Ze(() => {
    n = !0;
  });
  const o = { register: function(r, y) {
    const m = r, f = Bt(Symbol.for(`${t.description}:id`), i == null ? void 0 : i.vnode).indexOf(y);
    f > -1 ? l.splice(f, 0, m) : l.push(m);
  }, unregister: function(r) {
    if (n)
      return;
    c();
    const y = l.findIndex((m) => m.id === r);
    l.splice(y, 1);
  }, selected: a, select: function(r, y) {
    const m = l.find((f) => f.id === r);
    if (!y || !(m != null && m.disabled))
      if (e.multiple) {
        const f = a.value.slice(), p = f.findIndex((h) => h === r), g = ~p;
        if (y = y ?? !g, g && e.mandatory && f.length <= 1 || !g && e.max != null && f.length + 1 > e.max)
          return;
        p < 0 && y ? f.push(r) : p >= 0 && !y && f.splice(p, 1), a.value = f;
      } else {
        const f = a.value.includes(r);
        if (e.mandatory && f)
          return;
        a.value = y ?? !f ? [r] : [];
      }
  }, disabled: ne(e, "disabled"), prev: () => s(l.length - 1), next: () => s(1), isSelected: (r) => a.value.includes(r), selectedClass: v(() => e.selectedClass), items: v(() => l), getItemIndex: (r) => function(y, m) {
    const f = yo(y, [m]);
    return f.length ? y.findIndex((p) => p.id === f[0]) : -1;
  }(l, r) };
  return De(t, o), o;
}
function yo(e, t) {
  const n = [];
  return t.forEach((l) => {
    const a = e.find((c) => at(l, c.value)), i = e[l];
    (a == null ? void 0 : a.value) != null ? n.push(a.id) : i != null && n.push(i.id);
  }), n;
}
const pa = Symbol.for("vuetify:v-btn-toggle"), Ti = H({ ...ra(), ...sa() }, "VBtnToggle");
Q()({ name: "VBtnToggle", props: Ti(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: l, next: a, prev: i, select: c, selected: s } = da(e, pa);
  return ae(() => {
    const o = fo.filterProps(e);
    return d(fo, Z({ class: ["v-btn-toggle", e.class] }, o, { style: e.style }), { default: () => {
      var r;
      return [(r = n.default) == null ? void 0 : r.call(n, { isSelected: l, next: a, prev: i, select: c, selected: s })];
    } });
  }), { next: a, prev: i, select: c };
} });
const ce = [String, Function, Object, Array], zi = Symbol.for("vuetify:icons"), $t = H({ icon: { type: ce }, tag: { type: String, required: !0 } }, "icon"), mo = Q()({ name: "VComponentIcon", props: $t(), setup(e, t) {
  let { slots: n } = t;
  return () => {
    const l = e.icon;
    return d(e.tag, null, { default: () => {
      var a;
      return [e.icon ? d(l, null, null) : (a = n.default) == null ? void 0 : a.call(n)];
    } });
  };
} }), Di = Qn({ name: "VSvgIcon", inheritAttrs: !1, props: $t(), setup(e, t) {
  let { attrs: n } = t;
  return () => d(e.tag, Z(n, { style: null }), { default: () => [d("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((l) => Array.isArray(l) ? d("path", { d: l[0], "fill-opacity": l[1] }, null) : d("path", { d: l }, null)) : d("path", { d: e.icon }, null)])] });
} });
Qn({ name: "VLigatureIcon", props: $t(), setup: (e) => () => d(e.tag, null, { default: () => [e.icon] }) }), Qn({ name: "VClassIcon", props: $t(), setup: (e) => () => d(e.tag, { class: e.icon }, null) });
const Li = ["x-small", "small", "default", "large", "x-large"], pt = H({ size: { type: [String, Number], default: "default" } }, "size");
function vt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : qe();
  return kl(() => {
    let n, l;
    return Ft(Li, e.size) ? n = `${t}--size-${e.size}` : e.size && (l = { width: te(e.size), height: te(e.size) }), { sizeClasses: n, sizeStyles: l };
  });
}
const Wi = H({ color: String, start: Boolean, end: Boolean, icon: ce, ...se(), ...pt(), ...ze({ tag: "i" }), ...Be() }, "VIcon"), de = Q()({ name: "VIcon", props: Wi(), setup(e, t) {
  let { attrs: n, slots: l } = t;
  const a = M(), { themeClasses: i } = _e(e), { iconData: c } = ((y) => {
    const m = ve(zi);
    if (!m)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: v(() => {
      var b;
      const f = u(y);
      if (!f)
        return { component: mo };
      let p = f;
      if (typeof p == "string" && (p = p.trim(), p.startsWith("$") && (p = (b = m.aliases) == null ? void 0 : b[p.slice(1)])), !p)
        throw new Error(`Could not find aliased icon "${f}"`);
      if (Array.isArray(p))
        return { component: Di, icon: p };
      if (typeof p != "string")
        return { component: mo, icon: p };
      const g = Object.keys(m.sets).find((B) => typeof p == "string" && p.startsWith(`${B}:`)), h = g ? p.slice(g.length + 1) : p;
      return { component: m.sets[g ?? m.defaultSet].component, icon: h };
    }) };
  })(v(() => a.value || e.icon)), { sizeClasses: s } = vt(e), { textColorClasses: o, textColorStyles: r } = Je(ne(e, "color"));
  return ae(() => {
    var m, f;
    const y = (m = l.default) == null ? void 0 : m.call(l);
    return y && (a.value = (f = jo(y).filter((p) => p.type === ai && p.children && typeof p.children == "string")[0]) == null ? void 0 : f.children), d(c.value.component, { tag: e.tag, icon: c.value.icon, class: ["v-icon", "notranslate", i.value, s.value, o.value, { "v-icon--clickable": !!n.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [s.value ? void 0 : { fontSize: te(e.size), height: te(e.size), width: te(e.size) }, r.value, e.style], role: n.onClick ? "button" : void 0, "aria-hidden": !n.onClick }, { default: () => [y] });
  }), {};
} });
function va(e, t) {
  const n = M(), l = re(!1);
  if (xl) {
    const a = new IntersectionObserver((i) => {
      e == null || e(i, a), l.value = !!i.find((c) => c.isIntersecting);
    }, t);
    Ze(() => {
      a.disconnect();
    }), K(n, (i, c) => {
      c && (a.unobserve(c), l.value = !1), i && a.observe(i);
    }, { flush: "post" });
  }
  return { intersectionRef: n, isIntersecting: l };
}
const Mi = H({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...se(), ...pt(), ...ze({ tag: "div" }), ...Be() }, "VProgressCircular"), fa = Q()({ name: "VProgressCircular", props: Mi(), setup(e, t) {
  let { slots: n } = t;
  const l = 2 * Math.PI * 20, a = M(), { themeClasses: i } = _e(e), { sizeClasses: c, sizeStyles: s } = vt(e), { textColorClasses: o, textColorStyles: r } = Je(ne(e, "color")), { textColorClasses: y, textColorStyles: m } = Je(ne(e, "bgColor")), { intersectionRef: f, isIntersecting: p } = va(), { resizeRef: g, contentRect: h } = Al(), b = v(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), B = v(() => Number(e.width)), V = v(() => s.value ? Number(e.size) : h.value ? h.value.width : Math.max(B.value, 32)), _ = v(() => 20 / (1 - B.value / V.value) * 2), U = v(() => B.value / V.value * _.value), z = v(() => te((100 - b.value) / 100 * l));
  return Ge(() => {
    f.value = a.value, g.value = a.value;
  }), ae(() => d(e.tag, { ref: a, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": p.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, i.value, c.value, o.value, e.class], style: [s.value, r.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : b.value }, { default: () => [d("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${_.value} ${_.value}` }, [d("circle", { class: ["v-progress-circular__underlay", y.value], style: m.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": U.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), d("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": U.value, "stroke-dasharray": l, "stroke-dashoffset": z.value }, null)]), n.default && d("div", { class: "v-progress-circular__content" }, [n.default({ value: b.value })])] })), {};
} }), go = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, $l = H({ location: String }, "location");
function El(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: l } = st();
  return { locationStyles: v(() => {
    if (!e.location)
      return {};
    const { side: i, align: c } = il(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, l.value);
    function s(r) {
      return n ? n(r) : 0;
    }
    const o = {};
    return i !== "center" && (t ? o[go[i]] = `calc(100% - ${s(i)}px)` : o[i] = 0), c !== "center" ? t ? o[go[c]] = `calc(100% - ${s(c)}px)` : o[c] = 0 : (i === "center" ? o.top = o.left = "50%" : o[{ top: "left", bottom: "left", left: "top", right: "top" }[i]] = "50%", o.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[i]), o;
  }) };
}
const Ri = H({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...se(), ...$l({ location: "top" }), ...en(), ...ze(), ...Be() }, "VProgressLinear"), Ni = Q()({ name: "VProgressLinear", props: Ri(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = me(e, "modelValue"), { isRtl: a, rtlClasses: i } = st(), { themeClasses: c } = _e(e), { locationStyles: s } = El(e), { textColorClasses: o, textColorStyles: r } = Je(e, "color"), { backgroundColorClasses: y, backgroundColorStyles: m } = Dn(v(() => e.bgColor || e.color)), { backgroundColorClasses: f, backgroundColorStyles: p } = Dn(e, "color"), { roundedClasses: g } = nn(e), { intersectionRef: h, isIntersecting: b } = va(), B = v(() => parseInt(e.max, 10)), V = v(() => parseInt(e.height, 10)), _ = v(() => parseFloat(e.bufferValue) / B.value * 100), U = v(() => parseFloat(l.value) / B.value * 100), z = v(() => a.value !== e.reverse), D = v(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), R = v(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function E(S) {
    if (!h.value)
      return;
    const { left: O, right: C, width: k } = h.value.getBoundingClientRect(), A = z.value ? k - S.clientX + (C - k) : S.clientX - O;
    l.value = Math.round(A / k * B.value);
  }
  return ae(() => d(e.tag, { ref: h, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && b.value, "v-progress-linear--reverse": z.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, g.value, c.value, i.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? te(V.value) : 0, "--v-progress-linear-height": te(V.value), ...s.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : U.value, onClick: e.clickable && E }, { default: () => [e.stream && d("div", { key: "stream", class: ["v-progress-linear__stream", o.value], style: { ...r.value, [z.value ? "left" : "right"]: te(-V.value), borderTop: `${te(V.value / 2)} dotted`, opacity: R.value, top: `calc(50% - ${te(V.value / 4)})`, width: te(100 - _.value, "%"), "--v-progress-linear-stream-to": te(V.value * (z.value ? 1 : -1)) } }, null), d("div", { class: ["v-progress-linear__background", y.value], style: [m.value, { opacity: R.value, width: te(e.stream ? _.value : 100, "%") }] }, null), d(gn, { name: D.value }, { default: () => [e.indeterminate ? d("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((S) => d("div", { key: S, class: ["v-progress-linear__indeterminate", S, f.value], style: p.value }, null))]) : d("div", { class: ["v-progress-linear__determinate", f.value], style: [p.value, { width: te(U.value, "%") }] }, null)] }), n.default && d("div", { class: "v-progress-linear__content" }, [n.default({ value: U.value, buffer: _.value })])] })), {};
} }), Tl = H({ loading: [Boolean, String] }, "loader");
function Gt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : qe();
  return { loaderClasses: v(() => ({ [`${t}--loading`]: e.loading })) };
}
function zl(e, t) {
  var l;
  let { slots: n } = t;
  return d("div", { class: `${e.name}__loader` }, [((l = n.default) == null ? void 0 : l.call(n, { color: e.color, isActive: e.active })) || d(Ni, { active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const ji = ["static", "relative", "fixed", "absolute", "sticky"], ya = H({ position: { type: String, validator: (e) => ji.includes(e) } }, "position");
function ma(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : qe();
  return { positionClasses: v(() => e.position ? `${t}--${e.position}` : void 0) };
}
function qt(e, t) {
  const n = ii("RouterLink"), l = v(() => !(!e.href && !e.to)), a = v(() => (l == null ? void 0 : l.value) || Hl(t, "click") || Hl(e, "click"));
  if (typeof n == "string")
    return { isLink: l, isClickable: a, href: ne(e, "href") };
  const i = e.to ? n.useLink(e) : void 0;
  return { isLink: l, isClickable: a, route: i == null ? void 0 : i.route, navigate: i == null ? void 0 : i.navigate, isActive: i && v(() => {
    var c, s;
    return e.exact ? (c = i.isExactActive) == null ? void 0 : c.value : (s = i.isActive) == null ? void 0 : s.value;
  }), href: v(() => e.to ? i == null ? void 0 : i.route.value.href : e.href) };
}
const Ut = H({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let Zt = !1;
const rl = Symbol("rippleStop"), Gi = 80;
function ho(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function sl(e) {
  return e.constructor.name === "TouchEvent";
}
function ga(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Et = { show(e, t) {
  var p;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((p = t == null ? void 0 : t._ripple) != null && p.enabled))
    return;
  const l = document.createElement("span"), a = document.createElement("span");
  l.appendChild(a), l.className = "v-ripple__container", n.class && (l.className += ` ${n.class}`);
  const { radius: i, scale: c, x: s, y: o, centerX: r, centerY: y } = function(g, h) {
    var R;
    let b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, B = 0, V = 0;
    if (!ga(g)) {
      const E = h.getBoundingClientRect(), S = sl(g) ? g.touches[g.touches.length - 1] : g;
      B = S.clientX - E.left, V = S.clientY - E.top;
    }
    let _ = 0, U = 0.3;
    (R = h._ripple) != null && R.circle ? (U = 0.15, _ = h.clientWidth / 2, _ = b.center ? _ : _ + Math.sqrt((B - _) ** 2 + (V - _) ** 2) / 4) : _ = Math.sqrt(h.clientWidth ** 2 + h.clientHeight ** 2) / 2;
    const z = (h.clientWidth - 2 * _) / 2 + "px", D = (h.clientHeight - 2 * _) / 2 + "px";
    return { radius: _, scale: U, x: b.center ? z : B - _ + "px", y: b.center ? D : V - _ + "px", centerX: z, centerY: D };
  }(e, t, n), m = 2 * i + "px";
  a.className = "v-ripple__animation", a.style.width = m, a.style.height = m, t.appendChild(l);
  const f = window.getComputedStyle(t);
  f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), a.classList.add("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--visible"), ho(a, `translate(${s}, ${o}) scale3d(${c},${c},${c})`), a.dataset.activated = String(performance.now()), setTimeout(() => {
    a.classList.remove("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--in"), ho(a, `translate(${r}, ${y}) scale3d(1,1,1)`);
  }, 0);
}, hide(e) {
  var i;
  if (!((i = e == null ? void 0 : e._ripple) != null && i.enabled))
    return;
  const t = e.getElementsByClassName("v-ripple__animation");
  if (t.length === 0)
    return;
  const n = t[t.length - 1];
  if (n.dataset.isHiding)
    return;
  n.dataset.isHiding = "true";
  const l = performance.now() - Number(n.dataset.activated), a = Math.max(250 - l, 0);
  setTimeout(() => {
    n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
      var c;
      e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((c = n.parentNode) == null ? void 0 : c.parentNode) === e && e.removeChild(n.parentNode);
    }, 300);
  }, a);
} };
function ha(e) {
  return e === void 0 || !!e;
}
function et(e) {
  const t = {}, n = e.currentTarget;
  if (n != null && n._ripple && !n._ripple.touched && !e[rl]) {
    if (e[rl] = !0, sl(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch)
      return;
    if (t.center = n._ripple.centered || ga(e), n._ripple.class && (t.class = n._ripple.class), sl(e)) {
      if (n._ripple.showTimerCommit)
        return;
      n._ripple.showTimerCommit = () => {
        Et.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var l;
        (l = n == null ? void 0 : n._ripple) != null && l.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, Gi);
    } else
      Et.show(e, n, t);
  }
}
function bo(e) {
  e[rl] = !0;
}
function Te(e) {
  const t = e.currentTarget;
  if (t != null && t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit)
      return t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, void (t._ripple.showTimer = window.setTimeout(() => {
        Te(e);
      }));
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), Et.hide(t);
  }
}
function ba(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let nt = !1;
function Ca(e) {
  nt || e.keyCode !== jl.enter && e.keyCode !== jl.space || (nt = !0, et(e));
}
function Ia(e) {
  nt = !1, Te(e);
}
function Sa(e) {
  nt && (nt = !1, Te(e));
}
function Co(e, t, n) {
  const { value: l, modifiers: a } = t, i = ha(l);
  if (i || Et.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = a.center, e._ripple.circle = a.circle, ll(l) && l.class && (e._ripple.class = l.class), i && !n) {
    if (a.stop)
      return e.addEventListener("touchstart", bo, { passive: !0 }), void e.addEventListener("mousedown", bo);
    e.addEventListener("touchstart", et, { passive: !0 }), e.addEventListener("touchend", Te, { passive: !0 }), e.addEventListener("touchmove", ba, { passive: !0 }), e.addEventListener("touchcancel", Te), e.addEventListener("mousedown", et), e.addEventListener("mouseup", Te), e.addEventListener("mouseleave", Te), e.addEventListener("keydown", Ca), e.addEventListener("keyup", Ia), e.addEventListener("blur", Sa), e.addEventListener("dragstart", Te, { passive: !0 });
  } else
    !i && n && Ba(e);
}
function Ba(e) {
  e.removeEventListener("mousedown", et), e.removeEventListener("touchstart", et), e.removeEventListener("touchend", Te), e.removeEventListener("touchmove", ba), e.removeEventListener("touchcancel", Te), e.removeEventListener("mouseup", Te), e.removeEventListener("mouseleave", Te), e.removeEventListener("keydown", Ca), e.removeEventListener("keyup", Ia), e.removeEventListener("dragstart", Te), e.removeEventListener("blur", Sa);
}
const ft = { mounted: function(e, t) {
  Co(e, t, !1);
}, unmounted: function(e) {
  delete e._ripple, Ba(e);
}, updated: function(e, t) {
  t.value !== t.oldValue && Co(e, t, ha(t.oldValue));
} }, qi = H({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: pa }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: ce, appendIcon: ce, block: Boolean, slim: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...Nn(), ...se(), ...Ue(), ...Cn(), ...Gn(), ...ua(), ...Tl(), ...$l(), ...ya(), ...en(), ...Ut(), ...pt(), ...ze({ tag: "button" }), ...Be(), ...rn({ variant: "elevated" }) }, "VBtn"), ul = Q()({ name: "VBtn", directives: { Ripple: ft }, props: qi(), emits: { "group:selected": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { themeClasses: a } = _e(e), { borderClasses: i } = jn(e), { colorClasses: c, colorStyles: s, variantClasses: o } = dt(e), { densityClasses: r } = tn(e), { dimensionStyles: y } = In(e), { elevationClasses: m } = qn(e), { loaderClasses: f } = Gt(e), { locationStyles: p } = El(e), { positionClasses: g } = ma(e), { roundedClasses: h } = nn(e), { sizeClasses: b, sizeStyles: B } = vt(e), V = ca(e, e.symbol, !1), _ = qt(e, n), U = v(() => {
    var S;
    return e.active !== void 0 ? e.active : _.isLink.value ? (S = _.isActive) == null ? void 0 : S.value : V == null ? void 0 : V.isSelected.value;
  }), z = v(() => (V == null ? void 0 : V.disabled.value) || e.disabled), D = v(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), R = v(() => {
    if (e.value !== void 0 && typeof e.value != "symbol")
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function E(S) {
    var O;
    z.value || _.isLink.value && (S.metaKey || S.ctrlKey || S.shiftKey || S.button !== 0 || n.target === "_blank") || ((O = _.navigate) == null || O.call(_, S), V == null || V.toggle());
  }
  return function(S, O) {
    K(() => {
      var C;
      return (C = S.isActive) == null ? void 0 : C.value;
    }, (C) => {
      S.isLink.value && C && O && Ie(() => {
        O(!0);
      });
    }, { immediate: !0 });
  }(_, V == null ? void 0 : V.select), ae(() => {
    var N, q;
    const S = _.isLink.value ? "a" : e.tag, O = !(!e.prependIcon && !l.prepend), C = !(!e.appendIcon && !l.append), k = !(!e.icon || e.icon === !0), A = (V == null ? void 0 : V.isSelected.value) && (!_.isLink.value || ((N = _.isActive) == null ? void 0 : N.value)) || !V || ((q = _.isActive) == null ? void 0 : q.value);
    return Fe(d(S, { type: S === "a" ? void 0 : "button", class: ["v-btn", V == null ? void 0 : V.selectedClass.value, { "v-btn--active": U.value, "v-btn--block": e.block, "v-btn--disabled": z.value, "v-btn--elevated": D.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, a.value, i.value, A ? c.value : void 0, r.value, m.value, f.value, g.value, h.value, b.value, o.value, e.class], style: [A ? s.value : void 0, y.value, p.value, B.value, e.style], disabled: z.value || void 0, href: _.href.value, onClick: E, value: R.value }, { default: () => {
      var I;
      return [ct(!0, "v-btn"), !e.icon && O && d("span", { key: "prepend", class: "v-btn__prepend" }, [l.prepend ? d(we, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, l.prepend) : d(de, { key: "prepend-icon", icon: e.prependIcon }, null)]), d("span", { class: "v-btn__content", "data-no-activator": "" }, [!l.default && k ? d(de, { key: "content-icon", icon: e.icon }, null) : d(we, { key: "content-defaults", disabled: !k, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var P;
        return [((P = l.default) == null ? void 0 : P.call(l)) ?? e.text];
      } })]), !e.icon && C && d("span", { key: "append", class: "v-btn__append" }, [l.append ? d(we, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, l.append) : d(de, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && d("span", { key: "loader", class: "v-btn__loader" }, [((I = l.loader) == null ? void 0 : I.call(l)) ?? d(fa, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[Qe("ripple"), !z.value && e.ripple, null]]);
  }), {};
} }), Ui = H({ text: String, clickable: Boolean, ...se(), ...Be() }, "VLabel"), xa = Q()({ name: "VLabel", props: Ui(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => {
    var l;
    return d("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (l = n.default) == null ? void 0 : l.call(n)]);
  }), {};
} }), ka = Symbol.for("vuetify:selection-control-group"), wa = H({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: ce, trueIcon: ce, ripple: { type: Boolean, default: !0 }, multiple: { type: Boolean, default: null }, name: String, readonly: Boolean, modelValue: null, type: String, valueComparator: { type: Function, default: at }, ...se(), ...Ue(), ...Be() }, "SelectionControlGroup"), Hi = H({ ...wa({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup");
Q()({ name: "VSelectionControlGroup", props: Hi(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = me(e, "modelValue"), a = Me(), i = v(() => e.id || `v-selection-control-group-${a}`), c = v(() => e.name || i.value), s = /* @__PURE__ */ new Set();
  return De(ka, { modelValue: l, forceUpdate: () => {
    s.forEach((o) => o());
  }, onForceUpdate: (o) => {
    s.add(o), ke(() => {
      s.delete(o);
    });
  } }), Rn({ [e.defaultsTarget]: { color: ne(e, "color"), disabled: ne(e, "disabled"), density: ne(e, "density"), error: ne(e, "error"), inline: ne(e, "inline"), modelValue: l, multiple: v(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)), name: c, falseIcon: ne(e, "falseIcon"), trueIcon: ne(e, "trueIcon"), readonly: ne(e, "readonly"), ripple: ne(e, "ripple"), type: ne(e, "type"), valueComparator: ne(e, "valueComparator") } }), ae(() => {
    var o;
    return d("div", { class: ["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class], style: e.style, role: e.type === "radio" ? "radiogroup" : void 0 }, [(o = n.default) == null ? void 0 : o.call(n)]);
  }), {};
} });
const Dl = H({ label: String, baseColor: String, trueValue: null, falseValue: null, value: null, ...se(), ...wa() }, "VSelectionControl"), Tt = Q()({ name: "VSelectionControl", directives: { Ripple: ft }, inheritAttrs: !1, props: Dl(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { group: a, densityClasses: i, icon: c, model: s, textColorClasses: o, textColorStyles: r, backgroundColorClasses: y, backgroundColorStyles: m, trueValue: f } = function(z) {
    const D = ve(ka, void 0), { densityClasses: R } = tn(z), E = me(z, "modelValue"), S = v(() => z.trueValue !== void 0 ? z.trueValue : z.value === void 0 || z.value), O = v(() => z.falseValue !== void 0 && z.falseValue), C = v(() => !!z.multiple || z.multiple == null && Array.isArray(E.value)), k = v({ get() {
      const $ = D ? D.modelValue.value : E.value;
      return C.value ? Ke($).some((W) => z.valueComparator(W, S.value)) : z.valueComparator($, S.value);
    }, set($) {
      if (z.readonly)
        return;
      const W = $ ? S.value : O.value;
      let j = W;
      C.value && (j = $ ? [...Ke(E.value), W] : Ke(E.value).filter((F) => !z.valueComparator(F, S.value))), D ? D.modelValue.value = j : E.value = j;
    } }), { textColorClasses: A, textColorStyles: N } = Je(v(() => {
      if (!z.error && !z.disabled)
        return k.value ? z.color : z.baseColor;
    })), { backgroundColorClasses: q, backgroundColorStyles: I } = Dn(v(() => !k.value || z.error || z.disabled ? void 0 : z.color)), P = v(() => k.value ? z.trueIcon : z.falseIcon);
    return { group: D, densityClasses: R, trueValue: S, falseValue: O, model: k, textColorClasses: A, textColorStyles: N, backgroundColorClasses: q, backgroundColorStyles: I, icon: P };
  }(e), p = Me(), g = v(() => e.id || `input-${p}`), h = re(!1), b = re(!1), B = M();
  function V(z) {
    h.value = !0, At(z.target, ":focus-visible") !== !1 && (b.value = !0);
  }
  function _() {
    h.value = !1, b.value = !1;
  }
  function U(z) {
    e.readonly && a && Ie(() => a.forceUpdate()), s.value = z.target.checked;
  }
  return a == null || a.onForceUpdate(() => {
    B.value && (B.value.checked = s.value);
  }), ae(() => {
    var S, O;
    const z = l.label ? l.label({ label: e.label, props: { for: g.value } }) : e.label, [D, R] = it(n), E = d("input", Z({ ref: B, checked: s.value, disabled: !(!e.readonly && !e.disabled), id: g.value, onBlur: _, onFocus: V, onInput: U, "aria-disabled": !(!e.readonly && !e.disabled), type: e.type, value: f.value, name: e.name, "aria-checked": e.type === "checkbox" ? s.value : void 0 }, R), null);
    return d("div", Z({ class: ["v-selection-control", { "v-selection-control--dirty": s.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": h.value, "v-selection-control--focus-visible": b.value, "v-selection-control--inline": e.inline }, i.value, e.class] }, D, { style: e.style }), [d("div", { class: ["v-selection-control__wrapper", o.value], style: r.value }, [(S = l.default) == null ? void 0 : S.call(l, { backgroundColorClasses: y, backgroundColorStyles: m }), Fe(d("div", { class: ["v-selection-control__input"] }, [((O = l.input) == null ? void 0 : O.call(l, { model: s, textColorClasses: o, textColorStyles: r, backgroundColorClasses: y, backgroundColorStyles: m, inputNode: E, icon: c.value, props: { onFocus: V, onBlur: _, id: g.value } })) ?? d(fe, null, [c.value && d(de, { key: "icon", icon: c.value }, null), E])]), [[Qe("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), z && d(xa, { for: g.value, clickable: !0, onClick: (C) => C.stopPropagation() }, { default: () => [z] })]);
  }), { isFocused: h, input: B };
} }), Fa = H({ indeterminate: Boolean, indeterminateIcon: { type: ce, default: "$checkboxIndeterminate" }, ...Dl({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), cl = Q()({ name: "VCheckboxBtn", props: Fa(), emits: { "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = me(e, "indeterminate"), a = me(e, "modelValue");
  function i(o) {
    l.value && (l.value = !1);
  }
  const c = v(() => l.value ? e.indeterminateIcon : e.falseIcon), s = v(() => l.value ? e.indeterminateIcon : e.trueIcon);
  return ae(() => {
    const o = bn(Tt.filterProps(e), ["modelValue"]);
    return d(Tt, Z(o, { modelValue: a.value, "onUpdate:modelValue": [(r) => a.value = r, i], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: c.value, trueIcon: s.value, "aria-checked": l.value ? "mixed" : void 0 }), n);
  }), {};
} });
function Va(e) {
  const { t } = _l();
  return { InputIcon: function(n) {
    let { name: l } = n;
    const a = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[l], i = e[`onClick:${l}`], c = i && a ? t(`$vuetify.input.${a}`, e.label ?? "") : void 0;
    return d(de, { icon: e[`${l}Icon`], "aria-label": c, onClick: i }, null);
  } };
}
const Yi = H({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...se(), ...ut({ transition: { component: la, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), Xi = Q()({ name: "VMessages", props: Yi(), setup(e, t) {
  let { slots: n } = t;
  const l = v(() => Ke(e.messages)), { textColorClasses: a, textColorStyles: i } = Je(v(() => e.color));
  return ae(() => d(ln, { transition: e.transition, tag: "div", class: ["v-messages", a.value, e.class], style: [i.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && l.value.map((c, s) => d("div", { class: "v-messages__message", key: `${s}-${l.value}` }, [n.message ? n.message({ message: c }) : c]))] })), {};
} }), Aa = H({ focused: Boolean, "onUpdate:focused": je() }, "focus");
function yt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : qe();
  const n = me(e, "focused");
  return { focusClasses: v(() => ({ [`${t}--focused`]: n.value })), isFocused: n, focus: function() {
    n.value = !0;
  }, blur: function() {
    n.value = !1;
  } };
}
const Ki = Symbol.for("vuetify:form");
function _a() {
  return ve(Ki, null);
}
const Ji = H({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...Aa() }, "validation"), mt = H({ id: String, appendIcon: ce, centerAffix: { type: Boolean, default: !0 }, prependIcon: ce, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": je(), "onClick:append": je(), ...se(), ...Ue(), ...Ji() }, "VInput"), an = Q()({ name: "VInput", props: { ...mt() }, emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l, emit: a } = t;
  const { densityClasses: i } = tn(e), { rtlClasses: c } = st(), { InputIcon: s } = Va(e), o = Me(), r = v(() => e.id || `input-${o}`), y = v(() => `${r.value}-messages`), { errorMessages: m, isDirty: f, isDisabled: p, isReadonly: g, isPristine: h, isValid: b, isValidating: B, reset: V, resetValidation: _, validate: U, validationClasses: z } = function(E) {
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : qe(), O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Me();
    const C = me(E, "modelValue"), k = v(() => E.validationValue === void 0 ? C.value : E.validationValue), A = _a(), N = M([]), q = re(!0), I = v(() => !(!Ke(C.value === "" ? null : C.value).length && !Ke(k.value === "" ? null : k.value).length)), P = v(() => !!(E.disabled ?? (A == null ? void 0 : A.isDisabled.value))), $ = v(() => !!(E.readonly ?? (A == null ? void 0 : A.isReadonly.value))), W = v(() => {
      var X;
      return (X = E.errorMessages) != null && X.length ? Ke(E.errorMessages).concat(N.value).slice(0, Math.max(0, +E.maxErrors)) : N.value;
    }), j = v(() => {
      let X = (E.validateOn ?? (A == null ? void 0 : A.validateOn.value)) || "input";
      X === "lazy" && (X = "input lazy");
      const oe = new Set((X == null ? void 0 : X.split(" ")) ?? []);
      return { blur: oe.has("blur") || oe.has("input"), input: oe.has("input"), submit: oe.has("submit"), lazy: oe.has("lazy") };
    }), F = v(() => {
      var X;
      return !E.error && !((X = E.errorMessages) != null && X.length) && (!E.rules.length || (q.value ? !N.value.length && !j.value.lazy || null : !N.value.length));
    }), L = re(!1), Y = v(() => ({ [`${S}--error`]: F.value === !1, [`${S}--dirty`]: I.value, [`${S}--disabled`]: P.value, [`${S}--readonly`]: $.value })), x = v(() => E.name ?? u(O));
    function w() {
      C.value = null, Ie(T);
    }
    function T() {
      q.value = !0, j.value.lazy ? N.value = [] : G(!0);
    }
    async function G() {
      let X = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      const oe = [];
      L.value = !0;
      for (const be of E.rules) {
        if (oe.length >= +(E.maxErrors ?? 1))
          break;
        const Ve = typeof be == "function" ? be : () => be, Oe = await Ve(k.value);
        Oe !== !0 && (Oe === !1 || typeof Oe == "string" ? oe.push(Oe || "") : console.warn(`${Oe} is not a valid value. Rule functions must return boolean true or a string.`));
      }
      return N.value = oe, L.value = !1, q.value = X, N.value;
    }
    return Do(() => {
      A == null || A.register({ id: x.value, validate: G, reset: w, resetValidation: T });
    }), Ze(() => {
      A == null || A.unregister(x.value);
    }), Mn(async () => {
      j.value.lazy || await G(!0), A == null || A.update(x.value, F.value, W.value);
    }), fn(() => j.value.input, () => {
      K(k, () => {
        if (k.value != null)
          G();
        else if (E.focused) {
          const X = K(() => E.focused, (oe) => {
            oe || G(), X();
          });
        }
      });
    }), fn(() => j.value.blur, () => {
      K(() => E.focused, (X) => {
        X || G();
      });
    }), K(F, () => {
      A == null || A.update(x.value, F.value, W.value);
    }), { errorMessages: W, isDirty: I, isDisabled: P, isReadonly: $, isPristine: q, isValid: F, isValidating: L, reset: w, resetValidation: T, validate: G, validationClasses: Y };
  }(e, "v-input", r), D = v(() => ({ id: r, messagesId: y, isDirty: f, isDisabled: p, isReadonly: g, isPristine: h, isValid: b, isValidating: B, reset: V, resetValidation: _, validate: U })), R = v(() => {
    var E;
    return (E = e.errorMessages) != null && E.length || !h.value && m.value.length ? m.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return ae(() => {
    var k, A, N, q;
    const E = !(!l.prepend && !e.prependIcon), S = !(!l.append && !e.appendIcon), O = R.value.length > 0, C = !e.hideDetails || e.hideDetails === "auto" && (O || !!l.details);
    return d("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix, "v-input--hide-spin-buttons": e.hideSpinButtons }, i.value, c.value, z.value, e.class], style: e.style }, [E && d("div", { key: "prepend", class: "v-input__prepend" }, [(k = l.prepend) == null ? void 0 : k.call(l, D.value), e.prependIcon && d(s, { key: "prepend-icon", name: "prepend" }, null)]), l.default && d("div", { class: "v-input__control" }, [(A = l.default) == null ? void 0 : A.call(l, D.value)]), S && d("div", { key: "append", class: "v-input__append" }, [e.appendIcon && d(s, { key: "append-icon", name: "append" }, null), (N = l.append) == null ? void 0 : N.call(l, D.value)]), C && d("div", { class: "v-input__details" }, [d(Xi, { id: y.value, active: O, messages: R.value }, { message: l.message }), (q = l.details) == null ? void 0 : q.call(l, D.value)])]);
  }), { reset: V, resetValidation: _, validate: U, isValid: b, errorMessages: m };
} }), Zi = H({ ...mt(), ...bn(Fa(), ["inline"]) }, "VCheckbox"), Qi = Q()({ name: "VCheckbox", inheritAttrs: !1, props: Zi(), emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const a = me(e, "modelValue"), { isFocused: i, focus: c, blur: s } = yt(e), o = Me(), r = v(() => e.id || `checkbox-${o}`);
  return ae(() => {
    const [y, m] = it(n), f = an.filterProps(e), p = cl.filterProps(e);
    return d(an, Z({ class: ["v-checkbox", e.class] }, y, f, { modelValue: a.value, "onUpdate:modelValue": (g) => a.value = g, id: r.value, focused: i.value, style: e.style }), { ...l, default: (g) => {
      let { id: h, messagesId: b, isDisabled: B, isReadonly: V } = g;
      return d(cl, Z(p, { id: h.value, "aria-describedby": b.value, disabled: B.value, readonly: V.value }, m, { modelValue: a.value, "onUpdate:modelValue": (_) => a.value = _, onFocus: c, onBlur: s }), l);
    } });
  }), {};
} }), er = H({ start: Boolean, end: Boolean, icon: ce, image: String, text: String, ...se(), ...Ue(), ...en(), ...pt(), ...ze(), ...Be(), ...rn({ variant: "flat" }) }, "VAvatar"), Ln = Q()({ name: "VAvatar", props: er(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = _e(e), { colorClasses: a, colorStyles: i, variantClasses: c } = dt(e), { densityClasses: s } = tn(e), { roundedClasses: o } = nn(e), { sizeClasses: r, sizeStyles: y } = vt(e);
  return ae(() => d(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, l.value, a.value, s.value, o.value, r.value, c.value, e.class], style: [i.value, y.value, e.style] }, { default: () => {
    var m;
    return [e.image ? d(ia, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? d(de, { key: "icon", icon: e.icon }, null) : ((m = n.default) == null ? void 0 : m.call(n)) ?? e.text, ct(!1, "v-avatar")];
  } })), {};
} }), Oa = Symbol.for("vuetify:v-chip-group"), nr = H({ column: Boolean, filter: Boolean, valueComparator: { type: Function, default: at }, ...se(), ...sa({ selectedClass: "v-chip--selected" }), ...ze(), ...Be(), ...rn({ variant: "tonal" }) }, "VChipGroup");
Q()({ name: "VChipGroup", props: nr(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = _e(e), { isSelected: a, select: i, next: c, prev: s, selected: o } = da(e, Oa);
  return Rn({ VChip: { color: ne(e, "color"), disabled: ne(e, "disabled"), filter: ne(e, "filter"), variant: ne(e, "variant") } }), ae(() => d(e.tag, { class: ["v-chip-group", { "v-chip-group--column": e.column }, l.value, e.class], style: e.style }, { default: () => {
    var r;
    return [(r = n.default) == null ? void 0 : r.call(n, { isSelected: a, select: i, next: c, prev: s, selected: o.value })];
  } })), {};
} });
const tr = H({ activeClass: String, appendAvatar: String, appendIcon: ce, closable: Boolean, closeIcon: { type: ce, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: String, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: ce, ripple: { type: [Boolean, Object], default: !0 }, text: String, modelValue: { type: Boolean, default: !0 }, onClick: je(), onClickOnce: je(), ...Nn(), ...se(), ...Ue(), ...Gn(), ...ua(), ...en(), ...Ut(), ...pt(), ...ze({ tag: "span" }), ...Be(), ...rn({ variant: "tonal" }) }, "VChip"), lr = Q()({ name: "VChip", directives: { Ripple: ft }, props: tr(), emits: { "click:close": (e) => !0, "update:modelValue": (e) => !0, "group:selected": (e) => !0, click: (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: a } = t;
  const { t: i } = _l(), { borderClasses: c } = jn(e), { colorClasses: s, colorStyles: o, variantClasses: r } = dt(e), { densityClasses: y } = tn(e), { elevationClasses: m } = qn(e), { roundedClasses: f } = nn(e), { sizeClasses: p } = vt(e), { themeClasses: g } = _e(e), h = me(e, "modelValue"), b = ca(e, Oa, !1), B = qt(e, n), V = v(() => e.link !== !1 && B.isLink.value), _ = v(() => !e.disabled && e.link !== !1 && (!!b || e.link || B.isClickable.value)), U = v(() => ({ "aria-label": i(e.closeLabel), onClick(R) {
    R.stopPropagation(), h.value = !1, l("click:close", R);
  } }));
  function z(R) {
    var E;
    l("click", R), _.value && ((E = B.navigate) == null || E.call(B, R), b == null || b.toggle());
  }
  function D(R) {
    R.key !== "Enter" && R.key !== " " || (R.preventDefault(), z(R));
  }
  return () => {
    const R = B.isLink.value ? "a" : e.tag, E = !(!e.appendIcon && !e.appendAvatar), S = !(!E && !a.append), O = !(!a.close && !e.closable), C = !(!a.filter && !e.filter) && b, k = !(!e.prependIcon && !e.prependAvatar), A = !(!k && !a.prepend), N = !b || b.isSelected.value;
    return h.value && Fe(d(R, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": _.value, "v-chip--filter": C, "v-chip--pill": e.pill }, g.value, c.value, N ? s.value : void 0, y.value, m.value, f.value, p.value, r.value, b == null ? void 0 : b.selectedClass.value, e.class], style: [N ? o.value : void 0, e.style], disabled: e.disabled || void 0, draggable: e.draggable, href: B.href.value, tabindex: _.value ? 0 : void 0, onClick: z, onKeydown: _.value && !V.value && D }, { default: () => {
      var q;
      return [ct(_.value, "v-chip"), C && d(oa, { key: "filter" }, { default: () => [Fe(d("div", { class: "v-chip__filter" }, [a.filter ? d(we, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, a.filter) : d(de, { key: "filter-icon", icon: e.filterIcon }, null)]), [[Wn, b.isSelected.value]])] }), A && d("div", { key: "prepend", class: "v-chip__prepend" }, [a.prepend ? d(we, { key: "prepend-defaults", disabled: !k, defaults: { VAvatar: { image: e.prependAvatar, start: !0 }, VIcon: { icon: e.prependIcon, start: !0 } } }, a.prepend) : d(fe, null, [e.prependIcon && d(de, { key: "prepend-icon", icon: e.prependIcon, start: !0 }, null), e.prependAvatar && d(Ln, { key: "prepend-avatar", image: e.prependAvatar, start: !0 }, null)])]), d("div", { class: "v-chip__content" }, [((q = a.default) == null ? void 0 : q.call(a, { isSelected: b == null ? void 0 : b.isSelected.value, selectedClass: b == null ? void 0 : b.selectedClass.value, select: b == null ? void 0 : b.select, toggle: b == null ? void 0 : b.toggle, value: b == null ? void 0 : b.value.value, disabled: e.disabled })) ?? e.text]), S && d("div", { key: "append", class: "v-chip__append" }, [a.append ? d(we, { key: "append-defaults", disabled: !E, defaults: { VAvatar: { end: !0, image: e.appendAvatar }, VIcon: { end: !0, icon: e.appendIcon } } }, a.append) : d(fe, null, [e.appendIcon && d(de, { key: "append-icon", end: !0, icon: e.appendIcon }, null), e.appendAvatar && d(Ln, { key: "append-avatar", end: !0, image: e.appendAvatar }, null)])]), O && d("div", Z({ key: "close", class: "v-chip__close" }, U.value), [a.close ? d(we, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, a.close) : d(de, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[Qe("ripple"), _.value && e.ripple, null]]);
  };
} }), dl = Symbol.for("vuetify:list");
function Pa() {
  const e = ve(dl, { hasPrepend: re(!1), updateHasPrepend: () => null }), t = { hasPrepend: re(!1), updateHasPrepend: (n) => {
    n && (t.hasPrepend.value = n);
  } };
  return De(dl, t), e;
}
function $a() {
  return ve(dl, null);
}
const or = { open: (e) => {
  let { id: t, value: n, opened: l, parents: a } = e;
  if (n) {
    const i = /* @__PURE__ */ new Set();
    i.add(t);
    let c = a.get(t);
    for (; c != null; )
      i.add(c), c = a.get(c);
    return i;
  }
  return l.delete(t), l;
}, select: () => null }, Ea = { open: (e) => {
  let { id: t, value: n, opened: l, parents: a } = e;
  if (n) {
    let i = a.get(t);
    for (l.add(t); i != null && i !== t; )
      l.add(i), i = a.get(i);
    return l;
  }
  return l.delete(t), l;
}, select: () => null }, ar = { open: Ea.open, select: (e) => {
  let { id: t, value: n, opened: l, parents: a } = e;
  if (!n)
    return l;
  const i = [];
  let c = a.get(t);
  for (; c != null; )
    i.push(c), c = a.get(c);
  return new Set(i);
} }, pl = (e) => {
  const t = { select: (n) => {
    let { id: l, value: a, selected: i } = n;
    if (l = on(l), e && !a) {
      const c = Array.from(i.entries()).reduce((s, o) => {
        let [r, y] = o;
        return y === "on" ? [...s, r] : s;
      }, []);
      if (c.length === 1 && c[0] === l)
        return i;
    }
    return i.set(l, a ? "on" : "off"), i;
  }, in: (n, l, a) => {
    let i = /* @__PURE__ */ new Map();
    for (const c of n || [])
      i = t.select({ id: c, value: !0, selected: new Map(i), children: l, parents: a });
    return i;
  }, out: (n) => {
    const l = [];
    for (const [a, i] of n.entries())
      i === "on" && l.push(a);
    return l;
  } };
  return t;
}, Io = (e) => {
  const t = pl(e);
  return { select: (n) => {
    let { selected: l, id: a, ...i } = n;
    a = on(a);
    const c = l.has(a) ? /* @__PURE__ */ new Map([[a, l.get(a)]]) : /* @__PURE__ */ new Map();
    return t.select({ ...i, id: a, selected: c });
  }, in: (n, l, a) => {
    let i = /* @__PURE__ */ new Map();
    return n != null && n.length && (i = t.in(n.slice(0, 1), l, a)), i;
  }, out: (n, l, a) => t.out(n, l, a) };
}, tt = Symbol.for("vuetify:nested"), Ta = { id: re(), root: { register: () => null, unregister: () => null, parents: M(/* @__PURE__ */ new Map()), children: M(/* @__PURE__ */ new Map()), open: () => null, openOnSelect: () => null, select: () => null, opened: M(/* @__PURE__ */ new Set()), selected: M(/* @__PURE__ */ new Map()), selectedValues: M([]) } }, ir = H({ selectStrategy: [String, Function], openStrategy: [String, Object], opened: Array, selected: Array, mandatory: Boolean }, "nested"), rr = (e) => {
  let t = !1;
  const n = M(/* @__PURE__ */ new Map()), l = M(/* @__PURE__ */ new Map()), a = me(e, "opened", e.opened, (m) => new Set(m), (m) => [...m.values()]), i = v(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return ((m) => {
          const f = Io(m);
          return { select: (p) => {
            let { id: g, selected: h, children: b, ...B } = p;
            return g = on(g), b.has(g) ? h : f.select({ id: g, selected: h, children: b, ...B });
          }, in: f.in, out: f.out };
        })(e.mandatory);
      case "leaf":
        return ((m) => {
          const f = pl(m);
          return { select: (p) => {
            let { id: g, selected: h, children: b, ...B } = p;
            return g = on(g), b.has(g) ? h : f.select({ id: g, selected: h, children: b, ...B });
          }, in: f.in, out: f.out };
        })(e.mandatory);
      case "independent":
        return pl(e.mandatory);
      case "single-independent":
        return Io(e.mandatory);
      default:
        return ((m) => {
          const f = { select: (p) => {
            let { id: g, value: h, selected: b, children: B, parents: V } = p;
            g = on(g);
            const _ = new Map(b), U = [g];
            for (; U.length; ) {
              const D = U.shift();
              b.set(D, h ? "on" : "off"), B.has(D) && U.push(...B.get(D));
            }
            let z = V.get(g);
            for (; z; ) {
              const D = B.get(z), R = D.every((S) => b.get(S) === "on"), E = D.every((S) => !b.has(S) || b.get(S) === "off");
              b.set(z, R ? "on" : E ? "off" : "indeterminate"), z = V.get(z);
            }
            return m && !h && Array.from(b.entries()).reduce((R, E) => {
              let [S, O] = E;
              return O === "on" ? [...R, S] : R;
            }, []).length === 0 ? _ : b;
          }, in: (p, g, h) => {
            let b = /* @__PURE__ */ new Map();
            for (const B of p || [])
              b = f.select({ id: B, value: !0, selected: new Map(b), children: g, parents: h });
            return b;
          }, out: (p, g) => {
            const h = [];
            for (const [b, B] of p.entries())
              B !== "on" || g.has(b) || h.push(b);
            return h;
          } };
          return f;
        })(e.mandatory);
    }
  }), c = v(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return ar;
      case "single":
        return or;
      default:
        return Ea;
    }
  }), s = me(e, "selected", e.selected, (m) => i.value.in(m, n.value, l.value), (m) => i.value.out(m, n.value, l.value));
  function o(m) {
    const f = [];
    let p = m;
    for (; p != null; )
      f.unshift(p), p = l.value.get(p);
    return f;
  }
  Ze(() => {
    t = !0;
  });
  const r = Se("nested"), y = { id: re(), root: { opened: a, selected: s, selectedValues: v(() => {
    const m = [];
    for (const [f, p] of s.value.entries())
      p === "on" && m.push(f);
    return m;
  }), register: (m, f, p) => {
    f && m !== f && l.value.set(m, f), p && n.value.set(m, []), f != null && n.value.set(f, [...n.value.get(f) || [], m]);
  }, unregister: (m) => {
    if (t)
      return;
    n.value.delete(m);
    const f = l.value.get(m);
    if (f) {
      const p = n.value.get(f) ?? [];
      n.value.set(f, p.filter((g) => g !== m));
    }
    l.value.delete(m), a.value.delete(m);
  }, open: (m, f, p) => {
    r.emit("click:open", { id: m, value: f, path: o(m), event: p });
    const g = c.value.open({ id: m, value: f, opened: new Set(a.value), children: n.value, parents: l.value, event: p });
    g && (a.value = g);
  }, openOnSelect: (m, f, p) => {
    const g = c.value.select({ id: m, value: f, selected: new Map(s.value), opened: new Set(a.value), children: n.value, parents: l.value, event: p });
    g && (a.value = g);
  }, select: (m, f, p) => {
    r.emit("click:select", { id: m, value: f, path: o(m), event: p });
    const g = i.value.select({ id: m, value: f, selected: new Map(s.value), children: n.value, parents: l.value, event: p });
    g && (s.value = g), y.root.openOnSelect(m, f, p);
  }, children: n, parents: l } };
  return De(tt, y), y.root;
}, za = (e, t) => {
  const n = ve(tt, Ta), l = Symbol(Me()), a = v(() => e.value !== void 0 ? e.value : l), i = { ...n, id: a, open: (c, s) => n.root.open(a.value, c, s), openOnSelect: (c, s) => n.root.openOnSelect(a.value, c, s), isOpen: v(() => n.root.opened.value.has(a.value)), parent: v(() => n.root.parents.value.get(a.value)), select: (c, s) => n.root.select(a.value, c, s), isSelected: v(() => n.root.selected.value.get(on(a.value)) === "on"), isIndeterminate: v(() => n.root.selected.value.get(a.value) === "indeterminate"), isLeaf: v(() => !n.root.children.value.get(a.value)), isGroupActivator: n.isGroupActivator };
  return !n.isGroupActivator && n.root.register(a.value, n.id.value, t), Ze(() => {
    !n.isGroupActivator && n.root.unregister(a.value);
  }), t && De(tt, i), i;
}, sr = Qn({ name: "VListGroupActivator", setup(e, t) {
  let { slots: n } = t;
  return (() => {
    const l = ve(tt, Ta);
    De(tt, { ...l, isGroupActivator: !0 });
  })(), () => {
    var l;
    return (l = n.default) == null ? void 0 : l.call(n);
  };
} }), ur = H({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: ce, default: "$collapse" }, expandIcon: { type: ce, default: "$expand" }, prependIcon: ce, appendIcon: ce, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...se(), ...ze() }, "VListGroup"), So = Q()({ name: "VListGroup", props: ur(), setup(e, t) {
  let { slots: n } = t;
  const { isOpen: l, open: a, id: i } = za(ne(e, "value"), !0), c = v(() => `v-list-group--id-${String(i.value)}`), s = $a(), { isBooted: o } = function() {
    const p = re(!1);
    return Mn(() => {
      window.requestAnimationFrame(() => {
        p.value = !0;
      });
    }), { ssrBootStyles: v(() => p.value ? void 0 : { transition: "none !important" }), isBooted: bl(p) };
  }();
  function r(p) {
    a(!l.value, p);
  }
  const y = v(() => ({ onClick: r, class: "v-list-group__header", id: c.value })), m = v(() => l.value ? e.collapseIcon : e.expandIcon), f = v(() => ({ VListItem: { active: l.value, activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && m.value, appendIcon: e.appendIcon || !e.subgroup && m.value, title: e.title, value: e.value } }));
  return ae(() => d(e.tag, { class: ["v-list-group", { "v-list-group--prepend": s == null ? void 0 : s.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": l.value }, e.class], style: e.style }, { default: () => [n.activator && d(we, { defaults: f.value }, { default: () => [d(sr, null, { default: () => [n.activator({ props: y.value, isOpen: l.value })] })] }), d(ln, { transition: { component: _i }, disabled: !o.value }, { default: () => {
    var p;
    return [Fe(d("div", { class: "v-list-group__items", role: "group", "aria-labelledby": c.value }, [(p = n.default) == null ? void 0 : p.call(n)]), [[Wn, l.value]])];
  } })] })), {};
} }), cr = rt("v-list-item-subtitle"), dr = rt("v-list-item-title"), pr = H({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: ce, baseColor: String, disabled: Boolean, lines: String, link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: ce, ripple: { type: [Boolean, Object], default: !0 }, slim: Boolean, subtitle: [String, Number, Boolean], title: [String, Number, Boolean], value: null, onClick: je(), onClickOnce: je(), ...Nn(), ...se(), ...Ue(), ...Cn(), ...Gn(), ...en(), ...Ut(), ...ze(), ...Be(), ...rn({ variant: "text" }) }, "VListItem"), zt = Q()({ name: "VListItem", directives: { Ripple: ft }, props: pr(), emits: { click: (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l, emit: a } = t;
  const i = qt(e, n), c = v(() => e.value === void 0 ? i.href.value : e.value), { select: s, isSelected: o, isIndeterminate: r, isGroupActivator: y, root: m, parent: f, openOnSelect: p } = za(c, !1), g = $a(), h = v(() => {
    var $;
    return e.active !== !1 && (e.active || (($ = i.isActive) == null ? void 0 : $.value) || o.value);
  }), b = v(() => e.link !== !1 && i.isLink.value), B = v(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || e.value != null && !!g)), V = v(() => e.rounded || e.nav), _ = v(() => e.color ?? e.activeColor), U = v(() => ({ color: h.value ? _.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  K(() => {
    var $;
    return ($ = i.isActive) == null ? void 0 : $.value;
  }, ($) => {
    $ && f.value != null && m.open(f.value, !0), $ && p($);
  }, { immediate: !0 });
  const { themeClasses: z } = _e(e), { borderClasses: D } = jn(e), { colorClasses: R, colorStyles: E, variantClasses: S } = dt(U), { densityClasses: O } = tn(e), { dimensionStyles: C } = In(e), { elevationClasses: k } = qn(e), { roundedClasses: A } = nn(V), N = v(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), q = v(() => ({ isActive: h.value, select: s, isSelected: o.value, isIndeterminate: r.value }));
  function I($) {
    var W;
    a("click", $), !y && B.value && ((W = i.navigate) == null || W.call(i, $), e.value != null && s(!o.value, $));
  }
  function P($) {
    $.key !== "Enter" && $.key !== " " || ($.preventDefault(), I($));
  }
  return ae(() => {
    const $ = b.value ? "a" : e.tag, W = l.title || e.title, j = l.subtitle || e.subtitle, F = !(!e.appendAvatar && !e.appendIcon), L = !(!F && !l.append), Y = !(!e.prependAvatar && !e.prependIcon), x = !(!Y && !l.prepend);
    var w, T;
    return g == null || g.updateHasPrepend(x), e.activeColor && (w = "active-color", T = ["color", "base-color"], T = Array.isArray(T) ? T.slice(0, -1).map((G) => `'${G}'`).join(", ") + ` or '${T.at(-1)}'` : `'${T}'`, Rt(`[Vuetify UPGRADE] '${w}' is deprecated, use ${T} instead.`)), Fe(d($, { class: ["v-list-item", { "v-list-item--active": h.value, "v-list-item--disabled": e.disabled, "v-list-item--link": B.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !x && (g == null ? void 0 : g.hasPrepend.value), "v-list-item--slim": e.slim, [`${e.activeClass}`]: e.activeClass && h.value }, z.value, D.value, R.value, O.value, k.value, N.value, A.value, S.value, e.class], style: [E.value, C.value, e.style], href: i.href.value, tabindex: B.value ? g ? -2 : 0 : void 0, onClick: I, onKeydown: B.value && !b.value && P }, { default: () => {
      var G;
      return [ct(B.value || h.value, "v-list-item"), x && d("div", { key: "prepend", class: "v-list-item__prepend" }, [l.prepend ? d(we, { key: "prepend-defaults", disabled: !Y, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: !0 } } }, { default: () => {
        var X;
        return [(X = l.prepend) == null ? void 0 : X.call(l, q.value)];
      } }) : d(fe, null, [e.prependAvatar && d(Ln, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && d(de, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), d("div", { class: "v-list-item__spacer" }, null)]), d("div", { class: "v-list-item__content", "data-no-activator": "" }, [W && d(dr, { key: "title" }, { default: () => {
        var X;
        return [((X = l.title) == null ? void 0 : X.call(l, { title: e.title })) ?? e.title];
      } }), j && d(cr, { key: "subtitle" }, { default: () => {
        var X;
        return [((X = l.subtitle) == null ? void 0 : X.call(l, { subtitle: e.subtitle })) ?? e.subtitle];
      } }), (G = l.default) == null ? void 0 : G.call(l, q.value)]), L && d("div", { key: "append", class: "v-list-item__append" }, [l.append ? d(we, { key: "append-defaults", disabled: !F, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: !0 } } }, { default: () => {
        var X;
        return [(X = l.append) == null ? void 0 : X.call(l, q.value)];
      } }) : d(fe, null, [e.appendIcon && d(de, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && d(Ln, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), d("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[Qe("ripple"), B.value && e.ripple]]);
  }), {};
} }), vr = H({ color: String, inset: Boolean, sticky: Boolean, title: String, ...se(), ...ze() }, "VListSubheader"), fr = Q()({ name: "VListSubheader", props: vr(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: l, textColorStyles: a } = Je(ne(e, "color"));
  return ae(() => {
    const i = !(!n.default && !e.title);
    return d(e.tag, { class: ["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, l.value, e.class], style: [{ textColorStyles: a }, e.style] }, { default: () => {
      var c;
      return [i && d("div", { class: "v-list-subheader__text" }, [((c = n.default) == null ? void 0 : c.call(n)) ?? e.title])];
    } });
  }), {};
} }), yr = H({ color: String, inset: Boolean, length: [Number, String], thickness: [Number, String], vertical: Boolean, ...se(), ...Be() }, "VDivider"), mr = Q()({ name: "VDivider", props: yr(), setup(e, t) {
  let { attrs: n } = t;
  const { themeClasses: l } = _e(e), { textColorClasses: a, textColorStyles: i } = Je(ne(e, "color")), c = v(() => {
    const s = {};
    return e.length && (s[e.vertical ? "maxHeight" : "maxWidth"] = te(e.length)), e.thickness && (s[e.vertical ? "borderRightWidth" : "borderTopWidth"] = te(e.thickness)), s;
  });
  return ae(() => d("hr", { class: [{ "v-divider": !0, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, l.value, a.value, e.class], style: [c.value, i.value, e.style], "aria-orientation": n.role && n.role !== "separator" ? void 0 : e.vertical ? "vertical" : "horizontal", role: `${n.role || "separator"}` }, null)), {};
} }), gr = H({ items: Array, returnObject: Boolean }, "VListChildren"), Da = Q()({ name: "VListChildren", props: gr(), setup(e, t) {
  let { slots: n } = t;
  return Pa(), () => {
    var l, a;
    return ((l = n.default) == null ? void 0 : l.call(n)) ?? ((a = e.items) == null ? void 0 : a.map((i) => {
      var f, p;
      let { children: c, props: s, type: o, raw: r } = i;
      if (o === "divider")
        return ((f = n.divider) == null ? void 0 : f.call(n, { props: s })) ?? d(mr, s, null);
      if (o === "subheader")
        return ((p = n.subheader) == null ? void 0 : p.call(n, { props: s })) ?? d(fr, s, null);
      const y = { subtitle: n.subtitle ? (g) => {
        var h;
        return (h = n.subtitle) == null ? void 0 : h.call(n, { ...g, item: r });
      } : void 0, prepend: n.prepend ? (g) => {
        var h;
        return (h = n.prepend) == null ? void 0 : h.call(n, { ...g, item: r });
      } : void 0, append: n.append ? (g) => {
        var h;
        return (h = n.append) == null ? void 0 : h.call(n, { ...g, item: r });
      } : void 0, title: n.title ? (g) => {
        var h;
        return (h = n.title) == null ? void 0 : h.call(n, { ...g, item: r });
      } : void 0 }, m = So.filterProps(s);
      return c ? d(So, Z({ value: s == null ? void 0 : s.value }, m), { activator: (g) => {
        let { props: h } = g;
        const b = { ...s, ...h, value: e.returnObject ? r : s.value };
        return n.header ? n.header({ props: b }) : d(zt, b, y);
      }, default: () => d(Da, { items: c }, n) }) : n.item ? n.item({ props: s }) : d(zt, Z(s, { value: e.returnObject ? r : s.value }), y);
    }));
  };
} }), La = H({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, returnObject: Boolean, valueComparator: { type: Function, default: at } }, "list-items");
function vl(e, t) {
  const n = Xe(t, e.itemTitle, t), l = Xe(t, e.itemValue, n), a = Xe(t, e.itemChildren), i = { title: n, value: l, ...e.itemProps === !0 ? typeof t != "object" || t == null || Array.isArray(t) ? void 0 : "children" in t ? bn(t, ["children"]) : t : Xe(t, e.itemProps) };
  return { title: String(i.title ?? ""), value: i.value, props: i, children: Array.isArray(a) ? Wa(e, a) : void 0, raw: t };
}
function Wa(e, t) {
  const n = [];
  for (const l of t)
    n.push(vl(e, l));
  return n;
}
function hr(e, t) {
  const n = Xe(t, e.itemType, "item"), l = function(s) {
    return typeof s == "string" || typeof s == "number" || typeof s == "boolean";
  }(t) ? t : Xe(t, e.itemTitle), a = Xe(t, e.itemValue, void 0), i = Xe(t, e.itemChildren), c = { title: l, value: a, ...e.itemProps === !0 ? bn(t, ["children"]) : Xe(t, e.itemProps) };
  return { type: n, title: c.title, value: c.value, props: c, children: n === "item" && i ? Ma(e, i) : void 0, raw: t };
}
function Ma(e, t) {
  const n = [];
  for (const l of t)
    n.push(hr(e, l));
  return n;
}
const br = H({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, nav: Boolean, ...ir({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Nn(), ...se(), ...Ue(), ...Cn(), ...Gn(), itemType: { type: String, default: "type" }, ...La(), ...en(), ...ze(), ...Be(), ...rn({ variant: "text" }) }, "VList"), Cr = Q()({ name: "VList", props: br(), emits: { "update:selected": (e) => !0, "update:opened": (e) => !0, "click:open": (e) => !0, "click:select": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { items: l } = function(S) {
    return { items: v(() => Ma(S, S.items)) };
  }(e), { themeClasses: a } = _e(e), { backgroundColorClasses: i, backgroundColorStyles: c } = Dn(ne(e, "bgColor")), { borderClasses: s } = jn(e), { densityClasses: o } = tn(e), { dimensionStyles: r } = In(e), { elevationClasses: y } = qn(e), { roundedClasses: m } = nn(e), { open: f, select: p } = rr(e), g = v(() => e.lines ? `v-list--${e.lines}-line` : void 0), h = ne(e, "activeColor"), b = ne(e, "baseColor"), B = ne(e, "color");
  Pa(), Rn({ VListGroup: { activeColor: h, baseColor: b, color: B }, VListItem: { activeClass: ne(e, "activeClass"), activeColor: h, baseColor: b, color: B, density: ne(e, "density"), disabled: ne(e, "disabled"), lines: ne(e, "lines"), nav: ne(e, "nav"), slim: ne(e, "slim"), variant: ne(e, "variant") } });
  const V = re(!1), _ = M();
  function U(S) {
    V.value = !0;
  }
  function z(S) {
    V.value = !1;
  }
  function D(S) {
    var O;
    V.value || S.relatedTarget && ((O = _.value) != null && O.contains(S.relatedTarget)) || E();
  }
  function R(S) {
    if (_.value) {
      if (S.key === "ArrowDown")
        E("next");
      else if (S.key === "ArrowUp")
        E("prev");
      else if (S.key === "Home")
        E("first");
      else {
        if (S.key !== "End")
          return;
        E("last");
      }
      S.preventDefault();
    }
  }
  function E(S) {
    if (_.value)
      return Vt(_.value, S);
  }
  return ae(() => d(e.tag, { ref: _, class: ["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav }, a.value, i.value, s.value, o.value, y.value, g.value, m.value, e.class], style: [c.value, r.value, e.style], tabindex: e.disabled || V.value ? -1 : 0, role: "listbox", "aria-activedescendant": void 0, onFocusin: U, onFocusout: z, onFocus: D, onKeydown: R }, { default: () => [d(Da, { items: l.value, returnObject: e.returnObject }, n)] })), { open: f, select: p, focus: E };
} });
function Qt(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
function Bo(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: n, align: l } = e;
    return Qt({ x: l === "left" ? 0 : l === "center" ? t.width / 2 : l === "right" ? t.width : l, y: n === "top" ? 0 : n === "bottom" ? t.height : n }, t);
  }
  if (e.side === "left" || e.side === "right") {
    const { side: n, align: l } = e;
    return Qt({ x: n === "left" ? 0 : n === "right" ? t.width : n, y: l === "top" ? 0 : l === "center" ? t.height / 2 : l === "bottom" ? t.height : l }, t);
  }
  return Qt({ x: t.width / 2, y: t.height / 2 }, t);
}
const Ra = { static: function() {
}, connected: function(e, t, n) {
  (Array.isArray(e.target.value) || function(p) {
    for (; p; ) {
      if (window.getComputedStyle(p).position === "fixed")
        return !0;
      p = p.offsetParent;
    }
    return !1;
  }(e.target.value)) && Object.assign(n.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: l, preferredOrigin: a } = kl(() => {
    const p = il(t.location, e.isRtl.value), g = t.origin === "overlap" ? p : t.origin === "auto" ? Xt(p) : il(t.origin, e.isRtl.value);
    return p.side === g.side && p.align === Kt(g).align ? { preferredAnchor: Xl(p), preferredOrigin: Xl(g) } : { preferredAnchor: p, preferredOrigin: g };
  }), [i, c, s, o] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((p) => v(() => {
    const g = parseFloat(t[p]);
    return isNaN(g) ? 1 / 0 : g;
  })), r = v(() => {
    if (Array.isArray(t.offset))
      return t.offset;
    if (typeof t.offset == "string") {
      const p = t.offset.split(" ").map(parseFloat);
      return p.length < 2 && p.push(0), p;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let y = !1;
  const m = new ResizeObserver(() => {
    y && f();
  });
  function f() {
    if (y = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => y = !0);
    }), !e.target.value || !e.contentEl.value)
      return;
    const p = Yo(e.target.value), g = function(S, O) {
      O ? S.style.removeProperty("left") : S.style.removeProperty("right");
      const C = wl(S);
      return O ? C.x += parseFloat(S.style.right || 0) : C.x -= parseFloat(S.style.left || 0), C.y -= parseFloat(S.style.top || 0), C;
    }(e.contentEl.value, e.isRtl.value), h = Pt(e.contentEl.value);
    h.length || (h.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (g.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), g.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const b = h.reduce((S, O) => {
      const C = O.getBoundingClientRect(), k = new vn({ x: O === document.documentElement ? 0 : C.x, y: O === document.documentElement ? 0 : C.y, width: O.clientWidth, height: O.clientHeight });
      return S ? new vn({ x: Math.max(S.left, k.left), y: Math.max(S.top, k.top), width: Math.min(S.right, k.right) - Math.max(S.left, k.left), height: Math.min(S.bottom, k.bottom) - Math.max(S.top, k.top) }) : k;
    }, void 0);
    b.x += 12, b.y += 12, b.width -= 24, b.height -= 24;
    let B = { anchor: l.value, origin: a.value };
    function V(S) {
      const O = new vn(g), C = Bo(S.anchor, p), k = Bo(S.origin, O);
      let { x: A, y: N } = (I = k, { x: (q = C).x - I.x, y: q.y - I.y });
      var q, I;
      switch (S.anchor.side) {
        case "top":
          N -= r.value[0];
          break;
        case "bottom":
          N += r.value[0];
          break;
        case "left":
          A -= r.value[0];
          break;
        case "right":
          A += r.value[0];
      }
      switch (S.anchor.align) {
        case "top":
          N -= r.value[1];
          break;
        case "bottom":
          N += r.value[1];
          break;
        case "left":
          A -= r.value[1];
          break;
        case "right":
          A += r.value[1];
      }
      return O.x += A, O.y += N, O.width = Math.min(O.width, s.value), O.height = Math.min(O.height, o.value), { overflows: Jl(O, b), x: A, y: N };
    }
    let _ = 0, U = 0;
    const z = { x: 0, y: 0 }, D = { x: !1, y: !1 };
    let R = -1;
    for (; ; ) {
      if (R++ > 10) {
        Rt("Vuetify error: Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const { x: S, y: O, overflows: C } = V(B);
      _ += S, U += O, g.x += S, g.y += O;
      {
        const k = Kl(B.anchor), A = C.x.before || C.x.after, N = C.y.before || C.y.after;
        let q = !1;
        if (["x", "y"].forEach((I) => {
          if (I === "x" && A && !D.x || I === "y" && N && !D.y) {
            const P = { anchor: { ...B.anchor }, origin: { ...B.origin } }, $ = I === "x" ? k === "y" ? Kt : Xt : k === "y" ? Xt : Kt;
            P.anchor = $(P.anchor), P.origin = $(P.origin);
            const { overflows: W } = V(P);
            (W[I].before <= C[I].before && W[I].after <= C[I].after || W[I].before + W[I].after < (C[I].before + C[I].after) / 2) && (B = P, q = D[I] = !0);
          }
        }), q)
          continue;
      }
      C.x.before && (_ += C.x.before, g.x += C.x.before), C.x.after && (_ -= C.x.after, g.x -= C.x.after), C.y.before && (U += C.y.before, g.y += C.y.before), C.y.after && (U -= C.y.after, g.y -= C.y.after);
      {
        const k = Jl(g, b);
        z.x = b.width - k.x.before - k.x.after, z.y = b.height - k.y.before - k.y.after, _ += k.x.before, g.x += k.x.before, U += k.y.before, g.y += k.y.before;
      }
      break;
    }
    const E = Kl(B.anchor);
    return Object.assign(n.value, { "--v-overlay-anchor-origin": `${B.anchor.side} ${B.anchor.align}`, transformOrigin: `${B.origin.side} ${B.origin.align}`, top: te(el(U)), left: e.isRtl.value ? void 0 : te(el(_)), right: e.isRtl.value ? te(el(-_)) : void 0, minWidth: te(E === "y" ? Math.min(i.value, p.width) : i.value), maxWidth: te(xo(An(z.x, i.value === 1 / 0 ? 0 : i.value, s.value))), maxHeight: te(xo(An(z.y, c.value === 1 / 0 ? 0 : c.value, o.value))) }), { available: z, contentBox: g };
  }
  return K([e.target, e.contentEl], (p, g) => {
    let [h, b] = p, [B, V] = g;
    B && !Array.isArray(B) && m.unobserve(B), h && !Array.isArray(h) && m.observe(h), V && m.unobserve(V), b && m.observe(b);
  }, { immediate: !0 }), ke(() => {
    m.disconnect();
  }), K(() => [l.value, a.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => f()), Ie(() => {
    const p = f();
    if (!p)
      return;
    const { available: g, contentBox: h } = p;
    h.height > g.y && requestAnimationFrame(() => {
      f(), requestAnimationFrame(() => {
        f();
      });
    });
  }), { updateLocation: f };
} }, Ir = H({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in Ra }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array] }, "VOverlay-location-strategies");
function el(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function xo(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let fl = !0;
const Dt = [];
let ko = -1;
function yl() {
  cancelAnimationFrame(ko), ko = requestAnimationFrame(() => {
    const e = Dt.shift();
    e && e(), Dt.length ? yl() : fl = !0;
  });
}
const kt = { none: null, close: function(e) {
  wo(e.targetEl.value ?? e.contentEl.value, function(t) {
    e.isActive.value = !1;
  });
}, block: function(e, t) {
  var s;
  const n = (s = e.root.value) == null ? void 0 : s.offsetParent, l = [.../* @__PURE__ */ new Set([...Pt(e.targetEl.value, t.contained ? n : void 0), ...Pt(e.contentEl.value, t.contained ? n : void 0)])].filter((o) => !o.classList.contains("v-overlay-scroll-blocked")), a = window.innerWidth - document.documentElement.offsetWidth, i = (c = n || document.documentElement, Vl(c) && c);
  var c;
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((o, r) => {
    o.style.setProperty("--v-body-scroll-x", te(-o.scrollLeft)), o.style.setProperty("--v-body-scroll-y", te(-o.scrollTop)), o !== document.documentElement && o.style.setProperty("--v-scrollbar-offset", te(a)), o.classList.add("v-overlay-scroll-blocked");
  }), ke(() => {
    l.forEach((o, r) => {
      const y = parseFloat(o.style.getPropertyValue("--v-body-scroll-x")), m = parseFloat(o.style.getPropertyValue("--v-body-scroll-y"));
      o.style.removeProperty("--v-body-scroll-x"), o.style.removeProperty("--v-body-scroll-y"), o.style.removeProperty("--v-scrollbar-offset"), o.classList.remove("v-overlay-scroll-blocked"), o.scrollLeft = -y, o.scrollTop = -m;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}, reposition: function(e, t, n) {
  let l = !1, a = -1, i = -1;
  function c(s) {
    var o;
    o = () => {
      var m, f;
      const r = performance.now();
      (f = (m = e.updateLocation).value) == null || f.call(m, s), l = (performance.now() - r) / (1e3 / 60) > 2;
    }, !fl || Dt.length ? (Dt.push(o), yl()) : (fl = !1, o(), yl());
  }
  i = (typeof requestIdleCallback > "u" ? (s) => s() : requestIdleCallback)(() => {
    n.run(() => {
      wo(e.targetEl.value ?? e.contentEl.value, (s) => {
        l ? (cancelAnimationFrame(a), a = requestAnimationFrame(() => {
          a = requestAnimationFrame(() => {
            c(s);
          });
        })) : c(s);
      });
    });
  }), ke(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(a);
  });
} }, Sr = H({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in kt } }, "VOverlay-scroll-strategies");
function wo(e, t) {
  const n = [document, ...Pt(e)];
  n.forEach((l) => {
    l.addEventListener("scroll", t, { passive: !0 });
  }), ke(() => {
    n.forEach((l) => {
      l.removeEventListener("scroll", t);
    });
  });
}
const ml = Symbol.for("vuetify:v-menu"), Br = H({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay"), xr = H({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...Br() }, "VOverlay-activator");
function kr(e, t) {
  let { isActive: n, isTop: l } = t;
  const a = Se("useActivator"), i = M();
  let c = !1, s = !1, o = !0;
  const r = v(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), y = v(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !r.value), { runOpenDelay: m, runCloseDelay: f } = function(C, k) {
    const A = {}, N = (q) => () => {
      if (!$e)
        return Promise.resolve(!0);
      const I = q === "openDelay";
      return A.closeDelay && window.clearTimeout(A.closeDelay), delete A.closeDelay, A.openDelay && window.clearTimeout(A.openDelay), delete A.openDelay, new Promise((P) => {
        const $ = parseInt(C[q] ?? 0, 10);
        A[q] = window.setTimeout(() => {
          k == null || k(I), P(I);
        }, $);
      });
    };
    return { runCloseDelay: N("closeDelay"), runOpenDelay: N("openDelay") };
  }(e, (C) => {
    C !== (e.openOnHover && c || r.value && s) || e.openOnHover && n.value && !l.value || (n.value !== C && (o = !0), n.value = C);
  }), p = M(), g = (C) => {
    C.stopPropagation(), i.value = C.currentTarget || C.target, n.value || (p.value = [C.clientX, C.clientY]), n.value = !n.value;
  }, h = (C) => {
    var k;
    (k = C.sourceCapabilities) != null && k.firesTouchEvents || (c = !0, i.value = C.currentTarget || C.target, m());
  }, b = (C) => {
    c = !1, f();
  }, B = (C) => {
    At(C.target, ":focus-visible") !== !1 && (s = !0, C.stopPropagation(), i.value = C.currentTarget || C.target, m());
  }, V = (C) => {
    s = !1, C.stopPropagation(), f();
  }, _ = v(() => {
    const C = {};
    return y.value && (C.onClick = g), e.openOnHover && (C.onMouseenter = h, C.onMouseleave = b), r.value && (C.onFocus = B, C.onBlur = V), C;
  }), U = v(() => {
    const C = {};
    if (e.openOnHover && (C.onMouseenter = () => {
      c = !0, m();
    }, C.onMouseleave = () => {
      c = !1, f();
    }), r.value && (C.onFocusin = () => {
      s = !0, m();
    }, C.onFocusout = () => {
      s = !1, f();
    }), e.closeOnContentClick) {
      const k = ve(ml, null);
      C.onClick = () => {
        n.value = !1, k == null || k.closeParents();
      };
    }
    return C;
  }), z = v(() => {
    const C = {};
    return e.openOnHover && (C.onMouseenter = () => {
      o && (c = !0, o = !1, m());
    }, C.onMouseleave = () => {
      c = !1, f();
    }), C;
  });
  K(l, (C) => {
    !C || (!e.openOnHover || c || r.value && s) && (!r.value || s || e.openOnHover && c) || (n.value = !1);
  }), K(n, (C) => {
    C || setTimeout(() => {
      p.value = void 0;
    });
  }, { flush: "post" });
  const D = M();
  Ge(() => {
    D.value && Ie(() => {
      i.value = wt(D.value);
    });
  });
  const R = M(), E = v(() => e.target === "cursor" && p.value ? p.value : R.value ? wt(R.value) : Fo(e.target, a) || i.value), S = v(() => Array.isArray(E.value) ? void 0 : E.value);
  let O;
  return K(() => !!e.activator, (C) => {
    C && $e ? (O = Cl(), O.run(() => {
      (function(k, A, N) {
        let { activatorEl: q, activatorEvents: I } = N;
        function P() {
          let j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : W(), F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : k.activatorProps;
          j && function(L, Y) {
            Object.keys(Y).forEach((x) => {
              if (ol(x)) {
                const w = Ul(x), T = ht.get(L);
                if (Y[x] == null)
                  T == null || T.forEach((G) => {
                    const [X, oe] = G;
                    X === w && (L.removeEventListener(w, oe), T.delete(G));
                  });
                else if (!T || ![...T].some((G) => G[0] === w && G[1] === Y[x])) {
                  L.addEventListener(w, Y[x]);
                  const G = T || /* @__PURE__ */ new Set();
                  G.add([w, Y[x]]), ht.has(L) || ht.set(L, G);
                }
              } else
                Y[x] == null ? L.removeAttribute(x) : L.setAttribute(x, Y[x]);
            });
          }(j, Z(I.value, F));
        }
        function $() {
          let j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : W(), F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : k.activatorProps;
          j && function(L, Y) {
            Object.keys(Y).forEach((x) => {
              if (ol(x)) {
                const w = Ul(x), T = ht.get(L);
                T == null || T.forEach((G) => {
                  const [X, oe] = G;
                  X === w && (L.removeEventListener(w, oe), T.delete(G));
                });
              } else
                L.removeAttribute(x);
            });
          }(j, Z(I.value, F));
        }
        function W() {
          const j = Fo(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : k.activator, A);
          return q.value = (j == null ? void 0 : j.nodeType) === Node.ELEMENT_NODE ? j : void 0, q.value;
        }
        K(() => k.activator, (j, F) => {
          if (F && j !== F) {
            const L = W(F);
            L && $(L);
          }
          j && Ie(() => P());
        }, { immediate: !0 }), K(() => k.activatorProps, () => {
          P();
        }), ke(() => {
          $();
        });
      })(e, a, { activatorEl: i, activatorEvents: _ });
    })) : O && O.stop();
  }, { flush: "post", immediate: !0 }), ke(() => {
    O == null || O.stop();
  }), { activatorEl: i, activatorRef: D, target: E, targetEl: S, targetRef: R, activatorEvents: _, contentEvents: U, scrimEvents: z };
}
function Fo(e, t) {
  var l, a;
  if (!e)
    return;
  let n;
  if (e === "parent") {
    let i = (a = (l = t == null ? void 0 : t.proxy) == null ? void 0 : l.$el) == null ? void 0 : a.parentNode;
    for (; i != null && i.hasAttribute("data-no-activator"); )
      i = i.parentNode;
    n = i;
  } else
    n = typeof e == "string" ? document.querySelector(e) : "$el" in e ? e.$el : e;
  return n;
}
const wr = Symbol.for("vuetify:display");
function Na() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : qe();
  const n = ve(wr);
  if (!n)
    throw new Error("Could not find Vuetify display injection");
  const l = v(() => {
    if (!e.mobileBreakpoint)
      return n.mobile.value;
    const i = typeof e.mobileBreakpoint == "number" ? e.mobileBreakpoint : n.thresholds.value[e.mobileBreakpoint];
    return n.width.value < i;
  }), a = v(() => t ? { [`${t}--mobile`]: l.value } : {});
  return { ...n, displayClasses: a, mobile: l };
}
const Fr = H({ eager: Boolean }, "lazy");
function ja() {
  const e = Se("useScopeId").vnode.scopeId;
  return { scopeId: e ? { [e]: "" } : void 0 };
}
const Vo = Symbol.for("vuetify:stack"), Yn = Le([]);
function Vr() {
  return !0;
}
function Ao(e, t, n) {
  if (!e || Ga(e, n) === !1)
    return !1;
  const l = Ko(t);
  if (typeof ShadowRoot < "u" && l instanceof ShadowRoot && l.host === e.target)
    return !1;
  const a = (typeof n.value == "object" && n.value.include || (() => []))();
  return a.push(t), !a.some((i) => i == null ? void 0 : i.contains(e.target));
}
function Ga(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || Vr)(e);
}
function _o(e, t) {
  const n = Ko(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const Ar = { mounted(e, t) {
  const n = (a) => function(i, c, s) {
    const o = typeof s.value == "function" ? s.value : s.value.handler;
    c._clickOutside.lastMousedownWasOutside && Ao(i, c, s) && setTimeout(() => {
      Ga(i, s) && o && o(i);
    }, 0);
  }(a, e, t), l = (a) => {
    e._clickOutside.lastMousedownWasOutside = Ao(a, e, t);
  };
  _o(e, (a) => {
    a.addEventListener("click", n, !0), a.addEventListener("mousedown", l, !0);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: !1 }), e._clickOutside[t.instance.$.uid] = { onClick: n, onMousedown: l };
}, unmounted(e, t) {
  e._clickOutside && (_o(e, (n) => {
    var i;
    if (!n || !((i = e._clickOutside) != null && i[t.instance.$.uid]))
      return;
    const { onClick: l, onMousedown: a } = e._clickOutside[t.instance.$.uid];
    n.removeEventListener("click", l, !0), n.removeEventListener("mousedown", a, !0);
  }), delete e._clickOutside[t.instance.$.uid]);
} };
function _r(e) {
  const { modelValue: t, color: n, ...l } = e;
  return d(gn, { name: "fade-transition", appear: !0 }, { default: () => [e.modelValue && d("div", Z({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, l), null)] });
}
const qa = H({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: !0 }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: !0 }, zIndex: { type: [Number, String], default: 2e3 }, ...xr(), ...se(), ...Cn(), ...Fr(), ...Ir(), ...Sr(), ...Be(), ...ut() }, "VOverlay"), Oo = Q()({ name: "VOverlay", directives: { ClickOutside: Ar }, inheritAttrs: !1, props: { _disableGlobalStack: Boolean, ...qa() }, emits: { "click:outside": (e) => !0, "update:modelValue": (e) => !0, afterLeave: () => !0 }, setup(e, t) {
  var L, Y;
  let { slots: n, attrs: l, emit: a } = t;
  const i = me(e, "modelValue"), c = v({ get: () => i.value, set: (x) => {
    x && e.disabled || (i.value = x);
  } }), { teleportTarget: s } = function(x) {
    return { teleportTarget: v(() => {
      const w = x.value;
      if (w === !0 || !$e)
        return;
      const T = w === !1 ? document.body : typeof w == "string" ? document.querySelector(w) : w;
      if (T == null)
        return void Rt(`Unable to locate target ${w}`);
      let G = T.querySelector(":scope > .v-overlay-container");
      return G || (G = document.createElement("div"), G.className = "v-overlay-container", T.appendChild(G)), G;
    }) };
  }(v(() => e.attach || e.contained)), { themeClasses: o } = _e(e), { rtlClasses: r, isRtl: y } = st(), { hasContent: m, onAfterLeave: f } = function(x, w) {
    const T = re(!1), G = v(() => T.value || x.eager || w.value);
    return K(w, () => T.value = !0), { isBooted: T, hasContent: G, onAfterLeave: function() {
      x.eager || (T.value = !1);
    } };
  }(e, c), p = Dn(v(() => typeof e.scrim == "string" ? e.scrim : null)), { globalTop: g, localTop: h, stackStyles: b } = function(x, w, T) {
    const G = Se("useStack"), X = !T, oe = ve(Vo, void 0), be = Le({ activeChildren: /* @__PURE__ */ new Set() });
    De(Vo, be);
    const Ve = re(+w.value);
    fn(x, () => {
      var Un;
      const gt = (Un = Yn.at(-1)) == null ? void 0 : Un[1];
      Ve.value = gt ? gt + 10 : +w.value, X && Yn.push([G.uid, Ve.value]), oe == null || oe.activeChildren.add(G.uid), ke(() => {
        if (X) {
          const Qa = on(Yn).findIndex((ei) => ei[0] === G.uid);
          Yn.splice(Qa, 1);
        }
        oe == null || oe.activeChildren.delete(G.uid);
      });
    });
    const Oe = re(!0);
    X && Ge(() => {
      var Un;
      const gt = ((Un = Yn.at(-1)) == null ? void 0 : Un[0]) === G.uid;
      setTimeout(() => Oe.value = gt);
    });
    const Za = v(() => !be.activeChildren.size);
    return { globalTop: bl(Oe), localTop: Za, stackStyles: v(() => ({ zIndex: Ve.value })) };
  }(c, ne(e, "zIndex"), e._disableGlobalStack), { activatorEl: B, activatorRef: V, target: _, targetEl: U, targetRef: z, activatorEvents: D, contentEvents: R, scrimEvents: E } = kr(e, { isActive: c, isTop: h }), { dimensionStyles: S } = In(e), O = function() {
    if (!$e)
      return re(!1);
    const { ssr: x } = Na();
    if (x) {
      const w = re(!1);
      return Mn(() => {
        w.value = !0;
      }), w;
    }
    return re(!0);
  }(), { scopeId: C } = ja();
  K(() => e.disabled, (x) => {
    x && (c.value = !1);
  });
  const k = M(), A = M(), { contentStyles: N, updateLocation: q } = function(x, w) {
    const T = M({}), G = M();
    function X(oe) {
      var be;
      (be = G.value) == null || be.call(G, oe);
    }
    return $e && (fn(() => !(!w.isActive.value || !x.locationStrategy), (oe) => {
      var be, Ve;
      K(() => x.locationStrategy, oe), ke(() => {
        G.value = void 0;
      }), typeof x.locationStrategy == "function" ? G.value = (be = x.locationStrategy(w, x, T)) == null ? void 0 : be.updateLocation : G.value = (Ve = Ra[x.locationStrategy](w, x, T)) == null ? void 0 : Ve.updateLocation;
    }), window.addEventListener("resize", X, { passive: !0 }), ke(() => {
      window.removeEventListener("resize", X), G.value = void 0;
    })), { contentStyles: T, updateLocation: G };
  }(e, { isRtl: y, contentEl: A, target: _, isActive: c });
  function I(x) {
    a("click:outside", x), e.persistent ? F() : c.value = !1;
  }
  function P() {
    return c.value && g.value;
  }
  function $(x) {
    var w, T;
    x.key === "Escape" && g.value && (e.persistent ? F() : (c.value = !1, (w = A.value) != null && w.contains(document.activeElement) && ((T = B.value) == null || T.focus())));
  }
  (function(x, w) {
    if (!$e)
      return;
    let T;
    Ge(async () => {
      T == null || T.stop(), w.isActive.value && x.scrollStrategy && (T = Cl(), await Ie(), T.active && T.run(() => {
        var G;
        typeof x.scrollStrategy == "function" ? x.scrollStrategy(w, x, T) : (G = kt[x.scrollStrategy]) == null || G.call(kt, w, x, T);
      }));
    }), ke(() => {
      T == null || T.stop();
    });
  })(e, { root: k, contentEl: A, targetEl: U, isActive: c, updateLocation: q }), $e && K(c, (x) => {
    x ? window.addEventListener("keydown", $) : window.removeEventListener("keydown", $);
  }, { immediate: !0 });
  const W = (Y = (L = Se("useRouter")) == null ? void 0 : L.proxy) == null ? void 0 : Y.$router;
  fn(() => e.closeOnBack, () => {
    (function(x, w) {
      let T, G, X = !1;
      function oe(be) {
        var Ve;
        (Ve = be.state) != null && Ve.replaced || (X = !0, setTimeout(() => X = !1));
      }
      $e && (Ie(() => {
        window.addEventListener("popstate", oe), T = x == null ? void 0 : x.beforeEach((be, Ve, Oe) => {
          Zt ? X ? w(Oe) : Oe() : setTimeout(() => X ? w(Oe) : Oe()), Zt = !0;
        }), G = x == null ? void 0 : x.afterEach(() => {
          Zt = !1;
        });
      }), ke(() => {
        window.removeEventListener("popstate", oe), T == null || T(), G == null || G();
      }));
    })(W, (x) => {
      g.value && c.value ? (x(!1), e.persistent ? F() : c.value = !1) : x();
    });
  });
  const j = M();
  function F() {
    e.noClickAnimation || A.value && xn(A.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: Ot });
  }
  return K(() => c.value && (e.absolute || e.contained) && s.value == null, (x) => {
    if (x) {
      const w = Zo(k.value);
      w && w !== document.scrollingElement && (j.value = w.scrollTop);
    }
  }), ae(() => {
    var x;
    return d(fe, null, [(x = n.activator) == null ? void 0 : x.call(n, { isActive: c.value, props: Z({ ref: V, targetRef: z }, D.value, e.activatorProps) }), O.value && m.value && d(sn, { disabled: !s.value, to: s.value }, { default: () => [d("div", Z({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": c.value, "v-overlay--contained": e.contained }, o.value, r.value, e.class], style: [b.value, { top: te(j.value) }, e.style], ref: k }, C, l), [d(_r, Z({ color: p, modelValue: c.value && !!e.scrim }, E.value), null), d(ln, { appear: !0, persisted: !0, transition: e.transition, target: _.value, onAfterLeave: () => {
      f(), a("afterLeave");
    } }, { default: () => {
      var w;
      return [Fe(d("div", Z({ ref: A, class: ["v-overlay__content", e.contentClass], style: [S.value, N.value] }, R.value, e.contentProps), [(w = n.default) == null ? void 0 : w.call(n, { isActive: c })]), [[Wn, c.value], [Qe("click-outside"), { handler: I, closeConditional: P, include: () => [B.value] }]])];
    } })])] })]);
  }), { activatorEl: B, target: _, animateClick: F, contentEl: A, globalTop: g, localTop: h, updateLocation: q };
} }), nl = Symbol("Forwarded refs");
function tl(e, t) {
  let n = e;
  for (; n; ) {
    const l = Reflect.getOwnPropertyDescriptor(n, t);
    if (l)
      return l;
    n = Object.getPrototypeOf(n);
  }
}
function Ht(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
    n[l - 1] = arguments[l];
  return e[nl] = n, new Proxy(e, { get(a, i) {
    if (Reflect.has(a, i))
      return Reflect.get(a, i);
    if (typeof i != "symbol" && !i.startsWith("$") && !i.startsWith("__")) {
      for (const c of n)
        if (c.value && Reflect.has(c.value, i)) {
          const s = Reflect.get(c.value, i);
          return typeof s == "function" ? s.bind(c.value) : s;
        }
    }
  }, has(a, i) {
    if (Reflect.has(a, i))
      return !0;
    if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))
      return !1;
    for (const c of n)
      if (c.value && Reflect.has(c.value, i))
        return !0;
    return !1;
  }, set(a, i, c) {
    if (Reflect.has(a, i))
      return Reflect.set(a, i, c);
    if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))
      return !1;
    for (const s of n)
      if (s.value && Reflect.has(s.value, i))
        return Reflect.set(s.value, i, c);
    return !1;
  }, getOwnPropertyDescriptor(a, i) {
    var s;
    const c = Reflect.getOwnPropertyDescriptor(a, i);
    if (c)
      return c;
    if (typeof i != "symbol" && !i.startsWith("$") && !i.startsWith("__")) {
      for (const o of n) {
        if (!o.value)
          continue;
        const r = tl(o.value, i) ?? ("_" in o.value ? tl((s = o.value._) == null ? void 0 : s.setupState, i) : void 0);
        if (r)
          return r;
      }
      for (const o of n) {
        const r = o.value && o.value[nl];
        if (!r)
          continue;
        const y = r.slice();
        for (; y.length; ) {
          const m = y.shift(), f = tl(m.value, i);
          if (f)
            return f;
          const p = m.value && m.value[nl];
          p && y.push(...p);
        }
      }
    }
  } });
}
const Or = H({ id: String, ...bn(qa({ closeDelay: 250, closeOnContentClick: !0, locationStrategy: "connected", openDelay: 300, scrim: !1, scrollStrategy: "reposition", transition: { component: ta } }), ["absolute"]) }, "VMenu"), Pr = Q()({ name: "VMenu", props: Or(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = me(e, "modelValue"), { scopeId: a } = ja(), i = Me(), c = v(() => e.id || `v-menu-${i}`), s = M(), o = ve(ml, null), r = re(0);
  async function y(h) {
    var V, _, U;
    const b = h.relatedTarget, B = h.target;
    await Ie(), l.value && b !== B && ((V = s.value) != null && V.contentEl) && ((_ = s.value) != null && _.globalTop) && ![document, s.value.contentEl].includes(B) && !s.value.contentEl.contains(B) && ((U = al(s.value.contentEl)[0]) == null || U.focus());
  }
  function m() {
    o == null || o.closeParents();
  }
  function f(h) {
    var b, B, V;
    !e.disabled && h.key === "Tab" && (qo(al((b = s.value) == null ? void 0 : b.contentEl, !1), h.shiftKey ? "prev" : "next", (_) => _.tabIndex >= 0) || (l.value = !1, (V = (B = s.value) == null ? void 0 : B.activatorEl) == null || V.focus()));
  }
  function p(h) {
    var B;
    if (e.disabled)
      return;
    const b = (B = s.value) == null ? void 0 : B.contentEl;
    b && l.value ? h.key === "ArrowDown" ? (h.preventDefault(), Vt(b, "next")) : h.key === "ArrowUp" && (h.preventDefault(), Vt(b, "prev")) : ["ArrowDown", "ArrowUp"].includes(h.key) && (l.value = !0, h.preventDefault(), setTimeout(() => setTimeout(() => p(h))));
  }
  De(ml, { register() {
    ++r.value;
  }, unregister() {
    --r.value;
  }, closeParents() {
    setTimeout(() => {
      r.value || (l.value = !1, o == null || o.closeParents());
    }, 40);
  } }), K(l, (h) => {
    h ? (o == null || o.register(), document.addEventListener("focusin", y, { once: !0 })) : (o == null || o.unregister(), document.removeEventListener("focusin", y));
  });
  const g = v(() => Z({ "aria-haspopup": "menu", "aria-expanded": String(l.value), "aria-owns": c.value, onKeydown: p }, e.activatorProps));
  return ae(() => {
    const h = Oo.filterProps(e);
    return d(Oo, Z({ ref: s, class: ["v-menu", e.class], style: e.style }, h, { modelValue: l.value, "onUpdate:modelValue": (b) => l.value = b, absolute: !0, activatorProps: g.value, "onClick:outside": m, onKeydown: f }, a), { activator: n.activator, default: function() {
      for (var b = arguments.length, B = new Array(b), V = 0; V < b; V++)
        B[V] = arguments[V];
      return d(we, { root: "VMenu" }, { default: () => {
        var _;
        return [(_ = n.default) == null ? void 0 : _.call(n, ...B)];
      } });
    } });
  }), Ht({ id: c, ΨopenChildren: r }, s);
} }), $r = H({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...se(), ...ut({ transition: { component: la } }) }, "VCounter"), Ua = Q()({ name: "VCounter", functional: !0, props: $r(), setup(e, t) {
  let { slots: n } = t;
  const l = v(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return ae(() => d(ln, { transition: e.transition }, { default: () => [Fe(d("div", { class: ["v-counter", e.class], style: e.style }, [n.default ? n.default({ counter: l.value, max: e.max, value: e.value }) : l.value]), [[Wn, e.active]])] })), {};
} }), Er = H({ floating: Boolean, ...se() }, "VFieldLabel"), It = Q()({ name: "VFieldLabel", props: Er(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => d(xa, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, n)), {};
} }), Tr = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Ll = H({ appendInnerIcon: ce, bgColor: String, clearable: Boolean, clearIcon: { type: ce, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: ce, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => Tr.includes(e) }, "onClick:clear": je(), "onClick:appendInner": je(), "onClick:prependInner": je(), ...se(), ...Tl(), ...en(), ...Be() }, "VField"), Wl = Q()({ name: "VField", inheritAttrs: !1, props: { id: String, ...Aa(), ...Ll() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: a } = t;
  const { themeClasses: i } = _e(e), { loaderClasses: c } = Gt(e), { focusClasses: s, isFocused: o, focus: r, blur: y } = yt(e), { InputIcon: m } = Va(e), { roundedClasses: f } = nn(e), { rtlClasses: p } = st(), g = v(() => e.dirty || e.active), h = v(() => !(e.singleLine || !e.label && !a.label)), b = Me(), B = v(() => e.id || `input-${b}`), V = v(() => `${B.value}-messages`), _ = M(), U = M(), z = M(), D = v(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: R, backgroundColorStyles: E } = Dn(ne(e, "bgColor")), { textColorClasses: S, textColorStyles: O } = Je(v(() => e.error || e.disabled ? void 0 : g.value && o.value ? e.color : e.baseColor));
  K(g, (A) => {
    if (h.value) {
      const N = _.value.$el, q = U.value.$el;
      requestAnimationFrame(() => {
        const I = wl(N), P = q.getBoundingClientRect(), $ = P.x - I.x, W = P.y - I.y - (I.height / 2 - P.height / 2), j = P.width / 0.75, F = Math.abs(j - I.width) > 1 ? { maxWidth: te(j) } : void 0, L = getComputedStyle(N), Y = getComputedStyle(q), x = 1e3 * parseFloat(L.transitionDuration) || 150, w = parseFloat(Y.getPropertyValue("--v-field-label-scale")), T = Y.getPropertyValue("color");
        N.style.visibility = "visible", q.style.visibility = "hidden", xn(N, { transform: `translate(${$}px, ${W}px) scale(${w})`, color: T, ...F }, { duration: x, easing: Ot, direction: A ? "normal" : "reverse" }).finished.then(() => {
          N.style.removeProperty("visibility"), q.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const C = v(() => ({ isActive: g, isFocused: o, controlRef: z, blur: y, focus: r }));
  function k(A) {
    A.target !== document.activeElement && A.preventDefault();
  }
  return ae(() => {
    var $, W, j;
    const A = e.variant === "outlined", N = a["prepend-inner"] || e.prependInnerIcon, q = !(!e.clearable && !a.clear), I = !!(a["append-inner"] || e.appendInnerIcon || q), P = a.label ? a.label({ ...C.value, label: e.label, props: { for: B.value } }) : e.label;
    return d("div", Z({ class: ["v-field", { "v-field--active": g.value, "v-field--appended": I, "v-field--center-affix": e.centerAffix ?? !D.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": N, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !P, [`v-field--variant-${e.variant}`]: !0 }, i.value, R.value, s.value, c.value, f.value, p.value, e.class], style: [E.value, e.style], onClick: k }, n), [d("div", { class: "v-field__overlay" }, null), d(zl, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: a.loader }), N && d("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && d(m, { key: "prepend-icon", name: "prependInner" }, null), ($ = a["prepend-inner"]) == null ? void 0 : $.call(a, C.value)]), d("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && h.value && d(It, { key: "floating-label", ref: U, class: [S.value], floating: !0, for: B.value, style: O.value }, { default: () => [P] }), d(It, { ref: _, for: B.value }, { default: () => [P] }), (W = a.default) == null ? void 0 : W.call(a, { ...C.value, props: { id: B.value, class: "v-field__input", "aria-describedby": V.value }, focus: r, blur: y })]), q && d(oa, { key: "clear" }, { default: () => [Fe(d("div", { class: "v-field__clearable", onMousedown: (F) => {
      F.preventDefault(), F.stopPropagation();
    } }, [a.clear ? a.clear() : d(m, { name: "clear" }, null)]), [[Wn, e.dirty]])] }), I && d("div", { key: "append", class: "v-field__append-inner" }, [(j = a["append-inner"]) == null ? void 0 : j.call(a, C.value), e.appendInnerIcon && d(m, { key: "append-icon", name: "appendInner" }, null)]), d("div", { class: ["v-field__outline", S.value], style: O.value }, [A && d(fe, null, [d("div", { class: "v-field__outline__start" }, null), h.value && d("div", { class: "v-field__outline__notch" }, [d(It, { ref: U, floating: !0, for: B.value }, { default: () => [P] })]), d("div", { class: "v-field__outline__end" }, null)]), D.value && h.value && d(It, { ref: U, floating: !0, for: B.value }, { default: () => [P] })])]);
  }), { controlRef: z };
} });
function Ha(e) {
  return Ro(e, Object.keys(Wl.props).filter((t) => !ol(t) && t !== "class" && t !== "style"));
}
const zr = ["color", "file", "time", "date", "datetime-local", "week", "month"], Ya = H({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...mt(), ...Ll() }, "VTextField"), gl = Q()({ name: "VTextField", directives: { Intersect: Ol }, inheritAttrs: !1, props: Ya(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: a } = t;
  const i = me(e, "modelValue"), { isFocused: c, focus: s, blur: o } = yt(e), r = v(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), y = v(() => n.maxlength ? n.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), m = v(() => ["plain", "underlined"].includes(e.variant));
  function f(D, R) {
    var E, S;
    e.autofocus && D && ((S = (E = R[0].target) == null ? void 0 : E.focus) == null || S.call(E));
  }
  const p = M(), g = M(), h = M(), b = v(() => zr.includes(e.type) || e.persistentPlaceholder || c.value || e.active);
  function B() {
    var D;
    h.value !== document.activeElement && ((D = h.value) == null || D.focus()), c.value || s();
  }
  function V(D) {
    l("mousedown:control", D), D.target !== h.value && (B(), D.preventDefault());
  }
  function _(D) {
    B(), l("click:control", D);
  }
  function U(D) {
    D.stopPropagation(), B(), Ie(() => {
      i.value = null, Go(e["onClick:clear"], D);
    });
  }
  function z(D) {
    var E;
    const R = D.target;
    if (i.value = R.value, ((E = e.modelModifiers) == null ? void 0 : E.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const S = [R.selectionStart, R.selectionEnd];
      Ie(() => {
        R.selectionStart = S[0], R.selectionEnd = S[1];
      });
    }
  }
  return ae(() => {
    const D = !!(a.counter || e.counter !== !1 && e.counter != null), R = !(!D && !a.details), [E, S] = it(n), { modelValue: O, ...C } = an.filterProps(e), k = Ha(e);
    return d(an, Z({ ref: p, modelValue: i.value, "onUpdate:modelValue": (A) => i.value = A, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-input--plain-underlined": m.value }, e.class], style: e.style }, E, C, { centerAffix: !m.value, focused: c.value }), { ...a, default: (A) => {
      let { id: N, isDisabled: q, isDirty: I, isReadonly: P, isValid: $ } = A;
      return d(Wl, Z({ ref: g, onMousedown: V, onClick: _, "onClick:clear": U, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: e.role }, k, { id: N.value, active: b.value || I.value, dirty: I.value || e.dirty, disabled: q.value, focused: c.value, error: $.value === !1 }), { ...a, default: (W) => {
        let { props: { class: j, ...F } } = W;
        const L = Fe(d("input", Z({ ref: h, value: i.value, onInput: z, autofocus: e.autofocus, readonly: P.value, disabled: q.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: B, onBlur: o }, F, S), null), [[Qe("intersect"), { handler: f }, null, { once: !0 }]]);
        return d(fe, null, [e.prefix && d("span", { class: "v-text-field__prefix" }, [d("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), a.default ? d("div", { class: j, "data-no-activator": "" }, [a.default(), L]) : ri(L, { class: j }), e.suffix && d("span", { class: "v-text-field__suffix" }, [d("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: R ? (A) => {
      var N;
      return d(fe, null, [(N = a.details) == null ? void 0 : N.call(a, A), D && d(fe, null, [d("span", null, null), d(Ua, { active: e.persistentCounter || c.value, value: r.value, max: y.value }, a.counter)])]);
    } : void 0 });
  }), Ht({}, p, g, h);
} }), Dr = H({ renderless: Boolean, ...se() }, "VVirtualScrollItem"), Lr = Q()({ name: "VVirtualScrollItem", inheritAttrs: !1, props: Dr(), emits: { "update:height": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: a } = t;
  const { resizeRef: i, contentRect: c } = Al(void 0, "border");
  K(() => {
    var s;
    return (s = c.value) == null ? void 0 : s.height;
  }, (s) => {
    s != null && l("update:height", s);
  }), ae(() => {
    var s, o;
    return e.renderless ? d(fe, null, [(s = a.default) == null ? void 0 : s.call(a, { itemRef: i })]) : d("div", Z({ ref: i, class: ["v-virtual-scroll__item", e.class], style: e.style }, n), [(o = a.default) == null ? void 0 : o.call(a)]);
  });
} }), Wr = H({ itemHeight: { type: [Number, String], default: null }, height: [Number, String] }, "virtual");
function Mr(e, t) {
  const n = Na(), l = re(0);
  Ge(() => {
    l.value = parseFloat(e.itemHeight || 0);
  });
  const a = re(0), i = re(Math.ceil((parseInt(e.height) || n.height.value) / (l.value || 16)) || 1), c = re(0), s = re(0), o = M(), r = M();
  let y = 0;
  const { resizeRef: m, contentRect: f } = Al();
  Ge(() => {
    m.value = o.value;
  });
  const p = v(() => {
    var I;
    return o.value === document.documentElement ? n.height.value : ((I = f.value) == null ? void 0 : I.height) || parseInt(e.height) || 0;
  }), g = v(() => !!(o.value && r.value && p.value && l.value));
  let h = Array.from({ length: t.value.length }), b = Array.from({ length: t.value.length });
  const B = re(0);
  let V = -1;
  function _(I) {
    return h[I] || l.value;
  }
  const U = function(I, P) {
    let $ = 0;
    const W = function() {
      for (var j = arguments.length, F = new Array(j), L = 0; L < j; L++)
        F[L] = arguments[L];
      clearTimeout($), $ = setTimeout(() => I(...F), u(P));
    };
    return W.clear = () => {
      clearTimeout($);
    }, W.immediate = I, W;
  }(() => {
    const I = performance.now();
    b[0] = 0;
    const P = t.value.length;
    for (let $ = 1; $ <= P - 1; $++)
      b[$] = (b[$ - 1] || 0) + _($ - 1);
    B.value = Math.max(B.value, performance.now() - I);
  }, B), z = K(g, (I) => {
    I && (z(), y = r.value.offsetTop, U.immediate(), k(), ~V && Ie(() => {
      $e && window.requestAnimationFrame(() => {
        N(V), V = -1;
      });
    }));
  });
  function D(I) {
    return I = An(I, 0, t.value.length - 1), b[I] || 0;
  }
  function R(I) {
    return function(P, $) {
      let W = P.length - 1, j = 0, F = 0, L = null, Y = -1;
      if (P[W] < $)
        return W;
      for (; j <= W; )
        if (F = j + W >> 1, L = P[F], L > $)
          W = F - 1;
        else {
          if (!(L < $))
            return L === $ ? F : j;
          Y = F, j = F + 1;
        }
      return Y;
    }(b, I);
  }
  K(p, (I, P) => {
    P && k();
  }), ke(() => {
    U.clear();
  });
  let E = 0, S = 0, O = 0, C = -1;
  function k() {
    cancelAnimationFrame(C), C = requestAnimationFrame(A);
  }
  function A() {
    if (!o.value || !p.value)
      return;
    const I = E - y, P = Math.sign(S), $ = An(R(Math.max(0, I - 100)), 0, t.value.length), W = An(R(I + p.value + 100) + 1, $ + 1, t.value.length);
    if ((P !== -1 || $ < a.value) && (P !== 1 || W > i.value)) {
      const j = D(a.value) - D($), F = D(W) - D(i.value);
      Math.max(j, F) > 100 ? (a.value = $, i.value = W) : ($ <= 0 && (a.value = $), W >= t.value.length && (i.value = W));
    }
    c.value = D(a.value), s.value = D(t.value.length) - D(i.value);
  }
  function N(I) {
    const P = D(I);
    !o.value || I && !P ? V = I : o.value.scrollTop = P;
  }
  const q = v(() => t.value.slice(a.value, i.value).map((I, P) => ({ raw: I, index: P + a.value })));
  return K(t, () => {
    h = Array.from({ length: t.value.length }), b = Array.from({ length: t.value.length }), U.immediate(), k();
  }, { deep: !0 }), { containerRef: o, markerRef: r, computedItems: q, paddingTop: c, paddingBottom: s, scrollToIndex: N, handleScroll: function() {
    if (!o.value || !r.value)
      return;
    const I = o.value.scrollTop, P = performance.now();
    P - O > 500 ? (S = Math.sign(I - E), y = r.value.offsetTop) : S = I - E, E = I, O = P, k();
  }, handleScrollend: function() {
    o.value && r.value && (S = 0, O = 0, k());
  }, handleItemResize: function(I, P) {
    const $ = h[I], W = l.value;
    l.value = W ? Math.min(l.value, P) : P, $ === P && W === l.value || (h[I] = P, U());
  } };
}
const Rr = H({ items: { type: Array, default: () => [] }, renderless: Boolean, ...Wr(), ...se(), ...Cn() }, "VVirtualScroll"), Nr = Q()({ name: "VVirtualScroll", props: Rr(), setup(e, t) {
  let { slots: n } = t;
  const l = Se("VVirtualScroll"), { dimensionStyles: a } = In(e), { containerRef: i, markerRef: c, handleScroll: s, handleScrollend: o, handleItemResize: r, scrollToIndex: y, paddingTop: m, paddingBottom: f, computedItems: p } = Mr(e, ne(e, "items"));
  return fn(() => e.renderless, () => {
    function g() {
      var b, B;
      const h = arguments.length > 0 && arguments[0] !== void 0 && arguments[0] ? "addEventListener" : "removeEventListener";
      i.value === document.documentElement ? (document[h]("scroll", s, { passive: !0 }), document[h]("scrollend", o)) : ((b = i.value) == null || b[h]("scroll", s, { passive: !0 }), (B = i.value) == null || B[h]("scrollend", o));
    }
    Mn(() => {
      i.value = Zo(l.vnode.el, !0), g(!0);
    }), ke(g);
  }), ae(() => {
    const g = p.value.map((h) => d(Lr, { key: h.index, renderless: e.renderless, "onUpdate:height": (b) => r(h.index, b) }, { default: (b) => {
      var B;
      return (B = n.default) == null ? void 0 : B.call(n, { item: h.raw, index: h.index, ...b });
    } }));
    return e.renderless ? d(fe, null, [d("div", { ref: c, class: "v-virtual-scroll__spacer", style: { paddingTop: te(m.value) } }, null), g, d("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: te(f.value) } }, null)]) : d("div", { ref: i, class: ["v-virtual-scroll", e.class], onScrollPassive: s, onScrollend: o, style: [a.value, e.style] }, [d("div", { ref: c, class: "v-virtual-scroll__container", style: { paddingTop: te(m.value), paddingBottom: te(f.value) } }, [g])]);
  }), { scrollToIndex: y };
} });
function jr(e, t) {
  const n = re(!1);
  let l;
  return { onListScroll: function(a) {
    cancelAnimationFrame(l), n.value = !0, l = requestAnimationFrame(() => {
      l = requestAnimationFrame(() => {
        n.value = !1;
      });
    });
  }, onListKeydown: async function(a) {
    var s, o;
    if (a.key === "Tab" && ((s = t.value) == null || s.focus()), !["PageDown", "PageUp", "Home", "End"].includes(a.key))
      return;
    const i = (o = e.value) == null ? void 0 : o.$el;
    if (!i)
      return;
    a.key !== "Home" && a.key !== "End" || i.scrollTo({ top: a.key === "Home" ? 0 : i.scrollHeight, behavior: "smooth" }), await async function() {
      await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => {
        if (n.value) {
          const y = K(n, () => {
            y(), r();
          });
        } else
          r();
      });
    }();
    const c = i.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (a.key === "PageDown" || a.key === "Home") {
      const r = i.getBoundingClientRect().top;
      for (const y of c)
        if (y.getBoundingClientRect().top >= r) {
          y.focus();
          break;
        }
    } else {
      const r = i.getBoundingClientRect().bottom;
      for (const y of [...c].reverse())
        if (y.getBoundingClientRect().bottom <= r) {
          y.focus();
          break;
        }
    }
  } };
}
const Gr = H({ chips: Boolean, closableChips: Boolean, closeText: { type: String, default: "$vuetify.close" }, openText: { type: String, default: "$vuetify.open" }, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, menu: Boolean, menuIcon: { type: ce, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, itemColor: String, ...La({ itemChildren: !1 }) }, "Select"), qr = H({ ...Gr(), ...bn(Ya({ modelValue: null, role: "button" }), ["validationValue", "dirty", "appendInnerIcon"]), ...ut({ transition: { component: ta } }) }, "VSelect"), Ur = Q()({ name: "VSelect", props: qr(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:menu": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { t: l } = _l(), a = M(), i = M(), c = M(), s = me(e, "menu"), o = v({ get: () => s.value, set: (I) => {
    var P;
    s.value && !I && ((P = i.value) != null && P.ΨopenChildren) || (s.value = I);
  } }), { items: r, transformIn: y, transformOut: m } = function(I) {
    const P = v(() => Wa(I, I.items)), $ = v(() => P.value.some((W) => W.value === null));
    return { items: P, transformIn: function(W) {
      return $.value || (W = W.filter((j) => j !== null)), W.map((j) => I.returnObject && typeof j == "string" ? vl(I, j) : P.value.find((F) => I.valueComparator(j, F.value)) || vl(I, j));
    }, transformOut: function(W) {
      return I.returnObject ? W.map((j) => {
        let { raw: F } = j;
        return F;
      }) : W.map((j) => {
        let { value: F } = j;
        return F;
      });
    } };
  }(e), f = me(e, "modelValue", [], (I) => y(I === null ? [null] : Ke(I)), (I) => {
    const P = m(I);
    return e.multiple ? P : P[0] ?? null;
  }), p = _a(), g = v(() => f.value.map((I) => I.value)), h = re(!1), b = v(() => o.value ? e.closeText : e.openText);
  let B, V = "";
  const _ = v(() => e.hideSelected ? r.value.filter((I) => !f.value.some((P) => P === I)) : r.value), U = v(() => e.hideNoData && !r.value.length || e.readonly || (p == null ? void 0 : p.isReadonly.value)), z = M(), { onListScroll: D, onListKeydown: R } = jr(z, a);
  function E(I) {
    e.openOnClear && (o.value = !0);
  }
  function S() {
    U.value || (o.value = !o.value);
  }
  function O(I) {
    var W, j;
    if (!I.key || e.readonly || p != null && p.isReadonly.value || (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(I.key) && I.preventDefault(), ["Enter", "ArrowDown", " "].includes(I.key) && (o.value = !0), ["Escape", "Tab"].includes(I.key) && (o.value = !1), I.key === "Home" ? (W = z.value) == null || W.focus("first") : I.key === "End" && ((j = z.value) == null || j.focus("last")), e.multiple || !function(F) {
      const L = F.key.length === 1, Y = !F.ctrlKey && !F.metaKey && !F.altKey;
      return L && Y;
    }(I)))
      return;
    const P = performance.now();
    P - B > 1e3 && (V = ""), V += I.key.toLowerCase(), B = P;
    const $ = r.value.find((F) => F.title.toLowerCase().startsWith(V));
    $ !== void 0 && (f.value = [$]);
  }
  function C(I) {
    if (e.multiple) {
      const P = f.value.findIndex(($) => e.valueComparator($.value, I.value));
      if (P === -1)
        f.value = [...f.value, I];
      else {
        const $ = [...f.value];
        $.splice(P, 1), f.value = $;
      }
    } else
      f.value = [I], o.value = !1;
  }
  function k(I) {
    var P;
    (P = z.value) != null && P.$el.contains(I.relatedTarget) || (o.value = !1);
  }
  function A() {
    var I;
    h.value && ((I = a.value) == null || I.focus());
  }
  function N(I) {
    h.value = !0;
  }
  function q(I) {
    if (I == null)
      f.value = [];
    else if (At(a.value, ":autofill") || At(a.value, ":-webkit-autofill")) {
      const P = r.value.find(($) => $.title === I);
      P && C(P);
    } else
      a.value && (a.value.value = "");
  }
  return K(o, () => {
    if (!e.hideSelected && o.value && f.value.length) {
      const I = _.value.findIndex((P) => f.value.some(($) => e.valueComparator($.value, P.value)));
      $e && window.requestAnimationFrame(() => {
        var P;
        I >= 0 && ((P = c.value) == null || P.scrollToIndex(I));
      });
    }
  }), ae(() => {
    const I = !(!e.chips && !n.chip), P = !!(!e.hideNoData || _.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), $ = f.value.length > 0, W = gl.filterProps(e), j = $ || !h.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
    return d(gl, Z({ ref: a }, W, { modelValue: f.value.map((F) => F.props.value).join(", "), "onUpdate:modelValue": q, focused: h.value, "onUpdate:focused": (F) => h.value = F, validationValue: f.externalValue, counterValue: f.value.length, dirty: $, class: ["v-select", { "v-select--active-menu": o.value, "v-select--chips": !!e.chips, ["v-select--" + (e.multiple ? "multiple" : "single")]: !0, "v-select--selected": f.value.length, "v-select--selection-slot": !!n.selection }, e.class], style: e.style, inputmode: "none", placeholder: j, "onClick:clear": E, "onMousedown:control": S, onBlur: k, onKeydown: O, "aria-label": l(b.value), title: l(b.value) }), { ...n, default: () => d(fe, null, [d(Pr, Z({ ref: i, modelValue: o.value, "onUpdate:modelValue": (F) => o.value = F, activator: "parent", contentClass: "v-select__content", disabled: U.value, eager: e.eager, maxHeight: 310, openOnClick: !1, closeOnContentClick: !1, transition: e.transition, onAfterLeave: A }, e.menuProps), { default: () => [P && d(Cr, { ref: z, selected: g.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (F) => F.preventDefault(), onKeydown: R, onFocusin: N, onScrollPassive: D, tabindex: "-1", color: e.itemColor ?? e.color }, { default: () => {
      var F, L, Y;
      return [(F = n["prepend-item"]) == null ? void 0 : F.call(n), !_.value.length && !e.hideNoData && (((L = n["no-data"]) == null ? void 0 : L.call(n)) ?? d(zt, { title: l(e.noDataText) }, null)), d(Nr, { ref: c, renderless: !0, items: _.value }, { default: (x) => {
        var oe;
        let { item: w, index: T, itemRef: G } = x;
        const X = Z(w.props, { ref: G, key: T, onClick: () => C(w) });
        return ((oe = n.item) == null ? void 0 : oe.call(n, { item: w, index: T, props: X })) ?? d(zt, X, { prepend: (be) => {
          let { isSelected: Ve } = be;
          return d(fe, null, [e.multiple && !e.hideSelected ? d(cl, { key: w.value, modelValue: Ve, ripple: !1, tabindex: "-1" }, null) : void 0, w.props.prependIcon && d(de, { icon: w.props.prependIcon }, null)]);
        } });
      } }), (Y = n["append-item"]) == null ? void 0 : Y.call(n)];
    } })] }), f.value.map((F, L) => {
      const Y = { "onClick:close": function(T) {
        T.stopPropagation(), T.preventDefault(), C(F);
      }, onMousedown(T) {
        T.preventDefault(), T.stopPropagation();
      }, modelValue: !0, "onUpdate:modelValue": void 0 }, x = I ? !!n.chip : !!n.selection, w = x ? Uo(I ? n.chip({ item: F, index: L, props: Y }) : n.selection({ item: F, index: L })) : void 0;
      if (!x || w)
        return d("div", { key: F.value, class: "v-select__selection" }, [I ? n.chip ? d(we, { key: "chip-defaults", defaults: { VChip: { closable: e.closableChips, size: "small", text: F.title } } }, { default: () => [w] }) : d(lr, Z({ key: "chip", closable: e.closableChips, size: "small", text: F.title, disabled: F.props.disabled }, Y), null) : w ?? d("span", { class: "v-select__selection-text" }, [F.title, e.multiple && L < f.value.length - 1 && d("span", { class: "v-select__selection-comma" }, [Lo(",")])])]);
    })]), "append-inner": function() {
      var x;
      for (var F = arguments.length, L = new Array(F), Y = 0; Y < F; Y++)
        L[Y] = arguments[Y];
      return d(fe, null, [(x = n["append-inner"]) == null ? void 0 : x.call(n, ...L), e.menuIcon ? d(de, { class: "v-select__menu-icon", icon: e.menuIcon }, null) : void 0]);
    } });
  }), Ht({ isFocused: h, menu: o, select: C }, a);
} }), Hr = Q()({ name: "VCardActions", props: se(), setup(e, t) {
  let { slots: n } = t;
  return Rn({ VBtn: { slim: !0, variant: "text" } }), ae(() => {
    var l;
    return d("div", { class: ["v-card-actions", e.class], style: e.style }, [(l = n.default) == null ? void 0 : l.call(n)]);
  }), {};
} }), Yr = rt("v-card-subtitle"), Xr = rt("v-card-title"), Kr = H({ appendAvatar: String, appendIcon: ce, prependAvatar: String, prependIcon: ce, subtitle: String, title: String, ...se(), ...Ue() }, "VCardItem"), Jr = Q()({ name: "VCardItem", props: Kr(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => {
    var r;
    const l = !(!e.prependAvatar && !e.prependIcon), a = !(!l && !n.prepend), i = !(!e.appendAvatar && !e.appendIcon), c = !(!i && !n.append), s = !(!e.title && !n.title), o = !(!e.subtitle && !n.subtitle);
    return d("div", { class: ["v-card-item", e.class], style: e.style }, [a && d("div", { key: "prepend", class: "v-card-item__prepend" }, [n.prepend ? d(we, { key: "prepend-defaults", disabled: !l, defaults: { VAvatar: { density: e.density, icon: e.prependIcon, image: e.prependAvatar } } }, n.prepend) : l && d(Ln, { key: "prepend-avatar", density: e.density, icon: e.prependIcon, image: e.prependAvatar }, null)]), d("div", { class: "v-card-item__content" }, [s && d(Xr, { key: "title" }, { default: () => {
      var y;
      return [((y = n.title) == null ? void 0 : y.call(n)) ?? e.title];
    } }), o && d(Yr, { key: "subtitle" }, { default: () => {
      var y;
      return [((y = n.subtitle) == null ? void 0 : y.call(n)) ?? e.subtitle];
    } }), (r = n.default) == null ? void 0 : r.call(n)]), c && d("div", { key: "append", class: "v-card-item__append" }, [n.append ? d(we, { key: "append-defaults", disabled: !i, defaults: { VAvatar: { density: e.density, icon: e.appendIcon, image: e.appendAvatar } } }, n.append) : i && d(Ln, { key: "append-avatar", density: e.density, icon: e.appendIcon, image: e.appendAvatar }, null)])]);
  }), {};
} }), yn = rt("v-card-text"), Zr = H({ appendAvatar: String, appendIcon: ce, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: ce, ripple: { type: [Boolean, Object], default: !0 }, subtitle: String, text: String, title: String, ...Nn(), ...se(), ...Ue(), ...Cn(), ...Gn(), ...Tl(), ...$l(), ...ya(), ...en(), ...Ut(), ...ze(), ...Be(), ...rn({ variant: "elevated" }) }, "VCard"), _n = Q()({ name: "VCard", directives: { Ripple: ft }, props: Zr(), setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { themeClasses: a } = _e(e), { borderClasses: i } = jn(e), { colorClasses: c, colorStyles: s, variantClasses: o } = dt(e), { densityClasses: r } = tn(e), { dimensionStyles: y } = In(e), { elevationClasses: m } = qn(e), { loaderClasses: f } = Gt(e), { locationStyles: p } = El(e), { positionClasses: g } = ma(e), { roundedClasses: h } = nn(e), b = qt(e, n), B = v(() => e.link !== !1 && b.isLink.value), V = v(() => !e.disabled && e.link !== !1 && (e.link || b.isClickable.value));
  return ae(() => {
    const _ = B.value ? "a" : e.tag, U = !(!l.title && !e.title), z = !(!l.subtitle && !e.subtitle), D = U || z, R = !!(l.append || e.appendAvatar || e.appendIcon), E = !!(l.prepend || e.prependAvatar || e.prependIcon), S = !(!l.image && !e.image), O = D || E || R, C = !(!l.text && !e.text);
    return Fe(d(_, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": V.value }, a.value, i.value, c.value, r.value, m.value, f.value, g.value, h.value, o.value, e.class], style: [s.value, y.value, p.value, e.style], href: b.href.value, onClick: V.value && b.navigate, tabindex: e.disabled ? -1 : void 0 }, { default: () => {
      var k;
      return [S && d("div", { key: "image", class: "v-card__image" }, [l.image ? d(we, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: !0, src: e.image } } }, l.image) : d(ia, { key: "image-img", cover: !0, src: e.image }, null)]), d(zl, { name: "v-card", active: !!e.loading, color: typeof e.loading == "boolean" ? void 0 : e.loading }, { default: l.loader }), O && d(Jr, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: l.item, prepend: l.prepend, title: l.title, subtitle: l.subtitle, append: l.append }), C && d(yn, { key: "text" }, { default: () => {
        var A;
        return [((A = l.text) == null ? void 0 : A.call(l)) ?? e.text];
      } }), (k = l.default) == null ? void 0 : k.call(l), l.actions && d(Hr, null, { default: l.actions }), ct(V.value, "v-card")];
    } }), [[Qe("ripple"), V.value && e.ripple]]);
  }), {};
} }), Qr = H({ indeterminate: Boolean, inset: Boolean, flat: Boolean, loading: { type: [Boolean, String], default: !1 }, ...mt(), ...Dl() }, "VSwitch"), es = Q()({ name: "VSwitch", inheritAttrs: !1, props: Qr(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const a = me(e, "indeterminate"), i = me(e, "modelValue"), { loaderClasses: c } = Gt(e), { isFocused: s, focus: o, blur: r } = yt(e), y = M(), m = v(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), f = Me(), p = v(() => e.id || `switch-${f}`);
  function g() {
    a.value && (a.value = !1);
  }
  function h(b) {
    var B, V;
    b.stopPropagation(), b.preventDefault(), (V = (B = y.value) == null ? void 0 : B.input) == null || V.click();
  }
  return ae(() => {
    const [b, B] = it(n), V = an.filterProps(e), _ = Tt.filterProps(e);
    return d(an, Z({ class: ["v-switch", { "v-switch--inset": e.inset }, { "v-switch--indeterminate": a.value }, c.value, e.class] }, b, V, { modelValue: i.value, "onUpdate:modelValue": (U) => i.value = U, id: p.value, focused: s.value, style: e.style }), { ...l, default: (U) => {
      let { id: z, messagesId: D, isDisabled: R, isReadonly: E, isValid: S } = U;
      return d(Tt, Z({ ref: y }, _, { modelValue: i.value, "onUpdate:modelValue": [(O) => i.value = O, g], id: z.value, "aria-describedby": D.value, type: "checkbox", "aria-checked": a.value ? "mixed" : void 0, disabled: R.value, readonly: E.value, onFocus: o, onBlur: r }, B), { ...l, default: (O) => {
        let { backgroundColorClasses: C, backgroundColorStyles: k } = O;
        return d("div", { class: ["v-switch__track", ...C.value], style: k.value, onClick: h }, null);
      }, input: (O) => {
        let { inputNode: C, icon: k, backgroundColorClasses: A, backgroundColorStyles: N } = O;
        return d(fe, null, [C, d("div", { class: ["v-switch__thumb", { "v-switch__thumb--filled": k || e.loading }, e.inset ? void 0 : A.value], style: e.inset ? void 0 : N.value }, [d(Ai, null, { default: () => [e.loading ? d(zl, { name: "v-switch", active: !0, color: S.value === !1 ? void 0 : m.value }, { default: (q) => l.loader ? l.loader(q) : d(fa, { active: q.isActive, color: q.color, indeterminate: !0, size: "16", width: "2" }, null) }) : k && d(de, { key: k, icon: k, size: "x-small" }, null)] })])]);
      } });
    } });
  }), {};
} }), ns = H({ autoGrow: Boolean, autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, noResize: Boolean, rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) }, maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, suffix: String, modelModifiers: Object, ...mt(), ...Ll() }, "VTextarea"), ts = Q()({ name: "VTextarea", directives: { Intersect: Ol }, inheritAttrs: !1, props: ns(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: a } = t;
  const i = me(e, "modelValue"), { isFocused: c, focus: s, blur: o } = yt(e), r = v(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : (i.value || "").toString().length), y = v(() => n.maxlength ? n.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter);
  function m(C, k) {
    var A, N;
    e.autofocus && C && ((N = (A = k[0].target) == null ? void 0 : A.focus) == null || N.call(A));
  }
  const f = M(), p = M(), g = re(""), h = M(), b = v(() => e.persistentPlaceholder || c.value || e.active);
  function B() {
    var C;
    h.value !== document.activeElement && ((C = h.value) == null || C.focus()), c.value || s();
  }
  function V(C) {
    B(), l("click:control", C);
  }
  function _(C) {
    l("mousedown:control", C);
  }
  function U(C) {
    C.stopPropagation(), B(), Ie(() => {
      i.value = "", Go(e["onClick:clear"], C);
    });
  }
  function z(C) {
    var A;
    const k = C.target;
    if (i.value = k.value, (A = e.modelModifiers) == null ? void 0 : A.trim) {
      const N = [k.selectionStart, k.selectionEnd];
      Ie(() => {
        k.selectionStart = N[0], k.selectionEnd = N[1];
      });
    }
  }
  const D = M(), R = M(+e.rows), E = v(() => ["plain", "underlined"].includes(e.variant));
  function S() {
    e.autoGrow && Ie(() => {
      if (!D.value || !p.value)
        return;
      const C = getComputedStyle(D.value), k = getComputedStyle(p.value.$el), A = parseFloat(C.getPropertyValue("--v-field-padding-top")) + parseFloat(C.getPropertyValue("--v-input-padding-top")) + parseFloat(C.getPropertyValue("--v-field-padding-bottom")), N = D.value.scrollHeight, q = parseFloat(C.lineHeight), I = An(N ?? 0, Math.max(parseFloat(e.rows) * q + A, parseFloat(k.getPropertyValue("--v-input-control-height"))), parseFloat(e.maxRows) * q + A || 1 / 0);
      R.value = Math.floor((I - A) / q), g.value = te(I);
    });
  }
  let O;
  return Ge(() => {
    e.autoGrow || (R.value = +e.rows);
  }), Mn(S), K(i, S), K(() => e.rows, S), K(() => e.maxRows, S), K(() => e.density, S), K(D, (C) => {
    C ? (O = new ResizeObserver(S), O.observe(D.value)) : O == null || O.disconnect();
  }), Ze(() => {
    O == null || O.disconnect();
  }), ae(() => {
    const C = !!(a.counter || e.counter || e.counterValue), k = !(!C && !a.details), [A, N] = it(n), { modelValue: q, ...I } = an.filterProps(e), P = Ha(e);
    return d(an, Z({ ref: f, modelValue: i.value, "onUpdate:modelValue": ($) => i.value = $, class: ["v-textarea v-text-field", { "v-textarea--prefixed": e.prefix, "v-textarea--suffixed": e.suffix, "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-textarea--auto-grow": e.autoGrow, "v-textarea--no-resize": e.noResize || e.autoGrow, "v-input--plain-underlined": E.value }, e.class], style: e.style }, A, I, { centerAffix: R.value === 1 && !E.value, focused: c.value }), { ...a, default: ($) => {
      let { id: W, isDisabled: j, isDirty: F, isReadonly: L, isValid: Y } = $;
      return d(Wl, Z({ ref: p, style: { "--v-textarea-control-height": g.value }, onClick: V, onMousedown: _, "onClick:clear": U, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, P, { id: W.value, active: b.value || F.value, centerAffix: R.value === 1 && !E.value, dirty: F.value || e.dirty, disabled: j.value, focused: c.value, error: Y.value === !1 }), { ...a, default: (x) => {
        let { props: { class: w, ...T } } = x;
        return d(fe, null, [e.prefix && d("span", { class: "v-text-field__prefix" }, [e.prefix]), Fe(d("textarea", Z({ ref: h, class: w, value: i.value, onInput: z, autofocus: e.autofocus, readonly: L.value, disabled: j.value, placeholder: e.placeholder, rows: e.rows, name: e.name, onFocus: B, onBlur: o }, T, N), null), [[Qe("intersect"), { handler: m }, null, { once: !0 }]]), e.autoGrow && Fe(d("textarea", { class: [w, "v-textarea__sizer"], id: `${T.id}-sizer`, "onUpdate:modelValue": (G) => i.value = G, ref: D, readonly: !0, "aria-hidden": "true" }, null), [[si, i.value]]), e.suffix && d("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: k ? ($) => {
      var W;
      return d(fe, null, [(W = a.details) == null ? void 0 : W.call(a, $), C && d(fe, null, [d("span", null, null), d(Ua, { active: e.persistentCounter || c.value, value: r.value, max: y.value }, a.counter)])]);
    } : void 0 });
  }), Ht({}, f, p, h);
} }), Xa = Ne({ __name: "BooleanIcons", props: Pe({ iconFalseColor: {}, iconFalseTitle: {}, iconTrueColor: {}, iconTrueTitle: {}, iconFalse: {}, iconTrue: {} }, { modelValue: {} }), emits: ["update:modelValue"], setup(e) {
  const t = e, n = ve(Symbol.for("vuetify:icons")), l = un(e, "modelValue"), a = v(() => We({ icon: t.iconFalse, iconOptions: n, name: "false" })), i = v(() => We({ icon: t.iconTrue, iconOptions: n, name: "true" }));
  return (c, s) => l.value ? (J(), he(u(de), { key: 0, class: "v-inline-fields--boolean-icons fa-fw", color: c.iconTrueColor, icon: u(i), size: "x-small", title: c.iconTrueTitle }, null, 8, ["color", "icon", "title"])) : (J(), he(u(de), { key: 1, class: "v-inline-fields--boolean-icons fa-fw", color: c.iconFalseColor, icon: u(a), size: "x-small", title: c.iconFalseTitle }, null, 8, ["color", "icon", "title"]));
} }), le = "v-inline-fields", On = (e) => {
  const { cell: t = !1, field: n = "", density: l = "", disabled: a = !1, iconSet: i = "mdi", loading: c = !1, loadingWait: s, tableField: o = !1, variant: r } = e, y = l && r;
  return { [`${le}`]: !0, [`${le}--container`]: !0, [`${le}--container-cell`]: t, [`${le}--container-disabled`]: u(a), [`${le}--container-table`]: o, [`${le}--container-icon-set-${i}`]: !0, [`${le}--container-loading`]: c && s, [`${le}--container-${n}`]: !0, [`${le}--container-${n}-${l}`]: !0, [`${le}--container-${n}-${l}-${r}`]: y, [`${le}--container-${n}-${r}`]: r, [`${le}--container-${n}-${r}-${l}`]: y, [`${le}--container-${l}`]: l, [`${le}--container-${l}-${n}`]: l, [`${le}--container-${l}-${r}`]: y, [`${le}--container-${r}`]: r, [`${le}--container-${r}-${l}`]: y, [`${le}--container-${r}-${n}`]: r };
}, Pn = (e) => {
  const { cell: t = !1, cellUnderlineFullWidth: n = !0, field: l = "", density: a = "" } = e;
  return { [`${le}--display-container-cell`]: t, [`${le}--display-container-cell-underline-full-width`]: t && n, [`${le}--display-container`]: !0, [`${le}--display-wrapper-value`]: !0, [`${l}`]: !0, "v-input": !0, [`v-input--density-${a}`]: !0, "v-input--horizontal": !0 };
}, Lt = (e) => {
  const { density: t = "", variant: n = "" } = e;
  return { "v-input": !0, "v-input--dirty": !0, "v-input--horizontal": !0, "v-text-field": !0, [`v-input--density-${t}`]: !0, [`v-text-field--plain-${n}`]: !0 };
}, Ka = (e) => {
  const { density: t = "" } = e;
  return { [`${le}--selection-control`]: !0, [`v-selection-control--density-${t}`]: !0 };
}, Ml = (e, t, n) => {
  const { error: l = !1, empty: a = !1 } = n;
  return { [`${le}`]: !0, [`${le}--display-value-${e}`]: !0, [`${le}--display-value`]: !0, [`${le}--display-value-empty`]: u(a), [`text-${t}`]: !u(l), "text-danger": u(l) };
}, $n = (e) => {
  const { name: t, active: n = !1 } = e;
  return { [`${le}`]: !0, [`${le}--field`]: !0, [`${le}--field-${t}`]: !0, [`${le}--field-active`]: n };
}, En = (e) => {
  const { name: t, showField: n } = e;
  return { [`${le}--card-container`]: !0, [`${le}--card-container-${t}`]: !0, "d-none": !n };
};
function Po(e) {
  if (!e)
    return 100;
  if (e.toString().includes(".")) {
    const t = 100 * Number(e);
    return t >= 100 ? 100 : t;
  }
  return Number(e) >= 100 ? 100 : Number(e);
}
function $o(e) {
  let t = function(m) {
    const f = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let p = m;
    return Object.entries(f).forEach(([g, h]) => {
      m.toLowerCase() != g.toLowerCase() || (p = h);
    }), p;
  }(e), n = 0, l = 0, a = 0, i = 100, c = 0, s = 0, o = 0;
  if (t.substring(0, 1) === "#")
    t = function(m) {
      let f = m.replace("#", "");
      f.length === 3 && (f = f.split("").map((B) => B + B).join(""));
      const p = parseInt(f.substring(0, 2), 16), g = parseInt(f.substring(2, 4), 16), h = parseInt(f.substring(4, 6), 16);
      return [p, g, h, 100];
    }(t);
  else if (t.includes("rgb"))
    t = [...t.matchAll(/[\d+.\d+]+/g)].map(Number);
  else if (t.includes("hsl"))
    return t = [...t.matchAll(/[\d+.\d+]+/g)].map(String), n = t[0], l = t[1], a = t[2], i = Po(t[3]), `${n} ${l}% ${a}% / ${i}%`;
  [c, s, o, i] = t, c /= 255, s /= 255, o /= 255, i = Po(i);
  const r = Math.max(c, s, o), y = Math.min(c, s, o);
  if (r === null || !y === null || isNaN(r) || isNaN(y)) {
    const m = "0 0% 100% / 12%";
    return console.warn(`[VuetifyInlineFields: The "color" prop value using "${t}" doesn't exist. Using the value "hsl(${m})" in it's place.`), m;
  }
  if (n = (r + y) / 2, l = (r + y) / 2, a = (r + y) / 2, r == y)
    n = l = 0;
  else {
    const m = r - y;
    switch (l = a > 0.5 ? m / (2 - r - y) : m / (r + y), r) {
      case c:
        n = (s - o) / m + (s < o ? 6 : 0);
        break;
      case s:
        n = (o - c) / m + 2;
        break;
      case o:
        n = (c - s) / m + 4;
    }
    n /= 6;
  }
  return n = Math.round(360 * n), l = Math.round(100 * l), a = Math.round(100 * a), `${n} ${l}% ${a}% / ${i}%`;
}
const ls = (e, t) => {
  if (function(l) {
    return l === "transparent" || l === "none" || l === "inherit" || l === "currentColor" || l === "initial" || l === "unset";
  }(e))
    return e;
  if (function(l) {
    return l.includes("--v-theme");
  }(e))
    return `rgb(var(${e}))`;
  const n = function(l, a) {
    const i = a.global.current.value.colors;
    return Object.entries(i).find(([c]) => c === l);
  }(e, t);
  return n ? `hsl(${$o(n[1])})` : `hsl(${$o(e)})`;
}, Xn = (e) => {
  const { str: t, unit: n = "px" } = e;
  if (t != null && t !== "")
    return +t ? `${Number(t)}${n}` : String(t);
}, Ja = (e) => {
  var a;
  const { modelValue: t, trueValue: n } = e, l = u(t);
  return ((a = l == null ? void 0 : l.toLowerCase) == null ? void 0 : a.call(l)) === "true" || l === "1" || l == "1" || l === !0 || l == n || l === n;
}, Rl = (e) => {
  const { underlineStyle: t, underlineWidth: n, color: l, error: a, theme: i, underlined: c } = e;
  let { underlineColor: s } = e;
  s = s || l;
  const o = { "border-bottom-color": ls(s, i), "border-bottom-style": t, "border-bottom-width": n };
  return u(a) && (o["border-bottom-color"] = "rgb(var(--v-theme-danger))"), c || (o["border-bottom"] = "none"), o;
}, mn = (e) => {
  const { cardMinWidth: t, cardOffsetX: n, cardOffsetY: l, cardWidth: a, field: i, name: c = "" } = e, s = ((y) => {
    const { cardOffsetX: m, cardOffsetY: f, field: p } = y;
    if (!p)
      return { bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0, x: 0, y: 0 };
    const { x: g, y: h } = p.getBoundingClientRect(), { width: b, height: B } = p.getBoundingClientRect(), { right: V, bottom: _ } = p.getBoundingClientRect();
    return { bottom: Xn({ str: _ + Number(f) }), height: B, left: Xn({ str: 0 + Number(m) }), right: Xn({ str: V + Number(m) }), top: Xn({ str: 2 + Number(f) }), width: Xn({ str: b }), x: g, y: h };
  })({ cardOffsetX: n, cardOffsetY: l, field: i });
  let o = t, r = a;
  return r || (r = c === "checkbox" ? "fit-content" : s.width), o || (o = c === "checkbox" ? "fit-content" : s.width), { left: s.left, top: s.top, width: r, zIndex: 10 };
}, Wt = Ne({ __name: "DisplayedValue", props: { color: {}, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayValue: {}, empty: { type: Boolean }, error: { type: Boolean }, field: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean } }, emits: ["toggleField"], setup(e, { emit: t }) {
  const n = t, l = e, a = cn(), i = Sl(), c = { displayValue: l.displayValue, empty: l.empty, error: l.error }, s = v(() => Ml(l.field, l.valueColor, { empty: l.empty, error: l.error })), o = v(() => Rl({ color: l.color, error: l.error, theme: i, underlineColor: l.underlineColor, underlineStyle: l.underlineStyle, underlineWidth: l.underlineWidth, underlined: l.underlined })), r = v(() => ((f) => {
    const { underlineWidth: p } = f;
    return { borderBottom: `${p || "0px"} solid transparent` };
  })({ underlineWidth: l.underlineWidth })), y = (f, p = !1) => ((g) => {
    const { inner: h = !1, position: b } = g;
    return { [`${le}--display-icon`]: !h, [`${le}--display-${b}-icon`]: !h, [`${le}--display-${b}-inner-icon`]: h, "me-1": b === "prepend", "ms-1": b === "append" };
  })({ inner: p, position: f });
  function m() {
    n("toggleField");
  }
  return (f, p) => (J(), ie("div", { class: "v-inline-fields--display-wrapper", onClick: m }, [f.displayPrependIcon || u(a)["display.prepend"] ? (J(), ie("div", { key: 0, class: ee(y("prepend")), style: ge(u(r)) }, [u(a)["display.prepend"] ? Ae(f.$slots, "display.prepend", ye(Z({ key: 0 }, c))) : (J(), he(de, { key: 1, color: f.displayPrependIconColor, icon: f.displayPrependIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 6)) : pe("", !0), xe("div", { class: ee(["d-inline-flex", u(s)]), style: ge(u(o)) }, [f.displayPrependInnerIcon || u(a)["display.prependInner"] ? (J(), ie("div", { key: 0, class: ee(y("prepend", !0)) }, [u(a)["display.prependInner"] ? Ae(f.$slots, "display.prependInner", ye(Z({ key: 0 }, c))) : (J(), he(de, { key: 1, color: f.displayPrependInnerIconColor, icon: f.displayPrependInnerIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 2)) : pe("", !0), Lo(" " + Il(f.displayValue) + " ", 1), f.displayAppendInnerIcon || u(a)["display.appendInner"] ? (J(), ie("div", { key: 1, class: ee(y("append", !0)) }, [u(a)["display.appendInner"] ? Ae(f.$slots, "display.appendInner", ye(Z({ key: 0 }, c))) : (J(), he(de, { key: 1, color: f.displayAppendInnerIconColor, icon: f.displayAppendInnerIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 2)) : pe("", !0)], 6), f.displayAppendIcon || u(a)["display.append"] ? (J(), ie("div", { key: 1, class: ee(y("append")), style: ge(u(r)) }, [u(a)["display.append"] ? Ae(f.$slots, "display.append", ye(Z({ key: 0 }, c))) : (J(), he(de, { key: 1, color: f.displayAppendIconColor, icon: f.displayAppendIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 6)) : pe("", !0)]));
} }), lt = Ne({ __name: "SaveFieldButtons", props: { loading: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonVariant: {}, cancelButtonTitle: {}, cancelIconColor: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideSaveIcon: { type: Boolean }, loadingIconColor: {}, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIconColor: {}, cancelIcon: {}, loadingIcon: {}, saveIcon: {} }, emits: ["close", "save"], setup(e, { emit: t }) {
  const n = dn(), l = t, a = e, i = ve(Symbol.for("vuetify:icons")), c = v(() => a.error), s = v(() => ({ [`${le}--save-fields-container`]: !0 })), o = v(() => a.loading), r = Le({ ...n, ...a }), y = v(() => (i == null ? void 0 : i.defaultSet) === "fa" ? "fa-spin" : (i == null ? void 0 : i.defaultSet) === "mdi" ? "mdi-spin" : ""), m = v(() => ((B) => {
    const { cancelButtonVariant: V } = B;
    return { "me-1": V === "elevated", "ms-1": !0 };
  })({ cancelButtonVariant: r.cancelButtonVariant })), f = v(() => We({ icon: a.cancelIcon, iconOptions: i, name: "false" })), p = v(() => We({ icon: a.loadingIcon, iconOptions: i, name: "loading" })), g = v(() => We({ icon: a.saveIcon, iconOptions: i, name: "save" }));
  function h() {
    l("close");
  }
  function b() {
    l("save");
  }
  return (B, V) => (J(), ie("div", Z({ class: u(s) }, B.$attrs), [u(r).hideSaveIcon ? pe("", !0) : (J(), he(ul, { key: 0, class: "ms-1", color: u(r).saveButtonColor, disabled: u(c), icon: "", size: u(r).saveButtonSize, title: u(o) ? "Loading" : u(r).saveButtonTitle, variant: u(r).saveButtonVariant, onClick: b }, { default: ue(() => [u(o) ? (J(), he(de, { key: 1, class: ee(u(y)), color: u(r).loadingIconColor, icon: u(p) }, null, 8, ["class", "color", "icon"])) : (J(), he(de, { key: 0, color: u(c) ? "error" : u(r).saveIconColor, icon: u(g) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["color", "disabled", "size", "title", "variant"])), u(r).hideCancelIcon ? pe("", !0) : (J(), he(ul, { key: 1, class: ee(u(m)), color: u(r).cancelButtonColor, icon: "", size: u(r).cancelButtonSize, title: u(r).cancelButtonTitle, variant: u(r).cancelButtonVariant, onClick: h }, { default: ue(() => [u(r).hideSaveIcon && u(o) ? (J(), he(de, { key: 0, class: ee(u(y)), color: u(r).loadingIconColor, icon: u(p) }, null, 8, ["class", "color", "icon"])) : (J(), he(de, { key: 1, class: "text-default", color: u(r).cancelIconColor, icon: u(f) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["class", "color", "size", "title", "variant"]))], 16));
} }), Mt = (e) => {
  const { required: t, rules: n } = e;
  let { value: l } = e;
  l = u(l);
  const a = [];
  let i = !1;
  if (t && !l)
    return a.push("Field is required."), { errors: !0, results: a };
  if (n) {
    for (const c of n) {
      const s = (typeof c == "function" ? c : () => c)(l);
      s !== !0 && (typeof s == "string" ? a.push(s) : console.warn(`${s} is not a valid value. Rule functions must return boolean true or a string.`));
    }
    i = a.length > 0;
  }
  return { errors: i, results: a };
}, Tn = (e) => {
  const { attrs: t, closeSiblings: n, fieldOnly: l, props: a, showField: i, timeOpened: c } = e;
  let s = c;
  return n && !l && (s = /* @__PURE__ */ new Date()), { settings: { ...t, ...a }, showField: !u(i), timeOpened: s };
}, hl = (e) => {
  const { length: t = 0 } = e;
  let { suffix: n, text: l } = e;
  return l = l.toString(), n = n || "...", l.length > t ? `${l.substring(0, t)}${n}` : l;
}, zn = ["error", "update", "update:closeSiblingFields", "update:model-value"], os = ["cancelButtonColor", "cancelButtonSize", "cancelButtonTitle", "cancelButtonVariant", "cancelIcon", "cancelIconColor", "closeSiblings", "displayAppendIcon", "displayAppendIconColor", "displayAppendIconSize", "displayAppendInnerIcon", "displayAppendInnerIconColor", "displayAppendInnerIconSize", "displayPrependIcon", "displayPrependIconColor", "displayPrependIconSize", "displayPrependInnerIcon", "displayPrependInnerIconColor", "displayPrependInnerIconSize", "emptyText", "fieldOnly", "hideSaveIcon", "item", "loadingIcon", "loadingIconColor", "loadingWait", "saveButtonColor", "saveButtonSize", "saveButtonTitle", "saveButtonVariant", "saveIcon", "saveIconColor", "tableField", "truncateLength", "truncateSuffix", "underlineColor", "underlineStyle", "underlineWidth", "underlined", "valueColor"], Jn = (e) => {
  let t = e;
  return t = Object.entries(t).filter(([n]) => !os.includes(n)), Object.fromEntries(t);
}, as = { class: "v-selection-control__wrapper" }, is = Ne({ __name: "VInlineCheckbox", props: Pe(kn({ density: {}, falseIcon: {}, trueIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...ci }), { modelValue: {} }), emits: Pe([...zn], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = un(e, "modelValue"), l = dn(), a = cn(), i = t, c = ve(Symbol.for("vuetify:icons")), s = Sl(), o = e;
  let r = Le({ ...l, ...o });
  const y = v(() => o.loading), m = v(() => o.disabled), f = M(!1), p = M(!1), g = M(null), h = v(() => Jn(r)), b = v(() => ({ ...Vn, ...o.cardProps }));
  K(() => y.value, (x, w) => {
    !x && w && p.value && W();
  });
  const B = v(() => We({ icon: o.trueIcon, iconOptions: c, name: "checkboxFalse" })), V = v(() => We({ icon: o.iconTrue, iconOptions: c, name: "checkboxTrue" })), _ = v(() => n.value == r.trueValue), U = v(() => Ja({ modelValue: n, trueValue: r.trueValue })), z = v(() => On({ cell: r.cell && !p.value, density: r.density, disabled: m.value, field: "v-checkbox", loading: y.value, loadingWait: r.loadingWait, tableField: r.tableField })), D = v(() => Pn({ cell: r.cell, cellUnderlineFullWidth: r.cellUnderlineFullWidth, density: r.density, field: "v-checkbox" })), R = Ka({ density: r.density }), E = v(() => $n({ active: p.value, name: "checkbox" })), S = v(() => Ml("checkbox", r.valueColor, { error: f })), O = v(() => En({ name: "checkbox", showField: p.value })), C = v(() => ({})), k = v(() => Rl({ color: r.color, error: f, theme: s, underlineColor: r.underlineColor, underlineStyle: r.underlineStyle, underlineWidth: r.underlineWidth, underlined: r.underlined })), A = v(() => q.value);
  function N() {
    f.value = !1, W();
  }
  const q = M(), I = M(null), P = M("body"), $ = ui();
  function W() {
    var w, T;
    if (m.value || r.loadingWait && y.value)
      return;
    q.value = mn({ cardMinWidth: (w = r.cardProps) == null ? void 0 : w.minWidth, cardOffsetX: r.cardOffsetX, cardOffsetY: r.cardOffsetY, cardWidth: (T = r.cardProps) == null ? void 0 : T.width, field: I.value, name: "checkbox" });
    const x = Tn({ attrs: l, closeSiblings: r.closeSiblings, fieldOnly: r.fieldOnly, props: o, showField: p, timeOpened: g.value });
    r = { ...r, ...x.settings }, p.value = x.showField, g.value = x.timeOpened, F !== null && r.closeSiblings && p.value && !r.fieldOnly && F.emit(x.timeOpened);
  }
  function j(x) {
    n.value = x, i("update", x), r.loadingWait || W();
  }
  let F, L;
  function Y(x) {
    i("update:closeSiblingFields", g), p.value && g.value !== x && W();
  }
  return K(() => $, () => {
    var x, w;
    q.value = mn({ cardMinWidth: (x = r.cardProps) == null ? void 0 : x.minWidth, cardOffsetX: r.cardOffsetX, cardOffsetY: r.cardOffsetY, cardWidth: (w = r.cardProps) == null ? void 0 : w.width, field: I.value, name: "checkbox" });
  }, { deep: !0 }), r.closeSiblings && import("@vueuse/core").then(({ useEventBus: x }) => {
    F = x(Fn), L = F.on(Y);
  }), wn(() => {
    L !== void 0 && F.off(Y);
  }), (x, w) => (J(), ie("div", { ref_key: "inlineFieldsContainer", ref: I, class: ee(u(z)), style: ge(u(C)) }, [!u(p) && !u(r).fieldOnly || u(r).cardField ? (J(), ie("div", { key: 0, class: ee(u(D)), onClick: w[2] || (w[2] = (T) => u(r).cell ? W() : void 0) }, [xe("div", { class: ee(u(R)), onClick: w[1] || (w[1] = (T) => u(r).cell ? void 0 : W()) }, [xe("div", as, [x.icons ? (J(), ie("div", { key: 0, class: ee(["v-inline-fields--boolean-icons-container", u(S)]), style: ge(u(k)) }, [d(u(Xa), { modelValue: u(U), "onUpdate:modelValue": w[0] || (w[0] = (T) => hn(U) ? U.value = T : null), "icon-false": u(r).iconFalse, "icon-false-color": u(r).iconFalseColor, "icon-false-title": u(r).iconFalseTitle, "icon-true": u(r).iconTrue, "icon-true-color": u(r).iconTrueColor, "icon-true-title": u(r).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (J(), ie("div", { key: 1, class: ee(["d-inline-flex align-center justify-center", u(S)]), style: ge(u(k)) }, Il(u(_)), 7))])], 2)], 2)) : pe("", !0), u(p) || u(r).fieldOnly || u(r).cardField ? (J(), ie("div", { key: 1, class: ee(u(E)) }, [(J(), he(sn, { disabled: !u(r).cardField, to: u(P) }, [d(Qi, Z(u(h), { color: u(r).color, density: u(r).density, disabled: u(y) || u(m), error: u(f), "false-icon": u(B), "false-value": u(r).falseValue, "hide-details": u(r).hideDetails, label: u(r).label, "model-value": u(U), "true-icon": u(V), "true-value": u(r).trueValue, "onUpdate:modelValue": j }), He({ _: 2 }, [Ye(u(a), (T, G) => ({ name: G, fn: ue((X) => [Ae(x.$slots, G, ye(Ce({ ...X })))]) })), u(a).append ? void 0 : { name: "append", fn: ue(() => [d(u(lt), { "cancel-button-color": u(r).cancelButtonColor, "cancel-button-size": u(r).cancelButtonSize, "cancel-button-title": u(r).cancelButtonTitle, "cancel-button-variant": u(r).cancelButtonVariant, "cancel-icon": u(r).cancelIcon, "cancel-icon-color": u(r).cancelIconColor, error: u(f), "field-only": u(r).fieldOnly, "hide-cancel-icon": u(r).hideCancelIcon, "hide-save-icon": !0, loading: u(y), "loading-icon": u(r).loadingIcon, "loading-icon-color": u(r).loadingIconColor, "save-button-color": u(r).saveButtonColor, "save-button-size": u(r).saveButtonSize, "save-button-title": u(r).saveButtonTitle, "save-button-variant": u(r).saveButtonVariant, "save-icon": u(r).saveIcon, "save-icon-color": u(r).saveIconColor, onClose: N, onSave: j }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "model-value", "true-icon", "true-value"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), u(r).cardField ? (J(), ie("div", { key: 2, class: ee(u(O)), style: ge(u(A)) }, [d(_n, ye(Ce(u(b))), { default: ue(() => [d(yn, null, { default: ue(() => [xe("div", { ref_key: "cardFieldRef", ref: P }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), rs = Ne({ __name: "VInlineCustomField", props: Pe(kn({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Mo }), { modelValue: {} }), emits: Pe([...zn], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = un(e, "modelValue"), l = dn(), a = cn(), i = t, c = ve(Symbol.for("vuetify:icons")), s = e;
  let o = Le({ ...l, ...s });
  const r = v(() => s.loading), y = v(() => s.disabled), m = M(!1), f = M(!1), p = M(!1), g = M(null);
  let h = n.value;
  K(() => r.value, (L, Y) => {
    !L && Y && p.value && q();
  });
  const b = v(() => n.value ? (m.value = !1, o.truncateLength ? hl({ length: o.truncateLength, suffix: o.truncateSuffix, text: n.value }) : n.value) : (m.value = !0, o.emptyText)), B = v(() => ({ ...o, loading: r.value, modelValue: n.value, originalValue: h })), V = v(() => ({ color: o.color, displayAppendIcon: s.displayAppendIcon, displayAppendIconColor: s.displayAppendIconColor, displayAppendIconSize: s.displayAppendIconSize, displayAppendInnerIcon: s.displayAppendInnerIcon, displayAppendInnerIconColor: s.displayAppendInnerIconColor, displayAppendInnerIconSize: s.displayAppendInnerIconSize, displayPrependIcon: s.displayPrependIcon, displayPrependIconColor: s.displayPrependIconColor, displayPrependIconSize: s.displayPrependIconSize, displayPrependInnerIcon: s.displayPrependInnerIcon, displayPrependInnerIconColor: s.displayPrependInnerIconColor, displayPrependInnerIconSize: s.displayPrependInnerIconSize, displayValue: b.value, empty: m.value, error: f.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), _ = v(() => ({ ...Vn, ...s.cardProps })), U = v(() => On({ cell: o.cell && !p.value, density: o.density, disabled: y.value, field: "v-text-field", iconSet: c == null ? void 0 : c.defaultSet, loading: r.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), z = v(() => Pn({ cell: o.cell, cellUnderlineFullWidth: o.cellUnderlineFullWidth, density: o.density, field: "v-text-field" })), D = Lt({ density: o.density, variant: o.variant }), R = v(() => $n({ active: p.value, name: "text-field" })), E = v(() => En({ name: "custom-field", showField: p.value })), S = v(() => ({})), O = v(() => k.value);
  function C() {
    f.value = !1, n.value = h, q();
  }
  const k = M(), A = M(null), N = M("body");
  function q() {
    var Y, x;
    if (y.value || o.loadingWait && r.value)
      return;
    k.value = mn({ cardMinWidth: (Y = o.cardProps) == null ? void 0 : Y.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (x = o.cardProps) == null ? void 0 : x.width, field: A.value });
    const L = Tn({ attrs: l, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: s, showField: p, timeOpened: g.value });
    o = { ...o, ...L.settings }, p.value = L.showField, g.value = L.timeOpened, W !== null && o.closeSiblings && p.value && !o.fieldOnly && W.emit(L.timeOpened);
  }
  const I = M();
  function P() {
    const L = Mt({ required: o.required, rules: o.rules, value: n });
    return f.value = L.errors, I.value = L.results, L.results;
  }
  function $() {
    f.value ? f.value = !0 : (h = n.value, i("update", n.value), o.loadingWait || q());
  }
  let W, j;
  function F(L) {
    i("update:closeSiblingFields", g), p.value && g.value !== L && C();
  }
  return K(() => p.value, () => {
    p.value && P();
  }), K(() => n.value, () => {
    p.value && P();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: L }) => {
    W = L(Fn), j = W.on(F);
  }), wn(() => {
    j !== void 0 && W.off(F);
  }), (L, Y) => (J(), ie("div", { ref_key: "inlineFieldsContainer", ref: A, class: ee(u(U)), style: ge(u(S)) }, [!u(p) && !u(o).fieldOnly || u(o).cardField ? (J(), ie("div", { key: 0, class: ee(u(z)) }, [xe("div", { class: ee(u(D)) }, [d(u(Wt), Z(u(V), { onToggleField: q }), He({ _: 2 }, [Ye(u(a), (x, w) => ({ name: w, fn: ue((T) => [Ae(L.$slots, w, ye(Ce({ ...T })))]) }))]), 1040)], 2)], 2)) : pe("", !0), u(p) || u(o).fieldOnly || u(o).cardField ? (J(), ie("div", { key: 1, class: ee(["d-flex align-center py-2", u(R)]) }, [(J(), he(sn, { disabled: !u(o).cardField, to: u(N) }, [Ae(L.$slots, "default", ye(Ce(u(B)))), d(u(lt), { modelValue: n.value, "onUpdate:modelValue": Y[0] || (Y[0] = (x) => n.value = x), "cancel-button-color": u(o).cancelButtonColor, "cancel-button-size": u(o).cancelButtonSize, "cancel-button-title": u(o).cancelButtonTitle, "cancel-button-variant": u(o).cancelButtonVariant, "cancel-icon": u(o).cancelIcon, "cancel-icon-color": u(o).cancelIconColor, error: u(f), "field-only": u(o).fieldOnly, "hide-cancel-icon": u(o).hideCancelIcon, "hide-save-icon": u(o).hideSaveIcon, loading: u(r), "loading-icon": u(o).loadingIcon, "loading-icon-color": u(o).loadingIconColor, required: u(o).required, "save-button-color": u(o).saveButtonColor, "save-button-size": u(o).saveButtonSize, "save-button-title": u(o).saveButtonTitle, "save-button-variant": u(o).saveButtonVariant, "save-icon": u(o).saveIcon, "save-icon-color": u(o).saveIconColor, onClose: C, onSave: $ }, null, 8, ["modelValue", "cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "required", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), u(o).cardField ? (J(), ie("div", { key: 2, class: ee(u(E)), style: ge(u(O)) }, [d(_n, ye(Ce(u(_))), { default: ue(() => [d(yn, null, { default: ue(() => [xe("div", { ref_key: "cardFieldRef", ref: N }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), ss = Ne({ __name: "VInlineSelect", props: Pe(kn({ clearIcon: {}, clearable: {}, density: {}, hideSelected: {}, itemTitle: {}, itemValue: {}, items: {}, menu: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...di }), { modelValue: {} }), emits: Pe([...zn], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = un(e, "modelValue"), l = dn(), a = cn(), i = t, c = ve(Symbol.for("vuetify:icons")), s = e;
  let o = Le({ ...l, ...s });
  const r = v(() => s.loading), y = v(() => s.disabled), m = M(!1), f = M(!1), p = M(), g = M(!1), h = M(null);
  let b = n.value;
  K(() => r.value, (w, T) => {
    !w && T && g.value && P();
  });
  const B = v(() => We({ icon: s.clearIcon, iconOptions: c, name: "clear" })), V = v(() => n.value && n.value[o.itemTitle] ? (m.value = !1, n.value[o.itemTitle]) : n.value ? n.value : (m.value = !0, o.emptyText)), _ = v(() => Jn(o)), U = v(() => ({ color: o.color, displayAppendIcon: s.displayAppendIcon, displayAppendIconColor: s.displayAppendIconColor, displayAppendIconSize: s.displayAppendIconSize, displayAppendInnerIcon: s.displayAppendInnerIcon, displayAppendInnerIconColor: s.displayAppendInnerIconColor, displayAppendInnerIconSize: s.displayAppendInnerIconSize, displayPrependIcon: s.displayPrependIcon, displayPrependIconColor: s.displayPrependIconColor, displayPrependIconSize: s.displayPrependIconSize, displayPrependInnerIcon: s.displayPrependInnerIcon, displayPrependInnerIconColor: s.displayPrependInnerIconColor, displayPrependInnerIconSize: s.displayPrependInnerIconSize, displayValue: V.value, empty: m.value, error: f.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), z = v(() => ({ ...Vn, ...s.cardProps }));
  Ge(() => {
    p.value = o.items || [];
  });
  const D = v(() => On({ cell: o.cell && !g.value, density: o.density, disabled: y.value, field: "v-select", iconSet: c == null ? void 0 : c.defaultSet, loading: r.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), R = v(() => Pn({ cell: o.cell, cellUnderlineFullWidth: o.cellUnderlineFullWidth, density: o.density, field: "v-select" })), E = Lt({ density: o.density, variant: o.variant }), S = v(() => $n({ active: g.value, name: "select" })), O = v(() => En({ name: "select", showField: g.value })), C = v(() => ({})), k = v(() => N.value);
  function A() {
    f.value = !1, n.value = b, P();
  }
  const N = M(), q = M(null), I = M("body");
  function P() {
    var T, G;
    if (y.value || o.loadingWait && r.value)
      return;
    N.value = mn({ cardMinWidth: (T = o.cardProps) == null ? void 0 : T.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (G = o.cardProps) == null ? void 0 : G.width, field: q.value });
    const w = Tn({ attrs: l, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: s, showField: g, timeOpened: h.value });
    o = { ...o, ...w.settings }, g.value = w.showField, h.value = w.timeOpened, L !== null && o.closeSiblings && g.value && !o.fieldOnly && L.emit(w.timeOpened);
  }
  const $ = M(), W = v(() => $.value);
  function j() {
    const w = Mt({ required: o.required, rules: o.rules, value: n });
    return f.value = w.errors, $.value = w.results, w.results;
  }
  function F() {
    b = n.value, i("update", n.value), o.loadingWait || P();
  }
  let L, Y;
  function x(w) {
    i("update:closeSiblingFields", h), g.value && h.value !== w && A();
  }
  return K(() => g.value, () => {
    g.value && j();
  }), K(() => n.value, () => {
    g.value && j();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: w }) => {
    L = w(Fn), Y = L.on(x);
  }), wn(() => {
    Y !== void 0 && L.off(x);
  }), (w, T) => (J(), ie("div", { ref_key: "inlineFieldsContainer", ref: q, class: ee(u(D)), style: ge(u(C)) }, [!u(g) && !u(o).fieldOnly || u(o).cardField ? (J(), ie("div", { key: 0, class: ee(u(R)) }, [xe("div", { class: ee(u(E)) }, [d(u(Wt), Z(u(U), { onToggleField: P }), He({ _: 2 }, [Ye(u(a), (G, X) => ({ name: X, fn: ue((oe) => [Ae(w.$slots, X, ye(Ce({ ...oe })), void 0, !0)]) }))]), 1040)], 2)], 2)) : pe("", !0), u(g) || u(o).fieldOnly || u(o).cardField ? (J(), ie("div", { key: 1, class: ee(u(S)) }, [(J(), he(sn, { disabled: !u(o).cardField, to: u(I) }, [d(Ur, Z(u(_), { modelValue: n.value, "onUpdate:modelValue": T[0] || (T[0] = (G) => n.value = G), autofocus: !u(o).fieldOnly || u(o).autofocus, "clear-icon": u(B), clearable: u(o).clearable, color: u(o).color, density: u(o).density, disabled: u(r) || u(y), error: u(f), "error-messages": u(W), "hide-details": u(o).hideDetails, "hide-selected": u(o).hideSelected, "item-title": u(o).itemTitle, "item-value": u(o).itemValue, items: u(p), label: u(o).label, loading: u(r), menu: u(o).menu && !u(o).fieldOnly && u(g), variant: u(o).variant, width: "100%", onKeyup: St(A, ["esc"]) }), He({ _: 2 }, [Ye(u(a), (G, X) => ({ name: X, fn: ue((oe) => [Ae(w.$slots, X, ye(Ce({ ...oe })), void 0, !0)]) })), u(a).append ? void 0 : { name: "append", fn: ue(() => [d(u(lt), { "cancel-button-color": u(o).cancelButtonColor, "cancel-button-size": u(o).cancelButtonSize, "cancel-button-title": u(o).cancelButtonTitle, "cancel-button-variant": u(o).cancelButtonVariant, "cancel-icon": u(o).cancelIcon, "cancel-icon-color": u(o).cancelIconColor, error: u(f), "field-only": u(o).fieldOnly, "hide-cancel-icon": u(o).hideCancelIcon, "hide-save-icon": u(o).hideSaveIcon, loading: u(r), "loading-icon": u(o).loadingIcon, "loading-icon-color": u(o).loadingIconColor, "save-button-color": u(o).saveButtonColor, "save-button-size": u(o).saveButtonSize, "save-button-title": u(o).saveButtonTitle, "save-button-variant": u(o).saveButtonVariant, "save-icon": u(o).saveIcon, "save-icon-color": u(o).saveIconColor, onClose: A, onSave: F }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "clearable", "color", "density", "disabled", "error", "error-messages", "hide-details", "hide-selected", "item-title", "item-value", "items", "label", "loading", "menu", "variant", "onKeyup"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), u(o).cardField ? (J(), ie("div", { key: 2, class: ee(u(O)), style: ge(u(k)) }, [d(_n, ye(Ce(u(z))), { default: ue(() => [d(yn, null, { default: ue(() => [xe("div", { ref_key: "cardFieldRef", ref: I }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), us = { class: "v-selection-control__wrapper" }, Re = { VInlineCheckbox: is, VInlineCustomField: rs, VInlineSelect: ((e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, a] of t)
    n[l] = a;
  return n;
})(ss, [["__scopeId", "data-v-a3b5b055"]]), VInlineSwitch: Ne({ __name: "VInlineSwitch", props: Pe(kn({ density: {}, falseIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...pi }), { modelValue: {} }), emits: Pe([...zn], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = un(e, "modelValue"), l = dn(), a = cn(), i = t, c = ve(Symbol.for("vuetify:icons")), s = Sl(), o = e;
  let r = Le({ ...l, ...o });
  const y = v(() => o.loading), m = v(() => o.disabled), f = M(!1), p = M(!1), g = M(null), h = v(() => Jn(r)), b = v(() => ({ ...Vn, ...o.cardProps }));
  K(() => y.value, (F, L) => {
    !F && L && p.value && I();
  });
  const B = v(() => We({ icon: r.cancelIcon, iconOptions: c, name: "false" })), V = v(() => n.value == r.trueValue), _ = v(() => Ja({ modelValue: n, trueValue: r.trueValue })), U = v(() => On({ cell: r.cell && !p.value, density: r.density, disabled: m.value, field: "v-switch", loading: y.value, loadingWait: r.loadingWait, tableField: r.tableField })), z = v(() => Pn({ cell: r.cell, cellUnderlineFullWidth: r.cellUnderlineFullWidth, density: r.density, field: "v-switch" })), D = Ka({ density: r.density }), R = v(() => $n({ active: p.value, name: "switch" })), E = v(() => Ml("switch", r.valueColor, { error: f })), S = v(() => En({ name: "switch", showField: p.value })), O = v(() => ({})), C = v(() => Rl({ color: r.color, error: f, theme: s, underlineColor: r.underlineColor, underlineStyle: r.underlineStyle, underlineWidth: r.underlineWidth, underlined: r.underlined })), k = v(() => A.value), A = M(), N = M(null), q = M("body");
  function I() {
    var L, Y;
    if (m.value || r.loadingWait && y.value)
      return;
    A.value = mn({ cardMinWidth: (L = r.cardProps) == null ? void 0 : L.minWidth, cardOffsetX: r.cardOffsetX, cardOffsetY: r.cardOffsetY, cardWidth: (Y = r.cardProps) == null ? void 0 : Y.width, field: N.value });
    const F = Tn({ attrs: l, closeSiblings: r.closeSiblings, fieldOnly: r.fieldOnly, props: o, showField: p.value, timeOpened: g.value });
    r = { ...r, ...F.settings }, p.value = F.showField, g.value = F.timeOpened, $ !== null && r.closeSiblings && p.value && !r.fieldOnly && $.emit(F.timeOpened);
  }
  function P(F) {
    n.value = F, i("update", F), r.loadingWait || I();
  }
  let $, W;
  function j(F) {
    i("update:closeSiblingFields", g), p.value && g.value !== F && I();
  }
  return r.closeSiblings && import("@vueuse/core").then(({ useEventBus: F }) => {
    $ = F(Fn), W = $.on(j);
  }), wn(() => {
    W !== void 0 && $.off(j);
  }), (F, L) => (J(), ie("div", { ref_key: "inlineFieldsContainer", ref: N, class: ee(u(U)), style: ge(u(O)) }, [!u(p) && !u(r).fieldOnly || u(r).cardField ? (J(), ie("div", { key: 0, class: ee(u(z)), onClick: L[2] || (L[2] = (Y) => u(r).cell ? I() : void 0) }, [xe("div", { class: ee(u(D)), onClick: L[1] || (L[1] = (Y) => u(r).cell ? void 0 : I()) }, [xe("div", us, [F.icons ? (J(), ie("div", { key: 0, class: ee(["v-inline-fields--boolean-icons-container", u(E)]), style: ge(u(C)) }, [d(u(Xa), { modelValue: u(_), "onUpdate:modelValue": L[0] || (L[0] = (Y) => hn(_) ? _.value = Y : null), "icon-false": u(r).iconFalse, "icon-false-color": u(r).iconFalseColor, "icon-false-title": u(r).iconFalseTitle, "icon-true": u(r).iconTrue, "icon-true-color": u(r).iconTrueColor, "icon-true-title": u(r).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (J(), ie("div", { key: 1, class: ee(["d-inline-flex align-center justify-center", u(E)]), style: ge(u(C)) }, Il(u(V)), 7))])], 2)], 2)) : pe("", !0), u(p) || u(r).fieldOnly || u(r).cardField ? (J(), ie("div", { key: 1, class: ee(u(R)) }, [(J(), he(sn, { disabled: !u(r).cardField, to: u(q) }, [d(es, Z(u(h), { color: u(r).color, density: u(r).density, disabled: u(y) || u(m), error: u(f), "false-icon": u(r).falseIcon, "false-value": u(r).falseValue, "hide-details": u(r).hideDetails, label: u(r).label, loading: u(y), "model-value": u(_), "true-value": u(r).trueValue, "onUpdate:modelValue": P }), He({ _: 2 }, [Ye(u(a), (Y, x) => ({ name: x, fn: ue((w) => [Ae(F.$slots, x, ye(Ce({ ...w })))]) })), u(a).append ? void 0 : { name: "append", fn: ue(() => [u(r).fieldOnly && !u(r).cardField || u(r).hideCancelIcon ? pe("", !0) : (J(), he(ul, { key: 0, class: "ms-3", color: u(r).cancelButtonColor, icon: "", size: u(r).cancelButtonSize, title: u(r).cancelButtonTitle, variant: u(r).cancelButtonVariant, onClick: I }, { default: ue(() => [d(de, { color: u(r).cancelIconColor, icon: u(B) }, null, 8, ["color", "icon"])]), _: 1 }, 8, ["color", "size", "title", "variant"]))]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "loading", "model-value", "true-value"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), u(r).cardField ? (J(), ie("div", { key: 2, class: ee(u(S)), style: ge(u(k)) }, [d(_n, ye(Ce(u(b))), { default: ue(() => [d(yn, null, { default: ue(() => [xe("div", { ref_key: "cardFieldRef", ref: q }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), VInlineTextField: Ne({ __name: "VInlineTextField", props: Pe(kn({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Mo }), { modelValue: {} }), emits: Pe([...zn], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = un(e, "modelValue"), l = dn(), a = cn(), i = t, c = ve(Symbol.for("vuetify:icons")), s = e;
  let o = Le({ ...l, ...s });
  const r = v(() => s.loading), y = v(() => s.disabled), m = M(!1), f = M(!1), p = M(!1), g = M(null);
  let h = n.value;
  K(() => r.value, (x, w) => {
    !x && w && p.value && I();
  });
  const b = v(() => We({ icon: s.clearIcon, iconOptions: c, name: "clear" })), B = v(() => n.value ? (m.value = !1, o.truncateLength ? hl({ length: o.truncateLength, suffix: o.truncateSuffix, text: n.value }) : n.value) : (m.value = !0, o.emptyText)), V = v(() => Jn(o)), _ = v(() => ({ color: o.color, displayAppendIcon: s.displayAppendIcon, displayAppendIconColor: s.displayAppendIconColor, displayAppendIconSize: s.displayAppendIconSize, displayAppendInnerIcon: s.displayAppendInnerIcon, displayAppendInnerIconColor: s.displayAppendInnerIconColor, displayAppendInnerIconSize: s.displayAppendInnerIconSize, displayPrependIcon: s.displayPrependIcon, displayPrependIconColor: s.displayPrependIconColor, displayPrependIconSize: s.displayPrependIconSize, displayPrependInnerIcon: s.displayPrependInnerIcon, displayPrependInnerIconColor: s.displayPrependInnerIconColor, displayPrependInnerIconSize: s.displayPrependInnerIconSize, displayValue: B.value, empty: m.value, error: f.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), U = v(() => ({ ...Vn, ...s.cardProps })), z = v(() => On({ cell: o.cell && !p.value, density: o.density, disabled: y.value, field: "v-text-field", iconSet: c == null ? void 0 : c.defaultSet, loading: r.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), D = v(() => Pn({ cell: o.cell, cellUnderlineFullWidth: o.cellUnderlineFullWidth, density: o.density, field: "v-text-field" })), R = Lt({ density: o.density, variant: o.variant }), E = v(() => $n({ active: p.value, name: "text-field" })), S = v(() => En({ name: "text-field", showField: p.value })), O = v(() => ({})), C = v(() => A.value);
  function k() {
    f.value = !1, n.value = h, I();
  }
  const A = M(), N = M(null), q = M("body");
  function I() {
    var w, T;
    if (y.value || o.loadingWait && r.value)
      return;
    A.value = mn({ cardMinWidth: (w = o.cardProps) == null ? void 0 : w.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (T = o.cardProps) == null ? void 0 : T.width, field: N.value });
    const x = Tn({ attrs: l, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: s, showField: p, timeOpened: g.value });
    o = { ...o, ...x.settings }, p.value = x.showField, g.value = x.timeOpened, F !== null && o.closeSiblings && p.value && !o.fieldOnly && F.emit(x.timeOpened);
  }
  const P = M(), $ = v(() => P.value);
  function W() {
    const x = Mt({ required: o.required, rules: o.rules, value: n });
    return f.value = x.errors, P.value = x.results, x.results;
  }
  function j() {
    f.value ? f.value = !0 : (h = n.value, i("update", n.value), o.loadingWait || I());
  }
  let F, L;
  function Y(x) {
    i("update:closeSiblingFields", g), p.value && g.value !== x && k();
  }
  return K(() => p.value, () => {
    p.value && W();
  }), K(() => n.value, () => {
    p.value && W();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: x }) => {
    F = x(Fn), L = F.on(Y);
  }), wn(() => {
    L !== void 0 && F.off(Y);
  }), (x, w) => (J(), ie("div", { ref_key: "inlineFieldsContainer", ref: N, class: ee(u(z)), style: ge(u(O)) }, [!u(p) && !u(o).fieldOnly || u(o).cardField ? (J(), ie("div", { key: 0, class: ee(u(D)) }, [xe("div", { class: ee(u(R)) }, [d(u(Wt), Z(u(_), { onToggleField: I }), He({ _: 2 }, [Ye(u(a), (T, G) => ({ name: G, fn: ue((X) => [Ae(x.$slots, G, ye(Ce({ ...X })))]) }))]), 1040)], 2)], 2)) : pe("", !0), u(p) || u(o).fieldOnly || u(o).cardField ? (J(), ie("div", { key: 1, class: ee(u(E)) }, [(J(), he(sn, { disabled: !u(o).cardField, to: u(q) }, [d(gl, Z(u(V), { modelValue: n.value, "onUpdate:modelValue": w[1] || (w[1] = (T) => n.value = T), autofocus: !u(o).fieldOnly || u(o).autofocus, "clear-icon": u(b), color: u(o).color, density: u(o).density, disabled: u(r) || u(y), error: u(f), "error-messages": u($), "hide-details": u(o).hideDetails, label: u(o).label, loading: u(r), variant: u(o).variant, width: "100%", onKeyup: [St(j, ["enter"]), St(k, ["esc"])] }), He({ _: 2 }, [Ye(u(a), (T, G) => ({ name: G, fn: ue((X) => [Ae(x.$slots, G, ye(Ce({ ...X })))]) })), u(a).append ? void 0 : { name: "append", fn: ue(() => [d(u(lt), { modelValue: n.value, "onUpdate:modelValue": w[0] || (w[0] = (T) => n.value = T), "cancel-button-color": u(o).cancelButtonColor, "cancel-button-size": u(o).cancelButtonSize, "cancel-button-title": u(o).cancelButtonTitle, "cancel-button-variant": u(o).cancelButtonVariant, "cancel-icon": u(o).cancelIcon, "cancel-icon-color": u(o).cancelIconColor, error: u(f), "field-only": u(o).fieldOnly, "hide-cancel-icon": u(o).hideCancelIcon, "hide-save-icon": u(o).hideSaveIcon, loading: u(r), "loading-icon": u(o).loadingIcon, "loading-icon-color": u(o).loadingIconColor, required: u(o).required, "save-button-color": u(o).saveButtonColor, "save-button-size": u(o).saveButtonSize, "save-button-title": u(o).saveButtonTitle, "save-button-variant": u(o).saveButtonVariant, "save-icon": u(o).saveIcon, "save-icon-color": u(o).saveIconColor, onClose: k, onSave: j }, null, 8, ["modelValue", "cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "required", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "variant", "onKeyup"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), u(o).cardField ? (J(), ie("div", { key: 2, class: ee(u(S)), style: ge(u(C)) }, [d(_n, ye(Ce(u(U))), { default: ue(() => [d(yn, null, { default: ue(() => [xe("div", { ref_key: "cardFieldRef", ref: q }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), VInlineTextarea: Ne({ __name: "VInlineTextarea", props: Pe(kn({ autoGrow: {}, clearIcon: {}, density: {}, rows: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...vi }), { modelValue: {} }), emits: Pe([...zn], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = un(e, "modelValue"), l = dn(), a = cn(), i = t, c = ve(Symbol.for("vuetify:icons")), s = e;
  let o = Le({ ...l, ...s });
  const r = v(() => s.loading), y = v(() => s.disabled), m = M(!1), f = M(!1), p = M(!1), g = M(null);
  let h = n.value;
  K(() => r.value, (x, w) => {
    !x && w && p.value && I();
  });
  const b = v(() => We({ icon: s.clearIcon, iconOptions: c, name: "clear" })), B = v(() => n.value ? (m.value = !1, o.truncateLength ? hl({ length: o.truncateLength, suffix: o.truncateSuffix, text: n.value }) : n.value) : (m.value = !0, o.emptyText)), V = v(() => Jn(o)), _ = v(() => ({ color: o.color, displayAppendIcon: s.displayAppendIcon, displayAppendIconColor: s.displayAppendIconColor, displayAppendIconSize: s.displayAppendIconSize, displayAppendInnerIcon: s.displayAppendInnerIcon, displayAppendInnerIconColor: s.displayAppendInnerIconColor, displayAppendInnerIconSize: s.displayAppendInnerIconSize, displayPrependIcon: s.displayPrependIcon, displayPrependIconColor: s.displayPrependIconColor, displayPrependIconSize: s.displayPrependIconSize, displayPrependInnerIcon: s.displayPrependInnerIcon, displayPrependInnerIconColor: s.displayPrependInnerIconColor, displayPrependInnerIconSize: s.displayPrependInnerIconSize, displayValue: B.value, empty: m.value, error: f.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), U = v(() => ({ ...Vn, ...s.cardProps })), z = v(() => On({ cell: o.cell && !p.value, density: o.density, disabled: y.value, field: "v-textarea", iconSet: c == null ? void 0 : c.defaultSet, loading: r.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), D = v(() => Pn({ cell: o.cell, cellUnderlineFullWidth: o.cellUnderlineFullWidth, density: o.density, field: "v-textarea" })), R = Lt({ density: o.density, variant: o.variant }), E = v(() => $n({ active: p.value, name: "textarea" })), S = v(() => En({ name: "textarea", showField: p.value })), O = v(() => ({})), C = v(() => A.value);
  function k() {
    f.value = !1, n.value = h, I();
  }
  const A = M(), N = M(null), q = M("body");
  function I() {
    var w, T;
    if (y.value || o.loadingWait && r.value)
      return;
    A.value = mn({ cardMinWidth: (w = o.cardProps) == null ? void 0 : w.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (T = o.cardProps) == null ? void 0 : T.width, field: N.value });
    const x = Tn({ attrs: l, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: s, showField: p, timeOpened: g.value });
    o = { ...o, ...x.settings }, p.value = x.showField, g.value = x.timeOpened, F !== null && o.closeSiblings && p.value && !o.fieldOnly && F.emit(x.timeOpened);
  }
  const P = M(), $ = v(() => P.value);
  function W() {
    const x = Mt({ required: o.required, rules: o.rules, value: n });
    return f.value = x.errors, P.value = x.results, x.results;
  }
  function j() {
    h = n.value, i("update", n.value), o.loadingWait || I();
  }
  let F, L;
  function Y(x) {
    i("update:closeSiblingFields", g), p.value && g.value !== x && k();
  }
  return K(() => p.value, () => {
    p.value && W();
  }), K(() => n.value, () => {
    p.value && W();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: x }) => {
    F = x(Fn), L = F.on(Y);
  }), wn(() => {
    L !== void 0 && F.off(Y);
  }), (x, w) => (J(), ie("div", { ref_key: "inlineFieldsContainer", ref: N, class: ee(u(z)), style: ge(u(O)) }, [!u(p) && !u(o).fieldOnly || u(o).cardField ? (J(), ie("div", { key: 0, class: ee(u(D)) }, [xe("div", { class: ee(u(R)) }, [d(u(Wt), Z(u(_), { onToggleField: I }), He({ _: 2 }, [Ye(u(a), (T, G) => ({ name: G, fn: ue((X) => [Ae(x.$slots, G, ye(Ce({ ...X })))]) }))]), 1040)], 2)], 2)) : pe("", !0), u(p) || u(o).fieldOnly || u(o).cardField ? (J(), ie("div", { key: 1, class: ee(u(E)) }, [(J(), he(sn, { disabled: !u(o).cardField, to: u(q) }, [d(ts, Z(u(V), { modelValue: n.value, "onUpdate:modelValue": w[0] || (w[0] = (T) => n.value = T), "auto-grow": u(o).autoGrow, autofocus: !u(o).fieldOnly || u(o).autofocus, "clear-icon": u(b), color: u(o).color, density: u(o).density, disabled: u(r) || u(y), error: u(f), "error-messages": u($), "hide-details": u(o).hideDetails, label: u(o).label, loading: u(r), rows: u(o).rows, variant: u(o).variant, width: "100%", onKeyup: St(k, ["esc"]) }), He({ _: 2 }, [Ye(u(a), (T, G) => ({ name: G, fn: ue((X) => [Ae(x.$slots, G, ye(Ce({ ...X })))]) })), u(a).append ? void 0 : { name: "append", fn: ue(() => [d(u(lt), { "cancel-button-color": u(o).cancelButtonColor, "cancel-button-size": u(o).cancelButtonSize, "cancel-button-title": u(o).cancelButtonTitle, "cancel-button-variant": u(o).cancelButtonVariant, "cancel-icon": u(o).cancelIcon, "cancel-icon-color": u(o).cancelIconColor, error: u(f), "field-only": u(o).fieldOnly, "hide-cancel-icon": u(o).hideCancelIcon, "hide-save-icon": u(o).hideSaveIcon, loading: u(r), "loading-icon": u(o).loadingIcon, "loading-icon-color": u(o).loadingIconColor, "save-button-color": u(o).saveButtonColor, "save-button-size": u(o).saveButtonSize, "save-button-title": u(o).saveButtonTitle, "save-button-variant": u(o).saveButtonVariant, "save-icon": u(o).saveIcon, "save-icon-color": u(o).saveIconColor, onClose: k, onSave: j }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "auto-grow", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "rows", "variant", "onKeyup"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), u(o).cardField ? (J(), ie("div", { key: 2, class: ee(u(S)), style: ge(u(C)) }, [d(_n, ye(Ce(u(U))), { default: ue(() => [d(yn, null, { default: ue(() => [xe("div", { ref_key: "cardFieldRef", ref: q }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }) }, cs = (e) => {
  for (const t in Re) {
    const n = Re[t];
    e.component(n.name, n);
  }
};
for (const e in Re)
  Re[e].install = cs;
const fs = Re.VInlineCheckbox, ys = Re.VInlineCustomField, ms = Re.VInlineSelect, gs = Re.VInlineSwitch, hs = Re.VInlineTextField, bs = Re.VInlineTextarea, Cs = { VInlineFields: Re };
export {
  fs as VInlineCheckbox,
  ys as VInlineCustomField,
  ms as VInlineSelect,
  gs as VInlineSwitch,
  hs as VInlineTextField,
  bs as VInlineTextarea,
  Cs as default
};
(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode("[data-v-a3b5b055] .v-field__field{align-items:flex-end!important}:root{--v-inline-fields-top-padding-compact: 13px;--v-inline-fields-top-padding-comfortable: 17px;--v-inline-fields-top-padding-default: 21px;--v-inline-fields-input-height: 24px;--v-inline-fields-density-compact-height: 32px;--v-inline-fields-density-comfortable-height: 40px;--v-inline-fields-grey: #909090}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append{padding-top:0!important}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append .v-icon{font-size:1rem!important}.v-inline-fields{position:relative}.v-inline-fields--display-container *{align-items:center;display:flex}.v-inline-fields--display-container-cell{cursor:pointer;display:block;max-height:unset!important}.v-inline-fields--display-container-cell>div{width:100%}.v-inline-fields--display-container-cell-underline-full-width .v-inline-fields--display-value{width:100%}.v-inline-fields--display-container-cell .v-inline-fields--selection-control .v-inline-fields--display-value{justify-content:center}.v-inline-fields--display-container-cell,.v-inline-fields--display-container-cell .v-input,.v-inline-fields--display-container-cell .v-inline-fields--display-wrapper,.v-inline-fields--display-container-cell .v-selection-control__wrapper{height:100%!important;width:100%}.v-inline-fields--display-value{cursor:pointer;letter-spacing:.009375em!important}.v-inline-fields--display-value-empty{color:var(--v-inline-fields-grey);font-style:italic}.v-inline-fields--display-value-checkbox,.v-inline-fields--display-value-switch{padding-bottom:2px;padding-top:6px}.v-inline-fields--display-append-icon,.v-inline-fields--display-prepend-icon,.v-inline-fields--display-append-inner-icon,.v-inline-fields--display-prepend-inner-icon{align-items:flex-end;display:inline-flex}.v-inline-fields--container-cell{height:100%;width:100%}.v-inline-fields--container-disabled .v-inline-fields--display-value{cursor:default!important;opacity:var(--v-disabled-opacity)}.v-inline-fields--container-loading .v-inline-fields--display-value{cursor:wait!important}.v-inline-fields--container-icon-set-fa .v-field__clearable{font-size:.8rem}.v-inline-fields--container-icon-set-fa .v-field__append-inner{align-items:flex-end;padding-bottom:0!important}.v-inline-fields--container-v-select-compact-plain .v-input,.v-inline-fields--container-v-select-compact-underlined .v-input,.v-inline-fields--container-v-text-field-compact-plain .v-input,.v-inline-fields--container-v-text-field-compact-underlined .v-input{height:var(--v-inline-fields-density-compact-height);max-height:var(--v-inline-fields-density-compact-height)}.v-inline-fields--container-v-select-compact-plain .v-input__control,.v-inline-fields--container-v-select-compact-underlined .v-input__control,.v-inline-fields--container-v-text-field-compact-plain .v-input__control,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control{padding-bottom:4px}.v-inline-fields--container-v-select-compact-plain .v-input>div,.v-inline-fields--container-v-select-compact-underlined .v-input>div,.v-inline-fields--container-v-text-field-compact-plain .v-input>div,.v-inline-fields--container-v-text-field-compact-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input input{padding-bottom:10px}.v-inline-fields--container-v-select-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-compact-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-select__selection{align-items:center;padding-bottom:10px}.v-inline-fields--container-v-select-comfortable-plain .v-input,.v-inline-fields--container-v-select-comfortable-underlined .v-input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input{height:var(--v-inline-fields-density-comfortable-height);max-height:var(--v-inline-fields-density-comfortable-height)}.v-inline-fields--container-v-select-comfortable-plain .v-input__control,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control{padding-bottom:8px}.v-inline-fields--container-v-select-comfortable-plain .v-input>div,.v-inline-fields--container-v-select-comfortable-underlined .v-input>div,.v-inline-fields--container-v-text-field-comfortable-plain .v-input>div,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input input{padding-bottom:6px}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-select__selection{align-items:center;padding-bottom:6px}.v-inline-fields--container-v-select-compact-plain .v-field__append-inner,.v-inline-fields--container-v-select-compact-underlined .v-field__append-inner{padding-top:4px!important}.v-inline-fields--container-v-select-comfortable-plain .v-field__append-inner,.v-inline-fields--container-v-select-comfortable-underlined .v-field__append-inner{padding-top:8px!important}.v-inline-fields--container-v-textarea .v-inline-fields--save-fields-container{align-items:flex-end}.v-inline-fields--container-v-select,.v-inline-fields--container-v-textarea,.v-inline-fields--container-v-text-field{width:100%}.v-inline-fields--container-v-checkbox .v-input,.v-inline-fields--container-v-switch .v-input{align-items:center;display:flex;padding-bottom:0}.v-inline-fields--container-v-checkbox .v-input__append,.v-inline-fields--container-v-switch .v-input__append{margin-inline-start:0!important;margin-left:0;padding-bottom:0!important}.v-inline-fields--container-v-checkbox .v-selection-control,.v-inline-fields--container-v-switch .v-selection-control{min-height:unset}.v-inline-fields--container-v-checkbox .v-inline-fields--save-fields-container,.v-inline-fields--container-v-switch .v-inline-fields--save-fields-container{align-items:center!important}.v-inline-fields--container .v-input__append,.v-inline-fields--container .v-input__prepend,.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-top:0!important}.v-inline-fields--container .v-input__append .v-icon,.v-inline-fields--container .v-input__prepend .v-icon,.v-inline-fields--container .v-field__append-inner .v-icon,.v-inline-fields--container .v-field__prepend-inner .v-icon{font-size:1rem!important}.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-compact .v-input__append,.v-inline-fields--container-compact .v-input__prepend,.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-comfortable .v-input__append,.v-inline-fields--container-comfortable .v-input__prepend,.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{padding-bottom:6px!important}.v-inline-fields--container-default .v-input__append,.v-inline-fields--container-default .v-input__prepend,.v-inline-fields--container-default .v-field__append-inner,.v-inline-fields--container-default .v-field__prepend-inner{align-items:flex-end!important;padding-bottom:0!important}.v-inline-fields--container-default .v-input__append .v-icon,.v-inline-fields--container-default .v-input__prepend .v-icon,.v-inline-fields--container-default .v-field__append-inner .v-icon,.v-inline-fields--container-default .v-field__prepend-inner .v-icon{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)!important}.v-inline-fields--container-default .v-inline-fields--save-fields-container{align-items:flex-end!important}.v-inline-fields--card-container{height:fit-content;min-width:fit-content!important;position:absolute}.v-inline-fields--card-container .v-card{border:1px solid hsla(0,0%,50%,.5)}.v-inline-fields--card-container .v-card .v-card-text{padding:5px 10px}.v-inline-fields--card-container .v-card .v-card-text>div{align-items:center;display:flex}.v-inline-fields--card-container-checkbox .v-card .v-card-text .v-input__append{margin-inline-start:0}.v-inline-fields--save-fields-container{align-items:center;display:flex;height:100%;margin-left:.1rem}.v-inline-fields--boolean-icons{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-inline-fields .truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:250px}.v-inline-fields .v-input__append{padding-top:0}")),document.head.appendChild(i)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
