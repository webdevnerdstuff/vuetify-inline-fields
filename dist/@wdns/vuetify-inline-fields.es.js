import { Fragment as fe, reactive as ze, computed as v, watchEffect as Ue, toRefs as Po, capitalize as $o, isVNode as Ka, Comment as Ja, warn as Wt, inject as ve, ref as R, unref as u, provide as Te, shallowRef as ue, defineComponent as Re, camelize as Eo, h as Rt, getCurrentInstance as Za, onBeforeUnmount as on, watch as K, readonly as bl, onScopeDispose as we, effectScope as Cl, toRaw as nn, TransitionGroup as Qa, Transition as yn, createVNode as d, mergeProps as Z, onBeforeMount as To, nextTick as xe, withDirectives as Be, resolveDirective as Xe, vShow as Dn, isRef as mn, onMounted as Ln, toRef as ne, Text as ei, resolveDynamicComponent as ni, Teleport as rn, cloneVNode as ti, createTextVNode as zo, vModelText as li, mergeModels as _e, useModel as sn, openBlock as X, createBlock as he, useSlots as un, createElementBlock as oe, normalizeClass as ee, normalizeStyle as ge, renderSlot as Fe, normalizeProps as ye, createCommentVNode as pe, createElementVNode as Ie, toDisplayString as Il, useAttrs as cn, withCtx as se, mergeDefaults as Sn, onUnmounted as xn, createSlots as Ge, renderList as qe, guardReactiveProps as be, withKeys as St } from "vue";
import { useTheme as Sl } from "vuetify";
import { useWindowSize as oi } from "@vueuse/core";
/**
 * @name @wdns/vuetify-inline-fields
 * @version 1.0.0-beta-1.10
 * @description Vuetify Inline Fields Component Library offers a comprehensive collection of reusable UI components to create elegant and efficient inline form fields within your applications.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-inline-fields/
 * @repository https://github.com/webdevnerdstuff/vuetify-inline-fields
 * @license MIT License
 */
