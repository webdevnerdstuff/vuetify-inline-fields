import { unref as e, defineComponent as Me, useAttrs as Ge, useSlots as qe, reactive as Le, watchEffect as Te, computed as o, openBlock as p, createElementBlock as S, normalizeClass as B, normalizeStyle as Q, renderSlot as pe, normalizeProps as R, mergeProps as ve, createBlock as oe, createCommentVNode as _, createElementVNode as ce, createTextVNode as En, toDisplayString as hn, inject as Ie, withCtx as T, mergeModels as me, mergeDefaults as Je, useModel as Re, toRefs as sn, ref as v, watch as de, onUnmounted as Ke, createVNode as x, createSlots as _e, renderList as Ee, guardReactiveProps as ie, Teleport as Qe, withKeys as fn, isRef as zn, defineAsyncComponent as je } from "vue";
import { useTheme as Cn } from "vuetify";
import { VIcon as Ue } from "vuetify/lib/components/VIcon/index.mjs";
import { VBtn as An } from "vuetify/lib/components/VBtn/index.mjs";
import { VAutocomplete as Mn } from "vuetify/lib/components/VAutocomplete/index.mjs";
import { VCard as Ze, VCardText as He } from "vuetify/lib/components/VCard/index.mjs";
import { VIcon as On } from "vuetify/components";
import { useWindowSize as Ln } from "@vueuse/core";
import { VCheckbox as Gn } from "vuetify/lib/components/VCheckbox/index.mjs";
import { VSelect as Un } from "vuetify/lib/components/VSelect/index.mjs";
import { VSwitch as Yn } from "vuetify/lib/components/VSwitch/index.mjs";
import { VTextField as qn } from "vuetify/lib/components/VTextField/index.mjs";
import { VTextarea as Rn } from "vuetify/lib/components/VTextarea/index.mjs";
/**
 * @name @wdns/vuetify-inline-fields
 * @version 1.0.8
 * @description Vuetify Inline Fields Component Library offers a comprehensive collection of reusable UI components to create elegant and efficient inline form fields within your applications.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2024, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-inline-fields/
 * @repository https://github.com/webdevnerdstuff/vuetify-inline-fields
 * @license MIT License
 */
