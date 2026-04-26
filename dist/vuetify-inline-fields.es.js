import { unref as e, defineComponent as Me, useAttrs as Ye, useSlots as qe, reactive as Ge, watchEffect as Te, computed as o, openBlock as p, createElementBlock as S, normalizeStyle as Z, normalizeClass as h, renderSlot as ve, normalizeProps as R, mergeProps as ye, createBlock as ee, createCommentVNode as _, createElementVNode as ce, createTextVNode as En, toDisplayString as Bn, inject as Ie, withCtx as x, useModel as Re, toRefs as sn, ref as v, watch as te, onUnmounted as Ke, createVNode as D, createSlots as _e, renderList as Ee, guardReactiveProps as ie, Teleport as Je, withKeys as fn, mergeModels as me, mergeDefaults as Qe, isRef as kn, defineAsyncComponent as Xe } from "vue";
import { useTheme as Cn } from "vuetify";
import { VIcon as Le } from "vuetify/components/VIcon";
import { VBtn as On } from "vuetify/components/VBtn";
import { VAutocomplete as Mn } from "vuetify/components/VAutocomplete";
import { VCard as Ze, VCardText as He } from "vuetify/components/VCard";
import { VIcon as Pn } from "vuetify/components";
import { useWindowSize as Gn } from "@vueuse/core";
import { VCheckbox as Yn } from "vuetify/components/VCheckbox";
import { VSelect as Ln } from "vuetify/components/VSelect";
import { VSwitch as Un } from "vuetify/components/VSwitch";
import { VTextField as qn } from "vuetify/components/VTextField";
import { VTextarea as Rn } from "vuetify/components/VTextarea";
/**
 * @name @wdns/vuetify-inline-fields
 * @version 1.0.9
 * @description Vuetify Inline Fields Component Library offers a comprehensive collection of reusable UI components to create elegant and efficient inline form fields within your applications.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2026, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-inline-fields/
 * @repository https://github.com/webdevnerdstuff/vuetify-inline-fields
 * @license MIT License
 */
