import { Fragment as fe, reactive as Le, computed as v, watchEffect as Ge, toRefs as Eo, capitalize as To, isVNode as ni, Comment as ti, unref as u, warn as Rt, inject as ve, ref as N, provide as De, shallowRef as re, defineComponent as Ne, camelize as zo, h as Nt, getCurrentInstance as li, onBeforeUnmount as an, watch as K, readonly as bl, onScopeDispose as Be, effectScope as Cl, toRaw as tn, TransitionGroup as oi, Transition as gn, createVNode as d, mergeProps as Z, onBeforeMount as Do, nextTick as Ie, withDirectives as we, resolveDirective as Je, vShow as Mn, isRef as hn, onMounted as Wn, toRef as ne, Text as ai, resolveDynamicComponent as ii, Teleport as sn, cloneVNode as ri, createTextVNode as Lo, vModelText as si, mergeModels as Pe, useModel as un, openBlock as J, createBlock as he, useSlots as cn, createElementBlock as ae, normalizeClass as ee, normalizeStyle as ge, renderSlot as Ae, normalizeProps as ye, createCommentVNode as pe, createElementVNode as xe, toDisplayString as Il, useAttrs as dn, withCtx as ue, mergeDefaults as kn, onUnmounted as wn, createSlots as Ue, renderList as Ye, guardReactiveProps as Ce, withKeys as St } from "vue";
import { useTheme as Sl } from "vuetify";
import { useWindowSize as ui } from "@vueuse/core";
/**
 * @name @wdns/vuetify-inline-fields
 * @version 1.0.0-beta-2
 * @description Vuetify Inline Fields Component Library offers a comprehensive collection of reusable UI components to create elegant and efficient inline form fields within your applications.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-inline-fields/
 * @repository https://github.com/webdevnerdstuff/vuetify-inline-fields
 * @license MIT License
 */
