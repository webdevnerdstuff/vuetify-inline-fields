import { Fragment as fe, reactive as Re, computed as v, watchEffect as Ue, toRefs as Ko, capitalize as Yo, isVNode as hi, Comment as bi, unref as r, warn as Jl, inject as me, ref as W, provide as qe, shallowRef as ie, defineComponent as Xe, camelize as Xo, h as Zl, getCurrentInstance as Ii, onBeforeUnmount as tn, watch as J, readonly as Ft, onScopeDispose as Te, effectScope as At, toRaw as cn, TransitionGroup as Ci, Transition as En, createVNode as d, mergeProps as Q, onBeforeMount as Jo, nextTick as xe, withDirectives as Ee, resolveDirective as on, vShow as Yn, isRef as zn, onMounted as Xn, toRef as le, Text as Si, resolveDynamicComponent as Bi, Teleport as dn, cloneVNode as xi, createTextVNode as Vt, vModelText as ki, mergeModels as $e, useModel as pn, openBlock as Z, createBlock as Se, useSlots as vn, createElementBlock as ae, normalizeClass as ee, normalizeStyle as Ce, renderSlot as Ae, normalizeProps as he, createCommentVNode as pe, createElementVNode as we, toDisplayString as _t, useAttrs as fn, withCtx as ce, mergeDefaults as Cn, onUnmounted as Sn, createSlots as Ke, renderList as Ye, guardReactiveProps as Be, withKeys as rl } from "vue";
import { useTheme as Ot } from "vuetify";
import { useWindowSize as wi } from "@vueuse/core";
/**
 * @name @wdns/vuetify-inline-fields
 * @version 1.0.0-beta-3
 * @description Vuetify Inline Fields Component Library offers a comprehensive collection of reusable UI components to create elegant and efficient inline form fields within your applications.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-inline-fields/
 * @repository https://github.com/webdevnerdstuff/vuetify-inline-fields
 * @license MIT License
 */