const Bn = Symbol("identifier"), kn = { elevation: 5, variant: "flat" }, ot = { cancelButtonColor: "default", cancelButtonSize: "x-small", cancelButtonTitle: "Cancel", cancelButtonVariant: "text", cancelIcon: void 0, cancelIconColor: "default", cardField: !1, cardOffsetX: 0, cardOffsetY: 0, cardProps: () => ({}), closeSiblings: !1, color: "primary", density: "compact", disabled: !1, displayAppendIcon: void 0, displayAppendIconColor: void 0, displayAppendIconSize: "x-small", displayAppendInnerIcon: void 0, displayAppendInnerIconColor: void 0, displayAppendInnerIconSize: "x-small", displayPrependIcon: void 0, displayPrependIconColor: void 0, displayPrependIconSize: "x-small", displayPrependInnerIcon: void 0, displayPrependInnerIconColor: void 0, displayPrependInnerIconSize: "x-small", emptyText: "empty", fieldOnly: !1, hideDetails: !0, label: "", loading: !1, loadingWait: !0, name: "", tableField: !0, underlineColor: "primary", underlineStyle: "dotted", underlineWidth: "2px", underlined: !0, valueColor: "default" }, xl = { autofocus: !0 }, Nt = { hideSaveIcon: !1, loadingIcon: void 0, loadingIconColor: "primary", saveButtonColor: "primary", saveButtonSize: "x-small", saveButtonTitle: "Save", saveButtonVariant: "text", saveIcon: void 0, saveIconColor: "primary" }, Do = { falseValue: !1, iconFalse: void 0, iconFalseColor: "danger", iconFalseTitle: "No", iconTrue: void 0, iconTrueColor: "success", iconTrueTitle: "Yes", icons: !0, trueValue: !0 }, ai = { ...ot, ...Do, ...Nt, falseIcon: void 0, icons: !0, trueIcon: void 0 }, ii = { ...ot, ...xl, ...Nt, clearIcon: void 0, clearable: !1, hideSelected: !0, itemTitle: "title", itemValue: "value", items: () => [], menu: !0, variant: "underlined" }, ri = { ...ot, ...Do, icons: !0, falseIcon: "" }, si = { ...xl, ...Nt, ...ot, autoGrow: !0, rows: 1, truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, Lo = { ...ot, ...xl, ...Nt, truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, ui = { fa: { checkboxFalse: "$checkboxOff", checkboxTrue: "far fa-square-check", clear: "$clear", false: "$close", loading: "fa-circle-notch", save: "fa-floppy-disk", true: "$complete" }, mdi: { checkboxFalse: "$checkboxOff", checkboxTrue: "mdi:mdi-checkbox-outline", clear: "$clear", false: "$close", loading: "mdi-loading", save: "mdi-content-save", true: "$complete" } }, De = (e) => {
  const { icon: t, iconOptions: n, name: l } = e;
  if (t)
    return t;
  const a = ui[n == null ? void 0 : n.defaultSet];
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
const ie = H({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component"), Ee = typeof window < "u", Bl = Ee && "IntersectionObserver" in window;
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
function He(e, t, n) {
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
function tl(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function ll(e) {
  return e && "$el" in e ? e.$el : e;
}
const jl = Object.freeze({ enter: 13, tab: 9, delete: 46, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39, end: 35, home: 36, del: 46, backspace: 8, insert: 45, pageup: 33, pagedown: 34, shift: 16 });
function Ut(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function En(e, t, n) {
  const l = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    t.some((c) => c instanceof RegExp ? c.test(i) : c === i) && !(n != null && n.some((c) => c === i)) ? l[i] = e[i] : a[i] = e[i];
  return [l, a];
}
function it(e, t) {
  const n = { ...e };
  return t.forEach((l) => delete n[l]), n;
}
const Mo = /^on[^a-z]/, ol = (e) => Mo.test(e), ci = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function rt(e) {
  const [t, n] = En(e, [Mo]), l = it(t, ci), [a, i] = En(n, ["class", "style", "id", /^data-/]);
  return Object.assign(a, t), Object.assign(i, l), [a, i];
}
function tn(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Jn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function Gl(e, t) {
  return e + (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length));
}
function Cn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const l = {};
  for (const a in e)
    l[a] = e[a];
  for (const a in t) {
    const i = e[a], c = t[a];
    tl(i) && tl(c) ? l[a] = Cn(i, c, n) : Array.isArray(i) && Array.isArray(c) && n ? l[a] = n(i, c) : l[a] = c;
  }
  return l;
}
function Wo(e) {
  return e.map((t) => t.type === fe ? Wo(t.children) : t).flat();
}
function dn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (dn.cache.has(e))
    return dn.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return dn.cache.set(e, t), t;
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
  const t = ze({}), n = v(e);
  return Ue(() => {
    for (const l in n.value)
      t[l] = n.value[l];
  }, { flush: "sync" }), Po(t);
}
function wt(e, t) {
  return e.includes(t);
}
function ql(e) {
  return e[2].toLowerCase() + e.slice(3);
}
dn.cache = /* @__PURE__ */ new Map();
const Ne = () => [Function, Array];
function Hl(e, t) {
  return !!(e[t = "on" + $o(t)] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function Ro(e) {
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
function No(e, t, n) {
  let l, a = e.indexOf(document.activeElement);
  const i = t === "next" ? 1 : -1;
  do
    a += i, l = e[a];
  while ((!l || l.offsetParent == null || !((n == null ? void 0 : n(l)) ?? 1)) && a < e.length && a >= 0);
  return l;
}
function Ft(e, t) {
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
      const r = No(n, t);
      r ? r.focus() : Ft(e, t === "next" ? "first" : "last");
    }
  else
    e !== document.activeElement && e.contains(document.activeElement) || ((c = n[0]) == null || c.focus());
}
function Vt(e, t) {
  if (!(Ee && typeof CSS < "u" && CSS.supports !== void 0 && CSS.supports(`selector(${t})`)))
    return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function jo(e) {
  return e.some((t) => !Ka(t) || t.type !== Ja && (t.type !== fe || jo(t.children))) ? e : null;
}
const Go = ["top", "bottom"], di = ["start", "end", "left", "right"];
function il(e, t) {
  let [n, l] = e.split(" ");
  return l || (l = wt(Go, n) ? "start" : wt(di, n) ? "top" : "center"), { side: Ul(n, t), align: Ul(l, t) };
}
function Ul(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function Yt(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function Xt(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function Yl(e) {
  return { side: e.align, align: e.side };
}
function Xl(e) {
  return wt(Go, e.side) ? "y" : "x";
}
class wn {
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
function Kl(e, t) {
  return { x: { before: Math.max(0, t.left - e.left), after: Math.max(0, e.right - t.right) }, y: { before: Math.max(0, t.top - e.top), after: Math.max(0, e.bottom - t.bottom) } };
}
function wl(e) {
  const t = e.getBoundingClientRect(), n = getComputedStyle(e), l = n.transform;
  if (l) {
    let a, i, c, r, o;
    if (l.startsWith("matrix3d("))
      a = l.slice(9, -1).split(/, /), i = +a[0], c = +a[5], r = +a[12], o = +a[13];
    else {
      if (!l.startsWith("matrix("))
        return new wn(t);
      a = l.slice(7, -1).split(/, /), i = +a[0], c = +a[3], r = +a[4], o = +a[5];
    }
    const s = n.transformOrigin, m = t.x - r - (1 - i) * parseFloat(s), y = t.y - o - (1 - c) * parseFloat(s.slice(s.indexOf(" ") + 1)), f = i ? t.width / i : e.offsetWidth + 1, p = c ? t.height / c : e.offsetHeight + 1;
    return new wn({ x: m, y, width: f, height: p });
  }
  return new wn(t);
}
function In(e, t, n) {
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
const ht = /* @__PURE__ */ new WeakMap(), bn = 2.4, Jl = 0.2126729, Zl = 0.7151522, Ql = 0.072175, pi = 0.55, vi = 0.58, fi = 0.57, yi = 0.62, bt = 0.03, eo = 1.45, mi = 5e-4, gi = 1.25, hi = 1.25, no = 0.078, to = 12.82051282051282, Ct = 0.06, lo = 1e-3;
function oo(e, t) {
  const n = (e.r / 255) ** bn, l = (e.g / 255) ** bn, a = (e.b / 255) ** bn, i = (t.r / 255) ** bn, c = (t.g / 255) ** bn, r = (t.b / 255) ** bn;
  let o, s = n * Jl + l * Zl + a * Ql, m = i * Jl + c * Zl + r * Ql;
  if (s <= bt && (s += (bt - s) ** eo), m <= bt && (m += (bt - m) ** eo), Math.abs(m - s) < mi)
    return 0;
  if (m > s) {
    const y = (m ** pi - s ** vi) * gi;
    o = y < lo ? 0 : y < no ? y - y * to * Ct : y - Ct;
  } else {
    const y = (m ** yi - s ** fi) * hi;
    o = y > -lo ? 0 : y > -no ? y - y * to * Ct : y + Ct;
  }
  return 100 * o;
}
function Xn(e) {
  Wt(`Vuetify: ${e}`);
}
function Kt(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
const ao = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, bi = { rgb: (e, t, n, l) => ({ r: e, g: t, b: n, a: l }), rgba: (e, t, n, l) => ({ r: e, g: t, b: n, a: l }), hsl: (e, t, n, l) => io({ h: e, s: t, l: n, a: l }), hsla: (e, t, n, l) => io({ h: e, s: t, l: n, a: l }), hsv: (e, t, n, l) => Zn({ h: e, s: t, v: n, a: l }), hsva: (e, t, n, l) => Zn({ h: e, s: t, v: n, a: l }) };
function Hn(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && Xn(`'${e}' is not a valid hex color`), { r: (16711680 & e) >> 16, g: (65280 & e) >> 8, b: 255 & e };
  if (typeof e == "string" && ao.test(e)) {
    const { groups: t } = e.match(ao), { fn: n, values: l } = t, a = l.split(/,\s*/).map((i) => i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(i) / 100 : parseFloat(i));
    return bi[n](...a);
  }
  if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((l) => l + l).join("") : [6, 8].includes(t.length) || Xn(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && Xn(`'${e}' is not a valid hex(a) color`), function(l) {
      l = function(o) {
        return o.startsWith("#") && (o = o.slice(1)), o = o.replace(/([^0-9a-f])/gi, "F"), (o.length === 3 || o.length === 4) && (o = o.split("").map((s) => s + s).join("")), o.length !== 6 && (o = Gl(Gl(o, 6), 8, "F")), o;
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
    if (Ut(e, ["r", "g", "b"]))
      return e;
    if (Ut(e, ["h", "s", "l"]))
      return Zn(qo(e));
    if (Ut(e, ["h", "s", "v"]))
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
function io(e) {
  return Zn(qo(e));
}
function qo(e) {
  const { h: t, s: n, l, a } = e, i = l + n * Math.min(l, 1 - l);
  return { h: t, s: i === 0 ? 0 : 2 - 2 * l / i, v: i, a };
}
const At = Symbol.for("vuetify:defaults");
function Fl() {
  const e = ve(At);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Mn(e, t) {
  const n = Fl(), l = R(e), a = v(() => {
    if (u(t == null ? void 0 : t.disabled))
      return n.value;
    const i = u(t == null ? void 0 : t.scoped), c = u(t == null ? void 0 : t.reset), r = u(t == null ? void 0 : t.root);
    if (l.value == null && !(i || c || r))
      return n.value;
    let o = Cn(l.value, { prev: n.value });
    if (i)
      return o;
    if (c || r) {
      const s = Number(c || 1 / 0);
      for (let m = 0; m <= s && o && "prev" in o; m++)
        o = o.prev;
      return o && typeof r == "string" && r in o && (o = Cn(Cn(o, { prev: o }), o[r])), o;
    }
    return o.prev ? Cn(o.prev, o) : o;
  });
  return Te(At, a), a;
}
function Ci() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Fl();
  const l = ke("useDefaults");
  if (t = t ?? l.type.name ?? l.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const a = v(() => {
    var r;
    return (r = n.value) == null ? void 0 : r[e._as ?? t];
  }), i = new Proxy(e, { get(r, o) {
    var m, y, f, p;
    const s = Reflect.get(r, o);
    return o === "class" || o === "style" ? [(m = a.value) == null ? void 0 : m[o], s].filter((g) => g != null) : typeof o != "string" || function(g, b) {
      var h, I;
      return ((h = g.props) == null ? void 0 : h[b]) !== void 0 || ((I = g.props) == null ? void 0 : I[dn(b)]) !== void 0;
    }(l.vnode, o) ? s : ((y = a.value) == null ? void 0 : y[o]) ?? ((p = (f = n.value) == null ? void 0 : f.global) == null ? void 0 : p[o]) ?? s;
  } }), c = ue();
  return Ue(() => {
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
      let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ke("injectSelf");
      const { provides: m } = s;
      if (m && o in m)
        return m[o];
    }(At, l);
    Te(At, v(() => c.value ? Cn((r == null ? void 0 : r.value) ?? {}, c.value) : r == null ? void 0 : r.value));
  } };
}
function Qn(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return Xn("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = H(e.props ?? {}, e.name)();
    const t = Object.keys(e.props);
    e.filterProps = function(n) {
      return En(n, t, ["class", "style"]);
    }, e.props._as = String, e.setup = function(n, l) {
      const a = Fl();
      if (!a.value)
        return e._setup(n, l);
      const { props: i, provideSubDefaults: c } = Ci(n, n._as ?? e.name, a), r = e._setup(i, l);
      return c(), r;
    };
  }
  return e;
}
function Q() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (t) => (e ? Qn : Re)(t);
}
function st(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return Q()({ name: n ?? $o(Eo(e.replace(/__/g, "-"))), props: { tag: { type: String, default: t }, ...ie() }, setup(l, a) {
    let { slots: i } = a;
    return () => {
      var c;
      return Rt(l.tag, { class: [e, l.class], style: l.style }, (c = i.default) == null ? void 0 : c.call(i));
    };
  } });
}
function Ho(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; )
      e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({ composed: !0 }) !== document ? null : t;
}
const _t = "cubic-bezier(0.4, 0, 0.2, 1)";
function ke(e, t) {
  const n = Za();
  if (!n)
    throw new Error(`[Vuetify] ${e} ${t || "must be called from inside a setup function"}`);
  return n;
}
function Ke() {
  const e = ke(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return dn((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let Uo = 0, Bt = /* @__PURE__ */ new WeakMap();
function Le() {
  const e = ke("getUid");
  if (Bt.has(e))
    return Bt.get(e);
  {
    const t = Uo++;
    return Bt.set(e, t), t;
  }
}
function Yo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
  for (; e; ) {
    if (t ? Ii(e) : Vl(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Ot(e, t) {
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
function Ii(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function le(e) {
  ke("useRender").render = e;
}
function Al(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = R(), l = R();
  if (Ee) {
    const a = new ResizeObserver((i) => {
      e == null || e(i, a), i.length && (l.value = t === "content" ? i[0].contentRect : i[0].target.getBoundingClientRect());
    });
    on(() => {
      a.disconnect();
    }), K(n, (i, c) => {
      c && (a.unobserve(ll(c)), l.value = void 0), i && a.observe(ll(i));
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: bl(l) };
}
function pn(e, t) {
  let n;
  function l() {
    n = Cl(), n.run(() => t.length ? t(() => {
      n == null || n.stop(), l();
    }) : t());
  }
  K(e, (a) => {
    a && !n ? l() : a || (n == null || n.stop(), n = void 0);
  }, { immediate: !0 }), we(() => {
    n == null || n.stop();
  });
}
function me(e, t, n) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (m) => m, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (m) => m;
  const i = ke("useProxiedModel"), c = R(e[t] !== void 0 ? e[t] : n), r = dn(t), o = v(r !== t ? () => {
    var m, y, f, p;
    return e[t], !(!((m = i.vnode.props) != null && m.hasOwnProperty(t)) && !((y = i.vnode.props) != null && y.hasOwnProperty(r)) || !((f = i.vnode.props) != null && f.hasOwnProperty(`onUpdate:${t}`)) && !((p = i.vnode.props) != null && p.hasOwnProperty(`onUpdate:${r}`)));
  } : () => {
    var m, y;
    return e[t], !(!((m = i.vnode.props) != null && m.hasOwnProperty(t)) || !((y = i.vnode.props) != null && y.hasOwnProperty(`onUpdate:${t}`)));
  });
  pn(() => !o.value, () => {
    K(() => e[t], (m) => {
      c.value = m;
    });
  });
  const s = v({ get() {
    const m = e[t];
    return l(o.value ? m : c.value);
  }, set(m) {
    const y = a(m), f = nn(o.value ? e[t] : c.value);
    f !== y && l(f) !== m && (c.value = y, i == null || i.emit(`update:${t}`, y));
  } });
  return Object.defineProperty(s, "externalValue", { get: () => o.value ? e[t] : c.value }), s;
}
Le.reset = () => {
  Uo = 0, Bt = /* @__PURE__ */ new WeakMap();
};
const Xo = Symbol.for("vuetify:locale");
function _l() {
  const e = ve(Xo);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function ut() {
  const e = ve(Xo);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const ro = Symbol.for("vuetify:theme"), Ce = H({ theme: String }, "theme");
function Ve(e) {
  ke("provideTheme");
  const t = ve(ro, null);
  if (!t)
    throw new Error("Could not find Vuetify theme injection");
  const n = v(() => e.theme ?? t.name.value), l = v(() => t.themes.value[n.value]), a = v(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), i = { ...t, name: n, current: l, themeClasses: a };
  return Te(ro, i), i;
}
const $e = H({ tag: { type: String, default: "div" } }, "tag"), Si = H({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function Oe(e, t, n) {
  return Q()({ name: e, props: Si({ mode: n, origin: t }), setup(l, a) {
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
      const r = l.group ? Qa : yn;
      return Rt(r, { name: l.disabled ? "" : e, css: !l.disabled, ...l.group ? void 0 : { mode: l.mode }, ...l.disabled ? {} : c }, i.default);
    };
  } });
}
function Ko(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return Q()({ name: e, props: { mode: { type: String, default: n }, disabled: Boolean }, setup(l, a) {
    let { slots: i } = a;
    return () => Rt(yn, { name: l.disabled ? "" : e, css: !l.disabled, ...l.disabled ? {} : t }, i.default);
  } });
}
function Jo() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", n = Eo(`offset-${t}`);
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
const xi = H({ target: Object }, "v-dialog-transition"), Zo = Q()({ name: "VDialogTransition", props: xi(), setup(e, t) {
  let { slots: n } = t;
  const l = { onBeforeEnter(a) {
    a.style.pointerEvents = "none", a.style.visibility = "hidden";
  }, async onEnter(a, i) {
    var f;
    await new Promise((p) => requestAnimationFrame(p)), await new Promise((p) => requestAnimationFrame(p)), a.style.visibility = "";
    const { x: c, y: r, sx: o, sy: s, speed: m } = uo(e.target, a), y = In(a, [{ transform: `translate(${c}px, ${r}px) scale(${o}, ${s})`, opacity: 0 }, {}], { duration: 225 * m, easing: "cubic-bezier(0.0, 0, 0.2, 1)" });
    (f = so(a)) == null || f.forEach((p) => {
      In(p, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * m, easing: _t });
    }), y.finished.then(() => i());
  }, onAfterEnter(a) {
    a.style.removeProperty("pointer-events");
  }, onBeforeLeave(a) {
    a.style.pointerEvents = "none";
  }, async onLeave(a, i) {
    var y;
    await new Promise((f) => requestAnimationFrame(f));
    const { x: c, y: r, sx: o, sy: s, speed: m } = uo(e.target, a);
    In(a, [{}, { transform: `translate(${c}px, ${r}px) scale(${o}, ${s})`, opacity: 0 }], { duration: 125 * m, easing: "cubic-bezier(0.4, 0, 1, 1)" }).finished.then(() => i()), (y = so(a)) == null || y.forEach((f) => {
      In(f, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * m, easing: _t });
    });
  }, onAfterLeave(a) {
    a.style.removeProperty("pointer-events");
  } };
  return () => e.target ? d(yn, Z({ name: "dialog-transition" }, l, { css: !1 }), n) : d(yn, { name: "dialog-transition" }, n);
} });
function so(e) {
  var n;
  const t = (n = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : n.children;
  return t && [...t];
}
function uo(e, t) {
  const n = e.getBoundingClientRect(), l = wl(t), [a, i] = getComputedStyle(t).transformOrigin.split(" ").map((I) => parseFloat(I)), [c, r] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let o = n.left + n.width / 2;
  c === "left" || r === "left" ? o -= n.width / 2 : c !== "right" && r !== "right" || (o += n.width / 2);
  let s = n.top + n.height / 2;
  c === "top" || r === "top" ? s -= n.height / 2 : c !== "bottom" && r !== "bottom" || (s += n.height / 2);
  const m = n.width / l.width, y = n.height / l.height, f = Math.max(1, m, y), p = m / f || 0, g = y / f || 0, b = l.width * l.height / (window.innerWidth * window.innerHeight), h = b > 0.12 ? Math.min(1.5, 10 * (b - 0.12) + 1) : 1;
  return { x: o - (a + l.left), y: s - (i + l.top), sx: p, sy: g, speed: h };
}
Oe("fab-transition", "center center", "out-in"), Oe("dialog-bottom-transition"), Oe("dialog-top-transition"), Oe("fade-transition");
const Bi = Oe("scale-transition");
Oe("scroll-x-transition"), Oe("scroll-x-reverse-transition"), Oe("scroll-y-transition"), Oe("scroll-y-reverse-transition"), Oe("slide-x-transition"), Oe("slide-x-reverse-transition");
const Qo = Oe("slide-y-transition");
Oe("slide-y-reverse-transition");
const ki = Ko("expand-transition", Jo()), ea = Ko("expand-x-transition", Jo("", !0)), wi = H({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Se = Q(!1)({ name: "VDefaultsProvider", props: wi(), setup(e, t) {
  let { slots: n } = t;
  const { defaults: l, disabled: a, reset: i, root: c, scoped: r } = Po(e);
  return Mn(l, { reset: i, root: c, scoped: r, disabled: a }), () => {
    var o;
    return (o = n.default) == null ? void 0 : o.call(n);
  };
} }), gn = H({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function hn(e) {
  return { dimensionStyles: v(() => ({ height: te(e.height), maxHeight: te(e.maxHeight), maxWidth: te(e.maxWidth), minHeight: te(e.minHeight), minWidth: te(e.minWidth), width: te(e.width) })) };
}
const na = H({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...ie(), ...gn() }, "VResponsive"), co = Q()({ name: "VResponsive", props: na(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: l } = function(i) {
    return { aspectStyles: v(() => {
      const c = Number(i.aspectRatio);
      return c ? { paddingBottom: String(1 / c * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: a } = hn(e);
  return le(() => {
    var i;
    return d("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [a.value, e.style] }, [d("div", { class: "v-responsive__sizer", style: l.value }, null), (i = n.additional) == null ? void 0 : i.call(n), n.default && d("div", { class: ["v-responsive__content", e.contentClass] }, [n.default()])]);
  }), {};
} }), ct = H({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), en = (e, t) => {
  let { slots: n } = t;
  const { transition: l, disabled: a, ...i } = e, { component: c = yn, ...r } = typeof l == "object" ? l : {};
  return Rt(c, Z(typeof l == "string" ? { name: a ? "" : l } : r, i, { disabled: a }), n);
};
function po(e, t) {
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
    !a || n.quiet && !s.init || n.once && !m && !s.init || a(m, r, o), m && n.once ? po(e, t) : s.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = { init: !1, observer: c }, c.observe(e);
}, unmounted: po }, Fi = H({ alt: String, cover: Boolean, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, srcset: String, ...na(), ...ie(), ...ct() }, "VImg"), ta = Q()({ name: "VImg", directives: { intersect: Ol }, props: Fi(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, t) {
  let { emit: n, slots: l } = t;
  const a = ue(""), i = R(), c = ue(e.eager ? "loading" : "idle"), r = ue(), o = ue(), s = v(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), m = v(() => s.value.aspect || r.value / o.value || 0);
  function y(S) {
    if ((!e.eager || !S) && (!Bl || S || e.eager)) {
      if (c.value = "loading", s.value.lazySrc) {
        const C = new Image();
        C.src = s.value.lazySrc, h(C, null);
      }
      s.value.src && xe(() => {
        var C, D;
        if (n("loadstart", ((C = i.value) == null ? void 0 : C.currentSrc) || s.value.src), (D = i.value) == null ? void 0 : D.complete) {
          if (i.value.naturalWidth || p(), c.value === "error")
            return;
          m.value || h(i.value, null), f();
        } else
          m.value || h(i.value), g();
      });
    }
  }
  function f() {
    var S;
    g(), c.value = "loaded", n("load", ((S = i.value) == null ? void 0 : S.currentSrc) || s.value.src);
  }
  function p() {
    var S;
    c.value = "error", n("error", ((S = i.value) == null ? void 0 : S.currentSrc) || s.value.src);
  }
  function g() {
    const S = i.value;
    S && (a.value = S.currentSrc || S.src);
  }
  K(() => e.src, () => {
    y(c.value !== "idle");
  }), K(m, (S, C) => {
    !S && C && i.value && h(i.value);
  }), To(() => y());
  let b = -1;
  function h(S) {
    let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const D = () => {
      clearTimeout(b);
      const { naturalHeight: w, naturalWidth: P } = S;
      w || P ? (r.value = P, o.value = w) : S.complete || c.value !== "loading" || C == null ? (S.currentSrc.endsWith(".svg") || S.currentSrc.startsWith("data:image/svg+xml")) && (r.value = 1, o.value = 1) : b = window.setTimeout(D, C);
    };
    D();
  }
  const I = v(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), A = () => {
    var D;
    if (!s.value.src || c.value === "idle")
      return null;
    const S = d("img", { class: ["v-img__img", I.value], src: s.value.src, srcset: s.value.srcset, alt: e.alt, sizes: e.sizes, ref: i, onLoad: f, onError: p }, null), C = (D = l.sources) == null ? void 0 : D.call(l);
    return d(en, { transition: e.transition, appear: !0 }, { default: () => [Be(C ? d("picture", { class: "v-img__picture" }, [C, S]) : S, [[Dn, c.value === "loaded"]])] });
  }, k = () => d(en, { transition: e.transition }, { default: () => [s.value.lazySrc && c.value !== "loaded" && d("img", { class: ["v-img__img", "v-img__img--preload", I.value], src: s.value.lazySrc, alt: e.alt }, null)] }), M = () => l.placeholder ? d(en, { transition: e.transition, appear: !0 }, { default: () => [(c.value === "loading" || c.value === "error" && !l.error) && d("div", { class: "v-img__placeholder" }, [l.placeholder()])] }) : null, _ = () => l.error ? d(en, { transition: e.transition, appear: !0 }, { default: () => [c.value === "error" && d("div", { class: "v-img__error" }, [l.error()])] }) : null, T = () => e.gradient ? d("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, V = ue(!1);
  {
    const S = K(m, (C) => {
      C && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          V.value = !0;
        });
      }), S());
    });
  }
  return le(() => {
    const [S] = co.filterProps(e);
    return Be(d(co, Z({ class: ["v-img", { "v-img--booting": !V.value }, e.class], style: [{ width: te(e.width === "auto" ? r.value : e.width) }, e.style] }, S, { aspectRatio: m.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => d(fe, null, [d(A, null, null), d(k, null, null), d(T, null, null), d(M, null, null), d(_, null, null)]), default: l.default }), [[Xe("intersect"), { handler: y, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: a, image: i, state: c, naturalWidth: r, naturalHeight: o };
} }), Wn = H({ border: [Boolean, Number, String] }, "border");
function Rn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ke();
  return { borderClasses: v(() => {
    const n = mn(e) ? e.value : e.border, l = [];
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
      if (Kt(e.value.background)) {
        if (n.backgroundColor = e.value.background, !e.value.text && Kt(l = e.value.background) && !/^((rgb|hsl)a?\()?var\(--/.test(l)) {
          const a = Hn(e.value.background);
          if (a.a == null || a.a === 1) {
            const i = function(c) {
              const r = Math.abs(oo(Hn(0), Hn(c)));
              return Math.abs(oo(Hn(16777215), Hn(c))) > Math.min(r, 50) ? "#fff" : "#000";
            }(a);
            n.color = i, n.caretColor = i;
          }
        }
      } else
        t.push(`bg-${e.value.background}`);
    var l;
    return e.value.text && (Kt(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), { colorClasses: t, colorStyles: n };
  });
}
function Ye(e, t) {
  const n = v(() => ({ text: mn(e) ? e.value : t ? e[t] : null })), { colorClasses: l, colorStyles: a } = Pl(n);
  return { textColorClasses: l, textColorStyles: a };
}
function Tn(e, t) {
  const n = v(() => ({ background: mn(e) ? e.value : t ? e[t] : null })), { colorClasses: l, colorStyles: a } = Pl(n);
  return { backgroundColorClasses: l, backgroundColorStyles: a };
}
const Nn = H({ elevation: { type: [Number, String], validator(e) {
  const t = parseInt(e);
  return !isNaN(t) && t >= 0 && t <= 24;
} } }, "elevation");
function jn(e) {
  return { elevationClasses: v(() => {
    const t = mn(e) ? e.value : e.elevation, n = [];
    return t == null || n.push(`elevation-${t}`), n;
  }) };
}
const Je = H({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function Ze(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ke();
  return { roundedClasses: v(() => {
    const n = mn(e) ? e.value : e.rounded, l = [];
    if (n === !0 || n === "")
      l.push(`${t}--rounded`);
    else if (typeof n == "string" || n === 0)
      for (const a of String(n).split(" "))
        l.push(`rounded-${a}`);
    return l;
  }) };
}
const Vi = [null, "default", "comfortable", "compact"], je = H({ density: { type: String, default: "default", validator: (e) => Vi.includes(e) } }, "density");
function Qe(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ke();
  return { densityClasses: v(() => `${t}--density-${e.density}`) };
}
const Ai = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function dt(e, t) {
  return d(fe, null, [e && d("span", { key: "overlay", class: `${t}__overlay` }, null), d("span", { key: "underlay", class: `${t}__underlay` }, null)]);
}
const an = H({ color: String, variant: { type: String, default: "elevated", validator: (e) => Ai.includes(e) } }, "variant");
function pt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ke();
  const n = v(() => {
    const { variant: i } = u(e);
    return `${t}--variant-${i}`;
  }), { colorClasses: l, colorStyles: a } = Pl(v(() => {
    const { variant: i, color: c } = u(e);
    return { [["elevated", "flat"].includes(i) ? "background" : "text"]: c };
  }));
  return { colorClasses: l, colorStyles: a, variantClasses: n };
}
const la = H({ divided: Boolean, ...Wn(), ...ie(), ...je(), ...Nn(), ...Je(), ...$e(), ...Ce(), ...an() }, "VBtnGroup"), vo = Q()({ name: "VBtnGroup", props: la(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = Ve(e), { densityClasses: a } = Qe(e), { borderClasses: i } = Rn(e), { elevationClasses: c } = jn(e), { roundedClasses: r } = Ze(e);
  Mn({ VBtn: { height: "auto", color: ne(e, "color"), density: ne(e, "density"), flat: !0, variant: ne(e, "variant") } }), le(() => d(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, l.value, i.value, a.value, c.value, r.value, e.class], style: e.style }, n));
} }), oa = H({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), aa = H({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function ia(e, t) {
  let n = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
  const l = ke("useGroupItem");
  if (!l)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const a = Le();
  Te(Symbol.for(`${t.description}:id`), a);
  const i = ve(t, null);
  if (!i) {
    if (!n)
      return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const c = ne(e, "value"), r = v(() => !(!i.disabled.value && !e.disabled));
  i.register({ id: a, value: c, disabled: r }, l), on(() => {
    i.unregister(a);
  });
  const o = v(() => i.isSelected(a)), s = v(() => o.value && [i.selectedClass.value, e.selectedClass]);
  return K(o, (m) => {
    l.emit("group:selected", { value: m });
  }), { id: a, isSelected: o, toggle: () => i.select(a, !o.value), select: (m) => i.select(a, m), selectedClass: s, value: c, disabled: r, group: i };
}
function ra(e, t) {
  let n = !1;
  const l = ze([]), a = me(e, "modelValue", [], (s) => s == null ? [] : fo(l, tn(s)), (s) => {
    const m = function(y, f) {
      const p = [];
      return f.forEach((g) => {
        const b = y.findIndex((h) => h.id === g);
        if (~b) {
          const h = y[b];
          p.push(h.value != null ? h.value : b);
        }
      }), p;
    }(l, s);
    return e.multiple ? m : m[0];
  }), i = ke("useGroup");
  function c() {
    const s = l.find((m) => !m.disabled);
    s && e.mandatory === "force" && !a.value.length && (a.value = [s.id]);
  }
  function r(s) {
    if (e.multiple && Xn('This method is not supported when using "multiple" prop'), a.value.length) {
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
  Ln(() => {
    c();
  }), on(() => {
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
        const f = a.value.slice(), p = f.findIndex((b) => b === s), g = ~p;
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
    const f = fo(m, [y]);
    return f.length ? m.findIndex((p) => p.id === f[0]) : -1;
  }(l, s) };
  return Te(t, o), o;
}
function fo(e, t) {
  const n = [];
  return t.forEach((l) => {
    const a = e.find((c) => at(l, c.value)), i = e[l];
    (a == null ? void 0 : a.value) != null ? n.push(a.id) : i != null && n.push(i.id);
  }), n;
}
const sa = Symbol.for("vuetify:v-btn-toggle"), _i = H({ ...la(), ...oa() }, "VBtnToggle");
Q()({ name: "VBtnToggle", props: _i(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: l, next: a, prev: i, select: c, selected: r } = ra(e, sa);
  return le(() => {
    const [o] = vo.filterProps(e);
    return d(vo, Z({ class: ["v-btn-toggle", e.class] }, o, { style: e.style }), { default: () => {
      var s;
      return [(s = n.default) == null ? void 0 : s.call(n, { isSelected: l, next: a, prev: i, select: c, selected: r })];
    } });
  }), { next: a, prev: i, select: c };
} });
const ce = [String, Function, Object, Array], Oi = Symbol.for("vuetify:icons"), Pt = H({ icon: { type: ce }, tag: { type: String, required: !0 } }, "icon"), yo = Q()({ name: "VComponentIcon", props: Pt(), setup(e, t) {
  let { slots: n } = t;
  return () => {
    const l = e.icon;
    return d(e.tag, null, { default: () => {
      var a;
      return [e.icon ? d(l, null, null) : (a = n.default) == null ? void 0 : a.call(n)];
    } });
  };
} }), Pi = Qn({ name: "VSvgIcon", inheritAttrs: !1, props: Pt(), setup(e, t) {
  let { attrs: n } = t;
  return () => d(e.tag, Z(n, { style: null }), { default: () => [d("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((l) => Array.isArray(l) ? d("path", { d: l[0], "fill-opacity": l[1] }, null) : d("path", { d: l }, null)) : d("path", { d: e.icon }, null)])] });
} });
Qn({ name: "VLigatureIcon", props: Pt(), setup: (e) => () => d(e.tag, null, { default: () => [e.icon] }) }), Qn({ name: "VClassIcon", props: Pt(), setup: (e) => () => d(e.tag, { class: e.icon }, null) });
const $i = ["x-small", "small", "default", "large", "x-large"], vt = H({ size: { type: [String, Number], default: "default" } }, "size");
function ft(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ke();
  return kl(() => {
    let n, l;
    return wt($i, e.size) ? n = `${t}--size-${e.size}` : e.size && (l = { width: te(e.size), height: te(e.size) }), { sizeClasses: n, sizeStyles: l };
  });
}
const Ei = H({ color: String, start: Boolean, end: Boolean, icon: ce, ...ie(), ...vt(), ...$e({ tag: "i" }), ...Ce() }, "VIcon"), de = Q()({ name: "VIcon", props: Ei(), setup(e, t) {
  let { attrs: n, slots: l } = t;
  const a = R(), { themeClasses: i } = Ve(e), { iconData: c } = ((m) => {
    const y = ve(Oi);
    if (!y)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: v(() => {
      var h;
      const f = u(m);
      if (!f)
        return { component: yo };
      let p = f;
      if (typeof p == "string" && (p = p.trim(), p.startsWith("$") && (p = (h = y.aliases) == null ? void 0 : h[p.slice(1)])), !p)
        throw new Error(`Could not find aliased icon "${f}"`);
      if (Array.isArray(p))
        return { component: Pi, icon: p };
      if (typeof p != "string")
        return { component: yo, icon: p };
      const g = Object.keys(y.sets).find((I) => typeof p == "string" && p.startsWith(`${I}:`)), b = g ? p.slice(g.length + 1) : p;
      return { component: y.sets[g ?? y.defaultSet].component, icon: b };
    }) };
  })(v(() => a.value || e.icon)), { sizeClasses: r } = ft(e), { textColorClasses: o, textColorStyles: s } = Ye(ne(e, "color"));
  return le(() => {
    var y, f;
    const m = (y = l.default) == null ? void 0 : y.call(l);
    return m && (a.value = (f = Wo(m).filter((p) => p.type === ei && p.children && typeof p.children == "string")[0]) == null ? void 0 : f.children), d(c.value.component, { tag: e.tag, icon: c.value.icon, class: ["v-icon", "notranslate", i.value, r.value, o.value, { "v-icon--clickable": !!n.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [r.value ? void 0 : { fontSize: te(e.size), height: te(e.size), width: te(e.size) }, s.value, e.style], role: n.onClick ? "button" : void 0, "aria-hidden": !n.onClick }, { default: () => [m] });
  }), {};
} });
function ua(e, t) {
  const n = R(), l = ue(!1);
  if (Bl) {
    const a = new IntersectionObserver((i) => {
      e == null || e(i, a), l.value = !!i.find((c) => c.isIntersecting);
    }, t);
    on(() => {
      a.disconnect();
    }), K(n, (i, c) => {
      c && (a.unobserve(c), l.value = !1), i && a.observe(i);
    }, { flush: "post" });
  }
  return { intersectionRef: n, isIntersecting: l };
}
const Ti = H({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...ie(), ...vt(), ...$e({ tag: "div" }), ...Ce() }, "VProgressCircular"), ca = Q()({ name: "VProgressCircular", props: Ti(), setup(e, t) {
  let { slots: n } = t;
  const l = 2 * Math.PI * 20, a = R(), { themeClasses: i } = Ve(e), { sizeClasses: c, sizeStyles: r } = ft(e), { textColorClasses: o, textColorStyles: s } = Ye(ne(e, "color")), { textColorClasses: m, textColorStyles: y } = Ye(ne(e, "bgColor")), { intersectionRef: f, isIntersecting: p } = ua(), { resizeRef: g, contentRect: b } = Al(), h = v(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), I = v(() => Number(e.width)), A = v(() => r.value ? Number(e.size) : b.value ? b.value.width : Math.max(I.value, 32)), k = v(() => 20 / (1 - I.value / A.value) * 2), M = v(() => I.value / A.value * k.value), _ = v(() => te((100 - h.value) / 100 * l));
  return Ue(() => {
    f.value = a.value, g.value = a.value;
  }), le(() => d(e.tag, { ref: a, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": p.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, i.value, c.value, o.value, e.class], style: [r.value, s.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : h.value }, { default: () => [d("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${k.value} ${k.value}` }, [d("circle", { class: ["v-progress-circular__underlay", m.value], style: y.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": M.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), d("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": M.value, "stroke-dasharray": l, "stroke-dashoffset": _.value }, null)]), n.default && d("div", { class: "v-progress-circular__content" }, [n.default({ value: h.value })])] })), {};
} }), mo = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, $l = H({ location: String }, "location");
function El(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: l } = ut();
  return { locationStyles: v(() => {
    if (!e.location)
      return {};
    const { side: i, align: c } = il(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, l.value);
    function r(s) {
      return n ? n(s) : 0;
    }
    const o = {};
    return i !== "center" && (t ? o[mo[i]] = `calc(100% - ${r(i)}px)` : o[i] = 0), c !== "center" ? t ? o[mo[c]] = `calc(100% - ${r(c)}px)` : o[c] = 0 : (i === "center" ? o.top = o.left = "50%" : o[{ top: "left", bottom: "left", left: "top", right: "top" }[i]] = "50%", o.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[i]), o;
  }) };
}
const zi = H({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...ie(), ...$l({ location: "top" }), ...Je(), ...$e(), ...Ce() }, "VProgressLinear"), Di = Q()({ name: "VProgressLinear", props: zi(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = me(e, "modelValue"), { isRtl: a, rtlClasses: i } = ut(), { themeClasses: c } = Ve(e), { locationStyles: r } = El(e), { textColorClasses: o, textColorStyles: s } = Ye(e, "color"), { backgroundColorClasses: m, backgroundColorStyles: y } = Tn(v(() => e.bgColor || e.color)), { backgroundColorClasses: f, backgroundColorStyles: p } = Tn(e, "color"), { roundedClasses: g } = Ze(e), { intersectionRef: b, isIntersecting: h } = ua(), I = v(() => parseInt(e.max, 10)), A = v(() => parseInt(e.height, 10)), k = v(() => parseFloat(e.bufferValue) / I.value * 100), M = v(() => parseFloat(l.value) / I.value * 100), _ = v(() => a.value !== e.reverse), T = v(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), V = v(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function S(C) {
    if (!b.value)
      return;
    const { left: D, right: w, width: P } = b.value.getBoundingClientRect(), O = _.value ? P - C.clientX + (w - P) : C.clientX - D;
    l.value = Math.round(O / P * I.value);
  }
  return le(() => d(e.tag, { ref: b, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && h.value, "v-progress-linear--reverse": _.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, g.value, c.value, i.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? te(A.value) : 0, "--v-progress-linear-height": te(A.value), ...r.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : M.value, onClick: e.clickable && S }, { default: () => [e.stream && d("div", { key: "stream", class: ["v-progress-linear__stream", o.value], style: { ...s.value, [_.value ? "left" : "right"]: te(-A.value), borderTop: `${te(A.value / 2)} dotted`, opacity: V.value, top: `calc(50% - ${te(A.value / 4)})`, width: te(100 - k.value, "%"), "--v-progress-linear-stream-to": te(A.value * (_.value ? 1 : -1)) } }, null), d("div", { class: ["v-progress-linear__background", m.value], style: [y.value, { opacity: V.value, width: te(e.stream ? k.value : 100, "%") }] }, null), d(yn, { name: T.value }, { default: () => [e.indeterminate ? d("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((C) => d("div", { key: C, class: ["v-progress-linear__indeterminate", C, f.value], style: p.value }, null))]) : d("div", { class: ["v-progress-linear__determinate", f.value], style: [p.value, { width: te(M.value, "%") }] }, null)] }), n.default && d("div", { class: "v-progress-linear__content" }, [n.default({ value: M.value, buffer: k.value })])] })), {};
} }), Tl = H({ loading: [Boolean, String] }, "loader");
function jt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ke();
  return { loaderClasses: v(() => ({ [`${t}--loading`]: e.loading })) };
}
function zl(e, t) {
  var l;
  let { slots: n } = t;
  return d("div", { class: `${e.name}__loader` }, [((l = n.default) == null ? void 0 : l.call(n, { color: e.color, isActive: e.active })) || d(Di, { active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const Li = ["static", "relative", "fixed", "absolute", "sticky"], da = H({ position: { type: String, validator: (e) => Li.includes(e) } }, "position");
function pa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ke();
  return { positionClasses: v(() => e.position ? `${t}--${e.position}` : void 0) };
}
function Gt(e, t) {
  const n = ni("RouterLink"), l = v(() => !(!e.href && !e.to)), a = v(() => (l == null ? void 0 : l.value) || Hl(t, "click") || Hl(e, "click"));
  if (typeof n == "string")
    return { isLink: l, isClickable: a, href: ne(e, "href") };
  const i = e.to ? n.useLink(e) : void 0;
  return { isLink: l, isClickable: a, route: i == null ? void 0 : i.route, navigate: i == null ? void 0 : i.navigate, isActive: i && v(() => {
    var c, r;
    return e.exact ? (c = i.isExactActive) == null ? void 0 : c.value : (r = i.isActive) == null ? void 0 : r.value;
  }), href: v(() => e.to ? i == null ? void 0 : i.route.value.href : e.href) };
}
const qt = H({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let Jt = !1;
const rl = Symbol("rippleStop"), Mi = 80;
function go(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function sl(e) {
  return e.constructor.name === "TouchEvent";
}
function va(e) {
  return e.constructor.name === "KeyboardEvent";
}
const $t = { show(e, t) {
  var p;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((p = t == null ? void 0 : t._ripple) != null && p.enabled))
    return;
  const l = document.createElement("span"), a = document.createElement("span");
  l.appendChild(a), l.className = "v-ripple__container", n.class && (l.className += ` ${n.class}`);
  const { radius: i, scale: c, x: r, y: o, centerX: s, centerY: m } = function(g, b) {
    var V;
    let h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, I = 0, A = 0;
    if (!va(g)) {
      const S = b.getBoundingClientRect(), C = sl(g) ? g.touches[g.touches.length - 1] : g;
      I = C.clientX - S.left, A = C.clientY - S.top;
    }
    let k = 0, M = 0.3;
    (V = b._ripple) != null && V.circle ? (M = 0.15, k = b.clientWidth / 2, k = h.center ? k : k + Math.sqrt((I - k) ** 2 + (A - k) ** 2) / 4) : k = Math.sqrt(b.clientWidth ** 2 + b.clientHeight ** 2) / 2;
    const _ = (b.clientWidth - 2 * k) / 2 + "px", T = (b.clientHeight - 2 * k) / 2 + "px";
    return { radius: k, scale: M, x: h.center ? _ : I - k + "px", y: h.center ? T : A - k + "px", centerX: _, centerY: T };
  }(e, t, n), y = 2 * i + "px";
  a.className = "v-ripple__animation", a.style.width = y, a.style.height = y, t.appendChild(l);
  const f = window.getComputedStyle(t);
  f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), a.classList.add("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--visible"), go(a, `translate(${r}, ${o}) scale3d(${c},${c},${c})`), a.dataset.activated = String(performance.now()), setTimeout(() => {
    a.classList.remove("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--in"), go(a, `translate(${s}, ${m}) scale3d(1,1,1)`);
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
function fa(e) {
  return e === void 0 || !!e;
}
function et(e) {
  const t = {}, n = e.currentTarget;
  if (n != null && n._ripple && !n._ripple.touched && !e[rl]) {
    if (e[rl] = !0, sl(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch)
      return;
    if (t.center = n._ripple.centered || va(e), n._ripple.class && (t.class = n._ripple.class), sl(e)) {
      if (n._ripple.showTimerCommit)
        return;
      n._ripple.showTimerCommit = () => {
        $t.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var l;
        (l = n == null ? void 0 : n._ripple) != null && l.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, Mi);
    } else
      $t.show(e, n, t);
  }
}
function ho(e) {
  e[rl] = !0;
}
function Pe(e) {
  const t = e.currentTarget;
  if (t != null && t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit)
      return t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, void (t._ripple.showTimer = window.setTimeout(() => {
        Pe(e);
      }));
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), $t.hide(t);
  }
}
function ya(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let nt = !1;
function ma(e) {
  nt || e.keyCode !== jl.enter && e.keyCode !== jl.space || (nt = !0, et(e));
}
function ga(e) {
  nt = !1, Pe(e);
}
function ha(e) {
  nt && (nt = !1, Pe(e));
}
function bo(e, t, n) {
  const { value: l, modifiers: a } = t, i = fa(l);
  if (i || $t.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = a.center, e._ripple.circle = a.circle, tl(l) && l.class && (e._ripple.class = l.class), i && !n) {
    if (a.stop)
      return e.addEventListener("touchstart", ho, { passive: !0 }), void e.addEventListener("mousedown", ho);
    e.addEventListener("touchstart", et, { passive: !0 }), e.addEventListener("touchend", Pe, { passive: !0 }), e.addEventListener("touchmove", ya, { passive: !0 }), e.addEventListener("touchcancel", Pe), e.addEventListener("mousedown", et), e.addEventListener("mouseup", Pe), e.addEventListener("mouseleave", Pe), e.addEventListener("keydown", ma), e.addEventListener("keyup", ga), e.addEventListener("blur", ha), e.addEventListener("dragstart", Pe, { passive: !0 });
  } else
    !i && n && ba(e);
}
function ba(e) {
  e.removeEventListener("mousedown", et), e.removeEventListener("touchstart", et), e.removeEventListener("touchend", Pe), e.removeEventListener("touchmove", ya), e.removeEventListener("touchcancel", Pe), e.removeEventListener("mouseup", Pe), e.removeEventListener("mouseleave", Pe), e.removeEventListener("keydown", ma), e.removeEventListener("keyup", ga), e.removeEventListener("dragstart", Pe), e.removeEventListener("blur", ha);
}
const yt = { mounted: function(e, t) {
  bo(e, t, !1);
}, unmounted: function(e) {
  delete e._ripple, ba(e);
}, updated: function(e, t) {
  t.value !== t.oldValue && bo(e, t, fa(t.oldValue));
} }, Wi = H({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: sa }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: ce, appendIcon: ce, block: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...Wn(), ...ie(), ...je(), ...gn(), ...Nn(), ...aa(), ...Tl(), ...$l(), ...da(), ...Je(), ...qt(), ...vt(), ...$e({ tag: "button" }), ...Ce(), ...an({ variant: "elevated" }) }, "VBtn"), ul = Q()({ name: "VBtn", directives: { Ripple: yt }, props: Wi(), emits: { "group:selected": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { themeClasses: a } = Ve(e), { borderClasses: i } = Rn(e), { colorClasses: c, colorStyles: r, variantClasses: o } = pt(e), { densityClasses: s } = Qe(e), { dimensionStyles: m } = hn(e), { elevationClasses: y } = jn(e), { loaderClasses: f } = jt(e), { locationStyles: p } = El(e), { positionClasses: g } = pa(e), { roundedClasses: b } = Ze(e), { sizeClasses: h, sizeStyles: I } = ft(e), A = ia(e, e.symbol, !1), k = Gt(e, n), M = v(() => {
    var C;
    return e.active !== void 0 ? e.active : k.isLink.value ? (C = k.isActive) == null ? void 0 : C.value : A == null ? void 0 : A.isSelected.value;
  }), _ = v(() => (A == null ? void 0 : A.disabled.value) || e.disabled), T = v(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), V = v(() => {
    if (e.value !== void 0)
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function S(C) {
    var D;
    _.value || k.isLink.value && (C.metaKey || C.ctrlKey || C.shiftKey || C.button !== 0 || n.target === "_blank") || ((D = k.navigate) == null || D.call(k, C), A == null || A.toggle());
  }
  return function(C, D) {
    K(() => {
      var w;
      return (w = C.isActive) == null ? void 0 : w.value;
    }, (w) => {
      C.isLink.value && w && D && xe(() => {
        D(!0);
      });
    }, { immediate: !0 });
  }(k, A == null ? void 0 : A.select), le(() => {
    var j, q;
    const C = k.isLink.value ? "a" : e.tag, D = !(!e.prependIcon && !l.prepend), w = !(!e.appendIcon && !l.append), P = !(!e.icon || e.icon === !0), O = (A == null ? void 0 : A.isSelected.value) && (!k.isLink.value || ((j = k.isActive) == null ? void 0 : j.value)) || !A || ((q = k.isActive) == null ? void 0 : q.value);
    return Be(d(C, { type: C === "a" ? void 0 : "button", class: ["v-btn", A == null ? void 0 : A.selectedClass.value, { "v-btn--active": M.value, "v-btn--block": e.block, "v-btn--disabled": _.value, "v-btn--elevated": T.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--stacked": e.stacked }, a.value, i.value, O ? c.value : void 0, s.value, y.value, f.value, g.value, b.value, h.value, o.value, e.class], style: [O ? r.value : void 0, m.value, p.value, I.value, e.style], disabled: _.value || void 0, href: k.href.value, onClick: S, value: V.value }, { default: () => {
      var x;
      return [dt(!0, "v-btn"), !e.icon && D && d("span", { key: "prepend", class: "v-btn__prepend" }, [l.prepend ? d(Se, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, l.prepend) : d(de, { key: "prepend-icon", icon: e.prependIcon }, null)]), d("span", { class: "v-btn__content", "data-no-activator": "" }, [!l.default && P ? d(de, { key: "content-icon", icon: e.icon }, null) : d(Se, { key: "content-defaults", disabled: !P, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var E;
        return [((E = l.default) == null ? void 0 : E.call(l)) ?? e.text];
      } })]), !e.icon && w && d("span", { key: "append", class: "v-btn__append" }, [l.append ? d(Se, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, l.append) : d(de, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && d("span", { key: "loader", class: "v-btn__loader" }, [((x = l.loader) == null ? void 0 : x.call(l)) ?? d(ca, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[Xe("ripple"), !_.value && e.ripple, null]]);
  }), {};
} }), Ri = H({ text: String, clickable: Boolean, ...ie(), ...Ce() }, "VLabel"), Ca = Q()({ name: "VLabel", props: Ri(), setup(e, t) {
  let { slots: n } = t;
  return le(() => {
    var l;
    return d("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (l = n.default) == null ? void 0 : l.call(n)]);
  }), {};
} }), Ia = Symbol.for("vuetify:selection-control-group"), Sa = H({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: ce, trueIcon: ce, ripple: { type: Boolean, default: !0 }, multiple: { type: Boolean, default: null }, name: String, readonly: Boolean, modelValue: null, type: String, valueComparator: { type: Function, default: at }, ...ie(), ...je(), ...Ce() }, "SelectionControlGroup"), Ni = H({ ...Sa({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup");
Q()({ name: "VSelectionControlGroup", props: Ni(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = me(e, "modelValue"), a = Le(), i = v(() => e.id || `v-selection-control-group-${a}`), c = v(() => e.name || i.value), r = /* @__PURE__ */ new Set();
  return Te(Ia, { modelValue: l, forceUpdate: () => {
    r.forEach((o) => o());
  }, onForceUpdate: (o) => {
    r.add(o), we(() => {
      r.delete(o);
    });
  } }), Mn({ [e.defaultsTarget]: { color: ne(e, "color"), disabled: ne(e, "disabled"), density: ne(e, "density"), error: ne(e, "error"), inline: ne(e, "inline"), modelValue: l, multiple: v(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)), name: c, falseIcon: ne(e, "falseIcon"), trueIcon: ne(e, "trueIcon"), readonly: ne(e, "readonly"), ripple: ne(e, "ripple"), type: ne(e, "type"), valueComparator: ne(e, "valueComparator") } }), le(() => {
    var o;
    return d("div", { class: ["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class], style: e.style, role: e.type === "radio" ? "radiogroup" : void 0 }, [(o = n.default) == null ? void 0 : o.call(n)]);
  }), {};
} });
const Dl = H({ label: String, trueValue: null, falseValue: null, value: null, ...ie(), ...Sa() }, "VSelectionControl"), Et = Q()({ name: "VSelectionControl", directives: { Ripple: yt }, inheritAttrs: !1, props: Dl(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { group: a, densityClasses: i, icon: c, model: r, textColorClasses: o, textColorStyles: s, backgroundColorClasses: m, backgroundColorStyles: y, trueValue: f } = function(_) {
    const T = ve(Ia, void 0), { densityClasses: V } = Qe(_), S = me(_, "modelValue"), C = v(() => _.trueValue !== void 0 ? _.trueValue : _.value === void 0 || _.value), D = v(() => _.falseValue !== void 0 && _.falseValue), w = v(() => !!_.multiple || _.multiple == null && Array.isArray(S.value)), P = v({ get() {
      const L = T ? T.modelValue.value : S.value;
      return w.value ? L.some((N) => _.valueComparator(N, C.value)) : _.valueComparator(L, C.value);
    }, set(L) {
      if (_.readonly)
        return;
      const N = L ? C.value : D.value;
      let G = N;
      w.value && (G = L ? [...tn(S.value), N] : tn(S.value).filter(($) => !_.valueComparator($, C.value))), T ? T.modelValue.value = G : S.value = G;
    } }), { textColorClasses: O, textColorStyles: j } = Ye(v(() => !P.value || _.error || _.disabled ? void 0 : _.color)), { backgroundColorClasses: q, backgroundColorStyles: x } = Tn(v(() => !P.value || _.error || _.disabled ? void 0 : _.color)), E = v(() => P.value ? _.trueIcon : _.falseIcon);
    return { group: T, densityClasses: V, trueValue: C, falseValue: D, model: P, textColorClasses: O, textColorStyles: j, backgroundColorClasses: q, backgroundColorStyles: x, icon: E };
  }(e), p = Le(), g = v(() => e.id || `input-${p}`), b = ue(!1), h = ue(!1), I = R();
  function A(_) {
    b.value = !0, Vt(_.target, ":focus-visible") !== !1 && (h.value = !0);
  }
  function k() {
    b.value = !1, h.value = !1;
  }
  function M(_) {
    e.readonly && a && xe(() => a.forceUpdate()), r.value = _.target.checked;
  }
  return a == null || a.onForceUpdate(() => {
    I.value && (I.value.checked = r.value);
  }), le(() => {
    var C, D;
    const _ = l.label ? l.label({ label: e.label, props: { for: g.value } }) : e.label, [T, V] = rt(n), S = d("input", Z({ ref: I, checked: r.value, disabled: !(!e.readonly && !e.disabled), id: g.value, onBlur: k, onFocus: A, onInput: M, "aria-disabled": !(!e.readonly && !e.disabled), type: e.type, value: f.value, name: e.name, "aria-checked": e.type === "checkbox" ? r.value : void 0 }, V), null);
    return d("div", Z({ class: ["v-selection-control", { "v-selection-control--dirty": r.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": b.value, "v-selection-control--focus-visible": h.value, "v-selection-control--inline": e.inline }, i.value, e.class] }, T, { style: e.style }), [d("div", { class: ["v-selection-control__wrapper", o.value], style: s.value }, [(C = l.default) == null ? void 0 : C.call(l, { backgroundColorClasses: m, backgroundColorStyles: y }), Be(d("div", { class: ["v-selection-control__input"] }, [((D = l.input) == null ? void 0 : D.call(l, { model: r, textColorClasses: o, textColorStyles: s, backgroundColorClasses: m, backgroundColorStyles: y, inputNode: S, icon: c.value, props: { onFocus: A, onBlur: k, id: g.value } })) ?? d(fe, null, [c.value && d(de, { key: "icon", icon: c.value }, null), S])]), [[Xe("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), _ && d(Ca, { for: g.value, clickable: !0, onClick: (w) => w.stopPropagation() }, { default: () => [_] })]);
  }), { isFocused: b, input: I };
} }), xa = H({ indeterminate: Boolean, indeterminateIcon: { type: ce, default: "$checkboxIndeterminate" }, ...Dl({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), cl = Q()({ name: "VCheckboxBtn", props: xa(), emits: { "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = me(e, "indeterminate"), a = me(e, "modelValue");
  function i(o) {
    l.value && (l.value = !1);
  }
  const c = v(() => l.value ? e.indeterminateIcon : e.falseIcon), r = v(() => l.value ? e.indeterminateIcon : e.trueIcon);
  return le(() => {
    const o = it(Et.filterProps(e)[0], ["modelValue"]);
    return d(Et, Z(o, { modelValue: a.value, "onUpdate:modelValue": [(s) => a.value = s, i], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: c.value, trueIcon: r.value, "aria-checked": l.value ? "mixed" : void 0 }), n);
  }), {};
} });
function Ba(e) {
  const { t } = _l();
  return { InputIcon: function(n) {
    let { name: l } = n;
    const a = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[l], i = e[`onClick:${l}`], c = i && a ? t(`$vuetify.input.${a}`, e.label ?? "") : void 0;
    return d(de, { icon: e[`${l}Icon`], "aria-label": c, onClick: i }, null);
  } };
}
const ji = H({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...ie(), ...ct({ transition: { component: Qo, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), Gi = Q()({ name: "VMessages", props: ji(), setup(e, t) {
  let { slots: n } = t;
  const l = v(() => tn(e.messages)), { textColorClasses: a, textColorStyles: i } = Ye(v(() => e.color));
  return le(() => d(en, { transition: e.transition, tag: "div", class: ["v-messages", a.value, e.class], style: [i.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && l.value.map((c, r) => d("div", { class: "v-messages__message", key: `${r}-${l.value}` }, [n.message ? n.message({ message: c }) : c]))] })), {};
} }), ka = H({ focused: Boolean, "onUpdate:focused": Ne() }, "focus");
function mt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ke();
  const n = me(e, "focused");
  return { focusClasses: v(() => ({ [`${t}--focused`]: n.value })), isFocused: n, focus: function() {
    n.value = !0;
  }, blur: function() {
    n.value = !1;
  } };
}
const qi = Symbol.for("vuetify:form");
function wa() {
  return ve(qi, null);
}
const Hi = H({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...ka() }, "validation"), gt = H({ id: String, appendIcon: ce, centerAffix: { type: Boolean, default: !0 }, prependIcon: ce, hideDetails: [Boolean, String], hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Ne(), "onClick:append": Ne(), ...ie(), ...je(), ...Hi() }, "VInput"), ln = Q()({ name: "VInput", props: { ...gt() }, emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l, emit: a } = t;
  const { densityClasses: i } = Qe(e), { rtlClasses: c } = ut(), { InputIcon: r } = Ba(e), o = Le(), s = v(() => e.id || `input-${o}`), m = v(() => `${s.value}-messages`), { errorMessages: y, isDirty: f, isDisabled: p, isReadonly: g, isPristine: b, isValid: h, isValidating: I, reset: A, resetValidation: k, validate: M, validationClasses: _ } = function(S) {
    let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ke(), D = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Le();
    const w = me(S, "modelValue"), P = v(() => S.validationValue === void 0 ? w.value : S.validationValue), O = wa(), j = R([]), q = ue(!0), x = v(() => !(!tn(w.value === "" ? null : w.value).length && !tn(P.value === "" ? null : P.value).length)), E = v(() => !!(S.disabled ?? (O == null ? void 0 : O.isDisabled.value))), L = v(() => !!(S.readonly ?? (O == null ? void 0 : O.isReadonly.value))), N = v(() => {
      var Y;
      return (Y = S.errorMessages) != null && Y.length ? tn(S.errorMessages).slice(0, Math.max(0, +S.maxErrors)) : j.value;
    }), G = v(() => {
      let Y = (S.validateOn ?? (O == null ? void 0 : O.validateOn.value)) || "input";
      Y === "lazy" && (Y = "input lazy");
      const re = new Set((Y == null ? void 0 : Y.split(" ")) ?? []);
      return { blur: re.has("blur") || re.has("input"), input: re.has("input"), submit: re.has("submit"), lazy: re.has("lazy") };
    }), $ = v(() => {
      var Y;
      return !S.error && !((Y = S.errorMessages) != null && Y.length) && (!S.rules.length || (q.value ? !j.value.length && !G.value.lazy || null : !j.value.length));
    }), B = ue(!1), W = v(() => ({ [`${C}--error`]: $.value === !1, [`${C}--dirty`]: x.value, [`${C}--disabled`]: E.value, [`${C}--readonly`]: L.value })), F = v(() => S.name ?? u(D));
    function z() {
      w.value = null, xe(U);
    }
    function U() {
      q.value = !0, G.value.lazy ? j.value = [] : J(!0);
    }
    async function J() {
      let Y = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      const re = [];
      B.value = !0;
      for (const Ae of S.rules) {
        if (re.length >= +(S.maxErrors ?? 1))
          break;
        const Gn = typeof Ae == "function" ? Ae : () => Ae, We = await Gn(P.value);
        We !== !0 && (We === !1 || typeof We == "string" ? re.push(We || "") : console.warn(`${We} is not a valid value. Rule functions must return boolean true or a string.`));
      }
      return j.value = re, B.value = !1, q.value = Y, j.value;
    }
    return To(() => {
      O == null || O.register({ id: F.value, validate: J, reset: z, resetValidation: U });
    }), on(() => {
      O == null || O.unregister(F.value);
    }), Ln(async () => {
      G.value.lazy || await J(!0), O == null || O.update(F.value, $.value, N.value);
    }), pn(() => G.value.input, () => {
      K(P, () => {
        if (P.value != null)
          J();
        else if (S.focused) {
          const Y = K(() => S.focused, (re) => {
            re || J(), Y();
          });
        }
      });
    }), pn(() => G.value.blur, () => {
      K(() => S.focused, (Y) => {
        Y || J();
      });
    }), K($, () => {
      O == null || O.update(F.value, $.value, N.value);
    }), { errorMessages: N, isDirty: x, isDisabled: E, isReadonly: L, isPristine: q, isValid: $, isValidating: B, reset: z, resetValidation: U, validate: J, validationClasses: W };
  }(e, "v-input", s), T = v(() => ({ id: s, messagesId: m, isDirty: f, isDisabled: p, isReadonly: g, isPristine: b, isValid: h, isValidating: I, reset: A, resetValidation: k, validate: M })), V = v(() => {
    var S;
    return (S = e.errorMessages) != null && S.length || !b.value && y.value.length ? y.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return le(() => {
    var P, O, j, q;
    const S = !(!l.prepend && !e.prependIcon), C = !(!l.append && !e.appendIcon), D = V.value.length > 0, w = !e.hideDetails || e.hideDetails === "auto" && (D || !!l.details);
    return d("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix }, i.value, c.value, _.value, e.class], style: e.style }, [S && d("div", { key: "prepend", class: "v-input__prepend" }, [(P = l.prepend) == null ? void 0 : P.call(l, T.value), e.prependIcon && d(r, { key: "prepend-icon", name: "prepend" }, null)]), l.default && d("div", { class: "v-input__control" }, [(O = l.default) == null ? void 0 : O.call(l, T.value)]), C && d("div", { key: "append", class: "v-input__append" }, [e.appendIcon && d(r, { key: "append-icon", name: "append" }, null), (j = l.append) == null ? void 0 : j.call(l, T.value)]), w && d("div", { class: "v-input__details" }, [d(Gi, { id: m.value, active: D, messages: V.value }, { message: l.message }), (q = l.details) == null ? void 0 : q.call(l, T.value)])]);
  }), { reset: A, resetValidation: k, validate: M };
} }), Ui = H({ ...gt(), ...it(xa(), ["inline"]) }, "VCheckbox"), Yi = Q()({ name: "VCheckbox", inheritAttrs: !1, props: Ui(), emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const a = me(e, "modelValue"), { isFocused: i, focus: c, blur: r } = mt(e), o = Le(), s = v(() => e.id || `checkbox-${o}`);
  return le(() => {
    const [m, y] = rt(n), [f, p] = ln.filterProps(e), [g, b] = cl.filterProps(e);
    return d(ln, Z({ class: ["v-checkbox", e.class] }, m, f, { modelValue: a.value, "onUpdate:modelValue": (h) => a.value = h, id: s.value, focused: i.value, style: e.style }), { ...l, default: (h) => {
      let { id: I, messagesId: A, isDisabled: k, isReadonly: M } = h;
      return d(cl, Z(g, { id: I.value, "aria-describedby": A.value, disabled: k.value, readonly: M.value }, y, { modelValue: a.value, "onUpdate:modelValue": (_) => a.value = _, onFocus: c, onBlur: r }), l);
    } });
  }), {};
} }), Xi = H({ start: Boolean, end: Boolean, icon: ce, image: String, ...ie(), ...je(), ...Je(), ...vt(), ...$e(), ...Ce(), ...an({ variant: "flat" }) }, "VAvatar"), zn = Q()({ name: "VAvatar", props: Xi(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = Ve(e), { colorClasses: a, colorStyles: i, variantClasses: c } = pt(e), { densityClasses: r } = Qe(e), { roundedClasses: o } = Ze(e), { sizeClasses: s, sizeStyles: m } = ft(e);
  return le(() => d(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, l.value, a.value, r.value, o.value, s.value, c.value, e.class], style: [i.value, m.value, e.style] }, { default: () => {
    var y;
    return [e.image ? d(ta, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? d(de, { key: "icon", icon: e.icon }, null) : (y = n.default) == null ? void 0 : y.call(n), dt(!1, "v-avatar")];
  } })), {};
} }), Fa = Symbol.for("vuetify:v-chip-group"), Ki = H({ column: Boolean, filter: Boolean, valueComparator: { type: Function, default: at }, ...ie(), ...oa({ selectedClass: "v-chip--selected" }), ...$e(), ...Ce(), ...an({ variant: "tonal" }) }, "VChipGroup");
Q()({ name: "VChipGroup", props: Ki(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = Ve(e), { isSelected: a, select: i, next: c, prev: r, selected: o } = ra(e, Fa);
  return Mn({ VChip: { color: ne(e, "color"), disabled: ne(e, "disabled"), filter: ne(e, "filter"), variant: ne(e, "variant") } }), le(() => d(e.tag, { class: ["v-chip-group", { "v-chip-group--column": e.column }, l.value, e.class], style: e.style }, { default: () => {
    var s;
    return [(s = n.default) == null ? void 0 : s.call(n, { isSelected: a, select: i, next: c, prev: r, selected: o.value })];
  } })), {};
} });
const Ji = H({ activeClass: String, appendAvatar: String, appendIcon: ce, closable: Boolean, closeIcon: { type: ce, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: String, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: ce, ripple: { type: [Boolean, Object], default: !0 }, text: String, modelValue: { type: Boolean, default: !0 }, onClick: Ne(), onClickOnce: Ne(), ...Wn(), ...ie(), ...je(), ...Nn(), ...aa(), ...Je(), ...qt(), ...vt(), ...$e({ tag: "span" }), ...Ce(), ...an({ variant: "tonal" }) }, "VChip"), Zi = Q()({ name: "VChip", directives: { Ripple: yt }, props: Ji(), emits: { "click:close": (e) => !0, "update:modelValue": (e) => !0, "group:selected": (e) => !0, click: (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: a } = t;
  const { t: i } = _l(), { borderClasses: c } = Rn(e), { colorClasses: r, colorStyles: o, variantClasses: s } = pt(e), { densityClasses: m } = Qe(e), { elevationClasses: y } = jn(e), { roundedClasses: f } = Ze(e), { sizeClasses: p } = ft(e), { themeClasses: g } = Ve(e), b = me(e, "modelValue"), h = ia(e, Fa, !1), I = Gt(e, n), A = v(() => e.link !== !1 && I.isLink.value), k = v(() => !e.disabled && e.link !== !1 && (!!h || e.link || I.isClickable.value)), M = v(() => ({ "aria-label": i(e.closeLabel), onClick(V) {
    V.stopPropagation(), b.value = !1, l("click:close", V);
  } }));
  function _(V) {
    var S;
    l("click", V), k.value && ((S = I.navigate) == null || S.call(I, V), h == null || h.toggle());
  }
  function T(V) {
    V.key !== "Enter" && V.key !== " " || (V.preventDefault(), _(V));
  }
  return () => {
    const V = I.isLink.value ? "a" : e.tag, S = !(!e.appendIcon && !e.appendAvatar), C = !(!S && !a.append), D = !(!a.close && !e.closable), w = !(!a.filter && !e.filter) && h, P = !(!e.prependIcon && !e.prependAvatar), O = !(!P && !a.prepend), j = !h || h.isSelected.value;
    return b.value && Be(d(V, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": k.value, "v-chip--filter": w, "v-chip--pill": e.pill }, g.value, c.value, j ? r.value : void 0, m.value, y.value, f.value, p.value, s.value, h == null ? void 0 : h.selectedClass.value, e.class], style: [j ? o.value : void 0, e.style], disabled: e.disabled || void 0, draggable: e.draggable, href: I.href.value, tabindex: k.value ? 0 : void 0, onClick: _, onKeydown: k.value && !A.value && T }, { default: () => {
      var q;
      return [dt(k.value, "v-chip"), w && d(ea, { key: "filter" }, { default: () => [Be(d("div", { class: "v-chip__filter" }, [a.filter ? d(Se, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, a.filter) : d(de, { key: "filter-icon", icon: e.filterIcon }, null)]), [[Dn, h.isSelected.value]])] }), O && d("div", { key: "prepend", class: "v-chip__prepend" }, [a.prepend ? d(Se, { key: "prepend-defaults", disabled: !P, defaults: { VAvatar: { image: e.prependAvatar, start: !0 }, VIcon: { icon: e.prependIcon, start: !0 } } }, a.prepend) : d(fe, null, [e.prependIcon && d(de, { key: "prepend-icon", icon: e.prependIcon, start: !0 }, null), e.prependAvatar && d(zn, { key: "prepend-avatar", image: e.prependAvatar, start: !0 }, null)])]), d("div", { class: "v-chip__content" }, [((q = a.default) == null ? void 0 : q.call(a, { isSelected: h == null ? void 0 : h.isSelected.value, selectedClass: h == null ? void 0 : h.selectedClass.value, select: h == null ? void 0 : h.select, toggle: h == null ? void 0 : h.toggle, value: h == null ? void 0 : h.value.value, disabled: e.disabled })) ?? e.text]), C && d("div", { key: "append", class: "v-chip__append" }, [a.append ? d(Se, { key: "append-defaults", disabled: !S, defaults: { VAvatar: { end: !0, image: e.appendAvatar }, VIcon: { end: !0, icon: e.appendIcon } } }, a.append) : d(fe, null, [e.appendIcon && d(de, { key: "append-icon", end: !0, icon: e.appendIcon }, null), e.appendAvatar && d(zn, { key: "append-avatar", end: !0, image: e.appendAvatar }, null)])]), D && d("div", Z({ key: "close", class: "v-chip__close" }, M.value), [a.close ? d(Se, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, a.close) : d(de, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[Xe("ripple"), k.value && e.ripple, null]]);
  };
} }), dl = Symbol.for("vuetify:list");
function Va() {
  const e = ve(dl, { hasPrepend: ue(!1), updateHasPrepend: () => null }), t = { hasPrepend: ue(!1), updateHasPrepend: (n) => {
    n && (t.hasPrepend.value = n);
  } };
  return Te(dl, t), e;
}
function Aa() {
  return ve(dl, null);
}
const Qi = { open: (e) => {
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
}, select: () => null }, _a = { open: (e) => {
  let { id: t, value: n, opened: l, parents: a } = e;
  if (n) {
    let i = a.get(t);
    for (l.add(t); i != null && i !== t; )
      l.add(i), i = a.get(i);
    return l;
  }
  return l.delete(t), l;
}, select: () => null }, er = { open: _a.open, select: (e) => {
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
    if (l = nn(l), e && !a) {
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
}, Co = (e) => {
  const t = pl(e);
  return { select: (n) => {
    let { selected: l, id: a, ...i } = n;
    a = nn(a);
    const c = l.has(a) ? /* @__PURE__ */ new Map([[a, l.get(a)]]) : /* @__PURE__ */ new Map();
    return t.select({ ...i, id: a, selected: c });
  }, in: (n, l, a) => {
    let i = /* @__PURE__ */ new Map();
    return n != null && n.length && (i = t.in(n.slice(0, 1), l, a)), i;
  }, out: (n, l, a) => t.out(n, l, a) };
}, tt = Symbol.for("vuetify:nested"), Oa = { id: ue(), root: { register: () => null, unregister: () => null, parents: R(/* @__PURE__ */ new Map()), children: R(/* @__PURE__ */ new Map()), open: () => null, openOnSelect: () => null, select: () => null, opened: R(/* @__PURE__ */ new Set()), selected: R(/* @__PURE__ */ new Map()), selectedValues: R([]) } }, nr = H({ selectStrategy: [String, Function], openStrategy: [String, Object], opened: Array, selected: Array, mandatory: Boolean }, "nested"), tr = (e) => {
  let t = !1;
  const n = R(/* @__PURE__ */ new Map()), l = R(/* @__PURE__ */ new Map()), a = me(e, "opened", e.opened, (y) => new Set(y), (y) => [...y.values()]), i = v(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return ((y) => {
          const f = Co(y);
          return { select: (p) => {
            let { id: g, selected: b, children: h, ...I } = p;
            return g = nn(g), h.has(g) ? b : f.select({ id: g, selected: b, children: h, ...I });
          }, in: f.in, out: f.out };
        })(e.mandatory);
      case "leaf":
        return ((y) => {
          const f = pl(y);
          return { select: (p) => {
            let { id: g, selected: b, children: h, ...I } = p;
            return g = nn(g), h.has(g) ? b : f.select({ id: g, selected: b, children: h, ...I });
          }, in: f.in, out: f.out };
        })(e.mandatory);
      case "independent":
        return pl(e.mandatory);
      case "single-independent":
        return Co(e.mandatory);
      default:
        return ((y) => {
          const f = { select: (p) => {
            let { id: g, value: b, selected: h, children: I, parents: A } = p;
            g = nn(g);
            const k = new Map(h), M = [g];
            for (; M.length; ) {
              const T = M.shift();
              h.set(T, b ? "on" : "off"), I.has(T) && M.push(...I.get(T));
            }
            let _ = A.get(g);
            for (; _; ) {
              const T = I.get(_), V = T.every((C) => h.get(C) === "on"), S = T.every((C) => !h.has(C) || h.get(C) === "off");
              h.set(_, V ? "on" : S ? "off" : "indeterminate"), _ = A.get(_);
            }
            return y && !b && Array.from(h.entries()).reduce((V, S) => {
              let [C, D] = S;
              return D === "on" ? [...V, C] : V;
            }, []).length === 0 ? k : h;
          }, in: (p, g, b) => {
            let h = /* @__PURE__ */ new Map();
            for (const I of p || [])
              h = f.select({ id: I, value: !0, selected: new Map(h), children: g, parents: b });
            return h;
          }, out: (p, g) => {
            const b = [];
            for (const [h, I] of p.entries())
              I !== "on" || g.has(h) || b.push(h);
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
        return er;
      case "single":
        return Qi;
      default:
        return _a;
    }
  }), r = me(e, "selected", e.selected, (y) => i.value.in(y, n.value, l.value), (y) => i.value.out(y, n.value, l.value));
  function o(y) {
    const f = [];
    let p = y;
    for (; p != null; )
      f.unshift(p), p = l.value.get(p);
    return f;
  }
  on(() => {
    t = !0;
  });
  const s = ke("nested"), m = { id: ue(), root: { opened: a, selected: r, selectedValues: v(() => {
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
  return Te(tt, m), m.root;
}, Pa = (e, t) => {
  const n = ve(tt, Oa), l = Symbol(Le()), a = v(() => e.value !== void 0 ? e.value : l), i = { ...n, id: a, open: (c, r) => n.root.open(a.value, c, r), openOnSelect: (c, r) => n.root.openOnSelect(a.value, c, r), isOpen: v(() => n.root.opened.value.has(a.value)), parent: v(() => n.root.parents.value.get(a.value)), select: (c, r) => n.root.select(a.value, c, r), isSelected: v(() => n.root.selected.value.get(nn(a.value)) === "on"), isIndeterminate: v(() => n.root.selected.value.get(a.value) === "indeterminate"), isLeaf: v(() => !n.root.children.value.get(a.value)), isGroupActivator: n.isGroupActivator };
  return !n.isGroupActivator && n.root.register(a.value, n.id.value, t), on(() => {
    !n.isGroupActivator && n.root.unregister(a.value);
  }), t && Te(tt, i), i;
}, lr = Qn({ name: "VListGroupActivator", setup(e, t) {
  let { slots: n } = t;
  return (() => {
    const l = ve(tt, Oa);
    Te(tt, { ...l, isGroupActivator: !0 });
  })(), () => {
    var l;
    return (l = n.default) == null ? void 0 : l.call(n);
  };
} }), or = H({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: ce, default: "$collapse" }, expandIcon: { type: ce, default: "$expand" }, prependIcon: ce, appendIcon: ce, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...ie(), ...$e() }, "VListGroup"), Io = Q()({ name: "VListGroup", props: or(), setup(e, t) {
  let { slots: n } = t;
  const { isOpen: l, open: a, id: i } = Pa(ne(e, "value"), !0), c = v(() => `v-list-group--id-${String(i.value)}`), r = Aa(), { isBooted: o } = function() {
    const p = ue(!1);
    return Ln(() => {
      window.requestAnimationFrame(() => {
        p.value = !0;
      });
    }), { ssrBootStyles: v(() => p.value ? void 0 : { transition: "none !important" }), isBooted: bl(p) };
  }();
  function s(p) {
    a(!l.value, p);
  }
  const m = v(() => ({ onClick: s, class: "v-list-group__header", id: c.value })), y = v(() => l.value ? e.collapseIcon : e.expandIcon), f = v(() => ({ VListItem: { active: l.value, activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && y.value, appendIcon: e.appendIcon || !e.subgroup && y.value, title: e.title, value: e.value } }));
  return le(() => d(e.tag, { class: ["v-list-group", { "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": l.value }, e.class], style: e.style }, { default: () => [n.activator && d(Se, { defaults: f.value }, { default: () => [d(lr, null, { default: () => [n.activator({ props: m.value, isOpen: l.value })] })] }), d(en, { transition: { component: ki }, disabled: !o.value }, { default: () => {
    var p;
    return [Be(d("div", { class: "v-list-group__items", role: "group", "aria-labelledby": c.value }, [(p = n.default) == null ? void 0 : p.call(n)]), [[Dn, l.value]])];
  } })] })), {};
} }), ar = st("v-list-item-subtitle"), ir = st("v-list-item-title"), rr = H({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: ce, baseColor: String, disabled: Boolean, lines: String, link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: ce, ripple: { type: [Boolean, Object], default: !0 }, subtitle: [String, Number, Boolean], title: [String, Number, Boolean], value: null, onClick: Ne(), onClickOnce: Ne(), ...Wn(), ...ie(), ...je(), ...gn(), ...Nn(), ...Je(), ...qt(), ...$e(), ...Ce(), ...an({ variant: "text" }) }, "VListItem"), Tt = Q()({ name: "VListItem", directives: { Ripple: yt }, props: rr(), emits: { click: (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l, emit: a } = t;
  const i = Gt(e, n), c = v(() => e.value === void 0 ? i.href.value : e.value), { select: r, isSelected: o, isIndeterminate: s, isGroupActivator: m, root: y, parent: f, openOnSelect: p } = Pa(c, !1), g = Aa(), b = v(() => {
    var L;
    return e.active !== !1 && (e.active || ((L = i.isActive) == null ? void 0 : L.value) || o.value);
  }), h = v(() => e.link !== !1 && i.isLink.value), I = v(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || e.value != null && !!g)), A = v(() => e.rounded || e.nav), k = v(() => e.color ?? e.activeColor), M = v(() => ({ color: b.value ? k.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  K(() => {
    var L;
    return (L = i.isActive) == null ? void 0 : L.value;
  }, (L) => {
    L && f.value != null && y.open(f.value, !0), L && p(L);
  }, { immediate: !0 });
  const { themeClasses: _ } = Ve(e), { borderClasses: T } = Rn(e), { colorClasses: V, colorStyles: S, variantClasses: C } = pt(M), { densityClasses: D } = Qe(e), { dimensionStyles: w } = hn(e), { elevationClasses: P } = jn(e), { roundedClasses: O } = Ze(A), j = v(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), q = v(() => ({ isActive: b.value, select: r, isSelected: o.value, isIndeterminate: s.value }));
  function x(L) {
    var N;
    a("click", L), !m && I.value && ((N = i.navigate) == null || N.call(i, L), e.value != null && r(!o.value, L));
  }
  function E(L) {
    L.key !== "Enter" && L.key !== " " || (L.preventDefault(), x(L));
  }
  return le(() => {
    const L = h.value ? "a" : e.tag, N = l.title || e.title, G = l.subtitle || e.subtitle, $ = !(!e.appendAvatar && !e.appendIcon), B = !(!$ && !l.append), W = !(!e.prependAvatar && !e.prependIcon), F = !(!W && !l.prepend);
    var z, U;
    return g == null || g.updateHasPrepend(F), e.activeColor && (z = "active-color", U = ["color", "base-color"], U = Array.isArray(U) ? U.slice(0, -1).map((J) => `'${J}'`).join(", ") + ` or '${U.at(-1)}'` : `'${U}'`, Wt(`[Vuetify UPGRADE] '${z}' is deprecated, use ${U} instead.`)), Be(d(L, { class: ["v-list-item", { "v-list-item--active": b.value, "v-list-item--disabled": e.disabled, "v-list-item--link": I.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !F && (g == null ? void 0 : g.hasPrepend.value), [`${e.activeClass}`]: e.activeClass && b.value }, _.value, T.value, V.value, D.value, P.value, j.value, O.value, C.value, e.class], style: [S.value, w.value, e.style], href: i.href.value, tabindex: I.value ? g ? -2 : 0 : void 0, onClick: x, onKeydown: I.value && !h.value && E }, { default: () => {
      var J;
      return [dt(I.value || b.value, "v-list-item"), F && d("div", { key: "prepend", class: "v-list-item__prepend" }, [l.prepend ? d(Se, { key: "prepend-defaults", disabled: !W, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: !0 } } }, { default: () => {
        var Y;
        return [(Y = l.prepend) == null ? void 0 : Y.call(l, q.value)];
      } }) : d(fe, null, [e.prependAvatar && d(zn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && d(de, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), d("div", { class: "v-list-item__spacer" }, null)]), d("div", { class: "v-list-item__content", "data-no-activator": "" }, [N && d(ir, { key: "title" }, { default: () => {
        var Y;
        return [((Y = l.title) == null ? void 0 : Y.call(l, { title: e.title })) ?? e.title];
      } }), G && d(ar, { key: "subtitle" }, { default: () => {
        var Y;
        return [((Y = l.subtitle) == null ? void 0 : Y.call(l, { subtitle: e.subtitle })) ?? e.subtitle];
      } }), (J = l.default) == null ? void 0 : J.call(l, q.value)]), B && d("div", { key: "append", class: "v-list-item__append" }, [l.append ? d(Se, { key: "append-defaults", disabled: !$, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: !0 } } }, { default: () => {
        var Y;
        return [(Y = l.append) == null ? void 0 : Y.call(l, q.value)];
      } }) : d(fe, null, [e.appendIcon && d(de, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && d(zn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), d("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[Xe("ripple"), I.value && e.ripple]]);
  }), {};
} }), sr = H({ color: String, inset: Boolean, sticky: Boolean, title: String, ...ie(), ...$e() }, "VListSubheader"), ur = Q()({ name: "VListSubheader", props: sr(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: l, textColorStyles: a } = Ye(ne(e, "color"));
  return le(() => {
    const i = !(!n.default && !e.title);
    return d(e.tag, { class: ["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, l.value, e.class], style: [{ textColorStyles: a }, e.style] }, { default: () => {
      var c;
      return [i && d("div", { class: "v-list-subheader__text" }, [((c = n.default) == null ? void 0 : c.call(n)) ?? e.title])];
    } });
  }), {};
} }), cr = H({ color: String, inset: Boolean, length: [Number, String], thickness: [Number, String], vertical: Boolean, ...ie(), ...Ce() }, "VDivider"), dr = Q()({ name: "VDivider", props: cr(), setup(e, t) {
  let { attrs: n } = t;
  const { themeClasses: l } = Ve(e), { textColorClasses: a, textColorStyles: i } = Ye(ne(e, "color")), c = v(() => {
    const r = {};
    return e.length && (r[e.vertical ? "maxHeight" : "maxWidth"] = te(e.length)), e.thickness && (r[e.vertical ? "borderRightWidth" : "borderTopWidth"] = te(e.thickness)), r;
  });
  return le(() => d("hr", { class: [{ "v-divider": !0, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, l.value, a.value, e.class], style: [c.value, i.value, e.style], "aria-orientation": n.role && n.role !== "separator" ? void 0 : e.vertical ? "vertical" : "horizontal", role: `${n.role || "separator"}` }, null)), {};
} }), pr = H({ items: Array, returnObject: Boolean }, "VListChildren"), $a = Q()({ name: "VListChildren", props: pr(), setup(e, t) {
  let { slots: n } = t;
  return Va(), () => {
    var l, a;
    return ((l = n.default) == null ? void 0 : l.call(n)) ?? ((a = e.items) == null ? void 0 : a.map((i) => {
      var p, g;
      let { children: c, props: r, type: o, raw: s } = i;
      if (o === "divider")
        return ((p = n.divider) == null ? void 0 : p.call(n, { props: r })) ?? d(dr, r, null);
      if (o === "subheader")
        return ((g = n.subheader) == null ? void 0 : g.call(n, { props: r })) ?? d(ur, r, null);
      const m = { subtitle: n.subtitle ? (b) => {
        var h;
        return (h = n.subtitle) == null ? void 0 : h.call(n, { ...b, item: s });
      } : void 0, prepend: n.prepend ? (b) => {
        var h;
        return (h = n.prepend) == null ? void 0 : h.call(n, { ...b, item: s });
      } : void 0, append: n.append ? (b) => {
        var h;
        return (h = n.append) == null ? void 0 : h.call(n, { ...b, item: s });
      } : void 0, title: n.title ? (b) => {
        var h;
        return (h = n.title) == null ? void 0 : h.call(n, { ...b, item: s });
      } : void 0 }, [y, f] = Io.filterProps(r);
      return c ? d(Io, Z({ value: r == null ? void 0 : r.value }, y), { activator: (b) => {
        let { props: h } = b;
        const I = { ...r, ...h, value: e.returnObject ? s : r.value };
        return n.header ? n.header({ props: I }) : d(Tt, I, m);
      }, default: () => d($a, { items: c }, n) }) : n.item ? n.item({ props: r }) : d(Tt, Z(r, { value: e.returnObject ? s : r.value }), m);
    }));
  };
} }), Ea = H({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, returnObject: Boolean, valueComparator: { type: Function, default: at } }, "list-items");
function vl(e, t) {
  const n = He(t, e.itemTitle, t), l = He(t, e.itemValue, n), a = He(t, e.itemChildren), i = { title: n, value: l, ...e.itemProps === !0 ? typeof t != "object" || t == null || Array.isArray(t) ? void 0 : "children" in t ? En(t, ["children"])[1] : t : He(t, e.itemProps) };
  return { title: String(i.title ?? ""), value: i.value, props: i, children: Array.isArray(a) ? Ta(e, a) : void 0, raw: t };
}
function Ta(e, t) {
  const n = [];
  for (const l of t)
    n.push(vl(e, l));
  return n;
}
function vr(e, t) {
  const n = He(t, e.itemType, "item"), l = function(r) {
    return typeof r == "string" || typeof r == "number" || typeof r == "boolean";
  }(t) ? t : He(t, e.itemTitle), a = He(t, e.itemValue, void 0), i = He(t, e.itemChildren), c = { title: l, value: a, ...e.itemProps === !0 ? En(t, ["children"])[1] : He(t, e.itemProps) };
  return { type: n, title: c.title, value: c.value, props: c, children: n === "item" && i ? za(e, i) : void 0, raw: t };
}
function za(e, t) {
  const n = [];
  for (const l of t)
    n.push(vr(e, l));
  return n;
}
const fr = H({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, lines: { type: [Boolean, String], default: "one" }, nav: Boolean, ...nr({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Wn(), ...ie(), ...je(), ...gn(), ...Nn(), itemType: { type: String, default: "type" }, ...Ea(), ...Je(), ...$e(), ...Ce(), ...an({ variant: "text" }) }, "VList"), yr = Q()({ name: "VList", props: fr(), emits: { "update:selected": (e) => !0, "update:opened": (e) => !0, "click:open": (e) => !0, "click:select": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { items: l } = function(C) {
    return { items: v(() => za(C, C.items)) };
  }(e), { themeClasses: a } = Ve(e), { backgroundColorClasses: i, backgroundColorStyles: c } = Tn(ne(e, "bgColor")), { borderClasses: r } = Rn(e), { densityClasses: o } = Qe(e), { dimensionStyles: s } = hn(e), { elevationClasses: m } = jn(e), { roundedClasses: y } = Ze(e), { open: f, select: p } = tr(e), g = v(() => e.lines ? `v-list--${e.lines}-line` : void 0), b = ne(e, "activeColor"), h = ne(e, "baseColor"), I = ne(e, "color");
  Va(), Mn({ VListGroup: { activeColor: b, baseColor: h, color: I }, VListItem: { activeClass: ne(e, "activeClass"), activeColor: b, baseColor: h, color: I, density: ne(e, "density"), disabled: ne(e, "disabled"), lines: ne(e, "lines"), nav: ne(e, "nav"), variant: ne(e, "variant") } });
  const A = ue(!1), k = R();
  function M(C) {
    A.value = !0;
  }
  function _(C) {
    A.value = !1;
  }
  function T(C) {
    var D;
    A.value || C.relatedTarget && ((D = k.value) != null && D.contains(C.relatedTarget)) || S();
  }
  function V(C) {
    if (k.value) {
      if (C.key === "ArrowDown")
        S("next");
      else if (C.key === "ArrowUp")
        S("prev");
      else if (C.key === "Home")
        S("first");
      else {
        if (C.key !== "End")
          return;
        S("last");
      }
      C.preventDefault();
    }
  }
  function S(C) {
    if (k.value)
      return Ft(k.value, C);
  }
  return le(() => d(e.tag, { ref: k, class: ["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav }, a.value, i.value, r.value, o.value, m.value, g.value, y.value, e.class], style: [c.value, s.value, e.style], tabindex: e.disabled || A.value ? -1 : 0, role: "listbox", "aria-activedescendant": void 0, onFocusin: M, onFocusout: _, onFocus: T, onKeydown: V }, { default: () => [d($a, { items: l.value, returnObject: e.returnObject }, n)] })), { open: f, select: p, focus: S };
} });
function Zt(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
function So(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: n, align: l } = e;
    return Zt({ x: l === "left" ? 0 : l === "center" ? t.width / 2 : l === "right" ? t.width : l, y: n === "top" ? 0 : n === "bottom" ? t.height : n }, t);
  }
  if (e.side === "left" || e.side === "right") {
    const { side: n, align: l } = e;
    return Zt({ x: n === "left" ? 0 : n === "right" ? t.width : n, y: l === "top" ? 0 : l === "center" ? t.height / 2 : l === "bottom" ? t.height : l }, t);
  }
  return Zt({ x: t.width / 2, y: t.height / 2 }, t);
}
const Da = { static: function() {
}, connected: function(e, t, n) {
  (function(p) {
    for (; p; ) {
      if (window.getComputedStyle(p).position === "fixed")
        return !0;
      p = p.offsetParent;
    }
    return !1;
  })(e.activatorEl.value) && Object.assign(n.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: l, preferredOrigin: a } = kl(() => {
    const p = il(t.location, e.isRtl.value), g = t.origin === "overlap" ? p : t.origin === "auto" ? Yt(p) : il(t.origin, e.isRtl.value);
    return p.side === g.side && p.align === Xt(g).align ? { preferredAnchor: Yl(p), preferredOrigin: Yl(g) } : { preferredAnchor: p, preferredOrigin: g };
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
    }), !e.activatorEl.value || !e.contentEl.value)
      return;
    const p = e.activatorEl.value.getBoundingClientRect(), g = function(C, D) {
      D ? C.style.removeProperty("left") : C.style.removeProperty("right");
      const w = wl(C);
      return D ? w.x += parseFloat(C.style.right || 0) : w.x -= parseFloat(C.style.left || 0), w.y -= parseFloat(C.style.top || 0), w;
    }(e.contentEl.value, e.isRtl.value), b = Ot(e.contentEl.value);
    b.length || (b.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (g.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), g.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const h = b.reduce((C, D) => {
      const w = D.getBoundingClientRect(), P = new wn({ x: D === document.documentElement ? 0 : w.x, y: D === document.documentElement ? 0 : w.y, width: D.clientWidth, height: D.clientHeight });
      return C ? new wn({ x: Math.max(C.left, P.left), y: Math.max(C.top, P.top), width: Math.min(C.right, P.right) - Math.max(C.left, P.left), height: Math.min(C.bottom, P.bottom) - Math.max(C.top, P.top) }) : P;
    }, void 0);
    h.x += 12, h.y += 12, h.width -= 24, h.height -= 24;
    let I = { anchor: l.value, origin: a.value };
    function A(C) {
      const D = new wn(g), w = So(C.anchor, p), P = So(C.origin, D);
      let { x: O, y: j } = (x = P, { x: (q = w).x - x.x, y: q.y - x.y });
      var q, x;
      switch (C.anchor.side) {
        case "top":
          j -= s.value[0];
          break;
        case "bottom":
          j += s.value[0];
          break;
        case "left":
          O -= s.value[0];
          break;
        case "right":
          O += s.value[0];
      }
      switch (C.anchor.align) {
        case "top":
          j -= s.value[1];
          break;
        case "bottom":
          j += s.value[1];
          break;
        case "left":
          O -= s.value[1];
          break;
        case "right":
          O += s.value[1];
      }
      return D.x += O, D.y += j, D.width = Math.min(D.width, r.value), D.height = Math.min(D.height, o.value), { overflows: Kl(D, h), x: O, y: j };
    }
    let k = 0, M = 0;
    const _ = { x: 0, y: 0 }, T = { x: !1, y: !1 };
    let V = -1;
    for (; ; ) {
      if (V++ > 10) {
        Wt("Vuetify error: Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const { x: C, y: D, overflows: w } = A(I);
      k += C, M += D, g.x += C, g.y += D;
      {
        const P = Xl(I.anchor), O = w.x.before || w.x.after, j = w.y.before || w.y.after;
        let q = !1;
        if (["x", "y"].forEach((x) => {
          if (x === "x" && O && !T.x || x === "y" && j && !T.y) {
            const E = { anchor: { ...I.anchor }, origin: { ...I.origin } }, L = x === "x" ? P === "y" ? Xt : Yt : P === "y" ? Yt : Xt;
            E.anchor = L(E.anchor), E.origin = L(E.origin);
            const { overflows: N } = A(E);
            (N[x].before <= w[x].before && N[x].after <= w[x].after || N[x].before + N[x].after < (w[x].before + w[x].after) / 2) && (I = E, q = T[x] = !0);
          }
        }), q)
          continue;
      }
      w.x.before && (k += w.x.before, g.x += w.x.before), w.x.after && (k -= w.x.after, g.x -= w.x.after), w.y.before && (M += w.y.before, g.y += w.y.before), w.y.after && (M -= w.y.after, g.y -= w.y.after);
      {
        const P = Kl(g, h);
        _.x = h.width - P.x.before - P.x.after, _.y = h.height - P.y.before - P.y.after, k += P.x.before, g.x += P.x.before, M += P.y.before, g.y += P.y.before;
      }
      break;
    }
    const S = Xl(I.anchor);
    return Object.assign(n.value, { "--v-overlay-anchor-origin": `${I.anchor.side} ${I.anchor.align}`, transformOrigin: `${I.origin.side} ${I.origin.align}`, top: te(Qt(M)), left: e.isRtl.value ? void 0 : te(Qt(k)), right: e.isRtl.value ? te(Qt(-k)) : void 0, minWidth: te(S === "y" ? Math.min(i.value, p.width) : i.value), maxWidth: te(xo(Jn(_.x, i.value === 1 / 0 ? 0 : i.value, r.value))), maxHeight: te(xo(Jn(_.y, c.value === 1 / 0 ? 0 : c.value, o.value))) }), { available: _, contentBox: g };
  }
  return K([e.activatorEl, e.contentEl], (p, g) => {
    let [b, h] = p, [I, A] = g;
    I && y.unobserve(I), b && y.observe(b), A && y.unobserve(A), h && y.observe(h);
  }, { immediate: !0 }), we(() => {
    y.disconnect();
  }), K(() => [l.value, a.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => f()), xe(() => {
    const p = f();
    if (!p)
      return;
    const { available: g, contentBox: b } = p;
    b.height > g.y && requestAnimationFrame(() => {
      f(), requestAnimationFrame(() => {
        f();
      });
    });
  }), { updateLocation: f };
} }, mr = H({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in Da }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array] }, "VOverlay-location-strategies");
function Qt(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function xo(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let fl = !0;
const zt = [];
let Bo = -1;
function yl() {
  cancelAnimationFrame(Bo), Bo = requestAnimationFrame(() => {
    const e = zt.shift();
    e && e(), zt.length ? yl() : fl = !0;
  });
}
const kt = { none: null, close: function(e) {
  ko(e.activatorEl.value ?? e.contentEl.value, function(t) {
    e.isActive.value = !1;
  });
}, block: function(e, t) {
  var r;
  const n = (r = e.root.value) == null ? void 0 : r.offsetParent, l = [.../* @__PURE__ */ new Set([...Ot(e.activatorEl.value, t.contained ? n : void 0), ...Ot(e.contentEl.value, t.contained ? n : void 0)])].filter((o) => !o.classList.contains("v-overlay-scroll-blocked")), a = window.innerWidth - document.documentElement.offsetWidth, i = (c = n || document.documentElement, Vl(c) && c);
  var c;
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((o, s) => {
    o.style.setProperty("--v-body-scroll-x", te(-o.scrollLeft)), o.style.setProperty("--v-body-scroll-y", te(-o.scrollTop)), o !== document.documentElement && o.style.setProperty("--v-scrollbar-offset", te(a)), o.classList.add("v-overlay-scroll-blocked");
  }), we(() => {
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
    }, !fl || zt.length ? (zt.push(o), yl()) : (fl = !1, o(), yl());
  }
  i = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    n.run(() => {
      ko(e.activatorEl.value ?? e.contentEl.value, (r) => {
        l ? (cancelAnimationFrame(a), a = requestAnimationFrame(() => {
          a = requestAnimationFrame(() => {
            c(r);
          });
        })) : c(r);
      });
    });
  }), we(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(a);
  });
} }, gr = H({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in kt } }, "VOverlay-scroll-strategies");
function ko(e, t) {
  const n = [document, ...Ot(e)];
  n.forEach((l) => {
    l.addEventListener("scroll", t, { passive: !0 });
  }), we(() => {
    n.forEach((l) => {
      l.removeEventListener("scroll", t);
    });
  });
}
const ml = Symbol.for("vuetify:v-menu"), hr = H({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay"), br = H({ activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...hr() }, "VOverlay-activator");
function Cr(e, t) {
  let { isActive: n, isTop: l } = t;
  const a = R();
  let i = !1, c = !1, r = !0;
  const o = v(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), s = v(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !o.value), { runOpenDelay: m, runCloseDelay: y } = function(V, S) {
    const C = {}, D = (w) => () => {
      if (!Ee)
        return Promise.resolve(!0);
      const P = w === "openDelay";
      return C.closeDelay && window.clearTimeout(C.closeDelay), delete C.closeDelay, C.openDelay && window.clearTimeout(C.openDelay), delete C.openDelay, new Promise((O) => {
        const j = parseInt(V[w] ?? 0, 10);
        C[w] = window.setTimeout(() => {
          S == null || S(P), O(P);
        }, j);
      });
    };
    return { runCloseDelay: D("closeDelay"), runOpenDelay: D("openDelay") };
  }(e, (V) => {
    V !== (e.openOnHover && i || o.value && c) || e.openOnHover && n.value && !l.value || (n.value !== V && (r = !0), n.value = V);
  }), f = (V) => {
    V.stopPropagation(), a.value = V.currentTarget || V.target, n.value = !n.value;
  }, p = (V) => {
    var S;
    (S = V.sourceCapabilities) != null && S.firesTouchEvents || (i = !0, a.value = V.currentTarget || V.target, m());
  }, g = (V) => {
    i = !1, y();
  }, b = (V) => {
    Vt(V.target, ":focus-visible") !== !1 && (c = !0, V.stopPropagation(), a.value = V.currentTarget || V.target, m());
  }, h = (V) => {
    c = !1, V.stopPropagation(), y();
  }, I = v(() => {
    const V = {};
    return s.value && (V.onClick = f), e.openOnHover && (V.onMouseenter = p, V.onMouseleave = g), o.value && (V.onFocus = b, V.onBlur = h), V;
  }), A = v(() => {
    const V = {};
    if (e.openOnHover && (V.onMouseenter = () => {
      i = !0, m();
    }, V.onMouseleave = () => {
      i = !1, y();
    }), o.value && (V.onFocusin = () => {
      c = !0, m();
    }, V.onFocusout = () => {
      c = !1, y();
    }), e.closeOnContentClick) {
      const S = ve(ml, null);
      V.onClick = () => {
        n.value = !1, S == null || S.closeParents();
      };
    }
    return V;
  }), k = v(() => {
    const V = {};
    return e.openOnHover && (V.onMouseenter = () => {
      r && (i = !0, r = !1, m());
    }, V.onMouseleave = () => {
      i = !1, y();
    }), V;
  });
  K(l, (V) => {
    !V || (!e.openOnHover || i || o.value && c) && (!o.value || c || e.openOnHover && i) || (n.value = !1);
  });
  const M = R();
  Ue(() => {
    M.value && xe(() => {
      a.value = ll(M.value);
    });
  });
  const _ = ke("useActivator");
  let T;
  return K(() => !!e.activator, (V) => {
    V && Ee ? (T = Cl(), T.run(() => {
      (function(S, C, D) {
        let { activatorEl: w, activatorEvents: P } = D;
        function O() {
          let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : q(), E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : S.activatorProps;
          x && function(L, N) {
            Object.keys(N).forEach((G) => {
              if (ol(G)) {
                const $ = ql(G), B = ht.get(L);
                if (N[G] == null)
                  B == null || B.forEach((W) => {
                    const [F, z] = W;
                    F === $ && (L.removeEventListener($, z), B.delete(W));
                  });
                else if (!B || ![...B].some((W) => W[0] === $ && W[1] === N[G])) {
                  L.addEventListener($, N[G]);
                  const W = B || /* @__PURE__ */ new Set();
                  W.add([$, N[G]]), ht.has(L) || ht.set(L, W);
                }
              } else
                N[G] == null ? L.removeAttribute(G) : L.setAttribute(G, N[G]);
            });
          }(x, Z(P.value, E));
        }
        function j() {
          let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : q(), E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : S.activatorProps;
          x && function(L, N) {
            Object.keys(N).forEach((G) => {
              if (ol(G)) {
                const $ = ql(G), B = ht.get(L);
                B == null || B.forEach((W) => {
                  const [F, z] = W;
                  F === $ && (L.removeEventListener($, z), B.delete(W));
                });
              } else
                L.removeAttribute(G);
            });
          }(x, Z(P.value, E));
        }
        function q() {
          var L, N;
          let x, E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : S.activator;
          if (E)
            if (E === "parent") {
              let G = (N = (L = C == null ? void 0 : C.proxy) == null ? void 0 : L.$el) == null ? void 0 : N.parentNode;
              for (; G != null && G.hasAttribute("data-no-activator"); )
                G = G.parentNode;
              x = G;
            } else
              x = typeof E == "string" ? document.querySelector(E) : "$el" in E ? E.$el : E;
          return w.value = (x == null ? void 0 : x.nodeType) === Node.ELEMENT_NODE ? x : null, w.value;
        }
        K(() => S.activator, (x, E) => {
          if (E && x !== E) {
            const L = q(E);
            L && j(L);
          }
          x && xe(() => O());
        }, { immediate: !0 }), K(() => S.activatorProps, () => {
          O();
        }), we(() => {
          j();
        });
      })(e, _, { activatorEl: a, activatorEvents: I });
    })) : T && T.stop();
  }, { flush: "post", immediate: !0 }), we(() => {
    T == null || T.stop();
  }), { activatorEl: a, activatorRef: M, activatorEvents: I, contentEvents: A, scrimEvents: k };
}
const Ir = Symbol.for("vuetify:display");
function La() {
  const e = ve(Ir);
  if (!e)
    throw new Error("Could not find Vuetify display injection");
  return e;
}
const Sr = H({ eager: Boolean }, "lazy");
function Ma() {
  const e = ke("useScopeId").vnode.scopeId;
  return { scopeId: e ? { [e]: "" } : void 0 };
}
const wo = Symbol.for("vuetify:stack"), Un = ze([]);
function xr() {
  return !0;
}
function Fo(e, t, n) {
  if (!e || Wa(e, n) === !1)
    return !1;
  const l = Ho(t);
  if (typeof ShadowRoot < "u" && l instanceof ShadowRoot && l.host === e.target)
    return !1;
  const a = (typeof n.value == "object" && n.value.include || (() => []))();
  return a.push(t), !a.some((i) => i == null ? void 0 : i.contains(e.target));
}
function Wa(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || xr)(e);
}
function Vo(e, t) {
  const n = Ho(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const Br = { mounted(e, t) {
  const n = (a) => function(i, c, r) {
    const o = typeof r.value == "function" ? r.value : r.value.handler;
    c._clickOutside.lastMousedownWasOutside && Fo(i, c, r) && setTimeout(() => {
      Wa(i, r) && o && o(i);
    }, 0);
  }(a, e, t), l = (a) => {
    e._clickOutside.lastMousedownWasOutside = Fo(a, e, t);
  };
  Vo(e, (a) => {
    a.addEventListener("click", n, !0), a.addEventListener("mousedown", l, !0);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: !1 }), e._clickOutside[t.instance.$.uid] = { onClick: n, onMousedown: l };
}, unmounted(e, t) {
  e._clickOutside && (Vo(e, (n) => {
    var i;
    if (!n || !((i = e._clickOutside) != null && i[t.instance.$.uid]))
      return;
    const { onClick: l, onMousedown: a } = e._clickOutside[t.instance.$.uid];
    n.removeEventListener("click", l, !0), n.removeEventListener("mousedown", a, !0);
  }), delete e._clickOutside[t.instance.$.uid]);
} };
function kr(e) {
  const { modelValue: t, color: n, ...l } = e;
  return d(yn, { name: "fade-transition", appear: !0 }, { default: () => [e.modelValue && d("div", Z({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, l), null)] });
}
const Ra = H({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: !0 }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: !0 }, zIndex: { type: [Number, String], default: 2e3 }, ...br(), ...ie(), ...gn(), ...Sr(), ...mr(), ...gr(), ...Ce(), ...ct() }, "VOverlay"), Ao = Q()({ name: "VOverlay", directives: { ClickOutside: Br }, inheritAttrs: !1, props: { _disableGlobalStack: Boolean, ...Ra() }, emits: { "click:outside": (e) => !0, "update:modelValue": (e) => !0, afterLeave: () => !0 }, setup(e, t) {
  var G, $;
  let { slots: n, attrs: l, emit: a } = t;
  const i = me(e, "modelValue"), c = v({ get: () => i.value, set: (B) => {
    B && e.disabled || (i.value = B);
  } }), { teleportTarget: r } = (o = v(() => e.attach || e.contained), { teleportTarget: v(() => {
    const B = o.value;
    if (B === !0 || !Ee)
      return;
    const W = B === !1 ? document.body : typeof B == "string" ? document.querySelector(B) : B;
    if (W == null)
      return void Wt(`Unable to locate target ${B}`);
    let F = W.querySelector(":scope > .v-overlay-container");
    return F || (F = document.createElement("div"), F.className = "v-overlay-container", W.appendChild(F)), F;
  }) });
  var o;
  const { themeClasses: s } = Ve(e), { rtlClasses: m, isRtl: y } = ut(), { hasContent: f, onAfterLeave: p } = function(B, W) {
    const F = ue(!1), z = v(() => F.value || B.eager || W.value);
    return K(W, () => F.value = !0), { isBooted: F, hasContent: z, onAfterLeave: function() {
      B.eager || (F.value = !1);
    } };
  }(e, c), g = Tn(v(() => typeof e.scrim == "string" ? e.scrim : null)), { globalTop: b, localTop: h, stackStyles: I } = function(B, W, F) {
    const z = ke("useStack"), U = !F, J = ve(wo, void 0), Y = ze({ activeChildren: /* @__PURE__ */ new Set() });
    Te(wo, Y);
    const re = ue(+W.value);
    pn(B, () => {
      var qn;
      const We = (qn = Un.at(-1)) == null ? void 0 : qn[1];
      re.value = We ? We + 10 : +W.value, U && Un.push([z.uid, re.value]), J == null || J.activeChildren.add(z.uid), we(() => {
        if (U) {
          const Ya = nn(Un).findIndex((Xa) => Xa[0] === z.uid);
          Un.splice(Ya, 1);
        }
        J == null || J.activeChildren.delete(z.uid);
      });
    });
    const Ae = ue(!0);
    U && Ue(() => {
      var qn;
      const We = ((qn = Un.at(-1)) == null ? void 0 : qn[0]) === z.uid;
      setTimeout(() => Ae.value = We);
    });
    const Gn = v(() => !Y.activeChildren.size);
    return { globalTop: bl(Ae), localTop: Gn, stackStyles: v(() => ({ zIndex: re.value })) };
  }(c, ne(e, "zIndex"), e._disableGlobalStack), { activatorEl: A, activatorRef: k, activatorEvents: M, contentEvents: _, scrimEvents: T } = Cr(e, { isActive: c, isTop: h }), { dimensionStyles: V } = hn(e), S = function() {
    if (!Ee)
      return ue(!1);
    const { ssr: B } = La();
    if (B) {
      const W = ue(!1);
      return Ln(() => {
        W.value = !0;
      }), W;
    }
    return ue(!0);
  }(), { scopeId: C } = Ma();
  K(() => e.disabled, (B) => {
    B && (c.value = !1);
  });
  const D = R(), w = R(), { contentStyles: P, updateLocation: O } = function(B, W) {
    const F = R({}), z = R();
    function U(J) {
      var Y;
      (Y = z.value) == null || Y.call(z, J);
    }
    return Ee && (pn(() => !(!W.isActive.value || !B.locationStrategy), (J) => {
      var Y, re;
      K(() => B.locationStrategy, J), we(() => {
        z.value = void 0;
      }), typeof B.locationStrategy == "function" ? z.value = (Y = B.locationStrategy(W, B, F)) == null ? void 0 : Y.updateLocation : z.value = (re = Da[B.locationStrategy](W, B, F)) == null ? void 0 : re.updateLocation;
    }), window.addEventListener("resize", U, { passive: !0 }), we(() => {
      window.removeEventListener("resize", U), z.value = void 0;
    })), { contentStyles: F, updateLocation: z };
  }(e, { isRtl: y, contentEl: w, activatorEl: A, isActive: c });
  function j(B) {
    a("click:outside", B), e.persistent ? N() : c.value = !1;
  }
  function q() {
    return c.value && b.value;
  }
  function x(B) {
    var W, F;
    B.key === "Escape" && b.value && (e.persistent ? N() : (c.value = !1, (W = w.value) != null && W.contains(document.activeElement) && ((F = A.value) == null || F.focus())));
  }
  (function(B, W) {
    if (!Ee)
      return;
    let F;
    Ue(async () => {
      F == null || F.stop(), W.isActive.value && B.scrollStrategy && (F = Cl(), await xe(), F.active && F.run(() => {
        var z;
        typeof B.scrollStrategy == "function" ? B.scrollStrategy(W, B, F) : (z = kt[B.scrollStrategy]) == null || z.call(kt, W, B, F);
      }));
    }), we(() => {
      F == null || F.stop();
    });
  })(e, { root: D, contentEl: w, activatorEl: A, isActive: c, updateLocation: O }), Ee && K(c, (B) => {
    B ? window.addEventListener("keydown", x) : window.removeEventListener("keydown", x);
  }, { immediate: !0 });
  const E = ($ = (G = ke("useRouter")) == null ? void 0 : G.proxy) == null ? void 0 : $.$router;
  pn(() => e.closeOnBack, () => {
    (function(B, W) {
      let F, z, U = !1;
      function J(Y) {
        var re;
        (re = Y.state) != null && re.replaced || (U = !0, setTimeout(() => U = !1));
      }
      Ee && (xe(() => {
        window.addEventListener("popstate", J), F = B == null ? void 0 : B.beforeEach((Y, re, Ae) => {
          Jt ? U ? W(Ae) : Ae() : setTimeout(() => U ? W(Ae) : Ae()), Jt = !0;
        }), z = B == null ? void 0 : B.afterEach(() => {
          Jt = !1;
        });
      }), we(() => {
        window.removeEventListener("popstate", J), F == null || F(), z == null || z();
      }));
    })(E, (B) => {
      b.value && c.value ? (B(!1), e.persistent ? N() : c.value = !1) : B();
    });
  });
  const L = R();
  function N() {
    e.noClickAnimation || w.value && In(w.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: _t });
  }
  return K(() => c.value && (e.absolute || e.contained) && r.value == null, (B) => {
    if (B) {
      const W = Yo(D.value);
      W && W !== document.scrollingElement && (L.value = W.scrollTop);
    }
  }), le(() => {
    var B;
    return d(fe, null, [(B = n.activator) == null ? void 0 : B.call(n, { isActive: c.value, props: Z({ ref: k }, M.value, e.activatorProps) }), S.value && f.value && d(rn, { disabled: !r.value, to: r.value }, { default: () => [d("div", Z({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": c.value, "v-overlay--contained": e.contained }, s.value, m.value, e.class], style: [I.value, { top: te(L.value) }, e.style], ref: D }, C, l), [d(kr, Z({ color: g, modelValue: c.value && !!e.scrim }, T.value), null), d(en, { appear: !0, persisted: !0, transition: e.transition, target: A.value, onAfterLeave: () => {
      p(), a("afterLeave");
    } }, { default: () => {
      var W;
      return [Be(d("div", Z({ ref: w, class: ["v-overlay__content", e.contentClass], style: [V.value, P.value] }, _.value, e.contentProps), [(W = n.default) == null ? void 0 : W.call(n, { isActive: c })]), [[Dn, c.value], [Xe("click-outside"), { handler: j, closeConditional: q, include: () => [A.value] }]])];
    } })])] })]);
  }), { activatorEl: A, animateClick: N, contentEl: w, globalTop: b, localTop: h, updateLocation: O };
} }), el = Symbol("Forwarded refs");
function nl(e, t) {
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
  return e[el] = n, new Proxy(e, { get(a, i) {
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
        const s = nl(o.value, i) ?? ("_" in o.value ? nl((r = o.value._) == null ? void 0 : r.setupState, i) : void 0);
        if (s)
          return s;
      }
      for (const o of n) {
        const s = o.value && o.value[el];
        if (!s)
          continue;
        const m = s.slice();
        for (; m.length; ) {
          const y = m.shift(), f = nl(y.value, i);
          if (f)
            return f;
          const p = y.value && y.value[el];
          p && m.push(...p);
        }
      }
    }
  } });
}
const wr = H({ id: String, ...it(Ra({ closeDelay: 250, closeOnContentClick: !0, locationStrategy: "connected", openDelay: 300, scrim: !1, scrollStrategy: "reposition", transition: { component: Zo } }), ["absolute"]) }, "VMenu"), Fr = Q()({ name: "VMenu", props: wr(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = me(e, "modelValue"), { scopeId: a } = Ma(), i = Le(), c = v(() => e.id || `v-menu-${i}`), r = R(), o = ve(ml, null), s = ue(0);
  async function m(b) {
    var A, k, M;
    const h = b.relatedTarget, I = b.target;
    await xe(), l.value && h !== I && ((A = r.value) != null && A.contentEl) && ((k = r.value) != null && k.globalTop) && ![document, r.value.contentEl].includes(I) && !r.value.contentEl.contains(I) && ((M = al(r.value.contentEl)[0]) == null || M.focus());
  }
  function y() {
    o == null || o.closeParents();
  }
  function f(b) {
    var h, I, A;
    !e.disabled && b.key === "Tab" && (No(al((h = r.value) == null ? void 0 : h.contentEl, !1), b.shiftKey ? "prev" : "next", (k) => k.tabIndex >= 0) || (l.value = !1, (A = (I = r.value) == null ? void 0 : I.activatorEl) == null || A.focus()));
  }
  function p(b) {
    var I;
    if (e.disabled)
      return;
    const h = (I = r.value) == null ? void 0 : I.contentEl;
    h && l.value ? b.key === "ArrowDown" ? (b.preventDefault(), Ft(h, "next")) : b.key === "ArrowUp" && (b.preventDefault(), Ft(h, "prev")) : ["ArrowDown", "ArrowUp"].includes(b.key) && (l.value = !0, b.preventDefault(), setTimeout(() => setTimeout(() => p(b))));
  }
  Te(ml, { register() {
    ++s.value;
  }, unregister() {
    --s.value;
  }, closeParents() {
    setTimeout(() => {
      s.value || (l.value = !1, o == null || o.closeParents());
    }, 40);
  } }), K(l, (b) => {
    b ? (o == null || o.register(), document.addEventListener("focusin", m, { once: !0 })) : (o == null || o.unregister(), document.removeEventListener("focusin", m));
  });
  const g = v(() => Z({ "aria-haspopup": "menu", "aria-expanded": String(l.value), "aria-owns": c.value, onKeydown: p }, e.activatorProps));
  return le(() => {
    const [b] = Ao.filterProps(e);
    return d(Ao, Z({ ref: r, class: ["v-menu", e.class], style: e.style }, b, { modelValue: l.value, "onUpdate:modelValue": (h) => l.value = h, absolute: !0, activatorProps: g.value, "onClick:outside": y, onKeydown: f }, a), { activator: n.activator, default: function() {
      for (var h = arguments.length, I = new Array(h), A = 0; A < h; A++)
        I[A] = arguments[A];
      return d(Se, { root: "VMenu" }, { default: () => {
        var k;
        return [(k = n.default) == null ? void 0 : k.call(n, ...I)];
      } });
    } });
  }), Ht({ id: c, ΨopenChildren: s }, r);
} }), Vr = H({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...ie(), ...ct({ transition: { component: Qo } }) }, "VCounter"), Na = Q()({ name: "VCounter", functional: !0, props: Vr(), setup(e, t) {
  let { slots: n } = t;
  const l = v(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return le(() => d(en, { transition: e.transition }, { default: () => [Be(d("div", { class: ["v-counter", e.class], style: e.style }, [n.default ? n.default({ counter: l.value, max: e.max, value: e.value }) : l.value]), [[Dn, e.active]])] })), {};
} }), Ar = H({ floating: Boolean, ...ie() }, "VFieldLabel"), It = Q()({ name: "VFieldLabel", props: Ar(), setup(e, t) {
  let { slots: n } = t;
  return le(() => d(Ca, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, n)), {};
} }), _r = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Ll = H({ appendInnerIcon: ce, bgColor: String, clearable: Boolean, clearIcon: { type: ce, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: ce, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => _r.includes(e) }, "onClick:clear": Ne(), "onClick:appendInner": Ne(), "onClick:prependInner": Ne(), ...ie(), ...Tl(), ...Je(), ...Ce() }, "VField"), Ml = Q()({ name: "VField", inheritAttrs: !1, props: { id: String, ...ka(), ...Ll() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: a } = t;
  const { themeClasses: i } = Ve(e), { loaderClasses: c } = jt(e), { focusClasses: r, isFocused: o, focus: s, blur: m } = mt(e), { InputIcon: y } = Ba(e), { roundedClasses: f } = Ze(e), { rtlClasses: p } = ut(), g = v(() => e.dirty || e.active), b = v(() => !(e.singleLine || !e.label && !a.label)), h = Le(), I = v(() => e.id || `input-${h}`), A = v(() => `${I.value}-messages`), k = R(), M = R(), _ = R(), T = v(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: V, backgroundColorStyles: S } = Tn(ne(e, "bgColor")), { textColorClasses: C, textColorStyles: D } = Ye(v(() => e.error || e.disabled ? void 0 : g.value && o.value ? e.color : e.baseColor));
  K(g, (O) => {
    if (b.value) {
      const j = k.value.$el, q = M.value.$el;
      requestAnimationFrame(() => {
        const x = wl(j), E = q.getBoundingClientRect(), L = E.x - x.x, N = E.y - x.y - (x.height / 2 - E.height / 2), G = E.width / 0.75, $ = Math.abs(G - x.width) > 1 ? { maxWidth: te(G) } : void 0, B = getComputedStyle(j), W = getComputedStyle(q), F = 1e3 * parseFloat(B.transitionDuration) || 150, z = parseFloat(W.getPropertyValue("--v-field-label-scale")), U = W.getPropertyValue("color");
        j.style.visibility = "visible", q.style.visibility = "hidden", In(j, { transform: `translate(${L}px, ${N}px) scale(${z})`, color: U, ...$ }, { duration: F, easing: _t, direction: O ? "normal" : "reverse" }).finished.then(() => {
          j.style.removeProperty("visibility"), q.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const w = v(() => ({ isActive: g, isFocused: o, controlRef: _, blur: m, focus: s }));
  function P(O) {
    O.target !== document.activeElement && O.preventDefault();
  }
  return le(() => {
    var L, N, G;
    const O = e.variant === "outlined", j = a["prepend-inner"] || e.prependInnerIcon, q = !(!e.clearable && !a.clear), x = !!(a["append-inner"] || e.appendInnerIcon || q), E = a.label ? a.label({ ...w.value, label: e.label, props: { for: I.value } }) : e.label;
    return d("div", Z({ class: ["v-field", { "v-field--active": g.value, "v-field--appended": x, "v-field--center-affix": e.centerAffix ?? !T.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": j, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !E, [`v-field--variant-${e.variant}`]: !0 }, i.value, V.value, r.value, c.value, f.value, p.value, e.class], style: [S.value, e.style], onClick: P }, n), [d("div", { class: "v-field__overlay" }, null), d(zl, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: a.loader }), j && d("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && d(y, { key: "prepend-icon", name: "prependInner" }, null), (L = a["prepend-inner"]) == null ? void 0 : L.call(a, w.value)]), d("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && b.value && d(It, { key: "floating-label", ref: M, class: [C.value], floating: !0, for: I.value, style: D.value }, { default: () => [E] }), d(It, { ref: k, for: I.value }, { default: () => [E] }), (N = a.default) == null ? void 0 : N.call(a, { ...w.value, props: { id: I.value, class: "v-field__input", "aria-describedby": A.value }, focus: s, blur: m })]), q && d(ea, { key: "clear" }, { default: () => [Be(d("div", { class: "v-field__clearable", onMousedown: ($) => {
      $.preventDefault(), $.stopPropagation();
    } }, [a.clear ? a.clear() : d(y, { name: "clear" }, null)]), [[Dn, e.dirty]])] }), x && d("div", { key: "append", class: "v-field__append-inner" }, [(G = a["append-inner"]) == null ? void 0 : G.call(a, w.value), e.appendInnerIcon && d(y, { key: "append-icon", name: "appendInner" }, null)]), d("div", { class: ["v-field__outline", C.value], style: D.value }, [O && d(fe, null, [d("div", { class: "v-field__outline__start" }, null), b.value && d("div", { class: "v-field__outline__notch" }, [d(It, { ref: M, floating: !0, for: I.value }, { default: () => [E] })]), d("div", { class: "v-field__outline__end" }, null)]), T.value && b.value && d(It, { ref: M, floating: !0, for: I.value }, { default: () => [E] })])]);
  }), { controlRef: _ };
} });
function ja(e) {
  return En(e, Object.keys(Ml.props).filter((t) => !ol(t) && t !== "class" && t !== "style"));
}
const Or = ["color", "file", "time", "date", "datetime-local", "week", "month"], Ga = H({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...gt(), ...Ll() }, "VTextField"), gl = Q()({ name: "VTextField", directives: { Intersect: Ol }, inheritAttrs: !1, props: Ga(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: a } = t;
  const i = me(e, "modelValue"), { isFocused: c, focus: r, blur: o } = mt(e), s = v(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), m = v(() => n.maxlength ? n.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), y = v(() => ["plain", "underlined"].includes(e.variant));
  function f(T, V) {
    var S, C;
    e.autofocus && T && ((C = (S = V[0].target) == null ? void 0 : S.focus) == null || C.call(S));
  }
  const p = R(), g = R(), b = R(), h = v(() => Or.includes(e.type) || e.persistentPlaceholder || c.value || e.active);
  function I() {
    var T;
    b.value !== document.activeElement && ((T = b.value) == null || T.focus()), c.value || r();
  }
  function A(T) {
    l("mousedown:control", T), T.target !== b.value && (I(), T.preventDefault());
  }
  function k(T) {
    I(), l("click:control", T);
  }
  function M(T) {
    T.stopPropagation(), I(), xe(() => {
      i.value = null, Ro(e["onClick:clear"], T);
    });
  }
  function _(T) {
    var S;
    const V = T.target;
    if (i.value = V.value, ((S = e.modelModifiers) == null ? void 0 : S.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const C = [V.selectionStart, V.selectionEnd];
      xe(() => {
        V.selectionStart = C[0], V.selectionEnd = C[1];
      });
    }
  }
  return le(() => {
    const T = !!(a.counter || e.counter !== !1 && e.counter != null), V = !(!T && !a.details), [S, C] = rt(n), [{ modelValue: D, ...w }] = ln.filterProps(e), [P] = ja(e);
    return d(ln, Z({ ref: p, modelValue: i.value, "onUpdate:modelValue": (O) => i.value = O, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-text-field--plain-underlined": ["plain", "underlined"].includes(e.variant) }, e.class], style: e.style }, S, w, { centerAffix: !y.value, focused: c.value }), { ...a, default: (O) => {
      let { id: j, isDisabled: q, isDirty: x, isReadonly: E, isValid: L } = O;
      return d(Ml, Z({ ref: g, onMousedown: A, onClick: k, "onClick:clear": M, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: e.role }, P, { id: j.value, active: h.value || x.value, dirty: x.value || e.dirty, disabled: q.value, focused: c.value, error: L.value === !1 }), { ...a, default: (N) => {
        let { props: { class: G, ...$ } } = N;
        const B = Be(d("input", Z({ ref: b, value: i.value, onInput: _, autofocus: e.autofocus, readonly: E.value, disabled: q.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: I, onBlur: o }, $, C), null), [[Xe("intersect"), { handler: f }, null, { once: !0 }]]);
        return d(fe, null, [e.prefix && d("span", { class: "v-text-field__prefix" }, [d("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), a.default ? d("div", { class: G, "data-no-activator": "" }, [a.default(), B]) : ti(B, { class: G }), e.suffix && d("span", { class: "v-text-field__suffix" }, [d("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: V ? (O) => {
      var j;
      return d(fe, null, [(j = a.details) == null ? void 0 : j.call(a, O), T && d(fe, null, [d("span", null, null), d(Na, { active: e.persistentCounter || c.value, value: s.value, max: m.value }, a.counter)])]);
    } : void 0 });
  }), Ht({}, p, g, b);
} }), Pr = H({ renderless: Boolean, ...ie() }, "VVirtualScrollItem"), $r = Q()({ name: "VVirtualScrollItem", inheritAttrs: !1, props: Pr(), emits: { "update:height": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: a } = t;
  const { resizeRef: i, contentRect: c } = Al(void 0, "border");
  K(() => {
    var r;
    return (r = c.value) == null ? void 0 : r.height;
  }, (r) => {
    r != null && l("update:height", r);
  }), le(() => {
    var r, o;
    return e.renderless ? d(fe, null, [(r = a.default) == null ? void 0 : r.call(a, { itemRef: i })]) : d("div", Z({ ref: i, class: ["v-virtual-scroll__item", e.class], style: e.style }, n), [(o = a.default) == null ? void 0 : o.call(a)]);
  });
} }), Er = H({ itemHeight: { type: [Number, String], default: 48 } }, "virtual");
function Tr(e, t, n) {
  const l = ue(0), a = ue(e.itemHeight), i = v({ get: () => parseInt(a.value ?? 0, 10), set(k) {
    a.value = k;
  } }), c = R(), { resizeRef: r, contentRect: o } = Al();
  Ue(() => {
    r.value = c.value;
  });
  const s = La(), m = /* @__PURE__ */ new Map();
  let y = Array.from({ length: t.value.length });
  const f = v(() => {
    const k = (o.value && c.value !== document.documentElement ? o.value.height : s.height.value) - ((n == null ? void 0 : n.value) ?? 0);
    return Math.ceil(k / i.value * 1.7 + 1);
  });
  function p(k) {
    return y.slice(0, k).reduce((M, _) => M + (_ || i.value), 0);
  }
  let g = 0;
  const b = v(() => Math.min(t.value.length, l.value + f.value)), h = v(() => t.value.slice(l.value, b.value).map((k, M) => ({ raw: k, index: M + l.value }))), I = v(() => p(l.value)), A = v(() => p(t.value.length) - p(b.value));
  return K(() => t.value.length, () => {
    y = function(k) {
      let M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return Array.from({ length: k }, (_, T) => M + T);
    }(t.value.length).map(() => i.value), m.forEach((k, M) => {
      const _ = t.value.indexOf(M);
      _ === -1 ? m.delete(M) : y[_] = k;
    });
  }), { containerRef: c, computedItems: h, itemHeight: i, paddingTop: I, paddingBottom: A, scrollToIndex: function(k) {
    if (!c.value)
      return;
    const M = p(k);
    c.value.scrollTop = M;
  }, handleScroll: function() {
    if (!c.value || !o.value)
      return;
    const k = o.value.height - 56, M = c.value.scrollTop, _ = M < g ? -1 : 1, T = function(D) {
      const w = t.value.length;
      let P = 0, O = 0;
      for (; O < D && P < w; )
        O += y[P++] || i.value;
      return P - 1;
    }(M + k / 2), V = Math.round(f.value / 3), S = T - V, C = l.value + 2 * V - 1;
    _ === -1 && T <= C ? l.value = Jn(S, 0, t.value.length) : _ === 1 && T >= C && (l.value = Jn(S, 0, t.value.length - f.value)), g = M;
  }, handleItemResize: function(k, M) {
    i.value = Math.max(i.value, M), y[k] = M, m.set(t.value[k], M);
  } };
}
const zr = H({ items: { type: Array, default: () => [] }, renderless: Boolean, ...Er(), ...ie(), ...gn() }, "VVirtualScroll"), Dr = Q()({ name: "VVirtualScroll", props: zr(), setup(e, t) {
  let { slots: n } = t;
  const l = ke("VVirtualScroll"), { dimensionStyles: a } = hn(e), { containerRef: i, handleScroll: c, handleItemResize: r, scrollToIndex: o, paddingTop: s, paddingBottom: m, computedItems: y } = Tr(e, ne(e, "items"));
  return pn(() => e.renderless, () => {
    Ln(() => {
      var f;
      i.value = Yo(l.vnode.el, !0), (f = i.value) == null || f.addEventListener("scroll", c);
    }), we(() => {
      var f;
      (f = i.value) == null || f.removeEventListener("scroll", c);
    });
  }), le(() => {
    const f = y.value.map((p) => d($r, { key: p.index, renderless: e.renderless, "onUpdate:height": (g) => r(p.index, g) }, { default: (g) => {
      var b;
      return (b = n.default) == null ? void 0 : b.call(n, { item: p.raw, index: p.index, ...g });
    } }));
    return e.renderless ? d(fe, null, [d("div", { class: "v-virtual-scroll__spacer", style: { paddingTop: te(s.value) } }, null), f, d("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: te(m.value) } }, null)]) : d("div", { ref: i, class: ["v-virtual-scroll", e.class], onScroll: c, style: [a.value, e.style] }, [d("div", { class: "v-virtual-scroll__container", style: { paddingTop: te(s.value), paddingBottom: te(m.value) } }, [f])]);
  }), { scrollToIndex: o };
} });
function Lr(e, t) {
  const n = ue(!1);
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
const Mr = H({ chips: Boolean, closableChips: Boolean, closeText: { type: String, default: "$vuetify.close" }, openText: { type: String, default: "$vuetify.open" }, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, menu: Boolean, menuIcon: { type: ce, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, itemColor: String, ...Ea({ itemChildren: !1 }) }, "Select"), Wr = H({ ...Mr(), ...it(Ga({ modelValue: null, role: "button" }), ["validationValue", "dirty", "appendInnerIcon"]), ...ct({ transition: { component: Zo } }) }, "VSelect"), Rr = Q()({ name: "VSelect", props: Wr(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:menu": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { t: l } = _l(), a = R(), i = R(), c = R(), r = me(e, "menu"), o = v({ get: () => r.value, set: (x) => {
    var E;
    r.value && !x && ((E = i.value) != null && E.ΨopenChildren) || (r.value = x);
  } }), { items: s, transformIn: m, transformOut: y } = function(x) {
    const E = v(() => Ta(x, x.items)), L = v(() => E.value.some((N) => N.value === null));
    return { items: E, transformIn: function(N) {
      return L.value || (N = N.filter((G) => G !== null)), N.map((G) => x.returnObject && typeof G == "string" ? vl(x, G) : E.value.find(($) => x.valueComparator(G, $.value)) || vl(x, G));
    }, transformOut: function(N) {
      return x.returnObject ? N.map((G) => {
        let { raw: $ } = G;
        return $;
      }) : N.map((G) => {
        let { value: $ } = G;
        return $;
      });
    } };
  }(e), f = me(e, "modelValue", [], (x) => m(x === null ? [null] : tn(x)), (x) => {
    const E = y(x);
    return e.multiple ? E : E[0] ?? null;
  }), p = wa(), g = v(() => f.value.map((x) => x.value)), b = ue(!1), h = v(() => o.value ? e.closeText : e.openText);
  let I, A = "";
  const k = v(() => e.hideSelected ? s.value.filter((x) => !f.value.some((E) => E === x)) : s.value), M = v(() => e.hideNoData && !s.value.length || e.readonly || (p == null ? void 0 : p.isReadonly.value)), _ = R(), { onListScroll: T, onListKeydown: V } = Lr(_, a);
  function S(x) {
    e.openOnClear && (o.value = !0);
  }
  function C() {
    M.value || (o.value = !o.value);
  }
  function D(x) {
    var N, G;
    if (!x.key || e.readonly || p != null && p.isReadonly.value || (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(x.key) && x.preventDefault(), ["Enter", "ArrowDown", " "].includes(x.key) && (o.value = !0), ["Escape", "Tab"].includes(x.key) && (o.value = !1), x.key === "Home" ? (N = _.value) == null || N.focus("first") : x.key === "End" && ((G = _.value) == null || G.focus("last")), e.multiple || !function($) {
      const B = $.key.length === 1, W = !$.ctrlKey && !$.metaKey && !$.altKey;
      return B && W;
    }(x)))
      return;
    const E = performance.now();
    E - I > 1e3 && (A = ""), A += x.key.toLowerCase(), I = E;
    const L = s.value.find(($) => $.title.toLowerCase().startsWith(A));
    L !== void 0 && (f.value = [L]);
  }
  function w(x) {
    if (e.multiple) {
      const E = f.value.findIndex((L) => e.valueComparator(L.value, x.value));
      if (E === -1)
        f.value = [...f.value, x];
      else {
        const L = [...f.value];
        L.splice(E, 1), f.value = L;
      }
    } else
      f.value = [x], o.value = !1;
  }
  function P(x) {
    var E;
    (E = _.value) != null && E.$el.contains(x.relatedTarget) || (o.value = !1);
  }
  function O() {
    var x;
    b.value && ((x = a.value) == null || x.focus());
  }
  function j(x) {
    b.value = !0;
  }
  function q(x) {
    if (x == null)
      f.value = [];
    else if (Vt(a.value, ":autofill") || Vt(a.value, ":-webkit-autofill")) {
      const E = s.value.find((L) => L.title === x);
      E && w(E);
    } else
      a.value && (a.value.value = "");
  }
  return K(o, () => {
    if (!e.hideSelected && o.value && f.value.length) {
      const x = k.value.findIndex((E) => f.value.some((L) => e.valueComparator(L.value, E.value)));
      Ee && window.requestAnimationFrame(() => {
        var E;
        x >= 0 && ((E = c.value) == null || E.scrollToIndex(x));
      });
    }
  }), le(() => {
    const x = !(!e.chips && !n.chip), E = !!(!e.hideNoData || k.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), L = f.value.length > 0, [N] = gl.filterProps(e), G = L || !b.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
    return d(gl, Z({ ref: a }, N, { modelValue: f.value.map(($) => $.props.value).join(", "), "onUpdate:modelValue": q, focused: b.value, "onUpdate:focused": ($) => b.value = $, validationValue: f.externalValue, counterValue: f.value.length, dirty: L, class: ["v-select", { "v-select--active-menu": o.value, "v-select--chips": !!e.chips, ["v-select--" + (e.multiple ? "multiple" : "single")]: !0, "v-select--selected": f.value.length, "v-select--selection-slot": !!n.selection }, e.class], style: e.style, inputmode: "none", placeholder: G, "onClick:clear": S, "onMousedown:control": C, onBlur: P, onKeydown: D, "aria-label": l(h.value), title: l(h.value) }), { ...n, default: () => d(fe, null, [d(Fr, Z({ ref: i, modelValue: o.value, "onUpdate:modelValue": ($) => o.value = $, activator: "parent", contentClass: "v-select__content", disabled: M.value, eager: e.eager, maxHeight: 310, openOnClick: !1, closeOnContentClick: !1, transition: e.transition, onAfterLeave: O }, e.menuProps), { default: () => [E && d(yr, { ref: _, selected: g.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: ($) => $.preventDefault(), onKeydown: V, onFocusin: j, onScrollPassive: T, tabindex: "-1", color: e.itemColor ?? e.color }, { default: () => {
      var $, B, W;
      return [($ = n["prepend-item"]) == null ? void 0 : $.call(n), !k.value.length && !e.hideNoData && (((B = n["no-data"]) == null ? void 0 : B.call(n)) ?? d(Tt, { title: l(e.noDataText) }, null)), d(Dr, { ref: c, renderless: !0, items: k.value }, { default: (F) => {
        var re;
        let { item: z, index: U, itemRef: J } = F;
        const Y = Z(z.props, { ref: J, key: U, onClick: () => w(z) });
        return ((re = n.item) == null ? void 0 : re.call(n, { item: z, index: U, props: Y })) ?? d(Tt, Y, { prepend: (Ae) => {
          let { isSelected: Gn } = Ae;
          return d(fe, null, [e.multiple && !e.hideSelected ? d(cl, { key: z.value, modelValue: Gn, ripple: !1, tabindex: "-1" }, null) : void 0, z.props.prependIcon && d(de, { icon: z.props.prependIcon }, null)]);
        } });
      } }), (W = n["append-item"]) == null ? void 0 : W.call(n)];
    } })] }), f.value.map(($, B) => {
      const W = { "onClick:close": function(U) {
        U.stopPropagation(), U.preventDefault(), w($);
      }, onMousedown(U) {
        U.preventDefault(), U.stopPropagation();
      }, modelValue: !0, "onUpdate:modelValue": void 0 }, F = x ? !!n.chip : !!n.selection, z = F ? jo(x ? n.chip({ item: $, index: B, props: W }) : n.selection({ item: $, index: B })) : void 0;
      if (!F || z)
        return d("div", { key: $.value, class: "v-select__selection" }, [x ? n.chip ? d(Se, { key: "chip-defaults", defaults: { VChip: { closable: e.closableChips, size: "small", text: $.title } } }, { default: () => [z] }) : d(Zi, Z({ key: "chip", closable: e.closableChips, size: "small", text: $.title, disabled: $.props.disabled }, W), null) : z ?? d("span", { class: "v-select__selection-text" }, [$.title, e.multiple && B < f.value.length - 1 && d("span", { class: "v-select__selection-comma" }, [zo(",")])])]);
    })]), "append-inner": function() {
      var F;
      for (var $ = arguments.length, B = new Array($), W = 0; W < $; W++)
        B[W] = arguments[W];
      return d(fe, null, [(F = n["append-inner"]) == null ? void 0 : F.call(n, ...B), e.menuIcon ? d(de, { class: "v-select__menu-icon", icon: e.menuIcon }, null) : void 0]);
    } });
  }), Ht({ isFocused: b, menu: o, select: w }, a);
} }), Nr = Q()({ name: "VCardActions", props: ie(), setup(e, t) {
  let { slots: n } = t;
  return Mn({ VBtn: { variant: "text" } }), le(() => {
    var l;
    return d("div", { class: ["v-card-actions", e.class], style: e.style }, [(l = n.default) == null ? void 0 : l.call(n)]);
  }), {};
} }), jr = st("v-card-subtitle"), Gr = st("v-card-title"), qr = H({ appendAvatar: String, appendIcon: ce, prependAvatar: String, prependIcon: ce, subtitle: String, title: String, ...ie(), ...je() }, "VCardItem"), Hr = Q()({ name: "VCardItem", props: qr(), setup(e, t) {
  let { slots: n } = t;
  return le(() => {
    var s;
    const l = !(!e.prependAvatar && !e.prependIcon), a = !(!l && !n.prepend), i = !(!e.appendAvatar && !e.appendIcon), c = !(!i && !n.append), r = !(!e.title && !n.title), o = !(!e.subtitle && !n.subtitle);
    return d("div", { class: ["v-card-item", e.class], style: e.style }, [a && d("div", { key: "prepend", class: "v-card-item__prepend" }, [n.prepend ? d(Se, { key: "prepend-defaults", disabled: !l, defaults: { VAvatar: { density: e.density, icon: e.prependIcon, image: e.prependAvatar } } }, n.prepend) : l && d(zn, { key: "prepend-avatar", density: e.density, icon: e.prependIcon, image: e.prependAvatar }, null)]), d("div", { class: "v-card-item__content" }, [r && d(Gr, { key: "title" }, { default: () => {
      var m;
      return [((m = n.title) == null ? void 0 : m.call(n)) ?? e.title];
    } }), o && d(jr, { key: "subtitle" }, { default: () => {
      var m;
      return [((m = n.subtitle) == null ? void 0 : m.call(n)) ?? e.subtitle];
    } }), (s = n.default) == null ? void 0 : s.call(n)]), c && d("div", { key: "append", class: "v-card-item__append" }, [n.append ? d(Se, { key: "append-defaults", disabled: !i, defaults: { VAvatar: { density: e.density, icon: e.appendIcon, image: e.appendAvatar } } }, n.append) : i && d(zn, { key: "append-avatar", density: e.density, icon: e.appendIcon, image: e.appendAvatar }, null)])]);
  }), {};
} }), vn = st("v-card-text"), Ur = H({ appendAvatar: String, appendIcon: ce, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: ce, ripple: { type: [Boolean, Object], default: !0 }, subtitle: String, text: String, title: String, ...Wn(), ...ie(), ...je(), ...gn(), ...Nn(), ...Tl(), ...$l(), ...da(), ...Je(), ...qt(), ...$e(), ...Ce(), ...an({ variant: "elevated" }) }, "VCard"), Fn = Q()({ name: "VCard", directives: { Ripple: yt }, props: Ur(), setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { themeClasses: a } = Ve(e), { borderClasses: i } = Rn(e), { colorClasses: c, colorStyles: r, variantClasses: o } = pt(e), { densityClasses: s } = Qe(e), { dimensionStyles: m } = hn(e), { elevationClasses: y } = jn(e), { loaderClasses: f } = jt(e), { locationStyles: p } = El(e), { positionClasses: g } = pa(e), { roundedClasses: b } = Ze(e), h = Gt(e, n), I = v(() => e.link !== !1 && h.isLink.value), A = v(() => !e.disabled && e.link !== !1 && (e.link || h.isClickable.value));
  return le(() => {
    const k = I.value ? "a" : e.tag, M = !(!l.title && !e.title), _ = !(!l.subtitle && !e.subtitle), T = M || _, V = !!(l.append || e.appendAvatar || e.appendIcon), S = !!(l.prepend || e.prependAvatar || e.prependIcon), C = !(!l.image && !e.image), D = T || S || V, w = !(!l.text && !e.text);
    return Be(d(k, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": A.value }, a.value, i.value, c.value, s.value, y.value, f.value, g.value, b.value, o.value, e.class], style: [r.value, m.value, p.value, e.style], href: h.href.value, onClick: A.value && h.navigate, tabindex: e.disabled ? -1 : void 0 }, { default: () => {
      var P;
      return [C && d("div", { key: "image", class: "v-card__image" }, [l.image ? d(Se, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: !0, src: e.image } } }, l.image) : d(ta, { key: "image-img", cover: !0, src: e.image }, null)]), d(zl, { name: "v-card", active: !!e.loading, color: typeof e.loading == "boolean" ? void 0 : e.loading }, { default: l.loader }), D && d(Hr, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: l.item, prepend: l.prepend, title: l.title, subtitle: l.subtitle, append: l.append }), w && d(vn, { key: "text" }, { default: () => {
        var O;
        return [((O = l.text) == null ? void 0 : O.call(l)) ?? e.text];
      } }), (P = l.default) == null ? void 0 : P.call(l), l.actions && d(Nr, null, { default: l.actions }), dt(A.value, "v-card")];
    } }), [[Xe("ripple"), A.value && e.ripple]]);
  }), {};
} }), Yr = H({ indeterminate: Boolean, inset: Boolean, flat: Boolean, loading: { type: [Boolean, String], default: !1 }, ...gt(), ...Dl() }, "VSwitch"), Xr = Q()({ name: "VSwitch", inheritAttrs: !1, props: Yr(), emits: { "update:focused": (e) => !0, "update:modelValue": () => !0, "update:indeterminate": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const a = me(e, "indeterminate"), i = me(e, "modelValue"), { loaderClasses: c } = jt(e), { isFocused: r, focus: o, blur: s } = mt(e), m = R(), y = v(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), f = Le(), p = v(() => e.id || `switch-${f}`);
  function g() {
    a.value && (a.value = !1);
  }
  function b(h) {
    var I, A;
    h.stopPropagation(), h.preventDefault(), (A = (I = m.value) == null ? void 0 : I.input) == null || A.click();
  }
  return le(() => {
    const [h, I] = rt(n), [A, k] = ln.filterProps(e), [M, _] = Et.filterProps(e);
    return d(ln, Z({ class: ["v-switch", { "v-switch--inset": e.inset }, { "v-switch--indeterminate": a.value }, c.value, e.class], style: e.style }, h, A, { id: p.value, focused: r.value }), { ...l, default: (T) => {
      let { id: V, messagesId: S, isDisabled: C, isReadonly: D, isValid: w } = T;
      return d(Et, Z({ ref: m }, M, { modelValue: i.value, "onUpdate:modelValue": [(P) => i.value = P, g], id: V.value, "aria-describedby": S.value, type: "checkbox", "aria-checked": a.value ? "mixed" : void 0, disabled: C.value, readonly: D.value, onFocus: o, onBlur: s }, I), { ...l, default: (P) => {
        let { backgroundColorClasses: O, backgroundColorStyles: j } = P;
        return d("div", { class: ["v-switch__track", ...O.value], style: j.value, onClick: b }, null);
      }, input: (P) => {
        let { inputNode: O, icon: j, backgroundColorClasses: q, backgroundColorStyles: x } = P;
        return d(fe, null, [O, d("div", { class: ["v-switch__thumb", { "v-switch__thumb--filled": j || e.loading }, e.inset ? void 0 : q.value], style: e.inset ? void 0 : x.value }, [d(Bi, null, { default: () => [e.loading ? d(zl, { name: "v-switch", active: !0, color: w.value === !1 ? void 0 : y.value }, { default: (E) => l.loader ? l.loader(E) : d(ca, { active: E.isActive, color: E.color, indeterminate: !0, size: "16", width: "2" }, null) }) : j && d(de, { key: j, icon: j, size: "x-small" }, null)] })])]);
      } });
    } });
  }), {};
} }), Kr = H({ autoGrow: Boolean, autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, noResize: Boolean, rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) }, maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, suffix: String, modelModifiers: Object, ...gt(), ...Ll() }, "VTextarea"), Jr = Q()({ name: "VTextarea", directives: { Intersect: Ol }, inheritAttrs: !1, props: Kr(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: a } = t;
  const i = me(e, "modelValue"), { isFocused: c, focus: r, blur: o } = mt(e), s = v(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : (i.value || "").toString().length), m = v(() => n.maxlength ? n.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter);
  function y(w, P) {
    var O, j;
    e.autofocus && w && ((j = (O = P[0].target) == null ? void 0 : O.focus) == null || j.call(O));
  }
  const f = R(), p = R(), g = ue(""), b = R(), h = v(() => e.persistentPlaceholder || c.value || e.active);
  function I() {
    var w;
    b.value !== document.activeElement && ((w = b.value) == null || w.focus()), c.value || r();
  }
  function A(w) {
    I(), l("click:control", w);
  }
  function k(w) {
    l("mousedown:control", w);
  }
  function M(w) {
    w.stopPropagation(), I(), xe(() => {
      i.value = "", Ro(e["onClick:clear"], w);
    });
  }
  function _(w) {
    var O;
    const P = w.target;
    if (i.value = P.value, (O = e.modelModifiers) == null ? void 0 : O.trim) {
      const j = [P.selectionStart, P.selectionEnd];
      xe(() => {
        P.selectionStart = j[0], P.selectionEnd = j[1];
      });
    }
  }
  const T = R(), V = R(+e.rows), S = v(() => ["plain", "underlined"].includes(e.variant));
  function C() {
    e.autoGrow && xe(() => {
      if (!T.value || !p.value)
        return;
      const w = getComputedStyle(T.value), P = getComputedStyle(p.value.$el), O = parseFloat(w.getPropertyValue("--v-field-padding-top")) + parseFloat(w.getPropertyValue("--v-input-padding-top")) + parseFloat(w.getPropertyValue("--v-field-padding-bottom")), j = T.value.scrollHeight, q = parseFloat(w.lineHeight), x = Jn(j ?? 0, Math.max(parseFloat(e.rows) * q + O, parseFloat(P.getPropertyValue("--v-input-control-height"))), parseFloat(e.maxRows) * q + O || 1 / 0);
      V.value = Math.floor((x - O) / q), g.value = te(x);
    });
  }
  let D;
  return Ue(() => {
    e.autoGrow || (V.value = +e.rows);
  }), Ln(C), K(i, C), K(() => e.rows, C), K(() => e.maxRows, C), K(() => e.density, C), K(T, (w) => {
    w ? (D = new ResizeObserver(C), D.observe(T.value)) : D == null || D.disconnect();
  }), on(() => {
    D == null || D.disconnect();
  }), le(() => {
    const w = !!(a.counter || e.counter || e.counterValue), P = !(!w && !a.details), [O, j] = rt(n), [{ modelValue: q, ...x }] = ln.filterProps(e), [E] = ja(e);
    return d(ln, Z({ ref: f, modelValue: i.value, "onUpdate:modelValue": (L) => i.value = L, class: ["v-textarea v-text-field", { "v-textarea--prefixed": e.prefix, "v-textarea--suffixed": e.suffix, "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-textarea--auto-grow": e.autoGrow, "v-textarea--no-resize": e.noResize || e.autoGrow, "v-text-field--plain-underlined": S.value }, e.class], style: e.style }, O, x, { centerAffix: V.value === 1 && !S.value, focused: c.value }), { ...a, default: (L) => {
      let { isDisabled: N, isDirty: G, isReadonly: $, isValid: B } = L;
      return d(Ml, Z({ ref: p, style: { "--v-textarea-control-height": g.value }, onClick: A, onMousedown: k, "onClick:clear": M, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, E, { active: h.value || G.value, centerAffix: V.value === 1 && !S.value, dirty: G.value || e.dirty, disabled: N.value, focused: c.value, error: B.value === !1 }), { ...a, default: (W) => {
        let { props: { class: F, ...z } } = W;
        return d(fe, null, [e.prefix && d("span", { class: "v-text-field__prefix" }, [e.prefix]), Be(d("textarea", Z({ ref: b, class: F, value: i.value, onInput: _, autofocus: e.autofocus, readonly: $.value, disabled: N.value, placeholder: e.placeholder, rows: e.rows, name: e.name, onFocus: I, onBlur: o }, z, j), null), [[Xe("intersect"), { handler: y }, null, { once: !0 }]]), e.autoGrow && Be(d("textarea", { class: [F, "v-textarea__sizer"], id: `${z.id}-sizer`, "onUpdate:modelValue": (U) => i.value = U, ref: T, readonly: !0, "aria-hidden": "true" }, null), [[li, i.value]]), e.suffix && d("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: P ? (L) => {
      var N;
      return d(fe, null, [(N = a.details) == null ? void 0 : N.call(a, L), w && d(fe, null, [d("span", null, null), d(Na, { active: e.persistentCounter || c.value, value: s.value, max: m.value }, a.counter)])]);
    } : void 0 });
  }), Ht({}, f, p, b);
} }), qa = Re({ __name: "BooleanIcons", props: _e({ iconFalseColor: {}, iconFalseTitle: {}, iconTrueColor: {}, iconTrueTitle: {}, iconFalse: {}, iconTrue: {} }, { modelValue: {} }), emits: ["update:modelValue"], setup(e) {
  const t = e, n = ve(Symbol.for("vuetify:icons")), l = sn(e, "modelValue"), a = v(() => De({ icon: t.iconFalse, iconOptions: n, name: "false" })), i = v(() => De({ icon: t.iconTrue, iconOptions: n, name: "true" }));
  return (c, r) => l.value ? (X(), he(u(de), { key: 0, class: "v-inline-fields--boolean-icons fa-fw", color: c.iconTrueColor, icon: u(i), size: "x-small", title: c.iconTrueTitle }, null, 8, ["color", "icon", "title"])) : (X(), he(u(de), { key: 1, class: "v-inline-fields--boolean-icons fa-fw", color: c.iconFalseColor, icon: u(a), size: "x-small", title: c.iconFalseTitle }, null, 8, ["color", "icon", "title"]));
} }), ae = "v-inline-fields", Vn = (e) => {
  const { field: t = "", density: n = "", disabled: l = !1, iconSet: a = "mdi", loading: i = !1, loadingWait: c, tableField: r = !1, variant: o } = e, s = n && o;
  return { [`${ae}`]: !0, [`${ae}--container`]: !0, [`${ae}--container-disabled`]: u(l), [`${ae}--container-table`]: r, [`${ae}--container-icon-set-${a}`]: !0, [`${ae}--container-loading`]: i && c, [`${ae}--container-${t}`]: !0, [`${ae}--container-${t}-${n}`]: !0, [`${ae}--container-${t}-${n}-${o}`]: s, [`${ae}--container-${t}-${o}`]: o, [`${ae}--container-${t}-${o}-${n}`]: s, [`${ae}--container-${n}`]: n, [`${ae}--container-${n}-${t}`]: n, [`${ae}--container-${n}-${o}`]: s, [`${ae}--container-${o}`]: o, [`${ae}--container-${o}-${n}`]: s, [`${ae}--container-${o}-${t}`]: o };
}, An = (e) => {
  const { field: t = "", density: n = "" } = e;
  return { [`${ae}--display-container`]: !0, [`${ae}--display-wrapper-value`]: !0, [`${t}`]: !0, "v-input": !0, [`v-input--density-${n}`]: !0, "v-input--horizontal": !0 };
}, Dt = (e) => {
  const { density: t = "", variant: n = "" } = e;
  return { "v-input": !0, "v-input--dirty": !0, "v-input--horizontal": !0, "v-text-field": !0, [`v-input--density-${t}`]: !0, [`v-text-field--plain-${n}`]: !0 };
}, Ha = (e) => {
  const { density: t = "" } = e;
  return { [`v-selection-control--density-${t}`]: !0 };
}, Wl = (e, t, n) => {
  const { error: l = !1, empty: a = !1 } = n;
  return { [`${ae}`]: !0, [`${ae}--display-value-${e}`]: !0, [`${ae}--display-value`]: !0, [`${ae}--display-value-empty`]: u(a), [`text-${t}`]: !u(l), "text-danger": u(l) };
}, _n = (e) => {
  const { name: t, active: n = !1 } = e;
  return { [`${ae}`]: !0, [`${ae}--field`]: !0, [`${ae}--field-${t}`]: !0, [`${ae}--field-active`]: n };
}, On = (e) => {
  const { name: t, showField: n } = e;
  return { [`${ae}--card-container`]: !0, [`${ae}--card-container-${t}`]: !0, "d-none": !n };
};
function _o(e) {
  if (!e)
    return 100;
  if (e.toString().includes(".")) {
    const t = 100 * Number(e);
    return t >= 100 ? 100 : t;
  }
  return Number(e) >= 100 ? 100 : Number(e);
}
function Oo(e) {
  let t = function(y) {
    const f = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let p = y;
    return Object.entries(f).forEach(([g, b]) => {
      y.toLowerCase() != g.toLowerCase() || (p = b);
    }), p;
  }(e), n = 0, l = 0, a = 0, i = 100, c = 0, r = 0, o = 0;
  if (t.substring(0, 1) === "#")
    t = function(y) {
      let f = y.replace("#", "");
      f.length === 3 && (f = f.split("").map((I) => I + I).join(""));
      const p = parseInt(f.substring(0, 2), 16), g = parseInt(f.substring(2, 4), 16), b = parseInt(f.substring(4, 6), 16);
      return [p, g, b, 100];
    }(t);
  else if (t.includes("rgb"))
    t = [...t.matchAll(/[\d+.\d+]+/g)].map(Number);
  else if (t.includes("hsl"))
    return t = [...t.matchAll(/[\d+.\d+]+/g)].map(String), n = t[0], l = t[1], a = t[2], i = _o(t[3]), `${n} ${l}% ${a}% / ${i}%`;
  [c, r, o, i] = t, c /= 255, r /= 255, o /= 255, i = _o(i);
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
const Zr = (e, t) => {
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
  return n ? `hsl(${Oo(n[1])})` : `hsl(${Oo(e)})`;
}, Yn = (e) => {
  const { str: t, unit: n = "px" } = e;
  if (t != null && t !== "")
    return +t ? `${Number(t)}${n}` : String(t);
}, Ua = (e) => {
  var a;
  const { modelValue: t, trueValue: n } = e, l = u(t);
  return ((a = l == null ? void 0 : l.toLowerCase) == null ? void 0 : a.call(l)) === "true" || l === "1" || l == "1" || l === !0 || l == n || l === n;
}, Rl = (e) => {
  const { underlineStyle: t, underlineWidth: n, color: l, error: a, theme: i, underlined: c } = e;
  let { underlineColor: r } = e;
  r = r || l;
  const o = { "border-bottom-color": Zr(r, i), "border-bottom-style": t, "border-bottom-width": n };
  return u(a) && (o["border-bottom-color"] = "rgb(var(--v-theme-danger))"), c || (o["border-bottom"] = "none"), o;
}, fn = (e) => {
  const { cardMinWidth: t, cardOffsetX: n, cardOffsetY: l, cardWidth: a, field: i, name: c = "" } = e, r = ((m) => {
    const { cardOffsetX: y, cardOffsetY: f, field: p } = m;
    if (!p)
      return { bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0, x: 0, y: 0 };
    const { x: g, y: b } = p.getBoundingClientRect(), { width: h, height: I } = p.getBoundingClientRect(), { right: A, bottom: k } = p.getBoundingClientRect();
    return { bottom: Yn({ str: k + Number(f) }), height: I, left: Yn({ str: 0 + Number(y) }), right: Yn({ str: A + Number(y) }), top: Yn({ str: 2 + Number(f) }), width: Yn({ str: h }), x: g, y: b };
  })({ cardOffsetX: n, cardOffsetY: l, field: i });
  let o = t, s = a;
  return s || (s = c === "checkbox" ? "fit-content" : r.width), o || (o = c === "checkbox" ? "fit-content" : r.width), { left: r.left, top: r.top, width: s, zIndex: 10 };
}, Qr = { class: "v-inline-fields--display-wrapper" }, Lt = Re({ __name: "DisplayedValue", props: { color: {}, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayValue: {}, empty: { type: Boolean }, error: { type: Boolean }, field: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean } }, emits: ["toggleField"], setup(e, { emit: t }) {
  const n = t, l = e, a = un(), i = Sl(), c = { displayValue: l.displayValue, empty: l.empty, error: l.error }, r = v(() => Wl(l.field, l.valueColor, { empty: l.empty, error: l.error })), o = v(() => Rl({ color: l.color, error: l.error, theme: i, underlineColor: l.underlineColor, underlineStyle: l.underlineStyle, underlineWidth: l.underlineWidth, underlined: l.underlined })), s = v(() => ((f) => {
    const { underlineWidth: p } = f;
    return { borderBottom: `${p || "0px"} solid transparent` };
  })({ underlineWidth: l.underlineWidth })), m = (f, p = !1) => ((g) => {
    const { inner: b = !1, position: h } = g;
    return { [`${ae}--display-icon`]: !b, [`${ae}--display-${h}-icon`]: !b, [`${ae}--display-${h}-inner-icon`]: b, "me-1": h === "prepend", "ms-1": h === "append" };
  })({ inner: p, position: f });
  function y() {
    n("toggleField");
  }
  return (f, p) => (X(), oe("div", Qr, [f.displayPrependIcon || u(a)["display.prepend"] ? (X(), oe("div", { key: 0, class: ee(m("prepend")), style: ge(u(s)) }, [u(a)["display.prepend"] ? Fe(f.$slots, "display.prepend", ye(Z({ key: 0 }, c))) : (X(), he(de, { key: 1, color: f.displayPrependIconColor, icon: f.displayPrependIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 6)) : pe("", !0), Ie("div", { class: ee(["d-inline-flex", u(r)]), style: ge(u(o)), onClick: y }, [f.displayPrependInnerIcon || u(a)["display.prependInner"] ? (X(), oe("div", { key: 0, class: ee(m("prepend", !0)) }, [u(a)["display.prependInner"] ? Fe(f.$slots, "display.prependInner", ye(Z({ key: 0 }, c))) : (X(), he(de, { key: 1, color: f.displayPrependInnerIconColor, icon: f.displayPrependInnerIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 2)) : pe("", !0), zo(" " + Il(f.displayValue) + " ", 1), f.displayAppendInnerIcon || u(a)["display.appendInner"] ? (X(), oe("div", { key: 1, class: ee(m("append", !0)) }, [u(a)["display.appendInner"] ? Fe(f.$slots, "display.appendInner", ye(Z({ key: 0 }, c))) : (X(), he(de, { key: 1, color: f.displayAppendInnerIconColor, icon: f.displayAppendInnerIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 2)) : pe("", !0)], 6), f.displayAppendIcon || u(a)["display.append"] ? (X(), oe("div", { key: 1, class: ee(m("append")), style: ge(u(s)) }, [u(a)["display.append"] ? Fe(f.$slots, "display.append", ye(Z({ key: 0 }, c))) : (X(), he(de, { key: 1, color: f.displayAppendIconColor, icon: f.displayAppendIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 6)) : pe("", !0)]));
} }), lt = Re({ __name: "SaveFieldButtons", props: { loading: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonVariant: {}, cancelButtonTitle: {}, cancelIconColor: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideSaveIcon: { type: Boolean }, loadingIconColor: {}, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIconColor: {}, cancelIcon: {}, loadingIcon: {}, saveIcon: {} }, emits: ["close", "save"], setup(e, { emit: t }) {
  const n = cn(), l = t, a = e, i = ve(Symbol.for("vuetify:icons")), c = v(() => a.error), r = v(() => ({ [`${ae}--save-fields-container`]: !0 })), o = v(() => a.loading), s = ze({ ...n, ...a }), m = v(() => (i == null ? void 0 : i.defaultSet) === "fa" ? "fa-spin" : (i == null ? void 0 : i.defaultSet) === "mdi" ? "mdi-spin" : ""), y = v(() => ((I) => {
    const { cancelButtonVariant: A } = I;
    return { "me-1": A === "elevated", "ms-1": !0 };
  })({ cancelButtonVariant: s.cancelButtonVariant })), f = v(() => De({ icon: a.cancelIcon, iconOptions: i, name: "false" })), p = v(() => De({ icon: a.loadingIcon, iconOptions: i, name: "loading" })), g = v(() => De({ icon: a.saveIcon, iconOptions: i, name: "save" }));
  function b() {
    l("close");
  }
  function h() {
    l("save");
  }
  return (I, A) => (X(), oe("div", Z({ class: u(r) }, I.$attrs), [u(s).hideSaveIcon ? pe("", !0) : (X(), he(ul, { key: 0, class: "ms-1", color: u(s).saveButtonColor, disabled: u(c), icon: "", size: u(s).saveButtonSize, title: u(o) ? "Loading" : u(s).saveButtonTitle, variant: u(s).saveButtonVariant, onClick: h }, { default: se(() => [u(o) ? (X(), he(de, { key: 1, class: ee(u(m)), color: u(s).loadingIconColor, icon: u(p) }, null, 8, ["class", "color", "icon"])) : (X(), he(de, { key: 0, color: u(c) ? "error" : u(s).saveIconColor, icon: u(g) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["color", "disabled", "size", "title", "variant"])), d(ul, { class: ee(u(y)), color: u(s).cancelButtonColor, icon: "", size: u(s).cancelButtonSize, title: u(s).cancelButtonTitle, variant: u(s).cancelButtonVariant, onClick: b }, { default: se(() => [u(s).hideSaveIcon && u(o) ? (X(), he(de, { key: 0, class: ee(u(m)), color: u(s).loadingIconColor, icon: u(p) }, null, 8, ["class", "color", "icon"])) : (X(), he(de, { key: 1, class: "text-default", color: u(s).cancelIconColor, icon: u(f) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["class", "color", "size", "title", "variant"])], 16));
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
      const r = (typeof c == "function" ? c : () => c)(l);
      r !== !0 && (typeof r == "string" ? a.push(r) : console.warn(`${r} is not a valid value. Rule functions must return boolean true or a string.`));
    }
    i = a.length > 0;
  }
  return { errors: i, results: a };
}, Pn = (e) => {
  const { attrs: t, closeSiblings: n, fieldOnly: l, props: a, showField: i, timeOpened: c } = e;
  let r = c;
  return n && !l && (r = /* @__PURE__ */ new Date()), { settings: { ...t, ...a }, showField: !u(i), timeOpened: r };
}, hl = (e) => {
  const { length: t = 0 } = e;
  let { suffix: n, text: l } = e;
  return l = l.toString(), n = n || "...", l.length > t ? `${l.substring(0, t)}${n}` : l;
}, $n = ["error", "update", "update:closeSiblingFields", "update:model-value"], es = ["cancelButtonColor", "cancelButtonSize", "cancelButtonTitle", "cancelButtonVariant", "cancelIcon", "cancelIconColor", "closeSiblings", "displayAppendIcon", "displayAppendIconColor", "displayAppendIconSize", "displayAppendInnerIcon", "displayAppendInnerIconColor", "displayAppendInnerIconSize", "displayPrependIcon", "displayPrependIconColor", "displayPrependIconSize", "displayPrependInnerIcon", "displayPrependInnerIconColor", "displayPrependInnerIconSize", "emptyText", "fieldOnly", "hideSaveIcon", "item", "loadingIcon", "loadingIconColor", "loadingWait", "saveButtonColor", "saveButtonSize", "saveButtonTitle", "saveButtonVariant", "saveIcon", "saveIconColor", "tableField", "truncateLength", "truncateSuffix", "underlineColor", "underlineStyle", "underlineWidth", "underlined", "valueColor"], Kn = (e) => {
  let t = e;
  return t = Object.entries(t).filter(([n]) => !es.includes(n)), Object.fromEntries(t);
}, ns = { class: "v-selection-control__wrapper" }, ts = Re({ __name: "VInlineCheckbox", props: _e(Sn({ density: {}, falseIcon: {}, trueIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...ai }), { modelValue: {} }), emits: _e([...$n], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = sn(e, "modelValue"), l = cn(), a = un(), i = t, c = ve(Symbol.for("vuetify:icons")), r = Sl(), o = e;
  let s = ze({ ...l, ...o });
  const m = v(() => o.loading), y = v(() => o.disabled), f = R(!1), p = R(!1), g = R(null), b = v(() => Kn(s)), h = v(() => ({ ...kn, ...o.cardProps }));
  K(() => m.value, (F, z) => {
    !F && z && p.value && N();
  });
  const I = v(() => De({ icon: o.trueIcon, iconOptions: c, name: "checkboxFalse" })), A = v(() => De({ icon: o.iconTrue, iconOptions: c, name: "checkboxTrue" })), k = v(() => n.value == s.trueValue), M = v(() => Ua({ modelValue: n, trueValue: s.trueValue })), _ = v(() => Vn({ density: s.density, disabled: y.value, field: "v-checkbox", loading: m.value, loadingWait: s.loadingWait, tableField: s.tableField })), T = v(() => An({ density: s.density, field: "v-checkbox" })), V = Ha({ density: s.density }), S = v(() => _n({ active: p.value, name: "checkbox" })), C = v(() => Wl("checkbox", s.valueColor, { error: f })), D = v(() => On({ name: "checkbox", showField: p.value })), w = v(() => ({})), P = v(() => Rl({ color: s.color, error: f, theme: r, underlineColor: s.underlineColor, underlineStyle: s.underlineStyle, underlineWidth: s.underlineWidth, underlined: s.underlined })), O = v(() => q.value);
  function j() {
    f.value = !1, N();
  }
  const q = R(), x = R(null), E = R("body"), L = oi();
  function N() {
    var z, U;
    if (y.value || s.loadingWait && m.value)
      return;
    q.value = fn({ cardMinWidth: (z = s.cardProps) == null ? void 0 : z.minWidth, cardOffsetX: s.cardOffsetX, cardOffsetY: s.cardOffsetY, cardWidth: (U = s.cardProps) == null ? void 0 : U.width, field: x.value, name: "checkbox" });
    const F = Pn({ attrs: l, closeSiblings: s.closeSiblings, fieldOnly: s.fieldOnly, props: o, showField: p, timeOpened: g.value });
    s = { ...s, ...F.settings }, p.value = F.showField, g.value = F.timeOpened, $ !== null && s.closeSiblings && p.value && !s.fieldOnly && $.emit(F.timeOpened);
  }
  function G(F) {
    n.value = F, i("update", F), s.loadingWait || N();
  }
  let $, B;
  function W(F) {
    i("update:closeSiblingFields", g), p.value && g.value !== F && N();
  }
  return K(() => L, () => {
    var F, z;
    q.value = fn({ cardMinWidth: (F = s.cardProps) == null ? void 0 : F.minWidth, cardOffsetX: s.cardOffsetX, cardOffsetY: s.cardOffsetY, cardWidth: (z = s.cardProps) == null ? void 0 : z.width, field: x.value, name: "checkbox" });
  }, { deep: !0 }), s.closeSiblings && import("@vueuse/core").then(({ useEventBus: F }) => {
    $ = F(Bn), B = $.on(W);
  }), xn(() => {
    B !== void 0 && $.off(W);
  }), (F, z) => (X(), oe("div", { ref_key: "inlineFieldsContainer", ref: x, class: ee(u(_)), style: ge(u(w)) }, [!u(p) && !u(s).fieldOnly || u(s).cardField ? (X(), oe("div", { key: 0, class: ee(u(T)) }, [Ie("div", { class: ee(u(V)) }, [Ie("div", ns, [F.icons ? (X(), oe("div", { key: 0, class: ee(u(C)), style: ge(u(P)), onClick: N }, [d(u(qa), { modelValue: u(M), "onUpdate:modelValue": z[0] || (z[0] = (U) => mn(M) ? M.value = U : null), "icon-false": u(s).iconFalse, "icon-false-color": u(s).iconFalseColor, "icon-false-title": u(s).iconFalseTitle, "icon-true": u(s).iconTrue, "icon-true-color": u(s).iconTrueColor, "icon-true-title": u(s).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (X(), oe("div", { key: 1, class: ee(["d-inline-flex align-center justify-center", u(C)]), style: ge(u(P)), onClick: N }, Il(u(k)), 7))])], 2)], 2)) : pe("", !0), u(p) || u(s).fieldOnly || u(s).cardField ? (X(), oe("div", { key: 1, class: ee(u(S)) }, [(X(), he(rn, { disabled: !u(s).cardField, to: u(E) }, [d(Yi, Z(u(b), { color: u(s).color, density: u(s).density, disabled: u(m) || u(y), error: u(f), "false-icon": u(I), "false-value": u(s).falseValue, "hide-details": u(s).hideDetails, label: u(s).label, "model-value": u(M), "true-icon": u(A), "true-value": u(s).trueValue, "onUpdate:modelValue": G }), Ge({ _: 2 }, [qe(u(a), (U, J) => ({ name: J, fn: se((Y) => [Fe(F.$slots, J, ye(be({ ...Y })))]) })), u(a).append ? void 0 : { name: "append", fn: se(() => [d(u(lt), { "cancel-button-color": u(s).cancelButtonColor, "cancel-button-size": u(s).cancelButtonSize, "cancel-button-title": u(s).cancelButtonTitle, "cancel-button-variant": u(s).cancelButtonVariant, "cancel-icon": u(s).cancelIcon, "cancel-icon-color": u(s).cancelIconColor, error: u(f), "field-only": u(s).fieldOnly, "hide-save-icon": !0, loading: u(m), "loading-icon": u(s).loadingIcon, "loading-icon-color": u(s).loadingIconColor, "save-button-color": u(s).saveButtonColor, "save-button-size": u(s).saveButtonSize, "save-button-title": u(s).saveButtonTitle, "save-button-variant": u(s).saveButtonVariant, "save-icon": u(s).saveIcon, "save-icon-color": u(s).saveIconColor, onClose: j, onSave: G }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "model-value", "true-icon", "true-value"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), u(s).cardField ? (X(), oe("div", { key: 2, class: ee(u(D)), style: ge(u(O)) }, [d(Fn, ye(be(u(h))), { default: se(() => [d(vn, null, { default: se(() => [Ie("div", { ref_key: "cardFieldRef", ref: E }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), ls = Re({ __name: "VInlineCustomField", props: _e(Sn({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Lo }), { modelValue: {} }), emits: _e([...$n], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = sn(e, "modelValue"), l = cn(), a = un(), i = t, c = ve(Symbol.for("vuetify:icons")), r = e;
  let o = ze({ ...l, ...r });
  const s = v(() => r.loading), m = v(() => r.disabled), y = R(!1), f = R(!1), p = R(!1), g = R(null);
  let b = n.value;
  K(() => s.value, (B, W) => {
    !B && W && p.value && q();
  });
  const h = v(() => n.value ? (y.value = !1, o.truncateLength ? hl({ length: o.truncateLength, suffix: o.truncateSuffix, text: n.value }) : n.value) : (y.value = !0, o.emptyText)), I = v(() => ({ ...o, loading: s.value, modelValue: n.value, originalValue: b })), A = v(() => ({ color: o.color, displayAppendIcon: r.displayAppendIcon, displayAppendIconColor: r.displayAppendIconColor, displayAppendIconSize: r.displayAppendIconSize, displayAppendInnerIcon: r.displayAppendInnerIcon, displayAppendInnerIconColor: r.displayAppendInnerIconColor, displayAppendInnerIconSize: r.displayAppendInnerIconSize, displayPrependIcon: r.displayPrependIcon, displayPrependIconColor: r.displayPrependIconColor, displayPrependIconSize: r.displayPrependIconSize, displayPrependInnerIcon: r.displayPrependInnerIcon, displayPrependInnerIconColor: r.displayPrependInnerIconColor, displayPrependInnerIconSize: r.displayPrependInnerIconSize, displayValue: h.value, empty: y.value, error: f.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), k = v(() => ({ ...kn, ...r.cardProps })), M = v(() => Vn({ density: o.density, disabled: m.value, field: "v-text-field", iconSet: c == null ? void 0 : c.defaultSet, loading: s.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), _ = v(() => An({ density: o.density, field: "v-text-field" })), T = Dt({ density: o.density, variant: o.variant }), V = v(() => _n({ active: p.value, name: "text-field" })), S = v(() => On({ name: "custom-field", showField: p.value })), C = v(() => ({})), D = v(() => P.value);
  function w() {
    f.value = !1, n.value = b, q();
  }
  const P = R(), O = R(null), j = R("body");
  function q() {
    var W, F;
    if (m.value || o.loadingWait && s.value)
      return;
    P.value = fn({ cardMinWidth: (W = o.cardProps) == null ? void 0 : W.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (F = o.cardProps) == null ? void 0 : F.width, field: O.value });
    const B = Pn({ attrs: l, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: r, showField: p, timeOpened: g.value });
    o = { ...o, ...B.settings }, p.value = B.showField, g.value = B.timeOpened, N !== null && o.closeSiblings && p.value && !o.fieldOnly && N.emit(B.timeOpened);
  }
  const x = R();
  function E() {
    const B = Mt({ required: o.required, rules: o.rules, value: n });
    return f.value = B.errors, x.value = B.results, B.results;
  }
  function L() {
    f.value ? f.value = !0 : (b = n.value, i("update", n.value), o.loadingWait || q());
  }
  let N, G;
  function $(B) {
    i("update:closeSiblingFields", g), p.value && g.value !== B && w();
  }
  return K(() => p.value, () => {
    p.value && E();
  }), K(() => n.value, () => {
    p.value && E();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: B }) => {
    N = B(Bn), G = N.on($);
  }), xn(() => {
    G !== void 0 && N.off($);
  }), (B, W) => (X(), oe("div", { ref_key: "inlineFieldsContainer", ref: O, class: ee(u(M)), style: ge(u(C)) }, [!u(p) && !u(o).fieldOnly || u(o).cardField ? (X(), oe("div", { key: 0, class: ee(u(_)) }, [Ie("div", { class: ee(u(T)) }, [d(u(Lt), Z(u(A), { onToggleField: q }), Ge({ _: 2 }, [qe(u(a), (F, z) => ({ name: z, fn: se((U) => [Fe(B.$slots, z, ye(be({ ...U })))]) }))]), 1040)], 2)], 2)) : pe("", !0), u(p) || u(o).fieldOnly || u(o).cardField ? (X(), oe("div", { key: 1, class: ee(["d-flex align-center py-2", u(V)]) }, [(X(), he(rn, { disabled: !u(o).cardField, to: u(j) }, [Fe(B.$slots, "default", ye(be(u(I)))), d(u(lt), { modelValue: n.value, "onUpdate:modelValue": W[0] || (W[0] = (F) => n.value = F), "cancel-button-color": u(o).cancelButtonColor, "cancel-button-size": u(o).cancelButtonSize, "cancel-button-title": u(o).cancelButtonTitle, "cancel-button-variant": u(o).cancelButtonVariant, "cancel-icon": u(o).cancelIcon, "cancel-icon-color": u(o).cancelIconColor, error: u(f), "field-only": u(o).fieldOnly, "hide-save-icon": u(o).hideSaveIcon, loading: u(s), "loading-icon": u(o).loadingIcon, "loading-icon-color": u(o).loadingIconColor, required: u(o).required, "save-button-color": u(o).saveButtonColor, "save-button-size": u(o).saveButtonSize, "save-button-title": u(o).saveButtonTitle, "save-button-variant": u(o).saveButtonVariant, "save-icon": u(o).saveIcon, "save-icon-color": u(o).saveIconColor, onClose: w, onSave: L }, null, 8, ["modelValue", "cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "required", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), u(o).cardField ? (X(), oe("div", { key: 2, class: ee(u(S)), style: ge(u(D)) }, [d(Fn, ye(be(u(k))), { default: se(() => [d(vn, null, { default: se(() => [Ie("div", { ref_key: "cardFieldRef", ref: j }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), os = Re({ __name: "VInlineSelect", props: _e(Sn({ clearIcon: {}, clearable: {}, density: {}, hideSelected: {}, itemTitle: {}, itemValue: {}, items: {}, menu: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...ii }), { modelValue: {} }), emits: _e([...$n], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = sn(e, "modelValue"), l = cn(), a = un(), i = t, c = ve(Symbol.for("vuetify:icons")), r = e;
  let o = ze({ ...l, ...r });
  const s = v(() => r.loading), m = v(() => r.disabled), y = R(!1), f = R(!1), p = R(), g = R(!1), b = R(null);
  let h = n.value;
  K(() => s.value, (z, U) => {
    !z && U && g.value && E();
  });
  const I = v(() => De({ icon: r.clearIcon, iconOptions: c, name: "clear" })), A = v(() => n.value && n.value[o.itemTitle] ? (y.value = !1, n.value[o.itemTitle]) : (n.value = "", y.value = !0, o.emptyText)), k = v(() => Kn(o)), M = v(() => ({ color: o.color, displayAppendIcon: r.displayAppendIcon, displayAppendIconColor: r.displayAppendIconColor, displayAppendIconSize: r.displayAppendIconSize, displayAppendInnerIcon: r.displayAppendInnerIcon, displayAppendInnerIconColor: r.displayAppendInnerIconColor, displayAppendInnerIconSize: r.displayAppendInnerIconSize, displayPrependIcon: r.displayPrependIcon, displayPrependIconColor: r.displayPrependIconColor, displayPrependIconSize: r.displayPrependIconSize, displayPrependInnerIcon: r.displayPrependInnerIcon, displayPrependInnerIconColor: r.displayPrependInnerIconColor, displayPrependInnerIconSize: r.displayPrependInnerIconSize, displayValue: A.value, empty: y.value, error: f.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), _ = v(() => ({ ...kn, ...r.cardProps }));
  Ue(() => {
    p.value = o.items || [];
  });
  const T = v(() => Vn({ density: o.density, disabled: m.value, field: "v-select", iconSet: c == null ? void 0 : c.defaultSet, loading: s.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), V = v(() => An({ density: o.density, field: "v-select" })), S = Dt({ density: o.density, variant: o.variant }), C = v(() => _n({ active: g.value, name: "select" })), D = v(() => On({ name: "select", showField: g.value })), w = v(() => ({})), P = v(() => j.value);
  function O() {
    f.value = !1, n.value = h, E();
  }
  const j = R(), q = R(null), x = R("body");
  function E() {
    var U, J;
    if (m.value || o.loadingWait && s.value)
      return;
    j.value = fn({ cardMinWidth: (U = o.cardProps) == null ? void 0 : U.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (J = o.cardProps) == null ? void 0 : J.width, field: q.value });
    const z = Pn({ attrs: l, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: r, showField: g, timeOpened: b.value });
    o = { ...o, ...z.settings }, g.value = z.showField, b.value = z.timeOpened, B !== null && o.closeSiblings && g.value && !o.fieldOnly && B.emit(z.timeOpened);
  }
  const L = R(), N = v(() => L.value);
  function G() {
    const z = Mt({ required: o.required, rules: o.rules, value: n });
    return f.value = z.errors, L.value = z.results, z.results;
  }
  function $() {
    h = n.value, i("update", n.value), o.loadingWait || E();
  }
  let B, W;
  function F(z) {
    i("update:closeSiblingFields", b), g.value && b.value !== z && O();
  }
  return K(() => g.value, () => {
    g.value && G();
  }), K(() => n.value, () => {
    g.value && G();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: z }) => {
    B = z(Bn), W = B.on(F);
  }), xn(() => {
    W !== void 0 && B.off(F);
  }), (z, U) => (X(), oe("div", { ref_key: "inlineFieldsContainer", ref: q, class: ee(u(T)), style: ge(u(w)) }, [!u(g) && !u(o).fieldOnly || u(o).cardField ? (X(), oe("div", { key: 0, class: ee(u(V)) }, [Ie("div", { class: ee(u(S)) }, [d(u(Lt), Z(u(M), { onToggleField: E }), Ge({ _: 2 }, [qe(u(a), (J, Y) => ({ name: Y, fn: se((re) => [Fe(z.$slots, Y, ye(be({ ...re })), void 0, !0)]) }))]), 1040)], 2)], 2)) : pe("", !0), u(g) || u(o).fieldOnly || u(o).cardField ? (X(), oe("div", { key: 1, class: ee(u(C)) }, [(X(), he(rn, { disabled: !u(o).cardField, to: u(x) }, [d(Rr, Z(u(k), { modelValue: n.value, "onUpdate:modelValue": U[0] || (U[0] = (J) => n.value = J), autofocus: !u(o).fieldOnly || u(o).autofocus, "clear-icon": u(I), clearable: u(o).clearable, color: u(o).color, density: u(o).density, disabled: u(s) || u(m), error: u(f), "error-messages": u(N), "hide-details": u(o).hideDetails, "hide-selected": u(o).hideSelected, "item-title": u(o).itemTitle, "item-value": u(o).itemValue, items: u(p), label: u(o).label, loading: u(s), menu: u(o).menu && !u(o).fieldOnly && u(g), variant: u(o).variant, width: "100%", onKeyup: St(O, ["esc"]) }), Ge({ _: 2 }, [qe(u(a), (J, Y) => ({ name: Y, fn: se((re) => [Fe(z.$slots, Y, ye(be({ ...re })), void 0, !0)]) })), u(a).append ? void 0 : { name: "append", fn: se(() => [d(u(lt), { "cancel-button-color": u(o).cancelButtonColor, "cancel-button-size": u(o).cancelButtonSize, "cancel-button-title": u(o).cancelButtonTitle, "cancel-button-variant": u(o).cancelButtonVariant, "cancel-icon": u(o).cancelIcon, "cancel-icon-color": u(o).cancelIconColor, error: u(f), "field-only": u(o).fieldOnly, "hide-save-icon": u(o).hideSaveIcon, loading: u(s), "loading-icon": u(o).loadingIcon, "loading-icon-color": u(o).loadingIconColor, "save-button-color": u(o).saveButtonColor, "save-button-size": u(o).saveButtonSize, "save-button-title": u(o).saveButtonTitle, "save-button-variant": u(o).saveButtonVariant, "save-icon": u(o).saveIcon, "save-icon-color": u(o).saveIconColor, onClose: O, onSave: $ }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "clearable", "color", "density", "disabled", "error", "error-messages", "hide-details", "hide-selected", "item-title", "item-value", "items", "label", "loading", "menu", "variant", "onKeyup"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), u(o).cardField ? (X(), oe("div", { key: 2, class: ee(u(D)), style: ge(u(P)) }, [d(Fn, ye(be(u(_))), { default: se(() => [d(vn, null, { default: se(() => [Ie("div", { ref_key: "cardFieldRef", ref: x }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), as = { class: "v-selection-control__wrapper" }, Me = { VInlineCheckbox: ts, VInlineCustomField: ls, VInlineSelect: ((e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, a] of t)
    n[l] = a;
  return n;
})(os, [["__scopeId", "data-v-d028b1ff"]]), VInlineSwitch: Re({ __name: "VInlineSwitch", props: _e(Sn({ density: {}, falseIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...ri }), { modelValue: {} }), emits: _e([...$n], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = sn(e, "modelValue"), l = cn(), a = un(), i = t, c = ve(Symbol.for("vuetify:icons")), r = Sl(), o = e;
  let s = ze({ ...l, ...o });
  const m = v(() => o.loading), y = v(() => o.disabled), f = R(!1), p = R(!1), g = R(null), b = v(() => Kn(s)), h = v(() => ({ ...kn, ...o.cardProps }));
  K(() => m.value, ($, B) => {
    !$ && B && p.value && x();
  });
  const I = v(() => De({ icon: s.cancelIcon, iconOptions: c, name: "false" })), A = v(() => n.value == s.trueValue), k = v(() => Ua({ modelValue: n, trueValue: s.trueValue })), M = v(() => Vn({ density: s.density, disabled: y.value, field: "v-switch", loading: m.value, loadingWait: s.loadingWait, tableField: s.tableField })), _ = v(() => An({ density: s.density, field: "v-switch" })), T = Ha({ density: s.density }), V = v(() => _n({ active: p.value, name: "switch" })), S = v(() => Wl("switch", s.valueColor, { error: f })), C = v(() => On({ name: "switch", showField: p.value })), D = v(() => ({})), w = v(() => Rl({ color: s.color, error: f, theme: r, underlineColor: s.underlineColor, underlineStyle: s.underlineStyle, underlineWidth: s.underlineWidth, underlined: s.underlined })), P = v(() => O.value), O = R(), j = R(null), q = R("body");
  function x() {
    var B, W;
    if (y.value || s.loadingWait && m.value)
      return;
    O.value = fn({ cardMinWidth: (B = s.cardProps) == null ? void 0 : B.minWidth, cardOffsetX: s.cardOffsetX, cardOffsetY: s.cardOffsetY, cardWidth: (W = s.cardProps) == null ? void 0 : W.width, field: j.value });
    const $ = Pn({ attrs: l, closeSiblings: s.closeSiblings, fieldOnly: s.fieldOnly, props: o, showField: p.value, timeOpened: g.value });
    s = { ...s, ...$.settings }, p.value = $.showField, g.value = $.timeOpened, L !== null && s.closeSiblings && p.value && !s.fieldOnly && L.emit($.timeOpened);
  }
  function E($) {
    n.value = $, i("update", $), s.loadingWait || x();
  }
  let L, N;
  function G($) {
    i("update:closeSiblingFields", g), p.value && g.value !== $ && x();
  }
  return s.closeSiblings && import("@vueuse/core").then(({ useEventBus: $ }) => {
    L = $(Bn), N = L.on(G);
  }), xn(() => {
    N !== void 0 && L.off(G);
  }), ($, B) => (X(), oe("div", { ref_key: "inlineFieldsContainer", ref: j, class: ee(u(M)), style: ge(u(D)) }, [!u(p) && !u(s).fieldOnly || u(s).cardField ? (X(), oe("div", { key: 0, class: ee(u(_)) }, [Ie("div", { class: ee(u(T)) }, [Ie("div", as, [$.icons ? (X(), oe("div", { key: 0, class: ee(u(S)), style: ge(u(w)), onClick: x }, [d(u(qa), { modelValue: u(k), "onUpdate:modelValue": B[0] || (B[0] = (W) => mn(k) ? k.value = W : null), "icon-false": u(s).iconFalse, "icon-false-color": u(s).iconFalseColor, "icon-false-title": u(s).iconFalseTitle, "icon-true": u(s).iconTrue, "icon-true-color": u(s).iconTrueColor, "icon-true-title": u(s).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (X(), oe("div", { key: 1, class: ee(["d-inline-flex align-center justify-center", u(S)]), style: ge(u(w)), onClick: x }, Il(u(A)), 7))])], 2)], 2)) : pe("", !0), u(p) || u(s).fieldOnly || u(s).cardField ? (X(), oe("div", { key: 1, class: ee(u(V)) }, [(X(), he(rn, { disabled: !u(s).cardField, to: u(q) }, [d(Xr, Z(u(b), { color: u(s).color, density: u(s).density, disabled: u(m) || u(y), error: u(f), "false-icon": u(s).falseIcon, "false-value": u(s).falseValue, "hide-details": u(s).hideDetails, label: u(s).label, loading: u(m), "model-value": u(k), "true-value": u(s).trueValue, "onUpdate:modelValue": E }), Ge({ _: 2 }, [qe(u(a), (W, F) => ({ name: F, fn: se((z) => [Fe($.$slots, F, ye(be({ ...z })))]) })), u(a).append ? void 0 : { name: "append", fn: se(() => [!u(s).fieldOnly || u(s).cardField ? (X(), he(ul, { key: 0, class: "ms-3", color: u(s).cancelButtonColor, icon: "", size: u(s).cancelButtonSize, title: u(s).cancelButtonTitle, variant: u(s).cancelButtonVariant, onClick: x }, { default: se(() => [d(de, { color: u(s).cancelIconColor, icon: u(I) }, null, 8, ["color", "icon"])]), _: 1 }, 8, ["color", "size", "title", "variant"])) : pe("", !0)]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "loading", "model-value", "true-value"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), u(s).cardField ? (X(), oe("div", { key: 2, class: ee(u(C)), style: ge(u(P)) }, [d(Fn, ye(be(u(h))), { default: se(() => [d(vn, null, { default: se(() => [Ie("div", { ref_key: "cardFieldRef", ref: q }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), VInlineTextField: Re({ __name: "VInlineTextField", props: _e(Sn({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Lo }), { modelValue: {} }), emits: _e([...$n], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = sn(e, "modelValue"), l = cn(), a = un(), i = t, c = ve(Symbol.for("vuetify:icons")), r = e;
  let o = ze({ ...l, ...r });
  const s = v(() => r.loading), m = v(() => r.disabled), y = R(!1), f = R(!1), p = R(!1), g = R(null);
  let b = n.value;
  K(() => s.value, (F, z) => {
    !F && z && p.value && x();
  });
  const h = v(() => De({ icon: r.clearIcon, iconOptions: c, name: "clear" })), I = v(() => n.value ? (y.value = !1, o.truncateLength ? hl({ length: o.truncateLength, suffix: o.truncateSuffix, text: n.value }) : n.value) : (y.value = !0, o.emptyText)), A = v(() => Kn(o)), k = v(() => ({ color: o.color, displayAppendIcon: r.displayAppendIcon, displayAppendIconColor: r.displayAppendIconColor, displayAppendIconSize: r.displayAppendIconSize, displayAppendInnerIcon: r.displayAppendInnerIcon, displayAppendInnerIconColor: r.displayAppendInnerIconColor, displayAppendInnerIconSize: r.displayAppendInnerIconSize, displayPrependIcon: r.displayPrependIcon, displayPrependIconColor: r.displayPrependIconColor, displayPrependIconSize: r.displayPrependIconSize, displayPrependInnerIcon: r.displayPrependInnerIcon, displayPrependInnerIconColor: r.displayPrependInnerIconColor, displayPrependInnerIconSize: r.displayPrependInnerIconSize, displayValue: I.value, empty: y.value, error: f.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), M = v(() => ({ ...kn, ...r.cardProps })), _ = v(() => Vn({ density: o.density, disabled: m.value, field: "v-text-field", iconSet: c == null ? void 0 : c.defaultSet, loading: s.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), T = v(() => An({ density: o.density, field: "v-text-field" })), V = Dt({ density: o.density, variant: o.variant }), S = v(() => _n({ active: p.value, name: "text-field" })), C = v(() => On({ name: "text-field", showField: p.value })), D = v(() => ({})), w = v(() => O.value);
  function P() {
    f.value = !1, n.value = b, x();
  }
  const O = R(), j = R(null), q = R("body");
  function x() {
    var z, U;
    if (m.value || o.loadingWait && s.value)
      return;
    O.value = fn({ cardMinWidth: (z = o.cardProps) == null ? void 0 : z.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (U = o.cardProps) == null ? void 0 : U.width, field: j.value });
    const F = Pn({ attrs: l, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: r, showField: p, timeOpened: g.value });
    o = { ...o, ...F.settings }, p.value = F.showField, g.value = F.timeOpened, $ !== null && o.closeSiblings && p.value && !o.fieldOnly && $.emit(F.timeOpened);
  }
  const E = R(), L = v(() => E.value);
  function N() {
    const F = Mt({ required: o.required, rules: o.rules, value: n });
    return f.value = F.errors, E.value = F.results, F.results;
  }
  function G() {
    f.value ? f.value = !0 : (b = n.value, i("update", n.value), o.loadingWait || x());
  }
  let $, B;
  function W(F) {
    i("update:closeSiblingFields", g), p.value && g.value !== F && P();
  }
  return K(() => p.value, () => {
    p.value && N();
  }), K(() => n.value, () => {
    p.value && N();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: F }) => {
    $ = F(Bn), B = $.on(W);
  }), xn(() => {
    B !== void 0 && $.off(W);
  }), (F, z) => (X(), oe("div", { ref_key: "inlineFieldsContainer", ref: j, class: ee(u(_)), style: ge(u(D)) }, [!u(p) && !u(o).fieldOnly || u(o).cardField ? (X(), oe("div", { key: 0, class: ee(u(T)) }, [Ie("div", { class: ee(u(V)) }, [d(u(Lt), Z(u(k), { onToggleField: x }), Ge({ _: 2 }, [qe(u(a), (U, J) => ({ name: J, fn: se((Y) => [Fe(F.$slots, J, ye(be({ ...Y })))]) }))]), 1040)], 2)], 2)) : pe("", !0), u(p) || u(o).fieldOnly || u(o).cardField ? (X(), oe("div", { key: 1, class: ee(u(S)) }, [(X(), he(rn, { disabled: !u(o).cardField, to: u(q) }, [d(gl, Z(u(A), { modelValue: n.value, "onUpdate:modelValue": z[1] || (z[1] = (U) => n.value = U), autofocus: !u(o).fieldOnly || u(o).autofocus, "clear-icon": u(h), disabled: u(s) || u(m), error: u(f), "error-messages": u(L), label: u(o).label, loading: u(s), width: "100%", onKeyup: [St(G, ["enter"]), St(P, ["esc"])] }), Ge({ _: 2 }, [qe(u(a), (U, J) => ({ name: J, fn: se((Y) => [Fe(F.$slots, J, ye(be({ ...Y })))]) })), u(a).append ? void 0 : { name: "append", fn: se(() => [d(u(lt), { modelValue: n.value, "onUpdate:modelValue": z[0] || (z[0] = (U) => n.value = U), "cancel-button-color": u(o).cancelButtonColor, "cancel-button-size": u(o).cancelButtonSize, "cancel-button-title": u(o).cancelButtonTitle, "cancel-button-variant": u(o).cancelButtonVariant, "cancel-icon": u(o).cancelIcon, "cancel-icon-color": u(o).cancelIconColor, error: u(f), "field-only": u(o).fieldOnly, "hide-save-icon": u(o).hideSaveIcon, loading: u(s), "loading-icon": u(o).loadingIcon, "loading-icon-color": u(o).loadingIconColor, required: u(o).required, "save-button-color": u(o).saveButtonColor, "save-button-size": u(o).saveButtonSize, "save-button-title": u(o).saveButtonTitle, "save-button-variant": u(o).saveButtonVariant, "save-icon": u(o).saveIcon, "save-icon-color": u(o).saveIconColor, onClose: P, onSave: G }, null, 8, ["modelValue", "cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "required", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "disabled", "error", "error-messages", "label", "loading", "onKeyup"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), u(o).cardField ? (X(), oe("div", { key: 2, class: ee(u(C)), style: ge(u(w)) }, [d(Fn, ye(be(u(M))), { default: se(() => [d(vn, null, { default: se(() => [Ie("div", { ref_key: "cardFieldRef", ref: q }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), VInlineTextarea: Re({ __name: "VInlineTextarea", props: _e(Sn({ autoGrow: {}, clearIcon: {}, density: {}, rows: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...si }), { modelValue: {} }), emits: _e([...$n], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = sn(e, "modelValue"), l = cn(), a = un(), i = t, c = ve(Symbol.for("vuetify:icons")), r = e;
  let o = ze({ ...l, ...r });
  const s = v(() => r.loading), m = v(() => r.disabled), y = R(!1), f = R(!1), p = R(!1), g = R(null);
  let b = n.value;
  K(() => s.value, (F, z) => {
    !F && z && p.value && x();
  });
  const h = v(() => De({ icon: r.clearIcon, iconOptions: c, name: "clear" })), I = v(() => n.value ? (y.value = !1, o.truncateLength ? hl({ length: o.truncateLength, suffix: o.truncateSuffix, text: n.value }) : n.value) : (y.value = !0, o.emptyText)), A = v(() => Kn(o)), k = v(() => ({ color: o.color, displayAppendIcon: r.displayAppendIcon, displayAppendIconColor: r.displayAppendIconColor, displayAppendIconSize: r.displayAppendIconSize, displayAppendInnerIcon: r.displayAppendInnerIcon, displayAppendInnerIconColor: r.displayAppendInnerIconColor, displayAppendInnerIconSize: r.displayAppendInnerIconSize, displayPrependIcon: r.displayPrependIcon, displayPrependIconColor: r.displayPrependIconColor, displayPrependIconSize: r.displayPrependIconSize, displayPrependInnerIcon: r.displayPrependInnerIcon, displayPrependInnerIconColor: r.displayPrependInnerIconColor, displayPrependInnerIconSize: r.displayPrependInnerIconSize, displayValue: I.value, empty: y.value, error: f.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), M = v(() => ({ ...kn, ...r.cardProps })), _ = v(() => Vn({ density: o.density, disabled: m.value, field: "v-textarea", iconSet: c == null ? void 0 : c.defaultSet, loading: s.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), T = v(() => An({ density: o.density, field: "v-textarea" })), V = Dt({ density: o.density, variant: o.variant }), S = v(() => _n({ active: p.value, name: "textarea" })), C = v(() => On({ name: "textarea", showField: p.value })), D = v(() => ({})), w = v(() => O.value);
  function P() {
    f.value = !1, n.value = b, x();
  }
  const O = R(), j = R(null), q = R("body");
  function x() {
    var z, U;
    if (m.value || o.loadingWait && s.value)
      return;
    O.value = fn({ cardMinWidth: (z = o.cardProps) == null ? void 0 : z.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (U = o.cardProps) == null ? void 0 : U.width, field: j.value });
    const F = Pn({ attrs: l, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: r, showField: p, timeOpened: g.value });
    o = { ...o, ...F.settings }, p.value = F.showField, g.value = F.timeOpened, $ !== null && o.closeSiblings && p.value && !o.fieldOnly && $.emit(F.timeOpened);
  }
  const E = R(), L = v(() => E.value);
  function N() {
    const F = Mt({ required: o.required, rules: o.rules, value: n });
    return f.value = F.errors, E.value = F.results, F.results;
  }
  function G() {
    b = n.value, i("update", n.value), o.loadingWait || x();
  }
  let $, B;
  function W(F) {
    i("update:closeSiblingFields", g), p.value && g.value !== F && P();
  }
  return K(() => p.value, () => {
    p.value && N();
  }), K(() => n.value, () => {
    p.value && N();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: F }) => {
    $ = F(Bn), B = $.on(W);
  }), xn(() => {
    B !== void 0 && $.off(W);
  }), (F, z) => (X(), oe("div", { ref_key: "inlineFieldsContainer", ref: j, class: ee(u(_)), style: ge(u(D)) }, [!u(p) && !u(o).fieldOnly || u(o).cardField ? (X(), oe("div", { key: 0, class: ee(u(T)) }, [Ie("div", { class: ee(u(V)) }, [d(u(Lt), Z(u(k), { onToggleField: x }), Ge({ _: 2 }, [qe(u(a), (U, J) => ({ name: J, fn: se((Y) => [Fe(F.$slots, J, ye(be({ ...Y })))]) }))]), 1040)], 2)], 2)) : pe("", !0), u(p) || u(o).fieldOnly || u(o).cardField ? (X(), oe("div", { key: 1, class: ee(u(S)) }, [(X(), he(rn, { disabled: !u(o).cardField, to: u(q) }, [d(Jr, Z(u(A), { modelValue: n.value, "onUpdate:modelValue": z[0] || (z[0] = (U) => n.value = U), "auto-grow": u(o).autoGrow, autofocus: !u(o).fieldOnly || u(o).autofocus, "clear-icon": u(h), color: u(o).color, density: u(o).density, disabled: u(s) || u(m), error: u(f), "error-messages": u(L), "hide-details": u(o).hideDetails, label: u(o).label, loading: u(s), rows: u(o).rows, variant: u(o).variant, width: "100%", onKeyup: St(P, ["esc"]) }), Ge({ _: 2 }, [qe(u(a), (U, J) => ({ name: J, fn: se((Y) => [Fe(F.$slots, J, ye(be({ ...Y })))]) })), u(a).append ? void 0 : { name: "append", fn: se(() => [d(u(lt), { "cancel-button-color": u(o).cancelButtonColor, "cancel-button-size": u(o).cancelButtonSize, "cancel-button-title": u(o).cancelButtonTitle, "cancel-button-variant": u(o).cancelButtonVariant, "cancel-icon": u(o).cancelIcon, "cancel-icon-color": u(o).cancelIconColor, error: u(f), "field-only": u(o).fieldOnly, "hide-save-icon": u(o).hideSaveIcon, loading: u(s), "loading-icon": u(o).loadingIcon, "loading-icon-color": u(o).loadingIconColor, "save-button-color": u(o).saveButtonColor, "save-button-size": u(o).saveButtonSize, "save-button-title": u(o).saveButtonTitle, "save-button-variant": u(o).saveButtonVariant, "save-icon": u(o).saveIcon, "save-icon-color": u(o).saveIconColor, onClose: P, onSave: G }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "auto-grow", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "rows", "variant", "onKeyup"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), u(o).cardField ? (X(), oe("div", { key: 2, class: ee(u(C)), style: ge(u(w)) }, [d(Fn, ye(be(u(M))), { default: se(() => [d(vn, null, { default: se(() => [Ie("div", { ref_key: "cardFieldRef", ref: q }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }) }, is = (e) => {
  for (const t in Me) {
    const n = Me[t];
    e.component(n.name, n);
  }
};
for (const e in Me)
  Me[e].install = is;
const cs = Me.VInlineCheckbox, ds = Me.VInlineCustomField, ps = Me.VInlineSelect, vs = Me.VInlineSwitch, fs = Me.VInlineTextField, ys = Me.VInlineTextarea, ms = { VInlineFields: Me };
export {
  cs as VInlineCheckbox,
  ds as VInlineCustomField,
  ps as VInlineSelect,
  vs as VInlineSwitch,
  fs as VInlineTextField,
  ys as VInlineTextarea,
  ms as default
};
(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode("[data-v-d028b1ff] .v-field__field{align-items:flex-end!important}:root{--v-inline-fields-top-padding-compact: 13px;--v-inline-fields-top-padding-comfortable: 17px;--v-inline-fields-top-padding-default: 21px;--v-inline-fields-input-height: 24px;--v-inline-fields-density-compact-height: 32px;--v-inline-fields-density-comfortable-height: 40px;--v-inline-fields-grey: #909090}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append{padding-top:0!important}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append .v-icon{font-size:1rem!important}.v-inline-fields{position:relative}.v-inline-fields--display-container *{align-items:center;display:flex}.v-inline-fields--display-value{cursor:pointer;letter-spacing:.009375em!important}.v-inline-fields--display-value-empty{color:var(--v-inline-fields-grey);font-style:italic}.v-inline-fields--display-value-checkbox,.v-inline-fields--display-value-switch{padding-bottom:2px;padding-top:6px}.v-inline-fields--display-append-icon,.v-inline-fields--display-prepend-icon,.v-inline-fields--display-append-inner-icon,.v-inline-fields--display-prepend-inner-icon{align-items:flex-end;display:inline-flex}.v-inline-fields--container-disabled .v-inline-fields--display-value{cursor:default!important;opacity:var(--v-disabled-opacity)}.v-inline-fields--container-loading .v-inline-fields--display-value{cursor:wait!important}.v-inline-fields--container-icon-set-fa .v-field__clearable{font-size:.8rem}.v-inline-fields--container-icon-set-fa .v-field__append-inner{align-items:flex-end;padding-bottom:0!important}.v-inline-fields--container-v-select-compact-plain .v-input,.v-inline-fields--container-v-select-compact-underlined .v-input,.v-inline-fields--container-v-text-field-compact-plain .v-input,.v-inline-fields--container-v-text-field-compact-underlined .v-input{height:var(--v-inline-fields-density-compact-height);max-height:var(--v-inline-fields-density-compact-height)}.v-inline-fields--container-v-select-compact-plain .v-input__control,.v-inline-fields--container-v-select-compact-underlined .v-input__control,.v-inline-fields--container-v-text-field-compact-plain .v-input__control,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control{padding-bottom:4px}.v-inline-fields--container-v-select-compact-plain .v-input>div,.v-inline-fields--container-v-select-compact-underlined .v-input>div,.v-inline-fields--container-v-text-field-compact-plain .v-input>div,.v-inline-fields--container-v-text-field-compact-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input input{padding-bottom:10px}.v-inline-fields--container-v-select-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-compact-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-select__selection{align-items:center;padding-bottom:10px}.v-inline-fields--container-v-select-comfortable-plain .v-input,.v-inline-fields--container-v-select-comfortable-underlined .v-input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input{height:var(--v-inline-fields-density-comfortable-height);max-height:var(--v-inline-fields-density-comfortable-height)}.v-inline-fields--container-v-select-comfortable-plain .v-input__control,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control{padding-bottom:8px}.v-inline-fields--container-v-select-comfortable-plain .v-input>div,.v-inline-fields--container-v-select-comfortable-underlined .v-input>div,.v-inline-fields--container-v-text-field-comfortable-plain .v-input>div,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input input{padding-bottom:6px}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-select__selection{align-items:center;padding-bottom:6px}.v-inline-fields--container-v-select-compact-plain .v-field__append-inner,.v-inline-fields--container-v-select-compact-underlined .v-field__append-inner{padding-top:4px!important}.v-inline-fields--container-v-select-comfortable-plain .v-field__append-inner,.v-inline-fields--container-v-select-comfortable-underlined .v-field__append-inner{padding-top:8px!important}.v-inline-fields--container-v-textarea .v-inline-fields--save-fields-container{align-items:flex-end}.v-inline-fields--container-v-select,.v-inline-fields--container-v-textarea,.v-inline-fields--container-v-text-field{width:100%}.v-inline-fields--container-v-checkbox .v-input,.v-inline-fields--container-v-switch .v-input{align-items:center;display:flex;padding-bottom:0}.v-inline-fields--container-v-checkbox .v-input__append,.v-inline-fields--container-v-switch .v-input__append{margin-inline-start:0!important;margin-left:0;padding-bottom:0!important}.v-inline-fields--container-v-checkbox .v-selection-control,.v-inline-fields--container-v-switch .v-selection-control{min-height:unset}.v-inline-fields--container-v-checkbox .v-inline-fields--save-fields-container,.v-inline-fields--container-v-switch .v-inline-fields--save-fields-container{align-items:center!important}.v-inline-fields--container .v-input__append,.v-inline-fields--container .v-input__prepend,.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-top:0!important}.v-inline-fields--container .v-input__append .v-icon,.v-inline-fields--container .v-input__prepend .v-icon,.v-inline-fields--container .v-field__append-inner .v-icon,.v-inline-fields--container .v-field__prepend-inner .v-icon{font-size:1rem!important}.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-compact .v-input__append,.v-inline-fields--container-compact .v-input__prepend,.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-comfortable .v-input__append,.v-inline-fields--container-comfortable .v-input__prepend,.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{padding-bottom:6px!important}.v-inline-fields--container-default .v-input__append,.v-inline-fields--container-default .v-input__prepend,.v-inline-fields--container-default .v-field__append-inner,.v-inline-fields--container-default .v-field__prepend-inner{align-items:flex-end!important;padding-bottom:0!important}.v-inline-fields--container-default .v-input__append .v-icon,.v-inline-fields--container-default .v-input__prepend .v-icon,.v-inline-fields--container-default .v-field__append-inner .v-icon,.v-inline-fields--container-default .v-field__prepend-inner .v-icon{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)!important}.v-inline-fields--container-default .v-inline-fields--save-fields-container{align-items:flex-end!important}.v-inline-fields--card-container{height:fit-content;min-width:fit-content!important;position:absolute}.v-inline-fields--card-container .v-card{border:1px solid hsla(0,0%,50%,.5)}.v-inline-fields--card-container .v-card .v-card-text{padding:5px 10px}.v-inline-fields--card-container .v-card .v-card-text>div{align-items:center;display:flex}.v-inline-fields--card-container-checkbox .v-card .v-card-text .v-input__append{margin-inline-start:0}.v-inline-fields--save-fields-container{align-items:center;display:flex;height:100%;margin-left:.1rem}.v-inline-fields--boolean-icons{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-inline-fields .truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:250px}.v-inline-fields .v-input__append{padding-top:0}")),document.head.appendChild(i)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