const Fn = Symbol("identifier"), Vn = { elevation: 5, variant: "flat" }, ot = { cancelButtonColor: "default", cancelButtonSize: "x-small", cancelButtonTitle: "Cancel", cancelButtonVariant: "text", cancelIcon: void 0, cancelIconColor: "default", cardField: !1, cardOffsetX: 0, cardOffsetY: 0, cardProps: () => ({}), closeSiblings: !1, color: "primary", density: "compact", disabled: !1, displayAppendIcon: void 0, displayAppendIconColor: void 0, displayAppendIconSize: "x-small", displayAppendInnerIcon: void 0, displayAppendInnerIconColor: void 0, displayAppendInnerIconSize: "x-small", displayPrependIcon: void 0, displayPrependIconColor: void 0, displayPrependIconSize: "x-small", displayPrependInnerIcon: void 0, displayPrependInnerIconColor: void 0, displayPrependInnerIconSize: "x-small", emptyText: "empty", fieldOnly: !1, hideDetails: !0, label: "", loading: !1, loadingWait: !0, name: "", tableField: !0, underlineColor: "primary", underlineStyle: "dotted", underlineWidth: "2px", underlined: !0, valueColor: "default" }, xl = { autofocus: !0 }, jt = { hideSaveIcon: !1, loadingIcon: void 0, loadingIconColor: "primary", saveButtonColor: "primary", saveButtonSize: "x-small", saveButtonTitle: "Save", saveButtonVariant: "text", saveIcon: void 0, saveIconColor: "primary" }, Mo = { falseValue: !1, iconFalse: void 0, iconFalseColor: "danger", iconFalseTitle: "No", iconTrue: void 0, iconTrueColor: "success", iconTrueTitle: "Yes", icons: !0, trueValue: !0 }, ci = { ...ot, ...Mo, ...jt, falseIcon: void 0, icons: !0, trueIcon: void 0 }, di = { ...ot, ...xl, ...jt, clearIcon: void 0, clearable: !1, hideSelected: !0, itemTitle: "title", itemValue: "value", items: () => [], menu: !0, variant: "underlined" }, pi = { ...ot, ...Mo, icons: !0, falseIcon: "" }, vi = { ...xl, ...jt, ...ot, autoGrow: !0, rows: 1, truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, Wo = { ...ot, ...xl, ...jt, truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, fi = { fa: { checkboxFalse: "$checkboxOff", checkboxTrue: "far fa-square-check", clear: "$clear", false: "$close", loading: "fa-circle-notch", save: "fa-floppy-disk", true: "$complete" }, mdi: { checkboxFalse: "$checkboxOff", checkboxTrue: "mdi:mdi-checkbox-outline", clear: "$clear", false: "$close", loading: "mdi-loading", save: "mdi-content-save", true: "$complete" } }, Me = (e) => {
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
function Y(e, t) {
  return (n) => Object.keys(e).reduce((l, a) => {
    const i = typeof e[a] == "object" && e[a] != null && !Array.isArray(e[a]) ? e[a] : { type: e[a] };
    return l[a] = n && a in n ? { ...i, default: n[a] } : i, t && !l[a].source && (l[a].source = t), l;
  }, {});
}
const se = Y({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component"), $e = typeof window < "u", Bl = $e && "IntersectionObserver" in window;
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
function ln(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function An(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function ql(e, t) {
  return e + (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length));
}
function xn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const l = {};
  for (const a in e)
    l[a] = e[a];
  for (const a in t) {
    const i = e[a], c = t[a];
    ll(i) && ll(c) ? l[a] = xn(i, c, n) : Array.isArray(i) && Array.isArray(c) && n ? l[a] = n(i, c) : l[a] = c;
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
function xt(e, t) {
  if (!t || typeof t != "object")
    return [];
  if (Array.isArray(t))
    return t.map((n) => xt(e, n)).flat(1);
  if (Array.isArray(t.children))
    return t.children.map((n) => xt(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertySymbols(t.component.provides).includes(e))
      return [t.component];
    if (t.component.subTree)
      return xt(e, t.component.subTree).flat(1);
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
function Hl(e) {
  return e[2].toLowerCase() + e.slice(3);
}
pn.cache = /* @__PURE__ */ new Map();
const je = () => [Function, Array];
function Ul(e, t) {
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
      const r = qo(n, t);
      r ? r.focus() : Vt(e, t === "next" ? "first" : "last");
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
function Ho(e) {
  return e.some((t) => !ni(t) || t.type !== ti && (t.type !== fe || Ho(t.children))) ? e : null;
}
const Uo = ["top", "bottom"], mi = ["start", "end", "left", "right"];
function il(e, t) {
  let [n, l] = e.split(" ");
  return l || (l = Ft(Uo, n) ? "start" : Ft(mi, n) ? "top" : "center"), { side: Yl(n, t), align: Yl(l, t) };
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
  return Ft(Uo, e.side) ? "y" : "x";
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
    let a, i, c, r, o;
    if (l.startsWith("matrix3d("))
      a = l.slice(9, -1).split(/, /), i = +a[0], c = +a[5], r = +a[12], o = +a[13];
    else {
      if (!l.startsWith("matrix("))
        return new vn(t);
      a = l.slice(7, -1).split(/, /), i = +a[0], c = +a[3], r = +a[4], o = +a[5];
    }
    const s = n.transformOrigin, m = t.x - r - (1 - i) * parseFloat(s), y = t.y - o - (1 - c) * parseFloat(s.slice(s.indexOf(" ") + 1)), f = i ? t.width / i : e.offsetWidth + 1, p = c ? t.height / c : e.offsetHeight + 1;
    return new vn({ x: m, y, width: f, height: p });
  }
  return new vn(t);
}
function Bn(e, t, n) {
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
const ht = /* @__PURE__ */ new WeakMap(), Sn = 2.4, Zl = 0.2126729, Ql = 0.7151522, eo = 0.072175, gi = 0.55, hi = 0.58, bi = 0.57, Ci = 0.62, bt = 0.03, no = 1.45, Ii = 5e-4, Si = 1.25, xi = 1.25, to = 0.078, lo = 12.82051282051282, Ct = 0.06, oo = 1e-3;
function ao(e, t) {
  const n = (e.r / 255) ** Sn, l = (e.g / 255) ** Sn, a = (e.b / 255) ** Sn, i = (t.r / 255) ** Sn, c = (t.g / 255) ** Sn, r = (t.b / 255) ** Sn;
  let o, s = n * Zl + l * Ql + a * eo, m = i * Zl + c * Ql + r * eo;
  if (s <= bt && (s += (bt - s) ** no), m <= bt && (m += (bt - m) ** no), Math.abs(m - s) < Ii)
    return 0;
  if (m > s) {
    const y = (m ** gi - s ** hi) * Si;
    o = y < oo ? 0 : y < to ? y - y * lo * Ct : y - Ct;
  } else {
    const y = (m ** Ci - s ** bi) * xi;
    o = y > -oo ? 0 : y > -to ? y - y * lo * Ct : y + Ct;
  }
  return 100 * o;
}
function Kn(e) {
  Rt(`Vuetify: ${e}`);
}
function Jt(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
const io = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Bi = { rgb: (e, t, n, l) => ({ r: e, g: t, b: n, a: l }), rgba: (e, t, n, l) => ({ r: e, g: t, b: n, a: l }), hsl: (e, t, n, l) => ro({ h: e, s: t, l: n, a: l }), hsla: (e, t, n, l) => ro({ h: e, s: t, l: n, a: l }), hsv: (e, t, n, l) => Zn({ h: e, s: t, v: n, a: l }), hsva: (e, t, n, l) => Zn({ h: e, s: t, v: n, a: l }) };
function Un(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && Kn(`'${e}' is not a valid hex color`), { r: (16711680 & e) >> 16, g: (65280 & e) >> 8, b: 255 & e };
  if (typeof e == "string" && io.test(e)) {
    const { groups: t } = e.match(io), { fn: n, values: l } = t, a = l.split(/,\s*/).map((i) => i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(i) / 100 : parseFloat(i));
    return Bi[n](...a);
  }
  if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((l) => l + l).join("") : [6, 8].includes(t.length) || Kn(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && Kn(`'${e}' is not a valid hex(a) color`), function(l) {
      l = function(o) {
        return o.startsWith("#") && (o = o.slice(1)), o = o.replace(/([^0-9a-f])/gi, "F"), (o.length === 3 || o.length === 4) && (o = o.split("").map((s) => s + s).join("")), o.length !== 6 && (o = ql(ql(o, 6), 8, "F")), o;
      }(l);
      let [a, i, c, r] = function(o) {
        let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        const m = [];
        let y = 0;
        for (; y < o.length; )
          m.push(o.substr(y, s)), y += s;
        return m;
      }(l, 2).map((o) => parseInt(o, 16));
      return r = r === void 0 ? r : r / 255, { r: a, g: i, b: c, a: r };
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
  const { h: t, s: n, v: l, a } = e, i = (r) => {
    const o = (r + t / 60) % 6;
    return l - l * n * Math.max(Math.min(o, 4 - o, 1), 0);
  }, c = [i(5), i(3), i(1)].map((r) => Math.round(255 * r));
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
  const n = Fl(), l = N(e), a = v(() => {
    if (u(t == null ? void 0 : t.disabled))
      return n.value;
    const i = u(t == null ? void 0 : t.scoped), c = u(t == null ? void 0 : t.reset), r = u(t == null ? void 0 : t.root);
    if (l.value == null && !(i || c || r))
      return n.value;
    let o = xn(l.value, { prev: n.value });
    if (i)
      return o;
    if (c || r) {
      const s = Number(c || 1 / 0);
      for (let m = 0; m <= s && o && "prev" in o; m++)
        o = o.prev;
      return o && typeof r == "string" && r in o && (o = xn(xn(o, { prev: o }), o[r])), o;
    }
    return o.prev ? xn(o.prev, o) : o;
  });
  return De(_t, a), a;
}
function ki() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Fl();
  const l = Fe("useDefaults");
  if (t = t ?? l.type.name ?? l.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const a = v(() => {
    var r;
    return (r = n.value) == null ? void 0 : r[e._as ?? t];
  }), i = new Proxy(e, { get(r, o) {
    var m, y, f, p;
    const s = Reflect.get(r, o);
    return o === "class" || o === "style" ? [(m = a.value) == null ? void 0 : m[o], s].filter((g) => g != null) : typeof o != "string" || function(g, h) {
      var b, I;
      return ((b = g.props) == null ? void 0 : b[h]) !== void 0 || ((I = g.props) == null ? void 0 : I[pn(h)]) !== void 0;
    }(l.vnode, o) ? s : ((y = a.value) == null ? void 0 : y[o]) ?? ((p = (f = n.value) == null ? void 0 : f.global) == null ? void 0 : p[o]) ?? s;
  } }), c = re();
  return Ge(() => {
    if (a.value) {
      const r = Object.entries(a.value).filter((o) => {
        let [s] = o;
        return s.startsWith(s[0].toUpperCase());
      });
      c.value = r.length ? Object.fromEntries(r) : void 0;
    } else
      c.value = void 0;
  }), { props: i, provideSubDefaults: function() {
    const r = function(o) {
      let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fe("injectSelf");
      const { provides: m } = s;
      if (m && o in m)
        return m[o];
    }(_t, l);
    De(_t, v(() => c.value ? xn((r == null ? void 0 : r.value) ?? {}, c.value) : r == null ? void 0 : r.value));
  } };
}
function Qn(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return Kn("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = Y(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(n) {
      return Ro(n, t);
    }, e.props._as = String, e.setup = function(n, l) {
      const a = Fl();
      if (!a.value)
        return e._setup(n, l);
      const { props: i, provideSubDefaults: c } = ki(n, n._as ?? e.name, a), r = e._setup(i, l);
      return c(), r;
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
function Fe(e, t) {
  const n = li();
  if (!n)
    throw new Error(`[Vuetify] ${e} ${t || "must be called from inside a setup function"}`);
  return n;
}
function qe() {
  const e = Fe(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return pn((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let Jo = 0, Bt = /* @__PURE__ */ new WeakMap();
function We() {
  const e = Fe("getUid");
  if (Bt.has(e))
    return Bt.get(e);
  {
    const t = Jo++;
    return Bt.set(e, t), t;
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
function oe(e) {
  Fe("useRender").render = e;
}
function Al(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = N(), l = N();
  if ($e) {
    const a = new ResizeObserver((i) => {
      e == null || e(i, a), i.length && (l.value = t === "content" ? i[0].contentRect : i[0].target.getBoundingClientRect());
    });
    an(() => {
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
  }, { immediate: !0 }), Be(() => {
    n == null || n.stop();
  });
}
function me(e, t, n) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (m) => m, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (m) => m;
  const i = Fe("useProxiedModel"), c = N(e[t] !== void 0 ? e[t] : n), r = pn(t), o = v(r !== t ? () => {
    var m, y, f, p;
    return e[t], !(!((m = i.vnode.props) != null && m.hasOwnProperty(t)) && !((y = i.vnode.props) != null && y.hasOwnProperty(r)) || !((f = i.vnode.props) != null && f.hasOwnProperty(`onUpdate:${t}`)) && !((p = i.vnode.props) != null && p.hasOwnProperty(`onUpdate:${r}`)));
  } : () => {
    var m, y;
    return e[t], !(!((m = i.vnode.props) != null && m.hasOwnProperty(t)) || !((y = i.vnode.props) != null && y.hasOwnProperty(`onUpdate:${t}`)));
  });
  fn(() => !o.value, () => {
    K(() => e[t], (m) => {
      c.value = m;
    });
  });
  const s = v({ get() {
    const m = e[t];
    return l(o.value ? m : c.value);
  }, set(m) {
    const y = a(m), f = tn(o.value ? e[t] : c.value);
    f !== y && l(f) !== m && (c.value = y, i == null || i.emit(`update:${t}`, y));
  } });
  return Object.defineProperty(s, "externalValue", { get: () => o.value ? e[t] : c.value }), s;
}
We.reset = () => {
  Jo = 0, Bt = /* @__PURE__ */ new WeakMap();
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
const so = Symbol.for("vuetify:theme"), Se = Y({ theme: String }, "theme");
function _e(e) {
  Fe("provideTheme");
  const t = ve(so, null);
  if (!t)
    throw new Error("Could not find Vuetify theme injection");
  const n = v(() => e.theme ?? t.name.value), l = v(() => t.themes.value[n.value]), a = v(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), i = { ...t, name: n, current: l, themeClasses: a };
  return De(so, i), i;
}
const ze = Y({ tag: { type: String, default: "div" } }, "tag"), Fi = Y({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function Ee(e, t, n) {
  return Q()({ name: e, props: Fi({ mode: n, origin: t }), setup(l, a) {
    let { slots: i } = a;
    const c = { onBeforeEnter(r) {
      l.origin && (r.style.transformOrigin = l.origin);
    }, onLeave(r) {
      if (l.leaveAbsolute) {
        const { offsetTop: o, offsetLeft: s, offsetWidth: m, offsetHeight: y } = r;
        r._transitionInitialStyles = { position: r.style.position, top: r.style.top, left: r.style.left, width: r.style.width, height: r.style.height }, r.style.position = "absolute", r.style.top = `${o}px`, r.style.left = `${s}px`, r.style.width = `${m}px`, r.style.height = `${y}px`;
      }
      l.hideOnLeave && r.style.setProperty("display", "none", "important");
    }, onAfterLeave(r) {
      if (l.leaveAbsolute && (r != null && r._transitionInitialStyles)) {
        const { position: o, top: s, left: m, width: y, height: f } = r._transitionInitialStyles;
        delete r._transitionInitialStyles, r.style.position = o || "", r.style.top = s || "", r.style.left = m || "", r.style.width = y || "", r.style.height = f || "";
      }
    } };
    return () => {
      const r = l.group ? oi : gn;
      return Nt(r, { name: l.disabled ? "" : e, css: !l.disabled, ...l.group ? void 0 : { mode: l.mode }, ...l.disabled ? {} : c }, i.default);
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
    const r = `${i[n]}px`;
    i.style[t] = "0", i.offsetHeight, i.style.transition = c.transition, e && i._parent && i._parent.classList.add(e), requestAnimationFrame(() => {
      i.style[t] = r;
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
const Vi = Y({ target: [Object, Array] }, "v-dialog-transition"), ta = Q()({ name: "VDialogTransition", props: Vi(), setup(e, t) {
  let { slots: n } = t;
  const l = { onBeforeEnter(a) {
    a.style.pointerEvents = "none", a.style.visibility = "hidden";
  }, async onEnter(a, i) {
    var f;
    await new Promise((p) => requestAnimationFrame(p)), await new Promise((p) => requestAnimationFrame(p)), a.style.visibility = "";
    const { x: c, y: r, sx: o, sy: s, speed: m } = co(e.target, a), y = Bn(a, [{ transform: `translate(${c}px, ${r}px) scale(${o}, ${s})`, opacity: 0 }, {}], { duration: 225 * m, easing: "cubic-bezier(0.0, 0, 0.2, 1)" });
    (f = uo(a)) == null || f.forEach((p) => {
      Bn(p, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * m, easing: Ot });
    }), y.finished.then(() => i());
  }, onAfterEnter(a) {
    a.style.removeProperty("pointer-events");
  }, onBeforeLeave(a) {
    a.style.pointerEvents = "none";
  }, async onLeave(a, i) {
    var y;
    await new Promise((f) => requestAnimationFrame(f));
    const { x: c, y: r, sx: o, sy: s, speed: m } = co(e.target, a);
    Bn(a, [{}, { transform: `translate(${c}px, ${r}px) scale(${o}, ${s})`, opacity: 0 }], { duration: 125 * m, easing: "cubic-bezier(0.4, 0, 1, 1)" }).finished.then(() => i()), (y = uo(a)) == null || y.forEach((f) => {
      Bn(f, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * m, easing: Ot });
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
  const n = Yo(e), l = wl(t), [a, i] = getComputedStyle(t).transformOrigin.split(" ").map((I) => parseFloat(I)), [c, r] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let o = n.left + n.width / 2;
  c === "left" || r === "left" ? o -= n.width / 2 : c !== "right" && r !== "right" || (o += n.width / 2);
  let s = n.top + n.height / 2;
  c === "top" || r === "top" ? s -= n.height / 2 : c !== "bottom" && r !== "bottom" || (s += n.height / 2);
  const m = n.width / l.width, y = n.height / l.height, f = Math.max(1, m, y), p = m / f || 0, g = y / f || 0, h = l.width * l.height / (window.innerWidth * window.innerHeight), b = h > 0.12 ? Math.min(1.5, 10 * (h - 0.12) + 1) : 1;
  return { x: o - (a + l.left), y: s - (i + l.top), sx: p, sy: g, speed: b };
}
Ee("fab-transition", "center center", "out-in"), Ee("dialog-bottom-transition"), Ee("dialog-top-transition"), Ee("fade-transition");
const Ai = Ee("scale-transition");
Ee("scroll-x-transition"), Ee("scroll-x-reverse-transition"), Ee("scroll-y-transition"), Ee("scroll-y-reverse-transition"), Ee("slide-x-transition"), Ee("slide-x-reverse-transition");
const la = Ee("slide-y-transition");
Ee("slide-y-reverse-transition");
const _i = ea("expand-transition", na()), oa = ea("expand-x-transition", na("", !0)), Oi = Y({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), ke = Q(!1)({ name: "VDefaultsProvider", props: Oi(), setup(e, t) {
  let { slots: n } = t;
  const { defaults: l, disabled: a, reset: i, root: c, scoped: r } = Eo(e);
  return Rn(l, { reset: i, root: c, scoped: r, disabled: a }), () => {
    var o;
    return (o = n.default) == null ? void 0 : o.call(n);
  };
} }), Cn = Y({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function In(e) {
  return { dimensionStyles: v(() => ({ height: te(e.height), maxHeight: te(e.maxHeight), maxWidth: te(e.maxWidth), minHeight: te(e.minHeight), minWidth: te(e.minWidth), width: te(e.width) })) };
}
const aa = Y({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...se(), ...Cn() }, "VResponsive"), po = Q()({ name: "VResponsive", props: aa(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: l } = function(i) {
    return { aspectStyles: v(() => {
      const c = Number(i.aspectRatio);
      return c ? { paddingBottom: String(1 / c * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: a } = In(e);
  return oe(() => {
    var i;
    return d("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [a.value, e.style] }, [d("div", { class: "v-responsive__sizer", style: l.value }, null), (i = n.additional) == null ? void 0 : i.call(n), n.default && d("div", { class: ["v-responsive__content", e.contentClass] }, [n.default()])]);
  }), {};
} }), ut = Y({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), nn = (e, t) => {
  let { slots: n } = t;
  const { transition: l, disabled: a, ...i } = e, { component: c = gn, ...r } = typeof l == "object" ? l : {};
  return Nt(c, Z(typeof l == "string" ? { name: a ? "" : l } : r, i, { disabled: a }), n);
};
function vo(e, t) {
  var l;
  const n = (l = e._observe) == null ? void 0 : l[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const Ol = { mounted: function(e, t) {
  if (!Bl)
    return;
  const n = t.modifiers || {}, l = t.value, { handler: a, options: i } = typeof l == "object" ? l : { handler: l, options: {} }, c = new IntersectionObserver(function() {
    var y;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], o = arguments.length > 1 ? arguments[1] : void 0;
    const s = (y = e._observe) == null ? void 0 : y[t.instance.$.uid];
    if (!s)
      return;
    const m = r.some((f) => f.isIntersecting);
    !a || n.quiet && !s.init || n.once && !m && !s.init || a(m, r, o), m && n.once ? vo(e, t) : s.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = { init: !1, observer: c }, c.observe(e);
}, unmounted: vo }, Pi = Y({ alt: String, cover: Boolean, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...aa(), ...se(), ...ut() }, "VImg"), ia = Q()({ name: "VImg", directives: { intersect: Ol }, props: Pi(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, t) {
  let { emit: n, slots: l } = t;
  const a = re(""), i = N(), c = re(e.eager ? "loading" : "idle"), r = re(), o = re(), s = v(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), m = v(() => s.value.aspect || r.value / o.value || 0);
  function y(B) {
    if ((!e.eager || !B) && (!Bl || B || e.eager)) {
      if (c.value = "loading", s.value.lazySrc) {
        const x = new Image();
        x.src = s.value.lazySrc, b(x, null);
      }
      s.value.src && Ie(() => {
        var x;
        n("loadstart", ((x = i.value) == null ? void 0 : x.currentSrc) || s.value.src), setTimeout(() => {
          var E;
          if ((E = i.value) != null && E.complete) {
            if (i.value.naturalWidth || p(), c.value === "error")
              return;
            m.value || b(i.value, null), c.value === "loading" && f();
          } else
            m.value || b(i.value), g();
        });
      });
    }
  }
  function f() {
    var B;
    g(), b(i.value), c.value = "loaded", n("load", ((B = i.value) == null ? void 0 : B.currentSrc) || s.value.src);
  }
  function p() {
    var B;
    c.value = "error", n("error", ((B = i.value) == null ? void 0 : B.currentSrc) || s.value.src);
  }
  function g() {
    const B = i.value;
    B && (a.value = B.currentSrc || B.src);
  }
  K(() => e.src, () => {
    y(c.value !== "idle");
  }), K(m, (B, x) => {
    !B && x && i.value && b(i.value);
  }), Do(() => y());
  let h = -1;
  function b(B) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const E = () => {
      clearTimeout(h);
      const { naturalHeight: C, naturalWidth: V } = B;
      C || V ? (r.value = V, o.value = C) : B.complete || c.value !== "loading" || x == null ? (B.currentSrc.endsWith(".svg") || B.currentSrc.startsWith("data:image/svg+xml")) && (r.value = 1, o.value = 1) : h = window.setTimeout(E, x);
    };
    E();
  }
  const I = v(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), $ = () => {
    var E;
    if (!s.value.src || c.value === "idle")
      return null;
    const B = d("img", { class: ["v-img__img", I.value], style: { objectPosition: e.position }, src: s.value.src, srcset: s.value.srcset, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: i, onLoad: f, onError: p }, null), x = (E = l.sources) == null ? void 0 : E.call(l);
    return d(nn, { transition: e.transition, appear: !0 }, { default: () => [we(x ? d("picture", { class: "v-img__picture" }, [x, B]) : B, [[Mn, c.value === "loaded"]])] });
  }, F = () => d(nn, { transition: e.transition }, { default: () => [s.value.lazySrc && c.value !== "loaded" && d("img", { class: ["v-img__img", "v-img__img--preload", I.value], style: { objectPosition: e.position }, src: s.value.lazySrc, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), H = () => l.placeholder ? d(nn, { transition: e.transition, appear: !0 }, { default: () => [(c.value === "loading" || c.value === "error" && !l.error) && d("div", { class: "v-img__placeholder" }, [l.placeholder()])] }) : null, T = () => l.error ? d(nn, { transition: e.transition, appear: !0 }, { default: () => [c.value === "error" && d("div", { class: "v-img__error" }, [l.error()])] }) : null, M = () => e.gradient ? d("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, R = re(!1);
  {
    const B = K(m, (x) => {
      x && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          R.value = !0;
        });
      }), B());
    });
  }
  return oe(() => {
    const B = po.filterProps(e);
    return we(d(po, Z({ class: ["v-img", { "v-img--booting": !R.value }, e.class], style: [{ width: te(e.width === "auto" ? r.value : e.width) }, e.style] }, B, { aspectRatio: m.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => d(fe, null, [d($, null, null), d(F, null, null), d(M, null, null), d(H, null, null), d(T, null, null)]), default: l.default }), [[Je("intersect"), { handler: y, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: a, image: i, state: c, naturalWidth: r, naturalHeight: o };
} }), Nn = Y({ border: [Boolean, Number, String] }, "border");
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
          const a = Un(e.value.background);
          if (a.a == null || a.a === 1) {
            const i = function(c) {
              const r = Math.abs(ao(Un(0), Un(c)));
              return Math.abs(ao(Un(16777215), Un(c))) > Math.min(r, 50) ? "#fff" : "#000";
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
function Ke(e, t) {
  const n = v(() => ({ text: hn(e) ? e.value : t ? e[t] : null })), { colorClasses: l, colorStyles: a } = Pl(n);
  return { textColorClasses: l, textColorStyles: a };
}
function Dn(e, t) {
  const n = v(() => ({ background: hn(e) ? e.value : t ? e[t] : null })), { colorClasses: l, colorStyles: a } = Pl(n);
  return { backgroundColorClasses: l, backgroundColorStyles: a };
}
const Gn = Y({ elevation: { type: [Number, String], validator(e) {
  const t = parseInt(e);
  return !isNaN(t) && t >= 0 && t <= 24;
} } }, "elevation");
function qn(e) {
  return { elevationClasses: v(() => {
    const t = hn(e) ? e.value : e.elevation, n = [];
    return t == null || n.push(`elevation-${t}`), n;
  }) };
}
const Ze = Y({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function Qe(e) {
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
const $i = [null, "default", "comfortable", "compact"], He = Y({ density: { type: String, default: "default", validator: (e) => $i.includes(e) } }, "density");
function en(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : qe();
  return { densityClasses: v(() => `${t}--density-${e.density}`) };
}
const Ei = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function ct(e, t) {
  return d(fe, null, [e && d("span", { key: "overlay", class: `${t}__overlay` }, null), d("span", { key: "underlay", class: `${t}__underlay` }, null)]);
}
const rn = Y({ color: String, variant: { type: String, default: "elevated", validator: (e) => Ei.includes(e) } }, "variant");
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
const ra = Y({ divided: Boolean, ...Nn(), ...se(), ...He(), ...Gn(), ...Ze(), ...ze(), ...Se(), ...rn() }, "VBtnGroup"), fo = Q()({ name: "VBtnGroup", props: ra(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = _e(e), { densityClasses: a } = en(e), { borderClasses: i } = jn(e), { elevationClasses: c } = qn(e), { roundedClasses: r } = Qe(e);
  Rn({ VBtn: { height: "auto", color: ne(e, "color"), density: ne(e, "density"), flat: !0, variant: ne(e, "variant") } }), oe(() => d(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, l.value, i.value, a.value, c.value, r.value, e.class], style: e.style }, n));
} }), sa = Y({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), ua = Y({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function ca(e, t) {
  let n = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
  const l = Fe("useGroupItem");
  if (!l)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const a = We();
  De(Symbol.for(`${t.description}:id`), a);
  const i = ve(t, null);
  if (!i) {
    if (!n)
      return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const c = ne(e, "value"), r = v(() => !(!i.disabled.value && !e.disabled));
  i.register({ id: a, value: c, disabled: r }, l), an(() => {
    i.unregister(a);
  });
  const o = v(() => i.isSelected(a)), s = v(() => o.value && [i.selectedClass.value, e.selectedClass]);
  return K(o, (m) => {
    l.emit("group:selected", { value: m });
  }), { id: a, isSelected: o, toggle: () => i.select(a, !o.value), select: (m) => i.select(a, m), selectedClass: s, value: c, disabled: r, group: i };
}
function da(e, t) {
  let n = !1;
  const l = Le([]), a = me(e, "modelValue", [], (s) => s == null ? [] : yo(l, ln(s)), (s) => {
    const m = function(y, f) {
      const p = [];
      return f.forEach((g) => {
        const h = y.findIndex((b) => b.id === g);
        if (~h) {
          const b = y[h];
          p.push(b.value != null ? b.value : h);
        }
      }), p;
    }(l, s);
    return e.multiple ? m : m[0];
  }), i = Fe("useGroup");
  function c() {
    const s = l.find((m) => !m.disabled);
    s && e.mandatory === "force" && !a.value.length && (a.value = [s.id]);
  }
  function r(s) {
    if (e.multiple && Kn('This method is not supported when using "multiple" prop'), a.value.length) {
      const m = a.value[0], y = l.findIndex((g) => g.id === m);
      let f = (y + s) % l.length, p = l[f];
      for (; p.disabled && f !== y; )
        f = (f + s) % l.length, p = l[f];
      if (p.disabled)
        return;
      a.value = [l[f].id];
    } else {
      const m = l.find((y) => !y.disabled);
      m && (a.value = [m.id]);
    }
  }
  Wn(() => {
    c();
  }), an(() => {
    n = !0;
  });
  const o = { register: function(s, m) {
    const y = s, f = xt(Symbol.for(`${t.description}:id`), i == null ? void 0 : i.vnode).indexOf(m);
    f > -1 ? l.splice(f, 0, y) : l.push(y);
  }, unregister: function(s) {
    if (n)
      return;
    c();
    const m = l.findIndex((y) => y.id === s);
    l.splice(m, 1);
  }, selected: a, select: function(s, m) {
    const y = l.find((f) => f.id === s);
    if (!m || !(y != null && y.disabled))
      if (e.multiple) {
        const f = a.value.slice(), p = f.findIndex((h) => h === s), g = ~p;
        if (m = m ?? !g, g && e.mandatory && f.length <= 1 || !g && e.max != null && f.length + 1 > e.max)
          return;
        p < 0 && m ? f.push(s) : p >= 0 && !m && f.splice(p, 1), a.value = f;
      } else {
        const f = a.value.includes(s);
        if (e.mandatory && f)
          return;
        a.value = m ?? !f ? [s] : [];
      }
  }, disabled: ne(e, "disabled"), prev: () => r(l.length - 1), next: () => r(1), isSelected: (s) => a.value.includes(s), selectedClass: v(() => e.selectedClass), items: v(() => l), getItemIndex: (s) => function(m, y) {
    const f = yo(m, [y]);
    return f.length ? m.findIndex((p) => p.id === f[0]) : -1;
  }(l, s) };
  return De(t, o), o;
}
function yo(e, t) {
  const n = [];
  return t.forEach((l) => {
    const a = e.find((c) => at(l, c.value)), i = e[l];
    (a == null ? void 0 : a.value) != null ? n.push(a.id) : i != null && n.push(i.id);
  }), n;
}
const pa = Symbol.for("vuetify:v-btn-toggle"), Ti = Y({ ...ra(), ...sa() }, "VBtnToggle");
Q()({ name: "VBtnToggle", props: Ti(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: l, next: a, prev: i, select: c, selected: r } = da(e, pa);
  return oe(() => {
    const o = fo.filterProps(e);
    return d(fo, Z({ class: ["v-btn-toggle", e.class] }, o, { style: e.style }), { default: () => {
      var s;
      return [(s = n.default) == null ? void 0 : s.call(n, { isSelected: l, next: a, prev: i, select: c, selected: r })];
    } });
  }), { next: a, prev: i, select: c };
} });
const ce = [String, Function, Object, Array], zi = Symbol.for("vuetify:icons"), $t = Y({ icon: { type: ce }, tag: { type: String, required: !0 } }, "icon"), mo = Q()({ name: "VComponentIcon", props: $t(), setup(e, t) {
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
const Li = ["x-small", "small", "default", "large", "x-large"], pt = Y({ size: { type: [String, Number], default: "default" } }, "size");
function vt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : qe();
  return kl(() => {
    let n, l;
    return Ft(Li, e.size) ? n = `${t}--size-${e.size}` : e.size && (l = { width: te(e.size), height: te(e.size) }), { sizeClasses: n, sizeStyles: l };
  });
}
const Mi = Y({ color: String, start: Boolean, end: Boolean, icon: ce, ...se(), ...pt(), ...ze({ tag: "i" }), ...Se() }, "VIcon"), de = Q()({ name: "VIcon", props: Mi(), setup(e, t) {
  let { attrs: n, slots: l } = t;
  const a = N(), { themeClasses: i } = _e(e), { iconData: c } = ((m) => {
    const y = ve(zi);
    if (!y)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: v(() => {
      var b;
      const f = u(m);
      if (!f)
        return { component: mo };
      let p = f;
      if (typeof p == "string" && (p = p.trim(), p.startsWith("$") && (p = (b = y.aliases) == null ? void 0 : b[p.slice(1)])), !p)
        throw new Error(`Could not find aliased icon "${f}"`);
      if (Array.isArray(p))
        return { component: Di, icon: p };
      if (typeof p != "string")
        return { component: mo, icon: p };
      const g = Object.keys(y.sets).find((I) => typeof p == "string" && p.startsWith(`${I}:`)), h = g ? p.slice(g.length + 1) : p;
      return { component: y.sets[g ?? y.defaultSet].component, icon: h };
    }) };
  })(v(() => a.value || e.icon)), { sizeClasses: r } = vt(e), { textColorClasses: o, textColorStyles: s } = Ke(ne(e, "color"));
  return oe(() => {
    var y, f;
    const m = (y = l.default) == null ? void 0 : y.call(l);
    return m && (a.value = (f = jo(m).filter((p) => p.type === ai && p.children && typeof p.children == "string")[0]) == null ? void 0 : f.children), d(c.value.component, { tag: e.tag, icon: c.value.icon, class: ["v-icon", "notranslate", i.value, r.value, o.value, { "v-icon--clickable": !!n.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [r.value ? void 0 : { fontSize: te(e.size), height: te(e.size), width: te(e.size) }, s.value, e.style], role: n.onClick ? "button" : void 0, "aria-hidden": !n.onClick }, { default: () => [m] });
  }), {};
} });
function va(e, t) {
  const n = N(), l = re(!1);
  if (Bl) {
    const a = new IntersectionObserver((i) => {
      e == null || e(i, a), l.value = !!i.find((c) => c.isIntersecting);
    }, t);
    an(() => {
      a.disconnect();
    }), K(n, (i, c) => {
      c && (a.unobserve(c), l.value = !1), i && a.observe(i);
    }, { flush: "post" });
  }
  return { intersectionRef: n, isIntersecting: l };
}
const Wi = Y({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...se(), ...pt(), ...ze({ tag: "div" }), ...Se() }, "VProgressCircular"), fa = Q()({ name: "VProgressCircular", props: Wi(), setup(e, t) {
  let { slots: n } = t;
  const l = 2 * Math.PI * 20, a = N(), { themeClasses: i } = _e(e), { sizeClasses: c, sizeStyles: r } = vt(e), { textColorClasses: o, textColorStyles: s } = Ke(ne(e, "color")), { textColorClasses: m, textColorStyles: y } = Ke(ne(e, "bgColor")), { intersectionRef: f, isIntersecting: p } = va(), { resizeRef: g, contentRect: h } = Al(), b = v(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), I = v(() => Number(e.width)), $ = v(() => r.value ? Number(e.size) : h.value ? h.value.width : Math.max(I.value, 32)), F = v(() => 20 / (1 - I.value / $.value) * 2), H = v(() => I.value / $.value * F.value), T = v(() => te((100 - b.value) / 100 * l));
  return Ge(() => {
    f.value = a.value, g.value = a.value;
  }), oe(() => d(e.tag, { ref: a, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": p.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, i.value, c.value, o.value, e.class], style: [r.value, s.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : b.value }, { default: () => [d("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${F.value} ${F.value}` }, [d("circle", { class: ["v-progress-circular__underlay", m.value], style: y.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": H.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), d("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": H.value, "stroke-dasharray": l, "stroke-dashoffset": T.value }, null)]), n.default && d("div", { class: "v-progress-circular__content" }, [n.default({ value: b.value })])] })), {};
} }), go = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, $l = Y({ location: String }, "location");
function El(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: l } = st();
  return { locationStyles: v(() => {
    if (!e.location)
      return {};
    const { side: i, align: c } = il(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, l.value);
    function r(s) {
      return n ? n(s) : 0;
    }
    const o = {};
    return i !== "center" && (t ? o[go[i]] = `calc(100% - ${r(i)}px)` : o[i] = 0), c !== "center" ? t ? o[go[c]] = `calc(100% - ${r(c)}px)` : o[c] = 0 : (i === "center" ? o.top = o.left = "50%" : o[{ top: "left", bottom: "left", left: "top", right: "top" }[i]] = "50%", o.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[i]), o;
  }) };
}
const Ri = Y({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...se(), ...$l({ location: "top" }), ...Ze(), ...ze(), ...Se() }, "VProgressLinear"), Ni = Q()({ name: "VProgressLinear", props: Ri(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = me(e, "modelValue"), { isRtl: a, rtlClasses: i } = st(), { themeClasses: c } = _e(e), { locationStyles: r } = El(e), { textColorClasses: o, textColorStyles: s } = Ke(e, "color"), { backgroundColorClasses: m, backgroundColorStyles: y } = Dn(v(() => e.bgColor || e.color)), { backgroundColorClasses: f, backgroundColorStyles: p } = Dn(e, "color"), { roundedClasses: g } = Qe(e), { intersectionRef: h, isIntersecting: b } = va(), I = v(() => parseInt(e.max, 10)), $ = v(() => parseInt(e.height, 10)), F = v(() => parseFloat(e.bufferValue) / I.value * 100), H = v(() => parseFloat(l.value) / I.value * 100), T = v(() => a.value !== e.reverse), M = v(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), R = v(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function B(x) {
    if (!h.value)
      return;
    const { left: E, right: C, width: V } = h.value.getBoundingClientRect(), A = T.value ? V - x.clientX + (C - V) : x.clientX - E;
    l.value = Math.round(A / V * I.value);
  }
  return oe(() => d(e.tag, { ref: h, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && b.value, "v-progress-linear--reverse": T.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, g.value, c.value, i.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? te($.value) : 0, "--v-progress-linear-height": te($.value), ...r.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : H.value, onClick: e.clickable && B }, { default: () => [e.stream && d("div", { key: "stream", class: ["v-progress-linear__stream", o.value], style: { ...s.value, [T.value ? "left" : "right"]: te(-$.value), borderTop: `${te($.value / 2)} dotted`, opacity: R.value, top: `calc(50% - ${te($.value / 4)})`, width: te(100 - F.value, "%"), "--v-progress-linear-stream-to": te($.value * (T.value ? 1 : -1)) } }, null), d("div", { class: ["v-progress-linear__background", m.value], style: [y.value, { opacity: R.value, width: te(e.stream ? F.value : 100, "%") }] }, null), d(gn, { name: M.value }, { default: () => [e.indeterminate ? d("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((x) => d("div", { key: x, class: ["v-progress-linear__indeterminate", x, f.value], style: p.value }, null))]) : d("div", { class: ["v-progress-linear__determinate", f.value], style: [p.value, { width: te(H.value, "%") }] }, null)] }), n.default && d("div", { class: "v-progress-linear__content" }, [n.default({ value: H.value, buffer: F.value })])] })), {};
} }), Tl = Y({ loading: [Boolean, String] }, "loader");
function Gt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : qe();
  return { loaderClasses: v(() => ({ [`${t}--loading`]: e.loading })) };
}
function zl(e, t) {
  var l;
  let { slots: n } = t;
  return d("div", { class: `${e.name}__loader` }, [((l = n.default) == null ? void 0 : l.call(n, { color: e.color, isActive: e.active })) || d(Ni, { active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const ji = ["static", "relative", "fixed", "absolute", "sticky"], ya = Y({ position: { type: String, validator: (e) => ji.includes(e) } }, "position");
function ma(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : qe();
  return { positionClasses: v(() => e.position ? `${t}--${e.position}` : void 0) };
}
function qt(e, t) {
  const n = ii("RouterLink"), l = v(() => !(!e.href && !e.to)), a = v(() => (l == null ? void 0 : l.value) || Ul(t, "click") || Ul(e, "click"));
  if (typeof n == "string")
    return { isLink: l, isClickable: a, href: ne(e, "href") };
  const i = e.to ? n.useLink(e) : void 0;
  return { isLink: l, isClickable: a, route: i == null ? void 0 : i.route, navigate: i == null ? void 0 : i.navigate, isActive: i && v(() => {
    var c, r;
    return e.exact ? (c = i.isExactActive) == null ? void 0 : c.value : (r = i.isActive) == null ? void 0 : r.value;
  }), href: v(() => e.to ? i == null ? void 0 : i.route.value.href : e.href) };
}
const Ht = Y({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
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
  const { radius: i, scale: c, x: r, y: o, centerX: s, centerY: m } = function(g, h) {
    var R;
    let b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, I = 0, $ = 0;
    if (!ga(g)) {
      const B = h.getBoundingClientRect(), x = sl(g) ? g.touches[g.touches.length - 1] : g;
      I = x.clientX - B.left, $ = x.clientY - B.top;
    }
    let F = 0, H = 0.3;
    (R = h._ripple) != null && R.circle ? (H = 0.15, F = h.clientWidth / 2, F = b.center ? F : F + Math.sqrt((I - F) ** 2 + ($ - F) ** 2) / 4) : F = Math.sqrt(h.clientWidth ** 2 + h.clientHeight ** 2) / 2;
    const T = (h.clientWidth - 2 * F) / 2 + "px", M = (h.clientHeight - 2 * F) / 2 + "px";
    return { radius: F, scale: H, x: b.center ? T : I - F + "px", y: b.center ? M : $ - F + "px", centerX: T, centerY: M };
  }(e, t, n), y = 2 * i + "px";
  a.className = "v-ripple__animation", a.style.width = y, a.style.height = y, t.appendChild(l);
  const f = window.getComputedStyle(t);
  f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), a.classList.add("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--visible"), ho(a, `translate(${r}, ${o}) scale3d(${c},${c},${c})`), a.dataset.activated = String(performance.now()), setTimeout(() => {
    a.classList.remove("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--in"), ho(a, `translate(${s}, ${m}) scale3d(1,1,1)`);
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
    !i && n && xa(e);
}
function xa(e) {
  e.removeEventListener("mousedown", et), e.removeEventListener("touchstart", et), e.removeEventListener("touchend", Te), e.removeEventListener("touchmove", ba), e.removeEventListener("touchcancel", Te), e.removeEventListener("mouseup", Te), e.removeEventListener("mouseleave", Te), e.removeEventListener("keydown", Ca), e.removeEventListener("keyup", Ia), e.removeEventListener("dragstart", Te), e.removeEventListener("blur", Sa);
}
const ft = { mounted: function(e, t) {
  Co(e, t, !1);
}, unmounted: function(e) {
  delete e._ripple, xa(e);
}, updated: function(e, t) {
  t.value !== t.oldValue && Co(e, t, ha(t.oldValue));
} }, qi = Y({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: pa }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: ce, appendIcon: ce, block: Boolean, slim: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...Nn(), ...se(), ...He(), ...Cn(), ...Gn(), ...ua(), ...Tl(), ...$l(), ...ya(), ...Ze(), ...Ht(), ...pt(), ...ze({ tag: "button" }), ...Se(), ...rn({ variant: "elevated" }) }, "VBtn"), ul = Q()({ name: "VBtn", directives: { Ripple: ft }, props: qi(), emits: { "group:selected": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { themeClasses: a } = _e(e), { borderClasses: i } = jn(e), { colorClasses: c, colorStyles: r, variantClasses: o } = dt(e), { densityClasses: s } = en(e), { dimensionStyles: m } = In(e), { elevationClasses: y } = qn(e), { loaderClasses: f } = Gt(e), { locationStyles: p } = El(e), { positionClasses: g } = ma(e), { roundedClasses: h } = Qe(e), { sizeClasses: b, sizeStyles: I } = vt(e), $ = ca(e, e.symbol, !1), F = qt(e, n), H = v(() => {
    var x;
    return e.active !== void 0 ? e.active : F.isLink.value ? (x = F.isActive) == null ? void 0 : x.value : $ == null ? void 0 : $.isSelected.value;
  }), T = v(() => ($ == null ? void 0 : $.disabled.value) || e.disabled), M = v(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), R = v(() => {
    if (e.value !== void 0)
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function B(x) {
    var E;
    T.value || F.isLink.value && (x.metaKey || x.ctrlKey || x.shiftKey || x.button !== 0 || n.target === "_blank") || ((E = F.navigate) == null || E.call(F, x), $ == null || $.toggle());
  }
  return function(x, E) {
    K(() => {
      var C;
      return (C = x.isActive) == null ? void 0 : C.value;
    }, (C) => {
      x.isLink.value && C && E && Ie(() => {
        E(!0);
      });
    }, { immediate: !0 });
  }(F, $ == null ? void 0 : $.select), oe(() => {
    var j, G;
    const x = F.isLink.value ? "a" : e.tag, E = !(!e.prependIcon && !l.prepend), C = !(!e.appendIcon && !l.append), V = !(!e.icon || e.icon === !0), A = ($ == null ? void 0 : $.isSelected.value) && (!F.isLink.value || ((j = F.isActive) == null ? void 0 : j.value)) || !$ || ((G = F.isActive) == null ? void 0 : G.value);
    return we(d(x, { type: x === "a" ? void 0 : "button", class: ["v-btn", $ == null ? void 0 : $.selectedClass.value, { "v-btn--active": H.value, "v-btn--block": e.block, "v-btn--disabled": T.value, "v-btn--elevated": M.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, a.value, i.value, A ? c.value : void 0, s.value, y.value, f.value, g.value, h.value, b.value, o.value, e.class], style: [A ? r.value : void 0, m.value, p.value, I.value, e.style], disabled: T.value || void 0, href: F.href.value, onClick: B, value: R.value }, { default: () => {
      var k;
      return [ct(!0, "v-btn"), !e.icon && E && d("span", { key: "prepend", class: "v-btn__prepend" }, [l.prepend ? d(ke, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, l.prepend) : d(de, { key: "prepend-icon", icon: e.prependIcon }, null)]), d("span", { class: "v-btn__content", "data-no-activator": "" }, [!l.default && V ? d(de, { key: "content-icon", icon: e.icon }, null) : d(ke, { key: "content-defaults", disabled: !V, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var w;
        return [((w = l.default) == null ? void 0 : w.call(l)) ?? e.text];
      } })]), !e.icon && C && d("span", { key: "append", class: "v-btn__append" }, [l.append ? d(ke, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, l.append) : d(de, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && d("span", { key: "loader", class: "v-btn__loader" }, [((k = l.loader) == null ? void 0 : k.call(l)) ?? d(fa, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[Je("ripple"), !T.value && e.ripple, null]]);
  }), {};
} }), Hi = Y({ text: String, clickable: Boolean, ...se(), ...Se() }, "VLabel"), Ba = Q()({ name: "VLabel", props: Hi(), setup(e, t) {
  let { slots: n } = t;
  return oe(() => {
    var l;
    return d("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (l = n.default) == null ? void 0 : l.call(n)]);
  }), {};
} }), ka = Symbol.for("vuetify:selection-control-group"), wa = Y({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: ce, trueIcon: ce, ripple: { type: Boolean, default: !0 }, multiple: { type: Boolean, default: null }, name: String, readonly: Boolean, modelValue: null, type: String, valueComparator: { type: Function, default: at }, ...se(), ...He(), ...Se() }, "SelectionControlGroup"), Ui = Y({ ...wa({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup");
Q()({ name: "VSelectionControlGroup", props: Ui(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = me(e, "modelValue"), a = We(), i = v(() => e.id || `v-selection-control-group-${a}`), c = v(() => e.name || i.value), r = /* @__PURE__ */ new Set();
  return De(ka, { modelValue: l, forceUpdate: () => {
    r.forEach((o) => o());
  }, onForceUpdate: (o) => {
    r.add(o), Be(() => {
      r.delete(o);
    });
  } }), Rn({ [e.defaultsTarget]: { color: ne(e, "color"), disabled: ne(e, "disabled"), density: ne(e, "density"), error: ne(e, "error"), inline: ne(e, "inline"), modelValue: l, multiple: v(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)), name: c, falseIcon: ne(e, "falseIcon"), trueIcon: ne(e, "trueIcon"), readonly: ne(e, "readonly"), ripple: ne(e, "ripple"), type: ne(e, "type"), valueComparator: ne(e, "valueComparator") } }), oe(() => {
    var o;
    return d("div", { class: ["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class], style: e.style, role: e.type === "radio" ? "radiogroup" : void 0 }, [(o = n.default) == null ? void 0 : o.call(n)]);
  }), {};
} });
const Dl = Y({ label: String, baseColor: String, trueValue: null, falseValue: null, value: null, ...se(), ...wa() }, "VSelectionControl"), Tt = Q()({ name: "VSelectionControl", directives: { Ripple: ft }, inheritAttrs: !1, props: Dl(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { group: a, densityClasses: i, icon: c, model: r, textColorClasses: o, textColorStyles: s, backgroundColorClasses: m, backgroundColorStyles: y, trueValue: f } = function(T) {
    const M = ve(ka, void 0), { densityClasses: R } = en(T), B = me(T, "modelValue"), x = v(() => T.trueValue !== void 0 ? T.trueValue : T.value === void 0 || T.value), E = v(() => T.falseValue !== void 0 && T.falseValue), C = v(() => !!T.multiple || T.multiple == null && Array.isArray(B.value)), V = v({ get() {
      const _ = M ? M.modelValue.value : B.value;
      return C.value ? _.some((D) => T.valueComparator(D, x.value)) : T.valueComparator(_, x.value);
    }, set(_) {
      if (T.readonly)
        return;
      const D = _ ? x.value : E.value;
      let W = D;
      C.value && (W = _ ? [...ln(B.value), D] : ln(B.value).filter((O) => !T.valueComparator(O, x.value))), M ? M.modelValue.value = W : B.value = W;
    } }), { textColorClasses: A, textColorStyles: j } = Ke(v(() => {
      if (!T.error && !T.disabled)
        return V.value ? T.color : T.baseColor;
    })), { backgroundColorClasses: G, backgroundColorStyles: k } = Dn(v(() => !V.value || T.error || T.disabled ? void 0 : T.color)), w = v(() => V.value ? T.trueIcon : T.falseIcon);
    return { group: M, densityClasses: R, trueValue: x, falseValue: E, model: V, textColorClasses: A, textColorStyles: j, backgroundColorClasses: G, backgroundColorStyles: k, icon: w };
  }(e), p = We(), g = v(() => e.id || `input-${p}`), h = re(!1), b = re(!1), I = N();
  function $(T) {
    h.value = !0, At(T.target, ":focus-visible") !== !1 && (b.value = !0);
  }
  function F() {
    h.value = !1, b.value = !1;
  }
  function H(T) {
    e.readonly && a && Ie(() => a.forceUpdate()), r.value = T.target.checked;
  }
  return a == null || a.onForceUpdate(() => {
    I.value && (I.value.checked = r.value);
  }), oe(() => {
    var x, E;
    const T = l.label ? l.label({ label: e.label, props: { for: g.value } }) : e.label, [M, R] = it(n), B = d("input", Z({ ref: I, checked: r.value, disabled: !(!e.readonly && !e.disabled), id: g.value, onBlur: F, onFocus: $, onInput: H, "aria-disabled": !(!e.readonly && !e.disabled), type: e.type, value: f.value, name: e.name, "aria-checked": e.type === "checkbox" ? r.value : void 0 }, R), null);
    return d("div", Z({ class: ["v-selection-control", { "v-selection-control--dirty": r.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": h.value, "v-selection-control--focus-visible": b.value, "v-selection-control--inline": e.inline }, i.value, e.class] }, M, { style: e.style }), [d("div", { class: ["v-selection-control__wrapper", o.value], style: s.value }, [(x = l.default) == null ? void 0 : x.call(l, { backgroundColorClasses: m, backgroundColorStyles: y }), we(d("div", { class: ["v-selection-control__input"] }, [((E = l.input) == null ? void 0 : E.call(l, { model: r, textColorClasses: o, textColorStyles: s, backgroundColorClasses: m, backgroundColorStyles: y, inputNode: B, icon: c.value, props: { onFocus: $, onBlur: F, id: g.value } })) ?? d(fe, null, [c.value && d(de, { key: "icon", icon: c.value }, null), B])]), [[Je("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), T && d(Ba, { for: g.value, clickable: !0, onClick: (C) => C.stopPropagation() }, { default: () => [T] })]);
  }), { isFocused: h, input: I };
} }), Fa = Y({ indeterminate: Boolean, indeterminateIcon: { type: ce, default: "$checkboxIndeterminate" }, ...Dl({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), cl = Q()({ name: "VCheckboxBtn", props: Fa(), emits: { "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = me(e, "indeterminate"), a = me(e, "modelValue");
  function i(o) {
    l.value && (l.value = !1);
  }
  const c = v(() => l.value ? e.indeterminateIcon : e.falseIcon), r = v(() => l.value ? e.indeterminateIcon : e.trueIcon);
  return oe(() => {
    const o = bn(Tt.filterProps(e), ["modelValue"]);
    return d(Tt, Z(o, { modelValue: a.value, "onUpdate:modelValue": [(s) => a.value = s, i], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: c.value, trueIcon: r.value, "aria-checked": l.value ? "mixed" : void 0 }), n);
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
const Yi = Y({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...se(), ...ut({ transition: { component: la, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), Xi = Q()({ name: "VMessages", props: Yi(), setup(e, t) {
  let { slots: n } = t;
  const l = v(() => ln(e.messages)), { textColorClasses: a, textColorStyles: i } = Ke(v(() => e.color));
  return oe(() => d(nn, { transition: e.transition, tag: "div", class: ["v-messages", a.value, e.class], style: [i.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && l.value.map((c, r) => d("div", { class: "v-messages__message", key: `${r}-${l.value}` }, [n.message ? n.message({ message: c }) : c]))] })), {};
} }), Aa = Y({ focused: Boolean, "onUpdate:focused": je() }, "focus");
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
const Ji = Y({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...Aa() }, "validation"), mt = Y({ id: String, appendIcon: ce, centerAffix: { type: Boolean, default: !0 }, prependIcon: ce, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": je(), "onClick:append": je(), ...se(), ...He(), ...Ji() }, "VInput"), on = Q()({ name: "VInput", props: { ...mt() }, emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l, emit: a } = t;
  const { densityClasses: i } = en(e), { rtlClasses: c } = st(), { InputIcon: r } = Va(e), o = We(), s = v(() => e.id || `input-${o}`), m = v(() => `${s.value}-messages`), { errorMessages: y, isDirty: f, isDisabled: p, isReadonly: g, isPristine: h, isValid: b, isValidating: I, reset: $, resetValidation: F, validate: H, validationClasses: T } = function(B) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : qe(), E = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : We();
    const C = me(B, "modelValue"), V = v(() => B.validationValue === void 0 ? C.value : B.validationValue), A = _a(), j = N([]), G = re(!0), k = v(() => !(!ln(C.value === "" ? null : C.value).length && !ln(V.value === "" ? null : V.value).length)), w = v(() => !!(B.disabled ?? (A == null ? void 0 : A.isDisabled.value))), _ = v(() => !!(B.readonly ?? (A == null ? void 0 : A.isReadonly.value))), D = v(() => {
      var X;
      return (X = B.errorMessages) != null && X.length ? ln(B.errorMessages).concat(j.value).slice(0, Math.max(0, +B.maxErrors)) : j.value;
    }), W = v(() => {
      let X = (B.validateOn ?? (A == null ? void 0 : A.validateOn.value)) || "input";
      X === "lazy" && (X = "input lazy");
      const le = new Set((X == null ? void 0 : X.split(" ")) ?? []);
      return { blur: le.has("blur") || le.has("input"), input: le.has("input"), submit: le.has("submit"), lazy: le.has("lazy") };
    }), O = v(() => {
      var X;
      return !B.error && !((X = B.errorMessages) != null && X.length) && (!B.rules.length || (G.value ? !j.value.length && !W.value.lazy || null : !j.value.length));
    }), L = re(!1), U = v(() => ({ [`${x}--error`]: O.value === !1, [`${x}--dirty`]: k.value, [`${x}--disabled`]: w.value, [`${x}--readonly`]: _.value })), S = v(() => B.name ?? u(E));
    function P() {
      C.value = null, Ie(z);
    }
    function z() {
      G.value = !0, W.value.lazy ? j.value = [] : q(!0);
    }
    async function q() {
      let X = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      const le = [];
      L.value = !0;
      for (const be of B.rules) {
        if (le.length >= +(B.maxErrors ?? 1))
          break;
        const Ve = typeof be == "function" ? be : () => be, Oe = await Ve(V.value);
        Oe !== !0 && (Oe === !1 || typeof Oe == "string" ? le.push(Oe || "") : console.warn(`${Oe} is not a valid value. Rule functions must return boolean true or a string.`));
      }
      return j.value = le, L.value = !1, G.value = X, j.value;
    }
    return Do(() => {
      A == null || A.register({ id: S.value, validate: q, reset: P, resetValidation: z });
    }), an(() => {
      A == null || A.unregister(S.value);
    }), Wn(async () => {
      W.value.lazy || await q(!0), A == null || A.update(S.value, O.value, D.value);
    }), fn(() => W.value.input, () => {
      K(V, () => {
        if (V.value != null)
          q();
        else if (B.focused) {
          const X = K(() => B.focused, (le) => {
            le || q(), X();
          });
        }
      });
    }), fn(() => W.value.blur, () => {
      K(() => B.focused, (X) => {
        X || q();
      });
    }), K(O, () => {
      A == null || A.update(S.value, O.value, D.value);
    }), { errorMessages: D, isDirty: k, isDisabled: w, isReadonly: _, isPristine: G, isValid: O, isValidating: L, reset: P, resetValidation: z, validate: q, validationClasses: U };
  }(e, "v-input", s), M = v(() => ({ id: s, messagesId: m, isDirty: f, isDisabled: p, isReadonly: g, isPristine: h, isValid: b, isValidating: I, reset: $, resetValidation: F, validate: H })), R = v(() => {
    var B;
    return (B = e.errorMessages) != null && B.length || !h.value && y.value.length ? y.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return oe(() => {
    var V, A, j, G;
    const B = !(!l.prepend && !e.prependIcon), x = !(!l.append && !e.appendIcon), E = R.value.length > 0, C = !e.hideDetails || e.hideDetails === "auto" && (E || !!l.details);
    return d("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix, "v-input--hide-spin-buttons": e.hideSpinButtons }, i.value, c.value, T.value, e.class], style: e.style }, [B && d("div", { key: "prepend", class: "v-input__prepend" }, [(V = l.prepend) == null ? void 0 : V.call(l, M.value), e.prependIcon && d(r, { key: "prepend-icon", name: "prepend" }, null)]), l.default && d("div", { class: "v-input__control" }, [(A = l.default) == null ? void 0 : A.call(l, M.value)]), x && d("div", { key: "append", class: "v-input__append" }, [e.appendIcon && d(r, { key: "append-icon", name: "append" }, null), (j = l.append) == null ? void 0 : j.call(l, M.value)]), C && d("div", { class: "v-input__details" }, [d(Xi, { id: m.value, active: E, messages: R.value }, { message: l.message }), (G = l.details) == null ? void 0 : G.call(l, M.value)])]);
  }), { reset: $, resetValidation: F, validate: H, isValid: b, errorMessages: y };
} }), Zi = Y({ ...mt(), ...bn(Fa(), ["inline"]) }, "VCheckbox"), Qi = Q()({ name: "VCheckbox", inheritAttrs: !1, props: Zi(), emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const a = me(e, "modelValue"), { isFocused: i, focus: c, blur: r } = yt(e), o = We(), s = v(() => e.id || `checkbox-${o}`);
  return oe(() => {
    const [m, y] = it(n), f = on.filterProps(e), p = cl.filterProps(e);
    return d(on, Z({ class: ["v-checkbox", e.class] }, m, f, { modelValue: a.value, "onUpdate:modelValue": (g) => a.value = g, id: s.value, focused: i.value, style: e.style }), { ...l, default: (g) => {
      let { id: h, messagesId: b, isDisabled: I, isReadonly: $ } = g;
      return d(cl, Z(p, { id: h.value, "aria-describedby": b.value, disabled: I.value, readonly: $.value }, y, { modelValue: a.value, "onUpdate:modelValue": (F) => a.value = F, onFocus: c, onBlur: r }), l);
    } });
  }), {};
} }), er = Y({ start: Boolean, end: Boolean, icon: ce, image: String, text: String, ...se(), ...He(), ...Ze(), ...pt(), ...ze(), ...Se(), ...rn({ variant: "flat" }) }, "VAvatar"), Ln = Q()({ name: "VAvatar", props: er(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = _e(e), { colorClasses: a, colorStyles: i, variantClasses: c } = dt(e), { densityClasses: r } = en(e), { roundedClasses: o } = Qe(e), { sizeClasses: s, sizeStyles: m } = vt(e);
  return oe(() => d(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, l.value, a.value, r.value, o.value, s.value, c.value, e.class], style: [i.value, m.value, e.style] }, { default: () => {
    var y;
    return [e.image ? d(ia, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? d(de, { key: "icon", icon: e.icon }, null) : ((y = n.default) == null ? void 0 : y.call(n)) ?? e.text, ct(!1, "v-avatar")];
  } })), {};
} }), Oa = Symbol.for("vuetify:v-chip-group"), nr = Y({ column: Boolean, filter: Boolean, valueComparator: { type: Function, default: at }, ...se(), ...sa({ selectedClass: "v-chip--selected" }), ...ze(), ...Se(), ...rn({ variant: "tonal" }) }, "VChipGroup");
Q()({ name: "VChipGroup", props: nr(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = _e(e), { isSelected: a, select: i, next: c, prev: r, selected: o } = da(e, Oa);
  return Rn({ VChip: { color: ne(e, "color"), disabled: ne(e, "disabled"), filter: ne(e, "filter"), variant: ne(e, "variant") } }), oe(() => d(e.tag, { class: ["v-chip-group", { "v-chip-group--column": e.column }, l.value, e.class], style: e.style }, { default: () => {
    var s;
    return [(s = n.default) == null ? void 0 : s.call(n, { isSelected: a, select: i, next: c, prev: r, selected: o.value })];
  } })), {};
} });
const tr = Y({ activeClass: String, appendAvatar: String, appendIcon: ce, closable: Boolean, closeIcon: { type: ce, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: String, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: ce, ripple: { type: [Boolean, Object], default: !0 }, text: String, modelValue: { type: Boolean, default: !0 }, onClick: je(), onClickOnce: je(), ...Nn(), ...se(), ...He(), ...Gn(), ...ua(), ...Ze(), ...Ht(), ...pt(), ...ze({ tag: "span" }), ...Se(), ...rn({ variant: "tonal" }) }, "VChip"), lr = Q()({ name: "VChip", directives: { Ripple: ft }, props: tr(), emits: { "click:close": (e) => !0, "update:modelValue": (e) => !0, "group:selected": (e) => !0, click: (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: a } = t;
  const { t: i } = _l(), { borderClasses: c } = jn(e), { colorClasses: r, colorStyles: o, variantClasses: s } = dt(e), { densityClasses: m } = en(e), { elevationClasses: y } = qn(e), { roundedClasses: f } = Qe(e), { sizeClasses: p } = vt(e), { themeClasses: g } = _e(e), h = me(e, "modelValue"), b = ca(e, Oa, !1), I = qt(e, n), $ = v(() => e.link !== !1 && I.isLink.value), F = v(() => !e.disabled && e.link !== !1 && (!!b || e.link || I.isClickable.value)), H = v(() => ({ "aria-label": i(e.closeLabel), onClick(R) {
    R.stopPropagation(), h.value = !1, l("click:close", R);
  } }));
  function T(R) {
    var B;
    l("click", R), F.value && ((B = I.navigate) == null || B.call(I, R), b == null || b.toggle());
  }
  function M(R) {
    R.key !== "Enter" && R.key !== " " || (R.preventDefault(), T(R));
  }
  return () => {
    const R = I.isLink.value ? "a" : e.tag, B = !(!e.appendIcon && !e.appendAvatar), x = !(!B && !a.append), E = !(!a.close && !e.closable), C = !(!a.filter && !e.filter) && b, V = !(!e.prependIcon && !e.prependAvatar), A = !(!V && !a.prepend), j = !b || b.isSelected.value;
    return h.value && we(d(R, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": F.value, "v-chip--filter": C, "v-chip--pill": e.pill }, g.value, c.value, j ? r.value : void 0, m.value, y.value, f.value, p.value, s.value, b == null ? void 0 : b.selectedClass.value, e.class], style: [j ? o.value : void 0, e.style], disabled: e.disabled || void 0, draggable: e.draggable, href: I.href.value, tabindex: F.value ? 0 : void 0, onClick: T, onKeydown: F.value && !$.value && M }, { default: () => {
      var G;
      return [ct(F.value, "v-chip"), C && d(oa, { key: "filter" }, { default: () => [we(d("div", { class: "v-chip__filter" }, [a.filter ? d(ke, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, a.filter) : d(de, { key: "filter-icon", icon: e.filterIcon }, null)]), [[Mn, b.isSelected.value]])] }), A && d("div", { key: "prepend", class: "v-chip__prepend" }, [a.prepend ? d(ke, { key: "prepend-defaults", disabled: !V, defaults: { VAvatar: { image: e.prependAvatar, start: !0 }, VIcon: { icon: e.prependIcon, start: !0 } } }, a.prepend) : d(fe, null, [e.prependIcon && d(de, { key: "prepend-icon", icon: e.prependIcon, start: !0 }, null), e.prependAvatar && d(Ln, { key: "prepend-avatar", image: e.prependAvatar, start: !0 }, null)])]), d("div", { class: "v-chip__content" }, [((G = a.default) == null ? void 0 : G.call(a, { isSelected: b == null ? void 0 : b.isSelected.value, selectedClass: b == null ? void 0 : b.selectedClass.value, select: b == null ? void 0 : b.select, toggle: b == null ? void 0 : b.toggle, value: b == null ? void 0 : b.value.value, disabled: e.disabled })) ?? e.text]), x && d("div", { key: "append", class: "v-chip__append" }, [a.append ? d(ke, { key: "append-defaults", disabled: !B, defaults: { VAvatar: { end: !0, image: e.appendAvatar }, VIcon: { end: !0, icon: e.appendIcon } } }, a.append) : d(fe, null, [e.appendIcon && d(de, { key: "append-icon", end: !0, icon: e.appendIcon }, null), e.appendAvatar && d(Ln, { key: "append-avatar", end: !0, image: e.appendAvatar }, null)])]), E && d("div", Z({ key: "close", class: "v-chip__close" }, H.value), [a.close ? d(ke, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, a.close) : d(de, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[Je("ripple"), F.value && e.ripple, null]]);
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
    if (l = tn(l), e && !a) {
      const c = Array.from(i.entries()).reduce((r, o) => {
        let [s, m] = o;
        return m === "on" ? [...r, s] : r;
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
    a = tn(a);
    const c = l.has(a) ? /* @__PURE__ */ new Map([[a, l.get(a)]]) : /* @__PURE__ */ new Map();
    return t.select({ ...i, id: a, selected: c });
  }, in: (n, l, a) => {
    let i = /* @__PURE__ */ new Map();
    return n != null && n.length && (i = t.in(n.slice(0, 1), l, a)), i;
  }, out: (n, l, a) => t.out(n, l, a) };
}, tt = Symbol.for("vuetify:nested"), Ta = { id: re(), root: { register: () => null, unregister: () => null, parents: N(/* @__PURE__ */ new Map()), children: N(/* @__PURE__ */ new Map()), open: () => null, openOnSelect: () => null, select: () => null, opened: N(/* @__PURE__ */ new Set()), selected: N(/* @__PURE__ */ new Map()), selectedValues: N([]) } }, ir = Y({ selectStrategy: [String, Function], openStrategy: [String, Object], opened: Array, selected: Array, mandatory: Boolean }, "nested"), rr = (e) => {
  let t = !1;
  const n = N(/* @__PURE__ */ new Map()), l = N(/* @__PURE__ */ new Map()), a = me(e, "opened", e.opened, (y) => new Set(y), (y) => [...y.values()]), i = v(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return ((y) => {
          const f = Io(y);
          return { select: (p) => {
            let { id: g, selected: h, children: b, ...I } = p;
            return g = tn(g), b.has(g) ? h : f.select({ id: g, selected: h, children: b, ...I });
          }, in: f.in, out: f.out };
        })(e.mandatory);
      case "leaf":
        return ((y) => {
          const f = pl(y);
          return { select: (p) => {
            let { id: g, selected: h, children: b, ...I } = p;
            return g = tn(g), b.has(g) ? h : f.select({ id: g, selected: h, children: b, ...I });
          }, in: f.in, out: f.out };
        })(e.mandatory);
      case "independent":
        return pl(e.mandatory);
      case "single-independent":
        return Io(e.mandatory);
      default:
        return ((y) => {
          const f = { select: (p) => {
            let { id: g, value: h, selected: b, children: I, parents: $ } = p;
            g = tn(g);
            const F = new Map(b), H = [g];
            for (; H.length; ) {
              const M = H.shift();
              b.set(M, h ? "on" : "off"), I.has(M) && H.push(...I.get(M));
            }
            let T = $.get(g);
            for (; T; ) {
              const M = I.get(T), R = M.every((x) => b.get(x) === "on"), B = M.every((x) => !b.has(x) || b.get(x) === "off");
              b.set(T, R ? "on" : B ? "off" : "indeterminate"), T = $.get(T);
            }
            return y && !h && Array.from(b.entries()).reduce((R, B) => {
              let [x, E] = B;
              return E === "on" ? [...R, x] : R;
            }, []).length === 0 ? F : b;
          }, in: (p, g, h) => {
            let b = /* @__PURE__ */ new Map();
            for (const I of p || [])
              b = f.select({ id: I, value: !0, selected: new Map(b), children: g, parents: h });
            return b;
          }, out: (p, g) => {
            const h = [];
            for (const [b, I] of p.entries())
              I !== "on" || g.has(b) || h.push(b);
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
  }), r = me(e, "selected", e.selected, (y) => i.value.in(y, n.value, l.value), (y) => i.value.out(y, n.value, l.value));
  function o(y) {
    const f = [];
    let p = y;
    for (; p != null; )
      f.unshift(p), p = l.value.get(p);
    return f;
  }
  an(() => {
    t = !0;
  });
  const s = Fe("nested"), m = { id: re(), root: { opened: a, selected: r, selectedValues: v(() => {
    const y = [];
    for (const [f, p] of r.value.entries())
      p === "on" && y.push(f);
    return y;
  }), register: (y, f, p) => {
    f && y !== f && l.value.set(y, f), p && n.value.set(y, []), f != null && n.value.set(f, [...n.value.get(f) || [], y]);
  }, unregister: (y) => {
    if (t)
      return;
    n.value.delete(y);
    const f = l.value.get(y);
    if (f) {
      const p = n.value.get(f) ?? [];
      n.value.set(f, p.filter((g) => g !== y));
    }
    l.value.delete(y), a.value.delete(y);
  }, open: (y, f, p) => {
    s.emit("click:open", { id: y, value: f, path: o(y), event: p });
    const g = c.value.open({ id: y, value: f, opened: new Set(a.value), children: n.value, parents: l.value, event: p });
    g && (a.value = g);
  }, openOnSelect: (y, f, p) => {
    const g = c.value.select({ id: y, value: f, selected: new Map(r.value), opened: new Set(a.value), children: n.value, parents: l.value, event: p });
    g && (a.value = g);
  }, select: (y, f, p) => {
    s.emit("click:select", { id: y, value: f, path: o(y), event: p });
    const g = i.value.select({ id: y, value: f, selected: new Map(r.value), children: n.value, parents: l.value, event: p });
    g && (r.value = g), m.root.openOnSelect(y, f, p);
  }, children: n, parents: l } };
  return De(tt, m), m.root;
}, za = (e, t) => {
  const n = ve(tt, Ta), l = Symbol(We()), a = v(() => e.value !== void 0 ? e.value : l), i = { ...n, id: a, open: (c, r) => n.root.open(a.value, c, r), openOnSelect: (c, r) => n.root.openOnSelect(a.value, c, r), isOpen: v(() => n.root.opened.value.has(a.value)), parent: v(() => n.root.parents.value.get(a.value)), select: (c, r) => n.root.select(a.value, c, r), isSelected: v(() => n.root.selected.value.get(tn(a.value)) === "on"), isIndeterminate: v(() => n.root.selected.value.get(a.value) === "indeterminate"), isLeaf: v(() => !n.root.children.value.get(a.value)), isGroupActivator: n.isGroupActivator };
  return !n.isGroupActivator && n.root.register(a.value, n.id.value, t), an(() => {
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
} }), ur = Y({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: ce, default: "$collapse" }, expandIcon: { type: ce, default: "$expand" }, prependIcon: ce, appendIcon: ce, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...se(), ...ze() }, "VListGroup"), So = Q()({ name: "VListGroup", props: ur(), setup(e, t) {
  let { slots: n } = t;
  const { isOpen: l, open: a, id: i } = za(ne(e, "value"), !0), c = v(() => `v-list-group--id-${String(i.value)}`), r = $a(), { isBooted: o } = function() {
    const p = re(!1);
    return Wn(() => {
      window.requestAnimationFrame(() => {
        p.value = !0;
      });
    }), { ssrBootStyles: v(() => p.value ? void 0 : { transition: "none !important" }), isBooted: bl(p) };
  }();
  function s(p) {
    a(!l.value, p);
  }
  const m = v(() => ({ onClick: s, class: "v-list-group__header", id: c.value })), y = v(() => l.value ? e.collapseIcon : e.expandIcon), f = v(() => ({ VListItem: { active: l.value, activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && y.value, appendIcon: e.appendIcon || !e.subgroup && y.value, title: e.title, value: e.value } }));
  return oe(() => d(e.tag, { class: ["v-list-group", { "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": l.value }, e.class], style: e.style }, { default: () => [n.activator && d(ke, { defaults: f.value }, { default: () => [d(sr, null, { default: () => [n.activator({ props: m.value, isOpen: l.value })] })] }), d(nn, { transition: { component: _i }, disabled: !o.value }, { default: () => {
    var p;
    return [we(d("div", { class: "v-list-group__items", role: "group", "aria-labelledby": c.value }, [(p = n.default) == null ? void 0 : p.call(n)]), [[Mn, l.value]])];
  } })] })), {};
} }), cr = rt("v-list-item-subtitle"), dr = rt("v-list-item-title"), pr = Y({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: ce, baseColor: String, disabled: Boolean, lines: String, link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: ce, ripple: { type: [Boolean, Object], default: !0 }, slim: Boolean, subtitle: [String, Number, Boolean], title: [String, Number, Boolean], value: null, onClick: je(), onClickOnce: je(), ...Nn(), ...se(), ...He(), ...Cn(), ...Gn(), ...Ze(), ...Ht(), ...ze(), ...Se(), ...rn({ variant: "text" }) }, "VListItem"), zt = Q()({ name: "VListItem", directives: { Ripple: ft }, props: pr(), emits: { click: (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l, emit: a } = t;
  const i = qt(e, n), c = v(() => e.value === void 0 ? i.href.value : e.value), { select: r, isSelected: o, isIndeterminate: s, isGroupActivator: m, root: y, parent: f, openOnSelect: p } = za(c, !1), g = $a(), h = v(() => {
    var _;
    return e.active !== !1 && (e.active || ((_ = i.isActive) == null ? void 0 : _.value) || o.value);
  }), b = v(() => e.link !== !1 && i.isLink.value), I = v(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || e.value != null && !!g)), $ = v(() => e.rounded || e.nav), F = v(() => e.color ?? e.activeColor), H = v(() => ({ color: h.value ? F.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  K(() => {
    var _;
    return (_ = i.isActive) == null ? void 0 : _.value;
  }, (_) => {
    _ && f.value != null && y.open(f.value, !0), _ && p(_);
  }, { immediate: !0 });
  const { themeClasses: T } = _e(e), { borderClasses: M } = jn(e), { colorClasses: R, colorStyles: B, variantClasses: x } = dt(H), { densityClasses: E } = en(e), { dimensionStyles: C } = In(e), { elevationClasses: V } = qn(e), { roundedClasses: A } = Qe($), j = v(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), G = v(() => ({ isActive: h.value, select: r, isSelected: o.value, isIndeterminate: s.value }));
  function k(_) {
    var D;
    a("click", _), !m && I.value && ((D = i.navigate) == null || D.call(i, _), e.value != null && r(!o.value, _));
  }
  function w(_) {
    _.key !== "Enter" && _.key !== " " || (_.preventDefault(), k(_));
  }
  return oe(() => {
    const _ = b.value ? "a" : e.tag, D = l.title || e.title, W = l.subtitle || e.subtitle, O = !(!e.appendAvatar && !e.appendIcon), L = !(!O && !l.append), U = !(!e.prependAvatar && !e.prependIcon), S = !(!U && !l.prepend);
    var P, z;
    return g == null || g.updateHasPrepend(S), e.activeColor && (P = "active-color", z = ["color", "base-color"], z = Array.isArray(z) ? z.slice(0, -1).map((q) => `'${q}'`).join(", ") + ` or '${z.at(-1)}'` : `'${z}'`, Rt(`[Vuetify UPGRADE] '${P}' is deprecated, use ${z} instead.`)), we(d(_, { class: ["v-list-item", { "v-list-item--active": h.value, "v-list-item--disabled": e.disabled, "v-list-item--link": I.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !S && (g == null ? void 0 : g.hasPrepend.value), "v-list-item--slim": e.slim, [`${e.activeClass}`]: e.activeClass && h.value }, T.value, M.value, R.value, E.value, V.value, j.value, A.value, x.value, e.class], style: [B.value, C.value, e.style], href: i.href.value, tabindex: I.value ? g ? -2 : 0 : void 0, onClick: k, onKeydown: I.value && !b.value && w }, { default: () => {
      var q;
      return [ct(I.value || h.value, "v-list-item"), S && d("div", { key: "prepend", class: "v-list-item__prepend" }, [l.prepend ? d(ke, { key: "prepend-defaults", disabled: !U, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: !0 } } }, { default: () => {
        var X;
        return [(X = l.prepend) == null ? void 0 : X.call(l, G.value)];
      } }) : d(fe, null, [e.prependAvatar && d(Ln, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && d(de, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), d("div", { class: "v-list-item__spacer" }, null)]), d("div", { class: "v-list-item__content", "data-no-activator": "" }, [D && d(dr, { key: "title" }, { default: () => {
        var X;
        return [((X = l.title) == null ? void 0 : X.call(l, { title: e.title })) ?? e.title];
      } }), W && d(cr, { key: "subtitle" }, { default: () => {
        var X;
        return [((X = l.subtitle) == null ? void 0 : X.call(l, { subtitle: e.subtitle })) ?? e.subtitle];
      } }), (q = l.default) == null ? void 0 : q.call(l, G.value)]), L && d("div", { key: "append", class: "v-list-item__append" }, [l.append ? d(ke, { key: "append-defaults", disabled: !O, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: !0 } } }, { default: () => {
        var X;
        return [(X = l.append) == null ? void 0 : X.call(l, G.value)];
      } }) : d(fe, null, [e.appendIcon && d(de, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && d(Ln, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), d("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[Je("ripple"), I.value && e.ripple]]);
  }), {};
} }), vr = Y({ color: String, inset: Boolean, sticky: Boolean, title: String, ...se(), ...ze() }, "VListSubheader"), fr = Q()({ name: "VListSubheader", props: vr(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: l, textColorStyles: a } = Ke(ne(e, "color"));
  return oe(() => {
    const i = !(!n.default && !e.title);
    return d(e.tag, { class: ["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, l.value, e.class], style: [{ textColorStyles: a }, e.style] }, { default: () => {
      var c;
      return [i && d("div", { class: "v-list-subheader__text" }, [((c = n.default) == null ? void 0 : c.call(n)) ?? e.title])];
    } });
  }), {};
} }), yr = Y({ color: String, inset: Boolean, length: [Number, String], thickness: [Number, String], vertical: Boolean, ...se(), ...Se() }, "VDivider"), mr = Q()({ name: "VDivider", props: yr(), setup(e, t) {
  let { attrs: n } = t;
  const { themeClasses: l } = _e(e), { textColorClasses: a, textColorStyles: i } = Ke(ne(e, "color")), c = v(() => {
    const r = {};
    return e.length && (r[e.vertical ? "maxHeight" : "maxWidth"] = te(e.length)), e.thickness && (r[e.vertical ? "borderRightWidth" : "borderTopWidth"] = te(e.thickness)), r;
  });
  return oe(() => d("hr", { class: [{ "v-divider": !0, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, l.value, a.value, e.class], style: [c.value, i.value, e.style], "aria-orientation": n.role && n.role !== "separator" ? void 0 : e.vertical ? "vertical" : "horizontal", role: `${n.role || "separator"}` }, null)), {};
} }), gr = Y({ items: Array, returnObject: Boolean }, "VListChildren"), Da = Q()({ name: "VListChildren", props: gr(), setup(e, t) {
  let { slots: n } = t;
  return Pa(), () => {
    var l, a;
    return ((l = n.default) == null ? void 0 : l.call(n)) ?? ((a = e.items) == null ? void 0 : a.map((i) => {
      var f, p;
      let { children: c, props: r, type: o, raw: s } = i;
      if (o === "divider")
        return ((f = n.divider) == null ? void 0 : f.call(n, { props: r })) ?? d(mr, r, null);
      if (o === "subheader")
        return ((p = n.subheader) == null ? void 0 : p.call(n, { props: r })) ?? d(fr, r, null);
      const m = { subtitle: n.subtitle ? (g) => {
        var h;
        return (h = n.subtitle) == null ? void 0 : h.call(n, { ...g, item: s });
      } : void 0, prepend: n.prepend ? (g) => {
        var h;
        return (h = n.prepend) == null ? void 0 : h.call(n, { ...g, item: s });
      } : void 0, append: n.append ? (g) => {
        var h;
        return (h = n.append) == null ? void 0 : h.call(n, { ...g, item: s });
      } : void 0, title: n.title ? (g) => {
        var h;
        return (h = n.title) == null ? void 0 : h.call(n, { ...g, item: s });
      } : void 0 }, y = So.filterProps(r);
      return c ? d(So, Z({ value: r == null ? void 0 : r.value }, y), { activator: (g) => {
        let { props: h } = g;
        const b = { ...r, ...h, value: e.returnObject ? s : r.value };
        return n.header ? n.header({ props: b }) : d(zt, b, m);
      }, default: () => d(Da, { items: c }, n) }) : n.item ? n.item({ props: r }) : d(zt, Z(r, { value: e.returnObject ? s : r.value }), m);
    }));
  };
} }), La = Y({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, returnObject: Boolean, valueComparator: { type: Function, default: at } }, "list-items");
function vl(e, t) {
  const n = Xe(t, e.itemTitle, t), l = Xe(t, e.itemValue, n), a = Xe(t, e.itemChildren), i = { title: n, value: l, ...e.itemProps === !0 ? typeof t != "object" || t == null || Array.isArray(t) ? void 0 : "children" in t ? bn(t, ["children"]) : t : Xe(t, e.itemProps) };
  return { title: String(i.title ?? ""), value: i.value, props: i, children: Array.isArray(a) ? Ma(e, a) : void 0, raw: t };
}
function Ma(e, t) {
  const n = [];
  for (const l of t)
    n.push(vl(e, l));
  return n;
}
function hr(e, t) {
  const n = Xe(t, e.itemType, "item"), l = function(r) {
    return typeof r == "string" || typeof r == "number" || typeof r == "boolean";
  }(t) ? t : Xe(t, e.itemTitle), a = Xe(t, e.itemValue, void 0), i = Xe(t, e.itemChildren), c = { title: l, value: a, ...e.itemProps === !0 ? bn(t, ["children"]) : Xe(t, e.itemProps) };
  return { type: n, title: c.title, value: c.value, props: c, children: n === "item" && i ? Wa(e, i) : void 0, raw: t };
}
function Wa(e, t) {
  const n = [];
  for (const l of t)
    n.push(hr(e, l));
  return n;
}
const br = Y({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, nav: Boolean, ...ir({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Nn(), ...se(), ...He(), ...Cn(), ...Gn(), itemType: { type: String, default: "type" }, ...La(), ...Ze(), ...ze(), ...Se(), ...rn({ variant: "text" }) }, "VList"), Cr = Q()({ name: "VList", props: br(), emits: { "update:selected": (e) => !0, "update:opened": (e) => !0, "click:open": (e) => !0, "click:select": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { items: l } = function(x) {
    return { items: v(() => Wa(x, x.items)) };
  }(e), { themeClasses: a } = _e(e), { backgroundColorClasses: i, backgroundColorStyles: c } = Dn(ne(e, "bgColor")), { borderClasses: r } = jn(e), { densityClasses: o } = en(e), { dimensionStyles: s } = In(e), { elevationClasses: m } = qn(e), { roundedClasses: y } = Qe(e), { open: f, select: p } = rr(e), g = v(() => e.lines ? `v-list--${e.lines}-line` : void 0), h = ne(e, "activeColor"), b = ne(e, "baseColor"), I = ne(e, "color");
  Pa(), Rn({ VListGroup: { activeColor: h, baseColor: b, color: I }, VListItem: { activeClass: ne(e, "activeClass"), activeColor: h, baseColor: b, color: I, density: ne(e, "density"), disabled: ne(e, "disabled"), lines: ne(e, "lines"), nav: ne(e, "nav"), slim: ne(e, "slim"), variant: ne(e, "variant") } });
  const $ = re(!1), F = N();
  function H(x) {
    $.value = !0;
  }
  function T(x) {
    $.value = !1;
  }
  function M(x) {
    var E;
    $.value || x.relatedTarget && ((E = F.value) != null && E.contains(x.relatedTarget)) || B();
  }
  function R(x) {
    if (F.value) {
      if (x.key === "ArrowDown")
        B("next");
      else if (x.key === "ArrowUp")
        B("prev");
      else if (x.key === "Home")
        B("first");
      else {
        if (x.key !== "End")
          return;
        B("last");
      }
      x.preventDefault();
    }
  }
  function B(x) {
    if (F.value)
      return Vt(F.value, x);
  }
  return oe(() => d(e.tag, { ref: F, class: ["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav }, a.value, i.value, r.value, o.value, m.value, g.value, y.value, e.class], style: [c.value, s.value, e.style], tabindex: e.disabled || $.value ? -1 : 0, role: "listbox", "aria-activedescendant": void 0, onFocusin: H, onFocusout: T, onFocus: M, onKeydown: R }, { default: () => [d(Da, { items: l.value, returnObject: e.returnObject }, n)] })), { open: f, select: p, focus: B };
} });
function Qt(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
function xo(e, t) {
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
  }), [i, c, r, o] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((p) => v(() => {
    const g = parseFloat(t[p]);
    return isNaN(g) ? 1 / 0 : g;
  })), s = v(() => {
    if (Array.isArray(t.offset))
      return t.offset;
    if (typeof t.offset == "string") {
      const p = t.offset.split(" ").map(parseFloat);
      return p.length < 2 && p.push(0), p;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let m = !1;
  const y = new ResizeObserver(() => {
    m && f();
  });
  function f() {
    if (m = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => m = !0);
    }), !e.target.value || !e.contentEl.value)
      return;
    const p = Yo(e.target.value), g = function(x, E) {
      E ? x.style.removeProperty("left") : x.style.removeProperty("right");
      const C = wl(x);
      return E ? C.x += parseFloat(x.style.right || 0) : C.x -= parseFloat(x.style.left || 0), C.y -= parseFloat(x.style.top || 0), C;
    }(e.contentEl.value, e.isRtl.value), h = Pt(e.contentEl.value);
    h.length || (h.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (g.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), g.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const b = h.reduce((x, E) => {
      const C = E.getBoundingClientRect(), V = new vn({ x: E === document.documentElement ? 0 : C.x, y: E === document.documentElement ? 0 : C.y, width: E.clientWidth, height: E.clientHeight });
      return x ? new vn({ x: Math.max(x.left, V.left), y: Math.max(x.top, V.top), width: Math.min(x.right, V.right) - Math.max(x.left, V.left), height: Math.min(x.bottom, V.bottom) - Math.max(x.top, V.top) }) : V;
    }, void 0);
    b.x += 12, b.y += 12, b.width -= 24, b.height -= 24;
    let I = { anchor: l.value, origin: a.value };
    function $(x) {
      const E = new vn(g), C = xo(x.anchor, p), V = xo(x.origin, E);
      let { x: A, y: j } = (k = V, { x: (G = C).x - k.x, y: G.y - k.y });
      var G, k;
      switch (x.anchor.side) {
        case "top":
          j -= s.value[0];
          break;
        case "bottom":
          j += s.value[0];
          break;
        case "left":
          A -= s.value[0];
          break;
        case "right":
          A += s.value[0];
      }
      switch (x.anchor.align) {
        case "top":
          j -= s.value[1];
          break;
        case "bottom":
          j += s.value[1];
          break;
        case "left":
          A -= s.value[1];
          break;
        case "right":
          A += s.value[1];
      }
      return E.x += A, E.y += j, E.width = Math.min(E.width, r.value), E.height = Math.min(E.height, o.value), { overflows: Jl(E, b), x: A, y: j };
    }
    let F = 0, H = 0;
    const T = { x: 0, y: 0 }, M = { x: !1, y: !1 };
    let R = -1;
    for (; ; ) {
      if (R++ > 10) {
        Rt("Vuetify error: Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const { x, y: E, overflows: C } = $(I);
      F += x, H += E, g.x += x, g.y += E;
      {
        const V = Kl(I.anchor), A = C.x.before || C.x.after, j = C.y.before || C.y.after;
        let G = !1;
        if (["x", "y"].forEach((k) => {
          if (k === "x" && A && !M.x || k === "y" && j && !M.y) {
            const w = { anchor: { ...I.anchor }, origin: { ...I.origin } }, _ = k === "x" ? V === "y" ? Kt : Xt : V === "y" ? Xt : Kt;
            w.anchor = _(w.anchor), w.origin = _(w.origin);
            const { overflows: D } = $(w);
            (D[k].before <= C[k].before && D[k].after <= C[k].after || D[k].before + D[k].after < (C[k].before + C[k].after) / 2) && (I = w, G = M[k] = !0);
          }
        }), G)
          continue;
      }
      C.x.before && (F += C.x.before, g.x += C.x.before), C.x.after && (F -= C.x.after, g.x -= C.x.after), C.y.before && (H += C.y.before, g.y += C.y.before), C.y.after && (H -= C.y.after, g.y -= C.y.after);
      {
        const V = Jl(g, b);
        T.x = b.width - V.x.before - V.x.after, T.y = b.height - V.y.before - V.y.after, F += V.x.before, g.x += V.x.before, H += V.y.before, g.y += V.y.before;
      }
      break;
    }
    const B = Kl(I.anchor);
    return Object.assign(n.value, { "--v-overlay-anchor-origin": `${I.anchor.side} ${I.anchor.align}`, transformOrigin: `${I.origin.side} ${I.origin.align}`, top: te(el(H)), left: e.isRtl.value ? void 0 : te(el(F)), right: e.isRtl.value ? te(el(-F)) : void 0, minWidth: te(B === "y" ? Math.min(i.value, p.width) : i.value), maxWidth: te(Bo(An(T.x, i.value === 1 / 0 ? 0 : i.value, r.value))), maxHeight: te(Bo(An(T.y, c.value === 1 / 0 ? 0 : c.value, o.value))) }), { available: T, contentBox: g };
  }
  return K([e.target, e.contentEl], (p, g) => {
    let [h, b] = p, [I, $] = g;
    I && !Array.isArray(I) && y.unobserve(I), h && !Array.isArray(h) && y.observe(h), $ && y.unobserve($), b && y.observe(b);
  }, { immediate: !0 }), Be(() => {
    y.disconnect();
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
} }, Ir = Y({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in Ra }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array] }, "VOverlay-location-strategies");
function el(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Bo(e) {
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
  var r;
  const n = (r = e.root.value) == null ? void 0 : r.offsetParent, l = [.../* @__PURE__ */ new Set([...Pt(e.targetEl.value, t.contained ? n : void 0), ...Pt(e.contentEl.value, t.contained ? n : void 0)])].filter((o) => !o.classList.contains("v-overlay-scroll-blocked")), a = window.innerWidth - document.documentElement.offsetWidth, i = (c = n || document.documentElement, Vl(c) && c);
  var c;
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((o, s) => {
    o.style.setProperty("--v-body-scroll-x", te(-o.scrollLeft)), o.style.setProperty("--v-body-scroll-y", te(-o.scrollTop)), o !== document.documentElement && o.style.setProperty("--v-scrollbar-offset", te(a)), o.classList.add("v-overlay-scroll-blocked");
  }), Be(() => {
    l.forEach((o, s) => {
      const m = parseFloat(o.style.getPropertyValue("--v-body-scroll-x")), y = parseFloat(o.style.getPropertyValue("--v-body-scroll-y"));
      o.style.removeProperty("--v-body-scroll-x"), o.style.removeProperty("--v-body-scroll-y"), o.style.removeProperty("--v-scrollbar-offset"), o.classList.remove("v-overlay-scroll-blocked"), o.scrollLeft = -m, o.scrollTop = -y;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}, reposition: function(e, t, n) {
  let l = !1, a = -1, i = -1;
  function c(r) {
    var o;
    o = () => {
      var y, f;
      const s = performance.now();
      (f = (y = e.updateLocation).value) == null || f.call(y, r), l = (performance.now() - s) / (1e3 / 60) > 2;
    }, !fl || Dt.length ? (Dt.push(o), yl()) : (fl = !1, o(), yl());
  }
  i = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    n.run(() => {
      wo(e.targetEl.value ?? e.contentEl.value, (r) => {
        l ? (cancelAnimationFrame(a), a = requestAnimationFrame(() => {
          a = requestAnimationFrame(() => {
            c(r);
          });
        })) : c(r);
      });
    });
  }), Be(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(a);
  });
} }, Sr = Y({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in kt } }, "VOverlay-scroll-strategies");
function wo(e, t) {
  const n = [document, ...Pt(e)];
  n.forEach((l) => {
    l.addEventListener("scroll", t, { passive: !0 });
  }), Be(() => {
    n.forEach((l) => {
      l.removeEventListener("scroll", t);
    });
  });
}
const ml = Symbol.for("vuetify:v-menu"), xr = Y({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay"), Br = Y({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...xr() }, "VOverlay-activator");
function kr(e, t) {
  let { isActive: n, isTop: l } = t;
  const a = Fe("useActivator"), i = N();
  let c = !1, r = !1, o = !0;
  const s = v(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), m = v(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !s.value), { runOpenDelay: y, runCloseDelay: f } = function(C, V) {
    const A = {}, j = (G) => () => {
      if (!$e)
        return Promise.resolve(!0);
      const k = G === "openDelay";
      return A.closeDelay && window.clearTimeout(A.closeDelay), delete A.closeDelay, A.openDelay && window.clearTimeout(A.openDelay), delete A.openDelay, new Promise((w) => {
        const _ = parseInt(C[G] ?? 0, 10);
        A[G] = window.setTimeout(() => {
          V == null || V(k), w(k);
        }, _);
      });
    };
    return { runCloseDelay: j("closeDelay"), runOpenDelay: j("openDelay") };
  }(e, (C) => {
    C !== (e.openOnHover && c || s.value && r) || e.openOnHover && n.value && !l.value || (n.value !== C && (o = !0), n.value = C);
  }), p = N(), g = (C) => {
    C.stopPropagation(), i.value = C.currentTarget || C.target, n.value || (p.value = [C.clientX, C.clientY]), n.value = !n.value;
  }, h = (C) => {
    var V;
    (V = C.sourceCapabilities) != null && V.firesTouchEvents || (c = !0, i.value = C.currentTarget || C.target, y());
  }, b = (C) => {
    c = !1, f();
  }, I = (C) => {
    At(C.target, ":focus-visible") !== !1 && (r = !0, C.stopPropagation(), i.value = C.currentTarget || C.target, y());
  }, $ = (C) => {
    r = !1, C.stopPropagation(), f();
  }, F = v(() => {
    const C = {};
    return m.value && (C.onClick = g), e.openOnHover && (C.onMouseenter = h, C.onMouseleave = b), s.value && (C.onFocus = I, C.onBlur = $), C;
  }), H = v(() => {
    const C = {};
    if (e.openOnHover && (C.onMouseenter = () => {
      c = !0, y();
    }, C.onMouseleave = () => {
      c = !1, f();
    }), s.value && (C.onFocusin = () => {
      r = !0, y();
    }, C.onFocusout = () => {
      r = !1, f();
    }), e.closeOnContentClick) {
      const V = ve(ml, null);
      C.onClick = () => {
        n.value = !1, V == null || V.closeParents();
      };
    }
    return C;
  }), T = v(() => {
    const C = {};
    return e.openOnHover && (C.onMouseenter = () => {
      o && (c = !0, o = !1, y());
    }, C.onMouseleave = () => {
      c = !1, f();
    }), C;
  });
  K(l, (C) => {
    !C || (!e.openOnHover || c || s.value && r) && (!s.value || r || e.openOnHover && c) || (n.value = !1);
  }), K(n, (C) => {
    C || setTimeout(() => {
      p.value = void 0;
    });
  }, { flush: "post" });
  const M = N();
  Ge(() => {
    M.value && Ie(() => {
      i.value = wt(M.value);
    });
  });
  const R = N(), B = v(() => e.target === "cursor" && p.value ? p.value : R.value ? wt(R.value) : Fo(e.target, a) || i.value), x = v(() => Array.isArray(B.value) ? void 0 : B.value);
  let E;
  return K(() => !!e.activator, (C) => {
    C && $e ? (E = Cl(), E.run(() => {
      (function(V, A, j) {
        let { activatorEl: G, activatorEvents: k } = j;
        function w() {
          let W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : D(), O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : V.activatorProps;
          W && function(L, U) {
            Object.keys(U).forEach((S) => {
              if (ol(S)) {
                const P = Hl(S), z = ht.get(L);
                if (U[S] == null)
                  z == null || z.forEach((q) => {
                    const [X, le] = q;
                    X === P && (L.removeEventListener(P, le), z.delete(q));
                  });
                else if (!z || ![...z].some((q) => q[0] === P && q[1] === U[S])) {
                  L.addEventListener(P, U[S]);
                  const q = z || /* @__PURE__ */ new Set();
                  q.add([P, U[S]]), ht.has(L) || ht.set(L, q);
                }
              } else
                U[S] == null ? L.removeAttribute(S) : L.setAttribute(S, U[S]);
            });
          }(W, Z(k.value, O));
        }
        function _() {
          let W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : D(), O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : V.activatorProps;
          W && function(L, U) {
            Object.keys(U).forEach((S) => {
              if (ol(S)) {
                const P = Hl(S), z = ht.get(L);
                z == null || z.forEach((q) => {
                  const [X, le] = q;
                  X === P && (L.removeEventListener(P, le), z.delete(q));
                });
              } else
                L.removeAttribute(S);
            });
          }(W, Z(k.value, O));
        }
        function D() {
          const W = Fo(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : V.activator, A);
          return G.value = (W == null ? void 0 : W.nodeType) === Node.ELEMENT_NODE ? W : void 0, G.value;
        }
        K(() => V.activator, (W, O) => {
          if (O && W !== O) {
            const L = D(O);
            L && _(L);
          }
          W && Ie(() => w());
        }, { immediate: !0 }), K(() => V.activatorProps, () => {
          w();
        }), Be(() => {
          _();
        });
      })(e, a, { activatorEl: i, activatorEvents: F });
    })) : E && E.stop();
  }, { flush: "post", immediate: !0 }), Be(() => {
    E == null || E.stop();
  }), { activatorEl: i, activatorRef: M, target: B, targetEl: x, targetRef: R, activatorEvents: F, contentEvents: H, scrimEvents: T };
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
const Fr = Y({ eager: Boolean }, "lazy");
function ja() {
  const e = Fe("useScopeId").vnode.scopeId;
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
  const n = (a) => function(i, c, r) {
    const o = typeof r.value == "function" ? r.value : r.value.handler;
    c._clickOutside.lastMousedownWasOutside && Ao(i, c, r) && setTimeout(() => {
      Ga(i, r) && o && o(i);
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
const qa = Y({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: !0 }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: !0 }, zIndex: { type: [Number, String], default: 2e3 }, ...Br(), ...se(), ...Cn(), ...Fr(), ...Ir(), ...Sr(), ...Se(), ...ut() }, "VOverlay"), Oo = Q()({ name: "VOverlay", directives: { ClickOutside: Ar }, inheritAttrs: !1, props: { _disableGlobalStack: Boolean, ...qa() }, emits: { "click:outside": (e) => !0, "update:modelValue": (e) => !0, afterLeave: () => !0 }, setup(e, t) {
  var L, U;
  let { slots: n, attrs: l, emit: a } = t;
  const i = me(e, "modelValue"), c = v({ get: () => i.value, set: (S) => {
    S && e.disabled || (i.value = S);
  } }), { teleportTarget: r } = function(S) {
    return { teleportTarget: v(() => {
      const P = S.value;
      if (P === !0 || !$e)
        return;
      const z = P === !1 ? document.body : typeof P == "string" ? document.querySelector(P) : P;
      if (z == null)
        return void Rt(`Unable to locate target ${P}`);
      let q = z.querySelector(":scope > .v-overlay-container");
      return q || (q = document.createElement("div"), q.className = "v-overlay-container", z.appendChild(q)), q;
    }) };
  }(v(() => e.attach || e.contained)), { themeClasses: o } = _e(e), { rtlClasses: s, isRtl: m } = st(), { hasContent: y, onAfterLeave: f } = function(S, P) {
    const z = re(!1), q = v(() => z.value || S.eager || P.value);
    return K(P, () => z.value = !0), { isBooted: z, hasContent: q, onAfterLeave: function() {
      S.eager || (z.value = !1);
    } };
  }(e, c), p = Dn(v(() => typeof e.scrim == "string" ? e.scrim : null)), { globalTop: g, localTop: h, stackStyles: b } = function(S, P, z) {
    const q = Fe("useStack"), X = !z, le = ve(Vo, void 0), be = Le({ activeChildren: /* @__PURE__ */ new Set() });
    De(Vo, be);
    const Ve = re(+P.value);
    fn(S, () => {
      var Hn;
      const gt = (Hn = Yn.at(-1)) == null ? void 0 : Hn[1];
      Ve.value = gt ? gt + 10 : +P.value, X && Yn.push([q.uid, Ve.value]), le == null || le.activeChildren.add(q.uid), Be(() => {
        if (X) {
          const Qa = tn(Yn).findIndex((ei) => ei[0] === q.uid);
          Yn.splice(Qa, 1);
        }
        le == null || le.activeChildren.delete(q.uid);
      });
    });
    const Oe = re(!0);
    X && Ge(() => {
      var Hn;
      const gt = ((Hn = Yn.at(-1)) == null ? void 0 : Hn[0]) === q.uid;
      setTimeout(() => Oe.value = gt);
    });
    const Za = v(() => !be.activeChildren.size);
    return { globalTop: bl(Oe), localTop: Za, stackStyles: v(() => ({ zIndex: Ve.value })) };
  }(c, ne(e, "zIndex"), e._disableGlobalStack), { activatorEl: I, activatorRef: $, target: F, targetEl: H, targetRef: T, activatorEvents: M, contentEvents: R, scrimEvents: B } = kr(e, { isActive: c, isTop: h }), { dimensionStyles: x } = In(e), E = function() {
    if (!$e)
      return re(!1);
    const { ssr: S } = Na();
    if (S) {
      const P = re(!1);
      return Wn(() => {
        P.value = !0;
      }), P;
    }
    return re(!0);
  }(), { scopeId: C } = ja();
  K(() => e.disabled, (S) => {
    S && (c.value = !1);
  });
  const V = N(), A = N(), { contentStyles: j, updateLocation: G } = function(S, P) {
    const z = N({}), q = N();
    function X(le) {
      var be;
      (be = q.value) == null || be.call(q, le);
    }
    return $e && (fn(() => !(!P.isActive.value || !S.locationStrategy), (le) => {
      var be, Ve;
      K(() => S.locationStrategy, le), Be(() => {
        q.value = void 0;
      }), typeof S.locationStrategy == "function" ? q.value = (be = S.locationStrategy(P, S, z)) == null ? void 0 : be.updateLocation : q.value = (Ve = Ra[S.locationStrategy](P, S, z)) == null ? void 0 : Ve.updateLocation;
    }), window.addEventListener("resize", X, { passive: !0 }), Be(() => {
      window.removeEventListener("resize", X), q.value = void 0;
    })), { contentStyles: z, updateLocation: q };
  }(e, { isRtl: m, contentEl: A, target: F, isActive: c });
  function k(S) {
    a("click:outside", S), e.persistent ? O() : c.value = !1;
  }
  function w() {
    return c.value && g.value;
  }
  function _(S) {
    var P, z;
    S.key === "Escape" && g.value && (e.persistent ? O() : (c.value = !1, (P = A.value) != null && P.contains(document.activeElement) && ((z = I.value) == null || z.focus())));
  }
  (function(S, P) {
    if (!$e)
      return;
    let z;
    Ge(async () => {
      z == null || z.stop(), P.isActive.value && S.scrollStrategy && (z = Cl(), await Ie(), z.active && z.run(() => {
        var q;
        typeof S.scrollStrategy == "function" ? S.scrollStrategy(P, S, z) : (q = kt[S.scrollStrategy]) == null || q.call(kt, P, S, z);
      }));
    }), Be(() => {
      z == null || z.stop();
    });
  })(e, { root: V, contentEl: A, targetEl: H, isActive: c, updateLocation: G }), $e && K(c, (S) => {
    S ? window.addEventListener("keydown", _) : window.removeEventListener("keydown", _);
  }, { immediate: !0 });
  const D = (U = (L = Fe("useRouter")) == null ? void 0 : L.proxy) == null ? void 0 : U.$router;
  fn(() => e.closeOnBack, () => {
    (function(S, P) {
      let z, q, X = !1;
      function le(be) {
        var Ve;
        (Ve = be.state) != null && Ve.replaced || (X = !0, setTimeout(() => X = !1));
      }
      $e && (Ie(() => {
        window.addEventListener("popstate", le), z = S == null ? void 0 : S.beforeEach((be, Ve, Oe) => {
          Zt ? X ? P(Oe) : Oe() : setTimeout(() => X ? P(Oe) : Oe()), Zt = !0;
        }), q = S == null ? void 0 : S.afterEach(() => {
          Zt = !1;
        });
      }), Be(() => {
        window.removeEventListener("popstate", le), z == null || z(), q == null || q();
      }));
    })(D, (S) => {
      g.value && c.value ? (S(!1), e.persistent ? O() : c.value = !1) : S();
    });
  });
  const W = N();
  function O() {
    e.noClickAnimation || A.value && Bn(A.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: Ot });
  }
  return K(() => c.value && (e.absolute || e.contained) && r.value == null, (S) => {
    if (S) {
      const P = Zo(V.value);
      P && P !== document.scrollingElement && (W.value = P.scrollTop);
    }
  }), oe(() => {
    var S;
    return d(fe, null, [(S = n.activator) == null ? void 0 : S.call(n, { isActive: c.value, props: Z({ ref: $, targetRef: T }, M.value, e.activatorProps) }), E.value && y.value && d(sn, { disabled: !r.value, to: r.value }, { default: () => [d("div", Z({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": c.value, "v-overlay--contained": e.contained }, o.value, s.value, e.class], style: [b.value, { top: te(W.value) }, e.style], ref: V }, C, l), [d(_r, Z({ color: p, modelValue: c.value && !!e.scrim }, B.value), null), d(nn, { appear: !0, persisted: !0, transition: e.transition, target: F.value, onAfterLeave: () => {
      f(), a("afterLeave");
    } }, { default: () => {
      var P;
      return [we(d("div", Z({ ref: A, class: ["v-overlay__content", e.contentClass], style: [x.value, j.value] }, R.value, e.contentProps), [(P = n.default) == null ? void 0 : P.call(n, { isActive: c })]), [[Mn, c.value], [Je("click-outside"), { handler: k, closeConditional: w, include: () => [I.value] }]])];
    } })])] })]);
  }), { activatorEl: I, target: F, animateClick: O, contentEl: A, globalTop: g, localTop: h, updateLocation: G };
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
function Ut(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
    n[l - 1] = arguments[l];
  return e[nl] = n, new Proxy(e, { get(a, i) {
    if (Reflect.has(a, i))
      return Reflect.get(a, i);
    if (typeof i != "symbol" && !i.startsWith("$") && !i.startsWith("__")) {
      for (const c of n)
        if (c.value && Reflect.has(c.value, i)) {
          const r = Reflect.get(c.value, i);
          return typeof r == "function" ? r.bind(c.value) : r;
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
    for (const r of n)
      if (r.value && Reflect.has(r.value, i))
        return Reflect.set(r.value, i, c);
    return !1;
  }, getOwnPropertyDescriptor(a, i) {
    var r;
    const c = Reflect.getOwnPropertyDescriptor(a, i);
    if (c)
      return c;
    if (typeof i != "symbol" && !i.startsWith("$") && !i.startsWith("__")) {
      for (const o of n) {
        if (!o.value)
          continue;
        const s = tl(o.value, i) ?? ("_" in o.value ? tl((r = o.value._) == null ? void 0 : r.setupState, i) : void 0);
        if (s)
          return s;
      }
      for (const o of n) {
        const s = o.value && o.value[nl];
        if (!s)
          continue;
        const m = s.slice();
        for (; m.length; ) {
          const y = m.shift(), f = tl(y.value, i);
          if (f)
            return f;
          const p = y.value && y.value[nl];
          p && m.push(...p);
        }
      }
    }
  } });
}
const Or = Y({ id: String, ...bn(qa({ closeDelay: 250, closeOnContentClick: !0, locationStrategy: "connected", openDelay: 300, scrim: !1, scrollStrategy: "reposition", transition: { component: ta } }), ["absolute"]) }, "VMenu"), Pr = Q()({ name: "VMenu", props: Or(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = me(e, "modelValue"), { scopeId: a } = ja(), i = We(), c = v(() => e.id || `v-menu-${i}`), r = N(), o = ve(ml, null), s = re(0);
  async function m(h) {
    var $, F, H;
    const b = h.relatedTarget, I = h.target;
    await Ie(), l.value && b !== I && (($ = r.value) != null && $.contentEl) && ((F = r.value) != null && F.globalTop) && ![document, r.value.contentEl].includes(I) && !r.value.contentEl.contains(I) && ((H = al(r.value.contentEl)[0]) == null || H.focus());
  }
  function y() {
    o == null || o.closeParents();
  }
  function f(h) {
    var b, I, $;
    !e.disabled && h.key === "Tab" && (qo(al((b = r.value) == null ? void 0 : b.contentEl, !1), h.shiftKey ? "prev" : "next", (F) => F.tabIndex >= 0) || (l.value = !1, ($ = (I = r.value) == null ? void 0 : I.activatorEl) == null || $.focus()));
  }
  function p(h) {
    var I;
    if (e.disabled)
      return;
    const b = (I = r.value) == null ? void 0 : I.contentEl;
    b && l.value ? h.key === "ArrowDown" ? (h.preventDefault(), Vt(b, "next")) : h.key === "ArrowUp" && (h.preventDefault(), Vt(b, "prev")) : ["ArrowDown", "ArrowUp"].includes(h.key) && (l.value = !0, h.preventDefault(), setTimeout(() => setTimeout(() => p(h))));
  }
  De(ml, { register() {
    ++s.value;
  }, unregister() {
    --s.value;
  }, closeParents() {
    setTimeout(() => {
      s.value || (l.value = !1, o == null || o.closeParents());
    }, 40);
  } }), K(l, (h) => {
    h ? (o == null || o.register(), document.addEventListener("focusin", m, { once: !0 })) : (o == null || o.unregister(), document.removeEventListener("focusin", m));
  });
  const g = v(() => Z({ "aria-haspopup": "menu", "aria-expanded": String(l.value), "aria-owns": c.value, onKeydown: p }, e.activatorProps));
  return oe(() => {
    const h = Oo.filterProps(e);
    return d(Oo, Z({ ref: r, class: ["v-menu", e.class], style: e.style }, h, { modelValue: l.value, "onUpdate:modelValue": (b) => l.value = b, absolute: !0, activatorProps: g.value, "onClick:outside": y, onKeydown: f }, a), { activator: n.activator, default: function() {
      for (var b = arguments.length, I = new Array(b), $ = 0; $ < b; $++)
        I[$] = arguments[$];
      return d(ke, { root: "VMenu" }, { default: () => {
        var F;
        return [(F = n.default) == null ? void 0 : F.call(n, ...I)];
      } });
    } });
  }), Ut({ id: c, ΨopenChildren: s }, r);
} }), $r = Y({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...se(), ...ut({ transition: { component: la } }) }, "VCounter"), Ha = Q()({ name: "VCounter", functional: !0, props: $r(), setup(e, t) {
  let { slots: n } = t;
  const l = v(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return oe(() => d(nn, { transition: e.transition }, { default: () => [we(d("div", { class: ["v-counter", e.class], style: e.style }, [n.default ? n.default({ counter: l.value, max: e.max, value: e.value }) : l.value]), [[Mn, e.active]])] })), {};
} }), Er = Y({ floating: Boolean, ...se() }, "VFieldLabel"), It = Q()({ name: "VFieldLabel", props: Er(), setup(e, t) {
  let { slots: n } = t;
  return oe(() => d(Ba, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, n)), {};
} }), Tr = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Ll = Y({ appendInnerIcon: ce, bgColor: String, clearable: Boolean, clearIcon: { type: ce, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: ce, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => Tr.includes(e) }, "onClick:clear": je(), "onClick:appendInner": je(), "onClick:prependInner": je(), ...se(), ...Tl(), ...Ze(), ...Se() }, "VField"), Ml = Q()({ name: "VField", inheritAttrs: !1, props: { id: String, ...Aa(), ...Ll() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: a } = t;
  const { themeClasses: i } = _e(e), { loaderClasses: c } = Gt(e), { focusClasses: r, isFocused: o, focus: s, blur: m } = yt(e), { InputIcon: y } = Va(e), { roundedClasses: f } = Qe(e), { rtlClasses: p } = st(), g = v(() => e.dirty || e.active), h = v(() => !(e.singleLine || !e.label && !a.label)), b = We(), I = v(() => e.id || `input-${b}`), $ = v(() => `${I.value}-messages`), F = N(), H = N(), T = N(), M = v(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: R, backgroundColorStyles: B } = Dn(ne(e, "bgColor")), { textColorClasses: x, textColorStyles: E } = Ke(v(() => e.error || e.disabled ? void 0 : g.value && o.value ? e.color : e.baseColor));
  K(g, (A) => {
    if (h.value) {
      const j = F.value.$el, G = H.value.$el;
      requestAnimationFrame(() => {
        const k = wl(j), w = G.getBoundingClientRect(), _ = w.x - k.x, D = w.y - k.y - (k.height / 2 - w.height / 2), W = w.width / 0.75, O = Math.abs(W - k.width) > 1 ? { maxWidth: te(W) } : void 0, L = getComputedStyle(j), U = getComputedStyle(G), S = 1e3 * parseFloat(L.transitionDuration) || 150, P = parseFloat(U.getPropertyValue("--v-field-label-scale")), z = U.getPropertyValue("color");
        j.style.visibility = "visible", G.style.visibility = "hidden", Bn(j, { transform: `translate(${_}px, ${D}px) scale(${P})`, color: z, ...O }, { duration: S, easing: Ot, direction: A ? "normal" : "reverse" }).finished.then(() => {
          j.style.removeProperty("visibility"), G.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const C = v(() => ({ isActive: g, isFocused: o, controlRef: T, blur: m, focus: s }));
  function V(A) {
    A.target !== document.activeElement && A.preventDefault();
  }
  return oe(() => {
    var _, D, W;
    const A = e.variant === "outlined", j = a["prepend-inner"] || e.prependInnerIcon, G = !(!e.clearable && !a.clear), k = !!(a["append-inner"] || e.appendInnerIcon || G), w = a.label ? a.label({ ...C.value, label: e.label, props: { for: I.value } }) : e.label;
    return d("div", Z({ class: ["v-field", { "v-field--active": g.value, "v-field--appended": k, "v-field--center-affix": e.centerAffix ?? !M.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": j, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !w, [`v-field--variant-${e.variant}`]: !0 }, i.value, R.value, r.value, c.value, f.value, p.value, e.class], style: [B.value, e.style], onClick: V }, n), [d("div", { class: "v-field__overlay" }, null), d(zl, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: a.loader }), j && d("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && d(y, { key: "prepend-icon", name: "prependInner" }, null), (_ = a["prepend-inner"]) == null ? void 0 : _.call(a, C.value)]), d("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && h.value && d(It, { key: "floating-label", ref: H, class: [x.value], floating: !0, for: I.value, style: E.value }, { default: () => [w] }), d(It, { ref: F, for: I.value }, { default: () => [w] }), (D = a.default) == null ? void 0 : D.call(a, { ...C.value, props: { id: I.value, class: "v-field__input", "aria-describedby": $.value }, focus: s, blur: m })]), G && d(oa, { key: "clear" }, { default: () => [we(d("div", { class: "v-field__clearable", onMousedown: (O) => {
      O.preventDefault(), O.stopPropagation();
    } }, [a.clear ? a.clear() : d(y, { name: "clear" }, null)]), [[Mn, e.dirty]])] }), k && d("div", { key: "append", class: "v-field__append-inner" }, [(W = a["append-inner"]) == null ? void 0 : W.call(a, C.value), e.appendInnerIcon && d(y, { key: "append-icon", name: "appendInner" }, null)]), d("div", { class: ["v-field__outline", x.value], style: E.value }, [A && d(fe, null, [d("div", { class: "v-field__outline__start" }, null), h.value && d("div", { class: "v-field__outline__notch" }, [d(It, { ref: H, floating: !0, for: I.value }, { default: () => [w] })]), d("div", { class: "v-field__outline__end" }, null)]), M.value && h.value && d(It, { ref: H, floating: !0, for: I.value }, { default: () => [w] })])]);
  }), { controlRef: T };
} });
function Ua(e) {
  return Ro(e, Object.keys(Ml.props).filter((t) => !ol(t) && t !== "class" && t !== "style"));
}
const zr = ["color", "file", "time", "date", "datetime-local", "week", "month"], Ya = Y({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...mt(), ...Ll() }, "VTextField"), gl = Q()({ name: "VTextField", directives: { Intersect: Ol }, inheritAttrs: !1, props: Ya(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: a } = t;
  const i = me(e, "modelValue"), { isFocused: c, focus: r, blur: o } = yt(e), s = v(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), m = v(() => n.maxlength ? n.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), y = v(() => ["plain", "underlined"].includes(e.variant));
  function f(M, R) {
    var B, x;
    e.autofocus && M && ((x = (B = R[0].target) == null ? void 0 : B.focus) == null || x.call(B));
  }
  const p = N(), g = N(), h = N(), b = v(() => zr.includes(e.type) || e.persistentPlaceholder || c.value || e.active);
  function I() {
    var M;
    h.value !== document.activeElement && ((M = h.value) == null || M.focus()), c.value || r();
  }
  function $(M) {
    l("mousedown:control", M), M.target !== h.value && (I(), M.preventDefault());
  }
  function F(M) {
    I(), l("click:control", M);
  }
  function H(M) {
    M.stopPropagation(), I(), Ie(() => {
      i.value = null, Go(e["onClick:clear"], M);
    });
  }
  function T(M) {
    var B;
    const R = M.target;
    if (i.value = R.value, ((B = e.modelModifiers) == null ? void 0 : B.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const x = [R.selectionStart, R.selectionEnd];
      Ie(() => {
        R.selectionStart = x[0], R.selectionEnd = x[1];
      });
    }
  }
  return oe(() => {
    const M = !!(a.counter || e.counter !== !1 && e.counter != null), R = !(!M && !a.details), [B, x] = it(n), { modelValue: E, ...C } = on.filterProps(e), V = Ua(e);
    return d(on, Z({ ref: p, modelValue: i.value, "onUpdate:modelValue": (A) => i.value = A, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-input--plain-underlined": y.value }, e.class], style: e.style }, B, C, { centerAffix: !y.value, focused: c.value }), { ...a, default: (A) => {
      let { id: j, isDisabled: G, isDirty: k, isReadonly: w, isValid: _ } = A;
      return d(Ml, Z({ ref: g, onMousedown: $, onClick: F, "onClick:clear": H, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: e.role }, V, { id: j.value, active: b.value || k.value, dirty: k.value || e.dirty, disabled: G.value, focused: c.value, error: _.value === !1 }), { ...a, default: (D) => {
        let { props: { class: W, ...O } } = D;
        const L = we(d("input", Z({ ref: h, value: i.value, onInput: T, autofocus: e.autofocus, readonly: w.value, disabled: G.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: I, onBlur: o }, O, x), null), [[Je("intersect"), { handler: f }, null, { once: !0 }]]);
        return d(fe, null, [e.prefix && d("span", { class: "v-text-field__prefix" }, [d("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), a.default ? d("div", { class: W, "data-no-activator": "" }, [a.default(), L]) : ri(L, { class: W }), e.suffix && d("span", { class: "v-text-field__suffix" }, [d("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: R ? (A) => {
      var j;
      return d(fe, null, [(j = a.details) == null ? void 0 : j.call(a, A), M && d(fe, null, [d("span", null, null), d(Ha, { active: e.persistentCounter || c.value, value: s.value, max: m.value }, a.counter)])]);
    } : void 0 });
  }), Ut({}, p, g, h);
} }), Dr = Y({ renderless: Boolean, ...se() }, "VVirtualScrollItem"), Lr = Q()({ name: "VVirtualScrollItem", inheritAttrs: !1, props: Dr(), emits: { "update:height": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: a } = t;
  const { resizeRef: i, contentRect: c } = Al(void 0, "border");
  K(() => {
    var r;
    return (r = c.value) == null ? void 0 : r.height;
  }, (r) => {
    r != null && l("update:height", r);
  }), oe(() => {
    var r, o;
    return e.renderless ? d(fe, null, [(r = a.default) == null ? void 0 : r.call(a, { itemRef: i })]) : d("div", Z({ ref: i, class: ["v-virtual-scroll__item", e.class], style: e.style }, n), [(o = a.default) == null ? void 0 : o.call(a)]);
  });
} }), Mr = Y({ itemHeight: { type: [Number, String], default: null }, height: [Number, String] }, "virtual");
function Wr(e, t) {
  const n = Na(), l = re(0);
  Ge(() => {
    l.value = parseFloat(e.itemHeight || 0);
  });
  const a = re(0), i = re(Math.ceil((parseInt(e.height) || n.height.value) / (l.value || 16)) || 1), c = re(0), r = re(0), o = N(), s = N();
  let m = 0;
  const { resizeRef: y, contentRect: f } = Al();
  Ge(() => {
    y.value = o.value;
  });
  const p = v(() => {
    var w;
    return o.value === document.documentElement ? n.height.value : ((w = f.value) == null ? void 0 : w.height) || parseInt(e.height) || 0;
  }), g = v(() => !!(o.value && s.value && p.value && l.value)), h = /* @__PURE__ */ new Map();
  let b = Array.from({ length: t.value.length });
  const I = Array.from({ length: t.value.length }), $ = re(0);
  let F = -1;
  function H(w) {
    return b[w] || l.value;
  }
  const T = function(w, _) {
    let D = 0;
    const W = function() {
      for (var O = arguments.length, L = new Array(O), U = 0; U < O; U++)
        L[U] = arguments[U];
      clearTimeout(D), D = setTimeout(() => w(...L), u(_));
    };
    return W.clear = () => {
      clearTimeout(D);
    }, W.immediate = w, W;
  }(() => {
    const w = performance.now();
    I[0] = 0;
    const _ = t.value.length;
    for (let D = 1; D <= _ - 1; D++)
      I[D] = (I[D - 1] || 0) + H(D - 1);
    $.value = Math.max($.value, performance.now() - w);
  }, $), M = K(g, (w) => {
    w && (M(), m = s.value.offsetTop, T.immediate(), A(), ~F && Ie(() => {
      $e && window.requestAnimationFrame(() => {
        G(F), F = -1;
      });
    }));
  });
  function R(w) {
    return w = An(w, 0, t.value.length - 1), I[w] || 0;
  }
  function B(w) {
    return function(_, D) {
      let W = _.length - 1, O = 0, L = 0, U = null, S = -1;
      if (_[W] < D)
        return W;
      for (; O <= W; )
        if (L = O + W >> 1, U = _[L], U > D)
          W = L - 1;
        else {
          if (!(U < D))
            return U === D ? L : O;
          S = L, O = L + 1;
        }
      return S;
    }(I, w);
  }
  K(p, (w, _) => {
    _ && A();
  }), Be(() => {
    T.clear();
  });
  let x = 0, E = 0, C = 0, V = -1;
  function A() {
    cancelAnimationFrame(V), V = requestAnimationFrame(j);
  }
  function j() {
    if (!o.value || !p.value)
      return;
    const w = x - m, _ = Math.sign(E), D = An(B(Math.max(0, w - 100)), 0, t.value.length), W = An(B(w + p.value + 100) + 1, D + 1, t.value.length);
    if ((_ !== -1 || D < a.value) && (_ !== 1 || W > i.value)) {
      const O = R(a.value) - R(D), L = R(W) - R(i.value);
      Math.max(O, L) > 100 ? (a.value = D, i.value = W) : (D <= 0 && (a.value = D), W >= t.value.length && (i.value = W));
    }
    c.value = R(a.value), r.value = R(t.value.length) - R(i.value);
  }
  function G(w) {
    const _ = R(w);
    !o.value || w && !_ ? F = w : o.value.scrollTop = _;
  }
  const k = v(() => t.value.slice(a.value, i.value).map((w, _) => ({ raw: w, index: _ + a.value })));
  return K(() => t.value.length, () => {
    b = function(w) {
      let _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return Array.from({ length: w }, (D, W) => _ + W);
    }(t.value.length).map(() => l.value), h.forEach((w, _) => {
      const D = t.value.indexOf(_);
      D === -1 ? h.delete(_) : b[D] = w;
    }), A();
  }), { containerRef: o, markerRef: s, computedItems: k, paddingTop: c, paddingBottom: r, scrollToIndex: G, handleScroll: function() {
    if (!o.value || !s.value)
      return;
    const w = o.value.scrollTop, _ = performance.now();
    _ - C > 500 ? (E = Math.sign(w - x), m = s.value.offsetTop) : E = w - x, x = w, C = _, A();
  }, handleScrollend: function() {
    o.value && s.value && (E = 0, C = 0, A());
  }, handleItemResize: function(w, _) {
    const D = b[w], W = l.value;
    l.value = W ? Math.min(l.value, _) : _, D === _ && W === l.value || (b[w] = _, h.set(t.value[w], _), T());
  } };
}
const Rr = Y({ items: { type: Array, default: () => [] }, renderless: Boolean, ...Mr(), ...se(), ...Cn() }, "VVirtualScroll"), Nr = Q()({ name: "VVirtualScroll", props: Rr(), setup(e, t) {
  let { slots: n } = t;
  const l = Fe("VVirtualScroll"), { dimensionStyles: a } = In(e), { containerRef: i, markerRef: c, handleScroll: r, handleScrollend: o, handleItemResize: s, scrollToIndex: m, paddingTop: y, paddingBottom: f, computedItems: p } = Wr(e, ne(e, "items"));
  return fn(() => e.renderless, () => {
    function g() {
      var b, I;
      const h = arguments.length > 0 && arguments[0] !== void 0 && arguments[0] ? "addEventListener" : "removeEventListener";
      i.value === document.documentElement ? (document[h]("scroll", r, { passive: !0 }), document[h]("scrollend", o)) : ((b = i.value) == null || b[h]("scroll", r, { passive: !0 }), (I = i.value) == null || I[h]("scrollend", o));
    }
    Wn(() => {
      i.value = Zo(l.vnode.el, !0), g(!0);
    }), Be(g);
  }), oe(() => {
    const g = p.value.map((h) => d(Lr, { key: h.index, renderless: e.renderless, "onUpdate:height": (b) => s(h.index, b) }, { default: (b) => {
      var I;
      return (I = n.default) == null ? void 0 : I.call(n, { item: h.raw, index: h.index, ...b });
    } }));
    return e.renderless ? d(fe, null, [d("div", { ref: c, class: "v-virtual-scroll__spacer", style: { paddingTop: te(y.value) } }, null), g, d("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: te(f.value) } }, null)]) : d("div", { ref: i, class: ["v-virtual-scroll", e.class], onScrollPassive: r, onScrollend: o, style: [a.value, e.style] }, [d("div", { ref: c, class: "v-virtual-scroll__container", style: { paddingTop: te(y.value), paddingBottom: te(f.value) } }, [g])]);
  }), { scrollToIndex: m };
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
    var r, o;
    if (a.key === "Tab" && ((r = t.value) == null || r.focus()), !["PageDown", "PageUp", "Home", "End"].includes(a.key))
      return;
    const i = (o = e.value) == null ? void 0 : o.$el;
    if (!i)
      return;
    a.key !== "Home" && a.key !== "End" || i.scrollTo({ top: a.key === "Home" ? 0 : i.scrollHeight, behavior: "smooth" }), await async function() {
      await new Promise((s) => requestAnimationFrame(s)), await new Promise((s) => requestAnimationFrame(s)), await new Promise((s) => requestAnimationFrame(s)), await new Promise((s) => {
        if (n.value) {
          const m = K(n, () => {
            m(), s();
          });
        } else
          s();
      });
    }();
    const c = i.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (a.key === "PageDown" || a.key === "Home") {
      const s = i.getBoundingClientRect().top;
      for (const m of c)
        if (m.getBoundingClientRect().top >= s) {
          m.focus();
          break;
        }
    } else {
      const s = i.getBoundingClientRect().bottom;
      for (const m of [...c].reverse())
        if (m.getBoundingClientRect().bottom <= s) {
          m.focus();
          break;
        }
    }
  } };
}
const Gr = Y({ chips: Boolean, closableChips: Boolean, closeText: { type: String, default: "$vuetify.close" }, openText: { type: String, default: "$vuetify.open" }, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, menu: Boolean, menuIcon: { type: ce, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, itemColor: String, ...La({ itemChildren: !1 }) }, "Select"), qr = Y({ ...Gr(), ...bn(Ya({ modelValue: null, role: "button" }), ["validationValue", "dirty", "appendInnerIcon"]), ...ut({ transition: { component: ta } }) }, "VSelect"), Hr = Q()({ name: "VSelect", props: qr(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:menu": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { t: l } = _l(), a = N(), i = N(), c = N(), r = me(e, "menu"), o = v({ get: () => r.value, set: (k) => {
    var w;
    r.value && !k && ((w = i.value) != null && w.ΨopenChildren) || (r.value = k);
  } }), { items: s, transformIn: m, transformOut: y } = function(k) {
    const w = v(() => Ma(k, k.items)), _ = v(() => w.value.some((D) => D.value === null));
    return { items: w, transformIn: function(D) {
      return _.value || (D = D.filter((W) => W !== null)), D.map((W) => k.returnObject && typeof W == "string" ? vl(k, W) : w.value.find((O) => k.valueComparator(W, O.value)) || vl(k, W));
    }, transformOut: function(D) {
      return k.returnObject ? D.map((W) => {
        let { raw: O } = W;
        return O;
      }) : D.map((W) => {
        let { value: O } = W;
        return O;
      });
    } };
  }(e), f = me(e, "modelValue", [], (k) => m(k === null ? [null] : ln(k)), (k) => {
    const w = y(k);
    return e.multiple ? w : w[0] ?? null;
  }), p = _a(), g = v(() => f.value.map((k) => k.value)), h = re(!1), b = v(() => o.value ? e.closeText : e.openText);
  let I, $ = "";
  const F = v(() => e.hideSelected ? s.value.filter((k) => !f.value.some((w) => w === k)) : s.value), H = v(() => e.hideNoData && !s.value.length || e.readonly || (p == null ? void 0 : p.isReadonly.value)), T = N(), { onListScroll: M, onListKeydown: R } = jr(T, a);
  function B(k) {
    e.openOnClear && (o.value = !0);
  }
  function x() {
    H.value || (o.value = !o.value);
  }
  function E(k) {
    var D, W;
    if (!k.key || e.readonly || p != null && p.isReadonly.value || (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(k.key) && k.preventDefault(), ["Enter", "ArrowDown", " "].includes(k.key) && (o.value = !0), ["Escape", "Tab"].includes(k.key) && (o.value = !1), k.key === "Home" ? (D = T.value) == null || D.focus("first") : k.key === "End" && ((W = T.value) == null || W.focus("last")), e.multiple || !function(O) {
      const L = O.key.length === 1, U = !O.ctrlKey && !O.metaKey && !O.altKey;
      return L && U;
    }(k)))
      return;
    const w = performance.now();
    w - I > 1e3 && ($ = ""), $ += k.key.toLowerCase(), I = w;
    const _ = s.value.find((O) => O.title.toLowerCase().startsWith($));
    _ !== void 0 && (f.value = [_]);
  }
  function C(k) {
    if (e.multiple) {
      const w = f.value.findIndex((_) => e.valueComparator(_.value, k.value));
      if (w === -1)
        f.value = [...f.value, k];
      else {
        const _ = [...f.value];
        _.splice(w, 1), f.value = _;
      }
    } else
      f.value = [k], o.value = !1;
  }
  function V(k) {
    var w;
    (w = T.value) != null && w.$el.contains(k.relatedTarget) || (o.value = !1);
  }
  function A() {
    var k;
    h.value && ((k = a.value) == null || k.focus());
  }
  function j(k) {
    h.value = !0;
  }
  function G(k) {
    if (k == null)
      f.value = [];
    else if (At(a.value, ":autofill") || At(a.value, ":-webkit-autofill")) {
      const w = s.value.find((_) => _.title === k);
      w && C(w);
    } else
      a.value && (a.value.value = "");
  }
  return K(o, () => {
    if (!e.hideSelected && o.value && f.value.length) {
      const k = F.value.findIndex((w) => f.value.some((_) => e.valueComparator(_.value, w.value)));
      $e && window.requestAnimationFrame(() => {
        var w;
        k >= 0 && ((w = c.value) == null || w.scrollToIndex(k));
      });
    }
  }), oe(() => {
    const k = !(!e.chips && !n.chip), w = !!(!e.hideNoData || F.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), _ = f.value.length > 0, D = gl.filterProps(e), W = _ || !h.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
    return d(gl, Z({ ref: a }, D, { modelValue: f.value.map((O) => O.props.value).join(", "), "onUpdate:modelValue": G, focused: h.value, "onUpdate:focused": (O) => h.value = O, validationValue: f.externalValue, counterValue: f.value.length, dirty: _, class: ["v-select", { "v-select--active-menu": o.value, "v-select--chips": !!e.chips, ["v-select--" + (e.multiple ? "multiple" : "single")]: !0, "v-select--selected": f.value.length, "v-select--selection-slot": !!n.selection }, e.class], style: e.style, inputmode: "none", placeholder: W, "onClick:clear": B, "onMousedown:control": x, onBlur: V, onKeydown: E, "aria-label": l(b.value), title: l(b.value) }), { ...n, default: () => d(fe, null, [d(Pr, Z({ ref: i, modelValue: o.value, "onUpdate:modelValue": (O) => o.value = O, activator: "parent", contentClass: "v-select__content", disabled: H.value, eager: e.eager, maxHeight: 310, openOnClick: !1, closeOnContentClick: !1, transition: e.transition, onAfterLeave: A }, e.menuProps), { default: () => [w && d(Cr, { ref: T, selected: g.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (O) => O.preventDefault(), onKeydown: R, onFocusin: j, onScrollPassive: M, tabindex: "-1", color: e.itemColor ?? e.color }, { default: () => {
      var O, L, U;
      return [(O = n["prepend-item"]) == null ? void 0 : O.call(n), !F.value.length && !e.hideNoData && (((L = n["no-data"]) == null ? void 0 : L.call(n)) ?? d(zt, { title: l(e.noDataText) }, null)), d(Nr, { ref: c, renderless: !0, items: F.value }, { default: (S) => {
        var le;
        let { item: P, index: z, itemRef: q } = S;
        const X = Z(P.props, { ref: q, key: z, onClick: () => C(P) });
        return ((le = n.item) == null ? void 0 : le.call(n, { item: P, index: z, props: X })) ?? d(zt, X, { prepend: (be) => {
          let { isSelected: Ve } = be;
          return d(fe, null, [e.multiple && !e.hideSelected ? d(cl, { key: P.value, modelValue: Ve, ripple: !1, tabindex: "-1" }, null) : void 0, P.props.prependIcon && d(de, { icon: P.props.prependIcon }, null)]);
        } });
      } }), (U = n["append-item"]) == null ? void 0 : U.call(n)];
    } })] }), f.value.map((O, L) => {
      const U = { "onClick:close": function(z) {
        z.stopPropagation(), z.preventDefault(), C(O);
      }, onMousedown(z) {
        z.preventDefault(), z.stopPropagation();
      }, modelValue: !0, "onUpdate:modelValue": void 0 }, S = k ? !!n.chip : !!n.selection, P = S ? Ho(k ? n.chip({ item: O, index: L, props: U }) : n.selection({ item: O, index: L })) : void 0;
      if (!S || P)
        return d("div", { key: O.value, class: "v-select__selection" }, [k ? n.chip ? d(ke, { key: "chip-defaults", defaults: { VChip: { closable: e.closableChips, size: "small", text: O.title } } }, { default: () => [P] }) : d(lr, Z({ key: "chip", closable: e.closableChips, size: "small", text: O.title, disabled: O.props.disabled }, U), null) : P ?? d("span", { class: "v-select__selection-text" }, [O.title, e.multiple && L < f.value.length - 1 && d("span", { class: "v-select__selection-comma" }, [Lo(",")])])]);
    })]), "append-inner": function() {
      var S;
      for (var O = arguments.length, L = new Array(O), U = 0; U < O; U++)
        L[U] = arguments[U];
      return d(fe, null, [(S = n["append-inner"]) == null ? void 0 : S.call(n, ...L), e.menuIcon ? d(de, { class: "v-select__menu-icon", icon: e.menuIcon }, null) : void 0]);
    } });
  }), Ut({ isFocused: h, menu: o, select: C }, a);
} }), Ur = Q()({ name: "VCardActions", props: se(), setup(e, t) {
  let { slots: n } = t;
  return Rn({ VBtn: { slim: !0, variant: "text" } }), oe(() => {
    var l;
    return d("div", { class: ["v-card-actions", e.class], style: e.style }, [(l = n.default) == null ? void 0 : l.call(n)]);
  }), {};
} }), Yr = rt("v-card-subtitle"), Xr = rt("v-card-title"), Kr = Y({ appendAvatar: String, appendIcon: ce, prependAvatar: String, prependIcon: ce, subtitle: String, title: String, ...se(), ...He() }, "VCardItem"), Jr = Q()({ name: "VCardItem", props: Kr(), setup(e, t) {
  let { slots: n } = t;
  return oe(() => {
    var s;
    const l = !(!e.prependAvatar && !e.prependIcon), a = !(!l && !n.prepend), i = !(!e.appendAvatar && !e.appendIcon), c = !(!i && !n.append), r = !(!e.title && !n.title), o = !(!e.subtitle && !n.subtitle);
    return d("div", { class: ["v-card-item", e.class], style: e.style }, [a && d("div", { key: "prepend", class: "v-card-item__prepend" }, [n.prepend ? d(ke, { key: "prepend-defaults", disabled: !l, defaults: { VAvatar: { density: e.density, icon: e.prependIcon, image: e.prependAvatar } } }, n.prepend) : l && d(Ln, { key: "prepend-avatar", density: e.density, icon: e.prependIcon, image: e.prependAvatar }, null)]), d("div", { class: "v-card-item__content" }, [r && d(Xr, { key: "title" }, { default: () => {
      var m;
      return [((m = n.title) == null ? void 0 : m.call(n)) ?? e.title];
    } }), o && d(Yr, { key: "subtitle" }, { default: () => {
      var m;
      return [((m = n.subtitle) == null ? void 0 : m.call(n)) ?? e.subtitle];
    } }), (s = n.default) == null ? void 0 : s.call(n)]), c && d("div", { key: "append", class: "v-card-item__append" }, [n.append ? d(ke, { key: "append-defaults", disabled: !i, defaults: { VAvatar: { density: e.density, icon: e.appendIcon, image: e.appendAvatar } } }, n.append) : i && d(Ln, { key: "append-avatar", density: e.density, icon: e.appendIcon, image: e.appendAvatar }, null)])]);
  }), {};
} }), yn = rt("v-card-text"), Zr = Y({ appendAvatar: String, appendIcon: ce, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: ce, ripple: { type: [Boolean, Object], default: !0 }, subtitle: String, text: String, title: String, ...Nn(), ...se(), ...He(), ...Cn(), ...Gn(), ...Tl(), ...$l(), ...ya(), ...Ze(), ...Ht(), ...ze(), ...Se(), ...rn({ variant: "elevated" }) }, "VCard"), _n = Q()({ name: "VCard", directives: { Ripple: ft }, props: Zr(), setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { themeClasses: a } = _e(e), { borderClasses: i } = jn(e), { colorClasses: c, colorStyles: r, variantClasses: o } = dt(e), { densityClasses: s } = en(e), { dimensionStyles: m } = In(e), { elevationClasses: y } = qn(e), { loaderClasses: f } = Gt(e), { locationStyles: p } = El(e), { positionClasses: g } = ma(e), { roundedClasses: h } = Qe(e), b = qt(e, n), I = v(() => e.link !== !1 && b.isLink.value), $ = v(() => !e.disabled && e.link !== !1 && (e.link || b.isClickable.value));
  return oe(() => {
    const F = I.value ? "a" : e.tag, H = !(!l.title && !e.title), T = !(!l.subtitle && !e.subtitle), M = H || T, R = !!(l.append || e.appendAvatar || e.appendIcon), B = !!(l.prepend || e.prependAvatar || e.prependIcon), x = !(!l.image && !e.image), E = M || B || R, C = !(!l.text && !e.text);
    return we(d(F, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": $.value }, a.value, i.value, c.value, s.value, y.value, f.value, g.value, h.value, o.value, e.class], style: [r.value, m.value, p.value, e.style], href: b.href.value, onClick: $.value && b.navigate, tabindex: e.disabled ? -1 : void 0 }, { default: () => {
      var V;
      return [x && d("div", { key: "image", class: "v-card__image" }, [l.image ? d(ke, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: !0, src: e.image } } }, l.image) : d(ia, { key: "image-img", cover: !0, src: e.image }, null)]), d(zl, { name: "v-card", active: !!e.loading, color: typeof e.loading == "boolean" ? void 0 : e.loading }, { default: l.loader }), E && d(Jr, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: l.item, prepend: l.prepend, title: l.title, subtitle: l.subtitle, append: l.append }), C && d(yn, { key: "text" }, { default: () => {
        var A;
        return [((A = l.text) == null ? void 0 : A.call(l)) ?? e.text];
      } }), (V = l.default) == null ? void 0 : V.call(l), l.actions && d(Ur, null, { default: l.actions }), ct($.value, "v-card")];
    } }), [[Je("ripple"), $.value && e.ripple]]);
  }), {};
} }), Qr = Y({ indeterminate: Boolean, inset: Boolean, flat: Boolean, loading: { type: [Boolean, String], default: !1 }, ...mt(), ...Dl() }, "VSwitch"), es = Q()({ name: "VSwitch", inheritAttrs: !1, props: Qr(), emits: { "update:focused": (e) => !0, "update:modelValue": () => !0, "update:indeterminate": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const a = me(e, "indeterminate"), i = me(e, "modelValue"), { loaderClasses: c } = Gt(e), { isFocused: r, focus: o, blur: s } = yt(e), m = N(), y = v(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), f = We(), p = v(() => e.id || `switch-${f}`);
  function g() {
    a.value && (a.value = !1);
  }
  function h(b) {
    var I, $;
    b.stopPropagation(), b.preventDefault(), ($ = (I = m.value) == null ? void 0 : I.input) == null || $.click();
  }
  return oe(() => {
    const [b, I] = it(n), $ = on.filterProps(e), F = Tt.filterProps(e);
    return d(on, Z({ class: ["v-switch", { "v-switch--inset": e.inset }, { "v-switch--indeterminate": a.value }, c.value, e.class], style: e.style }, b, $, { id: p.value, focused: r.value }), { ...l, default: (H) => {
      let { id: T, messagesId: M, isDisabled: R, isReadonly: B, isValid: x } = H;
      return d(Tt, Z({ ref: m }, F, { modelValue: i.value, "onUpdate:modelValue": [(E) => i.value = E, g], id: T.value, "aria-describedby": M.value, type: "checkbox", "aria-checked": a.value ? "mixed" : void 0, disabled: R.value, readonly: B.value, onFocus: o, onBlur: s }, I), { ...l, default: (E) => {
        let { backgroundColorClasses: C, backgroundColorStyles: V } = E;
        return d("div", { class: ["v-switch__track", ...C.value], style: V.value, onClick: h }, null);
      }, input: (E) => {
        let { inputNode: C, icon: V, backgroundColorClasses: A, backgroundColorStyles: j } = E;
        return d(fe, null, [C, d("div", { class: ["v-switch__thumb", { "v-switch__thumb--filled": V || e.loading }, e.inset ? void 0 : A.value], style: e.inset ? void 0 : j.value }, [d(Ai, null, { default: () => [e.loading ? d(zl, { name: "v-switch", active: !0, color: x.value === !1 ? void 0 : y.value }, { default: (G) => l.loader ? l.loader(G) : d(fa, { active: G.isActive, color: G.color, indeterminate: !0, size: "16", width: "2" }, null) }) : V && d(de, { key: V, icon: V, size: "x-small" }, null)] })])]);
      } });
    } });
  }), {};
} }), ns = Y({ autoGrow: Boolean, autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, noResize: Boolean, rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) }, maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, suffix: String, modelModifiers: Object, ...mt(), ...Ll() }, "VTextarea"), ts = Q()({ name: "VTextarea", directives: { Intersect: Ol }, inheritAttrs: !1, props: ns(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: a } = t;
  const i = me(e, "modelValue"), { isFocused: c, focus: r, blur: o } = yt(e), s = v(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : (i.value || "").toString().length), m = v(() => n.maxlength ? n.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter);
  function y(C, V) {
    var A, j;
    e.autofocus && C && ((j = (A = V[0].target) == null ? void 0 : A.focus) == null || j.call(A));
  }
  const f = N(), p = N(), g = re(""), h = N(), b = v(() => e.persistentPlaceholder || c.value || e.active);
  function I() {
    var C;
    h.value !== document.activeElement && ((C = h.value) == null || C.focus()), c.value || r();
  }
  function $(C) {
    I(), l("click:control", C);
  }
  function F(C) {
    l("mousedown:control", C);
  }
  function H(C) {
    C.stopPropagation(), I(), Ie(() => {
      i.value = "", Go(e["onClick:clear"], C);
    });
  }
  function T(C) {
    var A;
    const V = C.target;
    if (i.value = V.value, (A = e.modelModifiers) == null ? void 0 : A.trim) {
      const j = [V.selectionStart, V.selectionEnd];
      Ie(() => {
        V.selectionStart = j[0], V.selectionEnd = j[1];
      });
    }
  }
  const M = N(), R = N(+e.rows), B = v(() => ["plain", "underlined"].includes(e.variant));
  function x() {
    e.autoGrow && Ie(() => {
      if (!M.value || !p.value)
        return;
      const C = getComputedStyle(M.value), V = getComputedStyle(p.value.$el), A = parseFloat(C.getPropertyValue("--v-field-padding-top")) + parseFloat(C.getPropertyValue("--v-input-padding-top")) + parseFloat(C.getPropertyValue("--v-field-padding-bottom")), j = M.value.scrollHeight, G = parseFloat(C.lineHeight), k = An(j ?? 0, Math.max(parseFloat(e.rows) * G + A, parseFloat(V.getPropertyValue("--v-input-control-height"))), parseFloat(e.maxRows) * G + A || 1 / 0);
      R.value = Math.floor((k - A) / G), g.value = te(k);
    });
  }
  let E;
  return Ge(() => {
    e.autoGrow || (R.value = +e.rows);
  }), Wn(x), K(i, x), K(() => e.rows, x), K(() => e.maxRows, x), K(() => e.density, x), K(M, (C) => {
    C ? (E = new ResizeObserver(x), E.observe(M.value)) : E == null || E.disconnect();
  }), an(() => {
    E == null || E.disconnect();
  }), oe(() => {
    const C = !!(a.counter || e.counter || e.counterValue), V = !(!C && !a.details), [A, j] = it(n), { modelValue: G, ...k } = on.filterProps(e), w = Ua(e);
    return d(on, Z({ ref: f, modelValue: i.value, "onUpdate:modelValue": (_) => i.value = _, class: ["v-textarea v-text-field", { "v-textarea--prefixed": e.prefix, "v-textarea--suffixed": e.suffix, "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-textarea--auto-grow": e.autoGrow, "v-textarea--no-resize": e.noResize || e.autoGrow, "v-input--plain-underlined": B.value }, e.class], style: e.style }, A, k, { centerAffix: R.value === 1 && !B.value, focused: c.value }), { ...a, default: (_) => {
      let { id: D, isDisabled: W, isDirty: O, isReadonly: L, isValid: U } = _;
      return d(Ml, Z({ ref: p, style: { "--v-textarea-control-height": g.value }, onClick: $, onMousedown: F, "onClick:clear": H, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, w, { id: D.value, active: b.value || O.value, centerAffix: R.value === 1 && !B.value, dirty: O.value || e.dirty, disabled: W.value, focused: c.value, error: U.value === !1 }), { ...a, default: (S) => {
        let { props: { class: P, ...z } } = S;
        return d(fe, null, [e.prefix && d("span", { class: "v-text-field__prefix" }, [e.prefix]), we(d("textarea", Z({ ref: h, class: P, value: i.value, onInput: T, autofocus: e.autofocus, readonly: L.value, disabled: W.value, placeholder: e.placeholder, rows: e.rows, name: e.name, onFocus: I, onBlur: o }, z, j), null), [[Je("intersect"), { handler: y }, null, { once: !0 }]]), e.autoGrow && we(d("textarea", { class: [P, "v-textarea__sizer"], id: `${z.id}-sizer`, "onUpdate:modelValue": (q) => i.value = q, ref: M, readonly: !0, "aria-hidden": "true" }, null), [[si, i.value]]), e.suffix && d("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: V ? (_) => {
      var D;
      return d(fe, null, [(D = a.details) == null ? void 0 : D.call(a, _), C && d(fe, null, [d("span", null, null), d(Ha, { active: e.persistentCounter || c.value, value: s.value, max: m.value }, a.counter)])]);
    } : void 0 });
  }), Ut({}, f, p, h);
} }), Xa = Ne({ __name: "BooleanIcons", props: Pe({ iconFalseColor: {}, iconFalseTitle: {}, iconTrueColor: {}, iconTrueTitle: {}, iconFalse: {}, iconTrue: {} }, { modelValue: {} }), emits: ["update:modelValue"], setup(e) {
  const t = e, n = ve(Symbol.for("vuetify:icons")), l = un(e, "modelValue"), a = v(() => Me({ icon: t.iconFalse, iconOptions: n, name: "false" })), i = v(() => Me({ icon: t.iconTrue, iconOptions: n, name: "true" }));
  return (c, r) => l.value ? (J(), he(u(de), { key: 0, class: "v-inline-fields--boolean-icons fa-fw", color: c.iconTrueColor, icon: u(i), size: "x-small", title: c.iconTrueTitle }, null, 8, ["color", "icon", "title"])) : (J(), he(u(de), { key: 1, class: "v-inline-fields--boolean-icons fa-fw", color: c.iconFalseColor, icon: u(a), size: "x-small", title: c.iconFalseTitle }, null, 8, ["color", "icon", "title"]));
} }), ie = "v-inline-fields", On = (e) => {
  const { field: t = "", density: n = "", disabled: l = !1, iconSet: a = "mdi", loading: i = !1, loadingWait: c, tableField: r = !1, variant: o } = e, s = n && o;
  return { [`${ie}`]: !0, [`${ie}--container`]: !0, [`${ie}--container-disabled`]: u(l), [`${ie}--container-table`]: r, [`${ie}--container-icon-set-${a}`]: !0, [`${ie}--container-loading`]: i && c, [`${ie}--container-${t}`]: !0, [`${ie}--container-${t}-${n}`]: !0, [`${ie}--container-${t}-${n}-${o}`]: s, [`${ie}--container-${t}-${o}`]: o, [`${ie}--container-${t}-${o}-${n}`]: s, [`${ie}--container-${n}`]: n, [`${ie}--container-${n}-${t}`]: n, [`${ie}--container-${n}-${o}`]: s, [`${ie}--container-${o}`]: o, [`${ie}--container-${o}-${n}`]: s, [`${ie}--container-${o}-${t}`]: o };
}, Pn = (e) => {
  const { field: t = "", density: n = "" } = e;
  return { [`${ie}--display-container`]: !0, [`${ie}--display-wrapper-value`]: !0, [`${t}`]: !0, "v-input": !0, [`v-input--density-${n}`]: !0, "v-input--horizontal": !0 };
}, Lt = (e) => {
  const { density: t = "", variant: n = "" } = e;
  return { "v-input": !0, "v-input--dirty": !0, "v-input--horizontal": !0, "v-text-field": !0, [`v-input--density-${t}`]: !0, [`v-text-field--plain-${n}`]: !0 };
}, Ka = (e) => {
  const { density: t = "" } = e;
  return { [`v-selection-control--density-${t}`]: !0 };
}, Wl = (e, t, n) => {
  const { error: l = !1, empty: a = !1 } = n;
  return { [`${ie}`]: !0, [`${ie}--display-value-${e}`]: !0, [`${ie}--display-value`]: !0, [`${ie}--display-value-empty`]: u(a), [`text-${t}`]: !u(l), "text-danger": u(l) };
}, $n = (e) => {
  const { name: t, active: n = !1 } = e;
  return { [`${ie}`]: !0, [`${ie}--field`]: !0, [`${ie}--field-${t}`]: !0, [`${ie}--field-active`]: n };
}, En = (e) => {
  const { name: t, showField: n } = e;
  return { [`${ie}--card-container`]: !0, [`${ie}--card-container-${t}`]: !0, "d-none": !n };
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
  let t = function(y) {
    const f = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let p = y;
    return Object.entries(f).forEach(([g, h]) => {
      y.toLowerCase() != g.toLowerCase() || (p = h);
    }), p;
  }(e), n = 0, l = 0, a = 0, i = 100, c = 0, r = 0, o = 0;
  if (t.substring(0, 1) === "#")
    t = function(y) {
      let f = y.replace("#", "");
      f.length === 3 && (f = f.split("").map((I) => I + I).join(""));
      const p = parseInt(f.substring(0, 2), 16), g = parseInt(f.substring(2, 4), 16), h = parseInt(f.substring(4, 6), 16);
      return [p, g, h, 100];
    }(t);
  else if (t.includes("rgb"))
    t = [...t.matchAll(/[\d+.\d+]+/g)].map(Number);
  else if (t.includes("hsl"))
    return t = [...t.matchAll(/[\d+.\d+]+/g)].map(String), n = t[0], l = t[1], a = t[2], i = Po(t[3]), `${n} ${l}% ${a}% / ${i}%`;
  [c, r, o, i] = t, c /= 255, r /= 255, o /= 255, i = Po(i);
  const s = Math.max(c, r, o), m = Math.min(c, r, o);
  if (s === null || !m === null || isNaN(s) || isNaN(m)) {
    const y = "0 0% 100% / 12%";
    return console.warn(`[VuetifyInlineFields: The "color" prop value using "${t}" doesn't exist. Using the value "hsl(${y})" in it's place.`), y;
  }
  if (n = (s + m) / 2, l = (s + m) / 2, a = (s + m) / 2, s == m)
    n = l = 0;
  else {
    const y = s - m;
    switch (l = a > 0.5 ? y / (2 - s - m) : y / (s + m), s) {
      case c:
        n = (r - o) / y + (r < o ? 6 : 0);
        break;
      case r:
        n = (o - c) / y + 2;
        break;
      case o:
        n = (c - r) / y + 4;
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
  let { underlineColor: r } = e;
  r = r || l;
  const o = { "border-bottom-color": ls(r, i), "border-bottom-style": t, "border-bottom-width": n };
  return u(a) && (o["border-bottom-color"] = "rgb(var(--v-theme-danger))"), c || (o["border-bottom"] = "none"), o;
}, mn = (e) => {
  const { cardMinWidth: t, cardOffsetX: n, cardOffsetY: l, cardWidth: a, field: i, name: c = "" } = e, r = ((m) => {
    const { cardOffsetX: y, cardOffsetY: f, field: p } = m;
    if (!p)
      return { bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0, x: 0, y: 0 };
    const { x: g, y: h } = p.getBoundingClientRect(), { width: b, height: I } = p.getBoundingClientRect(), { right: $, bottom: F } = p.getBoundingClientRect();
    return { bottom: Xn({ str: F + Number(f) }), height: I, left: Xn({ str: 0 + Number(y) }), right: Xn({ str: $ + Number(y) }), top: Xn({ str: 2 + Number(f) }), width: Xn({ str: b }), x: g, y: h };
  })({ cardOffsetX: n, cardOffsetY: l, field: i });
  let o = t, s = a;
  return s || (s = c === "checkbox" ? "fit-content" : r.width), o || (o = c === "checkbox" ? "fit-content" : r.width), { left: r.left, top: r.top, width: s, zIndex: 10 };
}, os = { class: "v-inline-fields--display-wrapper" }, Mt = Ne({ __name: "DisplayedValue", props: { color: {}, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayValue: {}, empty: { type: Boolean }, error: { type: Boolean }, field: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean } }, emits: ["toggleField"], setup(e, { emit: t }) {
  const n = t, l = e, a = cn(), i = Sl(), c = { displayValue: l.displayValue, empty: l.empty, error: l.error }, r = v(() => Wl(l.field, l.valueColor, { empty: l.empty, error: l.error })), o = v(() => Rl({ color: l.color, error: l.error, theme: i, underlineColor: l.underlineColor, underlineStyle: l.underlineStyle, underlineWidth: l.underlineWidth, underlined: l.underlined })), s = v(() => ((f) => {
    const { underlineWidth: p } = f;
    return { borderBottom: `${p || "0px"} solid transparent` };
  })({ underlineWidth: l.underlineWidth })), m = (f, p = !1) => ((g) => {
    const { inner: h = !1, position: b } = g;
    return { [`${ie}--display-icon`]: !h, [`${ie}--display-${b}-icon`]: !h, [`${ie}--display-${b}-inner-icon`]: h, "me-1": b === "prepend", "ms-1": b === "append" };
  })({ inner: p, position: f });
  function y() {
    n("toggleField");
  }
  return (f, p) => (J(), ae("div", os, [f.displayPrependIcon || u(a)["display.prepend"] ? (J(), ae("div", { key: 0, class: ee(m("prepend")), style: ge(u(s)) }, [u(a)["display.prepend"] ? Ae(f.$slots, "display.prepend", ye(Z({ key: 0 }, c))) : (J(), he(de, { key: 1, color: f.displayPrependIconColor, icon: f.displayPrependIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 6)) : pe("", !0), xe("div", { class: ee(["d-inline-flex", u(r)]), style: ge(u(o)), onClick: y }, [f.displayPrependInnerIcon || u(a)["display.prependInner"] ? (J(), ae("div", { key: 0, class: ee(m("prepend", !0)) }, [u(a)["display.prependInner"] ? Ae(f.$slots, "display.prependInner", ye(Z({ key: 0 }, c))) : (J(), he(de, { key: 1, color: f.displayPrependInnerIconColor, icon: f.displayPrependInnerIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 2)) : pe("", !0), Lo(" " + Il(f.displayValue) + " ", 1), f.displayAppendInnerIcon || u(a)["display.appendInner"] ? (J(), ae("div", { key: 1, class: ee(m("append", !0)) }, [u(a)["display.appendInner"] ? Ae(f.$slots, "display.appendInner", ye(Z({ key: 0 }, c))) : (J(), he(de, { key: 1, color: f.displayAppendInnerIconColor, icon: f.displayAppendInnerIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 2)) : pe("", !0)], 6), f.displayAppendIcon || u(a)["display.append"] ? (J(), ae("div", { key: 1, class: ee(m("append")), style: ge(u(s)) }, [u(a)["display.append"] ? Ae(f.$slots, "display.append", ye(Z({ key: 0 }, c))) : (J(), he(de, { key: 1, color: f.displayAppendIconColor, icon: f.displayAppendIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 6)) : pe("", !0)]));
} }), lt = Ne({ __name: "SaveFieldButtons", props: { loading: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonVariant: {}, cancelButtonTitle: {}, cancelIconColor: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideSaveIcon: { type: Boolean }, loadingIconColor: {}, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIconColor: {}, cancelIcon: {}, loadingIcon: {}, saveIcon: {} }, emits: ["close", "save"], setup(e, { emit: t }) {
  const n = dn(), l = t, a = e, i = ve(Symbol.for("vuetify:icons")), c = v(() => a.error), r = v(() => ({ [`${ie}--save-fields-container`]: !0 })), o = v(() => a.loading), s = Le({ ...n, ...a }), m = v(() => (i == null ? void 0 : i.defaultSet) === "fa" ? "fa-spin" : (i == null ? void 0 : i.defaultSet) === "mdi" ? "mdi-spin" : ""), y = v(() => ((I) => {
    const { cancelButtonVariant: $ } = I;
    return { "me-1": $ === "elevated", "ms-1": !0 };
  })({ cancelButtonVariant: s.cancelButtonVariant })), f = v(() => Me({ icon: a.cancelIcon, iconOptions: i, name: "false" })), p = v(() => Me({ icon: a.loadingIcon, iconOptions: i, name: "loading" })), g = v(() => Me({ icon: a.saveIcon, iconOptions: i, name: "save" }));
  function h() {
    l("close");
  }
  function b() {
    l("save");
  }
  return (I, $) => (J(), ae("div", Z({ class: u(r) }, I.$attrs), [u(s).hideSaveIcon ? pe("", !0) : (J(), he(ul, { key: 0, class: "ms-1", color: u(s).saveButtonColor, disabled: u(c), icon: "", size: u(s).saveButtonSize, title: u(o) ? "Loading" : u(s).saveButtonTitle, variant: u(s).saveButtonVariant, onClick: b }, { default: ue(() => [u(o) ? (J(), he(de, { key: 1, class: ee(u(m)), color: u(s).loadingIconColor, icon: u(p) }, null, 8, ["class", "color", "icon"])) : (J(), he(de, { key: 0, color: u(c) ? "error" : u(s).saveIconColor, icon: u(g) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["color", "disabled", "size", "title", "variant"])), d(ul, { class: ee(u(y)), color: u(s).cancelButtonColor, icon: "", size: u(s).cancelButtonSize, title: u(s).cancelButtonTitle, variant: u(s).cancelButtonVariant, onClick: h }, { default: ue(() => [u(s).hideSaveIcon && u(o) ? (J(), he(de, { key: 0, class: ee(u(m)), color: u(s).loadingIconColor, icon: u(p) }, null, 8, ["class", "color", "icon"])) : (J(), he(de, { key: 1, class: "text-default", color: u(s).cancelIconColor, icon: u(f) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["class", "color", "size", "title", "variant"])], 16));
} }), Wt = (e) => {
  const { required: t, rules: n } = e;
  let { value: l } = e;
  l = u(l);
  const a = [];
  let i = !1;
  if (t && !l)
    return a.push("Field is required."), { errors: !0, results: a };
  if (n) {
    for (const c of n) {
      const r = (typeof c == "function" ? c : () => c)(l);
      r !== !0 && (typeof r == "string" ? a.push(r) : console.warn(`${r} is not a valid value. Rule functions must return boolean true or a string.`));
    }
    i = a.length > 0;
  }
  return { errors: i, results: a };
}, Tn = (e) => {
  const { attrs: t, closeSiblings: n, fieldOnly: l, props: a, showField: i, timeOpened: c } = e;
  let r = c;
  return n && !l && (r = /* @__PURE__ */ new Date()), { settings: { ...t, ...a }, showField: !u(i), timeOpened: r };
}, hl = (e) => {
  const { length: t = 0 } = e;
  let { suffix: n, text: l } = e;
  return l = l.toString(), n = n || "...", l.length > t ? `${l.substring(0, t)}${n}` : l;
}, zn = ["error", "update", "update:closeSiblingFields", "update:model-value"], as = ["cancelButtonColor", "cancelButtonSize", "cancelButtonTitle", "cancelButtonVariant", "cancelIcon", "cancelIconColor", "closeSiblings", "displayAppendIcon", "displayAppendIconColor", "displayAppendIconSize", "displayAppendInnerIcon", "displayAppendInnerIconColor", "displayAppendInnerIconSize", "displayPrependIcon", "displayPrependIconColor", "displayPrependIconSize", "displayPrependInnerIcon", "displayPrependInnerIconColor", "displayPrependInnerIconSize", "emptyText", "fieldOnly", "hideSaveIcon", "item", "loadingIcon", "loadingIconColor", "loadingWait", "saveButtonColor", "saveButtonSize", "saveButtonTitle", "saveButtonVariant", "saveIcon", "saveIconColor", "tableField", "truncateLength", "truncateSuffix", "underlineColor", "underlineStyle", "underlineWidth", "underlined", "valueColor"], Jn = (e) => {
  let t = e;
  return t = Object.entries(t).filter(([n]) => !as.includes(n)), Object.fromEntries(t);
}, is = { class: "v-selection-control__wrapper" }, rs = Ne({ __name: "VInlineCheckbox", props: Pe(kn({ density: {}, falseIcon: {}, trueIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...ci }), { modelValue: {} }), emits: Pe([...zn], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = un(e, "modelValue"), l = dn(), a = cn(), i = t, c = ve(Symbol.for("vuetify:icons")), r = Sl(), o = e;
  let s = Le({ ...l, ...o });
  const m = v(() => o.loading), y = v(() => o.disabled), f = N(!1), p = N(!1), g = N(null), h = v(() => Jn(s)), b = v(() => ({ ...Vn, ...o.cardProps }));
  K(() => m.value, (S, P) => {
    !S && P && p.value && D();
  });
  const I = v(() => Me({ icon: o.trueIcon, iconOptions: c, name: "checkboxFalse" })), $ = v(() => Me({ icon: o.iconTrue, iconOptions: c, name: "checkboxTrue" })), F = v(() => n.value == s.trueValue), H = v(() => Ja({ modelValue: n, trueValue: s.trueValue })), T = v(() => On({ density: s.density, disabled: y.value, field: "v-checkbox", loading: m.value, loadingWait: s.loadingWait, tableField: s.tableField })), M = v(() => Pn({ density: s.density, field: "v-checkbox" })), R = Ka({ density: s.density }), B = v(() => $n({ active: p.value, name: "checkbox" })), x = v(() => Wl("checkbox", s.valueColor, { error: f })), E = v(() => En({ name: "checkbox", showField: p.value })), C = v(() => ({})), V = v(() => Rl({ color: s.color, error: f, theme: r, underlineColor: s.underlineColor, underlineStyle: s.underlineStyle, underlineWidth: s.underlineWidth, underlined: s.underlined })), A = v(() => G.value);
  function j() {
    f.value = !1, D();
  }
  const G = N(), k = N(null), w = N("body"), _ = ui();
  function D() {
    var P, z;
    if (y.value || s.loadingWait && m.value)
      return;
    G.value = mn({ cardMinWidth: (P = s.cardProps) == null ? void 0 : P.minWidth, cardOffsetX: s.cardOffsetX, cardOffsetY: s.cardOffsetY, cardWidth: (z = s.cardProps) == null ? void 0 : z.width, field: k.value, name: "checkbox" });
    const S = Tn({ attrs: l, closeSiblings: s.closeSiblings, fieldOnly: s.fieldOnly, props: o, showField: p, timeOpened: g.value });
    s = { ...s, ...S.settings }, p.value = S.showField, g.value = S.timeOpened, O !== null && s.closeSiblings && p.value && !s.fieldOnly && O.emit(S.timeOpened);
  }
  function W(S) {
    n.value = S, i("update", S), s.loadingWait || D();
  }
  let O, L;
  function U(S) {
    i("update:closeSiblingFields", g), p.value && g.value !== S && D();
  }
  return K(() => _, () => {
    var S, P;
    G.value = mn({ cardMinWidth: (S = s.cardProps) == null ? void 0 : S.minWidth, cardOffsetX: s.cardOffsetX, cardOffsetY: s.cardOffsetY, cardWidth: (P = s.cardProps) == null ? void 0 : P.width, field: k.value, name: "checkbox" });
  }, { deep: !0 }), s.closeSiblings && import("@vueuse/core").then(({ useEventBus: S }) => {
    O = S(Fn), L = O.on(U);
  }), wn(() => {
    L !== void 0 && O.off(U);
  }), (S, P) => (J(), ae("div", { ref_key: "inlineFieldsContainer", ref: k, class: ee(u(T)), style: ge(u(C)) }, [!u(p) && !u(s).fieldOnly || u(s).cardField ? (J(), ae("div", { key: 0, class: ee(u(M)) }, [xe("div", { class: ee(u(R)) }, [xe("div", is, [S.icons ? (J(), ae("div", { key: 0, class: ee(u(x)), style: ge(u(V)), onClick: D }, [d(u(Xa), { modelValue: u(H), "onUpdate:modelValue": P[0] || (P[0] = (z) => hn(H) ? H.value = z : null), "icon-false": u(s).iconFalse, "icon-false-color": u(s).iconFalseColor, "icon-false-title": u(s).iconFalseTitle, "icon-true": u(s).iconTrue, "icon-true-color": u(s).iconTrueColor, "icon-true-title": u(s).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (J(), ae("div", { key: 1, class: ee(["d-inline-flex align-center justify-center", u(x)]), style: ge(u(V)), onClick: D }, Il(u(F)), 7))])], 2)], 2)) : pe("", !0), u(p) || u(s).fieldOnly || u(s).cardField ? (J(), ae("div", { key: 1, class: ee(u(B)) }, [(J(), he(sn, { disabled: !u(s).cardField, to: u(w) }, [d(Qi, Z(u(h), { color: u(s).color, density: u(s).density, disabled: u(m) || u(y), error: u(f), "false-icon": u(I), "false-value": u(s).falseValue, "hide-details": u(s).hideDetails, label: u(s).label, "model-value": u(H), "true-icon": u($), "true-value": u(s).trueValue, "onUpdate:modelValue": W }), Ue({ _: 2 }, [Ye(u(a), (z, q) => ({ name: q, fn: ue((X) => [Ae(S.$slots, q, ye(Ce({ ...X })))]) })), u(a).append ? void 0 : { name: "append", fn: ue(() => [d(u(lt), { "cancel-button-color": u(s).cancelButtonColor, "cancel-button-size": u(s).cancelButtonSize, "cancel-button-title": u(s).cancelButtonTitle, "cancel-button-variant": u(s).cancelButtonVariant, "cancel-icon": u(s).cancelIcon, "cancel-icon-color": u(s).cancelIconColor, error: u(f), "field-only": u(s).fieldOnly, "hide-save-icon": !0, loading: u(m), "loading-icon": u(s).loadingIcon, "loading-icon-color": u(s).loadingIconColor, "save-button-color": u(s).saveButtonColor, "save-button-size": u(s).saveButtonSize, "save-button-title": u(s).saveButtonTitle, "save-button-variant": u(s).saveButtonVariant, "save-icon": u(s).saveIcon, "save-icon-color": u(s).saveIconColor, onClose: j, onSave: W }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "model-value", "true-icon", "true-value"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), u(s).cardField ? (J(), ae("div", { key: 2, class: ee(u(E)), style: ge(u(A)) }, [d(_n, ye(Ce(u(b))), { default: ue(() => [d(yn, null, { default: ue(() => [xe("div", { ref_key: "cardFieldRef", ref: w }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), ss = Ne({ __name: "VInlineCustomField", props: Pe(kn({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Wo }), { modelValue: {} }), emits: Pe([...zn], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = un(e, "modelValue"), l = dn(), a = cn(), i = t, c = ve(Symbol.for("vuetify:icons")), r = e;
  let o = Le({ ...l, ...r });
  const s = v(() => r.loading), m = v(() => r.disabled), y = N(!1), f = N(!1), p = N(!1), g = N(null);
  let h = n.value;
  K(() => s.value, (L, U) => {
    !L && U && p.value && G();
  });
  const b = v(() => n.value ? (y.value = !1, o.truncateLength ? hl({ length: o.truncateLength, suffix: o.truncateSuffix, text: n.value }) : n.value) : (y.value = !0, o.emptyText)), I = v(() => ({ ...o, loading: s.value, modelValue: n.value, originalValue: h })), $ = v(() => ({ color: o.color, displayAppendIcon: r.displayAppendIcon, displayAppendIconColor: r.displayAppendIconColor, displayAppendIconSize: r.displayAppendIconSize, displayAppendInnerIcon: r.displayAppendInnerIcon, displayAppendInnerIconColor: r.displayAppendInnerIconColor, displayAppendInnerIconSize: r.displayAppendInnerIconSize, displayPrependIcon: r.displayPrependIcon, displayPrependIconColor: r.displayPrependIconColor, displayPrependIconSize: r.displayPrependIconSize, displayPrependInnerIcon: r.displayPrependInnerIcon, displayPrependInnerIconColor: r.displayPrependInnerIconColor, displayPrependInnerIconSize: r.displayPrependInnerIconSize, displayValue: b.value, empty: y.value, error: f.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), F = v(() => ({ ...Vn, ...r.cardProps })), H = v(() => On({ density: o.density, disabled: m.value, field: "v-text-field", iconSet: c == null ? void 0 : c.defaultSet, loading: s.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), T = v(() => Pn({ density: o.density, field: "v-text-field" })), M = Lt({ density: o.density, variant: o.variant }), R = v(() => $n({ active: p.value, name: "text-field" })), B = v(() => En({ name: "custom-field", showField: p.value })), x = v(() => ({})), E = v(() => V.value);
  function C() {
    f.value = !1, n.value = h, G();
  }
  const V = N(), A = N(null), j = N("body");
  function G() {
    var U, S;
    if (m.value || o.loadingWait && s.value)
      return;
    V.value = mn({ cardMinWidth: (U = o.cardProps) == null ? void 0 : U.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (S = o.cardProps) == null ? void 0 : S.width, field: A.value });
    const L = Tn({ attrs: l, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: r, showField: p, timeOpened: g.value });
    o = { ...o, ...L.settings }, p.value = L.showField, g.value = L.timeOpened, D !== null && o.closeSiblings && p.value && !o.fieldOnly && D.emit(L.timeOpened);
  }
  const k = N();
  function w() {
    const L = Wt({ required: o.required, rules: o.rules, value: n });
    return f.value = L.errors, k.value = L.results, L.results;
  }
  function _() {
    f.value ? f.value = !0 : (h = n.value, i("update", n.value), o.loadingWait || G());
  }
  let D, W;
  function O(L) {
    i("update:closeSiblingFields", g), p.value && g.value !== L && C();
  }
  return K(() => p.value, () => {
    p.value && w();
  }), K(() => n.value, () => {
    p.value && w();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: L }) => {
    D = L(Fn), W = D.on(O);
  }), wn(() => {
    W !== void 0 && D.off(O);
  }), (L, U) => (J(), ae("div", { ref_key: "inlineFieldsContainer", ref: A, class: ee(u(H)), style: ge(u(x)) }, [!u(p) && !u(o).fieldOnly || u(o).cardField ? (J(), ae("div", { key: 0, class: ee(u(T)) }, [xe("div", { class: ee(u(M)) }, [d(u(Mt), Z(u($), { onToggleField: G }), Ue({ _: 2 }, [Ye(u(a), (S, P) => ({ name: P, fn: ue((z) => [Ae(L.$slots, P, ye(Ce({ ...z })))]) }))]), 1040)], 2)], 2)) : pe("", !0), u(p) || u(o).fieldOnly || u(o).cardField ? (J(), ae("div", { key: 1, class: ee(["d-flex align-center py-2", u(R)]) }, [(J(), he(sn, { disabled: !u(o).cardField, to: u(j) }, [Ae(L.$slots, "default", ye(Ce(u(I)))), d(u(lt), { modelValue: n.value, "onUpdate:modelValue": U[0] || (U[0] = (S) => n.value = S), "cancel-button-color": u(o).cancelButtonColor, "cancel-button-size": u(o).cancelButtonSize, "cancel-button-title": u(o).cancelButtonTitle, "cancel-button-variant": u(o).cancelButtonVariant, "cancel-icon": u(o).cancelIcon, "cancel-icon-color": u(o).cancelIconColor, error: u(f), "field-only": u(o).fieldOnly, "hide-save-icon": u(o).hideSaveIcon, loading: u(s), "loading-icon": u(o).loadingIcon, "loading-icon-color": u(o).loadingIconColor, required: u(o).required, "save-button-color": u(o).saveButtonColor, "save-button-size": u(o).saveButtonSize, "save-button-title": u(o).saveButtonTitle, "save-button-variant": u(o).saveButtonVariant, "save-icon": u(o).saveIcon, "save-icon-color": u(o).saveIconColor, onClose: C, onSave: _ }, null, 8, ["modelValue", "cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "required", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), u(o).cardField ? (J(), ae("div", { key: 2, class: ee(u(B)), style: ge(u(E)) }, [d(_n, ye(Ce(u(F))), { default: ue(() => [d(yn, null, { default: ue(() => [xe("div", { ref_key: "cardFieldRef", ref: j }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), us = Ne({ __name: "VInlineSelect", props: Pe(kn({ clearIcon: {}, clearable: {}, density: {}, hideSelected: {}, itemTitle: {}, itemValue: {}, items: {}, menu: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...di }), { modelValue: {} }), emits: Pe([...zn], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = un(e, "modelValue"), l = dn(), a = cn(), i = t, c = ve(Symbol.for("vuetify:icons")), r = e;
  let o = Le({ ...l, ...r });
  const s = v(() => r.loading), m = v(() => r.disabled), y = N(!1), f = N(!1), p = N(), g = N(!1), h = N(null);
  let b = n.value;
  K(() => s.value, (P, z) => {
    !P && z && g.value && w();
  });
  const I = v(() => Me({ icon: r.clearIcon, iconOptions: c, name: "clear" })), $ = v(() => n.value && n.value[o.itemTitle] ? (y.value = !1, n.value[o.itemTitle]) : (n.value = "", y.value = !0, o.emptyText)), F = v(() => Jn(o)), H = v(() => ({ color: o.color, displayAppendIcon: r.displayAppendIcon, displayAppendIconColor: r.displayAppendIconColor, displayAppendIconSize: r.displayAppendIconSize, displayAppendInnerIcon: r.displayAppendInnerIcon, displayAppendInnerIconColor: r.displayAppendInnerIconColor, displayAppendInnerIconSize: r.displayAppendInnerIconSize, displayPrependIcon: r.displayPrependIcon, displayPrependIconColor: r.displayPrependIconColor, displayPrependIconSize: r.displayPrependIconSize, displayPrependInnerIcon: r.displayPrependInnerIcon, displayPrependInnerIconColor: r.displayPrependInnerIconColor, displayPrependInnerIconSize: r.displayPrependInnerIconSize, displayValue: $.value, empty: y.value, error: f.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), T = v(() => ({ ...Vn, ...r.cardProps }));
  Ge(() => {
    p.value = o.items || [];
  });
  const M = v(() => On({ density: o.density, disabled: m.value, field: "v-select", iconSet: c == null ? void 0 : c.defaultSet, loading: s.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), R = v(() => Pn({ density: o.density, field: "v-select" })), B = Lt({ density: o.density, variant: o.variant }), x = v(() => $n({ active: g.value, name: "select" })), E = v(() => En({ name: "select", showField: g.value })), C = v(() => ({})), V = v(() => j.value);
  function A() {
    f.value = !1, n.value = b, w();
  }
  const j = N(), G = N(null), k = N("body");
  function w() {
    var z, q;
    if (m.value || o.loadingWait && s.value)
      return;
    j.value = mn({ cardMinWidth: (z = o.cardProps) == null ? void 0 : z.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (q = o.cardProps) == null ? void 0 : q.width, field: G.value });
    const P = Tn({ attrs: l, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: r, showField: g, timeOpened: h.value });
    o = { ...o, ...P.settings }, g.value = P.showField, h.value = P.timeOpened, L !== null && o.closeSiblings && g.value && !o.fieldOnly && L.emit(P.timeOpened);
  }
  const _ = N(), D = v(() => _.value);
  function W() {
    const P = Wt({ required: o.required, rules: o.rules, value: n });
    return f.value = P.errors, _.value = P.results, P.results;
  }
  function O() {
    b = n.value, i("update", n.value), o.loadingWait || w();
  }
  let L, U;
  function S(P) {
    i("update:closeSiblingFields", h), g.value && h.value !== P && A();
  }
  return K(() => g.value, () => {
    g.value && W();
  }), K(() => n.value, () => {
    g.value && W();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: P }) => {
    L = P(Fn), U = L.on(S);
  }), wn(() => {
    U !== void 0 && L.off(S);
  }), (P, z) => (J(), ae("div", { ref_key: "inlineFieldsContainer", ref: G, class: ee(u(M)), style: ge(u(C)) }, [!u(g) && !u(o).fieldOnly || u(o).cardField ? (J(), ae("div", { key: 0, class: ee(u(R)) }, [xe("div", { class: ee(u(B)) }, [d(u(Mt), Z(u(H), { onToggleField: w }), Ue({ _: 2 }, [Ye(u(a), (q, X) => ({ name: X, fn: ue((le) => [Ae(P.$slots, X, ye(Ce({ ...le })), void 0, !0)]) }))]), 1040)], 2)], 2)) : pe("", !0), u(g) || u(o).fieldOnly || u(o).cardField ? (J(), ae("div", { key: 1, class: ee(u(x)) }, [(J(), he(sn, { disabled: !u(o).cardField, to: u(k) }, [d(Hr, Z(u(F), { modelValue: n.value, "onUpdate:modelValue": z[0] || (z[0] = (q) => n.value = q), autofocus: !u(o).fieldOnly || u(o).autofocus, "clear-icon": u(I), clearable: u(o).clearable, color: u(o).color, density: u(o).density, disabled: u(s) || u(m), error: u(f), "error-messages": u(D), "hide-details": u(o).hideDetails, "hide-selected": u(o).hideSelected, "item-title": u(o).itemTitle, "item-value": u(o).itemValue, items: u(p), label: u(o).label, loading: u(s), menu: u(o).menu && !u(o).fieldOnly && u(g), variant: u(o).variant, width: "100%", onKeyup: St(A, ["esc"]) }), Ue({ _: 2 }, [Ye(u(a), (q, X) => ({ name: X, fn: ue((le) => [Ae(P.$slots, X, ye(Ce({ ...le })), void 0, !0)]) })), u(a).append ? void 0 : { name: "append", fn: ue(() => [d(u(lt), { "cancel-button-color": u(o).cancelButtonColor, "cancel-button-size": u(o).cancelButtonSize, "cancel-button-title": u(o).cancelButtonTitle, "cancel-button-variant": u(o).cancelButtonVariant, "cancel-icon": u(o).cancelIcon, "cancel-icon-color": u(o).cancelIconColor, error: u(f), "field-only": u(o).fieldOnly, "hide-save-icon": u(o).hideSaveIcon, loading: u(s), "loading-icon": u(o).loadingIcon, "loading-icon-color": u(o).loadingIconColor, "save-button-color": u(o).saveButtonColor, "save-button-size": u(o).saveButtonSize, "save-button-title": u(o).saveButtonTitle, "save-button-variant": u(o).saveButtonVariant, "save-icon": u(o).saveIcon, "save-icon-color": u(o).saveIconColor, onClose: A, onSave: O }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "clearable", "color", "density", "disabled", "error", "error-messages", "hide-details", "hide-selected", "item-title", "item-value", "items", "label", "loading", "menu", "variant", "onKeyup"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), u(o).cardField ? (J(), ae("div", { key: 2, class: ee(u(E)), style: ge(u(V)) }, [d(_n, ye(Ce(u(T))), { default: ue(() => [d(yn, null, { default: ue(() => [xe("div", { ref_key: "cardFieldRef", ref: k }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), cs = { class: "v-selection-control__wrapper" }, Re = { VInlineCheckbox: rs, VInlineCustomField: ss, VInlineSelect: ((e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, a] of t)
    n[l] = a;
  return n;
})(us, [["__scopeId", "data-v-d028b1ff"]]), VInlineSwitch: Ne({ __name: "VInlineSwitch", props: Pe(kn({ density: {}, falseIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...pi }), { modelValue: {} }), emits: Pe([...zn], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = un(e, "modelValue"), l = dn(), a = cn(), i = t, c = ve(Symbol.for("vuetify:icons")), r = Sl(), o = e;
  let s = Le({ ...l, ...o });
  const m = v(() => o.loading), y = v(() => o.disabled), f = N(!1), p = N(!1), g = N(null), h = v(() => Jn(s)), b = v(() => ({ ...Vn, ...o.cardProps }));
  K(() => m.value, (O, L) => {
    !O && L && p.value && k();
  });
  const I = v(() => Me({ icon: s.cancelIcon, iconOptions: c, name: "false" })), $ = v(() => n.value == s.trueValue), F = v(() => Ja({ modelValue: n, trueValue: s.trueValue })), H = v(() => On({ density: s.density, disabled: y.value, field: "v-switch", loading: m.value, loadingWait: s.loadingWait, tableField: s.tableField })), T = v(() => Pn({ density: s.density, field: "v-switch" })), M = Ka({ density: s.density }), R = v(() => $n({ active: p.value, name: "switch" })), B = v(() => Wl("switch", s.valueColor, { error: f })), x = v(() => En({ name: "switch", showField: p.value })), E = v(() => ({})), C = v(() => Rl({ color: s.color, error: f, theme: r, underlineColor: s.underlineColor, underlineStyle: s.underlineStyle, underlineWidth: s.underlineWidth, underlined: s.underlined })), V = v(() => A.value), A = N(), j = N(null), G = N("body");
  function k() {
    var L, U;
    if (y.value || s.loadingWait && m.value)
      return;
    A.value = mn({ cardMinWidth: (L = s.cardProps) == null ? void 0 : L.minWidth, cardOffsetX: s.cardOffsetX, cardOffsetY: s.cardOffsetY, cardWidth: (U = s.cardProps) == null ? void 0 : U.width, field: j.value });
    const O = Tn({ attrs: l, closeSiblings: s.closeSiblings, fieldOnly: s.fieldOnly, props: o, showField: p.value, timeOpened: g.value });
    s = { ...s, ...O.settings }, p.value = O.showField, g.value = O.timeOpened, _ !== null && s.closeSiblings && p.value && !s.fieldOnly && _.emit(O.timeOpened);
  }
  function w(O) {
    n.value = O, i("update", O), s.loadingWait || k();
  }
  let _, D;
  function W(O) {
    i("update:closeSiblingFields", g), p.value && g.value !== O && k();
  }
  return s.closeSiblings && import("@vueuse/core").then(({ useEventBus: O }) => {
    _ = O(Fn), D = _.on(W);
  }), wn(() => {
    D !== void 0 && _.off(W);
  }), (O, L) => (J(), ae("div", { ref_key: "inlineFieldsContainer", ref: j, class: ee(u(H)), style: ge(u(E)) }, [!u(p) && !u(s).fieldOnly || u(s).cardField ? (J(), ae("div", { key: 0, class: ee(u(T)) }, [xe("div", { class: ee(u(M)) }, [xe("div", cs, [O.icons ? (J(), ae("div", { key: 0, class: ee(u(B)), style: ge(u(C)), onClick: k }, [d(u(Xa), { modelValue: u(F), "onUpdate:modelValue": L[0] || (L[0] = (U) => hn(F) ? F.value = U : null), "icon-false": u(s).iconFalse, "icon-false-color": u(s).iconFalseColor, "icon-false-title": u(s).iconFalseTitle, "icon-true": u(s).iconTrue, "icon-true-color": u(s).iconTrueColor, "icon-true-title": u(s).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (J(), ae("div", { key: 1, class: ee(["d-inline-flex align-center justify-center", u(B)]), style: ge(u(C)), onClick: k }, Il(u($)), 7))])], 2)], 2)) : pe("", !0), u(p) || u(s).fieldOnly || u(s).cardField ? (J(), ae("div", { key: 1, class: ee(u(R)) }, [(J(), he(sn, { disabled: !u(s).cardField, to: u(G) }, [d(es, Z(u(h), { color: u(s).color, density: u(s).density, disabled: u(m) || u(y), error: u(f), "false-icon": u(s).falseIcon, "false-value": u(s).falseValue, "hide-details": u(s).hideDetails, label: u(s).label, loading: u(m), "model-value": u(F), "true-value": u(s).trueValue, "onUpdate:modelValue": w }), Ue({ _: 2 }, [Ye(u(a), (U, S) => ({ name: S, fn: ue((P) => [Ae(O.$slots, S, ye(Ce({ ...P })))]) })), u(a).append ? void 0 : { name: "append", fn: ue(() => [!u(s).fieldOnly || u(s).cardField ? (J(), he(ul, { key: 0, class: "ms-3", color: u(s).cancelButtonColor, icon: "", size: u(s).cancelButtonSize, title: u(s).cancelButtonTitle, variant: u(s).cancelButtonVariant, onClick: k }, { default: ue(() => [d(de, { color: u(s).cancelIconColor, icon: u(I) }, null, 8, ["color", "icon"])]), _: 1 }, 8, ["color", "size", "title", "variant"])) : pe("", !0)]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "loading", "model-value", "true-value"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), u(s).cardField ? (J(), ae("div", { key: 2, class: ee(u(x)), style: ge(u(V)) }, [d(_n, ye(Ce(u(b))), { default: ue(() => [d(yn, null, { default: ue(() => [xe("div", { ref_key: "cardFieldRef", ref: G }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), VInlineTextField: Ne({ __name: "VInlineTextField", props: Pe(kn({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Wo }), { modelValue: {} }), emits: Pe([...zn], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = un(e, "modelValue"), l = dn(), a = cn(), i = t, c = ve(Symbol.for("vuetify:icons")), r = e;
  let o = Le({ ...l, ...r });
  const s = v(() => r.loading), m = v(() => r.disabled), y = N(!1), f = N(!1), p = N(!1), g = N(null);
  let h = n.value;
  K(() => s.value, (S, P) => {
    !S && P && p.value && k();
  });
  const b = v(() => Me({ icon: r.clearIcon, iconOptions: c, name: "clear" })), I = v(() => n.value ? (y.value = !1, o.truncateLength ? hl({ length: o.truncateLength, suffix: o.truncateSuffix, text: n.value }) : n.value) : (y.value = !0, o.emptyText)), $ = v(() => Jn(o)), F = v(() => ({ color: o.color, displayAppendIcon: r.displayAppendIcon, displayAppendIconColor: r.displayAppendIconColor, displayAppendIconSize: r.displayAppendIconSize, displayAppendInnerIcon: r.displayAppendInnerIcon, displayAppendInnerIconColor: r.displayAppendInnerIconColor, displayAppendInnerIconSize: r.displayAppendInnerIconSize, displayPrependIcon: r.displayPrependIcon, displayPrependIconColor: r.displayPrependIconColor, displayPrependIconSize: r.displayPrependIconSize, displayPrependInnerIcon: r.displayPrependInnerIcon, displayPrependInnerIconColor: r.displayPrependInnerIconColor, displayPrependInnerIconSize: r.displayPrependInnerIconSize, displayValue: I.value, empty: y.value, error: f.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), H = v(() => ({ ...Vn, ...r.cardProps })), T = v(() => On({ density: o.density, disabled: m.value, field: "v-text-field", iconSet: c == null ? void 0 : c.defaultSet, loading: s.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), M = v(() => Pn({ density: o.density, field: "v-text-field" })), R = Lt({ density: o.density, variant: o.variant }), B = v(() => $n({ active: p.value, name: "text-field" })), x = v(() => En({ name: "text-field", showField: p.value })), E = v(() => ({})), C = v(() => A.value);
  function V() {
    f.value = !1, n.value = h, k();
  }
  const A = N(), j = N(null), G = N("body");
  function k() {
    var P, z;
    if (m.value || o.loadingWait && s.value)
      return;
    A.value = mn({ cardMinWidth: (P = o.cardProps) == null ? void 0 : P.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (z = o.cardProps) == null ? void 0 : z.width, field: j.value });
    const S = Tn({ attrs: l, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: r, showField: p, timeOpened: g.value });
    o = { ...o, ...S.settings }, p.value = S.showField, g.value = S.timeOpened, O !== null && o.closeSiblings && p.value && !o.fieldOnly && O.emit(S.timeOpened);
  }
  const w = N(), _ = v(() => w.value);
  function D() {
    const S = Wt({ required: o.required, rules: o.rules, value: n });
    return f.value = S.errors, w.value = S.results, S.results;
  }
  function W() {
    f.value ? f.value = !0 : (h = n.value, i("update", n.value), o.loadingWait || k());
  }
  let O, L;
  function U(S) {
    i("update:closeSiblingFields", g), p.value && g.value !== S && V();
  }
  return K(() => p.value, () => {
    p.value && D();
  }), K(() => n.value, () => {
    p.value && D();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: S }) => {
    O = S(Fn), L = O.on(U);
  }), wn(() => {
    L !== void 0 && O.off(U);
  }), (S, P) => (J(), ae("div", { ref_key: "inlineFieldsContainer", ref: j, class: ee(u(T)), style: ge(u(E)) }, [!u(p) && !u(o).fieldOnly || u(o).cardField ? (J(), ae("div", { key: 0, class: ee(u(M)) }, [xe("div", { class: ee(u(R)) }, [d(u(Mt), Z(u(F), { onToggleField: k }), Ue({ _: 2 }, [Ye(u(a), (z, q) => ({ name: q, fn: ue((X) => [Ae(S.$slots, q, ye(Ce({ ...X })))]) }))]), 1040)], 2)], 2)) : pe("", !0), u(p) || u(o).fieldOnly || u(o).cardField ? (J(), ae("div", { key: 1, class: ee(u(B)) }, [(J(), he(sn, { disabled: !u(o).cardField, to: u(G) }, [d(gl, Z(u($), { modelValue: n.value, "onUpdate:modelValue": P[1] || (P[1] = (z) => n.value = z), autofocus: !u(o).fieldOnly || u(o).autofocus, "clear-icon": u(b), color: u(o).color, density: u(o).density, disabled: u(s) || u(m), error: u(f), "error-messages": u(_), "hide-details": u(o).hideDetails, label: u(o).label, loading: u(s), variant: u(o).variant, width: "100%", onKeyup: [St(W, ["enter"]), St(V, ["esc"])] }), Ue({ _: 2 }, [Ye(u(a), (z, q) => ({ name: q, fn: ue((X) => [Ae(S.$slots, q, ye(Ce({ ...X })))]) })), u(a).append ? void 0 : { name: "append", fn: ue(() => [d(u(lt), { modelValue: n.value, "onUpdate:modelValue": P[0] || (P[0] = (z) => n.value = z), "cancel-button-color": u(o).cancelButtonColor, "cancel-button-size": u(o).cancelButtonSize, "cancel-button-title": u(o).cancelButtonTitle, "cancel-button-variant": u(o).cancelButtonVariant, "cancel-icon": u(o).cancelIcon, "cancel-icon-color": u(o).cancelIconColor, error: u(f), "field-only": u(o).fieldOnly, "hide-save-icon": u(o).hideSaveIcon, loading: u(s), "loading-icon": u(o).loadingIcon, "loading-icon-color": u(o).loadingIconColor, required: u(o).required, "save-button-color": u(o).saveButtonColor, "save-button-size": u(o).saveButtonSize, "save-button-title": u(o).saveButtonTitle, "save-button-variant": u(o).saveButtonVariant, "save-icon": u(o).saveIcon, "save-icon-color": u(o).saveIconColor, onClose: V, onSave: W }, null, 8, ["modelValue", "cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "required", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "variant", "onKeyup"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), u(o).cardField ? (J(), ae("div", { key: 2, class: ee(u(x)), style: ge(u(C)) }, [d(_n, ye(Ce(u(H))), { default: ue(() => [d(yn, null, { default: ue(() => [xe("div", { ref_key: "cardFieldRef", ref: G }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), VInlineTextarea: Ne({ __name: "VInlineTextarea", props: Pe(kn({ autoGrow: {}, clearIcon: {}, density: {}, rows: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...vi }), { modelValue: {} }), emits: Pe([...zn], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = un(e, "modelValue"), l = dn(), a = cn(), i = t, c = ve(Symbol.for("vuetify:icons")), r = e;
  let o = Le({ ...l, ...r });
  const s = v(() => r.loading), m = v(() => r.disabled), y = N(!1), f = N(!1), p = N(!1), g = N(null);
  let h = n.value;
  K(() => s.value, (S, P) => {
    !S && P && p.value && k();
  });
  const b = v(() => Me({ icon: r.clearIcon, iconOptions: c, name: "clear" })), I = v(() => n.value ? (y.value = !1, o.truncateLength ? hl({ length: o.truncateLength, suffix: o.truncateSuffix, text: n.value }) : n.value) : (y.value = !0, o.emptyText)), $ = v(() => Jn(o)), F = v(() => ({ color: o.color, displayAppendIcon: r.displayAppendIcon, displayAppendIconColor: r.displayAppendIconColor, displayAppendIconSize: r.displayAppendIconSize, displayAppendInnerIcon: r.displayAppendInnerIcon, displayAppendInnerIconColor: r.displayAppendInnerIconColor, displayAppendInnerIconSize: r.displayAppendInnerIconSize, displayPrependIcon: r.displayPrependIcon, displayPrependIconColor: r.displayPrependIconColor, displayPrependIconSize: r.displayPrependIconSize, displayPrependInnerIcon: r.displayPrependInnerIcon, displayPrependInnerIconColor: r.displayPrependInnerIconColor, displayPrependInnerIconSize: r.displayPrependInnerIconSize, displayValue: I.value, empty: y.value, error: f.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), H = v(() => ({ ...Vn, ...r.cardProps })), T = v(() => On({ density: o.density, disabled: m.value, field: "v-textarea", iconSet: c == null ? void 0 : c.defaultSet, loading: s.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), M = v(() => Pn({ density: o.density, field: "v-textarea" })), R = Lt({ density: o.density, variant: o.variant }), B = v(() => $n({ active: p.value, name: "textarea" })), x = v(() => En({ name: "textarea", showField: p.value })), E = v(() => ({})), C = v(() => A.value);
  function V() {
    f.value = !1, n.value = h, k();
  }
  const A = N(), j = N(null), G = N("body");
  function k() {
    var P, z;
    if (m.value || o.loadingWait && s.value)
      return;
    A.value = mn({ cardMinWidth: (P = o.cardProps) == null ? void 0 : P.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (z = o.cardProps) == null ? void 0 : z.width, field: j.value });
    const S = Tn({ attrs: l, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: r, showField: p, timeOpened: g.value });
    o = { ...o, ...S.settings }, p.value = S.showField, g.value = S.timeOpened, O !== null && o.closeSiblings && p.value && !o.fieldOnly && O.emit(S.timeOpened);
  }
  const w = N(), _ = v(() => w.value);
  function D() {
    const S = Wt({ required: o.required, rules: o.rules, value: n });
    return f.value = S.errors, w.value = S.results, S.results;
  }
  function W() {
    h = n.value, i("update", n.value), o.loadingWait || k();
  }
  let O, L;
  function U(S) {
    i("update:closeSiblingFields", g), p.value && g.value !== S && V();
  }
  return K(() => p.value, () => {
    p.value && D();
  }), K(() => n.value, () => {
    p.value && D();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: S }) => {
    O = S(Fn), L = O.on(U);
  }), wn(() => {
    L !== void 0 && O.off(U);
  }), (S, P) => (J(), ae("div", { ref_key: "inlineFieldsContainer", ref: j, class: ee(u(T)), style: ge(u(E)) }, [!u(p) && !u(o).fieldOnly || u(o).cardField ? (J(), ae("div", { key: 0, class: ee(u(M)) }, [xe("div", { class: ee(u(R)) }, [d(u(Mt), Z(u(F), { onToggleField: k }), Ue({ _: 2 }, [Ye(u(a), (z, q) => ({ name: q, fn: ue((X) => [Ae(S.$slots, q, ye(Ce({ ...X })))]) }))]), 1040)], 2)], 2)) : pe("", !0), u(p) || u(o).fieldOnly || u(o).cardField ? (J(), ae("div", { key: 1, class: ee(u(B)) }, [(J(), he(sn, { disabled: !u(o).cardField, to: u(G) }, [d(ts, Z(u($), { modelValue: n.value, "onUpdate:modelValue": P[0] || (P[0] = (z) => n.value = z), "auto-grow": u(o).autoGrow, autofocus: !u(o).fieldOnly || u(o).autofocus, "clear-icon": u(b), color: u(o).color, density: u(o).density, disabled: u(s) || u(m), error: u(f), "error-messages": u(_), "hide-details": u(o).hideDetails, label: u(o).label, loading: u(s), rows: u(o).rows, variant: u(o).variant, width: "100%", onKeyup: St(V, ["esc"]) }), Ue({ _: 2 }, [Ye(u(a), (z, q) => ({ name: q, fn: ue((X) => [Ae(S.$slots, q, ye(Ce({ ...X })))]) })), u(a).append ? void 0 : { name: "append", fn: ue(() => [d(u(lt), { "cancel-button-color": u(o).cancelButtonColor, "cancel-button-size": u(o).cancelButtonSize, "cancel-button-title": u(o).cancelButtonTitle, "cancel-button-variant": u(o).cancelButtonVariant, "cancel-icon": u(o).cancelIcon, "cancel-icon-color": u(o).cancelIconColor, error: u(f), "field-only": u(o).fieldOnly, "hide-save-icon": u(o).hideSaveIcon, loading: u(s), "loading-icon": u(o).loadingIcon, "loading-icon-color": u(o).loadingIconColor, "save-button-color": u(o).saveButtonColor, "save-button-size": u(o).saveButtonSize, "save-button-title": u(o).saveButtonTitle, "save-button-variant": u(o).saveButtonVariant, "save-icon": u(o).saveIcon, "save-icon-color": u(o).saveIconColor, onClose: V, onSave: W }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "auto-grow", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "rows", "variant", "onKeyup"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), u(o).cardField ? (J(), ae("div", { key: 2, class: ee(u(x)), style: ge(u(C)) }, [d(_n, ye(Ce(u(H))), { default: ue(() => [d(yn, null, { default: ue(() => [xe("div", { ref_key: "cardFieldRef", ref: G }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }) }, ds = (e) => {
  for (const t in Re) {
    const n = Re[t];
    e.component(n.name, n);
  }
};
for (const e in Re)
  Re[e].install = ds;
const ys = Re.VInlineCheckbox, ms = Re.VInlineCustomField, gs = Re.VInlineSelect, hs = Re.VInlineSwitch, bs = Re.VInlineTextField, Cs = Re.VInlineTextarea, Is = { VInlineFields: Re };
export {
  ys as VInlineCheckbox,
  ms as VInlineCustomField,
  gs as VInlineSelect,
  hs as VInlineSwitch,
  bs as VInlineTextField,
  Cs as VInlineTextarea,
  Is as default
};
(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode("[data-v-d028b1ff] .v-field__field{align-items:flex-end!important}:root{--v-inline-fields-top-padding-compact: 13px;--v-inline-fields-top-padding-comfortable: 17px;--v-inline-fields-top-padding-default: 21px;--v-inline-fields-input-height: 24px;--v-inline-fields-density-compact-height: 32px;--v-inline-fields-density-comfortable-height: 40px;--v-inline-fields-grey: #909090}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append{padding-top:0!important}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append .v-icon{font-size:1rem!important}.v-inline-fields{position:relative}.v-inline-fields--display-container *{align-items:center;display:flex}.v-inline-fields--display-value{cursor:pointer;letter-spacing:.009375em!important}.v-inline-fields--display-value-empty{color:var(--v-inline-fields-grey);font-style:italic}.v-inline-fields--display-value-checkbox,.v-inline-fields--display-value-switch{padding-bottom:2px;padding-top:6px}.v-inline-fields--display-append-icon,.v-inline-fields--display-prepend-icon,.v-inline-fields--display-append-inner-icon,.v-inline-fields--display-prepend-inner-icon{align-items:flex-end;display:inline-flex}.v-inline-fields--container-disabled .v-inline-fields--display-value{cursor:default!important;opacity:var(--v-disabled-opacity)}.v-inline-fields--container-loading .v-inline-fields--display-value{cursor:wait!important}.v-inline-fields--container-icon-set-fa .v-field__clearable{font-size:.8rem}.v-inline-fields--container-icon-set-fa .v-field__append-inner{align-items:flex-end;padding-bottom:0!important}.v-inline-fields--container-v-select-compact-plain .v-input,.v-inline-fields--container-v-select-compact-underlined .v-input,.v-inline-fields--container-v-text-field-compact-plain .v-input,.v-inline-fields--container-v-text-field-compact-underlined .v-input{height:var(--v-inline-fields-density-compact-height);max-height:var(--v-inline-fields-density-compact-height)}.v-inline-fields--container-v-select-compact-plain .v-input__control,.v-inline-fields--container-v-select-compact-underlined .v-input__control,.v-inline-fields--container-v-text-field-compact-plain .v-input__control,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control{padding-bottom:4px}.v-inline-fields--container-v-select-compact-plain .v-input>div,.v-inline-fields--container-v-select-compact-underlined .v-input>div,.v-inline-fields--container-v-text-field-compact-plain .v-input>div,.v-inline-fields--container-v-text-field-compact-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input input{padding-bottom:10px}.v-inline-fields--container-v-select-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-compact-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-select__selection{align-items:center;padding-bottom:10px}.v-inline-fields--container-v-select-comfortable-plain .v-input,.v-inline-fields--container-v-select-comfortable-underlined .v-input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input{height:var(--v-inline-fields-density-comfortable-height);max-height:var(--v-inline-fields-density-comfortable-height)}.v-inline-fields--container-v-select-comfortable-plain .v-input__control,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control{padding-bottom:8px}.v-inline-fields--container-v-select-comfortable-plain .v-input>div,.v-inline-fields--container-v-select-comfortable-underlined .v-input>div,.v-inline-fields--container-v-text-field-comfortable-plain .v-input>div,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input input{padding-bottom:6px}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-select__selection{align-items:center;padding-bottom:6px}.v-inline-fields--container-v-select-compact-plain .v-field__append-inner,.v-inline-fields--container-v-select-compact-underlined .v-field__append-inner{padding-top:4px!important}.v-inline-fields--container-v-select-comfortable-plain .v-field__append-inner,.v-inline-fields--container-v-select-comfortable-underlined .v-field__append-inner{padding-top:8px!important}.v-inline-fields--container-v-textarea .v-inline-fields--save-fields-container{align-items:flex-end}.v-inline-fields--container-v-select,.v-inline-fields--container-v-textarea,.v-inline-fields--container-v-text-field{width:100%}.v-inline-fields--container-v-checkbox .v-input,.v-inline-fields--container-v-switch .v-input{align-items:center;display:flex;padding-bottom:0}.v-inline-fields--container-v-checkbox .v-input__append,.v-inline-fields--container-v-switch .v-input__append{margin-inline-start:0!important;margin-left:0;padding-bottom:0!important}.v-inline-fields--container-v-checkbox .v-selection-control,.v-inline-fields--container-v-switch .v-selection-control{min-height:unset}.v-inline-fields--container-v-checkbox .v-inline-fields--save-fields-container,.v-inline-fields--container-v-switch .v-inline-fields--save-fields-container{align-items:center!important}.v-inline-fields--container .v-input__append,.v-inline-fields--container .v-input__prepend,.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-top:0!important}.v-inline-fields--container .v-input__append .v-icon,.v-inline-fields--container .v-input__prepend .v-icon,.v-inline-fields--container .v-field__append-inner .v-icon,.v-inline-fields--container .v-field__prepend-inner .v-icon{font-size:1rem!important}.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-compact .v-input__append,.v-inline-fields--container-compact .v-input__prepend,.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-comfortable .v-input__append,.v-inline-fields--container-comfortable .v-input__prepend,.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{padding-bottom:6px!important}.v-inline-fields--container-default .v-input__append,.v-inline-fields--container-default .v-input__prepend,.v-inline-fields--container-default .v-field__append-inner,.v-inline-fields--container-default .v-field__prepend-inner{align-items:flex-end!important;padding-bottom:0!important}.v-inline-fields--container-default .v-input__append .v-icon,.v-inline-fields--container-default .v-input__prepend .v-icon,.v-inline-fields--container-default .v-field__append-inner .v-icon,.v-inline-fields--container-default .v-field__prepend-inner .v-icon{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)!important}.v-inline-fields--container-default .v-inline-fields--save-fields-container{align-items:flex-end!important}.v-inline-fields--card-container{height:fit-content;min-width:fit-content!important;position:absolute}.v-inline-fields--card-container .v-card{border:1px solid hsla(0,0%,50%,.5)}.v-inline-fields--card-container .v-card .v-card-text{padding:5px 10px}.v-inline-fields--card-container .v-card .v-card-text>div{align-items:center;display:flex}.v-inline-fields--card-container-checkbox .v-card .v-card-text .v-input__append{margin-inline-start:0}.v-inline-fields--save-fields-container{align-items:center;display:flex;height:100%;margin-left:.1rem}.v-inline-fields--boolean-icons{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-inline-fields .truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:250px}.v-inline-fields .v-input__append{padding-top:0}")),document.head.appendChild(i)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
