import { Fragment as fe, reactive as ze, computed as v, watchEffect as Ue, toRefs as Po, capitalize as $o, warn as Mt, inject as ve, ref as j, unref as s, provide as Te, shallowRef as se, defineComponent as Re, camelize as Eo, h as Rt, getCurrentInstance as Xa, onBeforeUnmount as on, watch as Y, readonly as hl, onScopeDispose as we, effectScope as bl, toRaw as nn, TransitionGroup as Ka, Transition as yn, createVNode as d, mergeProps as X, onBeforeMount as To, nextTick as xe, withDirectives as Be, resolveDirective as Xe, vShow as Dn, isRef as mn, onMounted as Ln, toRef as Q, Text as Za, resolveDynamicComponent as Ja, Teleport as rn, cloneVNode as Qa, createTextVNode as zo, vModelText as ei, mergeModels as _e, useModel as sn, openBlock as U, createBlock as he, useSlots as un, createElementBlock as le, normalizeClass as J, normalizeStyle as ge, renderSlot as Fe, normalizeProps as ye, createCommentVNode as pe, createElementVNode as Ie, toDisplayString as Cl, useAttrs as cn, withCtx as re, mergeDefaults as Sn, onUnmounted as xn, createSlots as Ge, renderList as qe, guardReactiveProps as be, withKeys as St } from "vue";
import { useTheme as Il } from "vuetify";
import { useWindowSize as ni } from "@vueuse/core";
/**
 * @name vuetify-inline-fields
 * @version 1.0.0-beta-1.9
 * @description Vuetify Inline Fields Component Library offers a comprehensive collection of reusable UI components to create elegant and efficient inline form fields within your applications.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-inline-fields/
 * @repository https://github.com/webdevnerdstuff/vuetify-inline-fields
 * @license MIT License
 */