const Bn = Symbol("identifier"), xn = { elevation: 5, variant: "flat" }, hl = { cancelButtonColor: "default", cancelButtonSize: "x-small", cancelButtonTitle: "Cancel", cancelButtonVariant: "text", cancelIcon: void 0, cancelIconColor: "default", cardField: !1, cardOffsetX: 0, cardOffsetY: 0, cardProps: () => ({}), cell: !1, cellUnderlineFullWidth: !0, closeSiblings: !1, color: "primary", density: "compact", disabled: !1, displayAppendIcon: void 0, displayAppendIconColor: void 0, displayAppendIconSize: "x-small", displayAppendInnerIcon: void 0, displayAppendInnerIconColor: void 0, displayAppendInnerIconSize: "x-small", displayPrependIcon: void 0, displayPrependIconColor: void 0, displayPrependIconSize: "x-small", displayPrependInnerIcon: void 0, displayPrependInnerIconColor: void 0, displayPrependInnerIconSize: "x-small", emptyText: "empty", fieldOnly: !1, hideCancelIcon: !0, hideDetails: !0, label: "", loading: !1, loadingWait: !0, name: "", tableField: !0, underlineColor: "primary", underlineStyle: "dotted", underlineWidth: "2px", underlined: !0, valueColor: "default" }, Pt = { autofocus: !0 }, Ql = { hideCancelIcon: !1, hideSaveIcon: !1, loadingIcon: void 0, loadingIconColor: "primary", saveButtonColor: "primary", saveButtonSize: "x-small", saveButtonTitle: "Save", saveButtonVariant: "text", saveIcon: void 0, saveIconColor: "primary" }, Zo = { falseValue: !1, iconFalse: void 0, iconFalseColor: "danger", iconFalseTitle: "No", iconTrue: void 0, iconTrueColor: "success", iconTrueTitle: "Yes", icons: !0, trueValue: !0 }, Fi = { ...hl, ...Zo, ...Ql, falseIcon: void 0, icons: !0, trueIcon: void 0 }, Qo = { ...hl, ...Pt, ...Ql, clearIcon: void 0, clearable: !1, hideSelected: !0, itemTitle: "title", itemValue: "value", items: () => [], menu: !0, variant: "underlined" }, Ai = { ...hl, ...Zo, icons: !0, falseIcon: "" }, Vi = { ...Pt, ...Ql, ...hl, autoGrow: !0, rows: 1, truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, ea = { ...hl, ...Pt, ...Ql, truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, _i = { fa: { checkboxFalse: "$checkboxOff", checkboxTrue: "far fa-square-check", clear: "$clear", false: "$close", loading: "fa-circle-notch", save: "fa-floppy-disk", true: "$complete" }, mdi: { checkboxFalse: "$checkboxOff", checkboxTrue: "mdi:mdi-checkbox-outline", clear: "$clear", false: "$close", loading: "mdi-loading", save: "mdi-content-save", true: "$complete" } }, Ne = (e) => {
  const { icon: l, iconOptions: n, name: t } = e;
  if (l)
    return l;
  const a = _i[n == null ? void 0 : n.defaultSet];
  if (!a)
    throw new Error(`VInlineFields: No VInlineFields default ${n == null ? void 0 : n.defaultSet} icon set found for ${t}. Please set the icon prop.`);
  const i = a[t];
  if (!i)
    throw new Error(`VInlineFields: No ${t} icon found. Please set the icon prop, or set the default icon set to 'mdi' or 'fa'`);
  return i;
};
function K(e, l) {
  return (n) => Object.keys(e).reduce((t, a) => {
    const i = typeof e[a] == "object" && e[a] != null && !Array.isArray(e[a]) ? e[a] : { type: e[a] };
    return t[a] = n && a in n ? { ...i, default: n[a] } : i, l && !t[a].source && (t[a].source = l), t;
  }, {});
}
const de = K({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component"), ze = typeof window < "u", $t = ze && "IntersectionObserver" in window;
function lo(e, l, n) {
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
function bl(e, l) {
  if (e === l)
    return !0;
  if (e instanceof Date && l instanceof Date && e.getTime() !== l.getTime() || e !== Object(e) || l !== Object(l))
    return !1;
  const n = Object.keys(e);
  return n.length === Object.keys(l).length && n.every((t) => bl(e[t], l[t]));
}
function Ze(e, l, n) {
  if (l === !0)
    return e === void 0 ? n : e;
  if (l == null || typeof l == "boolean")
    return n;
  if (e !== Object(e)) {
    if (typeof l != "function")
      return n;
    const a = l(e, n);
    return a === void 0 ? n : a;
  }
  if (typeof l == "string")
    return function(a, i, c) {
      return a != null && i && typeof i == "string" ? a[i] !== void 0 ? a[i] : lo(a, (i = (i = i.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), c) : c;
    }(e, l, n);
  if (Array.isArray(l))
    return lo(e, l, n);
  if (typeof l != "function")
    return n;
  const t = l(e, n);
  return t === void 0 ? n : t;
}
function te(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${l}` : void 0;
}
function vt(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Ml(e) {
  if (e && "$el" in e) {
    const l = e.$el;
    return (l == null ? void 0 : l.nodeType) === Node.TEXT_NODE ? l.nextElementSibling : l;
  }
  return e;
}
const to = Object.freeze({ enter: 13, tab: 9, delete: 46, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39, end: 35, home: 36, del: 46, backspace: 8, insert: 45, pageup: 33, pagedown: 34, shift: 16 });
function ot(e, l) {
  return l.every((n) => e.hasOwnProperty(n));
}
function na(e, l) {
  const n = {}, t = new Set(Object.keys(e));
  for (const a of l)
    t.has(a) && (n[a] = e[a]);
  return n;
}
function oo(e, l, n) {
  const t = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    l.some((c) => c instanceof RegExp ? c.test(i) : c === i) && !(n != null && n.some((c) => c === i)) ? t[i] = e[i] : a[i] = e[i];
  return [t, a];
}
function hn(e, l) {
  const n = { ...e };
  return l.forEach((t) => delete n[t]), n;
}
const la = /^on[^a-z]/, ft = (e) => la.test(e), Oi = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function Il(e) {
  const [l, n] = oo(e, [la]), t = hn(l, Oi), [a, i] = oo(n, ["class", "style", "id", /^data-/]);
  return Object.assign(a, l), Object.assign(i, t), [a, i];
}
function je(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Nn(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(l, Math.min(n, e));
}
function ao(e, l) {
  return e + (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, l - e.length));
}
function Mn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const t = {};
  for (const a in e)
    t[a] = e[a];
  for (const a in l) {
    const i = e[a], c = l[a];
    vt(i) && vt(c) ? t[a] = Mn(i, c, n) : Array.isArray(i) && Array.isArray(c) && n ? t[a] = n(i, c) : t[a] = c;
  }
  return t;
}
function ta(e) {
  return e.map((l) => l.type === fe ? ta(l.children) : l).flat();
}
function kn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (kn.cache.has(e))
    return kn.cache.get(e);
  const l = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return kn.cache.set(e, l), l;
}
function Dl(e, l) {
  if (!l || typeof l != "object")
    return [];
  if (Array.isArray(l))
    return l.map((n) => Dl(e, n)).flat(1);
  if (Array.isArray(l.children))
    return l.children.map((n) => Dl(e, n)).flat(1);
  if (l.component) {
    if (Object.getOwnPropertySymbols(l.component.provides).includes(e))
      return [l.component];
    if (l.component.subTree)
      return Dl(e, l.component.subTree).flat(1);
  }
  return [];
}
function Tt(e) {
  const l = Re({}), n = v(e);
  return Ue(() => {
    for (const t in n.value)
      l[t] = n.value[t];
  }, { flush: "sync" }), Ko(l);
}
function Rl(e, l) {
  return e.includes(l);
}
function io(e) {
  return e[2].toLowerCase() + e.slice(3);
}
kn.cache = /* @__PURE__ */ new Map();
const Qe = () => [Function, Array];
function ro(e, l) {
  return !!(e[l = "on" + Yo(l)] || e[`${l}Once`] || e[`${l}Capture`] || e[`${l}OnceCapture`] || e[`${l}CaptureOnce`]);
}
function oa(e) {
  for (var l = arguments.length, n = new Array(l > 1 ? l - 1 : 0), t = 1; t < l; t++)
    n[t - 1] = arguments[t];
  if (Array.isArray(e))
    for (const a of e)
      a(...n);
  else
    typeof e == "function" && e(...n);
}
function yt(e) {
  let l = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
  const n = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((t) => `${t}${l ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(n)];
}
function aa(e, l, n) {
  let t, a = e.indexOf(document.activeElement);
  const i = l === "next" ? 1 : -1;
  do
    a += i, t = e[a];
  while ((!t || t.offsetParent == null || !((n == null ? void 0 : n(t)) ?? 1)) && a < e.length && a >= 0);
  return t;
}
function Nl(e, l) {
  var t, a, i, c;
  const n = yt(e);
  if (l)
    if (l === "first")
      (t = n[0]) == null || t.focus();
    else if (l === "last")
      (a = n.at(-1)) == null || a.focus();
    else if (typeof l == "number")
      (i = n[l]) == null || i.focus();
    else {
      const s = aa(n, l);
      s ? s.focus() : Nl(e, l === "next" ? "first" : "last");
    }
  else
    e !== document.activeElement && e.contains(document.activeElement) || ((c = n[0]) == null || c.focus());
}
function Pi() {
}
function Un(e, l) {
  if (!(ze && typeof CSS < "u" && CSS.supports !== void 0 && CSS.supports(`selector(${l})`)))
    return null;
  try {
    return !!e && e.matches(l);
  } catch {
    return null;
  }
}
function Et(e) {
  return e.some((l) => !hi(l) || l.type !== bi && (l.type !== fe || Et(l.children))) ? e : null;
}
const ia = ["top", "bottom"], $i = ["start", "end", "left", "right"];
function mt(e, l) {
  let [n, t] = e.split(" ");
  return t || (t = Rl(ia, n) ? "start" : Rl($i, n) ? "top" : "center"), { side: so(n, l), align: so(t, l) };
}
function so(e, l) {
  return e === "start" ? l ? "right" : "left" : e === "end" ? l ? "left" : "right" : e;
}
function at(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function it(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function uo(e) {
  return { side: e.align, align: e.side };
}
function co(e) {
  return Rl(ia, e.side) ? "y" : "x";
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
function po(e, l) {
  return { x: { before: Math.max(0, l.left - e.left), after: Math.max(0, e.right - l.right) }, y: { before: Math.max(0, l.top - e.top), after: Math.max(0, e.bottom - l.bottom) } };
}
function ra(e) {
  return Array.isArray(e) ? new wn({ x: e[0], y: e[1], width: 0, height: 0 }) : e.getBoundingClientRect();
}
function zt(e) {
  const l = e.getBoundingClientRect(), n = getComputedStyle(e), t = n.transform;
  if (t) {
    let a, i, c, s, o;
    if (t.startsWith("matrix3d("))
      a = t.slice(9, -1).split(/, /), i = +a[0], c = +a[5], s = +a[12], o = +a[13];
    else {
      if (!t.startsWith("matrix("))
        return new wn(l);
      a = t.slice(7, -1).split(/, /), i = +a[0], c = +a[3], s = +a[4], o = +a[5];
    }
    const u = n.transformOrigin, m = l.x - s - (1 - i) * parseFloat(u), y = l.y - o - (1 - c) * parseFloat(u.slice(u.indexOf(" ") + 1)), p = i ? l.width / i : e.offsetWidth + 1, f = c ? l.height / c : e.offsetHeight + 1;
    return new wn({ x: m, y, width: p, height: f });
  }
  return new wn(l);
}
function Rn(e, l, n) {
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
const $l = /* @__PURE__ */ new WeakMap(), Wn = 2.4, vo = 0.2126729, fo = 0.7151522, yo = 0.072175, Ti = 0.55, Ei = 0.58, zi = 0.57, Di = 0.62, Tl = 0.03, mo = 1.45, Li = 5e-4, Wi = 1.25, Mi = 1.25, go = 0.078, ho = 12.82051282051282, El = 0.06, bo = 1e-3;
function Io(e, l) {
  const n = (e.r / 255) ** Wn, t = (e.g / 255) ** Wn, a = (e.b / 255) ** Wn, i = (l.r / 255) ** Wn, c = (l.g / 255) ** Wn, s = (l.b / 255) ** Wn;
  let o, u = n * vo + t * fo + a * yo, m = i * vo + c * fo + s * yo;
  if (u <= Tl && (u += (Tl - u) ** mo), m <= Tl && (m += (Tl - m) ** mo), Math.abs(m - u) < Li)
    return 0;
  if (m > u) {
    const y = (m ** Ti - u ** Ei) * Wi;
    o = y < bo ? 0 : y < go ? y - y * ho * El : y - El;
  } else {
    const y = (m ** Di - u ** zi) * Mi;
    o = y > -bo ? 0 : y > -go ? y - y * ho * El : y + El;
  }
  return 100 * o;
}
function sl(e) {
  Jl(`Vuetify: ${e}`);
}
function rt(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
const Co = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Ri = { rgb: (e, l, n, t) => ({ r: e, g: l, b: n, a: t }), rgba: (e, l, n, t) => ({ r: e, g: l, b: n, a: t }), hsl: (e, l, n, t) => So({ h: e, s: l, l: n, a: t }), hsla: (e, l, n, t) => So({ h: e, s: l, l: n, a: t }), hsv: (e, l, n, t) => ul({ h: e, s: l, v: n, a: t }), hsva: (e, l, n, t) => ul({ h: e, s: l, v: n, a: t }) };
function ol(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && sl(`'${e}' is not a valid hex color`), { r: (16711680 & e) >> 16, g: (65280 & e) >> 8, b: 255 & e };
  if (typeof e == "string" && Co.test(e)) {
    const { groups: l } = e.match(Co), { fn: n, values: t } = l, a = t.split(/,\s*/).map((i) => i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(i) / 100 : parseFloat(i));
    return Ri[n](...a);
  }
  if (typeof e == "string") {
    let l = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(l.length) ? l = l.split("").map((t) => t + t).join("") : [6, 8].includes(l.length) || sl(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(l, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && sl(`'${e}' is not a valid hex(a) color`), function(t) {
      t = function(o) {
        return o.startsWith("#") && (o = o.slice(1)), o = o.replace(/([^0-9a-f])/gi, "F"), (o.length === 3 || o.length === 4) && (o = o.split("").map((u) => u + u).join("")), o.length !== 6 && (o = ao(ao(o, 6), 8, "F")), o;
      }(t);
      let [a, i, c, s] = function(o) {
        let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        const m = [];
        let y = 0;
        for (; y < o.length; )
          m.push(o.substr(y, u)), y += u;
        return m;
      }(t, 2).map((o) => parseInt(o, 16));
      return s = s === void 0 ? s : s / 255, { r: a, g: i, b: c, a: s };
    }(l);
  }
  if (typeof e == "object") {
    if (ot(e, ["r", "g", "b"]))
      return e;
    if (ot(e, ["h", "s", "l"]))
      return ul(sa(e));
    if (ot(e, ["h", "s", "v"]))
      return ul(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function ul(e) {
  const { h: l, s: n, v: t, a } = e, i = (s) => {
    const o = (s + l / 60) % 6;
    return t - t * n * Math.max(Math.min(o, 4 - o, 1), 0);
  }, c = [i(5), i(3), i(1)].map((s) => Math.round(255 * s));
  return { r: c[0], g: c[1], b: c[2], a };
}
function So(e) {
  return ul(sa(e));
}
function sa(e) {
  const { h: l, s: n, l: t, a } = e, i = t + n * Math.min(t, 1 - t);
  return { h: l, s: i === 0 ? 0 : 2 - 2 * t / i, v: i, a };
}
const jl = Symbol.for("vuetify:defaults");
function Dt() {
  const e = me(jl);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Jn(e, l) {
  const n = Dt(), t = W(e), a = v(() => {
    if (r(l == null ? void 0 : l.disabled))
      return n.value;
    const i = r(l == null ? void 0 : l.scoped), c = r(l == null ? void 0 : l.reset), s = r(l == null ? void 0 : l.root);
    if (t.value == null && !(i || c || s))
      return n.value;
    let o = Mn(t.value, { prev: n.value });
    if (i)
      return o;
    if (c || s) {
      const u = Number(c || 1 / 0);
      for (let m = 0; m <= u && o && "prev" in o; m++)
        o = o.prev;
      return o && typeof s == "string" && s in o && (o = Mn(Mn(o, { prev: o }), o[s])), o;
    }
    return o.prev ? Mn(o.prev, o) : o;
  });
  return qe(jl, a), a;
}
function Ni() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Dt();
  const t = _e("useDefaults");
  if (l = l ?? t.type.name ?? t.type.__name, !l)
    throw new Error("[Vuetify] Could not determine component name");
  const a = v(() => {
    var s;
    return (s = n.value) == null ? void 0 : s[e._as ?? l];
  }), i = new Proxy(e, { get(s, o) {
    var m, y, p, f;
    const u = Reflect.get(s, o);
    return o === "class" || o === "style" ? [(m = a.value) == null ? void 0 : m[o], u].filter((g) => g != null) : typeof o != "string" || function(g, h) {
      var b, S;
      return ((b = g.props) == null ? void 0 : b[h]) !== void 0 || ((S = g.props) == null ? void 0 : S[kn(h)]) !== void 0;
    }(t.vnode, o) ? u : ((y = a.value) == null ? void 0 : y[o]) ?? ((f = (p = n.value) == null ? void 0 : p.global) == null ? void 0 : f[o]) ?? u;
  } }), c = ie();
  return Ue(() => {
    if (a.value) {
      const s = Object.entries(a.value).filter((o) => {
        let [u] = o;
        return u.startsWith(u[0].toUpperCase());
      });
      c.value = s.length ? Object.fromEntries(s) : void 0;
    } else
      c.value = void 0;
  }), { props: i, provideSubDefaults: function() {
    const s = function(o) {
      let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _e("injectSelf");
      const { provides: m } = u;
      if (m && o in m)
        return m[o];
    }(jl, t);
    qe(jl, v(() => c.value ? Mn((s == null ? void 0 : s.value) ?? {}, c.value) : s == null ? void 0 : s.value));
  } };
}
function cl(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return sl("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = K(e.props ?? {}, e.name)();
    const l = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(n) {
      return na(n, l);
    }, e.props._as = String, e.setup = function(n, t) {
      const a = Dt();
      if (!a.value)
        return e._setup(n, t);
      const { props: i, provideSubDefaults: c } = Ni(n, n._as ?? e.name, a), s = e._setup(i, t);
      return c(), s;
    };
  }
  return e;
}
function ne() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (l) => (e ? cl : Xe)(l);
}
function Cl(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return ne()({ name: n ?? Yo(Xo(e.replace(/__/g, "-"))), props: { tag: { type: String, default: l }, ...de() }, setup(t, a) {
    let { slots: i } = a;
    return () => {
      var c;
      return Zl(t.tag, { class: [e, t.class], style: t.style }, (c = i.default) == null ? void 0 : c.call(i));
    };
  } });
}
function ua(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; )
      e = e.parentNode;
    return e !== document ? null : document;
  }
  const l = e.getRootNode();
  return l !== document && l.getRootNode({ composed: !0 }) !== document ? null : l;
}
const Ul = "cubic-bezier(0.4, 0, 0.2, 1)";
function _e(e, l) {
  const n = Ii();
  if (!n)
    throw new Error(`[Vuetify] ${e} ${l || "must be called from inside a setup function"}`);
  return n;
}
function nn() {
  const e = _e(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return kn((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let ca = 0, Ll = /* @__PURE__ */ new WeakMap();
function Je() {
  const e = _e("getUid");
  if (Ll.has(e))
    return Ll.get(e);
  {
    const l = ca++;
    return Ll.set(e, l), l;
  }
}
function da(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
  for (; e; ) {
    if (l ? ji(e) : Lt(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Gl(e, l) {
  const n = [];
  if (l && e && !l.contains(e))
    return n;
  for (; e && (Lt(e) && n.push(e), e !== l); )
    e = e.parentElement;
  return n;
}
function Lt(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const l = window.getComputedStyle(e);
  return l.overflowY === "scroll" || l.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function ji(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const l = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(l.overflowY);
}
function ue(e) {
  _e("useRender").render = e;
}
function Wt(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = W(), t = W();
  if (ze) {
    const a = new ResizeObserver((i) => {
      e == null || e(i, a), i.length && (t.value = l === "content" ? i[0].contentRect : i[0].target.getBoundingClientRect());
    });
    tn(() => {
      a.disconnect();
    }), J(n, (i, c) => {
      c && (a.unobserve(Ml(c)), t.value = void 0), i && a.observe(Ml(i));
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: Ft(t) };
}
function Fn(e, l) {
  let n;
  function t() {
    n = At(), n.run(() => l.length ? l(() => {
      n == null || n.stop(), t();
    }) : l());
  }
  J(e, (a) => {
    a && !n ? t() : a || (n == null || n.stop(), n = void 0);
  }, { immediate: !0 }), Te(() => {
    n == null || n.stop();
  });
}
function be(e, l, n) {
  let t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (m) => m, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (m) => m;
  const i = _e("useProxiedModel"), c = W(e[l] !== void 0 ? e[l] : n), s = kn(l), o = v(s !== l ? () => {
    var m, y, p, f;
    return e[l], !(!((m = i.vnode.props) != null && m.hasOwnProperty(l)) && !((y = i.vnode.props) != null && y.hasOwnProperty(s)) || !((p = i.vnode.props) != null && p.hasOwnProperty(`onUpdate:${l}`)) && !((f = i.vnode.props) != null && f.hasOwnProperty(`onUpdate:${s}`)));
  } : () => {
    var m, y;
    return e[l], !(!((m = i.vnode.props) != null && m.hasOwnProperty(l)) || !((y = i.vnode.props) != null && y.hasOwnProperty(`onUpdate:${l}`)));
  });
  Fn(() => !o.value, () => {
    J(() => e[l], (m) => {
      c.value = m;
    });
  });
  const u = v({ get() {
    const m = e[l];
    return t(o.value ? m : c.value);
  }, set(m) {
    const y = a(m), p = cn(o.value ? e[l] : c.value);
    p !== y && t(p) !== m && (c.value = y, i == null || i.emit(`update:${l}`, y));
  } });
  return Object.defineProperty(u, "externalValue", { get: () => o.value ? e[l] : c.value }), u;
}
Je.reset = () => {
  ca = 0, Ll = /* @__PURE__ */ new WeakMap();
};
const pa = Symbol.for("vuetify:locale");
function et() {
  const e = me(pa);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Sl() {
  const e = me(pa);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const Bo = Symbol.for("vuetify:theme"), Oe = K({ theme: String }, "theme");
function De(e) {
  _e("provideTheme");
  const l = me(Bo, null);
  if (!l)
    throw new Error("Could not find Vuetify theme injection");
  const n = v(() => e.theme ?? l.name.value), t = v(() => l.themes.value[n.value]), a = v(() => l.isDisabled ? void 0 : `v-theme--${n.value}`), i = { ...l, name: n, current: t, themeClasses: a };
  return qe(Bo, i), i;
}
const Me = K({ tag: { type: String, default: "div" } }, "tag"), Ui = K({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function Le(e, l, n) {
  return ne()({ name: e, props: Ui({ mode: n, origin: l }), setup(t, a) {
    let { slots: i } = a;
    const c = { onBeforeEnter(s) {
      t.origin && (s.style.transformOrigin = t.origin);
    }, onLeave(s) {
      if (t.leaveAbsolute) {
        const { offsetTop: o, offsetLeft: u, offsetWidth: m, offsetHeight: y } = s;
        s._transitionInitialStyles = { position: s.style.position, top: s.style.top, left: s.style.left, width: s.style.width, height: s.style.height }, s.style.position = "absolute", s.style.top = `${o}px`, s.style.left = `${u}px`, s.style.width = `${m}px`, s.style.height = `${y}px`;
      }
      t.hideOnLeave && s.style.setProperty("display", "none", "important");
    }, onAfterLeave(s) {
      if (t.leaveAbsolute && (s != null && s._transitionInitialStyles)) {
        const { position: o, top: u, left: m, width: y, height: p } = s._transitionInitialStyles;
        delete s._transitionInitialStyles, s.style.position = o || "", s.style.top = u || "", s.style.left = m || "", s.style.width = y || "", s.style.height = p || "";
      }
    } };
    return () => {
      const s = t.group ? Ci : En;
      return Zl(s, { name: t.disabled ? "" : e, css: !t.disabled, ...t.group ? void 0 : { mode: t.mode }, ...t.disabled ? {} : c }, i.default);
    };
  } });
}
function va(e, l) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return ne()({ name: e, props: { mode: { type: String, default: n }, disabled: Boolean }, setup(t, a) {
    let { slots: i } = a;
    return () => Zl(En, { name: t.disabled ? "" : e, css: !t.disabled, ...t.disabled ? {} : l }, i.default);
  } });
}
function fa() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", n = Xo(`offset-${l}`);
  return { onBeforeEnter(i) {
    i._parent = i.parentNode, i._initialStyle = { transition: i.style.transition, overflow: i.style.overflow, [l]: i.style[l] };
  }, onEnter(i) {
    const c = i._initialStyle;
    i.style.setProperty("transition", "none", "important"), i.style.overflow = "hidden";
    const s = `${i[n]}px`;
    i.style[l] = "0", i.offsetHeight, i.style.transition = c.transition, e && i._parent && i._parent.classList.add(e), requestAnimationFrame(() => {
      i.style[l] = s;
    });
  }, onAfterEnter: a, onEnterCancelled: a, onLeave(i) {
    i._initialStyle = { transition: "", overflow: i.style.overflow, [l]: i.style[l] }, i.style.overflow = "hidden", i.style[l] = `${i[n]}px`, i.offsetHeight, requestAnimationFrame(() => i.style[l] = "0");
  }, onAfterLeave: t, onLeaveCancelled: t };
  function t(i) {
    e && i._parent && i._parent.classList.remove(e), a(i);
  }
  function a(i) {
    const c = i._initialStyle[l];
    i.style.overflow = i._initialStyle.overflow, c != null && (i.style[l] = c), delete i._initialStyle;
  }
}
const Gi = K({ target: [Object, Array] }, "v-dialog-transition"), ya = ne()({ name: "VDialogTransition", props: Gi(), setup(e, l) {
  let { slots: n } = l;
  const t = { onBeforeEnter(a) {
    a.style.pointerEvents = "none", a.style.visibility = "hidden";
  }, async onEnter(a, i) {
    var p;
    await new Promise((f) => requestAnimationFrame(f)), await new Promise((f) => requestAnimationFrame(f)), a.style.visibility = "";
    const { x: c, y: s, sx: o, sy: u, speed: m } = ko(e.target, a), y = Rn(a, [{ transform: `translate(${c}px, ${s}px) scale(${o}, ${u})`, opacity: 0 }, {}], { duration: 225 * m, easing: "cubic-bezier(0.0, 0, 0.2, 1)" });
    (p = xo(a)) == null || p.forEach((f) => {
      Rn(f, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * m, easing: Ul });
    }), y.finished.then(() => i());
  }, onAfterEnter(a) {
    a.style.removeProperty("pointer-events");
  }, onBeforeLeave(a) {
    a.style.pointerEvents = "none";
  }, async onLeave(a, i) {
    var y;
    await new Promise((p) => requestAnimationFrame(p));
    const { x: c, y: s, sx: o, sy: u, speed: m } = ko(e.target, a);
    Rn(a, [{}, { transform: `translate(${c}px, ${s}px) scale(${o}, ${u})`, opacity: 0 }], { duration: 125 * m, easing: "cubic-bezier(0.4, 0, 1, 1)" }).finished.then(() => i()), (y = xo(a)) == null || y.forEach((p) => {
      Rn(p, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * m, easing: Ul });
    });
  }, onAfterLeave(a) {
    a.style.removeProperty("pointer-events");
  } };
  return () => e.target ? d(En, Q({ name: "dialog-transition" }, t, { css: !1 }), n) : d(En, { name: "dialog-transition" }, n);
} });
function xo(e) {
  var n;
  const l = (n = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : n.children;
  return l && [...l];
}
function ko(e, l) {
  const n = ra(e), t = zt(l), [a, i] = getComputedStyle(l).transformOrigin.split(" ").map((S) => parseFloat(S)), [c, s] = getComputedStyle(l).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let o = n.left + n.width / 2;
  c === "left" || s === "left" ? o -= n.width / 2 : c !== "right" && s !== "right" || (o += n.width / 2);
  let u = n.top + n.height / 2;
  c === "top" || s === "top" ? u -= n.height / 2 : c !== "bottom" && s !== "bottom" || (u += n.height / 2);
  const m = n.width / t.width, y = n.height / t.height, p = Math.max(1, m, y), f = m / p || 0, g = y / p || 0, h = t.width * t.height / (window.innerWidth * window.innerHeight), b = h > 0.12 ? Math.min(1.5, 10 * (h - 0.12) + 1) : 1;
  return { x: o - (a + t.left), y: u - (i + t.top), sx: f, sy: g, speed: b };
}
Le("fab-transition", "center center", "out-in"), Le("dialog-bottom-transition"), Le("dialog-top-transition"), Le("fade-transition");
const qi = Le("scale-transition");
Le("scroll-x-transition"), Le("scroll-x-reverse-transition"), Le("scroll-y-transition"), Le("scroll-y-reverse-transition"), Le("slide-x-transition"), Le("slide-x-reverse-transition");
const ma = Le("slide-y-transition");
Le("slide-y-reverse-transition");
const Hi = va("expand-transition", fa()), ga = va("expand-x-transition", fa("", !0)), Ki = K({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Ve = ne(!1)({ name: "VDefaultsProvider", props: Ki(), setup(e, l) {
  let { slots: n } = l;
  const { defaults: t, disabled: a, reset: i, root: c, scoped: s } = Ko(e);
  return Jn(t, { reset: i, root: c, scoped: s, disabled: a }), () => {
    var o;
    return (o = n.default) == null ? void 0 : o.call(n);
  };
} }), Dn = K({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function Ln(e) {
  return { dimensionStyles: v(() => ({ height: te(e.height), maxHeight: te(e.maxHeight), maxWidth: te(e.maxWidth), minHeight: te(e.minHeight), minWidth: te(e.minWidth), width: te(e.width) })) };
}
const ha = K({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...de(), ...Dn() }, "VResponsive"), wo = ne()({ name: "VResponsive", props: ha(), setup(e, l) {
  let { slots: n } = l;
  const { aspectStyles: t } = function(i) {
    return { aspectStyles: v(() => {
      const c = Number(i.aspectRatio);
      return c ? { paddingBottom: String(1 / c * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: a } = Ln(e);
  return ue(() => {
    var i;
    return d("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [a.value, e.style] }, [d("div", { class: "v-responsive__sizer", style: t.value }, null), (i = n.additional) == null ? void 0 : i.call(n), n.default && d("div", { class: ["v-responsive__content", e.contentClass] }, [n.default()])]);
  }), {};
} }), Zn = K({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), un = (e, l) => {
  let { slots: n } = l;
  const { transition: t, disabled: a, ...i } = e, { component: c = En, ...s } = typeof t == "object" ? t : {};
  return Zl(c, Q(typeof t == "string" ? { name: a ? "" : t } : s, i, { disabled: a }), n);
};
function Fo(e, l) {
  var t;
  const n = (t = e._observe) == null ? void 0 : t[l.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[l.instance.$.uid]);
}
const Mt = { mounted: function(e, l) {
  if (!$t)
    return;
  const n = l.modifiers || {}, t = l.value, { handler: a, options: i } = typeof t == "object" ? t : { handler: t, options: {} }, c = new IntersectionObserver(function() {
    var y;
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], o = arguments.length > 1 ? arguments[1] : void 0;
    const u = (y = e._observe) == null ? void 0 : y[l.instance.$.uid];
    if (!u)
      return;
    const m = s.some((p) => p.isIntersecting);
    !a || n.quiet && !u.init || n.once && !m && !u.init || a(m, s, o), m && n.once ? Fo(e, l) : u.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[l.instance.$.uid] = { init: !1, observer: c }, c.observe(e);
}, unmounted: Fo }, Yi = K({ alt: String, cover: Boolean, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...ha(), ...de(), ...Zn() }, "VImg"), ba = ne()({ name: "VImg", directives: { intersect: Mt }, props: Yi(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, l) {
  let { emit: n, slots: t } = l;
  const a = _e("VImg"), i = ie(""), c = W(), s = ie(e.eager ? "loading" : "idle"), o = ie(), u = ie(), m = v(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), y = v(() => m.value.aspect || o.value / u.value || 0);
  function p(C) {
    if ((!e.eager || !C) && (!$t || C || e.eager)) {
      if (s.value = "loading", m.value.lazySrc) {
        const V = new Image();
        V.src = m.value.lazySrc, S(V, null);
      }
      m.value.src && xe(() => {
        var V;
        n("loadstart", ((V = c.value) == null ? void 0 : V.currentSrc) || m.value.src), setTimeout(() => {
          var I;
          if (!a.isUnmounted)
            if ((I = c.value) != null && I.complete) {
              if (c.value.naturalWidth || g(), s.value === "error")
                return;
              y.value || S(c.value, null), s.value === "loading" && f();
            } else
              y.value || S(c.value), h();
        });
      });
    }
  }
  function f() {
    var C;
    a.isUnmounted || (h(), S(c.value), s.value = "loaded", n("load", ((C = c.value) == null ? void 0 : C.currentSrc) || m.value.src));
  }
  function g() {
    var C;
    a.isUnmounted || (s.value = "error", n("error", ((C = c.value) == null ? void 0 : C.currentSrc) || m.value.src));
  }
  function h() {
    const C = c.value;
    C && (i.value = C.currentSrc || C.src);
  }
  J(() => e.src, () => {
    p(s.value !== "idle");
  }), J(y, (C, V) => {
    !C && V && c.value && S(c.value);
  }), Jo(() => p());
  let b = -1;
  function S(C) {
    let V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const I = () => {
      if (clearTimeout(b), a.isUnmounted)
        return;
      const { naturalHeight: F, naturalWidth: _ } = C;
      F || _ ? (o.value = _, u.value = F) : C.complete || s.value !== "loading" || V == null ? (C.currentSrc.endsWith(".svg") || C.currentSrc.startsWith("data:image/svg+xml")) && (o.value = 1, u.value = 1) : b = window.setTimeout(I, V);
    };
    I();
  }
  tn(() => {
    clearTimeout(b);
  });
  const O = v(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), P = () => {
    var I;
    if (!m.value.src || s.value === "idle")
      return null;
    const C = d("img", { class: ["v-img__img", O.value], style: { objectPosition: e.position }, src: m.value.src, srcset: m.value.srcset, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: c, onLoad: f, onError: g }, null), V = (I = t.sources) == null ? void 0 : I.call(t);
    return d(un, { transition: e.transition, appear: !0 }, { default: () => [Ee(V ? d("picture", { class: "v-img__picture" }, [V, C]) : C, [[Yn, s.value === "loaded"]])] });
  }, R = () => d(un, { transition: e.transition }, { default: () => [m.value.lazySrc && s.value !== "loaded" && d("img", { class: ["v-img__img", "v-img__img--preload", O.value], style: { objectPosition: e.position }, src: m.value.lazySrc, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), w = () => t.placeholder ? d(un, { transition: e.transition, appear: !0 }, { default: () => [(s.value === "loading" || s.value === "error" && !t.error) && d("div", { class: "v-img__placeholder" }, [t.placeholder()])] }) : null, E = () => t.error ? d(un, { transition: e.transition, appear: !0 }, { default: () => [s.value === "error" && d("div", { class: "v-img__error" }, [t.error()])] }) : null, j = () => e.gradient ? d("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, z = ie(!1);
  {
    const C = J(y, (V) => {
      V && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          z.value = !0;
        });
      }), C());
    });
  }
  return ue(() => {
    const C = wo.filterProps(e);
    return Ee(d(wo, Q({ class: ["v-img", { "v-img--booting": !z.value }, e.class], style: [{ width: te(e.width === "auto" ? o.value : e.width) }, e.style] }, C, { aspectRatio: y.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => d(fe, null, [d(P, null, null), d(R, null, null), d(j, null, null), d(w, null, null), d(E, null, null)]), default: t.default }), [[on("intersect"), { handler: p, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: i, image: c, state: s, naturalWidth: o, naturalHeight: u };
} }), Qn = K({ border: [Boolean, Number, String] }, "border");
function el(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nn();
  return { borderClasses: v(() => {
    const n = zn(e) ? e.value : e.border, t = [];
    if (n === !0 || n === "")
      t.push(`${l}--border`);
    else if (typeof n == "string" || n === 0)
      for (const a of String(n).split(" "))
        t.push(`border-${a}`);
    return t;
  }) };
}
function Rt(e) {
  return Tt(() => {
    const l = [], n = {};
    if (e.value.background)
      if (rt(e.value.background)) {
        if (n.backgroundColor = e.value.background, !e.value.text && rt(t = e.value.background) && !/^((rgb|hsl)a?\()?var\(--/.test(t)) {
          const a = ol(e.value.background);
          if (a.a == null || a.a === 1) {
            const i = function(c) {
              const s = Math.abs(Io(ol(0), ol(c)));
              return Math.abs(Io(ol(16777215), ol(c))) > Math.min(s, 50) ? "#fff" : "#000";
            }(a);
            n.color = i, n.caretColor = i;
          }
        }
      } else
        l.push(`bg-${e.value.background}`);
    var t;
    return e.value.text && (rt(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : l.push(`text-${e.value.text}`)), { colorClasses: l, colorStyles: n };
  });
}
function en(e, l) {
  const n = v(() => ({ text: zn(e) ? e.value : l ? e[l] : null })), { colorClasses: t, colorStyles: a } = Rt(n);
  return { textColorClasses: t, textColorStyles: a };
}
function Gn(e, l) {
  const n = v(() => ({ background: zn(e) ? e.value : l ? e[l] : null })), { colorClasses: t, colorStyles: a } = Rt(n);
  return { backgroundColorClasses: t, backgroundColorStyles: a };
}
const nl = K({ elevation: { type: [Number, String], validator(e) {
  const l = parseInt(e);
  return !isNaN(l) && l >= 0 && l <= 24;
} } }, "elevation");
function ll(e) {
  return { elevationClasses: v(() => {
    const l = zn(e) ? e.value : e.elevation, n = [];
    return l == null || n.push(`elevation-${l}`), n;
  }) };
}
const an = K({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function rn(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nn();
  return { roundedClasses: v(() => {
    const n = zn(e) ? e.value : e.rounded, t = [];
    if (n === !0 || n === "")
      t.push(`${l}--rounded`);
    else if (typeof n == "string" || n === 0)
      for (const a of String(n).split(" "))
        t.push(`rounded-${a}`);
    return t;
  }) };
}
const Xi = [null, "default", "comfortable", "compact"], ln = K({ density: { type: String, default: "default", validator: (e) => Xi.includes(e) } }, "density");
function sn(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nn();
  return { densityClasses: v(() => `${l}--density-${e.density}`) };
}
const Ji = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Bl(e, l) {
  return d(fe, null, [e && d("span", { key: "overlay", class: `${l}__overlay` }, null), d("span", { key: "underlay", class: `${l}__underlay` }, null)]);
}
const bn = K({ color: String, variant: { type: String, default: "elevated", validator: (e) => Ji.includes(e) } }, "variant");
function xl(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nn();
  const n = v(() => {
    const { variant: i } = r(e);
    return `${l}--variant-${i}`;
  }), { colorClasses: t, colorStyles: a } = Rt(v(() => {
    const { variant: i, color: c } = r(e);
    return { [["elevated", "flat"].includes(i) ? "background" : "text"]: c };
  }));
  return { colorClasses: t, colorStyles: a, variantClasses: n };
}
const Ia = K({ divided: Boolean, ...Qn(), ...de(), ...ln(), ...nl(), ...an(), ...Me(), ...Oe(), ...bn() }, "VBtnGroup"), Ao = ne()({ name: "VBtnGroup", props: Ia(), setup(e, l) {
  let { slots: n } = l;
  const { themeClasses: t } = De(e), { densityClasses: a } = sn(e), { borderClasses: i } = el(e), { elevationClasses: c } = ll(e), { roundedClasses: s } = rn(e);
  Jn({ VBtn: { height: "auto", color: le(e, "color"), density: le(e, "density"), flat: !0, variant: le(e, "variant") } }), ue(() => d(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, t.value, i.value, a.value, c.value, s.value, e.class], style: e.style }, n));
} }), Ca = K({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), Sa = K({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function Ba(e, l) {
  let n = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
  const t = _e("useGroupItem");
  if (!t)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const a = Je();
  qe(Symbol.for(`${l.description}:id`), a);
  const i = me(l, null);
  if (!i) {
    if (!n)
      return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${l.description}`);
  }
  const c = le(e, "value"), s = v(() => !(!i.disabled.value && !e.disabled));
  i.register({ id: a, value: c, disabled: s }, t), tn(() => {
    i.unregister(a);
  });
  const o = v(() => i.isSelected(a)), u = v(() => o.value && [i.selectedClass.value, e.selectedClass]);
  return J(o, (m) => {
    t.emit("group:selected", { value: m });
  }), { id: a, isSelected: o, toggle: () => i.select(a, !o.value), select: (m) => i.select(a, m), selectedClass: u, value: c, disabled: s, group: i };
}
function xa(e, l) {
  let n = !1;
  const t = Re([]), a = be(e, "modelValue", [], (u) => u == null ? [] : Vo(t, je(u)), (u) => {
    const m = function(y, p) {
      const f = [];
      return p.forEach((g) => {
        const h = y.findIndex((b) => b.id === g);
        if (~h) {
          const b = y[h];
          f.push(b.value != null ? b.value : h);
        }
      }), f;
    }(t, u);
    return e.multiple ? m : m[0];
  }), i = _e("useGroup");
  function c() {
    const u = t.find((m) => !m.disabled);
    u && e.mandatory === "force" && !a.value.length && (a.value = [u.id]);
  }
  function s(u) {
    if (e.multiple && sl('This method is not supported when using "multiple" prop'), a.value.length) {
      const m = a.value[0], y = t.findIndex((g) => g.id === m);
      let p = (y + u) % t.length, f = t[p];
      for (; f.disabled && p !== y; )
        p = (p + u) % t.length, f = t[p];
      if (f.disabled)
        return;
      a.value = [t[p].id];
    } else {
      const m = t.find((y) => !y.disabled);
      m && (a.value = [m.id]);
    }
  }
  Xn(() => {
    c();
  }), tn(() => {
    n = !0;
  });
  const o = { register: function(u, m) {
    const y = u, p = Dl(Symbol.for(`${l.description}:id`), i == null ? void 0 : i.vnode).indexOf(m);
    p > -1 ? t.splice(p, 0, y) : t.push(y);
  }, unregister: function(u) {
    if (n)
      return;
    c();
    const m = t.findIndex((y) => y.id === u);
    t.splice(m, 1);
  }, selected: a, select: function(u, m) {
    const y = t.find((p) => p.id === u);
    if (!m || !(y != null && y.disabled))
      if (e.multiple) {
        const p = a.value.slice(), f = p.findIndex((h) => h === u), g = ~f;
        if (m = m ?? !g, g && e.mandatory && p.length <= 1 || !g && e.max != null && p.length + 1 > e.max)
          return;
        f < 0 && m ? p.push(u) : f >= 0 && !m && p.splice(f, 1), a.value = p;
      } else {
        const p = a.value.includes(u);
        if (e.mandatory && p)
          return;
        a.value = m ?? !p ? [u] : [];
      }
  }, disabled: le(e, "disabled"), prev: () => s(t.length - 1), next: () => s(1), isSelected: (u) => a.value.includes(u), selectedClass: v(() => e.selectedClass), items: v(() => t), getItemIndex: (u) => function(m, y) {
    const p = Vo(m, [y]);
    return p.length ? m.findIndex((f) => f.id === p[0]) : -1;
  }(t, u) };
  return qe(l, o), o;
}
function Vo(e, l) {
  const n = [];
  return l.forEach((t) => {
    const a = e.find((c) => bl(t, c.value)), i = e[t];
    (a == null ? void 0 : a.value) != null ? n.push(a.id) : i != null && n.push(i.id);
  }), n;
}
const ka = Symbol.for("vuetify:v-btn-toggle"), Zi = K({ ...Ia(), ...Ca() }, "VBtnToggle");
ne()({ name: "VBtnToggle", props: Zi(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: n } = l;
  const { isSelected: t, next: a, prev: i, select: c, selected: s } = xa(e, ka);
  return ue(() => {
    const o = Ao.filterProps(e);
    return d(Ao, Q({ class: ["v-btn-toggle", e.class] }, o, { style: e.style }), { default: () => {
      var u;
      return [(u = n.default) == null ? void 0 : u.call(n, { isSelected: t, next: a, prev: i, select: c, selected: s })];
    } });
  }), { next: a, prev: i, select: c };
} });
const ye = [String, Function, Object, Array], Qi = Symbol.for("vuetify:icons"), ql = K({ icon: { type: ye }, tag: { type: String, required: !0 } }, "icon"), _o = ne()({ name: "VComponentIcon", props: ql(), setup(e, l) {
  let { slots: n } = l;
  return () => {
    const t = e.icon;
    return d(e.tag, null, { default: () => {
      var a;
      return [e.icon ? d(t, null, null) : (a = n.default) == null ? void 0 : a.call(n)];
    } });
  };
} }), er = cl({ name: "VSvgIcon", inheritAttrs: !1, props: ql(), setup(e, l) {
  let { attrs: n } = l;
  return () => d(e.tag, Q(n, { style: null }), { default: () => [d("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((t) => Array.isArray(t) ? d("path", { d: t[0], "fill-opacity": t[1] }, null) : d("path", { d: t }, null)) : d("path", { d: e.icon }, null)])] });
} });
cl({ name: "VLigatureIcon", props: ql(), setup: (e) => () => d(e.tag, null, { default: () => [e.icon] }) }), cl({ name: "VClassIcon", props: ql(), setup: (e) => () => d(e.tag, { class: e.icon }, null) });
const nr = ["x-small", "small", "default", "large", "x-large"], kl = K({ size: { type: [String, Number], default: "default" } }, "size");
function wl(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nn();
  return Tt(() => {
    let n, t;
    return Rl(nr, e.size) ? n = `${l}--size-${e.size}` : e.size && (t = { width: te(e.size), height: te(e.size) }), { sizeClasses: n, sizeStyles: t };
  });
}
const lr = K({ color: String, start: Boolean, end: Boolean, icon: ye, ...de(), ...kl(), ...Me({ tag: "i" }), ...Oe() }, "VIcon"), ve = ne()({ name: "VIcon", props: lr(), setup(e, l) {
  let { attrs: n, slots: t } = l;
  const a = W(), { themeClasses: i } = De(e), { iconData: c } = ((m) => {
    const y = me(Qi);
    if (!y)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: v(() => {
      var b;
      const p = r(m);
      if (!p)
        return { component: _o };
      let f = p;
      if (typeof f == "string" && (f = f.trim(), f.startsWith("$") && (f = (b = y.aliases) == null ? void 0 : b[f.slice(1)])), !f)
        throw new Error(`Could not find aliased icon "${p}"`);
      if (Array.isArray(f))
        return { component: er, icon: f };
      if (typeof f != "string")
        return { component: _o, icon: f };
      const g = Object.keys(y.sets).find((S) => typeof f == "string" && f.startsWith(`${S}:`)), h = g ? f.slice(g.length + 1) : f;
      return { component: y.sets[g ?? y.defaultSet].component, icon: h };
    }) };
  })(v(() => a.value || e.icon)), { sizeClasses: s } = wl(e), { textColorClasses: o, textColorStyles: u } = en(le(e, "color"));
  return ue(() => {
    var y, p;
    const m = (y = t.default) == null ? void 0 : y.call(t);
    return m && (a.value = (p = ta(m).filter((f) => f.type === Si && f.children && typeof f.children == "string")[0]) == null ? void 0 : p.children), d(c.value.component, { tag: e.tag, icon: c.value.icon, class: ["v-icon", "notranslate", i.value, s.value, o.value, { "v-icon--clickable": !!n.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [s.value ? void 0 : { fontSize: te(e.size), height: te(e.size), width: te(e.size) }, u.value, e.style], role: n.onClick ? "button" : void 0, "aria-hidden": !n.onClick }, { default: () => [m] });
  }), {};
} });
function wa(e, l) {
  const n = W(), t = ie(!1);
  if ($t) {
    const a = new IntersectionObserver((i) => {
      e == null || e(i, a), t.value = !!i.find((c) => c.isIntersecting);
    }, l);
    tn(() => {
      a.disconnect();
    }), J(n, (i, c) => {
      c && (a.unobserve(c), t.value = !1), i && a.observe(i);
    }, { flush: "post" });
  }
  return { intersectionRef: n, isIntersecting: t };
}
const tr = K({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...de(), ...kl(), ...Me({ tag: "div" }), ...Oe() }, "VProgressCircular"), Fa = ne()({ name: "VProgressCircular", props: tr(), setup(e, l) {
  let { slots: n } = l;
  const t = 2 * Math.PI * 20, a = W(), { themeClasses: i } = De(e), { sizeClasses: c, sizeStyles: s } = wl(e), { textColorClasses: o, textColorStyles: u } = en(le(e, "color")), { textColorClasses: m, textColorStyles: y } = en(le(e, "bgColor")), { intersectionRef: p, isIntersecting: f } = wa(), { resizeRef: g, contentRect: h } = Wt(), b = v(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), S = v(() => Number(e.width)), O = v(() => s.value ? Number(e.size) : h.value ? h.value.width : Math.max(S.value, 32)), P = v(() => 20 / (1 - S.value / O.value) * 2), R = v(() => S.value / O.value * P.value), w = v(() => te((100 - b.value) / 100 * t));
  return Ue(() => {
    p.value = a.value, g.value = a.value;
  }), ue(() => d(e.tag, { ref: a, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": f.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, i.value, c.value, o.value, e.class], style: [s.value, u.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : b.value }, { default: () => [d("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${P.value} ${P.value}` }, [d("circle", { class: ["v-progress-circular__underlay", m.value], style: y.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": R.value, "stroke-dasharray": t, "stroke-dashoffset": 0 }, null), d("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": R.value, "stroke-dasharray": t, "stroke-dashoffset": w.value }, null)]), n.default && d("div", { class: "v-progress-circular__content" }, [n.default({ value: b.value })])] })), {};
} }), Oo = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, Nt = K({ location: String }, "location");
function jt(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: t } = Sl();
  return { locationStyles: v(() => {
    if (!e.location)
      return {};
    const { side: i, align: c } = mt(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, t.value);
    function s(u) {
      return n ? n(u) : 0;
    }
    const o = {};
    return i !== "center" && (l ? o[Oo[i]] = `calc(100% - ${s(i)}px)` : o[i] = 0), c !== "center" ? l ? o[Oo[c]] = `calc(100% - ${s(c)}px)` : o[c] = 0 : (i === "center" ? o.top = o.left = "50%" : o[{ top: "left", bottom: "left", left: "top", right: "top" }[i]] = "50%", o.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[i]), o;
  }) };
}
const or = K({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...de(), ...Nt({ location: "top" }), ...an(), ...Me(), ...Oe() }, "VProgressLinear"), ar = ne()({ name: "VProgressLinear", props: or(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: n } = l;
  const t = be(e, "modelValue"), { isRtl: a, rtlClasses: i } = Sl(), { themeClasses: c } = De(e), { locationStyles: s } = jt(e), { textColorClasses: o, textColorStyles: u } = en(e, "color"), { backgroundColorClasses: m, backgroundColorStyles: y } = Gn(v(() => e.bgColor || e.color)), { backgroundColorClasses: p, backgroundColorStyles: f } = Gn(e, "color"), { roundedClasses: g } = rn(e), { intersectionRef: h, isIntersecting: b } = wa(), S = v(() => parseInt(e.max, 10)), O = v(() => parseInt(e.height, 10)), P = v(() => parseFloat(e.bufferValue) / S.value * 100), R = v(() => parseFloat(t.value) / S.value * 100), w = v(() => a.value !== e.reverse), E = v(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), j = v(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function z(C) {
    if (!h.value)
      return;
    const { left: V, right: I, width: F } = h.value.getBoundingClientRect(), _ = w.value ? F - C.clientX + (I - F) : C.clientX - V;
    t.value = Math.round(_ / F * S.value);
  }
  return ue(() => d(e.tag, { ref: h, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && b.value, "v-progress-linear--reverse": w.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, g.value, c.value, i.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? te(O.value) : 0, "--v-progress-linear-height": te(O.value), ...s.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : R.value, onClick: e.clickable && z }, { default: () => [e.stream && d("div", { key: "stream", class: ["v-progress-linear__stream", o.value], style: { ...u.value, [w.value ? "left" : "right"]: te(-O.value), borderTop: `${te(O.value / 2)} dotted`, opacity: j.value, top: `calc(50% - ${te(O.value / 4)})`, width: te(100 - P.value, "%"), "--v-progress-linear-stream-to": te(O.value * (w.value ? 1 : -1)) } }, null), d("div", { class: ["v-progress-linear__background", m.value], style: [y.value, { opacity: j.value, width: te(e.stream ? P.value : 100, "%") }] }, null), d(En, { name: E.value }, { default: () => [e.indeterminate ? d("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((C) => d("div", { key: C, class: ["v-progress-linear__indeterminate", C, p.value], style: f.value }, null))]) : d("div", { class: ["v-progress-linear__determinate", p.value], style: [f.value, { width: te(R.value, "%") }] }, null)] }), n.default && d("div", { class: "v-progress-linear__content" }, [n.default({ value: R.value, buffer: P.value })])] })), {};
} }), Ut = K({ loading: [Boolean, String] }, "loader");
function nt(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nn();
  return { loaderClasses: v(() => ({ [`${l}--loading`]: e.loading })) };
}
function Gt(e, l) {
  var t;
  let { slots: n } = l;
  return d("div", { class: `${e.name}__loader` }, [((t = n.default) == null ? void 0 : t.call(n, { color: e.color, isActive: e.active })) || d(ar, { active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const ir = ["static", "relative", "fixed", "absolute", "sticky"], Aa = K({ position: { type: String, validator: (e) => ir.includes(e) } }, "position");
function Va(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nn();
  return { positionClasses: v(() => e.position ? `${l}--${e.position}` : void 0) };
}
function lt(e, l) {
  const n = Bi("RouterLink"), t = v(() => !(!e.href && !e.to)), a = v(() => (t == null ? void 0 : t.value) || ro(l, "click") || ro(e, "click"));
  if (typeof n == "string")
    return { isLink: t, isClickable: a, href: le(e, "href") };
  const i = e.to ? n.useLink(e) : void 0;
  return { isLink: t, isClickable: a, route: i == null ? void 0 : i.route, navigate: i == null ? void 0 : i.navigate, isActive: i && v(() => {
    var c, s;
    return e.exact ? (c = i.isExactActive) == null ? void 0 : c.value : (s = i.isActive) == null ? void 0 : s.value;
  }), href: v(() => e.to ? i == null ? void 0 : i.route.value.href : e.href) };
}
const tt = K({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let st = !1;
const gt = Symbol("rippleStop"), rr = 80;
function Po(e, l) {
  e.style.transform = l, e.style.webkitTransform = l;
}
function ht(e) {
  return e.constructor.name === "TouchEvent";
}
function _a(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Hl = { show(e, l) {
  var f;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((f = l == null ? void 0 : l._ripple) != null && f.enabled))
    return;
  const t = document.createElement("span"), a = document.createElement("span");
  t.appendChild(a), t.className = "v-ripple__container", n.class && (t.className += ` ${n.class}`);
  const { radius: i, scale: c, x: s, y: o, centerX: u, centerY: m } = function(g, h) {
    var j;
    let b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, S = 0, O = 0;
    if (!_a(g)) {
      const z = h.getBoundingClientRect(), C = ht(g) ? g.touches[g.touches.length - 1] : g;
      S = C.clientX - z.left, O = C.clientY - z.top;
    }
    let P = 0, R = 0.3;
    (j = h._ripple) != null && j.circle ? (R = 0.15, P = h.clientWidth / 2, P = b.center ? P : P + Math.sqrt((S - P) ** 2 + (O - P) ** 2) / 4) : P = Math.sqrt(h.clientWidth ** 2 + h.clientHeight ** 2) / 2;
    const w = (h.clientWidth - 2 * P) / 2 + "px", E = (h.clientHeight - 2 * P) / 2 + "px";
    return { radius: P, scale: R, x: b.center ? w : S - P + "px", y: b.center ? E : O - P + "px", centerX: w, centerY: E };
  }(e, l, n), y = 2 * i + "px";
  a.className = "v-ripple__animation", a.style.width = y, a.style.height = y, l.appendChild(t);
  const p = window.getComputedStyle(l);
  p && p.position === "static" && (l.style.position = "relative", l.dataset.previousPosition = "static"), a.classList.add("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--visible"), Po(a, `translate(${s}, ${o}) scale3d(${c},${c},${c})`), a.dataset.activated = String(performance.now()), setTimeout(() => {
    a.classList.remove("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--in"), Po(a, `translate(${u}, ${m}) scale3d(1,1,1)`);
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
      var c;
      e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((c = n.parentNode) == null ? void 0 : c.parentNode) === e && e.removeChild(n.parentNode);
    }, 300);
  }, a);
} };
function Oa(e) {
  return e === void 0 || !!e;
}
function dl(e) {
  const l = {}, n = e.currentTarget;
  if (n != null && n._ripple && !n._ripple.touched && !e[gt]) {
    if (e[gt] = !0, ht(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch)
      return;
    if (l.center = n._ripple.centered || _a(e), n._ripple.class && (l.class = n._ripple.class), ht(e)) {
      if (n._ripple.showTimerCommit)
        return;
      n._ripple.showTimerCommit = () => {
        Hl.show(e, n, l);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var t;
        (t = n == null ? void 0 : n._ripple) != null && t.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, rr);
    } else
      Hl.show(e, n, l);
  }
}
function $o(e) {
  e[gt] = !0;
}
function We(e) {
  const l = e.currentTarget;
  if (l != null && l._ripple) {
    if (window.clearTimeout(l._ripple.showTimer), e.type === "touchend" && l._ripple.showTimerCommit)
      return l._ripple.showTimerCommit(), l._ripple.showTimerCommit = null, void (l._ripple.showTimer = window.setTimeout(() => {
        We(e);
      }));
    window.setTimeout(() => {
      l._ripple && (l._ripple.touched = !1);
    }), Hl.hide(l);
  }
}
function Pa(e) {
  const l = e.currentTarget;
  l != null && l._ripple && (l._ripple.showTimerCommit && (l._ripple.showTimerCommit = null), window.clearTimeout(l._ripple.showTimer));
}
let pl = !1;
function $a(e) {
  pl || e.keyCode !== to.enter && e.keyCode !== to.space || (pl = !0, dl(e));
}
function Ta(e) {
  pl = !1, We(e);
}
function Ea(e) {
  pl && (pl = !1, We(e));
}
function To(e, l, n) {
  const { value: t, modifiers: a } = l, i = Oa(t);
  if (i || Hl.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = a.center, e._ripple.circle = a.circle, vt(t) && t.class && (e._ripple.class = t.class), i && !n) {
    if (a.stop)
      return e.addEventListener("touchstart", $o, { passive: !0 }), void e.addEventListener("mousedown", $o);
    e.addEventListener("touchstart", dl, { passive: !0 }), e.addEventListener("touchend", We, { passive: !0 }), e.addEventListener("touchmove", Pa, { passive: !0 }), e.addEventListener("touchcancel", We), e.addEventListener("mousedown", dl), e.addEventListener("mouseup", We), e.addEventListener("mouseleave", We), e.addEventListener("keydown", $a), e.addEventListener("keyup", Ta), e.addEventListener("blur", Ea), e.addEventListener("dragstart", We, { passive: !0 });
  } else
    !i && n && za(e);
}
function za(e) {
  e.removeEventListener("mousedown", dl), e.removeEventListener("touchstart", dl), e.removeEventListener("touchend", We), e.removeEventListener("touchmove", Pa), e.removeEventListener("touchcancel", We), e.removeEventListener("mouseup", We), e.removeEventListener("mouseleave", We), e.removeEventListener("keydown", $a), e.removeEventListener("keyup", Ta), e.removeEventListener("dragstart", We), e.removeEventListener("blur", Ea);
}
const Fl = { mounted: function(e, l) {
  To(e, l, !1);
}, unmounted: function(e) {
  delete e._ripple, za(e);
}, updated: function(e, l) {
  l.value !== l.oldValue && To(e, l, Oa(l.oldValue));
} }, sr = K({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: ka }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: ye, appendIcon: ye, block: Boolean, slim: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...Qn(), ...de(), ...ln(), ...Dn(), ...nl(), ...Sa(), ...Ut(), ...Nt(), ...Aa(), ...an(), ...tt(), ...kl(), ...Me({ tag: "button" }), ...Oe(), ...bn({ variant: "elevated" }) }, "VBtn"), bt = ne()({ name: "VBtn", directives: { Ripple: Fl }, props: sr(), emits: { "group:selected": (e) => !0 }, setup(e, l) {
  let { attrs: n, slots: t } = l;
  const { themeClasses: a } = De(e), { borderClasses: i } = el(e), { colorClasses: c, colorStyles: s, variantClasses: o } = xl(e), { densityClasses: u } = sn(e), { dimensionStyles: m } = Ln(e), { elevationClasses: y } = ll(e), { loaderClasses: p } = nt(e), { locationStyles: f } = jt(e), { positionClasses: g } = Va(e), { roundedClasses: h } = rn(e), { sizeClasses: b, sizeStyles: S } = wl(e), O = Ba(e, e.symbol, !1), P = lt(e, n), R = v(() => {
    var C;
    return e.active !== void 0 ? e.active : P.isLink.value ? (C = P.isActive) == null ? void 0 : C.value : O == null ? void 0 : O.isSelected.value;
  }), w = v(() => (O == null ? void 0 : O.disabled.value) || e.disabled), E = v(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), j = v(() => {
    if (e.value !== void 0 && typeof e.value != "symbol")
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function z(C) {
    var V;
    w.value || P.isLink.value && (C.metaKey || C.ctrlKey || C.shiftKey || C.button !== 0 || n.target === "_blank") || ((V = P.navigate) == null || V.call(P, C), O == null || O.toggle());
  }
  return function(C, V) {
    J(() => {
      var I;
      return (I = C.isActive) == null ? void 0 : I.value;
    }, (I) => {
      C.isLink.value && I && V && xe(() => {
        V(!0);
      });
    }, { immediate: !0 });
  }(P, O == null ? void 0 : O.select), ue(() => {
    var U, G;
    const C = P.isLink.value ? "a" : e.tag, V = !(!e.prependIcon && !t.prepend), I = !(!e.appendIcon && !t.append), F = !(!e.icon || e.icon === !0), _ = (O == null ? void 0 : O.isSelected.value) && (!P.isLink.value || ((U = P.isActive) == null ? void 0 : U.value)) || !O || ((G = P.isActive) == null ? void 0 : G.value);
    return Ee(d(C, { type: C === "a" ? void 0 : "button", class: ["v-btn", O == null ? void 0 : O.selectedClass.value, { "v-btn--active": R.value, "v-btn--block": e.block, "v-btn--disabled": w.value, "v-btn--elevated": E.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, a.value, i.value, _ ? c.value : void 0, u.value, y.value, p.value, g.value, h.value, b.value, o.value, e.class], style: [_ ? s.value : void 0, m.value, f.value, S.value, e.style], disabled: w.value || void 0, href: P.href.value, onClick: z, value: j.value }, { default: () => {
      var B;
      return [Bl(!0, "v-btn"), !e.icon && V && d("span", { key: "prepend", class: "v-btn__prepend" }, [t.prepend ? d(Ve, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, t.prepend) : d(ve, { key: "prepend-icon", icon: e.prependIcon }, null)]), d("span", { class: "v-btn__content", "data-no-activator": "" }, [!t.default && F ? d(ve, { key: "content-icon", icon: e.icon }, null) : d(Ve, { key: "content-defaults", disabled: !F, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var D;
        return [((D = t.default) == null ? void 0 : D.call(t)) ?? e.text];
      } })]), !e.icon && I && d("span", { key: "append", class: "v-btn__append" }, [t.append ? d(Ve, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, t.append) : d(ve, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && d("span", { key: "loader", class: "v-btn__loader" }, [((B = t.loader) == null ? void 0 : B.call(t)) ?? d(Fa, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[on("ripple"), !w.value && e.ripple, null]]);
  }), {};
} }), ur = K({ text: String, clickable: Boolean, ...de(), ...Oe() }, "VLabel"), Da = ne()({ name: "VLabel", props: ur(), setup(e, l) {
  let { slots: n } = l;
  return ue(() => {
    var t;
    return d("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (t = n.default) == null ? void 0 : t.call(n)]);
  }), {};
} }), La = Symbol.for("vuetify:selection-control-group"), Wa = K({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: ye, trueIcon: ye, ripple: { type: Boolean, default: !0 }, multiple: { type: Boolean, default: null }, name: String, readonly: Boolean, modelValue: null, type: String, valueComparator: { type: Function, default: bl }, ...de(), ...ln(), ...Oe() }, "SelectionControlGroup"), cr = K({ ...Wa({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup");
ne()({ name: "VSelectionControlGroup", props: cr(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: n } = l;
  const t = be(e, "modelValue"), a = Je(), i = v(() => e.id || `v-selection-control-group-${a}`), c = v(() => e.name || i.value), s = /* @__PURE__ */ new Set();
  return qe(La, { modelValue: t, forceUpdate: () => {
    s.forEach((o) => o());
  }, onForceUpdate: (o) => {
    s.add(o), Te(() => {
      s.delete(o);
    });
  } }), Jn({ [e.defaultsTarget]: { color: le(e, "color"), disabled: le(e, "disabled"), density: le(e, "density"), error: le(e, "error"), inline: le(e, "inline"), modelValue: t, multiple: v(() => !!e.multiple || e.multiple == null && Array.isArray(t.value)), name: c, falseIcon: le(e, "falseIcon"), trueIcon: le(e, "trueIcon"), readonly: le(e, "readonly"), ripple: le(e, "ripple"), type: le(e, "type"), valueComparator: le(e, "valueComparator") } }), ue(() => {
    var o;
    return d("div", { class: ["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class], style: e.style, role: e.type === "radio" ? "radiogroup" : void 0 }, [(o = n.default) == null ? void 0 : o.call(n)]);
  }), {};
} });
const qt = K({ label: String, baseColor: String, trueValue: null, falseValue: null, value: null, ...de(), ...Wa() }, "VSelectionControl"), Kl = ne()({ name: "VSelectionControl", directives: { Ripple: Fl }, inheritAttrs: !1, props: qt(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: n, slots: t } = l;
  const { group: a, densityClasses: i, icon: c, model: s, textColorClasses: o, textColorStyles: u, backgroundColorClasses: m, backgroundColorStyles: y, trueValue: p } = function(w) {
    const E = me(La, void 0), { densityClasses: j } = sn(w), z = be(w, "modelValue"), C = v(() => w.trueValue !== void 0 ? w.trueValue : w.value === void 0 || w.value), V = v(() => w.falseValue !== void 0 && w.falseValue), I = v(() => !!w.multiple || w.multiple == null && Array.isArray(z.value)), F = v({ get() {
      const L = E ? E.modelValue.value : z.value;
      return I.value ? je(L).some((q) => w.valueComparator(q, C.value)) : w.valueComparator(L, C.value);
    }, set(L) {
      if (w.readonly)
        return;
      const q = L ? C.value : V.value;
      let H = q;
      I.value && (H = L ? [...je(z.value), q] : je(z.value).filter((T) => !w.valueComparator(T, C.value))), E ? E.modelValue.value = H : z.value = H;
    } }), { textColorClasses: _, textColorStyles: U } = en(v(() => {
      if (!w.error && !w.disabled)
        return F.value ? w.color : w.baseColor;
    })), { backgroundColorClasses: G, backgroundColorStyles: B } = Gn(v(() => !F.value || w.error || w.disabled ? void 0 : w.color)), D = v(() => F.value ? w.trueIcon : w.falseIcon);
    return { group: E, densityClasses: j, trueValue: C, falseValue: V, model: F, textColorClasses: _, textColorStyles: U, backgroundColorClasses: G, backgroundColorStyles: B, icon: D };
  }(e), f = Je(), g = v(() => e.id || `input-${f}`), h = ie(!1), b = ie(!1), S = W();
  function O(w) {
    h.value = !0, Un(w.target, ":focus-visible") !== !1 && (b.value = !0);
  }
  function P() {
    h.value = !1, b.value = !1;
  }
  function R(w) {
    e.readonly && a && xe(() => a.forceUpdate()), s.value = w.target.checked;
  }
  return a == null || a.onForceUpdate(() => {
    S.value && (S.value.checked = s.value);
  }), ue(() => {
    var C, V;
    const w = t.label ? t.label({ label: e.label, props: { for: g.value } }) : e.label, [E, j] = Il(n), z = d("input", Q({ ref: S, checked: s.value, disabled: !(!e.readonly && !e.disabled), id: g.value, onBlur: P, onFocus: O, onInput: R, "aria-disabled": !(!e.readonly && !e.disabled), type: e.type, value: p.value, name: e.name, "aria-checked": e.type === "checkbox" ? s.value : void 0 }, j), null);
    return d("div", Q({ class: ["v-selection-control", { "v-selection-control--dirty": s.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": h.value, "v-selection-control--focus-visible": b.value, "v-selection-control--inline": e.inline }, i.value, e.class] }, E, { style: e.style }), [d("div", { class: ["v-selection-control__wrapper", o.value], style: u.value }, [(C = t.default) == null ? void 0 : C.call(t, { backgroundColorClasses: m, backgroundColorStyles: y }), Ee(d("div", { class: ["v-selection-control__input"] }, [((V = t.input) == null ? void 0 : V.call(t, { model: s, textColorClasses: o, textColorStyles: u, backgroundColorClasses: m, backgroundColorStyles: y, inputNode: z, icon: c.value, props: { onFocus: O, onBlur: P, id: g.value } })) ?? d(fe, null, [c.value && d(ve, { key: "icon", icon: c.value }, null), z])]), [[on("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), w && d(Da, { for: g.value, clickable: !0, onClick: (I) => I.stopPropagation() }, { default: () => [w] })]);
  }), { isFocused: h, input: S };
} }), Ma = K({ indeterminate: Boolean, indeterminateIcon: { type: ye, default: "$checkboxIndeterminate" }, ...qt({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), Yl = ne()({ name: "VCheckboxBtn", props: Ma(), emits: { "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, l) {
  let { slots: n } = l;
  const t = be(e, "indeterminate"), a = be(e, "modelValue");
  function i(o) {
    t.value && (t.value = !1);
  }
  const c = v(() => t.value ? e.indeterminateIcon : e.falseIcon), s = v(() => t.value ? e.indeterminateIcon : e.trueIcon);
  return ue(() => {
    const o = hn(Kl.filterProps(e), ["modelValue"]);
    return d(Kl, Q(o, { modelValue: a.value, "onUpdate:modelValue": [(u) => a.value = u, i], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: c.value, trueIcon: s.value, "aria-checked": t.value ? "mixed" : void 0 }), n);
  }), {};
} });
function Ra(e) {
  const { t: l } = et();
  return { InputIcon: function(n) {
    let { name: t } = n;
    const a = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[t], i = e[`onClick:${t}`], c = i && a ? l(`$vuetify.input.${a}`, e.label ?? "") : void 0;
    return d(ve, { icon: e[`${t}Icon`], "aria-label": c, onClick: i }, null);
  } };
}
const dr = K({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...de(), ...Zn({ transition: { component: ma, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), pr = ne()({ name: "VMessages", props: dr(), setup(e, l) {
  let { slots: n } = l;
  const t = v(() => je(e.messages)), { textColorClasses: a, textColorStyles: i } = en(v(() => e.color));
  return ue(() => d(un, { transition: e.transition, tag: "div", class: ["v-messages", a.value, e.class], style: [i.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && t.value.map((c, s) => d("div", { class: "v-messages__message", key: `${s}-${t.value}` }, [n.message ? n.message({ message: c }) : c]))] })), {};
} }), Na = K({ focused: Boolean, "onUpdate:focused": Qe() }, "focus");
function Al(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nn();
  const n = be(e, "focused");
  return { focusClasses: v(() => ({ [`${l}--focused`]: n.value })), isFocused: n, focus: function() {
    n.value = !0;
  }, blur: function() {
    n.value = !1;
  } };
}
const vr = Symbol.for("vuetify:form");
function Ht() {
  return me(vr, null);
}
const fr = K({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...Na() }, "validation"), Vl = K({ id: String, appendIcon: ye, centerAffix: { type: Boolean, default: !0 }, prependIcon: ye, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Qe(), "onClick:append": Qe(), ...de(), ...ln(), ...fr() }, "VInput"), gn = ne()({ name: "VInput", props: { ...Vl() }, emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: n, slots: t, emit: a } = l;
  const { densityClasses: i } = sn(e), { rtlClasses: c } = Sl(), { InputIcon: s } = Ra(e), o = Je(), u = v(() => e.id || `input-${o}`), m = v(() => `${u.value}-messages`), { errorMessages: y, isDirty: p, isDisabled: f, isReadonly: g, isPristine: h, isValid: b, isValidating: S, reset: O, resetValidation: P, validate: R, validationClasses: w } = function(z) {
    let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nn(), V = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Je();
    const I = be(z, "modelValue"), F = v(() => z.validationValue === void 0 ? I.value : z.validationValue), _ = Ht(), U = W([]), G = ie(!0), B = v(() => !(!je(I.value === "" ? null : I.value).length && !je(F.value === "" ? null : F.value).length)), D = v(() => !!(z.disabled ?? (_ == null ? void 0 : _.isDisabled.value))), L = v(() => !!(z.readonly ?? (_ == null ? void 0 : _.isReadonly.value))), q = v(() => {
      var A;
      return (A = z.errorMessages) != null && A.length ? je(z.errorMessages).concat(U.value).slice(0, Math.max(0, +z.maxErrors)) : U.value;
    }), H = v(() => {
      let A = (z.validateOn ?? (_ == null ? void 0 : _.validateOn.value)) || "input";
      A === "lazy" && (A = "input lazy");
      const X = new Set((A == null ? void 0 : A.split(" ")) ?? []);
      return { blur: X.has("blur") || X.has("input"), input: X.has("input"), submit: X.has("submit"), lazy: X.has("lazy") };
    }), T = v(() => {
      var A;
      return !z.error && !((A = z.errorMessages) != null && A.length) && (!z.rules.length || (G.value ? !U.value.length && !H.value.lazy || null : !U.value.length));
    }), M = ie(!1), Y = v(() => ({ [`${C}--error`]: T.value === !1, [`${C}--dirty`]: B.value, [`${C}--disabled`]: D.value, [`${C}--readonly`]: L.value })), x = v(() => z.name ?? r(V));
    function k() {
      I.value = null, xe($);
    }
    function $() {
      G.value = !0, H.value.lazy ? U.value = [] : N(!0);
    }
    async function N() {
      let A = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      const X = [];
      M.value = !0;
      for (const re of z.rules) {
        if (X.length >= +(z.maxErrors ?? 1))
          break;
        const Ie = typeof re == "function" ? re : () => re, oe = await Ie(F.value);
        oe !== !0 && (oe === !1 || typeof oe == "string" ? X.push(oe || "") : console.warn(`${oe} is not a valid value. Rule functions must return boolean true or a string.`));
      }
      return U.value = X, M.value = !1, G.value = A, U.value;
    }
    return Jo(() => {
      _ == null || _.register({ id: x.value, validate: N, reset: k, resetValidation: $ });
    }), tn(() => {
      _ == null || _.unregister(x.value);
    }), Xn(async () => {
      H.value.lazy || await N(!0), _ == null || _.update(x.value, T.value, q.value);
    }), Fn(() => H.value.input, () => {
      J(F, () => {
        if (F.value != null)
          N();
        else if (z.focused) {
          const A = J(() => z.focused, (X) => {
            X || N(), A();
          });
        }
      });
    }), Fn(() => H.value.blur, () => {
      J(() => z.focused, (A) => {
        A || N();
      });
    }), J(T, () => {
      _ == null || _.update(x.value, T.value, q.value);
    }), { errorMessages: q, isDirty: B, isDisabled: D, isReadonly: L, isPristine: G, isValid: T, isValidating: M, reset: k, resetValidation: $, validate: N, validationClasses: Y };
  }(e, "v-input", u), E = v(() => ({ id: u, messagesId: m, isDirty: p, isDisabled: f, isReadonly: g, isPristine: h, isValid: b, isValidating: S, reset: O, resetValidation: P, validate: R })), j = v(() => {
    var z;
    return (z = e.errorMessages) != null && z.length || !h.value && y.value.length ? y.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return ue(() => {
    var F, _, U, G;
    const z = !(!t.prepend && !e.prependIcon), C = !(!t.append && !e.appendIcon), V = j.value.length > 0, I = !e.hideDetails || e.hideDetails === "auto" && (V || !!t.details);
    return d("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix, "v-input--hide-spin-buttons": e.hideSpinButtons }, i.value, c.value, w.value, e.class], style: e.style }, [z && d("div", { key: "prepend", class: "v-input__prepend" }, [(F = t.prepend) == null ? void 0 : F.call(t, E.value), e.prependIcon && d(s, { key: "prepend-icon", name: "prepend" }, null)]), t.default && d("div", { class: "v-input__control" }, [(_ = t.default) == null ? void 0 : _.call(t, E.value)]), C && d("div", { key: "append", class: "v-input__append" }, [e.appendIcon && d(s, { key: "append-icon", name: "append" }, null), (U = t.append) == null ? void 0 : U.call(t, E.value)]), I && d("div", { class: "v-input__details" }, [d(pr, { id: m.value, active: V, messages: j.value }, { message: t.message }), (G = t.details) == null ? void 0 : G.call(t, E.value)])]);
  }), { reset: O, resetValidation: P, validate: R, isValid: b, errorMessages: y };
} }), yr = K({ ...Vl(), ...hn(Ma(), ["inline"]) }, "VCheckbox"), mr = ne()({ name: "VCheckbox", inheritAttrs: !1, props: yr(), emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 }, setup(e, l) {
  let { attrs: n, slots: t } = l;
  const a = be(e, "modelValue"), { isFocused: i, focus: c, blur: s } = Al(e), o = Je(), u = v(() => e.id || `checkbox-${o}`);
  return ue(() => {
    const [m, y] = Il(n), p = gn.filterProps(e), f = Yl.filterProps(e);
    return d(gn, Q({ class: ["v-checkbox", e.class] }, m, p, { modelValue: a.value, "onUpdate:modelValue": (g) => a.value = g, id: u.value, focused: i.value, style: e.style }), { ...t, default: (g) => {
      let { id: h, messagesId: b, isDisabled: S, isReadonly: O } = g;
      return d(Yl, Q(f, { id: h.value, "aria-describedby": b.value, disabled: S.value, readonly: O.value }, y, { modelValue: a.value, "onUpdate:modelValue": (P) => a.value = P, onFocus: c, onBlur: s }), t);
    } });
  }), {};
} }), gr = K({ start: Boolean, end: Boolean, icon: ye, image: String, text: String, ...de(), ...ln(), ...an(), ...kl(), ...Me(), ...Oe(), ...bn({ variant: "flat" }) }, "VAvatar"), qn = ne()({ name: "VAvatar", props: gr(), setup(e, l) {
  let { slots: n } = l;
  const { themeClasses: t } = De(e), { colorClasses: a, colorStyles: i, variantClasses: c } = xl(e), { densityClasses: s } = sn(e), { roundedClasses: o } = rn(e), { sizeClasses: u, sizeStyles: m } = wl(e);
  return ue(() => d(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, t.value, a.value, s.value, o.value, u.value, c.value, e.class], style: [i.value, m.value, e.style] }, { default: () => {
    var y;
    return [e.image ? d(ba, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? d(ve, { key: "icon", icon: e.icon }, null) : ((y = n.default) == null ? void 0 : y.call(n)) ?? e.text, Bl(!1, "v-avatar")];
  } })), {};
} }), ja = Symbol.for("vuetify:v-chip-group"), hr = K({ column: Boolean, filter: Boolean, valueComparator: { type: Function, default: bl }, ...de(), ...Ca({ selectedClass: "v-chip--selected" }), ...Me(), ...Oe(), ...bn({ variant: "tonal" }) }, "VChipGroup");
ne()({ name: "VChipGroup", props: hr(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: n } = l;
  const { themeClasses: t } = De(e), { isSelected: a, select: i, next: c, prev: s, selected: o } = xa(e, ja);
  return Jn({ VChip: { color: le(e, "color"), disabled: le(e, "disabled"), filter: le(e, "filter"), variant: le(e, "variant") } }), ue(() => d(e.tag, { class: ["v-chip-group", { "v-chip-group--column": e.column }, t.value, e.class], style: e.style }, { default: () => {
    var u;
    return [(u = n.default) == null ? void 0 : u.call(n, { isSelected: a, select: i, next: c, prev: s, selected: o.value })];
  } })), {};
} });
const br = K({ activeClass: String, appendAvatar: String, appendIcon: ye, closable: Boolean, closeIcon: { type: ye, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: String, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: ye, ripple: { type: [Boolean, Object], default: !0 }, text: String, modelValue: { type: Boolean, default: !0 }, onClick: Qe(), onClickOnce: Qe(), ...Qn(), ...de(), ...ln(), ...nl(), ...Sa(), ...an(), ...tt(), ...kl(), ...Me({ tag: "span" }), ...Oe(), ...bn({ variant: "tonal" }) }, "VChip"), Ua = ne()({ name: "VChip", directives: { Ripple: Fl }, props: br(), emits: { "click:close": (e) => !0, "update:modelValue": (e) => !0, "group:selected": (e) => !0, click: (e) => !0 }, setup(e, l) {
  let { attrs: n, emit: t, slots: a } = l;
  const { t: i } = et(), { borderClasses: c } = el(e), { colorClasses: s, colorStyles: o, variantClasses: u } = xl(e), { densityClasses: m } = sn(e), { elevationClasses: y } = ll(e), { roundedClasses: p } = rn(e), { sizeClasses: f } = wl(e), { themeClasses: g } = De(e), h = be(e, "modelValue"), b = Ba(e, ja, !1), S = lt(e, n), O = v(() => e.link !== !1 && S.isLink.value), P = v(() => !e.disabled && e.link !== !1 && (!!b || e.link || S.isClickable.value)), R = v(() => ({ "aria-label": i(e.closeLabel), onClick(j) {
    j.stopPropagation(), h.value = !1, t("click:close", j);
  } }));
  function w(j) {
    var z;
    t("click", j), P.value && ((z = S.navigate) == null || z.call(S, j), b == null || b.toggle());
  }
  function E(j) {
    j.key !== "Enter" && j.key !== " " || (j.preventDefault(), w(j));
  }
  return () => {
    const j = S.isLink.value ? "a" : e.tag, z = !(!e.appendIcon && !e.appendAvatar), C = !(!z && !a.append), V = !(!a.close && !e.closable), I = !(!a.filter && !e.filter) && b, F = !(!e.prependIcon && !e.prependAvatar), _ = !(!F && !a.prepend), U = !b || b.isSelected.value;
    return h.value && Ee(d(j, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": P.value, "v-chip--filter": I, "v-chip--pill": e.pill }, g.value, c.value, U ? s.value : void 0, m.value, y.value, p.value, f.value, u.value, b == null ? void 0 : b.selectedClass.value, e.class], style: [U ? o.value : void 0, e.style], disabled: e.disabled || void 0, draggable: e.draggable, href: S.href.value, tabindex: P.value ? 0 : void 0, onClick: w, onKeydown: P.value && !O.value && E }, { default: () => {
      var G;
      return [Bl(P.value, "v-chip"), I && d(ga, { key: "filter" }, { default: () => [Ee(d("div", { class: "v-chip__filter" }, [a.filter ? d(Ve, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, a.filter) : d(ve, { key: "filter-icon", icon: e.filterIcon }, null)]), [[Yn, b.isSelected.value]])] }), _ && d("div", { key: "prepend", class: "v-chip__prepend" }, [a.prepend ? d(Ve, { key: "prepend-defaults", disabled: !F, defaults: { VAvatar: { image: e.prependAvatar, start: !0 }, VIcon: { icon: e.prependIcon, start: !0 } } }, a.prepend) : d(fe, null, [e.prependIcon && d(ve, { key: "prepend-icon", icon: e.prependIcon, start: !0 }, null), e.prependAvatar && d(qn, { key: "prepend-avatar", image: e.prependAvatar, start: !0 }, null)])]), d("div", { class: "v-chip__content" }, [((G = a.default) == null ? void 0 : G.call(a, { isSelected: b == null ? void 0 : b.isSelected.value, selectedClass: b == null ? void 0 : b.selectedClass.value, select: b == null ? void 0 : b.select, toggle: b == null ? void 0 : b.toggle, value: b == null ? void 0 : b.value.value, disabled: e.disabled })) ?? e.text]), C && d("div", { key: "append", class: "v-chip__append" }, [a.append ? d(Ve, { key: "append-defaults", disabled: !z, defaults: { VAvatar: { end: !0, image: e.appendAvatar }, VIcon: { end: !0, icon: e.appendIcon } } }, a.append) : d(fe, null, [e.appendIcon && d(ve, { key: "append-icon", end: !0, icon: e.appendIcon }, null), e.appendAvatar && d(qn, { key: "append-avatar", end: !0, image: e.appendAvatar }, null)])]), V && d("div", Q({ key: "close", class: "v-chip__close" }, R.value), [a.close ? d(Ve, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, a.close) : d(ve, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[on("ripple"), P.value && e.ripple, null]]);
  };
} }), It = Symbol.for("vuetify:list");
function Ga() {
  const e = me(It, { hasPrepend: ie(!1), updateHasPrepend: () => null }), l = { hasPrepend: ie(!1), updateHasPrepend: (n) => {
    n && (l.hasPrepend.value = n);
  } };
  return qe(It, l), e;
}
function qa() {
  return me(It, null);
}
const Ir = { open: (e) => {
  let { id: l, value: n, opened: t, parents: a } = e;
  if (n) {
    const i = /* @__PURE__ */ new Set();
    i.add(l);
    let c = a.get(l);
    for (; c != null; )
      i.add(c), c = a.get(c);
    return i;
  }
  return t.delete(l), t;
}, select: () => null }, Ha = { open: (e) => {
  let { id: l, value: n, opened: t, parents: a } = e;
  if (n) {
    let i = a.get(l);
    for (t.add(l); i != null && i !== l; )
      t.add(i), i = a.get(i);
    return t;
  }
  return t.delete(l), t;
}, select: () => null }, Cr = { open: Ha.open, select: (e) => {
  let { id: l, value: n, opened: t, parents: a } = e;
  if (!n)
    return t;
  const i = [];
  let c = a.get(l);
  for (; c != null; )
    i.push(c), c = a.get(c);
  return new Set(i);
} }, Ct = (e) => {
  const l = { select: (n) => {
    let { id: t, value: a, selected: i } = n;
    if (t = cn(t), e && !a) {
      const c = Array.from(i.entries()).reduce((s, o) => {
        let [u, m] = o;
        return m === "on" ? [...s, u] : s;
      }, []);
      if (c.length === 1 && c[0] === t)
        return i;
    }
    return i.set(t, a ? "on" : "off"), i;
  }, in: (n, t, a) => {
    let i = /* @__PURE__ */ new Map();
    for (const c of n || [])
      i = l.select({ id: c, value: !0, selected: new Map(i), children: t, parents: a });
    return i;
  }, out: (n) => {
    const t = [];
    for (const [a, i] of n.entries())
      i === "on" && t.push(a);
    return t;
  } };
  return l;
}, Eo = (e) => {
  const l = Ct(e);
  return { select: (n) => {
    let { selected: t, id: a, ...i } = n;
    a = cn(a);
    const c = t.has(a) ? /* @__PURE__ */ new Map([[a, t.get(a)]]) : /* @__PURE__ */ new Map();
    return l.select({ ...i, id: a, selected: c });
  }, in: (n, t, a) => {
    let i = /* @__PURE__ */ new Map();
    return n != null && n.length && (i = l.in(n.slice(0, 1), t, a)), i;
  }, out: (n, t, a) => l.out(n, t, a) };
}, vl = Symbol.for("vuetify:nested"), Ka = { id: ie(), root: { register: () => null, unregister: () => null, parents: W(/* @__PURE__ */ new Map()), children: W(/* @__PURE__ */ new Map()), open: () => null, openOnSelect: () => null, select: () => null, opened: W(/* @__PURE__ */ new Set()), selected: W(/* @__PURE__ */ new Map()), selectedValues: W([]) } }, Sr = K({ selectStrategy: [String, Function], openStrategy: [String, Object], opened: Array, selected: Array, mandatory: Boolean }, "nested"), Br = (e) => {
  let l = !1;
  const n = W(/* @__PURE__ */ new Map()), t = W(/* @__PURE__ */ new Map()), a = be(e, "opened", e.opened, (y) => new Set(y), (y) => [...y.values()]), i = v(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return ((y) => {
          const p = Eo(y);
          return { select: (f) => {
            let { id: g, selected: h, children: b, ...S } = f;
            return g = cn(g), b.has(g) ? h : p.select({ id: g, selected: h, children: b, ...S });
          }, in: p.in, out: p.out };
        })(e.mandatory);
      case "leaf":
        return ((y) => {
          const p = Ct(y);
          return { select: (f) => {
            let { id: g, selected: h, children: b, ...S } = f;
            return g = cn(g), b.has(g) ? h : p.select({ id: g, selected: h, children: b, ...S });
          }, in: p.in, out: p.out };
        })(e.mandatory);
      case "independent":
        return Ct(e.mandatory);
      case "single-independent":
        return Eo(e.mandatory);
      default:
        return ((y) => {
          const p = { select: (f) => {
            let { id: g, value: h, selected: b, children: S, parents: O } = f;
            g = cn(g);
            const P = new Map(b), R = [g];
            for (; R.length; ) {
              const E = R.shift();
              b.set(E, h ? "on" : "off"), S.has(E) && R.push(...S.get(E));
            }
            let w = O.get(g);
            for (; w; ) {
              const E = S.get(w), j = E.every((C) => b.get(C) === "on"), z = E.every((C) => !b.has(C) || b.get(C) === "off");
              b.set(w, j ? "on" : z ? "off" : "indeterminate"), w = O.get(w);
            }
            return y && !h && Array.from(b.entries()).reduce((j, z) => {
              let [C, V] = z;
              return V === "on" ? [...j, C] : j;
            }, []).length === 0 ? P : b;
          }, in: (f, g, h) => {
            let b = /* @__PURE__ */ new Map();
            for (const S of f || [])
              b = p.select({ id: S, value: !0, selected: new Map(b), children: g, parents: h });
            return b;
          }, out: (f, g) => {
            const h = [];
            for (const [b, S] of f.entries())
              S !== "on" || g.has(b) || h.push(b);
            return h;
          } };
          return p;
        })(e.mandatory);
    }
  }), c = v(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return Cr;
      case "single":
        return Ir;
      default:
        return Ha;
    }
  }), s = be(e, "selected", e.selected, (y) => i.value.in(y, n.value, t.value), (y) => i.value.out(y, n.value, t.value));
  function o(y) {
    const p = [];
    let f = y;
    for (; f != null; )
      p.unshift(f), f = t.value.get(f);
    return p;
  }
  tn(() => {
    l = !0;
  });
  const u = _e("nested"), m = { id: ie(), root: { opened: a, selected: s, selectedValues: v(() => {
    const y = [];
    for (const [p, f] of s.value.entries())
      f === "on" && y.push(p);
    return y;
  }), register: (y, p, f) => {
    p && y !== p && t.value.set(y, p), f && n.value.set(y, []), p != null && n.value.set(p, [...n.value.get(p) || [], y]);
  }, unregister: (y) => {
    if (l)
      return;
    n.value.delete(y);
    const p = t.value.get(y);
    if (p) {
      const f = n.value.get(p) ?? [];
      n.value.set(p, f.filter((g) => g !== y));
    }
    t.value.delete(y), a.value.delete(y);
  }, open: (y, p, f) => {
    u.emit("click:open", { id: y, value: p, path: o(y), event: f });
    const g = c.value.open({ id: y, value: p, opened: new Set(a.value), children: n.value, parents: t.value, event: f });
    g && (a.value = g);
  }, openOnSelect: (y, p, f) => {
    const g = c.value.select({ id: y, value: p, selected: new Map(s.value), opened: new Set(a.value), children: n.value, parents: t.value, event: f });
    g && (a.value = g);
  }, select: (y, p, f) => {
    u.emit("click:select", { id: y, value: p, path: o(y), event: f });
    const g = i.value.select({ id: y, value: p, selected: new Map(s.value), children: n.value, parents: t.value, event: f });
    g && (s.value = g), m.root.openOnSelect(y, p, f);
  }, children: n, parents: t } };
  return qe(vl, m), m.root;
}, Ya = (e, l) => {
  const n = me(vl, Ka), t = Symbol(Je()), a = v(() => e.value !== void 0 ? e.value : t), i = { ...n, id: a, open: (c, s) => n.root.open(a.value, c, s), openOnSelect: (c, s) => n.root.openOnSelect(a.value, c, s), isOpen: v(() => n.root.opened.value.has(a.value)), parent: v(() => n.root.parents.value.get(a.value)), select: (c, s) => n.root.select(a.value, c, s), isSelected: v(() => n.root.selected.value.get(cn(a.value)) === "on"), isIndeterminate: v(() => n.root.selected.value.get(a.value) === "indeterminate"), isLeaf: v(() => !n.root.children.value.get(a.value)), isGroupActivator: n.isGroupActivator };
  return !n.isGroupActivator && n.root.register(a.value, n.id.value, l), tn(() => {
    !n.isGroupActivator && n.root.unregister(a.value);
  }), l && qe(vl, i), i;
}, xr = cl({ name: "VListGroupActivator", setup(e, l) {
  let { slots: n } = l;
  return (() => {
    const t = me(vl, Ka);
    qe(vl, { ...t, isGroupActivator: !0 });
  })(), () => {
    var t;
    return (t = n.default) == null ? void 0 : t.call(n);
  };
} }), kr = K({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: ye, default: "$collapse" }, expandIcon: { type: ye, default: "$expand" }, prependIcon: ye, appendIcon: ye, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...de(), ...Me() }, "VListGroup"), zo = ne()({ name: "VListGroup", props: kr(), setup(e, l) {
  let { slots: n } = l;
  const { isOpen: t, open: a, id: i } = Ya(le(e, "value"), !0), c = v(() => `v-list-group--id-${String(i.value)}`), s = qa(), { isBooted: o } = function() {
    const f = ie(!1);
    return Xn(() => {
      window.requestAnimationFrame(() => {
        f.value = !0;
      });
    }), { ssrBootStyles: v(() => f.value ? void 0 : { transition: "none !important" }), isBooted: Ft(f) };
  }();
  function u(f) {
    a(!t.value, f);
  }
  const m = v(() => ({ onClick: u, class: "v-list-group__header", id: c.value })), y = v(() => t.value ? e.collapseIcon : e.expandIcon), p = v(() => ({ VListItem: { active: t.value, activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && y.value, appendIcon: e.appendIcon || !e.subgroup && y.value, title: e.title, value: e.value } }));
  return ue(() => d(e.tag, { class: ["v-list-group", { "v-list-group--prepend": s == null ? void 0 : s.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": t.value }, e.class], style: e.style }, { default: () => [n.activator && d(Ve, { defaults: p.value }, { default: () => [d(xr, null, { default: () => [n.activator({ props: m.value, isOpen: t.value })] })] }), d(un, { transition: { component: Hi }, disabled: !o.value }, { default: () => {
    var f;
    return [Ee(d("div", { class: "v-list-group__items", role: "group", "aria-labelledby": c.value }, [(f = n.default) == null ? void 0 : f.call(n)]), [[Yn, t.value]])];
  } })] })), {};
} }), wr = Cl("v-list-item-subtitle"), Fr = Cl("v-list-item-title"), Ar = K({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: ye, baseColor: String, disabled: Boolean, lines: String, link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: ye, ripple: { type: [Boolean, Object], default: !0 }, slim: Boolean, subtitle: [String, Number, Boolean], title: [String, Number, Boolean], value: null, onClick: Qe(), onClickOnce: Qe(), ...Qn(), ...de(), ...ln(), ...Dn(), ...nl(), ...an(), ...tt(), ...Me(), ...Oe(), ...bn({ variant: "text" }) }, "VListItem"), Hn = ne()({ name: "VListItem", directives: { Ripple: Fl }, props: Ar(), emits: { click: (e) => !0 }, setup(e, l) {
  let { attrs: n, slots: t, emit: a } = l;
  const i = lt(e, n), c = v(() => e.value === void 0 ? i.href.value : e.value), { select: s, isSelected: o, isIndeterminate: u, isGroupActivator: m, root: y, parent: p, openOnSelect: f } = Ya(c, !1), g = qa(), h = v(() => {
    var L;
    return e.active !== !1 && (e.active || ((L = i.isActive) == null ? void 0 : L.value) || o.value);
  }), b = v(() => e.link !== !1 && i.isLink.value), S = v(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || e.value != null && !!g)), O = v(() => e.rounded || e.nav), P = v(() => e.color ?? e.activeColor), R = v(() => ({ color: h.value ? P.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  J(() => {
    var L;
    return (L = i.isActive) == null ? void 0 : L.value;
  }, (L) => {
    L && p.value != null && y.open(p.value, !0), L && f(L);
  }, { immediate: !0 });
  const { themeClasses: w } = De(e), { borderClasses: E } = el(e), { colorClasses: j, colorStyles: z, variantClasses: C } = xl(R), { densityClasses: V } = sn(e), { dimensionStyles: I } = Ln(e), { elevationClasses: F } = ll(e), { roundedClasses: _ } = rn(O), U = v(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), G = v(() => ({ isActive: h.value, select: s, isSelected: o.value, isIndeterminate: u.value }));
  function B(L) {
    var q;
    a("click", L), !m && S.value && ((q = i.navigate) == null || q.call(i, L), e.value != null && s(!o.value, L));
  }
  function D(L) {
    L.key !== "Enter" && L.key !== " " || (L.preventDefault(), B(L));
  }
  return ue(() => {
    const L = b.value ? "a" : e.tag, q = t.title || e.title, H = t.subtitle || e.subtitle, T = !(!e.appendAvatar && !e.appendIcon), M = !(!T && !t.append), Y = !(!e.prependAvatar && !e.prependIcon), x = !(!Y && !t.prepend);
    var k, $;
    return g == null || g.updateHasPrepend(x), e.activeColor && (k = "active-color", $ = ["color", "base-color"], $ = Array.isArray($) ? $.slice(0, -1).map((N) => `'${N}'`).join(", ") + ` or '${$.at(-1)}'` : `'${$}'`, Jl(`[Vuetify UPGRADE] '${k}' is deprecated, use ${$} instead.`)), Ee(d(L, { class: ["v-list-item", { "v-list-item--active": h.value, "v-list-item--disabled": e.disabled, "v-list-item--link": S.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !x && (g == null ? void 0 : g.hasPrepend.value), "v-list-item--slim": e.slim, [`${e.activeClass}`]: e.activeClass && h.value }, w.value, E.value, j.value, V.value, F.value, U.value, _.value, C.value, e.class], style: [z.value, I.value, e.style], href: i.href.value, tabindex: S.value ? g ? -2 : 0 : void 0, onClick: B, onKeydown: S.value && !b.value && D }, { default: () => {
      var N;
      return [Bl(S.value || h.value, "v-list-item"), x && d("div", { key: "prepend", class: "v-list-item__prepend" }, [t.prepend ? d(Ve, { key: "prepend-defaults", disabled: !Y, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: !0 } } }, { default: () => {
        var A;
        return [(A = t.prepend) == null ? void 0 : A.call(t, G.value)];
      } }) : d(fe, null, [e.prependAvatar && d(qn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && d(ve, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), d("div", { class: "v-list-item__spacer" }, null)]), d("div", { class: "v-list-item__content", "data-no-activator": "" }, [q && d(Fr, { key: "title" }, { default: () => {
        var A;
        return [((A = t.title) == null ? void 0 : A.call(t, { title: e.title })) ?? e.title];
      } }), H && d(wr, { key: "subtitle" }, { default: () => {
        var A;
        return [((A = t.subtitle) == null ? void 0 : A.call(t, { subtitle: e.subtitle })) ?? e.subtitle];
      } }), (N = t.default) == null ? void 0 : N.call(t, G.value)]), M && d("div", { key: "append", class: "v-list-item__append" }, [t.append ? d(Ve, { key: "append-defaults", disabled: !T, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: !0 } } }, { default: () => {
        var A;
        return [(A = t.append) == null ? void 0 : A.call(t, G.value)];
      } }) : d(fe, null, [e.appendIcon && d(ve, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && d(qn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), d("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[on("ripple"), S.value && e.ripple]]);
  }), {};
} }), Vr = K({ color: String, inset: Boolean, sticky: Boolean, title: String, ...de(), ...Me() }, "VListSubheader"), _r = ne()({ name: "VListSubheader", props: Vr(), setup(e, l) {
  let { slots: n } = l;
  const { textColorClasses: t, textColorStyles: a } = en(le(e, "color"));
  return ue(() => {
    const i = !(!n.default && !e.title);
    return d(e.tag, { class: ["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, t.value, e.class], style: [{ textColorStyles: a }, e.style] }, { default: () => {
      var c;
      return [i && d("div", { class: "v-list-subheader__text" }, [((c = n.default) == null ? void 0 : c.call(n)) ?? e.title])];
    } });
  }), {};
} }), Or = K({ color: String, inset: Boolean, length: [Number, String], thickness: [Number, String], vertical: Boolean, ...de(), ...Oe() }, "VDivider"), Pr = ne()({ name: "VDivider", props: Or(), setup(e, l) {
  let { attrs: n } = l;
  const { themeClasses: t } = De(e), { textColorClasses: a, textColorStyles: i } = en(le(e, "color")), c = v(() => {
    const s = {};
    return e.length && (s[e.vertical ? "maxHeight" : "maxWidth"] = te(e.length)), e.thickness && (s[e.vertical ? "borderRightWidth" : "borderTopWidth"] = te(e.thickness)), s;
  });
  return ue(() => d("hr", { class: [{ "v-divider": !0, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, t.value, a.value, e.class], style: [c.value, i.value, e.style], "aria-orientation": n.role && n.role !== "separator" ? void 0 : e.vertical ? "vertical" : "horizontal", role: `${n.role || "separator"}` }, null)), {};
} }), $r = K({ items: Array, returnObject: Boolean }, "VListChildren"), Xa = ne()({ name: "VListChildren", props: $r(), setup(e, l) {
  let { slots: n } = l;
  return Ga(), () => {
    var t, a;
    return ((t = n.default) == null ? void 0 : t.call(n)) ?? ((a = e.items) == null ? void 0 : a.map((i) => {
      var p, f;
      let { children: c, props: s, type: o, raw: u } = i;
      if (o === "divider")
        return ((p = n.divider) == null ? void 0 : p.call(n, { props: s })) ?? d(Pr, s, null);
      if (o === "subheader")
        return ((f = n.subheader) == null ? void 0 : f.call(n, { props: s })) ?? d(_r, s, null);
      const m = { subtitle: n.subtitle ? (g) => {
        var h;
        return (h = n.subtitle) == null ? void 0 : h.call(n, { ...g, item: u });
      } : void 0, prepend: n.prepend ? (g) => {
        var h;
        return (h = n.prepend) == null ? void 0 : h.call(n, { ...g, item: u });
      } : void 0, append: n.append ? (g) => {
        var h;
        return (h = n.append) == null ? void 0 : h.call(n, { ...g, item: u });
      } : void 0, title: n.title ? (g) => {
        var h;
        return (h = n.title) == null ? void 0 : h.call(n, { ...g, item: u });
      } : void 0 }, y = zo.filterProps(s);
      return c ? d(zo, Q({ value: s == null ? void 0 : s.value }, y), { activator: (g) => {
        let { props: h } = g;
        const b = { ...s, ...h, value: e.returnObject ? u : s.value };
        return n.header ? n.header({ props: b }) : d(Hn, b, m);
      }, default: () => d(Xa, { items: c }, n) }) : n.item ? n.item({ props: s }) : d(Hn, Q(s, { value: e.returnObject ? u : s.value }), m);
    }));
  };
} }), Ja = K({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, returnObject: Boolean, valueComparator: { type: Function, default: bl } }, "list-items");
function St(e, l) {
  const n = Ze(l, e.itemTitle, l), t = Ze(l, e.itemValue, n), a = Ze(l, e.itemChildren), i = { title: n, value: t, ...e.itemProps === !0 ? typeof l != "object" || l == null || Array.isArray(l) ? void 0 : "children" in l ? hn(l, ["children"]) : l : Ze(l, e.itemProps) };
  return { title: String(i.title ?? ""), value: i.value, props: i, children: Array.isArray(a) ? Za(e, a) : void 0, raw: l };
}
function Za(e, l) {
  const n = [];
  for (const t of l)
    n.push(St(e, t));
  return n;
}
function Qa(e) {
  const l = v(() => Za(e, e.items)), n = v(() => l.value.some((t) => t.value === null));
  return { items: l, transformIn: function(t) {
    return n.value || (t = t.filter((a) => a !== null)), t.map((a) => e.returnObject && typeof a == "string" ? St(e, a) : l.value.find((i) => e.valueComparator(a, i.value)) || St(e, a));
  }, transformOut: function(t) {
    return e.returnObject ? t.map((a) => {
      let { raw: i } = a;
      return i;
    }) : t.map((a) => {
      let { value: i } = a;
      return i;
    });
  } };
}
function Tr(e, l) {
  const n = Ze(l, e.itemType, "item"), t = function(s) {
    return typeof s == "string" || typeof s == "number" || typeof s == "boolean";
  }(l) ? l : Ze(l, e.itemTitle), a = Ze(l, e.itemValue, void 0), i = Ze(l, e.itemChildren), c = { title: t, value: a, ...e.itemProps === !0 ? hn(l, ["children"]) : Ze(l, e.itemProps) };
  return { type: n, title: c.title, value: c.value, props: c, children: n === "item" && i ? ei(e, i) : void 0, raw: l };
}
function ei(e, l) {
  const n = [];
  for (const t of l)
    n.push(Tr(e, t));
  return n;
}
const Er = K({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, nav: Boolean, ...Sr({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Qn(), ...de(), ...ln(), ...Dn(), ...nl(), itemType: { type: String, default: "type" }, ...Ja(), ...an(), ...Me(), ...Oe(), ...bn({ variant: "text" }) }, "VList"), ni = ne()({ name: "VList", props: Er(), emits: { "update:selected": (e) => !0, "update:opened": (e) => !0, "click:open": (e) => !0, "click:select": (e) => !0 }, setup(e, l) {
  let { slots: n } = l;
  const { items: t } = function(C) {
    return { items: v(() => ei(C, C.items)) };
  }(e), { themeClasses: a } = De(e), { backgroundColorClasses: i, backgroundColorStyles: c } = Gn(le(e, "bgColor")), { borderClasses: s } = el(e), { densityClasses: o } = sn(e), { dimensionStyles: u } = Ln(e), { elevationClasses: m } = ll(e), { roundedClasses: y } = rn(e), { open: p, select: f } = Br(e), g = v(() => e.lines ? `v-list--${e.lines}-line` : void 0), h = le(e, "activeColor"), b = le(e, "baseColor"), S = le(e, "color");
  Ga(), Jn({ VListGroup: { activeColor: h, baseColor: b, color: S }, VListItem: { activeClass: le(e, "activeClass"), activeColor: h, baseColor: b, color: S, density: le(e, "density"), disabled: le(e, "disabled"), lines: le(e, "lines"), nav: le(e, "nav"), slim: le(e, "slim"), variant: le(e, "variant") } });
  const O = ie(!1), P = W();
  function R(C) {
    O.value = !0;
  }
  function w(C) {
    O.value = !1;
  }
  function E(C) {
    var V;
    O.value || C.relatedTarget && ((V = P.value) != null && V.contains(C.relatedTarget)) || z();
  }
  function j(C) {
    if (P.value) {
      if (C.key === "ArrowDown")
        z("next");
      else if (C.key === "ArrowUp")
        z("prev");
      else if (C.key === "Home")
        z("first");
      else {
        if (C.key !== "End")
          return;
        z("last");
      }
      C.preventDefault();
    }
  }
  function z(C) {
    if (P.value)
      return Nl(P.value, C);
  }
  return ue(() => d(e.tag, { ref: P, class: ["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav }, a.value, i.value, s.value, o.value, m.value, g.value, y.value, e.class], style: [c.value, u.value, e.style], tabindex: e.disabled || O.value ? -1 : 0, role: "listbox", "aria-activedescendant": void 0, onFocusin: R, onFocusout: w, onFocus: E, onKeydown: j }, { default: () => [d(Xa, { items: t.value, returnObject: e.returnObject }, n)] })), { open: p, select: f, focus: z };
} });
function ut(e, l) {
  return { x: e.x + l.x, y: e.y + l.y };
}
function Do(e, l) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: n, align: t } = e;
    return ut({ x: t === "left" ? 0 : t === "center" ? l.width / 2 : t === "right" ? l.width : t, y: n === "top" ? 0 : n === "bottom" ? l.height : n }, l);
  }
  if (e.side === "left" || e.side === "right") {
    const { side: n, align: t } = e;
    return ut({ x: n === "left" ? 0 : n === "right" ? l.width : n, y: t === "top" ? 0 : t === "center" ? l.height / 2 : t === "bottom" ? l.height : t }, l);
  }
  return ut({ x: l.width / 2, y: l.height / 2 }, l);
}
const li = { static: function() {
}, connected: function(e, l, n) {
  (Array.isArray(e.target.value) || function(f) {
    for (; f; ) {
      if (window.getComputedStyle(f).position === "fixed")
        return !0;
      f = f.offsetParent;
    }
    return !1;
  }(e.target.value)) && Object.assign(n.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: t, preferredOrigin: a } = Tt(() => {
    const f = mt(l.location, e.isRtl.value), g = l.origin === "overlap" ? f : l.origin === "auto" ? at(f) : mt(l.origin, e.isRtl.value);
    return f.side === g.side && f.align === it(g).align ? { preferredAnchor: uo(f), preferredOrigin: uo(g) } : { preferredAnchor: f, preferredOrigin: g };
  }), [i, c, s, o] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((f) => v(() => {
    const g = parseFloat(l[f]);
    return isNaN(g) ? 1 / 0 : g;
  })), u = v(() => {
    if (Array.isArray(l.offset))
      return l.offset;
    if (typeof l.offset == "string") {
      const f = l.offset.split(" ").map(parseFloat);
      return f.length < 2 && f.push(0), f;
    }
    return typeof l.offset == "number" ? [l.offset, 0] : [0, 0];
  });
  let m = !1;
  const y = new ResizeObserver(() => {
    m && p();
  });
  function p() {
    if (m = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => m = !0);
    }), !e.target.value || !e.contentEl.value)
      return;
    const f = ra(e.target.value), g = function(C, V) {
      V ? C.style.removeProperty("left") : C.style.removeProperty("right");
      const I = zt(C);
      return V ? I.x += parseFloat(C.style.right || 0) : I.x -= parseFloat(C.style.left || 0), I.y -= parseFloat(C.style.top || 0), I;
    }(e.contentEl.value, e.isRtl.value), h = Gl(e.contentEl.value);
    h.length || (h.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (g.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), g.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const b = h.reduce((C, V) => {
      const I = V.getBoundingClientRect(), F = new wn({ x: V === document.documentElement ? 0 : I.x, y: V === document.documentElement ? 0 : I.y, width: V.clientWidth, height: V.clientHeight });
      return C ? new wn({ x: Math.max(C.left, F.left), y: Math.max(C.top, F.top), width: Math.min(C.right, F.right) - Math.max(C.left, F.left), height: Math.min(C.bottom, F.bottom) - Math.max(C.top, F.top) }) : F;
    }, void 0);
    b.x += 12, b.y += 12, b.width -= 24, b.height -= 24;
    let S = { anchor: t.value, origin: a.value };
    function O(C) {
      const V = new wn(g), I = Do(C.anchor, f), F = Do(C.origin, V);
      let { x: _, y: U } = (B = F, { x: (G = I).x - B.x, y: G.y - B.y });
      var G, B;
      switch (C.anchor.side) {
        case "top":
          U -= u.value[0];
          break;
        case "bottom":
          U += u.value[0];
          break;
        case "left":
          _ -= u.value[0];
          break;
        case "right":
          _ += u.value[0];
      }
      switch (C.anchor.align) {
        case "top":
          U -= u.value[1];
          break;
        case "bottom":
          U += u.value[1];
          break;
        case "left":
          _ -= u.value[1];
          break;
        case "right":
          _ += u.value[1];
      }
      return V.x += _, V.y += U, V.width = Math.min(V.width, s.value), V.height = Math.min(V.height, o.value), { overflows: po(V, b), x: _, y: U };
    }
    let P = 0, R = 0;
    const w = { x: 0, y: 0 }, E = { x: !1, y: !1 };
    let j = -1;
    for (; ; ) {
      if (j++ > 10) {
        Jl("Vuetify error: Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const { x: C, y: V, overflows: I } = O(S);
      P += C, R += V, g.x += C, g.y += V;
      {
        const F = co(S.anchor), _ = I.x.before || I.x.after, U = I.y.before || I.y.after;
        let G = !1;
        if (["x", "y"].forEach((B) => {
          if (B === "x" && _ && !E.x || B === "y" && U && !E.y) {
            const D = { anchor: { ...S.anchor }, origin: { ...S.origin } }, L = B === "x" ? F === "y" ? it : at : F === "y" ? at : it;
            D.anchor = L(D.anchor), D.origin = L(D.origin);
            const { overflows: q } = O(D);
            (q[B].before <= I[B].before && q[B].after <= I[B].after || q[B].before + q[B].after < (I[B].before + I[B].after) / 2) && (S = D, G = E[B] = !0);
          }
        }), G)
          continue;
      }
      I.x.before && (P += I.x.before, g.x += I.x.before), I.x.after && (P -= I.x.after, g.x -= I.x.after), I.y.before && (R += I.y.before, g.y += I.y.before), I.y.after && (R -= I.y.after, g.y -= I.y.after);
      {
        const F = po(g, b);
        w.x = b.width - F.x.before - F.x.after, w.y = b.height - F.y.before - F.y.after, P += F.x.before, g.x += F.x.before, R += F.y.before, g.y += F.y.before;
      }
      break;
    }
    const z = co(S.anchor);
    return Object.assign(n.value, { "--v-overlay-anchor-origin": `${S.anchor.side} ${S.anchor.align}`, transformOrigin: `${S.origin.side} ${S.origin.align}`, top: te(ct(R)), left: e.isRtl.value ? void 0 : te(ct(P)), right: e.isRtl.value ? te(ct(-P)) : void 0, minWidth: te(z === "y" ? Math.min(i.value, f.width) : i.value), maxWidth: te(Lo(Nn(w.x, i.value === 1 / 0 ? 0 : i.value, s.value))), maxHeight: te(Lo(Nn(w.y, c.value === 1 / 0 ? 0 : c.value, o.value))) }), { available: w, contentBox: g };
  }
  return J([e.target, e.contentEl], (f, g) => {
    let [h, b] = f, [S, O] = g;
    S && !Array.isArray(S) && y.unobserve(S), h && !Array.isArray(h) && y.observe(h), O && y.unobserve(O), b && y.observe(b);
  }, { immediate: !0 }), Te(() => {
    y.disconnect();
  }), J(() => [t.value, a.value, l.offset, l.minWidth, l.minHeight, l.maxWidth, l.maxHeight], () => p()), xe(() => {
    const f = p();
    if (!f)
      return;
    const { available: g, contentBox: h } = f;
    h.height > g.y && requestAnimationFrame(() => {
      p(), requestAnimationFrame(() => {
        p();
      });
    });
  }), { updateLocation: p };
} }, zr = K({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in li }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array] }, "VOverlay-location-strategies");
function ct(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Lo(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Bt = !0;
const Xl = [];
let Wo = -1;
function xt() {
  cancelAnimationFrame(Wo), Wo = requestAnimationFrame(() => {
    const e = Xl.shift();
    e && e(), Xl.length ? xt() : Bt = !0;
  });
}
const Wl = { none: null, close: function(e) {
  Mo(e.targetEl.value ?? e.contentEl.value, function(l) {
    e.isActive.value = !1;
  });
}, block: function(e, l) {
  var s;
  const n = (s = e.root.value) == null ? void 0 : s.offsetParent, t = [.../* @__PURE__ */ new Set([...Gl(e.targetEl.value, l.contained ? n : void 0), ...Gl(e.contentEl.value, l.contained ? n : void 0)])].filter((o) => !o.classList.contains("v-overlay-scroll-blocked")), a = window.innerWidth - document.documentElement.offsetWidth, i = (c = n || document.documentElement, Lt(c) && c);
  var c;
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), t.forEach((o, u) => {
    o.style.setProperty("--v-body-scroll-x", te(-o.scrollLeft)), o.style.setProperty("--v-body-scroll-y", te(-o.scrollTop)), o !== document.documentElement && o.style.setProperty("--v-scrollbar-offset", te(a)), o.classList.add("v-overlay-scroll-blocked");
  }), Te(() => {
    t.forEach((o, u) => {
      const m = parseFloat(o.style.getPropertyValue("--v-body-scroll-x")), y = parseFloat(o.style.getPropertyValue("--v-body-scroll-y"));
      o.style.removeProperty("--v-body-scroll-x"), o.style.removeProperty("--v-body-scroll-y"), o.style.removeProperty("--v-scrollbar-offset"), o.classList.remove("v-overlay-scroll-blocked"), o.scrollLeft = -m, o.scrollTop = -y;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}, reposition: function(e, l, n) {
  let t = !1, a = -1, i = -1;
  function c(s) {
    var o;
    o = () => {
      var y, p;
      const u = performance.now();
      (p = (y = e.updateLocation).value) == null || p.call(y, s), t = (performance.now() - u) / (1e3 / 60) > 2;
    }, !Bt || Xl.length ? (Xl.push(o), xt()) : (Bt = !1, o(), xt());
  }
  i = (typeof requestIdleCallback > "u" ? (s) => s() : requestIdleCallback)(() => {
    n.run(() => {
      Mo(e.targetEl.value ?? e.contentEl.value, (s) => {
        t ? (cancelAnimationFrame(a), a = requestAnimationFrame(() => {
          a = requestAnimationFrame(() => {
            c(s);
          });
        })) : c(s);
      });
    });
  }), Te(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(a);
  });
} }, Dr = K({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in Wl } }, "VOverlay-scroll-strategies");
function Mo(e, l) {
  const n = [document, ...Gl(e)];
  n.forEach((t) => {
    t.addEventListener("scroll", l, { passive: !0 });
  }), Te(() => {
    n.forEach((t) => {
      t.removeEventListener("scroll", l);
    });
  });
}
const kt = Symbol.for("vuetify:v-menu"), Lr = K({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay"), Wr = K({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...Lr() }, "VOverlay-activator");
function Mr(e, l) {
  let { isActive: n, isTop: t } = l;
  const a = _e("useActivator"), i = W();
  let c = !1, s = !1, o = !0;
  const u = v(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), m = v(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !u.value), { runOpenDelay: y, runCloseDelay: p } = function(I, F) {
    const _ = {}, U = (G) => () => {
      if (!ze)
        return Promise.resolve(!0);
      const B = G === "openDelay";
      return _.closeDelay && window.clearTimeout(_.closeDelay), delete _.closeDelay, _.openDelay && window.clearTimeout(_.openDelay), delete _.openDelay, new Promise((D) => {
        const L = parseInt(I[G] ?? 0, 10);
        _[G] = window.setTimeout(() => {
          F == null || F(B), D(B);
        }, L);
      });
    };
    return { runCloseDelay: U("closeDelay"), runOpenDelay: U("openDelay") };
  }(e, (I) => {
    I !== (e.openOnHover && c || u.value && s) || e.openOnHover && n.value && !t.value || (n.value !== I && (o = !0), n.value = I);
  }), f = W(), g = (I) => {
    I.stopPropagation(), i.value = I.currentTarget || I.target, n.value || (f.value = [I.clientX, I.clientY]), n.value = !n.value;
  }, h = (I) => {
    var F;
    (F = I.sourceCapabilities) != null && F.firesTouchEvents || (c = !0, i.value = I.currentTarget || I.target, y());
  }, b = (I) => {
    c = !1, p();
  }, S = (I) => {
    Un(I.target, ":focus-visible") !== !1 && (s = !0, I.stopPropagation(), i.value = I.currentTarget || I.target, y());
  }, O = (I) => {
    s = !1, I.stopPropagation(), p();
  }, P = v(() => {
    const I = {};
    return m.value && (I.onClick = g), e.openOnHover && (I.onMouseenter = h, I.onMouseleave = b), u.value && (I.onFocus = S, I.onBlur = O), I;
  }), R = v(() => {
    const I = {};
    if (e.openOnHover && (I.onMouseenter = () => {
      c = !0, y();
    }, I.onMouseleave = () => {
      c = !1, p();
    }), u.value && (I.onFocusin = () => {
      s = !0, y();
    }, I.onFocusout = () => {
      s = !1, p();
    }), e.closeOnContentClick) {
      const F = me(kt, null);
      I.onClick = () => {
        n.value = !1, F == null || F.closeParents();
      };
    }
    return I;
  }), w = v(() => {
    const I = {};
    return e.openOnHover && (I.onMouseenter = () => {
      o && (c = !0, o = !1, y());
    }, I.onMouseleave = () => {
      c = !1, p();
    }), I;
  });
  J(t, (I) => {
    !I || (!e.openOnHover || c || u.value && s) && (!u.value || s || e.openOnHover && c) || (n.value = !1);
  }), J(n, (I) => {
    I || setTimeout(() => {
      f.value = void 0;
    });
  }, { flush: "post" });
  const E = W();
  Ue(() => {
    E.value && xe(() => {
      i.value = Ml(E.value);
    });
  });
  const j = W(), z = v(() => e.target === "cursor" && f.value ? f.value : j.value ? Ml(j.value) : Ro(e.target, a) || i.value), C = v(() => Array.isArray(z.value) ? void 0 : z.value);
  let V;
  return J(() => !!e.activator, (I) => {
    I && ze ? (V = At(), V.run(() => {
      (function(F, _, U) {
        let { activatorEl: G, activatorEvents: B } = U;
        function D() {
          let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : q(), T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : F.activatorProps;
          H && function(M, Y) {
            Object.keys(Y).forEach((x) => {
              if (ft(x)) {
                const k = io(x), $ = $l.get(M);
                if (Y[x] == null)
                  $ == null || $.forEach((N) => {
                    const [A, X] = N;
                    A === k && (M.removeEventListener(k, X), $.delete(N));
                  });
                else if (!$ || ![...$].some((N) => N[0] === k && N[1] === Y[x])) {
                  M.addEventListener(k, Y[x]);
                  const N = $ || /* @__PURE__ */ new Set();
                  N.add([k, Y[x]]), $l.has(M) || $l.set(M, N);
                }
              } else
                Y[x] == null ? M.removeAttribute(x) : M.setAttribute(x, Y[x]);
            });
          }(H, Q(B.value, T));
        }
        function L() {
          let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : q(), T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : F.activatorProps;
          H && function(M, Y) {
            Object.keys(Y).forEach((x) => {
              if (ft(x)) {
                const k = io(x), $ = $l.get(M);
                $ == null || $.forEach((N) => {
                  const [A, X] = N;
                  A === k && (M.removeEventListener(k, X), $.delete(N));
                });
              } else
                M.removeAttribute(x);
            });
          }(H, Q(B.value, T));
        }
        function q() {
          const H = Ro(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : F.activator, _);
          return G.value = (H == null ? void 0 : H.nodeType) === Node.ELEMENT_NODE ? H : void 0, G.value;
        }
        J(() => F.activator, (H, T) => {
          if (T && H !== T) {
            const M = q(T);
            M && L(M);
          }
          H && xe(() => D());
        }, { immediate: !0 }), J(() => F.activatorProps, () => {
          D();
        }), Te(() => {
          L();
        });
      })(e, a, { activatorEl: i, activatorEvents: P });
    })) : V && V.stop();
  }, { flush: "post", immediate: !0 }), Te(() => {
    V == null || V.stop();
  }), { activatorEl: i, activatorRef: E, target: z, targetEl: C, targetRef: j, activatorEvents: P, contentEvents: R, scrimEvents: w };
}
function Ro(e, l) {
  var t, a;
  if (!e)
    return;
  let n;
  if (e === "parent") {
    let i = (a = (t = l == null ? void 0 : l.proxy) == null ? void 0 : t.$el) == null ? void 0 : a.parentNode;
    for (; i != null && i.hasAttribute("data-no-activator"); )
      i = i.parentNode;
    n = i;
  } else
    n = typeof e == "string" ? document.querySelector(e) : "$el" in e ? e.$el : e;
  return n;
}
const Rr = Symbol.for("vuetify:display");
function ti() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nn();
  const n = me(Rr);
  if (!n)
    throw new Error("Could not find Vuetify display injection");
  const t = v(() => {
    if (!e.mobileBreakpoint)
      return n.mobile.value;
    const i = typeof e.mobileBreakpoint == "number" ? e.mobileBreakpoint : n.thresholds.value[e.mobileBreakpoint];
    return n.width.value < i;
  }), a = v(() => l ? { [`${l}--mobile`]: t.value } : {});
  return { ...n, displayClasses: a, mobile: t };
}
const Nr = K({ eager: Boolean }, "lazy");
function oi() {
  const e = _e("useScopeId").vnode.scopeId;
  return { scopeId: e ? { [e]: "" } : void 0 };
}
const No = Symbol.for("vuetify:stack"), al = Re([]);
function jr() {
  return !0;
}
function jo(e, l, n) {
  if (!e || ai(e, n) === !1)
    return !1;
  const t = ua(l);
  if (typeof ShadowRoot < "u" && t instanceof ShadowRoot && t.host === e.target)
    return !1;
  const a = (typeof n.value == "object" && n.value.include || (() => []))();
  return a.push(l), !a.some((i) => i == null ? void 0 : i.contains(e.target));
}
function ai(e, l) {
  return (typeof l.value == "object" && l.value.closeConditional || jr)(e);
}
function Uo(e, l) {
  const n = ua(e);
  l(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && l(n);
}
const Ur = { mounted(e, l) {
  const n = (a) => function(i, c, s) {
    const o = typeof s.value == "function" ? s.value : s.value.handler;
    c._clickOutside.lastMousedownWasOutside && jo(i, c, s) && setTimeout(() => {
      ai(i, s) && o && o(i);
    }, 0);
  }(a, e, l), t = (a) => {
    e._clickOutside.lastMousedownWasOutside = jo(a, e, l);
  };
  Uo(e, (a) => {
    a.addEventListener("click", n, !0), a.addEventListener("mousedown", t, !0);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: !1 }), e._clickOutside[l.instance.$.uid] = { onClick: n, onMousedown: t };
}, unmounted(e, l) {
  e._clickOutside && (Uo(e, (n) => {
    var i;
    if (!n || !((i = e._clickOutside) != null && i[l.instance.$.uid]))
      return;
    const { onClick: t, onMousedown: a } = e._clickOutside[l.instance.$.uid];
    n.removeEventListener("click", t, !0), n.removeEventListener("mousedown", a, !0);
  }), delete e._clickOutside[l.instance.$.uid]);
} };
function Gr(e) {
  const { modelValue: l, color: n, ...t } = e;
  return d(En, { name: "fade-transition", appear: !0 }, { default: () => [e.modelValue && d("div", Q({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, t), null)] });
}
const ii = K({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: !0 }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: !0 }, zIndex: { type: [Number, String], default: 2e3 }, ...Wr(), ...de(), ...Dn(), ...Nr(), ...zr(), ...Dr(), ...Oe(), ...Zn() }, "VOverlay"), Go = ne()({ name: "VOverlay", directives: { ClickOutside: Ur }, inheritAttrs: !1, props: { _disableGlobalStack: Boolean, ...ii() }, emits: { "click:outside": (e) => !0, "update:modelValue": (e) => !0, afterLeave: () => !0 }, setup(e, l) {
  var M, Y;
  let { slots: n, attrs: t, emit: a } = l;
  const i = be(e, "modelValue"), c = v({ get: () => i.value, set: (x) => {
    x && e.disabled || (i.value = x);
  } }), { teleportTarget: s } = function(x) {
    return { teleportTarget: v(() => {
      const k = x.value;
      if (k === !0 || !ze)
        return;
      const $ = k === !1 ? document.body : typeof k == "string" ? document.querySelector(k) : k;
      if ($ == null)
        return void Jl(`Unable to locate target ${k}`);
      let N = $.querySelector(":scope > .v-overlay-container");
      return N || (N = document.createElement("div"), N.className = "v-overlay-container", $.appendChild(N)), N;
    }) };
  }(v(() => e.attach || e.contained)), { themeClasses: o } = De(e), { rtlClasses: u, isRtl: m } = Sl(), { hasContent: y, onAfterLeave: p } = function(x, k) {
    const $ = ie(!1), N = v(() => $.value || x.eager || k.value);
    return J(k, () => $.value = !0), { isBooted: $, hasContent: N, onAfterLeave: function() {
      x.eager || ($.value = !1);
    } };
  }(e, c), f = Gn(v(() => typeof e.scrim == "string" ? e.scrim : null)), { globalTop: g, localTop: h, stackStyles: b } = function(x, k, $) {
    const N = _e("useStack"), A = !$, X = me(No, void 0), re = Re({ activeChildren: /* @__PURE__ */ new Set() });
    qe(No, re);
    const Ie = ie(+k.value);
    Fn(x, () => {
      var ke;
      const ge = (ke = al.at(-1)) == null ? void 0 : ke[1];
      Ie.value = ge ? ge + 10 : +k.value, A && al.push([N.uid, Ie.value]), X == null || X.activeChildren.add(N.uid), Te(() => {
        if (A) {
          const Pe = cn(al).findIndex((He) => He[0] === N.uid);
          al.splice(Pe, 1);
        }
        X == null || X.activeChildren.delete(N.uid);
      });
    });
    const oe = ie(!0);
    A && Ue(() => {
      var ke;
      const ge = ((ke = al.at(-1)) == null ? void 0 : ke[0]) === N.uid;
      setTimeout(() => oe.value = ge);
    });
    const Fe = v(() => !re.activeChildren.size);
    return { globalTop: Ft(oe), localTop: Fe, stackStyles: v(() => ({ zIndex: Ie.value })) };
  }(c, le(e, "zIndex"), e._disableGlobalStack), { activatorEl: S, activatorRef: O, target: P, targetEl: R, targetRef: w, activatorEvents: E, contentEvents: j, scrimEvents: z } = Mr(e, { isActive: c, isTop: h }), { dimensionStyles: C } = Ln(e), V = function() {
    if (!ze)
      return ie(!1);
    const { ssr: x } = ti();
    if (x) {
      const k = ie(!1);
      return Xn(() => {
        k.value = !0;
      }), k;
    }
    return ie(!0);
  }(), { scopeId: I } = oi();
  J(() => e.disabled, (x) => {
    x && (c.value = !1);
  });
  const F = W(), _ = W(), { contentStyles: U, updateLocation: G } = function(x, k) {
    const $ = W({}), N = W();
    function A(X) {
      var re;
      (re = N.value) == null || re.call(N, X);
    }
    return ze && (Fn(() => !(!k.isActive.value || !x.locationStrategy), (X) => {
      var re, Ie;
      J(() => x.locationStrategy, X), Te(() => {
        N.value = void 0;
      }), typeof x.locationStrategy == "function" ? N.value = (re = x.locationStrategy(k, x, $)) == null ? void 0 : re.updateLocation : N.value = (Ie = li[x.locationStrategy](k, x, $)) == null ? void 0 : Ie.updateLocation;
    }), window.addEventListener("resize", A, { passive: !0 }), Te(() => {
      window.removeEventListener("resize", A), N.value = void 0;
    })), { contentStyles: $, updateLocation: N };
  }(e, { isRtl: m, contentEl: _, target: P, isActive: c });
  function B(x) {
    a("click:outside", x), e.persistent ? T() : c.value = !1;
  }
  function D() {
    return c.value && g.value;
  }
  function L(x) {
    var k, $;
    x.key === "Escape" && g.value && (e.persistent ? T() : (c.value = !1, (k = _.value) != null && k.contains(document.activeElement) && (($ = S.value) == null || $.focus())));
  }
  (function(x, k) {
    if (!ze)
      return;
    let $;
    Ue(async () => {
      $ == null || $.stop(), k.isActive.value && x.scrollStrategy && ($ = At(), await xe(), $.active && $.run(() => {
        var N;
        typeof x.scrollStrategy == "function" ? x.scrollStrategy(k, x, $) : (N = Wl[x.scrollStrategy]) == null || N.call(Wl, k, x, $);
      }));
    }), Te(() => {
      $ == null || $.stop();
    });
  })(e, { root: F, contentEl: _, targetEl: R, isActive: c, updateLocation: G }), ze && J(c, (x) => {
    x ? window.addEventListener("keydown", L) : window.removeEventListener("keydown", L);
  }, { immediate: !0 });
  const q = (Y = (M = _e("useRouter")) == null ? void 0 : M.proxy) == null ? void 0 : Y.$router;
  Fn(() => e.closeOnBack, () => {
    (function(x, k) {
      let $, N, A = !1;
      function X(re) {
        var Ie;
        (Ie = re.state) != null && Ie.replaced || (A = !0, setTimeout(() => A = !1));
      }
      ze && (xe(() => {
        window.addEventListener("popstate", X), $ = x == null ? void 0 : x.beforeEach((re, Ie, oe) => {
          st ? A ? k(oe) : oe() : setTimeout(() => A ? k(oe) : oe()), st = !0;
        }), N = x == null ? void 0 : x.afterEach(() => {
          st = !1;
        });
      }), Te(() => {
        window.removeEventListener("popstate", X), $ == null || $(), N == null || N();
      }));
    })(q, (x) => {
      g.value && c.value ? (x(!1), e.persistent ? T() : c.value = !1) : x();
    });
  });
  const H = W();
  function T() {
    e.noClickAnimation || _.value && Rn(_.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: Ul });
  }
  return J(() => c.value && (e.absolute || e.contained) && s.value == null, (x) => {
    if (x) {
      const k = da(F.value);
      k && k !== document.scrollingElement && (H.value = k.scrollTop);
    }
  }), ue(() => {
    var x;
    return d(fe, null, [(x = n.activator) == null ? void 0 : x.call(n, { isActive: c.value, props: Q({ ref: O, targetRef: w }, E.value, e.activatorProps) }), V.value && y.value && d(dn, { disabled: !s.value, to: s.value }, { default: () => [d("div", Q({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": c.value, "v-overlay--contained": e.contained }, o.value, u.value, e.class], style: [b.value, { top: te(H.value) }, e.style], ref: F }, I, t), [d(Gr, Q({ color: f, modelValue: c.value && !!e.scrim }, z.value), null), d(un, { appear: !0, persisted: !0, transition: e.transition, target: P.value, onAfterLeave: () => {
      p(), a("afterLeave");
    } }, { default: () => {
      var k;
      return [Ee(d("div", Q({ ref: _, class: ["v-overlay__content", e.contentClass], style: [C.value, U.value] }, j.value, e.contentProps), [(k = n.default) == null ? void 0 : k.call(n, { isActive: c })]), [[Yn, c.value], [on("click-outside"), { handler: B, closeConditional: D, include: () => [S.value] }]])];
    } })])] })]);
  }), { activatorEl: S, target: P, animateClick: T, contentEl: _, globalTop: g, localTop: h, updateLocation: G };
} }), dt = Symbol("Forwarded refs");
function pt(e, l) {
  let n = e;
  for (; n; ) {
    const t = Reflect.getOwnPropertyDescriptor(n, l);
    if (t)
      return t;
    n = Object.getPrototypeOf(n);
  }
}
function _l(e) {
  for (var l = arguments.length, n = new Array(l > 1 ? l - 1 : 0), t = 1; t < l; t++)
    n[t - 1] = arguments[t];
  return e[dt] = n, new Proxy(e, { get(a, i) {
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
        const u = pt(o.value, i) ?? ("_" in o.value ? pt((s = o.value._) == null ? void 0 : s.setupState, i) : void 0);
        if (u)
          return u;
      }
      for (const o of n) {
        const u = o.value && o.value[dt];
        if (!u)
          continue;
        const m = u.slice();
        for (; m.length; ) {
          const y = m.shift(), p = pt(y.value, i);
          if (p)
            return p;
          const f = y.value && y.value[dt];
          f && m.push(...f);
        }
      }
    }
  } });
}
const qr = K({ id: String, ...hn(ii({ closeDelay: 250, closeOnContentClick: !0, locationStrategy: "connected", openDelay: 300, scrim: !1, scrollStrategy: "reposition", transition: { component: ya } }), ["absolute"]) }, "VMenu"), ri = ne()({ name: "VMenu", props: qr(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: n } = l;
  const t = be(e, "modelValue"), { scopeId: a } = oi(), i = Je(), c = v(() => e.id || `v-menu-${i}`), s = W(), o = me(kt, null), u = ie(0);
  async function m(h) {
    var O, P, R;
    const b = h.relatedTarget, S = h.target;
    await xe(), t.value && b !== S && ((O = s.value) != null && O.contentEl) && ((P = s.value) != null && P.globalTop) && ![document, s.value.contentEl].includes(S) && !s.value.contentEl.contains(S) && ((R = yt(s.value.contentEl)[0]) == null || R.focus());
  }
  function y() {
    o == null || o.closeParents();
  }
  function p(h) {
    var b, S, O;
    !e.disabled && h.key === "Tab" && (aa(yt((b = s.value) == null ? void 0 : b.contentEl, !1), h.shiftKey ? "prev" : "next", (P) => P.tabIndex >= 0) || (t.value = !1, (O = (S = s.value) == null ? void 0 : S.activatorEl) == null || O.focus()));
  }
  function f(h) {
    var S;
    if (e.disabled)
      return;
    const b = (S = s.value) == null ? void 0 : S.contentEl;
    b && t.value ? h.key === "ArrowDown" ? (h.preventDefault(), Nl(b, "next")) : h.key === "ArrowUp" && (h.preventDefault(), Nl(b, "prev")) : ["ArrowDown", "ArrowUp"].includes(h.key) && (t.value = !0, h.preventDefault(), setTimeout(() => setTimeout(() => f(h))));
  }
  qe(kt, { register() {
    ++u.value;
  }, unregister() {
    --u.value;
  }, closeParents() {
    setTimeout(() => {
      u.value || (t.value = !1, o == null || o.closeParents());
    }, 40);
  } }), J(t, (h) => {
    h ? (o == null || o.register(), document.addEventListener("focusin", m, { once: !0 })) : (o == null || o.unregister(), document.removeEventListener("focusin", m));
  });
  const g = v(() => Q({ "aria-haspopup": "menu", "aria-expanded": String(t.value), "aria-owns": c.value, onKeydown: f }, e.activatorProps));
  return ue(() => {
    const h = Go.filterProps(e);
    return d(Go, Q({ ref: s, class: ["v-menu", e.class], style: e.style }, h, { modelValue: t.value, "onUpdate:modelValue": (b) => t.value = b, absolute: !0, activatorProps: g.value, "onClick:outside": y, onKeydown: p }, a), { activator: n.activator, default: function() {
      for (var b = arguments.length, S = new Array(b), O = 0; O < b; O++)
        S[O] = arguments[O];
      return d(Ve, { root: "VMenu" }, { default: () => {
        var P;
        return [(P = n.default) == null ? void 0 : P.call(n, ...S)];
      } });
    } });
  }), _l({ id: c, ΨopenChildren: u }, s);
} }), Hr = K({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...de(), ...Zn({ transition: { component: ma } }) }, "VCounter"), si = ne()({ name: "VCounter", functional: !0, props: Hr(), setup(e, l) {
  let { slots: n } = l;
  const t = v(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return ue(() => d(un, { transition: e.transition }, { default: () => [Ee(d("div", { class: ["v-counter", e.class], style: e.style }, [n.default ? n.default({ counter: t.value, max: e.max, value: e.value }) : t.value]), [[Yn, e.active]])] })), {};
} }), Kr = K({ floating: Boolean, ...de() }, "VFieldLabel"), zl = ne()({ name: "VFieldLabel", props: Kr(), setup(e, l) {
  let { slots: n } = l;
  return ue(() => d(Da, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, n)), {};
} }), Yr = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Kt = K({ appendInnerIcon: ye, bgColor: String, clearable: Boolean, clearIcon: { type: ye, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: ye, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => Yr.includes(e) }, "onClick:clear": Qe(), "onClick:appendInner": Qe(), "onClick:prependInner": Qe(), ...de(), ...Ut(), ...an(), ...Oe() }, "VField"), Yt = ne()({ name: "VField", inheritAttrs: !1, props: { id: String, ...Na(), ...Kt() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: n, emit: t, slots: a } = l;
  const { themeClasses: i } = De(e), { loaderClasses: c } = nt(e), { focusClasses: s, isFocused: o, focus: u, blur: m } = Al(e), { InputIcon: y } = Ra(e), { roundedClasses: p } = rn(e), { rtlClasses: f } = Sl(), g = v(() => e.dirty || e.active), h = v(() => !(e.singleLine || !e.label && !a.label)), b = Je(), S = v(() => e.id || `input-${b}`), O = v(() => `${S.value}-messages`), P = W(), R = W(), w = W(), E = v(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: j, backgroundColorStyles: z } = Gn(le(e, "bgColor")), { textColorClasses: C, textColorStyles: V } = en(v(() => e.error || e.disabled ? void 0 : g.value && o.value ? e.color : e.baseColor));
  J(g, (_) => {
    if (h.value) {
      const U = P.value.$el, G = R.value.$el;
      requestAnimationFrame(() => {
        const B = zt(U), D = G.getBoundingClientRect(), L = D.x - B.x, q = D.y - B.y - (B.height / 2 - D.height / 2), H = D.width / 0.75, T = Math.abs(H - B.width) > 1 ? { maxWidth: te(H) } : void 0, M = getComputedStyle(U), Y = getComputedStyle(G), x = 1e3 * parseFloat(M.transitionDuration) || 150, k = parseFloat(Y.getPropertyValue("--v-field-label-scale")), $ = Y.getPropertyValue("color");
        U.style.visibility = "visible", G.style.visibility = "hidden", Rn(U, { transform: `translate(${L}px, ${q}px) scale(${k})`, color: $, ...T }, { duration: x, easing: Ul, direction: _ ? "normal" : "reverse" }).finished.then(() => {
          U.style.removeProperty("visibility"), G.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const I = v(() => ({ isActive: g, isFocused: o, controlRef: w, blur: m, focus: u }));
  function F(_) {
    _.target !== document.activeElement && _.preventDefault();
  }
  return ue(() => {
    var L, q, H;
    const _ = e.variant === "outlined", U = a["prepend-inner"] || e.prependInnerIcon, G = !(!e.clearable && !a.clear), B = !!(a["append-inner"] || e.appendInnerIcon || G), D = a.label ? a.label({ ...I.value, label: e.label, props: { for: S.value } }) : e.label;
    return d("div", Q({ class: ["v-field", { "v-field--active": g.value, "v-field--appended": B, "v-field--center-affix": e.centerAffix ?? !E.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": U, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !D, [`v-field--variant-${e.variant}`]: !0 }, i.value, j.value, s.value, c.value, p.value, f.value, e.class], style: [z.value, e.style], onClick: F }, n), [d("div", { class: "v-field__overlay" }, null), d(Gt, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: a.loader }), U && d("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && d(y, { key: "prepend-icon", name: "prependInner" }, null), (L = a["prepend-inner"]) == null ? void 0 : L.call(a, I.value)]), d("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && h.value && d(zl, { key: "floating-label", ref: R, class: [C.value], floating: !0, for: S.value, style: V.value }, { default: () => [D] }), d(zl, { ref: P, for: S.value }, { default: () => [D] }), (q = a.default) == null ? void 0 : q.call(a, { ...I.value, props: { id: S.value, class: "v-field__input", "aria-describedby": O.value }, focus: u, blur: m })]), G && d(ga, { key: "clear" }, { default: () => [Ee(d("div", { class: "v-field__clearable", onMousedown: (T) => {
      T.preventDefault(), T.stopPropagation();
    } }, [a.clear ? a.clear() : d(y, { name: "clear" }, null)]), [[Yn, e.dirty]])] }), B && d("div", { key: "append", class: "v-field__append-inner" }, [(H = a["append-inner"]) == null ? void 0 : H.call(a, I.value), e.appendInnerIcon && d(y, { key: "append-icon", name: "appendInner" }, null)]), d("div", { class: ["v-field__outline", C.value], style: V.value }, [_ && d(fe, null, [d("div", { class: "v-field__outline__start" }, null), h.value && d("div", { class: "v-field__outline__notch" }, [d(zl, { ref: R, floating: !0, for: S.value }, { default: () => [D] })]), d("div", { class: "v-field__outline__end" }, null)]), E.value && h.value && d(zl, { ref: R, floating: !0, for: S.value }, { default: () => [D] })])]);
  }), { controlRef: w };
} });
function ui(e) {
  return na(e, Object.keys(Yt.props).filter((l) => !ft(l) && l !== "class" && l !== "style"));
}
const Xr = ["color", "file", "time", "date", "datetime-local", "week", "month"], Xt = K({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...Vl(), ...Kt() }, "VTextField"), fl = ne()({ name: "VTextField", directives: { Intersect: Mt }, inheritAttrs: !1, props: Xt(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: n, emit: t, slots: a } = l;
  const i = be(e, "modelValue"), { isFocused: c, focus: s, blur: o } = Al(e), u = v(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), m = v(() => n.maxlength ? n.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), y = v(() => ["plain", "underlined"].includes(e.variant));
  function p(E, j) {
    var z, C;
    e.autofocus && E && ((C = (z = j[0].target) == null ? void 0 : z.focus) == null || C.call(z));
  }
  const f = W(), g = W(), h = W(), b = v(() => Xr.includes(e.type) || e.persistentPlaceholder || c.value || e.active);
  function S() {
    var E;
    h.value !== document.activeElement && ((E = h.value) == null || E.focus()), c.value || s();
  }
  function O(E) {
    t("mousedown:control", E), E.target !== h.value && (S(), E.preventDefault());
  }
  function P(E) {
    S(), t("click:control", E);
  }
  function R(E) {
    E.stopPropagation(), S(), xe(() => {
      i.value = null, oa(e["onClick:clear"], E);
    });
  }
  function w(E) {
    var z;
    const j = E.target;
    if (i.value = j.value, ((z = e.modelModifiers) == null ? void 0 : z.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const C = [j.selectionStart, j.selectionEnd];
      xe(() => {
        j.selectionStart = C[0], j.selectionEnd = C[1];
      });
    }
  }
  return ue(() => {
    const E = !!(a.counter || e.counter !== !1 && e.counter != null), j = !(!E && !a.details), [z, C] = Il(n), { modelValue: V, ...I } = gn.filterProps(e), F = ui(e);
    return d(gn, Q({ ref: f, modelValue: i.value, "onUpdate:modelValue": (_) => i.value = _, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-input--plain-underlined": y.value }, e.class], style: e.style }, z, I, { centerAffix: !y.value, focused: c.value }), { ...a, default: (_) => {
      let { id: U, isDisabled: G, isDirty: B, isReadonly: D, isValid: L } = _;
      return d(Yt, Q({ ref: g, onMousedown: O, onClick: P, "onClick:clear": R, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: e.role }, F, { id: U.value, active: b.value || B.value, dirty: B.value || e.dirty, disabled: G.value, focused: c.value, error: L.value === !1 }), { ...a, default: (q) => {
        let { props: { class: H, ...T } } = q;
        const M = Ee(d("input", Q({ ref: h, value: i.value, onInput: w, autofocus: e.autofocus, readonly: D.value, disabled: G.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: S, onBlur: o }, T, C), null), [[on("intersect"), { handler: p }, null, { once: !0 }]]);
        return d(fe, null, [e.prefix && d("span", { class: "v-text-field__prefix" }, [d("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), a.default ? d("div", { class: H, "data-no-activator": "" }, [a.default(), M]) : xi(M, { class: H }), e.suffix && d("span", { class: "v-text-field__suffix" }, [d("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: j ? (_) => {
      var U;
      return d(fe, null, [(U = a.details) == null ? void 0 : U.call(a, _), E && d(fe, null, [d("span", null, null), d(si, { active: e.persistentCounter || c.value, value: u.value, max: m.value }, a.counter)])]);
    } : void 0 });
  }), _l({}, f, g, h);
} }), Jr = K({ renderless: Boolean, ...de() }, "VVirtualScrollItem"), Zr = ne()({ name: "VVirtualScrollItem", inheritAttrs: !1, props: Jr(), emits: { "update:height": (e) => !0 }, setup(e, l) {
  let { attrs: n, emit: t, slots: a } = l;
  const { resizeRef: i, contentRect: c } = Wt(void 0, "border");
  J(() => {
    var s;
    return (s = c.value) == null ? void 0 : s.height;
  }, (s) => {
    s != null && t("update:height", s);
  }), ue(() => {
    var s, o;
    return e.renderless ? d(fe, null, [(s = a.default) == null ? void 0 : s.call(a, { itemRef: i })]) : d("div", Q({ ref: i, class: ["v-virtual-scroll__item", e.class], style: e.style }, n), [(o = a.default) == null ? void 0 : o.call(a)]);
  });
} }), Qr = K({ itemHeight: { type: [Number, String], default: null }, height: [Number, String] }, "virtual");
function es(e, l) {
  const n = ti(), t = ie(0);
  Ue(() => {
    t.value = parseFloat(e.itemHeight || 0);
  });
  const a = ie(0), i = ie(Math.ceil((parseInt(e.height) || n.height.value) / (t.value || 16)) || 1), c = ie(0), s = ie(0), o = W(), u = W();
  let m = 0;
  const { resizeRef: y, contentRect: p } = Wt();
  Ue(() => {
    y.value = o.value;
  });
  const f = v(() => {
    var B;
    return o.value === document.documentElement ? n.height.value : ((B = p.value) == null ? void 0 : B.height) || parseInt(e.height) || 0;
  }), g = v(() => !!(o.value && u.value && f.value && t.value));
  let h = Array.from({ length: l.value.length }), b = Array.from({ length: l.value.length });
  const S = ie(0);
  let O = -1;
  function P(B) {
    return h[B] || t.value;
  }
  const R = function(B, D) {
    let L = 0;
    const q = function() {
      for (var H = arguments.length, T = new Array(H), M = 0; M < H; M++)
        T[M] = arguments[M];
      clearTimeout(L), L = setTimeout(() => B(...T), r(D));
    };
    return q.clear = () => {
      clearTimeout(L);
    }, q.immediate = B, q;
  }(() => {
    const B = performance.now();
    b[0] = 0;
    const D = l.value.length;
    for (let L = 1; L <= D - 1; L++)
      b[L] = (b[L - 1] || 0) + P(L - 1);
    S.value = Math.max(S.value, performance.now() - B);
  }, S), w = J(g, (B) => {
    B && (w(), m = u.value.offsetTop, R.immediate(), F(), ~O && xe(() => {
      ze && window.requestAnimationFrame(() => {
        U(O), O = -1;
      });
    }));
  });
  function E(B) {
    return B = Nn(B, 0, l.value.length - 1), b[B] || 0;
  }
  function j(B) {
    return function(D, L) {
      let q = D.length - 1, H = 0, T = 0, M = null, Y = -1;
      if (D[q] < L)
        return q;
      for (; H <= q; )
        if (T = H + q >> 1, M = D[T], M > L)
          q = T - 1;
        else {
          if (!(M < L))
            return M === L ? T : H;
          Y = T, H = T + 1;
        }
      return Y;
    }(b, B);
  }
  J(f, (B, D) => {
    D && F();
  }), Te(() => {
    R.clear();
  });
  let z = 0, C = 0, V = 0, I = -1;
  function F() {
    cancelAnimationFrame(I), I = requestAnimationFrame(_);
  }
  function _() {
    if (!o.value || !f.value)
      return;
    const B = z - m, D = Math.sign(C), L = Nn(j(Math.max(0, B - 100)), 0, l.value.length), q = Nn(j(B + f.value + 100) + 1, L + 1, l.value.length);
    if ((D !== -1 || L < a.value) && (D !== 1 || q > i.value)) {
      const H = E(a.value) - E(L), T = E(q) - E(i.value);
      Math.max(H, T) > 100 ? (a.value = L, i.value = q) : (L <= 0 && (a.value = L), q >= l.value.length && (i.value = q));
    }
    c.value = E(a.value), s.value = E(l.value.length) - E(i.value);
  }
  function U(B) {
    const D = E(B);
    !o.value || B && !D ? O = B : o.value.scrollTop = D;
  }
  const G = v(() => l.value.slice(a.value, i.value).map((B, D) => ({ raw: B, index: D + a.value })));
  return J(l, () => {
    h = Array.from({ length: l.value.length }), b = Array.from({ length: l.value.length }), R.immediate(), F();
  }, { deep: !0 }), { containerRef: o, markerRef: u, computedItems: G, paddingTop: c, paddingBottom: s, scrollToIndex: U, handleScroll: function() {
    if (!o.value || !u.value)
      return;
    const B = o.value.scrollTop, D = performance.now();
    D - V > 500 ? (C = Math.sign(B - z), m = u.value.offsetTop) : C = B - z, z = B, V = D, F();
  }, handleScrollend: function() {
    o.value && u.value && (C = 0, V = 0, F());
  }, handleItemResize: function(B, D) {
    const L = h[B], q = t.value;
    t.value = q ? Math.min(t.value, D) : D, L === D && q === t.value || (h[B] = D, R());
  } };
}
const ns = K({ items: { type: Array, default: () => [] }, renderless: Boolean, ...Qr(), ...de(), ...Dn() }, "VVirtualScroll"), ci = ne()({ name: "VVirtualScroll", props: ns(), setup(e, l) {
  let { slots: n } = l;
  const t = _e("VVirtualScroll"), { dimensionStyles: a } = Ln(e), { containerRef: i, markerRef: c, handleScroll: s, handleScrollend: o, handleItemResize: u, scrollToIndex: m, paddingTop: y, paddingBottom: p, computedItems: f } = es(e, le(e, "items"));
  return Fn(() => e.renderless, () => {
    function g() {
      var b, S;
      const h = arguments.length > 0 && arguments[0] !== void 0 && arguments[0] ? "addEventListener" : "removeEventListener";
      i.value === document.documentElement ? (document[h]("scroll", s, { passive: !0 }), document[h]("scrollend", o)) : ((b = i.value) == null || b[h]("scroll", s, { passive: !0 }), (S = i.value) == null || S[h]("scrollend", o));
    }
    Xn(() => {
      i.value = da(t.vnode.el, !0), g(!0);
    }), Te(g);
  }), ue(() => {
    const g = f.value.map((h) => d(Zr, { key: h.index, renderless: e.renderless, "onUpdate:height": (b) => u(h.index, b) }, { default: (b) => {
      var S;
      return (S = n.default) == null ? void 0 : S.call(n, { item: h.raw, index: h.index, ...b });
    } }));
    return e.renderless ? d(fe, null, [d("div", { ref: c, class: "v-virtual-scroll__spacer", style: { paddingTop: te(y.value) } }, null), g, d("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: te(p.value) } }, null)]) : d("div", { ref: i, class: ["v-virtual-scroll", e.class], onScrollPassive: s, onScrollend: o, style: [a.value, e.style] }, [d("div", { ref: c, class: "v-virtual-scroll__container", style: { paddingTop: te(y.value), paddingBottom: te(p.value) } }, [g])]);
  }), { scrollToIndex: m };
} });
function di(e, l) {
  const n = ie(!1);
  let t;
  return { onListScroll: function(a) {
    cancelAnimationFrame(t), n.value = !0, t = requestAnimationFrame(() => {
      t = requestAnimationFrame(() => {
        n.value = !1;
      });
    });
  }, onListKeydown: async function(a) {
    var s, o;
    if (a.key === "Tab" && ((s = l.value) == null || s.focus()), !["PageDown", "PageUp", "Home", "End"].includes(a.key))
      return;
    const i = (o = e.value) == null ? void 0 : o.$el;
    if (!i)
      return;
    a.key !== "Home" && a.key !== "End" || i.scrollTo({ top: a.key === "Home" ? 0 : i.scrollHeight, behavior: "smooth" }), await async function() {
      await new Promise((u) => requestAnimationFrame(u)), await new Promise((u) => requestAnimationFrame(u)), await new Promise((u) => requestAnimationFrame(u)), await new Promise((u) => {
        if (n.value) {
          const m = J(n, () => {
            m(), u();
          });
        } else
          u();
      });
    }();
    const c = i.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (a.key === "PageDown" || a.key === "Home") {
      const u = i.getBoundingClientRect().top;
      for (const m of c)
        if (m.getBoundingClientRect().top >= u) {
          m.focus();
          break;
        }
    } else {
      const u = i.getBoundingClientRect().bottom;
      for (const m of [...c].reverse())
        if (m.getBoundingClientRect().bottom <= u) {
          m.focus();
          break;
        }
    }
  } };
}
const pi = K({ chips: Boolean, closableChips: Boolean, closeText: { type: String, default: "$vuetify.close" }, openText: { type: String, default: "$vuetify.open" }, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, menu: Boolean, menuIcon: { type: ye, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, itemColor: String, ...Ja({ itemChildren: !1 }) }, "Select"), ls = K({ ...pi(), ...hn(Xt({ modelValue: null, role: "button" }), ["validationValue", "dirty", "appendInnerIcon"]), ...Zn({ transition: { component: ya } }) }, "VSelect"), ts = ne()({ name: "VSelect", props: ls(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:menu": (e) => !0 }, setup(e, l) {
  let { slots: n } = l;
  const { t } = et(), a = W(), i = W(), c = W(), s = be(e, "menu"), o = v({ get: () => s.value, set: (B) => {
    var D;
    s.value && !B && ((D = i.value) != null && D.ΨopenChildren) || (s.value = B);
  } }), { items: u, transformIn: m, transformOut: y } = Qa(e), p = be(e, "modelValue", [], (B) => m(B === null ? [null] : je(B)), (B) => {
    const D = y(B);
    return e.multiple ? D : D[0] ?? null;
  }), f = Ht(), g = v(() => p.value.map((B) => B.value)), h = ie(!1), b = v(() => o.value ? e.closeText : e.openText);
  let S, O = "";
  const P = v(() => e.hideSelected ? u.value.filter((B) => !p.value.some((D) => D === B)) : u.value), R = v(() => e.hideNoData && !u.value.length || e.readonly || (f == null ? void 0 : f.isReadonly.value)), w = W(), { onListScroll: E, onListKeydown: j } = di(w, a);
  function z(B) {
    e.openOnClear && (o.value = !0);
  }
  function C() {
    R.value || (o.value = !o.value);
  }
  function V(B) {
    var q, H;
    if (!B.key || e.readonly || f != null && f.isReadonly.value || (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(B.key) && B.preventDefault(), ["Enter", "ArrowDown", " "].includes(B.key) && (o.value = !0), ["Escape", "Tab"].includes(B.key) && (o.value = !1), B.key === "Home" ? (q = w.value) == null || q.focus("first") : B.key === "End" && ((H = w.value) == null || H.focus("last")), e.multiple || !function(T) {
      const M = T.key.length === 1, Y = !T.ctrlKey && !T.metaKey && !T.altKey;
      return M && Y;
    }(B)))
      return;
    const D = performance.now();
    D - S > 1e3 && (O = ""), O += B.key.toLowerCase(), S = D;
    const L = u.value.find((T) => T.title.toLowerCase().startsWith(O));
    L !== void 0 && (p.value = [L]);
  }
  function I(B) {
    if (e.multiple) {
      const D = p.value.findIndex((L) => e.valueComparator(L.value, B.value));
      if (D === -1)
        p.value = [...p.value, B];
      else {
        const L = [...p.value];
        L.splice(D, 1), p.value = L;
      }
    } else
      p.value = [B], o.value = !1;
  }
  function F(B) {
    var D;
    (D = w.value) != null && D.$el.contains(B.relatedTarget) || (o.value = !1);
  }
  function _() {
    var B;
    h.value && ((B = a.value) == null || B.focus());
  }
  function U(B) {
    h.value = !0;
  }
  function G(B) {
    if (B == null)
      p.value = [];
    else if (Un(a.value, ":autofill") || Un(a.value, ":-webkit-autofill")) {
      const D = u.value.find((L) => L.title === B);
      D && I(D);
    } else
      a.value && (a.value.value = "");
  }
  return J(o, () => {
    if (!e.hideSelected && o.value && p.value.length) {
      const B = P.value.findIndex((D) => p.value.some((L) => e.valueComparator(L.value, D.value)));
      ze && window.requestAnimationFrame(() => {
        var D;
        B >= 0 && ((D = c.value) == null || D.scrollToIndex(B));
      });
    }
  }), ue(() => {
    const B = !(!e.chips && !n.chip), D = !!(!e.hideNoData || P.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), L = p.value.length > 0, q = fl.filterProps(e), H = L || !h.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
    return d(fl, Q({ ref: a }, q, { modelValue: p.value.map((T) => T.props.value).join(", "), "onUpdate:modelValue": G, focused: h.value, "onUpdate:focused": (T) => h.value = T, validationValue: p.externalValue, counterValue: p.value.length, dirty: L, class: ["v-select", { "v-select--active-menu": o.value, "v-select--chips": !!e.chips, ["v-select--" + (e.multiple ? "multiple" : "single")]: !0, "v-select--selected": p.value.length, "v-select--selection-slot": !!n.selection }, e.class], style: e.style, inputmode: "none", placeholder: H, "onClick:clear": z, "onMousedown:control": C, onBlur: F, onKeydown: V, "aria-label": t(b.value), title: t(b.value) }), { ...n, default: () => d(fe, null, [d(ri, Q({ ref: i, modelValue: o.value, "onUpdate:modelValue": (T) => o.value = T, activator: "parent", contentClass: "v-select__content", disabled: R.value, eager: e.eager, maxHeight: 310, openOnClick: !1, closeOnContentClick: !1, transition: e.transition, onAfterLeave: _ }, e.menuProps), { default: () => [D && d(ni, { ref: w, selected: g.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (T) => T.preventDefault(), onKeydown: j, onFocusin: U, onScrollPassive: E, tabindex: "-1", color: e.itemColor ?? e.color }, { default: () => {
      var T, M, Y;
      return [(T = n["prepend-item"]) == null ? void 0 : T.call(n), !P.value.length && !e.hideNoData && (((M = n["no-data"]) == null ? void 0 : M.call(n)) ?? d(Hn, { title: t(e.noDataText) }, null)), d(ci, { ref: c, renderless: !0, items: P.value }, { default: (x) => {
        var X;
        let { item: k, index: $, itemRef: N } = x;
        const A = Q(k.props, { ref: N, key: $, onClick: () => I(k) });
        return ((X = n.item) == null ? void 0 : X.call(n, { item: k, index: $, props: A })) ?? d(Hn, A, { prepend: (re) => {
          let { isSelected: Ie } = re;
          return d(fe, null, [e.multiple && !e.hideSelected ? d(Yl, { key: k.value, modelValue: Ie, ripple: !1, tabindex: "-1" }, null) : void 0, k.props.prependIcon && d(ve, { icon: k.props.prependIcon }, null)]);
        } });
      } }), (Y = n["append-item"]) == null ? void 0 : Y.call(n)];
    } })] }), p.value.map((T, M) => {
      const Y = { "onClick:close": function($) {
        $.stopPropagation(), $.preventDefault(), I(T);
      }, onMousedown($) {
        $.preventDefault(), $.stopPropagation();
      }, modelValue: !0, "onUpdate:modelValue": void 0 }, x = B ? !!n.chip : !!n.selection, k = x ? Et(B ? n.chip({ item: T, index: M, props: Y }) : n.selection({ item: T, index: M })) : void 0;
      if (!x || k)
        return d("div", { key: T.value, class: "v-select__selection" }, [B ? n.chip ? d(Ve, { key: "chip-defaults", defaults: { VChip: { closable: e.closableChips, size: "small", text: T.title } } }, { default: () => [k] }) : d(Ua, Q({ key: "chip", closable: e.closableChips, size: "small", text: T.title, disabled: T.props.disabled }, Y), null) : k ?? d("span", { class: "v-select__selection-text" }, [T.title, e.multiple && M < p.value.length - 1 && d("span", { class: "v-select__selection-comma" }, [Vt(",")])])]);
    })]), "append-inner": function() {
      var x;
      for (var T = arguments.length, M = new Array(T), Y = 0; Y < T; Y++)
        M[Y] = arguments[Y];
      return d(fe, null, [(x = n["append-inner"]) == null ? void 0 : x.call(n, ...M), e.menuIcon ? d(ve, { class: "v-select__menu-icon", icon: e.menuIcon }, null) : void 0]);
    } });
  }), _l({ isFocused: h, menu: o, select: I }, a);
} }), os = (e, l, n) => e == null || l == null ? -1 : e.toString().toLocaleLowerCase().indexOf(l.toString().toLocaleLowerCase()), as = K({ customFilter: Function, customKeyFilter: Object, filterKeys: [Array, String], filterMode: { type: String, default: "intersection" }, noFilter: Boolean }, "filter");
function is(e, l, n, t) {
  const a = W([]), i = W(/* @__PURE__ */ new Map()), c = v(() => t != null && t.transform ? r(l).map((s) => [s, t.transform(s)]) : r(l));
  return Ue(() => {
    const s = typeof n == "function" ? n() : r(n), o = typeof s != "string" && typeof s != "number" ? "" : String(s), u = function(f, g, h) {
      var R;
      const b = [], S = (h == null ? void 0 : h.default) ?? os, O = !!(h != null && h.filterKeys) && je(h.filterKeys), P = Object.keys((h == null ? void 0 : h.customKeyFilter) ?? {}).length;
      if (!(f != null && f.length))
        return b;
      e:
        for (let w = 0; w < f.length; w++) {
          const [E, j = E] = je(f[w]), z = {}, C = {};
          let V = -1;
          if (g && !(h != null && h.noFilter)) {
            if (typeof E == "object") {
              const _ = O || Object.keys(j);
              for (const U of _) {
                const G = Ze(j, U, j), B = (R = h == null ? void 0 : h.customKeyFilter) == null ? void 0 : R[U];
                if (V = B ? B(G, g, E) : S(G, g, E), V !== -1 && V !== !1)
                  B ? z[U] = V : C[U] = V;
                else if ((h == null ? void 0 : h.filterMode) === "every")
                  continue e;
              }
            } else
              V = S(E, g, E), V !== -1 && V !== !1 && (C.title = V);
            const I = Object.keys(C).length, F = Object.keys(z).length;
            if (!I && !F || (h == null ? void 0 : h.filterMode) === "union" && F !== P && !I || (h == null ? void 0 : h.filterMode) === "intersection" && (F !== P || !I))
              continue;
          }
          b.push({ index: w, matches: { ...C, ...z } });
        }
      return b;
    }(c.value, o, { customKeyFilter: { ...e.customKeyFilter, ...r(t == null ? void 0 : t.customKeyFilter) }, default: e.customFilter, filterKeys: e.filterKeys, filterMode: e.filterMode, noFilter: e.noFilter }), m = r(l), y = [], p = /* @__PURE__ */ new Map();
    u.forEach((f) => {
      let { index: g, matches: h } = f;
      const b = m[g];
      y.push(b), p.set(b.value, h);
    }), a.value = y, i.value = p;
  }), { filteredItems: a, filteredMatches: i, getMatches: function(s) {
    return i.value.get(s.value);
  } };
}
const rs = K({ autoSelectFirst: { type: [Boolean, String] }, search: String, ...as({ filterKeys: ["title"] }), ...pi(), ...hn(Xt({ modelValue: null, role: "combobox" }), ["validationValue", "dirty", "appendInnerIcon"]), ...Zn({ transition: !1 }) }, "VAutocomplete"), ss = ne()({ name: "VAutocomplete", props: rs(), emits: { "update:focused": (e) => !0, "update:search": (e) => !0, "update:modelValue": (e) => !0, "update:menu": (e) => !0 }, setup(e, l) {
  let { slots: n } = l;
  const { t } = et(), a = W(), i = ie(!1), c = ie(!0), s = ie(!1), o = W(), u = W(), m = be(e, "menu"), y = v({ get: () => m.value, set: (A) => {
    var X;
    m.value && !A && ((X = o.value) != null && X.ΨopenChildren) || (m.value = A);
  } }), p = ie(-1), f = v(() => {
    var A;
    return (A = a.value) == null ? void 0 : A.color;
  }), g = v(() => y.value ? e.closeText : e.openText), { items: h, transformIn: b, transformOut: S } = Qa(e), { textColorClasses: O, textColorStyles: P } = en(f), R = be(e, "search", ""), w = be(e, "modelValue", [], (A) => b(A === null ? [null] : je(A)), (A) => {
    const X = S(A);
    return e.multiple ? X : X[0] ?? null;
  }), E = Ht(), { filteredItems: j, getMatches: z } = is(e, h, () => c.value ? "" : R.value), C = v(() => e.hideSelected ? j.value.filter((A) => !w.value.some((X) => X.value === A.value)) : j.value), V = v(() => w.value.map((A) => A.props.value)), I = v(() => {
    var A;
    return (e.autoSelectFirst === !0 || e.autoSelectFirst === "exact" && R.value === ((A = C.value[0]) == null ? void 0 : A.title)) && C.value.length > 0 && !c.value && !s.value;
  }), F = v(() => e.hideNoData && !h.value.length || e.readonly || (E == null ? void 0 : E.isReadonly.value)), _ = W(), { onListScroll: U, onListKeydown: G } = di(_, a);
  function B(A) {
    e.openOnClear && (y.value = !0), R.value = "";
  }
  function D() {
    F.value || (y.value = !0);
  }
  function L(A) {
    F.value || (i.value && (A.preventDefault(), A.stopPropagation()), y.value = !y.value);
  }
  function q(A) {
    var Ie, oe, Fe;
    if (e.readonly || E != null && E.isReadonly.value)
      return;
    const X = a.value.selectionStart, re = w.value.length;
    if ((p.value > -1 || ["Enter", "ArrowDown", "ArrowUp"].includes(A.key)) && A.preventDefault(), ["Enter", "ArrowDown"].includes(A.key) && (y.value = !0), ["Escape"].includes(A.key) && (y.value = !1), I.value && ["Enter", "Tab"].includes(A.key) && N(C.value[0]), A.key === "ArrowDown" && I.value && ((Ie = _.value) == null || Ie.focus("next")), e.multiple) {
      if (["Backspace", "Delete"].includes(A.key)) {
        if (p.value < 0)
          return void (A.key !== "Backspace" || R.value || (p.value = re - 1));
        const ge = p.value, ke = w.value[p.value];
        ke && !ke.props.disabled && N(ke), p.value = ge >= re - 1 ? re - 2 : ge;
      }
      if (A.key === "ArrowLeft") {
        if (p.value < 0 && X > 0)
          return;
        const ge = p.value > -1 ? p.value - 1 : re - 1;
        w.value[ge] ? p.value = ge : (p.value = -1, a.value.setSelectionRange((oe = R.value) == null ? void 0 : oe.length, (Fe = R.value) == null ? void 0 : Fe.length));
      }
      if (A.key === "ArrowRight") {
        if (p.value < 0)
          return;
        const ge = p.value + 1;
        w.value[ge] ? p.value = ge : (p.value = -1, a.value.setSelectionRange(0, 0));
      }
    }
  }
  function H(A) {
    R.value = A.target.value;
  }
  function T(A) {
    if (Un(a.value, ":autofill") || Un(a.value, ":-webkit-autofill")) {
      const X = h.value.find((re) => re.title === A.target.value);
      X && N(X);
    }
  }
  function M() {
    var A;
    i.value && (c.value = !0, (A = a.value) == null || A.focus());
  }
  function Y(A) {
    i.value = !0, setTimeout(() => {
      s.value = !0;
    });
  }
  function x(A) {
    s.value = !1;
  }
  function k(A) {
    (A == null || A === "" && !e.multiple) && (w.value = []);
  }
  const $ = ie(!1);
  function N(A) {
    if (e.multiple) {
      const X = w.value.findIndex((re) => e.valueComparator(re.value, A.value));
      if (X === -1)
        w.value = [...w.value, A];
      else {
        const re = [...w.value];
        re.splice(X, 1), w.value = re;
      }
    } else
      w.value = [A], $.value = !0, R.value = A.title, y.value = !1, c.value = !0, xe(() => $.value = !1);
  }
  return J(i, (A, X) => {
    var re;
    A !== X && (A ? ($.value = !0, R.value = e.multiple ? "" : String(((re = w.value.at(-1)) == null ? void 0 : re.props.title) ?? ""), c.value = !0, xe(() => $.value = !1)) : (e.multiple || R.value ? !I.value || s.value || w.value.some((Ie) => {
      let { value: oe } = Ie;
      return oe === C.value[0].value;
    }) || N(C.value[0]) : w.value = [], y.value = !1, R.value = "", p.value = -1));
  }), J(R, (A) => {
    i.value && !$.value && (A && (y.value = !0), c.value = !A);
  }), J(y, () => {
    if (!e.hideSelected && y.value && w.value.length) {
      const A = C.value.findIndex((X) => w.value.some((re) => X.value === re.value));
      ze && window.requestAnimationFrame(() => {
        var X;
        A >= 0 && ((X = u.value) == null || X.scrollToIndex(A));
      });
    }
  }), ue(() => {
    const A = !(!e.chips && !n.chip), X = !!(!e.hideNoData || C.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), re = w.value.length > 0, Ie = fl.filterProps(e);
    return d(fl, Q({ ref: a }, Ie, { modelValue: R.value, "onUpdate:modelValue": k, focused: i.value, "onUpdate:focused": (oe) => i.value = oe, validationValue: w.externalValue, counterValue: w.value.length, dirty: re, onInput: H, onChange: T, class: ["v-autocomplete", "v-autocomplete--" + (e.multiple ? "multiple" : "single"), { "v-autocomplete--active-menu": y.value, "v-autocomplete--chips": !!e.chips, "v-autocomplete--selection-slot": !!n.selection, "v-autocomplete--selecting-index": p.value > -1 }, e.class], style: e.style, readonly: e.readonly, placeholder: re ? void 0 : e.placeholder, "onClick:clear": B, "onMousedown:control": D, onKeydown: q }), { ...n, default: () => d(fe, null, [d(ri, Q({ ref: o, modelValue: y.value, "onUpdate:modelValue": (oe) => y.value = oe, activator: "parent", contentClass: "v-autocomplete__content", disabled: F.value, eager: e.eager, maxHeight: 310, openOnClick: !1, closeOnContentClick: !1, transition: e.transition, onAfterLeave: M }, e.menuProps), { default: () => [X && d(ni, { ref: _, selected: V.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (oe) => oe.preventDefault(), onKeydown: G, onFocusin: Y, onFocusout: x, onScrollPassive: U, tabindex: "-1", color: e.itemColor ?? e.color }, { default: () => {
      var oe, Fe, ge;
      return [(oe = n["prepend-item"]) == null ? void 0 : oe.call(n), !C.value.length && !e.hideNoData && (((Fe = n["no-data"]) == null ? void 0 : Fe.call(n)) ?? d(Hn, { title: t(e.noDataText) }, null)), d(ci, { ref: u, renderless: !0, items: C.value }, { default: (ke) => {
        var eo;
        let { item: Pe, index: He, itemRef: gi } = ke;
        const Qt = Q(Pe.props, { ref: gi, key: He, active: !(!I.value || He !== 0) || void 0, onClick: () => N(Pe) });
        return ((eo = n.item) == null ? void 0 : eo.call(n, { item: Pe, index: He, props: Qt })) ?? d(Hn, Qt, { prepend: (Ol) => {
          let { isSelected: Pl } = Ol;
          return d(fe, null, [e.multiple && !e.hideSelected ? d(Yl, { key: Pe.value, modelValue: Pl, ripple: !1, tabindex: "-1" }, null) : void 0, Pe.props.prependIcon && d(ve, { icon: Pe.props.prependIcon }, null)]);
        }, title: () => {
          var Ol, Pl;
          return c.value ? Pe.title : function(tl, In, no) {
            if (In == null)
              return tl;
            if (Array.isArray(In))
              throw new Error("Multiple matches is not implemented");
            return typeof In == "number" && ~In ? d(fe, null, [d("span", { class: "v-autocomplete__unmask" }, [tl.substr(0, In)]), d("span", { class: "v-autocomplete__mask" }, [tl.substr(In, no)]), d("span", { class: "v-autocomplete__unmask" }, [tl.substr(In + no)])]) : tl;
          }(Pe.title, (Ol = z(Pe)) == null ? void 0 : Ol.title, ((Pl = R.value) == null ? void 0 : Pl.length) ?? 0);
        } });
      } }), (ge = n["append-item"]) == null ? void 0 : ge.call(n)];
    } })] }), w.value.map((oe, Fe) => {
      const ge = { "onClick:close": function(He) {
        He.stopPropagation(), He.preventDefault(), N(oe);
      }, onMousedown(He) {
        He.preventDefault(), He.stopPropagation();
      }, modelValue: !0, "onUpdate:modelValue": void 0 }, ke = A ? !!n.chip : !!n.selection, Pe = ke ? Et(A ? n.chip({ item: oe, index: Fe, props: ge }) : n.selection({ item: oe, index: Fe })) : void 0;
      if (!ke || Pe)
        return d("div", { key: oe.value, class: ["v-autocomplete__selection", Fe === p.value && ["v-autocomplete__selection--selected", O.value]], style: Fe === p.value ? P.value : {} }, [A ? n.chip ? d(Ve, { key: "chip-defaults", defaults: { VChip: { closable: e.closableChips, size: "small", text: oe.title } } }, { default: () => [Pe] }) : d(Ua, Q({ key: "chip", closable: e.closableChips, size: "small", text: oe.title, disabled: oe.props.disabled }, ge), null) : Pe ?? d("span", { class: "v-autocomplete__selection-text" }, [oe.title, e.multiple && Fe < w.value.length - 1 && d("span", { class: "v-autocomplete__selection-comma" }, [Vt(",")])])]);
    })]), "append-inner": function() {
      var ke;
      for (var oe = arguments.length, Fe = new Array(oe), ge = 0; ge < oe; ge++)
        Fe[ge] = arguments[ge];
      return d(fe, null, [(ke = n["append-inner"]) == null ? void 0 : ke.call(n, ...Fe), e.menuIcon ? d(ve, { class: "v-autocomplete__menu-icon", icon: e.menuIcon, onMousedown: L, onClick: Pi, "aria-label": t(g.value), title: t(g.value) }, null) : void 0]);
    } });
  }), _l({ isFocused: i, isPristine: c, menu: y, search: R, filteredItems: j, select: N }, a);
} }), us = ne()({ name: "VCardActions", props: de(), setup(e, l) {
  let { slots: n } = l;
  return Jn({ VBtn: { slim: !0, variant: "text" } }), ue(() => {
    var t;
    return d("div", { class: ["v-card-actions", e.class], style: e.style }, [(t = n.default) == null ? void 0 : t.call(n)]);
  }), {};
} }), cs = Cl("v-card-subtitle"), ds = Cl("v-card-title"), ps = K({ appendAvatar: String, appendIcon: ye, prependAvatar: String, prependIcon: ye, subtitle: String, title: String, ...de(), ...ln() }, "VCardItem"), vs = ne()({ name: "VCardItem", props: ps(), setup(e, l) {
  let { slots: n } = l;
  return ue(() => {
    var u;
    const t = !(!e.prependAvatar && !e.prependIcon), a = !(!t && !n.prepend), i = !(!e.appendAvatar && !e.appendIcon), c = !(!i && !n.append), s = !(!e.title && !n.title), o = !(!e.subtitle && !n.subtitle);
    return d("div", { class: ["v-card-item", e.class], style: e.style }, [a && d("div", { key: "prepend", class: "v-card-item__prepend" }, [n.prepend ? d(Ve, { key: "prepend-defaults", disabled: !t, defaults: { VAvatar: { density: e.density, icon: e.prependIcon, image: e.prependAvatar } } }, n.prepend) : t && d(qn, { key: "prepend-avatar", density: e.density, icon: e.prependIcon, image: e.prependAvatar }, null)]), d("div", { class: "v-card-item__content" }, [s && d(ds, { key: "title" }, { default: () => {
      var m;
      return [((m = n.title) == null ? void 0 : m.call(n)) ?? e.title];
    } }), o && d(cs, { key: "subtitle" }, { default: () => {
      var m;
      return [((m = n.subtitle) == null ? void 0 : m.call(n)) ?? e.subtitle];
    } }), (u = n.default) == null ? void 0 : u.call(n)]), c && d("div", { key: "append", class: "v-card-item__append" }, [n.append ? d(Ve, { key: "append-defaults", disabled: !i, defaults: { VAvatar: { density: e.density, icon: e.appendIcon, image: e.appendAvatar } } }, n.append) : i && d(qn, { key: "append-avatar", density: e.density, icon: e.appendIcon, image: e.appendAvatar }, null)])]);
  }), {};
} }), yn = Cl("v-card-text"), fs = K({ appendAvatar: String, appendIcon: ye, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: ye, ripple: { type: [Boolean, Object], default: !0 }, subtitle: String, text: String, title: String, ...Qn(), ...de(), ...ln(), ...Dn(), ...nl(), ...Ut(), ...Nt(), ...Aa(), ...an(), ...tt(), ...Me(), ...Oe(), ...bn({ variant: "elevated" }) }, "VCard"), An = ne()({ name: "VCard", directives: { Ripple: Fl }, props: fs(), setup(e, l) {
  let { attrs: n, slots: t } = l;
  const { themeClasses: a } = De(e), { borderClasses: i } = el(e), { colorClasses: c, colorStyles: s, variantClasses: o } = xl(e), { densityClasses: u } = sn(e), { dimensionStyles: m } = Ln(e), { elevationClasses: y } = ll(e), { loaderClasses: p } = nt(e), { locationStyles: f } = jt(e), { positionClasses: g } = Va(e), { roundedClasses: h } = rn(e), b = lt(e, n), S = v(() => e.link !== !1 && b.isLink.value), O = v(() => !e.disabled && e.link !== !1 && (e.link || b.isClickable.value));
  return ue(() => {
    const P = S.value ? "a" : e.tag, R = !(!t.title && !e.title), w = !(!t.subtitle && !e.subtitle), E = R || w, j = !!(t.append || e.appendAvatar || e.appendIcon), z = !!(t.prepend || e.prependAvatar || e.prependIcon), C = !(!t.image && !e.image), V = E || z || j, I = !(!t.text && !e.text);
    return Ee(d(P, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": O.value }, a.value, i.value, c.value, u.value, y.value, p.value, g.value, h.value, o.value, e.class], style: [s.value, m.value, f.value, e.style], href: b.href.value, onClick: O.value && b.navigate, tabindex: e.disabled ? -1 : void 0 }, { default: () => {
      var F;
      return [C && d("div", { key: "image", class: "v-card__image" }, [t.image ? d(Ve, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: !0, src: e.image } } }, t.image) : d(ba, { key: "image-img", cover: !0, src: e.image }, null)]), d(Gt, { name: "v-card", active: !!e.loading, color: typeof e.loading == "boolean" ? void 0 : e.loading }, { default: t.loader }), V && d(vs, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: t.item, prepend: t.prepend, title: t.title, subtitle: t.subtitle, append: t.append }), I && d(yn, { key: "text" }, { default: () => {
        var _;
        return [((_ = t.text) == null ? void 0 : _.call(t)) ?? e.text];
      } }), (F = t.default) == null ? void 0 : F.call(t), t.actions && d(us, null, { default: t.actions }), Bl(O.value, "v-card")];
    } }), [[on("ripple"), O.value && e.ripple]]);
  }), {};
} }), ys = K({ indeterminate: Boolean, inset: Boolean, flat: Boolean, loading: { type: [Boolean, String], default: !1 }, ...Vl(), ...qt() }, "VSwitch"), ms = ne()({ name: "VSwitch", inheritAttrs: !1, props: ys(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, l) {
  let { attrs: n, slots: t } = l;
  const a = be(e, "indeterminate"), i = be(e, "modelValue"), { loaderClasses: c } = nt(e), { isFocused: s, focus: o, blur: u } = Al(e), m = W(), y = v(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), p = Je(), f = v(() => e.id || `switch-${p}`);
  function g() {
    a.value && (a.value = !1);
  }
  function h(b) {
    var S, O;
    b.stopPropagation(), b.preventDefault(), (O = (S = m.value) == null ? void 0 : S.input) == null || O.click();
  }
  return ue(() => {
    const [b, S] = Il(n), O = gn.filterProps(e), P = Kl.filterProps(e);
    return d(gn, Q({ class: ["v-switch", { "v-switch--inset": e.inset }, { "v-switch--indeterminate": a.value }, c.value, e.class] }, b, O, { modelValue: i.value, "onUpdate:modelValue": (R) => i.value = R, id: f.value, focused: s.value, style: e.style }), { ...t, default: (R) => {
      let { id: w, messagesId: E, isDisabled: j, isReadonly: z, isValid: C } = R;
      return d(Kl, Q({ ref: m }, P, { modelValue: i.value, "onUpdate:modelValue": [(V) => i.value = V, g], id: w.value, "aria-describedby": E.value, type: "checkbox", "aria-checked": a.value ? "mixed" : void 0, disabled: j.value, readonly: z.value, onFocus: o, onBlur: u }, S), { ...t, default: (V) => {
        let { backgroundColorClasses: I, backgroundColorStyles: F } = V;
        return d("div", { class: ["v-switch__track", ...I.value], style: F.value, onClick: h }, null);
      }, input: (V) => {
        let { inputNode: I, icon: F, backgroundColorClasses: _, backgroundColorStyles: U } = V;
        return d(fe, null, [I, d("div", { class: ["v-switch__thumb", { "v-switch__thumb--filled": F || e.loading }, e.inset ? void 0 : _.value], style: e.inset ? void 0 : U.value }, [d(qi, null, { default: () => [e.loading ? d(Gt, { name: "v-switch", active: !0, color: C.value === !1 ? void 0 : y.value }, { default: (G) => t.loader ? t.loader(G) : d(Fa, { active: G.isActive, color: G.color, indeterminate: !0, size: "16", width: "2" }, null) }) : F && d(ve, { key: F, icon: F, size: "x-small" }, null)] })])]);
      } });
    } });
  }), {};
} }), gs = K({ autoGrow: Boolean, autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, noResize: Boolean, rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) }, maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, suffix: String, modelModifiers: Object, ...Vl(), ...Kt() }, "VTextarea"), hs = ne()({ name: "VTextarea", directives: { Intersect: Mt }, inheritAttrs: !1, props: gs(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: n, emit: t, slots: a } = l;
  const i = be(e, "modelValue"), { isFocused: c, focus: s, blur: o } = Al(e), u = v(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : (i.value || "").toString().length), m = v(() => n.maxlength ? n.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter);
  function y(I, F) {
    var _, U;
    e.autofocus && I && ((U = (_ = F[0].target) == null ? void 0 : _.focus) == null || U.call(_));
  }
  const p = W(), f = W(), g = ie(""), h = W(), b = v(() => e.persistentPlaceholder || c.value || e.active);
  function S() {
    var I;
    h.value !== document.activeElement && ((I = h.value) == null || I.focus()), c.value || s();
  }
  function O(I) {
    S(), t("click:control", I);
  }
  function P(I) {
    t("mousedown:control", I);
  }
  function R(I) {
    I.stopPropagation(), S(), xe(() => {
      i.value = "", oa(e["onClick:clear"], I);
    });
  }
  function w(I) {
    var _;
    const F = I.target;
    if (i.value = F.value, (_ = e.modelModifiers) == null ? void 0 : _.trim) {
      const U = [F.selectionStart, F.selectionEnd];
      xe(() => {
        F.selectionStart = U[0], F.selectionEnd = U[1];
      });
    }
  }
  const E = W(), j = W(+e.rows), z = v(() => ["plain", "underlined"].includes(e.variant));
  function C() {
    e.autoGrow && xe(() => {
      if (!E.value || !f.value)
        return;
      const I = getComputedStyle(E.value), F = getComputedStyle(f.value.$el), _ = parseFloat(I.getPropertyValue("--v-field-padding-top")) + parseFloat(I.getPropertyValue("--v-input-padding-top")) + parseFloat(I.getPropertyValue("--v-field-padding-bottom")), U = E.value.scrollHeight, G = parseFloat(I.lineHeight), B = Nn(U ?? 0, Math.max(parseFloat(e.rows) * G + _, parseFloat(F.getPropertyValue("--v-input-control-height"))), parseFloat(e.maxRows) * G + _ || 1 / 0);
      j.value = Math.floor((B - _) / G), g.value = te(B);
    });
  }
  let V;
  return Ue(() => {
    e.autoGrow || (j.value = +e.rows);
  }), Xn(C), J(i, C), J(() => e.rows, C), J(() => e.maxRows, C), J(() => e.density, C), J(E, (I) => {
    I ? (V = new ResizeObserver(C), V.observe(E.value)) : V == null || V.disconnect();
  }), tn(() => {
    V == null || V.disconnect();
  }), ue(() => {
    const I = !!(a.counter || e.counter || e.counterValue), F = !(!I && !a.details), [_, U] = Il(n), { modelValue: G, ...B } = gn.filterProps(e), D = ui(e);
    return d(gn, Q({ ref: p, modelValue: i.value, "onUpdate:modelValue": (L) => i.value = L, class: ["v-textarea v-text-field", { "v-textarea--prefixed": e.prefix, "v-textarea--suffixed": e.suffix, "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-textarea--auto-grow": e.autoGrow, "v-textarea--no-resize": e.noResize || e.autoGrow, "v-input--plain-underlined": z.value }, e.class], style: e.style }, _, B, { centerAffix: j.value === 1 && !z.value, focused: c.value }), { ...a, default: (L) => {
      let { id: q, isDisabled: H, isDirty: T, isReadonly: M, isValid: Y } = L;
      return d(Yt, Q({ ref: f, style: { "--v-textarea-control-height": g.value }, onClick: O, onMousedown: P, "onClick:clear": R, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, D, { id: q.value, active: b.value || T.value, centerAffix: j.value === 1 && !z.value, dirty: T.value || e.dirty, disabled: H.value, focused: c.value, error: Y.value === !1 }), { ...a, default: (x) => {
        let { props: { class: k, ...$ } } = x;
        return d(fe, null, [e.prefix && d("span", { class: "v-text-field__prefix" }, [e.prefix]), Ee(d("textarea", Q({ ref: h, class: k, value: i.value, onInput: w, autofocus: e.autofocus, readonly: M.value, disabled: H.value, placeholder: e.placeholder, rows: e.rows, name: e.name, onFocus: S, onBlur: o }, $, U), null), [[on("intersect"), { handler: y }, null, { once: !0 }]]), e.autoGrow && Ee(d("textarea", { class: [k, "v-textarea__sizer"], id: `${$.id}-sizer`, "onUpdate:modelValue": (N) => i.value = N, ref: E, readonly: !0, "aria-hidden": "true" }, null), [[ki, i.value]]), e.suffix && d("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: F ? (L) => {
      var q;
      return d(fe, null, [(q = a.details) == null ? void 0 : q.call(a, L), I && d(fe, null, [d("span", null, null), d(si, { active: e.persistentCounter || c.value, value: u.value, max: m.value }, a.counter)])]);
    } : void 0 });
  }), _l({}, p, f, h);
} }), vi = Xe({ __name: "BooleanIcons", props: $e({ iconFalseColor: {}, iconFalseTitle: {}, iconTrueColor: {}, iconTrueTitle: {}, iconFalse: {}, iconTrue: {} }, { modelValue: {} }), emits: ["update:modelValue"], setup(e) {
  const l = e, n = me(Symbol.for("vuetify:icons")), t = pn(e, "modelValue"), a = v(() => Ne({ icon: l.iconFalse, iconOptions: n, name: "false" })), i = v(() => Ne({ icon: l.iconTrue, iconOptions: n, name: "true" }));
  return (c, s) => t.value ? (Z(), Se(r(ve), { key: 0, class: "v-inline-fields--boolean-icons fa-fw", color: c.iconTrueColor, icon: r(i), size: "x-small", title: c.iconTrueTitle }, null, 8, ["color", "icon", "title"])) : (Z(), Se(r(ve), { key: 1, class: "v-inline-fields--boolean-icons fa-fw", color: c.iconFalseColor, icon: r(a), size: "x-small", title: c.iconFalseTitle }, null, 8, ["color", "icon", "title"]));
} }), se = "v-inline-fields", Vn = (e) => {
  const { cell: l = !1, field: n = "", density: t = "", disabled: a = !1, iconSet: i = "mdi", loading: c = !1, loadingWait: s, tableField: o = !1, variant: u } = e, m = t && u;
  return { [`${se}`]: !0, [`${se}--container`]: !0, [`${se}--container-cell`]: l, [`${se}--container-disabled`]: r(a), [`${se}--container-table`]: o, [`${se}--container-icon-set-${i}`]: !0, [`${se}--container-loading`]: c && s, [`${se}--container-${n}`]: !0, [`${se}--container-${n}-${t}`]: !0, [`${se}--container-${n}-${t}-${u}`]: m, [`${se}--container-${n}-${u}`]: u, [`${se}--container-${n}-${u}-${t}`]: m, [`${se}--container-${t}`]: t, [`${se}--container-${t}-${n}`]: t, [`${se}--container-${t}-${u}`]: m, [`${se}--container-${u}`]: u, [`${se}--container-${u}-${t}`]: m, [`${se}--container-${u}-${n}`]: u };
}, _n = (e) => {
  const { cell: l = !1, cellUnderlineFullWidth: n = !0, field: t = "", density: a = "" } = e;
  return { [`${se}--display-container-cell`]: l, [`${se}--display-container-cell-underline-full-width`]: l && n, [`${se}--display-container`]: !0, [`${se}--display-wrapper-value`]: !0, [`${t}`]: !0, "v-input": !0, [`v-input--density-${a}`]: !0, "v-input--horizontal": !0 };
}, yl = (e) => {
  const { density: l = "", variant: n = "" } = e;
  return { "v-input": !0, "v-input--dirty": !0, "v-input--horizontal": !0, "v-text-field": !0, [`v-input--density-${l}`]: !0, [`v-text-field--plain-${n}`]: !0 };
}, fi = (e) => {
  const { density: l = "" } = e;
  return { [`${se}--selection-control`]: !0, [`v-selection-control--density-${l}`]: !0 };
}, Jt = (e, l, n) => {
  const { error: t = !1, empty: a = !1 } = n;
  return { [`${se}`]: !0, [`${se}--display-value-${e}`]: !0, [`${se}--display-value`]: !0, [`${se}--display-value-empty`]: r(a), [`text-${l}`]: !r(t), "text-danger": r(t) };
}, On = (e) => {
  const { name: l, active: n = !1 } = e;
  return { [`${se}`]: !0, [`${se}--field`]: !0, [`${se}--field-${l}`]: !0, [`${se}--field-active`]: n };
}, Pn = (e) => {
  const { name: l, showField: n } = e;
  return { [`${se}--card-container`]: !0, [`${se}--card-container-${l}`]: !0, "d-none": !n };
};
function qo(e) {
  if (!e)
    return 100;
  if (e.toString().includes(".")) {
    const l = 100 * Number(e);
    return l >= 100 ? 100 : l;
  }
  return Number(e) >= 100 ? 100 : Number(e);
}
function Ho(e) {
  let l = function(y) {
    const p = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let f = y;
    return Object.entries(p).forEach(([g, h]) => {
      y.toLowerCase() != g.toLowerCase() || (f = h);
    }), f;
  }(e), n = 0, t = 0, a = 0, i = 100, c = 0, s = 0, o = 0;
  if (l.substring(0, 1) === "#")
    l = function(y) {
      let p = y.replace("#", "");
      p.length === 3 && (p = p.split("").map((S) => S + S).join(""));
      const f = parseInt(p.substring(0, 2), 16), g = parseInt(p.substring(2, 4), 16), h = parseInt(p.substring(4, 6), 16);
      return [f, g, h, 100];
    }(l);
  else if (l.includes("rgb"))
    l = [...l.matchAll(/[\d+.\d+]+/g)].map(Number);
  else if (l.includes("hsl"))
    return l = [...l.matchAll(/[\d+.\d+]+/g)].map(String), n = l[0], t = l[1], a = l[2], i = qo(l[3]), `${n} ${t}% ${a}% / ${i}%`;
  [c, s, o, i] = l, c /= 255, s /= 255, o /= 255, i = qo(i);
  const u = Math.max(c, s, o), m = Math.min(c, s, o);
  if (u === null || !m === null || isNaN(u) || isNaN(m)) {
    const y = "0 0% 100% / 12%";
    return console.warn(`[VuetifyInlineFields: The "color" prop value using "${l}" doesn't exist. Using the value "hsl(${y})" in it's place.`), y;
  }
  if (n = (u + m) / 2, t = (u + m) / 2, a = (u + m) / 2, u == m)
    n = t = 0;
  else {
    const y = u - m;
    switch (t = a > 0.5 ? y / (2 - u - m) : y / (u + m), u) {
      case c:
        n = (s - o) / y + (s < o ? 6 : 0);
        break;
      case s:
        n = (o - c) / y + 2;
        break;
      case o:
        n = (c - s) / y + 4;
    }
    n /= 6;
  }
  return n = Math.round(360 * n), t = Math.round(100 * t), a = Math.round(100 * a), `${n} ${t}% ${a}% / ${i}%`;
}
const bs = (e, l) => {
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
    return Object.entries(i).find(([c]) => c === t);
  }(e, l);
  return n ? `hsl(${Ho(n[1])})` : `hsl(${Ho(e)})`;
}, il = (e) => {
  const { str: l, unit: n = "px" } = e;
  if (l != null && l !== "")
    return +l ? `${Number(l)}${n}` : String(l);
}, yi = (e) => {
  var a;
  const { modelValue: l, trueValue: n } = e, t = r(l);
  return ((a = t == null ? void 0 : t.toLowerCase) == null ? void 0 : a.call(t)) === "true" || t === "1" || t == "1" || t === !0 || t == n || t === n;
}, Zt = (e) => {
  const { underlineStyle: l, underlineWidth: n, color: t, error: a, theme: i, underlined: c } = e;
  let { underlineColor: s } = e;
  s = s || t;
  const o = { "border-bottom-color": bs(s, i), "border-bottom-style": l, "border-bottom-width": n };
  return r(a) && (o["border-bottom-color"] = "rgb(var(--v-theme-danger))"), c || (o["border-bottom"] = "none"), o;
}, mn = (e) => {
  const { cardMinWidth: l, cardOffsetX: n, cardOffsetY: t, cardWidth: a, field: i, name: c = "" } = e, s = ((m) => {
    const { cardOffsetX: y, cardOffsetY: p, field: f } = m;
    if (!f)
      return { bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0, x: 0, y: 0 };
    const { x: g, y: h } = f.getBoundingClientRect(), { width: b, height: S } = f.getBoundingClientRect(), { right: O, bottom: P } = f.getBoundingClientRect();
    return { bottom: il({ str: P + Number(p) }), height: S, left: il({ str: 0 + Number(y) }), right: il({ str: O + Number(y) }), top: il({ str: 2 + Number(p) }), width: il({ str: b }), x: g, y: h };
  })({ cardOffsetX: n, cardOffsetY: t, field: i });
  let o = l, u = a;
  return u || (u = c === "checkbox" ? "fit-content" : s.width), o || (o = c === "checkbox" ? "fit-content" : s.width), { left: s.left, top: s.top, width: u, zIndex: 10 };
}, ml = Xe({ __name: "DisplayedValue", props: { color: {}, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayValue: {}, empty: { type: Boolean }, error: { type: Boolean }, field: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean } }, emits: ["toggleField"], setup(e, { emit: l }) {
  const n = l, t = e, a = vn(), i = Ot(), c = { displayValue: t.displayValue, empty: t.empty, error: t.error }, s = v(() => Jt(t.field, t.valueColor, { empty: t.empty, error: t.error })), o = v(() => Zt({ color: t.color, error: t.error, theme: i, underlineColor: t.underlineColor, underlineStyle: t.underlineStyle, underlineWidth: t.underlineWidth, underlined: t.underlined })), u = v(() => ((p) => {
    const { underlineWidth: f } = p;
    return { borderBottom: `${f || "0px"} solid transparent` };
  })({ underlineWidth: t.underlineWidth })), m = (p, f = !1) => ((g) => {
    const { inner: h = !1, position: b } = g;
    return { [`${se}--display-icon`]: !h, [`${se}--display-${b}-icon`]: !h, [`${se}--display-${b}-inner-icon`]: h, "me-1": b === "prepend", "ms-1": b === "append" };
  })({ inner: f, position: p });
  function y() {
    n("toggleField");
  }
  return (p, f) => (Z(), ae("div", { class: "v-inline-fields--display-wrapper", onClick: y }, [p.displayPrependIcon || r(a)["display.prepend"] ? (Z(), ae("div", { key: 0, class: ee(m("prepend")), style: Ce(r(u)) }, [r(a)["display.prepend"] ? Ae(p.$slots, "display.prepend", he(Q({ key: 0 }, c))) : (Z(), Se(ve, { key: 1, color: p.displayPrependIconColor, icon: p.displayPrependIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 6)) : pe("", !0), we("div", { class: ee(["d-inline-flex", r(s)]), style: Ce(r(o)) }, [p.displayPrependInnerIcon || r(a)["display.prependInner"] ? (Z(), ae("div", { key: 0, class: ee(m("prepend", !0)) }, [r(a)["display.prependInner"] ? Ae(p.$slots, "display.prependInner", he(Q({ key: 0 }, c))) : (Z(), Se(ve, { key: 1, color: p.displayPrependInnerIconColor, icon: p.displayPrependInnerIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 2)) : pe("", !0), Vt(" " + _t(p.displayValue) + " ", 1), p.displayAppendInnerIcon || r(a)["display.appendInner"] ? (Z(), ae("div", { key: 1, class: ee(m("append", !0)) }, [r(a)["display.appendInner"] ? Ae(p.$slots, "display.appendInner", he(Q({ key: 0 }, c))) : (Z(), Se(ve, { key: 1, color: p.displayAppendInnerIconColor, icon: p.displayAppendInnerIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 2)) : pe("", !0)], 6), p.displayAppendIcon || r(a)["display.append"] ? (Z(), ae("div", { key: 1, class: ee(m("append")), style: Ce(r(u)) }, [r(a)["display.append"] ? Ae(p.$slots, "display.append", he(Q({ key: 0 }, c))) : (Z(), Se(ve, { key: 1, color: p.displayAppendIconColor, icon: p.displayAppendIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 6)) : pe("", !0)]));
} }), Kn = Xe({ __name: "SaveFieldButtons", props: { loading: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonVariant: {}, cancelButtonTitle: {}, cancelIconColor: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideSaveIcon: { type: Boolean }, loadingIconColor: {}, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIconColor: {}, cancelIcon: {}, loadingIcon: {}, saveIcon: {} }, emits: ["close", "save"], setup(e, { emit: l }) {
  const n = fn(), t = l, a = e, i = me(Symbol.for("vuetify:icons")), c = v(() => a.error), s = v(() => ({ [`${se}--save-fields-container`]: !0 })), o = v(() => a.loading), u = Re({ ...n, ...a }), m = v(() => (i == null ? void 0 : i.defaultSet) === "fa" ? "fa-spin" : (i == null ? void 0 : i.defaultSet) === "mdi" ? "mdi-spin" : ""), y = v(() => ((S) => {
    const { cancelButtonVariant: O } = S;
    return { "me-1": O === "elevated", "ms-1": !0 };
  })({ cancelButtonVariant: u.cancelButtonVariant })), p = v(() => Ne({ icon: a.cancelIcon, iconOptions: i, name: "false" })), f = v(() => Ne({ icon: a.loadingIcon, iconOptions: i, name: "loading" })), g = v(() => Ne({ icon: a.saveIcon, iconOptions: i, name: "save" }));
  function h() {
    t("close");
  }
  function b() {
    t("save");
  }
  return (S, O) => (Z(), ae("div", Q({ class: r(s) }, S.$attrs), [r(u).hideSaveIcon ? pe("", !0) : (Z(), Se(bt, { key: 0, class: "ms-1", color: r(u).saveButtonColor, disabled: r(c), icon: "", size: r(u).saveButtonSize, title: r(o) ? "Loading" : r(u).saveButtonTitle, variant: r(u).saveButtonVariant, onClick: b }, { default: ce(() => [r(o) ? (Z(), Se(ve, { key: 1, class: ee(r(m)), color: r(u).loadingIconColor, icon: r(f) }, null, 8, ["class", "color", "icon"])) : (Z(), Se(ve, { key: 0, color: r(c) ? "error" : r(u).saveIconColor, icon: r(g) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["color", "disabled", "size", "title", "variant"])), r(u).hideCancelIcon ? pe("", !0) : (Z(), Se(bt, { key: 1, class: ee(r(y)), color: r(u).cancelButtonColor, icon: "", size: r(u).cancelButtonSize, title: r(u).cancelButtonTitle, variant: r(u).cancelButtonVariant, onClick: h }, { default: ce(() => [r(u).hideSaveIcon && r(o) ? (Z(), Se(ve, { key: 0, class: ee(r(m)), color: r(u).loadingIconColor, icon: r(f) }, null, 8, ["class", "color", "icon"])) : (Z(), Se(ve, { key: 1, class: "text-default", color: r(u).cancelIconColor, icon: r(p) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["class", "color", "size", "title", "variant"]))], 16));
} }), gl = (e) => {
  const { required: l, rules: n } = e;
  let { value: t } = e;
  t = r(t);
  const a = [];
  let i = !1;
  if (l && !t)
    return a.push("Field is required."), { errors: !0, results: a };
  if (n) {
    for (const c of n) {
      const s = (typeof c == "function" ? c : () => c)(t);
      s !== !0 && (typeof s == "string" ? a.push(s) : console.warn(`${s} is not a valid value. Rule functions must return boolean true or a string.`));
    }
    i = a.length > 0;
  }
  return { errors: i, results: a };
}, $n = (e) => {
  const { attrs: l, closeSiblings: n, fieldOnly: t, props: a, showField: i, timeOpened: c } = e;
  let s = c;
  return n && !t && (s = /* @__PURE__ */ new Date()), { settings: { ...l, ...a }, showField: !r(i), timeOpened: s };
}, wt = (e) => {
  const { length: l = 0 } = e;
  let { suffix: n, text: t } = e;
  return t = t.toString(), n = n || "...", t.length > l ? `${t.substring(0, l)}${n}` : t;
}, Tn = ["error", "update", "update:closeSiblingFields", "update:model-value"], Is = ["cancelButtonColor", "cancelButtonSize", "cancelButtonTitle", "cancelButtonVariant", "cancelIcon", "cancelIconColor", "closeSiblings", "displayAppendIcon", "displayAppendIconColor", "displayAppendIconSize", "displayAppendInnerIcon", "displayAppendInnerIconColor", "displayAppendInnerIconSize", "displayPrependIcon", "displayPrependIconColor", "displayPrependIconSize", "displayPrependInnerIcon", "displayPrependInnerIconColor", "displayPrependInnerIconSize", "emptyText", "fieldOnly", "hideSaveIcon", "item", "loadingIcon", "loadingIconColor", "loadingWait", "saveButtonColor", "saveButtonSize", "saveButtonTitle", "saveButtonVariant", "saveIcon", "saveIconColor", "tableField", "truncateLength", "truncateSuffix", "underlineColor", "underlineStyle", "underlineWidth", "underlined", "valueColor"], jn = (e) => {
  let l = e;
  return l = Object.entries(l).filter(([n]) => !Is.includes(n)), Object.fromEntries(l);
}, mi = (e, l) => {
  const n = e.__vccOpts || e;
  for (const [t, a] of l)
    n[t] = a;
  return n;
}, Cs = mi(Xe({ __name: "VInlineAutocomplete", props: $e(Cn({ clearIcon: {}, clearable: {}, density: {}, hideSelected: {}, itemTitle: {}, itemValue: {}, items: {}, menu: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Qo }), { modelValue: {} }), emits: $e([...Tn], ["update:modelValue"]), setup(e, { emit: l }) {
  const n = pn(e, "modelValue"), t = fn(), a = vn(), i = l, c = me(Symbol.for("vuetify:icons")), s = e;
  let o = Re({ ...t, ...s });
  const u = v(() => s.loading), m = v(() => s.disabled), y = W(!1), p = W(!1), f = W(), g = W(!1), h = W(null);
  let b = n.value;
  J(() => u.value, (k, $) => {
    !k && $ && g.value && D();
  });
  const S = v(() => Ne({ icon: s.clearIcon, iconOptions: c, name: "clear" })), O = v(() => n.value && n.value[o.itemTitle] ? (y.value = !1, n.value[o.itemTitle]) : (n.value = "", y.value = !0, o.emptyText)), P = v(() => jn(o)), R = v(() => ({ color: o.color, displayAppendIcon: s.displayAppendIcon, displayAppendIconColor: s.displayAppendIconColor, displayAppendIconSize: s.displayAppendIconSize, displayAppendInnerIcon: s.displayAppendInnerIcon, displayAppendInnerIconColor: s.displayAppendInnerIconColor, displayAppendInnerIconSize: s.displayAppendInnerIconSize, displayPrependIcon: s.displayPrependIcon, displayPrependIconColor: s.displayPrependIconColor, displayPrependIconSize: s.displayPrependIconSize, displayPrependInnerIcon: s.displayPrependInnerIcon, displayPrependInnerIconColor: s.displayPrependInnerIconColor, displayPrependInnerIconSize: s.displayPrependInnerIconSize, displayValue: O.value, empty: y.value, error: p.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), w = v(() => ({ ...xn, ...s.cardProps }));
  Ue(() => {
    f.value = o.items || [];
  });
  const E = v(() => Vn({ cell: o.cell && !g.value, density: o.density, disabled: m.value, field: "v-select", iconSet: c == null ? void 0 : c.defaultSet, loading: u.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), j = v(() => _n({ cell: o.cell, cellUnderlineFullWidth: o.cellUnderlineFullWidth, density: o.density, field: "v-select" })), z = yl({ density: o.density, variant: o.variant }), C = v(() => On({ active: g.value, name: "select" })), V = v(() => Pn({ name: "select", showField: g.value })), I = v(() => ({})), F = v(() => U.value);
  function _() {
    p.value = !1, n.value = b, D();
  }
  const U = W(), G = W(null), B = W("body");
  function D() {
    var $, N;
    if (m.value || o.loadingWait && u.value)
      return;
    U.value = mn({ cardMinWidth: ($ = o.cardProps) == null ? void 0 : $.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (N = o.cardProps) == null ? void 0 : N.width, field: G.value });
    const k = $n({ attrs: t, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: s, showField: g, timeOpened: h.value });
    o = { ...o, ...k.settings }, g.value = k.showField, h.value = k.timeOpened, M !== null && o.closeSiblings && g.value && !o.fieldOnly && M.emit(k.timeOpened);
  }
  const L = W(), q = v(() => L.value);
  function H() {
    const k = gl({ required: o.required, rules: o.rules, value: n });
    return p.value = k.errors, L.value = k.results, k.results;
  }
  function T() {
    b = n.value, i("update", n.value), o.loadingWait || D();
  }
  let M, Y;
  function x(k) {
    i("update:closeSiblingFields", h), g.value && h.value !== k && _();
  }
  return J(() => g.value, () => {
    g.value && H();
  }), J(() => n.value, () => {
    g.value && H();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: k }) => {
    M = k(Bn), Y = M.on(x);
  }), Sn(() => {
    Y !== void 0 && M.off(x);
  }), (k, $) => (Z(), ae("div", { ref_key: "inlineFieldsContainer", ref: G, class: ee(r(E)), style: Ce(r(I)) }, [!r(g) && !r(o).fieldOnly || r(o).cardField ? (Z(), ae("div", { key: 0, class: ee(r(j)) }, [we("div", { class: ee(r(z)) }, [d(r(ml), Q(r(R), { onToggleField: D }), Ke({ _: 2 }, [Ye(r(a), (N, A) => ({ name: A, fn: ce((X) => [Ae(k.$slots, A, he(Be({ ...X })), void 0, !0)]) }))]), 1040)], 2)], 2)) : pe("", !0), r(g) || r(o).fieldOnly || r(o).cardField ? (Z(), ae("div", { key: 1, class: ee(r(C)) }, [(Z(), Se(dn, { disabled: !r(o).cardField, to: r(B) }, [d(ss, Q(r(P), { modelValue: n.value, "onUpdate:modelValue": $[0] || ($[0] = (N) => n.value = N), autofocus: !r(o).fieldOnly || r(o).autofocus, "clear-icon": r(S), clearable: r(o).clearable, color: r(o).color, density: r(o).density, disabled: r(u) || r(m), error: r(p), "error-messages": r(q), "hide-details": r(o).hideDetails, "hide-selected": r(o).hideSelected, "item-title": r(o).itemTitle, "item-value": r(o).itemValue, items: r(f), label: r(o).label, loading: r(u), menu: r(o).menu && !r(o).fieldOnly && r(g), variant: r(o).variant, width: "100%", onKeyup: rl(_, ["esc"]) }), Ke({ _: 2 }, [Ye(r(a), (N, A) => ({ name: A, fn: ce((X) => [Ae(k.$slots, A, he(Be({ ...X })), void 0, !0)]) })), r(a).append ? void 0 : { name: "append", fn: ce(() => [d(r(Kn), { "cancel-button-color": r(o).cancelButtonColor, "cancel-button-size": r(o).cancelButtonSize, "cancel-button-title": r(o).cancelButtonTitle, "cancel-button-variant": r(o).cancelButtonVariant, "cancel-icon": r(o).cancelIcon, "cancel-icon-color": r(o).cancelIconColor, error: r(p), "field-only": r(o).fieldOnly, "hide-cancel-icon": r(o).hideCancelIcon, "hide-save-icon": r(o).hideSaveIcon, loading: r(u), "loading-icon": r(o).loadingIcon, "loading-icon-color": r(o).loadingIconColor, "save-button-color": r(o).saveButtonColor, "save-button-size": r(o).saveButtonSize, "save-button-title": r(o).saveButtonTitle, "save-button-variant": r(o).saveButtonVariant, "save-icon": r(o).saveIcon, "save-icon-color": r(o).saveIconColor, onClose: _, onSave: T }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "clearable", "color", "density", "disabled", "error", "error-messages", "hide-details", "hide-selected", "item-title", "item-value", "items", "label", "loading", "menu", "variant", "onKeyup"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), r(o).cardField ? (Z(), ae("div", { key: 2, class: ee(r(V)), style: Ce(r(F)) }, [d(An, he(Be(r(w))), { default: ce(() => [d(yn, null, { default: ce(() => [we("div", { ref_key: "cardFieldRef", ref: B }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), [["__scopeId", "data-v-37a8d395"]]), Ss = { class: "v-selection-control__wrapper" }, Bs = Xe({ __name: "VInlineCheckbox", props: $e(Cn({ density: {}, falseIcon: {}, trueIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Fi }), { modelValue: {} }), emits: $e([...Tn], ["update:modelValue"]), setup(e, { emit: l }) {
  const n = pn(e, "modelValue"), t = fn(), a = vn(), i = l, c = me(Symbol.for("vuetify:icons")), s = Ot(), o = e;
  let u = Re({ ...t, ...o });
  const m = v(() => o.loading), y = v(() => o.disabled), p = W(!1), f = W(!1), g = W(null), h = v(() => jn(u)), b = v(() => ({ ...xn, ...o.cardProps }));
  J(() => m.value, (x, k) => {
    !x && k && f.value && q();
  });
  const S = v(() => Ne({ icon: o.trueIcon, iconOptions: c, name: "checkboxFalse" })), O = v(() => Ne({ icon: o.iconTrue, iconOptions: c, name: "checkboxTrue" })), P = v(() => n.value == u.trueValue), R = v(() => yi({ modelValue: n, trueValue: u.trueValue })), w = v(() => Vn({ cell: u.cell && !f.value, density: u.density, disabled: y.value, field: "v-checkbox", loading: m.value, loadingWait: u.loadingWait, tableField: u.tableField })), E = v(() => _n({ cell: u.cell, cellUnderlineFullWidth: u.cellUnderlineFullWidth, density: u.density, field: "v-checkbox" })), j = fi({ density: u.density }), z = v(() => On({ active: f.value, name: "checkbox" })), C = v(() => Jt("checkbox", u.valueColor, { error: p })), V = v(() => Pn({ name: "checkbox", showField: f.value })), I = v(() => ({})), F = v(() => Zt({ color: u.color, error: p, theme: s, underlineColor: u.underlineColor, underlineStyle: u.underlineStyle, underlineWidth: u.underlineWidth, underlined: u.underlined })), _ = v(() => G.value);
  function U() {
    p.value = !1, q();
  }
  const G = W(), B = W(null), D = W("body"), L = wi();
  function q() {
    var k, $;
    if (y.value || u.loadingWait && m.value)
      return;
    G.value = mn({ cardMinWidth: (k = u.cardProps) == null ? void 0 : k.minWidth, cardOffsetX: u.cardOffsetX, cardOffsetY: u.cardOffsetY, cardWidth: ($ = u.cardProps) == null ? void 0 : $.width, field: B.value, name: "checkbox" });
    const x = $n({ attrs: t, closeSiblings: u.closeSiblings, fieldOnly: u.fieldOnly, props: o, showField: f, timeOpened: g.value });
    u = { ...u, ...x.settings }, f.value = x.showField, g.value = x.timeOpened, T !== null && u.closeSiblings && f.value && !u.fieldOnly && T.emit(x.timeOpened);
  }
  function H(x) {
    n.value = x, i("update", x), u.loadingWait || q();
  }
  let T, M;
  function Y(x) {
    i("update:closeSiblingFields", g), f.value && g.value !== x && q();
  }
  return J(() => L, () => {
    var x, k;
    G.value = mn({ cardMinWidth: (x = u.cardProps) == null ? void 0 : x.minWidth, cardOffsetX: u.cardOffsetX, cardOffsetY: u.cardOffsetY, cardWidth: (k = u.cardProps) == null ? void 0 : k.width, field: B.value, name: "checkbox" });
  }, { deep: !0 }), u.closeSiblings && import("@vueuse/core").then(({ useEventBus: x }) => {
    T = x(Bn), M = T.on(Y);
  }), Sn(() => {
    M !== void 0 && T.off(Y);
  }), (x, k) => (Z(), ae("div", { ref_key: "inlineFieldsContainer", ref: B, class: ee(r(w)), style: Ce(r(I)) }, [!r(f) && !r(u).fieldOnly || r(u).cardField ? (Z(), ae("div", { key: 0, class: ee(r(E)), onClick: k[2] || (k[2] = ($) => r(u).cell ? q() : void 0) }, [we("div", { class: ee(r(j)), onClick: k[1] || (k[1] = ($) => r(u).cell ? void 0 : q()) }, [we("div", Ss, [x.icons ? (Z(), ae("div", { key: 0, class: ee(["v-inline-fields--boolean-icons-container", r(C)]), style: Ce(r(F)) }, [d(r(vi), { modelValue: r(R), "onUpdate:modelValue": k[0] || (k[0] = ($) => zn(R) ? R.value = $ : null), "icon-false": r(u).iconFalse, "icon-false-color": r(u).iconFalseColor, "icon-false-title": r(u).iconFalseTitle, "icon-true": r(u).iconTrue, "icon-true-color": r(u).iconTrueColor, "icon-true-title": r(u).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (Z(), ae("div", { key: 1, class: ee(["d-inline-flex align-center justify-center", r(C)]), style: Ce(r(F)) }, _t(r(P)), 7))])], 2)], 2)) : pe("", !0), r(f) || r(u).fieldOnly || r(u).cardField ? (Z(), ae("div", { key: 1, class: ee(r(z)) }, [(Z(), Se(dn, { disabled: !r(u).cardField, to: r(D) }, [d(mr, Q(r(h), { color: r(u).color, density: r(u).density, disabled: r(m) || r(y), error: r(p), "false-icon": r(S), "false-value": r(u).falseValue, "hide-details": r(u).hideDetails, label: r(u).label, "model-value": r(R), "true-icon": r(O), "true-value": r(u).trueValue, "onUpdate:modelValue": H }), Ke({ _: 2 }, [Ye(r(a), ($, N) => ({ name: N, fn: ce((A) => [Ae(x.$slots, N, he(Be({ ...A })))]) })), r(a).append ? void 0 : { name: "append", fn: ce(() => [d(r(Kn), { "cancel-button-color": r(u).cancelButtonColor, "cancel-button-size": r(u).cancelButtonSize, "cancel-button-title": r(u).cancelButtonTitle, "cancel-button-variant": r(u).cancelButtonVariant, "cancel-icon": r(u).cancelIcon, "cancel-icon-color": r(u).cancelIconColor, error: r(p), "field-only": r(u).fieldOnly, "hide-cancel-icon": r(u).hideCancelIcon, "hide-save-icon": !0, loading: r(m), "loading-icon": r(u).loadingIcon, "loading-icon-color": r(u).loadingIconColor, "save-button-color": r(u).saveButtonColor, "save-button-size": r(u).saveButtonSize, "save-button-title": r(u).saveButtonTitle, "save-button-variant": r(u).saveButtonVariant, "save-icon": r(u).saveIcon, "save-icon-color": r(u).saveIconColor, onClose: U, onSave: H }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "model-value", "true-icon", "true-value"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), r(u).cardField ? (Z(), ae("div", { key: 2, class: ee(r(V)), style: Ce(r(_)) }, [d(An, he(Be(r(b))), { default: ce(() => [d(yn, null, { default: ce(() => [we("div", { ref_key: "cardFieldRef", ref: D }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), xs = Xe({ __name: "VInlineCustomField", props: $e(Cn({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...ea }), { modelValue: {} }), emits: $e([...Tn], ["update:modelValue"]), setup(e, { emit: l }) {
  const n = pn(e, "modelValue"), t = fn(), a = vn(), i = l, c = me(Symbol.for("vuetify:icons")), s = e;
  let o = Re({ ...t, ...s });
  const u = v(() => s.loading), m = v(() => s.disabled), y = W(!1), p = W(!1), f = W(!1), g = W(null);
  let h = n.value;
  J(() => u.value, (M, Y) => {
    !M && Y && f.value && G();
  });
  const b = v(() => n.value ? (y.value = !1, o.truncateLength ? wt({ length: o.truncateLength, suffix: o.truncateSuffix, text: n.value }) : n.value) : (y.value = !0, o.emptyText)), S = v(() => ({ ...o, loading: u.value, modelValue: n.value, originalValue: h })), O = v(() => ({ color: o.color, displayAppendIcon: s.displayAppendIcon, displayAppendIconColor: s.displayAppendIconColor, displayAppendIconSize: s.displayAppendIconSize, displayAppendInnerIcon: s.displayAppendInnerIcon, displayAppendInnerIconColor: s.displayAppendInnerIconColor, displayAppendInnerIconSize: s.displayAppendInnerIconSize, displayPrependIcon: s.displayPrependIcon, displayPrependIconColor: s.displayPrependIconColor, displayPrependIconSize: s.displayPrependIconSize, displayPrependInnerIcon: s.displayPrependInnerIcon, displayPrependInnerIconColor: s.displayPrependInnerIconColor, displayPrependInnerIconSize: s.displayPrependInnerIconSize, displayValue: b.value, empty: y.value, error: p.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), P = v(() => ({ ...xn, ...s.cardProps })), R = v(() => Vn({ cell: o.cell && !f.value, density: o.density, disabled: m.value, field: "v-text-field", iconSet: c == null ? void 0 : c.defaultSet, loading: u.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), w = v(() => _n({ cell: o.cell, cellUnderlineFullWidth: o.cellUnderlineFullWidth, density: o.density, field: "v-text-field" })), E = yl({ density: o.density, variant: o.variant }), j = v(() => On({ active: f.value, name: "text-field" })), z = v(() => Pn({ name: "custom-field", showField: f.value })), C = v(() => ({})), V = v(() => F.value);
  function I() {
    p.value = !1, n.value = h, G();
  }
  const F = W(), _ = W(null), U = W("body");
  function G() {
    var Y, x;
    if (m.value || o.loadingWait && u.value)
      return;
    F.value = mn({ cardMinWidth: (Y = o.cardProps) == null ? void 0 : Y.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (x = o.cardProps) == null ? void 0 : x.width, field: _.value });
    const M = $n({ attrs: t, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: s, showField: f, timeOpened: g.value });
    o = { ...o, ...M.settings }, f.value = M.showField, g.value = M.timeOpened, q !== null && o.closeSiblings && f.value && !o.fieldOnly && q.emit(M.timeOpened);
  }
  const B = W();
  function D() {
    const M = gl({ required: o.required, rules: o.rules, value: n });
    return p.value = M.errors, B.value = M.results, M.results;
  }
  function L() {
    p.value ? p.value = !0 : (h = n.value, i("update", n.value), o.loadingWait || G());
  }
  let q, H;
  function T(M) {
    i("update:closeSiblingFields", g), f.value && g.value !== M && I();
  }
  return J(() => f.value, () => {
    f.value && D();
  }), J(() => n.value, () => {
    f.value && D();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: M }) => {
    q = M(Bn), H = q.on(T);
  }), Sn(() => {
    H !== void 0 && q.off(T);
  }), (M, Y) => (Z(), ae("div", { ref_key: "inlineFieldsContainer", ref: _, class: ee(r(R)), style: Ce(r(C)) }, [!r(f) && !r(o).fieldOnly || r(o).cardField ? (Z(), ae("div", { key: 0, class: ee(r(w)) }, [we("div", { class: ee(r(E)) }, [d(r(ml), Q(r(O), { onToggleField: G }), Ke({ _: 2 }, [Ye(r(a), (x, k) => ({ name: k, fn: ce(($) => [Ae(M.$slots, k, he(Be({ ...$ })))]) }))]), 1040)], 2)], 2)) : pe("", !0), r(f) || r(o).fieldOnly || r(o).cardField ? (Z(), ae("div", { key: 1, class: ee(["d-flex align-center py-2", r(j)]) }, [(Z(), Se(dn, { disabled: !r(o).cardField, to: r(U) }, [Ae(M.$slots, "default", he(Be(r(S)))), d(r(Kn), { modelValue: n.value, "onUpdate:modelValue": Y[0] || (Y[0] = (x) => n.value = x), "cancel-button-color": r(o).cancelButtonColor, "cancel-button-size": r(o).cancelButtonSize, "cancel-button-title": r(o).cancelButtonTitle, "cancel-button-variant": r(o).cancelButtonVariant, "cancel-icon": r(o).cancelIcon, "cancel-icon-color": r(o).cancelIconColor, error: r(p), "field-only": r(o).fieldOnly, "hide-cancel-icon": r(o).hideCancelIcon, "hide-save-icon": r(o).hideSaveIcon, loading: r(u), "loading-icon": r(o).loadingIcon, "loading-icon-color": r(o).loadingIconColor, required: r(o).required, "save-button-color": r(o).saveButtonColor, "save-button-size": r(o).saveButtonSize, "save-button-title": r(o).saveButtonTitle, "save-button-variant": r(o).saveButtonVariant, "save-icon": r(o).saveIcon, "save-icon-color": r(o).saveIconColor, onClose: I, onSave: L }, null, 8, ["modelValue", "cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "required", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), r(o).cardField ? (Z(), ae("div", { key: 2, class: ee(r(z)), style: Ce(r(V)) }, [d(An, he(Be(r(P))), { default: ce(() => [d(yn, null, { default: ce(() => [we("div", { ref_key: "cardFieldRef", ref: U }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), ks = Xe({ __name: "VInlineSelect", props: $e(Cn({ clearIcon: {}, clearable: {}, density: {}, hideSelected: {}, itemTitle: {}, itemValue: {}, items: {}, menu: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Qo }), { modelValue: {} }), emits: $e([...Tn], ["update:modelValue"]), setup(e, { emit: l }) {
  const n = pn(e, "modelValue"), t = fn(), a = vn(), i = l, c = me(Symbol.for("vuetify:icons")), s = e;
  let o = Re({ ...t, ...s });
  const u = v(() => s.loading), m = v(() => s.disabled), y = W(!1), p = W(!1), f = W(), g = W(!1), h = W(null);
  let b = n.value;
  J(() => u.value, (k, $) => {
    !k && $ && g.value && D();
  });
  const S = v(() => Ne({ icon: s.clearIcon, iconOptions: c, name: "clear" })), O = v(() => n.value && n.value[o.itemTitle] ? (y.value = !1, n.value[o.itemTitle]) : (n.value = "", y.value = !0, o.emptyText)), P = v(() => jn(o)), R = v(() => ({ color: o.color, displayAppendIcon: s.displayAppendIcon, displayAppendIconColor: s.displayAppendIconColor, displayAppendIconSize: s.displayAppendIconSize, displayAppendInnerIcon: s.displayAppendInnerIcon, displayAppendInnerIconColor: s.displayAppendInnerIconColor, displayAppendInnerIconSize: s.displayAppendInnerIconSize, displayPrependIcon: s.displayPrependIcon, displayPrependIconColor: s.displayPrependIconColor, displayPrependIconSize: s.displayPrependIconSize, displayPrependInnerIcon: s.displayPrependInnerIcon, displayPrependInnerIconColor: s.displayPrependInnerIconColor, displayPrependInnerIconSize: s.displayPrependInnerIconSize, displayValue: O.value, empty: y.value, error: p.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), w = v(() => ({ ...xn, ...s.cardProps }));
  Ue(() => {
    f.value = o.items || [];
  });
  const E = v(() => Vn({ cell: o.cell && !g.value, density: o.density, disabled: m.value, field: "v-select", iconSet: c == null ? void 0 : c.defaultSet, loading: u.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), j = v(() => _n({ cell: o.cell, cellUnderlineFullWidth: o.cellUnderlineFullWidth, density: o.density, field: "v-select" })), z = yl({ density: o.density, variant: o.variant }), C = v(() => On({ active: g.value, name: "select" })), V = v(() => Pn({ name: "select", showField: g.value })), I = v(() => ({})), F = v(() => U.value);
  function _() {
    p.value = !1, n.value = b, D();
  }
  const U = W(), G = W(null), B = W("body");
  function D() {
    var $, N;
    if (m.value || o.loadingWait && u.value)
      return;
    U.value = mn({ cardMinWidth: ($ = o.cardProps) == null ? void 0 : $.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (N = o.cardProps) == null ? void 0 : N.width, field: G.value });
    const k = $n({ attrs: t, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: s, showField: g, timeOpened: h.value });
    o = { ...o, ...k.settings }, g.value = k.showField, h.value = k.timeOpened, M !== null && o.closeSiblings && g.value && !o.fieldOnly && M.emit(k.timeOpened);
  }
  const L = W(), q = v(() => L.value);
  function H() {
    const k = gl({ required: o.required, rules: o.rules, value: n });
    return p.value = k.errors, L.value = k.results, k.results;
  }
  function T() {
    b = n.value, i("update", n.value), o.loadingWait || D();
  }
  let M, Y;
  function x(k) {
    i("update:closeSiblingFields", h), g.value && h.value !== k && _();
  }
  return J(() => g.value, () => {
    g.value && H();
  }), J(() => n.value, () => {
    g.value && H();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: k }) => {
    M = k(Bn), Y = M.on(x);
  }), Sn(() => {
    Y !== void 0 && M.off(x);
  }), (k, $) => (Z(), ae("div", { ref_key: "inlineFieldsContainer", ref: G, class: ee(r(E)), style: Ce(r(I)) }, [!r(g) && !r(o).fieldOnly || r(o).cardField ? (Z(), ae("div", { key: 0, class: ee(r(j)) }, [we("div", { class: ee(r(z)) }, [d(r(ml), Q(r(R), { onToggleField: D }), Ke({ _: 2 }, [Ye(r(a), (N, A) => ({ name: A, fn: ce((X) => [Ae(k.$slots, A, he(Be({ ...X })), void 0, !0)]) }))]), 1040)], 2)], 2)) : pe("", !0), r(g) || r(o).fieldOnly || r(o).cardField ? (Z(), ae("div", { key: 1, class: ee(r(C)) }, [(Z(), Se(dn, { disabled: !r(o).cardField, to: r(B) }, [d(ts, Q(r(P), { modelValue: n.value, "onUpdate:modelValue": $[0] || ($[0] = (N) => n.value = N), autofocus: !r(o).fieldOnly || r(o).autofocus, "clear-icon": r(S), clearable: r(o).clearable, color: r(o).color, density: r(o).density, disabled: r(u) || r(m), error: r(p), "error-messages": r(q), "hide-details": r(o).hideDetails, "hide-selected": r(o).hideSelected, "item-title": r(o).itemTitle, "item-value": r(o).itemValue, items: r(f), label: r(o).label, loading: r(u), menu: r(o).menu && !r(o).fieldOnly && r(g), variant: r(o).variant, width: "100%", onKeyup: rl(_, ["esc"]) }), Ke({ _: 2 }, [Ye(r(a), (N, A) => ({ name: A, fn: ce((X) => [Ae(k.$slots, A, he(Be({ ...X })), void 0, !0)]) })), r(a).append ? void 0 : { name: "append", fn: ce(() => [d(r(Kn), { "cancel-button-color": r(o).cancelButtonColor, "cancel-button-size": r(o).cancelButtonSize, "cancel-button-title": r(o).cancelButtonTitle, "cancel-button-variant": r(o).cancelButtonVariant, "cancel-icon": r(o).cancelIcon, "cancel-icon-color": r(o).cancelIconColor, error: r(p), "field-only": r(o).fieldOnly, "hide-cancel-icon": r(o).hideCancelIcon, "hide-save-icon": r(o).hideSaveIcon, loading: r(u), "loading-icon": r(o).loadingIcon, "loading-icon-color": r(o).loadingIconColor, "save-button-color": r(o).saveButtonColor, "save-button-size": r(o).saveButtonSize, "save-button-title": r(o).saveButtonTitle, "save-button-variant": r(o).saveButtonVariant, "save-icon": r(o).saveIcon, "save-icon-color": r(o).saveIconColor, onClose: _, onSave: T }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "clearable", "color", "density", "disabled", "error", "error-messages", "hide-details", "hide-selected", "item-title", "item-value", "items", "label", "loading", "menu", "variant", "onKeyup"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), r(o).cardField ? (Z(), ae("div", { key: 2, class: ee(r(V)), style: Ce(r(F)) }, [d(An, he(Be(r(w))), { default: ce(() => [d(yn, null, { default: ce(() => [we("div", { ref_key: "cardFieldRef", ref: B }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), ws = { class: "v-selection-control__wrapper" }, Ge = { VInlineAutocomplete: Cs, VInlineCheckbox: Bs, VInlineCustomField: xs, VInlineSelect: mi(ks, [["__scopeId", "data-v-36fbbe97"]]), VInlineSwitch: Xe({ __name: "VInlineSwitch", props: $e(Cn({ density: {}, falseIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Ai }), { modelValue: {} }), emits: $e([...Tn], ["update:modelValue"]), setup(e, { emit: l }) {
  const n = pn(e, "modelValue"), t = fn(), a = vn(), i = l, c = me(Symbol.for("vuetify:icons")), s = Ot(), o = e;
  let u = Re({ ...t, ...o });
  const m = v(() => o.loading), y = v(() => o.disabled), p = W(!1), f = W(!1), g = W(null), h = v(() => jn(u)), b = v(() => ({ ...xn, ...o.cardProps }));
  J(() => m.value, (T, M) => {
    !T && M && f.value && B();
  });
  const S = v(() => Ne({ icon: u.cancelIcon, iconOptions: c, name: "false" })), O = v(() => n.value == u.trueValue), P = v(() => yi({ modelValue: n, trueValue: u.trueValue })), R = v(() => Vn({ cell: u.cell && !f.value, density: u.density, disabled: y.value, field: "v-switch", loading: m.value, loadingWait: u.loadingWait, tableField: u.tableField })), w = v(() => _n({ cell: u.cell, cellUnderlineFullWidth: u.cellUnderlineFullWidth, density: u.density, field: "v-switch" })), E = fi({ density: u.density }), j = v(() => On({ active: f.value, name: "switch" })), z = v(() => Jt("switch", u.valueColor, { error: p })), C = v(() => Pn({ name: "switch", showField: f.value })), V = v(() => ({})), I = v(() => Zt({ color: u.color, error: p, theme: s, underlineColor: u.underlineColor, underlineStyle: u.underlineStyle, underlineWidth: u.underlineWidth, underlined: u.underlined })), F = v(() => _.value), _ = W(), U = W(null), G = W("body");
  function B() {
    var M, Y;
    if (y.value || u.loadingWait && m.value)
      return;
    _.value = mn({ cardMinWidth: (M = u.cardProps) == null ? void 0 : M.minWidth, cardOffsetX: u.cardOffsetX, cardOffsetY: u.cardOffsetY, cardWidth: (Y = u.cardProps) == null ? void 0 : Y.width, field: U.value });
    const T = $n({ attrs: t, closeSiblings: u.closeSiblings, fieldOnly: u.fieldOnly, props: o, showField: f.value, timeOpened: g.value });
    u = { ...u, ...T.settings }, f.value = T.showField, g.value = T.timeOpened, L !== null && u.closeSiblings && f.value && !u.fieldOnly && L.emit(T.timeOpened);
  }
  function D(T) {
    n.value = T, i("update", T), u.loadingWait || B();
  }
  let L, q;
  function H(T) {
    i("update:closeSiblingFields", g), f.value && g.value !== T && B();
  }
  return u.closeSiblings && import("@vueuse/core").then(({ useEventBus: T }) => {
    L = T(Bn), q = L.on(H);
  }), Sn(() => {
    q !== void 0 && L.off(H);
  }), (T, M) => (Z(), ae("div", { ref_key: "inlineFieldsContainer", ref: U, class: ee(r(R)), style: Ce(r(V)) }, [!r(f) && !r(u).fieldOnly || r(u).cardField ? (Z(), ae("div", { key: 0, class: ee(r(w)), onClick: M[2] || (M[2] = (Y) => r(u).cell ? B() : void 0) }, [we("div", { class: ee(r(E)), onClick: M[1] || (M[1] = (Y) => r(u).cell ? void 0 : B()) }, [we("div", ws, [T.icons ? (Z(), ae("div", { key: 0, class: ee(["v-inline-fields--boolean-icons-container", r(z)]), style: Ce(r(I)) }, [d(r(vi), { modelValue: r(P), "onUpdate:modelValue": M[0] || (M[0] = (Y) => zn(P) ? P.value = Y : null), "icon-false": r(u).iconFalse, "icon-false-color": r(u).iconFalseColor, "icon-false-title": r(u).iconFalseTitle, "icon-true": r(u).iconTrue, "icon-true-color": r(u).iconTrueColor, "icon-true-title": r(u).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (Z(), ae("div", { key: 1, class: ee(["d-inline-flex align-center justify-center", r(z)]), style: Ce(r(I)) }, _t(r(O)), 7))])], 2)], 2)) : pe("", !0), r(f) || r(u).fieldOnly || r(u).cardField ? (Z(), ae("div", { key: 1, class: ee(r(j)) }, [(Z(), Se(dn, { disabled: !r(u).cardField, to: r(G) }, [d(ms, Q(r(h), { color: r(u).color, density: r(u).density, disabled: r(m) || r(y), error: r(p), "false-icon": r(u).falseIcon, "false-value": r(u).falseValue, "hide-details": r(u).hideDetails, label: r(u).label, loading: r(m), "model-value": r(P), "true-value": r(u).trueValue, "onUpdate:modelValue": D }), Ke({ _: 2 }, [Ye(r(a), (Y, x) => ({ name: x, fn: ce((k) => [Ae(T.$slots, x, he(Be({ ...k })))]) })), r(a).append ? void 0 : { name: "append", fn: ce(() => [r(u).fieldOnly && !r(u).cardField || r(u).hideCancelIcon ? pe("", !0) : (Z(), Se(bt, { key: 0, class: "ms-3", color: r(u).cancelButtonColor, icon: "", size: r(u).cancelButtonSize, title: r(u).cancelButtonTitle, variant: r(u).cancelButtonVariant, onClick: B }, { default: ce(() => [d(ve, { color: r(u).cancelIconColor, icon: r(S) }, null, 8, ["color", "icon"])]), _: 1 }, 8, ["color", "size", "title", "variant"]))]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "loading", "model-value", "true-value"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), r(u).cardField ? (Z(), ae("div", { key: 2, class: ee(r(C)), style: Ce(r(F)) }, [d(An, he(Be(r(b))), { default: ce(() => [d(yn, null, { default: ce(() => [we("div", { ref_key: "cardFieldRef", ref: G }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), VInlineTextField: Xe({ __name: "VInlineTextField", props: $e(Cn({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...ea }), { modelValue: {} }), emits: $e([...Tn], ["update:modelValue"]), setup(e, { emit: l }) {
  const n = pn(e, "modelValue"), t = fn(), a = vn(), i = l, c = me(Symbol.for("vuetify:icons")), s = e;
  let o = Re({ ...t, ...s });
  const u = v(() => s.loading), m = v(() => s.disabled), y = W(!1), p = W(!1), f = W(!1), g = W(null);
  let h = n.value;
  J(() => u.value, (x, k) => {
    !x && k && f.value && B();
  });
  const b = v(() => Ne({ icon: s.clearIcon, iconOptions: c, name: "clear" })), S = v(() => n.value ? (y.value = !1, o.truncateLength ? wt({ length: o.truncateLength, suffix: o.truncateSuffix, text: n.value }) : n.value) : (y.value = !0, o.emptyText)), O = v(() => jn(o)), P = v(() => ({ color: o.color, displayAppendIcon: s.displayAppendIcon, displayAppendIconColor: s.displayAppendIconColor, displayAppendIconSize: s.displayAppendIconSize, displayAppendInnerIcon: s.displayAppendInnerIcon, displayAppendInnerIconColor: s.displayAppendInnerIconColor, displayAppendInnerIconSize: s.displayAppendInnerIconSize, displayPrependIcon: s.displayPrependIcon, displayPrependIconColor: s.displayPrependIconColor, displayPrependIconSize: s.displayPrependIconSize, displayPrependInnerIcon: s.displayPrependInnerIcon, displayPrependInnerIconColor: s.displayPrependInnerIconColor, displayPrependInnerIconSize: s.displayPrependInnerIconSize, displayValue: S.value, empty: y.value, error: p.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), R = v(() => ({ ...xn, ...s.cardProps })), w = v(() => Vn({ cell: o.cell && !f.value, density: o.density, disabled: m.value, field: "v-text-field", iconSet: c == null ? void 0 : c.defaultSet, loading: u.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), E = v(() => _n({ cell: o.cell, cellUnderlineFullWidth: o.cellUnderlineFullWidth, density: o.density, field: "v-text-field" })), j = yl({ density: o.density, variant: o.variant }), z = v(() => On({ active: f.value, name: "text-field" })), C = v(() => Pn({ name: "text-field", showField: f.value })), V = v(() => ({})), I = v(() => _.value);
  function F() {
    p.value = !1, n.value = h, B();
  }
  const _ = W(), U = W(null), G = W("body");
  function B() {
    var k, $;
    if (m.value || o.loadingWait && u.value)
      return;
    _.value = mn({ cardMinWidth: (k = o.cardProps) == null ? void 0 : k.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: ($ = o.cardProps) == null ? void 0 : $.width, field: U.value });
    const x = $n({ attrs: t, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: s, showField: f, timeOpened: g.value });
    o = { ...o, ...x.settings }, f.value = x.showField, g.value = x.timeOpened, T !== null && o.closeSiblings && f.value && !o.fieldOnly && T.emit(x.timeOpened);
  }
  const D = W(), L = v(() => D.value);
  function q() {
    const x = gl({ required: o.required, rules: o.rules, value: n });
    return p.value = x.errors, D.value = x.results, x.results;
  }
  function H() {
    p.value ? p.value = !0 : (h = n.value, i("update", n.value), o.loadingWait || B());
  }
  let T, M;
  function Y(x) {
    i("update:closeSiblingFields", g), f.value && g.value !== x && F();
  }
  return J(() => f.value, () => {
    f.value && q();
  }), J(() => n.value, () => {
    f.value && q();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: x }) => {
    T = x(Bn), M = T.on(Y);
  }), Sn(() => {
    M !== void 0 && T.off(Y);
  }), (x, k) => (Z(), ae("div", { ref_key: "inlineFieldsContainer", ref: U, class: ee(r(w)), style: Ce(r(V)) }, [!r(f) && !r(o).fieldOnly || r(o).cardField ? (Z(), ae("div", { key: 0, class: ee(r(E)) }, [we("div", { class: ee(r(j)) }, [d(r(ml), Q(r(P), { onToggleField: B }), Ke({ _: 2 }, [Ye(r(a), ($, N) => ({ name: N, fn: ce((A) => [Ae(x.$slots, N, he(Be({ ...A })))]) }))]), 1040)], 2)], 2)) : pe("", !0), r(f) || r(o).fieldOnly || r(o).cardField ? (Z(), ae("div", { key: 1, class: ee(r(z)) }, [(Z(), Se(dn, { disabled: !r(o).cardField, to: r(G) }, [d(fl, Q(r(O), { modelValue: n.value, "onUpdate:modelValue": k[1] || (k[1] = ($) => n.value = $), autofocus: !r(o).fieldOnly || r(o).autofocus, "clear-icon": r(b), color: r(o).color, density: r(o).density, disabled: r(u) || r(m), error: r(p), "error-messages": r(L), "hide-details": r(o).hideDetails, label: r(o).label, loading: r(u), variant: r(o).variant, width: "100%", onKeyup: [rl(H, ["enter"]), rl(F, ["esc"])] }), Ke({ _: 2 }, [Ye(r(a), ($, N) => ({ name: N, fn: ce((A) => [Ae(x.$slots, N, he(Be({ ...A })))]) })), r(a).append ? void 0 : { name: "append", fn: ce(() => [d(r(Kn), { modelValue: n.value, "onUpdate:modelValue": k[0] || (k[0] = ($) => n.value = $), "cancel-button-color": r(o).cancelButtonColor, "cancel-button-size": r(o).cancelButtonSize, "cancel-button-title": r(o).cancelButtonTitle, "cancel-button-variant": r(o).cancelButtonVariant, "cancel-icon": r(o).cancelIcon, "cancel-icon-color": r(o).cancelIconColor, error: r(p), "field-only": r(o).fieldOnly, "hide-cancel-icon": r(o).hideCancelIcon, "hide-save-icon": r(o).hideSaveIcon, loading: r(u), "loading-icon": r(o).loadingIcon, "loading-icon-color": r(o).loadingIconColor, required: r(o).required, "save-button-color": r(o).saveButtonColor, "save-button-size": r(o).saveButtonSize, "save-button-title": r(o).saveButtonTitle, "save-button-variant": r(o).saveButtonVariant, "save-icon": r(o).saveIcon, "save-icon-color": r(o).saveIconColor, onClose: F, onSave: H }, null, 8, ["modelValue", "cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "required", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "variant", "onKeyup"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), r(o).cardField ? (Z(), ae("div", { key: 2, class: ee(r(C)), style: Ce(r(I)) }, [d(An, he(Be(r(R))), { default: ce(() => [d(yn, null, { default: ce(() => [we("div", { ref_key: "cardFieldRef", ref: G }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), VInlineTextarea: Xe({ __name: "VInlineTextarea", props: $e(Cn({ autoGrow: {}, clearIcon: {}, density: {}, rows: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Vi }), { modelValue: {} }), emits: $e([...Tn], ["update:modelValue"]), setup(e, { emit: l }) {
  const n = pn(e, "modelValue"), t = fn(), a = vn(), i = l, c = me(Symbol.for("vuetify:icons")), s = e;
  let o = Re({ ...t, ...s });
  const u = v(() => s.loading), m = v(() => s.disabled), y = W(!1), p = W(!1), f = W(!1), g = W(null);
  let h = n.value;
  J(() => u.value, (x, k) => {
    !x && k && f.value && B();
  });
  const b = v(() => Ne({ icon: s.clearIcon, iconOptions: c, name: "clear" })), S = v(() => n.value ? (y.value = !1, o.truncateLength ? wt({ length: o.truncateLength, suffix: o.truncateSuffix, text: n.value }) : n.value) : (y.value = !0, o.emptyText)), O = v(() => jn(o)), P = v(() => ({ color: o.color, displayAppendIcon: s.displayAppendIcon, displayAppendIconColor: s.displayAppendIconColor, displayAppendIconSize: s.displayAppendIconSize, displayAppendInnerIcon: s.displayAppendInnerIcon, displayAppendInnerIconColor: s.displayAppendInnerIconColor, displayAppendInnerIconSize: s.displayAppendInnerIconSize, displayPrependIcon: s.displayPrependIcon, displayPrependIconColor: s.displayPrependIconColor, displayPrependIconSize: s.displayPrependIconSize, displayPrependInnerIcon: s.displayPrependInnerIcon, displayPrependInnerIconColor: s.displayPrependInnerIconColor, displayPrependInnerIconSize: s.displayPrependInnerIconSize, displayValue: S.value, empty: y.value, error: p.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), R = v(() => ({ ...xn, ...s.cardProps })), w = v(() => Vn({ cell: o.cell && !f.value, density: o.density, disabled: m.value, field: "v-textarea", iconSet: c == null ? void 0 : c.defaultSet, loading: u.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), E = v(() => _n({ cell: o.cell, cellUnderlineFullWidth: o.cellUnderlineFullWidth, density: o.density, field: "v-textarea" })), j = yl({ density: o.density, variant: o.variant }), z = v(() => On({ active: f.value, name: "textarea" })), C = v(() => Pn({ name: "textarea", showField: f.value })), V = v(() => ({})), I = v(() => _.value);
  function F() {
    p.value = !1, n.value = h, B();
  }
  const _ = W(), U = W(null), G = W("body");
  function B() {
    var k, $;
    if (m.value || o.loadingWait && u.value)
      return;
    _.value = mn({ cardMinWidth: (k = o.cardProps) == null ? void 0 : k.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: ($ = o.cardProps) == null ? void 0 : $.width, field: U.value });
    const x = $n({ attrs: t, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: s, showField: f, timeOpened: g.value });
    o = { ...o, ...x.settings }, f.value = x.showField, g.value = x.timeOpened, T !== null && o.closeSiblings && f.value && !o.fieldOnly && T.emit(x.timeOpened);
  }
  const D = W(), L = v(() => D.value);
  function q() {
    const x = gl({ required: o.required, rules: o.rules, value: n });
    return p.value = x.errors, D.value = x.results, x.results;
  }
  function H() {
    h = n.value, i("update", n.value), o.loadingWait || B();
  }
  let T, M;
  function Y(x) {
    i("update:closeSiblingFields", g), f.value && g.value !== x && F();
  }
  return J(() => f.value, () => {
    f.value && q();
  }), J(() => n.value, () => {
    f.value && q();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: x }) => {
    T = x(Bn), M = T.on(Y);
  }), Sn(() => {
    M !== void 0 && T.off(Y);
  }), (x, k) => (Z(), ae("div", { ref_key: "inlineFieldsContainer", ref: U, class: ee(r(w)), style: Ce(r(V)) }, [!r(f) && !r(o).fieldOnly || r(o).cardField ? (Z(), ae("div", { key: 0, class: ee(r(E)) }, [we("div", { class: ee(r(j)) }, [d(r(ml), Q(r(P), { onToggleField: B }), Ke({ _: 2 }, [Ye(r(a), ($, N) => ({ name: N, fn: ce((A) => [Ae(x.$slots, N, he(Be({ ...A })))]) }))]), 1040)], 2)], 2)) : pe("", !0), r(f) || r(o).fieldOnly || r(o).cardField ? (Z(), ae("div", { key: 1, class: ee(r(z)) }, [(Z(), Se(dn, { disabled: !r(o).cardField, to: r(G) }, [d(hs, Q(r(O), { modelValue: n.value, "onUpdate:modelValue": k[0] || (k[0] = ($) => n.value = $), "auto-grow": r(o).autoGrow, autofocus: !r(o).fieldOnly || r(o).autofocus, "clear-icon": r(b), color: r(o).color, density: r(o).density, disabled: r(u) || r(m), error: r(p), "error-messages": r(L), "hide-details": r(o).hideDetails, label: r(o).label, loading: r(u), rows: r(o).rows, variant: r(o).variant, width: "100%", onKeyup: rl(F, ["esc"]) }), Ke({ _: 2 }, [Ye(r(a), ($, N) => ({ name: N, fn: ce((A) => [Ae(x.$slots, N, he(Be({ ...A })))]) })), r(a).append ? void 0 : { name: "append", fn: ce(() => [d(r(Kn), { "cancel-button-color": r(o).cancelButtonColor, "cancel-button-size": r(o).cancelButtonSize, "cancel-button-title": r(o).cancelButtonTitle, "cancel-button-variant": r(o).cancelButtonVariant, "cancel-icon": r(o).cancelIcon, "cancel-icon-color": r(o).cancelIconColor, error: r(p), "field-only": r(o).fieldOnly, "hide-cancel-icon": r(o).hideCancelIcon, "hide-save-icon": r(o).hideSaveIcon, loading: r(u), "loading-icon": r(o).loadingIcon, "loading-icon-color": r(o).loadingIconColor, "save-button-color": r(o).saveButtonColor, "save-button-size": r(o).saveButtonSize, "save-button-title": r(o).saveButtonTitle, "save-button-variant": r(o).saveButtonVariant, "save-icon": r(o).saveIcon, "save-icon-color": r(o).saveIconColor, onClose: F, onSave: H }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "auto-grow", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "rows", "variant", "onKeyup"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), r(o).cardField ? (Z(), ae("div", { key: 2, class: ee(r(C)), style: Ce(r(I)) }, [d(An, he(Be(r(R))), { default: ce(() => [d(yn, null, { default: ce(() => [we("div", { ref_key: "cardFieldRef", ref: G }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }) }, Fs = (e) => {
  for (const l in Ge) {
    const n = Ge[l];
    e.component(n.name, n);
  }
};
for (const e in Ge)
  Ge[e].install = Fs;
const Os = Ge.VInlineAutocomplete, Ps = Ge.VInlineCheckbox, $s = Ge.VInlineCustomField, Ts = Ge.VInlineSelect, Es = Ge.VInlineSwitch, zs = Ge.VInlineTextField, Ds = Ge.VInlineTextarea, Ls = { VInlineFields: Ge };
export {
  Os as VInlineAutocomplete,
  Ps as VInlineCheckbox,
  $s as VInlineCustomField,
  Ts as VInlineSelect,
  Es as VInlineSwitch,
  zs as VInlineTextField,
  Ds as VInlineTextarea,
  Ls as default
};
(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode("[data-v-37a8d395] .v-field__field,[data-v-36fbbe97] .v-field__field{align-items:flex-end!important}:root{--v-inline-fields-top-padding-compact: 13px;--v-inline-fields-top-padding-comfortable: 17px;--v-inline-fields-top-padding-default: 21px;--v-inline-fields-input-height: 24px;--v-inline-fields-density-compact-height: 32px;--v-inline-fields-density-comfortable-height: 40px;--v-inline-fields-grey: #909090;--v-inline-fields-clearable-top-padding: 3px}.v-inline-fields--container-v-textarea-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-textarea-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-textarea-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-textarea-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-textarea-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-textarea-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-textarea-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-textarea-compact-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append{padding-top:var(--v-inline-fields-clearable-top-padding)!important}.v-inline-fields--container-v-textarea-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-textarea-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-textarea-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-textarea-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-textarea-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-textarea-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-textarea-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-textarea-compact-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append .v-icon{font-size:1rem!important}.v-inline-fields{position:relative}.v-inline-fields--display-container *{align-items:center;display:flex}.v-inline-fields--display-container-cell{cursor:pointer;display:block;max-height:unset!important}.v-inline-fields--display-container-cell>div{width:100%}.v-inline-fields--display-container-cell-underline-full-width .v-inline-fields--display-value{width:100%}.v-inline-fields--display-container-cell .v-inline-fields--selection-control .v-inline-fields--display-value{justify-content:center}.v-inline-fields--display-container-cell,.v-inline-fields--display-container-cell .v-input,.v-inline-fields--display-container-cell .v-inline-fields--display-wrapper,.v-inline-fields--display-container-cell .v-selection-control__wrapper{height:100%!important;width:100%}.v-inline-fields--display-value{cursor:pointer;letter-spacing:.009375em!important}.v-inline-fields--display-value-empty{color:var(--v-inline-fields-grey);font-style:italic}.v-inline-fields--display-value-checkbox,.v-inline-fields--display-value-switch{padding-bottom:2px;padding-top:6px}.v-inline-fields--display-append-icon,.v-inline-fields--display-prepend-icon,.v-inline-fields--display-append-inner-icon,.v-inline-fields--display-prepend-inner-icon{align-items:flex-end;display:inline-flex}.v-inline-fields--container-cell{height:100%;width:100%}.v-inline-fields--container-disabled .v-inline-fields--display-value{cursor:default!important;opacity:var(--v-disabled-opacity)}.v-inline-fields--container-loading .v-inline-fields--display-value{cursor:wait!important}.v-inline-fields--container-icon-set-fa .v-field__clearable{font-size:.8rem}.v-inline-fields--container-icon-set-fa .v-field__append-inner{align-items:flex-end;padding-bottom:0!important}.v-inline-fields--container-v-select-compact-plain .v-input,.v-inline-fields--container-v-select-compact-underlined .v-input,.v-inline-fields--container-v-text-field-compact-plain .v-input,.v-inline-fields--container-v-text-field-compact-underlined .v-input{height:var(--v-inline-fields-density-compact-height);max-height:var(--v-inline-fields-density-compact-height)}.v-inline-fields--container-v-select-compact-plain .v-input__control,.v-inline-fields--container-v-select-compact-underlined .v-input__control,.v-inline-fields--container-v-text-field-compact-plain .v-input__control,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control{padding-bottom:4px}.v-inline-fields--container-v-select-compact-plain .v-input>div:not(.v-input__details),.v-inline-fields--container-v-select-compact-underlined .v-input>div:not(.v-input__details),.v-inline-fields--container-v-text-field-compact-plain .v-input>div:not(.v-input__details),.v-inline-fields--container-v-text-field-compact-underlined .v-input>div:not(.v-input__details){height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input input{padding-bottom:10px}.v-inline-fields--container-v-select-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-compact-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-select__selection{align-items:center;padding-bottom:10px}.v-inline-fields--container-v-select-comfortable-plain .v-input,.v-inline-fields--container-v-select-comfortable-underlined .v-input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input{height:var(--v-inline-fields-density-comfortable-height);max-height:var(--v-inline-fields-density-comfortable-height)}.v-inline-fields--container-v-select-comfortable-plain .v-input__control,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control{padding-bottom:8px}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append{--v-inline-fields-clearable-top-padding: 8px}.v-inline-fields--container-v-select-comfortable-plain .v-input>div:not(.v-input__details),.v-inline-fields--container-v-select-comfortable-underlined .v-input>div:not(.v-input__details),.v-inline-fields--container-v-text-field-comfortable-plain .v-input>div:not(.v-input__details),.v-inline-fields--container-v-text-field-comfortable-underlined .v-input>div:not(.v-input__details){height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input input{padding-bottom:6px}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-select__selection{align-items:center;padding-bottom:6px}.v-inline-fields--container-v-select-compact-plain .v-field__append-inner,.v-inline-fields--container-v-select-compact-underlined .v-field__append-inner{padding-top:4px!important}.v-inline-fields--container-v-select-comfortable-plain .v-field__append-inner,.v-inline-fields--container-v-select-comfortable-underlined .v-field__append-inner{padding-top:8px!important}.v-inline-fields--container-v-textarea .v-inline-fields--save-fields-container{align-items:flex-end}.v-inline-fields--container-v-textarea-compact-plain .v-input__control,.v-inline-fields--container-v-textarea-compact-underlined .v-input__control{padding-bottom:4px}.v-inline-fields--container-v-textarea-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-textarea-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-textarea-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-textarea-compact-underlined .v-input__control .v-input__append{--v-inline-fields-clearable-top-padding: 8px}.v-inline-fields--container-v-textarea-comfortable-plain .v-input__control,.v-inline-fields--container-v-textarea-comfortable-underlined .v-input__control{padding-bottom:8px}.v-inline-fields--container-v-textarea-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-textarea-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-textarea-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-textarea-comfortable-underlined .v-input__control .v-input__append{--v-inline-fields-clearable-top-padding: 16px}.v-inline-fields--container-v-select,.v-inline-fields--container-v-textarea,.v-inline-fields--container-v-text-field{width:100%}.v-inline-fields--container-v-checkbox .v-input,.v-inline-fields--container-v-switch .v-input{align-items:center;display:flex;padding-bottom:0}.v-inline-fields--container-v-checkbox .v-input__append,.v-inline-fields--container-v-switch .v-input__append{margin-inline-start:0!important;margin-left:0;padding-bottom:0!important}.v-inline-fields--container-v-checkbox .v-selection-control,.v-inline-fields--container-v-switch .v-selection-control{min-height:unset}.v-inline-fields--container-v-checkbox .v-inline-fields--save-fields-container,.v-inline-fields--container-v-switch .v-inline-fields--save-fields-container{align-items:center!important}.v-inline-fields--container .v-input__append,.v-inline-fields--container .v-input__prepend,.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-top:0!important}.v-inline-fields--container .v-input__append .v-icon,.v-inline-fields--container .v-input__prepend .v-icon,.v-inline-fields--container .v-field__append-inner .v-icon,.v-inline-fields--container .v-field__prepend-inner .v-icon{font-size:1rem!important}.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container .v-input__details{height:fit-content!important;min-height:unset}.v-inline-fields--container-compact .v-input__append,.v-inline-fields--container-compact .v-input__prepend,.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-comfortable .v-input__append,.v-inline-fields--container-comfortable .v-input__prepend,.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{padding-bottom:6px!important}.v-inline-fields--container-default .v-input__append,.v-inline-fields--container-default .v-input__prepend,.v-inline-fields--container-default .v-field__append-inner,.v-inline-fields--container-default .v-field__prepend-inner{align-items:flex-end!important;padding-bottom:0!important}.v-inline-fields--container-default .v-input__append .v-icon,.v-inline-fields--container-default .v-input__prepend .v-icon,.v-inline-fields--container-default .v-field__append-inner .v-icon,.v-inline-fields--container-default .v-field__prepend-inner .v-icon{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)!important}.v-inline-fields--container-default .v-inline-fields--save-fields-container{align-items:flex-end!important}.v-inline-fields--card-container{height:fit-content;min-width:fit-content!important;position:absolute}.v-inline-fields--card-container .v-card{border:1px solid hsla(0,0%,50%,.5)}.v-inline-fields--card-container .v-card .v-card-text{padding:5px 10px}.v-inline-fields--card-container .v-card .v-card-text>div{align-items:center;display:flex}.v-inline-fields--card-container-checkbox .v-card .v-card-text .v-input__append{margin-inline-start:0}.v-inline-fields--save-fields-container{align-items:center;display:flex;height:100%;margin-left:.1rem}.v-inline-fields--boolean-icons{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-inline-fields .truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:250px}.v-inline-fields .v-input__append{padding-top:0}")),document.head.appendChild(i)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