const en = Symbol("identifier"), nn = { elevation: 5, variant: "flat" }, un = { cancelButtonColor: "default", cancelButtonSize: "x-small", cancelButtonTitle: "Cancel", cancelButtonVariant: "text", cancelIcon: void 0, cancelIconColor: "default", cardField: !1, cardOffsetX: 0, cardOffsetY: 0, cardProps: () => ({}), cell: !1, cellUnderlineFullWidth: !0, closeSiblings: !1, color: "primary", density: "compact", disabled: !1, displayAppendIcon: void 0, displayAppendIconColor: void 0, displayAppendIconSize: "x-small", displayAppendInnerIcon: void 0, displayAppendInnerIconColor: void 0, displayAppendInnerIconSize: "x-small", displayPrependIcon: void 0, displayPrependIconColor: void 0, displayPrependIconSize: "x-small", displayPrependInnerIcon: void 0, displayPrependInnerIconColor: void 0, displayPrependInnerIconSize: "x-small", emptyText: "empty", error: !1, fieldOnly: !1, hideCancelIcon: !1, hideDetails: !0, label: "", loading: !1, loadingWait: !0, name: "", required: !1, tableField: !0, underlineColor: "primary", underlineStyle: "dotted", underlineWidth: "2px", underlined: !0, valueColor: "default" }, hn = { autofocus: !0 }, pn = { hideCancelIcon: !1, hideSaveIcon: !1, loadingIcon: void 0, loadingIconColor: "primary", saveButtonColor: "primary", saveButtonSize: "x-small", saveButtonTitle: "Save", saveButtonVariant: "text", saveIcon: void 0, saveIconColor: "primary" }, Wn = { falseValue: !1, iconFalse: void 0, iconFalseColor: "danger", iconFalseTitle: "No", iconTrue: void 0, iconTrueColor: "success", iconTrueTitle: "Yes", icons: !0, trueValue: !0 }, jn = { ...un, ...Wn, ...pn, falseIcon: void 0, icons: !0, trueIcon: void 0 }, Nn = { ...un, ...hn, ...pn, clearIcon: "$clear", clearable: !1, hideSelected: !0, itemTitle: "title", itemValue: "value", items: () => [], menu: !0, rules: () => [], variant: "underlined" }, Xn = { ...un, ...hn, ...pn, autoSelectFirst: !1, clearIcon: "$clear", clearable: !1, hideSelected: !0, itemTitle: "title", itemValue: "value", items: () => [], menu: !0, menuIcon: "$dropdown", rules: () => [], variant: "underlined" }, Kn = { ...un, ...Wn, ...pn, icons: !0, falseIcon: "" }, Jn = { ...hn, ...pn, ...un, autoGrow: !0, clearIcon: "$clear", rows: 1, truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, Tn = { ...un, ...hn, ...pn, clearIcon: "$clear", truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, O = "v-inline-fields", ln = (c) => {
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
function Vn(c) {
  if (!c) return 100;
  if (c.toString().includes(".")) {
    const t = 100 * Number(c);
    return t >= 100 ? 100 : t;
  }
  return Number(c) >= 100 ? 100 : Number(c);
}
function zn(c) {
  let t = function(A) {
    const P = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let w = A;
    return Object.entries(P).forEach(([k, z]) => {
      A.toLowerCase() != k.toLowerCase() || (w = z);
    }), w;
  }(c), l = 0, a = 0, r = 0, u = 100, f = 0, s = 0, d = 0;
  if (t.substring(0, 1) === "#") t = function(A) {
    let P = A.replace("#", "");
    P.length === 3 && (P = P.split("").map((g) => g + g).join(""));
    const w = parseInt(P.substring(0, 2), 16), k = parseInt(P.substring(2, 4), 16), z = parseInt(P.substring(4, 6), 16);
    return [w, k, z, 100];
  }(t);
  else if (t.includes("rgb")) t = [...t.matchAll(/[\d+.\d+]+/g)].map(Number);
  else if (t.includes("hsl")) return t = [...t.matchAll(/[\d+.\d+]+/g)].map(String), l = t[0], a = t[1], r = t[2], u = Vn(t[3]), `${l} ${a}% ${r}% / ${u}%`;
  [f, s, d, u] = t, f /= 255, s /= 255, d /= 255, u = Vn(u);
  const n = Math.max(f, s, d), i = Math.min(f, s, d);
  if (n === null || !i === null || isNaN(n) || isNaN(i)) {
    const A = "0 0% 100% / 12%";
    return console.warn(`[VuetifyInlineFields]: The "color" prop value using "${t}" doesn't exist. Using the value "hsl(${A})" in it's place.`), A;
  }
  if (l = (n + i) / 2, a = (n + i) / 2, r = (n + i) / 2, n == i) l = a = 0;
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
  }(c)) return c;
  if (function(a) {
    return a.includes("--v-theme");
  }(c)) return `rgb(var(${c}))`;
  const l = function(a, r) {
    const u = r.global.current.value.colors;
    return Object.entries(u).find(([f]) => f === a);
  }(c, t);
  return l ? `hsl(${zn(String(l[1]))})` : `hsl(${zn(c)})`;
}, yn = (c) => {
  const { str: t, unit: l = "px" } = c;
  if (t != null && t !== "") return +t ? `${Number(t)}${l}` : String(t);
}, gn = (c) => {
  var r;
  const { modelValue: t, trueValue: l } = c, a = e(t);
  return ((r = a == null ? void 0 : a.toLowerCase) == null ? void 0 : r.call(a)) === "true" || (typeof a == "string" || a === 1 || a === 0 || a == 1 || a == 0 ? a : a === "1" || a == "1" ? "1" : a === !0 || a == l || a === l);
}, Sn = (c) => {
  const { underlineStyle: t, underlineWidth: l, color: a, error: r, theme: u, underlined: f } = c;
  let { underlineColor: s } = c;
  s = s || a;
  const d = { "border-bottom-color": Qn(s, u), "border-bottom-style": t, "border-bottom-width": l };
  return e(r) && (d["border-bottom-color"] = "rgb(var(--v-theme-danger))"), f || (d["border-bottom"] = "none"), d;
}, Ue = (c) => {
  const { cardMinWidth: t, cardOffsetX: l, cardOffsetY: a, cardWidth: r, field: u, name: f = "" } = c, s = ((i) => {
    const { cardOffsetX: A, cardOffsetY: P, field: w } = i;
    if (!w) return { bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0, x: 0, y: 0 };
    const { x: k, y: z } = w.getBoundingClientRect(), { width: C, height: g } = w.getBoundingClientRect(), { right: Y, bottom: fe } = w.getBoundingClientRect();
    return { bottom: yn({ str: fe + Number(P) }), height: g, left: yn({ str: 0 + Number(A) }), right: yn({ str: Y + Number(A) }), top: yn({ str: 2 + Number(P) }), width: yn({ str: C }), x: k, y: z };
  })({ cardOffsetX: l, cardOffsetY: a, field: u });
  let d = t, n = r;
  return n || (n = f === "checkbox" ? "fit-content" : s.width), d || (d = f === "checkbox" ? "fit-content" : s.width), { left: s.left, top: s.top, width: n, zIndex: 10 };
}, mn = Me({ __name: "DisplayedValue", props: { color: {}, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayValue: {}, empty: { type: [Object, Boolean] }, error: { type: Boolean }, field: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, emits: ["toggleField"], setup(c, { emit: t }) {
  const l = Ye(), a = t, r = c, u = qe(), f = Cn(), s = Ge({ ...l, ...r });
  Te(() => {
    Object.assign(s, { ...l, ...r });
  });
  const d = { displayValue: r.displayValue, empty: r.empty, error: r.error }, n = o(() => Fn(r.field, r.valueColor, { empty: r.empty, error: r.error })), i = o(() => Sn({ color: r.color, error: r.error, theme: f, underlineColor: r.underlineColor, underlineStyle: r.underlineStyle, underlineWidth: r.underlineWidth, underlined: r.underlined })), A = o(() => ((k) => {
    const { underlineWidth: z } = k;
    return { borderBottom: `${z || "0px"} solid transparent` };
  })({ underlineWidth: r.underlineWidth })), P = (k, z = !1) => ((C) => {
    const { inner: g = !1, position: Y } = C;
    return { [`${O}--display-icon`]: !g, [`${O}--display-${Y}-icon`]: !g, [`${O}--display-${Y}-inner-icon`]: g, "me-1": Y === "prepend", "ms-1": Y === "append" };
  })({ inner: z, position: k });
  function w() {
    a("toggleField");
  }
  return (k, z) => (p(), S("div", { class: "v-inline-fields--display-wrapper", onClick: w }, [e(s).displayPrependIcon != null || e(u)["display.prepend"] ? (p(), S("div", { key: 0, class: h(P("prepend")), style: Z(e(A)) }, [e(u)["display.prepend"] ? ve(k.$slots, "display.prepend", R(ye({ key: 0 }, d))) : (p(), ee(Le, { key: 1, color: e(s).displayPrependIconColor, icon: e(s).displayPrependIcon, size: e(s).displayPrependIconSize }, null, 8, ["color", "icon", "size"]))], 6)) : _("", !0), ce("div", { class: h(["d-inline-flex", e(n)]), style: Z(e(i)) }, [e(s).displayPrependInnerIcon != null || e(u)["display.prependInner"] ? (p(), S("div", { key: 0, class: h(P("prepend", !0)) }, [e(u)["display.prependInner"] ? ve(k.$slots, "display.prependInner", R(ye({ key: 0 }, d))) : (p(), ee(Le, { key: 1, color: e(s).displayPrependInnerIconColor, icon: e(s).displayPrependInnerIcon, size: e(s).displayPrependInnerIconSize }, null, 8, ["color", "icon", "size"]))], 2)) : _("", !0), En(" " + Bn(e(s).displayValue) + " ", 1), e(s).displayAppendInnerIcon != null || e(u)["display.appendInner"] ? (p(), S("div", { key: 1, class: h(P("append", !0)) }, [e(u)["display.appendInner"] ? ve(k.$slots, "display.appendInner", R(ye({ key: 0 }, d))) : (p(), ee(Le, { key: 1, color: e(s).displayAppendInnerIconColor, icon: e(s).displayAppendInnerIcon, size: e(s).displayAppendInnerIconSize }, null, 8, ["color", "icon", "size"]))], 2)) : _("", !0)], 6), e(s).displayAppendIcon != null || e(u)["display.append"] ? (p(), S("div", { key: 1, class: h(P("append")), style: Z(e(A)) }, [e(u)["display.append"] ? ve(k.$slots, "display.append", R(ye({ key: 0 }, d))) : (p(), ee(Le, { key: 1, color: e(s).displayAppendIconColor, icon: e(s).displayAppendIcon, size: e(s).displayAppendIconSize }, null, 8, ["color", "icon", "size"]))], 6)) : _("", !0)]));
} }), Zn = { fa: { checkboxFalse: "$checkboxOff", checkboxTrue: "far fa-square-check", clear: "$clear", false: "$close", loading: "fa-circle-notch", save: "fa-floppy-disk", true: "$complete" }, mdi: { checkboxFalse: "$checkboxOff", checkboxTrue: "mdi:mdi-checkbox-outline", clear: "$clear", false: "$close", loading: "mdi-loading", save: "mdi-content-save", true: "$complete" } }, we = (c) => {
  const { icon: t, iconOptions: l, name: a } = c;
  if (t) return t;
  const r = Zn[l == null ? void 0 : l.defaultSet];
  if (!r) throw new Error(`[VInlineFields]: No default ${l == null ? void 0 : l.defaultSet} icon set found.`);
  const u = r[a];
  if (!u) throw new Error(`[VInlineFields]: No ${a} icon found.`);
  return u;
}, dn = Me({ __name: "SaveFieldButtons", props: { loading: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonVariant: {}, cancelButtonTitle: {}, cancelIconColor: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideSaveIcon: { type: Boolean }, cancelIcon: {}, loadingIcon: {}, loadingIconColor: {}, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIconColor: {}, saveIcon: {} }, emits: ["close", "save"], setup(c, { emit: t }) {
  const l = Ye(), a = t, r = c, u = Ie(Symbol.for("vuetify:icons")), f = o(() => r.error), s = o(() => ({ [`${O}--save-fields-container`]: !0 })), d = o(() => r.loading), n = Ge({ ...l, ...r });
  Te(() => {
    Object.assign(n, { ...l, ...r });
  });
  const i = o(() => (u == null ? void 0 : u.defaultSet) === "fa" ? "fa-spin" : (u == null ? void 0 : u.defaultSet) === "mdi" ? "mdi-spin" : ""), A = o(() => ((g) => {
    const { cancelButtonVariant: Y } = g;
    return { "me-1": Y === "elevated", "ms-1": !0 };
  })({ cancelButtonVariant: n.cancelButtonVariant })), P = o(() => we({ icon: r.cancelIcon, iconOptions: u, name: "false" })), w = o(() => we({ icon: r.loadingIcon, iconOptions: u, name: "loading" })), k = o(() => we({ icon: r.saveIcon, iconOptions: u, name: "save" }));
  function z() {
    a("close");
  }
  function C() {
    a("save");
  }
  return (g, Y) => (p(), S("div", ye({ class: e(s) }, g.$attrs), [e(n).hideSaveIcon ? _("", !0) : (p(), ee(On, { key: 0, class: "ms-1", color: e(n).saveButtonColor, disabled: e(f), icon: "", size: e(n).saveButtonSize, title: e(d) ? "Loading" : e(n).saveButtonTitle, variant: e(n).saveButtonVariant, onClick: C }, { default: x(() => [e(d) ? (p(), ee(Le, { key: 1, class: h(e(i)), color: e(n).loadingIconColor, icon: e(w) }, null, 8, ["class", "color", "icon"])) : (p(), ee(Le, { key: 0, color: e(f) ? "error" : e(n).saveIconColor, icon: e(k) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["color", "disabled", "size", "title", "variant"])), e(n).hideCancelIcon ? _("", !0) : (p(), ee(On, { key: 1, class: h(e(A)), color: e(n).cancelButtonColor, icon: "", size: e(n).cancelButtonSize, title: e(n).cancelButtonTitle, variant: e(n).cancelButtonVariant, onClick: z }, { default: x(() => [e(n).hideSaveIcon && e(d) ? (p(), ee(Le, { key: 0, class: h(e(i)), color: e(n).loadingIconColor, icon: e(w) }, null, 8, ["class", "color", "icon"])) : (p(), ee(Le, { key: 1, class: "text-default", color: e(n).cancelIconColor, icon: e(P) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["class", "color", "size", "title", "variant"]))], 16));
} }), bn = (c) => {
  const { required: t, rules: l } = c;
  let { value: a } = c;
  a = e(a);
  const r = [];
  let u = !1;
  if (t && !a) return r.push("Field is required."), { errors: !0, results: r };
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
}, An = (c) => {
  const { length: t = 0 } = c;
  let { suffix: l, text: a } = c;
  return a = a.toString(), l = l || "...", a.length > t ? `${a.substring(0, t)}${l}` : a;
}, cn = ["error", "update", "update:closeSiblingFields", "update:model-value"], Hn = ["cancelButtonColor", "cancelButtonSize", "cancelButtonTitle", "cancelButtonVariant", "cancelIcon", "cancelIconColor", "closeSiblings", "displayAppendIcon", "displayAppendIconColor", "displayAppendIconSize", "displayAppendInnerIcon", "displayAppendInnerIconColor", "displayAppendInnerIconSize", "displayPrependIcon", "displayPrependIconColor", "displayPrependIconSize", "displayPrependInnerIcon", "displayPrependInnerIconColor", "displayPrependInnerIconSize", "emptyText", "fieldOnly", "hideSaveIcon", "loadingIcon", "loadingIconColor", "loadingWait", "saveButtonColor", "saveButtonSize", "saveButtonTitle", "saveButtonVariant", "saveIcon", "saveIconColor", "tableField", "truncateLength", "truncateSuffix", "underlineColor", "underlineStyle", "underlineWidth", "underlined", "valueColor"], vn = (c) => {
  let t = c;
  return t = Object.entries(t).filter(([l]) => !Hn.includes(l)), Object.fromEntries(t);
}, xn = (c, t) => {
  const l = c.__vccOpts || c;
  for (const [a, r] of t) l[a] = r;
  return l;
}, Dn = xn(Me({ __name: "VInlineAutocomplete", props: me(Qe({ autoSelectFirst: {}, clearIcon: {}, clearable: {}, density: {}, hideSelected: {}, itemTitle: {}, itemValue: {}, items: {}, menu: {}, menuIcon: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Xn }), { modelValue: {}, modelModifiers: {} }), emits: me([...cn], ["update:modelValue"]), setup(c, { emit: t }) {
  const l = Re(c, "modelValue"), a = Ye(), r = qe(), u = t, f = Ie(je, {}), s = Ie(Symbol.for("vuetify:icons")), d = c, n = Ge({ ...a, ...d, ...f });
  Te(() => {
    Object.assign(n, { ...a, ...d, ...f });
  });
  const { cancelButtonColor: i, cancelButtonSize: A, cancelButtonTitle: P, cancelButtonVariant: w, cancelIcon: k, cancelIconColor: z, cardField: C, closeSiblings: g, color: Y, fieldOnly: fe, hideCancelIcon: ge, hideDetails: Se, hideSaveIcon: se, loadingIcon: Ae, loadingIconColor: Oe, saveButtonColor: Pe, saveButtonSize: Ve, saveButtonTitle: be, saveButtonVariant: ze, saveIcon: he, saveIconColor: H, valueColor: L } = sn(n), V = o(() => d.disabled), m = o(() => d.loading), T = v(!1), b = v(!1), j = v(), I = v(!1), U = v(null);
  let N = null;
  te(() => m.value, (y, M) => {
    !y && M && I.value && W();
  });
  const ue = o(() => we({ icon: d.clearIcon, iconOptions: s, name: "clear" })), Be = o(() => l.value && l.value[n.itemTitle] ? ($(!1), l.value[n.itemTitle]) : l.value ? ($(!1), l.value) : ($(!0), n.emptyText));
  function $(y) {
    T.value = y;
  }
  const E = o(() => vn(n)), ne = o(() => ({ color: n.color, displayAppendIcon: n.displayAppendIcon, displayAppendIconColor: n.displayAppendIconColor, displayAppendIconSize: n.displayAppendIconSize, displayAppendInnerIcon: n.displayAppendInnerIcon, displayAppendInnerIconColor: n.displayAppendInnerIconColor, displayAppendInnerIconSize: n.displayAppendInnerIconSize, displayPrependIcon: n.displayPrependIcon, displayPrependIconColor: n.displayPrependIconColor, displayPrependIconSize: n.displayPrependIconSize, displayPrependInnerIcon: n.displayPrependInnerIcon, displayPrependInnerIconColor: n.displayPrependInnerIconColor, displayPrependInnerIconSize: n.displayPrependInnerIconSize, displayValue: Be.value, empty: T.value, error: b.value, field: "v-text-field", underlineColor: n.underlineColor, underlineStyle: n.underlineStyle, underlineWidth: n.underlineWidth, underlined: n.underlined, valueColor: L.value })), Ce = o(() => ({ ...nn, ...d.cardProps }));
  Te(() => {
    j.value = n.items || [];
  });
  const Fe = o(() => ln({ cell: n.cell && !I.value, density: n.density, disabled: V.value, field: "v-select", iconSet: s == null ? void 0 : s.defaultSet, loading: m.value, loadingWait: n.loadingWait, tableField: n.tableField, variant: n.variant })), $e = o(() => on({ cell: n.cell, cellUnderlineFullWidth: n.cellUnderlineFullWidth, density: n.density, field: "v-select" })), xe = In({ density: n.density, variant: n.variant }), ke = o(() => an({ active: I.value, name: "select" })), We = o(() => tn({ name: "select", showField: I.value })), de = o(() => ({})), le = o(() => oe.value);
  function X() {
    b.value = !1, l.value = N, W();
  }
  const oe = v(), K = v(null), pe = v("body");
  function W() {
    var M, Q;
    if (V.value || n.loadingWait && m.value) return;
    oe.value = Ue({ cardMinWidth: (M = n.cardProps) == null ? void 0 : M.minWidth, cardOffsetX: n.cardOffsetX, cardOffsetY: n.cardOffsetY, cardWidth: (Q = n.cardProps) == null ? void 0 : Q.width, field: K.value });
    const y = rn({ attrs: a, closeSiblings: g.value, fieldOnly: n.fieldOnly, props: d, showField: I, timeOpened: U.value });
    I.value = y.showField, U.value = y.timeOpened, J !== null && g.value && I.value && !n.fieldOnly && J.emit(y.timeOpened), N = l.value;
  }
  const G = v(), ae = o(() => G.value);
  function F() {
    const y = bn({ required: n.required, rules: n.rules, value: l });
    return b.value = y.errors, G.value = y.results, y.results;
  }
  function re() {
    N = l.value, u("update", l.value), n.loadingWait || W();
  }
  let J, B;
  function q(y) {
    u("update:closeSiblingFields", U), I.value && U.value !== y && X();
  }
  return te(() => I.value, () => {
    I.value && F();
  }), te(() => l.value, () => {
    I.value && F();
  }), g.value && import("@vueuse/core").then(({ useEventBus: y }) => {
    J = y(en), B = J.on(q);
  }), Ke(() => {
    B !== void 0 && J.off(q);
  }), (y, M) => (p(), S("div", { ref_key: "inlineFieldsContainer", ref: K, class: h(e(Fe)), style: Z(e(de)) }, [!e(I) && !e(n).fieldOnly || e(C) ? (p(), S("div", { key: 0, class: h(e($e)) }, [ce("div", { class: h(e(xe)) }, [D(mn, ye(e(ne), { onToggleField: W }), _e({ _: 2 }, [Ee(e(r), (Q, De) => ({ name: De, fn: x((Ne) => [ve(y.$slots, De, R(ie({ ...Ne })), void 0, !0)]) }))]), 1040)], 2)], 2)) : _("", !0), e(I) || e(n).fieldOnly || e(C) ? (p(), S("div", { key: 1, class: h(e(ke)) }, [(p(), ee(Je, { disabled: !e(C), to: e(pe) }, [e(I) || e(n).fieldOnly ? (p(), ee(Mn, ye({ key: 0 }, e(E), { modelValue: l.value, "onUpdate:modelValue": M[0] || (M[0] = (Q) => l.value = Q), autofocus: !e(n).fieldOnly || e(n).autofocus, "clear-icon": e(ue), clearable: e(n).clearable, color: e(Y), density: e(n).density, disabled: e(m) || e(V), error: e(b), "error-messages": e(ae), "hide-details": e(Se), "hide-selected": e(n).hideSelected, "item-title": e(n).itemTitle, "item-value": e(n).itemValue, items: e(j), label: e(n).label, loading: e(m), menu: e(n).menu && !e(n).fieldOnly && e(I), variant: e(n).variant, width: "100%", onKeyup: fn(X, ["esc"]) }), _e({ _: 2 }, [Ee(e(r), (Q, De) => ({ name: De, fn: x((Ne) => [ve(y.$slots, De, R(ie({ ...Ne })), void 0, !0)]) })), e(r).append ? void 0 : { name: "append", fn: x(() => [D(dn, { "cancel-button-color": e(i), "cancel-button-size": e(A), "cancel-button-title": e(P), "cancel-button-variant": e(w), "cancel-icon": e(k), "cancel-icon-color": e(z), error: e(b), "field-only": e(fe), "hide-cancel-icon": e(ge), "hide-save-icon": e(se), loading: e(m), "loading-icon": e(Ae), "loading-icon-color": e(Oe), "save-button-color": e(Pe), "save-button-size": e(Ve), "save-button-title": e(be), "save-button-variant": e(ze), "save-icon": e(he), "save-icon-color": e(H), onClose: X, onSave: re }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "clearable", "color", "density", "disabled", "error", "error-messages", "hide-details", "hide-selected", "item-title", "item-value", "items", "label", "loading", "menu", "variant"])) : _("", !0)], 8, ["disabled", "to"]))], 2)) : _("", !0), e(C) ? (p(), S("div", { key: 2, class: h(e(We)), style: Z(e(le)) }, [D(Ze, R(ie(e(Ce))), { default: x(() => [D(He, null, { default: x(() => [ce("div", { ref_key: "cardFieldRef", ref: pe }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : _("", !0)], 6));
} }), [["__scopeId", "data-v-f4f1ab13"]]), el = Object.freeze(Object.defineProperty({ __proto__: null, default: Dn }, Symbol.toStringTag, { value: "Module" })), wn = Me({ __name: "BooleanIcons", props: me({ iconFalseColor: {}, iconFalseTitle: {}, iconTrueColor: {}, iconTrueTitle: {}, iconFalse: {}, iconTrue: {}, trueValue: {}, falseValue: {} }, { modelValue: {}, modelModifiers: {} }), emits: ["update:modelValue"], setup(c) {
  const t = c, l = Ie(Symbol.for("vuetify:icons")), a = Ge({ ...t });
  Te(() => {
    Object.assign(a, { ...t });
  });
  const r = Re(c, "modelValue"), u = o(() => gn({ modelValue: r, trueValue: a.trueValue })), f = o(() => a.trueValue ?? !0), s = o(() => we({ icon: a.iconFalse, iconOptions: l, name: "false" })), d = o(() => we({ icon: a.iconTrue, iconOptions: l, name: "true" }));
  return (n, i) => e(u) === !0 || r.value === e(f) ? (p(), ee(e(Pn), { key: 0, class: "v-inline-fields--boolean-icons fa-fw", color: c.iconTrueColor, icon: e(d), size: "x-small", title: c.iconTrueTitle }, null, 8, ["color", "icon", "title"])) : (p(), ee(e(Pn), { key: 1, class: "v-inline-fields--boolean-icons fa-fw", color: c.iconFalseColor, icon: e(s), size: "x-small", title: c.iconFalseTitle }, null, 8, ["color", "icon", "title"]));
} }), nl = { class: "v-selection-control__wrapper" }, ll = Me({ __name: "VInlineCheckbox", props: me(Qe({ density: {}, falseIcon: {}, trueIcon: {}, falseValue: {}, trueValue: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...jn }), { modelValue: {}, modelModifiers: {} }), emits: me([...cn], ["update:modelValue"]), setup(c, { emit: t }) {
  const l = Re(c, "modelValue"), a = Ye(), r = qe(), u = t, f = Ie(je, {}), s = Ie(Symbol.for("vuetify:icons")), d = Cn(), n = c, i = Ge({ ...a, ...n, ...f });
  Te(() => {
    Object.assign(i, { ...a, ...n, ...f });
  });
  const A = o(() => n.disabled), P = o(() => n.loading), w = o(() => i.underlineColor), k = v(!1), z = v(!1), C = v(null), g = o(() => vn(i)), Y = o(() => ({ ...nn, ...n.cardProps }));
  te(() => P.value, ($, E) => {
    !$ && E && z.value && I();
  });
  const fe = o(() => we({ icon: n.trueIcon, iconOptions: s, name: "checkboxFalse" })), ge = o(() => we({ icon: n.iconTrue, iconOptions: s, name: "checkboxTrue" })), Se = o(() => l.value == i.trueValue), se = o(() => gn({ modelValue: l, trueValue: i.trueValue })), Ae = o(() => ln({ cell: i.cell && !z.value, density: i.density, disabled: A.value, field: "v-checkbox", loading: P.value, loadingWait: i.loadingWait, tableField: i.tableField })), Oe = o(() => on({ cell: i.cell, cellUnderlineFullWidth: i.cellUnderlineFullWidth, density: i.density, field: "v-checkbox" })), Pe = $n({ density: i.density }), Ve = o(() => an({ active: z.value, name: "checkbox" })), be = o(() => Fn("checkbox", i.valueColor, { error: k })), ze = o(() => tn({ name: "checkbox", showField: z.value })), he = o(() => ({})), H = o(() => Sn({ color: i.color, error: k, theme: d, underlineColor: w.value, underlineStyle: i.underlineStyle, underlineWidth: i.underlineWidth, underlined: i.underlined })), L = o(() => m.value);
  function V() {
    k.value = !1, I();
  }
  const m = v(), T = v(null), b = v("body"), j = Gn();
  function I() {
    var E, ne;
    if (A.value || i.loadingWait && P.value) return;
    m.value = Ue({ cardMinWidth: (E = i.cardProps) == null ? void 0 : E.minWidth, cardOffsetX: i.cardOffsetX, cardOffsetY: i.cardOffsetY, cardWidth: (ne = i.cardProps) == null ? void 0 : ne.width, field: T.value, name: "checkbox" });
    const $ = rn({ attrs: a, closeSiblings: i.closeSiblings, fieldOnly: i.fieldOnly, props: n, showField: z, timeOpened: C.value });
    z.value = $.showField, C.value = $.timeOpened, N !== null && i.closeSiblings && z.value && !i.fieldOnly && N.emit($.timeOpened);
  }
  function U($) {
    l.value = $, u("update", $), i.loadingWait || I();
  }
  let N, ue;
  function Be($) {
    u("update:closeSiblingFields", C), z.value && C.value !== $ && I();
  }
  return te(() => j, () => {
    var $, E;
    m.value = Ue({ cardMinWidth: ($ = i.cardProps) == null ? void 0 : $.minWidth, cardOffsetX: i.cardOffsetX, cardOffsetY: i.cardOffsetY, cardWidth: (E = i.cardProps) == null ? void 0 : E.width, field: T.value, name: "checkbox" });
  }, { deep: !0 }), i.closeSiblings && import("@vueuse/core").then(({ useEventBus: $ }) => {
    N = $(en), ue = N.on(Be);
  }), Ke(() => {
    ue !== void 0 && N.off(Be);
  }), ($, E) => (p(), S("div", { ref_key: "inlineFieldsContainer", ref: T, class: h(e(Ae)), style: Z(e(he)) }, [!e(z) && !e(i).fieldOnly || e(i).cardField ? (p(), S("div", { key: 0, class: h(e(Oe)), onClick: E[2] || (E[2] = (ne) => e(i).cell ? I() : void 0) }, [ce("div", { class: h(e(Pe)), onClick: E[1] || (E[1] = (ne) => e(i).cell ? void 0 : I()) }, [ce("div", nl, [e(i).icons ? (p(), S("div", { key: 0, class: h(["v-inline-fields--boolean-icons-container", e(be)]), style: Z(e(H)) }, [D(wn, { modelValue: e(se), "onUpdate:modelValue": E[0] || (E[0] = (ne) => kn(se) ? se.value = ne : null), "false-value": e(i).falseValue, "icon-false": e(i).iconFalse, "icon-false-color": e(i).iconFalseColor, "icon-false-title": e(i).iconFalseTitle, "icon-true": e(i).iconTrue, "icon-true-color": e(i).iconTrueColor, "icon-true-title": e(i).iconTrueTitle, "true-value": e(i).trueValue }, null, 8, ["modelValue", "false-value", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title", "true-value"])], 6)) : (p(), S("div", { key: 1, class: h(["d-inline-flex align-center justify-center", e(be)]), style: Z(e(H)) }, Bn(e(Se)), 7))])], 2)], 2)) : _("", !0), e(z) || e(i).fieldOnly || e(i).cardField ? (p(), S("div", { key: 1, class: h(e(Ve)) }, [(p(), ee(Je, { disabled: !e(i).cardField, to: e(b) }, [D(Yn, ye(e(g), { color: e(i).color, density: e(i).density, disabled: e(P) || e(A), error: e(k), "false-icon": e(fe), "false-value": e(i).falseValue, "hide-details": e(i).hideDetails, label: e(i).label, "model-value": e(se), "true-icon": e(ge), "true-value": e(i).trueValue, "onUpdate:modelValue": U }), _e({ _: 2 }, [Ee(e(r), (ne, Ce) => ({ name: Ce, fn: x((Fe) => [ve($.$slots, Ce, R(ie({ ...Fe })))]) })), e(r).append ? void 0 : { name: "append", fn: x(() => [D(dn, { "cancel-button-color": e(i).cancelButtonColor, "cancel-button-size": e(i).cancelButtonSize, "cancel-button-title": e(i).cancelButtonTitle, "cancel-button-variant": e(i).cancelButtonVariant, "cancel-icon": e(i).cancelIcon, "cancel-icon-color": e(i).cancelIconColor, error: e(k), "field-only": e(i).fieldOnly, "hide-cancel-icon": e(i).hideCancelIcon, "hide-save-icon": !0, loading: e(P), "loading-icon": e(i).loadingIcon, "loading-icon-color": e(i).loadingIconColor, "save-button-color": e(i).saveButtonColor, "save-button-size": e(i).saveButtonSize, "save-button-title": e(i).saveButtonTitle, "save-button-variant": e(i).saveButtonVariant, "save-icon": e(i).saveIcon, "save-icon-color": e(i).saveIconColor, onClose: V, onSave: U }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "model-value", "true-icon", "true-value"])], 8, ["disabled", "to"]))], 2)) : _("", !0), e(i).cardField ? (p(), S("div", { key: 2, class: h(e(ze)), style: Z(e(L)) }, [D(Ze, R(ie(e(Y))), { default: x(() => [D(He, null, { default: x(() => [ce("div", { ref_key: "cardFieldRef", ref: b }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : _("", !0)], 6));
} }), ol = Me({ __name: "VInlineCustomField", props: me(Qe({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Tn }), { modelValue: {}, modelModifiers: {} }), emits: me([...cn], ["update:modelValue"]), setup(c, { emit: t }) {
  const l = Re(c, "modelValue"), a = Ye(), r = qe(), u = t, f = Ie(je, {}), s = Ie(Symbol.for("vuetify:icons")), d = c, n = Ge({ ...a, ...d, ...f });
  Te(() => {
    Object.assign(n, { ...a, ...d, ...f });
  });
  const { cancelButtonColor: i, cancelButtonSize: A, cancelButtonTitle: P, cancelButtonVariant: w, cancelIcon: k, cancelIconColor: z, cardField: C, closeSiblings: g, fieldOnly: Y, hideCancelIcon: fe, hideSaveIcon: ge, loadingIcon: Se, loadingIconColor: se, saveButtonColor: Ae, saveButtonSize: Oe, saveButtonTitle: Pe, saveButtonVariant: Ve, saveIcon: be, saveIconColor: ze } = sn(n), he = o(() => d.disabled), H = o(() => d.loading), L = v(!1), V = v(!1), m = v(!1), T = v(null);
  let b = l.value;
  te(() => H.value, (F, re) => {
    !F && re && m.value && X();
  });
  const j = o(() => l.value ? (I(!1), n.truncateLength ? An({ length: n.truncateLength, suffix: n.truncateSuffix, text: l.value }) : l.value) : (I(!0), n.emptyText));
  function I(F) {
    L.value = F;
  }
  const U = n, N = o(() => ({ ...U, loading: H.value, modelValue: l.value, originalValue: b })), ue = o(() => ({ color: n.color, displayAppendIcon: d.displayAppendIcon, displayAppendIconColor: d.displayAppendIconColor, displayAppendIconSize: d.displayAppendIconSize, displayAppendInnerIcon: d.displayAppendInnerIcon, displayAppendInnerIconColor: d.displayAppendInnerIconColor, displayAppendInnerIconSize: d.displayAppendInnerIconSize, displayPrependIcon: d.displayPrependIcon, displayPrependIconColor: d.displayPrependIconColor, displayPrependIconSize: d.displayPrependIconSize, displayPrependInnerIcon: d.displayPrependInnerIcon, displayPrependInnerIconColor: d.displayPrependInnerIconColor, displayPrependInnerIconSize: d.displayPrependInnerIconSize, displayValue: j.value, empty: L.value, error: V.value, field: "v-text-field", underlineColor: n.underlineColor, underlineStyle: n.underlineStyle, underlineWidth: n.underlineWidth, underlined: n.underlined, valueColor: n.valueColor })), Be = o(() => ({ ...nn, ...d.cardProps })), $ = o(() => ln({ cell: n.cell && !m.value, density: n.density, disabled: he.value, field: "v-text-field", iconSet: s == null ? void 0 : s.defaultSet, loading: H.value, loadingWait: n.loadingWait, tableField: n.tableField, variant: n.variant })), E = o(() => on({ cell: n.cell, cellUnderlineFullWidth: n.cellUnderlineFullWidth, density: n.density, field: "v-text-field" })), ne = In({ density: n.density, variant: n.variant }), Ce = o(() => an({ active: m.value, name: "text-field" })), Fe = o(() => tn({ name: "custom-field", showField: m.value })), $e = o(() => ({})), xe = o(() => We.value);
  function ke() {
    V.value = !1, l.value = b, X();
  }
  const We = v(), de = v(null), le = v("body");
  function X() {
    var re, J;
    if (he.value || n.loadingWait && H.value) return;
    We.value = Ue({ cardMinWidth: (re = n.cardProps) == null ? void 0 : re.minWidth, cardOffsetX: n.cardOffsetX, cardOffsetY: n.cardOffsetY, cardWidth: (J = n.cardProps) == null ? void 0 : J.width, field: de.value });
    const F = rn({ attrs: a, closeSiblings: g.value, fieldOnly: n.fieldOnly, props: d, showField: m, timeOpened: T.value });
    m.value = F.showField, T.value = F.timeOpened, W !== null && g.value && m.value && !n.fieldOnly && W.emit(F.timeOpened);
  }
  const oe = v();
  function K() {
    const F = bn({ required: n.required, rules: n.rules, value: l });
    return V.value = F.errors, oe.value = F.results, F.results;
  }
  function pe() {
    V.value ? V.value = !0 : (b = l.value, u("update", l.value), n.loadingWait || X());
  }
  let W, G;
  function ae(F) {
    u("update:closeSiblingFields", T), m.value && T.value !== F && ke();
  }
  return te(() => m.value, () => {
    m.value && K();
  }), te(() => l.value, () => {
    m.value && K();
  }), g.value && import("@vueuse/core").then(({ useEventBus: F }) => {
    W = F(en), G = W.on(ae);
  }), Ke(() => {
    G !== void 0 && W.off(ae);
  }), (F, re) => (p(), S("div", { ref_key: "inlineFieldsContainer", ref: de, class: h(e($)), style: Z(e($e)) }, [!e(m) && !e(n).fieldOnly || e(C) ? (p(), S("div", { key: 0, class: h(e(E)) }, [ce("div", { class: h(e(ne)) }, [D(mn, ye(e(ue), { onToggleField: X }), _e({ _: 2 }, [Ee(e(r), (J, B) => ({ name: B, fn: x((q) => [ve(F.$slots, B, R(ie({ ...q })))]) }))]), 1040)], 2)], 2)) : _("", !0), e(m) || e(n).fieldOnly || e(C) ? (p(), S("div", { key: 1, class: h(["d-flex align-center py-2", e(Ce)]) }, [(p(), ee(Je, { disabled: !e(C), to: e(le) }, [ve(F.$slots, "default", R(ie(e(N)))), D(dn, { "cancel-button-color": e(i), "cancel-button-size": e(A), "cancel-button-title": e(P), "cancel-button-variant": e(w), "cancel-icon": e(k), "cancel-icon-color": e(z), error: e(V), "field-only": e(Y), "hide-cancel-icon": e(fe), "hide-save-icon": e(ge), loading: e(H), "loading-icon": e(Se), "loading-icon-color": e(se), "save-button-color": e(Ae), "save-button-size": e(Oe), "save-button-title": e(Pe), "save-button-variant": e(Ve), "save-icon": e(be), "save-icon-color": e(ze), onClose: ke, onSave: pe }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])], 8, ["disabled", "to"]))], 2)) : _("", !0), e(C) ? (p(), S("div", { key: 2, class: h(e(Fe)), style: Z(e(xe)) }, [D(Ze, R(ie(e(Be))), { default: x(() => [D(He, null, { default: x(() => [ce("div", { ref_key: "cardFieldRef", ref: le }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : _("", !0)], 6));
} }), _n = xn(Me({ __name: "VInlineSelect", props: me(Qe({ clearIcon: {}, clearable: {}, density: {}, hideSelected: {}, itemTitle: {}, itemValue: {}, items: {}, menu: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Nn }), { modelValue: {}, modelModifiers: {} }), emits: me([...cn], ["update:modelValue"]), setup(c, { emit: t }) {
  const l = Re(c, "modelValue"), a = Ye(), r = qe(), u = t, f = Ie(je, {}), s = Ie(Symbol.for("vuetify:icons")), d = c, n = Ge({ ...a, ...d, ...f });
  Te(() => {
    Object.assign(n, { ...a, ...d, ...f });
  });
  const { cancelButtonColor: i, cancelButtonSize: A, cancelButtonTitle: P, cancelButtonVariant: w, cancelIcon: k, cancelIconColor: z, cardField: C, closeSiblings: g, color: Y, fieldOnly: fe, hideCancelIcon: ge, hideDetails: Se, hideSaveIcon: se, loadingIcon: Ae, loadingIconColor: Oe, saveButtonColor: Pe, saveButtonSize: Ve, saveButtonTitle: be, saveButtonVariant: ze, saveIcon: he, saveIconColor: H, valueColor: L } = sn(n), V = o(() => d.disabled), m = o(() => d.loading), T = v(!1), b = v(!1), j = v(), I = v(!1), U = v(null);
  let N = null;
  te(() => m.value, (y, M) => {
    !y && M && I.value && W();
  });
  const ue = o(() => we({ icon: d.clearIcon, iconOptions: s, name: "clear" })), Be = o(() => l.value && l.value[n.itemTitle] ? ($(!1), l.value[n.itemTitle]) : l.value ? ($(!1), l.value) : ($(!0), n.emptyText));
  function $(y) {
    T.value = y;
  }
  const E = o(() => vn(n)), ne = o(() => ({ color: n.color, displayAppendIcon: n.displayAppendIcon, displayAppendIconColor: n.displayAppendIconColor, displayAppendIconSize: n.displayAppendIconSize, displayAppendInnerIcon: n.displayAppendInnerIcon, displayAppendInnerIconColor: n.displayAppendInnerIconColor, displayAppendInnerIconSize: n.displayAppendInnerIconSize, displayPrependIcon: n.displayPrependIcon, displayPrependIconColor: n.displayPrependIconColor, displayPrependIconSize: n.displayPrependIconSize, displayPrependInnerIcon: n.displayPrependInnerIcon, displayPrependInnerIconColor: n.displayPrependInnerIconColor, displayPrependInnerIconSize: n.displayPrependInnerIconSize, displayValue: Be.value, empty: T.value, error: b.value, field: "v-text-field", underlineColor: n.underlineColor, underlineStyle: n.underlineStyle, underlineWidth: n.underlineWidth, underlined: n.underlined, valueColor: L.value })), Ce = o(() => ({ ...nn, ...d.cardProps }));
  Te(() => {
    j.value = n.items || [];
  });
  const Fe = o(() => ln({ cell: n.cell && !I.value, density: n.density, disabled: V.value, field: "v-select", iconSet: s == null ? void 0 : s.defaultSet, loading: m.value, loadingWait: n.loadingWait, tableField: n.tableField, variant: n.variant })), $e = o(() => on({ cell: n.cell, cellUnderlineFullWidth: n.cellUnderlineFullWidth, density: n.density, field: "v-select" })), xe = In({ density: n.density, variant: n.variant }), ke = o(() => an({ active: I.value, name: "select" })), We = o(() => tn({ name: "select", showField: I.value })), de = o(() => ({})), le = o(() => oe.value);
  function X() {
    b.value = !1, l.value = N, W();
  }
  const oe = v(), K = v(null), pe = v("body");
  function W() {
    var M, Q;
    if (V.value || n.loadingWait && m.value) return;
    oe.value = Ue({ cardMinWidth: (M = n.cardProps) == null ? void 0 : M.minWidth, cardOffsetX: n.cardOffsetX, cardOffsetY: n.cardOffsetY, cardWidth: (Q = n.cardProps) == null ? void 0 : Q.width, field: K.value });
    const y = rn({ attrs: a, closeSiblings: g.value, fieldOnly: n.fieldOnly, props: d, showField: I, timeOpened: U.value });
    I.value = y.showField, U.value = y.timeOpened, J !== null && g.value && I.value && !n.fieldOnly && J.emit(y.timeOpened), N = l.value;
  }
  const G = v(), ae = o(() => G.value);
  function F() {
    const y = bn({ required: n.required, rules: n.rules, value: l });
    return b.value = y.errors, G.value = y.results, y.results;
  }
  function re() {
    N = l.value, u("update", l.value), n.loadingWait || W();
  }
  let J, B;
  function q(y) {
    u("update:closeSiblingFields", U), I.value && U.value !== y && X();
  }
  return te(() => I.value, () => {
    I.value && F();
  }), te(() => l.value, () => {
    I.value && F();
  }), g.value && import("@vueuse/core").then(({ useEventBus: y }) => {
    J = y(en), B = J.on(q);
  }), Ke(() => {
    B !== void 0 && J.off(q);
  }), (y, M) => (p(), S("div", { ref_key: "inlineFieldsContainer", ref: K, class: h(e(Fe)), style: Z(e(de)) }, [!e(I) && !e(n).fieldOnly || e(C) ? (p(), S("div", { key: 0, class: h(e($e)) }, [ce("div", { class: h(e(xe)) }, [D(mn, ye(e(ne), { onToggleField: W }), _e({ _: 2 }, [Ee(e(r), (Q, De) => ({ name: De, fn: x((Ne) => [ve(y.$slots, De, R(ie({ ...Ne })), void 0, !0)]) }))]), 1040)], 2)], 2)) : _("", !0), e(I) || e(n).fieldOnly || e(C) ? (p(), S("div", { key: 1, class: h(e(ke)) }, [(p(), ee(Je, { disabled: !e(C), to: e(pe) }, [D(Ln, ye(e(E), { modelValue: l.value, "onUpdate:modelValue": M[0] || (M[0] = (Q) => l.value = Q), autofocus: !e(n).fieldOnly || e(n).autofocus, "clear-icon": e(ue), clearable: e(n).clearable, color: e(Y), density: e(n).density, disabled: e(m) || e(V), error: e(b), "error-messages": e(ae), "hide-details": e(Se), "hide-selected": e(n).hideSelected, "item-title": e(n).itemTitle, "item-value": e(n).itemValue, items: e(j), label: e(n).label, loading: e(m), menu: e(n).menu && !e(n).fieldOnly && e(I), variant: e(n).variant, width: "100%", onKeyup: fn(X, ["esc"]) }), _e({ _: 2 }, [Ee(e(r), (Q, De) => ({ name: De, fn: x((Ne) => [ve(y.$slots, De, R(ie({ ...Ne })), void 0, !0)]) })), e(r).append ? void 0 : { name: "append", fn: x(() => [D(dn, { "cancel-button-color": e(i), "cancel-button-size": e(A), "cancel-button-title": e(P), "cancel-button-variant": e(w), "cancel-icon": e(k), "cancel-icon-color": e(z), error: e(b), "field-only": e(fe), "hide-cancel-icon": e(ge), "hide-save-icon": e(se), loading: e(m), "loading-icon": e(Ae), "loading-icon-color": e(Oe), "save-button-color": e(Pe), "save-button-size": e(Ve), "save-button-title": e(be), "save-button-variant": e(ze), "save-icon": e(he), "save-icon-color": e(H), onClose: X, onSave: re }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "clearable", "color", "density", "disabled", "error", "error-messages", "hide-details", "hide-selected", "item-title", "item-value", "items", "label", "loading", "menu", "variant"])], 8, ["disabled", "to"]))], 2)) : _("", !0), e(C) ? (p(), S("div", { key: 2, class: h(e(We)), style: Z(e(le)) }, [D(Ze, R(ie(e(Ce))), { default: x(() => [D(He, null, { default: x(() => [ce("div", { ref_key: "cardFieldRef", ref: pe }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : _("", !0)], 6));
} }), [["__scopeId", "data-v-5e62659b"]]), al = Object.freeze(Object.defineProperty({ __proto__: null, default: _n }, Symbol.toStringTag, { value: "Module" })), il = { class: "v-selection-control__wrapper" }, tl = Me({ __name: "VInlineSwitch", props: me(Qe({ density: {}, falseIcon: {}, falseValue: {}, trueValue: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Kn }), { modelValue: {}, modelModifiers: {} }), emits: me([...cn], ["update:modelValue"]), setup(c, { emit: t }) {
  const l = Re(c, "modelValue"), a = Ye(), r = qe(), u = t, f = Ie(je, {}), s = Cn(), d = c, n = Ge({ ...a, ...d, ...f });
  Te(() => {
    Object.assign(n, { ...a, ...d, ...f });
  });
  const { cancelButtonColor: i, cancelButtonSize: A, cancelButtonTitle: P, cancelButtonVariant: w, cancelIcon: k, cancelIconColor: z, cardField: C, closeSiblings: g, color: Y, fieldOnly: fe, hideCancelIcon: ge, hideDetails: Se, loadingIcon: se, loadingIconColor: Ae, saveButtonColor: Oe, saveButtonSize: Pe, saveButtonTitle: Ve, saveButtonVariant: be, saveIcon: ze, saveIconColor: he } = sn(n), H = o(() => d.disabled), L = o(() => d.loading), V = v(!1), m = v(!1), T = v(null), b = o(() => vn(n)), j = o(() => ({ ...nn, ...d.cardProps }));
  te(() => L.value, (W, G) => {
    !W && G && m.value && le();
  });
  const I = o(() => l.value == n.trueValue), U = o(() => gn({ modelValue: l, trueValue: n.trueValue })), N = o(() => ln({ cell: n.cell && !m.value, density: n.density, disabled: H.value, field: "v-switch", loading: L.value, loadingWait: n.loadingWait, tableField: n.tableField })), ue = o(() => on({ cell: n.cell, cellUnderlineFullWidth: n.cellUnderlineFullWidth, density: n.density, field: "v-switch" })), Be = $n({ density: n.density }), $ = o(() => an({ active: m.value, name: "switch" })), E = o(() => Fn("switch", n.valueColor, { error: V })), ne = o(() => tn({ name: "switch", showField: m.value })), Ce = o(() => ({})), Fe = o(() => Sn({ color: n.color, error: V, theme: s, underlineColor: n.underlineColor, underlineStyle: n.underlineStyle, underlineWidth: n.underlineWidth, underlined: n.underlined })), $e = o(() => ke.value);
  function xe() {
    V.value = !1, le();
  }
  const ke = v(), We = v(null), de = v("body");
  function le() {
    var G, ae;
    if (H.value || n.loadingWait && L.value) return;
    ke.value = Ue({ cardMinWidth: (G = n.cardProps) == null ? void 0 : G.minWidth, cardOffsetX: n.cardOffsetX, cardOffsetY: n.cardOffsetY, cardWidth: (ae = n.cardProps) == null ? void 0 : ae.width, field: We.value });
    const W = rn({ attrs: a, closeSiblings: g.value, fieldOnly: n.fieldOnly, props: d, showField: m.value, timeOpened: T.value });
    m.value = W.showField, T.value = W.timeOpened, oe !== null && g.value && m.value && !n.fieldOnly && oe.emit(W.timeOpened);
  }
  function X(W) {
    l.value = W, u("update", W), n.loadingWait || le();
  }
  let oe, K;
  function pe(W) {
    u("update:closeSiblingFields", T), m.value && T.value !== W && le();
  }
  return g.value && import("@vueuse/core").then(({ useEventBus: W }) => {
    oe = W(en), K = oe.on(pe);
  }), Ke(() => {
    K !== void 0 && oe.off(pe);
  }), (W, G) => (p(), S("div", { ref_key: "inlineFieldsContainer", ref: We, class: h(e(N)), style: Z(e(Ce)) }, [!e(m) && !e(n).fieldOnly || e(n).cardField ? (p(), S("div", { key: 0, class: h(e(ue)), onClick: G[2] || (G[2] = (ae) => e(n).cell ? le() : void 0) }, [ce("div", { class: h(e(Be)), onClick: G[1] || (G[1] = (ae) => e(n).cell ? void 0 : le()) }, [ce("div", il, [e(n).icons ? (p(), S("div", { key: 0, class: h(["v-inline-fields--boolean-icons-container", e(E)]), style: Z(e(Fe)) }, [D(wn, { modelValue: e(U), "onUpdate:modelValue": G[0] || (G[0] = (ae) => kn(U) ? U.value = ae : null), "false-value": e(n).falseValue, "icon-false": e(n).iconFalse, "icon-false-color": e(n).iconFalseColor, "icon-false-title": e(n).iconFalseTitle, "icon-true": e(n).iconTrue, "icon-true-color": e(n).iconTrueColor, "icon-true-title": e(n).iconTrueTitle, "true-value": e(n).trueValue }, null, 8, ["modelValue", "false-value", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title", "true-value"])], 6)) : (p(), S("div", { key: 1, class: h(["d-inline-flex align-center justify-center", e(E)]), style: Z(e(Fe)) }, Bn(e(I)), 7))])], 2)], 2)) : _("", !0), e(m) || e(n).fieldOnly || e(C) ? (p(), S("div", { key: 1, class: h(e($)) }, [(p(), ee(Je, { disabled: !e(C), to: e(de) }, [D(Un, ye(e(b), { color: e(Y), density: e(n).density, disabled: e(L) || e(H), error: e(V), "false-icon": e(n).falseIcon, "false-value": e(n).falseValue, "hide-details": e(Se), label: e(n).label, loading: e(L), "model-value": e(U), "true-value": e(n).trueValue, "onUpdate:modelValue": X }), _e({ _: 2 }, [Ee(e(r), (ae, F) => ({ name: F, fn: x((re) => [ve(W.$slots, F, R(ie({ ...re })))]) })), e(r).append ? void 0 : { name: "append", fn: x(() => [D(dn, { "cancel-button-color": e(i), "cancel-button-size": e(A), "cancel-button-title": e(P), "cancel-button-variant": e(w), "cancel-icon": e(k), "cancel-icon-color": e(z), class: "ms-3", error: e(V), "field-only": e(fe), "hide-cancel-icon": e(ge), "hide-save-icon": !0, loading: e(L), "loading-icon": e(se), "loading-icon-color": e(Ae), "save-button-color": e(Oe), "save-button-size": e(Pe), "save-button-title": e(Ve), "save-button-variant": e(be), "save-icon": e(ze), "save-icon-color": e(he), onClose: xe, onSave: X }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "loading", "model-value", "true-value"])], 8, ["disabled", "to"]))], 2)) : _("", !0), e(C) ? (p(), S("div", { key: 2, class: h(e(ne)), style: Z(e($e)) }, [D(Ze, R(ie(e(j))), { default: x(() => [D(He, null, { default: x(() => [ce("div", { ref_key: "cardFieldRef", ref: de }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : _("", !0)], 6));
} }), dl = Me({ __name: "VInlineTextField", props: me(Qe({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Tn }), { modelValue: {}, modelModifiers: {} }), emits: me([...cn], ["update:modelValue"]), setup(c, { emit: t }) {
  const l = Re(c, "modelValue"), a = Ye(), r = qe(), u = t, f = Ie(je, {}), s = Ie(Symbol.for("vuetify:icons")), d = c, n = Ge({ ...a, ...d, ...f });
  Te(() => {
    Object.assign(n, { ...a, ...d, ...f });
  });
  const { cancelButtonColor: i, cancelButtonSize: A, cancelButtonTitle: P, cancelButtonVariant: w, cancelIcon: k, cancelIconColor: z, cardField: C, closeSiblings: g, color: Y, fieldOnly: fe, hideCancelIcon: ge, hideDetails: Se, hideSaveIcon: se, loadingIcon: Ae, loadingIconColor: Oe, saveButtonColor: Pe, saveButtonSize: Ve, saveButtonTitle: be, saveButtonVariant: ze, saveIcon: he, saveIconColor: H } = sn(n), L = o(() => d.disabled), V = o(() => d.loading), m = v(!1), T = v(!1), b = v(!1), j = v(null);
  let I = null;
  te(() => V.value, (B, q) => {
    !B && q && b.value && K();
  });
  const U = o(() => we({ icon: d.clearIcon, iconOptions: s, name: "clear" })), N = o(() => l.value ? (ue(!1), n.truncateLength ? An({ length: n.truncateLength, suffix: n.truncateSuffix, text: l.value }) : l.value) : (ue(!0), n.emptyText));
  function ue(B) {
    m.value = B;
  }
  const Be = o(() => vn(n)), $ = o(() => ({ color: n.color, displayAppendIcon: n.displayAppendIcon, displayAppendIconColor: n.displayAppendIconColor, displayAppendIconSize: n.displayAppendIconSize, displayAppendInnerIcon: n.displayAppendInnerIcon, displayAppendInnerIconColor: n.displayAppendInnerIconColor, displayAppendInnerIconSize: n.displayAppendInnerIconSize, displayPrependIcon: n.displayPrependIcon, displayPrependIconColor: n.displayPrependIconColor, displayPrependIconSize: n.displayPrependIconSize, displayPrependInnerIcon: n.displayPrependInnerIcon, displayPrependInnerIconColor: n.displayPrependInnerIconColor, displayPrependInnerIconSize: n.displayPrependInnerIconSize, displayValue: N.value, empty: m.value, error: T.value, field: "v-text-field", underlineColor: n.underlineColor, underlineStyle: n.underlineStyle, underlineWidth: n.underlineWidth, underlined: n.underlined, valueColor: n.valueColor })), E = o(() => ({ ...nn, ...d.cardProps })), ne = o(() => ln({ cell: n.cell && !b.value, density: n.density, disabled: L.value, field: "v-text-field", iconSet: s == null ? void 0 : s.defaultSet, loading: V.value, loadingWait: n.loadingWait, tableField: n.tableField, variant: n.variant })), Ce = o(() => on({ cell: n.cell, cellUnderlineFullWidth: n.cellUnderlineFullWidth, density: n.density, field: "v-text-field" })), Fe = In({ density: n.density, variant: n.variant }), $e = o(() => an({ active: b.value, name: "text-field" })), xe = o(() => tn({ name: "text-field", showField: b.value })), ke = o(() => ({})), We = o(() => le.value);
  function de() {
    T.value = !1, l.value = I, K();
  }
  const le = v(), X = v(null), oe = v("body");
  function K() {
    var q, y;
    if (L.value || n.loadingWait && V.value) return;
    le.value = Ue({ cardMinWidth: (q = n.cardProps) == null ? void 0 : q.minWidth, cardOffsetX: n.cardOffsetX, cardOffsetY: n.cardOffsetY, cardWidth: (y = n.cardProps) == null ? void 0 : y.width, field: X.value });
    const B = rn({ attrs: a, closeSiblings: g.value, fieldOnly: n.fieldOnly, props: d, showField: b, timeOpened: j.value });
    b.value = B.showField, j.value = B.timeOpened, F !== null && g.value && b.value && !n.fieldOnly && F.emit(B.timeOpened), I = l.value;
  }
  const pe = v(), W = o(() => pe.value);
  function G() {
    const B = bn({ required: n.required, rules: n.rules, value: l });
    return T.value = B.errors, pe.value = B.results, B.results;
  }
  function ae() {
    T.value ? T.value = !0 : (I = l.value, u("update", l.value), n.loadingWait || K());
  }
  let F, re;
  function J(B) {
    u("update:closeSiblingFields", j), b.value && j.value !== B && de();
  }
  return te(() => b.value, () => {
    b.value && G();
  }), te(() => l.value, () => {
    b.value && G();
  }), g.value && import("@vueuse/core").then(({ useEventBus: B }) => {
    F = B(en), re = F.on(J);
  }), Ke(() => {
    re !== void 0 && F.off(J);
  }), (B, q) => (p(), S("div", { ref_key: "inlineFieldsContainer", ref: X, class: h(e(ne)), style: Z(e(ke)) }, [!e(b) && !e(n).fieldOnly || e(C) ? (p(), S("div", { key: 0, class: h(e(Ce)) }, [ce("div", { class: h(e(Fe)) }, [D(mn, ye(e($), { onToggleField: K }), _e({ _: 2 }, [Ee(e(r), (y, M) => ({ name: M, fn: x((Q) => [ve(B.$slots, M, R(ie({ ...Q })))]) }))]), 1040)], 2)], 2)) : _("", !0), e(b) || e(n).fieldOnly || e(C) ? (p(), S("div", { key: 1, class: h(e($e)) }, [(p(), ee(Je, { disabled: !e(C), to: e(oe) }, [D(qn, ye(e(Be), { modelValue: l.value, "onUpdate:modelValue": q[0] || (q[0] = (y) => l.value = y), autofocus: !e(n).fieldOnly || e(n).autofocus, "clear-icon": e(U), color: e(Y), density: e(n).density, disabled: e(V) || e(L), error: e(T), "error-messages": e(W), "hide-details": e(Se), label: e(n).label, loading: e(V), variant: e(n).variant, width: "100%", onKeyup: [fn(ae, ["enter"]), fn(de, ["esc"])] }), _e({ _: 2 }, [Ee(e(r), (y, M) => ({ name: M, fn: x((Q) => [ve(B.$slots, M, R(ie({ ...Q })))]) })), e(r).append ? void 0 : { name: "append", fn: x(() => [D(dn, { "cancel-button-color": e(i), "cancel-button-size": e(A), "cancel-button-title": e(P), "cancel-button-variant": e(w), "cancel-icon": e(k), "cancel-icon-color": e(z), error: e(T), "field-only": e(fe), "hide-cancel-icon": e(ge), "hide-save-icon": e(se), loading: e(V), "loading-icon": e(Ae), "loading-icon-color": e(Oe), "save-button-color": e(Pe), "save-button-size": e(Ve), "save-button-title": e(be), "save-button-variant": e(ze), "save-icon": e(he), "save-icon-color": e(H), onClose: de, onSave: ae }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "variant"])], 8, ["disabled", "to"]))], 2)) : _("", !0), e(C) ? (p(), S("div", { key: 2, class: h(e(xe)), style: Z(e(We)) }, [D(Ze, R(ie(e(E))), { default: x(() => [D(He, null, { default: x(() => [ce("div", { ref_key: "cardFieldRef", ref: oe }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : _("", !0)], 6));
} }), rl = Me({ __name: "VInlineTextarea", props: me(Qe({ autoGrow: {}, clearIcon: {}, density: {}, rows: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Jn }), { modelValue: {}, modelModifiers: {} }), emits: me([...cn], ["update:modelValue"]), setup(c, { emit: t }) {
  const l = Re(c, "modelValue"), a = Ye(), r = qe(), u = t, f = Ie(je, {}), s = Ie(Symbol.for("vuetify:icons")), d = c, n = Ge({ ...a, ...d, ...f });
  Te(() => {
    Object.assign(n, { ...a, ...d, ...f });
  });
  const { cancelButtonColor: i, cancelButtonSize: A, cancelButtonTitle: P, cancelButtonVariant: w, cancelIcon: k, cancelIconColor: z, cardField: C, closeSiblings: g, color: Y, fieldOnly: fe, hideCancelIcon: ge, hideDetails: Se, hideSaveIcon: se, loadingIcon: Ae, loadingIconColor: Oe, saveButtonColor: Pe, saveButtonSize: Ve, saveButtonTitle: be, saveButtonVariant: ze, saveIcon: he, saveIconColor: H } = sn(n), L = o(() => d.disabled), V = o(() => d.loading), m = v(!1), T = v(!1), b = v(!1), j = v(null);
  let I = null;
  te(() => V.value, (B, q) => {
    !B && q && b.value && K();
  });
  const U = o(() => we({ icon: d.clearIcon, iconOptions: s, name: "clear" })), N = o(() => l.value ? (ue(!1), n.truncateLength ? An({ length: n.truncateLength, suffix: n.truncateSuffix, text: l.value }) : l.value) : (ue(!0), n.emptyText));
  function ue(B) {
    m.value = B;
  }
  const Be = o(() => vn(n)), $ = o(() => ({ color: n.color, displayAppendIcon: n.displayAppendIcon, displayAppendIconColor: n.displayAppendIconColor, displayAppendIconSize: n.displayAppendIconSize, displayAppendInnerIcon: n.displayAppendInnerIcon, displayAppendInnerIconColor: n.displayAppendInnerIconColor, displayAppendInnerIconSize: n.displayAppendInnerIconSize, displayPrependIcon: n.displayPrependIcon, displayPrependIconColor: n.displayPrependIconColor, displayPrependIconSize: n.displayPrependIconSize, displayPrependInnerIcon: n.displayPrependInnerIcon, displayPrependInnerIconColor: n.displayPrependInnerIconColor, displayPrependInnerIconSize: n.displayPrependInnerIconSize, displayValue: N.value, empty: m.value, error: T.value, field: "v-text-field", underlineColor: n.underlineColor, underlineStyle: n.underlineStyle, underlineWidth: n.underlineWidth, underlined: n.underlined, valueColor: n.valueColor })), E = o(() => ({ ...nn, ...d.cardProps })), ne = o(() => ln({ cell: n.cell && !b.value, density: n.density, disabled: L.value, field: "v-textarea", iconSet: s == null ? void 0 : s.defaultSet, loading: V.value, loadingWait: n.loadingWait, tableField: n.tableField, variant: n.variant })), Ce = o(() => on({ cell: n.cell, cellUnderlineFullWidth: n.cellUnderlineFullWidth, density: n.density, field: "v-textarea" })), Fe = In({ density: n.density, variant: n.variant }), $e = o(() => an({ active: b.value, name: "textarea" })), xe = o(() => tn({ name: "textarea", showField: b.value })), ke = o(() => ({})), We = o(() => le.value);
  function de() {
    T.value = !1, l.value = I, K();
  }
  const le = v(), X = v(null), oe = v("body");
  function K() {
    var q, y;
    if (L.value || n.loadingWait && V.value) return;
    le.value = Ue({ cardMinWidth: (q = n.cardProps) == null ? void 0 : q.minWidth, cardOffsetX: n.cardOffsetX, cardOffsetY: n.cardOffsetY, cardWidth: (y = n.cardProps) == null ? void 0 : y.width, field: X.value });
    const B = rn({ attrs: a, closeSiblings: g.value, fieldOnly: n.fieldOnly, props: d, showField: b, timeOpened: j.value });
    b.value = B.showField, j.value = B.timeOpened, F !== null && g.value && b.value && !n.fieldOnly && F.emit(B.timeOpened), I = l.value;
  }
  const pe = v(), W = o(() => pe.value);
  function G() {
    const B = bn({ required: n.required, rules: n.rules, value: l });
    return T.value = B.errors, pe.value = B.results, B.results;
  }
  function ae() {
    I = l.value, u("update", l.value), n.loadingWait || K();
  }
  let F, re;
  function J(B) {
    u("update:closeSiblingFields", j), b.value && j.value !== B && de();
  }
  return te(() => b.value, () => {
    b.value && G();
  }), te(() => l.value, () => {
    b.value && G();
  }), g.value && import("@vueuse/core").then(({ useEventBus: B }) => {
    F = B(en), re = F.on(J);
  }), Ke(() => {
    re !== void 0 && F.off(J);
  }), (B, q) => (p(), S("div", { ref_key: "inlineFieldsContainer", ref: X, class: h(e(ne)), style: Z(e(ke)) }, [!e(b) && !e(n).fieldOnly || e(C) ? (p(), S("div", { key: 0, class: h(e(Ce)) }, [ce("div", { class: h(e(Fe)) }, [D(mn, ye(e($), { onToggleField: K }), _e({ _: 2 }, [Ee(e(r), (y, M) => ({ name: M, fn: x((Q) => [ve(B.$slots, M, R(ie({ ...Q })))]) }))]), 1040)], 2)], 2)) : _("", !0), e(b) || e(n).fieldOnly || e(C) ? (p(), S("div", { key: 1, class: h(e($e)) }, [(p(), ee(Je, { disabled: !e(C), to: e(oe) }, [D(Rn, ye(e(Be), { modelValue: l.value, "onUpdate:modelValue": q[0] || (q[0] = (y) => l.value = y), "auto-grow": e(n).autoGrow, autofocus: !e(n).fieldOnly || e(n).autofocus, "clear-icon": e(U), color: e(Y), density: e(n).density, disabled: e(V) || e(L), error: e(T), "error-messages": e(W), "hide-details": e(Se), label: e(n).label, loading: e(V), rows: e(n).rows, variant: e(n).variant, width: "100%", onKeyup: fn(de, ["esc"]) }), _e({ _: 2 }, [Ee(e(r), (y, M) => ({ name: M, fn: x((Q) => [ve(B.$slots, M, R(ie({ ...Q })))]) })), e(r).append ? void 0 : { name: "append", fn: x(() => [D(dn, { "cancel-button-color": e(i), "cancel-button-size": e(A), "cancel-button-title": e(P), "cancel-button-variant": e(w), "cancel-icon": e(k), "cancel-icon-color": e(z), error: e(T), "field-only": e(fe), "hide-cancel-icon": e(ge), "hide-save-icon": e(se), loading: e(V), "loading-icon": e(Ae), "loading-icon-color": e(Oe), "save-button-color": e(Pe), "save-button-size": e(Ve), "save-button-title": e(be), "save-button-variant": e(ze), "save-icon": e(he), "save-icon-color": e(H), onClose: de, onSave: ae }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "auto-grow", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "rows", "variant"])], 8, ["disabled", "to"]))], 2)) : _("", !0), e(C) ? (p(), S("div", { key: 2, class: h(e(xe)), style: Z(e(We)) }, [D(Ze, R(ie(e(E))), { default: x(() => [D(He, null, { default: x(() => [ce("div", { ref_key: "cardFieldRef", ref: oe }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : _("", !0)], 6));
} }), Fl = Object.freeze(Object.defineProperty({ __proto__: null, VInlineAutocomplete: Dn, VInlineCheckbox: ll, VInlineCustomField: ol, VInlineSelect: _n, VInlineSwitch: tl, VInlineTextField: dl, VInlineTextarea: rl }, Symbol.toStringTag, { value: "Module" })), je = Symbol();
function gl(c = {}) {
  return { install: (t) => {
    t.provide(je, c), t.component("VInlineAutocomplete", Xe(() => Promise.resolve().then(() => el))), t.component("VInlineCheckbox", Xe(() => import("./VInlineCheckbox-C3YFEOR4.mjs"))), t.component("VInlineCustomField", Xe(() => import("./VInlineCustomField-B99PLZhD.mjs"))), t.component("VInlineSelect", Xe(() => Promise.resolve().then(() => al))), t.component("VInlineSwitch", Xe(() => import("./VInlineSwitch-CF7_l3SA.mjs"))), t.component("VInlineTextarea", Xe(() => import("./VInlineTextarea-bd1H5rJa.mjs"))), t.component("VInlineTextField", Xe(() => import("./VInlineTextField-B7zhRZ4_.mjs")));
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
  je as globalOptions
};
(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode(":root{--v-inline-fields-top-padding-compact: 13px;--v-inline-fields-top-padding-comfortable: 17px;--v-inline-fields-top-padding-default: 21px;--v-inline-fields-input-height: 24px;--v-inline-fields-density-compact-height: 32px;--v-inline-fields-density-comfortable-height: 40px;--v-inline-fields-grey: #909090}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append{padding-top:0}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append .v-icon{font-size:1rem}.v-inline-fields{position:relative}.v-inline-fields--display-container *{align-items:center;display:flex}.v-inline-fields--display-container-cell{cursor:pointer;display:block;max-height:unset!important}.v-inline-fields--display-container-cell>div{width:100%}.v-inline-fields--display-container-cell-underline-full-width .v-inline-fields--display-value{width:100%}.v-inline-fields--display-container-cell .v-inline-fields--selection-control .v-inline-fields--display-value{justify-content:center}.v-inline-fields--display-container-cell,.v-inline-fields--display-container-cell .v-input,.v-inline-fields--display-container-cell .v-inline-fields--display-wrapper,.v-inline-fields--display-container-cell .v-selection-control__wrapper{height:100%!important;width:100%}.v-inline-fields--display-value{cursor:pointer;letter-spacing:.009375em}.v-inline-fields--display-value-empty{color:var(--v-inline-fields-grey);font-style:italic}.v-inline-fields--display-value-checkbox,.v-inline-fields--display-value-switch{padding-bottom:2px;padding-top:6px}.v-inline-fields--display-append-icon,.v-inline-fields--display-prepend-icon,.v-inline-fields--display-append-inner-icon,.v-inline-fields--display-prepend-inner-icon{align-items:flex-end;display:inline-flex}.v-inline-fields--container-cell{height:100%;width:100%}.v-inline-fields--container-disabled .v-inline-fields--display-value{cursor:default;opacity:var(--v-disabled-opacity)}.v-inline-fields--container-loading .v-inline-fields--display-value{cursor:wait}.v-inline-fields--container-icon-set-fa .v-field__clearable{font-size:.8rem}.v-inline-fields--container-icon-set-fa .v-field__append-inner{align-items:flex-end;padding-bottom:0!important}.v-inline-fields--container-v-select-compact-plain .v-input,.v-inline-fields--container-v-select-compact-underlined .v-input,.v-inline-fields--container-v-text-field-compact-plain .v-input,.v-inline-fields--container-v-text-field-compact-underlined .v-input{height:var(--v-inline-fields-density-compact-height);max-height:var(--v-inline-fields-density-compact-height)}.v-inline-fields--container-v-select-compact-plain .v-input__control,.v-inline-fields--container-v-select-compact-underlined .v-input__control,.v-inline-fields--container-v-text-field-compact-plain .v-input__control,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control{padding-bottom:4px}.v-inline-fields--container-v-select-compact-plain .v-input>div,.v-inline-fields--container-v-select-compact-underlined .v-input>div,.v-inline-fields--container-v-text-field-compact-plain .v-input>div,.v-inline-fields--container-v-text-field-compact-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input input{padding-bottom:10px}.v-inline-fields--container-v-select-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-compact-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-select__selection{align-items:center;padding-bottom:10px}.v-inline-fields--container-v-select-comfortable-plain .v-input,.v-inline-fields--container-v-select-comfortable-underlined .v-input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input{height:var(--v-inline-fields-density-comfortable-height);max-height:var(--v-inline-fields-density-comfortable-height)}.v-inline-fields--container-v-select-comfortable-plain .v-input__control,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control{padding-bottom:8px}.v-inline-fields--container-v-select-comfortable-plain .v-input>div,.v-inline-fields--container-v-select-comfortable-underlined .v-input>div,.v-inline-fields--container-v-text-field-comfortable-plain .v-input>div,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input input{padding-bottom:6px}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-select__selection{align-items:center;padding-bottom:6px}.v-inline-fields--container-v-select-compact-plain .v-field__append-inner,.v-inline-fields--container-v-select-compact-underlined .v-field__append-inner{padding-top:4px!important}.v-inline-fields--container-v-select-comfortable-plain .v-field__append-inner,.v-inline-fields--container-v-select-comfortable-underlined .v-field__append-inner{padding-top:8px!important}.v-inline-fields--container-v-textarea .v-inline-fields--save-fields-container{align-items:flex-end}.v-inline-fields--container-v-select,.v-inline-fields--container-v-textarea,.v-inline-fields--container-v-text-field{width:100%}.v-inline-fields--container-v-checkbox .v-input,.v-inline-fields--container-v-switch .v-input{align-items:center;display:flex;padding-bottom:0}.v-inline-fields--container-v-checkbox .v-input__append,.v-inline-fields--container-v-switch .v-input__append{margin-inline-start:0;margin-left:0;padding-bottom:0}.v-inline-fields--container-v-checkbox .v-selection-control,.v-inline-fields--container-v-switch .v-selection-control{min-height:unset}.v-inline-fields--container-v-checkbox .v-inline-fields--save-fields-container,.v-inline-fields--container-v-switch .v-inline-fields--save-fields-container{align-items:center}.v-inline-fields--container .v-input__append,.v-inline-fields--container .v-input__prepend,.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-top:0!important}.v-inline-fields--container .v-input__append .v-icon,.v-inline-fields--container .v-input__prepend .v-icon,.v-inline-fields--container .v-field__append-inner .v-icon,.v-inline-fields--container .v-field__prepend-inner .v-icon{font-size:1rem!important}.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-compact .v-input__append,.v-inline-fields--container-compact .v-input__prepend,.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-comfortable .v-input__append,.v-inline-fields--container-comfortable .v-input__prepend,.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{padding-bottom:6px!important}.v-inline-fields--container-default .v-input__append,.v-inline-fields--container-default .v-input__prepend,.v-inline-fields--container-default .v-field__append-inner,.v-inline-fields--container-default .v-field__prepend-inner{align-items:flex-end!important;padding-bottom:0!important}.v-inline-fields--container-default .v-input__append .v-icon,.v-inline-fields--container-default .v-input__prepend .v-icon,.v-inline-fields--container-default .v-field__append-inner .v-icon,.v-inline-fields--container-default .v-field__prepend-inner .v-icon{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)!important}.v-inline-fields--container-default .v-inline-fields--save-fields-container{align-items:flex-end!important}.v-inline-fields--card-container{height:fit-content;min-width:fit-content!important;position:absolute}.v-inline-fields--card-container .v-card{border:1px solid hsla(0,0%,50%,.5)}.v-inline-fields--card-container .v-card .v-card-text{padding:5px 10px}.v-inline-fields--card-container .v-card .v-card-text>div{align-items:center;display:flex}.v-inline-fields--card-container-checkbox .v-card .v-card-text .v-input__append{margin-inline-start:0}.v-inline-fields--save-fields-container{align-items:center;display:flex;height:100%;margin-left:.1rem}.v-inline-fields--boolean-icons{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-inline-fields .truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:250px}.v-inline-fields .v-input__append{padding-top:0}[data-v-f4f1ab13] .v-field__field,[data-v-5e62659b] .v-field__field{align-items:flex-end}")),document.head.appendChild(i)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