const Bn = Symbol("identifier"), kn = { elevation: 5, variant: "flat" }, ot = { cancelButtonColor: "default", cancelButtonSize: "x-small", cancelButtonTitle: "Cancel", cancelButtonVariant: "text", cancelIcon: void 0, cancelIconColor: "default", cardField: !1, cardOffsetX: 0, cardOffsetY: 0, cardProps: () => ({}), closeSiblings: !1, color: "primary", density: "compact", disabled: !1, displayAppendIcon: void 0, displayAppendIconColor: void 0, displayAppendIconSize: "x-small", displayAppendInnerIcon: void 0, displayAppendInnerIconColor: void 0, displayAppendInnerIconSize: "x-small", displayPrependIcon: void 0, displayPrependIconColor: void 0, displayPrependIconSize: "x-small", displayPrependInnerIcon: void 0, displayPrependInnerIconColor: void 0, displayPrependInnerIconSize: "x-small", emptyText: "empty", fieldOnly: !1, hideDetails: !0, label: "", loading: !1, loadingWait: !0, name: "", tableField: !0, underlineColor: "primary", underlineStyle: "dotted", underlineWidth: "2px", underlined: !0, valueColor: "default" }, Sl = { autofocus: !0 }, Nt = { hideSaveIcon: !1, loadingIcon: void 0, loadingIconColor: "primary", saveButtonColor: "primary", saveButtonSize: "x-small", saveButtonTitle: "Save", saveButtonVariant: "text", saveIcon: void 0, saveIconColor: "primary" }, Do = { falseValue: !1, iconFalse: void 0, iconFalseColor: "danger", iconFalseTitle: "No", iconTrue: void 0, iconTrueColor: "success", iconTrueTitle: "Yes", icons: !0, trueValue: !0 }, ti = { ...ot, ...Do, ...Nt, falseIcon: void 0, icons: !0, trueIcon: void 0 }, li = { ...ot, ...Sl, ...Nt, clearIcon: void 0, clearable: !1, hideSelected: !0, itemTitle: "title", itemValue: "value", items: () => [], menu: !0, variant: "underlined" }, oi = { ...ot, ...Do, icons: !0, falseIcon: "" }, ai = { ...Sl, ...Nt, ...ot, autoGrow: !0, rows: 1, truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, Lo = { ...ot, ...Sl, ...Nt, truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, ii = { fa: { checkboxFalse: "$checkboxOff", checkboxTrue: "far fa-square-check", clear: "$clear", false: "$close", loading: "fa-circle-notch", save: "fa-floppy-disk", true: "$complete" }, mdi: { checkboxFalse: "$checkboxOff", checkboxTrue: "mdi:mdi-checkbox-outline", clear: "$clear", false: "$close", loading: "mdi-loading", save: "mdi-content-save", true: "$complete" } }, De = (e) => {
  const { icon: l, iconOptions: n, name: t } = e;
  if (l)
    return l;
  const a = ii[n == null ? void 0 : n.defaultSet];
  if (!a)
    throw new Error(`VInlineFields: No VInlineFields default ${n == null ? void 0 : n.defaultSet} icon set found for ${t}. Please set the icon prop.`);
  const i = a[t];
  if (!i)
    throw new Error(`VInlineFields: No ${t} icon found. Please set the icon prop, or set the default icon set to 'mdi' or 'fa'`);
  return i;
};
function q(e, l) {
  return (n) => Object.keys(e).reduce((t, a) => {
    const i = typeof e[a] == "object" && e[a] != null && !Array.isArray(e[a]) ? e[a] : { type: e[a] };
    return t[a] = n && a in n ? { ...i, default: n[a] } : i, l && !t[a].source && (t[a].source = l), t;
  }, {});
}
const ie = q({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component"), Ee = typeof window < "u", xl = Ee && "IntersectionObserver" in window;
function Rl(e, l, n) {
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
function at(e, l) {
  if (e === l)
    return !0;
  if (e instanceof Date && l instanceof Date && e.getTime() !== l.getTime() || e !== Object(e) || l !== Object(l))
    return !1;
  const n = Object.keys(e);
  return n.length === Object.keys(l).length && n.every((t) => at(e[t], l[t]));
}
function He(e, l, n) {
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
    return function(a, i, u) {
      return a != null && i && typeof i == "string" ? a[i] !== void 0 ? a[i] : Rl(a, (i = (i = i.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), u) : u;
    }(e, l, n);
  if (Array.isArray(l))
    return Rl(e, l, n);
  if (typeof l != "function")
    return n;
  const t = l(e, n);
  return t === void 0 ? n : t;
}
function ee(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${l}` : void 0;
}
function nl(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function tl(e) {
  return e && "$el" in e ? e.$el : e;
}
const Nl = Object.freeze({ enter: 13, tab: 9, delete: 46, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39, end: 35, home: 36, del: 46, backspace: 8, insert: 45, pageup: 33, pagedown: 34, shift: 16 });
function Ut(e, l) {
  return l.every((n) => e.hasOwnProperty(n));
}
function En(e, l, n) {
  const t = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    l.some((u) => u instanceof RegExp ? u.test(i) : u === i) && !(n != null && n.some((u) => u === i)) ? t[i] = e[i] : a[i] = e[i];
  return [t, a];
}
function it(e, l) {
  const n = { ...e };
  return l.forEach((t) => delete n[t]), n;
}
const Wo = /^on[^a-z]/, ll = (e) => Wo.test(e), ri = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function rt(e) {
  const [l, n] = En(e, [Wo]), t = it(l, ri), [a, i] = En(n, ["class", "style", "id", /^data-/]);
  return Object.assign(a, l), Object.assign(i, t), [a, i];
}
function tn(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Zn(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(l, Math.min(n, e));
}
function jl(e, l) {
  return e + (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, l - e.length));
}
function Cn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const t = {};
  for (const a in e)
    t[a] = e[a];
  for (const a in l) {
    const i = e[a], u = l[a];
    nl(i) && nl(u) ? t[a] = Cn(i, u, n) : Array.isArray(i) && Array.isArray(u) && n ? t[a] = n(i, u) : t[a] = u;
  }
  return t;
}
function Mo(e) {
  return e.map((l) => l.type === fe ? Mo(l.children) : l).flat();
}
function dn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (dn.cache.has(e))
    return dn.cache.get(e);
  const l = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return dn.cache.set(e, l), l;
}
function xt(e, l) {
  if (!l || typeof l != "object")
    return [];
  if (Array.isArray(l))
    return l.map((n) => xt(e, n)).flat(1);
  if (Array.isArray(l.children))
    return l.children.map((n) => xt(e, n)).flat(1);
  if (l.component) {
    if (Object.getOwnPropertySymbols(l.component.provides).includes(e))
      return [l.component];
    if (l.component.subTree)
      return xt(e, l.component.subTree).flat(1);
  }
  return [];
}
function Bl(e) {
  const l = ze({}), n = v(e);
  return Ue(() => {
    for (const t in n.value)
      l[t] = n.value[t];
  }, { flush: "sync" }), Po(l);
}
function wt(e, l) {
  return e.includes(l);
}
function Gl(e) {
  return e[2].toLowerCase() + e.slice(3);
}
dn.cache = /* @__PURE__ */ new Map();
const Ne = () => [Function, Array];
function ql(e, l) {
  return !!(e[l = "on" + $o(l)] || e[`${l}Once`] || e[`${l}Capture`] || e[`${l}OnceCapture`] || e[`${l}CaptureOnce`]);
}
function Ro(e) {
  for (var l = arguments.length, n = new Array(l > 1 ? l - 1 : 0), t = 1; t < l; t++)
    n[t - 1] = arguments[t];
  if (Array.isArray(e))
    for (const a of e)
      a(...n);
  else
    typeof e == "function" && e(...n);
}
function ol(e) {
  let l = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
  const n = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((t) => `${t}${l ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(n)];
}
function No(e, l, n) {
  let t, a = e.indexOf(document.activeElement);
  const i = l === "next" ? 1 : -1;
  do
    a += i, t = e[a];
  while ((!t || t.offsetParent == null || !((n == null ? void 0 : n(t)) ?? 1)) && a < e.length && a >= 0);
  return t;
}
function Ft(e, l) {
  var t, a, i, u;
  const n = ol(e);
  if (l)
    if (l === "first")
      (t = n[0]) == null || t.focus();
    else if (l === "last")
      (a = n.at(-1)) == null || a.focus();
    else if (typeof l == "number")
      (i = n[l]) == null || i.focus();
    else {
      const o = No(n, l);
      o ? o.focus() : Ft(e, l === "next" ? "first" : "last");
    }
  else
    e !== document.activeElement && e.contains(document.activeElement) || ((u = n[0]) == null || u.focus());
}
function Vt(e, l) {
  if (!(Ee && typeof CSS < "u" && CSS.supports !== void 0 && CSS.supports(`selector(${l})`)))
    return null;
  try {
    return !!e && e.matches(l);
  } catch {
    return null;
  }
}
const jo = ["top", "bottom"], si = ["start", "end", "left", "right"];
function al(e, l) {
  let [n, t] = e.split(" ");
  return t || (t = wt(jo, n) ? "start" : wt(si, n) ? "top" : "center"), { side: Hl(n, l), align: Hl(t, l) };
}
function Hl(e, l) {
  return e === "start" ? l ? "right" : "left" : e === "end" ? l ? "left" : "right" : e;
}
function Yt(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function Xt(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function Ul(e) {
  return { side: e.align, align: e.side };
}
function Yl(e) {
  return wt(jo, e.side) ? "y" : "x";
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
function Xl(e, l) {
  return { x: { before: Math.max(0, l.left - e.left), after: Math.max(0, e.right - l.right) }, y: { before: Math.max(0, l.top - e.top), after: Math.max(0, e.bottom - l.bottom) } };
}
function kl(e) {
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
    const p = n.transformOrigin, y = l.x - o - (1 - i) * parseFloat(p), c = l.y - r - (1 - u) * parseFloat(p.slice(p.indexOf(" ") + 1)), f = i ? l.width / i : e.offsetWidth + 1, m = u ? l.height / u : e.offsetHeight + 1;
    return new wn({ x: y, y: c, width: f, height: m });
  }
  return new wn(l);
}
function In(e, l, n) {
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
const ht = /* @__PURE__ */ new WeakMap(), bn = 2.4, Kl = 0.2126729, Zl = 0.7151522, Jl = 0.072175, ui = 0.55, ci = 0.58, di = 0.57, pi = 0.62, bt = 0.03, Ql = 1.45, vi = 5e-4, fi = 1.25, yi = 1.25, eo = 0.078, no = 12.82051282051282, Ct = 0.06, to = 1e-3;
function lo(e, l) {
  const n = (e.r / 255) ** bn, t = (e.g / 255) ** bn, a = (e.b / 255) ** bn, i = (l.r / 255) ** bn, u = (l.g / 255) ** bn, o = (l.b / 255) ** bn;
  let r, p = n * Kl + t * Zl + a * Jl, y = i * Kl + u * Zl + o * Jl;
  if (p <= bt && (p += (bt - p) ** Ql), y <= bt && (y += (bt - y) ** Ql), Math.abs(y - p) < vi)
    return 0;
  if (y > p) {
    const c = (y ** ui - p ** ci) * fi;
    r = c < to ? 0 : c < eo ? c - c * no * Ct : c - Ct;
  } else {
    const c = (y ** pi - p ** di) * yi;
    r = c > -to ? 0 : c > -eo ? c - c * no * Ct : c + Ct;
  }
  return 100 * r;
}
function Xn(e) {
  Mt(`Vuetify: ${e}`);
}
function oo(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
const ao = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, mi = { rgb: (e, l, n, t) => ({ r: e, g: l, b: n, a: t }), rgba: (e, l, n, t) => ({ r: e, g: l, b: n, a: t }), hsl: (e, l, n, t) => io({ h: e, s: l, l: n, a: t }), hsla: (e, l, n, t) => io({ h: e, s: l, l: n, a: t }), hsv: (e, l, n, t) => Jn({ h: e, s: l, v: n, a: t }), hsva: (e, l, n, t) => Jn({ h: e, s: l, v: n, a: t }) };
function Hn(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && Xn(`'${e}' is not a valid hex color`), { r: (16711680 & e) >> 16, g: (65280 & e) >> 8, b: 255 & e };
  if (typeof e == "string" && ao.test(e)) {
    const { groups: l } = e.match(ao), { fn: n, values: t } = l, a = t.split(/,\s*/).map((i) => i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(i) / 100 : parseFloat(i));
    return mi[n](...a);
  }
  if (typeof e == "string") {
    let l = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(l.length) ? l = l.split("").map((t) => t + t).join("") : [6, 8].includes(l.length) || Xn(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(l, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && Xn(`'${e}' is not a valid hex(a) color`), function(t) {
      t = function(r) {
        return r.startsWith("#") && (r = r.slice(1)), r = r.replace(/([^0-9a-f])/gi, "F"), (r.length === 3 || r.length === 4) && (r = r.split("").map((p) => p + p).join("")), r.length !== 6 && (r = jl(jl(r, 6), 8, "F")), r;
      }(t);
      let [a, i, u, o] = function(r) {
        let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        const y = [];
        let c = 0;
        for (; c < r.length; )
          y.push(r.substr(c, p)), c += p;
        return y;
      }(t, 2).map((r) => parseInt(r, 16));
      return o = o === void 0 ? o : o / 255, { r: a, g: i, b: u, a: o };
    }(l);
  }
  if (typeof e == "object") {
    if (Ut(e, ["r", "g", "b"]))
      return e;
    if (Ut(e, ["h", "s", "l"]))
      return Jn(Go(e));
    if (Ut(e, ["h", "s", "v"]))
      return Jn(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Jn(e) {
  const { h: l, s: n, v: t, a } = e, i = (o) => {
    const r = (o + l / 60) % 6;
    return t - t * n * Math.max(Math.min(r, 4 - r, 1), 0);
  }, u = [i(5), i(3), i(1)].map((o) => Math.round(255 * o));
  return { r: u[0], g: u[1], b: u[2], a };
}
function io(e) {
  return Jn(Go(e));
}
function Go(e) {
  const { h: l, s: n, l: t, a } = e, i = t + n * Math.min(t, 1 - t);
  return { h: l, s: i === 0 ? 0 : 2 - 2 * t / i, v: i, a };
}
const At = Symbol.for("vuetify:defaults");
function wl() {
  const e = ve(At);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Wn(e, l) {
  const n = wl(), t = j(e), a = v(() => {
    if (s(l == null ? void 0 : l.disabled))
      return n.value;
    const i = s(l == null ? void 0 : l.scoped), u = s(l == null ? void 0 : l.reset), o = s(l == null ? void 0 : l.root);
    if (t.value == null && !(i || u || o))
      return n.value;
    let r = Cn(t.value, { prev: n.value });
    if (i)
      return r;
    if (u || o) {
      const p = Number(u || 1 / 0);
      for (let y = 0; y <= p && r && "prev" in r; y++)
        r = r.prev;
      return r && typeof o == "string" && o in r && (r = Cn(Cn(r, { prev: r }), r[o])), r;
    }
    return r.prev ? Cn(r.prev, r) : r;
  });
  return Te(At, a), a;
}
function gi() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : wl();
  const t = ke("useDefaults");
  if (l = l ?? t.type.name ?? t.type.__name, !l)
    throw new Error("[Vuetify] Could not determine component name");
  const a = v(() => {
    var o;
    return (o = n.value) == null ? void 0 : o[e._as ?? l];
  }), i = new Proxy(e, { get(o, r) {
    var y, c, f, m;
    const p = Reflect.get(o, r);
    return r === "class" || r === "style" ? [(y = a.value) == null ? void 0 : y[r], p].filter((b) => b != null) : typeof r != "string" || function(b, h) {
      var g, S;
      return ((g = b.props) == null ? void 0 : g[h]) !== void 0 || ((S = b.props) == null ? void 0 : S[dn(h)]) !== void 0;
    }(t.vnode, r) ? p : ((c = a.value) == null ? void 0 : c[r]) ?? ((m = (f = n.value) == null ? void 0 : f.global) == null ? void 0 : m[r]) ?? p;
  } }), u = se();
  return Ue(() => {
    if (a.value) {
      const o = Object.entries(a.value).filter((r) => {
        let [p] = r;
        return p.startsWith(p[0].toUpperCase());
      });
      u.value = o.length ? Object.fromEntries(o) : void 0;
    } else
      u.value = void 0;
  }), { props: i, provideSubDefaults: function() {
    const o = function(r) {
      let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ke("injectSelf");
      const { provides: y } = p;
      if (y && r in y)
        return y[r];
    }(At, t);
    Te(At, v(() => u.value ? Cn((o == null ? void 0 : o.value) ?? {}, u.value) : o == null ? void 0 : o.value));
  } };
}
function Qn(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return Xn("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = q(e.props ?? {}, e.name)();
    const l = Object.keys(e.props);
    e.filterProps = function(n) {
      return En(n, l, ["class", "style"]);
    }, e.props._as = String, e.setup = function(n, t) {
      const a = wl();
      if (!a.value)
        return e._setup(n, t);
      const { props: i, provideSubDefaults: u } = gi(n, n._as ?? e.name, a), o = e._setup(i, t);
      return u(), o;
    };
  }
  return e;
}
function Z() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (l) => (e ? Qn : Re)(l);
}
function st(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return Z()({ name: n ?? $o(Eo(e.replace(/__/g, "-"))), props: { tag: { type: String, default: l }, ...ie() }, setup(t, a) {
    let { slots: i } = a;
    return () => {
      var u;
      return Rt(t.tag, { class: [e, t.class], style: t.style }, (u = i.default) == null ? void 0 : u.call(i));
    };
  } });
}
function qo(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; )
      e = e.parentNode;
    return e !== document ? null : document;
  }
  const l = e.getRootNode();
  return l !== document && l.getRootNode({ composed: !0 }) !== document ? null : l;
}
const _t = "cubic-bezier(0.4, 0, 0.2, 1)";
function ke(e, l) {
  const n = Xa();
  if (!n)
    throw new Error(`[Vuetify] ${e} ${l || "must be called from inside a setup function"}`);
  return n;
}
function Ke() {
  const e = ke(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return dn((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let Ho = 0, Bt = /* @__PURE__ */ new WeakMap();
function Le() {
  const e = ke("getUid");
  if (Bt.has(e))
    return Bt.get(e);
  {
    const l = Ho++;
    return Bt.set(e, l), l;
  }
}
function Uo(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
  for (; e; ) {
    if (l ? hi(e) : Fl(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Ot(e, l) {
  const n = [];
  if (l && e && !l.contains(e))
    return n;
  for (; e && (Fl(e) && n.push(e), e !== l); )
    e = e.parentElement;
  return n;
}
function Fl(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const l = window.getComputedStyle(e);
  return l.overflowY === "scroll" || l.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function hi(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const l = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(l.overflowY);
}
function te(e) {
  ke("useRender").render = e;
}
function Vl(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = j(), t = j();
  if (Ee) {
    const a = new ResizeObserver((i) => {
      e == null || e(i, a), i.length && (t.value = l === "content" ? i[0].contentRect : i[0].target.getBoundingClientRect());
    });
    on(() => {
      a.disconnect();
    }), Y(n, (i, u) => {
      u && (a.unobserve(tl(u)), t.value = void 0), i && a.observe(tl(i));
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: hl(t) };
}
function pn(e, l) {
  let n;
  function t() {
    n = bl(), n.run(() => l.length ? l(() => {
      n == null || n.stop(), t();
    }) : l());
  }
  Y(e, (a) => {
    a && !n ? t() : a || (n == null || n.stop(), n = void 0);
  }, { immediate: !0 }), we(() => {
    n == null || n.stop();
  });
}
function me(e, l, n) {
  let t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (y) => y, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (y) => y;
  const i = ke("useProxiedModel"), u = j(e[l] !== void 0 ? e[l] : n), o = dn(l), r = v(o !== l ? () => {
    var y, c, f, m;
    return e[l], !(!((y = i.vnode.props) != null && y.hasOwnProperty(l)) && !((c = i.vnode.props) != null && c.hasOwnProperty(o)) || !((f = i.vnode.props) != null && f.hasOwnProperty(`onUpdate:${l}`)) && !((m = i.vnode.props) != null && m.hasOwnProperty(`onUpdate:${o}`)));
  } : () => {
    var y, c;
    return e[l], !(!((y = i.vnode.props) != null && y.hasOwnProperty(l)) || !((c = i.vnode.props) != null && c.hasOwnProperty(`onUpdate:${l}`)));
  });
  pn(() => !r.value, () => {
    Y(() => e[l], (y) => {
      u.value = y;
    });
  });
  const p = v({ get() {
    const y = e[l];
    return t(r.value ? y : u.value);
  }, set(y) {
    const c = a(y), f = nn(r.value ? e[l] : u.value);
    f !== c && t(f) !== y && (u.value = c, i == null || i.emit(`update:${l}`, c));
  } });
  return Object.defineProperty(p, "externalValue", { get: () => r.value ? e[l] : u.value }), p;
}
Le.reset = () => {
  Ho = 0, Bt = /* @__PURE__ */ new WeakMap();
};
const Yo = Symbol.for("vuetify:locale");
function Al() {
  const e = ve(Yo);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function ut() {
  const e = ve(Yo);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const ro = Symbol.for("vuetify:theme"), Ce = q({ theme: String }, "theme");
function Ve(e) {
  ke("provideTheme");
  const l = ve(ro, null);
  if (!l)
    throw new Error("Could not find Vuetify theme injection");
  const n = v(() => e.theme ?? l.name.value), t = v(() => l.themes.value[n.value]), a = v(() => l.isDisabled ? void 0 : `v-theme--${n.value}`), i = { ...l, name: n, current: t, themeClasses: a };
  return Te(ro, i), i;
}
const $e = q({ tag: { type: String, default: "div" } }, "tag"), bi = q({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function Oe(e, l, n) {
  return Z()({ name: e, props: bi({ mode: n, origin: l }), setup(t, a) {
    let { slots: i } = a;
    const u = { onBeforeEnter(o) {
      t.origin && (o.style.transformOrigin = t.origin);
    }, onLeave(o) {
      if (t.leaveAbsolute) {
        const { offsetTop: r, offsetLeft: p, offsetWidth: y, offsetHeight: c } = o;
        o._transitionInitialStyles = { position: o.style.position, top: o.style.top, left: o.style.left, width: o.style.width, height: o.style.height }, o.style.position = "absolute", o.style.top = `${r}px`, o.style.left = `${p}px`, o.style.width = `${y}px`, o.style.height = `${c}px`;
      }
      t.hideOnLeave && o.style.setProperty("display", "none", "important");
    }, onAfterLeave(o) {
      if (t.leaveAbsolute && (o != null && o._transitionInitialStyles)) {
        const { position: r, top: p, left: y, width: c, height: f } = o._transitionInitialStyles;
        delete o._transitionInitialStyles, o.style.position = r || "", o.style.top = p || "", o.style.left = y || "", o.style.width = c || "", o.style.height = f || "";
      }
    } };
    return () => {
      const o = t.group ? Ka : yn;
      return Rt(o, { name: t.disabled ? "" : e, css: !t.disabled, ...t.group ? void 0 : { mode: t.mode }, ...t.disabled ? {} : u }, i.default);
    };
  } });
}
function Xo(e, l) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return Z()({ name: e, props: { mode: { type: String, default: n }, disabled: Boolean }, setup(t, a) {
    let { slots: i } = a;
    return () => Rt(yn, { name: t.disabled ? "" : e, css: !t.disabled, ...t.disabled ? {} : l }, i.default);
  } });
}
function Ko() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", n = Eo(`offset-${l}`);
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
const Ci = q({ target: Object }, "v-dialog-transition"), Zo = Z()({ name: "VDialogTransition", props: Ci(), setup(e, l) {
  let { slots: n } = l;
  const t = { onBeforeEnter(a) {
    a.style.pointerEvents = "none", a.style.visibility = "hidden";
  }, async onEnter(a, i) {
    var f;
    await new Promise((m) => requestAnimationFrame(m)), await new Promise((m) => requestAnimationFrame(m)), a.style.visibility = "";
    const { x: u, y: o, sx: r, sy: p, speed: y } = uo(e.target, a), c = In(a, [{ transform: `translate(${u}px, ${o}px) scale(${r}, ${p})`, opacity: 0 }, {}], { duration: 225 * y, easing: "cubic-bezier(0.0, 0, 0.2, 1)" });
    (f = so(a)) == null || f.forEach((m) => {
      In(m, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * y, easing: _t });
    }), c.finished.then(() => i());
  }, onAfterEnter(a) {
    a.style.removeProperty("pointer-events");
  }, onBeforeLeave(a) {
    a.style.pointerEvents = "none";
  }, async onLeave(a, i) {
    var c;
    await new Promise((f) => requestAnimationFrame(f));
    const { x: u, y: o, sx: r, sy: p, speed: y } = uo(e.target, a);
    In(a, [{}, { transform: `translate(${u}px, ${o}px) scale(${r}, ${p})`, opacity: 0 }], { duration: 125 * y, easing: "cubic-bezier(0.4, 0, 1, 1)" }).finished.then(() => i()), (c = so(a)) == null || c.forEach((f) => {
      In(f, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * y, easing: _t });
    });
  }, onAfterLeave(a) {
    a.style.removeProperty("pointer-events");
  } };
  return () => e.target ? d(yn, X({ name: "dialog-transition" }, t, { css: !1 }), n) : d(yn, { name: "dialog-transition" }, n);
} });
function so(e) {
  var n;
  const l = (n = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : n.children;
  return l && [...l];
}
function uo(e, l) {
  const n = e.getBoundingClientRect(), t = kl(l), [a, i] = getComputedStyle(l).transformOrigin.split(" ").map((S) => parseFloat(S)), [u, o] = getComputedStyle(l).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let r = n.left + n.width / 2;
  u === "left" || o === "left" ? r -= n.width / 2 : u !== "right" && o !== "right" || (r += n.width / 2);
  let p = n.top + n.height / 2;
  u === "top" || o === "top" ? p -= n.height / 2 : u !== "bottom" && o !== "bottom" || (p += n.height / 2);
  const y = n.width / t.width, c = n.height / t.height, f = Math.max(1, y, c), m = y / f || 0, b = c / f || 0, h = t.width * t.height / (window.innerWidth * window.innerHeight), g = h > 0.12 ? Math.min(1.5, 10 * (h - 0.12) + 1) : 1;
  return { x: r - (a + t.left), y: p - (i + t.top), sx: m, sy: b, speed: g };
}
Oe("fab-transition", "center center", "out-in"), Oe("dialog-bottom-transition"), Oe("dialog-top-transition"), Oe("fade-transition");
const Ii = Oe("scale-transition");
Oe("scroll-x-transition"), Oe("scroll-x-reverse-transition"), Oe("scroll-y-transition"), Oe("scroll-y-reverse-transition"), Oe("slide-x-transition"), Oe("slide-x-reverse-transition");
const Jo = Oe("slide-y-transition");
Oe("slide-y-reverse-transition");
const Si = Xo("expand-transition", Ko()), Qo = Xo("expand-x-transition", Ko("", !0)), xi = q({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Se = Z(!1)({ name: "VDefaultsProvider", props: xi(), setup(e, l) {
  let { slots: n } = l;
  const { defaults: t, disabled: a, reset: i, root: u, scoped: o } = Po(e);
  return Wn(t, { reset: i, root: u, scoped: o, disabled: a }), () => {
    var r;
    return (r = n.default) == null ? void 0 : r.call(n);
  };
} }), gn = q({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function hn(e) {
  return { dimensionStyles: v(() => ({ height: ee(e.height), maxHeight: ee(e.maxHeight), maxWidth: ee(e.maxWidth), minHeight: ee(e.minHeight), minWidth: ee(e.minWidth), width: ee(e.width) })) };
}
const ea = q({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...ie(), ...gn() }, "VResponsive"), co = Z()({ name: "VResponsive", props: ea(), setup(e, l) {
  let { slots: n } = l;
  const { aspectStyles: t } = function(i) {
    return { aspectStyles: v(() => {
      const u = Number(i.aspectRatio);
      return u ? { paddingBottom: String(1 / u * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: a } = hn(e);
  return te(() => {
    var i;
    return d("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [a.value, e.style] }, [d("div", { class: "v-responsive__sizer", style: t.value }, null), (i = n.additional) == null ? void 0 : i.call(n), n.default && d("div", { class: ["v-responsive__content", e.contentClass] }, [n.default()])]);
  }), {};
} }), ct = q({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), en = (e, l) => {
  let { slots: n } = l;
  const { transition: t, disabled: a, ...i } = e, { component: u = yn, ...o } = typeof t == "object" ? t : {};
  return Rt(u, X(typeof t == "string" ? { name: a ? "" : t } : o, i, { disabled: a }), n);
};
function po(e, l) {
  var t;
  const n = (t = e._observe) == null ? void 0 : t[l.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[l.instance.$.uid]);
}
const _l = { mounted: function(e, l) {
  if (!xl)
    return;
  const n = l.modifiers || {}, t = l.value, { handler: a, options: i } = typeof t == "object" ? t : { handler: t, options: {} }, u = new IntersectionObserver(function() {
    var c;
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 ? arguments[1] : void 0;
    const p = (c = e._observe) == null ? void 0 : c[l.instance.$.uid];
    if (!p)
      return;
    const y = o.some((f) => f.isIntersecting);
    !a || n.quiet && !p.init || n.once && !y && !p.init || a(y, o, r), y && n.once ? po(e, l) : p.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[l.instance.$.uid] = { init: !1, observer: u }, u.observe(e);
}, unmounted: po }, Bi = q({ alt: String, cover: Boolean, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, srcset: String, ...ea(), ...ie(), ...ct() }, "VImg"), na = Z()({ name: "VImg", directives: { intersect: _l }, props: Bi(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, l) {
  let { emit: n, slots: t } = l;
  const a = se(""), i = j(), u = se(e.eager ? "loading" : "idle"), o = se(), r = se(), p = v(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), y = v(() => p.value.aspect || o.value / r.value || 0);
  function c(x) {
    if ((!e.eager || !x) && (!xl || x || e.eager)) {
      if (u.value = "loading", p.value.lazySrc) {
        const C = new Image();
        C.src = p.value.lazySrc, g(C, null);
      }
      p.value.src && xe(() => {
        var C, $;
        if (n("loadstart", ((C = i.value) == null ? void 0 : C.currentSrc) || p.value.src), ($ = i.value) == null ? void 0 : $.complete) {
          if (i.value.naturalWidth || m(), u.value === "error")
            return;
          y.value || g(i.value, null), f();
        } else
          y.value || g(i.value), b();
      });
    }
  }
  function f() {
    var x;
    b(), u.value = "loaded", n("load", ((x = i.value) == null ? void 0 : x.currentSrc) || p.value.src);
  }
  function m() {
    var x;
    u.value = "error", n("error", ((x = i.value) == null ? void 0 : x.currentSrc) || p.value.src);
  }
  function b() {
    const x = i.value;
    x && (a.value = x.currentSrc || x.src);
  }
  Y(() => e.src, () => {
    c(u.value !== "idle");
  }), Y(y, (x, C) => {
    !x && C && i.value && g(i.value);
  }), To(() => c());
  let h = -1;
  function g(x) {
    let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const $ = () => {
      clearTimeout(h);
      const { naturalHeight: B, naturalWidth: E } = x;
      B || E ? (o.value = E, r.value = B) : x.complete || u.value !== "loading" || C == null ? (x.currentSrc.endsWith(".svg") || x.currentSrc.startsWith("data:image/svg+xml")) && (o.value = 1, r.value = 1) : h = window.setTimeout($, C);
    };
    $();
  }
  const S = v(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), V = () => {
    var $;
    if (!p.value.src || u.value === "idle")
      return null;
    const x = d("img", { class: ["v-img__img", S.value], src: p.value.src, srcset: p.value.srcset, alt: e.alt, sizes: e.sizes, ref: i, onLoad: f, onError: m }, null), C = ($ = t.sources) == null ? void 0 : $.call(t);
    return d(en, { transition: e.transition, appear: !0 }, { default: () => [Be(C ? d("picture", { class: "v-img__picture" }, [C, x]) : x, [[Dn, u.value === "loaded"]])] });
  }, w = () => d(en, { transition: e.transition }, { default: () => [p.value.lazySrc && u.value !== "loaded" && d("img", { class: ["v-img__img", "v-img__img--preload", S.value], src: p.value.lazySrc, alt: e.alt }, null)] }), N = () => t.placeholder ? d(en, { transition: e.transition, appear: !0 }, { default: () => [(u.value === "loading" || u.value === "error" && !t.error) && d("div", { class: "v-img__placeholder" }, [t.placeholder()])] }) : null, O = () => t.error ? d(en, { transition: e.transition, appear: !0 }, { default: () => [u.value === "error" && d("div", { class: "v-img__error" }, [t.error()])] }) : null, z = () => e.gradient ? d("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, F = se(!1);
  {
    const x = Y(y, (C) => {
      C && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          F.value = !0;
        });
      }), x());
    });
  }
  return te(() => {
    const [x] = co.filterProps(e);
    return Be(d(co, X({ class: ["v-img", { "v-img--booting": !F.value }, e.class], style: [{ width: ee(e.width === "auto" ? o.value : e.width) }, e.style] }, x, { aspectRatio: y.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => d(fe, null, [d(V, null, null), d(w, null, null), d(z, null, null), d(N, null, null), d(O, null, null)]), default: t.default }), [[Xe("intersect"), { handler: c, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: a, image: i, state: u, naturalWidth: o, naturalHeight: r };
} }), Mn = q({ border: [Boolean, Number, String] }, "border");
function Rn(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ke();
  return { borderClasses: v(() => {
    const n = mn(e) ? e.value : e.border, t = [];
    if (n === !0 || n === "")
      t.push(`${l}--border`);
    else if (typeof n == "string" || n === 0)
      for (const a of String(n).split(" "))
        t.push(`border-${a}`);
    return t;
  }) };
}
function Ol(e) {
  return Bl(() => {
    const l = [], n = {};
    if (e.value.background)
      if (oo(e.value.background)) {
        if (n.backgroundColor = e.value.background, !e.value.text) {
          const t = Hn(e.value.background);
          if (t.a == null || t.a === 1) {
            const a = function(i) {
              const u = Math.abs(lo(Hn(0), Hn(i)));
              return Math.abs(lo(Hn(16777215), Hn(i))) > Math.min(u, 50) ? "#fff" : "#000";
            }(t);
            n.color = a, n.caretColor = a;
          }
        }
      } else
        l.push(`bg-${e.value.background}`);
    return e.value.text && (oo(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : l.push(`text-${e.value.text}`)), { colorClasses: l, colorStyles: n };
  });
}
function Ye(e, l) {
  const n = v(() => ({ text: mn(e) ? e.value : l ? e[l] : null })), { colorClasses: t, colorStyles: a } = Ol(n);
  return { textColorClasses: t, textColorStyles: a };
}
function Tn(e, l) {
  const n = v(() => ({ background: mn(e) ? e.value : l ? e[l] : null })), { colorClasses: t, colorStyles: a } = Ol(n);
  return { backgroundColorClasses: t, backgroundColorStyles: a };
}
const Nn = q({ elevation: { type: [Number, String], validator(e) {
  const l = parseInt(e);
  return !isNaN(l) && l >= 0 && l <= 24;
} } }, "elevation");
function jn(e) {
  return { elevationClasses: v(() => {
    const l = mn(e) ? e.value : e.elevation, n = [];
    return l == null || n.push(`elevation-${l}`), n;
  }) };
}
const Ze = q({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function Je(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ke();
  return { roundedClasses: v(() => {
    const n = mn(e) ? e.value : e.rounded, t = [];
    if (n === !0 || n === "")
      t.push(`${l}--rounded`);
    else if (typeof n == "string" || n === 0)
      for (const a of String(n).split(" "))
        t.push(`rounded-${a}`);
    return t;
  }) };
}
const ki = [null, "default", "comfortable", "compact"], je = q({ density: { type: String, default: "default", validator: (e) => ki.includes(e) } }, "density");
function Qe(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ke();
  return { densityClasses: v(() => `${l}--density-${e.density}`) };
}
const wi = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function dt(e, l) {
  return d(fe, null, [e && d("span", { key: "overlay", class: `${l}__overlay` }, null), d("span", { key: "underlay", class: `${l}__underlay` }, null)]);
}
const an = q({ color: String, variant: { type: String, default: "elevated", validator: (e) => wi.includes(e) } }, "variant");
function pt(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ke();
  const n = v(() => {
    const { variant: i } = s(e);
    return `${l}--variant-${i}`;
  }), { colorClasses: t, colorStyles: a } = Ol(v(() => {
    const { variant: i, color: u } = s(e);
    return { [["elevated", "flat"].includes(i) ? "background" : "text"]: u };
  }));
  return { colorClasses: t, colorStyles: a, variantClasses: n };
}
const ta = q({ divided: Boolean, ...Mn(), ...ie(), ...je(), ...Nn(), ...Ze(), ...$e(), ...Ce(), ...an() }, "VBtnGroup"), vo = Z()({ name: "VBtnGroup", props: ta(), setup(e, l) {
  let { slots: n } = l;
  const { themeClasses: t } = Ve(e), { densityClasses: a } = Qe(e), { borderClasses: i } = Rn(e), { elevationClasses: u } = jn(e), { roundedClasses: o } = Je(e);
  Wn({ VBtn: { height: "auto", color: Q(e, "color"), density: Q(e, "density"), flat: !0, variant: Q(e, "variant") } }), te(() => d(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, t.value, i.value, a.value, u.value, o.value, e.class], style: e.style }, n));
} }), la = q({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), oa = q({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function aa(e, l) {
  let n = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
  const t = ke("useGroupItem");
  if (!t)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const a = Le();
  Te(Symbol.for(`${l.description}:id`), a);
  const i = ve(l, null);
  if (!i) {
    if (!n)
      return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${l.description}`);
  }
  const u = Q(e, "value"), o = v(() => !(!i.disabled.value && !e.disabled));
  i.register({ id: a, value: u, disabled: o }, t), on(() => {
    i.unregister(a);
  });
  const r = v(() => i.isSelected(a)), p = v(() => r.value && [i.selectedClass.value, e.selectedClass]);
  return Y(r, (y) => {
    t.emit("group:selected", { value: y });
  }), { id: a, isSelected: r, toggle: () => i.select(a, !r.value), select: (y) => i.select(a, y), selectedClass: p, value: u, disabled: o, group: i };
}
function ia(e, l) {
  let n = !1;
  const t = ze([]), a = me(e, "modelValue", [], (p) => p == null ? [] : fo(t, tn(p)), (p) => {
    const y = function(c, f) {
      const m = [];
      return f.forEach((b) => {
        const h = c.findIndex((g) => g.id === b);
        if (~h) {
          const g = c[h];
          m.push(g.value != null ? g.value : h);
        }
      }), m;
    }(t, p);
    return e.multiple ? y : y[0];
  }), i = ke("useGroup");
  function u() {
    const p = t.find((y) => !y.disabled);
    p && e.mandatory === "force" && !a.value.length && (a.value = [p.id]);
  }
  function o(p) {
    if (e.multiple && Xn('This method is not supported when using "multiple" prop'), a.value.length) {
      const y = a.value[0], c = t.findIndex((b) => b.id === y);
      let f = (c + p) % t.length, m = t[f];
      for (; m.disabled && f !== c; )
        f = (f + p) % t.length, m = t[f];
      if (m.disabled)
        return;
      a.value = [t[f].id];
    } else {
      const y = t.find((c) => !c.disabled);
      y && (a.value = [y.id]);
    }
  }
  Ln(() => {
    u();
  }), on(() => {
    n = !0;
  });
  const r = { register: function(p, y) {
    const c = p, f = xt(Symbol.for(`${l.description}:id`), i == null ? void 0 : i.vnode).indexOf(y);
    f > -1 ? t.splice(f, 0, c) : t.push(c);
  }, unregister: function(p) {
    if (n)
      return;
    u();
    const y = t.findIndex((c) => c.id === p);
    t.splice(y, 1);
  }, selected: a, select: function(p, y) {
    const c = t.find((f) => f.id === p);
    if (!y || !(c != null && c.disabled))
      if (e.multiple) {
        const f = a.value.slice(), m = f.findIndex((h) => h === p), b = ~m;
        if (y = y ?? !b, b && e.mandatory && f.length <= 1 || !b && e.max != null && f.length + 1 > e.max)
          return;
        m < 0 && y ? f.push(p) : m >= 0 && !y && f.splice(m, 1), a.value = f;
      } else {
        const f = a.value.includes(p);
        if (e.mandatory && f)
          return;
        a.value = y ?? !f ? [p] : [];
      }
  }, disabled: Q(e, "disabled"), prev: () => o(t.length - 1), next: () => o(1), isSelected: (p) => a.value.includes(p), selectedClass: v(() => e.selectedClass), items: v(() => t), getItemIndex: (p) => function(y, c) {
    const f = fo(y, [c]);
    return f.length ? y.findIndex((m) => m.id === f[0]) : -1;
  }(t, p) };
  return Te(l, r), r;
}
function fo(e, l) {
  const n = [];
  return l.forEach((t) => {
    const a = e.find((u) => at(t, u.value)), i = e[t];
    (a == null ? void 0 : a.value) != null ? n.push(a.id) : i != null && n.push(i.id);
  }), n;
}
const ra = Symbol.for("vuetify:v-btn-toggle"), Fi = q({ ...ta(), ...la() }, "VBtnToggle");
Z()({ name: "VBtnToggle", props: Fi(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: n } = l;
  const { isSelected: t, next: a, prev: i, select: u, selected: o } = ia(e, ra);
  return te(() => {
    const [r] = vo.filterProps(e);
    return d(vo, X({ class: ["v-btn-toggle", e.class] }, r, { style: e.style }), { default: () => {
      var p;
      return [(p = n.default) == null ? void 0 : p.call(n, { isSelected: t, next: a, prev: i, select: u, selected: o })];
    } });
  }), { next: a, prev: i, select: u };
} });
const ue = [String, Function, Object, Array], Vi = Symbol.for("vuetify:icons"), Pt = q({ icon: { type: ue }, tag: { type: String, required: !0 } }, "icon"), yo = Z()({ name: "VComponentIcon", props: Pt(), setup(e, l) {
  let { slots: n } = l;
  return () => {
    const t = e.icon;
    return d(e.tag, null, { default: () => {
      var a;
      return [e.icon ? d(t, null, null) : (a = n.default) == null ? void 0 : a.call(n)];
    } });
  };
} }), Ai = Qn({ name: "VSvgIcon", inheritAttrs: !1, props: Pt(), setup(e, l) {
  let { attrs: n } = l;
  return () => d(e.tag, X(n, { style: null }), { default: () => [d("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((t) => Array.isArray(t) ? d("path", { d: t[0], "fill-opacity": t[1] }, null) : d("path", { d: t }, null)) : d("path", { d: e.icon }, null)])] });
} });
Qn({ name: "VLigatureIcon", props: Pt(), setup: (e) => () => d(e.tag, null, { default: () => [e.icon] }) }), Qn({ name: "VClassIcon", props: Pt(), setup: (e) => () => d(e.tag, { class: e.icon }, null) });
const _i = ["x-small", "small", "default", "large", "x-large"], vt = q({ size: { type: [String, Number], default: "default" } }, "size");
function ft(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ke();
  return Bl(() => {
    let n, t;
    return wt(_i, e.size) ? n = `${l}--size-${e.size}` : e.size && (t = { width: ee(e.size), height: ee(e.size) }), { sizeClasses: n, sizeStyles: t };
  });
}
const Oi = q({ color: String, start: Boolean, end: Boolean, icon: ue, ...ie(), ...vt(), ...$e({ tag: "i" }), ...Ce() }, "VIcon"), ce = Z()({ name: "VIcon", props: Oi(), setup(e, l) {
  let { attrs: n, slots: t } = l;
  const a = j(), { themeClasses: i } = Ve(e), { iconData: u } = ((y) => {
    const c = ve(Vi);
    if (!c)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: v(() => {
      var g;
      const f = s(y);
      if (!f)
        return { component: yo };
      let m = f;
      if (typeof m == "string" && (m = m.trim(), m.startsWith("$") && (m = (g = c.aliases) == null ? void 0 : g[m.slice(1)])), !m)
        throw new Error(`Could not find aliased icon "${f}"`);
      if (Array.isArray(m))
        return { component: Ai, icon: m };
      if (typeof m != "string")
        return { component: yo, icon: m };
      const b = Object.keys(c.sets).find((S) => typeof m == "string" && m.startsWith(`${S}:`)), h = b ? m.slice(b.length + 1) : m;
      return { component: c.sets[b ?? c.defaultSet].component, icon: h };
    }) };
  })(v(() => a.value || e.icon)), { sizeClasses: o } = ft(e), { textColorClasses: r, textColorStyles: p } = Ye(Q(e, "color"));
  return te(() => {
    var c, f;
    const y = (c = t.default) == null ? void 0 : c.call(t);
    return y && (a.value = (f = Mo(y).filter((m) => m.type === Za && m.children && typeof m.children == "string")[0]) == null ? void 0 : f.children), d(u.value.component, { tag: e.tag, icon: u.value.icon, class: ["v-icon", "notranslate", i.value, o.value, r.value, { "v-icon--clickable": !!n.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [o.value ? void 0 : { fontSize: ee(e.size), height: ee(e.size), width: ee(e.size) }, p.value, e.style], role: n.onClick ? "button" : void 0, "aria-hidden": !n.onClick }, { default: () => [y] });
  }), {};
} });
function sa(e, l) {
  const n = j(), t = se(!1);
  if (xl) {
    const a = new IntersectionObserver((i) => {
      e == null || e(i, a), t.value = !!i.find((u) => u.isIntersecting);
    }, l);
    on(() => {
      a.disconnect();
    }), Y(n, (i, u) => {
      u && (a.unobserve(u), t.value = !1), i && a.observe(i);
    }, { flush: "post" });
  }
  return { intersectionRef: n, isIntersecting: t };
}
const Pi = q({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...ie(), ...vt(), ...$e({ tag: "div" }), ...Ce() }, "VProgressCircular"), ua = Z()({ name: "VProgressCircular", props: Pi(), setup(e, l) {
  let { slots: n } = l;
  const t = 2 * Math.PI * 20, a = j(), { themeClasses: i } = Ve(e), { sizeClasses: u, sizeStyles: o } = ft(e), { textColorClasses: r, textColorStyles: p } = Ye(Q(e, "color")), { textColorClasses: y, textColorStyles: c } = Ye(Q(e, "bgColor")), { intersectionRef: f, isIntersecting: m } = sa(), { resizeRef: b, contentRect: h } = Vl(), g = v(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), S = v(() => Number(e.width)), V = v(() => o.value ? Number(e.size) : h.value ? h.value.width : Math.max(S.value, 32)), w = v(() => 20 / (1 - S.value / V.value) * 2), N = v(() => S.value / V.value * w.value), O = v(() => ee((100 - g.value) / 100 * t));
  return Ue(() => {
    f.value = a.value, b.value = a.value;
  }), te(() => d(e.tag, { ref: a, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": m.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, i.value, u.value, r.value, e.class], style: [o.value, p.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : g.value }, { default: () => [d("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${w.value} ${w.value}` }, [d("circle", { class: ["v-progress-circular__underlay", y.value], style: c.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": N.value, "stroke-dasharray": t, "stroke-dashoffset": 0 }, null), d("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": N.value, "stroke-dasharray": t, "stroke-dashoffset": O.value }, null)]), n.default && d("div", { class: "v-progress-circular__content" }, [n.default({ value: g.value })])] })), {};
} }), mo = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, Pl = q({ location: String }, "location");
function $l(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: t } = ut();
  return { locationStyles: v(() => {
    if (!e.location)
      return {};
    const { side: i, align: u } = al(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, t.value);
    function o(p) {
      return n ? n(p) : 0;
    }
    const r = {};
    return i !== "center" && (l ? r[mo[i]] = `calc(100% - ${o(i)}px)` : r[i] = 0), u !== "center" ? l ? r[mo[u]] = `calc(100% - ${o(u)}px)` : r[u] = 0 : (i === "center" ? r.top = r.left = "50%" : r[{ top: "left", bottom: "left", left: "top", right: "top" }[i]] = "50%", r.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[i]), r;
  }) };
}
const $i = q({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...ie(), ...Pl({ location: "top" }), ...Ze(), ...$e(), ...Ce() }, "VProgressLinear"), Ei = Z()({ name: "VProgressLinear", props: $i(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: n } = l;
  const t = me(e, "modelValue"), { isRtl: a, rtlClasses: i } = ut(), { themeClasses: u } = Ve(e), { locationStyles: o } = $l(e), { textColorClasses: r, textColorStyles: p } = Ye(e, "color"), { backgroundColorClasses: y, backgroundColorStyles: c } = Tn(v(() => e.bgColor || e.color)), { backgroundColorClasses: f, backgroundColorStyles: m } = Tn(e, "color"), { roundedClasses: b } = Je(e), { intersectionRef: h, isIntersecting: g } = sa(), S = v(() => parseInt(e.max, 10)), V = v(() => parseInt(e.height, 10)), w = v(() => parseFloat(e.bufferValue) / S.value * 100), N = v(() => parseFloat(t.value) / S.value * 100), O = v(() => a.value !== e.reverse), z = v(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), F = v(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function x(C) {
    if (!h.value)
      return;
    const { left: $, right: B, width: E } = h.value.getBoundingClientRect(), _ = O.value ? E - C.clientX + (B - E) : C.clientX - $;
    t.value = Math.round(_ / E * S.value);
  }
  return te(() => d(e.tag, { ref: h, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && g.value, "v-progress-linear--reverse": O.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, b.value, u.value, i.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? ee(V.value) : 0, "--v-progress-linear-height": ee(V.value), ...o.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : N.value, onClick: e.clickable && x }, { default: () => [e.stream && d("div", { key: "stream", class: ["v-progress-linear__stream", r.value], style: { ...p.value, [O.value ? "left" : "right"]: ee(-V.value), borderTop: `${ee(V.value / 2)} dotted`, opacity: F.value, top: `calc(50% - ${ee(V.value / 4)})`, width: ee(100 - w.value, "%"), "--v-progress-linear-stream-to": ee(V.value * (O.value ? 1 : -1)) } }, null), d("div", { class: ["v-progress-linear__background", y.value], style: [c.value, { opacity: F.value, width: ee(e.stream ? w.value : 100, "%") }] }, null), d(yn, { name: z.value }, { default: () => [e.indeterminate ? d("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((C) => d("div", { key: C, class: ["v-progress-linear__indeterminate", C, f.value], style: m.value }, null))]) : d("div", { class: ["v-progress-linear__determinate", f.value], style: [m.value, { width: ee(N.value, "%") }] }, null)] }), n.default && d("div", { class: "v-progress-linear__content" }, [n.default({ value: N.value, buffer: w.value })])] })), {};
} }), El = q({ loading: [Boolean, String] }, "loader");
function jt(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ke();
  return { loaderClasses: v(() => ({ [`${l}--loading`]: e.loading })) };
}
function Tl(e, l) {
  var t;
  let { slots: n } = l;
  return d("div", { class: `${e.name}__loader` }, [((t = n.default) == null ? void 0 : t.call(n, { color: e.color, isActive: e.active })) || d(Ei, { active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const Ti = ["static", "relative", "fixed", "absolute", "sticky"], ca = q({ position: { type: String, validator: (e) => Ti.includes(e) } }, "position");
function da(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ke();
  return { positionClasses: v(() => e.position ? `${l}--${e.position}` : void 0) };
}
function Gt(e, l) {
  const n = Ja("RouterLink"), t = v(() => !(!e.href && !e.to)), a = v(() => (t == null ? void 0 : t.value) || ql(l, "click") || ql(e, "click"));
  if (typeof n == "string")
    return { isLink: t, isClickable: a, href: Q(e, "href") };
  const i = e.to ? n.useLink(e) : void 0;
  return { isLink: t, isClickable: a, route: i == null ? void 0 : i.route, navigate: i == null ? void 0 : i.navigate, isActive: i && v(() => {
    var u, o;
    return e.exact ? (u = i.isExactActive) == null ? void 0 : u.value : (o = i.isActive) == null ? void 0 : o.value;
  }), href: v(() => e.to ? i == null ? void 0 : i.route.value.href : e.href) };
}
const qt = q({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let Kt = !1;
const il = Symbol("rippleStop"), zi = 80;
function go(e, l) {
  e.style.transform = l, e.style.webkitTransform = l;
}
function rl(e) {
  return e.constructor.name === "TouchEvent";
}
function pa(e) {
  return e.constructor.name === "KeyboardEvent";
}
const $t = { show(e, l) {
  var m;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((m = l == null ? void 0 : l._ripple) != null && m.enabled))
    return;
  const t = document.createElement("span"), a = document.createElement("span");
  t.appendChild(a), t.className = "v-ripple__container", n.class && (t.className += ` ${n.class}`);
  const { radius: i, scale: u, x: o, y: r, centerX: p, centerY: y } = function(b, h) {
    var F;
    let g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, S = 0, V = 0;
    if (!pa(b)) {
      const x = h.getBoundingClientRect(), C = rl(b) ? b.touches[b.touches.length - 1] : b;
      S = C.clientX - x.left, V = C.clientY - x.top;
    }
    let w = 0, N = 0.3;
    (F = h._ripple) != null && F.circle ? (N = 0.15, w = h.clientWidth / 2, w = g.center ? w : w + Math.sqrt((S - w) ** 2 + (V - w) ** 2) / 4) : w = Math.sqrt(h.clientWidth ** 2 + h.clientHeight ** 2) / 2;
    const O = (h.clientWidth - 2 * w) / 2 + "px", z = (h.clientHeight - 2 * w) / 2 + "px";
    return { radius: w, scale: N, x: g.center ? O : S - w + "px", y: g.center ? z : V - w + "px", centerX: O, centerY: z };
  }(e, l, n), c = 2 * i + "px";
  a.className = "v-ripple__animation", a.style.width = c, a.style.height = c, l.appendChild(t);
  const f = window.getComputedStyle(l);
  f && f.position === "static" && (l.style.position = "relative", l.dataset.previousPosition = "static"), a.classList.add("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--visible"), go(a, `translate(${o}, ${r}) scale3d(${u},${u},${u})`), a.dataset.activated = String(performance.now()), setTimeout(() => {
    a.classList.remove("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--in"), go(a, `translate(${p}, ${y}) scale3d(1,1,1)`);
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
function va(e) {
  return e === void 0 || !!e;
}
function et(e) {
  const l = {}, n = e.currentTarget;
  if (n != null && n._ripple && !n._ripple.touched && !e[il]) {
    if (e[il] = !0, rl(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch)
      return;
    if (l.center = n._ripple.centered || pa(e), n._ripple.class && (l.class = n._ripple.class), rl(e)) {
      if (n._ripple.showTimerCommit)
        return;
      n._ripple.showTimerCommit = () => {
        $t.show(e, n, l);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var t;
        (t = n == null ? void 0 : n._ripple) != null && t.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, zi);
    } else
      $t.show(e, n, l);
  }
}
function ho(e) {
  e[il] = !0;
}
function Pe(e) {
  const l = e.currentTarget;
  if (l != null && l._ripple) {
    if (window.clearTimeout(l._ripple.showTimer), e.type === "touchend" && l._ripple.showTimerCommit)
      return l._ripple.showTimerCommit(), l._ripple.showTimerCommit = null, void (l._ripple.showTimer = window.setTimeout(() => {
        Pe(e);
      }));
    window.setTimeout(() => {
      l._ripple && (l._ripple.touched = !1);
    }), $t.hide(l);
  }
}
function fa(e) {
  const l = e.currentTarget;
  l != null && l._ripple && (l._ripple.showTimerCommit && (l._ripple.showTimerCommit = null), window.clearTimeout(l._ripple.showTimer));
}
let nt = !1;
function ya(e) {
  nt || e.keyCode !== Nl.enter && e.keyCode !== Nl.space || (nt = !0, et(e));
}
function ma(e) {
  nt = !1, Pe(e);
}
function ga(e) {
  nt && (nt = !1, Pe(e));
}
function bo(e, l, n) {
  const { value: t, modifiers: a } = l, i = va(t);
  if (i || $t.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = a.center, e._ripple.circle = a.circle, nl(t) && t.class && (e._ripple.class = t.class), i && !n) {
    if (a.stop)
      return e.addEventListener("touchstart", ho, { passive: !0 }), void e.addEventListener("mousedown", ho);
    e.addEventListener("touchstart", et, { passive: !0 }), e.addEventListener("touchend", Pe, { passive: !0 }), e.addEventListener("touchmove", fa, { passive: !0 }), e.addEventListener("touchcancel", Pe), e.addEventListener("mousedown", et), e.addEventListener("mouseup", Pe), e.addEventListener("mouseleave", Pe), e.addEventListener("keydown", ya), e.addEventListener("keyup", ma), e.addEventListener("blur", ga), e.addEventListener("dragstart", Pe, { passive: !0 });
  } else
    !i && n && ha(e);
}
function ha(e) {
  e.removeEventListener("mousedown", et), e.removeEventListener("touchstart", et), e.removeEventListener("touchend", Pe), e.removeEventListener("touchmove", fa), e.removeEventListener("touchcancel", Pe), e.removeEventListener("mouseup", Pe), e.removeEventListener("mouseleave", Pe), e.removeEventListener("keydown", ya), e.removeEventListener("keyup", ma), e.removeEventListener("dragstart", Pe), e.removeEventListener("blur", ga);
}
const yt = { mounted: function(e, l) {
  bo(e, l, !1);
}, unmounted: function(e) {
  delete e._ripple, ha(e);
}, updated: function(e, l) {
  l.value !== l.oldValue && bo(e, l, va(l.oldValue));
} }, Di = q({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: ra }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: ue, appendIcon: ue, block: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...Mn(), ...ie(), ...je(), ...gn(), ...Nn(), ...oa(), ...El(), ...Pl(), ...ca(), ...Ze(), ...qt(), ...vt(), ...$e({ tag: "button" }), ...Ce(), ...an({ variant: "elevated" }) }, "VBtn"), sl = Z()({ name: "VBtn", directives: { Ripple: yt }, props: Di(), emits: { "group:selected": (e) => !0 }, setup(e, l) {
  let { attrs: n, slots: t } = l;
  const { themeClasses: a } = Ve(e), { borderClasses: i } = Rn(e), { colorClasses: u, colorStyles: o, variantClasses: r } = pt(e), { densityClasses: p } = Qe(e), { dimensionStyles: y } = hn(e), { elevationClasses: c } = jn(e), { loaderClasses: f } = jt(e), { locationStyles: m } = $l(e), { positionClasses: b } = da(e), { roundedClasses: h } = Je(e), { sizeClasses: g, sizeStyles: S } = ft(e), V = aa(e, e.symbol, !1), w = Gt(e, n), N = v(() => {
    var C;
    return e.active !== void 0 ? e.active : w.isLink.value ? (C = w.isActive) == null ? void 0 : C.value : V == null ? void 0 : V.isSelected.value;
  }), O = v(() => (V == null ? void 0 : V.disabled.value) || e.disabled), z = v(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), F = v(() => {
    if (e.value !== void 0)
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function x(C) {
    var $;
    O.value || w.isLink.value && (C.metaKey || C.ctrlKey || C.shiftKey || C.button !== 0 || n.target === "_blank") || (($ = w.navigate) == null || $.call(w, C), V == null || V.toggle());
  }
  return function(C, $) {
    Y(() => {
      var B;
      return (B = C.isActive) == null ? void 0 : B.value;
    }, (B) => {
      C.isLink.value && B && $ && xe(() => {
        $(!0);
      });
    }, { immediate: !0 });
  }(w, V == null ? void 0 : V.select), te(() => {
    var W, H;
    const C = w.isLink.value ? "a" : e.tag, $ = !(!e.prependIcon && !t.prepend), B = !(!e.appendIcon && !t.append), E = !(!e.icon || e.icon === !0), _ = (V == null ? void 0 : V.isSelected.value) && (!w.isLink.value || ((W = w.isActive) == null ? void 0 : W.value)) || !V || ((H = w.isActive) == null ? void 0 : H.value);
    return Be(d(C, { type: C === "a" ? void 0 : "button", class: ["v-btn", V == null ? void 0 : V.selectedClass.value, { "v-btn--active": N.value, "v-btn--block": e.block, "v-btn--disabled": O.value, "v-btn--elevated": z.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--stacked": e.stacked }, a.value, i.value, _ ? u.value : void 0, p.value, c.value, f.value, b.value, h.value, g.value, r.value, e.class], style: [_ ? o.value : void 0, y.value, m.value, S.value, e.style], disabled: O.value || void 0, href: w.href.value, onClick: x, value: F.value }, { default: () => {
      var k;
      return [dt(!0, "v-btn"), !e.icon && $ && d("span", { key: "prepend", class: "v-btn__prepend" }, [t.prepend ? d(Se, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, t.prepend) : d(ce, { key: "prepend-icon", icon: e.prependIcon }, null)]), d("span", { class: "v-btn__content", "data-no-activator": "" }, [!t.default && E ? d(ce, { key: "content-icon", icon: e.icon }, null) : d(Se, { key: "content-defaults", disabled: !E, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var P;
        return [((P = t.default) == null ? void 0 : P.call(t)) ?? e.text];
      } })]), !e.icon && B && d("span", { key: "append", class: "v-btn__append" }, [t.append ? d(Se, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, t.append) : d(ce, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && d("span", { key: "loader", class: "v-btn__loader" }, [((k = t.loader) == null ? void 0 : k.call(t)) ?? d(ua, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[Xe("ripple"), !O.value && e.ripple, null]]);
  }), {};
} }), Li = q({ text: String, clickable: Boolean, ...ie(), ...Ce() }, "VLabel"), ba = Z()({ name: "VLabel", props: Li(), setup(e, l) {
  let { slots: n } = l;
  return te(() => {
    var t;
    return d("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (t = n.default) == null ? void 0 : t.call(n)]);
  }), {};
} }), Ca = Symbol.for("vuetify:selection-control-group"), Ia = q({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: ue, trueIcon: ue, ripple: { type: Boolean, default: !0 }, multiple: { type: Boolean, default: null }, name: String, readonly: Boolean, modelValue: null, type: String, valueComparator: { type: Function, default: at }, ...ie(), ...je(), ...Ce() }, "SelectionControlGroup"), Wi = q({ ...Ia({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup");
Z()({ name: "VSelectionControlGroup", props: Wi(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: n } = l;
  const t = me(e, "modelValue"), a = Le(), i = v(() => e.id || `v-selection-control-group-${a}`), u = v(() => e.name || i.value), o = /* @__PURE__ */ new Set();
  return Te(Ca, { modelValue: t, forceUpdate: () => {
    o.forEach((r) => r());
  }, onForceUpdate: (r) => {
    o.add(r), we(() => {
      o.delete(r);
    });
  } }), Wn({ [e.defaultsTarget]: { color: Q(e, "color"), disabled: Q(e, "disabled"), density: Q(e, "density"), error: Q(e, "error"), inline: Q(e, "inline"), modelValue: t, multiple: v(() => !!e.multiple || e.multiple == null && Array.isArray(t.value)), name: u, falseIcon: Q(e, "falseIcon"), trueIcon: Q(e, "trueIcon"), readonly: Q(e, "readonly"), ripple: Q(e, "ripple"), type: Q(e, "type"), valueComparator: Q(e, "valueComparator") } }), te(() => {
    var r;
    return d("div", { class: ["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class], style: e.style, role: e.type === "radio" ? "radiogroup" : void 0 }, [(r = n.default) == null ? void 0 : r.call(n)]);
  }), {};
} });
const zl = q({ label: String, trueValue: null, falseValue: null, value: null, ...ie(), ...Ia() }, "VSelectionControl"), Et = Z()({ name: "VSelectionControl", directives: { Ripple: yt }, inheritAttrs: !1, props: zl(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: n, slots: t } = l;
  const { group: a, densityClasses: i, icon: u, model: o, textColorClasses: r, textColorStyles: p, backgroundColorClasses: y, backgroundColorStyles: c, trueValue: f } = function(O) {
    const z = ve(Ca, void 0), { densityClasses: F } = Qe(O), x = me(O, "modelValue"), C = v(() => O.trueValue !== void 0 ? O.trueValue : O.value === void 0 || O.value), $ = v(() => O.falseValue !== void 0 && O.falseValue), B = v(() => !!O.multiple || O.multiple == null && Array.isArray(x.value)), E = v({ get() {
      const L = z ? z.modelValue.value : x.value;
      return B.value ? L.some((D) => O.valueComparator(D, C.value)) : O.valueComparator(L, C.value);
    }, set(L) {
      if (O.readonly)
        return;
      const D = L ? C.value : $.value;
      let T = D;
      B.value && (T = L ? [...tn(x.value), D] : tn(x.value).filter((R) => !O.valueComparator(R, C.value))), z ? z.modelValue.value = T : x.value = T;
    } }), { textColorClasses: _, textColorStyles: W } = Ye(v(() => !E.value || O.error || O.disabled ? void 0 : O.color)), { backgroundColorClasses: H, backgroundColorStyles: k } = Tn(v(() => !E.value || O.error || O.disabled ? void 0 : O.color)), P = v(() => E.value ? O.trueIcon : O.falseIcon);
    return { group: z, densityClasses: F, trueValue: C, falseValue: $, model: E, textColorClasses: _, textColorStyles: W, backgroundColorClasses: H, backgroundColorStyles: k, icon: P };
  }(e), m = Le(), b = v(() => e.id || `input-${m}`), h = se(!1), g = se(!1), S = j();
  function V(O) {
    h.value = !0, Vt(O.target, ":focus-visible") !== !1 && (g.value = !0);
  }
  function w() {
    h.value = !1, g.value = !1;
  }
  function N(O) {
    e.readonly && a && xe(() => a.forceUpdate()), o.value = O.target.checked;
  }
  return a == null || a.onForceUpdate(() => {
    S.value && (S.value.checked = o.value);
  }), te(() => {
    var C, $;
    const O = t.label ? t.label({ label: e.label, props: { for: b.value } }) : e.label, [z, F] = rt(n), x = d("input", X({ ref: S, checked: o.value, disabled: !(!e.readonly && !e.disabled), id: b.value, onBlur: w, onFocus: V, onInput: N, "aria-disabled": !(!e.readonly && !e.disabled), type: e.type, value: f.value, name: e.name, "aria-checked": e.type === "checkbox" ? o.value : void 0 }, F), null);
    return d("div", X({ class: ["v-selection-control", { "v-selection-control--dirty": o.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": h.value, "v-selection-control--focus-visible": g.value, "v-selection-control--inline": e.inline }, i.value, e.class] }, z, { style: e.style }), [d("div", { class: ["v-selection-control__wrapper", r.value], style: p.value }, [(C = t.default) == null ? void 0 : C.call(t, { backgroundColorClasses: y, backgroundColorStyles: c }), Be(d("div", { class: ["v-selection-control__input"] }, [(($ = t.input) == null ? void 0 : $.call(t, { model: o, textColorClasses: r, textColorStyles: p, backgroundColorClasses: y, backgroundColorStyles: c, inputNode: x, icon: u.value, props: { onFocus: V, onBlur: w, id: b.value } })) ?? d(fe, null, [u.value && d(ce, { key: "icon", icon: u.value }, null), x])]), [[Xe("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), O && d(ba, { for: b.value, clickable: !0, onClick: (B) => B.stopPropagation() }, { default: () => [O] })]);
  }), { isFocused: h, input: S };
} }), Sa = q({ indeterminate: Boolean, indeterminateIcon: { type: ue, default: "$checkboxIndeterminate" }, ...zl({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), ul = Z()({ name: "VCheckboxBtn", props: Sa(), emits: { "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, l) {
  let { slots: n } = l;
  const t = me(e, "indeterminate"), a = me(e, "modelValue");
  function i(r) {
    t.value && (t.value = !1);
  }
  const u = v(() => t.value ? e.indeterminateIcon : e.falseIcon), o = v(() => t.value ? e.indeterminateIcon : e.trueIcon);
  return te(() => {
    const r = it(Et.filterProps(e)[0], ["modelValue"]);
    return d(Et, X(r, { modelValue: a.value, "onUpdate:modelValue": [(p) => a.value = p, i], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: u.value, trueIcon: o.value, "aria-checked": t.value ? "mixed" : void 0 }), n);
  }), {};
} });
function xa(e) {
  const { t: l } = Al();
  return { InputIcon: function(n) {
    let { name: t } = n;
    const a = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[t], i = e[`onClick:${t}`], u = i && a ? l(`$vuetify.input.${a}`, e.label ?? "") : void 0;
    return d(ce, { icon: e[`${t}Icon`], "aria-label": u, onClick: i }, null);
  } };
}
const Mi = q({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...ie(), ...ct({ transition: { component: Jo, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), Ri = Z()({ name: "VMessages", props: Mi(), setup(e, l) {
  let { slots: n } = l;
  const t = v(() => tn(e.messages)), { textColorClasses: a, textColorStyles: i } = Ye(v(() => e.color));
  return te(() => d(en, { transition: e.transition, tag: "div", class: ["v-messages", a.value, e.class], style: [i.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && t.value.map((u, o) => d("div", { class: "v-messages__message", key: `${o}-${t.value}` }, [n.message ? n.message({ message: u }) : u]))] })), {};
} }), Ba = q({ focused: Boolean, "onUpdate:focused": Ne() }, "focus");
function mt(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ke();
  const n = me(e, "focused");
  return { focusClasses: v(() => ({ [`${l}--focused`]: n.value })), isFocused: n, focus: function() {
    n.value = !0;
  }, blur: function() {
    n.value = !1;
  } };
}
const Ni = Symbol.for("vuetify:form");
function ka() {
  return ve(Ni, null);
}
const ji = q({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...Ba() }, "validation"), gt = q({ id: String, appendIcon: ue, centerAffix: { type: Boolean, default: !0 }, prependIcon: ue, hideDetails: [Boolean, String], hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Ne(), "onClick:append": Ne(), ...ie(), ...je(), ...ji() }, "VInput"), ln = Z()({ name: "VInput", props: { ...gt() }, emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: n, slots: t, emit: a } = l;
  const { densityClasses: i } = Qe(e), { rtlClasses: u } = ut(), { InputIcon: o } = xa(e), r = Le(), p = v(() => e.id || `input-${r}`), y = v(() => `${p.value}-messages`), { errorMessages: c, isDirty: f, isDisabled: m, isReadonly: b, isPristine: h, isValid: g, isValidating: S, reset: V, resetValidation: w, validate: N, validationClasses: O } = function(x) {
    let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ke(), $ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Le();
    const B = me(x, "modelValue"), E = v(() => x.validationValue === void 0 ? B.value : x.validationValue), _ = ka(), W = j([]), H = se(!0), k = v(() => !(!tn(B.value === "" ? null : B.value).length && !tn(E.value === "" ? null : E.value).length)), P = v(() => !!(x.disabled ?? (_ == null ? void 0 : _.isDisabled.value))), L = v(() => !!(x.readonly ?? (_ == null ? void 0 : _.isReadonly.value))), D = v(() => x.errorMessages.length ? tn(x.errorMessages).slice(0, Math.max(0, +x.maxErrors)) : W.value), T = v(() => {
      let ne = (x.validateOn ?? (_ == null ? void 0 : _.validateOn.value)) || "input";
      ne === "lazy" && (ne = "input lazy");
      const de = new Set((ne == null ? void 0 : ne.split(" ")) ?? []);
      return { blur: de.has("blur") || de.has("input"), input: de.has("input"), submit: de.has("submit"), lazy: de.has("lazy") };
    }), R = v(() => !x.error && !x.errorMessages.length && (!x.rules.length || (H.value ? !W.value.length && !T.value.lazy || null : !W.value.length))), I = se(!1), A = v(() => ({ [`${C}--error`]: R.value === !1, [`${C}--dirty`]: k.value, [`${C}--disabled`]: P.value, [`${C}--readonly`]: L.value })), M = v(() => x.name ?? s($));
    function G() {
      B.value = null, xe(K);
    }
    function K() {
      H.value = !0, T.value.lazy ? W.value = [] : ae(!0);
    }
    async function ae() {
      let ne = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      const de = [];
      I.value = !0;
      for (const Ae of x.rules) {
        if (de.length >= +(x.maxErrors ?? 1))
          break;
        const Gn = typeof Ae == "function" ? Ae : () => Ae, Me = await Gn(E.value);
        Me !== !0 && (Me === !1 || typeof Me == "string" ? de.push(Me || "") : console.warn(`${Me} is not a valid value. Rule functions must return boolean true or a string.`));
      }
      return W.value = de, I.value = !1, H.value = ne, W.value;
    }
    return To(() => {
      _ == null || _.register({ id: M.value, validate: ae, reset: G, resetValidation: K });
    }), on(() => {
      _ == null || _.unregister(M.value);
    }), Ln(async () => {
      T.value.lazy || await ae(!0), _ == null || _.update(M.value, R.value, D.value);
    }), pn(() => T.value.input, () => {
      Y(E, () => {
        if (E.value != null)
          ae();
        else if (x.focused) {
          const ne = Y(() => x.focused, (de) => {
            de || ae(), ne();
          });
        }
      });
    }), pn(() => T.value.blur, () => {
      Y(() => x.focused, (ne) => {
        ne || ae();
      });
    }), Y(R, () => {
      _ == null || _.update(M.value, R.value, D.value);
    }), { errorMessages: D, isDirty: k, isDisabled: P, isReadonly: L, isPristine: H, isValid: R, isValidating: I, reset: G, resetValidation: K, validate: ae, validationClasses: A };
  }(e, "v-input", p), z = v(() => ({ id: p, messagesId: y, isDirty: f, isDisabled: m, isReadonly: b, isPristine: h, isValid: g, isValidating: S, reset: V, resetValidation: w, validate: N })), F = v(() => {
    var x;
    return (x = e.errorMessages) != null && x.length || !h.value && c.value.length ? c.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return te(() => {
    var E, _, W, H;
    const x = !(!t.prepend && !e.prependIcon), C = !(!t.append && !e.appendIcon), $ = F.value.length > 0, B = !e.hideDetails || e.hideDetails === "auto" && ($ || !!t.details);
    return d("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix }, i.value, u.value, O.value, e.class], style: e.style }, [x && d("div", { key: "prepend", class: "v-input__prepend" }, [(E = t.prepend) == null ? void 0 : E.call(t, z.value), e.prependIcon && d(o, { key: "prepend-icon", name: "prepend" }, null)]), t.default && d("div", { class: "v-input__control" }, [(_ = t.default) == null ? void 0 : _.call(t, z.value)]), C && d("div", { key: "append", class: "v-input__append" }, [e.appendIcon && d(o, { key: "append-icon", name: "append" }, null), (W = t.append) == null ? void 0 : W.call(t, z.value)]), B && d("div", { class: "v-input__details" }, [d(Ri, { id: y.value, active: $, messages: F.value }, { message: t.message }), (H = t.details) == null ? void 0 : H.call(t, z.value)])]);
  }), { reset: V, resetValidation: w, validate: N };
} }), Gi = q({ ...gt(), ...it(Sa(), ["inline"]) }, "VCheckbox"), qi = Z()({ name: "VCheckbox", inheritAttrs: !1, props: Gi(), emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 }, setup(e, l) {
  let { attrs: n, slots: t } = l;
  const a = me(e, "modelValue"), { isFocused: i, focus: u, blur: o } = mt(e), r = Le(), p = v(() => e.id || `checkbox-${r}`);
  return te(() => {
    const [y, c] = rt(n), [f, m] = ln.filterProps(e), [b, h] = ul.filterProps(e);
    return d(ln, X({ class: ["v-checkbox", e.class] }, y, f, { modelValue: a.value, "onUpdate:modelValue": (g) => a.value = g, id: p.value, focused: i.value, style: e.style }), { ...t, default: (g) => {
      let { id: S, messagesId: V, isDisabled: w, isReadonly: N } = g;
      return d(ul, X(b, { id: S.value, "aria-describedby": V.value, disabled: w.value, readonly: N.value }, c, { modelValue: a.value, "onUpdate:modelValue": (O) => a.value = O, onFocus: u, onBlur: o }), t);
    } });
  }), {};
} }), Hi = q({ start: Boolean, end: Boolean, icon: ue, image: String, ...ie(), ...je(), ...Ze(), ...vt(), ...$e(), ...Ce(), ...an({ variant: "flat" }) }, "VAvatar"), zn = Z()({ name: "VAvatar", props: Hi(), setup(e, l) {
  let { slots: n } = l;
  const { themeClasses: t } = Ve(e), { colorClasses: a, colorStyles: i, variantClasses: u } = pt(e), { densityClasses: o } = Qe(e), { roundedClasses: r } = Je(e), { sizeClasses: p, sizeStyles: y } = ft(e);
  return te(() => d(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, t.value, a.value, o.value, r.value, p.value, u.value, e.class], style: [i.value, y.value, e.style] }, { default: () => {
    var c;
    return [e.image ? d(na, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? d(ce, { key: "icon", icon: e.icon }, null) : (c = n.default) == null ? void 0 : c.call(n), dt(!1, "v-avatar")];
  } })), {};
} }), wa = Symbol.for("vuetify:v-chip-group"), Ui = q({ column: Boolean, filter: Boolean, valueComparator: { type: Function, default: at }, ...ie(), ...la({ selectedClass: "v-chip--selected" }), ...$e(), ...Ce(), ...an({ variant: "tonal" }) }, "VChipGroup");
Z()({ name: "VChipGroup", props: Ui(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: n } = l;
  const { themeClasses: t } = Ve(e), { isSelected: a, select: i, next: u, prev: o, selected: r } = ia(e, wa);
  return Wn({ VChip: { color: Q(e, "color"), disabled: Q(e, "disabled"), filter: Q(e, "filter"), variant: Q(e, "variant") } }), te(() => d(e.tag, { class: ["v-chip-group", { "v-chip-group--column": e.column }, t.value, e.class], style: e.style }, { default: () => {
    var p;
    return [(p = n.default) == null ? void 0 : p.call(n, { isSelected: a, select: i, next: u, prev: o, selected: r.value })];
  } })), {};
} });
const Yi = q({ activeClass: String, appendAvatar: String, appendIcon: ue, closable: Boolean, closeIcon: { type: ue, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: String, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: ue, ripple: { type: [Boolean, Object], default: !0 }, text: String, modelValue: { type: Boolean, default: !0 }, onClick: Ne(), onClickOnce: Ne(), ...Mn(), ...ie(), ...je(), ...Nn(), ...oa(), ...Ze(), ...qt(), ...vt(), ...$e({ tag: "span" }), ...Ce(), ...an({ variant: "tonal" }) }, "VChip"), Xi = Z()({ name: "VChip", directives: { Ripple: yt }, props: Yi(), emits: { "click:close": (e) => !0, "update:modelValue": (e) => !0, "group:selected": (e) => !0, click: (e) => !0 }, setup(e, l) {
  let { attrs: n, emit: t, slots: a } = l;
  const { t: i } = Al(), { borderClasses: u } = Rn(e), { colorClasses: o, colorStyles: r, variantClasses: p } = pt(e), { densityClasses: y } = Qe(e), { elevationClasses: c } = jn(e), { roundedClasses: f } = Je(e), { sizeClasses: m } = ft(e), { themeClasses: b } = Ve(e), h = me(e, "modelValue"), g = aa(e, wa, !1), S = Gt(e, n), V = v(() => e.link !== !1 && S.isLink.value), w = v(() => !e.disabled && e.link !== !1 && (!!g || e.link || S.isClickable.value)), N = v(() => ({ "aria-label": i(e.closeLabel), onClick(F) {
    F.stopPropagation(), h.value = !1, t("click:close", F);
  } }));
  function O(F) {
    var x;
    t("click", F), w.value && ((x = S.navigate) == null || x.call(S, F), g == null || g.toggle());
  }
  function z(F) {
    F.key !== "Enter" && F.key !== " " || (F.preventDefault(), O(F));
  }
  return () => {
    const F = S.isLink.value ? "a" : e.tag, x = !(!e.appendIcon && !e.appendAvatar), C = !(!x && !a.append), $ = !(!a.close && !e.closable), B = !(!a.filter && !e.filter) && g, E = !(!e.prependIcon && !e.prependAvatar), _ = !(!E && !a.prepend), W = !g || g.isSelected.value;
    return h.value && Be(d(F, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": w.value, "v-chip--filter": B, "v-chip--pill": e.pill }, b.value, u.value, W ? o.value : void 0, y.value, c.value, f.value, m.value, p.value, g == null ? void 0 : g.selectedClass.value, e.class], style: [W ? r.value : void 0, e.style], disabled: e.disabled || void 0, draggable: e.draggable, href: S.href.value, tabindex: w.value ? 0 : void 0, onClick: O, onKeydown: w.value && !V.value && z }, { default: () => {
      var H;
      return [dt(w.value, "v-chip"), B && d(Qo, { key: "filter" }, { default: () => [Be(d("div", { class: "v-chip__filter" }, [a.filter ? d(Se, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, a.filter) : d(ce, { key: "filter-icon", icon: e.filterIcon }, null)]), [[Dn, g.isSelected.value]])] }), _ && d("div", { key: "prepend", class: "v-chip__prepend" }, [a.prepend ? d(Se, { key: "prepend-defaults", disabled: !E, defaults: { VAvatar: { image: e.prependAvatar, start: !0 }, VIcon: { icon: e.prependIcon, start: !0 } } }, a.prepend) : d(fe, null, [e.prependIcon && d(ce, { key: "prepend-icon", icon: e.prependIcon, start: !0 }, null), e.prependAvatar && d(zn, { key: "prepend-avatar", image: e.prependAvatar, start: !0 }, null)])]), d("div", { class: "v-chip__content" }, [((H = a.default) == null ? void 0 : H.call(a, { isSelected: g == null ? void 0 : g.isSelected.value, selectedClass: g == null ? void 0 : g.selectedClass.value, select: g == null ? void 0 : g.select, toggle: g == null ? void 0 : g.toggle, value: g == null ? void 0 : g.value.value, disabled: e.disabled })) ?? e.text]), C && d("div", { key: "append", class: "v-chip__append" }, [a.append ? d(Se, { key: "append-defaults", disabled: !x, defaults: { VAvatar: { end: !0, image: e.appendAvatar }, VIcon: { end: !0, icon: e.appendIcon } } }, a.append) : d(fe, null, [e.appendIcon && d(ce, { key: "append-icon", end: !0, icon: e.appendIcon }, null), e.appendAvatar && d(zn, { key: "append-avatar", end: !0, image: e.appendAvatar }, null)])]), $ && d("div", X({ key: "close", class: "v-chip__close" }, N.value), [a.close ? d(Se, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, a.close) : d(ce, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[Xe("ripple"), w.value && e.ripple, null]]);
  };
} }), cl = Symbol.for("vuetify:list");
function Fa() {
  const e = ve(cl, { hasPrepend: se(!1), updateHasPrepend: () => null }), l = { hasPrepend: se(!1), updateHasPrepend: (n) => {
    n && (l.hasPrepend.value = n);
  } };
  return Te(cl, l), e;
}
function Va() {
  return ve(cl, null);
}
const Ki = { open: (e) => {
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
}, select: () => null }, Aa = { open: (e) => {
  let { id: l, value: n, opened: t, parents: a } = e;
  if (n) {
    let i = a.get(l);
    for (t.add(l); i != null && i !== l; )
      t.add(i), i = a.get(i);
    return t;
  }
  return t.delete(l), t;
}, select: () => null }, Zi = { open: Aa.open, select: (e) => {
  let { id: l, value: n, opened: t, parents: a } = e;
  if (!n)
    return t;
  const i = [];
  let u = a.get(l);
  for (; u != null; )
    i.push(u), u = a.get(u);
  return new Set(i);
} }, dl = (e) => {
  const l = { select: (n) => {
    let { id: t, value: a, selected: i } = n;
    if (t = nn(t), e && !a) {
      const u = Array.from(i.entries()).reduce((o, r) => {
        let [p, y] = r;
        return y === "on" ? [...o, p] : o;
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
}, Co = (e) => {
  const l = dl(e);
  return { select: (n) => {
    let { selected: t, id: a, ...i } = n;
    a = nn(a);
    const u = t.has(a) ? /* @__PURE__ */ new Map([[a, t.get(a)]]) : /* @__PURE__ */ new Map();
    return l.select({ ...i, id: a, selected: u });
  }, in: (n, t, a) => {
    let i = /* @__PURE__ */ new Map();
    return n != null && n.length && (i = l.in(n.slice(0, 1), t, a)), i;
  }, out: (n, t, a) => l.out(n, t, a) };
}, tt = Symbol.for("vuetify:nested"), _a = { id: se(), root: { register: () => null, unregister: () => null, parents: j(/* @__PURE__ */ new Map()), children: j(/* @__PURE__ */ new Map()), open: () => null, openOnSelect: () => null, select: () => null, opened: j(/* @__PURE__ */ new Set()), selected: j(/* @__PURE__ */ new Map()), selectedValues: j([]) } }, Ji = q({ selectStrategy: [String, Function], openStrategy: [String, Object], opened: Array, selected: Array, mandatory: Boolean }, "nested"), Qi = (e) => {
  let l = !1;
  const n = j(/* @__PURE__ */ new Map()), t = j(/* @__PURE__ */ new Map()), a = me(e, "opened", e.opened, (c) => new Set(c), (c) => [...c.values()]), i = v(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return ((c) => {
          const f = Co(c);
          return { select: (m) => {
            let { id: b, selected: h, children: g, ...S } = m;
            return b = nn(b), g.has(b) ? h : f.select({ id: b, selected: h, children: g, ...S });
          }, in: f.in, out: f.out };
        })(e.mandatory);
      case "leaf":
        return ((c) => {
          const f = dl(c);
          return { select: (m) => {
            let { id: b, selected: h, children: g, ...S } = m;
            return b = nn(b), g.has(b) ? h : f.select({ id: b, selected: h, children: g, ...S });
          }, in: f.in, out: f.out };
        })(e.mandatory);
      case "independent":
        return dl(e.mandatory);
      case "single-independent":
        return Co(e.mandatory);
      default:
        return ((c) => {
          const f = { select: (m) => {
            let { id: b, value: h, selected: g, children: S, parents: V } = m;
            b = nn(b);
            const w = new Map(g), N = [b];
            for (; N.length; ) {
              const z = N.shift();
              g.set(z, h ? "on" : "off"), S.has(z) && N.push(...S.get(z));
            }
            let O = V.get(b);
            for (; O; ) {
              const z = S.get(O), F = z.every((C) => g.get(C) === "on"), x = z.every((C) => !g.has(C) || g.get(C) === "off");
              g.set(O, F ? "on" : x ? "off" : "indeterminate"), O = V.get(O);
            }
            return c && !h && Array.from(g.entries()).reduce((F, x) => {
              let [C, $] = x;
              return $ === "on" ? [...F, C] : F;
            }, []).length === 0 ? w : g;
          }, in: (m, b, h) => {
            let g = /* @__PURE__ */ new Map();
            for (const S of m || [])
              g = f.select({ id: S, value: !0, selected: new Map(g), children: b, parents: h });
            return g;
          }, out: (m, b) => {
            const h = [];
            for (const [g, S] of m.entries())
              S !== "on" || b.has(g) || h.push(g);
            return h;
          } };
          return f;
        })(e.mandatory);
    }
  }), u = v(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return Zi;
      case "single":
        return Ki;
      default:
        return Aa;
    }
  }), o = me(e, "selected", e.selected, (c) => i.value.in(c, n.value, t.value), (c) => i.value.out(c, n.value, t.value));
  function r(c) {
    const f = [];
    let m = c;
    for (; m != null; )
      f.unshift(m), m = t.value.get(m);
    return f;
  }
  on(() => {
    l = !0;
  });
  const p = ke("nested"), y = { id: se(), root: { opened: a, selected: o, selectedValues: v(() => {
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
      n.value.set(f, m.filter((b) => b !== c));
    }
    t.value.delete(c), a.value.delete(c);
  }, open: (c, f, m) => {
    p.emit("click:open", { id: c, value: f, path: r(c), event: m });
    const b = u.value.open({ id: c, value: f, opened: new Set(a.value), children: n.value, parents: t.value, event: m });
    b && (a.value = b);
  }, openOnSelect: (c, f, m) => {
    const b = u.value.select({ id: c, value: f, selected: new Map(o.value), opened: new Set(a.value), children: n.value, parents: t.value, event: m });
    b && (a.value = b);
  }, select: (c, f, m) => {
    p.emit("click:select", { id: c, value: f, path: r(c), event: m });
    const b = i.value.select({ id: c, value: f, selected: new Map(o.value), children: n.value, parents: t.value, event: m });
    b && (o.value = b), y.root.openOnSelect(c, f, m);
  }, children: n, parents: t } };
  return Te(tt, y), y.root;
}, Oa = (e, l) => {
  const n = ve(tt, _a), t = Symbol(Le()), a = v(() => e.value !== void 0 ? e.value : t), i = { ...n, id: a, open: (u, o) => n.root.open(a.value, u, o), openOnSelect: (u, o) => n.root.openOnSelect(a.value, u, o), isOpen: v(() => n.root.opened.value.has(a.value)), parent: v(() => n.root.parents.value.get(a.value)), select: (u, o) => n.root.select(a.value, u, o), isSelected: v(() => n.root.selected.value.get(nn(a.value)) === "on"), isIndeterminate: v(() => n.root.selected.value.get(a.value) === "indeterminate"), isLeaf: v(() => !n.root.children.value.get(a.value)), isGroupActivator: n.isGroupActivator };
  return !n.isGroupActivator && n.root.register(a.value, n.id.value, l), on(() => {
    !n.isGroupActivator && n.root.unregister(a.value);
  }), l && Te(tt, i), i;
}, er = Qn({ name: "VListGroupActivator", setup(e, l) {
  let { slots: n } = l;
  return (() => {
    const t = ve(tt, _a);
    Te(tt, { ...t, isGroupActivator: !0 });
  })(), () => {
    var t;
    return (t = n.default) == null ? void 0 : t.call(n);
  };
} }), nr = q({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: ue, default: "$collapse" }, expandIcon: { type: ue, default: "$expand" }, prependIcon: ue, appendIcon: ue, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...ie(), ...$e() }, "VListGroup"), Io = Z()({ name: "VListGroup", props: nr(), setup(e, l) {
  let { slots: n } = l;
  const { isOpen: t, open: a, id: i } = Oa(Q(e, "value"), !0), u = v(() => `v-list-group--id-${String(i.value)}`), o = Va(), { isBooted: r } = function() {
    const m = se(!1);
    return Ln(() => {
      window.requestAnimationFrame(() => {
        m.value = !0;
      });
    }), { ssrBootStyles: v(() => m.value ? void 0 : { transition: "none !important" }), isBooted: hl(m) };
  }();
  function p(m) {
    a(!t.value, m);
  }
  const y = v(() => ({ onClick: p, class: "v-list-group__header", id: u.value })), c = v(() => t.value ? e.collapseIcon : e.expandIcon), f = v(() => ({ VListItem: { active: t.value, activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && c.value, appendIcon: e.appendIcon || !e.subgroup && c.value, title: e.title, value: e.value } }));
  return te(() => d(e.tag, { class: ["v-list-group", { "v-list-group--prepend": o == null ? void 0 : o.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": t.value }, e.class], style: e.style }, { default: () => [n.activator && d(Se, { defaults: f.value }, { default: () => [d(er, null, { default: () => [n.activator({ props: y.value, isOpen: t.value })] })] }), d(en, { transition: { component: Si }, disabled: !r.value }, { default: () => {
    var m;
    return [Be(d("div", { class: "v-list-group__items", role: "group", "aria-labelledby": u.value }, [(m = n.default) == null ? void 0 : m.call(n)]), [[Dn, t.value]])];
  } })] })), {};
} }), tr = st("v-list-item-subtitle"), lr = st("v-list-item-title"), or = q({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: ue, baseColor: String, disabled: Boolean, lines: String, link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: ue, ripple: { type: [Boolean, Object], default: !0 }, subtitle: [String, Number, Boolean], title: [String, Number, Boolean], value: null, onClick: Ne(), onClickOnce: Ne(), ...Mn(), ...ie(), ...je(), ...gn(), ...Nn(), ...Ze(), ...qt(), ...$e(), ...Ce(), ...an({ variant: "text" }) }, "VListItem"), Tt = Z()({ name: "VListItem", directives: { Ripple: yt }, props: or(), emits: { click: (e) => !0 }, setup(e, l) {
  let { attrs: n, slots: t, emit: a } = l;
  const i = Gt(e, n), u = v(() => e.value === void 0 ? i.href.value : e.value), { select: o, isSelected: r, isIndeterminate: p, isGroupActivator: y, root: c, parent: f, openOnSelect: m } = Oa(u, !1), b = Va(), h = v(() => {
    var L;
    return e.active !== !1 && (e.active || ((L = i.isActive) == null ? void 0 : L.value) || r.value);
  }), g = v(() => e.link !== !1 && i.isLink.value), S = v(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || e.value != null && !!b)), V = v(() => e.rounded || e.nav), w = v(() => e.color ?? e.activeColor), N = v(() => ({ color: h.value ? w.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  Y(() => {
    var L;
    return (L = i.isActive) == null ? void 0 : L.value;
  }, (L) => {
    L && f.value != null && c.open(f.value, !0), L && m(L);
  }, { immediate: !0 });
  const { themeClasses: O } = Ve(e), { borderClasses: z } = Rn(e), { colorClasses: F, colorStyles: x, variantClasses: C } = pt(N), { densityClasses: $ } = Qe(e), { dimensionStyles: B } = hn(e), { elevationClasses: E } = jn(e), { roundedClasses: _ } = Je(V), W = v(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), H = v(() => ({ isActive: h.value, select: o, isSelected: r.value, isIndeterminate: p.value }));
  function k(L) {
    var D;
    a("click", L), !y && S.value && ((D = i.navigate) == null || D.call(i, L), e.value != null && o(!r.value, L));
  }
  function P(L) {
    L.key !== "Enter" && L.key !== " " || (L.preventDefault(), k(L));
  }
  return te(() => {
    const L = g.value ? "a" : e.tag, D = t.title || e.title, T = t.subtitle || e.subtitle, R = !(!e.appendAvatar && !e.appendIcon), I = !(!R && !t.append), A = !(!e.prependAvatar && !e.prependIcon), M = !(!A && !t.prepend);
    var G, K;
    return b == null || b.updateHasPrepend(M), e.activeColor && (G = "active-color", K = ["color", "base-color"], K = Array.isArray(K) ? K.slice(0, -1).map((ae) => `'${ae}'`).join(", ") + ` or '${K.at(-1)}'` : `'${K}'`, Mt(`[Vuetify UPGRADE] '${G}' is deprecated, use ${K} instead.`)), Be(d(L, { class: ["v-list-item", { "v-list-item--active": h.value, "v-list-item--disabled": e.disabled, "v-list-item--link": S.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !M && (b == null ? void 0 : b.hasPrepend.value), [`${e.activeClass}`]: e.activeClass && h.value }, O.value, z.value, F.value, $.value, E.value, W.value, _.value, C.value, e.class], style: [x.value, B.value, e.style], href: i.href.value, tabindex: S.value ? b ? -2 : 0 : void 0, onClick: k, onKeydown: S.value && !g.value && P }, { default: () => {
      var ae;
      return [dt(S.value || h.value, "v-list-item"), M && d("div", { key: "prepend", class: "v-list-item__prepend" }, [t.prepend ? d(Se, { key: "prepend-defaults", disabled: !A, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: !0 } } }, { default: () => {
        var ne;
        return [(ne = t.prepend) == null ? void 0 : ne.call(t, H.value)];
      } }) : d(fe, null, [e.prependAvatar && d(zn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && d(ce, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), d("div", { class: "v-list-item__spacer" }, null)]), d("div", { class: "v-list-item__content", "data-no-activator": "" }, [D && d(lr, { key: "title" }, { default: () => {
        var ne;
        return [((ne = t.title) == null ? void 0 : ne.call(t, { title: e.title })) ?? e.title];
      } }), T && d(tr, { key: "subtitle" }, { default: () => {
        var ne;
        return [((ne = t.subtitle) == null ? void 0 : ne.call(t, { subtitle: e.subtitle })) ?? e.subtitle];
      } }), (ae = t.default) == null ? void 0 : ae.call(t, H.value)]), I && d("div", { key: "append", class: "v-list-item__append" }, [t.append ? d(Se, { key: "append-defaults", disabled: !R, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: !0 } } }, { default: () => {
        var ne;
        return [(ne = t.append) == null ? void 0 : ne.call(t, H.value)];
      } }) : d(fe, null, [e.appendIcon && d(ce, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && d(zn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), d("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[Xe("ripple"), S.value && e.ripple]]);
  }), {};
} }), ar = q({ color: String, inset: Boolean, sticky: Boolean, title: String, ...ie(), ...$e() }, "VListSubheader"), ir = Z()({ name: "VListSubheader", props: ar(), setup(e, l) {
  let { slots: n } = l;
  const { textColorClasses: t, textColorStyles: a } = Ye(Q(e, "color"));
  return te(() => {
    const i = !(!n.default && !e.title);
    return d(e.tag, { class: ["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, t.value, e.class], style: [{ textColorStyles: a }, e.style] }, { default: () => {
      var u;
      return [i && d("div", { class: "v-list-subheader__text" }, [((u = n.default) == null ? void 0 : u.call(n)) ?? e.title])];
    } });
  }), {};
} }), rr = q({ color: String, inset: Boolean, length: [Number, String], thickness: [Number, String], vertical: Boolean, ...ie(), ...Ce() }, "VDivider"), sr = Z()({ name: "VDivider", props: rr(), setup(e, l) {
  let { attrs: n } = l;
  const { themeClasses: t } = Ve(e), { textColorClasses: a, textColorStyles: i } = Ye(Q(e, "color")), u = v(() => {
    const o = {};
    return e.length && (o[e.vertical ? "maxHeight" : "maxWidth"] = ee(e.length)), e.thickness && (o[e.vertical ? "borderRightWidth" : "borderTopWidth"] = ee(e.thickness)), o;
  });
  return te(() => d("hr", { class: [{ "v-divider": !0, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, t.value, a.value, e.class], style: [u.value, i.value, e.style], "aria-orientation": n.role && n.role !== "separator" ? void 0 : e.vertical ? "vertical" : "horizontal", role: `${n.role || "separator"}` }, null)), {};
} }), ur = q({ items: Array, returnObject: Boolean }, "VListChildren"), Pa = Z()({ name: "VListChildren", props: ur(), setup(e, l) {
  let { slots: n } = l;
  return Fa(), () => {
    var t, a;
    return ((t = n.default) == null ? void 0 : t.call(n)) ?? ((a = e.items) == null ? void 0 : a.map((i) => {
      var m, b;
      let { children: u, props: o, type: r, raw: p } = i;
      if (r === "divider")
        return ((m = n.divider) == null ? void 0 : m.call(n, { props: o })) ?? d(sr, o, null);
      if (r === "subheader")
        return ((b = n.subheader) == null ? void 0 : b.call(n, { props: o })) ?? d(ir, o, null);
      const y = { subtitle: n.subtitle ? (h) => {
        var g;
        return (g = n.subtitle) == null ? void 0 : g.call(n, { ...h, item: p });
      } : void 0, prepend: n.prepend ? (h) => {
        var g;
        return (g = n.prepend) == null ? void 0 : g.call(n, { ...h, item: p });
      } : void 0, append: n.append ? (h) => {
        var g;
        return (g = n.append) == null ? void 0 : g.call(n, { ...h, item: p });
      } : void 0, title: n.title ? (h) => {
        var g;
        return (g = n.title) == null ? void 0 : g.call(n, { ...h, item: p });
      } : void 0 }, [c, f] = Io.filterProps(o);
      return u ? d(Io, X({ value: o == null ? void 0 : o.value }, c), { activator: (h) => {
        let { props: g } = h;
        const S = { ...o, ...g, value: e.returnObject ? p : o.value };
        return n.header ? n.header({ props: S }) : d(Tt, S, y);
      }, default: () => d(Pa, { items: u }, n) }) : n.item ? n.item({ props: o }) : d(Tt, X(o, { value: e.returnObject ? p : o.value }), y);
    }));
  };
} }), $a = q({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, returnObject: Boolean, valueComparator: { type: Function, default: at } }, "list-items");
function pl(e, l) {
  const n = He(l, e.itemTitle, l), t = He(l, e.itemValue, n), a = He(l, e.itemChildren), i = { title: n, value: t, ...e.itemProps === !0 ? typeof l != "object" || l == null || Array.isArray(l) ? void 0 : "children" in l ? En(l, ["children"])[1] : l : He(l, e.itemProps) };
  return { title: String(i.title ?? ""), value: i.value, props: i, children: Array.isArray(a) ? Ea(e, a) : void 0, raw: l };
}
function Ea(e, l) {
  const n = [];
  for (const t of l)
    n.push(pl(e, t));
  return n;
}
function cr(e, l) {
  const n = He(l, e.itemType, "item"), t = function(o) {
    return typeof o == "string" || typeof o == "number" || typeof o == "boolean";
  }(l) ? l : He(l, e.itemTitle), a = He(l, e.itemValue, void 0), i = He(l, e.itemChildren), u = { title: t, value: a, ...e.itemProps === !0 ? En(l, ["children"])[1] : He(l, e.itemProps) };
  return { type: n, title: u.title, value: u.value, props: u, children: n === "item" && i ? Ta(e, i) : void 0, raw: l };
}
function Ta(e, l) {
  const n = [];
  for (const t of l)
    n.push(cr(e, t));
  return n;
}
const dr = q({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, lines: { type: [Boolean, String], default: "one" }, nav: Boolean, ...Ji({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Mn(), ...ie(), ...je(), ...gn(), ...Nn(), itemType: { type: String, default: "type" }, ...$a(), ...Ze(), ...$e(), ...Ce(), ...an({ variant: "text" }) }, "VList"), pr = Z()({ name: "VList", props: dr(), emits: { "update:selected": (e) => !0, "update:opened": (e) => !0, "click:open": (e) => !0, "click:select": (e) => !0 }, setup(e, l) {
  let { slots: n } = l;
  const { items: t } = function(C) {
    return { items: v(() => Ta(C, C.items)) };
  }(e), { themeClasses: a } = Ve(e), { backgroundColorClasses: i, backgroundColorStyles: u } = Tn(Q(e, "bgColor")), { borderClasses: o } = Rn(e), { densityClasses: r } = Qe(e), { dimensionStyles: p } = hn(e), { elevationClasses: y } = jn(e), { roundedClasses: c } = Je(e), { open: f, select: m } = Qi(e), b = v(() => e.lines ? `v-list--${e.lines}-line` : void 0), h = Q(e, "activeColor"), g = Q(e, "baseColor"), S = Q(e, "color");
  Fa(), Wn({ VListGroup: { activeColor: h, baseColor: g, color: S }, VListItem: { activeClass: Q(e, "activeClass"), activeColor: h, baseColor: g, color: S, density: Q(e, "density"), disabled: Q(e, "disabled"), lines: Q(e, "lines"), nav: Q(e, "nav"), variant: Q(e, "variant") } });
  const V = se(!1), w = j();
  function N(C) {
    V.value = !0;
  }
  function O(C) {
    V.value = !1;
  }
  function z(C) {
    var $;
    V.value || C.relatedTarget && (($ = w.value) != null && $.contains(C.relatedTarget)) || x();
  }
  function F(C) {
    if (w.value) {
      if (C.key === "ArrowDown")
        x("next");
      else if (C.key === "ArrowUp")
        x("prev");
      else if (C.key === "Home")
        x("first");
      else {
        if (C.key !== "End")
          return;
        x("last");
      }
      C.preventDefault();
    }
  }
  function x(C) {
    if (w.value)
      return Ft(w.value, C);
  }
  return te(() => d(e.tag, { ref: w, class: ["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav }, a.value, i.value, o.value, r.value, y.value, b.value, c.value, e.class], style: [u.value, p.value, e.style], tabindex: e.disabled || V.value ? -1 : 0, role: "listbox", "aria-activedescendant": void 0, onFocusin: N, onFocusout: O, onFocus: z, onKeydown: F }, { default: () => [d(Pa, { items: t.value, returnObject: e.returnObject }, n)] })), { open: f, select: m, focus: x };
} });
function Zt(e, l) {
  return { x: e.x + l.x, y: e.y + l.y };
}
function So(e, l) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: n, align: t } = e;
    return Zt({ x: t === "left" ? 0 : t === "center" ? l.width / 2 : t === "right" ? l.width : t, y: n === "top" ? 0 : n === "bottom" ? l.height : n }, l);
  }
  if (e.side === "left" || e.side === "right") {
    const { side: n, align: t } = e;
    return Zt({ x: n === "left" ? 0 : n === "right" ? l.width : n, y: t === "top" ? 0 : t === "center" ? l.height / 2 : t === "bottom" ? l.height : t }, l);
  }
  return Zt({ x: l.width / 2, y: l.height / 2 }, l);
}
const za = { static: function() {
}, connected: function(e, l, n) {
  (function(m) {
    for (; m; ) {
      if (window.getComputedStyle(m).position === "fixed")
        return !0;
      m = m.offsetParent;
    }
    return !1;
  })(e.activatorEl.value) && Object.assign(n.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: t, preferredOrigin: a } = Bl(() => {
    const m = al(l.location, e.isRtl.value), b = l.origin === "overlap" ? m : l.origin === "auto" ? Yt(m) : al(l.origin, e.isRtl.value);
    return m.side === b.side && m.align === Xt(b).align ? { preferredAnchor: Ul(m), preferredOrigin: Ul(b) } : { preferredAnchor: m, preferredOrigin: b };
  }), [i, u, o, r] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((m) => v(() => {
    const b = parseFloat(l[m]);
    return isNaN(b) ? 1 / 0 : b;
  })), p = v(() => {
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
    const m = e.activatorEl.value.getBoundingClientRect(), b = function(C, $) {
      $ ? C.style.removeProperty("left") : C.style.removeProperty("right");
      const B = kl(C);
      return $ ? B.x += parseFloat(C.style.right || 0) : B.x -= parseFloat(C.style.left || 0), B.y -= parseFloat(C.style.top || 0), B;
    }(e.contentEl.value, e.isRtl.value), h = Ot(e.contentEl.value);
    h.length || (h.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (b.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), b.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const g = h.reduce((C, $) => {
      const B = $.getBoundingClientRect(), E = new wn({ x: $ === document.documentElement ? 0 : B.x, y: $ === document.documentElement ? 0 : B.y, width: $.clientWidth, height: $.clientHeight });
      return C ? new wn({ x: Math.max(C.left, E.left), y: Math.max(C.top, E.top), width: Math.min(C.right, E.right) - Math.max(C.left, E.left), height: Math.min(C.bottom, E.bottom) - Math.max(C.top, E.top) }) : E;
    }, void 0);
    g.x += 12, g.y += 12, g.width -= 24, g.height -= 24;
    let S = { anchor: t.value, origin: a.value };
    function V(C) {
      const $ = new wn(b), B = So(C.anchor, m), E = So(C.origin, $);
      let { x: _, y: W } = (k = E, { x: (H = B).x - k.x, y: H.y - k.y });
      var H, k;
      switch (C.anchor.side) {
        case "top":
          W -= p.value[0];
          break;
        case "bottom":
          W += p.value[0];
          break;
        case "left":
          _ -= p.value[0];
          break;
        case "right":
          _ += p.value[0];
      }
      switch (C.anchor.align) {
        case "top":
          W -= p.value[1];
          break;
        case "bottom":
          W += p.value[1];
          break;
        case "left":
          _ -= p.value[1];
          break;
        case "right":
          _ += p.value[1];
      }
      return $.x += _, $.y += W, $.width = Math.min($.width, o.value), $.height = Math.min($.height, r.value), { overflows: Xl($, g), x: _, y: W };
    }
    let w = 0, N = 0;
    const O = { x: 0, y: 0 }, z = { x: !1, y: !1 };
    let F = -1;
    for (; ; ) {
      if (F++ > 10) {
        Mt("Vuetify error: Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const { x: C, y: $, overflows: B } = V(S);
      w += C, N += $, b.x += C, b.y += $;
      {
        const E = Yl(S.anchor), _ = B.x.before || B.x.after, W = B.y.before || B.y.after;
        let H = !1;
        if (["x", "y"].forEach((k) => {
          if (k === "x" && _ && !z.x || k === "y" && W && !z.y) {
            const P = { anchor: { ...S.anchor }, origin: { ...S.origin } }, L = k === "x" ? E === "y" ? Xt : Yt : E === "y" ? Yt : Xt;
            P.anchor = L(P.anchor), P.origin = L(P.origin);
            const { overflows: D } = V(P);
            (D[k].before <= B[k].before && D[k].after <= B[k].after || D[k].before + D[k].after < (B[k].before + B[k].after) / 2) && (S = P, H = z[k] = !0);
          }
        }), H)
          continue;
      }
      B.x.before && (w += B.x.before, b.x += B.x.before), B.x.after && (w -= B.x.after, b.x -= B.x.after), B.y.before && (N += B.y.before, b.y += B.y.before), B.y.after && (N -= B.y.after, b.y -= B.y.after);
      {
        const E = Xl(b, g);
        O.x = g.width - E.x.before - E.x.after, O.y = g.height - E.y.before - E.y.after, w += E.x.before, b.x += E.x.before, N += E.y.before, b.y += E.y.before;
      }
      break;
    }
    const x = Yl(S.anchor);
    return Object.assign(n.value, { "--v-overlay-anchor-origin": `${S.anchor.side} ${S.anchor.align}`, transformOrigin: `${S.origin.side} ${S.origin.align}`, top: ee(Jt(N)), left: e.isRtl.value ? void 0 : ee(Jt(w)), right: e.isRtl.value ? ee(Jt(-w)) : void 0, minWidth: ee(x === "y" ? Math.min(i.value, m.width) : i.value), maxWidth: ee(xo(Zn(O.x, i.value === 1 / 0 ? 0 : i.value, o.value))), maxHeight: ee(xo(Zn(O.y, u.value === 1 / 0 ? 0 : u.value, r.value))) }), { available: O, contentBox: b };
  }
  return Y([e.activatorEl, e.contentEl], (m, b) => {
    let [h, g] = m, [S, V] = b;
    S && c.unobserve(S), h && c.observe(h), V && c.unobserve(V), g && c.observe(g);
  }, { immediate: !0 }), we(() => {
    c.disconnect();
  }), Y(() => [t.value, a.value, l.offset, l.minWidth, l.minHeight, l.maxWidth, l.maxHeight], () => f()), xe(() => {
    const m = f();
    if (!m)
      return;
    const { available: b, contentBox: h } = m;
    h.height > b.y && requestAnimationFrame(() => {
      f(), requestAnimationFrame(() => {
        f();
      });
    });
  }), { updateLocation: f };
} }, vr = q({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in za }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array] }, "VOverlay-location-strategies");
function Jt(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function xo(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let vl = !0;
const zt = [];
let Bo = -1;
function fl() {
  cancelAnimationFrame(Bo), Bo = requestAnimationFrame(() => {
    const e = zt.shift();
    e && e(), zt.length ? fl() : vl = !0;
  });
}
const kt = { none: null, close: function(e) {
  ko(e.activatorEl.value ?? e.contentEl.value, function(l) {
    e.isActive.value = !1;
  });
}, block: function(e, l) {
  var o;
  const n = (o = e.root.value) == null ? void 0 : o.offsetParent, t = [.../* @__PURE__ */ new Set([...Ot(e.activatorEl.value, l.contained ? n : void 0), ...Ot(e.contentEl.value, l.contained ? n : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), a = window.innerWidth - document.documentElement.offsetWidth, i = (u = n || document.documentElement, Fl(u) && u);
  var u;
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), t.forEach((r, p) => {
    r.style.setProperty("--v-body-scroll-x", ee(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", ee(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", ee(a)), r.classList.add("v-overlay-scroll-blocked");
  }), we(() => {
    t.forEach((r, p) => {
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
      const p = performance.now();
      (f = (c = e.updateLocation).value) == null || f.call(c, o), t = (performance.now() - p) / (1e3 / 60) > 2;
    }, !vl || zt.length ? (zt.push(r), fl()) : (vl = !1, r(), fl());
  }
  i = (typeof requestIdleCallback > "u" ? (o) => o() : requestIdleCallback)(() => {
    n.run(() => {
      ko(e.activatorEl.value ?? e.contentEl.value, (o) => {
        t ? (cancelAnimationFrame(a), a = requestAnimationFrame(() => {
          a = requestAnimationFrame(() => {
            u(o);
          });
        })) : u(o);
      });
    });
  }), we(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(a);
  });
} }, fr = q({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in kt } }, "VOverlay-scroll-strategies");
function ko(e, l) {
  const n = [document, ...Ot(e)];
  n.forEach((t) => {
    t.addEventListener("scroll", l, { passive: !0 });
  }), we(() => {
    n.forEach((t) => {
      t.removeEventListener("scroll", l);
    });
  });
}
const yl = Symbol.for("vuetify:v-menu"), yr = q({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay"), mr = q({ activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...yr() }, "VOverlay-activator");
function gr(e, l) {
  let { isActive: n, isTop: t } = l;
  const a = j();
  let i = !1, u = !1, o = !0;
  const r = v(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), p = v(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !r.value), { runOpenDelay: y, runCloseDelay: c } = function(F, x) {
    const C = {}, $ = (B) => () => {
      if (!Ee)
        return Promise.resolve(!0);
      const E = B === "openDelay";
      return C.closeDelay && window.clearTimeout(C.closeDelay), delete C.closeDelay, C.openDelay && window.clearTimeout(C.openDelay), delete C.openDelay, new Promise((_) => {
        const W = parseInt(F[B] ?? 0, 10);
        C[B] = window.setTimeout(() => {
          x == null || x(E), _(E);
        }, W);
      });
    };
    return { runCloseDelay: $("closeDelay"), runOpenDelay: $("openDelay") };
  }(e, (F) => {
    F !== (e.openOnHover && i || r.value && u) || e.openOnHover && n.value && !t.value || (n.value !== F && (o = !0), n.value = F);
  }), f = (F) => {
    F.stopPropagation(), a.value = F.currentTarget || F.target, n.value = !n.value;
  }, m = (F) => {
    var x;
    (x = F.sourceCapabilities) != null && x.firesTouchEvents || (i = !0, a.value = F.currentTarget || F.target, y());
  }, b = (F) => {
    i = !1, c();
  }, h = (F) => {
    Vt(F.target, ":focus-visible") !== !1 && (u = !0, F.stopPropagation(), a.value = F.currentTarget || F.target, y());
  }, g = (F) => {
    u = !1, F.stopPropagation(), c();
  }, S = v(() => {
    const F = {};
    return p.value && (F.onClick = f), e.openOnHover && (F.onMouseenter = m, F.onMouseleave = b), r.value && (F.onFocus = h, F.onBlur = g), F;
  }), V = v(() => {
    const F = {};
    if (e.openOnHover && (F.onMouseenter = () => {
      i = !0, y();
    }, F.onMouseleave = () => {
      i = !1, c();
    }), r.value && (F.onFocusin = () => {
      u = !0, y();
    }, F.onFocusout = () => {
      u = !1, c();
    }), e.closeOnContentClick) {
      const x = ve(yl, null);
      F.onClick = () => {
        n.value = !1, x == null || x.closeParents();
      };
    }
    return F;
  }), w = v(() => {
    const F = {};
    return e.openOnHover && (F.onMouseenter = () => {
      o && (i = !0, o = !1, y());
    }, F.onMouseleave = () => {
      i = !1, c();
    }), F;
  });
  Y(t, (F) => {
    !F || (!e.openOnHover || i || r.value && u) && (!r.value || u || e.openOnHover && i) || (n.value = !1);
  });
  const N = j();
  Ue(() => {
    N.value && xe(() => {
      a.value = tl(N.value);
    });
  });
  const O = ke("useActivator");
  let z;
  return Y(() => !!e.activator, (F) => {
    F && Ee ? (z = bl(), z.run(() => {
      (function(x, C, $) {
        let { activatorEl: B, activatorEvents: E } = $;
        function _() {
          let k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : H(), P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x.activatorProps;
          k && function(L, D) {
            Object.keys(D).forEach((T) => {
              if (ll(T)) {
                const R = Gl(T), I = ht.get(L);
                if (D[T] == null)
                  I == null || I.forEach((A) => {
                    const [M, G] = A;
                    M === R && (L.removeEventListener(R, G), I.delete(A));
                  });
                else if (!I || ![...I].some((A) => A[0] === R && A[1] === D[T])) {
                  L.addEventListener(R, D[T]);
                  const A = I || /* @__PURE__ */ new Set();
                  A.add([R, D[T]]), ht.has(L) || ht.set(L, A);
                }
              } else
                D[T] == null ? L.removeAttribute(T) : L.setAttribute(T, D[T]);
            });
          }(k, X(E.value, P));
        }
        function W() {
          let k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : H(), P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x.activatorProps;
          k && function(L, D) {
            Object.keys(D).forEach((T) => {
              if (ll(T)) {
                const R = Gl(T), I = ht.get(L);
                I == null || I.forEach((A) => {
                  const [M, G] = A;
                  M === R && (L.removeEventListener(R, G), I.delete(A));
                });
              } else
                L.removeAttribute(T);
            });
          }(k, X(E.value, P));
        }
        function H() {
          var L, D;
          let k, P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : x.activator;
          if (P)
            if (P === "parent") {
              let T = (D = (L = C == null ? void 0 : C.proxy) == null ? void 0 : L.$el) == null ? void 0 : D.parentNode;
              for (; T != null && T.hasAttribute("data-no-activator"); )
                T = T.parentNode;
              k = T;
            } else
              k = typeof P == "string" ? document.querySelector(P) : "$el" in P ? P.$el : P;
          return B.value = (k == null ? void 0 : k.nodeType) === Node.ELEMENT_NODE ? k : null, B.value;
        }
        Y(() => x.activator, (k, P) => {
          if (P && k !== P) {
            const L = H(P);
            L && W(L);
          }
          k && xe(() => _());
        }, { immediate: !0 }), Y(() => x.activatorProps, () => {
          _();
        }), we(() => {
          W();
        });
      })(e, O, { activatorEl: a, activatorEvents: S });
    })) : z && z.stop();
  }, { flush: "post", immediate: !0 }), we(() => {
    z == null || z.stop();
  }), { activatorEl: a, activatorRef: N, activatorEvents: S, contentEvents: V, scrimEvents: w };
}
const hr = Symbol.for("vuetify:display");
function Da() {
  const e = ve(hr);
  if (!e)
    throw new Error("Could not find Vuetify display injection");
  return e;
}
const br = q({ eager: Boolean }, "lazy");
function La() {
  const e = ke("useScopeId").vnode.scopeId;
  return { scopeId: e ? { [e]: "" } : void 0 };
}
const wo = Symbol.for("vuetify:stack"), Un = ze([]);
function Cr() {
  return !0;
}
function Fo(e, l, n) {
  if (!e || Wa(e, n) === !1)
    return !1;
  const t = qo(l);
  if (typeof ShadowRoot < "u" && t instanceof ShadowRoot && t.host === e.target)
    return !1;
  const a = (typeof n.value == "object" && n.value.include || (() => []))();
  return a.push(l), !a.some((i) => i == null ? void 0 : i.contains(e.target));
}
function Wa(e, l) {
  return (typeof l.value == "object" && l.value.closeConditional || Cr)(e);
}
function Vo(e, l) {
  const n = qo(e);
  l(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && l(n);
}
const Ir = { mounted(e, l) {
  const n = (a) => function(i, u, o) {
    const r = typeof o.value == "function" ? o.value : o.value.handler;
    u._clickOutside.lastMousedownWasOutside && Fo(i, u, o) && setTimeout(() => {
      Wa(i, o) && r && r(i);
    }, 0);
  }(a, e, l), t = (a) => {
    e._clickOutside.lastMousedownWasOutside = Fo(a, e, l);
  };
  Vo(e, (a) => {
    a.addEventListener("click", n, !0), a.addEventListener("mousedown", t, !0);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: !1 }), e._clickOutside[l.instance.$.uid] = { onClick: n, onMousedown: t };
}, unmounted(e, l) {
  e._clickOutside && (Vo(e, (n) => {
    var i;
    if (!n || !((i = e._clickOutside) != null && i[l.instance.$.uid]))
      return;
    const { onClick: t, onMousedown: a } = e._clickOutside[l.instance.$.uid];
    n.removeEventListener("click", t, !0), n.removeEventListener("mousedown", a, !0);
  }), delete e._clickOutside[l.instance.$.uid]);
} };
function Sr(e) {
  const { modelValue: l, color: n, ...t } = e;
  return d(yn, { name: "fade-transition", appear: !0 }, { default: () => [e.modelValue && d("div", X({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, t), null)] });
}
const Ma = q({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: !0 }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: !0 }, zIndex: { type: [Number, String], default: 2e3 }, ...mr(), ...ie(), ...gn(), ...br(), ...vr(), ...fr(), ...Ce(), ...ct() }, "VOverlay"), Ao = Z()({ name: "VOverlay", directives: { ClickOutside: Ir }, inheritAttrs: !1, props: { _disableGlobalStack: Boolean, ...Ma() }, emits: { "click:outside": (e) => !0, "update:modelValue": (e) => !0, afterLeave: () => !0 }, setup(e, l) {
  var T, R;
  let { slots: n, attrs: t, emit: a } = l;
  const i = me(e, "modelValue"), u = v({ get: () => i.value, set: (I) => {
    I && e.disabled || (i.value = I);
  } }), { teleportTarget: o } = (r = v(() => e.attach || e.contained), { teleportTarget: v(() => {
    const I = r.value;
    if (I === !0 || !Ee)
      return;
    const A = I === !1 ? document.body : typeof I == "string" ? document.querySelector(I) : I;
    if (A == null)
      return void Mt(`Unable to locate target ${I}`);
    let M = A.querySelector(":scope > .v-overlay-container");
    return M || (M = document.createElement("div"), M.className = "v-overlay-container", A.appendChild(M)), M;
  }) });
  var r;
  const { themeClasses: p } = Ve(e), { rtlClasses: y, isRtl: c } = ut(), { hasContent: f, onAfterLeave: m } = function(I, A) {
    const M = se(!1), G = v(() => M.value || I.eager || A.value);
    return Y(A, () => M.value = !0), { isBooted: M, hasContent: G, onAfterLeave: function() {
      I.eager || (M.value = !1);
    } };
  }(e, u), b = Tn(v(() => typeof e.scrim == "string" ? e.scrim : null)), { globalTop: h, localTop: g, stackStyles: S } = function(I, A, M) {
    const G = ke("useStack"), K = !M, ae = ve(wo, void 0), ne = ze({ activeChildren: /* @__PURE__ */ new Set() });
    Te(wo, ne);
    const de = se(+A.value);
    pn(I, () => {
      var qn;
      const Me = (qn = Un.at(-1)) == null ? void 0 : qn[1];
      de.value = Me ? Me + 10 : +A.value, K && Un.push([G.uid, de.value]), ae == null || ae.activeChildren.add(G.uid), we(() => {
        if (K) {
          const Ua = nn(Un).findIndex((Ya) => Ya[0] === G.uid);
          Un.splice(Ua, 1);
        }
        ae == null || ae.activeChildren.delete(G.uid);
      });
    });
    const Ae = se(!0);
    K && Ue(() => {
      var qn;
      const Me = ((qn = Un.at(-1)) == null ? void 0 : qn[0]) === G.uid;
      setTimeout(() => Ae.value = Me);
    });
    const Gn = v(() => !ne.activeChildren.size);
    return { globalTop: hl(Ae), localTop: Gn, stackStyles: v(() => ({ zIndex: de.value })) };
  }(u, Q(e, "zIndex"), e._disableGlobalStack), { activatorEl: V, activatorRef: w, activatorEvents: N, contentEvents: O, scrimEvents: z } = gr(e, { isActive: u, isTop: g }), { dimensionStyles: F } = hn(e), x = function() {
    if (!Ee)
      return se(!1);
    const { ssr: I } = Da();
    if (I) {
      const A = se(!1);
      return Ln(() => {
        A.value = !0;
      }), A;
    }
    return se(!0);
  }(), { scopeId: C } = La();
  Y(() => e.disabled, (I) => {
    I && (u.value = !1);
  });
  const $ = j(), B = j(), { contentStyles: E, updateLocation: _ } = function(I, A) {
    const M = j({}), G = j();
    function K(ae) {
      var ne;
      (ne = G.value) == null || ne.call(G, ae);
    }
    return Ee && (pn(() => !(!A.isActive.value || !I.locationStrategy), (ae) => {
      var ne, de;
      Y(() => I.locationStrategy, ae), we(() => {
        G.value = void 0;
      }), typeof I.locationStrategy == "function" ? G.value = (ne = I.locationStrategy(A, I, M)) == null ? void 0 : ne.updateLocation : G.value = (de = za[I.locationStrategy](A, I, M)) == null ? void 0 : de.updateLocation;
    }), window.addEventListener("resize", K, { passive: !0 }), we(() => {
      window.removeEventListener("resize", K), G.value = void 0;
    })), { contentStyles: M, updateLocation: G };
  }(e, { isRtl: c, contentEl: B, activatorEl: V, isActive: u });
  function W(I) {
    a("click:outside", I), e.persistent ? D() : u.value = !1;
  }
  function H() {
    return u.value && h.value;
  }
  function k(I) {
    var A, M;
    I.key === "Escape" && h.value && (e.persistent ? D() : (u.value = !1, (A = B.value) != null && A.contains(document.activeElement) && ((M = V.value) == null || M.focus())));
  }
  (function(I, A) {
    if (!Ee)
      return;
    let M;
    Ue(async () => {
      M == null || M.stop(), A.isActive.value && I.scrollStrategy && (M = bl(), await xe(), M.active && M.run(() => {
        var G;
        typeof I.scrollStrategy == "function" ? I.scrollStrategy(A, I, M) : (G = kt[I.scrollStrategy]) == null || G.call(kt, A, I, M);
      }));
    }), we(() => {
      M == null || M.stop();
    });
  })(e, { root: $, contentEl: B, activatorEl: V, isActive: u, updateLocation: _ }), Ee && Y(u, (I) => {
    I ? window.addEventListener("keydown", k) : window.removeEventListener("keydown", k);
  }, { immediate: !0 });
  const P = (R = (T = ke("useRouter")) == null ? void 0 : T.proxy) == null ? void 0 : R.$router;
  pn(() => e.closeOnBack, () => {
    (function(I, A) {
      let M, G, K = !1;
      function ae(ne) {
        var de;
        (de = ne.state) != null && de.replaced || (K = !0, setTimeout(() => K = !1));
      }
      Ee && (xe(() => {
        window.addEventListener("popstate", ae), M = I == null ? void 0 : I.beforeEach((ne, de, Ae) => {
          Kt ? K ? A(Ae) : Ae() : setTimeout(() => K ? A(Ae) : Ae()), Kt = !0;
        }), G = I == null ? void 0 : I.afterEach(() => {
          Kt = !1;
        });
      }), we(() => {
        window.removeEventListener("popstate", ae), M == null || M(), G == null || G();
      }));
    })(P, (I) => {
      h.value && u.value ? (I(!1), e.persistent ? D() : u.value = !1) : I();
    });
  });
  const L = j();
  function D() {
    e.noClickAnimation || B.value && In(B.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: _t });
  }
  return Y(() => u.value && (e.absolute || e.contained) && o.value == null, (I) => {
    if (I) {
      const A = Uo($.value);
      A && A !== document.scrollingElement && (L.value = A.scrollTop);
    }
  }), te(() => {
    var I;
    return d(fe, null, [(I = n.activator) == null ? void 0 : I.call(n, { isActive: u.value, props: X({ ref: w }, N.value, e.activatorProps) }), x.value && f.value && d(rn, { disabled: !o.value, to: o.value }, { default: () => [d("div", X({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": u.value, "v-overlay--contained": e.contained }, p.value, y.value, e.class], style: [S.value, { top: ee(L.value) }, e.style], ref: $ }, C, t), [d(Sr, X({ color: b, modelValue: u.value && !!e.scrim }, z.value), null), d(en, { appear: !0, persisted: !0, transition: e.transition, target: V.value, onAfterLeave: () => {
      m(), a("afterLeave");
    } }, { default: () => {
      var A;
      return [Be(d("div", X({ ref: B, class: ["v-overlay__content", e.contentClass], style: [F.value, E.value] }, O.value, e.contentProps), [(A = n.default) == null ? void 0 : A.call(n, { isActive: u })]), [[Dn, u.value], [Xe("click-outside"), { handler: W, closeConditional: H, include: () => [V.value] }]])];
    } })])] })]);
  }), { activatorEl: V, animateClick: D, contentEl: B, globalTop: h, localTop: g, updateLocation: _ };
} }), Qt = Symbol("Forwarded refs");
function el(e, l) {
  let n = e;
  for (; n; ) {
    const t = Reflect.getOwnPropertyDescriptor(n, l);
    if (t)
      return t;
    n = Object.getPrototypeOf(n);
  }
}
function Ht(e) {
  for (var l = arguments.length, n = new Array(l > 1 ? l - 1 : 0), t = 1; t < l; t++)
    n[t - 1] = arguments[t];
  return e[Qt] = n, new Proxy(e, { get(a, i) {
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
  }, set(a, i, u) {
    if (Reflect.has(a, i))
      return Reflect.set(a, i, u);
    if (typeof i == "symbol" || i.startsWith("__"))
      return !1;
    for (const o of n)
      if (o.value && Reflect.has(o.value, i))
        return Reflect.set(o.value, i, u);
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
        const p = el(r.value, i) ?? ("_" in r.value ? el((o = r.value._) == null ? void 0 : o.setupState, i) : void 0);
        if (p)
          return p;
      }
      for (const r of n) {
        const p = r.value && r.value[Qt];
        if (!p)
          continue;
        const y = p.slice();
        for (; y.length; ) {
          const c = y.shift(), f = el(c.value, i);
          if (f)
            return f;
          const m = c.value && c.value[Qt];
          m && y.push(...m);
        }
      }
    }
  } });
}
const xr = q({ id: String, ...it(Ma({ closeDelay: 250, closeOnContentClick: !0, locationStrategy: "connected", openDelay: 300, scrim: !1, scrollStrategy: "reposition", transition: { component: Zo } }), ["absolute"]) }, "VMenu"), Br = Z()({ name: "VMenu", props: xr(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: n } = l;
  const t = me(e, "modelValue"), { scopeId: a } = La(), i = Le(), u = v(() => e.id || `v-menu-${i}`), o = j(), r = ve(yl, null), p = se(0);
  async function y(h) {
    var V, w, N;
    const g = h.relatedTarget, S = h.target;
    await xe(), t.value && g !== S && ((V = o.value) != null && V.contentEl) && ((w = o.value) != null && w.globalTop) && ![document, o.value.contentEl].includes(S) && !o.value.contentEl.contains(S) && ((N = ol(o.value.contentEl)[0]) == null || N.focus());
  }
  function c() {
    r == null || r.closeParents();
  }
  function f(h) {
    var g, S, V;
    !e.disabled && h.key === "Tab" && (No(ol((g = o.value) == null ? void 0 : g.contentEl, !1), h.shiftKey ? "prev" : "next", (w) => w.tabIndex >= 0) || (t.value = !1, (V = (S = o.value) == null ? void 0 : S.activatorEl) == null || V.focus()));
  }
  function m(h) {
    var S;
    if (e.disabled)
      return;
    const g = (S = o.value) == null ? void 0 : S.contentEl;
    g && t.value ? h.key === "ArrowDown" ? (h.preventDefault(), Ft(g, "next")) : h.key === "ArrowUp" && (h.preventDefault(), Ft(g, "prev")) : ["ArrowDown", "ArrowUp"].includes(h.key) && (t.value = !0, h.preventDefault(), setTimeout(() => setTimeout(() => m(h))));
  }
  Te(yl, { register() {
    ++p.value;
  }, unregister() {
    --p.value;
  }, closeParents() {
    setTimeout(() => {
      p.value || (t.value = !1, r == null || r.closeParents());
    }, 40);
  } }), Y(t, (h) => {
    h ? (r == null || r.register(), document.addEventListener("focusin", y, { once: !0 })) : (r == null || r.unregister(), document.removeEventListener("focusin", y));
  });
  const b = v(() => X({ "aria-haspopup": "menu", "aria-expanded": String(t.value), "aria-owns": u.value, onKeydown: m }, e.activatorProps));
  return te(() => {
    const [h] = Ao.filterProps(e);
    return d(Ao, X({ ref: o, class: ["v-menu", e.class], style: e.style }, h, { modelValue: t.value, "onUpdate:modelValue": (g) => t.value = g, absolute: !0, activatorProps: b.value, "onClick:outside": c, onKeydown: f }, a), { activator: n.activator, default: function() {
      for (var g = arguments.length, S = new Array(g), V = 0; V < g; V++)
        S[V] = arguments[V];
      return d(Se, { root: "VMenu" }, { default: () => {
        var w;
        return [(w = n.default) == null ? void 0 : w.call(n, ...S)];
      } });
    } });
  }), Ht({ id: u, ΨopenChildren: p }, o);
} }), kr = q({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...ie(), ...ct({ transition: { component: Jo } }) }, "VCounter"), Ra = Z()({ name: "VCounter", functional: !0, props: kr(), setup(e, l) {
  let { slots: n } = l;
  const t = v(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return te(() => d(en, { transition: e.transition }, { default: () => [Be(d("div", { class: ["v-counter", e.class], style: e.style }, [n.default ? n.default({ counter: t.value, max: e.max, value: e.value }) : t.value]), [[Dn, e.active]])] })), {};
} }), wr = q({ floating: Boolean, ...ie() }, "VFieldLabel"), It = Z()({ name: "VFieldLabel", props: wr(), setup(e, l) {
  let { slots: n } = l;
  return te(() => d(ba, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, n)), {};
} }), Fr = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Dl = q({ appendInnerIcon: ue, bgColor: String, clearable: Boolean, clearIcon: { type: ue, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: ue, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => Fr.includes(e) }, "onClick:clear": Ne(), "onClick:appendInner": Ne(), "onClick:prependInner": Ne(), ...ie(), ...El(), ...Ze(), ...Ce() }, "VField"), Ll = Z()({ name: "VField", inheritAttrs: !1, props: { id: String, ...Ba(), ...Dl() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: n, emit: t, slots: a } = l;
  const { themeClasses: i } = Ve(e), { loaderClasses: u } = jt(e), { focusClasses: o, isFocused: r, focus: p, blur: y } = mt(e), { InputIcon: c } = xa(e), { roundedClasses: f } = Je(e), { rtlClasses: m } = ut(), b = v(() => e.dirty || e.active), h = v(() => !(e.singleLine || !e.label && !a.label)), g = Le(), S = v(() => e.id || `input-${g}`), V = v(() => `${S.value}-messages`), w = j(), N = j(), O = j(), z = v(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: F, backgroundColorStyles: x } = Tn(Q(e, "bgColor")), { textColorClasses: C, textColorStyles: $ } = Ye(v(() => e.error || e.disabled ? void 0 : b.value && r.value ? e.color : e.baseColor));
  Y(b, (_) => {
    if (h.value) {
      const W = w.value.$el, H = N.value.$el;
      requestAnimationFrame(() => {
        const k = kl(W), P = H.getBoundingClientRect(), L = P.x - k.x, D = P.y - k.y - (k.height / 2 - P.height / 2), T = P.width / 0.75, R = Math.abs(T - k.width) > 1 ? { maxWidth: ee(T) } : void 0, I = getComputedStyle(W), A = getComputedStyle(H), M = 1e3 * parseFloat(I.transitionDuration) || 150, G = parseFloat(A.getPropertyValue("--v-field-label-scale")), K = A.getPropertyValue("color");
        W.style.visibility = "visible", H.style.visibility = "hidden", In(W, { transform: `translate(${L}px, ${D}px) scale(${G})`, color: K, ...R }, { duration: M, easing: _t, direction: _ ? "normal" : "reverse" }).finished.then(() => {
          W.style.removeProperty("visibility"), H.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const B = v(() => ({ isActive: b, isFocused: r, controlRef: O, blur: y, focus: p }));
  function E(_) {
    _.target !== document.activeElement && _.preventDefault();
  }
  return te(() => {
    var L, D, T;
    const _ = e.variant === "outlined", W = a["prepend-inner"] || e.prependInnerIcon, H = !(!e.clearable && !a.clear), k = !!(a["append-inner"] || e.appendInnerIcon || H), P = a.label ? a.label({ ...B.value, label: e.label, props: { for: S.value } }) : e.label;
    return d("div", X({ class: ["v-field", { "v-field--active": b.value, "v-field--appended": k, "v-field--center-affix": e.centerAffix ?? !z.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": W, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !P, [`v-field--variant-${e.variant}`]: !0 }, i.value, F.value, o.value, u.value, f.value, m.value, e.class], style: [x.value, e.style], onClick: E }, n), [d("div", { class: "v-field__overlay" }, null), d(Tl, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: a.loader }), W && d("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && d(c, { key: "prepend-icon", name: "prependInner" }, null), (L = a["prepend-inner"]) == null ? void 0 : L.call(a, B.value)]), d("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && h.value && d(It, { key: "floating-label", ref: N, class: [C.value], floating: !0, for: S.value, style: $.value }, { default: () => [P] }), d(It, { ref: w, for: S.value }, { default: () => [P] }), (D = a.default) == null ? void 0 : D.call(a, { ...B.value, props: { id: S.value, class: "v-field__input", "aria-describedby": V.value }, focus: p, blur: y })]), H && d(Qo, { key: "clear" }, { default: () => [Be(d("div", { class: "v-field__clearable", onMousedown: (R) => {
      R.preventDefault(), R.stopPropagation();
    } }, [a.clear ? a.clear() : d(c, { name: "clear" }, null)]), [[Dn, e.dirty]])] }), k && d("div", { key: "append", class: "v-field__append-inner" }, [(T = a["append-inner"]) == null ? void 0 : T.call(a, B.value), e.appendInnerIcon && d(c, { key: "append-icon", name: "appendInner" }, null)]), d("div", { class: ["v-field__outline", C.value], style: $.value }, [_ && d(fe, null, [d("div", { class: "v-field__outline__start" }, null), h.value && d("div", { class: "v-field__outline__notch" }, [d(It, { ref: N, floating: !0, for: S.value }, { default: () => [P] })]), d("div", { class: "v-field__outline__end" }, null)]), z.value && h.value && d(It, { ref: N, floating: !0, for: S.value }, { default: () => [P] })])]);
  }), { controlRef: O };
} });
function Na(e) {
  return En(e, Object.keys(Ll.props).filter((l) => !ll(l) && l !== "class" && l !== "style"));
}
const Vr = ["color", "file", "time", "date", "datetime-local", "week", "month"], ja = q({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...gt(), ...Dl() }, "VTextField"), ml = Z()({ name: "VTextField", directives: { Intersect: _l }, inheritAttrs: !1, props: ja(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: n, emit: t, slots: a } = l;
  const i = me(e, "modelValue"), { isFocused: u, focus: o, blur: r } = mt(e), p = v(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), y = v(() => n.maxlength ? n.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), c = v(() => ["plain", "underlined"].includes(e.variant));
  function f(z, F) {
    var x, C;
    e.autofocus && z && ((C = (x = F[0].target) == null ? void 0 : x.focus) == null || C.call(x));
  }
  const m = j(), b = j(), h = j(), g = v(() => Vr.includes(e.type) || e.persistentPlaceholder || u.value || e.active);
  function S() {
    var z;
    h.value !== document.activeElement && ((z = h.value) == null || z.focus()), u.value || o();
  }
  function V(z) {
    t("mousedown:control", z), z.target !== h.value && (S(), z.preventDefault());
  }
  function w(z) {
    S(), t("click:control", z);
  }
  function N(z) {
    z.stopPropagation(), S(), xe(() => {
      i.value = null, Ro(e["onClick:clear"], z);
    });
  }
  function O(z) {
    var x;
    const F = z.target;
    if (i.value = F.value, ((x = e.modelModifiers) == null ? void 0 : x.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const C = [F.selectionStart, F.selectionEnd];
      xe(() => {
        F.selectionStart = C[0], F.selectionEnd = C[1];
      });
    }
  }
  return te(() => {
    const z = !!(a.counter || e.counter || e.counterValue), F = !(!z && !a.details), [x, C] = rt(n), [{ modelValue: $, ...B }] = ln.filterProps(e), [E] = Na(e);
    return d(ln, X({ ref: m, modelValue: i.value, "onUpdate:modelValue": (_) => i.value = _, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-text-field--plain-underlined": ["plain", "underlined"].includes(e.variant) }, e.class], style: e.style }, x, B, { centerAffix: !c.value, focused: u.value }), { ...a, default: (_) => {
      let { id: W, isDisabled: H, isDirty: k, isReadonly: P, isValid: L } = _;
      return d(Ll, X({ ref: b, onMousedown: V, onClick: w, "onClick:clear": N, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: e.role }, E, { id: W.value, active: g.value || k.value, dirty: k.value || e.dirty, disabled: H.value, focused: u.value, error: L.value === !1 }), { ...a, default: (D) => {
        let { props: { class: T, ...R } } = D;
        const I = Be(d("input", X({ ref: h, value: i.value, onInput: O, autofocus: e.autofocus, readonly: P.value, disabled: H.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: S, onBlur: r }, R, C), null), [[Xe("intersect"), { handler: f }, null, { once: !0 }]]);
        return d(fe, null, [e.prefix && d("span", { class: "v-text-field__prefix" }, [d("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), a.default ? d("div", { class: T, "data-no-activator": "" }, [a.default(), I]) : Qa(I, { class: T }), e.suffix && d("span", { class: "v-text-field__suffix" }, [d("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: F ? (_) => {
      var W;
      return d(fe, null, [(W = a.details) == null ? void 0 : W.call(a, _), z && d(fe, null, [d("span", null, null), d(Ra, { active: e.persistentCounter || u.value, value: p.value, max: y.value }, a.counter)])]);
    } : void 0 });
  }), Ht({}, m, b, h);
} }), Ar = q({ renderless: Boolean, ...ie() }, "VVirtualScrollItem"), _r = Z()({ name: "VVirtualScrollItem", inheritAttrs: !1, props: Ar(), emits: { "update:height": (e) => !0 }, setup(e, l) {
  let { attrs: n, emit: t, slots: a } = l;
  const { resizeRef: i, contentRect: u } = Vl(void 0, "border");
  Y(() => {
    var o;
    return (o = u.value) == null ? void 0 : o.height;
  }, (o) => {
    o != null && t("update:height", o);
  }), te(() => {
    var o, r;
    return e.renderless ? d(fe, null, [(o = a.default) == null ? void 0 : o.call(a, { itemRef: i })]) : d("div", X({ ref: i, class: ["v-virtual-scroll__item", e.class], style: e.style }, n), [(r = a.default) == null ? void 0 : r.call(a)]);
  });
} }), Or = q({ itemHeight: { type: [Number, String], default: 48 } }, "virtual");
function Pr(e, l, n) {
  const t = se(0), a = se(e.itemHeight), i = v({ get: () => parseInt(a.value ?? 0, 10), set(w) {
    a.value = w;
  } }), u = j(), { resizeRef: o, contentRect: r } = Vl();
  Ue(() => {
    o.value = u.value;
  });
  const p = Da(), y = /* @__PURE__ */ new Map();
  let c = Array.from({ length: l.value.length });
  const f = v(() => {
    const w = (r.value && u.value !== document.documentElement ? r.value.height : p.height.value) - ((n == null ? void 0 : n.value) ?? 0);
    return Math.ceil(w / i.value * 1.7 + 1);
  });
  function m(w) {
    return c.slice(0, w).reduce((N, O) => N + (O || i.value), 0);
  }
  let b = 0;
  const h = v(() => Math.min(l.value.length, t.value + f.value)), g = v(() => l.value.slice(t.value, h.value).map((w, N) => ({ raw: w, index: N + t.value }))), S = v(() => m(t.value)), V = v(() => m(l.value.length) - m(h.value));
  return Y(() => l.value.length, () => {
    c = function(w) {
      let N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return Array.from({ length: w }, (O, z) => N + z);
    }(l.value.length).map(() => i.value), y.forEach((w, N) => {
      const O = l.value.indexOf(N);
      O === -1 ? y.delete(N) : c[O] = w;
    });
  }), { containerRef: u, computedItems: g, itemHeight: i, paddingTop: S, paddingBottom: V, scrollToIndex: function(w) {
    if (!u.value)
      return;
    const N = m(w);
    u.value.scrollTop = N;
  }, handleScroll: function() {
    if (!u.value || !r.value)
      return;
    const w = r.value.height - 56, N = u.value.scrollTop, O = N < b ? -1 : 1, z = function($) {
      const B = l.value.length;
      let E = 0, _ = 0;
      for (; _ < $ && E < B; )
        _ += c[E++] || i.value;
      return E - 1;
    }(N + w / 2), F = Math.round(f.value / 3), x = z - F, C = t.value + 2 * F - 1;
    O === -1 && z <= C ? t.value = Zn(x, 0, l.value.length) : O === 1 && z >= C && (t.value = Zn(x, 0, l.value.length - f.value)), b = N;
  }, handleItemResize: function(w, N) {
    i.value = Math.max(i.value, N), c[w] = N, y.set(l.value[w], N);
  } };
}
const $r = q({ items: { type: Array, default: () => [] }, renderless: Boolean, ...Or(), ...ie(), ...gn() }, "VVirtualScroll"), Er = Z()({ name: "VVirtualScroll", props: $r(), setup(e, l) {
  let { slots: n } = l;
  const t = ke("VVirtualScroll"), { dimensionStyles: a } = hn(e), { containerRef: i, handleScroll: u, handleItemResize: o, scrollToIndex: r, paddingTop: p, paddingBottom: y, computedItems: c } = Pr(e, Q(e, "items"));
  return pn(() => e.renderless, () => {
    Ln(() => {
      var f;
      i.value = Uo(t.vnode.el, !0), (f = i.value) == null || f.addEventListener("scroll", u);
    }), we(() => {
      var f;
      (f = i.value) == null || f.removeEventListener("scroll", u);
    });
  }), te(() => {
    const f = c.value.map((m) => d(_r, { key: m.index, renderless: e.renderless, "onUpdate:height": (b) => o(m.index, b) }, { default: (b) => {
      var h;
      return (h = n.default) == null ? void 0 : h.call(n, { item: m.raw, index: m.index, ...b });
    } }));
    return e.renderless ? d(fe, null, [d("div", { class: "v-virtual-scroll__spacer", style: { paddingTop: ee(p.value) } }, null), f, d("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: ee(y.value) } }, null)]) : d("div", { ref: i, class: ["v-virtual-scroll", e.class], onScroll: u, style: [a.value, e.style] }, [d("div", { class: "v-virtual-scroll__container", style: { paddingTop: ee(p.value), paddingBottom: ee(y.value) } }, [f])]);
  }), { scrollToIndex: r };
} });
function Tr(e, l) {
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
      await new Promise((p) => requestAnimationFrame(p)), await new Promise((p) => requestAnimationFrame(p)), await new Promise((p) => requestAnimationFrame(p)), await new Promise((p) => {
        if (n.value) {
          const y = Y(n, () => {
            y(), p();
          });
        } else
          p();
      });
    }();
    const u = i.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (a.key === "PageDown" || a.key === "Home") {
      const p = i.getBoundingClientRect().top;
      for (const y of u)
        if (y.getBoundingClientRect().top >= p) {
          y.focus();
          break;
        }
    } else {
      const p = i.getBoundingClientRect().bottom;
      for (const y of [...u].reverse())
        if (y.getBoundingClientRect().bottom <= p) {
          y.focus();
          break;
        }
    }
  } };
}
const zr = q({ chips: Boolean, closableChips: Boolean, closeText: { type: String, default: "$vuetify.close" }, openText: { type: String, default: "$vuetify.open" }, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, menu: Boolean, menuIcon: { type: ue, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, itemColor: String, ...$a({ itemChildren: !1 }) }, "Select"), Dr = q({ ...zr(), ...it(ja({ modelValue: null, role: "button" }), ["validationValue", "dirty", "appendInnerIcon"]), ...ct({ transition: { component: Zo } }) }, "VSelect"), Lr = Z()({ name: "VSelect", props: Dr(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:menu": (e) => !0 }, setup(e, l) {
  let { slots: n } = l;
  const { t } = Al(), a = j(), i = j(), u = j(), o = me(e, "menu"), r = v({ get: () => o.value, set: (k) => {
    var P;
    o.value && !k && ((P = i.value) != null && P.ΨopenChildren) || (o.value = k);
  } }), { items: p, transformIn: y, transformOut: c } = function(k) {
    const P = v(() => Ea(k, k.items)), L = v(() => P.value.some((D) => D.value === null));
    return { items: P, transformIn: function(D) {
      return L.value || (D = D.filter((T) => T !== null)), D.map((T) => k.returnObject && typeof T == "string" ? pl(k, T) : P.value.find((R) => k.valueComparator(T, R.value)) || pl(k, T));
    }, transformOut: function(D) {
      return k.returnObject ? D.map((T) => {
        let { raw: R } = T;
        return R;
      }) : D.map((T) => {
        let { value: R } = T;
        return R;
      });
    } };
  }(e), f = me(e, "modelValue", [], (k) => y(k === null ? [null] : tn(k)), (k) => {
    const P = c(k);
    return e.multiple ? P : P[0] ?? null;
  }), m = ka(), b = v(() => f.value.map((k) => k.value)), h = se(!1), g = v(() => r.value ? e.closeText : e.openText);
  let S, V = "";
  const w = v(() => e.hideSelected ? p.value.filter((k) => !f.value.some((P) => P === k)) : p.value), N = v(() => e.hideNoData && !p.value.length || e.readonly || (m == null ? void 0 : m.isReadonly.value)), O = j(), { onListScroll: z, onListKeydown: F } = Tr(O, a);
  function x(k) {
    e.openOnClear && (r.value = !0);
  }
  function C() {
    N.value || (r.value = !r.value);
  }
  function $(k) {
    var D, T;
    if (!k.key || e.readonly || m != null && m.isReadonly.value || (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(k.key) && k.preventDefault(), ["Enter", "ArrowDown", " "].includes(k.key) && (r.value = !0), ["Escape", "Tab"].includes(k.key) && (r.value = !1), k.key === "Home" ? (D = O.value) == null || D.focus("first") : k.key === "End" && ((T = O.value) == null || T.focus("last")), e.multiple || !function(R) {
      const I = R.key.length === 1, A = !R.ctrlKey && !R.metaKey && !R.altKey;
      return I && A;
    }(k)))
      return;
    const P = performance.now();
    P - S > 1e3 && (V = ""), V += k.key.toLowerCase(), S = P;
    const L = p.value.find((R) => R.title.toLowerCase().startsWith(V));
    L !== void 0 && (f.value = [L]);
  }
  function B(k) {
    if (e.multiple) {
      const P = f.value.findIndex((L) => e.valueComparator(L.value, k.value));
      if (P === -1)
        f.value = [...f.value, k];
      else {
        const L = [...f.value];
        L.splice(P, 1), f.value = L;
      }
    } else
      f.value = [k], r.value = !1;
  }
  function E(k) {
    var P;
    (P = O.value) != null && P.$el.contains(k.relatedTarget) || (r.value = !1);
  }
  function _() {
    var k;
    h.value && ((k = a.value) == null || k.focus());
  }
  function W(k) {
    h.value = !0;
  }
  function H(k) {
    if (k == null)
      f.value = [];
    else if (Vt(a.value, ":autofill") || Vt(a.value, ":-webkit-autofill")) {
      const P = p.value.find((L) => L.title === k);
      P && B(P);
    } else
      a.value && (a.value.value = "");
  }
  return Y(r, () => {
    if (!e.hideSelected && r.value && f.value.length) {
      const k = w.value.findIndex((P) => f.value.some((L) => e.valueComparator(L.value, P.value)));
      Ee && window.requestAnimationFrame(() => {
        var P;
        k >= 0 && ((P = u.value) == null || P.scrollToIndex(k));
      });
    }
  }), te(() => {
    const k = !(!e.chips && !n.chip), P = !!(!e.hideNoData || w.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), L = f.value.length > 0, [D] = ml.filterProps(e), T = L || !h.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
    return d(ml, X({ ref: a }, D, { modelValue: f.value.map((R) => R.props.value).join(", "), "onUpdate:modelValue": H, focused: h.value, "onUpdate:focused": (R) => h.value = R, validationValue: f.externalValue, counterValue: f.value.length, dirty: L, class: ["v-select", { "v-select--active-menu": r.value, "v-select--chips": !!e.chips, ["v-select--" + (e.multiple ? "multiple" : "single")]: !0, "v-select--selected": f.value.length, "v-select--selection-slot": !!n.selection }, e.class], style: e.style, inputmode: "none", placeholder: T, "onClick:clear": x, "onMousedown:control": C, onBlur: E, onKeydown: $, "aria-label": t(g.value), title: t(g.value) }), { ...n, default: () => d(fe, null, [d(Br, X({ ref: i, modelValue: r.value, "onUpdate:modelValue": (R) => r.value = R, activator: "parent", contentClass: "v-select__content", disabled: N.value, eager: e.eager, maxHeight: 310, openOnClick: !1, closeOnContentClick: !1, transition: e.transition, onAfterLeave: _ }, e.menuProps), { default: () => [P && d(pr, { ref: O, selected: b.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (R) => R.preventDefault(), onKeydown: F, onFocusin: W, onScrollPassive: z, tabindex: "-1", color: e.itemColor ?? e.color }, { default: () => {
      var R, I, A;
      return [(R = n["prepend-item"]) == null ? void 0 : R.call(n), !w.value.length && !e.hideNoData && (((I = n["no-data"]) == null ? void 0 : I.call(n)) ?? d(Tt, { title: t(e.noDataText) }, null)), d(Er, { ref: u, renderless: !0, items: w.value }, { default: (M) => {
        var de;
        let { item: G, index: K, itemRef: ae } = M;
        const ne = X(G.props, { ref: ae, key: K, onClick: () => B(G) });
        return ((de = n.item) == null ? void 0 : de.call(n, { item: G, index: K, props: ne })) ?? d(Tt, ne, { prepend: (Ae) => {
          let { isSelected: Gn } = Ae;
          return d(fe, null, [e.multiple && !e.hideSelected ? d(ul, { key: G.value, modelValue: Gn, ripple: !1, tabindex: "-1" }, null) : void 0, G.props.prependIcon && d(ce, { icon: G.props.prependIcon }, null)]);
        } });
      } }), (A = n["append-item"]) == null ? void 0 : A.call(n)];
    } })] }), f.value.map((R, I) => {
      var M;
      const A = { "onClick:close": function(G) {
        G.stopPropagation(), G.preventDefault(), B(R);
      }, onMousedown(G) {
        G.preventDefault(), G.stopPropagation();
      }, modelValue: !0, "onUpdate:modelValue": void 0 };
      return d("div", { key: R.value, class: "v-select__selection" }, [k ? n.chip ? d(Se, { key: "chip-defaults", defaults: { VChip: { closable: e.closableChips, size: "small", text: R.title } } }, { default: () => {
        var G;
        return [(G = n.chip) == null ? void 0 : G.call(n, { item: R, index: I, props: A })];
      } }) : d(Xi, X({ key: "chip", closable: e.closableChips, size: "small", text: R.title, disabled: R.props.disabled }, A), null) : ((M = n.selection) == null ? void 0 : M.call(n, { item: R, index: I })) ?? d("span", { class: "v-select__selection-text" }, [R.title, e.multiple && I < f.value.length - 1 && d("span", { class: "v-select__selection-comma" }, [zo(",")])])]);
    })]), "append-inner": function() {
      var M;
      for (var R = arguments.length, I = new Array(R), A = 0; A < R; A++)
        I[A] = arguments[A];
      return d(fe, null, [(M = n["append-inner"]) == null ? void 0 : M.call(n, ...I), e.menuIcon ? d(ce, { class: "v-select__menu-icon", icon: e.menuIcon }, null) : void 0]);
    } });
  }), Ht({ isFocused: h, menu: r, select: B }, a);
} }), Wr = Z()({ name: "VCardActions", props: ie(), setup(e, l) {
  let { slots: n } = l;
  return Wn({ VBtn: { variant: "text" } }), te(() => {
    var t;
    return d("div", { class: ["v-card-actions", e.class], style: e.style }, [(t = n.default) == null ? void 0 : t.call(n)]);
  }), {};
} }), Mr = st("v-card-subtitle"), Rr = st("v-card-title"), Nr = q({ appendAvatar: String, appendIcon: ue, prependAvatar: String, prependIcon: ue, subtitle: String, title: String, ...ie(), ...je() }, "VCardItem"), jr = Z()({ name: "VCardItem", props: Nr(), setup(e, l) {
  let { slots: n } = l;
  return te(() => {
    var p;
    const t = !(!e.prependAvatar && !e.prependIcon), a = !(!t && !n.prepend), i = !(!e.appendAvatar && !e.appendIcon), u = !(!i && !n.append), o = !(!e.title && !n.title), r = !(!e.subtitle && !n.subtitle);
    return d("div", { class: ["v-card-item", e.class], style: e.style }, [a && d("div", { key: "prepend", class: "v-card-item__prepend" }, [n.prepend ? d(Se, { key: "prepend-defaults", disabled: !t, defaults: { VAvatar: { density: e.density, icon: e.prependIcon, image: e.prependAvatar } } }, n.prepend) : t && d(zn, { key: "prepend-avatar", density: e.density, icon: e.prependIcon, image: e.prependAvatar }, null)]), d("div", { class: "v-card-item__content" }, [o && d(Rr, { key: "title" }, { default: () => {
      var y;
      return [((y = n.title) == null ? void 0 : y.call(n)) ?? e.title];
    } }), r && d(Mr, { key: "subtitle" }, { default: () => {
      var y;
      return [((y = n.subtitle) == null ? void 0 : y.call(n)) ?? e.subtitle];
    } }), (p = n.default) == null ? void 0 : p.call(n)]), u && d("div", { key: "append", class: "v-card-item__append" }, [n.append ? d(Se, { key: "append-defaults", disabled: !i, defaults: { VAvatar: { density: e.density, icon: e.appendIcon, image: e.appendAvatar } } }, n.append) : i && d(zn, { key: "append-avatar", density: e.density, icon: e.appendIcon, image: e.appendAvatar }, null)])]);
  }), {};
} }), vn = st("v-card-text"), Gr = q({ appendAvatar: String, appendIcon: ue, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: ue, ripple: { type: [Boolean, Object], default: !0 }, subtitle: String, text: String, title: String, ...Mn(), ...ie(), ...je(), ...gn(), ...Nn(), ...El(), ...Pl(), ...ca(), ...Ze(), ...qt(), ...$e(), ...Ce(), ...an({ variant: "elevated" }) }, "VCard"), Fn = Z()({ name: "VCard", directives: { Ripple: yt }, props: Gr(), setup(e, l) {
  let { attrs: n, slots: t } = l;
  const { themeClasses: a } = Ve(e), { borderClasses: i } = Rn(e), { colorClasses: u, colorStyles: o, variantClasses: r } = pt(e), { densityClasses: p } = Qe(e), { dimensionStyles: y } = hn(e), { elevationClasses: c } = jn(e), { loaderClasses: f } = jt(e), { locationStyles: m } = $l(e), { positionClasses: b } = da(e), { roundedClasses: h } = Je(e), g = Gt(e, n), S = v(() => e.link !== !1 && g.isLink.value), V = v(() => !e.disabled && e.link !== !1 && (e.link || g.isClickable.value));
  return te(() => {
    const w = S.value ? "a" : e.tag, N = !(!t.title && !e.title), O = !(!t.subtitle && !e.subtitle), z = N || O, F = !!(t.append || e.appendAvatar || e.appendIcon), x = !!(t.prepend || e.prependAvatar || e.prependIcon), C = !(!t.image && !e.image), $ = z || x || F, B = !(!t.text && !e.text);
    return Be(d(w, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": V.value }, a.value, i.value, u.value, p.value, c.value, f.value, b.value, h.value, r.value, e.class], style: [o.value, y.value, m.value, e.style], href: g.href.value, onClick: V.value && g.navigate, tabindex: e.disabled ? -1 : void 0 }, { default: () => {
      var E;
      return [C && d("div", { key: "image", class: "v-card__image" }, [t.image ? d(Se, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: !0, src: e.image } } }, t.image) : d(na, { key: "image-img", cover: !0, src: e.image }, null)]), d(Tl, { name: "v-card", active: !!e.loading, color: typeof e.loading == "boolean" ? void 0 : e.loading }, { default: t.loader }), $ && d(jr, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: t.item, prepend: t.prepend, title: t.title, subtitle: t.subtitle, append: t.append }), B && d(vn, { key: "text" }, { default: () => {
        var _;
        return [((_ = t.text) == null ? void 0 : _.call(t)) ?? e.text];
      } }), (E = t.default) == null ? void 0 : E.call(t), t.actions && d(Wr, null, { default: t.actions }), dt(V.value, "v-card")];
    } }), [[Xe("ripple"), V.value && e.ripple]]);
  }), {};
} }), qr = q({ indeterminate: Boolean, inset: Boolean, flat: Boolean, loading: { type: [Boolean, String], default: !1 }, ...gt(), ...zl() }, "VSwitch"), Hr = Z()({ name: "VSwitch", inheritAttrs: !1, props: qr(), emits: { "update:focused": (e) => !0, "update:modelValue": () => !0, "update:indeterminate": (e) => !0 }, setup(e, l) {
  let { attrs: n, slots: t } = l;
  const a = me(e, "indeterminate"), i = me(e, "modelValue"), { loaderClasses: u } = jt(e), { isFocused: o, focus: r, blur: p } = mt(e), y = j(), c = v(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), f = Le(), m = v(() => e.id || `switch-${f}`);
  function b() {
    a.value && (a.value = !1);
  }
  function h(g) {
    var S, V;
    g.stopPropagation(), g.preventDefault(), (V = (S = y.value) == null ? void 0 : S.input) == null || V.click();
  }
  return te(() => {
    const [g, S] = rt(n), [V, w] = ln.filterProps(e), [N, O] = Et.filterProps(e);
    return d(ln, X({ class: ["v-switch", { "v-switch--inset": e.inset }, { "v-switch--indeterminate": a.value }, u.value, e.class], style: e.style }, g, V, { id: m.value, focused: o.value }), { ...t, default: (z) => {
      let { id: F, messagesId: x, isDisabled: C, isReadonly: $, isValid: B } = z;
      return d(Et, X({ ref: y }, N, { modelValue: i.value, "onUpdate:modelValue": [(E) => i.value = E, b], id: F.value, "aria-describedby": x.value, type: "checkbox", "aria-checked": a.value ? "mixed" : void 0, disabled: C.value, readonly: $.value, onFocus: r, onBlur: p }, S), { ...t, default: (E) => {
        let { backgroundColorClasses: _, backgroundColorStyles: W } = E;
        return d("div", { class: ["v-switch__track", ..._.value], style: W.value, onClick: h }, null);
      }, input: (E) => {
        let { inputNode: _, icon: W, backgroundColorClasses: H, backgroundColorStyles: k } = E;
        return d(fe, null, [_, d("div", { class: ["v-switch__thumb", { "v-switch__thumb--filled": W || e.loading }, e.inset ? void 0 : H.value], style: e.inset ? void 0 : k.value }, [d(Ii, null, { default: () => [e.loading ? d(Tl, { name: "v-switch", active: !0, color: B.value === !1 ? void 0 : c.value }, { default: (P) => t.loader ? t.loader(P) : d(ua, { active: P.isActive, color: P.color, indeterminate: !0, size: "16", width: "2" }, null) }) : W && d(ce, { key: W, icon: W, size: "x-small" }, null)] })])]);
      } });
    } });
  }), {};
} }), Ur = q({ autoGrow: Boolean, autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, noResize: Boolean, rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) }, maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, suffix: String, modelModifiers: Object, ...gt(), ...Dl() }, "VTextarea"), Yr = Z()({ name: "VTextarea", directives: { Intersect: _l }, inheritAttrs: !1, props: Ur(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: n, emit: t, slots: a } = l;
  const i = me(e, "modelValue"), { isFocused: u, focus: o, blur: r } = mt(e), p = v(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : (i.value || "").toString().length), y = v(() => n.maxlength ? n.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter);
  function c(B, E) {
    var _, W;
    e.autofocus && B && ((W = (_ = E[0].target) == null ? void 0 : _.focus) == null || W.call(_));
  }
  const f = j(), m = j(), b = se(""), h = j(), g = v(() => e.persistentPlaceholder || u.value || e.active);
  function S() {
    var B;
    h.value !== document.activeElement && ((B = h.value) == null || B.focus()), u.value || o();
  }
  function V(B) {
    S(), t("click:control", B);
  }
  function w(B) {
    t("mousedown:control", B);
  }
  function N(B) {
    B.stopPropagation(), S(), xe(() => {
      i.value = "", Ro(e["onClick:clear"], B);
    });
  }
  function O(B) {
    var _;
    const E = B.target;
    if (i.value = E.value, (_ = e.modelModifiers) == null ? void 0 : _.trim) {
      const W = [E.selectionStart, E.selectionEnd];
      xe(() => {
        E.selectionStart = W[0], E.selectionEnd = W[1];
      });
    }
  }
  const z = j(), F = j(+e.rows), x = v(() => ["plain", "underlined"].includes(e.variant));
  function C() {
    e.autoGrow && xe(() => {
      if (!z.value || !m.value)
        return;
      const B = getComputedStyle(z.value), E = getComputedStyle(m.value.$el), _ = parseFloat(B.getPropertyValue("--v-field-padding-top")) + parseFloat(B.getPropertyValue("--v-input-padding-top")) + parseFloat(B.getPropertyValue("--v-field-padding-bottom")), W = z.value.scrollHeight, H = parseFloat(B.lineHeight), k = Zn(W ?? 0, Math.max(parseFloat(e.rows) * H + _, parseFloat(E.getPropertyValue("--v-input-control-height"))), parseFloat(e.maxRows) * H + _ || 1 / 0);
      F.value = Math.floor((k - _) / H), b.value = ee(k);
    });
  }
  let $;
  return Ue(() => {
    e.autoGrow || (F.value = +e.rows);
  }), Ln(C), Y(i, C), Y(() => e.rows, C), Y(() => e.maxRows, C), Y(() => e.density, C), Y(z, (B) => {
    B ? ($ = new ResizeObserver(C), $.observe(z.value)) : $ == null || $.disconnect();
  }), on(() => {
    $ == null || $.disconnect();
  }), te(() => {
    const B = !!(a.counter || e.counter || e.counterValue), E = !(!B && !a.details), [_, W] = rt(n), [{ modelValue: H, ...k }] = ln.filterProps(e), [P] = Na(e);
    return d(ln, X({ ref: f, modelValue: i.value, "onUpdate:modelValue": (L) => i.value = L, class: ["v-textarea v-text-field", { "v-textarea--prefixed": e.prefix, "v-textarea--suffixed": e.suffix, "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-textarea--auto-grow": e.autoGrow, "v-textarea--no-resize": e.noResize || e.autoGrow, "v-text-field--plain-underlined": x.value }, e.class], style: e.style }, _, k, { centerAffix: F.value === 1 && !x.value, focused: u.value }), { ...a, default: (L) => {
      let { isDisabled: D, isDirty: T, isReadonly: R, isValid: I } = L;
      return d(Ll, X({ ref: m, style: { "--v-textarea-control-height": b.value }, onClick: V, onMousedown: w, "onClick:clear": N, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, P, { active: g.value || T.value, centerAffix: F.value === 1 && !x.value, dirty: T.value || e.dirty, disabled: D.value, focused: u.value, error: I.value === !1 }), { ...a, default: (A) => {
        let { props: { class: M, ...G } } = A;
        return d(fe, null, [e.prefix && d("span", { class: "v-text-field__prefix" }, [e.prefix]), Be(d("textarea", X({ ref: h, class: M, value: i.value, onInput: O, autofocus: e.autofocus, readonly: R.value, disabled: D.value, placeholder: e.placeholder, rows: e.rows, name: e.name, onFocus: S, onBlur: r }, G, W), null), [[Xe("intersect"), { handler: c }, null, { once: !0 }]]), e.autoGrow && Be(d("textarea", { class: [M, "v-textarea__sizer"], id: `${G.id}-sizer`, "onUpdate:modelValue": (K) => i.value = K, ref: z, readonly: !0, "aria-hidden": "true" }, null), [[ei, i.value]]), e.suffix && d("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: E ? (L) => {
      var D;
      return d(fe, null, [(D = a.details) == null ? void 0 : D.call(a, L), B && d(fe, null, [d("span", null, null), d(Ra, { active: e.persistentCounter || u.value, value: p.value, max: y.value }, a.counter)])]);
    } : void 0 });
  }), Ht({}, f, m, h);
} }), Ga = Re({ __name: "BooleanIcons", props: _e({ iconFalseColor: {}, iconFalseTitle: {}, iconTrueColor: {}, iconTrueTitle: {}, iconFalse: {}, iconTrue: {} }, { modelValue: {} }), emits: ["update:modelValue"], setup(e) {
  const l = e, n = ve(Symbol.for("vuetify:icons")), t = sn(e, "modelValue"), a = v(() => De({ icon: l.iconFalse, iconOptions: n, name: "false" })), i = v(() => De({ icon: l.iconTrue, iconOptions: n, name: "true" }));
  return (u, o) => t.value ? (U(), he(s(ce), { key: 0, class: "v-inline-fields--boolean-icons fa-fw", color: u.iconTrueColor, icon: s(i), size: "x-small", title: u.iconTrueTitle }, null, 8, ["color", "icon", "title"])) : (U(), he(s(ce), { key: 1, class: "v-inline-fields--boolean-icons fa-fw", color: u.iconFalseColor, icon: s(a), size: "x-small", title: u.iconFalseTitle }, null, 8, ["color", "icon", "title"]));
} }), oe = "v-inline-fields", Vn = (e) => {
  const { field: l = "", density: n = "", disabled: t = !1, iconSet: a = "mdi", loading: i = !1, loadingWait: u, tableField: o = !1, variant: r } = e, p = n && r;
  return { [`${oe}`]: !0, [`${oe}--container`]: !0, [`${oe}--container-disabled`]: s(t), [`${oe}--container-table`]: o, [`${oe}--container-icon-set-${a}`]: !0, [`${oe}--container-loading`]: i && u, [`${oe}--container-${l}`]: !0, [`${oe}--container-${l}-${n}`]: !0, [`${oe}--container-${l}-${n}-${r}`]: p, [`${oe}--container-${l}-${r}`]: r, [`${oe}--container-${l}-${r}-${n}`]: p, [`${oe}--container-${n}`]: n, [`${oe}--container-${n}-${l}`]: n, [`${oe}--container-${n}-${r}`]: p, [`${oe}--container-${r}`]: r, [`${oe}--container-${r}-${n}`]: p, [`${oe}--container-${r}-${l}`]: r };
}, An = (e) => {
  const { field: l = "", density: n = "" } = e;
  return { [`${oe}--display-container`]: !0, [`${oe}--display-wrapper-value`]: !0, [`${l}`]: !0, "v-input": !0, [`v-input--density-${n}`]: !0, "v-input--horizontal": !0 };
}, Dt = (e) => {
  const { density: l = "", variant: n = "" } = e;
  return { "v-input": !0, "v-input--dirty": !0, "v-input--horizontal": !0, "v-text-field": !0, [`v-input--density-${l}`]: !0, [`v-text-field--plain-${n}`]: !0 };
}, qa = (e) => {
  const { density: l = "" } = e;
  return { [`v-selection-control--density-${l}`]: !0 };
}, Wl = (e, l, n) => {
  const { error: t = !1, empty: a = !1 } = n;
  return { [`${oe}`]: !0, [`${oe}--display-value-${e}`]: !0, [`${oe}--display-value`]: !0, [`${oe}--display-value-empty`]: s(a), [`text-${l}`]: !s(t), "text-danger": s(t) };
}, _n = (e) => {
  const { name: l, active: n = !1 } = e;
  return { [`${oe}`]: !0, [`${oe}--field`]: !0, [`${oe}--field-${l}`]: !0, [`${oe}--field-active`]: n };
}, On = (e) => {
  const { name: l, showField: n } = e;
  return { [`${oe}--card-container`]: !0, [`${oe}--card-container-${l}`]: !0, "d-none": !n };
};
function _o(e) {
  if (!e)
    return 100;
  if (e.toString().includes(".")) {
    const l = 100 * Number(e);
    return l >= 100 ? 100 : l;
  }
  return Number(e) >= 100 ? 100 : Number(e);
}
function Oo(e) {
  let l = function(c) {
    const f = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let m = c;
    return Object.entries(f).forEach(([b, h]) => {
      c.toLowerCase() != b.toLowerCase() || (m = h);
    }), m;
  }(e), n = 0, t = 0, a = 0, i = 100, u = 0, o = 0, r = 0;
  if (l.substring(0, 1) === "#")
    l = function(c) {
      let f = c.replace("#", "");
      f.length === 3 && (f = f.split("").map((S) => S + S).join(""));
      const m = parseInt(f.substring(0, 2), 16), b = parseInt(f.substring(2, 4), 16), h = parseInt(f.substring(4, 6), 16);
      return [m, b, h, 100];
    }(l);
  else if (l.includes("rgb"))
    l = [...l.matchAll(/[\d+.\d+]+/g)].map(Number);
  else if (l.includes("hsl"))
    return l = [...l.matchAll(/[\d+.\d+]+/g)].map(String), n = l[0], t = l[1], a = l[2], i = _o(l[3]), `${n} ${t}% ${a}% / ${i}%`;
  [u, o, r, i] = l, u /= 255, o /= 255, r /= 255, i = _o(i);
  const p = Math.max(u, o, r), y = Math.min(u, o, r);
  if (p === null || !y === null || isNaN(p) || isNaN(y)) {
    const c = "0 0% 100% / 12%";
    return console.warn(`[VuetifyInlineFields: The "color" prop value using "${l}" doesn't exist. Using the value "hsl(${c})" in it's place.`), c;
  }
  if (n = (p + y) / 2, t = (p + y) / 2, a = (p + y) / 2, p == y)
    n = t = 0;
  else {
    const c = p - y;
    switch (t = a > 0.5 ? c / (2 - p - y) : c / (p + y), p) {
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
const Xr = (e, l) => {
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
  return n ? `hsl(${Oo(n[1])})` : `hsl(${Oo(e)})`;
}, Yn = (e) => {
  const { str: l, unit: n = "px" } = e;
  if (l != null && l !== "")
    return +l ? `${Number(l)}${n}` : String(l);
}, Ha = (e) => {
  var a;
  const { modelValue: l, trueValue: n } = e, t = s(l);
  return ((a = t == null ? void 0 : t.toLowerCase) == null ? void 0 : a.call(t)) === "true" || t === "1" || t == "1" || t === !0 || t == n || t === n;
}, Ml = (e) => {
  const { underlineStyle: l, underlineWidth: n, color: t, error: a, theme: i, underlined: u } = e;
  let { underlineColor: o } = e;
  o = o || t;
  const r = { "border-bottom-color": Xr(o, i), "border-bottom-style": l, "border-bottom-width": n };
  return s(a) && (r["border-bottom-color"] = "rgb(var(--v-theme-danger))"), u || (r["border-bottom"] = "none"), r;
}, fn = (e) => {
  const { cardMinWidth: l, cardOffsetX: n, cardOffsetY: t, cardWidth: a, field: i, name: u = "" } = e, o = ((y) => {
    const { cardOffsetX: c, cardOffsetY: f, field: m } = y;
    if (!m)
      return { bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0, x: 0, y: 0 };
    const { x: b, y: h } = m.getBoundingClientRect(), { width: g, height: S } = m.getBoundingClientRect(), { right: V, bottom: w } = m.getBoundingClientRect();
    return { bottom: Yn({ str: w + Number(f) }), height: S, left: Yn({ str: 0 + Number(c) }), right: Yn({ str: V + Number(c) }), top: Yn({ str: 2 + Number(f) }), width: Yn({ str: g }), x: b, y: h };
  })({ cardOffsetX: n, cardOffsetY: t, field: i });
  let r = l, p = a;
  return p || (p = u === "checkbox" ? "fit-content" : o.width), r || (r = u === "checkbox" ? "fit-content" : o.width), { left: o.left, top: o.top, width: p, zIndex: 10 };
}, Kr = { class: "v-inline-fields--display-wrapper" }, Lt = Re({ __name: "DisplayedValue", props: { color: {}, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayValue: {}, empty: { type: Boolean }, error: { type: Boolean }, field: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean } }, emits: ["toggleField"], setup(e, { emit: l }) {
  const n = e, t = un(), a = Il(), i = { displayValue: n.displayValue, empty: n.empty, error: n.error }, u = v(() => Wl(n.field, n.valueColor, { empty: n.empty, error: n.error })), o = v(() => Ml({ color: n.color, error: n.error, theme: a, underlineColor: n.underlineColor, underlineStyle: n.underlineStyle, underlineWidth: n.underlineWidth, underlined: n.underlined })), r = v(() => ((c) => {
    const { underlineWidth: f } = c;
    return { borderBottom: `${f || "0px"} solid transparent` };
  })({ underlineWidth: n.underlineWidth })), p = (c, f = !1) => ((m) => {
    const { inner: b = !1, position: h } = m;
    return { [`${oe}--display-icon`]: !b, [`${oe}--display-${h}-icon`]: !b, [`${oe}--display-${h}-inner-icon`]: b, "me-1": h === "prepend", "ms-1": h === "append" };
  })({ inner: f, position: c });
  function y() {
    l("toggleField");
  }
  return (c, f) => (U(), le("div", Kr, [c.displayPrependIcon || s(t)["display.prepend"] ? (U(), le("div", { key: 0, class: J(p("prepend")), style: ge(s(r)) }, [s(t)["display.prepend"] ? Fe(c.$slots, "display.prepend", ye(X({ key: 0 }, i))) : (U(), he(ce, { key: 1, color: c.displayPrependIconColor, icon: c.displayPrependIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 6)) : pe("", !0), Ie("div", { class: J(["d-inline-flex", s(u)]), style: ge(s(o)), onClick: y }, [c.displayPrependInnerIcon || s(t)["display.prependInner"] ? (U(), le("div", { key: 0, class: J(p("prepend", !0)) }, [s(t)["display.prependInner"] ? Fe(c.$slots, "display.prependInner", ye(X({ key: 0 }, i))) : (U(), he(ce, { key: 1, color: c.displayPrependInnerIconColor, icon: c.displayPrependInnerIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 2)) : pe("", !0), zo(" " + Cl(c.displayValue) + " ", 1), c.displayAppendInnerIcon || s(t)["display.appendInner"] ? (U(), le("div", { key: 1, class: J(p("append", !0)) }, [s(t)["display.appendInner"] ? Fe(c.$slots, "display.appendInner", ye(X({ key: 0 }, i))) : (U(), he(ce, { key: 1, color: c.displayAppendInnerIconColor, icon: c.displayAppendInnerIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 2)) : pe("", !0)], 6), c.displayAppendIcon || s(t)["display.append"] ? (U(), le("div", { key: 1, class: J(p("append")), style: ge(s(r)) }, [s(t)["display.append"] ? Fe(c.$slots, "display.append", ye(X({ key: 0 }, i))) : (U(), he(ce, { key: 1, color: c.displayAppendIconColor, icon: c.displayAppendIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 6)) : pe("", !0)]));
} }), lt = Re({ __name: "SaveFieldButtons", props: { loading: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonVariant: {}, cancelButtonTitle: {}, cancelIconColor: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideSaveIcon: { type: Boolean }, loadingIconColor: {}, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIconColor: {}, cancelIcon: {}, loadingIcon: {}, saveIcon: {} }, emits: ["close", "save"], setup(e, { emit: l }) {
  const n = e, t = cn(), a = ve(Symbol.for("vuetify:icons")), i = v(() => n.error), u = v(() => ({ [`${oe}--save-fields-container`]: !0 })), o = v(() => n.loading), r = ze({ ...t, ...n }), p = v(() => (a == null ? void 0 : a.defaultSet) === "fa" ? "fa-spin" : (a == null ? void 0 : a.defaultSet) === "mdi" ? "mdi-spin" : ""), y = v(() => ((g) => {
    const { cancelButtonVariant: S } = g;
    return { "me-1": S === "elevated", "ms-1": !0 };
  })({ cancelButtonVariant: r.cancelButtonVariant })), c = v(() => De({ icon: n.cancelIcon, iconOptions: a, name: "false" })), f = v(() => De({ icon: n.loadingIcon, iconOptions: a, name: "loading" })), m = v(() => De({ icon: n.saveIcon, iconOptions: a, name: "save" }));
  function b() {
    l("close");
  }
  function h() {
    l("save");
  }
  return (g, S) => (U(), le("div", X({ class: s(u) }, g.$attrs), [s(r).hideSaveIcon ? pe("", !0) : (U(), he(sl, { key: 0, class: "ms-1", color: s(r).saveButtonColor, disabled: s(i), icon: "", size: s(r).saveButtonSize, title: s(o) ? "Loading" : s(r).saveButtonTitle, variant: s(r).saveButtonVariant, onClick: h }, { default: re(() => [s(o) ? (U(), he(ce, { key: 1, class: J(s(p)), color: s(r).loadingIconColor, icon: s(f) }, null, 8, ["class", "color", "icon"])) : (U(), he(ce, { key: 0, color: s(i) ? "error" : s(r).saveIconColor, icon: s(m) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["color", "disabled", "size", "title", "variant"])), d(sl, { class: J(s(y)), color: s(r).cancelButtonColor, icon: "", size: s(r).cancelButtonSize, title: s(r).cancelButtonTitle, variant: s(r).cancelButtonVariant, onClick: b }, { default: re(() => [s(r).hideSaveIcon && s(o) ? (U(), he(ce, { key: 0, class: J(s(p)), color: s(r).loadingIconColor, icon: s(f) }, null, 8, ["class", "color", "icon"])) : (U(), he(ce, { key: 1, class: "text-default", color: s(r).cancelIconColor, icon: s(c) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["class", "color", "size", "title", "variant"])], 16));
} }), Wt = (e) => {
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
}, gl = (e) => {
  const { length: l = 0 } = e;
  let { suffix: n, text: t } = e;
  return t = t.toString(), n = n || "...", t.length > l ? `${t.substring(0, l)}${n}` : t;
}, $n = ["error", "update", "update:closeSiblingFields", "update:model-value"], Zr = ["cancelButtonColor", "cancelButtonSize", "cancelButtonTitle", "cancelButtonVariant", "cancelIcon", "cancelIconColor", "closeSiblings", "displayAppendIcon", "displayAppendIconColor", "displayAppendIconSize", "displayAppendInnerIcon", "displayAppendInnerIconColor", "displayAppendInnerIconSize", "displayPrependIcon", "displayPrependIconColor", "displayPrependIconSize", "displayPrependInnerIcon", "displayPrependInnerIconColor", "displayPrependInnerIconSize", "emptyText", "fieldOnly", "hideSaveIcon", "item", "loadingIcon", "loadingIconColor", "loadingWait", "saveButtonColor", "saveButtonSize", "saveButtonTitle", "saveButtonVariant", "saveIcon", "saveIconColor", "tableField", "truncateLength", "truncateSuffix", "underlineColor", "underlineStyle", "underlineWidth", "underlined", "valueColor"], Kn = (e) => {
  let l = e;
  return l = Object.entries(l).filter(([n]) => !Zr.includes(n)), Object.fromEntries(l);
}, Jr = { class: "v-selection-control__wrapper" }, Qr = Re({ __name: "VInlineCheckbox", props: _e(Sn({ density: {}, falseIcon: {}, trueIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...ti }), { modelValue: {} }), emits: _e([...$n], ["update:modelValue"]), setup(e, { emit: l }) {
  const n = e, t = sn(e, "modelValue"), a = cn(), i = un(), u = ve(Symbol.for("vuetify:icons")), o = Il();
  let r = ze({ ...a, ...n });
  const p = v(() => n.loading), y = j(!1), c = j(!1), f = j(null), m = v(() => Kn(r)), b = v(() => ({ ...kn, ...n.cardProps }));
  Y(() => p.value, (I, A) => {
    !I && A && c.value && P();
  });
  const h = v(() => De({ icon: n.trueIcon, iconOptions: u, name: "checkboxFalse" })), g = v(() => De({ icon: n.iconTrue, iconOptions: u, name: "checkboxTrue" })), S = v(() => t.value == r.trueValue), V = v(() => Ha({ modelValue: t, trueValue: r.trueValue })), w = v(() => Vn({ density: r.density, disabled: r.disabled, field: "v-checkbox", loading: p.value, loadingWait: r.loadingWait, tableField: r.tableField })), N = v(() => An({ density: r.density, field: "v-checkbox" })), O = qa({ density: r.density }), z = v(() => _n({ active: c.value, name: "checkbox" })), F = v(() => Wl("checkbox", r.valueColor, { error: y })), x = v(() => On({ name: "checkbox", showField: c.value })), C = v(() => ({})), $ = v(() => Ml({ color: r.color, error: y, theme: o, underlineColor: r.underlineColor, underlineStyle: r.underlineStyle, underlineWidth: r.underlineWidth, underlined: r.underlined })), B = v(() => _.value);
  function E() {
    y.value = !1, P();
  }
  const _ = j(), W = j(null), H = j("body"), k = ni();
  function P() {
    var A, M;
    if (r.disabled || r.loadingWait && p.value)
      return;
    _.value = fn({ cardMinWidth: (A = r.cardProps) == null ? void 0 : A.minWidth, cardOffsetX: r.cardOffsetX, cardOffsetY: r.cardOffsetY, cardWidth: (M = r.cardProps) == null ? void 0 : M.width, field: W.value, name: "checkbox" });
    const I = Pn({ attrs: a, closeSiblings: r.closeSiblings, fieldOnly: r.fieldOnly, props: n, showField: c, timeOpened: f.value });
    r = { ...r, ...I.settings }, c.value = I.showField, f.value = I.timeOpened, D !== null && r.closeSiblings && c.value && !r.fieldOnly && D.emit(I.timeOpened);
  }
  function L(I) {
    t.value = I, l("update", I), r.loadingWait || P();
  }
  let D, T;
  function R(I) {
    l("update:closeSiblingFields", f), c.value && f.value !== I && P();
  }
  return Y(() => k, () => {
    var I, A;
    _.value = fn({ cardMinWidth: (I = r.cardProps) == null ? void 0 : I.minWidth, cardOffsetX: r.cardOffsetX, cardOffsetY: r.cardOffsetY, cardWidth: (A = r.cardProps) == null ? void 0 : A.width, field: W.value, name: "checkbox" });
  }, { deep: !0 }), r.closeSiblings && import("@vueuse/core").then(({ useEventBus: I }) => {
    D = I(Bn), T = D.on(R);
  }), xn(() => {
    T !== void 0 && D.off(R);
  }), (I, A) => (U(), le("div", { ref_key: "inlineFieldsContainer", ref: W, class: J(s(w)), style: ge(s(C)) }, [!s(c) && !s(r).fieldOnly || s(r).cardField ? (U(), le("div", { key: 0, class: J(s(N)) }, [Ie("div", { class: J(s(O)) }, [Ie("div", Jr, [I.icons ? (U(), le("div", { key: 0, class: J(s(F)), style: ge(s($)), onClick: P }, [d(s(Ga), { modelValue: s(V), "onUpdate:modelValue": A[0] || (A[0] = (M) => mn(V) ? V.value = M : null), "icon-false": s(r).iconFalse, "icon-false-color": s(r).iconFalseColor, "icon-false-title": s(r).iconFalseTitle, "icon-true": s(r).iconTrue, "icon-true-color": s(r).iconTrueColor, "icon-true-title": s(r).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (U(), le("div", { key: 1, class: J(["d-inline-flex align-center justify-center", s(F)]), style: ge(s($)), onClick: P }, Cl(s(S)), 7))])], 2)], 2)) : pe("", !0), s(c) || s(r).fieldOnly || s(r).cardField ? (U(), le("div", { key: 1, class: J(s(z)) }, [(U(), he(rn, { disabled: !s(r).cardField, to: s(H) }, [d(qi, X(s(m), { color: s(r).color, density: s(r).density, disabled: s(p), error: s(y), "false-icon": s(h), "false-value": s(r).falseValue, "hide-details": s(r).hideDetails, label: s(r).label, "model-value": s(V), "true-icon": s(g), "true-value": s(r).trueValue, "onUpdate:modelValue": L }), Ge({ _: 2 }, [qe(s(i), (M, G) => ({ name: G, fn: re((K) => [Fe(I.$slots, G, ye(be({ ...K })))]) })), s(i).append ? void 0 : { name: "append", fn: re(() => [d(s(lt), { "cancel-button-color": s(r).cancelButtonColor, "cancel-button-size": s(r).cancelButtonSize, "cancel-button-title": s(r).cancelButtonTitle, "cancel-button-variant": s(r).cancelButtonVariant, "cancel-icon": s(r).cancelIcon, "cancel-icon-color": s(r).cancelIconColor, error: s(y), "field-only": s(r).fieldOnly, "hide-save-icon": !0, loading: s(p), "loading-icon": s(r).loadingIcon, "loading-icon-color": s(r).loadingIconColor, "save-button-color": s(r).saveButtonColor, "save-button-size": s(r).saveButtonSize, "save-button-title": s(r).saveButtonTitle, "save-button-variant": s(r).saveButtonVariant, "save-icon": s(r).saveIcon, "save-icon-color": s(r).saveIconColor, onClose: E, onSave: L }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "model-value", "true-icon", "true-value"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), s(r).cardField ? (U(), le("div", { key: 2, class: J(s(x)), style: ge(s(B)) }, [d(Fn, ye(be(s(b))), { default: re(() => [d(vn, null, { default: re(() => [Ie("div", { ref_key: "cardFieldRef", ref: H }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), es = Re({ __name: "VInlineCustomField", props: _e(Sn({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Lo }), { modelValue: {} }), emits: _e([...$n], ["update:modelValue"]), setup(e, { emit: l }) {
  const n = e, t = sn(e, "modelValue"), a = cn(), i = un(), u = ve(Symbol.for("vuetify:icons"));
  let o = ze({ ...a, ...n });
  const r = v(() => n.loading), p = j(!1), y = j(!1), c = j(!1), f = j(null);
  let m = t.value;
  Y(() => r.value, (T, R) => {
    !T && R && c.value && _();
  });
  const b = v(() => t.value ? (p.value = !1, o.truncateLength ? gl({ length: o.truncateLength, suffix: o.truncateSuffix, text: t.value }) : t.value) : (p.value = !0, o.emptyText)), h = v(() => ({ ...o, loading: r.value, modelValue: t.value, originalValue: m })), g = v(() => ({ color: o.color, displayAppendIcon: n.displayAppendIcon, displayAppendIconColor: n.displayAppendIconColor, displayAppendIconSize: n.displayAppendIconSize, displayAppendInnerIcon: n.displayAppendInnerIcon, displayAppendInnerIconColor: n.displayAppendInnerIconColor, displayAppendInnerIconSize: n.displayAppendInnerIconSize, displayPrependIcon: n.displayPrependIcon, displayPrependIconColor: n.displayPrependIconColor, displayPrependIconSize: n.displayPrependIconSize, displayPrependInnerIcon: n.displayPrependInnerIcon, displayPrependInnerIconColor: n.displayPrependInnerIconColor, displayPrependInnerIconSize: n.displayPrependInnerIconSize, displayValue: b.value, empty: p.value, error: y.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), S = v(() => ({ ...kn, ...n.cardProps })), V = v(() => Vn({ density: o.density, disabled: o.disabled, field: "v-text-field", iconSet: u == null ? void 0 : u.defaultSet, loading: r.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), w = v(() => An({ density: o.density, field: "v-text-field" })), N = Dt({ density: o.density, variant: o.variant }), O = v(() => _n({ active: c.value, name: "text-field" })), z = v(() => On({ name: "custom-field", showField: c.value })), F = v(() => ({})), x = v(() => $.value);
  function C() {
    y.value = !1, t.value = m, _();
  }
  const $ = j(), B = j(null), E = j("body");
  function _() {
    var R, I;
    if (o.disabled || o.loadingWait && r.value)
      return;
    $.value = fn({ cardMinWidth: (R = o.cardProps) == null ? void 0 : R.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (I = o.cardProps) == null ? void 0 : I.width, field: B.value });
    const T = Pn({ attrs: a, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: n, showField: c, timeOpened: f.value });
    o = { ...o, ...T.settings }, c.value = T.showField, f.value = T.timeOpened, P !== null && o.closeSiblings && c.value && !o.fieldOnly && P.emit(T.timeOpened);
  }
  const W = j();
  function H() {
    const T = Wt({ required: o.required, rules: o.rules, value: t });
    return y.value = T.errors, W.value = T.results, T.results;
  }
  function k() {
    y.value ? y.value = !0 : (m = t.value, l("update", t.value), o.loadingWait || _());
  }
  let P, L;
  function D(T) {
    l("update:closeSiblingFields", f), c.value && f.value !== T && C();
  }
  return Y(() => c.value, () => {
    c.value && H();
  }), Y(() => t.value, () => {
    c.value && H();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: T }) => {
    P = T(Bn), L = P.on(D);
  }), xn(() => {
    L !== void 0 && P.off(D);
  }), (T, R) => (U(), le("div", { ref_key: "inlineFieldsContainer", ref: B, class: J(s(V)), style: ge(s(F)) }, [!s(c) && !s(o).fieldOnly || s(o).cardField ? (U(), le("div", { key: 0, class: J(s(w)) }, [Ie("div", { class: J(s(N)) }, [d(s(Lt), X(s(g), { onToggleField: _ }), Ge({ _: 2 }, [qe(s(i), (I, A) => ({ name: A, fn: re((M) => [Fe(T.$slots, A, ye(be({ ...M })))]) }))]), 1040)], 2)], 2)) : pe("", !0), s(c) || s(o).fieldOnly || s(o).cardField ? (U(), le("div", { key: 1, class: J(["d-flex align-center py-2", s(O)]) }, [(U(), he(rn, { disabled: !s(o).cardField, to: s(E) }, [Fe(T.$slots, "default", ye(be(s(h)))), d(s(lt), { modelValue: t.value, "onUpdate:modelValue": R[0] || (R[0] = (I) => t.value = I), "cancel-button-color": s(o).cancelButtonColor, "cancel-button-size": s(o).cancelButtonSize, "cancel-button-title": s(o).cancelButtonTitle, "cancel-button-variant": s(o).cancelButtonVariant, "cancel-icon": s(o).cancelIcon, "cancel-icon-color": s(o).cancelIconColor, error: s(y), "field-only": s(o).fieldOnly, "hide-save-icon": s(o).hideSaveIcon, loading: s(r), "loading-icon": s(o).loadingIcon, "loading-icon-color": s(o).loadingIconColor, required: s(o).required, "save-button-color": s(o).saveButtonColor, "save-button-size": s(o).saveButtonSize, "save-button-title": s(o).saveButtonTitle, "save-button-variant": s(o).saveButtonVariant, "save-icon": s(o).saveIcon, "save-icon-color": s(o).saveIconColor, onClose: C, onSave: k }, null, 8, ["modelValue", "cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "required", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), s(o).cardField ? (U(), le("div", { key: 2, class: J(s(z)), style: ge(s(x)) }, [d(Fn, ye(be(s(S))), { default: re(() => [d(vn, null, { default: re(() => [Ie("div", { ref_key: "cardFieldRef", ref: E }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), ns = Re({ __name: "VInlineSelect", props: _e(Sn({ clearIcon: {}, clearable: {}, density: {}, hideSelected: {}, itemTitle: {}, itemValue: {}, items: {}, menu: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...li }), { modelValue: {} }), emits: _e([...$n], ["update:modelValue"]), setup(e, { emit: l }) {
  const n = e, t = sn(e, "modelValue"), a = cn(), i = un(), u = ve(Symbol.for("vuetify:icons"));
  let o = ze({ ...a, ...n });
  const r = v(() => n.loading), p = j(!1), y = j(!1), c = j(), f = j(!1), m = j(null);
  let b = t.value;
  Y(() => r.value, (A, M) => {
    !A && M && f.value && H();
  });
  const h = v(() => De({ icon: n.clearIcon, iconOptions: u, name: "clear" })), g = v(() => t.value && t.value[o.itemTitle] ? (p.value = !1, t.value[o.itemTitle]) : (t.value = "", p.value = !0, o.emptyText)), S = v(() => Kn(o)), V = v(() => ({ color: o.color, displayAppendIcon: n.displayAppendIcon, displayAppendIconColor: n.displayAppendIconColor, displayAppendIconSize: n.displayAppendIconSize, displayAppendInnerIcon: n.displayAppendInnerIcon, displayAppendInnerIconColor: n.displayAppendInnerIconColor, displayAppendInnerIconSize: n.displayAppendInnerIconSize, displayPrependIcon: n.displayPrependIcon, displayPrependIconColor: n.displayPrependIconColor, displayPrependIconSize: n.displayPrependIconSize, displayPrependInnerIcon: n.displayPrependInnerIcon, displayPrependInnerIconColor: n.displayPrependInnerIconColor, displayPrependInnerIconSize: n.displayPrependInnerIconSize, displayValue: g.value, empty: p.value, error: y.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), w = v(() => ({ ...kn, ...n.cardProps }));
  Ue(() => {
    c.value = o.items || [];
  });
  const N = v(() => Vn({ density: o.density, disabled: o.disabled, field: "v-select", iconSet: u == null ? void 0 : u.defaultSet, loading: r.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), O = v(() => An({ density: o.density, field: "v-select" })), z = Dt({ density: o.density, variant: o.variant }), F = v(() => _n({ active: f.value, name: "select" })), x = v(() => On({ name: "select", showField: f.value })), C = v(() => ({})), $ = v(() => E.value);
  function B() {
    y.value = !1, t.value = b, H();
  }
  const E = j(), _ = j(null), W = j("body");
  function H() {
    var M, G;
    if (o.disabled || o.loadingWait && r.value)
      return;
    E.value = fn({ cardMinWidth: (M = o.cardProps) == null ? void 0 : M.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (G = o.cardProps) == null ? void 0 : G.width, field: _.value });
    const A = Pn({ attrs: a, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: n, showField: f, timeOpened: m.value });
    o = { ...o, ...A.settings }, f.value = A.showField, m.value = A.timeOpened, T !== null && o.closeSiblings && f.value && !o.fieldOnly && T.emit(A.timeOpened);
  }
  const k = j(), P = v(() => k.value);
  function L() {
    const A = Wt({ required: o.required, rules: o.rules, value: t });
    return y.value = A.errors, k.value = A.results, A.results;
  }
  function D() {
    b = t.value, l("update", t.value), o.loadingWait || H();
  }
  let T, R;
  function I(A) {
    l("update:closeSiblingFields", m), f.value && m.value !== A && B();
  }
  return Y(() => f.value, () => {
    f.value && L();
  }), Y(() => t.value, () => {
    f.value && L();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: A }) => {
    T = A(Bn), R = T.on(I);
  }), xn(() => {
    R !== void 0 && T.off(I);
  }), (A, M) => (U(), le("div", { ref_key: "inlineFieldsContainer", ref: _, class: J(s(N)), style: ge(s(C)) }, [!s(f) && !s(o).fieldOnly || s(o).cardField ? (U(), le("div", { key: 0, class: J(s(O)) }, [Ie("div", { class: J(s(z)) }, [d(s(Lt), X(s(V), { onToggleField: H }), Ge({ _: 2 }, [qe(s(i), (G, K) => ({ name: K, fn: re((ae) => [Fe(A.$slots, K, ye(be({ ...ae })), void 0, !0)]) }))]), 1040)], 2)], 2)) : pe("", !0), s(f) || s(o).fieldOnly || s(o).cardField ? (U(), le("div", { key: 1, class: J(s(F)) }, [(U(), he(rn, { disabled: !s(o).cardField, to: s(W) }, [d(Lr, X(s(S), { modelValue: t.value, "onUpdate:modelValue": M[0] || (M[0] = (G) => t.value = G), autofocus: !s(o).fieldOnly || s(o).autofocus, "clear-icon": s(h), clearable: s(o).clearable, color: s(o).color, density: s(o).density, disabled: s(r), error: s(y), "error-messages": s(P), "hide-details": s(o).hideDetails, "hide-selected": s(o).hideSelected, "item-title": s(o).itemTitle, "item-value": s(o).itemValue, items: s(c), label: s(o).label, loading: s(r), menu: s(o).menu && !s(o).fieldOnly && s(f), variant: s(o).variant, width: "100%", onKeyup: St(B, ["esc"]) }), Ge({ _: 2 }, [qe(s(i), (G, K) => ({ name: K, fn: re((ae) => [Fe(A.$slots, K, ye(be({ ...ae })), void 0, !0)]) })), s(i).append ? void 0 : { name: "append", fn: re(() => [d(s(lt), { "cancel-button-color": s(o).cancelButtonColor, "cancel-button-size": s(o).cancelButtonSize, "cancel-button-title": s(o).cancelButtonTitle, "cancel-button-variant": s(o).cancelButtonVariant, "cancel-icon": s(o).cancelIcon, "cancel-icon-color": s(o).cancelIconColor, error: s(y), "field-only": s(o).fieldOnly, "hide-save-icon": s(o).hideSaveIcon, loading: s(r), "loading-icon": s(o).loadingIcon, "loading-icon-color": s(o).loadingIconColor, "save-button-color": s(o).saveButtonColor, "save-button-size": s(o).saveButtonSize, "save-button-title": s(o).saveButtonTitle, "save-button-variant": s(o).saveButtonVariant, "save-icon": s(o).saveIcon, "save-icon-color": s(o).saveIconColor, onClose: B, onSave: D }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "clearable", "color", "density", "disabled", "error", "error-messages", "hide-details", "hide-selected", "item-title", "item-value", "items", "label", "loading", "menu", "variant", "onKeyup"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), s(o).cardField ? (U(), le("div", { key: 2, class: J(s(x)), style: ge(s($)) }, [d(Fn, ye(be(s(w))), { default: re(() => [d(vn, null, { default: re(() => [Ie("div", { ref_key: "cardFieldRef", ref: W }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), ts = { class: "v-selection-control__wrapper" }, We = { VInlineCheckbox: Qr, VInlineCustomField: es, VInlineSelect: ((e, l) => {
  const n = e.__vccOpts || e;
  for (const [t, a] of l)
    n[t] = a;
  return n;
})(ns, [["__scopeId", "data-v-0d72d990"]]), VInlineSwitch: Re({ __name: "VInlineSwitch", props: _e(Sn({ density: {}, falseIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...oi }), { modelValue: {} }), emits: _e([...$n], ["update:modelValue"]), setup(e, { emit: l }) {
  const n = e, t = sn(e, "modelValue"), a = cn(), i = un(), u = ve(Symbol.for("vuetify:icons")), o = Il();
  let r = ze({ ...a, ...n });
  const p = v(() => n.loading), y = j(!1), c = j(!1), f = j(null), m = v(() => Kn(r)), b = v(() => ({ ...kn, ...n.cardProps }));
  Y(() => p.value, (D, T) => {
    !D && T && c.value && W();
  });
  const h = v(() => De({ icon: r.cancelIcon, iconOptions: u, name: "false" })), g = v(() => t.value == r.trueValue), S = v(() => Ha({ modelValue: t, trueValue: r.trueValue })), V = v(() => Vn({ density: r.density, disabled: r.disabled, field: "v-switch", loading: p.value, loadingWait: r.loadingWait, tableField: r.tableField })), w = v(() => An({ density: r.density, field: "v-switch" })), N = qa({ density: r.density }), O = v(() => _n({ active: c.value, name: "switch" })), z = v(() => Wl("switch", r.valueColor, { error: y })), F = v(() => On({ name: "switch", showField: c.value })), x = v(() => ({})), C = v(() => Ml({ color: r.color, error: y, theme: o, underlineColor: r.underlineColor, underlineStyle: r.underlineStyle, underlineWidth: r.underlineWidth, underlined: r.underlined })), $ = v(() => B.value), B = j(), E = j(null), _ = j("body");
  function W() {
    var T, R;
    if (r.disabled || r.loadingWait && p.value)
      return;
    B.value = fn({ cardMinWidth: (T = r.cardProps) == null ? void 0 : T.minWidth, cardOffsetX: r.cardOffsetX, cardOffsetY: r.cardOffsetY, cardWidth: (R = r.cardProps) == null ? void 0 : R.width, field: E.value });
    const D = Pn({ attrs: a, closeSiblings: r.closeSiblings, fieldOnly: r.fieldOnly, props: n, showField: c.value, timeOpened: f.value });
    r = { ...r, ...D.settings }, c.value = D.showField, f.value = D.timeOpened, k !== null && r.closeSiblings && c.value && !r.fieldOnly && k.emit(D.timeOpened);
  }
  function H(D) {
    t.value = D, l("update", D), r.loadingWait || W();
  }
  let k, P;
  function L(D) {
    l("update:closeSiblingFields", f), c.value && f.value !== D && W();
  }
  return r.closeSiblings && import("@vueuse/core").then(({ useEventBus: D }) => {
    k = D(Bn), P = k.on(L);
  }), xn(() => {
    P !== void 0 && k.off(L);
  }), (D, T) => (U(), le("div", { ref_key: "inlineFieldsContainer", ref: E, class: J(s(V)), style: ge(s(x)) }, [!s(c) && !s(r).fieldOnly || s(r).cardField ? (U(), le("div", { key: 0, class: J(s(w)) }, [Ie("div", { class: J(s(N)) }, [Ie("div", ts, [D.icons ? (U(), le("div", { key: 0, class: J(s(z)), style: ge(s(C)), onClick: W }, [d(s(Ga), { modelValue: s(S), "onUpdate:modelValue": T[0] || (T[0] = (R) => mn(S) ? S.value = R : null), "icon-false": s(r).iconFalse, "icon-false-color": s(r).iconFalseColor, "icon-false-title": s(r).iconFalseTitle, "icon-true": s(r).iconTrue, "icon-true-color": s(r).iconTrueColor, "icon-true-title": s(r).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (U(), le("div", { key: 1, class: J(["d-inline-flex align-center justify-center", s(z)]), style: ge(s(C)), onClick: W }, Cl(s(g)), 7))])], 2)], 2)) : pe("", !0), s(c) || s(r).fieldOnly || s(r).cardField ? (U(), le("div", { key: 1, class: J(s(O)) }, [(U(), he(rn, { disabled: !s(r).cardField, to: s(_) }, [d(Hr, X(s(m), { color: s(r).color, density: s(r).density, disabled: s(p), error: s(y), "false-icon": s(r).falseIcon, "false-value": s(r).falseValue, "hide-details": s(r).hideDetails, label: s(r).label, loading: s(p), "model-value": s(S), "true-value": s(r).trueValue, "onUpdate:modelValue": H }), Ge({ _: 2 }, [qe(s(i), (R, I) => ({ name: I, fn: re((A) => [Fe(D.$slots, I, ye(be({ ...A })))]) })), s(i).append ? void 0 : { name: "append", fn: re(() => [!s(r).fieldOnly || s(r).cardField ? (U(), he(sl, { key: 0, class: "ms-3", color: s(r).cancelButtonColor, icon: "", size: s(r).cancelButtonSize, title: s(r).cancelButtonTitle, variant: s(r).cancelButtonVariant, onClick: W }, { default: re(() => [d(ce, { color: s(r).cancelIconColor, icon: s(h) }, null, 8, ["color", "icon"])]), _: 1 }, 8, ["color", "size", "title", "variant"])) : pe("", !0)]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "loading", "model-value", "true-value"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), s(r).cardField ? (U(), le("div", { key: 2, class: J(s(F)), style: ge(s($)) }, [d(Fn, ye(be(s(b))), { default: re(() => [d(vn, null, { default: re(() => [Ie("div", { ref_key: "cardFieldRef", ref: _ }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), VInlineTextField: Re({ __name: "VInlineTextField", props: _e(Sn({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Lo }), { modelValue: {} }), emits: _e([...$n], ["update:modelValue"]), setup(e, { emit: l }) {
  const n = e, t = sn(e, "modelValue"), a = cn(), i = un(), u = ve(Symbol.for("vuetify:icons"));
  let o = ze({ ...a, ...n });
  const r = v(() => n.loading), p = j(!1), y = j(!1), c = j(!1), f = j(null);
  let m = t.value;
  Y(() => r.value, (I, A) => {
    !I && A && c.value && W();
  });
  const b = v(() => De({ icon: n.clearIcon, iconOptions: u, name: "clear" })), h = v(() => t.value ? (p.value = !1, o.truncateLength ? gl({ length: o.truncateLength, suffix: o.truncateSuffix, text: t.value }) : t.value) : (p.value = !0, o.emptyText)), g = v(() => Kn(o)), S = v(() => ({ color: o.color, displayAppendIcon: n.displayAppendIcon, displayAppendIconColor: n.displayAppendIconColor, displayAppendIconSize: n.displayAppendIconSize, displayAppendInnerIcon: n.displayAppendInnerIcon, displayAppendInnerIconColor: n.displayAppendInnerIconColor, displayAppendInnerIconSize: n.displayAppendInnerIconSize, displayPrependIcon: n.displayPrependIcon, displayPrependIconColor: n.displayPrependIconColor, displayPrependIconSize: n.displayPrependIconSize, displayPrependInnerIcon: n.displayPrependInnerIcon, displayPrependInnerIconColor: n.displayPrependInnerIconColor, displayPrependInnerIconSize: n.displayPrependInnerIconSize, displayValue: h.value, empty: p.value, error: y.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), V = v(() => ({ ...kn, ...n.cardProps })), w = v(() => Vn({ density: o.density, disabled: o.disabled, field: "v-text-field", iconSet: u == null ? void 0 : u.defaultSet, loading: r.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), N = v(() => An({ density: o.density, field: "v-text-field" })), O = Dt({ density: o.density, variant: o.variant }), z = v(() => _n({ active: c.value, name: "text-field" })), F = v(() => On({ name: "text-field", showField: c.value })), x = v(() => ({})), C = v(() => B.value);
  function $() {
    y.value = !1, t.value = m, W();
  }
  const B = j(), E = j(null), _ = j("body");
  function W() {
    var A, M;
    if (o.disabled || o.loadingWait && r.value)
      return;
    B.value = fn({ cardMinWidth: (A = o.cardProps) == null ? void 0 : A.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (M = o.cardProps) == null ? void 0 : M.width, field: E.value });
    const I = Pn({ attrs: a, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: n, showField: c, timeOpened: f.value });
    o = { ...o, ...I.settings }, c.value = I.showField, f.value = I.timeOpened, D !== null && o.closeSiblings && c.value && !o.fieldOnly && D.emit(I.timeOpened);
  }
  const H = j(), k = v(() => H.value);
  function P() {
    const I = Wt({ required: o.required, rules: o.rules, value: t });
    return y.value = I.errors, H.value = I.results, I.results;
  }
  function L() {
    y.value ? y.value = !0 : (m = t.value, l("update", t.value), o.loadingWait || W());
  }
  let D, T;
  function R(I) {
    l("update:closeSiblingFields", f), c.value && f.value !== I && $();
  }
  return Y(() => c.value, () => {
    c.value && P();
  }), Y(() => t.value, () => {
    c.value && P();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: I }) => {
    D = I(Bn), T = D.on(R);
  }), xn(() => {
    T !== void 0 && D.off(R);
  }), (I, A) => (U(), le("div", { ref_key: "inlineFieldsContainer", ref: E, class: J(s(w)), style: ge(s(x)) }, [!s(c) && !s(o).fieldOnly || s(o).cardField ? (U(), le("div", { key: 0, class: J(s(N)) }, [Ie("div", { class: J(s(O)) }, [d(s(Lt), X(s(S), { onToggleField: W }), Ge({ _: 2 }, [qe(s(i), (M, G) => ({ name: G, fn: re((K) => [Fe(I.$slots, G, ye(be({ ...K })))]) }))]), 1040)], 2)], 2)) : pe("", !0), s(c) || s(o).fieldOnly || s(o).cardField ? (U(), le("div", { key: 1, class: J(s(z)) }, [(U(), he(rn, { disabled: !s(o).cardField, to: s(_) }, [d(ml, X(s(g), { modelValue: t.value, "onUpdate:modelValue": A[1] || (A[1] = (M) => t.value = M), autofocus: !s(o).fieldOnly || s(o).autofocus, "clear-icon": s(b), disabled: s(r), error: s(y), "error-messages": s(k), label: s(o).label, loading: s(r), width: "100%", onKeyup: [St(L, ["enter"]), St($, ["esc"])] }), Ge({ _: 2 }, [qe(s(i), (M, G) => ({ name: G, fn: re((K) => [Fe(I.$slots, G, ye(be({ ...K })))]) })), s(i).append ? void 0 : { name: "append", fn: re(() => [d(s(lt), { modelValue: t.value, "onUpdate:modelValue": A[0] || (A[0] = (M) => t.value = M), "cancel-button-color": s(o).cancelButtonColor, "cancel-button-size": s(o).cancelButtonSize, "cancel-button-title": s(o).cancelButtonTitle, "cancel-button-variant": s(o).cancelButtonVariant, "cancel-icon": s(o).cancelIcon, "cancel-icon-color": s(o).cancelIconColor, error: s(y), "field-only": s(o).fieldOnly, "hide-save-icon": s(o).hideSaveIcon, loading: s(r), "loading-icon": s(o).loadingIcon, "loading-icon-color": s(o).loadingIconColor, required: s(o).required, "save-button-color": s(o).saveButtonColor, "save-button-size": s(o).saveButtonSize, "save-button-title": s(o).saveButtonTitle, "save-button-variant": s(o).saveButtonVariant, "save-icon": s(o).saveIcon, "save-icon-color": s(o).saveIconColor, onClose: $, onSave: L }, null, 8, ["modelValue", "cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "required", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "disabled", "error", "error-messages", "label", "loading", "onKeyup"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), s(o).cardField ? (U(), le("div", { key: 2, class: J(s(F)), style: ge(s(C)) }, [d(Fn, ye(be(s(V))), { default: re(() => [d(vn, null, { default: re(() => [Ie("div", { ref_key: "cardFieldRef", ref: _ }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), VInlineTextarea: Re({ __name: "VInlineTextarea", props: _e(Sn({ autoGrow: {}, clearIcon: {}, density: {}, rows: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...ai }), { modelValue: {} }), emits: _e([...$n], ["update:modelValue"]), setup(e, { emit: l }) {
  const n = e, t = sn(e, "modelValue"), a = cn(), i = un(), u = ve(Symbol.for("vuetify:icons"));
  let o = ze({ ...a, ...n });
  const r = v(() => n.loading), p = j(!1), y = j(!1), c = j(!1), f = j(null);
  let m = t.value;
  Y(() => r.value, (I, A) => {
    !I && A && c.value && W();
  });
  const b = v(() => De({ icon: n.clearIcon, iconOptions: u, name: "clear" })), h = v(() => t.value ? (p.value = !1, o.truncateLength ? gl({ length: o.truncateLength, suffix: o.truncateSuffix, text: t.value }) : t.value) : (p.value = !0, o.emptyText)), g = v(() => Kn(o)), S = v(() => ({ color: o.color, displayAppendIcon: n.displayAppendIcon, displayAppendIconColor: n.displayAppendIconColor, displayAppendIconSize: n.displayAppendIconSize, displayAppendInnerIcon: n.displayAppendInnerIcon, displayAppendInnerIconColor: n.displayAppendInnerIconColor, displayAppendInnerIconSize: n.displayAppendInnerIconSize, displayPrependIcon: n.displayPrependIcon, displayPrependIconColor: n.displayPrependIconColor, displayPrependIconSize: n.displayPrependIconSize, displayPrependInnerIcon: n.displayPrependInnerIcon, displayPrependInnerIconColor: n.displayPrependInnerIconColor, displayPrependInnerIconSize: n.displayPrependInnerIconSize, displayValue: h.value, empty: p.value, error: y.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), V = v(() => ({ ...kn, ...n.cardProps })), w = v(() => Vn({ density: o.density, disabled: o.disabled, field: "v-textarea", iconSet: u == null ? void 0 : u.defaultSet, loading: r.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), N = v(() => An({ density: o.density, field: "v-textarea" })), O = Dt({ density: o.density, variant: o.variant }), z = v(() => _n({ active: c.value, name: "textarea" })), F = v(() => On({ name: "textarea", showField: c.value })), x = v(() => ({})), C = v(() => B.value);
  function $() {
    y.value = !1, t.value = m, W();
  }
  const B = j(), E = j(null), _ = j("body");
  function W() {
    var A, M;
    if (o.disabled || o.loadingWait && r.value)
      return;
    B.value = fn({ cardMinWidth: (A = o.cardProps) == null ? void 0 : A.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (M = o.cardProps) == null ? void 0 : M.width, field: E.value });
    const I = Pn({ attrs: a, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: n, showField: c, timeOpened: f.value });
    o = { ...o, ...I.settings }, c.value = I.showField, f.value = I.timeOpened, D !== null && o.closeSiblings && c.value && !o.fieldOnly && D.emit(I.timeOpened);
  }
  const H = j(), k = v(() => H.value);
  function P() {
    const I = Wt({ required: o.required, rules: o.rules, value: t });
    return y.value = I.errors, H.value = I.results, I.results;
  }
  function L() {
    m = t.value, l("update", t.value), o.loadingWait || W();
  }
  let D, T;
  function R(I) {
    l("update:closeSiblingFields", f), c.value && f.value !== I && $();
  }
  return Y(() => c.value, () => {
    c.value && P();
  }), Y(() => t.value, () => {
    c.value && P();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: I }) => {
    D = I(Bn), T = D.on(R);
  }), xn(() => {
    T !== void 0 && D.off(R);
  }), (I, A) => (U(), le("div", { ref_key: "inlineFieldsContainer", ref: E, class: J(s(w)), style: ge(s(x)) }, [!s(c) && !s(o).fieldOnly || s(o).cardField ? (U(), le("div", { key: 0, class: J(s(N)) }, [Ie("div", { class: J(s(O)) }, [d(s(Lt), X(s(S), { onToggleField: W }), Ge({ _: 2 }, [qe(s(i), (M, G) => ({ name: G, fn: re((K) => [Fe(I.$slots, G, ye(be({ ...K })))]) }))]), 1040)], 2)], 2)) : pe("", !0), s(c) || s(o).fieldOnly || s(o).cardField ? (U(), le("div", { key: 1, class: J(s(z)) }, [(U(), he(rn, { disabled: !s(o).cardField, to: s(_) }, [d(Yr, X(s(g), { modelValue: t.value, "onUpdate:modelValue": A[0] || (A[0] = (M) => t.value = M), "auto-grow": s(o).autoGrow, autofocus: !s(o).fieldOnly || s(o).autofocus, "clear-icon": s(b), color: s(o).color, density: s(o).density, disabled: s(r), error: s(y), "error-messages": s(k), "hide-details": s(o).hideDetails, label: s(o).label, loading: s(r), rows: s(o).rows, variant: s(o).variant, width: "100%", onKeyup: St($, ["esc"]) }), Ge({ _: 2 }, [qe(s(i), (M, G) => ({ name: G, fn: re((K) => [Fe(I.$slots, G, ye(be({ ...K })))]) })), s(i).append ? void 0 : { name: "append", fn: re(() => [d(s(lt), { "cancel-button-color": s(o).cancelButtonColor, "cancel-button-size": s(o).cancelButtonSize, "cancel-button-title": s(o).cancelButtonTitle, "cancel-button-variant": s(o).cancelButtonVariant, "cancel-icon": s(o).cancelIcon, "cancel-icon-color": s(o).cancelIconColor, error: s(y), "field-only": s(o).fieldOnly, "hide-save-icon": s(o).hideSaveIcon, loading: s(r), "loading-icon": s(o).loadingIcon, "loading-icon-color": s(o).loadingIconColor, "save-button-color": s(o).saveButtonColor, "save-button-size": s(o).saveButtonSize, "save-button-title": s(o).saveButtonTitle, "save-button-variant": s(o).saveButtonVariant, "save-icon": s(o).saveIcon, "save-icon-color": s(o).saveIconColor, onClose: $, onSave: L }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "auto-grow", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "rows", "variant", "onKeyup"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), s(o).cardField ? (U(), le("div", { key: 2, class: J(s(F)), style: ge(s(C)) }, [d(Fn, ye(be(s(V))), { default: re(() => [d(vn, null, { default: re(() => [Ie("div", { ref_key: "cardFieldRef", ref: _ }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }) }, ls = (e) => {
  for (const l in We) {
    const n = We[l];
    e.component(n.name, n);
  }
};
for (const e in We)
  We[e].install = ls;
const rs = We.VInlineCheckbox, ss = We.VInlineCustomField, us = We.VInlineSelect, cs = We.VInlineSwitch, ds = We.VInlineTextField, ps = We.VInlineTextarea, vs = { VInlineFields: We };
export {
  rs as VInlineCheckbox,
  ss as VInlineCustomField,
  us as VInlineSelect,
  cs as VInlineSwitch,
  ds as VInlineTextField,
  ps as VInlineTextarea,
  vs as default
};
(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode("[data-v-0d72d990] .v-field__field{align-items:flex-end!important}:root{--v-inline-fields-top-padding-compact: 13px;--v-inline-fields-top-padding-comfortable: 17px;--v-inline-fields-top-padding-default: 21px;--v-inline-fields-input-height: 24px;--v-inline-fields-density-compact-height: 32px;--v-inline-fields-density-comfortable-height: 40px;--v-inline-fields-grey: #909090}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append{padding-top:0!important}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append .v-icon{font-size:1rem!important}.v-inline-fields{position:relative}.v-inline-fields--display-container *{align-items:center;display:flex}.v-inline-fields--display-value{cursor:pointer;letter-spacing:.009375em!important}.v-inline-fields--display-value-empty{color:var(--v-inline-fields-grey);font-style:italic}.v-inline-fields--display-value-checkbox,.v-inline-fields--display-value-switch{padding-bottom:2px;padding-top:6px}.v-inline-fields--display-append-icon,.v-inline-fields--display-prepend-icon,.v-inline-fields--display-append-inner-icon,.v-inline-fields--display-prepend-inner-icon{align-items:flex-end;display:inline-flex}.v-inline-fields--container-disabled .v-inline-fields--display-value{cursor:default!important;opacity:var(--v-disabled-opacity)}.v-inline-fields--container-loading .v-inline-fields--display-value{cursor:wait!important}.v-inline-fields--container-icon-set-fa .v-field__clearable{font-size:.8rem}.v-inline-fields--container-icon-set-fa .v-field__append-inner{align-items:flex-end;padding-bottom:0!important}.v-inline-fields--container-v-select-compact-plain .v-input,.v-inline-fields--container-v-select-compact-underlined .v-input,.v-inline-fields--container-v-text-field-compact-plain .v-input,.v-inline-fields--container-v-text-field-compact-underlined .v-input{height:var(--v-inline-fields-density-compact-height);max-height:var(--v-inline-fields-density-compact-height)}.v-inline-fields--container-v-select-compact-plain .v-input__control,.v-inline-fields--container-v-select-compact-underlined .v-input__control,.v-inline-fields--container-v-text-field-compact-plain .v-input__control,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control{padding-bottom:4px}.v-inline-fields--container-v-select-compact-plain .v-input>div,.v-inline-fields--container-v-select-compact-underlined .v-input>div,.v-inline-fields--container-v-text-field-compact-plain .v-input>div,.v-inline-fields--container-v-text-field-compact-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input input{padding-bottom:10px}.v-inline-fields--container-v-select-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-compact-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-select__selection{align-items:center;padding-bottom:10px}.v-inline-fields--container-v-select-comfortable-plain .v-input,.v-inline-fields--container-v-select-comfortable-underlined .v-input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input{height:var(--v-inline-fields-density-comfortable-height);max-height:var(--v-inline-fields-density-comfortable-height)}.v-inline-fields--container-v-select-comfortable-plain .v-input__control,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control{padding-bottom:8px}.v-inline-fields--container-v-select-comfortable-plain .v-input>div,.v-inline-fields--container-v-select-comfortable-underlined .v-input>div,.v-inline-fields--container-v-text-field-comfortable-plain .v-input>div,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input input{padding-bottom:6px}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-select__selection{align-items:center;padding-bottom:6px}.v-inline-fields--container-v-select-compact-plain .v-field__append-inner,.v-inline-fields--container-v-select-compact-underlined .v-field__append-inner{padding-top:4px!important}.v-inline-fields--container-v-select-comfortable-plain .v-field__append-inner,.v-inline-fields--container-v-select-comfortable-underlined .v-field__append-inner{padding-top:8px!important}.v-inline-fields--container-v-textarea .v-inline-fields--save-fields-container{align-items:flex-end}.v-inline-fields--container-v-select,.v-inline-fields--container-v-textarea,.v-inline-fields--container-v-text-field{width:100%}.v-inline-fields--container-v-checkbox .v-input,.v-inline-fields--container-v-switch .v-input{align-items:center;display:flex;padding-bottom:0}.v-inline-fields--container-v-checkbox .v-input__append,.v-inline-fields--container-v-switch .v-input__append{margin-inline-start:0!important;margin-left:0;padding-bottom:0!important}.v-inline-fields--container-v-checkbox .v-selection-control,.v-inline-fields--container-v-switch .v-selection-control{min-height:unset}.v-inline-fields--container-v-checkbox .v-inline-fields--save-fields-container,.v-inline-fields--container-v-switch .v-inline-fields--save-fields-container{align-items:center!important}.v-inline-fields--container .v-input__append,.v-inline-fields--container .v-input__prepend,.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-top:0!important}.v-inline-fields--container .v-input__append .v-icon,.v-inline-fields--container .v-input__prepend .v-icon,.v-inline-fields--container .v-field__append-inner .v-icon,.v-inline-fields--container .v-field__prepend-inner .v-icon{font-size:1rem!important}.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-compact .v-input__append,.v-inline-fields--container-compact .v-input__prepend,.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-comfortable .v-input__append,.v-inline-fields--container-comfortable .v-input__prepend,.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{padding-bottom:6px!important}.v-inline-fields--container-default .v-input__append,.v-inline-fields--container-default .v-input__prepend,.v-inline-fields--container-default .v-field__append-inner,.v-inline-fields--container-default .v-field__prepend-inner{align-items:flex-end!important;padding-bottom:0!important}.v-inline-fields--container-default .v-input__append .v-icon,.v-inline-fields--container-default .v-input__prepend .v-icon,.v-inline-fields--container-default .v-field__append-inner .v-icon,.v-inline-fields--container-default .v-field__prepend-inner .v-icon{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)!important}.v-inline-fields--container-default .v-inline-fields--save-fields-container{align-items:flex-end!important}.v-inline-fields--card-container{height:fit-content;min-width:fit-content!important;position:absolute}.v-inline-fields--card-container .v-card{border:1px solid hsla(0,0%,50%,.5)}.v-inline-fields--card-container .v-card .v-card-text{padding:5px 10px}.v-inline-fields--card-container .v-card .v-card-text>div{align-items:center;display:flex}.v-inline-fields--card-container-checkbox .v-card .v-card-text .v-input__append{margin-inline-start:0}.v-inline-fields--save-fields-container{align-items:center;display:flex;height:100%;margin-left:.1rem}.v-inline-fields--boolean-icons{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-inline-fields .truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:250px}.v-inline-fields .v-input__append{padding-top:0}")),document.head.appendChild(i)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