const en = Symbol("identifier"), nn = { elevation: 5, variant: "flat" }, un = { cancelButtonColor: "default", cancelButtonSize: "x-small", cancelButtonTitle: "Cancel", cancelButtonVariant: "text", cancelIcon: void 0, cancelIconColor: "default", cardField: !1, cardOffsetX: 0, cardOffsetY: 0, cardProps: () => ({}), cell: !1, cellUnderlineFullWidth: !0, closeSiblings: !1, color: "primary", density: "compact", disabled: !1, displayAppendIcon: void 0, displayAppendIconColor: void 0, displayAppendIconSize: "x-small", displayAppendInnerIcon: void 0, displayAppendInnerIconColor: void 0, displayAppendInnerIconSize: "x-small", displayPrependIcon: void 0, displayPrependIconColor: void 0, displayPrependIconSize: "x-small", displayPrependInnerIcon: void 0, displayPrependInnerIconColor: void 0, displayPrependInnerIconSize: "x-small", emptyText: "empty", error: !1, fieldOnly: !1, hideCancelIcon: !1, hideDetails: !0, label: "", loading: !1, loadingWait: !0, name: "", required: !1, tableField: !0, underlineColor: "primary", underlineStyle: "dotted", underlineWidth: "2px", underlined: !0, valueColor: "default" }, Bn = { autofocus: !0 }, pn = { hideCancelIcon: !1, hideSaveIcon: !1, loadingIcon: void 0, loadingIconColor: "primary", saveButtonColor: "primary", saveButtonSize: "x-small", saveButtonTitle: "Save", saveButtonVariant: "text", saveIcon: void 0, saveIconColor: "primary" }, kn = { falseValue: !1, iconFalse: void 0, iconFalseColor: "danger", iconFalseTitle: "No", iconTrue: void 0, iconTrueColor: "success", iconTrueTitle: "Yes", icons: !0, trueValue: !0 }, Nn = { ...un, ...kn, ...pn, falseIcon: void 0, icons: !0, trueIcon: void 0 }, Xn = { ...un, ...Bn, ...pn, clearIcon: "$clear", clearable: !1, hideSelected: !0, itemTitle: "title", itemValue: "value", items: () => [], menu: !0, rules: () => [], variant: "underlined" }, jn = { ...un, ...Bn, ...pn, autoSelectFirst: !1, clearIcon: "$clear", clearable: !1, hideSelected: !0, itemTitle: "title", itemValue: "value", items: () => [], menu: !0, menuIcon: "$dropdown", rules: () => [], variant: "underlined" }, Jn = { ...un, ...kn, ...pn, icons: !0, falseIcon: "" }, Kn = { ...Bn, ...pn, ...un, autoGrow: !0, clearIcon: "$clear", rows: 1, truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, Wn = { ...un, ...Bn, ...pn, clearIcon: "$clear", truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, O = "v-inline-fields", ln = (c) => {
  const { cell: t = !1, field: l = "", density: a = "", disabled: r = !1, iconSet: u = "mdi", loading: f = !1, loadingWait: s, tableField: d = !1, variant: n } = c, i = a && n;
  return { [`${O}`]: !0, [`${O}--container`]: !0, [`${O}--container-cell`]: t, [`${O}--container-disabled`]: e(r), [`${O}--container-table`]: d, [`${O}--container-icon-set-${u}`]: !0, [`${O}--container-loading`]: f && s, [`${O}--container-${l}`]: !0, [`${O}--container-${l}-${a}`]: !0, [`${O}--container-${l}-${a}-${n}`]: i, [`${O}--container-${l}-${n}`]: n, [`${O}--container-${l}-${n}-${a}`]: i, [`${O}--container-${a}`]: a, [`${O}--container-${a}-${l}`]: a, [`${O}--container-${a}-${n}`]: i, [`${O}--container-${n}`]: n, [`${O}--container-${n}-${a}`]: i, [`${O}--container-${n}-${l}`]: n };
}, on = (c) => {
  const { cell: t = !1, cellUnderlineFullWidth: l = !0, field: a = "", density: r = "" } = c;
  return { [`${O}--display-container-cell`]: t, [`${O}--display-container-cell-underline-full-width`]: t && l, [`${O}--display-container`]: !0, [`${O}--display-wrapper-value`]: !0, [`${a}`]: !0, "v-input": !0, [`v-input--density-${r}`]: !0, "v-input--horizontal": !0 };
}, In = (c) => {
  const { density: t = "", variant: l = "" } = c;
  return { "v-input": !0, "v-input--dirty": !0, "v-input--horizontal": !0, "v-text-field": !0, [`v-input--density-${t}`]: !0, [`v-text-field--plain-${l}`]: !0 };
}, $n = (c) => {
  const { density: t = "" } = c;
  return { [`${O}--selection-control`]: !0, [`v-selection-control--density-${t}`]: !0 };
}, Fn = (c, t, l) => {
  const { error: a = !1, empty: r = !1 } = l;
  return { [`${O}`]: !0, [`${O}--display-value-${c}`]: !0, [`${O}--display-value`]: !0, [`${O}--display-value-empty`]: e(r), [`text-${t}`]: !e(a), "text-danger": e(a) };
}, an = (c) => {
  const { name: t, active: l = !1 } = c;
  return { [`${O}`]: !0, [`${O}--field`]: !0, [`${O}--field-${t}`]: !0, [`${O}--field-active`]: l };
}, tn = (c) => {
  const { name: t, showField: l } = c;
  return { [`${O}--card-container`]: !0, [`${O}--card-container-${t}`]: !0, "d-none": !l };
};
function Pn(c) {
  if (!c)
    return 100;
  if (c.toString().includes(".")) {
    const t = 100 * Number(c);
    return t >= 100 ? 100 : t;
  }
  return Number(c) >= 100 ? 100 : Number(c);
}
function Vn(c) {
  let t = function(A) {
    const P = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let w = A;
    return Object.entries(P).forEach(([F, z]) => {
      A.toLowerCase() != F.toLowerCase() || (w = z);
    }), w;
  }(c), l = 0, a = 0, r = 0, u = 100, f = 0, s = 0, d = 0;
  if (t.substring(0, 1) === "#")
    t = function(A) {
      let P = A.replace("#", "");
      P.length === 3 && (P = P.split("").map((g) => g + g).join(""));
      const w = parseInt(P.substring(0, 2), 16), F = parseInt(P.substring(2, 4), 16), z = parseInt(P.substring(4, 6), 16);
      return [w, F, z, 100];
    }(t);
  else if (t.includes("rgb"))
    t = [...t.matchAll(/[\d+.\d+]+/g)].map(Number);
  else if (t.includes("hsl"))
    return t = [...t.matchAll(/[\d+.\d+]+/g)].map(String), l = t[0], a = t[1], r = t[2], u = Pn(t[3]), `${l} ${a}% ${r}% / ${u}%`;
  [f, s, d, u] = t, f /= 255, s /= 255, d /= 255, u = Pn(u);
  const n = Math.max(f, s, d), i = Math.min(f, s, d);
  if (n === null || !i === null || isNaN(n) || isNaN(i)) {
    const A = "0 0% 100% / 12%";
    return console.warn(`[VuetifyInlineFields]: The "color" prop value using "${t}" doesn't exist. Using the value "hsl(${A})" in it's place.`), A;
  }
  if (l = (n + i) / 2, a = (n + i) / 2, r = (n + i) / 2, n == i)
    l = a = 0;
  else {
    const A = n - i;
    switch (a = r > 0.5 ? A / (2 - n - i) : A / (n + i), n) {
      case f:
        l = (s - d) / A + (s < d ? 6 : 0);
        break;
      case s:
        l = (d - f) / A + 2;
        break;
      case d:
        l = (f - s) / A + 4;
    }
    l /= 6;
  }
  return l = Math.round(360 * l), a = Math.round(100 * a), r = Math.round(100 * r), `${l} ${a}% ${r}% / ${u}%`;
}
const Qn = (c, t) => {
  if (/* @__PURE__ */ function(a) {
    return a === "transparent" || a === "none" || a === "inherit" || a === "currentColor" || a === "initial" || a === "unset";
  }(c))
    return c;
  if (function(a) {
    return a.includes("--v-theme");
  }(c))
    return `rgb(var(${c}))`;
  const l = function(a, r) {
    const u = r.global.current.value.colors;
    return Object.entries(u).find(([f]) => f === a);
  }(c, t);
  return l ? `hsl(${Vn(l[1])})` : `hsl(${Vn(c)})`;
}, yn = (c) => {
  const { str: t, unit: l = "px" } = c;
  if (t != null && t !== "")
    return +t ? `${Number(t)}${l}` : String(t);
}, Tn = (c) => {
  var r;
  const { modelValue: t, trueValue: l } = c, a = e(t);
  return ((r = a == null ? void 0 : a.toLowerCase) == null ? void 0 : r.call(a)) === "true" || a === "1" || a == "1" || a === !0 || a == l || a === l;
}, gn = (c) => {
  const { underlineStyle: t, underlineWidth: l, color: a, error: r, theme: u, underlined: f } = c;
  let { underlineColor: s } = c;
  s = s || a;
  const d = { "border-bottom-color": Qn(s, u), "border-bottom-style": t, "border-bottom-width": l };
  return e(r) && (d["border-bottom-color"] = "rgb(var(--v-theme-danger))"), f || (d["border-bottom"] = "none"), d;
}, Ye = (c) => {
  const { cardMinWidth: t, cardOffsetX: l, cardOffsetY: a, cardWidth: r, field: u, name: f = "" } = c, s = ((i) => {
    const { cardOffsetX: A, cardOffsetY: P, field: w } = i;
    if (!w)
      return { bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0, x: 0, y: 0 };
    const { x: F, y: z } = w.getBoundingClientRect(), { width: C, height: g } = w.getBoundingClientRect(), { right: U, bottom: ye } = w.getBoundingClientRect();
    return { bottom: yn({ str: ye + Number(P) }), height: g, left: yn({ str: 0 + Number(A) }), right: yn({ str: U + Number(A) }), top: yn({ str: 2 + Number(P) }), width: yn({ str: C }), x: F, y: z };
  })({ cardOffsetX: l, cardOffsetY: a, field: u });
  let d = t, n = r;
  return n || (n = f === "checkbox" ? "fit-content" : s.width), d || (d = f === "checkbox" ? "fit-content" : s.width), { left: s.left, top: s.top, width: n, zIndex: 10 };
}, mn = Me({ __name: "DisplayedValue", props: { color: {}, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayValue: {}, empty: { type: [Object, Boolean] }, error: { type: Boolean }, field: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, emits: ["toggleField"], setup(c, { emit: t }) {
  const l = Ge(), a = t, r = c, u = qe(), f = Cn(), s = Le({ ...l, ...r });
  Te(() => {
    Object.assign(s, { ...l, ...r });
  });
  const d = { displayValue: r.displayValue, empty: r.empty, error: r.error }, n = o(() => Fn(r.field, r.valueColor, { empty: r.empty, error: r.error })), i = o(() => gn({ color: r.color, error: r.error, theme: f, underlineColor: r.underlineColor, underlineStyle: r.underlineStyle, underlineWidth: r.underlineWidth, underlined: r.underlined })), A = o(() => ((F) => {
    const { underlineWidth: z } = F;
    return { borderBottom: `${z || "0px"} solid transparent` };
  })({ underlineWidth: r.underlineWidth })), P = (F, z = !1) => ((C) => {
    const { inner: g = !1, position: U } = C;
    return { [`${O}--display-icon`]: !g, [`${O}--display-${U}-icon`]: !g, [`${O}--display-${U}-inner-icon`]: g, "me-1": U === "prepend", "ms-1": U === "append" };
  })({ inner: z, position: F });
  function w() {
    a("toggleField");
  }
  return (F, z) => (p(), S("div", { class: "v-inline-fields--display-wrapper", onClick: w }, [F.displayPrependIcon || e(u)["display.prepend"] ? (p(), S("div", { key: 0, class: B(P("prepend")), style: Q(e(A)) }, [e(u)["display.prepend"] ? pe(F.$slots, "display.prepend", R(ve({ key: 0 }, d))) : (p(), oe(Ue, { key: 1, color: e(s).displayPrependIconColor, icon: e(s).displayPrependIcon, size: e(s).displayPrependIconSize }, null, 8, ["color", "icon", "size"]))], 6)) : _("", !0), ce("div", { class: B(["d-inline-flex", e(n)]), style: Q(e(i)) }, [F.displayPrependInnerIcon || e(u)["display.prependInner"] ? (p(), S("div", { key: 0, class: B(P("prepend", !0)) }, [e(u)["display.prependInner"] ? pe(F.$slots, "display.prependInner", R(ve({ key: 0 }, d))) : (p(), oe(Ue, { key: 1, color: e(s).displayPrependInnerIconColor, icon: e(s).displayPrependInnerIcon, size: e(s).displayPrependInnerIconSize }, null, 8, ["color", "icon", "size"]))], 2)) : _("", !0), En(" " + hn(F.displayValue) + " ", 1), F.displayAppendInnerIcon || e(u)["display.appendInner"] ? (p(), S("div", { key: 1, class: B(P("append", !0)) }, [e(u)["display.appendInner"] ? pe(F.$slots, "display.appendInner", R(ve({ key: 0 }, d))) : (p(), oe(Ue, { key: 1, color: e(s).displayAppendInnerIconColor, icon: e(s).displayAppendInnerIcon, size: e(s).displayAppendInnerIconSize }, null, 8, ["color", "icon", "size"]))], 2)) : _("", !0)], 6), F.displayAppendIcon || e(u)["display.append"] ? (p(), S("div", { key: 1, class: B(P("append")), style: Q(e(A)) }, [e(u)["display.append"] ? pe(F.$slots, "display.append", R(ve({ key: 0 }, d))) : (p(), oe(Ue, { key: 1, color: e(s).displayAppendIconColor, icon: e(s).displayAppendIcon, size: e(s).displayAppendIconSize }, null, 8, ["color", "icon", "size"]))], 6)) : _("", !0)]));
} }), Zn = { fa: { checkboxFalse: "$checkboxOff", checkboxTrue: "far fa-square-check", clear: "$clear", false: "$close", loading: "fa-circle-notch", save: "fa-floppy-disk", true: "$complete" }, mdi: { checkboxFalse: "$checkboxOff", checkboxTrue: "mdi:mdi-checkbox-outline", clear: "$clear", false: "$close", loading: "mdi-loading", save: "mdi-content-save", true: "$complete" } }, we = (c) => {
  const { icon: t, iconOptions: l, name: a } = c;
  if (t)
    return t;
  const r = Zn[l == null ? void 0 : l.defaultSet];
  if (!r)
    throw new Error(`[VInlineFields]: No default ${l == null ? void 0 : l.defaultSet} icon set found.`);
  const u = r[a];
  if (!u)
    throw new Error(`[VInlineFields]: No ${a} icon found.`);
  return u;
}, dn = Me({ __name: "SaveFieldButtons", props: { loading: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonVariant: {}, cancelButtonTitle: {}, cancelIconColor: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideSaveIcon: { type: Boolean }, cancelIcon: {}, loadingIcon: {}, loadingIconColor: {}, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIconColor: {}, saveIcon: {} }, emits: ["close", "save"], setup(c, { emit: t }) {
  const l = Ge(), a = t, r = c, u = Ie(Symbol.for("vuetify:icons")), f = o(() => r.error), s = o(() => ({ [`${O}--save-fields-container`]: !0 })), d = o(() => r.loading), n = Le({ ...l, ...r });
  Te(() => {
    Object.assign(n, { ...l, ...r });
  });
  const i = o(() => (u == null ? void 0 : u.defaultSet) === "fa" ? "fa-spin" : (u == null ? void 0 : u.defaultSet) === "mdi" ? "mdi-spin" : ""), A = o(() => ((g) => {
    const { cancelButtonVariant: U } = g;
    return { "me-1": U === "elevated", "ms-1": !0 };
  })({ cancelButtonVariant: n.cancelButtonVariant })), P = o(() => we({ icon: r.cancelIcon, iconOptions: u, name: "false" })), w = o(() => we({ icon: r.loadingIcon, iconOptions: u, name: "loading" })), F = o(() => we({ icon: r.saveIcon, iconOptions: u, name: "save" }));
  function z() {
    a("close");
  }
  function C() {
    a("save");
  }
  return (g, U) => (p(), S("div", ve({ class: e(s) }, g.$attrs), [e(n).hideSaveIcon ? _("", !0) : (p(), oe(An, { key: 0, class: "ms-1", color: e(n).saveButtonColor, disabled: e(f), icon: "", size: e(n).saveButtonSize, title: e(d) ? "Loading" : e(n).saveButtonTitle, variant: e(n).saveButtonVariant, onClick: C }, { default: T(() => [e(d) ? (p(), oe(Ue, { key: 1, class: B(e(i)), color: e(n).loadingIconColor, icon: e(w) }, null, 8, ["class", "color", "icon"])) : (p(), oe(Ue, { key: 0, color: e(f) ? "error" : e(n).saveIconColor, icon: e(F) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["color", "disabled", "size", "title", "variant"])), e(n).hideCancelIcon ? _("", !0) : (p(), oe(An, { key: 1, class: B(e(A)), color: e(n).cancelButtonColor, icon: "", size: e(n).cancelButtonSize, title: e(n).cancelButtonTitle, variant: e(n).cancelButtonVariant, onClick: z }, { default: T(() => [e(n).hideSaveIcon && e(d) ? (p(), oe(Ue, { key: 0, class: B(e(i)), color: e(n).loadingIconColor, icon: e(w) }, null, 8, ["class", "color", "icon"])) : (p(), oe(Ue, { key: 1, class: "text-default", color: e(n).cancelIconColor, icon: e(P) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["class", "color", "size", "title", "variant"]))], 16));
} }), bn = (c) => {
  const { required: t, rules: l } = c;
  let { value: a } = c;
  a = e(a);
  const r = [];
  let u = !1;
  if (t && !a)
    return r.push("Field is required."), { errors: !0, results: r };
  if (l) {
    for (const f of l) {
      const s = (typeof f == "function" ? f : () => f)(a);
      s !== !0 && (typeof s == "string" ? r.push(s) : console.warn(`${s} is not a valid value. Rule functions must return boolean true or a string.`));
    }
    u = r.length > 0;
  }
  return { errors: u, results: r };
}, rn = (c) => {
  const { attrs: t, closeSiblings: l, fieldOnly: a, props: r, showField: u, timeOpened: f } = c;
  let s = f;
  return l && !a && (s = /* @__PURE__ */ new Date()), { settings: { ...t, ...r }, showField: !e(u), timeOpened: s };
}, Sn = (c) => {
  const { length: t = 0 } = c;
  let { suffix: l, text: a } = c;
  return a = a.toString(), l = l || "...", a.length > t ? `${a.substring(0, t)}${l}` : a;
}, cn = ["error", "update", "update:closeSiblingFields", "update:model-value"], Hn = ["cancelButtonColor", "cancelButtonSize", "cancelButtonTitle", "cancelButtonVariant", "cancelIcon", "cancelIconColor", "closeSiblings", "displayAppendIcon", "displayAppendIconColor", "displayAppendIconSize", "displayAppendInnerIcon", "displayAppendInnerIconColor", "displayAppendInnerIconSize", "displayPrependIcon", "displayPrependIconColor", "displayPrependIconSize", "displayPrependInnerIcon", "displayPrependInnerIconColor", "displayPrependInnerIconSize", "emptyText", "fieldOnly", "hideSaveIcon", "loadingIcon", "loadingIconColor", "loadingWait", "saveButtonColor", "saveButtonSize", "saveButtonTitle", "saveButtonVariant", "saveIcon", "saveIconColor", "tableField", "truncateLength", "truncateSuffix", "underlineColor", "underlineStyle", "underlineWidth", "underlined", "valueColor"], vn = (c) => {
  let t = c;
  return t = Object.entries(t).filter(([l]) => !Hn.includes(l)), Object.fromEntries(t);
}, xn = (c, t) => {
  const l = c.__vccOpts || c;
  for (const [a, r] of t)
    l[a] = r;
  return l;
}, Dn = xn(Me({ __name: "VInlineAutocomplete", props: me(Je({ autoSelectFirst: {}, clearIcon: {}, clearable: {}, density: {}, hideSelected: {}, itemTitle: {}, itemValue: {}, items: {}, menu: {}, menuIcon: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...jn }), { modelValue: {}, modelModifiers: {} }), emits: me([...cn], ["update:modelValue"]), setup(c, { emit: t }) {
  const l = Re(c, "modelValue"), a = Ge(), r = qe(), u = t, f = Ie(Ne, {}), s = Ie(Symbol.for("vuetify:icons")), d = c, n = Le({ ...a, ...d, ...f });
  Te(() => {
    Object.assign(n, { ...a, ...d, ...f });
  });
  const { cancelButtonColor: i, cancelButtonSize: A, cancelButtonTitle: P, cancelButtonVariant: w, cancelIcon: F, cancelIconColor: z, cardField: C, closeSiblings: g, color: U, fieldOnly: ye, hideCancelIcon: ge, hideDetails: Se, hideSaveIcon: se, loadingIcon: Ae, loadingIconColor: Oe, saveButtonColor: Pe, saveButtonSize: Ve, saveButtonTitle: be, saveButtonVariant: ze, saveIcon: Be, saveIconColor: Z, valueColor: Y } = sn(n), V = o(() => d.disabled), m = o(() => d.loading), W = v(!1), b = v(!1), N = v(), I = v(!1), q = v(null);
  let X = null;
  de(() => m.value, (y, M) => {
    !y && M && I.value && D();
  });
  const ue = o(() => we({ icon: d.clearIcon, iconOptions: s, name: "clear" })), he = o(() => l.value && l.value[n.itemTitle] ? ($(!1), l.value[n.itemTitle]) : l.value ? ($(!1), l.value) : ($(!0), n.emptyText));
  function $(y) {
    W.value = y;
  }
  const E = o(() => vn(n)), ae = o(() => ({ color: n.color, displayAppendIcon: n.displayAppendIcon, displayAppendIconColor: n.displayAppendIconColor, displayAppendIconSize: n.displayAppendIconSize, displayAppendInnerIcon: n.displayAppendInnerIcon, displayAppendInnerIconColor: n.displayAppendInnerIconColor, displayAppendInnerIconSize: n.displayAppendInnerIconSize, displayPrependIcon: n.displayPrependIcon, displayPrependIconColor: n.displayPrependIconColor, displayPrependIconSize: n.displayPrependIconSize, displayPrependInnerIcon: n.displayPrependInnerIcon, displayPrependInnerIconColor: n.displayPrependInnerIconColor, displayPrependInnerIconSize: n.displayPrependInnerIconSize, displayValue: he.value, empty: W.value, error: b.value, field: "v-text-field", underlineColor: n.underlineColor, underlineStyle: n.underlineStyle, underlineWidth: n.underlineWidth, underlined: n.underlined, valueColor: Y.value })), Ce = o(() => ({ ...nn, ...d.cardProps }));
  Te(() => {
    N.value = n.items || [];
  });
  const Fe = o(() => ln({ cell: n.cell && !I.value, density: n.density, disabled: V.value, field: "v-select", iconSet: s == null ? void 0 : s.defaultSet, loading: m.value, loadingWait: n.loadingWait, tableField: n.tableField, variant: n.variant })), xe = o(() => on({ cell: n.cell, cellUnderlineFullWidth: n.cellUnderlineFullWidth, density: n.density, field: "v-select" })), $e = In({ density: n.density, variant: n.variant }), ke = o(() => an({ active: I.value, name: "select" })), We = o(() => tn({ name: "select", showField: I.value })), re = o(() => ({})), j = o(() => H.value);
  function te() {
    b.value = !1, l.value = X, D();
  }
  const H = v(), ee = v(null), ne = v("body");
  function D() {
    var M, K;
    if (V.value || n.loadingWait && m.value)
      return;
    H.value = Ye({ cardMinWidth: (M = n.cardProps) == null ? void 0 : M.minWidth, cardOffsetX: n.cardOffsetX, cardOffsetY: n.cardOffsetY, cardWidth: (K = n.cardProps) == null ? void 0 : K.width, field: ee.value });
    const y = rn({ attrs: a, closeSiblings: g.value, fieldOnly: n.fieldOnly, props: d, showField: I, timeOpened: q.value });
    I.value = y.showField, q.value = y.timeOpened, le !== null && g.value && I.value && !n.fieldOnly && le.emit(y.timeOpened), X = l.value;
  }
  const L = v(), k = o(() => L.value);
  function G() {
    const y = bn({ required: n.required, rules: n.rules, value: l });
    return b.value = y.errors, L.value = y.results, y.results;
  }
  function fe() {
    X = l.value, u("update", l.value), n.loadingWait || D();
  }
  let le, h;
  function J(y) {
    u("update:closeSiblingFields", q), I.value && q.value !== y && te();
  }
  return de(() => I.value, () => {
    I.value && G();
  }), de(() => l.value, () => {
    I.value && G();
  }), g.value && import("@vueuse/core").then(({ useEventBus: y }) => {
    le = y(en), h = le.on(J);
  }), Ke(() => {
    h !== void 0 && le.off(J);
  }), (y, M) => (p(), S("div", { ref_key: "inlineFieldsContainer", ref: ee, class: B(e(Fe)), style: Q(e(re)) }, [!e(I) && !e(n).fieldOnly || e(C) ? (p(), S("div", { key: 0, class: B(e(xe)) }, [ce("div", { class: B(e($e)) }, [x(mn, ve(e(ae), { onToggleField: D }), _e({ _: 2 }, [Ee(e(r), (K, De) => ({ name: De, fn: T((Xe) => [pe(y.$slots, De, R(ie({ ...Xe })), void 0, !0)]) }))]), 1040)], 2)], 2)) : _("", !0), e(I) || e(n).fieldOnly || e(C) ? (p(), S("div", { key: 1, class: B(e(ke)) }, [(p(), oe(Qe, { disabled: !e(C), to: e(ne) }, [e(I) || e(n).fieldOnly ? (p(), oe(Mn, ve({ key: 0 }, e(E), { modelValue: l.value, "onUpdate:modelValue": M[0] || (M[0] = (K) => l.value = K), autofocus: !e(n).fieldOnly || e(n).autofocus, "clear-icon": e(ue), clearable: e(n).clearable, color: e(U), density: e(n).density, disabled: e(m) || e(V), error: e(b), "error-messages": e(k), "hide-details": e(Se), "hide-selected": e(n).hideSelected, "item-title": e(n).itemTitle, "item-value": e(n).itemValue, items: e(N), label: e(n).label, loading: e(m), menu: e(n).menu && !e(n).fieldOnly && e(I), variant: e(n).variant, width: "100%", onKeyup: fn(te, ["esc"]) }), _e({ _: 2 }, [Ee(e(r), (K, De) => ({ name: De, fn: T((Xe) => [pe(y.$slots, De, R(ie({ ...Xe })), void 0, !0)]) })), e(r).append ? void 0 : { name: "append", fn: T(() => [x(dn, { "cancel-button-color": e(i), "cancel-button-size": e(A), "cancel-button-title": e(P), "cancel-button-variant": e(w), "cancel-icon": e(F), "cancel-icon-color": e(z), error: e(b), "field-only": e(ye), "hide-cancel-icon": e(ge), "hide-save-icon": e(se), loading: e(m), "loading-icon": e(Ae), "loading-icon-color": e(Oe), "save-button-color": e(Pe), "save-button-size": e(Ve), "save-button-title": e(be), "save-button-variant": e(ze), "save-icon": e(Be), "save-icon-color": e(Z), onClose: te, onSave: fe }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "clearable", "color", "density", "disabled", "error", "error-messages", "hide-details", "hide-selected", "item-title", "item-value", "items", "label", "loading", "menu", "variant"])) : _("", !0)], 8, ["disabled", "to"]))], 2)) : _("", !0), e(C) ? (p(), S("div", { key: 2, class: B(e(We)), style: Q(e(j)) }, [x(Ze, R(ie(e(Ce))), { default: T(() => [x(He, null, { default: T(() => [ce("div", { ref_key: "cardFieldRef", ref: ne }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : _("", !0)], 6));
} }), [["__scopeId", "data-v-00c7f207"]]), el = Object.freeze(Object.defineProperty({ __proto__: null, default: Dn }, Symbol.toStringTag, { value: "Module" })), wn = Me({ __name: "BooleanIcons", props: me({ iconFalseColor: {}, iconFalseTitle: {}, iconTrueColor: {}, iconTrueTitle: {}, iconFalse: {}, iconTrue: {} }, { modelValue: {}, modelModifiers: {} }), emits: ["update:modelValue"], setup(c) {
  const t = c, l = Ie(Symbol.for("vuetify:icons")), a = Le({ ...t });
  Te(() => {
    Object.assign(a, { ...t });
  });
  const r = Re(c, "modelValue"), u = o(() => we({ icon: a.iconFalse, iconOptions: l, name: "false" })), f = o(() => we({ icon: a.iconTrue, iconOptions: l, name: "true" }));
  return (s, d) => r.value ? (p(), oe(e(On), { key: 0, class: "v-inline-fields--boolean-icons fa-fw", color: s.iconTrueColor, icon: e(f), size: "x-small", title: s.iconTrueTitle }, null, 8, ["color", "icon", "title"])) : (p(), oe(e(On), { key: 1, class: "v-inline-fields--boolean-icons fa-fw", color: s.iconFalseColor, icon: e(u), size: "x-small", title: s.iconFalseTitle }, null, 8, ["color", "icon", "title"]));
} }), nl = { class: "v-selection-control__wrapper" }, ll = Me({ __name: "VInlineCheckbox", props: me(Je({ density: {}, falseIcon: {}, trueIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Nn }), { modelValue: {}, modelModifiers: {} }), emits: me([...cn], ["update:modelValue"]), setup(c, { emit: t }) {
  const l = Re(c, "modelValue"), a = Ge(), r = qe(), u = t, f = Ie(Ne, {}), s = Ie(Symbol.for("vuetify:icons")), d = Cn(), n = c, i = Le({ ...a, ...n, ...f });
  Te(() => {
    Object.assign(i, { ...a, ...n, ...f });
  });
  const A = o(() => n.disabled), P = o(() => n.loading), w = o(() => i.underlineColor), F = v(!1), z = v(!1), C = v(null), g = o(() => vn(i)), U = o(() => ({ ...nn, ...n.cardProps }));
  de(() => P.value, ($, E) => {
    !$ && E && z.value && I();
  });
  const ye = o(() => we({ icon: n.trueIcon, iconOptions: s, name: "checkboxFalse" })), ge = o(() => we({ icon: n.iconTrue, iconOptions: s, name: "checkboxTrue" })), Se = o(() => l.value == i.trueValue), se = o(() => Tn({ modelValue: l, trueValue: i.trueValue })), Ae = o(() => ln({ cell: i.cell && !z.value, density: i.density, disabled: A.value, field: "v-checkbox", loading: P.value, loadingWait: i.loadingWait, tableField: i.tableField })), Oe = o(() => on({ cell: i.cell, cellUnderlineFullWidth: i.cellUnderlineFullWidth, density: i.density, field: "v-checkbox" })), Pe = $n({ density: i.density }), Ve = o(() => an({ active: z.value, name: "checkbox" })), be = o(() => Fn("checkbox", i.valueColor, { error: F })), ze = o(() => tn({ name: "checkbox", showField: z.value })), Be = o(() => ({})), Z = o(() => gn({ color: i.color, error: F, theme: d, underlineColor: w.value, underlineStyle: i.underlineStyle, underlineWidth: i.underlineWidth, underlined: i.underlined })), Y = o(() => m.value);
  function V() {
    F.value = !1, I();
  }
  const m = v(), W = v(null), b = v("body"), N = Ln();
  function I() {
    var E, ae;
    if (A.value || i.loadingWait && P.value)
      return;
    m.value = Ye({ cardMinWidth: (E = i.cardProps) == null ? void 0 : E.minWidth, cardOffsetX: i.cardOffsetX, cardOffsetY: i.cardOffsetY, cardWidth: (ae = i.cardProps) == null ? void 0 : ae.width, field: W.value, name: "checkbox" });
    const $ = rn({ attrs: a, closeSiblings: i.closeSiblings, fieldOnly: i.fieldOnly, props: n, showField: z, timeOpened: C.value });
    z.value = $.showField, C.value = $.timeOpened, X !== null && i.closeSiblings && z.value && !i.fieldOnly && X.emit($.timeOpened);
  }
  function q($) {
    l.value = $, u("update", $), i.loadingWait || I();
  }
  let X, ue;
  function he($) {
    u("update:closeSiblingFields", C), z.value && C.value !== $ && I();
  }
  return de(() => N, () => {
    var $, E;
    m.value = Ye({ cardMinWidth: ($ = i.cardProps) == null ? void 0 : $.minWidth, cardOffsetX: i.cardOffsetX, cardOffsetY: i.cardOffsetY, cardWidth: (E = i.cardProps) == null ? void 0 : E.width, field: W.value, name: "checkbox" });
  }, { deep: !0 }), i.closeSiblings && import("@vueuse/core").then(({ useEventBus: $ }) => {
    X = $(en), ue = X.on(he);
  }), Ke(() => {
    ue !== void 0 && X.off(he);
  }), ($, E) => (p(), S("div", { ref_key: "inlineFieldsContainer", ref: W, class: B(e(Ae)), style: Q(e(Be)) }, [!e(z) && !e(i).fieldOnly || e(i).cardField ? (p(), S("div", { key: 0, class: B(e(Oe)), onClick: E[2] || (E[2] = (ae) => e(i).cell ? I() : void 0) }, [ce("div", { class: B(e(Pe)), onClick: E[1] || (E[1] = (ae) => e(i).cell ? void 0 : I()) }, [ce("div", nl, [e(i).icons ? (p(), S("div", { key: 0, class: B(["v-inline-fields--boolean-icons-container", e(be)]), style: Q(e(Z)) }, [x(wn, { modelValue: e(se), "onUpdate:modelValue": E[0] || (E[0] = (ae) => zn(se) ? se.value = ae : null), "icon-false": e(i).iconFalse, "icon-false-color": e(i).iconFalseColor, "icon-false-title": e(i).iconFalseTitle, "icon-true": e(i).iconTrue, "icon-true-color": e(i).iconTrueColor, "icon-true-title": e(i).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (p(), S("div", { key: 1, class: B(["d-inline-flex align-center justify-center", e(be)]), style: Q(e(Z)) }, hn(e(Se)), 7))])], 2)], 2)) : _("", !0), e(z) || e(i).fieldOnly || e(i).cardField ? (p(), S("div", { key: 1, class: B(e(Ve)) }, [(p(), oe(Qe, { disabled: !e(i).cardField, to: e(b) }, [x(Gn, ve(e(g), { color: e(i).color, density: e(i).density, disabled: e(P) || e(A), error: e(F), "false-icon": e(ye), "false-value": e(i).falseValue, "hide-details": e(i).hideDetails, label: e(i).label, "model-value": e(se), "true-icon": e(ge), "true-value": e(i).trueValue, "onUpdate:modelValue": q }), _e({ _: 2 }, [Ee(e(r), (ae, Ce) => ({ name: Ce, fn: T((Fe) => [pe($.$slots, Ce, R(ie({ ...Fe })))]) })), e(r).append ? void 0 : { name: "append", fn: T(() => [x(dn, { "cancel-button-color": e(i).cancelButtonColor, "cancel-button-size": e(i).cancelButtonSize, "cancel-button-title": e(i).cancelButtonTitle, "cancel-button-variant": e(i).cancelButtonVariant, "cancel-icon": e(i).cancelIcon, "cancel-icon-color": e(i).cancelIconColor, error: e(F), "field-only": e(i).fieldOnly, "hide-cancel-icon": e(i).hideCancelIcon, "hide-save-icon": !0, loading: e(P), "loading-icon": e(i).loadingIcon, "loading-icon-color": e(i).loadingIconColor, "save-button-color": e(i).saveButtonColor, "save-button-size": e(i).saveButtonSize, "save-button-title": e(i).saveButtonTitle, "save-button-variant": e(i).saveButtonVariant, "save-icon": e(i).saveIcon, "save-icon-color": e(i).saveIconColor, onClose: V, onSave: q }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "model-value", "true-icon", "true-value"])], 8, ["disabled", "to"]))], 2)) : _("", !0), e(i).cardField ? (p(), S("div", { key: 2, class: B(e(ze)), style: Q(e(Y)) }, [x(Ze, R(ie(e(U))), { default: T(() => [x(He, null, { default: T(() => [ce("div", { ref_key: "cardFieldRef", ref: b }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : _("", !0)], 6));
} }), ol = Me({ __name: "VInlineCustomField", props: me(Je({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Wn }), { modelValue: {}, modelModifiers: {} }), emits: me([...cn], ["update:modelValue"]), setup(c, { emit: t }) {
  const l = Re(c, "modelValue"), a = Ge(), r = qe(), u = t, f = Ie(Ne, {}), s = Ie(Symbol.for("vuetify:icons")), d = c, n = Le({ ...a, ...d, ...f });
  Te(() => {
    Object.assign(n, { ...a, ...d, ...f });
  });
  const { cancelButtonColor: i, cancelButtonSize: A, cancelButtonTitle: P, cancelButtonVariant: w, cancelIcon: F, cancelIconColor: z, cardField: C, closeSiblings: g, fieldOnly: U, hideCancelIcon: ye, hideSaveIcon: ge, loadingIcon: Se, loadingIconColor: se, saveButtonColor: Ae, saveButtonSize: Oe, saveButtonTitle: Pe, saveButtonVariant: Ve, saveIcon: be, saveIconColor: ze } = sn(n), Be = o(() => d.disabled), Z = o(() => d.loading), Y = v(!1), V = v(!1), m = v(!1), W = v(null);
  let b = l.value;
  de(() => Z.value, (k, G) => {
    !k && G && m.value && j();
  });
  const N = o(() => l.value ? (I(!1), n.truncateLength ? Sn({ length: n.truncateLength, suffix: n.truncateSuffix, text: l.value }) : l.value) : (I(!0), n.emptyText));
  function I(k) {
    Y.value = k;
  }
  const q = o(() => ({ ...n, loading: Z.value, modelValue: l.value, originalValue: b })), X = o(() => ({ color: n.color, displayAppendIcon: d.displayAppendIcon, displayAppendIconColor: d.displayAppendIconColor, displayAppendIconSize: d.displayAppendIconSize, displayAppendInnerIcon: d.displayAppendInnerIcon, displayAppendInnerIconColor: d.displayAppendInnerIconColor, displayAppendInnerIconSize: d.displayAppendInnerIconSize, displayPrependIcon: d.displayPrependIcon, displayPrependIconColor: d.displayPrependIconColor, displayPrependIconSize: d.displayPrependIconSize, displayPrependInnerIcon: d.displayPrependInnerIcon, displayPrependInnerIconColor: d.displayPrependInnerIconColor, displayPrependInnerIconSize: d.displayPrependInnerIconSize, displayValue: N.value, empty: Y.value, error: V.value, field: "v-text-field", underlineColor: n.underlineColor, underlineStyle: n.underlineStyle, underlineWidth: n.underlineWidth, underlined: n.underlined, valueColor: n.valueColor })), ue = o(() => ({ ...nn, ...d.cardProps })), he = o(() => ln({ cell: n.cell && !m.value, density: n.density, disabled: Be.value, field: "v-text-field", iconSet: s == null ? void 0 : s.defaultSet, loading: Z.value, loadingWait: n.loadingWait, tableField: n.tableField, variant: n.variant })), $ = o(() => on({ cell: n.cell, cellUnderlineFullWidth: n.cellUnderlineFullWidth, density: n.density, field: "v-text-field" })), E = In({ density: n.density, variant: n.variant }), ae = o(() => an({ active: m.value, name: "text-field" })), Ce = o(() => tn({ name: "custom-field", showField: m.value })), Fe = o(() => ({})), xe = o(() => ke.value);
  function $e() {
    V.value = !1, l.value = b, j();
  }
  const ke = v(), We = v(null), re = v("body");
  function j() {
    var G, fe;
    if (Be.value || n.loadingWait && Z.value)
      return;
    ke.value = Ye({ cardMinWidth: (G = n.cardProps) == null ? void 0 : G.minWidth, cardOffsetX: n.cardOffsetX, cardOffsetY: n.cardOffsetY, cardWidth: (fe = n.cardProps) == null ? void 0 : fe.width, field: We.value });
    const k = rn({ attrs: a, closeSiblings: g.value, fieldOnly: n.fieldOnly, props: d, showField: m, timeOpened: W.value });
    m.value = k.showField, W.value = k.timeOpened, ne !== null && g.value && m.value && !n.fieldOnly && ne.emit(k.timeOpened);
  }
  const te = v();
  function H() {
    const k = bn({ required: n.required, rules: n.rules, value: l });
    return V.value = k.errors, te.value = k.results, k.results;
  }
  function ee() {
    V.value ? V.value = !0 : (b = l.value, u("update", l.value), n.loadingWait || j());
  }
  let ne, D;
  function L(k) {
    u("update:closeSiblingFields", W), m.value && W.value !== k && $e();
  }
  return de(() => m.value, () => {
    m.value && H();
  }), de(() => l.value, () => {
    m.value && H();
  }), g.value && import("@vueuse/core").then(({ useEventBus: k }) => {
    ne = k(en), D = ne.on(L);
  }), Ke(() => {
    D !== void 0 && ne.off(L);
  }), (k, G) => (p(), S("div", { ref_key: "inlineFieldsContainer", ref: We, class: B(e(he)), style: Q(e(Fe)) }, [!e(m) && !e(n).fieldOnly || e(C) ? (p(), S("div", { key: 0, class: B(e($)) }, [ce("div", { class: B(e(E)) }, [x(mn, ve(e(X), { onToggleField: j }), _e({ _: 2 }, [Ee(e(r), (fe, le) => ({ name: le, fn: T((h) => [pe(k.$slots, le, R(ie({ ...h })))]) }))]), 1040)], 2)], 2)) : _("", !0), e(m) || e(n).fieldOnly || e(C) ? (p(), S("div", { key: 1, class: B(["d-flex align-center py-2", e(ae)]) }, [(p(), oe(Qe, { disabled: !e(C), to: e(re) }, [pe(k.$slots, "default", R(ie(e(q)))), x(dn, { "cancel-button-color": e(i), "cancel-button-size": e(A), "cancel-button-title": e(P), "cancel-button-variant": e(w), "cancel-icon": e(F), "cancel-icon-color": e(z), error: e(V), "field-only": e(U), "hide-cancel-icon": e(ye), "hide-save-icon": e(ge), loading: e(Z), "loading-icon": e(Se), "loading-icon-color": e(se), "save-button-color": e(Ae), "save-button-size": e(Oe), "save-button-title": e(Pe), "save-button-variant": e(Ve), "save-icon": e(be), "save-icon-color": e(ze), onClose: $e, onSave: ee }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])], 8, ["disabled", "to"]))], 2)) : _("", !0), e(C) ? (p(), S("div", { key: 2, class: B(e(Ce)), style: Q(e(xe)) }, [x(Ze, R(ie(e(ue))), { default: T(() => [x(He, null, { default: T(() => [ce("div", { ref_key: "cardFieldRef", ref: re }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : _("", !0)], 6));
} }), _n = xn(Me({ __name: "VInlineSelect", props: me(Je({ clearIcon: {}, clearable: {}, density: {}, hideSelected: {}, itemTitle: {}, itemValue: {}, items: {}, menu: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Xn }), { modelValue: {}, modelModifiers: {} }), emits: me([...cn], ["update:modelValue"]), setup(c, { emit: t }) {
  const l = Re(c, "modelValue"), a = Ge(), r = qe(), u = t, f = Ie(Ne, {}), s = Ie(Symbol.for("vuetify:icons")), d = c, n = Le({ ...a, ...d, ...f });
  Te(() => {
    Object.assign(n, { ...a, ...d, ...f });
  });
  const { cancelButtonColor: i, cancelButtonSize: A, cancelButtonTitle: P, cancelButtonVariant: w, cancelIcon: F, cancelIconColor: z, cardField: C, closeSiblings: g, color: U, fieldOnly: ye, hideCancelIcon: ge, hideDetails: Se, hideSaveIcon: se, loadingIcon: Ae, loadingIconColor: Oe, saveButtonColor: Pe, saveButtonSize: Ve, saveButtonTitle: be, saveButtonVariant: ze, saveIcon: Be, saveIconColor: Z, valueColor: Y } = sn(n), V = o(() => d.disabled), m = o(() => d.loading), W = v(!1), b = v(!1), N = v(), I = v(!1), q = v(null);
  let X = null;
  de(() => m.value, (y, M) => {
    !y && M && I.value && D();
  });
  const ue = o(() => we({ icon: d.clearIcon, iconOptions: s, name: "clear" })), he = o(() => l.value && l.value[n.itemTitle] ? ($(!1), l.value[n.itemTitle]) : l.value ? ($(!1), l.value) : ($(!0), n.emptyText));
  function $(y) {
    W.value = y;
  }
  const E = o(() => vn(n)), ae = o(() => ({ color: n.color, displayAppendIcon: n.displayAppendIcon, displayAppendIconColor: n.displayAppendIconColor, displayAppendIconSize: n.displayAppendIconSize, displayAppendInnerIcon: n.displayAppendInnerIcon, displayAppendInnerIconColor: n.displayAppendInnerIconColor, displayAppendInnerIconSize: n.displayAppendInnerIconSize, displayPrependIcon: n.displayPrependIcon, displayPrependIconColor: n.displayPrependIconColor, displayPrependIconSize: n.displayPrependIconSize, displayPrependInnerIcon: n.displayPrependInnerIcon, displayPrependInnerIconColor: n.displayPrependInnerIconColor, displayPrependInnerIconSize: n.displayPrependInnerIconSize, displayValue: he.value, empty: W.value, error: b.value, field: "v-text-field", underlineColor: n.underlineColor, underlineStyle: n.underlineStyle, underlineWidth: n.underlineWidth, underlined: n.underlined, valueColor: Y.value })), Ce = o(() => ({ ...nn, ...d.cardProps }));
  Te(() => {
    N.value = n.items || [];
  });
  const Fe = o(() => ln({ cell: n.cell && !I.value, density: n.density, disabled: V.value, field: "v-select", iconSet: s == null ? void 0 : s.defaultSet, loading: m.value, loadingWait: n.loadingWait, tableField: n.tableField, variant: n.variant })), xe = o(() => on({ cell: n.cell, cellUnderlineFullWidth: n.cellUnderlineFullWidth, density: n.density, field: "v-select" })), $e = In({ density: n.density, variant: n.variant }), ke = o(() => an({ active: I.value, name: "select" })), We = o(() => tn({ name: "select", showField: I.value })), re = o(() => ({})), j = o(() => H.value);
  function te() {
    b.value = !1, l.value = X, D();
  }
  const H = v(), ee = v(null), ne = v("body");
  function D() {
    var M, K;
    if (V.value || n.loadingWait && m.value)
      return;
    H.value = Ye({ cardMinWidth: (M = n.cardProps) == null ? void 0 : M.minWidth, cardOffsetX: n.cardOffsetX, cardOffsetY: n.cardOffsetY, cardWidth: (K = n.cardProps) == null ? void 0 : K.width, field: ee.value });
    const y = rn({ attrs: a, closeSiblings: g.value, fieldOnly: n.fieldOnly, props: d, showField: I, timeOpened: q.value });
    I.value = y.showField, q.value = y.timeOpened, le !== null && g.value && I.value && !n.fieldOnly && le.emit(y.timeOpened), X = l.value;
  }
  const L = v(), k = o(() => L.value);
  function G() {
    const y = bn({ required: n.required, rules: n.rules, value: l });
    return b.value = y.errors, L.value = y.results, y.results;
  }
  function fe() {
    X = l.value, u("update", l.value), n.loadingWait || D();
  }
  let le, h;
  function J(y) {
    u("update:closeSiblingFields", q), I.value && q.value !== y && te();
  }
  return de(() => I.value, () => {
    I.value && G();
  }), de(() => l.value, () => {
    I.value && G();
  }), g.value && import("@vueuse/core").then(({ useEventBus: y }) => {
    le = y(en), h = le.on(J);
  }), Ke(() => {
    h !== void 0 && le.off(J);
  }), (y, M) => (p(), S("div", { ref_key: "inlineFieldsContainer", ref: ee, class: B(e(Fe)), style: Q(e(re)) }, [!e(I) && !e(n).fieldOnly || e(C) ? (p(), S("div", { key: 0, class: B(e(xe)) }, [ce("div", { class: B(e($e)) }, [x(mn, ve(e(ae), { onToggleField: D }), _e({ _: 2 }, [Ee(e(r), (K, De) => ({ name: De, fn: T((Xe) => [pe(y.$slots, De, R(ie({ ...Xe })), void 0, !0)]) }))]), 1040)], 2)], 2)) : _("", !0), e(I) || e(n).fieldOnly || e(C) ? (p(), S("div", { key: 1, class: B(e(ke)) }, [(p(), oe(Qe, { disabled: !e(C), to: e(ne) }, [x(Un, ve(e(E), { modelValue: l.value, "onUpdate:modelValue": M[0] || (M[0] = (K) => l.value = K), autofocus: !e(n).fieldOnly || e(n).autofocus, "clear-icon": e(ue), clearable: e(n).clearable, color: e(U), density: e(n).density, disabled: e(m) || e(V), error: e(b), "error-messages": e(k), "hide-details": e(Se), "hide-selected": e(n).hideSelected, "item-title": e(n).itemTitle, "item-value": e(n).itemValue, items: e(N), label: e(n).label, loading: e(m), menu: e(n).menu && !e(n).fieldOnly && e(I), variant: e(n).variant, width: "100%", onKeyup: fn(te, ["esc"]) }), _e({ _: 2 }, [Ee(e(r), (K, De) => ({ name: De, fn: T((Xe) => [pe(y.$slots, De, R(ie({ ...Xe })), void 0, !0)]) })), e(r).append ? void 0 : { name: "append", fn: T(() => [x(dn, { "cancel-button-color": e(i), "cancel-button-size": e(A), "cancel-button-title": e(P), "cancel-button-variant": e(w), "cancel-icon": e(F), "cancel-icon-color": e(z), error: e(b), "field-only": e(ye), "hide-cancel-icon": e(ge), "hide-save-icon": e(se), loading: e(m), "loading-icon": e(Ae), "loading-icon-color": e(Oe), "save-button-color": e(Pe), "save-button-size": e(Ve), "save-button-title": e(be), "save-button-variant": e(ze), "save-icon": e(Be), "save-icon-color": e(Z), onClose: te, onSave: fe }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "clearable", "color", "density", "disabled", "error", "error-messages", "hide-details", "hide-selected", "item-title", "item-value", "items", "label", "loading", "menu", "variant"])], 8, ["disabled", "to"]))], 2)) : _("", !0), e(C) ? (p(), S("div", { key: 2, class: B(e(We)), style: Q(e(j)) }, [x(Ze, R(ie(e(Ce))), { default: T(() => [x(He, null, { default: T(() => [ce("div", { ref_key: "cardFieldRef", ref: ne }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : _("", !0)], 6));
} }), [["__scopeId", "data-v-cdf7bc97"]]), al = Object.freeze(Object.defineProperty({ __proto__: null, default: _n }, Symbol.toStringTag, { value: "Module" })), il = { class: "v-selection-control__wrapper" }, tl = Me({ __name: "VInlineSwitch", props: me(Je({ density: {}, falseIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Jn }), { modelValue: {}, modelModifiers: {} }), emits: me([...cn], ["update:modelValue"]), setup(c, { emit: t }) {
  const l = Re(c, "modelValue"), a = Ge(), r = qe(), u = t, f = Ie(Ne, {}), s = Cn(), d = c, n = Le({ ...a, ...d, ...f });
  Te(() => {
    Object.assign(n, { ...a, ...d, ...f });
  });
  const { cancelButtonColor: i, cancelButtonSize: A, cancelButtonTitle: P, cancelButtonVariant: w, cancelIcon: F, cancelIconColor: z, cardField: C, closeSiblings: g, color: U, fieldOnly: ye, hideCancelIcon: ge, hideDetails: Se, loadingIcon: se, loadingIconColor: Ae, saveButtonColor: Oe, saveButtonSize: Pe, saveButtonTitle: Ve, saveButtonVariant: be, saveIcon: ze, saveIconColor: Be } = sn(n), Z = o(() => d.disabled), Y = o(() => d.loading), V = v(!1), m = v(!1), W = v(null), b = o(() => vn(n)), N = o(() => ({ ...nn, ...d.cardProps }));
  de(() => Y.value, (D, L) => {
    !D && L && m.value && j();
  });
  const I = o(() => l.value == n.trueValue), q = o(() => Tn({ modelValue: l, trueValue: n.trueValue })), X = o(() => ln({ cell: n.cell && !m.value, density: n.density, disabled: Z.value, field: "v-switch", loading: Y.value, loadingWait: n.loadingWait, tableField: n.tableField })), ue = o(() => on({ cell: n.cell, cellUnderlineFullWidth: n.cellUnderlineFullWidth, density: n.density, field: "v-switch" })), he = $n({ density: n.density }), $ = o(() => an({ active: m.value, name: "switch" })), E = o(() => Fn("switch", n.valueColor, { error: V })), ae = o(() => tn({ name: "switch", showField: m.value })), Ce = o(() => ({})), Fe = o(() => gn({ color: n.color, error: V, theme: s, underlineColor: n.underlineColor, underlineStyle: n.underlineStyle, underlineWidth: n.underlineWidth, underlined: n.underlined })), xe = o(() => ke.value);
  function $e() {
    V.value = !1, j();
  }
  const ke = v(), We = v(null), re = v("body");
  function j() {
    var L, k;
    if (Z.value || n.loadingWait && Y.value)
      return;
    ke.value = Ye({ cardMinWidth: (L = n.cardProps) == null ? void 0 : L.minWidth, cardOffsetX: n.cardOffsetX, cardOffsetY: n.cardOffsetY, cardWidth: (k = n.cardProps) == null ? void 0 : k.width, field: We.value });
    const D = rn({ attrs: a, closeSiblings: g.value, fieldOnly: n.fieldOnly, props: d, showField: m.value, timeOpened: W.value });
    m.value = D.showField, W.value = D.timeOpened, H !== null && g.value && m.value && !n.fieldOnly && H.emit(D.timeOpened);
  }
  function te(D) {
    l.value = D, u("update", D), n.loadingWait || j();
  }
  let H, ee;
  function ne(D) {
    u("update:closeSiblingFields", W), m.value && W.value !== D && j();
  }
  return g.value && import("@vueuse/core").then(({ useEventBus: D }) => {
    H = D(en), ee = H.on(ne);
  }), Ke(() => {
    ee !== void 0 && H.off(ne);
  }), (D, L) => (p(), S("div", { ref_key: "inlineFieldsContainer", ref: We, class: B(e(X)), style: Q(e(Ce)) }, [!e(m) && !e(n).fieldOnly || e(n).cardField ? (p(), S("div", { key: 0, class: B(e(ue)), onClick: L[2] || (L[2] = (k) => e(n).cell ? j() : void 0) }, [ce("div", { class: B(e(he)), onClick: L[1] || (L[1] = (k) => e(n).cell ? void 0 : j()) }, [ce("div", il, [e(n).icons ? (p(), S("div", { key: 0, class: B(["v-inline-fields--boolean-icons-container", e(E)]), style: Q(e(Fe)) }, [x(wn, { modelValue: e(q), "onUpdate:modelValue": L[0] || (L[0] = (k) => zn(q) ? q.value = k : null), "icon-false": e(n).iconFalse, "icon-false-color": e(n).iconFalseColor, "icon-false-title": e(n).iconFalseTitle, "icon-true": e(n).iconTrue, "icon-true-color": e(n).iconTrueColor, "icon-true-title": e(n).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (p(), S("div", { key: 1, class: B(["d-inline-flex align-center justify-center", e(E)]), style: Q(e(Fe)) }, hn(e(I)), 7))])], 2)], 2)) : _("", !0), e(m) || e(n).fieldOnly || e(C) ? (p(), S("div", { key: 1, class: B(e($)) }, [(p(), oe(Qe, { disabled: !e(C), to: e(re) }, [x(Yn, ve(e(b), { color: e(U), density: e(n).density, disabled: e(Y) || e(Z), error: e(V), "false-icon": e(n).falseIcon, "false-value": e(n).falseValue, "hide-details": e(Se), label: e(n).label, loading: e(Y), "model-value": e(q), "true-value": e(n).trueValue, "onUpdate:modelValue": te }), _e({ _: 2 }, [Ee(e(r), (k, G) => ({ name: G, fn: T((fe) => [pe(D.$slots, G, R(ie({ ...fe })))]) })), e(r).append ? void 0 : { name: "append", fn: T(() => [x(dn, { "cancel-button-color": e(i), "cancel-button-size": e(A), "cancel-button-title": e(P), "cancel-button-variant": e(w), "cancel-icon": e(F), "cancel-icon-color": e(z), class: "ms-3", error: e(V), "field-only": e(ye), "hide-cancel-icon": e(ge), "hide-save-icon": !0, loading: e(Y), "loading-icon": e(se), "loading-icon-color": e(Ae), "save-button-color": e(Oe), "save-button-size": e(Pe), "save-button-title": e(Ve), "save-button-variant": e(be), "save-icon": e(ze), "save-icon-color": e(Be), onClose: $e, onSave: te }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "loading", "model-value", "true-value"])], 8, ["disabled", "to"]))], 2)) : _("", !0), e(C) ? (p(), S("div", { key: 2, class: B(e(ae)), style: Q(e(xe)) }, [x(Ze, R(ie(e(N))), { default: T(() => [x(He, null, { default: T(() => [ce("div", { ref_key: "cardFieldRef", ref: re }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : _("", !0)], 6));
} }), dl = Me({ __name: "VInlineTextField", props: me(Je({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Wn }), { modelValue: {}, modelModifiers: {} }), emits: me([...cn], ["update:modelValue"]), setup(c, { emit: t }) {
  const l = Re(c, "modelValue"), a = Ge(), r = qe(), u = t, f = Ie(Ne, {}), s = Ie(Symbol.for("vuetify:icons")), d = c, n = Le({ ...a, ...d, ...f });
  Te(() => {
    Object.assign(n, { ...a, ...d, ...f });
  });
  const { cancelButtonColor: i, cancelButtonSize: A, cancelButtonTitle: P, cancelButtonVariant: w, cancelIcon: F, cancelIconColor: z, cardField: C, closeSiblings: g, color: U, fieldOnly: ye, hideCancelIcon: ge, hideDetails: Se, hideSaveIcon: se, loadingIcon: Ae, loadingIconColor: Oe, saveButtonColor: Pe, saveButtonSize: Ve, saveButtonTitle: be, saveButtonVariant: ze, saveIcon: Be, saveIconColor: Z } = sn(n), Y = o(() => d.disabled), V = o(() => d.loading), m = v(!1), W = v(!1), b = v(!1), N = v(null);
  let I = null;
  de(() => V.value, (h, J) => {
    !h && J && b.value && ee();
  });
  const q = o(() => we({ icon: d.clearIcon, iconOptions: s, name: "clear" })), X = o(() => l.value ? (ue(!1), n.truncateLength ? Sn({ length: n.truncateLength, suffix: n.truncateSuffix, text: l.value }) : l.value) : (ue(!0), n.emptyText));
  function ue(h) {
    m.value = h;
  }
  const he = o(() => vn(n)), $ = o(() => ({ color: n.color, displayAppendIcon: n.displayAppendIcon, displayAppendIconColor: n.displayAppendIconColor, displayAppendIconSize: n.displayAppendIconSize, displayAppendInnerIcon: n.displayAppendInnerIcon, displayAppendInnerIconColor: n.displayAppendInnerIconColor, displayAppendInnerIconSize: n.displayAppendInnerIconSize, displayPrependIcon: n.displayPrependIcon, displayPrependIconColor: n.displayPrependIconColor, displayPrependIconSize: n.displayPrependIconSize, displayPrependInnerIcon: n.displayPrependInnerIcon, displayPrependInnerIconColor: n.displayPrependInnerIconColor, displayPrependInnerIconSize: n.displayPrependInnerIconSize, displayValue: X.value, empty: m.value, error: W.value, field: "v-text-field", underlineColor: n.underlineColor, underlineStyle: n.underlineStyle, underlineWidth: n.underlineWidth, underlined: n.underlined, valueColor: n.valueColor })), E = o(() => ({ ...nn, ...d.cardProps })), ae = o(() => ln({ cell: n.cell && !b.value, density: n.density, disabled: Y.value, field: "v-text-field", iconSet: s == null ? void 0 : s.defaultSet, loading: V.value, loadingWait: n.loadingWait, tableField: n.tableField, variant: n.variant })), Ce = o(() => on({ cell: n.cell, cellUnderlineFullWidth: n.cellUnderlineFullWidth, density: n.density, field: "v-text-field" })), Fe = In({ density: n.density, variant: n.variant }), xe = o(() => an({ active: b.value, name: "text-field" })), $e = o(() => tn({ name: "text-field", showField: b.value })), ke = o(() => ({})), We = o(() => j.value);
  function re() {
    W.value = !1, l.value = I, ee();
  }
  const j = v(), te = v(null), H = v("body");
  function ee() {
    var J, y;
    if (Y.value || n.loadingWait && V.value)
      return;
    j.value = Ye({ cardMinWidth: (J = n.cardProps) == null ? void 0 : J.minWidth, cardOffsetX: n.cardOffsetX, cardOffsetY: n.cardOffsetY, cardWidth: (y = n.cardProps) == null ? void 0 : y.width, field: te.value });
    const h = rn({ attrs: a, closeSiblings: g.value, fieldOnly: n.fieldOnly, props: d, showField: b, timeOpened: N.value });
    b.value = h.showField, N.value = h.timeOpened, G !== null && g.value && b.value && !n.fieldOnly && G.emit(h.timeOpened), I = l.value;
  }
  const ne = v(), D = o(() => ne.value);
  function L() {
    const h = bn({ required: n.required, rules: n.rules, value: l });
    return W.value = h.errors, ne.value = h.results, h.results;
  }
  function k() {
    W.value ? W.value = !0 : (I = l.value, u("update", l.value), n.loadingWait || ee());
  }
  let G, fe;
  function le(h) {
    u("update:closeSiblingFields", N), b.value && N.value !== h && re();
  }
  return de(() => b.value, () => {
    b.value && L();
  }), de(() => l.value, () => {
    b.value && L();
  }), g.value && import("@vueuse/core").then(({ useEventBus: h }) => {
    G = h(en), fe = G.on(le);
  }), Ke(() => {
    fe !== void 0 && G.off(le);
  }), (h, J) => (p(), S("div", { ref_key: "inlineFieldsContainer", ref: te, class: B(e(ae)), style: Q(e(ke)) }, [!e(b) && !e(n).fieldOnly || e(C) ? (p(), S("div", { key: 0, class: B(e(Ce)) }, [ce("div", { class: B(e(Fe)) }, [x(mn, ve(e($), { onToggleField: ee }), _e({ _: 2 }, [Ee(e(r), (y, M) => ({ name: M, fn: T((K) => [pe(h.$slots, M, R(ie({ ...K })))]) }))]), 1040)], 2)], 2)) : _("", !0), e(b) || e(n).fieldOnly || e(C) ? (p(), S("div", { key: 1, class: B(e(xe)) }, [(p(), oe(Qe, { disabled: !e(C), to: e(H) }, [x(qn, ve(e(he), { modelValue: l.value, "onUpdate:modelValue": J[0] || (J[0] = (y) => l.value = y), autofocus: !e(n).fieldOnly || e(n).autofocus, "clear-icon": e(q), color: e(U), density: e(n).density, disabled: e(V) || e(Y), error: e(W), "error-messages": e(D), "hide-details": e(Se), label: e(n).label, loading: e(V), variant: e(n).variant, width: "100%", onKeyup: [fn(k, ["enter"]), fn(re, ["esc"])] }), _e({ _: 2 }, [Ee(e(r), (y, M) => ({ name: M, fn: T((K) => [pe(h.$slots, M, R(ie({ ...K })))]) })), e(r).append ? void 0 : { name: "append", fn: T(() => [x(dn, { "cancel-button-color": e(i), "cancel-button-size": e(A), "cancel-button-title": e(P), "cancel-button-variant": e(w), "cancel-icon": e(F), "cancel-icon-color": e(z), error: e(W), "field-only": e(ye), "hide-cancel-icon": e(ge), "hide-save-icon": e(se), loading: e(V), "loading-icon": e(Ae), "loading-icon-color": e(Oe), "save-button-color": e(Pe), "save-button-size": e(Ve), "save-button-title": e(be), "save-button-variant": e(ze), "save-icon": e(Be), "save-icon-color": e(Z), onClose: re, onSave: k }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "variant"])], 8, ["disabled", "to"]))], 2)) : _("", !0), e(C) ? (p(), S("div", { key: 2, class: B(e($e)), style: Q(e(We)) }, [x(Ze, R(ie(e(E))), { default: T(() => [x(He, null, { default: T(() => [ce("div", { ref_key: "cardFieldRef", ref: H }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : _("", !0)], 6));
} }), rl = Me({ __name: "VInlineTextarea", props: me(Je({ autoGrow: {}, clearIcon: {}, density: {}, rows: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Kn }), { modelValue: {}, modelModifiers: {} }), emits: me([...cn], ["update:modelValue"]), setup(c, { emit: t }) {
  const l = Re(c, "modelValue"), a = Ge(), r = qe(), u = t, f = Ie(Ne, {}), s = Ie(Symbol.for("vuetify:icons")), d = c, n = Le({ ...a, ...d, ...f });
  Te(() => {
    Object.assign(n, { ...a, ...d, ...f });
  });
  const { cancelButtonColor: i, cancelButtonSize: A, cancelButtonTitle: P, cancelButtonVariant: w, cancelIcon: F, cancelIconColor: z, cardField: C, closeSiblings: g, color: U, fieldOnly: ye, hideCancelIcon: ge, hideDetails: Se, hideSaveIcon: se, loadingIcon: Ae, loadingIconColor: Oe, saveButtonColor: Pe, saveButtonSize: Ve, saveButtonTitle: be, saveButtonVariant: ze, saveIcon: Be, saveIconColor: Z } = sn(n), Y = o(() => d.disabled), V = o(() => d.loading), m = v(!1), W = v(!1), b = v(!1), N = v(null);
  let I = null;
  de(() => V.value, (h, J) => {
    !h && J && b.value && ee();
  });
  const q = o(() => we({ icon: d.clearIcon, iconOptions: s, name: "clear" })), X = o(() => l.value ? (ue(!1), n.truncateLength ? Sn({ length: n.truncateLength, suffix: n.truncateSuffix, text: l.value }) : l.value) : (ue(!0), n.emptyText));
  function ue(h) {
    m.value = h;
  }
  const he = o(() => vn(n)), $ = o(() => ({ color: n.color, displayAppendIcon: n.displayAppendIcon, displayAppendIconColor: n.displayAppendIconColor, displayAppendIconSize: n.displayAppendIconSize, displayAppendInnerIcon: n.displayAppendInnerIcon, displayAppendInnerIconColor: n.displayAppendInnerIconColor, displayAppendInnerIconSize: n.displayAppendInnerIconSize, displayPrependIcon: n.displayPrependIcon, displayPrependIconColor: n.displayPrependIconColor, displayPrependIconSize: n.displayPrependIconSize, displayPrependInnerIcon: n.displayPrependInnerIcon, displayPrependInnerIconColor: n.displayPrependInnerIconColor, displayPrependInnerIconSize: n.displayPrependInnerIconSize, displayValue: X.value, empty: m.value, error: W.value, field: "v-text-field", underlineColor: n.underlineColor, underlineStyle: n.underlineStyle, underlineWidth: n.underlineWidth, underlined: n.underlined, valueColor: n.valueColor })), E = o(() => ({ ...nn, ...d.cardProps })), ae = o(() => ln({ cell: n.cell && !b.value, density: n.density, disabled: Y.value, field: "v-textarea", iconSet: s == null ? void 0 : s.defaultSet, loading: V.value, loadingWait: n.loadingWait, tableField: n.tableField, variant: n.variant })), Ce = o(() => on({ cell: n.cell, cellUnderlineFullWidth: n.cellUnderlineFullWidth, density: n.density, field: "v-textarea" })), Fe = In({ density: n.density, variant: n.variant }), xe = o(() => an({ active: b.value, name: "textarea" })), $e = o(() => tn({ name: "textarea", showField: b.value })), ke = o(() => ({})), We = o(() => j.value);
  function re() {
    W.value = !1, l.value = I, ee();
  }
  const j = v(), te = v(null), H = v("body");
  function ee() {
    var J, y;
    if (Y.value || n.loadingWait && V.value)
      return;
    j.value = Ye({ cardMinWidth: (J = n.cardProps) == null ? void 0 : J.minWidth, cardOffsetX: n.cardOffsetX, cardOffsetY: n.cardOffsetY, cardWidth: (y = n.cardProps) == null ? void 0 : y.width, field: te.value });
    const h = rn({ attrs: a, closeSiblings: g.value, fieldOnly: n.fieldOnly, props: d, showField: b, timeOpened: N.value });
    b.value = h.showField, N.value = h.timeOpened, G !== null && g.value && b.value && !n.fieldOnly && G.emit(h.timeOpened), I = l.value;
  }
  const ne = v(), D = o(() => ne.value);
  function L() {
    const h = bn({ required: n.required, rules: n.rules, value: l });
    return W.value = h.errors, ne.value = h.results, h.results;
  }
  function k() {
    I = l.value, u("update", l.value), n.loadingWait || ee();
  }
  let G, fe;
  function le(h) {
    u("update:closeSiblingFields", N), b.value && N.value !== h && re();
  }
  return de(() => b.value, () => {
    b.value && L();
  }), de(() => l.value, () => {
    b.value && L();
  }), g.value && import("@vueuse/core").then(({ useEventBus: h }) => {
    G = h(en), fe = G.on(le);
  }), Ke(() => {
    fe !== void 0 && G.off(le);
  }), (h, J) => (p(), S("div", { ref_key: "inlineFieldsContainer", ref: te, class: B(e(ae)), style: Q(e(ke)) }, [!e(b) && !e(n).fieldOnly || e(C) ? (p(), S("div", { key: 0, class: B(e(Ce)) }, [ce("div", { class: B(e(Fe)) }, [x(mn, ve(e($), { onToggleField: ee }), _e({ _: 2 }, [Ee(e(r), (y, M) => ({ name: M, fn: T((K) => [pe(h.$slots, M, R(ie({ ...K })))]) }))]), 1040)], 2)], 2)) : _("", !0), e(b) || e(n).fieldOnly || e(C) ? (p(), S("div", { key: 1, class: B(e(xe)) }, [(p(), oe(Qe, { disabled: !e(C), to: e(H) }, [x(Rn, ve(e(he), { modelValue: l.value, "onUpdate:modelValue": J[0] || (J[0] = (y) => l.value = y), "auto-grow": e(n).autoGrow, autofocus: !e(n).fieldOnly || e(n).autofocus, "clear-icon": e(q), color: e(U), density: e(n).density, disabled: e(V) || e(Y), error: e(W), "error-messages": e(D), "hide-details": e(Se), label: e(n).label, loading: e(V), rows: e(n).rows, variant: e(n).variant, width: "100%", onKeyup: fn(re, ["esc"]) }), _e({ _: 2 }, [Ee(e(r), (y, M) => ({ name: M, fn: T((K) => [pe(h.$slots, M, R(ie({ ...K })))]) })), e(r).append ? void 0 : { name: "append", fn: T(() => [x(dn, { "cancel-button-color": e(i), "cancel-button-size": e(A), "cancel-button-title": e(P), "cancel-button-variant": e(w), "cancel-icon": e(F), "cancel-icon-color": e(z), error: e(W), "field-only": e(ye), "hide-cancel-icon": e(ge), "hide-save-icon": e(se), loading: e(V), "loading-icon": e(Ae), "loading-icon-color": e(Oe), "save-button-color": e(Pe), "save-button-size": e(Ve), "save-button-title": e(be), "save-button-variant": e(ze), "save-icon": e(Be), "save-icon-color": e(Z), onClose: re, onSave: k }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "auto-grow", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "rows", "variant"])], 8, ["disabled", "to"]))], 2)) : _("", !0), e(C) ? (p(), S("div", { key: 2, class: B(e($e)), style: Q(e(We)) }, [x(Ze, R(ie(e(E))), { default: T(() => [x(He, null, { default: T(() => [ce("div", { ref_key: "cardFieldRef", ref: H }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : _("", !0)], 6));
} }), Fl = Object.freeze(Object.defineProperty({ __proto__: null, VInlineAutocomplete: Dn, VInlineCheckbox: ll, VInlineCustomField: ol, VInlineSelect: _n, VInlineSwitch: tl, VInlineTextField: dl, VInlineTextarea: rl }, Symbol.toStringTag, { value: "Module" })), Ne = Symbol();
function gl(c = {}) {
  return { install: (t) => {
    t.provide(Ne, c), t.component("VInlineAutocomplete", je(() => Promise.resolve().then(() => el))), t.component("VInlineCheckbox", je(() => import("./VInlineCheckbox-i0fCindi.mjs"))), t.component("VInlineCustomField", je(() => import("./VInlineCustomField-DZuM5Dah.mjs"))), t.component("VInlineSelect", je(() => Promise.resolve().then(() => al))), t.component("VInlineSwitch", je(() => import("./VInlineSwitch-BiNVCd11.mjs"))), t.component("VInlineTextarea", je(() => import("./VInlineTextarea-DHSOJk5B.mjs"))), t.component("VInlineTextField", je(() => import("./VInlineTextField-BbHh_19x.mjs")));
  } };
}
export {
  Dn as VInlineAutocomplete,
  ll as VInlineCheckbox,
  ol as VInlineCustomField,
  _n as VInlineSelect,
  tl as VInlineSwitch,
  dl as VInlineTextField,
  rl as VInlineTextarea,
  gl as createVInlineFields,
  Fl as default,
  Ne as globalOptions
};
(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode(":root{--v-inline-fields-top-padding-compact: 13px;--v-inline-fields-top-padding-comfortable: 17px;--v-inline-fields-top-padding-default: 21px;--v-inline-fields-input-height: 24px;--v-inline-fields-density-compact-height: 32px;--v-inline-fields-density-comfortable-height: 40px;--v-inline-fields-grey: #909090}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append{padding-top:0!important}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append .v-icon{font-size:1rem!important}.v-inline-fields{position:relative}.v-inline-fields--display-container *{align-items:center;display:flex}.v-inline-fields--display-container-cell{cursor:pointer;display:block;max-height:unset!important}.v-inline-fields--display-container-cell>div{width:100%}.v-inline-fields--display-container-cell-underline-full-width .v-inline-fields--display-value{width:100%}.v-inline-fields--display-container-cell .v-inline-fields--selection-control .v-inline-fields--display-value{justify-content:center}.v-inline-fields--display-container-cell,.v-inline-fields--display-container-cell .v-input,.v-inline-fields--display-container-cell .v-inline-fields--display-wrapper,.v-inline-fields--display-container-cell .v-selection-control__wrapper{height:100%!important;width:100%}.v-inline-fields--display-value{cursor:pointer;letter-spacing:.009375em!important}.v-inline-fields--display-value-empty{color:var(--v-inline-fields-grey);font-style:italic}.v-inline-fields--display-value-checkbox,.v-inline-fields--display-value-switch{padding-bottom:2px;padding-top:6px}.v-inline-fields--display-append-icon,.v-inline-fields--display-prepend-icon,.v-inline-fields--display-append-inner-icon,.v-inline-fields--display-prepend-inner-icon{align-items:flex-end;display:inline-flex}.v-inline-fields--container-cell{height:100%;width:100%}.v-inline-fields--container-disabled .v-inline-fields--display-value{cursor:default!important;opacity:var(--v-disabled-opacity)}.v-inline-fields--container-loading .v-inline-fields--display-value{cursor:wait!important}.v-inline-fields--container-icon-set-fa .v-field__clearable{font-size:.8rem}.v-inline-fields--container-icon-set-fa .v-field__append-inner{align-items:flex-end;padding-bottom:0!important}.v-inline-fields--container-v-select-compact-plain .v-input,.v-inline-fields--container-v-select-compact-underlined .v-input,.v-inline-fields--container-v-text-field-compact-plain .v-input,.v-inline-fields--container-v-text-field-compact-underlined .v-input{height:var(--v-inline-fields-density-compact-height);max-height:var(--v-inline-fields-density-compact-height)}.v-inline-fields--container-v-select-compact-plain .v-input__control,.v-inline-fields--container-v-select-compact-underlined .v-input__control,.v-inline-fields--container-v-text-field-compact-plain .v-input__control,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control{padding-bottom:4px}.v-inline-fields--container-v-select-compact-plain .v-input>div,.v-inline-fields--container-v-select-compact-underlined .v-input>div,.v-inline-fields--container-v-text-field-compact-plain .v-input>div,.v-inline-fields--container-v-text-field-compact-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input input{padding-bottom:10px}.v-inline-fields--container-v-select-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-compact-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-select__selection{align-items:center;padding-bottom:10px}.v-inline-fields--container-v-select-comfortable-plain .v-input,.v-inline-fields--container-v-select-comfortable-underlined .v-input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input{height:var(--v-inline-fields-density-comfortable-height);max-height:var(--v-inline-fields-density-comfortable-height)}.v-inline-fields--container-v-select-comfortable-plain .v-input__control,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control{padding-bottom:8px}.v-inline-fields--container-v-select-comfortable-plain .v-input>div,.v-inline-fields--container-v-select-comfortable-underlined .v-input>div,.v-inline-fields--container-v-text-field-comfortable-plain .v-input>div,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input input{padding-bottom:6px}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-select__selection{align-items:center;padding-bottom:6px}.v-inline-fields--container-v-select-compact-plain .v-field__append-inner,.v-inline-fields--container-v-select-compact-underlined .v-field__append-inner{padding-top:4px!important}.v-inline-fields--container-v-select-comfortable-plain .v-field__append-inner,.v-inline-fields--container-v-select-comfortable-underlined .v-field__append-inner{padding-top:8px!important}.v-inline-fields--container-v-textarea .v-inline-fields--save-fields-container{align-items:flex-end}.v-inline-fields--container-v-select,.v-inline-fields--container-v-textarea,.v-inline-fields--container-v-text-field{width:100%}.v-inline-fields--container-v-checkbox .v-input,.v-inline-fields--container-v-switch .v-input{align-items:center;display:flex;padding-bottom:0}.v-inline-fields--container-v-checkbox .v-input__append,.v-inline-fields--container-v-switch .v-input__append{margin-inline-start:0!important;margin-left:0;padding-bottom:0!important}.v-inline-fields--container-v-checkbox .v-selection-control,.v-inline-fields--container-v-switch .v-selection-control{min-height:unset}.v-inline-fields--container-v-checkbox .v-inline-fields--save-fields-container,.v-inline-fields--container-v-switch .v-inline-fields--save-fields-container{align-items:center!important}.v-inline-fields--container .v-input__append,.v-inline-fields--container .v-input__prepend,.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-top:0!important}.v-inline-fields--container .v-input__append .v-icon,.v-inline-fields--container .v-input__prepend .v-icon,.v-inline-fields--container .v-field__append-inner .v-icon,.v-inline-fields--container .v-field__prepend-inner .v-icon{font-size:1rem!important}.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-compact .v-input__append,.v-inline-fields--container-compact .v-input__prepend,.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-comfortable .v-input__append,.v-inline-fields--container-comfortable .v-input__prepend,.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{padding-bottom:6px!important}.v-inline-fields--container-default .v-input__append,.v-inline-fields--container-default .v-input__prepend,.v-inline-fields--container-default .v-field__append-inner,.v-inline-fields--container-default .v-field__prepend-inner{align-items:flex-end!important;padding-bottom:0!important}.v-inline-fields--container-default .v-input__append .v-icon,.v-inline-fields--container-default .v-input__prepend .v-icon,.v-inline-fields--container-default .v-field__append-inner .v-icon,.v-inline-fields--container-default .v-field__prepend-inner .v-icon{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)!important}.v-inline-fields--container-default .v-inline-fields--save-fields-container{align-items:flex-end!important}.v-inline-fields--card-container{height:fit-content;min-width:fit-content!important;position:absolute}.v-inline-fields--card-container .v-card{border:1px solid hsla(0,0%,50%,.5)}.v-inline-fields--card-container .v-card .v-card-text{padding:5px 10px}.v-inline-fields--card-container .v-card .v-card-text>div{align-items:center;display:flex}.v-inline-fields--card-container-checkbox .v-card .v-card-text .v-input__append{margin-inline-start:0}.v-inline-fields--save-fields-container{align-items:center;display:flex;height:100%;margin-left:.1rem}.v-inline-fields--boolean-icons{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-inline-fields .truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:250px}.v-inline-fields .v-input__append{padding-top:0}[data-v-00c7f207] .v-field__field,[data-v-cdf7bc97] .v-field__field{align-items:flex-end!important}")),document.head.appendChild(i)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
