import { Fragment as fe, reactive as Me, computed as v, watchEffect as Ne, toRefs as Eo, capitalize as To, isVNode as ri, Comment as si, unref as r, warn as Lt, inject as se, ref as W, provide as De, shallowRef as re, defineComponent as je, camelize as zo, h as Wt, getCurrentInstance as ui, onBeforeUnmount as Je, watch as K, readonly as hl, onScopeDispose as Ae, effectScope as bl, toRaw as ln, TransitionGroup as ci, Transition as cn, createVNode as p, mergeProps as Z, onBeforeMount as Do, nextTick as Ie, withDirectives as Fe, resolveDirective as Ze, vShow as Vn, isRef as pn, onMounted as An, toRef as te, Text as di, resolveDynamicComponent as pi, Teleport as vn, cloneVNode as vi, createTextVNode as Lo, vModelText as fi, mergeModels as Te, useModel as fn, openBlock as J, createBlock as he, useSlots as yn, createElementBlock as ie, normalizeClass as ne, normalizeStyle as be, renderSlot as _e, normalizeProps as me, createCommentVNode as ve, createElementVNode as we, toDisplayString as Cl, useAttrs as mn, withCtx as ce, mergeDefaults as _n, onUnmounted as On, createSlots as Ye, renderList as Xe, guardReactiveProps as Se, withKeys as kt } from "vue";
import { useTheme as Il } from "vuetify";
import { useWindowSize as yi } from "@vueuse/core";
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
const Pn = Symbol("identifier"), $n = { elevation: 5, variant: "flat" }, lt = { cancelButtonColor: "default", cancelButtonSize: "x-small", cancelButtonTitle: "Cancel", cancelButtonVariant: "text", cancelIcon: void 0, cancelIconColor: "default", cardField: !1, cardOffsetX: 0, cardOffsetY: 0, cardProps: () => ({}), cell: !1, cellUnderlineFullWidth: !0, closeSiblings: !1, color: "primary", density: "compact", disabled: !1, displayAppendIcon: void 0, displayAppendIconColor: void 0, displayAppendIconSize: "x-small", displayAppendInnerIcon: void 0, displayAppendInnerIconColor: void 0, displayAppendInnerIconSize: "x-small", displayPrependIcon: void 0, displayPrependIconColor: void 0, displayPrependIconSize: "x-small", displayPrependInnerIcon: void 0, displayPrependInnerIconColor: void 0, displayPrependInnerIconSize: "x-small", emptyText: "empty", fieldOnly: !1, hideCancelIcon: !0, hideDetails: !0, label: "", loading: !1, loadingWait: !0, name: "", tableField: !0, underlineColor: "primary", underlineStyle: "dotted", underlineWidth: "2px", underlined: !0, valueColor: "default" }, Sl = { autofocus: !0 }, Mt = { hideCancelIcon: !1, hideSaveIcon: !1, loadingIcon: void 0, loadingIconColor: "primary", saveButtonColor: "primary", saveButtonSize: "x-small", saveButtonTitle: "Save", saveButtonVariant: "text", saveIcon: void 0, saveIconColor: "primary" }, Wo = { falseValue: !1, iconFalse: void 0, iconFalseColor: "danger", iconFalseTitle: "No", iconTrue: void 0, iconTrueColor: "success", iconTrueTitle: "Yes", icons: !0, trueValue: !0 }, mi = { ...lt, ...Wo, ...Mt, falseIcon: void 0, icons: !0, trueIcon: void 0 }, gi = { ...lt, ...Sl, ...Mt, clearIcon: void 0, clearable: !1, hideSelected: !0, itemTitle: "title", itemValue: "value", items: () => [], menu: !0, variant: "underlined" }, hi = { ...lt, ...Wo, icons: !0, falseIcon: "" }, bi = { ...Sl, ...Mt, ...lt, autoGrow: !0, rows: 1, truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, Mo = { ...lt, ...Sl, ...Mt, truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, Ci = { fa: { checkboxFalse: "$checkboxOff", checkboxTrue: "far fa-square-check", clear: "$clear", false: "$close", loading: "fa-circle-notch", save: "fa-floppy-disk", true: "$complete" }, mdi: { checkboxFalse: "$checkboxOff", checkboxTrue: "mdi:mdi-checkbox-outline", clear: "$clear", false: "$close", loading: "mdi-loading", save: "mdi-content-save", true: "$complete" } }, Le = (e) => {
  const { icon: t, iconOptions: n, name: l } = e;
  if (t)
    return t;
  const a = Ci[n == null ? void 0 : n.defaultSet];
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
const ue = Y({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component"), Pe = typeof window < "u", Bl = Pe && "IntersectionObserver" in window;
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
function En(e, t) {
  if (e === t)
    return !0;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t))
    return !1;
  const n = Object.keys(e);
  return n.length === Object.keys(t).length && n.every((l) => En(e[l], t[l]));
}
function Ue(e, t, n) {
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
    return function(a, i, d) {
      return a != null && i && typeof i == "string" ? a[i] !== void 0 ? a[i] : Nl(a, (i = (i = i.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), d) : d;
    }(e, t, n);
  if (Array.isArray(t))
    return Nl(e, t, n);
  if (typeof t != "function")
    return n;
  const l = t(e, n);
  return l === void 0 ? n : l;
}
function le(e) {
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
    t.some((d) => d instanceof RegExp ? d.test(i) : d === i) && !(n != null && n.some((d) => d === i)) ? l[i] = e[i] : a[i] = e[i];
  return [l, a];
}
function gn(e, t) {
  const n = { ...e };
  return t.forEach((l) => delete n[l]), n;
}
const No = /^on[^a-z]/, ol = (e) => No.test(e), Ii = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function ot(e) {
  const [t, n] = Gl(e, [No]), l = gn(t, Ii), [a, i] = Gl(n, ["class", "style", "id", /^data-/]);
  return Object.assign(a, t), Object.assign(i, l), [a, i];
}
function He(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function kn(e) {
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
    const i = e[a], d = t[a];
    ll(i) && ll(d) ? l[a] = Bn(i, d, n) : Array.isArray(i) && Array.isArray(d) && n ? l[a] = n(i, d) : l[a] = d;
  }
  return l;
}
function jo(e) {
  return e.map((t) => t.type === fe ? jo(t.children) : t).flat();
}
function rn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (rn.cache.has(e))
    return rn.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return rn.cache.set(e, t), t;
}
function St(e, t) {
  if (!t || typeof t != "object")
    return [];
  if (Array.isArray(t))
    return t.map((n) => St(e, n)).flat(1);
  if (Array.isArray(t.children))
    return t.children.map((n) => St(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertySymbols(t.component.provides).includes(e))
      return [t.component];
    if (t.component.subTree)
      return St(e, t.component.subTree).flat(1);
  }
  return [];
}
function xl(e) {
  const t = Me({}), n = v(e);
  return Ne(() => {
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
rn.cache = /* @__PURE__ */ new Map();
const Re = () => [Function, Array];
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
  var l, a, i, d;
  const n = al(e);
  if (t)
    if (t === "first")
      (l = n[0]) == null || l.focus();
    else if (t === "last")
      (a = n.at(-1)) == null || a.focus();
    else if (typeof t == "number")
      (i = n[t]) == null || i.focus();
    else {
      const c = qo(n, t);
      c ? c.focus() : Vt(e, t === "next" ? "first" : "last");
    }
  else
    e !== document.activeElement && e.contains(document.activeElement) || ((d = n[0]) == null || d.focus());
}
function At(e, t) {
  if (!(Pe && typeof CSS < "u" && CSS.supports !== void 0 && CSS.supports(`selector(${t})`)))
    return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function Uo(e) {
  return e.some((t) => !ri(t) || t.type !== si && (t.type !== fe || Uo(t.children))) ? e : null;
}
const Ho = ["top", "bottom"], Si = ["start", "end", "left", "right"];
function il(e, t) {
  let [n, l] = e.split(" ");
  return l || (l = Ft(Ho, n) ? "start" : Ft(Si, n) ? "top" : "center"), { side: Yl(n, t), align: Yl(l, t) };
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
class sn {
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
  return Array.isArray(e) ? new sn({ x: e[0], y: e[1], width: 0, height: 0 }) : e.getBoundingClientRect();
}
function kl(e) {
  const t = e.getBoundingClientRect(), n = getComputedStyle(e), l = n.transform;
  if (l) {
    let a, i, d, c, u;
    if (l.startsWith("matrix3d("))
      a = l.slice(9, -1).split(/, /), i = +a[0], d = +a[5], c = +a[12], u = +a[13];
    else {
      if (!l.startsWith("matrix("))
        return new sn(t);
      a = l.slice(7, -1).split(/, /), i = +a[0], d = +a[3], c = +a[4], u = +a[5];
    }
    const o = n.transformOrigin, s = t.x - c - (1 - i) * parseFloat(o), y = t.y - u - (1 - d) * parseFloat(o.slice(o.indexOf(" ") + 1)), f = i ? t.width / i : e.offsetWidth + 1, g = d ? t.height / d : e.offsetHeight + 1;
    return new sn({ x: s, y, width: f, height: g });
  }
  return new sn(t);
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
const ht = /* @__PURE__ */ new WeakMap(), Sn = 2.4, Zl = 0.2126729, Ql = 0.7151522, eo = 0.072175, Bi = 0.55, xi = 0.58, ki = 0.57, wi = 0.62, bt = 0.03, no = 1.45, Fi = 5e-4, Vi = 1.25, Ai = 1.25, to = 0.078, lo = 12.82051282051282, Ct = 0.06, oo = 1e-3;
function ao(e, t) {
  const n = (e.r / 255) ** Sn, l = (e.g / 255) ** Sn, a = (e.b / 255) ** Sn, i = (t.r / 255) ** Sn, d = (t.g / 255) ** Sn, c = (t.b / 255) ** Sn;
  let u, o = n * Zl + l * Ql + a * eo, s = i * Zl + d * Ql + c * eo;
  if (o <= bt && (o += (bt - o) ** no), s <= bt && (s += (bt - s) ** no), Math.abs(s - o) < Fi)
    return 0;
  if (s > o) {
    const y = (s ** Bi - o ** xi) * Vi;
    u = y < oo ? 0 : y < to ? y - y * lo * Ct : y - Ct;
  } else {
    const y = (s ** wi - o ** ki) * Ai;
    u = y > -oo ? 0 : y > -to ? y - y * lo * Ct : y + Ct;
  }
  return 100 * u;
}
function Jn(e) {
  Lt(`Vuetify: ${e}`);
}
function Jt(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
const io = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, _i = { rgb: (e, t, n, l) => ({ r: e, g: t, b: n, a: l }), rgba: (e, t, n, l) => ({ r: e, g: t, b: n, a: l }), hsl: (e, t, n, l) => ro({ h: e, s: t, l: n, a: l }), hsla: (e, t, n, l) => ro({ h: e, s: t, l: n, a: l }), hsv: (e, t, n, l) => Zn({ h: e, s: t, v: n, a: l }), hsva: (e, t, n, l) => Zn({ h: e, s: t, v: n, a: l }) };
function Yn(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && Jn(`'${e}' is not a valid hex color`), { r: (16711680 & e) >> 16, g: (65280 & e) >> 8, b: 255 & e };
  if (typeof e == "string" && io.test(e)) {
    const { groups: t } = e.match(io), { fn: n, values: l } = t, a = l.split(/,\s*/).map((i) => i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(i) / 100 : parseFloat(i));
    return _i[n](...a);
  }
  if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((l) => l + l).join("") : [6, 8].includes(t.length) || Jn(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && Jn(`'${e}' is not a valid hex(a) color`), function(l) {
      l = function(u) {
        return u.startsWith("#") && (u = u.slice(1)), u = u.replace(/([^0-9a-f])/gi, "F"), (u.length === 3 || u.length === 4) && (u = u.split("").map((o) => o + o).join("")), u.length !== 6 && (u = ql(ql(u, 6), 8, "F")), u;
      }(l);
      let [a, i, d, c] = function(u) {
        let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        const s = [];
        let y = 0;
        for (; y < u.length; )
          s.push(u.substr(y, o)), y += o;
        return s;
      }(l, 2).map((u) => parseInt(u, 16));
      return c = c === void 0 ? c : c / 255, { r: a, g: i, b: d, a: c };
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
  const { h: t, s: n, v: l, a } = e, i = (c) => {
    const u = (c + t / 60) % 6;
    return l - l * n * Math.max(Math.min(u, 4 - u, 1), 0);
  }, d = [i(5), i(3), i(1)].map((c) => Math.round(255 * c));
  return { r: d[0], g: d[1], b: d[2], a };
}
function ro(e) {
  return Zn(Xo(e));
}
function Xo(e) {
  const { h: t, s: n, l, a } = e, i = l + n * Math.min(l, 1 - l);
  return { h: t, s: i === 0 ? 0 : 2 - 2 * l / i, v: i, a };
}
const _t = Symbol.for("vuetify:defaults");
function wl() {
  const e = se(_t);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Tn(e, t) {
  const n = wl(), l = W(e), a = v(() => {
    if (r(t == null ? void 0 : t.disabled))
      return n.value;
    const i = r(t == null ? void 0 : t.scoped), d = r(t == null ? void 0 : t.reset), c = r(t == null ? void 0 : t.root);
    if (l.value == null && !(i || d || c))
      return n.value;
    let u = Bn(l.value, { prev: n.value });
    if (i)
      return u;
    if (d || c) {
      const o = Number(d || 1 / 0);
      for (let s = 0; s <= o && u && "prev" in u; s++)
        u = u.prev;
      return u && typeof c == "string" && c in u && (u = Bn(Bn(u, { prev: u }), u[c])), u;
    }
    return u.prev ? Bn(u.prev, u) : u;
  });
  return De(_t, a), a;
}
function Oi() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : wl();
  const l = Ce("useDefaults");
  if (t = t ?? l.type.name ?? l.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const a = v(() => {
    var c;
    return (c = n.value) == null ? void 0 : c[e._as ?? t];
  }), i = new Proxy(e, { get(c, u) {
    var s, y, f, g;
    const o = Reflect.get(c, u);
    return u === "class" || u === "style" ? [(s = a.value) == null ? void 0 : s[u], o].filter((m) => m != null) : typeof u != "string" || function(m, h) {
      var b, S;
      return ((b = m.props) == null ? void 0 : b[h]) !== void 0 || ((S = m.props) == null ? void 0 : S[rn(h)]) !== void 0;
    }(l.vnode, u) ? o : ((y = a.value) == null ? void 0 : y[u]) ?? ((g = (f = n.value) == null ? void 0 : f.global) == null ? void 0 : g[u]) ?? o;
  } }), d = re();
  return Ne(() => {
    if (a.value) {
      const c = Object.entries(a.value).filter((u) => {
        let [o] = u;
        return o.startsWith(o[0].toUpperCase());
      });
      d.value = c.length ? Object.fromEntries(c) : void 0;
    } else
      d.value = void 0;
  }), { props: i, provideSubDefaults: function() {
    const c = function(u) {
      let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ce("injectSelf");
      const { provides: s } = o;
      if (s && u in s)
        return s[u];
    }(_t, l);
    De(_t, v(() => d.value ? Bn((c == null ? void 0 : c.value) ?? {}, d.value) : c == null ? void 0 : c.value));
  } };
}
function Qn(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return Jn("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = Y(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(n) {
      return Ro(n, t);
    }, e.props._as = String, e.setup = function(n, l) {
      const a = wl();
      if (!a.value)
        return e._setup(n, l);
      const { props: i, provideSubDefaults: d } = Oi(n, n._as ?? e.name, a), c = e._setup(i, l);
      return d(), c;
    };
  }
  return e;
}
function ee() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (t) => (e ? Qn : je)(t);
}
function at(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return ee()({ name: n ?? To(zo(e.replace(/__/g, "-"))), props: { tag: { type: String, default: t }, ...ue() }, setup(l, a) {
    let { slots: i } = a;
    return () => {
      var d;
      return Wt(l.tag, { class: [e, l.class], style: l.style }, (d = i.default) == null ? void 0 : d.call(i));
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
function Ce(e, t) {
  const n = ui();
  if (!n)
    throw new Error(`[Vuetify] ${e} ${t || "must be called from inside a setup function"}`);
  return n;
}
function Ge() {
  const e = Ce(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return rn((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let Jo = 0, Bt = /* @__PURE__ */ new WeakMap();
function We() {
  const e = Ce("getUid");
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
    if (t ? Pi(e) : Fl(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Pt(e, t) {
  const n = [];
  if (t && e && !t.contains(e))
    return n;
  for (; e && (Fl(e) && n.push(e), e !== t); )
    e = e.parentElement;
  return n;
}
function Fl(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const t = window.getComputedStyle(e);
  return t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function Pi(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function ae(e) {
  Ce("useRender").render = e;
}
function Vl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = W(), l = W();
  if (Pe) {
    const a = new ResizeObserver((i) => {
      e == null || e(i, a), i.length && (l.value = t === "content" ? i[0].contentRect : i[0].target.getBoundingClientRect());
    });
    Je(() => {
      a.disconnect();
    }), K(n, (i, d) => {
      d && (a.unobserve(wt(d)), l.value = void 0), i && a.observe(wt(i));
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: hl(l) };
}
function un(e, t) {
  let n;
  function l() {
    n = bl(), n.run(() => t.length ? t(() => {
      n == null || n.stop(), l();
    }) : t());
  }
  K(e, (a) => {
    a && !n ? l() : a || (n == null || n.stop(), n = void 0);
  }, { immediate: !0 }), Ae(() => {
    n == null || n.stop();
  });
}
function ge(e, t, n) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (s) => s, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (s) => s;
  const i = Ce("useProxiedModel"), d = W(e[t] !== void 0 ? e[t] : n), c = rn(t), u = v(c !== t ? () => {
    var s, y, f, g;
    return e[t], !(!((s = i.vnode.props) != null && s.hasOwnProperty(t)) && !((y = i.vnode.props) != null && y.hasOwnProperty(c)) || !((f = i.vnode.props) != null && f.hasOwnProperty(`onUpdate:${t}`)) && !((g = i.vnode.props) != null && g.hasOwnProperty(`onUpdate:${c}`)));
  } : () => {
    var s, y;
    return e[t], !(!((s = i.vnode.props) != null && s.hasOwnProperty(t)) || !((y = i.vnode.props) != null && y.hasOwnProperty(`onUpdate:${t}`)));
  });
  un(() => !u.value, () => {
    K(() => e[t], (s) => {
      d.value = s;
    });
  });
  const o = v({ get() {
    const s = e[t];
    return l(u.value ? s : d.value);
  }, set(s) {
    const y = a(s), f = ln(u.value ? e[t] : d.value);
    f !== y && l(f) !== s && (d.value = y, i == null || i.emit(`update:${t}`, y));
  } });
  return Object.defineProperty(o, "externalValue", { get: () => u.value ? e[t] : d.value }), o;
}
We.reset = () => {
  Jo = 0, Bt = /* @__PURE__ */ new WeakMap();
};
const Qo = Symbol.for("vuetify:locale");
function Al() {
  const e = se(Qo);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function it() {
  const e = se(Qo);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const so = Symbol.for("vuetify:theme"), Be = Y({ theme: String }, "theme");
function Oe(e) {
  Ce("provideTheme");
  const t = se(so, null);
  if (!t)
    throw new Error("Could not find Vuetify theme injection");
  const n = v(() => e.theme ?? t.name.value), l = v(() => t.themes.value[n.value]), a = v(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), i = { ...t, name: n, current: l, themeClasses: a };
  return De(so, i), i;
}
const ze = Y({ tag: { type: String, default: "div" } }, "tag"), $i = Y({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function $e(e, t, n) {
  return ee()({ name: e, props: $i({ mode: n, origin: t }), setup(l, a) {
    let { slots: i } = a;
    const d = { onBeforeEnter(c) {
      l.origin && (c.style.transformOrigin = l.origin);
    }, onLeave(c) {
      if (l.leaveAbsolute) {
        const { offsetTop: u, offsetLeft: o, offsetWidth: s, offsetHeight: y } = c;
        c._transitionInitialStyles = { position: c.style.position, top: c.style.top, left: c.style.left, width: c.style.width, height: c.style.height }, c.style.position = "absolute", c.style.top = `${u}px`, c.style.left = `${o}px`, c.style.width = `${s}px`, c.style.height = `${y}px`;
      }
      l.hideOnLeave && c.style.setProperty("display", "none", "important");
    }, onAfterLeave(c) {
      if (l.leaveAbsolute && (c != null && c._transitionInitialStyles)) {
        const { position: u, top: o, left: s, width: y, height: f } = c._transitionInitialStyles;
        delete c._transitionInitialStyles, c.style.position = u || "", c.style.top = o || "", c.style.left = s || "", c.style.width = y || "", c.style.height = f || "";
      }
    } };
    return () => {
      const c = l.group ? ci : cn;
      return Wt(c, { name: l.disabled ? "" : e, css: !l.disabled, ...l.group ? void 0 : { mode: l.mode }, ...l.disabled ? {} : d }, i.default);
    };
  } });
}
function ea(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return ee()({ name: e, props: { mode: { type: String, default: n }, disabled: Boolean }, setup(l, a) {
    let { slots: i } = a;
    return () => Wt(cn, { name: l.disabled ? "" : e, css: !l.disabled, ...l.disabled ? {} : t }, i.default);
  } });
}
function na() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", n = zo(`offset-${t}`);
  return { onBeforeEnter(i) {
    i._parent = i.parentNode, i._initialStyle = { transition: i.style.transition, overflow: i.style.overflow, [t]: i.style[t] };
  }, onEnter(i) {
    const d = i._initialStyle;
    i.style.setProperty("transition", "none", "important"), i.style.overflow = "hidden";
    const c = `${i[n]}px`;
    i.style[t] = "0", i.offsetHeight, i.style.transition = d.transition, e && i._parent && i._parent.classList.add(e), requestAnimationFrame(() => {
      i.style[t] = c;
    });
  }, onAfterEnter: a, onEnterCancelled: a, onLeave(i) {
    i._initialStyle = { transition: "", overflow: i.style.overflow, [t]: i.style[t] }, i.style.overflow = "hidden", i.style[t] = `${i[n]}px`, i.offsetHeight, requestAnimationFrame(() => i.style[t] = "0");
  }, onAfterLeave: l, onLeaveCancelled: l };
  function l(i) {
    e && i._parent && i._parent.classList.remove(e), a(i);
  }
  function a(i) {
    const d = i._initialStyle[t];
    i.style.overflow = i._initialStyle.overflow, d != null && (i.style[t] = d), delete i._initialStyle;
  }
}
const Ei = Y({ target: [Object, Array] }, "v-dialog-transition"), ta = ee()({ name: "VDialogTransition", props: Ei(), setup(e, t) {
  let { slots: n } = t;
  const l = { onBeforeEnter(a) {
    a.style.pointerEvents = "none", a.style.visibility = "hidden";
  }, async onEnter(a, i) {
    var f;
    await new Promise((g) => requestAnimationFrame(g)), await new Promise((g) => requestAnimationFrame(g)), a.style.visibility = "";
    const { x: d, y: c, sx: u, sy: o, speed: s } = co(e.target, a), y = xn(a, [{ transform: `translate(${d}px, ${c}px) scale(${u}, ${o})`, opacity: 0 }, {}], { duration: 225 * s, easing: "cubic-bezier(0.0, 0, 0.2, 1)" });
    (f = uo(a)) == null || f.forEach((g) => {
      xn(g, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * s, easing: Ot });
    }), y.finished.then(() => i());
  }, onAfterEnter(a) {
    a.style.removeProperty("pointer-events");
  }, onBeforeLeave(a) {
    a.style.pointerEvents = "none";
  }, async onLeave(a, i) {
    var y;
    await new Promise((f) => requestAnimationFrame(f));
    const { x: d, y: c, sx: u, sy: o, speed: s } = co(e.target, a);
    xn(a, [{}, { transform: `translate(${d}px, ${c}px) scale(${u}, ${o})`, opacity: 0 }], { duration: 125 * s, easing: "cubic-bezier(0.4, 0, 1, 1)" }).finished.then(() => i()), (y = uo(a)) == null || y.forEach((f) => {
      xn(f, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * s, easing: Ot });
    });
  }, onAfterLeave(a) {
    a.style.removeProperty("pointer-events");
  } };
  return () => e.target ? p(cn, Z({ name: "dialog-transition" }, l, { css: !1 }), n) : p(cn, { name: "dialog-transition" }, n);
} });
function uo(e) {
  var n;
  const t = (n = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : n.children;
  return t && [...t];
}
function co(e, t) {
  const n = Yo(e), l = kl(t), [a, i] = getComputedStyle(t).transformOrigin.split(" ").map((S) => parseFloat(S)), [d, c] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let u = n.left + n.width / 2;
  d === "left" || c === "left" ? u -= n.width / 2 : d !== "right" && c !== "right" || (u += n.width / 2);
  let o = n.top + n.height / 2;
  d === "top" || c === "top" ? o -= n.height / 2 : d !== "bottom" && c !== "bottom" || (o += n.height / 2);
  const s = n.width / l.width, y = n.height / l.height, f = Math.max(1, s, y), g = s / f || 0, m = y / f || 0, h = l.width * l.height / (window.innerWidth * window.innerHeight), b = h > 0.12 ? Math.min(1.5, 10 * (h - 0.12) + 1) : 1;
  return { x: u - (a + l.left), y: o - (i + l.top), sx: g, sy: m, speed: b };
}
$e("fab-transition", "center center", "out-in"), $e("dialog-bottom-transition"), $e("dialog-top-transition"), $e("fade-transition");
const Ti = $e("scale-transition");
$e("scroll-x-transition"), $e("scroll-x-reverse-transition"), $e("scroll-y-transition"), $e("scroll-y-reverse-transition"), $e("slide-x-transition"), $e("slide-x-reverse-transition");
const la = $e("slide-y-transition");
$e("slide-y-reverse-transition");
const zi = ea("expand-transition", na()), oa = ea("expand-x-transition", na("", !0)), Di = Y({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), ke = ee(!1)({ name: "VDefaultsProvider", props: Di(), setup(e, t) {
  let { slots: n } = t;
  const { defaults: l, disabled: a, reset: i, root: d, scoped: c } = Eo(e);
  return Tn(l, { reset: i, root: d, scoped: c, disabled: a }), () => {
    var u;
    return (u = n.default) == null ? void 0 : u.call(n);
  };
} }), hn = Y({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function bn(e) {
  return { dimensionStyles: v(() => ({ height: le(e.height), maxHeight: le(e.maxHeight), maxWidth: le(e.maxWidth), minHeight: le(e.minHeight), minWidth: le(e.minWidth), width: le(e.width) })) };
}
const aa = Y({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...ue(), ...hn() }, "VResponsive"), po = ee()({ name: "VResponsive", props: aa(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: l } = function(i) {
    return { aspectStyles: v(() => {
      const d = Number(i.aspectRatio);
      return d ? { paddingBottom: String(1 / d * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: a } = bn(e);
  return ae(() => {
    var i;
    return p("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [a.value, e.style] }, [p("div", { class: "v-responsive__sizer", style: l.value }, null), (i = n.additional) == null ? void 0 : i.call(n), n.default && p("div", { class: ["v-responsive__content", e.contentClass] }, [n.default()])]);
  }), {};
} }), rt = Y({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), tn = (e, t) => {
  let { slots: n } = t;
  const { transition: l, disabled: a, ...i } = e, { component: d = cn, ...c } = typeof l == "object" ? l : {};
  return Wt(d, Z(typeof l == "string" ? { name: a ? "" : l } : c, i, { disabled: a }), n);
};
function vo(e, t) {
  var l;
  const n = (l = e._observe) == null ? void 0 : l[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const _l = { mounted: function(e, t) {
  if (!Bl)
    return;
  const n = t.modifiers || {}, l = t.value, { handler: a, options: i } = typeof l == "object" ? l : { handler: l, options: {} }, d = new IntersectionObserver(function() {
    var y;
    let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], u = arguments.length > 1 ? arguments[1] : void 0;
    const o = (y = e._observe) == null ? void 0 : y[t.instance.$.uid];
    if (!o)
      return;
    const s = c.some((f) => f.isIntersecting);
    !a || n.quiet && !o.init || n.once && !s && !o.init || a(s, c, u), s && n.once ? vo(e, t) : o.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = { init: !1, observer: d }, d.observe(e);
}, unmounted: vo }, Li = Y({ alt: String, cover: Boolean, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...aa(), ...ue(), ...rt() }, "VImg"), ia = ee()({ name: "VImg", directives: { intersect: _l }, props: Li(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, t) {
  let { emit: n, slots: l } = t;
  const a = Ce("VImg"), i = re(""), d = W(), c = re(e.eager ? "loading" : "idle"), u = re(), o = re(), s = v(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), y = v(() => s.value.aspect || u.value / o.value || 0);
  function f(I) {
    if ((!e.eager || !I) && (!Bl || I || e.eager)) {
      if (c.value = "loading", s.value.lazySrc) {
        const O = new Image();
        O.src = s.value.lazySrc, S(O, null);
      }
      s.value.src && Ie(() => {
        var O;
        n("loadstart", ((O = d.value) == null ? void 0 : O.currentSrc) || s.value.src), setTimeout(() => {
          var C;
          if (!a.isUnmounted)
            if ((C = d.value) != null && C.complete) {
              if (d.value.naturalWidth || m(), c.value === "error")
                return;
              y.value || S(d.value, null), c.value === "loading" && g();
            } else
              y.value || S(d.value), h();
        });
      });
    }
  }
  function g() {
    var I;
    a.isUnmounted || (h(), S(d.value), c.value = "loaded", n("load", ((I = d.value) == null ? void 0 : I.currentSrc) || s.value.src));
  }
  function m() {
    var I;
    a.isUnmounted || (c.value = "error", n("error", ((I = d.value) == null ? void 0 : I.currentSrc) || s.value.src));
  }
  function h() {
    const I = d.value;
    I && (i.value = I.currentSrc || I.src);
  }
  K(() => e.src, () => {
    f(c.value !== "idle");
  }), K(y, (I, O) => {
    !I && O && d.value && S(d.value);
  }), Do(() => f());
  let b = -1;
  function S(I) {
    let O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const C = () => {
      if (clearTimeout(b), a.isUnmounted)
        return;
      const { naturalHeight: F, naturalWidth: V } = I;
      F || V ? (u.value = V, o.value = F) : I.complete || c.value !== "loading" || O == null ? (I.currentSrc.endsWith(".svg") || I.currentSrc.startsWith("data:image/svg+xml")) && (u.value = 1, o.value = 1) : b = window.setTimeout(C, O);
    };
    C();
  }
  Je(() => {
    clearTimeout(b);
  });
  const A = v(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), $ = () => {
    var C;
    if (!s.value.src || c.value === "idle")
      return null;
    const I = p("img", { class: ["v-img__img", A.value], style: { objectPosition: e.position }, src: s.value.src, srcset: s.value.srcset, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: d, onLoad: g, onError: m }, null), O = (C = l.sources) == null ? void 0 : C.call(l);
    return p(tn, { transition: e.transition, appear: !0 }, { default: () => [Fe(O ? p("picture", { class: "v-img__picture" }, [O, I]) : I, [[Vn, c.value === "loaded"]])] });
  }, q = () => p(tn, { transition: e.transition }, { default: () => [s.value.lazySrc && c.value !== "loaded" && p("img", { class: ["v-img__img", "v-img__img--preload", A.value], style: { objectPosition: e.position }, src: s.value.lazySrc, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), D = () => l.placeholder ? p(tn, { transition: e.transition, appear: !0 }, { default: () => [(c.value === "loading" || c.value === "error" && !l.error) && p("div", { class: "v-img__placeholder" }, [l.placeholder()])] }) : null, z = () => l.error ? p(tn, { transition: e.transition, appear: !0 }, { default: () => [c.value === "error" && p("div", { class: "v-img__error" }, [l.error()])] }) : null, j = () => e.gradient ? p("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, T = re(!1);
  {
    const I = K(y, (O) => {
      O && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          T.value = !0;
        });
      }), I());
    });
  }
  return ae(() => {
    const I = po.filterProps(e);
    return Fe(p(po, Z({ class: ["v-img", { "v-img--booting": !T.value }, e.class], style: [{ width: le(e.width === "auto" ? u.value : e.width) }, e.style] }, I, { aspectRatio: y.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => p(fe, null, [p($, null, null), p(q, null, null), p(j, null, null), p(D, null, null), p(z, null, null)]), default: l.default }), [[Ze("intersect"), { handler: f, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: i, image: d, state: c, naturalWidth: u, naturalHeight: o };
} }), zn = Y({ border: [Boolean, Number, String] }, "border");
function Dn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ge();
  return { borderClasses: v(() => {
    const n = pn(e) ? e.value : e.border, l = [];
    if (n === !0 || n === "")
      l.push(`${t}--border`);
    else if (typeof n == "string" || n === 0)
      for (const a of String(n).split(" "))
        l.push(`border-${a}`);
    return l;
  }) };
}
function Ol(e) {
  return xl(() => {
    const t = [], n = {};
    if (e.value.background)
      if (Jt(e.value.background)) {
        if (n.backgroundColor = e.value.background, !e.value.text && Jt(l = e.value.background) && !/^((rgb|hsl)a?\()?var\(--/.test(l)) {
          const a = Yn(e.value.background);
          if (a.a == null || a.a === 1) {
            const i = function(d) {
              const c = Math.abs(ao(Yn(0), Yn(d)));
              return Math.abs(ao(Yn(16777215), Yn(d))) > Math.min(c, 50) ? "#fff" : "#000";
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
  const n = v(() => ({ text: pn(e) ? e.value : t ? e[t] : null })), { colorClasses: l, colorStyles: a } = Ol(n);
  return { textColorClasses: l, textColorStyles: a };
}
function wn(e, t) {
  const n = v(() => ({ background: pn(e) ? e.value : t ? e[t] : null })), { colorClasses: l, colorStyles: a } = Ol(n);
  return { backgroundColorClasses: l, backgroundColorStyles: a };
}
const Ln = Y({ elevation: { type: [Number, String], validator(e) {
  const t = parseInt(e);
  return !isNaN(t) && t >= 0 && t <= 24;
} } }, "elevation");
function Wn(e) {
  return { elevationClasses: v(() => {
    const t = pn(e) ? e.value : e.elevation, n = [];
    return t == null || n.push(`elevation-${t}`), n;
  }) };
}
const Qe = Y({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function en(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ge();
  return { roundedClasses: v(() => {
    const n = pn(e) ? e.value : e.rounded, l = [];
    if (n === !0 || n === "")
      l.push(`${t}--rounded`);
    else if (typeof n == "string" || n === 0)
      for (const a of String(n).split(" "))
        l.push(`rounded-${a}`);
    return l;
  }) };
}
const Wi = [null, "default", "comfortable", "compact"], qe = Y({ density: { type: String, default: "default", validator: (e) => Wi.includes(e) } }, "density");
function nn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ge();
  return { densityClasses: v(() => `${t}--density-${e.density}`) };
}
const Mi = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function st(e, t) {
  return p(fe, null, [e && p("span", { key: "overlay", class: `${t}__overlay` }, null), p("span", { key: "underlay", class: `${t}__underlay` }, null)]);
}
const an = Y({ color: String, variant: { type: String, default: "elevated", validator: (e) => Mi.includes(e) } }, "variant");
function ut(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ge();
  const n = v(() => {
    const { variant: i } = r(e);
    return `${t}--variant-${i}`;
  }), { colorClasses: l, colorStyles: a } = Ol(v(() => {
    const { variant: i, color: d } = r(e);
    return { [["elevated", "flat"].includes(i) ? "background" : "text"]: d };
  }));
  return { colorClasses: l, colorStyles: a, variantClasses: n };
}
const ra = Y({ divided: Boolean, ...zn(), ...ue(), ...qe(), ...Ln(), ...Qe(), ...ze(), ...Be(), ...an() }, "VBtnGroup"), fo = ee()({ name: "VBtnGroup", props: ra(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = Oe(e), { densityClasses: a } = nn(e), { borderClasses: i } = Dn(e), { elevationClasses: d } = Wn(e), { roundedClasses: c } = en(e);
  Tn({ VBtn: { height: "auto", color: te(e, "color"), density: te(e, "density"), flat: !0, variant: te(e, "variant") } }), ae(() => p(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, l.value, i.value, a.value, d.value, c.value, e.class], style: e.style }, n));
} }), sa = Y({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), ua = Y({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function ca(e, t) {
  let n = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
  const l = Ce("useGroupItem");
  if (!l)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const a = We();
  De(Symbol.for(`${t.description}:id`), a);
  const i = se(t, null);
  if (!i) {
    if (!n)
      return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const d = te(e, "value"), c = v(() => !(!i.disabled.value && !e.disabled));
  i.register({ id: a, value: d, disabled: c }, l), Je(() => {
    i.unregister(a);
  });
  const u = v(() => i.isSelected(a)), o = v(() => u.value && [i.selectedClass.value, e.selectedClass]);
  return K(u, (s) => {
    l.emit("group:selected", { value: s });
  }), { id: a, isSelected: u, toggle: () => i.select(a, !u.value), select: (s) => i.select(a, s), selectedClass: o, value: d, disabled: c, group: i };
}
function da(e, t) {
  let n = !1;
  const l = Me([]), a = ge(e, "modelValue", [], (o) => o == null ? [] : yo(l, He(o)), (o) => {
    const s = function(y, f) {
      const g = [];
      return f.forEach((m) => {
        const h = y.findIndex((b) => b.id === m);
        if (~h) {
          const b = y[h];
          g.push(b.value != null ? b.value : h);
        }
      }), g;
    }(l, o);
    return e.multiple ? s : s[0];
  }), i = Ce("useGroup");
  function d() {
    const o = l.find((s) => !s.disabled);
    o && e.mandatory === "force" && !a.value.length && (a.value = [o.id]);
  }
  function c(o) {
    if (e.multiple && Jn('This method is not supported when using "multiple" prop'), a.value.length) {
      const s = a.value[0], y = l.findIndex((m) => m.id === s);
      let f = (y + o) % l.length, g = l[f];
      for (; g.disabled && f !== y; )
        f = (f + o) % l.length, g = l[f];
      if (g.disabled)
        return;
      a.value = [l[f].id];
    } else {
      const s = l.find((y) => !y.disabled);
      s && (a.value = [s.id]);
    }
  }
  An(() => {
    d();
  }), Je(() => {
    n = !0;
  });
  const u = { register: function(o, s) {
    const y = o, f = St(Symbol.for(`${t.description}:id`), i == null ? void 0 : i.vnode).indexOf(s);
    f > -1 ? l.splice(f, 0, y) : l.push(y);
  }, unregister: function(o) {
    if (n)
      return;
    d();
    const s = l.findIndex((y) => y.id === o);
    l.splice(s, 1);
  }, selected: a, select: function(o, s) {
    const y = l.find((f) => f.id === o);
    if (!s || !(y != null && y.disabled))
      if (e.multiple) {
        const f = a.value.slice(), g = f.findIndex((h) => h === o), m = ~g;
        if (s = s ?? !m, m && e.mandatory && f.length <= 1 || !m && e.max != null && f.length + 1 > e.max)
          return;
        g < 0 && s ? f.push(o) : g >= 0 && !s && f.splice(g, 1), a.value = f;
      } else {
        const f = a.value.includes(o);
        if (e.mandatory && f)
          return;
        a.value = s ?? !f ? [o] : [];
      }
  }, disabled: te(e, "disabled"), prev: () => c(l.length - 1), next: () => c(1), isSelected: (o) => a.value.includes(o), selectedClass: v(() => e.selectedClass), items: v(() => l), getItemIndex: (o) => function(s, y) {
    const f = yo(s, [y]);
    return f.length ? s.findIndex((g) => g.id === f[0]) : -1;
  }(l, o) };
  return De(t, u), u;
}
function yo(e, t) {
  const n = [];
  return t.forEach((l) => {
    const a = e.find((d) => En(l, d.value)), i = e[l];
    (a == null ? void 0 : a.value) != null ? n.push(a.id) : i != null && n.push(i.id);
  }), n;
}
const pa = Symbol.for("vuetify:v-btn-toggle"), Ri = Y({ ...ra(), ...sa() }, "VBtnToggle");
ee()({ name: "VBtnToggle", props: Ri(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: l, next: a, prev: i, select: d, selected: c } = da(e, pa);
  return ae(() => {
    const u = fo.filterProps(e);
    return p(fo, Z({ class: ["v-btn-toggle", e.class] }, u, { style: e.style }), { default: () => {
      var o;
      return [(o = n.default) == null ? void 0 : o.call(n, { isSelected: l, next: a, prev: i, select: d, selected: c })];
    } });
  }), { next: a, prev: i, select: d };
} });
const de = [String, Function, Object, Array], Ni = Symbol.for("vuetify:icons"), $t = Y({ icon: { type: de }, tag: { type: String, required: !0 } }, "icon"), mo = ee()({ name: "VComponentIcon", props: $t(), setup(e, t) {
  let { slots: n } = t;
  return () => {
    const l = e.icon;
    return p(e.tag, null, { default: () => {
      var a;
      return [e.icon ? p(l, null, null) : (a = n.default) == null ? void 0 : a.call(n)];
    } });
  };
} }), ji = Qn({ name: "VSvgIcon", inheritAttrs: !1, props: $t(), setup(e, t) {
  let { attrs: n } = t;
  return () => p(e.tag, Z(n, { style: null }), { default: () => [p("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((l) => Array.isArray(l) ? p("path", { d: l[0], "fill-opacity": l[1] }, null) : p("path", { d: l }, null)) : p("path", { d: e.icon }, null)])] });
} });
Qn({ name: "VLigatureIcon", props: $t(), setup: (e) => () => p(e.tag, null, { default: () => [e.icon] }) }), Qn({ name: "VClassIcon", props: $t(), setup: (e) => () => p(e.tag, { class: e.icon }, null) });
const Gi = ["x-small", "small", "default", "large", "x-large"], ct = Y({ size: { type: [String, Number], default: "default" } }, "size");
function dt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ge();
  return xl(() => {
    let n, l;
    return Ft(Gi, e.size) ? n = `${t}--size-${e.size}` : e.size && (l = { width: le(e.size), height: le(e.size) }), { sizeClasses: n, sizeStyles: l };
  });
}
const qi = Y({ color: String, start: Boolean, end: Boolean, icon: de, ...ue(), ...ct(), ...ze({ tag: "i" }), ...Be() }, "VIcon"), pe = ee()({ name: "VIcon", props: qi(), setup(e, t) {
  let { attrs: n, slots: l } = t;
  const a = W(), { themeClasses: i } = Oe(e), { iconData: d } = ((s) => {
    const y = se(Ni);
    if (!y)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: v(() => {
      var b;
      const f = r(s);
      if (!f)
        return { component: mo };
      let g = f;
      if (typeof g == "string" && (g = g.trim(), g.startsWith("$") && (g = (b = y.aliases) == null ? void 0 : b[g.slice(1)])), !g)
        throw new Error(`Could not find aliased icon "${f}"`);
      if (Array.isArray(g))
        return { component: ji, icon: g };
      if (typeof g != "string")
        return { component: mo, icon: g };
      const m = Object.keys(y.sets).find((S) => typeof g == "string" && g.startsWith(`${S}:`)), h = m ? g.slice(m.length + 1) : g;
      return { component: y.sets[m ?? y.defaultSet].component, icon: h };
    }) };
  })(v(() => a.value || e.icon)), { sizeClasses: c } = dt(e), { textColorClasses: u, textColorStyles: o } = Ke(te(e, "color"));
  return ae(() => {
    var y, f;
    const s = (y = l.default) == null ? void 0 : y.call(l);
    return s && (a.value = (f = jo(s).filter((g) => g.type === di && g.children && typeof g.children == "string")[0]) == null ? void 0 : f.children), p(d.value.component, { tag: e.tag, icon: d.value.icon, class: ["v-icon", "notranslate", i.value, c.value, u.value, { "v-icon--clickable": !!n.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [c.value ? void 0 : { fontSize: le(e.size), height: le(e.size), width: le(e.size) }, o.value, e.style], role: n.onClick ? "button" : void 0, "aria-hidden": !n.onClick }, { default: () => [s] });
  }), {};
} });
function va(e, t) {
  const n = W(), l = re(!1);
  if (Bl) {
    const a = new IntersectionObserver((i) => {
      e == null || e(i, a), l.value = !!i.find((d) => d.isIntersecting);
    }, t);
    Je(() => {
      a.disconnect();
    }), K(n, (i, d) => {
      d && (a.unobserve(d), l.value = !1), i && a.observe(i);
    }, { flush: "post" });
  }
  return { intersectionRef: n, isIntersecting: l };
}
const Ui = Y({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...ue(), ...ct(), ...ze({ tag: "div" }), ...Be() }, "VProgressCircular"), fa = ee()({ name: "VProgressCircular", props: Ui(), setup(e, t) {
  let { slots: n } = t;
  const l = 2 * Math.PI * 20, a = W(), { themeClasses: i } = Oe(e), { sizeClasses: d, sizeStyles: c } = dt(e), { textColorClasses: u, textColorStyles: o } = Ke(te(e, "color")), { textColorClasses: s, textColorStyles: y } = Ke(te(e, "bgColor")), { intersectionRef: f, isIntersecting: g } = va(), { resizeRef: m, contentRect: h } = Vl(), b = v(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), S = v(() => Number(e.width)), A = v(() => c.value ? Number(e.size) : h.value ? h.value.width : Math.max(S.value, 32)), $ = v(() => 20 / (1 - S.value / A.value) * 2), q = v(() => S.value / A.value * $.value), D = v(() => le((100 - b.value) / 100 * l));
  return Ne(() => {
    f.value = a.value, m.value = a.value;
  }), ae(() => p(e.tag, { ref: a, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": g.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, i.value, d.value, u.value, e.class], style: [c.value, o.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : b.value }, { default: () => [p("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${$.value} ${$.value}` }, [p("circle", { class: ["v-progress-circular__underlay", s.value], style: y.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": q.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), p("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": q.value, "stroke-dasharray": l, "stroke-dashoffset": D.value }, null)]), n.default && p("div", { class: "v-progress-circular__content" }, [n.default({ value: b.value })])] })), {};
} }), go = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, Pl = Y({ location: String }, "location");
function $l(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: l } = it();
  return { locationStyles: v(() => {
    if (!e.location)
      return {};
    const { side: i, align: d } = il(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, l.value);
    function c(o) {
      return n ? n(o) : 0;
    }
    const u = {};
    return i !== "center" && (t ? u[go[i]] = `calc(100% - ${c(i)}px)` : u[i] = 0), d !== "center" ? t ? u[go[d]] = `calc(100% - ${c(d)}px)` : u[d] = 0 : (i === "center" ? u.top = u.left = "50%" : u[{ top: "left", bottom: "left", left: "top", right: "top" }[i]] = "50%", u.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[i]), u;
  }) };
}
const Hi = Y({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...ue(), ...Pl({ location: "top" }), ...Qe(), ...ze(), ...Be() }, "VProgressLinear"), Yi = ee()({ name: "VProgressLinear", props: Hi(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = ge(e, "modelValue"), { isRtl: a, rtlClasses: i } = it(), { themeClasses: d } = Oe(e), { locationStyles: c } = $l(e), { textColorClasses: u, textColorStyles: o } = Ke(e, "color"), { backgroundColorClasses: s, backgroundColorStyles: y } = wn(v(() => e.bgColor || e.color)), { backgroundColorClasses: f, backgroundColorStyles: g } = wn(e, "color"), { roundedClasses: m } = en(e), { intersectionRef: h, isIntersecting: b } = va(), S = v(() => parseInt(e.max, 10)), A = v(() => parseInt(e.height, 10)), $ = v(() => parseFloat(e.bufferValue) / S.value * 100), q = v(() => parseFloat(l.value) / S.value * 100), D = v(() => a.value !== e.reverse), z = v(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), j = v(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function T(I) {
    if (!h.value)
      return;
    const { left: O, right: C, width: F } = h.value.getBoundingClientRect(), V = D.value ? F - I.clientX + (C - F) : I.clientX - O;
    l.value = Math.round(V / F * S.value);
  }
  return ae(() => p(e.tag, { ref: h, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && b.value, "v-progress-linear--reverse": D.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, m.value, d.value, i.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? le(A.value) : 0, "--v-progress-linear-height": le(A.value), ...c.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : q.value, onClick: e.clickable && T }, { default: () => [e.stream && p("div", { key: "stream", class: ["v-progress-linear__stream", u.value], style: { ...o.value, [D.value ? "left" : "right"]: le(-A.value), borderTop: `${le(A.value / 2)} dotted`, opacity: j.value, top: `calc(50% - ${le(A.value / 4)})`, width: le(100 - $.value, "%"), "--v-progress-linear-stream-to": le(A.value * (D.value ? 1 : -1)) } }, null), p("div", { class: ["v-progress-linear__background", s.value], style: [y.value, { opacity: j.value, width: le(e.stream ? $.value : 100, "%") }] }, null), p(cn, { name: z.value }, { default: () => [e.indeterminate ? p("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((I) => p("div", { key: I, class: ["v-progress-linear__indeterminate", I, f.value], style: g.value }, null))]) : p("div", { class: ["v-progress-linear__determinate", f.value], style: [g.value, { width: le(q.value, "%") }] }, null)] }), n.default && p("div", { class: "v-progress-linear__content" }, [n.default({ value: q.value, buffer: $.value })])] })), {};
} }), El = Y({ loading: [Boolean, String] }, "loader");
function Rt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ge();
  return { loaderClasses: v(() => ({ [`${t}--loading`]: e.loading })) };
}
function Tl(e, t) {
  var l;
  let { slots: n } = t;
  return p("div", { class: `${e.name}__loader` }, [((l = n.default) == null ? void 0 : l.call(n, { color: e.color, isActive: e.active })) || p(Yi, { absolute: e.absolute, active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const Xi = ["static", "relative", "fixed", "absolute", "sticky"], ya = Y({ position: { type: String, validator: (e) => Xi.includes(e) } }, "position");
function ma(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ge();
  return { positionClasses: v(() => e.position ? `${t}--${e.position}` : void 0) };
}
function Nt(e, t) {
  const n = pi("RouterLink"), l = v(() => !(!e.href && !e.to)), a = v(() => (l == null ? void 0 : l.value) || Hl(t, "click") || Hl(e, "click"));
  if (typeof n == "string")
    return { isLink: l, isClickable: a, href: te(e, "href") };
  const i = e.to ? n.useLink(e) : void 0, d = function() {
    const c = Ce("useRoute");
    return v(() => {
      var u;
      return (u = c == null ? void 0 : c.proxy) == null ? void 0 : u.$route;
    });
  }();
  return { isLink: l, isClickable: a, route: i == null ? void 0 : i.route, navigate: i == null ? void 0 : i.navigate, isActive: i && v(() => {
    var c, u, o;
    return e.exact ? d.value ? ((c = i.isExactActive) == null ? void 0 : c.value) && En(i.route.value.query, d.value.query) : (u = i.isExactActive) == null ? void 0 : u.value : (o = i.isActive) == null ? void 0 : o.value;
  }), href: v(() => e.to ? i == null ? void 0 : i.route.value.href : e.href) };
}
const jt = Y({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let Zt = !1;
const rl = Symbol("rippleStop"), Ki = 80;
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
  var g;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((g = t == null ? void 0 : t._ripple) != null && g.enabled))
    return;
  const l = document.createElement("span"), a = document.createElement("span");
  l.appendChild(a), l.className = "v-ripple__container", n.class && (l.className += ` ${n.class}`);
  const { radius: i, scale: d, x: c, y: u, centerX: o, centerY: s } = function(m, h) {
    var j;
    let b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, S = 0, A = 0;
    if (!ga(m)) {
      const T = h.getBoundingClientRect(), I = sl(m) ? m.touches[m.touches.length - 1] : m;
      S = I.clientX - T.left, A = I.clientY - T.top;
    }
    let $ = 0, q = 0.3;
    (j = h._ripple) != null && j.circle ? (q = 0.15, $ = h.clientWidth / 2, $ = b.center ? $ : $ + Math.sqrt((S - $) ** 2 + (A - $) ** 2) / 4) : $ = Math.sqrt(h.clientWidth ** 2 + h.clientHeight ** 2) / 2;
    const D = (h.clientWidth - 2 * $) / 2 + "px", z = (h.clientHeight - 2 * $) / 2 + "px";
    return { radius: $, scale: q, x: b.center ? D : S - $ + "px", y: b.center ? z : A - $ + "px", centerX: D, centerY: z };
  }(e, t, n), y = 2 * i + "px";
  a.className = "v-ripple__animation", a.style.width = y, a.style.height = y, t.appendChild(l);
  const f = window.getComputedStyle(t);
  f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), a.classList.add("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--visible"), ho(a, `translate(${c}, ${u}) scale3d(${d},${d},${d})`), a.dataset.activated = String(performance.now()), setTimeout(() => {
    a.classList.remove("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--in"), ho(a, `translate(${o}, ${s}) scale3d(1,1,1)`);
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
      var d;
      e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((d = n.parentNode) == null ? void 0 : d.parentNode) === e && e.removeChild(n.parentNode);
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
      }, Ki);
    } else
      Et.show(e, n, t);
  }
}
function bo(e) {
  e[rl] = !0;
}
function Ee(e) {
  const t = e.currentTarget;
  if (t != null && t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit)
      return t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, void (t._ripple.showTimer = window.setTimeout(() => {
        Ee(e);
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
  nt = !1, Ee(e);
}
function Sa(e) {
  nt && (nt = !1, Ee(e));
}
function Co(e, t, n) {
  const { value: l, modifiers: a } = t, i = ha(l);
  if (i || Et.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = a.center, e._ripple.circle = a.circle, ll(l) && l.class && (e._ripple.class = l.class), i && !n) {
    if (a.stop)
      return e.addEventListener("touchstart", bo, { passive: !0 }), void e.addEventListener("mousedown", bo);
    e.addEventListener("touchstart", et, { passive: !0 }), e.addEventListener("touchend", Ee, { passive: !0 }), e.addEventListener("touchmove", ba, { passive: !0 }), e.addEventListener("touchcancel", Ee), e.addEventListener("mousedown", et), e.addEventListener("mouseup", Ee), e.addEventListener("mouseleave", Ee), e.addEventListener("keydown", Ca), e.addEventListener("keyup", Ia), e.addEventListener("blur", Sa), e.addEventListener("dragstart", Ee, { passive: !0 });
  } else
    !i && n && Ba(e);
}
function Ba(e) {
  e.removeEventListener("mousedown", et), e.removeEventListener("touchstart", et), e.removeEventListener("touchend", Ee), e.removeEventListener("touchmove", ba), e.removeEventListener("touchcancel", Ee), e.removeEventListener("mouseup", Ee), e.removeEventListener("mouseleave", Ee), e.removeEventListener("keydown", Ca), e.removeEventListener("keyup", Ia), e.removeEventListener("dragstart", Ee), e.removeEventListener("blur", Sa);
}
const pt = { mounted: function(e, t) {
  Co(e, t, !1);
}, unmounted: function(e) {
  delete e._ripple, Ba(e);
}, updated: function(e, t) {
  t.value !== t.oldValue && Co(e, t, ha(t.oldValue));
} }, Ji = Y({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: pa }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: de, appendIcon: de, block: Boolean, slim: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...zn(), ...ue(), ...qe(), ...hn(), ...Ln(), ...ua(), ...El(), ...Pl(), ...ya(), ...Qe(), ...jt(), ...ct(), ...ze({ tag: "button" }), ...Be(), ...an({ variant: "elevated" }) }, "VBtn"), ul = ee()({ name: "VBtn", directives: { Ripple: pt }, props: Ji(), emits: { "group:selected": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { themeClasses: a } = Oe(e), { borderClasses: i } = Dn(e), { colorClasses: d, colorStyles: c, variantClasses: u } = ut(e), { densityClasses: o } = nn(e), { dimensionStyles: s } = bn(e), { elevationClasses: y } = Wn(e), { loaderClasses: f } = Rt(e), { locationStyles: g } = $l(e), { positionClasses: m } = ma(e), { roundedClasses: h } = en(e), { sizeClasses: b, sizeStyles: S } = dt(e), A = ca(e, e.symbol, !1), $ = Nt(e, n), q = v(() => {
    var I;
    return e.active !== void 0 ? e.active : $.isLink.value ? (I = $.isActive) == null ? void 0 : I.value : A == null ? void 0 : A.isSelected.value;
  }), D = v(() => (A == null ? void 0 : A.disabled.value) || e.disabled), z = v(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), j = v(() => {
    if (e.value !== void 0 && typeof e.value != "symbol")
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function T(I) {
    var O;
    D.value || $.isLink.value && (I.metaKey || I.ctrlKey || I.shiftKey || I.button !== 0 || n.target === "_blank") || ((O = $.navigate) == null || O.call($, I), A == null || A.toggle());
  }
  return function(I, O) {
    K(() => {
      var C;
      return (C = I.isActive) == null ? void 0 : C.value;
    }, (C) => {
      I.isLink.value && C && O && Ie(() => {
        O(!0);
      });
    }, { immediate: !0 });
  }($, A == null ? void 0 : A.select), ae(() => {
    var N, H;
    const I = $.isLink.value ? "a" : e.tag, O = !(!e.prependIcon && !l.prepend), C = !(!e.appendIcon && !l.append), F = !(!e.icon || e.icon === !0), V = (A == null ? void 0 : A.isSelected.value) && (!$.isLink.value || ((N = $.isActive) == null ? void 0 : N.value)) || !A || ((H = $.isActive) == null ? void 0 : H.value);
    return Fe(p(I, { type: I === "a" ? void 0 : "button", class: ["v-btn", A == null ? void 0 : A.selectedClass.value, { "v-btn--active": q.value, "v-btn--block": e.block, "v-btn--disabled": D.value, "v-btn--elevated": z.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, a.value, i.value, V ? d.value : void 0, o.value, y.value, f.value, m.value, h.value, b.value, u.value, e.class], style: [V ? c.value : void 0, s.value, g.value, S.value, e.style], disabled: D.value || void 0, href: $.href.value, onClick: T, value: j.value }, { default: () => {
      var E;
      return [st(!0, "v-btn"), !e.icon && O && p("span", { key: "prepend", class: "v-btn__prepend" }, [l.prepend ? p(ke, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, l.prepend) : p(pe, { key: "prepend-icon", icon: e.prependIcon }, null)]), p("span", { class: "v-btn__content", "data-no-activator": "" }, [!l.default && F ? p(pe, { key: "content-icon", icon: e.icon }, null) : p(ke, { key: "content-defaults", disabled: !F, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var B;
        return [((B = l.default) == null ? void 0 : B.call(l)) ?? e.text];
      } })]), !e.icon && C && p("span", { key: "append", class: "v-btn__append" }, [l.append ? p(ke, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, l.append) : p(pe, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && p("span", { key: "loader", class: "v-btn__loader" }, [((E = l.loader) == null ? void 0 : E.call(l)) ?? p(fa, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[Ze("ripple"), !D.value && e.ripple, null]]);
  }), {};
} }), Zi = Y({ text: String, clickable: Boolean, ...ue(), ...Be() }, "VLabel"), xa = ee()({ name: "VLabel", props: Zi(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => {
    var l;
    return p("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (l = n.default) == null ? void 0 : l.call(n)]);
  }), {};
} }), ka = Symbol.for("vuetify:selection-control-group"), wa = Y({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: de, trueIcon: de, ripple: { type: Boolean, default: !0 }, multiple: { type: Boolean, default: null }, name: String, readonly: { type: Boolean, default: null }, modelValue: null, type: String, valueComparator: { type: Function, default: En }, ...ue(), ...qe(), ...Be() }, "SelectionControlGroup"), Qi = Y({ ...wa({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup");
ee()({ name: "VSelectionControlGroup", props: Qi(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = ge(e, "modelValue"), a = We(), i = v(() => e.id || `v-selection-control-group-${a}`), d = v(() => e.name || i.value), c = /* @__PURE__ */ new Set();
  return De(ka, { modelValue: l, forceUpdate: () => {
    c.forEach((u) => u());
  }, onForceUpdate: (u) => {
    c.add(u), Ae(() => {
      c.delete(u);
    });
  } }), Tn({ [e.defaultsTarget]: { color: te(e, "color"), disabled: te(e, "disabled"), density: te(e, "density"), error: te(e, "error"), inline: te(e, "inline"), modelValue: l, multiple: v(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)), name: d, falseIcon: te(e, "falseIcon"), trueIcon: te(e, "trueIcon"), readonly: te(e, "readonly"), ripple: te(e, "ripple"), type: te(e, "type"), valueComparator: te(e, "valueComparator") } }), ae(() => {
    var u;
    return p("div", { class: ["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class], style: e.style, role: e.type === "radio" ? "radiogroup" : void 0 }, [(u = n.default) == null ? void 0 : u.call(n)]);
  }), {};
} });
const zl = Y({ label: String, baseColor: String, trueValue: null, falseValue: null, value: null, ...ue(), ...wa() }, "VSelectionControl"), Tt = ee()({ name: "VSelectionControl", directives: { Ripple: pt }, inheritAttrs: !1, props: zl(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { group: a, densityClasses: i, icon: d, model: c, textColorClasses: u, textColorStyles: o, backgroundColorClasses: s, backgroundColorStyles: y, trueValue: f } = function(D) {
    const z = se(ka, void 0), { densityClasses: j } = nn(D), T = ge(D, "modelValue"), I = v(() => D.trueValue !== void 0 ? D.trueValue : D.value === void 0 || D.value), O = v(() => D.falseValue !== void 0 && D.falseValue), C = v(() => !!D.multiple || D.multiple == null && Array.isArray(T.value)), F = v({ get() {
      const w = z ? z.modelValue.value : T.value;
      return C.value ? He(w).some((M) => D.valueComparator(M, I.value)) : D.valueComparator(w, I.value);
    }, set(w) {
      if (D.readonly)
        return;
      const M = w ? I.value : O.value;
      let R = M;
      C.value && (R = w ? [...He(T.value), M] : He(T.value).filter((U) => !D.valueComparator(U, I.value))), z ? z.modelValue.value = R : T.value = R;
    } }), { textColorClasses: V, textColorStyles: N } = Ke(v(() => {
      if (!D.error && !D.disabled)
        return F.value ? D.color : D.baseColor;
    })), { backgroundColorClasses: H, backgroundColorStyles: E } = wn(v(() => !F.value || D.error || D.disabled ? void 0 : D.color)), B = v(() => F.value ? D.trueIcon : D.falseIcon);
    return { group: z, densityClasses: j, trueValue: I, falseValue: O, model: F, textColorClasses: V, textColorStyles: N, backgroundColorClasses: H, backgroundColorStyles: E, icon: B };
  }(e), g = We(), m = v(() => e.id || `input-${g}`), h = re(!1), b = re(!1), S = W();
  function A(D) {
    h.value = !0, At(D.target, ":focus-visible") !== !1 && (b.value = !0);
  }
  function $() {
    h.value = !1, b.value = !1;
  }
  function q(D) {
    e.readonly && a && Ie(() => a.forceUpdate()), c.value = D.target.checked;
  }
  return a == null || a.onForceUpdate(() => {
    S.value && (S.value.checked = c.value);
  }), ae(() => {
    var I, O;
    const D = l.label ? l.label({ label: e.label, props: { for: m.value } }) : e.label, [z, j] = ot(n), T = p("input", Z({ ref: S, checked: c.value, disabled: !(!e.readonly && !e.disabled), id: m.value, onBlur: $, onFocus: A, onInput: q, "aria-disabled": !(!e.readonly && !e.disabled), type: e.type, value: f.value, name: e.name, "aria-checked": e.type === "checkbox" ? c.value : void 0 }, j), null);
    return p("div", Z({ class: ["v-selection-control", { "v-selection-control--dirty": c.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": h.value, "v-selection-control--focus-visible": b.value, "v-selection-control--inline": e.inline }, i.value, e.class] }, z, { style: e.style }), [p("div", { class: ["v-selection-control__wrapper", u.value], style: o.value }, [(I = l.default) == null ? void 0 : I.call(l, { backgroundColorClasses: s, backgroundColorStyles: y }), Fe(p("div", { class: ["v-selection-control__input"] }, [((O = l.input) == null ? void 0 : O.call(l, { model: c, textColorClasses: u, textColorStyles: o, backgroundColorClasses: s, backgroundColorStyles: y, inputNode: T, icon: d.value, props: { onFocus: A, onBlur: $, id: m.value } })) ?? p(fe, null, [d.value && p(pe, { key: "icon", icon: d.value }, null), T])]), [[Ze("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), D && p(xa, { for: m.value, clickable: !0, onClick: (C) => C.stopPropagation() }, { default: () => [D] })]);
  }), { isFocused: h, input: S };
} }), Fa = Y({ indeterminate: Boolean, indeterminateIcon: { type: de, default: "$checkboxIndeterminate" }, ...zl({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), cl = ee()({ name: "VCheckboxBtn", props: Fa(), emits: { "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = ge(e, "indeterminate"), a = ge(e, "modelValue");
  function i(u) {
    l.value && (l.value = !1);
  }
  const d = v(() => l.value ? e.indeterminateIcon : e.falseIcon), c = v(() => l.value ? e.indeterminateIcon : e.trueIcon);
  return ae(() => {
    const u = gn(Tt.filterProps(e), ["modelValue"]);
    return p(Tt, Z(u, { modelValue: a.value, "onUpdate:modelValue": [(o) => a.value = o, i], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: d.value, trueIcon: c.value, "aria-checked": l.value ? "mixed" : void 0 }), n);
  }), {};
} });
function Va(e) {
  const { t } = Al();
  return { InputIcon: function(n) {
    let { name: l } = n;
    const a = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[l], i = e[`onClick:${l}`], d = i && a ? t(`$vuetify.input.${a}`, e.label ?? "") : void 0;
    return p(pe, { icon: e[`${l}Icon`], "aria-label": d, onClick: i }, null);
  } };
}
const er = Y({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...ue(), ...rt({ transition: { component: la, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), nr = ee()({ name: "VMessages", props: er(), setup(e, t) {
  let { slots: n } = t;
  const l = v(() => He(e.messages)), { textColorClasses: a, textColorStyles: i } = Ke(v(() => e.color));
  return ae(() => p(tn, { transition: e.transition, tag: "div", class: ["v-messages", a.value, e.class], style: [i.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && l.value.map((d, c) => p("div", { class: "v-messages__message", key: `${c}-${l.value}` }, [n.message ? n.message({ message: d }) : d]))] })), {};
} }), Aa = Y({ focused: Boolean, "onUpdate:focused": Re() }, "focus");
function vt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ge();
  const n = ge(e, "focused");
  return { focusClasses: v(() => ({ [`${t}--focused`]: n.value })), isFocused: n, focus: function() {
    n.value = !0;
  }, blur: function() {
    n.value = !1;
  } };
}
const tr = Symbol.for("vuetify:form");
function _a() {
  return se(tr, null);
}
const lr = Y({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...Aa() }, "validation"), ft = Y({ id: String, appendIcon: de, centerAffix: { type: Boolean, default: !0 }, prependIcon: de, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Re(), "onClick:append": Re(), ...ue(), ...qe(), ...lr() }, "VInput"), on = ee()({ name: "VInput", props: { ...ft() }, emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l, emit: a } = t;
  const { densityClasses: i } = nn(e), { rtlClasses: d } = it(), { InputIcon: c } = Va(e), u = We(), o = v(() => e.id || `input-${u}`), s = v(() => `${o.value}-messages`), { errorMessages: y, isDirty: f, isDisabled: g, isReadonly: m, isPristine: h, isValid: b, isValidating: S, reset: A, resetValidation: $, validate: q, validationClasses: D } = function(T) {
    let I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ge(), O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : We();
    const C = ge(T, "modelValue"), F = v(() => T.validationValue === void 0 ? C.value : T.validationValue), V = _a(), N = W([]), H = re(!0), E = v(() => !(!He(C.value === "" ? null : C.value).length && !He(F.value === "" ? null : F.value).length)), B = v(() => !!(T.disabled ?? (V == null ? void 0 : V.isDisabled.value))), w = v(() => !!(T.readonly ?? (V == null ? void 0 : V.isReadonly.value))), M = v(() => {
      var X;
      return (X = T.errorMessages) != null && X.length ? He(T.errorMessages).concat(N.value).slice(0, Math.max(0, +T.maxErrors)) : N.value;
    }), R = v(() => {
      let X = (T.validateOn ?? (V == null ? void 0 : V.validateOn.value)) || "input";
      X === "lazy" && (X = "input lazy");
      const Q = new Set((X == null ? void 0 : X.split(" ")) ?? []);
      return { blur: Q.has("blur") || Q.has("input"), input: Q.has("input"), submit: Q.has("submit"), lazy: Q.has("lazy") };
    }), U = v(() => {
      var X;
      return !T.error && !((X = T.errorMessages) != null && X.length) && (!T.rules.length || (H.value ? !N.value.length && !R.value.lazy || null : !N.value.length));
    }), P = re(!1), G = v(() => ({ [`${I}--error`]: U.value === !1, [`${I}--dirty`]: E.value, [`${I}--disabled`]: B.value, [`${I}--readonly`]: w.value })), _ = v(() => T.name ?? r(O));
    function x() {
      C.value = null, Ie(k);
    }
    function k() {
      H.value = !0, R.value.lazy ? N.value = [] : L(!0);
    }
    async function L() {
      let X = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      const Q = [];
      P.value = !0;
      for (const ye of T.rules) {
        if (Q.length >= +(T.maxErrors ?? 1))
          break;
        const Ve = typeof ye == "function" ? ye : () => ye, xe = await Ve(F.value);
        xe !== !0 && (xe === !1 || typeof xe == "string" ? Q.push(xe || "") : console.warn(`${xe} is not a valid value. Rule functions must return boolean true or a string.`));
      }
      return N.value = Q, P.value = !1, H.value = X, N.value;
    }
    return Do(() => {
      V == null || V.register({ id: _.value, validate: L, reset: x, resetValidation: k });
    }), Je(() => {
      V == null || V.unregister(_.value);
    }), An(async () => {
      R.value.lazy || await L(!0), V == null || V.update(_.value, U.value, M.value);
    }), un(() => R.value.input, () => {
      K(F, () => {
        if (F.value != null)
          L();
        else if (T.focused) {
          const X = K(() => T.focused, (Q) => {
            Q || L(), X();
          });
        }
      });
    }), un(() => R.value.blur, () => {
      K(() => T.focused, (X) => {
        X || L();
      });
    }), K(U, () => {
      V == null || V.update(_.value, U.value, M.value);
    }), { errorMessages: M, isDirty: E, isDisabled: B, isReadonly: w, isPristine: H, isValid: U, isValidating: P, reset: x, resetValidation: k, validate: L, validationClasses: G };
  }(e, "v-input", o), z = v(() => ({ id: o, messagesId: s, isDirty: f, isDisabled: g, isReadonly: m, isPristine: h, isValid: b, isValidating: S, reset: A, resetValidation: $, validate: q })), j = v(() => {
    var T;
    return (T = e.errorMessages) != null && T.length || !h.value && y.value.length ? y.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return ae(() => {
    var F, V, N, H;
    const T = !(!l.prepend && !e.prependIcon), I = !(!l.append && !e.appendIcon), O = j.value.length > 0, C = !e.hideDetails || e.hideDetails === "auto" && (O || !!l.details);
    return p("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix, "v-input--hide-spin-buttons": e.hideSpinButtons }, i.value, d.value, D.value, e.class], style: e.style }, [T && p("div", { key: "prepend", class: "v-input__prepend" }, [(F = l.prepend) == null ? void 0 : F.call(l, z.value), e.prependIcon && p(c, { key: "prepend-icon", name: "prepend" }, null)]), l.default && p("div", { class: "v-input__control" }, [(V = l.default) == null ? void 0 : V.call(l, z.value)]), I && p("div", { key: "append", class: "v-input__append" }, [e.appendIcon && p(c, { key: "append-icon", name: "append" }, null), (N = l.append) == null ? void 0 : N.call(l, z.value)]), C && p("div", { class: "v-input__details" }, [p(nr, { id: s.value, active: O, messages: j.value }, { message: l.message }), (H = l.details) == null ? void 0 : H.call(l, z.value)])]);
  }), { reset: A, resetValidation: $, validate: q, isValid: b, errorMessages: y };
} }), or = Y({ ...ft(), ...gn(Fa(), ["inline"]) }, "VCheckbox"), ar = ee()({ name: "VCheckbox", inheritAttrs: !1, props: or(), emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const a = ge(e, "modelValue"), { isFocused: i, focus: d, blur: c } = vt(e), u = We(), o = v(() => e.id || `checkbox-${u}`);
  return ae(() => {
    const [s, y] = ot(n), f = on.filterProps(e), g = cl.filterProps(e);
    return p(on, Z({ class: ["v-checkbox", e.class] }, s, f, { modelValue: a.value, "onUpdate:modelValue": (m) => a.value = m, id: o.value, focused: i.value, style: e.style }), { ...l, default: (m) => {
      let { id: h, messagesId: b, isDisabled: S, isReadonly: A } = m;
      return p(cl, Z(g, { id: h.value, "aria-describedby": b.value, disabled: S.value, readonly: A.value }, y, { modelValue: a.value, "onUpdate:modelValue": ($) => a.value = $, onFocus: d, onBlur: c }), l);
    } });
  }), {};
} }), ir = Y({ start: Boolean, end: Boolean, icon: de, image: String, text: String, ...ue(), ...qe(), ...Qe(), ...ct(), ...ze(), ...Be(), ...an({ variant: "flat" }) }, "VAvatar"), Fn = ee()({ name: "VAvatar", props: ir(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = Oe(e), { colorClasses: a, colorStyles: i, variantClasses: d } = ut(e), { densityClasses: c } = nn(e), { roundedClasses: u } = en(e), { sizeClasses: o, sizeStyles: s } = dt(e);
  return ae(() => p(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, l.value, a.value, c.value, u.value, o.value, d.value, e.class], style: [i.value, s.value, e.style] }, { default: () => {
    var y;
    return [e.image ? p(ia, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? p(pe, { key: "icon", icon: e.icon }, null) : ((y = n.default) == null ? void 0 : y.call(n)) ?? e.text, st(!1, "v-avatar")];
  } })), {};
} }), Oa = Symbol.for("vuetify:v-chip-group"), rr = Y({ column: Boolean, filter: Boolean, valueComparator: { type: Function, default: En }, ...ue(), ...sa({ selectedClass: "v-chip--selected" }), ...ze(), ...Be(), ...an({ variant: "tonal" }) }, "VChipGroup");
ee()({ name: "VChipGroup", props: rr(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = Oe(e), { isSelected: a, select: i, next: d, prev: c, selected: u } = da(e, Oa);
  return Tn({ VChip: { color: te(e, "color"), disabled: te(e, "disabled"), filter: te(e, "filter"), variant: te(e, "variant") } }), ae(() => p(e.tag, { class: ["v-chip-group", { "v-chip-group--column": e.column }, l.value, e.class], style: e.style }, { default: () => {
    var o;
    return [(o = n.default) == null ? void 0 : o.call(n, { isSelected: a, select: i, next: d, prev: c, selected: u.value })];
  } })), {};
} });
const sr = Y({ activeClass: String, appendAvatar: String, appendIcon: de, closable: Boolean, closeIcon: { type: de, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: String, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: de, ripple: { type: [Boolean, Object], default: !0 }, text: String, modelValue: { type: Boolean, default: !0 }, onClick: Re(), onClickOnce: Re(), ...zn(), ...ue(), ...qe(), ...Ln(), ...ua(), ...Qe(), ...jt(), ...ct(), ...ze({ tag: "span" }), ...Be(), ...an({ variant: "tonal" }) }, "VChip"), ur = ee()({ name: "VChip", directives: { Ripple: pt }, props: sr(), emits: { "click:close": (e) => !0, "update:modelValue": (e) => !0, "group:selected": (e) => !0, click: (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: a } = t;
  const { t: i } = Al(), { borderClasses: d } = Dn(e), { colorClasses: c, colorStyles: u, variantClasses: o } = ut(e), { densityClasses: s } = nn(e), { elevationClasses: y } = Wn(e), { roundedClasses: f } = en(e), { sizeClasses: g } = dt(e), { themeClasses: m } = Oe(e), h = ge(e, "modelValue"), b = ca(e, Oa, !1), S = Nt(e, n), A = v(() => e.link !== !1 && S.isLink.value), $ = v(() => !e.disabled && e.link !== !1 && (!!b || e.link || S.isClickable.value)), q = v(() => ({ "aria-label": i(e.closeLabel), onClick(j) {
    j.stopPropagation(), h.value = !1, l("click:close", j);
  } }));
  function D(j) {
    var T;
    l("click", j), $.value && ((T = S.navigate) == null || T.call(S, j), b == null || b.toggle());
  }
  function z(j) {
    j.key !== "Enter" && j.key !== " " || (j.preventDefault(), D(j));
  }
  return () => {
    const j = S.isLink.value ? "a" : e.tag, T = !(!e.appendIcon && !e.appendAvatar), I = !(!T && !a.append), O = !(!a.close && !e.closable), C = !(!a.filter && !e.filter) && b, F = !(!e.prependIcon && !e.prependAvatar), V = !(!F && !a.prepend), N = !b || b.isSelected.value;
    return h.value && Fe(p(j, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": $.value, "v-chip--filter": C, "v-chip--pill": e.pill }, m.value, d.value, N ? c.value : void 0, s.value, y.value, f.value, g.value, o.value, b == null ? void 0 : b.selectedClass.value, e.class], style: [N ? u.value : void 0, e.style], disabled: e.disabled || void 0, draggable: e.draggable, href: S.href.value, tabindex: $.value ? 0 : void 0, onClick: D, onKeydown: $.value && !A.value && z }, { default: () => {
      var H;
      return [st($.value, "v-chip"), C && p(oa, { key: "filter" }, { default: () => [Fe(p("div", { class: "v-chip__filter" }, [a.filter ? p(ke, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, a.filter) : p(pe, { key: "filter-icon", icon: e.filterIcon }, null)]), [[Vn, b.isSelected.value]])] }), V && p("div", { key: "prepend", class: "v-chip__prepend" }, [a.prepend ? p(ke, { key: "prepend-defaults", disabled: !F, defaults: { VAvatar: { image: e.prependAvatar, start: !0 }, VIcon: { icon: e.prependIcon, start: !0 } } }, a.prepend) : p(fe, null, [e.prependIcon && p(pe, { key: "prepend-icon", icon: e.prependIcon, start: !0 }, null), e.prependAvatar && p(Fn, { key: "prepend-avatar", image: e.prependAvatar, start: !0 }, null)])]), p("div", { class: "v-chip__content" }, [((H = a.default) == null ? void 0 : H.call(a, { isSelected: b == null ? void 0 : b.isSelected.value, selectedClass: b == null ? void 0 : b.selectedClass.value, select: b == null ? void 0 : b.select, toggle: b == null ? void 0 : b.toggle, value: b == null ? void 0 : b.value.value, disabled: e.disabled })) ?? e.text]), I && p("div", { key: "append", class: "v-chip__append" }, [a.append ? p(ke, { key: "append-defaults", disabled: !T, defaults: { VAvatar: { end: !0, image: e.appendAvatar }, VIcon: { end: !0, icon: e.appendIcon } } }, a.append) : p(fe, null, [e.appendIcon && p(pe, { key: "append-icon", end: !0, icon: e.appendIcon }, null), e.appendAvatar && p(Fn, { key: "append-avatar", end: !0, image: e.appendAvatar }, null)])]), O && p("div", Z({ key: "close", class: "v-chip__close" }, q.value), [a.close ? p(ke, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, a.close) : p(pe, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[Ze("ripple"), $.value && e.ripple, null]]);
  };
} }), dl = Symbol.for("vuetify:list");
function Pa() {
  const e = se(dl, { hasPrepend: re(!1), updateHasPrepend: () => null }), t = { hasPrepend: re(!1), updateHasPrepend: (n) => {
    n && (t.hasPrepend.value = n);
  } };
  return De(dl, t), e;
}
function $a() {
  return se(dl, null);
}
const cr = { open: (e) => {
  let { id: t, value: n, opened: l, parents: a } = e;
  if (n) {
    const i = /* @__PURE__ */ new Set();
    i.add(t);
    let d = a.get(t);
    for (; d != null; )
      i.add(d), d = a.get(d);
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
}, select: () => null }, dr = { open: Ea.open, select: (e) => {
  let { id: t, value: n, opened: l, parents: a } = e;
  if (!n)
    return l;
  const i = [];
  let d = a.get(t);
  for (; d != null; )
    i.push(d), d = a.get(d);
  return new Set(i);
} }, pl = (e) => {
  const t = { select: (n) => {
    let { id: l, value: a, selected: i } = n;
    if (l = ln(l), e && !a) {
      const d = Array.from(i.entries()).reduce((c, u) => {
        let [o, s] = u;
        return s === "on" ? [...c, o] : c;
      }, []);
      if (d.length === 1 && d[0] === l)
        return i;
    }
    return i.set(l, a ? "on" : "off"), i;
  }, in: (n, l, a) => {
    let i = /* @__PURE__ */ new Map();
    for (const d of n || [])
      i = t.select({ id: d, value: !0, selected: new Map(i), children: l, parents: a });
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
    a = ln(a);
    const d = l.has(a) ? /* @__PURE__ */ new Map([[a, l.get(a)]]) : /* @__PURE__ */ new Map();
    return t.select({ ...i, id: a, selected: d });
  }, in: (n, l, a) => {
    let i = /* @__PURE__ */ new Map();
    return n != null && n.length && (i = t.in(n.slice(0, 1), l, a)), i;
  }, out: (n, l, a) => t.out(n, l, a) };
}, tt = Symbol.for("vuetify:nested"), Ta = { id: re(), root: { register: () => null, unregister: () => null, parents: W(/* @__PURE__ */ new Map()), children: W(/* @__PURE__ */ new Map()), open: () => null, openOnSelect: () => null, select: () => null, opened: W(/* @__PURE__ */ new Set()), selected: W(/* @__PURE__ */ new Map()), selectedValues: W([]) } }, pr = Y({ selectStrategy: [String, Function], openStrategy: [String, Object], opened: Array, selected: Array, mandatory: Boolean }, "nested"), vr = (e) => {
  let t = !1;
  const n = W(/* @__PURE__ */ new Map()), l = W(/* @__PURE__ */ new Map()), a = ge(e, "opened", e.opened, (y) => new Set(y), (y) => [...y.values()]), i = v(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return ((y) => {
          const f = Io(y);
          return { select: (g) => {
            let { id: m, selected: h, children: b, ...S } = g;
            return m = ln(m), b.has(m) ? h : f.select({ id: m, selected: h, children: b, ...S });
          }, in: f.in, out: f.out };
        })(e.mandatory);
      case "leaf":
        return ((y) => {
          const f = pl(y);
          return { select: (g) => {
            let { id: m, selected: h, children: b, ...S } = g;
            return m = ln(m), b.has(m) ? h : f.select({ id: m, selected: h, children: b, ...S });
          }, in: f.in, out: f.out };
        })(e.mandatory);
      case "independent":
        return pl(e.mandatory);
      case "single-independent":
        return Io(e.mandatory);
      default:
        return ((y) => {
          const f = { select: (g) => {
            let { id: m, value: h, selected: b, children: S, parents: A } = g;
            m = ln(m);
            const $ = new Map(b), q = [m];
            for (; q.length; ) {
              const z = q.shift();
              b.set(z, h ? "on" : "off"), S.has(z) && q.push(...S.get(z));
            }
            let D = A.get(m);
            for (; D; ) {
              const z = S.get(D), j = z.every((I) => b.get(I) === "on"), T = z.every((I) => !b.has(I) || b.get(I) === "off");
              b.set(D, j ? "on" : T ? "off" : "indeterminate"), D = A.get(D);
            }
            return y && !h && Array.from(b.entries()).reduce((j, T) => {
              let [I, O] = T;
              return O === "on" ? [...j, I] : j;
            }, []).length === 0 ? $ : b;
          }, in: (g, m, h) => {
            let b = /* @__PURE__ */ new Map();
            for (const S of g || [])
              b = f.select({ id: S, value: !0, selected: new Map(b), children: m, parents: h });
            return b;
          }, out: (g, m) => {
            const h = [];
            for (const [b, S] of g.entries())
              S !== "on" || m.has(b) || h.push(b);
            return h;
          } };
          return f;
        })(e.mandatory);
    }
  }), d = v(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return dr;
      case "single":
        return cr;
      default:
        return Ea;
    }
  }), c = ge(e, "selected", e.selected, (y) => i.value.in(y, n.value, l.value), (y) => i.value.out(y, n.value, l.value));
  function u(y) {
    const f = [];
    let g = y;
    for (; g != null; )
      f.unshift(g), g = l.value.get(g);
    return f;
  }
  Je(() => {
    t = !0;
  });
  const o = Ce("nested"), s = { id: re(), root: { opened: a, selected: c, selectedValues: v(() => {
    const y = [];
    for (const [f, g] of c.value.entries())
      g === "on" && y.push(f);
    return y;
  }), register: (y, f, g) => {
    f && y !== f && l.value.set(y, f), g && n.value.set(y, []), f != null && n.value.set(f, [...n.value.get(f) || [], y]);
  }, unregister: (y) => {
    if (t)
      return;
    n.value.delete(y);
    const f = l.value.get(y);
    if (f) {
      const g = n.value.get(f) ?? [];
      n.value.set(f, g.filter((m) => m !== y));
    }
    l.value.delete(y), a.value.delete(y);
  }, open: (y, f, g) => {
    o.emit("click:open", { id: y, value: f, path: u(y), event: g });
    const m = d.value.open({ id: y, value: f, opened: new Set(a.value), children: n.value, parents: l.value, event: g });
    m && (a.value = m);
  }, openOnSelect: (y, f, g) => {
    const m = d.value.select({ id: y, value: f, selected: new Map(c.value), opened: new Set(a.value), children: n.value, parents: l.value, event: g });
    m && (a.value = m);
  }, select: (y, f, g) => {
    o.emit("click:select", { id: y, value: f, path: u(y), event: g });
    const m = i.value.select({ id: y, value: f, selected: new Map(c.value), children: n.value, parents: l.value, event: g });
    m && (c.value = m), s.root.openOnSelect(y, f, g);
  }, children: n, parents: l } };
  return De(tt, s), s.root;
}, za = (e, t) => {
  const n = se(tt, Ta), l = Symbol(We()), a = v(() => e.value !== void 0 ? e.value : l), i = { ...n, id: a, open: (d, c) => n.root.open(a.value, d, c), openOnSelect: (d, c) => n.root.openOnSelect(a.value, d, c), isOpen: v(() => n.root.opened.value.has(a.value)), parent: v(() => n.root.parents.value.get(a.value)), select: (d, c) => n.root.select(a.value, d, c), isSelected: v(() => n.root.selected.value.get(ln(a.value)) === "on"), isIndeterminate: v(() => n.root.selected.value.get(a.value) === "indeterminate"), isLeaf: v(() => !n.root.children.value.get(a.value)), isGroupActivator: n.isGroupActivator };
  return !n.isGroupActivator && n.root.register(a.value, n.id.value, t), Je(() => {
    !n.isGroupActivator && n.root.unregister(a.value);
  }), t && De(tt, i), i;
}, fr = Qn({ name: "VListGroupActivator", setup(e, t) {
  let { slots: n } = t;
  return (() => {
    const l = se(tt, Ta);
    De(tt, { ...l, isGroupActivator: !0 });
  })(), () => {
    var l;
    return (l = n.default) == null ? void 0 : l.call(n);
  };
} }), yr = Y({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: de, default: "$collapse" }, expandIcon: { type: de, default: "$expand" }, prependIcon: de, appendIcon: de, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...ue(), ...ze() }, "VListGroup"), So = ee()({ name: "VListGroup", props: yr(), setup(e, t) {
  let { slots: n } = t;
  const { isOpen: l, open: a, id: i } = za(te(e, "value"), !0), d = v(() => `v-list-group--id-${String(i.value)}`), c = $a(), { isBooted: u } = function() {
    const g = re(!1);
    return An(() => {
      window.requestAnimationFrame(() => {
        g.value = !0;
      });
    }), { ssrBootStyles: v(() => g.value ? void 0 : { transition: "none !important" }), isBooted: hl(g) };
  }();
  function o(g) {
    a(!l.value, g);
  }
  const s = v(() => ({ onClick: o, class: "v-list-group__header", id: d.value })), y = v(() => l.value ? e.collapseIcon : e.expandIcon), f = v(() => ({ VListItem: { active: l.value, activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && y.value, appendIcon: e.appendIcon || !e.subgroup && y.value, title: e.title, value: e.value } }));
  return ae(() => p(e.tag, { class: ["v-list-group", { "v-list-group--prepend": c == null ? void 0 : c.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": l.value }, e.class], style: e.style }, { default: () => [n.activator && p(ke, { defaults: f.value }, { default: () => [p(fr, null, { default: () => [n.activator({ props: s.value, isOpen: l.value })] })] }), p(tn, { transition: { component: zi }, disabled: !u.value }, { default: () => {
    var g;
    return [Fe(p("div", { class: "v-list-group__items", role: "group", "aria-labelledby": d.value }, [(g = n.default) == null ? void 0 : g.call(n)]), [[Vn, l.value]])];
  } })] })), {};
} }), mr = at("v-list-item-subtitle"), gr = at("v-list-item-title"), hr = Y({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: de, baseColor: String, disabled: Boolean, lines: String, link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: de, ripple: { type: [Boolean, Object], default: !0 }, slim: Boolean, subtitle: [String, Number], title: [String, Number], value: null, onClick: Re(), onClickOnce: Re(), ...zn(), ...ue(), ...qe(), ...hn(), ...Ln(), ...Qe(), ...jt(), ...ze(), ...Be(), ...an({ variant: "text" }) }, "VListItem"), zt = ee()({ name: "VListItem", directives: { Ripple: pt }, props: hr(), emits: { click: (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l, emit: a } = t;
  const i = Nt(e, n), d = v(() => e.value === void 0 ? i.href.value : e.value), { select: c, isSelected: u, isIndeterminate: o, isGroupActivator: s, root: y, parent: f, openOnSelect: g } = za(d, !1), m = $a(), h = v(() => {
    var w;
    return e.active !== !1 && (e.active || ((w = i.isActive) == null ? void 0 : w.value) || u.value);
  }), b = v(() => e.link !== !1 && i.isLink.value), S = v(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || e.value != null && !!m)), A = v(() => e.rounded || e.nav), $ = v(() => e.color ?? e.activeColor), q = v(() => ({ color: h.value ? $.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  K(() => {
    var w;
    return (w = i.isActive) == null ? void 0 : w.value;
  }, (w) => {
    w && f.value != null && y.open(f.value, !0), w && g(w);
  }, { immediate: !0 });
  const { themeClasses: D } = Oe(e), { borderClasses: z } = Dn(e), { colorClasses: j, colorStyles: T, variantClasses: I } = ut(q), { densityClasses: O } = nn(e), { dimensionStyles: C } = bn(e), { elevationClasses: F } = Wn(e), { roundedClasses: V } = en(A), N = v(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), H = v(() => ({ isActive: h.value, select: c, isSelected: u.value, isIndeterminate: o.value }));
  function E(w) {
    var M;
    a("click", w), !s && S.value && ((M = i.navigate) == null || M.call(i, w), e.value != null && c(!u.value, w));
  }
  function B(w) {
    w.key !== "Enter" && w.key !== " " || (w.preventDefault(), E(w));
  }
  return ae(() => {
    const w = b.value ? "a" : e.tag, M = l.title || e.title != null, R = l.subtitle || e.subtitle != null, U = !(!e.appendAvatar && !e.appendIcon), P = !(!U && !l.append), G = !(!e.prependAvatar && !e.prependIcon), _ = !(!G && !l.prepend);
    var x, k;
    return m == null || m.updateHasPrepend(_), e.activeColor && (x = "active-color", k = ["color", "base-color"], k = Array.isArray(k) ? k.slice(0, -1).map((L) => `'${L}'`).join(", ") + ` or '${k.at(-1)}'` : `'${k}'`, Lt(`[Vuetify UPGRADE] '${x}' is deprecated, use ${k} instead.`)), Fe(p(w, { class: ["v-list-item", { "v-list-item--active": h.value, "v-list-item--disabled": e.disabled, "v-list-item--link": S.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !_ && (m == null ? void 0 : m.hasPrepend.value), "v-list-item--slim": e.slim, [`${e.activeClass}`]: e.activeClass && h.value }, D.value, z.value, j.value, O.value, F.value, N.value, V.value, I.value, e.class], style: [T.value, C.value, e.style], href: i.href.value, tabindex: S.value ? m ? -2 : 0 : void 0, onClick: E, onKeydown: S.value && !b.value && B }, { default: () => {
      var L;
      return [st(S.value || h.value, "v-list-item"), _ && p("div", { key: "prepend", class: "v-list-item__prepend" }, [l.prepend ? p(ke, { key: "prepend-defaults", disabled: !G, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: !0 } } }, { default: () => {
        var X;
        return [(X = l.prepend) == null ? void 0 : X.call(l, H.value)];
      } }) : p(fe, null, [e.prependAvatar && p(Fn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && p(pe, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), p("div", { class: "v-list-item__spacer" }, null)]), p("div", { class: "v-list-item__content", "data-no-activator": "" }, [M && p(gr, { key: "title" }, { default: () => {
        var X;
        return [((X = l.title) == null ? void 0 : X.call(l, { title: e.title })) ?? e.title];
      } }), R && p(mr, { key: "subtitle" }, { default: () => {
        var X;
        return [((X = l.subtitle) == null ? void 0 : X.call(l, { subtitle: e.subtitle })) ?? e.subtitle];
      } }), (L = l.default) == null ? void 0 : L.call(l, H.value)]), P && p("div", { key: "append", class: "v-list-item__append" }, [l.append ? p(ke, { key: "append-defaults", disabled: !U, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: !0 } } }, { default: () => {
        var X;
        return [(X = l.append) == null ? void 0 : X.call(l, H.value)];
      } }) : p(fe, null, [e.appendIcon && p(pe, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && p(Fn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), p("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[Ze("ripple"), S.value && e.ripple]]);
  }), {};
} }), br = Y({ color: String, inset: Boolean, sticky: Boolean, title: String, ...ue(), ...ze() }, "VListSubheader"), Cr = ee()({ name: "VListSubheader", props: br(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: l, textColorStyles: a } = Ke(te(e, "color"));
  return ae(() => {
    const i = !(!n.default && !e.title);
    return p(e.tag, { class: ["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, l.value, e.class], style: [{ textColorStyles: a }, e.style] }, { default: () => {
      var d;
      return [i && p("div", { class: "v-list-subheader__text" }, [((d = n.default) == null ? void 0 : d.call(n)) ?? e.title])];
    } });
  }), {};
} }), Ir = Y({ color: String, inset: Boolean, length: [Number, String], thickness: [Number, String], vertical: Boolean, ...ue(), ...Be() }, "VDivider"), Sr = ee()({ name: "VDivider", props: Ir(), setup(e, t) {
  let { attrs: n } = t;
  const { themeClasses: l } = Oe(e), { textColorClasses: a, textColorStyles: i } = Ke(te(e, "color")), d = v(() => {
    const c = {};
    return e.length && (c[e.vertical ? "maxHeight" : "maxWidth"] = le(e.length)), e.thickness && (c[e.vertical ? "borderRightWidth" : "borderTopWidth"] = le(e.thickness)), c;
  });
  return ae(() => p("hr", { class: [{ "v-divider": !0, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, l.value, a.value, e.class], style: [d.value, i.value, e.style], "aria-orientation": n.role && n.role !== "separator" ? void 0 : e.vertical ? "vertical" : "horizontal", role: `${n.role || "separator"}` }, null)), {};
} }), Br = Y({ items: Array, returnObject: Boolean }, "VListChildren"), Da = ee()({ name: "VListChildren", props: Br(), setup(e, t) {
  let { slots: n } = t;
  return Pa(), () => {
    var l, a;
    return ((l = n.default) == null ? void 0 : l.call(n)) ?? ((a = e.items) == null ? void 0 : a.map((i) => {
      var f, g;
      let { children: d, props: c, type: u, raw: o } = i;
      if (u === "divider")
        return ((f = n.divider) == null ? void 0 : f.call(n, { props: c })) ?? p(Sr, c, null);
      if (u === "subheader")
        return ((g = n.subheader) == null ? void 0 : g.call(n, { props: c })) ?? p(Cr, c, null);
      const s = { subtitle: n.subtitle ? (m) => {
        var h;
        return (h = n.subtitle) == null ? void 0 : h.call(n, { ...m, item: o });
      } : void 0, prepend: n.prepend ? (m) => {
        var h;
        return (h = n.prepend) == null ? void 0 : h.call(n, { ...m, item: o });
      } : void 0, append: n.append ? (m) => {
        var h;
        return (h = n.append) == null ? void 0 : h.call(n, { ...m, item: o });
      } : void 0, title: n.title ? (m) => {
        var h;
        return (h = n.title) == null ? void 0 : h.call(n, { ...m, item: o });
      } : void 0 }, y = So.filterProps(c);
      return d ? p(So, Z({ value: c == null ? void 0 : c.value }, y), { activator: (m) => {
        let { props: h } = m;
        const b = { ...c, ...h, value: e.returnObject ? o : c.value };
        return n.header ? n.header({ props: b }) : p(zt, b, s);
      }, default: () => p(Da, { items: d }, n) }) : n.item ? n.item({ props: c }) : p(zt, Z(c, { value: e.returnObject ? o : c.value }), s);
    }));
  };
} }), La = Y({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, returnObject: Boolean, valueComparator: { type: Function, default: En } }, "list-items");
function vl(e, t) {
  const n = Ue(t, e.itemTitle, t), l = Ue(t, e.itemValue, n), a = Ue(t, e.itemChildren), i = { title: n, value: l, ...e.itemProps === !0 ? typeof t != "object" || t == null || Array.isArray(t) ? void 0 : "children" in t ? gn(t, ["children"]) : t : Ue(t, e.itemProps) };
  return { title: String(i.title ?? ""), value: i.value, props: i, children: Array.isArray(a) ? Wa(e, a) : void 0, raw: t };
}
function Wa(e, t) {
  const n = [];
  for (const l of t)
    n.push(vl(e, l));
  return n;
}
function xr(e, t) {
  const n = Ue(t, e.itemType, "item"), l = function(c) {
    return typeof c == "string" || typeof c == "number" || typeof c == "boolean";
  }(t) ? t : Ue(t, e.itemTitle), a = Ue(t, e.itemValue, void 0), i = Ue(t, e.itemChildren), d = { title: l, value: a, ...e.itemProps === !0 ? gn(t, ["children"]) : Ue(t, e.itemProps) };
  return { type: n, title: d.title, value: d.value, props: d, children: n === "item" && i ? Ma(e, i) : void 0, raw: t };
}
function Ma(e, t) {
  const n = [];
  for (const l of t)
    n.push(xr(e, l));
  return n;
}
const kr = Y({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, nav: Boolean, ...pr({ selectStrategy: "single-leaf", openStrategy: "list" }), ...zn(), ...ue(), ...qe(), ...hn(), ...Ln(), itemType: { type: String, default: "type" }, ...La(), ...Qe(), ...ze(), ...Be(), ...an({ variant: "text" }) }, "VList"), wr = ee()({ name: "VList", props: kr(), emits: { "update:selected": (e) => !0, "update:opened": (e) => !0, "click:open": (e) => !0, "click:select": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { items: l } = function(I) {
    return { items: v(() => Ma(I, I.items)) };
  }(e), { themeClasses: a } = Oe(e), { backgroundColorClasses: i, backgroundColorStyles: d } = wn(te(e, "bgColor")), { borderClasses: c } = Dn(e), { densityClasses: u } = nn(e), { dimensionStyles: o } = bn(e), { elevationClasses: s } = Wn(e), { roundedClasses: y } = en(e), { open: f, select: g } = vr(e), m = v(() => e.lines ? `v-list--${e.lines}-line` : void 0), h = te(e, "activeColor"), b = te(e, "baseColor"), S = te(e, "color");
  Pa(), Tn({ VListGroup: { activeColor: h, baseColor: b, color: S }, VListItem: { activeClass: te(e, "activeClass"), activeColor: h, baseColor: b, color: S, density: te(e, "density"), disabled: te(e, "disabled"), lines: te(e, "lines"), nav: te(e, "nav"), slim: te(e, "slim"), variant: te(e, "variant") } });
  const A = re(!1), $ = W();
  function q(I) {
    A.value = !0;
  }
  function D(I) {
    A.value = !1;
  }
  function z(I) {
    var O;
    A.value || I.relatedTarget && ((O = $.value) != null && O.contains(I.relatedTarget)) || T();
  }
  function j(I) {
    if ($.value) {
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
    if ($.value)
      return Vt($.value, I);
  }
  return ae(() => p(e.tag, { ref: $, class: ["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav }, a.value, i.value, c.value, u.value, s.value, m.value, y.value, e.class], style: [d.value, o.value, e.style], tabindex: e.disabled || A.value ? -1 : 0, role: "listbox", "aria-activedescendant": void 0, onFocusin: q, onFocusout: D, onFocus: z, onKeydown: j }, { default: () => [p(Da, { items: l.value, returnObject: e.returnObject }, n)] })), { open: f, select: g, focus: T };
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
  (Array.isArray(e.target.value) || function(g) {
    for (; g; ) {
      if (window.getComputedStyle(g).position === "fixed")
        return !0;
      g = g.offsetParent;
    }
    return !1;
  }(e.target.value)) && Object.assign(n.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: l, preferredOrigin: a } = xl(() => {
    const g = il(t.location, e.isRtl.value), m = t.origin === "overlap" ? g : t.origin === "auto" ? Xt(g) : il(t.origin, e.isRtl.value);
    return g.side === m.side && g.align === Kt(m).align ? { preferredAnchor: Xl(g), preferredOrigin: Xl(m) } : { preferredAnchor: g, preferredOrigin: m };
  }), [i, d, c, u] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((g) => v(() => {
    const m = parseFloat(t[g]);
    return isNaN(m) ? 1 / 0 : m;
  })), o = v(() => {
    if (Array.isArray(t.offset))
      return t.offset;
    if (typeof t.offset == "string") {
      const g = t.offset.split(" ").map(parseFloat);
      return g.length < 2 && g.push(0), g;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let s = !1;
  const y = new ResizeObserver(() => {
    s && f();
  });
  function f() {
    if (s = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => s = !0);
    }), !e.target.value || !e.contentEl.value)
      return;
    const g = Yo(e.target.value), m = function(I, O) {
      O ? I.style.removeProperty("left") : I.style.removeProperty("right");
      const C = kl(I);
      return O ? C.x += parseFloat(I.style.right || 0) : C.x -= parseFloat(I.style.left || 0), C.y -= parseFloat(I.style.top || 0), C;
    }(e.contentEl.value, e.isRtl.value), h = Pt(e.contentEl.value);
    h.length || (h.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (m.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), m.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const b = h.reduce((I, O) => {
      const C = O.getBoundingClientRect(), F = new sn({ x: O === document.documentElement ? 0 : C.x, y: O === document.documentElement ? 0 : C.y, width: O.clientWidth, height: O.clientHeight });
      return I ? new sn({ x: Math.max(I.left, F.left), y: Math.max(I.top, F.top), width: Math.min(I.right, F.right) - Math.max(I.left, F.left), height: Math.min(I.bottom, F.bottom) - Math.max(I.top, F.top) }) : F;
    }, void 0);
    b.x += 12, b.y += 12, b.width -= 24, b.height -= 24;
    let S = { anchor: l.value, origin: a.value };
    function A(I) {
      const O = new sn(m), C = Bo(I.anchor, g), F = Bo(I.origin, O);
      let { x: V, y: N } = (E = F, { x: (H = C).x - E.x, y: H.y - E.y });
      var H, E;
      switch (I.anchor.side) {
        case "top":
          N -= o.value[0];
          break;
        case "bottom":
          N += o.value[0];
          break;
        case "left":
          V -= o.value[0];
          break;
        case "right":
          V += o.value[0];
      }
      switch (I.anchor.align) {
        case "top":
          N -= o.value[1];
          break;
        case "bottom":
          N += o.value[1];
          break;
        case "left":
          V -= o.value[1];
          break;
        case "right":
          V += o.value[1];
      }
      return O.x += V, O.y += N, O.width = Math.min(O.width, c.value), O.height = Math.min(O.height, u.value), { overflows: Jl(O, b), x: V, y: N };
    }
    let $ = 0, q = 0;
    const D = { x: 0, y: 0 }, z = { x: !1, y: !1 };
    let j = -1;
    for (; ; ) {
      if (j++ > 10) {
        Lt("Vuetify error: Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const { x: I, y: O, overflows: C } = A(S);
      $ += I, q += O, m.x += I, m.y += O;
      {
        const F = Kl(S.anchor), V = C.x.before || C.x.after, N = C.y.before || C.y.after;
        let H = !1;
        if (["x", "y"].forEach((E) => {
          if (E === "x" && V && !z.x || E === "y" && N && !z.y) {
            const B = { anchor: { ...S.anchor }, origin: { ...S.origin } }, w = E === "x" ? F === "y" ? Kt : Xt : F === "y" ? Xt : Kt;
            B.anchor = w(B.anchor), B.origin = w(B.origin);
            const { overflows: M } = A(B);
            (M[E].before <= C[E].before && M[E].after <= C[E].after || M[E].before + M[E].after < (C[E].before + C[E].after) / 2) && (S = B, H = z[E] = !0);
          }
        }), H)
          continue;
      }
      C.x.before && ($ += C.x.before, m.x += C.x.before), C.x.after && ($ -= C.x.after, m.x -= C.x.after), C.y.before && (q += C.y.before, m.y += C.y.before), C.y.after && (q -= C.y.after, m.y -= C.y.after);
      {
        const F = Jl(m, b);
        D.x = b.width - F.x.before - F.x.after, D.y = b.height - F.y.before - F.y.after, $ += F.x.before, m.x += F.x.before, q += F.y.before, m.y += F.y.before;
      }
      break;
    }
    const T = Kl(S.anchor);
    return Object.assign(n.value, { "--v-overlay-anchor-origin": `${S.anchor.side} ${S.anchor.align}`, transformOrigin: `${S.origin.side} ${S.origin.align}`, top: le(el(q)), left: e.isRtl.value ? void 0 : le(el($)), right: e.isRtl.value ? le(el(-$)) : void 0, minWidth: le(T === "y" ? Math.min(i.value, g.width) : i.value), maxWidth: le(xo(kn(D.x, i.value === 1 / 0 ? 0 : i.value, c.value))), maxHeight: le(xo(kn(D.y, d.value === 1 / 0 ? 0 : d.value, u.value))) }), { available: D, contentBox: m };
  }
  return K([e.target, e.contentEl], (g, m) => {
    let [h, b] = g, [S, A] = m;
    S && !Array.isArray(S) && y.unobserve(S), h && !Array.isArray(h) && y.observe(h), A && y.unobserve(A), b && y.observe(b);
  }, { immediate: !0 }), Ae(() => {
    y.disconnect();
  }), K(() => [l.value, a.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => f()), Ie(() => {
    const g = f();
    if (!g)
      return;
    const { available: m, contentBox: h } = g;
    h.height > m.y && requestAnimationFrame(() => {
      f(), requestAnimationFrame(() => {
        f();
      });
    });
  }), { updateLocation: f };
} }, Fr = Y({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in Ra }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array] }, "VOverlay-location-strategies");
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
const xt = { none: null, close: function(e) {
  wo(e.targetEl.value ?? e.contentEl.value, function(t) {
    e.isActive.value = !1;
  });
}, block: function(e, t) {
  var c;
  const n = (c = e.root.value) == null ? void 0 : c.offsetParent, l = [.../* @__PURE__ */ new Set([...Pt(e.targetEl.value, t.contained ? n : void 0), ...Pt(e.contentEl.value, t.contained ? n : void 0)])].filter((u) => !u.classList.contains("v-overlay-scroll-blocked")), a = window.innerWidth - document.documentElement.offsetWidth, i = (d = n || document.documentElement, Fl(d) && d);
  var d;
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((u, o) => {
    u.style.setProperty("--v-body-scroll-x", le(-u.scrollLeft)), u.style.setProperty("--v-body-scroll-y", le(-u.scrollTop)), u !== document.documentElement && u.style.setProperty("--v-scrollbar-offset", le(a)), u.classList.add("v-overlay-scroll-blocked");
  }), Ae(() => {
    l.forEach((u, o) => {
      const s = parseFloat(u.style.getPropertyValue("--v-body-scroll-x")), y = parseFloat(u.style.getPropertyValue("--v-body-scroll-y"));
      u.style.removeProperty("--v-body-scroll-x"), u.style.removeProperty("--v-body-scroll-y"), u.style.removeProperty("--v-scrollbar-offset"), u.classList.remove("v-overlay-scroll-blocked"), u.scrollLeft = -s, u.scrollTop = -y;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}, reposition: function(e, t, n) {
  let l = !1, a = -1, i = -1;
  function d(c) {
    var u;
    u = () => {
      var y, f;
      const o = performance.now();
      (f = (y = e.updateLocation).value) == null || f.call(y, c), l = (performance.now() - o) / (1e3 / 60) > 2;
    }, !fl || Dt.length ? (Dt.push(u), yl()) : (fl = !1, u(), yl());
  }
  i = (typeof requestIdleCallback > "u" ? (c) => c() : requestIdleCallback)(() => {
    n.run(() => {
      wo(e.targetEl.value ?? e.contentEl.value, (c) => {
        l ? (cancelAnimationFrame(a), a = requestAnimationFrame(() => {
          a = requestAnimationFrame(() => {
            d(c);
          });
        })) : d(c);
      });
    });
  }), Ae(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(a);
  });
} }, Vr = Y({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in xt } }, "VOverlay-scroll-strategies");
function wo(e, t) {
  const n = [document, ...Pt(e)];
  n.forEach((l) => {
    l.addEventListener("scroll", t, { passive: !0 });
  }), Ae(() => {
    n.forEach((l) => {
      l.removeEventListener("scroll", t);
    });
  });
}
const ml = Symbol.for("vuetify:v-menu"), Ar = Y({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay"), _r = Y({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...Ar() }, "VOverlay-activator");
function Or(e, t) {
  let { isActive: n, isTop: l } = t;
  const a = Ce("useActivator"), i = W();
  let d = !1, c = !1, u = !0;
  const o = v(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), s = v(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !o.value), { runOpenDelay: y, runCloseDelay: f } = function(C, F) {
    const V = {}, N = (H) => () => {
      if (!Pe)
        return Promise.resolve(!0);
      const E = H === "openDelay";
      return V.closeDelay && window.clearTimeout(V.closeDelay), delete V.closeDelay, V.openDelay && window.clearTimeout(V.openDelay), delete V.openDelay, new Promise((B) => {
        const w = parseInt(C[H] ?? 0, 10);
        V[H] = window.setTimeout(() => {
          F == null || F(E), B(E);
        }, w);
      });
    };
    return { runCloseDelay: N("closeDelay"), runOpenDelay: N("openDelay") };
  }(e, (C) => {
    C !== (e.openOnHover && d || o.value && c) || e.openOnHover && n.value && !l.value || (n.value !== C && (u = !0), n.value = C);
  }), g = W(), m = (C) => {
    C.stopPropagation(), i.value = C.currentTarget || C.target, n.value || (g.value = [C.clientX, C.clientY]), n.value = !n.value;
  }, h = (C) => {
    var F;
    (F = C.sourceCapabilities) != null && F.firesTouchEvents || (d = !0, i.value = C.currentTarget || C.target, y());
  }, b = (C) => {
    d = !1, f();
  }, S = (C) => {
    At(C.target, ":focus-visible") !== !1 && (c = !0, C.stopPropagation(), i.value = C.currentTarget || C.target, y());
  }, A = (C) => {
    c = !1, C.stopPropagation(), f();
  }, $ = v(() => {
    const C = {};
    return s.value && (C.onClick = m), e.openOnHover && (C.onMouseenter = h, C.onMouseleave = b), o.value && (C.onFocus = S, C.onBlur = A), C;
  }), q = v(() => {
    const C = {};
    if (e.openOnHover && (C.onMouseenter = () => {
      d = !0, y();
    }, C.onMouseleave = () => {
      d = !1, f();
    }), o.value && (C.onFocusin = () => {
      c = !0, y();
    }, C.onFocusout = () => {
      c = !1, f();
    }), e.closeOnContentClick) {
      const F = se(ml, null);
      C.onClick = () => {
        n.value = !1, F == null || F.closeParents();
      };
    }
    return C;
  }), D = v(() => {
    const C = {};
    return e.openOnHover && (C.onMouseenter = () => {
      u && (d = !0, u = !1, y());
    }, C.onMouseleave = () => {
      d = !1, f();
    }), C;
  });
  K(l, (C) => {
    !C || (!e.openOnHover || d || o.value && c) && (!o.value || c || e.openOnHover && d) || (n.value = !1);
  }), K(n, (C) => {
    C || setTimeout(() => {
      g.value = void 0;
    });
  }, { flush: "post" });
  const z = W();
  Ne(() => {
    z.value && Ie(() => {
      i.value = wt(z.value);
    });
  });
  const j = W(), T = v(() => e.target === "cursor" && g.value ? g.value : j.value ? wt(j.value) : Fo(e.target, a) || i.value), I = v(() => Array.isArray(T.value) ? void 0 : T.value);
  let O;
  return K(() => !!e.activator, (C) => {
    C && Pe ? (O = bl(), O.run(() => {
      (function(F, V, N) {
        let { activatorEl: H, activatorEvents: E } = N;
        function B() {
          let R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : M(), U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : F.activatorProps;
          R && function(P, G) {
            Object.keys(G).forEach((_) => {
              if (ol(_)) {
                const x = Ul(_), k = ht.get(P);
                if (G[_] == null)
                  k == null || k.forEach((L) => {
                    const [X, Q] = L;
                    X === x && (P.removeEventListener(x, Q), k.delete(L));
                  });
                else if (!k || ![...k].some((L) => L[0] === x && L[1] === G[_])) {
                  P.addEventListener(x, G[_]);
                  const L = k || /* @__PURE__ */ new Set();
                  L.add([x, G[_]]), ht.has(P) || ht.set(P, L);
                }
              } else
                G[_] == null ? P.removeAttribute(_) : P.setAttribute(_, G[_]);
            });
          }(R, Z(E.value, U));
        }
        function w() {
          let R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : M(), U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : F.activatorProps;
          R && function(P, G) {
            Object.keys(G).forEach((_) => {
              if (ol(_)) {
                const x = Ul(_), k = ht.get(P);
                k == null || k.forEach((L) => {
                  const [X, Q] = L;
                  X === x && (P.removeEventListener(x, Q), k.delete(L));
                });
              } else
                P.removeAttribute(_);
            });
          }(R, Z(E.value, U));
        }
        function M() {
          const R = Fo(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : F.activator, V);
          return H.value = (R == null ? void 0 : R.nodeType) === Node.ELEMENT_NODE ? R : void 0, H.value;
        }
        K(() => F.activator, (R, U) => {
          if (U && R !== U) {
            const P = M(U);
            P && w(P);
          }
          R && Ie(() => B());
        }, { immediate: !0 }), K(() => F.activatorProps, () => {
          B();
        }), Ae(() => {
          w();
        });
      })(e, a, { activatorEl: i, activatorEvents: $ });
    })) : O && O.stop();
  }, { flush: "post", immediate: !0 }), Ae(() => {
    O == null || O.stop();
  }), { activatorEl: i, activatorRef: z, target: T, targetEl: I, targetRef: j, activatorEvents: $, contentEvents: q, scrimEvents: D };
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
const Pr = Symbol.for("vuetify:display");
function Na() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ge();
  const n = se(Pr);
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
const $r = Y({ eager: Boolean }, "lazy");
function ja() {
  const e = Ce("useScopeId").vnode.scopeId;
  return { scopeId: e ? { [e]: "" } : void 0 };
}
const Vo = Symbol.for("vuetify:stack"), Xn = Me([]);
function Er() {
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
  return (typeof t.value == "object" && t.value.closeConditional || Er)(e);
}
function _o(e, t) {
  const n = Ko(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const Tr = { mounted(e, t) {
  const n = (a) => function(i, d, c) {
    const u = typeof c.value == "function" ? c.value : c.value.handler;
    d._clickOutside.lastMousedownWasOutside && Ao(i, d, c) && setTimeout(() => {
      Ga(i, c) && u && u(i);
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
function zr(e) {
  const { modelValue: t, color: n, ...l } = e;
  return p(cn, { name: "fade-transition", appear: !0 }, { default: () => [e.modelValue && p("div", Z({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, l), null)] });
}
const qa = Y({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: !0 }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: !0 }, zIndex: { type: [Number, String], default: 2e3 }, ..._r(), ...ue(), ...hn(), ...$r(), ...Fr(), ...Vr(), ...Be(), ...rt() }, "VOverlay"), Oo = ee()({ name: "VOverlay", directives: { ClickOutside: Tr }, inheritAttrs: !1, props: { _disableGlobalStack: Boolean, ...qa() }, emits: { "click:outside": (e) => !0, "update:modelValue": (e) => !0, afterLeave: () => !0 }, setup(e, t) {
  var P, G;
  let { slots: n, attrs: l, emit: a } = t;
  const i = ge(e, "modelValue"), d = v({ get: () => i.value, set: (_) => {
    _ && e.disabled || (i.value = _);
  } }), { teleportTarget: c } = function(_) {
    return { teleportTarget: v(() => {
      const x = _.value;
      if (x === !0 || !Pe)
        return;
      const k = x === !1 ? document.body : typeof x == "string" ? document.querySelector(x) : x;
      if (k == null)
        return void Lt(`Unable to locate target ${x}`);
      let L = k.querySelector(":scope > .v-overlay-container");
      return L || (L = document.createElement("div"), L.className = "v-overlay-container", k.appendChild(L)), L;
    }) };
  }(v(() => e.attach || e.contained)), { themeClasses: u } = Oe(e), { rtlClasses: o, isRtl: s } = it(), { hasContent: y, onAfterLeave: f } = function(_, x) {
    const k = re(!1), L = v(() => k.value || _.eager || x.value);
    return K(x, () => k.value = !0), { isBooted: k, hasContent: L, onAfterLeave: function() {
      _.eager || (k.value = !1);
    } };
  }(e, d), g = wn(v(() => typeof e.scrim == "string" ? e.scrim : null)), { globalTop: m, localTop: h, stackStyles: b } = function(_, x, k) {
    const L = Ce("useStack"), X = !k, Q = se(Vo, void 0), ye = Me({ activeChildren: /* @__PURE__ */ new Set() });
    De(Vo, ye);
    const Ve = re(+x.value);
    un(_, () => {
      var Hn;
      const gt = (Hn = Xn.at(-1)) == null ? void 0 : Hn[1];
      Ve.value = gt ? gt + 10 : +x.value, X && Xn.push([L.uid, Ve.value]), Q == null || Q.activeChildren.add(L.uid), Ae(() => {
        if (X) {
          const ai = ln(Xn).findIndex((ii) => ii[0] === L.uid);
          Xn.splice(ai, 1);
        }
        Q == null || Q.activeChildren.delete(L.uid);
      });
    });
    const xe = re(!0);
    X && Ne(() => {
      var Hn;
      const gt = ((Hn = Xn.at(-1)) == null ? void 0 : Hn[0]) === L.uid;
      setTimeout(() => xe.value = gt);
    });
    const oi = v(() => !ye.activeChildren.size);
    return { globalTop: hl(xe), localTop: oi, stackStyles: v(() => ({ zIndex: Ve.value })) };
  }(d, te(e, "zIndex"), e._disableGlobalStack), { activatorEl: S, activatorRef: A, target: $, targetEl: q, targetRef: D, activatorEvents: z, contentEvents: j, scrimEvents: T } = Or(e, { isActive: d, isTop: h }), { dimensionStyles: I } = bn(e), O = function() {
    if (!Pe)
      return re(!1);
    const { ssr: _ } = Na();
    if (_) {
      const x = re(!1);
      return An(() => {
        x.value = !0;
      }), x;
    }
    return re(!0);
  }(), { scopeId: C } = ja();
  K(() => e.disabled, (_) => {
    _ && (d.value = !1);
  });
  const F = W(), V = W(), { contentStyles: N, updateLocation: H } = function(_, x) {
    const k = W({}), L = W();
    function X(Q) {
      var ye;
      (ye = L.value) == null || ye.call(L, Q);
    }
    return Pe && un(() => !(!x.isActive.value || !_.locationStrategy), (Q) => {
      var ye, Ve;
      K(() => _.locationStrategy, Q), Ae(() => {
        window.removeEventListener("resize", X), L.value = void 0;
      }), window.addEventListener("resize", X, { passive: !0 }), typeof _.locationStrategy == "function" ? L.value = (ye = _.locationStrategy(x, _, k)) == null ? void 0 : ye.updateLocation : L.value = (Ve = Ra[_.locationStrategy](x, _, k)) == null ? void 0 : Ve.updateLocation;
    }), { contentStyles: k, updateLocation: L };
  }(e, { isRtl: s, contentEl: V, target: $, isActive: d });
  function E(_) {
    a("click:outside", _), e.persistent ? U() : d.value = !1;
  }
  function B() {
    return d.value && m.value;
  }
  function w(_) {
    var x, k;
    _.key === "Escape" && m.value && (e.persistent ? U() : (d.value = !1, (x = V.value) != null && x.contains(document.activeElement) && ((k = S.value) == null || k.focus())));
  }
  (function(_, x) {
    if (!Pe)
      return;
    let k;
    Ne(async () => {
      k == null || k.stop(), x.isActive.value && _.scrollStrategy && (k = bl(), await Ie(), k.active && k.run(() => {
        var L;
        typeof _.scrollStrategy == "function" ? _.scrollStrategy(x, _, k) : (L = xt[_.scrollStrategy]) == null || L.call(xt, x, _, k);
      }));
    }), Ae(() => {
      k == null || k.stop();
    });
  })(e, { root: F, contentEl: V, targetEl: q, isActive: d, updateLocation: H }), Pe && K(d, (_) => {
    _ ? window.addEventListener("keydown", w) : window.removeEventListener("keydown", w);
  }, { immediate: !0 });
  const M = (G = (P = Ce("useRouter")) == null ? void 0 : P.proxy) == null ? void 0 : G.$router;
  un(() => e.closeOnBack, () => {
    (function(_, x) {
      let k, L, X = !1;
      function Q(ye) {
        var Ve;
        (Ve = ye.state) != null && Ve.replaced || (X = !0, setTimeout(() => X = !1));
      }
      Pe && (Ie(() => {
        window.addEventListener("popstate", Q), k = _ == null ? void 0 : _.beforeEach((ye, Ve, xe) => {
          Zt ? X ? x(xe) : xe() : setTimeout(() => X ? x(xe) : xe()), Zt = !0;
        }), L = _ == null ? void 0 : _.afterEach(() => {
          Zt = !1;
        });
      }), Ae(() => {
        window.removeEventListener("popstate", Q), k == null || k(), L == null || L();
      }));
    })(M, (_) => {
      m.value && d.value ? (_(!1), e.persistent ? U() : d.value = !1) : _();
    });
  });
  const R = W();
  function U() {
    e.noClickAnimation || V.value && xn(V.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: Ot });
  }
  return K(() => d.value && (e.absolute || e.contained) && c.value == null, (_) => {
    if (_) {
      const x = Zo(F.value);
      x && x !== document.scrollingElement && (R.value = x.scrollTop);
    }
  }), ae(() => {
    var _;
    return p(fe, null, [(_ = n.activator) == null ? void 0 : _.call(n, { isActive: d.value, props: Z({ ref: A, targetRef: D }, z.value, e.activatorProps) }), O.value && y.value && p(vn, { disabled: !c.value, to: c.value }, { default: () => [p("div", Z({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": d.value, "v-overlay--contained": e.contained }, u.value, o.value, e.class], style: [b.value, { top: le(R.value) }, e.style], ref: F }, C, l), [p(zr, Z({ color: g, modelValue: d.value && !!e.scrim }, T.value), null), p(tn, { appear: !0, persisted: !0, transition: e.transition, target: $.value, onAfterLeave: () => {
      f(), a("afterLeave");
    } }, { default: () => {
      var x;
      return [Fe(p("div", Z({ ref: V, class: ["v-overlay__content", e.contentClass], style: [I.value, N.value] }, j.value, e.contentProps), [(x = n.default) == null ? void 0 : x.call(n, { isActive: d })]), [[Vn, d.value], [Ze("click-outside"), { handler: E, closeConditional: B, include: () => [S.value] }]])];
    } })])] })]);
  }), { activatorEl: S, target: $, animateClick: U, contentEl: V, globalTop: m, localTop: h, updateLocation: H };
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
function Gt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
    n[l - 1] = arguments[l];
  return e[nl] = n, new Proxy(e, { get(a, i) {
    if (Reflect.has(a, i))
      return Reflect.get(a, i);
    if (typeof i != "symbol" && !i.startsWith("$") && !i.startsWith("__")) {
      for (const d of n)
        if (d.value && Reflect.has(d.value, i)) {
          const c = Reflect.get(d.value, i);
          return typeof c == "function" ? c.bind(d.value) : c;
        }
    }
  }, has(a, i) {
    if (Reflect.has(a, i))
      return !0;
    if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))
      return !1;
    for (const d of n)
      if (d.value && Reflect.has(d.value, i))
        return !0;
    return !1;
  }, set(a, i, d) {
    if (Reflect.has(a, i))
      return Reflect.set(a, i, d);
    if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))
      return !1;
    for (const c of n)
      if (c.value && Reflect.has(c.value, i))
        return Reflect.set(c.value, i, d);
    return !1;
  }, getOwnPropertyDescriptor(a, i) {
    var c;
    const d = Reflect.getOwnPropertyDescriptor(a, i);
    if (d)
      return d;
    if (typeof i != "symbol" && !i.startsWith("$") && !i.startsWith("__")) {
      for (const u of n) {
        if (!u.value)
          continue;
        const o = tl(u.value, i) ?? ("_" in u.value ? tl((c = u.value._) == null ? void 0 : c.setupState, i) : void 0);
        if (o)
          return o;
      }
      for (const u of n) {
        const o = u.value && u.value[nl];
        if (!o)
          continue;
        const s = o.slice();
        for (; s.length; ) {
          const y = s.shift(), f = tl(y.value, i);
          if (f)
            return f;
          const g = y.value && y.value[nl];
          g && s.push(...g);
        }
      }
    }
  } });
}
const Dr = Y({ id: String, ...gn(qa({ closeDelay: 250, closeOnContentClick: !0, locationStrategy: "connected", openDelay: 300, scrim: !1, scrollStrategy: "reposition", transition: { component: ta } }), ["absolute"]) }, "VMenu"), Lr = ee()({ name: "VMenu", props: Dr(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = ge(e, "modelValue"), { scopeId: a } = ja(), i = We(), d = v(() => e.id || `v-menu-${i}`), c = W(), u = se(ml, null), o = re(0);
  async function s(h) {
    var A, $, q;
    const b = h.relatedTarget, S = h.target;
    await Ie(), l.value && b !== S && ((A = c.value) != null && A.contentEl) && (($ = c.value) != null && $.globalTop) && ![document, c.value.contentEl].includes(S) && !c.value.contentEl.contains(S) && ((q = al(c.value.contentEl)[0]) == null || q.focus());
  }
  function y() {
    u == null || u.closeParents();
  }
  function f(h) {
    var b, S, A;
    !e.disabled && h.key === "Tab" && (qo(al((b = c.value) == null ? void 0 : b.contentEl, !1), h.shiftKey ? "prev" : "next", ($) => $.tabIndex >= 0) || (l.value = !1, (A = (S = c.value) == null ? void 0 : S.activatorEl) == null || A.focus()));
  }
  function g(h) {
    var S;
    if (e.disabled)
      return;
    const b = (S = c.value) == null ? void 0 : S.contentEl;
    b && l.value ? h.key === "ArrowDown" ? (h.preventDefault(), Vt(b, "next")) : h.key === "ArrowUp" && (h.preventDefault(), Vt(b, "prev")) : ["ArrowDown", "ArrowUp"].includes(h.key) && (l.value = !0, h.preventDefault(), setTimeout(() => setTimeout(() => g(h))));
  }
  De(ml, { register() {
    ++o.value;
  }, unregister() {
    --o.value;
  }, closeParents() {
    setTimeout(() => {
      o.value || (l.value = !1, u == null || u.closeParents());
    }, 40);
  } }), K(l, (h) => {
    h ? (u == null || u.register(), document.addEventListener("focusin", s, { once: !0 })) : (u == null || u.unregister(), document.removeEventListener("focusin", s));
  });
  const m = v(() => Z({ "aria-haspopup": "menu", "aria-expanded": String(l.value), "aria-owns": d.value, onKeydown: g }, e.activatorProps));
  return ae(() => {
    const h = Oo.filterProps(e);
    return p(Oo, Z({ ref: c, class: ["v-menu", e.class], style: e.style }, h, { modelValue: l.value, "onUpdate:modelValue": (b) => l.value = b, absolute: !0, activatorProps: m.value, "onClick:outside": y, onKeydown: f }, a), { activator: n.activator, default: function() {
      for (var b = arguments.length, S = new Array(b), A = 0; A < b; A++)
        S[A] = arguments[A];
      return p(ke, { root: "VMenu" }, { default: () => {
        var $;
        return [($ = n.default) == null ? void 0 : $.call(n, ...S)];
      } });
    } });
  }), Gt({ id: d, ΨopenChildren: o }, c);
} }), Wr = Y({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...ue(), ...rt({ transition: { component: la } }) }, "VCounter"), Ua = ee()({ name: "VCounter", functional: !0, props: Wr(), setup(e, t) {
  let { slots: n } = t;
  const l = v(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return ae(() => p(tn, { transition: e.transition }, { default: () => [Fe(p("div", { class: ["v-counter", e.class], style: e.style }, [n.default ? n.default({ counter: l.value, max: e.max, value: e.value }) : l.value]), [[Vn, e.active]])] })), {};
} }), Mr = Y({ floating: Boolean, ...ue() }, "VFieldLabel"), It = ee()({ name: "VFieldLabel", props: Mr(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => p(xa, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, n)), {};
} }), Rr = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Dl = Y({ appendInnerIcon: de, bgColor: String, clearable: Boolean, clearIcon: { type: de, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: de, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => Rr.includes(e) }, "onClick:clear": Re(), "onClick:appendInner": Re(), "onClick:prependInner": Re(), ...ue(), ...El(), ...Qe(), ...Be() }, "VField"), Ll = ee()({ name: "VField", inheritAttrs: !1, props: { id: String, ...Aa(), ...Dl() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: a } = t;
  const { themeClasses: i } = Oe(e), { loaderClasses: d } = Rt(e), { focusClasses: c, isFocused: u, focus: o, blur: s } = vt(e), { InputIcon: y } = Va(e), { roundedClasses: f } = en(e), { rtlClasses: g } = it(), m = v(() => e.dirty || e.active), h = v(() => !(e.singleLine || !e.label && !a.label)), b = We(), S = v(() => e.id || `input-${b}`), A = v(() => `${S.value}-messages`), $ = W(), q = W(), D = W(), z = v(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: j, backgroundColorStyles: T } = wn(te(e, "bgColor")), { textColorClasses: I, textColorStyles: O } = Ke(v(() => e.error || e.disabled ? void 0 : m.value && u.value ? e.color : e.baseColor));
  K(m, (V) => {
    if (h.value) {
      const N = $.value.$el, H = q.value.$el;
      requestAnimationFrame(() => {
        const E = kl(N), B = H.getBoundingClientRect(), w = B.x - E.x, M = B.y - E.y - (E.height / 2 - B.height / 2), R = B.width / 0.75, U = Math.abs(R - E.width) > 1 ? { maxWidth: le(R) } : void 0, P = getComputedStyle(N), G = getComputedStyle(H), _ = 1e3 * parseFloat(P.transitionDuration) || 150, x = parseFloat(G.getPropertyValue("--v-field-label-scale")), k = G.getPropertyValue("color");
        N.style.visibility = "visible", H.style.visibility = "hidden", xn(N, { transform: `translate(${w}px, ${M}px) scale(${x})`, color: k, ...U }, { duration: _, easing: Ot, direction: V ? "normal" : "reverse" }).finished.then(() => {
          N.style.removeProperty("visibility"), H.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const C = v(() => ({ isActive: m, isFocused: u, controlRef: D, blur: s, focus: o }));
  function F(V) {
    V.target !== document.activeElement && V.preventDefault();
  }
  return ae(() => {
    var w, M, R;
    const V = e.variant === "outlined", N = a["prepend-inner"] || e.prependInnerIcon, H = !(!e.clearable && !a.clear), E = !!(a["append-inner"] || e.appendInnerIcon || H), B = () => a.label ? a.label({ ...C.value, label: e.label, props: { for: S.value } }) : e.label;
    return p("div", Z({ class: ["v-field", { "v-field--active": m.value, "v-field--appended": E, "v-field--center-affix": e.centerAffix ?? !z.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": N, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !B(), [`v-field--variant-${e.variant}`]: !0 }, i.value, j.value, c.value, d.value, f.value, g.value, e.class], style: [T.value, e.style], onClick: F }, n), [p("div", { class: "v-field__overlay" }, null), p(Tl, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: a.loader }), N && p("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && p(y, { key: "prepend-icon", name: "prependInner" }, null), (w = a["prepend-inner"]) == null ? void 0 : w.call(a, C.value)]), p("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && h.value && p(It, { key: "floating-label", ref: q, class: [I.value], floating: !0, for: S.value, style: O.value }, { default: () => [B()] }), p(It, { ref: $, for: S.value }, { default: () => [B()] }), (M = a.default) == null ? void 0 : M.call(a, { ...C.value, props: { id: S.value, class: "v-field__input", "aria-describedby": A.value }, focus: o, blur: s })]), H && p(oa, { key: "clear" }, { default: () => [Fe(p("div", { class: "v-field__clearable", onMousedown: (U) => {
      U.preventDefault(), U.stopPropagation();
    } }, [a.clear ? a.clear() : p(y, { name: "clear" }, null)]), [[Vn, e.dirty]])] }), E && p("div", { key: "append", class: "v-field__append-inner" }, [(R = a["append-inner"]) == null ? void 0 : R.call(a, C.value), e.appendInnerIcon && p(y, { key: "append-icon", name: "appendInner" }, null)]), p("div", { class: ["v-field__outline", I.value], style: O.value }, [V && p(fe, null, [p("div", { class: "v-field__outline__start" }, null), h.value && p("div", { class: "v-field__outline__notch" }, [p(It, { ref: q, floating: !0, for: S.value }, { default: () => [B()] })]), p("div", { class: "v-field__outline__end" }, null)]), z.value && h.value && p(It, { ref: q, floating: !0, for: S.value }, { default: () => [B()] })])]);
  }), { controlRef: D };
} });
function Ha(e) {
  return Ro(e, Object.keys(Ll.props).filter((t) => !ol(t) && t !== "class" && t !== "style"));
}
const Nr = ["color", "file", "time", "date", "datetime-local", "week", "month"], Ya = Y({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...ft(), ...Dl() }, "VTextField"), gl = ee()({ name: "VTextField", directives: { Intersect: _l }, inheritAttrs: !1, props: Ya(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: a } = t;
  const i = ge(e, "modelValue"), { isFocused: d, focus: c, blur: u } = vt(e), o = v(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), s = v(() => n.maxlength ? n.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), y = v(() => ["plain", "underlined"].includes(e.variant));
  function f(z, j) {
    var T, I;
    e.autofocus && z && ((I = (T = j[0].target) == null ? void 0 : T.focus) == null || I.call(T));
  }
  const g = W(), m = W(), h = W(), b = v(() => Nr.includes(e.type) || e.persistentPlaceholder || d.value || e.active);
  function S() {
    var z;
    h.value !== document.activeElement && ((z = h.value) == null || z.focus()), d.value || c();
  }
  function A(z) {
    l("mousedown:control", z), z.target !== h.value && (S(), z.preventDefault());
  }
  function $(z) {
    S(), l("click:control", z);
  }
  function q(z) {
    z.stopPropagation(), S(), Ie(() => {
      i.value = null, Go(e["onClick:clear"], z);
    });
  }
  function D(z) {
    var T;
    const j = z.target;
    if (i.value = j.value, ((T = e.modelModifiers) == null ? void 0 : T.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const I = [j.selectionStart, j.selectionEnd];
      Ie(() => {
        j.selectionStart = I[0], j.selectionEnd = I[1];
      });
    }
  }
  return ae(() => {
    const z = !!(a.counter || e.counter !== !1 && e.counter != null), j = !(!z && !a.details), [T, I] = ot(n), { modelValue: O, ...C } = on.filterProps(e), F = Ha(e);
    return p(on, Z({ ref: g, modelValue: i.value, "onUpdate:modelValue": (V) => i.value = V, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-input--plain-underlined": y.value }, e.class], style: e.style }, T, C, { centerAffix: !y.value, focused: d.value }), { ...a, default: (V) => {
      let { id: N, isDisabled: H, isDirty: E, isReadonly: B, isValid: w } = V;
      return p(Ll, Z({ ref: m, onMousedown: A, onClick: $, "onClick:clear": q, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: e.role }, F, { id: N.value, active: b.value || E.value, dirty: E.value || e.dirty, disabled: H.value, focused: d.value, error: w.value === !1 }), { ...a, default: (M) => {
        let { props: { class: R, ...U } } = M;
        const P = Fe(p("input", Z({ ref: h, value: i.value, onInput: D, autofocus: e.autofocus, readonly: B.value, disabled: H.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: S, onBlur: u }, U, I), null), [[Ze("intersect"), { handler: f }, null, { once: !0 }]]);
        return p(fe, null, [e.prefix && p("span", { class: "v-text-field__prefix" }, [p("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), a.default ? p("div", { class: R, "data-no-activator": "" }, [a.default(), P]) : vi(P, { class: R }), e.suffix && p("span", { class: "v-text-field__suffix" }, [p("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: j ? (V) => {
      var N;
      return p(fe, null, [(N = a.details) == null ? void 0 : N.call(a, V), z && p(fe, null, [p("span", null, null), p(Ua, { active: e.persistentCounter || d.value, value: o.value, max: s.value }, a.counter)])]);
    } : void 0 });
  }), Gt({}, g, m, h);
} }), jr = Y({ renderless: Boolean, ...ue() }, "VVirtualScrollItem"), Gr = ee()({ name: "VVirtualScrollItem", inheritAttrs: !1, props: jr(), emits: { "update:height": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: a } = t;
  const { resizeRef: i, contentRect: d } = Vl(void 0, "border");
  K(() => {
    var c;
    return (c = d.value) == null ? void 0 : c.height;
  }, (c) => {
    c != null && l("update:height", c);
  }), ae(() => {
    var c, u;
    return e.renderless ? p(fe, null, [(c = a.default) == null ? void 0 : c.call(a, { itemRef: i })]) : p("div", Z({ ref: i, class: ["v-virtual-scroll__item", e.class], style: e.style }, n), [(u = a.default) == null ? void 0 : u.call(a)]);
  });
} }), qr = Y({ itemHeight: { type: [Number, String], default: null }, height: [Number, String] }, "virtual");
function Ur(e, t) {
  const n = Na(), l = re(0);
  Ne(() => {
    l.value = parseFloat(e.itemHeight || 0);
  });
  const a = re(0), i = re(Math.ceil((parseInt(e.height) || n.height.value) / (l.value || 16)) || 1), d = re(0), c = re(0), u = W(), o = W();
  let s = 0;
  const { resizeRef: y, contentRect: f } = Vl();
  Ne(() => {
    y.value = u.value;
  });
  const g = v(() => {
    var E;
    return u.value === document.documentElement ? n.height.value : ((E = f.value) == null ? void 0 : E.height) || parseInt(e.height) || 0;
  }), m = v(() => !!(u.value && o.value && g.value && l.value));
  let h = Array.from({ length: t.value.length }), b = Array.from({ length: t.value.length });
  const S = re(0);
  let A = -1;
  function $(E) {
    return h[E] || l.value;
  }
  const q = function(E, B) {
    let w = 0;
    const M = function() {
      for (var R = arguments.length, U = new Array(R), P = 0; P < R; P++)
        U[P] = arguments[P];
      clearTimeout(w), w = setTimeout(() => E(...U), r(B));
    };
    return M.clear = () => {
      clearTimeout(w);
    }, M.immediate = E, M;
  }(() => {
    const E = performance.now();
    b[0] = 0;
    const B = t.value.length;
    for (let w = 1; w <= B - 1; w++)
      b[w] = (b[w - 1] || 0) + $(w - 1);
    S.value = Math.max(S.value, performance.now() - E);
  }, S), D = K(m, (E) => {
    E && (D(), s = o.value.offsetTop, q.immediate(), F(), ~A && Ie(() => {
      Pe && window.requestAnimationFrame(() => {
        N(A), A = -1;
      });
    }));
  });
  function z(E) {
    return E = kn(E, 0, t.value.length - 1), b[E] || 0;
  }
  function j(E) {
    return function(B, w) {
      let M = B.length - 1, R = 0, U = 0, P = null, G = -1;
      if (B[M] < w)
        return M;
      for (; R <= M; )
        if (U = R + M >> 1, P = B[U], P > w)
          M = U - 1;
        else {
          if (!(P < w))
            return P === w ? U : R;
          G = U, R = U + 1;
        }
      return G;
    }(b, E);
  }
  K(g, (E, B) => {
    B && F();
  }), Ae(() => {
    q.clear();
  });
  let T = 0, I = 0, O = 0, C = -1;
  function F() {
    cancelAnimationFrame(C), C = requestAnimationFrame(V);
  }
  function V() {
    if (!u.value || !g.value)
      return;
    const E = T - s, B = Math.sign(I), w = kn(j(Math.max(0, E - 100)), 0, t.value.length), M = kn(j(E + g.value + 100) + 1, w + 1, t.value.length);
    if ((B !== -1 || w < a.value) && (B !== 1 || M > i.value)) {
      const R = z(a.value) - z(w), U = z(M) - z(i.value);
      Math.max(R, U) > 100 ? (a.value = w, i.value = M) : (w <= 0 && (a.value = w), M >= t.value.length && (i.value = M));
    }
    d.value = z(a.value), c.value = z(t.value.length) - z(i.value);
  }
  function N(E) {
    const B = z(E);
    !u.value || E && !B ? A = E : u.value.scrollTop = B;
  }
  const H = v(() => t.value.slice(a.value, i.value).map((E, B) => ({ raw: E, index: B + a.value })));
  return K(t, () => {
    h = Array.from({ length: t.value.length }), b = Array.from({ length: t.value.length }), q.immediate(), F();
  }, { deep: !0 }), { containerRef: u, markerRef: o, computedItems: H, paddingTop: d, paddingBottom: c, scrollToIndex: N, handleScroll: function() {
    if (!u.value || !o.value)
      return;
    const E = u.value.scrollTop, B = performance.now();
    B - O > 500 ? (I = Math.sign(E - T), s = o.value.offsetTop) : I = E - T, T = E, O = B, F();
  }, handleScrollend: function() {
    u.value && o.value && (I = 0, O = 0, F());
  }, handleItemResize: function(E, B) {
    const w = h[E], M = l.value;
    l.value = M ? Math.min(l.value, B) : B, w === B && M === l.value || (h[E] = B, q());
  } };
}
const Hr = Y({ items: { type: Array, default: () => [] }, renderless: Boolean, ...qr(), ...ue(), ...hn() }, "VVirtualScroll"), Yr = ee()({ name: "VVirtualScroll", props: Hr(), setup(e, t) {
  let { slots: n } = t;
  const l = Ce("VVirtualScroll"), { dimensionStyles: a } = bn(e), { containerRef: i, markerRef: d, handleScroll: c, handleScrollend: u, handleItemResize: o, scrollToIndex: s, paddingTop: y, paddingBottom: f, computedItems: g } = Ur(e, te(e, "items"));
  return un(() => e.renderless, () => {
    function m() {
      var b, S;
      const h = arguments.length > 0 && arguments[0] !== void 0 && arguments[0] ? "addEventListener" : "removeEventListener";
      i.value === document.documentElement ? (document[h]("scroll", c, { passive: !0 }), document[h]("scrollend", u)) : ((b = i.value) == null || b[h]("scroll", c, { passive: !0 }), (S = i.value) == null || S[h]("scrollend", u));
    }
    An(() => {
      i.value = Zo(l.vnode.el, !0), m(!0);
    }), Ae(m);
  }), ae(() => {
    const m = g.value.map((h) => p(Gr, { key: h.index, renderless: e.renderless, "onUpdate:height": (b) => o(h.index, b) }, { default: (b) => {
      var S;
      return (S = n.default) == null ? void 0 : S.call(n, { item: h.raw, index: h.index, ...b });
    } }));
    return e.renderless ? p(fe, null, [p("div", { ref: d, class: "v-virtual-scroll__spacer", style: { paddingTop: le(y.value) } }, null), m, p("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: le(f.value) } }, null)]) : p("div", { ref: i, class: ["v-virtual-scroll", e.class], onScrollPassive: c, onScrollend: u, style: [a.value, e.style] }, [p("div", { ref: d, class: "v-virtual-scroll__container", style: { paddingTop: le(y.value), paddingBottom: le(f.value) } }, [m])]);
  }), { scrollToIndex: s };
} });
function Xr(e, t) {
  const n = re(!1);
  let l;
  return { onListScroll: function(a) {
    cancelAnimationFrame(l), n.value = !0, l = requestAnimationFrame(() => {
      l = requestAnimationFrame(() => {
        n.value = !1;
      });
    });
  }, onListKeydown: async function(a) {
    var c, u;
    if (a.key === "Tab" && ((c = t.value) == null || c.focus()), !["PageDown", "PageUp", "Home", "End"].includes(a.key))
      return;
    const i = (u = e.value) == null ? void 0 : u.$el;
    if (!i)
      return;
    a.key !== "Home" && a.key !== "End" || i.scrollTo({ top: a.key === "Home" ? 0 : i.scrollHeight, behavior: "smooth" }), await async function() {
      await new Promise((o) => requestAnimationFrame(o)), await new Promise((o) => requestAnimationFrame(o)), await new Promise((o) => requestAnimationFrame(o)), await new Promise((o) => {
        if (n.value) {
          const s = K(n, () => {
            s(), o();
          });
        } else
          o();
      });
    }();
    const d = i.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (a.key === "PageDown" || a.key === "Home") {
      const o = i.getBoundingClientRect().top;
      for (const s of d)
        if (s.getBoundingClientRect().top >= o) {
          s.focus();
          break;
        }
    } else {
      const o = i.getBoundingClientRect().bottom;
      for (const s of [...d].reverse())
        if (s.getBoundingClientRect().bottom <= o) {
          s.focus();
          break;
        }
    }
  } };
}
const Kr = Y({ chips: Boolean, closableChips: Boolean, closeText: { type: String, default: "$vuetify.close" }, openText: { type: String, default: "$vuetify.open" }, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, menu: Boolean, menuIcon: { type: de, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, itemColor: String, ...La({ itemChildren: !1 }) }, "Select"), Jr = Y({ ...Kr(), ...gn(Ya({ modelValue: null, role: "button" }), ["validationValue", "dirty", "appendInnerIcon"]), ...rt({ transition: { component: ta } }) }, "VSelect"), Zr = ee()({ name: "VSelect", props: Jr(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:menu": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { t: l } = Al(), a = W(), i = W(), d = W(), c = ge(e, "menu"), u = v({ get: () => c.value, set: (B) => {
    var w;
    c.value && !B && ((w = i.value) != null && w.ΨopenChildren) || (c.value = B);
  } }), { items: o, transformIn: s, transformOut: y } = function(B) {
    const w = v(() => Wa(B, B.items)), M = v(() => w.value.some((R) => R.value === null));
    return { items: w, transformIn: function(R) {
      return M.value || (R = R.filter((U) => U !== null)), R.map((U) => B.returnObject && typeof U == "string" ? vl(B, U) : w.value.find((P) => B.valueComparator(U, P.value)) || vl(B, U));
    }, transformOut: function(R) {
      return B.returnObject ? R.map((U) => {
        let { raw: P } = U;
        return P;
      }) : R.map((U) => {
        let { value: P } = U;
        return P;
      });
    } };
  }(e), f = ge(e, "modelValue", [], (B) => s(B === null ? [null] : He(B)), (B) => {
    const w = y(B);
    return e.multiple ? w : w[0] ?? null;
  }), g = v(() => typeof e.counterValue == "function" ? e.counterValue(f.value) : typeof e.counterValue == "number" ? e.counterValue : f.value.length), m = _a(), h = v(() => f.value.map((B) => B.value)), b = re(!1), S = v(() => u.value ? e.closeText : e.openText);
  let A, $ = "";
  const q = v(() => e.hideSelected ? o.value.filter((B) => !f.value.some((w) => w === B)) : o.value), D = v(() => e.hideNoData && !o.value.length || e.readonly || (m == null ? void 0 : m.isReadonly.value)), z = W(), { onListScroll: j, onListKeydown: T } = Xr(z, a);
  function I(B) {
    e.openOnClear && (u.value = !0);
  }
  function O() {
    D.value || (u.value = !u.value);
  }
  function C(B) {
    var R, U;
    if (!B.key || e.readonly || m != null && m.isReadonly.value || (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(B.key) && B.preventDefault(), ["Enter", "ArrowDown", " "].includes(B.key) && (u.value = !0), ["Escape", "Tab"].includes(B.key) && (u.value = !1), B.key === "Home" ? (R = z.value) == null || R.focus("first") : B.key === "End" && ((U = z.value) == null || U.focus("last")), e.multiple || !function(P) {
      const G = P.key.length === 1, _ = !P.ctrlKey && !P.metaKey && !P.altKey;
      return G && _;
    }(B)))
      return;
    const w = performance.now();
    w - A > 1e3 && ($ = ""), $ += B.key.toLowerCase(), A = w;
    const M = o.value.find((P) => P.title.toLowerCase().startsWith($));
    M !== void 0 && (f.value = [M]);
  }
  function F(B) {
    if (e.multiple) {
      const w = f.value.findIndex((M) => e.valueComparator(M.value, B.value));
      if (w === -1)
        f.value = [...f.value, B];
      else {
        const M = [...f.value];
        M.splice(w, 1), f.value = M;
      }
    } else
      f.value = [B], u.value = !1;
  }
  function V(B) {
    var w;
    (w = z.value) != null && w.$el.contains(B.relatedTarget) || (u.value = !1);
  }
  function N() {
    var B;
    b.value && ((B = a.value) == null || B.focus());
  }
  function H(B) {
    b.value = !0;
  }
  function E(B) {
    if (B == null)
      f.value = [];
    else if (At(a.value, ":autofill") || At(a.value, ":-webkit-autofill")) {
      const w = o.value.find((M) => M.title === B);
      w && F(w);
    } else
      a.value && (a.value.value = "");
  }
  return K(u, () => {
    if (!e.hideSelected && u.value && f.value.length) {
      const B = q.value.findIndex((w) => f.value.some((M) => e.valueComparator(M.value, w.value)));
      Pe && window.requestAnimationFrame(() => {
        var w;
        B >= 0 && ((w = d.value) == null || w.scrollToIndex(B));
      });
    }
  }), ae(() => {
    const B = !(!e.chips && !n.chip), w = !!(!e.hideNoData || q.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), M = f.value.length > 0, R = gl.filterProps(e), U = M || !b.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
    return p(gl, Z({ ref: a }, R, { modelValue: f.value.map((P) => P.props.value).join(", "), "onUpdate:modelValue": E, focused: b.value, "onUpdate:focused": (P) => b.value = P, validationValue: f.externalValue, counterValue: g.value, dirty: M, class: ["v-select", { "v-select--active-menu": u.value, "v-select--chips": !!e.chips, ["v-select--" + (e.multiple ? "multiple" : "single")]: !0, "v-select--selected": f.value.length, "v-select--selection-slot": !!n.selection }, e.class], style: e.style, inputmode: "none", placeholder: U, "onClick:clear": I, "onMousedown:control": O, onBlur: V, onKeydown: C, "aria-label": l(S.value), title: l(S.value) }), { ...n, default: () => p(fe, null, [p(Lr, Z({ ref: i, modelValue: u.value, "onUpdate:modelValue": (P) => u.value = P, activator: "parent", contentClass: "v-select__content", disabled: D.value, eager: e.eager, maxHeight: 310, openOnClick: !1, closeOnContentClick: !1, transition: e.transition, onAfterLeave: N }, e.menuProps), { default: () => [w && p(wr, { ref: z, selected: h.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (P) => P.preventDefault(), onKeydown: T, onFocusin: H, onScrollPassive: j, tabindex: "-1", color: e.itemColor ?? e.color }, { default: () => {
      var P, G, _;
      return [(P = n["prepend-item"]) == null ? void 0 : P.call(n), !q.value.length && !e.hideNoData && (((G = n["no-data"]) == null ? void 0 : G.call(n)) ?? p(zt, { title: l(e.noDataText) }, null)), p(Yr, { ref: d, renderless: !0, items: q.value }, { default: (x) => {
        var ye;
        let { item: k, index: L, itemRef: X } = x;
        const Q = Z(k.props, { ref: X, key: L, onClick: () => F(k) });
        return ((ye = n.item) == null ? void 0 : ye.call(n, { item: k, index: L, props: Q })) ?? p(zt, Z(Q, { role: "option" }), { prepend: (Ve) => {
          let { isSelected: xe } = Ve;
          return p(fe, null, [e.multiple && !e.hideSelected ? p(cl, { key: k.value, modelValue: xe, ripple: !1, tabindex: "-1" }, null) : void 0, k.props.prependIcon && p(pe, { icon: k.props.prependIcon }, null)]);
        } });
      } }), (_ = n["append-item"]) == null ? void 0 : _.call(n)];
    } })] }), f.value.map((P, G) => {
      const _ = { "onClick:close": function(L) {
        L.stopPropagation(), L.preventDefault(), F(P);
      }, onMousedown(L) {
        L.preventDefault(), L.stopPropagation();
      }, modelValue: !0, "onUpdate:modelValue": void 0 }, x = B ? !!n.chip : !!n.selection, k = x ? Uo(B ? n.chip({ item: P, index: G, props: _ }) : n.selection({ item: P, index: G })) : void 0;
      if (!x || k)
        return p("div", { key: P.value, class: "v-select__selection" }, [B ? n.chip ? p(ke, { key: "chip-defaults", defaults: { VChip: { closable: e.closableChips, size: "small", text: P.title } } }, { default: () => [k] }) : p(ur, Z({ key: "chip", closable: e.closableChips, size: "small", text: P.title, disabled: P.props.disabled }, _), null) : k ?? p("span", { class: "v-select__selection-text" }, [P.title, e.multiple && G < f.value.length - 1 && p("span", { class: "v-select__selection-comma" }, [Lo(",")])])]);
    })]), "append-inner": function() {
      var x;
      for (var P = arguments.length, G = new Array(P), _ = 0; _ < P; _++)
        G[_] = arguments[_];
      return p(fe, null, [(x = n["append-inner"]) == null ? void 0 : x.call(n, ...G), e.menuIcon ? p(pe, { class: "v-select__menu-icon", icon: e.menuIcon }, null) : void 0]);
    } });
  }), Gt({ isFocused: b, menu: u, select: F }, a);
} }), Qr = ee()({ name: "VCardActions", props: ue(), setup(e, t) {
  let { slots: n } = t;
  return Tn({ VBtn: { slim: !0, variant: "text" } }), ae(() => {
    var l;
    return p("div", { class: ["v-card-actions", e.class], style: e.style }, [(l = n.default) == null ? void 0 : l.call(n)]);
  }), {};
} }), es = at("v-card-subtitle"), ns = at("v-card-title"), ts = Y({ appendAvatar: String, appendIcon: de, prependAvatar: String, prependIcon: de, subtitle: [String, Number], title: [String, Number], ...ue(), ...qe() }, "VCardItem"), ls = ee()({ name: "VCardItem", props: ts(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => {
    var o;
    const l = !(!e.prependAvatar && !e.prependIcon), a = !(!l && !n.prepend), i = !(!e.appendAvatar && !e.appendIcon), d = !(!i && !n.append), c = !(e.title == null && !n.title), u = !(e.subtitle == null && !n.subtitle);
    return p("div", { class: ["v-card-item", e.class], style: e.style }, [a && p("div", { key: "prepend", class: "v-card-item__prepend" }, [n.prepend ? p(ke, { key: "prepend-defaults", disabled: !l, defaults: { VAvatar: { density: e.density, icon: e.prependIcon, image: e.prependAvatar } } }, n.prepend) : l && p(Fn, { key: "prepend-avatar", density: e.density, icon: e.prependIcon, image: e.prependAvatar }, null)]), p("div", { class: "v-card-item__content" }, [c && p(ns, { key: "title" }, { default: () => {
      var s;
      return [((s = n.title) == null ? void 0 : s.call(n)) ?? e.title];
    } }), u && p(es, { key: "subtitle" }, { default: () => {
      var s;
      return [((s = n.subtitle) == null ? void 0 : s.call(n)) ?? e.subtitle];
    } }), (o = n.default) == null ? void 0 : o.call(n)]), d && p("div", { key: "append", class: "v-card-item__append" }, [n.append ? p(ke, { key: "append-defaults", disabled: !i, defaults: { VAvatar: { density: e.density, icon: e.appendIcon, image: e.appendAvatar } } }, n.append) : i && p(Fn, { key: "append-avatar", density: e.density, icon: e.appendIcon, image: e.appendAvatar }, null)])]);
  }), {};
} }), Cn = at("v-card-text"), os = Y({ appendAvatar: String, appendIcon: de, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: de, ripple: { type: [Boolean, Object], default: !0 }, subtitle: [String, Number], text: [String, Number], title: [String, Number], ...zn(), ...ue(), ...qe(), ...hn(), ...Ln(), ...El(), ...Pl(), ...ya(), ...Qe(), ...jt(), ...ze(), ...Be(), ...an({ variant: "elevated" }) }, "VCard"), Mn = ee()({ name: "VCard", directives: { Ripple: pt }, props: os(), setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { themeClasses: a } = Oe(e), { borderClasses: i } = Dn(e), { colorClasses: d, colorStyles: c, variantClasses: u } = ut(e), { densityClasses: o } = nn(e), { dimensionStyles: s } = bn(e), { elevationClasses: y } = Wn(e), { loaderClasses: f } = Rt(e), { locationStyles: g } = $l(e), { positionClasses: m } = ma(e), { roundedClasses: h } = en(e), b = Nt(e, n), S = v(() => e.link !== !1 && b.isLink.value), A = v(() => !e.disabled && e.link !== !1 && (e.link || b.isClickable.value));
  return ae(() => {
    const $ = S.value ? "a" : e.tag, q = !(!l.title && e.title == null), D = !(!l.subtitle && e.subtitle == null), z = q || D, j = !!(l.append || e.appendAvatar || e.appendIcon), T = !!(l.prepend || e.prependAvatar || e.prependIcon), I = !(!l.image && !e.image), O = z || T || j, C = !(!l.text && e.text == null);
    return Fe(p($, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": A.value }, a.value, i.value, d.value, o.value, y.value, f.value, m.value, h.value, u.value, e.class], style: [c.value, s.value, g.value, e.style], href: b.href.value, onClick: A.value && b.navigate, tabindex: e.disabled ? -1 : void 0 }, { default: () => {
      var F;
      return [I && p("div", { key: "image", class: "v-card__image" }, [l.image ? p(ke, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: !0, src: e.image } } }, l.image) : p(ia, { key: "image-img", cover: !0, src: e.image }, null)]), p(Tl, { name: "v-card", active: !!e.loading, color: typeof e.loading == "boolean" ? void 0 : e.loading }, { default: l.loader }), O && p(ls, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: l.item, prepend: l.prepend, title: l.title, subtitle: l.subtitle, append: l.append }), C && p(Cn, { key: "text" }, { default: () => {
        var V;
        return [((V = l.text) == null ? void 0 : V.call(l)) ?? e.text];
      } }), (F = l.default) == null ? void 0 : F.call(l), l.actions && p(Qr, null, { default: l.actions }), st(A.value, "v-card")];
    } }), [[Ze("ripple"), A.value && e.ripple]]);
  }), {};
} }), as = Y({ indeterminate: Boolean, inset: Boolean, flat: Boolean, loading: { type: [Boolean, String], default: !1 }, ...ft(), ...zl() }, "VSwitch"), is = ee()({ name: "VSwitch", inheritAttrs: !1, props: as(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const a = ge(e, "indeterminate"), i = ge(e, "modelValue"), { loaderClasses: d } = Rt(e), { isFocused: c, focus: u, blur: o } = vt(e), s = W(), y = v(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), f = We(), g = v(() => e.id || `switch-${f}`);
  function m() {
    a.value && (a.value = !1);
  }
  function h(b) {
    var S, A;
    b.stopPropagation(), b.preventDefault(), (A = (S = s.value) == null ? void 0 : S.input) == null || A.click();
  }
  return ae(() => {
    const [b, S] = ot(n), A = on.filterProps(e), $ = Tt.filterProps(e);
    return p(on, Z({ class: ["v-switch", { "v-switch--inset": e.inset }, { "v-switch--indeterminate": a.value }, d.value, e.class] }, b, A, { modelValue: i.value, "onUpdate:modelValue": (q) => i.value = q, id: g.value, focused: c.value, style: e.style }), { ...l, default: (q) => {
      let { id: D, messagesId: z, isDisabled: j, isReadonly: T, isValid: I } = q;
      return p(Tt, Z({ ref: s }, $, { modelValue: i.value, "onUpdate:modelValue": [(O) => i.value = O, m], id: D.value, "aria-describedby": z.value, type: "checkbox", "aria-checked": a.value ? "mixed" : void 0, disabled: j.value, readonly: T.value, onFocus: u, onBlur: o }, S), { ...l, default: (O) => {
        let { backgroundColorClasses: C, backgroundColorStyles: F } = O;
        return p("div", { class: ["v-switch__track", ...C.value], style: F.value, onClick: h }, null);
      }, input: (O) => {
        let { inputNode: C, icon: F, backgroundColorClasses: V, backgroundColorStyles: N } = O;
        return p(fe, null, [C, p("div", { class: ["v-switch__thumb", { "v-switch__thumb--filled": F || e.loading }, e.inset ? void 0 : V.value], style: e.inset ? void 0 : N.value }, [p(Ti, null, { default: () => [e.loading ? p(Tl, { name: "v-switch", active: !0, color: I.value === !1 ? void 0 : y.value }, { default: (H) => l.loader ? l.loader(H) : p(fa, { active: H.isActive, color: H.color, indeterminate: !0, size: "16", width: "2" }, null) }) : F && p(pe, { key: F, icon: F, size: "x-small" }, null)] })])]);
      } });
    } });
  }), {};
} }), rs = Y({ autoGrow: Boolean, autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, noResize: Boolean, rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) }, maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, suffix: String, modelModifiers: Object, ...ft(), ...Dl() }, "VTextarea"), ss = ee()({ name: "VTextarea", directives: { Intersect: _l }, inheritAttrs: !1, props: rs(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: a } = t;
  const i = ge(e, "modelValue"), { isFocused: d, focus: c, blur: u } = vt(e), o = v(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : (i.value || "").toString().length), s = v(() => n.maxlength ? n.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter);
  function y(C, F) {
    var V, N;
    e.autofocus && C && ((N = (V = F[0].target) == null ? void 0 : V.focus) == null || N.call(V));
  }
  const f = W(), g = W(), m = re(""), h = W(), b = v(() => e.persistentPlaceholder || d.value || e.active);
  function S() {
    var C;
    h.value !== document.activeElement && ((C = h.value) == null || C.focus()), d.value || c();
  }
  function A(C) {
    S(), l("click:control", C);
  }
  function $(C) {
    l("mousedown:control", C);
  }
  function q(C) {
    C.stopPropagation(), S(), Ie(() => {
      i.value = "", Go(e["onClick:clear"], C);
    });
  }
  function D(C) {
    var V;
    const F = C.target;
    if (i.value = F.value, (V = e.modelModifiers) == null ? void 0 : V.trim) {
      const N = [F.selectionStart, F.selectionEnd];
      Ie(() => {
        F.selectionStart = N[0], F.selectionEnd = N[1];
      });
    }
  }
  const z = W(), j = W(+e.rows), T = v(() => ["plain", "underlined"].includes(e.variant));
  function I() {
    e.autoGrow && Ie(() => {
      if (!z.value || !g.value)
        return;
      const C = getComputedStyle(z.value), F = getComputedStyle(g.value.$el), V = parseFloat(C.getPropertyValue("--v-field-padding-top")) + parseFloat(C.getPropertyValue("--v-input-padding-top")) + parseFloat(C.getPropertyValue("--v-field-padding-bottom")), N = z.value.scrollHeight, H = parseFloat(C.lineHeight), E = kn(N ?? 0, Math.max(parseFloat(e.rows) * H + V, parseFloat(F.getPropertyValue("--v-input-control-height"))), parseFloat(e.maxRows) * H + V || 1 / 0);
      j.value = Math.floor((E - V) / H), m.value = le(E);
    });
  }
  let O;
  return Ne(() => {
    e.autoGrow || (j.value = +e.rows);
  }), An(I), K(i, I), K(() => e.rows, I), K(() => e.maxRows, I), K(() => e.density, I), K(z, (C) => {
    C ? (O = new ResizeObserver(I), O.observe(z.value)) : O == null || O.disconnect();
  }), Je(() => {
    O == null || O.disconnect();
  }), ae(() => {
    const C = !!(a.counter || e.counter || e.counterValue), F = !(!C && !a.details), [V, N] = ot(n), { modelValue: H, ...E } = on.filterProps(e), B = Ha(e);
    return p(on, Z({ ref: f, modelValue: i.value, "onUpdate:modelValue": (w) => i.value = w, class: ["v-textarea v-text-field", { "v-textarea--prefixed": e.prefix, "v-textarea--suffixed": e.suffix, "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-textarea--auto-grow": e.autoGrow, "v-textarea--no-resize": e.noResize || e.autoGrow, "v-input--plain-underlined": T.value }, e.class], style: e.style }, V, E, { centerAffix: j.value === 1 && !T.value, focused: d.value }), { ...a, default: (w) => {
      let { id: M, isDisabled: R, isDirty: U, isReadonly: P, isValid: G } = w;
      return p(Ll, Z({ ref: g, style: { "--v-textarea-control-height": m.value }, onClick: A, onMousedown: $, "onClick:clear": q, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, B, { id: M.value, active: b.value || U.value, centerAffix: j.value === 1 && !T.value, dirty: U.value || e.dirty, disabled: R.value, focused: d.value, error: G.value === !1 }), { ...a, default: (_) => {
        let { props: { class: x, ...k } } = _;
        return p(fe, null, [e.prefix && p("span", { class: "v-text-field__prefix" }, [e.prefix]), Fe(p("textarea", Z({ ref: h, class: x, value: i.value, onInput: D, autofocus: e.autofocus, readonly: P.value, disabled: R.value, placeholder: e.placeholder, rows: e.rows, name: e.name, onFocus: S, onBlur: u }, k, N), null), [[Ze("intersect"), { handler: y }, null, { once: !0 }]]), e.autoGrow && Fe(p("textarea", { class: [x, "v-textarea__sizer"], id: `${k.id}-sizer`, "onUpdate:modelValue": (L) => i.value = L, ref: z, readonly: !0, "aria-hidden": "true" }, null), [[fi, i.value]]), e.suffix && p("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: F ? (w) => {
      var M;
      return p(fe, null, [(M = a.details) == null ? void 0 : M.call(a, w), C && p(fe, null, [p("span", null, null), p(Ua, { active: e.persistentCounter || d.value, value: o.value, max: s.value }, a.counter)])]);
    } : void 0 });
  }), Gt({}, f, g, h);
} }), Xa = je({ __name: "BooleanIcons", props: Te({ iconFalseColor: {}, iconFalseTitle: {}, iconTrueColor: {}, iconTrueTitle: {}, iconFalse: {}, iconTrue: {} }, { modelValue: {} }), emits: ["update:modelValue"], setup(e) {
  const t = e, n = se(Symbol.for("vuetify:icons")), l = fn(e, "modelValue"), a = v(() => Le({ icon: t.iconFalse, iconOptions: n, name: "false" })), i = v(() => Le({ icon: t.iconTrue, iconOptions: n, name: "true" }));
  return (d, c) => l.value ? (J(), he(r(pe), { key: 0, class: "v-inline-fields--boolean-icons fa-fw", color: d.iconTrueColor, icon: r(i), size: "x-small", title: d.iconTrueTitle }, null, 8, ["color", "icon", "title"])) : (J(), he(r(pe), { key: 1, class: "v-inline-fields--boolean-icons fa-fw", color: d.iconFalseColor, icon: r(a), size: "x-small", title: d.iconFalseTitle }, null, 8, ["color", "icon", "title"]));
} }), oe = "v-inline-fields", Rn = (e) => {
  const { cell: t = !1, field: n = "", density: l = "", disabled: a = !1, iconSet: i = "mdi", loading: d = !1, loadingWait: c, tableField: u = !1, variant: o } = e, s = l && o;
  return { [`${oe}`]: !0, [`${oe}--container`]: !0, [`${oe}--container-cell`]: t, [`${oe}--container-disabled`]: r(a), [`${oe}--container-table`]: u, [`${oe}--container-icon-set-${i}`]: !0, [`${oe}--container-loading`]: d && c, [`${oe}--container-${n}`]: !0, [`${oe}--container-${n}-${l}`]: !0, [`${oe}--container-${n}-${l}-${o}`]: s, [`${oe}--container-${n}-${o}`]: o, [`${oe}--container-${n}-${o}-${l}`]: s, [`${oe}--container-${l}`]: l, [`${oe}--container-${l}-${n}`]: l, [`${oe}--container-${l}-${o}`]: s, [`${oe}--container-${o}`]: o, [`${oe}--container-${o}-${l}`]: s, [`${oe}--container-${o}-${n}`]: o };
}, Nn = (e) => {
  const { cell: t = !1, cellUnderlineFullWidth: n = !0, field: l = "", density: a = "" } = e;
  return { [`${oe}--display-container-cell`]: t, [`${oe}--display-container-cell-underline-full-width`]: t && n, [`${oe}--display-container`]: !0, [`${oe}--display-wrapper-value`]: !0, [`${l}`]: !0, "v-input": !0, [`v-input--density-${a}`]: !0, "v-input--horizontal": !0 };
}, qt = (e) => {
  const { density: t = "", variant: n = "" } = e;
  return { "v-input": !0, "v-input--dirty": !0, "v-input--horizontal": !0, "v-text-field": !0, [`v-input--density-${t}`]: !0, [`v-text-field--plain-${n}`]: !0 };
}, Ka = (e) => {
  const { density: t = "" } = e;
  return { [`${oe}--selection-control`]: !0, [`v-selection-control--density-${t}`]: !0 };
}, Wl = (e, t, n) => {
  const { error: l = !1, empty: a = !1 } = n;
  return { [`${oe}`]: !0, [`${oe}--display-value-${e}`]: !0, [`${oe}--display-value`]: !0, [`${oe}--display-value-empty`]: r(a), [`text-${t}`]: !r(l), "text-danger": r(l) };
}, jn = (e) => {
  const { name: t, active: n = !1 } = e;
  return { [`${oe}`]: !0, [`${oe}--field`]: !0, [`${oe}--field-${t}`]: !0, [`${oe}--field-active`]: n };
}, Gn = (e) => {
  const { name: t, showField: n } = e;
  return { [`${oe}--card-container`]: !0, [`${oe}--card-container-${t}`]: !0, "d-none": !n };
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
    let g = y;
    return Object.entries(f).forEach(([m, h]) => {
      y.toLowerCase() != m.toLowerCase() || (g = h);
    }), g;
  }(e), n = 0, l = 0, a = 0, i = 100, d = 0, c = 0, u = 0;
  if (t.substring(0, 1) === "#")
    t = function(y) {
      let f = y.replace("#", "");
      f.length === 3 && (f = f.split("").map((S) => S + S).join(""));
      const g = parseInt(f.substring(0, 2), 16), m = parseInt(f.substring(2, 4), 16), h = parseInt(f.substring(4, 6), 16);
      return [g, m, h, 100];
    }(t);
  else if (t.includes("rgb"))
    t = [...t.matchAll(/[\d+.\d+]+/g)].map(Number);
  else if (t.includes("hsl"))
    return t = [...t.matchAll(/[\d+.\d+]+/g)].map(String), n = t[0], l = t[1], a = t[2], i = Po(t[3]), `${n} ${l}% ${a}% / ${i}%`;
  [d, c, u, i] = t, d /= 255, c /= 255, u /= 255, i = Po(i);
  const o = Math.max(d, c, u), s = Math.min(d, c, u);
  if (o === null || !s === null || isNaN(o) || isNaN(s)) {
    const y = "0 0% 100% / 12%";
    return console.warn(`[VuetifyInlineFields: The "color" prop value using "${t}" doesn't exist. Using the value "hsl(${y})" in it's place.`), y;
  }
  if (n = (o + s) / 2, l = (o + s) / 2, a = (o + s) / 2, o == s)
    n = l = 0;
  else {
    const y = o - s;
    switch (l = a > 0.5 ? y / (2 - o - s) : y / (o + s), o) {
      case d:
        n = (c - u) / y + (c < u ? 6 : 0);
        break;
      case c:
        n = (u - d) / y + 2;
        break;
      case u:
        n = (d - c) / y + 4;
    }
    n /= 6;
  }
  return n = Math.round(360 * n), l = Math.round(100 * l), a = Math.round(100 * a), `${n} ${l}% ${a}% / ${i}%`;
}
const us = (e, t) => {
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
    return Object.entries(i).find(([d]) => d === l);
  }(e, t);
  return n ? `hsl(${$o(n[1])})` : `hsl(${$o(e)})`;
}, Kn = (e) => {
  const { str: t, unit: n = "px" } = e;
  if (t != null && t !== "")
    return +t ? `${Number(t)}${n}` : String(t);
}, Ja = (e) => {
  var a;
  const { modelValue: t, trueValue: n } = e, l = r(t);
  return ((a = l == null ? void 0 : l.toLowerCase) == null ? void 0 : a.call(l)) === "true" || l === "1" || l == "1" || l === !0 || l == n || l === n;
}, Ml = (e) => {
  const { underlineStyle: t, underlineWidth: n, color: l, error: a, theme: i, underlined: d } = e;
  let { underlineColor: c } = e;
  c = c || l;
  const u = { "border-bottom-color": us(c, i), "border-bottom-style": t, "border-bottom-width": n };
  return r(a) && (u["border-bottom-color"] = "rgb(var(--v-theme-danger))"), d || (u["border-bottom"] = "none"), u;
}, dn = (e) => {
  const { cardMinWidth: t, cardOffsetX: n, cardOffsetY: l, cardWidth: a, field: i, name: d = "" } = e, c = ((s) => {
    const { cardOffsetX: y, cardOffsetY: f, field: g } = s;
    if (!g)
      return { bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0, x: 0, y: 0 };
    const { x: m, y: h } = g.getBoundingClientRect(), { width: b, height: S } = g.getBoundingClientRect(), { right: A, bottom: $ } = g.getBoundingClientRect();
    return { bottom: Kn({ str: $ + Number(f) }), height: S, left: Kn({ str: 0 + Number(y) }), right: Kn({ str: A + Number(y) }), top: Kn({ str: 2 + Number(f) }), width: Kn({ str: b }), x: m, y: h };
  })({ cardOffsetX: n, cardOffsetY: l, field: i });
  let u = t, o = a;
  return o || (o = d === "checkbox" ? "fit-content" : c.width), u || (u = d === "checkbox" ? "fit-content" : c.width), { left: c.left, top: c.top, width: o, zIndex: 10 };
}, Ut = je({ __name: "DisplayedValue", props: { color: {}, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayValue: {}, empty: { type: Boolean }, error: { type: Boolean }, field: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean } }, emits: ["toggleField"], setup(e, { emit: t }) {
  const n = t, l = e, a = yn(), i = Il(), d = { displayValue: l.displayValue, empty: l.empty, error: l.error }, c = v(() => Wl(l.field, l.valueColor, { empty: l.empty, error: l.error })), u = v(() => Ml({ color: l.color, error: l.error, theme: i, underlineColor: l.underlineColor, underlineStyle: l.underlineStyle, underlineWidth: l.underlineWidth, underlined: l.underlined })), o = v(() => ((f) => {
    const { underlineWidth: g } = f;
    return { borderBottom: `${g || "0px"} solid transparent` };
  })({ underlineWidth: l.underlineWidth })), s = (f, g = !1) => ((m) => {
    const { inner: h = !1, position: b } = m;
    return { [`${oe}--display-icon`]: !h, [`${oe}--display-${b}-icon`]: !h, [`${oe}--display-${b}-inner-icon`]: h, "me-1": b === "prepend", "ms-1": b === "append" };
  })({ inner: g, position: f });
  function y() {
    n("toggleField");
  }
  return (f, g) => (J(), ie("div", { class: "v-inline-fields--display-wrapper", onClick: y }, [f.displayPrependIcon || r(a)["display.prepend"] ? (J(), ie("div", { key: 0, class: ne(s("prepend")), style: be(r(o)) }, [r(a)["display.prepend"] ? _e(f.$slots, "display.prepend", me(Z({ key: 0 }, d))) : (J(), he(pe, { key: 1, color: f.displayPrependIconColor, icon: f.displayPrependIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 6)) : ve("", !0), we("div", { class: ne(["d-inline-flex", r(c)]), style: be(r(u)) }, [f.displayPrependInnerIcon || r(a)["display.prependInner"] ? (J(), ie("div", { key: 0, class: ne(s("prepend", !0)) }, [r(a)["display.prependInner"] ? _e(f.$slots, "display.prependInner", me(Z({ key: 0 }, d))) : (J(), he(pe, { key: 1, color: f.displayPrependInnerIconColor, icon: f.displayPrependInnerIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 2)) : ve("", !0), Lo(" " + Cl(f.displayValue) + " ", 1), f.displayAppendInnerIcon || r(a)["display.appendInner"] ? (J(), ie("div", { key: 1, class: ne(s("append", !0)) }, [r(a)["display.appendInner"] ? _e(f.$slots, "display.appendInner", me(Z({ key: 0 }, d))) : (J(), he(pe, { key: 1, color: f.displayAppendInnerIconColor, icon: f.displayAppendInnerIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 2)) : ve("", !0)], 6), f.displayAppendIcon || r(a)["display.append"] ? (J(), ie("div", { key: 1, class: ne(s("append")), style: be(r(o)) }, [r(a)["display.append"] ? _e(f.$slots, "display.append", me(Z({ key: 0 }, d))) : (J(), he(pe, { key: 1, color: f.displayAppendIconColor, icon: f.displayAppendIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 6)) : ve("", !0)]));
} }), yt = je({ __name: "SaveFieldButtons", props: { loading: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonVariant: {}, cancelButtonTitle: {}, cancelIconColor: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideSaveIcon: { type: Boolean }, loadingIconColor: {}, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIconColor: {}, cancelIcon: {}, loadingIcon: {}, saveIcon: {} }, emits: ["close", "save"], setup(e, { emit: t }) {
  const n = mn(), l = t, a = e, i = se(Symbol.for("vuetify:icons")), d = v(() => a.error), c = v(() => ({ [`${oe}--save-fields-container`]: !0 })), u = v(() => a.loading), o = Me({ ...n, ...a }), s = v(() => (i == null ? void 0 : i.defaultSet) === "fa" ? "fa-spin" : (i == null ? void 0 : i.defaultSet) === "mdi" ? "mdi-spin" : ""), y = v(() => ((S) => {
    const { cancelButtonVariant: A } = S;
    return { "me-1": A === "elevated", "ms-1": !0 };
  })({ cancelButtonVariant: o.cancelButtonVariant })), f = v(() => Le({ icon: a.cancelIcon, iconOptions: i, name: "false" })), g = v(() => Le({ icon: a.loadingIcon, iconOptions: i, name: "loading" })), m = v(() => Le({ icon: a.saveIcon, iconOptions: i, name: "save" }));
  function h() {
    l("close");
  }
  function b() {
    l("save");
  }
  return (S, A) => (J(), ie("div", Z({ class: r(c) }, S.$attrs), [r(o).hideSaveIcon ? ve("", !0) : (J(), he(ul, { key: 0, class: "ms-1", color: r(o).saveButtonColor, disabled: r(d), icon: "", size: r(o).saveButtonSize, title: r(u) ? "Loading" : r(o).saveButtonTitle, variant: r(o).saveButtonVariant, onClick: b }, { default: ce(() => [r(u) ? (J(), he(pe, { key: 1, class: ne(r(s)), color: r(o).loadingIconColor, icon: r(g) }, null, 8, ["class", "color", "icon"])) : (J(), he(pe, { key: 0, color: r(d) ? "error" : r(o).saveIconColor, icon: r(m) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["color", "disabled", "size", "title", "variant"])), r(o).hideCancelIcon ? ve("", !0) : (J(), he(ul, { key: 1, class: ne(r(y)), color: r(o).cancelButtonColor, icon: "", size: r(o).cancelButtonSize, title: r(o).cancelButtonTitle, variant: r(o).cancelButtonVariant, onClick: h }, { default: ce(() => [r(o).hideSaveIcon && r(u) ? (J(), he(pe, { key: 0, class: ne(r(s)), color: r(o).loadingIconColor, icon: r(g) }, null, 8, ["class", "color", "icon"])) : (J(), he(pe, { key: 1, class: "text-default", color: r(o).cancelIconColor, icon: r(f) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["class", "color", "size", "title", "variant"]))], 16));
} }), Ht = (e) => {
  const { required: t, rules: n } = e;
  let { value: l } = e;
  l = r(l);
  const a = [];
  let i = !1;
  if (t && !l)
    return a.push("Field is required."), { errors: !0, results: a };
  if (n) {
    for (const d of n) {
      const c = (typeof d == "function" ? d : () => d)(l);
      c !== !0 && (typeof c == "string" ? a.push(c) : console.warn(`${c} is not a valid value. Rule functions must return boolean true or a string.`));
    }
    i = a.length > 0;
  }
  return { errors: i, results: a };
}, qn = (e) => {
  const { attrs: t, closeSiblings: n, fieldOnly: l, props: a, showField: i, timeOpened: d } = e;
  let c = d;
  return n && !l && (c = /* @__PURE__ */ new Date()), { settings: { ...t, ...a }, showField: !r(i), timeOpened: c };
}, Rl = (e) => {
  const { length: t = 0 } = e;
  let { suffix: n, text: l } = e;
  return l = l.toString(), n = n || "...", l.length > t ? `${l.substring(0, t)}${n}` : l;
}, Un = ["error", "update", "update:closeSiblingFields", "update:model-value"], cs = ["cancelButtonColor", "cancelButtonSize", "cancelButtonTitle", "cancelButtonVariant", "cancelIcon", "cancelIconColor", "closeSiblings", "displayAppendIcon", "displayAppendIconColor", "displayAppendIconSize", "displayAppendInnerIcon", "displayAppendInnerIconColor", "displayAppendInnerIconSize", "displayPrependIcon", "displayPrependIconColor", "displayPrependIconSize", "displayPrependInnerIcon", "displayPrependInnerIconColor", "displayPrependInnerIconSize", "emptyText", "fieldOnly", "hideSaveIcon", "item", "loadingIcon", "loadingIconColor", "loadingWait", "saveButtonColor", "saveButtonSize", "saveButtonTitle", "saveButtonVariant", "saveIcon", "saveIconColor", "tableField", "truncateLength", "truncateSuffix", "underlineColor", "underlineStyle", "underlineWidth", "underlined", "valueColor"], mt = (e) => {
  let t = e;
  return t = Object.entries(t).filter(([n]) => !cs.includes(n)), Object.fromEntries(t);
}, ds = { class: "v-selection-control__wrapper" }, Za = je({ __name: "VInlineCheckbox", props: Te(_n({ density: {}, falseIcon: {}, trueIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...mi }), { modelValue: {} }), emits: Te([...Un], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = fn(e, "modelValue"), l = mn(), a = yn(), i = t, d = se(In, {}), c = se(Symbol.for("vuetify:icons")), u = Il(), o = e;
  let s = Me({ ...l, ...o, ...d });
  const y = v(() => o.loading), f = v(() => o.disabled), g = W(!1), m = W(!1), h = W(null), b = v(() => mt(s)), S = v(() => ({ ...$n, ...o.cardProps }));
  K(() => y.value, (x, k) => {
    !x && k && m.value && R();
  });
  const A = v(() => Le({ icon: o.trueIcon, iconOptions: c, name: "checkboxFalse" })), $ = v(() => Le({ icon: o.iconTrue, iconOptions: c, name: "checkboxTrue" })), q = v(() => n.value == s.trueValue), D = v(() => Ja({ modelValue: n, trueValue: s.trueValue })), z = v(() => Rn({ cell: s.cell && !m.value, density: s.density, disabled: f.value, field: "v-checkbox", loading: y.value, loadingWait: s.loadingWait, tableField: s.tableField })), j = v(() => Nn({ cell: s.cell, cellUnderlineFullWidth: s.cellUnderlineFullWidth, density: s.density, field: "v-checkbox" })), T = Ka({ density: s.density }), I = v(() => jn({ active: m.value, name: "checkbox" })), O = v(() => Wl("checkbox", s.valueColor, { error: g })), C = v(() => Gn({ name: "checkbox", showField: m.value })), F = v(() => ({})), V = v(() => Ml({ color: s.color, error: g, theme: u, underlineColor: s.underlineColor, underlineStyle: s.underlineStyle, underlineWidth: s.underlineWidth, underlined: s.underlined })), N = v(() => E.value);
  function H() {
    g.value = !1, R();
  }
  const E = W(), B = W(null), w = W("body"), M = yi();
  function R() {
    var k, L;
    if (f.value || s.loadingWait && y.value)
      return;
    E.value = dn({ cardMinWidth: (k = s.cardProps) == null ? void 0 : k.minWidth, cardOffsetX: s.cardOffsetX, cardOffsetY: s.cardOffsetY, cardWidth: (L = s.cardProps) == null ? void 0 : L.width, field: B.value, name: "checkbox" });
    const x = qn({ attrs: l, closeSiblings: s.closeSiblings, fieldOnly: s.fieldOnly, props: o, showField: m, timeOpened: h.value });
    s = { ...s, ...x.settings }, m.value = x.showField, h.value = x.timeOpened, P !== null && s.closeSiblings && m.value && !s.fieldOnly && P.emit(x.timeOpened);
  }
  function U(x) {
    n.value = x, i("update", x), s.loadingWait || R();
  }
  let P, G;
  function _(x) {
    i("update:closeSiblingFields", h), m.value && h.value !== x && R();
  }
  return K(() => M, () => {
    var x, k;
    E.value = dn({ cardMinWidth: (x = s.cardProps) == null ? void 0 : x.minWidth, cardOffsetX: s.cardOffsetX, cardOffsetY: s.cardOffsetY, cardWidth: (k = s.cardProps) == null ? void 0 : k.width, field: B.value, name: "checkbox" });
  }, { deep: !0 }), s.closeSiblings && import("@vueuse/core").then(({ useEventBus: x }) => {
    P = x(Pn), G = P.on(_);
  }), On(() => {
    G !== void 0 && P.off(_);
  }), (x, k) => (J(), ie("div", { ref_key: "inlineFieldsContainer", ref: B, class: ne(r(z)), style: be(r(F)) }, [!r(m) && !r(s).fieldOnly || r(s).cardField ? (J(), ie("div", { key: 0, class: ne(r(j)), onClick: k[2] || (k[2] = (L) => r(s).cell ? R() : void 0) }, [we("div", { class: ne(r(T)), onClick: k[1] || (k[1] = (L) => r(s).cell ? void 0 : R()) }, [we("div", ds, [x.icons ? (J(), ie("div", { key: 0, class: ne(["v-inline-fields--boolean-icons-container", r(O)]), style: be(r(V)) }, [p(r(Xa), { modelValue: r(D), "onUpdate:modelValue": k[0] || (k[0] = (L) => pn(D) ? D.value = L : null), "icon-false": r(s).iconFalse, "icon-false-color": r(s).iconFalseColor, "icon-false-title": r(s).iconFalseTitle, "icon-true": r(s).iconTrue, "icon-true-color": r(s).iconTrueColor, "icon-true-title": r(s).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (J(), ie("div", { key: 1, class: ne(["d-inline-flex align-center justify-center", r(O)]), style: be(r(V)) }, Cl(r(q)), 7))])], 2)], 2)) : ve("", !0), r(m) || r(s).fieldOnly || r(s).cardField ? (J(), ie("div", { key: 1, class: ne(r(I)) }, [(J(), he(vn, { disabled: !r(s).cardField, to: r(w) }, [p(ar, Z(r(b), { color: r(s).color, density: r(s).density, disabled: r(y) || r(f), error: r(g), "false-icon": r(A), "false-value": r(s).falseValue, "hide-details": r(s).hideDetails, label: r(s).label, "model-value": r(D), "true-icon": r($), "true-value": r(s).trueValue, "onUpdate:modelValue": U }), Ye({ _: 2 }, [Xe(r(a), (L, X) => ({ name: X, fn: ce((Q) => [_e(x.$slots, X, me(Se({ ...Q })))]) })), r(a).append ? void 0 : { name: "append", fn: ce(() => [p(r(yt), { "cancel-button-color": r(s).cancelButtonColor, "cancel-button-size": r(s).cancelButtonSize, "cancel-button-title": r(s).cancelButtonTitle, "cancel-button-variant": r(s).cancelButtonVariant, "cancel-icon": r(s).cancelIcon, "cancel-icon-color": r(s).cancelIconColor, error: r(g), "field-only": r(s).fieldOnly, "hide-cancel-icon": r(s).hideCancelIcon, "hide-save-icon": !0, loading: r(y), "loading-icon": r(s).loadingIcon, "loading-icon-color": r(s).loadingIconColor, "save-button-color": r(s).saveButtonColor, "save-button-size": r(s).saveButtonSize, "save-button-title": r(s).saveButtonTitle, "save-button-variant": r(s).saveButtonVariant, "save-icon": r(s).saveIcon, "save-icon-color": r(s).saveIconColor, onClose: H, onSave: U }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "model-value", "true-icon", "true-value"])], 8, ["disabled", "to"]))], 2)) : ve("", !0), r(s).cardField ? (J(), ie("div", { key: 2, class: ne(r(C)), style: be(r(N)) }, [p(Mn, me(Se(r(S))), { default: ce(() => [p(Cn, null, { default: ce(() => [we("div", { ref_key: "cardFieldRef", ref: w }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : ve("", !0)], 6));
} }), Qa = je({ __name: "VInlineCustomField", props: Te(_n({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Mo }), { modelValue: {} }), emits: Te([...Un], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = fn(e, "modelValue"), l = mn(), a = yn(), i = t, d = se(In, {}), c = se(Symbol.for("vuetify:icons")), u = e;
  let o = Me({ ...l, ...u, ...d });
  const s = v(() => u.loading), y = v(() => u.disabled), f = W(!1), g = W(!1), m = W(!1), h = W(null);
  let b = n.value;
  K(() => s.value, (G, _) => {
    !G && _ && m.value && E();
  });
  const S = v(() => n.value ? (f.value = !1, o.truncateLength ? Rl({ length: o.truncateLength, suffix: o.truncateSuffix, text: n.value }) : n.value) : (f.value = !0, o.emptyText)), A = v(() => ({ ...o, loading: s.value, modelValue: n.value, originalValue: b })), $ = v(() => ({ color: o.color, displayAppendIcon: u.displayAppendIcon, displayAppendIconColor: u.displayAppendIconColor, displayAppendIconSize: u.displayAppendIconSize, displayAppendInnerIcon: u.displayAppendInnerIcon, displayAppendInnerIconColor: u.displayAppendInnerIconColor, displayAppendInnerIconSize: u.displayAppendInnerIconSize, displayPrependIcon: u.displayPrependIcon, displayPrependIconColor: u.displayPrependIconColor, displayPrependIconSize: u.displayPrependIconSize, displayPrependInnerIcon: u.displayPrependInnerIcon, displayPrependInnerIconColor: u.displayPrependInnerIconColor, displayPrependInnerIconSize: u.displayPrependInnerIconSize, displayValue: S.value, empty: f.value, error: g.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), q = v(() => ({ ...$n, ...u.cardProps })), D = v(() => Rn({ cell: o.cell && !m.value, density: o.density, disabled: y.value, field: "v-text-field", iconSet: c == null ? void 0 : c.defaultSet, loading: s.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), z = v(() => Nn({ cell: o.cell, cellUnderlineFullWidth: o.cellUnderlineFullWidth, density: o.density, field: "v-text-field" })), j = qt({ density: o.density, variant: o.variant }), T = v(() => jn({ active: m.value, name: "text-field" })), I = v(() => Gn({ name: "custom-field", showField: m.value })), O = v(() => ({})), C = v(() => V.value);
  function F() {
    g.value = !1, n.value = b, E();
  }
  const V = W(), N = W(null), H = W("body");
  function E() {
    var _, x;
    if (y.value || o.loadingWait && s.value)
      return;
    V.value = dn({ cardMinWidth: (_ = o.cardProps) == null ? void 0 : _.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (x = o.cardProps) == null ? void 0 : x.width, field: N.value });
    const G = qn({ attrs: l, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: u, showField: m, timeOpened: h.value });
    o = { ...o, ...G.settings }, m.value = G.showField, h.value = G.timeOpened, R !== null && o.closeSiblings && m.value && !o.fieldOnly && R.emit(G.timeOpened);
  }
  const B = W();
  function w() {
    const G = Ht({ required: o.required, rules: o.rules, value: n });
    return g.value = G.errors, B.value = G.results, G.results;
  }
  function M() {
    g.value ? g.value = !0 : (b = n.value, i("update", n.value), o.loadingWait || E());
  }
  let R, U;
  function P(G) {
    i("update:closeSiblingFields", h), m.value && h.value !== G && F();
  }
  return K(() => m.value, () => {
    m.value && w();
  }), K(() => n.value, () => {
    m.value && w();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: G }) => {
    R = G(Pn), U = R.on(P);
  }), On(() => {
    U !== void 0 && R.off(P);
  }), (G, _) => (J(), ie("div", { ref_key: "inlineFieldsContainer", ref: N, class: ne(r(D)), style: be(r(O)) }, [!r(m) && !r(o).fieldOnly || r(o).cardField ? (J(), ie("div", { key: 0, class: ne(r(z)) }, [we("div", { class: ne(r(j)) }, [p(r(Ut), Z(r($), { onToggleField: E }), Ye({ _: 2 }, [Xe(r(a), (x, k) => ({ name: k, fn: ce((L) => [_e(G.$slots, k, me(Se({ ...L })))]) }))]), 1040)], 2)], 2)) : ve("", !0), r(m) || r(o).fieldOnly || r(o).cardField ? (J(), ie("div", { key: 1, class: ne(["d-flex align-center py-2", r(T)]) }, [(J(), he(vn, { disabled: !r(o).cardField, to: r(H) }, [_e(G.$slots, "default", me(Se(r(A)))), p(r(yt), { modelValue: n.value, "onUpdate:modelValue": _[0] || (_[0] = (x) => n.value = x), "cancel-button-color": r(o).cancelButtonColor, "cancel-button-size": r(o).cancelButtonSize, "cancel-button-title": r(o).cancelButtonTitle, "cancel-button-variant": r(o).cancelButtonVariant, "cancel-icon": r(o).cancelIcon, "cancel-icon-color": r(o).cancelIconColor, error: r(g), "field-only": r(o).fieldOnly, "hide-cancel-icon": r(o).hideCancelIcon, "hide-save-icon": r(o).hideSaveIcon, loading: r(s), "loading-icon": r(o).loadingIcon, "loading-icon-color": r(o).loadingIconColor, required: r(o).required, "save-button-color": r(o).saveButtonColor, "save-button-size": r(o).saveButtonSize, "save-button-title": r(o).saveButtonTitle, "save-button-variant": r(o).saveButtonVariant, "save-icon": r(o).saveIcon, "save-icon-color": r(o).saveIconColor, onClose: F, onSave: M }, null, 8, ["modelValue", "cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "required", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])], 8, ["disabled", "to"]))], 2)) : ve("", !0), r(o).cardField ? (J(), ie("div", { key: 2, class: ne(r(I)), style: be(r(C)) }, [p(Mn, me(Se(r(q))), { default: ce(() => [p(Cn, null, { default: ce(() => [we("div", { ref_key: "cardFieldRef", ref: H }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : ve("", !0)], 6));
} }), ei = ((e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, a] of t)
    n[l] = a;
  return n;
})(je({ __name: "VInlineSelect", props: Te(_n({ clearIcon: {}, clearable: {}, density: {}, hideSelected: {}, itemTitle: {}, itemValue: {}, items: {}, menu: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...gi }), { modelValue: {} }), emits: Te([...Un], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = fn(e, "modelValue"), l = mn(), a = yn(), i = t, d = se(In, {}), c = se(Symbol.for("vuetify:icons")), u = e;
  let o = Me({ ...l, ...u, ...d });
  const s = v(() => u.loading), y = v(() => u.disabled), f = W(!1), g = W(!1), m = W(), h = W(!1), b = W(null);
  let S = n.value;
  K(() => s.value, (k, L) => {
    !k && L && h.value && w();
  });
  const A = v(() => Le({ icon: u.clearIcon, iconOptions: c, name: "clear" })), $ = v(() => n.value && n.value[o.itemTitle] ? (f.value = !1, n.value[o.itemTitle]) : n.value ? n.value : (f.value = !0, o.emptyText)), q = v(() => mt(o)), D = v(() => ({ color: o.color, displayAppendIcon: u.displayAppendIcon, displayAppendIconColor: u.displayAppendIconColor, displayAppendIconSize: u.displayAppendIconSize, displayAppendInnerIcon: u.displayAppendInnerIcon, displayAppendInnerIconColor: u.displayAppendInnerIconColor, displayAppendInnerIconSize: u.displayAppendInnerIconSize, displayPrependIcon: u.displayPrependIcon, displayPrependIconColor: u.displayPrependIconColor, displayPrependIconSize: u.displayPrependIconSize, displayPrependInnerIcon: u.displayPrependInnerIcon, displayPrependInnerIconColor: u.displayPrependInnerIconColor, displayPrependInnerIconSize: u.displayPrependInnerIconSize, displayValue: $.value, empty: f.value, error: g.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), z = v(() => ({ ...$n, ...u.cardProps }));
  Ne(() => {
    m.value = o.items || [];
  });
  const j = v(() => Rn({ cell: o.cell && !h.value, density: o.density, disabled: y.value, field: "v-select", iconSet: c == null ? void 0 : c.defaultSet, loading: s.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), T = v(() => Nn({ cell: o.cell, cellUnderlineFullWidth: o.cellUnderlineFullWidth, density: o.density, field: "v-select" })), I = qt({ density: o.density, variant: o.variant }), O = v(() => jn({ active: h.value, name: "select" })), C = v(() => Gn({ name: "select", showField: h.value })), F = v(() => ({})), V = v(() => H.value);
  function N() {
    g.value = !1, n.value = S, w();
  }
  const H = W(), E = W(null), B = W("body");
  function w() {
    var L, X;
    if (y.value || o.loadingWait && s.value)
      return;
    H.value = dn({ cardMinWidth: (L = o.cardProps) == null ? void 0 : L.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (X = o.cardProps) == null ? void 0 : X.width, field: E.value });
    const k = qn({ attrs: l, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: u, showField: h, timeOpened: b.value });
    o = { ...o, ...k.settings }, h.value = k.showField, b.value = k.timeOpened, G !== null && o.closeSiblings && h.value && !o.fieldOnly && G.emit(k.timeOpened);
  }
  const M = W(), R = v(() => M.value);
  function U() {
    const k = Ht({ required: o.required, rules: o.rules, value: n });
    return g.value = k.errors, M.value = k.results, k.results;
  }
  function P() {
    S = n.value, i("update", n.value), o.loadingWait || w();
  }
  let G, _;
  function x(k) {
    i("update:closeSiblingFields", b), h.value && b.value !== k && N();
  }
  return K(() => h.value, () => {
    h.value && U();
  }), K(() => n.value, () => {
    h.value && U();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: k }) => {
    G = k(Pn), _ = G.on(x);
  }), On(() => {
    _ !== void 0 && G.off(x);
  }), (k, L) => (J(), ie("div", { ref_key: "inlineFieldsContainer", ref: E, class: ne(r(j)), style: be(r(F)) }, [!r(h) && !r(o).fieldOnly || r(o).cardField ? (J(), ie("div", { key: 0, class: ne(r(T)) }, [we("div", { class: ne(r(I)) }, [p(r(Ut), Z(r(D), { onToggleField: w }), Ye({ _: 2 }, [Xe(r(a), (X, Q) => ({ name: Q, fn: ce((ye) => [_e(k.$slots, Q, me(Se({ ...ye })), void 0, !0)]) }))]), 1040)], 2)], 2)) : ve("", !0), r(h) || r(o).fieldOnly || r(o).cardField ? (J(), ie("div", { key: 1, class: ne(r(O)) }, [(J(), he(vn, { disabled: !r(o).cardField, to: r(B) }, [p(Zr, Z(r(q), { modelValue: n.value, "onUpdate:modelValue": L[0] || (L[0] = (X) => n.value = X), autofocus: !r(o).fieldOnly || r(o).autofocus, "clear-icon": r(A), clearable: r(o).clearable, color: r(o).color, density: r(o).density, disabled: r(s) || r(y), error: r(g), "error-messages": r(R), "hide-details": r(o).hideDetails, "hide-selected": r(o).hideSelected, "item-title": r(o).itemTitle, "item-value": r(o).itemValue, items: r(m), label: r(o).label, loading: r(s), menu: r(o).menu && !r(o).fieldOnly && r(h), variant: r(o).variant, width: "100%", onKeyup: kt(N, ["esc"]) }), Ye({ _: 2 }, [Xe(r(a), (X, Q) => ({ name: Q, fn: ce((ye) => [_e(k.$slots, Q, me(Se({ ...ye })), void 0, !0)]) })), r(a).append ? void 0 : { name: "append", fn: ce(() => [p(r(yt), { "cancel-button-color": r(o).cancelButtonColor, "cancel-button-size": r(o).cancelButtonSize, "cancel-button-title": r(o).cancelButtonTitle, "cancel-button-variant": r(o).cancelButtonVariant, "cancel-icon": r(o).cancelIcon, "cancel-icon-color": r(o).cancelIconColor, error: r(g), "field-only": r(o).fieldOnly, "hide-cancel-icon": r(o).hideCancelIcon, "hide-save-icon": r(o).hideSaveIcon, loading: r(s), "loading-icon": r(o).loadingIcon, "loading-icon-color": r(o).loadingIconColor, "save-button-color": r(o).saveButtonColor, "save-button-size": r(o).saveButtonSize, "save-button-title": r(o).saveButtonTitle, "save-button-variant": r(o).saveButtonVariant, "save-icon": r(o).saveIcon, "save-icon-color": r(o).saveIconColor, onClose: N, onSave: P }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "clearable", "color", "density", "disabled", "error", "error-messages", "hide-details", "hide-selected", "item-title", "item-value", "items", "label", "loading", "menu", "variant"])], 8, ["disabled", "to"]))], 2)) : ve("", !0), r(o).cardField ? (J(), ie("div", { key: 2, class: ne(r(C)), style: be(r(V)) }, [p(Mn, me(Se(r(z))), { default: ce(() => [p(Cn, null, { default: ce(() => [we("div", { ref_key: "cardFieldRef", ref: B }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : ve("", !0)], 6));
} }), [["__scopeId", "data-v-04f69808"]]), ps = { class: "v-selection-control__wrapper" }, ni = je({ __name: "VInlineSwitch", props: Te(_n({ density: {}, falseIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...hi }), { modelValue: {} }), emits: Te([...Un], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = fn(e, "modelValue"), l = mn(), a = yn(), i = t, d = se(In, {}), c = se(Symbol.for("vuetify:icons")), u = Il(), o = e;
  let s = Me({ ...l, ...o, ...d });
  const y = v(() => o.loading), f = v(() => o.disabled), g = W(!1), m = W(!1), h = W(null), b = v(() => mt(s)), S = v(() => ({ ...$n, ...o.cardProps }));
  K(() => y.value, (P, G) => {
    !P && G && m.value && B();
  });
  const A = v(() => Le({ icon: s.cancelIcon, iconOptions: c, name: "false" })), $ = v(() => n.value == s.trueValue), q = v(() => Ja({ modelValue: n, trueValue: s.trueValue })), D = v(() => Rn({ cell: s.cell && !m.value, density: s.density, disabled: f.value, field: "v-switch", loading: y.value, loadingWait: s.loadingWait, tableField: s.tableField })), z = v(() => Nn({ cell: s.cell, cellUnderlineFullWidth: s.cellUnderlineFullWidth, density: s.density, field: "v-switch" })), j = Ka({ density: s.density }), T = v(() => jn({ active: m.value, name: "switch" })), I = v(() => Wl("switch", s.valueColor, { error: g })), O = v(() => Gn({ name: "switch", showField: m.value })), C = v(() => ({})), F = v(() => Ml({ color: s.color, error: g, theme: u, underlineColor: s.underlineColor, underlineStyle: s.underlineStyle, underlineWidth: s.underlineWidth, underlined: s.underlined })), V = v(() => N.value), N = W(), H = W(null), E = W("body");
  function B() {
    var G, _;
    if (f.value || s.loadingWait && y.value)
      return;
    N.value = dn({ cardMinWidth: (G = s.cardProps) == null ? void 0 : G.minWidth, cardOffsetX: s.cardOffsetX, cardOffsetY: s.cardOffsetY, cardWidth: (_ = s.cardProps) == null ? void 0 : _.width, field: H.value });
    const P = qn({ attrs: l, closeSiblings: s.closeSiblings, fieldOnly: s.fieldOnly, props: o, showField: m.value, timeOpened: h.value });
    s = { ...s, ...P.settings }, m.value = P.showField, h.value = P.timeOpened, M !== null && s.closeSiblings && m.value && !s.fieldOnly && M.emit(P.timeOpened);
  }
  function w(P) {
    n.value = P, i("update", P), s.loadingWait || B();
  }
  let M, R;
  function U(P) {
    i("update:closeSiblingFields", h), m.value && h.value !== P && B();
  }
  return s.closeSiblings && import("@vueuse/core").then(({ useEventBus: P }) => {
    M = P(Pn), R = M.on(U);
  }), On(() => {
    R !== void 0 && M.off(U);
  }), (P, G) => (J(), ie("div", { ref_key: "inlineFieldsContainer", ref: H, class: ne(r(D)), style: be(r(C)) }, [!r(m) && !r(s).fieldOnly || r(s).cardField ? (J(), ie("div", { key: 0, class: ne(r(z)), onClick: G[2] || (G[2] = (_) => r(s).cell ? B() : void 0) }, [we("div", { class: ne(r(j)), onClick: G[1] || (G[1] = (_) => r(s).cell ? void 0 : B()) }, [we("div", ps, [P.icons ? (J(), ie("div", { key: 0, class: ne(["v-inline-fields--boolean-icons-container", r(I)]), style: be(r(F)) }, [p(r(Xa), { modelValue: r(q), "onUpdate:modelValue": G[0] || (G[0] = (_) => pn(q) ? q.value = _ : null), "icon-false": r(s).iconFalse, "icon-false-color": r(s).iconFalseColor, "icon-false-title": r(s).iconFalseTitle, "icon-true": r(s).iconTrue, "icon-true-color": r(s).iconTrueColor, "icon-true-title": r(s).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (J(), ie("div", { key: 1, class: ne(["d-inline-flex align-center justify-center", r(I)]), style: be(r(F)) }, Cl(r($)), 7))])], 2)], 2)) : ve("", !0), r(m) || r(s).fieldOnly || r(s).cardField ? (J(), ie("div", { key: 1, class: ne(r(T)) }, [(J(), he(vn, { disabled: !r(s).cardField, to: r(E) }, [p(is, Z(r(b), { color: r(s).color, density: r(s).density, disabled: r(y) || r(f), error: r(g), "false-icon": r(s).falseIcon, "false-value": r(s).falseValue, "hide-details": r(s).hideDetails, label: r(s).label, loading: r(y), "model-value": r(q), "true-value": r(s).trueValue, "onUpdate:modelValue": w }), Ye({ _: 2 }, [Xe(r(a), (_, x) => ({ name: x, fn: ce((k) => [_e(P.$slots, x, me(Se({ ...k })))]) })), r(a).append ? void 0 : { name: "append", fn: ce(() => [r(s).fieldOnly && !r(s).cardField || r(s).hideCancelIcon ? ve("", !0) : (J(), he(ul, { key: 0, class: "ms-3", color: r(s).cancelButtonColor, icon: "", size: r(s).cancelButtonSize, title: r(s).cancelButtonTitle, variant: r(s).cancelButtonVariant, onClick: B }, { default: ce(() => [p(pe, { color: r(s).cancelIconColor, icon: r(A) }, null, 8, ["color", "icon"])]), _: 1 }, 8, ["color", "size", "title", "variant"]))]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "loading", "model-value", "true-value"])], 8, ["disabled", "to"]))], 2)) : ve("", !0), r(s).cardField ? (J(), ie("div", { key: 2, class: ne(r(O)), style: be(r(V)) }, [p(Mn, me(Se(r(S))), { default: ce(() => [p(Cn, null, { default: ce(() => [we("div", { ref_key: "cardFieldRef", ref: E }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : ve("", !0)], 6));
} }), ti = je({ __name: "VInlineTextField", props: Te(_n({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Mo }), { modelValue: {} }), emits: Te([...Un], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = fn(e, "modelValue"), l = mn(), a = yn(), i = t, d = se(In, {}), c = se(Symbol.for("vuetify:icons")), u = e;
  let o = Me({ ...l, ...u, ...d });
  const s = v(() => u.loading), y = v(() => u.disabled), f = W(!1), g = W(!1), m = W(!1), h = W(null);
  let b = n.value;
  K(() => s.value, (x, k) => {
    !x && k && m.value && B();
  });
  const S = v(() => Le({ icon: u.clearIcon, iconOptions: c, name: "clear" })), A = v(() => n.value ? (f.value = !1, o.truncateLength ? Rl({ length: o.truncateLength, suffix: o.truncateSuffix, text: n.value }) : n.value) : (f.value = !0, o.emptyText)), $ = v(() => mt(o)), q = v(() => ({ color: o.color, displayAppendIcon: u.displayAppendIcon, displayAppendIconColor: u.displayAppendIconColor, displayAppendIconSize: u.displayAppendIconSize, displayAppendInnerIcon: u.displayAppendInnerIcon, displayAppendInnerIconColor: u.displayAppendInnerIconColor, displayAppendInnerIconSize: u.displayAppendInnerIconSize, displayPrependIcon: u.displayPrependIcon, displayPrependIconColor: u.displayPrependIconColor, displayPrependIconSize: u.displayPrependIconSize, displayPrependInnerIcon: u.displayPrependInnerIcon, displayPrependInnerIconColor: u.displayPrependInnerIconColor, displayPrependInnerIconSize: u.displayPrependInnerIconSize, displayValue: A.value, empty: f.value, error: g.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), D = v(() => ({ ...$n, ...u.cardProps })), z = v(() => Rn({ cell: o.cell && !m.value, density: o.density, disabled: y.value, field: "v-text-field", iconSet: c == null ? void 0 : c.defaultSet, loading: s.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), j = v(() => Nn({ cell: o.cell, cellUnderlineFullWidth: o.cellUnderlineFullWidth, density: o.density, field: "v-text-field" })), T = qt({ density: o.density, variant: o.variant }), I = v(() => jn({ active: m.value, name: "text-field" })), O = v(() => Gn({ name: "text-field", showField: m.value })), C = v(() => ({})), F = v(() => N.value);
  function V() {
    g.value = !1, n.value = b, B();
  }
  const N = W(), H = W(null), E = W("body");
  function B() {
    var k, L;
    if (y.value || o.loadingWait && s.value)
      return;
    N.value = dn({ cardMinWidth: (k = o.cardProps) == null ? void 0 : k.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (L = o.cardProps) == null ? void 0 : L.width, field: H.value });
    const x = qn({ attrs: l, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: u, showField: m, timeOpened: h.value });
    o = { ...o, ...x.settings }, m.value = x.showField, h.value = x.timeOpened, P !== null && o.closeSiblings && m.value && !o.fieldOnly && P.emit(x.timeOpened);
  }
  const w = W(), M = v(() => w.value);
  function R() {
    const x = Ht({ required: o.required, rules: o.rules, value: n });
    return g.value = x.errors, w.value = x.results, x.results;
  }
  function U() {
    g.value ? g.value = !0 : (b = n.value, i("update", n.value), o.loadingWait || B());
  }
  let P, G;
  function _(x) {
    i("update:closeSiblingFields", h), m.value && h.value !== x && V();
  }
  return K(() => m.value, () => {
    m.value && R();
  }), K(() => n.value, () => {
    m.value && R();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: x }) => {
    P = x(Pn), G = P.on(_);
  }), On(() => {
    G !== void 0 && P.off(_);
  }), (x, k) => (J(), ie("div", { ref_key: "inlineFieldsContainer", ref: H, class: ne(r(z)), style: be(r(C)) }, [!r(m) && !r(o).fieldOnly || r(o).cardField ? (J(), ie("div", { key: 0, class: ne(r(j)) }, [we("div", { class: ne(r(T)) }, [p(r(Ut), Z(r(q), { onToggleField: B }), Ye({ _: 2 }, [Xe(r(a), (L, X) => ({ name: X, fn: ce((Q) => [_e(x.$slots, X, me(Se({ ...Q })))]) }))]), 1040)], 2)], 2)) : ve("", !0), r(m) || r(o).fieldOnly || r(o).cardField ? (J(), ie("div", { key: 1, class: ne(r(I)) }, [(J(), he(vn, { disabled: !r(o).cardField, to: r(E) }, [p(gl, Z(r($), { modelValue: n.value, "onUpdate:modelValue": k[1] || (k[1] = (L) => n.value = L), autofocus: !r(o).fieldOnly || r(o).autofocus, "clear-icon": r(S), color: r(o).color, density: r(o).density, disabled: r(s) || r(y), error: r(g), "error-messages": r(M), "hide-details": r(o).hideDetails, label: r(o).label, loading: r(s), variant: r(o).variant, width: "100%", onKeyup: [kt(U, ["enter"]), kt(V, ["esc"])] }), Ye({ _: 2 }, [Xe(r(a), (L, X) => ({ name: X, fn: ce((Q) => [_e(x.$slots, X, me(Se({ ...Q })))]) })), r(a).append ? void 0 : { name: "append", fn: ce(() => [p(r(yt), { modelValue: n.value, "onUpdate:modelValue": k[0] || (k[0] = (L) => n.value = L), "cancel-button-color": r(o).cancelButtonColor, "cancel-button-size": r(o).cancelButtonSize, "cancel-button-title": r(o).cancelButtonTitle, "cancel-button-variant": r(o).cancelButtonVariant, "cancel-icon": r(o).cancelIcon, "cancel-icon-color": r(o).cancelIconColor, error: r(g), "field-only": r(o).fieldOnly, "hide-cancel-icon": r(o).hideCancelIcon, "hide-save-icon": r(o).hideSaveIcon, loading: r(s), "loading-icon": r(o).loadingIcon, "loading-icon-color": r(o).loadingIconColor, required: r(o).required, "save-button-color": r(o).saveButtonColor, "save-button-size": r(o).saveButtonSize, "save-button-title": r(o).saveButtonTitle, "save-button-variant": r(o).saveButtonVariant, "save-icon": r(o).saveIcon, "save-icon-color": r(o).saveIconColor, onClose: V, onSave: U }, null, 8, ["modelValue", "cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "required", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "variant"])], 8, ["disabled", "to"]))], 2)) : ve("", !0), r(o).cardField ? (J(), ie("div", { key: 2, class: ne(r(O)), style: be(r(F)) }, [p(Mn, me(Se(r(D))), { default: ce(() => [p(Cn, null, { default: ce(() => [we("div", { ref_key: "cardFieldRef", ref: E }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : ve("", !0)], 6));
} }), li = je({ __name: "VInlineTextarea", props: Te(_n({ autoGrow: {}, clearIcon: {}, density: {}, rows: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...bi }), { modelValue: {} }), emits: Te([...Un], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = fn(e, "modelValue"), l = mn(), a = yn(), i = t, d = se(In, {}), c = se(Symbol.for("vuetify:icons")), u = e;
  let o = Me({ ...l, ...u, ...d });
  const s = v(() => u.loading), y = v(() => u.disabled), f = W(!1), g = W(!1), m = W(!1), h = W(null);
  let b = n.value;
  K(() => s.value, (x, k) => {
    !x && k && m.value && B();
  });
  const S = v(() => Le({ icon: u.clearIcon, iconOptions: c, name: "clear" })), A = v(() => n.value ? (f.value = !1, o.truncateLength ? Rl({ length: o.truncateLength, suffix: o.truncateSuffix, text: n.value }) : n.value) : (f.value = !0, o.emptyText)), $ = v(() => mt(o)), q = v(() => ({ color: o.color, displayAppendIcon: u.displayAppendIcon, displayAppendIconColor: u.displayAppendIconColor, displayAppendIconSize: u.displayAppendIconSize, displayAppendInnerIcon: u.displayAppendInnerIcon, displayAppendInnerIconColor: u.displayAppendInnerIconColor, displayAppendInnerIconSize: u.displayAppendInnerIconSize, displayPrependIcon: u.displayPrependIcon, displayPrependIconColor: u.displayPrependIconColor, displayPrependIconSize: u.displayPrependIconSize, displayPrependInnerIcon: u.displayPrependInnerIcon, displayPrependInnerIconColor: u.displayPrependInnerIconColor, displayPrependInnerIconSize: u.displayPrependInnerIconSize, displayValue: A.value, empty: f.value, error: g.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), D = v(() => ({ ...$n, ...u.cardProps })), z = v(() => Rn({ cell: o.cell && !m.value, density: o.density, disabled: y.value, field: "v-textarea", iconSet: c == null ? void 0 : c.defaultSet, loading: s.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), j = v(() => Nn({ cell: o.cell, cellUnderlineFullWidth: o.cellUnderlineFullWidth, density: o.density, field: "v-textarea" })), T = qt({ density: o.density, variant: o.variant }), I = v(() => jn({ active: m.value, name: "textarea" })), O = v(() => Gn({ name: "textarea", showField: m.value })), C = v(() => ({})), F = v(() => N.value);
  function V() {
    g.value = !1, n.value = b, B();
  }
  const N = W(), H = W(null), E = W("body");
  function B() {
    var k, L;
    if (y.value || o.loadingWait && s.value)
      return;
    N.value = dn({ cardMinWidth: (k = o.cardProps) == null ? void 0 : k.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (L = o.cardProps) == null ? void 0 : L.width, field: H.value });
    const x = qn({ attrs: l, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: u, showField: m, timeOpened: h.value });
    o = { ...o, ...x.settings }, m.value = x.showField, h.value = x.timeOpened, P !== null && o.closeSiblings && m.value && !o.fieldOnly && P.emit(x.timeOpened);
  }
  const w = W(), M = v(() => w.value);
  function R() {
    const x = Ht({ required: o.required, rules: o.rules, value: n });
    return g.value = x.errors, w.value = x.results, x.results;
  }
  function U() {
    b = n.value, i("update", n.value), o.loadingWait || B();
  }
  let P, G;
  function _(x) {
    i("update:closeSiblingFields", h), m.value && h.value !== x && V();
  }
  return K(() => m.value, () => {
    m.value && R();
  }), K(() => n.value, () => {
    m.value && R();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: x }) => {
    P = x(Pn), G = P.on(_);
  }), On(() => {
    G !== void 0 && P.off(_);
  }), (x, k) => (J(), ie("div", { ref_key: "inlineFieldsContainer", ref: H, class: ne(r(z)), style: be(r(C)) }, [!r(m) && !r(o).fieldOnly || r(o).cardField ? (J(), ie("div", { key: 0, class: ne(r(j)) }, [we("div", { class: ne(r(T)) }, [p(r(Ut), Z(r(q), { onToggleField: B }), Ye({ _: 2 }, [Xe(r(a), (L, X) => ({ name: X, fn: ce((Q) => [_e(x.$slots, X, me(Se({ ...Q })))]) }))]), 1040)], 2)], 2)) : ve("", !0), r(m) || r(o).fieldOnly || r(o).cardField ? (J(), ie("div", { key: 1, class: ne(r(I)) }, [(J(), he(vn, { disabled: !r(o).cardField, to: r(E) }, [p(ss, Z(r($), { modelValue: n.value, "onUpdate:modelValue": k[0] || (k[0] = (L) => n.value = L), "auto-grow": r(o).autoGrow, autofocus: !r(o).fieldOnly || r(o).autofocus, "clear-icon": r(S), color: r(o).color, density: r(o).density, disabled: r(s) || r(y), error: r(g), "error-messages": r(M), "hide-details": r(o).hideDetails, label: r(o).label, loading: r(s), rows: r(o).rows, variant: r(o).variant, width: "100%", onKeyup: kt(V, ["esc"]) }), Ye({ _: 2 }, [Xe(r(a), (L, X) => ({ name: X, fn: ce((Q) => [_e(x.$slots, X, me(Se({ ...Q })))]) })), r(a).append ? void 0 : { name: "append", fn: ce(() => [p(r(yt), { "cancel-button-color": r(o).cancelButtonColor, "cancel-button-size": r(o).cancelButtonSize, "cancel-button-title": r(o).cancelButtonTitle, "cancel-button-variant": r(o).cancelButtonVariant, "cancel-icon": r(o).cancelIcon, "cancel-icon-color": r(o).cancelIconColor, error: r(g), "field-only": r(o).fieldOnly, "hide-cancel-icon": r(o).hideCancelIcon, "hide-save-icon": r(o).hideSaveIcon, loading: r(s), "loading-icon": r(o).loadingIcon, "loading-icon-color": r(o).loadingIconColor, "save-button-color": r(o).saveButtonColor, "save-button-size": r(o).saveButtonSize, "save-button-title": r(o).saveButtonTitle, "save-button-variant": r(o).saveButtonVariant, "save-icon": r(o).saveIcon, "save-icon-color": r(o).saveIconColor, onClose: V, onSave: U }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "auto-grow", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "rows", "variant"])], 8, ["disabled", "to"]))], 2)) : ve("", !0), r(o).cardField ? (J(), ie("div", { key: 2, class: ne(r(O)), style: be(r(F)) }, [p(Mn, me(Se(r(D))), { default: ce(() => [p(Cn, null, { default: ce(() => [we("div", { ref_key: "cardFieldRef", ref: E }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : ve("", !0)], 6));
} }), In = Symbol();
function ms(e = {}) {
  return (t) => {
    t.provide(In, e), t.component("VInlineCheckbox", Za), t.component("VInlineCustomField", Qa), t.component("VInlineSelect", ei), t.component("VInlineSwitch", ni), t.component("VInlineTextField", ti), t.component("VInlineTextarea", li);
  };
}
const gs = { VInlineCheckbox: Za, VInlineCustomField: Qa, VInlineSelect: ei, VInlineSwitch: ni, VInlineTextField: ti, VInlineTextarea: li };
export {
  Za as VInlineCheckbox,
  Qa as VInlineCustomField,
  ei as VInlineSelect,
  ni as VInlineSwitch,
  ti as VInlineTextField,
  li as VInlineTextarea,
  ms as createVInlineFields,
  gs as default,
  In as globalOptions
};
(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode(":root{--v-inline-fields-top-padding-compact: 13px;--v-inline-fields-top-padding-comfortable: 17px;--v-inline-fields-top-padding-default: 21px;--v-inline-fields-input-height: 24px;--v-inline-fields-density-compact-height: 32px;--v-inline-fields-density-comfortable-height: 40px;--v-inline-fields-grey: #909090}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append{padding-top:0!important}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append .v-icon{font-size:1rem!important}.v-inline-fields{position:relative}.v-inline-fields--display-container *{align-items:center;display:flex}.v-inline-fields--display-container-cell{cursor:pointer;display:block;max-height:unset!important}.v-inline-fields--display-container-cell>div{width:100%}.v-inline-fields--display-container-cell-underline-full-width .v-inline-fields--display-value{width:100%}.v-inline-fields--display-container-cell .v-inline-fields--selection-control .v-inline-fields--display-value{justify-content:center}.v-inline-fields--display-container-cell,.v-inline-fields--display-container-cell .v-input,.v-inline-fields--display-container-cell .v-inline-fields--display-wrapper,.v-inline-fields--display-container-cell .v-selection-control__wrapper{height:100%!important;width:100%}.v-inline-fields--display-value{cursor:pointer;letter-spacing:.009375em!important}.v-inline-fields--display-value-empty{color:var(--v-inline-fields-grey);font-style:italic}.v-inline-fields--display-value-checkbox,.v-inline-fields--display-value-switch{padding-bottom:2px;padding-top:6px}.v-inline-fields--display-append-icon,.v-inline-fields--display-prepend-icon,.v-inline-fields--display-append-inner-icon,.v-inline-fields--display-prepend-inner-icon{align-items:flex-end;display:inline-flex}.v-inline-fields--container-cell{height:100%;width:100%}.v-inline-fields--container-disabled .v-inline-fields--display-value{cursor:default!important;opacity:var(--v-disabled-opacity)}.v-inline-fields--container-loading .v-inline-fields--display-value{cursor:wait!important}.v-inline-fields--container-icon-set-fa .v-field__clearable{font-size:.8rem}.v-inline-fields--container-icon-set-fa .v-field__append-inner{align-items:flex-end;padding-bottom:0!important}.v-inline-fields--container-v-select-compact-plain .v-input,.v-inline-fields--container-v-select-compact-underlined .v-input,.v-inline-fields--container-v-text-field-compact-plain .v-input,.v-inline-fields--container-v-text-field-compact-underlined .v-input{height:var(--v-inline-fields-density-compact-height);max-height:var(--v-inline-fields-density-compact-height)}.v-inline-fields--container-v-select-compact-plain .v-input__control,.v-inline-fields--container-v-select-compact-underlined .v-input__control,.v-inline-fields--container-v-text-field-compact-plain .v-input__control,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control{padding-bottom:4px}.v-inline-fields--container-v-select-compact-plain .v-input>div,.v-inline-fields--container-v-select-compact-underlined .v-input>div,.v-inline-fields--container-v-text-field-compact-plain .v-input>div,.v-inline-fields--container-v-text-field-compact-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input input{padding-bottom:10px}.v-inline-fields--container-v-select-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-compact-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-select__selection{align-items:center;padding-bottom:10px}.v-inline-fields--container-v-select-comfortable-plain .v-input,.v-inline-fields--container-v-select-comfortable-underlined .v-input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input{height:var(--v-inline-fields-density-comfortable-height);max-height:var(--v-inline-fields-density-comfortable-height)}.v-inline-fields--container-v-select-comfortable-plain .v-input__control,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control{padding-bottom:8px}.v-inline-fields--container-v-select-comfortable-plain .v-input>div,.v-inline-fields--container-v-select-comfortable-underlined .v-input>div,.v-inline-fields--container-v-text-field-comfortable-plain .v-input>div,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input input{padding-bottom:6px}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-select__selection{align-items:center;padding-bottom:6px}.v-inline-fields--container-v-select-compact-plain .v-field__append-inner,.v-inline-fields--container-v-select-compact-underlined .v-field__append-inner{padding-top:4px!important}.v-inline-fields--container-v-select-comfortable-plain .v-field__append-inner,.v-inline-fields--container-v-select-comfortable-underlined .v-field__append-inner{padding-top:8px!important}.v-inline-fields--container-v-textarea .v-inline-fields--save-fields-container{align-items:flex-end}.v-inline-fields--container-v-select,.v-inline-fields--container-v-textarea,.v-inline-fields--container-v-text-field{width:100%}.v-inline-fields--container-v-checkbox .v-input,.v-inline-fields--container-v-switch .v-input{align-items:center;display:flex;padding-bottom:0}.v-inline-fields--container-v-checkbox .v-input__append,.v-inline-fields--container-v-switch .v-input__append{margin-inline-start:0!important;margin-left:0;padding-bottom:0!important}.v-inline-fields--container-v-checkbox .v-selection-control,.v-inline-fields--container-v-switch .v-selection-control{min-height:unset}.v-inline-fields--container-v-checkbox .v-inline-fields--save-fields-container,.v-inline-fields--container-v-switch .v-inline-fields--save-fields-container{align-items:center!important}.v-inline-fields--container .v-input__append,.v-inline-fields--container .v-input__prepend,.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-top:0!important}.v-inline-fields--container .v-input__append .v-icon,.v-inline-fields--container .v-input__prepend .v-icon,.v-inline-fields--container .v-field__append-inner .v-icon,.v-inline-fields--container .v-field__prepend-inner .v-icon{font-size:1rem!important}.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-compact .v-input__append,.v-inline-fields--container-compact .v-input__prepend,.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-comfortable .v-input__append,.v-inline-fields--container-comfortable .v-input__prepend,.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{padding-bottom:6px!important}.v-inline-fields--container-default .v-input__append,.v-inline-fields--container-default .v-input__prepend,.v-inline-fields--container-default .v-field__append-inner,.v-inline-fields--container-default .v-field__prepend-inner{align-items:flex-end!important;padding-bottom:0!important}.v-inline-fields--container-default .v-input__append .v-icon,.v-inline-fields--container-default .v-input__prepend .v-icon,.v-inline-fields--container-default .v-field__append-inner .v-icon,.v-inline-fields--container-default .v-field__prepend-inner .v-icon{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)!important}.v-inline-fields--container-default .v-inline-fields--save-fields-container{align-items:flex-end!important}.v-inline-fields--card-container{height:fit-content;min-width:fit-content!important;position:absolute}.v-inline-fields--card-container .v-card{border:1px solid hsla(0,0%,50%,.5)}.v-inline-fields--card-container .v-card .v-card-text{padding:5px 10px}.v-inline-fields--card-container .v-card .v-card-text>div{align-items:center;display:flex}.v-inline-fields--card-container-checkbox .v-card .v-card-text .v-input__append{margin-inline-start:0}.v-inline-fields--save-fields-container{align-items:center;display:flex;height:100%;margin-left:.1rem}.v-inline-fields--boolean-icons{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-inline-fields .truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:250px}.v-inline-fields .v-input__append{padding-top:0}[data-v-04f69808] .v-field__field{align-items:flex-end!important}")),document.head.appendChild(i)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
