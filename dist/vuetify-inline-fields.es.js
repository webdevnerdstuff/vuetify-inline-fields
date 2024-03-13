import { unref as e, defineComponent as Ee, useAttrs as Ge, useSlots as qe, reactive as Me, watchEffect as xe, computed as o, openBlock as p, createElementBlock as A, normalizeClass as m, normalizeStyle as J, renderSlot as pe, normalizeProps as R, mergeProps as ve, createBlock as ne, createCommentVNode as L, createElementVNode as se, createTextVNode as En, toDisplayString as hn, inject as Ie, withCtx as x, mergeModels as fe, mergeDefaults as je, useModel as Re, toRefs as cn, ref as v, watch as ie, onUnmounted as Je, createVNode as $, createSlots as we, renderList as _e, guardReactiveProps as le, Teleport as Ke, withKeys as yn, isRef as zn, defineAsyncComponent as Ne } from "vue";
import { useTheme as Cn } from "vuetify";
import { VIcon as Ue } from "vuetify/lib/components/VIcon/index.mjs";
import { VBtn as An } from "vuetify/lib/components/VBtn/index.mjs";
import { VAutocomplete as Mn } from "vuetify/lib/components/VAutocomplete/index.mjs";
import { VCard as Qe, VCardText as Ze } from "vuetify/lib/components/VCard/index.mjs";
import { VIcon as On } from "vuetify/components";
import { useWindowSize as Ln } from "@vueuse/core";
import { VCheckbox as Gn } from "vuetify/lib/components/VCheckbox/index.mjs";
import { VSelect as Un } from "vuetify/lib/components/VSelect/index.mjs";
import { VSwitch as Yn } from "vuetify/lib/components/VSwitch/index.mjs";
import { VTextField as qn } from "vuetify/lib/components/VTextField/index.mjs";
import { VTextarea as Rn } from "vuetify/lib/components/VTextarea/index.mjs";
/**
 * @name @wdns/vuetify-inline-fields
 * @version 1.0.7
 * @description Vuetify Inline Fields Component Library offers a comprehensive collection of reusable UI components to create elegant and efficient inline form fields within your applications.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2024, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-inline-fields/
 * @repository https://github.com/webdevnerdstuff/vuetify-inline-fields
 * @license MIT License
 */
const He = Symbol("identifier"), en = { elevation: 5, variant: "flat" }, sn = { cancelButtonColor: "default", cancelButtonSize: "x-small", cancelButtonTitle: "Cancel", cancelButtonVariant: "text", cancelIcon: void 0, cancelIconColor: "default", cardField: !1, cardOffsetX: 0, cardOffsetY: 0, cardProps: () => ({}), cell: !1, cellUnderlineFullWidth: !0, closeSiblings: !1, color: "primary", density: "compact", disabled: !1, displayAppendIcon: void 0, displayAppendIconColor: void 0, displayAppendIconSize: "x-small", displayAppendInnerIcon: void 0, displayAppendInnerIconColor: void 0, displayAppendInnerIconSize: "x-small", displayPrependIcon: void 0, displayPrependIconColor: void 0, displayPrependIconSize: "x-small", displayPrependInnerIcon: void 0, displayPrependInnerIconColor: void 0, displayPrependInnerIconSize: "x-small", emptyText: "empty", error: !1, fieldOnly: !1, hideCancelIcon: !1, hideDetails: !0, label: "", loading: !1, loadingWait: !0, name: "", required: !1, tableField: !0, underlineColor: "primary", underlineStyle: "dotted", underlineWidth: "2px", underlined: !0, valueColor: "default" }, bn = { autofocus: !0 }, un = { hideCancelIcon: !1, hideSaveIcon: !1, loadingIcon: void 0, loadingIconColor: "primary", saveButtonColor: "primary", saveButtonSize: "x-small", saveButtonTitle: "Save", saveButtonVariant: "text", saveIcon: void 0, saveIconColor: "primary" }, kn = { falseValue: !1, iconFalse: void 0, iconFalseColor: "danger", iconFalseTitle: "No", iconTrue: void 0, iconTrueColor: "success", iconTrueTitle: "Yes", icons: !0, trueValue: !0 }, Xn = { ...sn, ...kn, ...un, falseIcon: void 0, icons: !0, trueIcon: void 0 }, Nn = { ...sn, ...bn, ...un, clearIcon: "$clear", clearable: !1, hideSelected: !0, itemTitle: "title", itemValue: "value", items: () => [], menu: !0, rules: () => [], variant: "underlined" }, jn = { ...sn, ...bn, ...un, autoSelectFirst: !1, clearIcon: "$clear", clearable: !1, hideSelected: !0, itemTitle: "title", itemValue: "value", items: () => [], menu: !0, menuIcon: "$dropdown", rules: () => [], variant: "underlined" }, Jn = { ...sn, ...kn, ...un, icons: !0, falseIcon: "" }, Kn = { ...bn, ...un, ...sn, autoGrow: !0, clearIcon: "$clear", rows: 1, truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, Wn = { ...sn, ...bn, ...un, clearIcon: "$clear", truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, P = "v-inline-fields", nn = (c) => {
  const { cell: t = !1, field: l = "", density: a = "", disabled: r = !1, iconSet: u = "mdi", loading: y = !1, loadingWait: s, tableField: d = !1, variant: n } = c, i = a && n;
  return { [`${P}`]: !0, [`${P}--container`]: !0, [`${P}--container-cell`]: t, [`${P}--container-disabled`]: e(r), [`${P}--container-table`]: d, [`${P}--container-icon-set-${u}`]: !0, [`${P}--container-loading`]: y && s, [`${P}--container-${l}`]: !0, [`${P}--container-${l}-${a}`]: !0, [`${P}--container-${l}-${a}-${n}`]: i, [`${P}--container-${l}-${n}`]: n, [`${P}--container-${l}-${n}-${a}`]: i, [`${P}--container-${a}`]: a, [`${P}--container-${a}-${l}`]: a, [`${P}--container-${a}-${n}`]: i, [`${P}--container-${n}`]: n, [`${P}--container-${n}-${a}`]: i, [`${P}--container-${n}-${l}`]: n };
}, ln = (c) => {
  const { cell: t = !1, cellUnderlineFullWidth: l = !0, field: a = "", density: r = "" } = c;
  return { [`${P}--display-container-cell`]: t, [`${P}--display-container-cell-underline-full-width`]: t && l, [`${P}--display-container`]: !0, [`${P}--display-wrapper-value`]: !0, [`${a}`]: !0, "v-input": !0, [`v-input--density-${r}`]: !0, "v-input--horizontal": !0 };
}, In = (c) => {
  const { density: t = "", variant: l = "" } = c;
  return { "v-input": !0, "v-input--dirty": !0, "v-input--horizontal": !0, "v-text-field": !0, [`v-input--density-${t}`]: !0, [`v-text-field--plain-${l}`]: !0 };
}, $n = (c) => {
  const { density: t = "" } = c;
  return { [`${P}--selection-control`]: !0, [`v-selection-control--density-${t}`]: !0 };
}, Fn = (c, t, l) => {
  const { error: a = !1, empty: r = !1 } = l;
  return { [`${P}`]: !0, [`${P}--display-value-${c}`]: !0, [`${P}--display-value`]: !0, [`${P}--display-value-empty`]: e(r), [`text-${t}`]: !e(a), "text-danger": e(a) };
}, on = (c) => {
  const { name: t, active: l = !1 } = c;
  return { [`${P}`]: !0, [`${P}--field`]: !0, [`${P}--field-${t}`]: !0, [`${P}--field-active`]: l };
}, an = (c) => {
  const { name: t, showField: l } = c;
  return { [`${P}--card-container`]: !0, [`${P}--card-container-${t}`]: !0, "d-none": !l };
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
  let t = function(O) {
    const V = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let E = O;
    return Object.entries(V).forEach(([C, k]) => {
      O.toLowerCase() != C.toLowerCase() || (E = k);
    }), E;
  }(c), l = 0, a = 0, r = 0, u = 100, y = 0, s = 0, d = 0;
  if (t.substring(0, 1) === "#")
    t = function(O) {
      let V = O.replace("#", "");
      V.length === 3 && (V = V.split("").map((F) => F + F).join(""));
      const E = parseInt(V.substring(0, 2), 16), C = parseInt(V.substring(2, 4), 16), k = parseInt(V.substring(4, 6), 16);
      return [E, C, k, 100];
    }(t);
  else if (t.includes("rgb"))
    t = [...t.matchAll(/[\d+.\d+]+/g)].map(Number);
  else if (t.includes("hsl"))
    return t = [...t.matchAll(/[\d+.\d+]+/g)].map(String), l = t[0], a = t[1], r = t[2], u = Pn(t[3]), `${l} ${a}% ${r}% / ${u}%`;
  [y, s, d, u] = t, y /= 255, s /= 255, d /= 255, u = Pn(u);
  const n = Math.max(y, s, d), i = Math.min(y, s, d);
  if (n === null || !i === null || isNaN(n) || isNaN(i)) {
    const O = "0 0% 100% / 12%";
    return console.warn(`[VuetifyInlineFields]: The "color" prop value using "${t}" doesn't exist. Using the value "hsl(${O})" in it's place.`), O;
  }
  if (l = (n + i) / 2, a = (n + i) / 2, r = (n + i) / 2, n == i)
    l = a = 0;
  else {
    const O = n - i;
    switch (a = r > 0.5 ? O / (2 - n - i) : O / (n + i), n) {
      case y:
        l = (s - d) / O + (s < d ? 6 : 0);
        break;
      case s:
        l = (d - y) / O + 2;
        break;
      case d:
        l = (y - s) / O + 4;
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
    return Object.entries(u).find(([y]) => y === a);
  }(c, t);
  return l ? `hsl(${Vn(l[1])})` : `hsl(${Vn(c)})`;
}, vn = (c) => {
  const { str: t, unit: l = "px" } = c;
  if (t != null && t !== "")
    return +t ? `${Number(t)}${l}` : String(t);
}, Tn = (c) => {
  var r;
  const { modelValue: t, trueValue: l } = c, a = e(t);
  return ((r = a == null ? void 0 : a.toLowerCase) == null ? void 0 : r.call(a)) === "true" || a === "1" || a == "1" || a === !0 || a == l || a === l;
}, gn = (c) => {
  const { underlineStyle: t, underlineWidth: l, color: a, error: r, theme: u, underlined: y } = c;
  let { underlineColor: s } = c;
  s = s || a;
  const d = { "border-bottom-color": Qn(s, u), "border-bottom-style": t, "border-bottom-width": l };
  return e(r) && (d["border-bottom-color"] = "rgb(var(--v-theme-danger))"), y || (d["border-bottom"] = "none"), d;
}, Ye = (c) => {
  const { cardMinWidth: t, cardOffsetX: l, cardOffsetY: a, cardWidth: r, field: u, name: y = "" } = c, s = ((i) => {
    const { cardOffsetX: O, cardOffsetY: V, field: E } = i;
    if (!E)
      return { bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0, x: 0, y: 0 };
    const { x: C, y: k } = E.getBoundingClientRect(), { width: h, height: F } = E.getBoundingClientRect(), { right: U, bottom: ye } = E.getBoundingClientRect();
    return { bottom: vn({ str: ye + Number(V) }), height: F, left: vn({ str: 0 + Number(O) }), right: vn({ str: U + Number(O) }), top: vn({ str: 2 + Number(V) }), width: vn({ str: h }), x: C, y: k };
  })({ cardOffsetX: l, cardOffsetY: a, field: u });
  let d = t, n = r;
  return n || (n = y === "checkbox" ? "fit-content" : s.width), d || (d = y === "checkbox" ? "fit-content" : s.width), { left: s.left, top: s.top, width: n, zIndex: 10 };
}, fn = Ee({ __name: "DisplayedValue", props: { color: {}, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayValue: {}, empty: { type: [Object, Boolean] }, error: { type: Boolean }, field: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, emits: ["toggleField"], setup(c, { emit: t }) {
  const l = Ge(), a = t, r = c, u = qe(), y = Cn(), s = Me({ ...l, ...r });
  xe(() => {
    Object.assign(s, { ...l, ...r });
  });
  const d = { displayValue: r.displayValue, empty: r.empty, error: r.error }, n = o(() => Fn(r.field, r.valueColor, { empty: r.empty, error: r.error })), i = o(() => gn({ color: r.color, error: r.error, theme: y, underlineColor: r.underlineColor, underlineStyle: r.underlineStyle, underlineWidth: r.underlineWidth, underlined: r.underlined })), O = o(() => ((C) => {
    const { underlineWidth: k } = C;
    return { borderBottom: `${k || "0px"} solid transparent` };
  })({ underlineWidth: r.underlineWidth })), V = (C, k = !1) => ((h) => {
    const { inner: F = !1, position: U } = h;
    return { [`${P}--display-icon`]: !F, [`${P}--display-${U}-icon`]: !F, [`${P}--display-${U}-inner-icon`]: F, "me-1": U === "prepend", "ms-1": U === "append" };
  })({ inner: k, position: C });
  function E() {
    a("toggleField");
  }
  return (C, k) => (p(), A("div", { class: "v-inline-fields--display-wrapper", onClick: E }, [C.displayPrependIcon || e(u)["display.prepend"] ? (p(), A("div", { key: 0, class: m(V("prepend")), style: J(e(O)) }, [e(u)["display.prepend"] ? pe(C.$slots, "display.prepend", R(ve({ key: 0 }, d))) : (p(), ne(Ue, { key: 1, color: e(s).displayPrependIconColor, icon: e(s).displayPrependIcon, size: e(s).displayPrependIconSize }, null, 8, ["color", "icon", "size"]))], 6)) : L("", !0), se("div", { class: m(["d-inline-flex", e(n)]), style: J(e(i)) }, [C.displayPrependInnerIcon || e(u)["display.prependInner"] ? (p(), A("div", { key: 0, class: m(V("prepend", !0)) }, [e(u)["display.prependInner"] ? pe(C.$slots, "display.prependInner", R(ve({ key: 0 }, d))) : (p(), ne(Ue, { key: 1, color: e(s).displayPrependInnerIconColor, icon: e(s).displayPrependInnerIcon, size: e(s).displayPrependInnerIconSize }, null, 8, ["color", "icon", "size"]))], 2)) : L("", !0), En(" " + hn(C.displayValue) + " ", 1), C.displayAppendInnerIcon || e(u)["display.appendInner"] ? (p(), A("div", { key: 1, class: m(V("append", !0)) }, [e(u)["display.appendInner"] ? pe(C.$slots, "display.appendInner", R(ve({ key: 0 }, d))) : (p(), ne(Ue, { key: 1, color: e(s).displayAppendInnerIconColor, icon: e(s).displayAppendInnerIcon, size: e(s).displayAppendInnerIconSize }, null, 8, ["color", "icon", "size"]))], 2)) : L("", !0)], 6), C.displayAppendIcon || e(u)["display.append"] ? (p(), A("div", { key: 1, class: m(V("append")), style: J(e(O)) }, [e(u)["display.append"] ? pe(C.$slots, "display.append", R(ve({ key: 0 }, d))) : (p(), ne(Ue, { key: 1, color: e(s).displayAppendIconColor, icon: e(s).displayAppendIcon, size: e(s).displayAppendIconSize }, null, 8, ["color", "icon", "size"]))], 6)) : L("", !0)]));
} }), Zn = { fa: { checkboxFalse: "$checkboxOff", checkboxTrue: "far fa-square-check", clear: "$clear", false: "$close", loading: "fa-circle-notch", save: "fa-floppy-disk", true: "$complete" }, mdi: { checkboxFalse: "$checkboxOff", checkboxTrue: "mdi:mdi-checkbox-outline", clear: "$clear", false: "$close", loading: "mdi-loading", save: "mdi-content-save", true: "$complete" } }, De = (c) => {
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
}, tn = Ee({ __name: "SaveFieldButtons", props: { loading: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonVariant: {}, cancelButtonTitle: {}, cancelIconColor: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideSaveIcon: { type: Boolean }, cancelIcon: {}, loadingIcon: {}, loadingIconColor: {}, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIconColor: {}, saveIcon: {} }, emits: ["close", "save"], setup(c, { emit: t }) {
  const l = Ge(), a = t, r = c, u = Ie(Symbol.for("vuetify:icons")), y = o(() => r.error), s = o(() => ({ [`${P}--save-fields-container`]: !0 })), d = o(() => r.loading), n = Me({ ...l, ...r });
  xe(() => {
    Object.assign(n, { ...l, ...r });
  });
  const i = o(() => (u == null ? void 0 : u.defaultSet) === "fa" ? "fa-spin" : (u == null ? void 0 : u.defaultSet) === "mdi" ? "mdi-spin" : ""), O = o(() => ((F) => {
    const { cancelButtonVariant: U } = F;
    return { "me-1": U === "elevated", "ms-1": !0 };
  })({ cancelButtonVariant: n.cancelButtonVariant })), V = o(() => De({ icon: r.cancelIcon, iconOptions: u, name: "false" })), E = o(() => De({ icon: r.loadingIcon, iconOptions: u, name: "loading" })), C = o(() => De({ icon: r.saveIcon, iconOptions: u, name: "save" }));
  function k() {
    a("close");
  }
  function h() {
    a("save");
  }
  return (F, U) => (p(), A("div", ve({ class: e(s) }, F.$attrs), [e(n).hideSaveIcon ? L("", !0) : (p(), ne(An, { key: 0, class: "ms-1", color: e(n).saveButtonColor, disabled: e(y), icon: "", size: e(n).saveButtonSize, title: e(d) ? "Loading" : e(n).saveButtonTitle, variant: e(n).saveButtonVariant, onClick: h }, { default: x(() => [e(d) ? (p(), ne(Ue, { key: 1, class: m(e(i)), color: e(n).loadingIconColor, icon: e(E) }, null, 8, ["class", "color", "icon"])) : (p(), ne(Ue, { key: 0, color: e(y) ? "error" : e(n).saveIconColor, icon: e(C) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["color", "disabled", "size", "title", "variant"])), e(n).hideCancelIcon ? L("", !0) : (p(), ne(An, { key: 1, class: m(e(O)), color: e(n).cancelButtonColor, icon: "", size: e(n).cancelButtonSize, title: e(n).cancelButtonTitle, variant: e(n).cancelButtonVariant, onClick: k }, { default: x(() => [e(n).hideSaveIcon && e(d) ? (p(), ne(Ue, { key: 0, class: m(e(i)), color: e(n).loadingIconColor, icon: e(E) }, null, 8, ["class", "color", "icon"])) : (p(), ne(Ue, { key: 1, class: "text-default", color: e(n).cancelIconColor, icon: e(V) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["class", "color", "size", "title", "variant"]))], 16));
} }), mn = (c) => {
  const { required: t, rules: l } = c;
  let { value: a } = c;
  a = e(a);
  const r = [];
  let u = !1;
  if (t && !a)
    return r.push("Field is required."), { errors: !0, results: r };
  if (l) {
    for (const y of l) {
      const s = (typeof y == "function" ? y : () => y)(a);
      s !== !0 && (typeof s == "string" ? r.push(s) : console.warn(`${s} is not a valid value. Rule functions must return boolean true or a string.`));
    }
    u = r.length > 0;
  }
  return { errors: u, results: r };
}, dn = (c) => {
  const { attrs: t, closeSiblings: l, fieldOnly: a, props: r, showField: u, timeOpened: y } = c;
  let s = y;
  return l && !a && (s = /* @__PURE__ */ new Date()), { settings: { ...t, ...r }, showField: !e(u), timeOpened: s };
}, Sn = (c) => {
  const { length: t = 0 } = c;
  let { suffix: l, text: a } = c;
  return a = a.toString(), l = l || "...", a.length > t ? `${a.substring(0, t)}${l}` : a;
}, rn = ["error", "update", "update:closeSiblingFields", "update:model-value"], Hn = ["cancelButtonColor", "cancelButtonSize", "cancelButtonTitle", "cancelButtonVariant", "cancelIcon", "cancelIconColor", "closeSiblings", "displayAppendIcon", "displayAppendIconColor", "displayAppendIconSize", "displayAppendInnerIcon", "displayAppendInnerIconColor", "displayAppendInnerIconSize", "displayPrependIcon", "displayPrependIconColor", "displayPrependIconSize", "displayPrependInnerIcon", "displayPrependInnerIconColor", "displayPrependInnerIconSize", "emptyText", "fieldOnly", "hideSaveIcon", "loadingIcon", "loadingIconColor", "loadingWait", "saveButtonColor", "saveButtonSize", "saveButtonTitle", "saveButtonVariant", "saveIcon", "saveIconColor", "tableField", "truncateLength", "truncateSuffix", "underlineColor", "underlineStyle", "underlineWidth", "underlined", "valueColor"], pn = (c) => {
  let t = c;
  return t = Object.entries(t).filter(([l]) => !Hn.includes(l)), Object.fromEntries(t);
}, xn = (c, t) => {
  const l = c.__vccOpts || c;
  for (const [a, r] of t)
    l[a] = r;
  return l;
}, Dn = xn(Ee({ __name: "VInlineAutocomplete", props: fe(je({ autoSelectFirst: {}, clearIcon: {}, clearable: {}, density: {}, hideSelected: {}, itemTitle: {}, itemValue: {}, items: {}, menu: {}, menuIcon: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...jn }), { modelValue: {}, modelModifiers: {} }), emits: fe([...rn], ["update:modelValue"]), setup(c, { emit: t }) {
  const l = Re(c, "modelValue"), a = Ge(), r = qe(), u = t, y = Ie(Xe, {}), s = Ie(Symbol.for("vuetify:icons")), d = c, n = Me({ ...a, ...d, ...y });
  xe(() => {
    Object.assign(n, { ...a, ...d, ...y });
  });
  const { cancelButtonColor: i, cancelButtonSize: O, cancelButtonTitle: V, cancelButtonVariant: E, cancelIcon: C, cancelIconColor: k, cardField: h, closeSiblings: F, color: U, fieldOnly: ye, hideCancelIcon: ge, hideDetails: Se, hideSaveIcon: ue, loadingIcon: Ae, loadingIconColor: Oe, saveButtonColor: Pe, saveButtonSize: Ve, saveButtonTitle: me, saveButtonVariant: ze, saveIcon: be, saveIconColor: K, valueColor: G } = cn(n), z = o(() => d.disabled), I = o(() => d.loading), W = v(!1), f = v(!1), N = v(), b = v(!1), Y = v(null);
  let H = l.value;
  ie(() => I.value, (S, X) => {
    !S && X && b.value && D();
  });
  const Be = o(() => De({ icon: d.clearIcon, iconOptions: s, name: "clear" })), he = o(() => l.value && l.value[n.itemTitle] ? (w(!1), l.value[n.itemTitle]) : l.value ? l.value : (w(!0), n.emptyText));
  function w(S) {
    W.value = S;
  }
  const M = o(() => pn(n)), ee = o(() => ({ color: n.color, displayAppendIcon: n.displayAppendIcon, displayAppendIconColor: n.displayAppendIconColor, displayAppendIconSize: n.displayAppendIconSize, displayAppendInnerIcon: n.displayAppendInnerIcon, displayAppendInnerIconColor: n.displayAppendInnerIconColor, displayAppendInnerIconSize: n.displayAppendInnerIconSize, displayPrependIcon: n.displayPrependIcon, displayPrependIconColor: n.displayPrependIconColor, displayPrependIconSize: n.displayPrependIconSize, displayPrependInnerIcon: n.displayPrependInnerIcon, displayPrependInnerIconColor: n.displayPrependInnerIconColor, displayPrependInnerIconSize: n.displayPrependInnerIconSize, displayValue: he.value, empty: W.value, error: f.value, field: "v-text-field", underlineColor: n.underlineColor, underlineStyle: n.underlineStyle, underlineWidth: n.underlineWidth, underlined: n.underlined, valueColor: G.value })), Ce = o(() => ({ ...en, ...d.cardProps }));
  xe(() => {
    N.value = n.items || [];
  });
  const Fe = o(() => nn({ cell: n.cell && !b.value, density: n.density, disabled: z.value, field: "v-select", iconSet: s == null ? void 0 : s.defaultSet, loading: I.value, loadingWait: n.loadingWait, tableField: n.tableField, variant: n.variant })), We = o(() => ln({ cell: n.cell, cellUnderlineFullWidth: n.cellUnderlineFullWidth, density: n.density, field: "v-select" })), $e = In({ density: n.density, variant: n.variant }), ke = o(() => on({ active: b.value, name: "select" })), te = o(() => an({ name: "select", showField: b.value })), de = o(() => ({})), Q = o(() => q.value);
  function oe() {
    f.value = !1, l.value = H, D();
  }
  const q = v(), Z = v(null), re = v("body");
  function D() {
    var X, Te;
    if (z.value || n.loadingWait && I.value)
      return;
    q.value = Ye({ cardMinWidth: (X = n.cardProps) == null ? void 0 : X.minWidth, cardOffsetX: n.cardOffsetX, cardOffsetY: n.cardOffsetY, cardWidth: (Te = n.cardProps) == null ? void 0 : Te.width, field: Z.value });
    const S = dn({ attrs: a, closeSiblings: F.value, fieldOnly: n.fieldOnly, props: d, showField: b, timeOpened: Y.value });
    b.value = S.showField, Y.value = S.timeOpened, B !== null && F.value && b.value && !n.fieldOnly && B.emit(S.timeOpened);
  }
  const g = v(), _ = o(() => g.value);
  function ce() {
    const S = mn({ required: n.required, rules: n.rules, value: l });
    return f.value = S.errors, g.value = S.results, S.results;
  }
  function ae() {
    H = l.value, u("update", l.value), n.loadingWait || D();
  }
  let B, j;
  function T(S) {
    u("update:closeSiblingFields", Y), b.value && Y.value !== S && oe();
  }
  return ie(() => b.value, () => {
    b.value && ce();
  }), ie(() => l.value, () => {
    b.value && ce();
  }), F.value && import("@vueuse/core").then(({ useEventBus: S }) => {
    B = S(He), j = B.on(T);
  }), Je(() => {
    j !== void 0 && B.off(T);
  }), (S, X) => (p(), A("div", { ref_key: "inlineFieldsContainer", ref: Z, class: m(e(Fe)), style: J(e(de)) }, [!e(b) && !e(n).fieldOnly || e(h) ? (p(), A("div", { key: 0, class: m(e(We)) }, [se("div", { class: m(e($e)) }, [$(fn, ve(e(ee), { onToggleField: D }), we({ _: 2 }, [_e(e(r), (Te, Le) => ({ name: Le, fn: x((Bn) => [pe(S.$slots, Le, R(le({ ...Bn })), void 0, !0)]) }))]), 1040)], 2)], 2)) : L("", !0), e(b) || e(n).fieldOnly || e(h) ? (p(), A("div", { key: 1, class: m(e(ke)) }, [(p(), ne(Ke, { disabled: !e(h), to: e(re) }, [$(Mn, ve(e(M), { modelValue: l.value, "onUpdate:modelValue": X[0] || (X[0] = (Te) => l.value = Te), autofocus: !e(n).fieldOnly || e(n).autofocus, "clear-icon": e(Be), clearable: e(n).clearable, color: e(U), density: e(n).density, disabled: e(I) || e(z), error: e(f), "error-messages": e(_), "hide-details": e(Se), "hide-selected": e(n).hideSelected, "item-title": e(n).itemTitle, "item-value": e(n).itemValue, items: e(N), label: e(n).label, loading: e(I), menu: e(n).menu && !e(n).fieldOnly && e(b), variant: e(n).variant, width: "100%", onKeyup: yn(oe, ["esc"]) }), we({ _: 2 }, [_e(e(r), (Te, Le) => ({ name: Le, fn: x((Bn) => [pe(S.$slots, Le, R(le({ ...Bn })), void 0, !0)]) })), e(r).append ? void 0 : { name: "append", fn: x(() => [$(tn, { "cancel-button-color": e(i), "cancel-button-size": e(O), "cancel-button-title": e(V), "cancel-button-variant": e(E), "cancel-icon": e(C), "cancel-icon-color": e(k), error: e(f), "field-only": e(ye), "hide-cancel-icon": e(ge), "hide-save-icon": e(ue), loading: e(I), "loading-icon": e(Ae), "loading-icon-color": e(Oe), "save-button-color": e(Pe), "save-button-size": e(Ve), "save-button-title": e(me), "save-button-variant": e(ze), "save-icon": e(be), "save-icon-color": e(K), onClose: oe, onSave: ae }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "clearable", "color", "density", "disabled", "error", "error-messages", "hide-details", "hide-selected", "item-title", "item-value", "items", "label", "loading", "menu", "variant"])], 8, ["disabled", "to"]))], 2)) : L("", !0), e(h) ? (p(), A("div", { key: 2, class: m(e(te)), style: J(e(Q)) }, [$(Qe, R(le(e(Ce))), { default: x(() => [$(Ze, null, { default: x(() => [se("div", { ref_key: "cardFieldRef", ref: re }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : L("", !0)], 6));
} }), [["__scopeId", "data-v-7c790517"]]), el = Object.freeze(Object.defineProperty({ __proto__: null, default: Dn }, Symbol.toStringTag, { value: "Module" })), wn = Ee({ __name: "BooleanIcons", props: fe({ iconFalseColor: {}, iconFalseTitle: {}, iconTrueColor: {}, iconTrueTitle: {}, iconFalse: {}, iconTrue: {} }, { modelValue: {}, modelModifiers: {} }), emits: ["update:modelValue"], setup(c) {
  const t = c, l = Ie(Symbol.for("vuetify:icons")), a = Me({ ...t });
  xe(() => {
    Object.assign(a, { ...t });
  });
  const r = Re(c, "modelValue"), u = o(() => De({ icon: a.iconFalse, iconOptions: l, name: "false" })), y = o(() => De({ icon: a.iconTrue, iconOptions: l, name: "true" }));
  return (s, d) => r.value ? (p(), ne(e(On), { key: 0, class: "v-inline-fields--boolean-icons fa-fw", color: s.iconTrueColor, icon: e(y), size: "x-small", title: s.iconTrueTitle }, null, 8, ["color", "icon", "title"])) : (p(), ne(e(On), { key: 1, class: "v-inline-fields--boolean-icons fa-fw", color: s.iconFalseColor, icon: e(u), size: "x-small", title: s.iconFalseTitle }, null, 8, ["color", "icon", "title"]));
} }), nl = { class: "v-selection-control__wrapper" }, ll = Ee({ __name: "VInlineCheckbox", props: fe(je({ density: {}, falseIcon: {}, trueIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Xn }), { modelValue: {}, modelModifiers: {} }), emits: fe([...rn], ["update:modelValue"]), setup(c, { emit: t }) {
  const l = Re(c, "modelValue"), a = Ge(), r = qe(), u = t, y = Ie(Xe, {}), s = Ie(Symbol.for("vuetify:icons")), d = Cn(), n = c, i = Me({ ...a, ...n, ...y });
  xe(() => {
    Object.assign(i, { ...a, ...n, ...y });
  });
  const O = o(() => n.disabled), V = o(() => n.loading), E = o(() => i.underlineColor), C = v(!1), k = v(!1), h = v(null), F = o(() => pn(i)), U = o(() => ({ ...en, ...n.cardProps }));
  ie(() => V.value, (w, M) => {
    !w && M && k.value && b();
  });
  const ye = o(() => De({ icon: n.trueIcon, iconOptions: s, name: "checkboxFalse" })), ge = o(() => De({ icon: n.iconTrue, iconOptions: s, name: "checkboxTrue" })), Se = o(() => l.value == i.trueValue), ue = o(() => Tn({ modelValue: l, trueValue: i.trueValue })), Ae = o(() => nn({ cell: i.cell && !k.value, density: i.density, disabled: O.value, field: "v-checkbox", loading: V.value, loadingWait: i.loadingWait, tableField: i.tableField })), Oe = o(() => ln({ cell: i.cell, cellUnderlineFullWidth: i.cellUnderlineFullWidth, density: i.density, field: "v-checkbox" })), Pe = $n({ density: i.density }), Ve = o(() => on({ active: k.value, name: "checkbox" })), me = o(() => Fn("checkbox", i.valueColor, { error: C })), ze = o(() => an({ name: "checkbox", showField: k.value })), be = o(() => ({})), K = o(() => gn({ color: i.color, error: C, theme: d, underlineColor: E.value, underlineStyle: i.underlineStyle, underlineWidth: i.underlineWidth, underlined: i.underlined })), G = o(() => I.value);
  function z() {
    C.value = !1, b();
  }
  const I = v(), W = v(null), f = v("body"), N = Ln();
  function b() {
    var M, ee;
    if (O.value || i.loadingWait && V.value)
      return;
    I.value = Ye({ cardMinWidth: (M = i.cardProps) == null ? void 0 : M.minWidth, cardOffsetX: i.cardOffsetX, cardOffsetY: i.cardOffsetY, cardWidth: (ee = i.cardProps) == null ? void 0 : ee.width, field: W.value, name: "checkbox" });
    const w = dn({ attrs: a, closeSiblings: i.closeSiblings, fieldOnly: i.fieldOnly, props: n, showField: k, timeOpened: h.value });
    k.value = w.showField, h.value = w.timeOpened, H !== null && i.closeSiblings && k.value && !i.fieldOnly && H.emit(w.timeOpened);
  }
  function Y(w) {
    l.value = w, u("update", w), i.loadingWait || b();
  }
  let H, Be;
  function he(w) {
    u("update:closeSiblingFields", h), k.value && h.value !== w && b();
  }
  return ie(() => N, () => {
    var w, M;
    I.value = Ye({ cardMinWidth: (w = i.cardProps) == null ? void 0 : w.minWidth, cardOffsetX: i.cardOffsetX, cardOffsetY: i.cardOffsetY, cardWidth: (M = i.cardProps) == null ? void 0 : M.width, field: W.value, name: "checkbox" });
  }, { deep: !0 }), i.closeSiblings && import("@vueuse/core").then(({ useEventBus: w }) => {
    H = w(He), Be = H.on(he);
  }), Je(() => {
    Be !== void 0 && H.off(he);
  }), (w, M) => (p(), A("div", { ref_key: "inlineFieldsContainer", ref: W, class: m(e(Ae)), style: J(e(be)) }, [!e(k) && !e(i).fieldOnly || e(i).cardField ? (p(), A("div", { key: 0, class: m(e(Oe)), onClick: M[2] || (M[2] = (ee) => e(i).cell ? b() : void 0) }, [se("div", { class: m(e(Pe)), onClick: M[1] || (M[1] = (ee) => e(i).cell ? void 0 : b()) }, [se("div", nl, [e(i).icons ? (p(), A("div", { key: 0, class: m(["v-inline-fields--boolean-icons-container", e(me)]), style: J(e(K)) }, [$(wn, { modelValue: e(ue), "onUpdate:modelValue": M[0] || (M[0] = (ee) => zn(ue) ? ue.value = ee : null), "icon-false": e(i).iconFalse, "icon-false-color": e(i).iconFalseColor, "icon-false-title": e(i).iconFalseTitle, "icon-true": e(i).iconTrue, "icon-true-color": e(i).iconTrueColor, "icon-true-title": e(i).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (p(), A("div", { key: 1, class: m(["d-inline-flex align-center justify-center", e(me)]), style: J(e(K)) }, hn(e(Se)), 7))])], 2)], 2)) : L("", !0), e(k) || e(i).fieldOnly || e(i).cardField ? (p(), A("div", { key: 1, class: m(e(Ve)) }, [(p(), ne(Ke, { disabled: !e(i).cardField, to: e(f) }, [$(Gn, ve(e(F), { color: e(i).color, density: e(i).density, disabled: e(V) || e(O), error: e(C), "false-icon": e(ye), "false-value": e(i).falseValue, "hide-details": e(i).hideDetails, label: e(i).label, "model-value": e(ue), "true-icon": e(ge), "true-value": e(i).trueValue, "onUpdate:modelValue": Y }), we({ _: 2 }, [_e(e(r), (ee, Ce) => ({ name: Ce, fn: x((Fe) => [pe(w.$slots, Ce, R(le({ ...Fe })))]) })), e(r).append ? void 0 : { name: "append", fn: x(() => [$(tn, { "cancel-button-color": e(i).cancelButtonColor, "cancel-button-size": e(i).cancelButtonSize, "cancel-button-title": e(i).cancelButtonTitle, "cancel-button-variant": e(i).cancelButtonVariant, "cancel-icon": e(i).cancelIcon, "cancel-icon-color": e(i).cancelIconColor, error: e(C), "field-only": e(i).fieldOnly, "hide-cancel-icon": e(i).hideCancelIcon, "hide-save-icon": !0, loading: e(V), "loading-icon": e(i).loadingIcon, "loading-icon-color": e(i).loadingIconColor, "save-button-color": e(i).saveButtonColor, "save-button-size": e(i).saveButtonSize, "save-button-title": e(i).saveButtonTitle, "save-button-variant": e(i).saveButtonVariant, "save-icon": e(i).saveIcon, "save-icon-color": e(i).saveIconColor, onClose: z, onSave: Y }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "model-value", "true-icon", "true-value"])], 8, ["disabled", "to"]))], 2)) : L("", !0), e(i).cardField ? (p(), A("div", { key: 2, class: m(e(ze)), style: J(e(G)) }, [$(Qe, R(le(e(U))), { default: x(() => [$(Ze, null, { default: x(() => [se("div", { ref_key: "cardFieldRef", ref: f }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : L("", !0)], 6));
} }), ol = Ee({ __name: "VInlineCustomField", props: fe(je({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Wn }), { modelValue: {}, modelModifiers: {} }), emits: fe([...rn], ["update:modelValue"]), setup(c, { emit: t }) {
  const l = Re(c, "modelValue"), a = Ge(), r = qe(), u = t, y = Ie(Xe, {}), s = Ie(Symbol.for("vuetify:icons")), d = c, n = Me({ ...a, ...d, ...y });
  xe(() => {
    Object.assign(n, { ...a, ...d, ...y });
  });
  const { cancelButtonColor: i, cancelButtonSize: O, cancelButtonTitle: V, cancelButtonVariant: E, cancelIcon: C, cancelIconColor: k, cardField: h, closeSiblings: F, fieldOnly: U, hideCancelIcon: ye, hideSaveIcon: ge, loadingIcon: Se, loadingIconColor: ue, saveButtonColor: Ae, saveButtonSize: Oe, saveButtonTitle: Pe, saveButtonVariant: Ve, saveIcon: me, saveIconColor: ze } = cn(n), be = o(() => d.disabled), K = o(() => d.loading), G = v(!1), z = v(!1), I = v(!1), W = v(null);
  let f = l.value;
  ie(() => K.value, (g, _) => {
    !g && _ && I.value && de();
  });
  const N = o(() => l.value ? (G.value = !1, n.truncateLength ? Sn({ length: n.truncateLength, suffix: n.truncateSuffix, text: l.value }) : l.value) : (G.value = !0, n.emptyText)), b = o(() => ({ ...n, loading: K.value, modelValue: l.value, originalValue: f })), Y = o(() => ({ color: n.color, displayAppendIcon: d.displayAppendIcon, displayAppendIconColor: d.displayAppendIconColor, displayAppendIconSize: d.displayAppendIconSize, displayAppendInnerIcon: d.displayAppendInnerIcon, displayAppendInnerIconColor: d.displayAppendInnerIconColor, displayAppendInnerIconSize: d.displayAppendInnerIconSize, displayPrependIcon: d.displayPrependIcon, displayPrependIconColor: d.displayPrependIconColor, displayPrependIconSize: d.displayPrependIconSize, displayPrependInnerIcon: d.displayPrependInnerIcon, displayPrependInnerIconColor: d.displayPrependInnerIconColor, displayPrependInnerIconSize: d.displayPrependInnerIconSize, displayValue: N.value, empty: G.value, error: z.value, field: "v-text-field", underlineColor: n.underlineColor, underlineStyle: n.underlineStyle, underlineWidth: n.underlineWidth, underlined: n.underlined, valueColor: n.valueColor })), H = o(() => ({ ...en, ...d.cardProps })), Be = o(() => nn({ cell: n.cell && !I.value, density: n.density, disabled: be.value, field: "v-text-field", iconSet: s == null ? void 0 : s.defaultSet, loading: K.value, loadingWait: n.loadingWait, tableField: n.tableField, variant: n.variant })), he = o(() => ln({ cell: n.cell, cellUnderlineFullWidth: n.cellUnderlineFullWidth, density: n.density, field: "v-text-field" })), w = In({ density: n.density, variant: n.variant }), M = o(() => on({ active: I.value, name: "text-field" })), ee = o(() => an({ name: "custom-field", showField: I.value })), Ce = o(() => ({})), Fe = o(() => $e.value);
  function We() {
    z.value = !1, l.value = f, de();
  }
  const $e = v(), ke = v(null), te = v("body");
  function de() {
    var _, ce;
    if (be.value || n.loadingWait && K.value)
      return;
    $e.value = Ye({ cardMinWidth: (_ = n.cardProps) == null ? void 0 : _.minWidth, cardOffsetX: n.cardOffsetX, cardOffsetY: n.cardOffsetY, cardWidth: (ce = n.cardProps) == null ? void 0 : ce.width, field: ke.value });
    const g = dn({ attrs: a, closeSiblings: F.value, fieldOnly: n.fieldOnly, props: d, showField: I, timeOpened: W.value });
    I.value = g.showField, W.value = g.timeOpened, Z !== null && F.value && I.value && !n.fieldOnly && Z.emit(g.timeOpened);
  }
  const Q = v();
  function oe() {
    const g = mn({ required: n.required, rules: n.rules, value: l });
    return z.value = g.errors, Q.value = g.results, g.results;
  }
  function q() {
    z.value ? z.value = !0 : (f = l.value, u("update", l.value), n.loadingWait || de());
  }
  let Z, re;
  function D(g) {
    u("update:closeSiblingFields", W), I.value && W.value !== g && We();
  }
  return ie(() => I.value, () => {
    I.value && oe();
  }), ie(() => l.value, () => {
    I.value && oe();
  }), F.value && import("@vueuse/core").then(({ useEventBus: g }) => {
    Z = g(He), re = Z.on(D);
  }), Je(() => {
    re !== void 0 && Z.off(D);
  }), (g, _) => (p(), A("div", { ref_key: "inlineFieldsContainer", ref: ke, class: m(e(Be)), style: J(e(Ce)) }, [!e(I) && !e(n).fieldOnly || e(h) ? (p(), A("div", { key: 0, class: m(e(he)) }, [se("div", { class: m(e(w)) }, [$(fn, ve(e(Y), { onToggleField: de }), we({ _: 2 }, [_e(e(r), (ce, ae) => ({ name: ae, fn: x((B) => [pe(g.$slots, ae, R(le({ ...B })))]) }))]), 1040)], 2)], 2)) : L("", !0), e(I) || e(n).fieldOnly || e(h) ? (p(), A("div", { key: 1, class: m(["d-flex align-center py-2", e(M)]) }, [(p(), ne(Ke, { disabled: !e(h), to: e(te) }, [pe(g.$slots, "default", R(le(e(b)))), $(tn, { "cancel-button-color": e(i), "cancel-button-size": e(O), "cancel-button-title": e(V), "cancel-button-variant": e(E), "cancel-icon": e(C), "cancel-icon-color": e(k), error: e(z), "field-only": e(U), "hide-cancel-icon": e(ye), "hide-save-icon": e(ge), loading: e(K), "loading-icon": e(Se), "loading-icon-color": e(ue), "save-button-color": e(Ae), "save-button-size": e(Oe), "save-button-title": e(Pe), "save-button-variant": e(Ve), "save-icon": e(me), "save-icon-color": e(ze), onClose: We, onSave: q }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])], 8, ["disabled", "to"]))], 2)) : L("", !0), e(h) ? (p(), A("div", { key: 2, class: m(e(ee)), style: J(e(Fe)) }, [$(Qe, R(le(e(H))), { default: x(() => [$(Ze, null, { default: x(() => [se("div", { ref_key: "cardFieldRef", ref: te }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : L("", !0)], 6));
} }), _n = xn(Ee({ __name: "VInlineSelect", props: fe(je({ clearIcon: {}, clearable: {}, density: {}, hideSelected: {}, itemTitle: {}, itemValue: {}, items: {}, menu: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Nn }), { modelValue: {}, modelModifiers: {} }), emits: fe([...rn], ["update:modelValue"]), setup(c, { emit: t }) {
  const l = Re(c, "modelValue"), a = Ge(), r = qe(), u = t, y = Ie(Xe, {}), s = Ie(Symbol.for("vuetify:icons")), d = c, n = Me({ ...a, ...d, ...y });
  xe(() => {
    Object.assign(n, { ...a, ...d, ...y });
  });
  const { cancelButtonColor: i, cancelButtonSize: O, cancelButtonTitle: V, cancelButtonVariant: E, cancelIcon: C, cancelIconColor: k, cardField: h, closeSiblings: F, color: U, fieldOnly: ye, hideCancelIcon: ge, hideDetails: Se, hideSaveIcon: ue, loadingIcon: Ae, loadingIconColor: Oe, saveButtonColor: Pe, saveButtonSize: Ve, saveButtonTitle: me, saveButtonVariant: ze, saveIcon: be, saveIconColor: K, valueColor: G } = cn(n), z = o(() => d.disabled), I = o(() => d.loading), W = v(!1), f = v(!1), N = v(), b = v(!1), Y = v(null);
  let H = l.value;
  ie(() => I.value, (T, S) => {
    !T && S && b.value && re();
  });
  const Be = o(() => De({ icon: d.clearIcon, iconOptions: s, name: "clear" })), he = o(() => l.value && l.value[n.itemTitle] ? (W.value = !1, l.value[n.itemTitle]) : l.value ? l.value : (W.value = !0, n.emptyText)), w = o(() => pn(n)), M = o(() => ({ color: n.color, displayAppendIcon: n.displayAppendIcon, displayAppendIconColor: n.displayAppendIconColor, displayAppendIconSize: n.displayAppendIconSize, displayAppendInnerIcon: n.displayAppendInnerIcon, displayAppendInnerIconColor: n.displayAppendInnerIconColor, displayAppendInnerIconSize: n.displayAppendInnerIconSize, displayPrependIcon: n.displayPrependIcon, displayPrependIconColor: n.displayPrependIconColor, displayPrependIconSize: n.displayPrependIconSize, displayPrependInnerIcon: n.displayPrependInnerIcon, displayPrependInnerIconColor: n.displayPrependInnerIconColor, displayPrependInnerIconSize: n.displayPrependInnerIconSize, displayValue: he.value, empty: W.value, error: f.value, field: "v-text-field", underlineColor: n.underlineColor, underlineStyle: n.underlineStyle, underlineWidth: n.underlineWidth, underlined: n.underlined, valueColor: G.value })), ee = o(() => ({ ...en, ...d.cardProps }));
  xe(() => {
    N.value = n.items || [];
  });
  const Ce = o(() => nn({ cell: n.cell && !b.value, density: n.density, disabled: z.value, field: "v-select", iconSet: s == null ? void 0 : s.defaultSet, loading: I.value, loadingWait: n.loadingWait, tableField: n.tableField, variant: n.variant })), Fe = o(() => ln({ cell: n.cell, cellUnderlineFullWidth: n.cellUnderlineFullWidth, density: n.density, field: "v-select" })), We = In({ density: n.density, variant: n.variant }), $e = o(() => on({ active: b.value, name: "select" })), ke = o(() => an({ name: "select", showField: b.value })), te = o(() => ({})), de = o(() => oe.value);
  function Q() {
    f.value = !1, l.value = H, re();
  }
  const oe = v(), q = v(null), Z = v("body");
  function re() {
    var S, X;
    if (z.value || n.loadingWait && I.value)
      return;
    oe.value = Ye({ cardMinWidth: (S = n.cardProps) == null ? void 0 : S.minWidth, cardOffsetX: n.cardOffsetX, cardOffsetY: n.cardOffsetY, cardWidth: (X = n.cardProps) == null ? void 0 : X.width, field: q.value });
    const T = dn({ attrs: a, closeSiblings: F.value, fieldOnly: n.fieldOnly, props: d, showField: b, timeOpened: Y.value });
    b.value = T.showField, Y.value = T.timeOpened, ae !== null && F.value && b.value && !n.fieldOnly && ae.emit(T.timeOpened);
  }
  const D = v(), g = o(() => D.value);
  function _() {
    const T = mn({ required: n.required, rules: n.rules, value: l });
    return f.value = T.errors, D.value = T.results, T.results;
  }
  function ce() {
    H = l.value, u("update", l.value), n.loadingWait || re();
  }
  let ae, B;
  function j(T) {
    u("update:closeSiblingFields", Y), b.value && Y.value !== T && Q();
  }
  return ie(() => b.value, () => {
    b.value && _();
  }), ie(() => l.value, () => {
    b.value && _();
  }), F.value && import("@vueuse/core").then(({ useEventBus: T }) => {
    ae = T(He), B = ae.on(j);
  }), Je(() => {
    B !== void 0 && ae.off(j);
  }), (T, S) => (p(), A("div", { ref_key: "inlineFieldsContainer", ref: q, class: m(e(Ce)), style: J(e(te)) }, [!e(b) && !e(n).fieldOnly || e(h) ? (p(), A("div", { key: 0, class: m(e(Fe)) }, [se("div", { class: m(e(We)) }, [$(fn, ve(e(M), { onToggleField: re }), we({ _: 2 }, [_e(e(r), (X, Te) => ({ name: Te, fn: x((Le) => [pe(T.$slots, Te, R(le({ ...Le })), void 0, !0)]) }))]), 1040)], 2)], 2)) : L("", !0), e(b) || e(n).fieldOnly || e(h) ? (p(), A("div", { key: 1, class: m(e($e)) }, [(p(), ne(Ke, { disabled: !e(h), to: e(Z) }, [$(Un, ve(e(w), { modelValue: l.value, "onUpdate:modelValue": S[0] || (S[0] = (X) => l.value = X), autofocus: !e(n).fieldOnly || e(n).autofocus, "clear-icon": e(Be), clearable: e(n).clearable, color: e(U), density: e(n).density, disabled: e(I) || e(z), error: e(f), "error-messages": e(g), "hide-details": e(Se), "hide-selected": e(n).hideSelected, "item-title": e(n).itemTitle, "item-value": e(n).itemValue, items: e(N), label: e(n).label, loading: e(I), menu: e(n).menu && !e(n).fieldOnly && e(b), variant: e(n).variant, width: "100%", onKeyup: yn(Q, ["esc"]) }), we({ _: 2 }, [_e(e(r), (X, Te) => ({ name: Te, fn: x((Le) => [pe(T.$slots, Te, R(le({ ...Le })), void 0, !0)]) })), e(r).append ? void 0 : { name: "append", fn: x(() => [$(tn, { "cancel-button-color": e(i), "cancel-button-size": e(O), "cancel-button-title": e(V), "cancel-button-variant": e(E), "cancel-icon": e(C), "cancel-icon-color": e(k), error: e(f), "field-only": e(ye), "hide-cancel-icon": e(ge), "hide-save-icon": e(ue), loading: e(I), "loading-icon": e(Ae), "loading-icon-color": e(Oe), "save-button-color": e(Pe), "save-button-size": e(Ve), "save-button-title": e(me), "save-button-variant": e(ze), "save-icon": e(be), "save-icon-color": e(K), onClose: Q, onSave: ce }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "clearable", "color", "density", "disabled", "error", "error-messages", "hide-details", "hide-selected", "item-title", "item-value", "items", "label", "loading", "menu", "variant"])], 8, ["disabled", "to"]))], 2)) : L("", !0), e(h) ? (p(), A("div", { key: 2, class: m(e(ke)), style: J(e(de)) }, [$(Qe, R(le(e(ee))), { default: x(() => [$(Ze, null, { default: x(() => [se("div", { ref_key: "cardFieldRef", ref: Z }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : L("", !0)], 6));
} }), [["__scopeId", "data-v-4f65a7ea"]]), al = Object.freeze(Object.defineProperty({ __proto__: null, default: _n }, Symbol.toStringTag, { value: "Module" })), il = { class: "v-selection-control__wrapper" }, tl = Ee({ __name: "VInlineSwitch", props: fe(je({ density: {}, falseIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Jn }), { modelValue: {}, modelModifiers: {} }), emits: fe([...rn], ["update:modelValue"]), setup(c, { emit: t }) {
  const l = Re(c, "modelValue"), a = Ge(), r = qe(), u = t, y = Ie(Xe, {}), s = Cn(), d = c, n = Me({ ...a, ...d, ...y });
  xe(() => {
    Object.assign(n, { ...a, ...d, ...y });
  });
  const { cancelButtonColor: i, cancelButtonSize: O, cancelButtonTitle: V, cancelButtonVariant: E, cancelIcon: C, cancelIconColor: k, cardField: h, closeSiblings: F, color: U, fieldOnly: ye, hideCancelIcon: ge, hideDetails: Se, loadingIcon: ue, loadingIconColor: Ae, saveButtonColor: Oe, saveButtonSize: Pe, saveButtonTitle: Ve, saveButtonVariant: me, saveIcon: ze, saveIconColor: be } = cn(n), K = o(() => d.disabled), G = o(() => d.loading), z = v(!1), I = v(!1), W = v(null), f = o(() => pn(n)), N = o(() => ({ ...en, ...d.cardProps }));
  ie(() => G.value, (D, g) => {
    !D && g && I.value && Q();
  });
  const b = o(() => l.value == n.trueValue), Y = o(() => Tn({ modelValue: l, trueValue: n.trueValue })), H = o(() => nn({ cell: n.cell && !I.value, density: n.density, disabled: K.value, field: "v-switch", loading: G.value, loadingWait: n.loadingWait, tableField: n.tableField })), Be = o(() => ln({ cell: n.cell, cellUnderlineFullWidth: n.cellUnderlineFullWidth, density: n.density, field: "v-switch" })), he = $n({ density: n.density }), w = o(() => on({ active: I.value, name: "switch" })), M = o(() => Fn("switch", n.valueColor, { error: z })), ee = o(() => an({ name: "switch", showField: I.value })), Ce = o(() => ({})), Fe = o(() => gn({ color: n.color, error: z, theme: s, underlineColor: n.underlineColor, underlineStyle: n.underlineStyle, underlineWidth: n.underlineWidth, underlined: n.underlined })), We = o(() => ke.value);
  function $e() {
    z.value = !1, Q();
  }
  const ke = v(), te = v(null), de = v("body");
  function Q() {
    var g, _;
    if (K.value || n.loadingWait && G.value)
      return;
    ke.value = Ye({ cardMinWidth: (g = n.cardProps) == null ? void 0 : g.minWidth, cardOffsetX: n.cardOffsetX, cardOffsetY: n.cardOffsetY, cardWidth: (_ = n.cardProps) == null ? void 0 : _.width, field: te.value });
    const D = dn({ attrs: a, closeSiblings: F.value, fieldOnly: n.fieldOnly, props: d, showField: I.value, timeOpened: W.value });
    I.value = D.showField, W.value = D.timeOpened, q !== null && F.value && I.value && !n.fieldOnly && q.emit(D.timeOpened);
  }
  function oe(D) {
    l.value = D, u("update", D), n.loadingWait || Q();
  }
  let q, Z;
  function re(D) {
    u("update:closeSiblingFields", W), I.value && W.value !== D && Q();
  }
  return F.value && import("@vueuse/core").then(({ useEventBus: D }) => {
    q = D(He), Z = q.on(re);
  }), Je(() => {
    Z !== void 0 && q.off(re);
  }), (D, g) => (p(), A("div", { ref_key: "inlineFieldsContainer", ref: te, class: m(e(H)), style: J(e(Ce)) }, [!e(I) && !e(n).fieldOnly || e(n).cardField ? (p(), A("div", { key: 0, class: m(e(Be)), onClick: g[2] || (g[2] = (_) => e(n).cell ? Q() : void 0) }, [se("div", { class: m(e(he)), onClick: g[1] || (g[1] = (_) => e(n).cell ? void 0 : Q()) }, [se("div", il, [e(n).icons ? (p(), A("div", { key: 0, class: m(["v-inline-fields--boolean-icons-container", e(M)]), style: J(e(Fe)) }, [$(wn, { modelValue: e(Y), "onUpdate:modelValue": g[0] || (g[0] = (_) => zn(Y) ? Y.value = _ : null), "icon-false": e(n).iconFalse, "icon-false-color": e(n).iconFalseColor, "icon-false-title": e(n).iconFalseTitle, "icon-true": e(n).iconTrue, "icon-true-color": e(n).iconTrueColor, "icon-true-title": e(n).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (p(), A("div", { key: 1, class: m(["d-inline-flex align-center justify-center", e(M)]), style: J(e(Fe)) }, hn(e(b)), 7))])], 2)], 2)) : L("", !0), e(I) || e(n).fieldOnly || e(h) ? (p(), A("div", { key: 1, class: m(e(w)) }, [(p(), ne(Ke, { disabled: !e(h), to: e(de) }, [$(Yn, ve(e(f), { color: e(U), density: e(n).density, disabled: e(G) || e(K), error: e(z), "false-icon": e(n).falseIcon, "false-value": e(n).falseValue, "hide-details": e(Se), label: e(n).label, loading: e(G), "model-value": e(Y), "true-value": e(n).trueValue, "onUpdate:modelValue": oe }), we({ _: 2 }, [_e(e(r), (_, ce) => ({ name: ce, fn: x((ae) => [pe(D.$slots, ce, R(le({ ...ae })))]) })), e(r).append ? void 0 : { name: "append", fn: x(() => [$(tn, { "cancel-button-color": e(i), "cancel-button-size": e(O), "cancel-button-title": e(V), "cancel-button-variant": e(E), "cancel-icon": e(C), "cancel-icon-color": e(k), class: "ms-3", error: e(z), "field-only": e(ye), "hide-cancel-icon": e(ge), "hide-save-icon": !0, loading: e(G), "loading-icon": e(ue), "loading-icon-color": e(Ae), "save-button-color": e(Oe), "save-button-size": e(Pe), "save-button-title": e(Ve), "save-button-variant": e(me), "save-icon": e(ze), "save-icon-color": e(be), onClose: $e, onSave: oe }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "loading", "model-value", "true-value"])], 8, ["disabled", "to"]))], 2)) : L("", !0), e(h) ? (p(), A("div", { key: 2, class: m(e(ee)), style: J(e(We)) }, [$(Qe, R(le(e(N))), { default: x(() => [$(Ze, null, { default: x(() => [se("div", { ref_key: "cardFieldRef", ref: de }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : L("", !0)], 6));
} }), dl = Ee({ __name: "VInlineTextField", props: fe(je({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Wn }), { modelValue: {}, modelModifiers: {} }), emits: fe([...rn], ["update:modelValue"]), setup(c, { emit: t }) {
  const l = Re(c, "modelValue"), a = Ge(), r = qe(), u = t, y = Ie(Xe, {}), s = Ie(Symbol.for("vuetify:icons")), d = c, n = Me({ ...a, ...d, ...y });
  xe(() => {
    Object.assign(n, { ...a, ...d, ...y });
  });
  const { cancelButtonColor: i, cancelButtonSize: O, cancelButtonTitle: V, cancelButtonVariant: E, cancelIcon: C, cancelIconColor: k, cardField: h, closeSiblings: F, color: U, fieldOnly: ye, hideCancelIcon: ge, hideDetails: Se, hideSaveIcon: ue, loadingIcon: Ae, loadingIconColor: Oe, saveButtonColor: Pe, saveButtonSize: Ve, saveButtonTitle: me, saveButtonVariant: ze, saveIcon: be, saveIconColor: K } = cn(n), G = o(() => d.disabled), z = o(() => d.loading), I = v(!1), W = v(!1), f = v(!1), N = v(null);
  let b = l.value;
  ie(() => z.value, (B, j) => {
    !B && j && f.value && q();
  });
  const Y = o(() => De({ icon: d.clearIcon, iconOptions: s, name: "clear" })), H = o(() => l.value ? (I.value = !1, n.truncateLength ? Sn({ length: n.truncateLength, suffix: n.truncateSuffix, text: l.value }) : l.value) : (I.value = !0, n.emptyText)), Be = o(() => pn(n)), he = o(() => ({ color: n.color, displayAppendIcon: n.displayAppendIcon, displayAppendIconColor: n.displayAppendIconColor, displayAppendIconSize: n.displayAppendIconSize, displayAppendInnerIcon: n.displayAppendInnerIcon, displayAppendInnerIconColor: n.displayAppendInnerIconColor, displayAppendInnerIconSize: n.displayAppendInnerIconSize, displayPrependIcon: n.displayPrependIcon, displayPrependIconColor: n.displayPrependIconColor, displayPrependIconSize: n.displayPrependIconSize, displayPrependInnerIcon: n.displayPrependInnerIcon, displayPrependInnerIconColor: n.displayPrependInnerIconColor, displayPrependInnerIconSize: n.displayPrependInnerIconSize, displayValue: H.value, empty: I.value, error: W.value, field: "v-text-field", underlineColor: n.underlineColor, underlineStyle: n.underlineStyle, underlineWidth: n.underlineWidth, underlined: n.underlined, valueColor: n.valueColor })), w = o(() => ({ ...en, ...d.cardProps })), M = o(() => nn({ cell: n.cell && !f.value, density: n.density, disabled: G.value, field: "v-text-field", iconSet: s == null ? void 0 : s.defaultSet, loading: z.value, loadingWait: n.loadingWait, tableField: n.tableField, variant: n.variant })), ee = o(() => ln({ cell: n.cell, cellUnderlineFullWidth: n.cellUnderlineFullWidth, density: n.density, field: "v-text-field" })), Ce = In({ density: n.density, variant: n.variant }), Fe = o(() => on({ active: f.value, name: "text-field" })), We = o(() => an({ name: "text-field", showField: f.value })), $e = o(() => ({})), ke = o(() => de.value);
  function te() {
    W.value = !1, l.value = b, q();
  }
  const de = v(), Q = v(null), oe = v("body");
  function q() {
    var j, T;
    if (G.value || n.loadingWait && z.value)
      return;
    de.value = Ye({ cardMinWidth: (j = n.cardProps) == null ? void 0 : j.minWidth, cardOffsetX: n.cardOffsetX, cardOffsetY: n.cardOffsetY, cardWidth: (T = n.cardProps) == null ? void 0 : T.width, field: Q.value });
    const B = dn({ attrs: a, closeSiblings: F.value, fieldOnly: n.fieldOnly, props: d, showField: f, timeOpened: N.value });
    f.value = B.showField, N.value = B.timeOpened, _ !== null && F.value && f.value && !n.fieldOnly && _.emit(B.timeOpened);
  }
  const Z = v(), re = o(() => Z.value);
  function D() {
    const B = mn({ required: n.required, rules: n.rules, value: l });
    return W.value = B.errors, Z.value = B.results, B.results;
  }
  function g() {
    W.value ? W.value = !0 : (b = l.value, u("update", l.value), n.loadingWait || q());
  }
  let _, ce;
  function ae(B) {
    u("update:closeSiblingFields", N), f.value && N.value !== B && te();
  }
  return ie(() => f.value, () => {
    f.value && D();
  }), ie(() => l.value, () => {
    f.value && D();
  }), F.value && import("@vueuse/core").then(({ useEventBus: B }) => {
    _ = B(He), ce = _.on(ae);
  }), Je(() => {
    ce !== void 0 && _.off(ae);
  }), (B, j) => (p(), A("div", { ref_key: "inlineFieldsContainer", ref: Q, class: m(e(M)), style: J(e($e)) }, [!e(f) && !e(n).fieldOnly || e(h) ? (p(), A("div", { key: 0, class: m(e(ee)) }, [se("div", { class: m(e(Ce)) }, [$(fn, ve(e(he), { onToggleField: q }), we({ _: 2 }, [_e(e(r), (T, S) => ({ name: S, fn: x((X) => [pe(B.$slots, S, R(le({ ...X })))]) }))]), 1040)], 2)], 2)) : L("", !0), e(f) || e(n).fieldOnly || e(h) ? (p(), A("div", { key: 1, class: m(e(Fe)) }, [(p(), ne(Ke, { disabled: !e(h), to: e(oe) }, [$(qn, ve(e(Be), { modelValue: l.value, "onUpdate:modelValue": j[0] || (j[0] = (T) => l.value = T), autofocus: !e(n).fieldOnly || e(n).autofocus, "clear-icon": e(Y), color: e(U), density: e(n).density, disabled: e(z) || e(G), error: e(W), "error-messages": e(re), "hide-details": e(Se), label: e(n).label, loading: e(z), variant: e(n).variant, width: "100%", onKeyup: [yn(g, ["enter"]), yn(te, ["esc"])] }), we({ _: 2 }, [_e(e(r), (T, S) => ({ name: S, fn: x((X) => [pe(B.$slots, S, R(le({ ...X })))]) })), e(r).append ? void 0 : { name: "append", fn: x(() => [$(tn, { "cancel-button-color": e(i), "cancel-button-size": e(O), "cancel-button-title": e(V), "cancel-button-variant": e(E), "cancel-icon": e(C), "cancel-icon-color": e(k), error: e(W), "field-only": e(ye), "hide-cancel-icon": e(ge), "hide-save-icon": e(ue), loading: e(z), "loading-icon": e(Ae), "loading-icon-color": e(Oe), "save-button-color": e(Pe), "save-button-size": e(Ve), "save-button-title": e(me), "save-button-variant": e(ze), "save-icon": e(be), "save-icon-color": e(K), onClose: te, onSave: g }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "variant"])], 8, ["disabled", "to"]))], 2)) : L("", !0), e(h) ? (p(), A("div", { key: 2, class: m(e(We)), style: J(e(ke)) }, [$(Qe, R(le(e(w))), { default: x(() => [$(Ze, null, { default: x(() => [se("div", { ref_key: "cardFieldRef", ref: oe }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : L("", !0)], 6));
} }), rl = Ee({ __name: "VInlineTextarea", props: fe(je({ autoGrow: {}, clearIcon: {}, density: {}, rows: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Kn }), { modelValue: {}, modelModifiers: {} }), emits: fe([...rn], ["update:modelValue"]), setup(c, { emit: t }) {
  const l = Re(c, "modelValue"), a = Ge(), r = qe(), u = t, y = Ie(Xe, {}), s = Ie(Symbol.for("vuetify:icons")), d = c, n = Me({ ...a, ...d, ...y });
  xe(() => {
    Object.assign(n, { ...a, ...d, ...y });
  });
  const { cancelButtonColor: i, cancelButtonSize: O, cancelButtonTitle: V, cancelButtonVariant: E, cancelIcon: C, cancelIconColor: k, cardField: h, closeSiblings: F, color: U, fieldOnly: ye, hideCancelIcon: ge, hideDetails: Se, hideSaveIcon: ue, loadingIcon: Ae, loadingIconColor: Oe, saveButtonColor: Pe, saveButtonSize: Ve, saveButtonTitle: me, saveButtonVariant: ze, saveIcon: be, saveIconColor: K } = cn(n), G = o(() => d.disabled), z = o(() => d.loading), I = v(!1), W = v(!1), f = v(!1), N = v(null);
  let b = l.value;
  ie(() => z.value, (B, j) => {
    !B && j && f.value && q();
  });
  const Y = o(() => De({ icon: d.clearIcon, iconOptions: s, name: "clear" })), H = o(() => l.value ? (I.value = !1, n.truncateLength ? Sn({ length: n.truncateLength, suffix: n.truncateSuffix, text: l.value }) : l.value) : (I.value = !0, n.emptyText)), Be = o(() => pn(n)), he = o(() => ({ color: n.color, displayAppendIcon: n.displayAppendIcon, displayAppendIconColor: n.displayAppendIconColor, displayAppendIconSize: n.displayAppendIconSize, displayAppendInnerIcon: n.displayAppendInnerIcon, displayAppendInnerIconColor: n.displayAppendInnerIconColor, displayAppendInnerIconSize: n.displayAppendInnerIconSize, displayPrependIcon: n.displayPrependIcon, displayPrependIconColor: n.displayPrependIconColor, displayPrependIconSize: n.displayPrependIconSize, displayPrependInnerIcon: n.displayPrependInnerIcon, displayPrependInnerIconColor: n.displayPrependInnerIconColor, displayPrependInnerIconSize: n.displayPrependInnerIconSize, displayValue: H.value, empty: I.value, error: W.value, field: "v-text-field", underlineColor: n.underlineColor, underlineStyle: n.underlineStyle, underlineWidth: n.underlineWidth, underlined: n.underlined, valueColor: n.valueColor })), w = o(() => ({ ...en, ...d.cardProps })), M = o(() => nn({ cell: n.cell && !f.value, density: n.density, disabled: G.value, field: "v-textarea", iconSet: s == null ? void 0 : s.defaultSet, loading: z.value, loadingWait: n.loadingWait, tableField: n.tableField, variant: n.variant })), ee = o(() => ln({ cell: n.cell, cellUnderlineFullWidth: n.cellUnderlineFullWidth, density: n.density, field: "v-textarea" })), Ce = In({ density: n.density, variant: n.variant }), Fe = o(() => on({ active: f.value, name: "textarea" })), We = o(() => an({ name: "textarea", showField: f.value })), $e = o(() => ({})), ke = o(() => de.value);
  function te() {
    W.value = !1, l.value = b, q();
  }
  const de = v(), Q = v(null), oe = v("body");
  function q() {
    var j, T;
    if (G.value || n.loadingWait && z.value)
      return;
    de.value = Ye({ cardMinWidth: (j = n.cardProps) == null ? void 0 : j.minWidth, cardOffsetX: n.cardOffsetX, cardOffsetY: n.cardOffsetY, cardWidth: (T = n.cardProps) == null ? void 0 : T.width, field: Q.value });
    const B = dn({ attrs: a, closeSiblings: F.value, fieldOnly: n.fieldOnly, props: d, showField: f, timeOpened: N.value });
    f.value = B.showField, N.value = B.timeOpened, _ !== null && F.value && f.value && !n.fieldOnly && _.emit(B.timeOpened);
  }
  const Z = v(), re = o(() => Z.value);
  function D() {
    const B = mn({ required: n.required, rules: n.rules, value: l });
    return W.value = B.errors, Z.value = B.results, B.results;
  }
  function g() {
    b = l.value, u("update", l.value), n.loadingWait || q();
  }
  let _, ce;
  function ae(B) {
    u("update:closeSiblingFields", N), f.value && N.value !== B && te();
  }
  return ie(() => f.value, () => {
    f.value && D();
  }), ie(() => l.value, () => {
    f.value && D();
  }), F.value && import("@vueuse/core").then(({ useEventBus: B }) => {
    _ = B(He), ce = _.on(ae);
  }), Je(() => {
    ce !== void 0 && _.off(ae);
  }), (B, j) => (p(), A("div", { ref_key: "inlineFieldsContainer", ref: Q, class: m(e(M)), style: J(e($e)) }, [!e(f) && !e(n).fieldOnly || e(h) ? (p(), A("div", { key: 0, class: m(e(ee)) }, [se("div", { class: m(e(Ce)) }, [$(fn, ve(e(he), { onToggleField: q }), we({ _: 2 }, [_e(e(r), (T, S) => ({ name: S, fn: x((X) => [pe(B.$slots, S, R(le({ ...X })))]) }))]), 1040)], 2)], 2)) : L("", !0), e(f) || e(n).fieldOnly || e(h) ? (p(), A("div", { key: 1, class: m(e(Fe)) }, [(p(), ne(Ke, { disabled: !e(h), to: e(oe) }, [$(Rn, ve(e(Be), { modelValue: l.value, "onUpdate:modelValue": j[0] || (j[0] = (T) => l.value = T), "auto-grow": e(n).autoGrow, autofocus: !e(n).fieldOnly || e(n).autofocus, "clear-icon": e(Y), color: e(U), density: e(n).density, disabled: e(z) || e(G), error: e(W), "error-messages": e(re), "hide-details": e(Se), label: e(n).label, loading: e(z), rows: e(n).rows, variant: e(n).variant, width: "100%", onKeyup: yn(te, ["esc"]) }), we({ _: 2 }, [_e(e(r), (T, S) => ({ name: S, fn: x((X) => [pe(B.$slots, S, R(le({ ...X })))]) })), e(r).append ? void 0 : { name: "append", fn: x(() => [$(tn, { "cancel-button-color": e(i), "cancel-button-size": e(O), "cancel-button-title": e(V), "cancel-button-variant": e(E), "cancel-icon": e(C), "cancel-icon-color": e(k), error: e(W), "field-only": e(ye), "hide-cancel-icon": e(ge), "hide-save-icon": e(ue), loading: e(z), "loading-icon": e(Ae), "loading-icon-color": e(Oe), "save-button-color": e(Pe), "save-button-size": e(Ve), "save-button-title": e(me), "save-button-variant": e(ze), "save-icon": e(be), "save-icon-color": e(K), onClose: te, onSave: g }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "auto-grow", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "rows", "variant"])], 8, ["disabled", "to"]))], 2)) : L("", !0), e(h) ? (p(), A("div", { key: 2, class: m(e(We)), style: J(e(ke)) }, [$(Qe, R(le(e(w))), { default: x(() => [$(Ze, null, { default: x(() => [se("div", { ref_key: "cardFieldRef", ref: oe }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : L("", !0)], 6));
} }), Fl = Object.freeze(Object.defineProperty({ __proto__: null, VInlineAutocomplete: Dn, VInlineCheckbox: ll, VInlineCustomField: ol, VInlineSelect: _n, VInlineSwitch: tl, VInlineTextField: dl, VInlineTextarea: rl }, Symbol.toStringTag, { value: "Module" })), Xe = Symbol();
function gl(c = {}) {
  return { install: (t) => {
    t.provide(Xe, c), t.component("VInlineAutocomplete", Ne(() => Promise.resolve().then(() => el))), t.component("VInlineCheckbox", Ne(() => import("./VInlineCheckbox-TL4Su7Ra.mjs"))), t.component("VInlineCustomField", Ne(() => import("./VInlineCustomField-CT84rJdq.mjs"))), t.component("VInlineSelect", Ne(() => Promise.resolve().then(() => al))), t.component("VInlineSwitch", Ne(() => import("./VInlineSwitch-DShwG3lk.mjs"))), t.component("VInlineTextarea", Ne(() => import("./VInlineTextarea-mYny90Jz.mjs"))), t.component("VInlineTextField", Ne(() => import("./VInlineTextField-BVWV3l8H.mjs")));
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
  Xe as globalOptions
};
(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode(":root{--v-inline-fields-top-padding-compact: 13px;--v-inline-fields-top-padding-comfortable: 17px;--v-inline-fields-top-padding-default: 21px;--v-inline-fields-input-height: 24px;--v-inline-fields-density-compact-height: 32px;--v-inline-fields-density-comfortable-height: 40px;--v-inline-fields-grey: #909090}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append{padding-top:0!important}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append .v-icon{font-size:1rem!important}.v-inline-fields{position:relative}.v-inline-fields--display-container *{align-items:center;display:flex}.v-inline-fields--display-container-cell{cursor:pointer;display:block;max-height:unset!important}.v-inline-fields--display-container-cell>div{width:100%}.v-inline-fields--display-container-cell-underline-full-width .v-inline-fields--display-value{width:100%}.v-inline-fields--display-container-cell .v-inline-fields--selection-control .v-inline-fields--display-value{justify-content:center}.v-inline-fields--display-container-cell,.v-inline-fields--display-container-cell .v-input,.v-inline-fields--display-container-cell .v-inline-fields--display-wrapper,.v-inline-fields--display-container-cell .v-selection-control__wrapper{height:100%!important;width:100%}.v-inline-fields--display-value{cursor:pointer;letter-spacing:.009375em!important}.v-inline-fields--display-value-empty{color:var(--v-inline-fields-grey);font-style:italic}.v-inline-fields--display-value-checkbox,.v-inline-fields--display-value-switch{padding-bottom:2px;padding-top:6px}.v-inline-fields--display-append-icon,.v-inline-fields--display-prepend-icon,.v-inline-fields--display-append-inner-icon,.v-inline-fields--display-prepend-inner-icon{align-items:flex-end;display:inline-flex}.v-inline-fields--container-cell{height:100%;width:100%}.v-inline-fields--container-disabled .v-inline-fields--display-value{cursor:default!important;opacity:var(--v-disabled-opacity)}.v-inline-fields--container-loading .v-inline-fields--display-value{cursor:wait!important}.v-inline-fields--container-icon-set-fa .v-field__clearable{font-size:.8rem}.v-inline-fields--container-icon-set-fa .v-field__append-inner{align-items:flex-end;padding-bottom:0!important}.v-inline-fields--container-v-select-compact-plain .v-input,.v-inline-fields--container-v-select-compact-underlined .v-input,.v-inline-fields--container-v-text-field-compact-plain .v-input,.v-inline-fields--container-v-text-field-compact-underlined .v-input{height:var(--v-inline-fields-density-compact-height);max-height:var(--v-inline-fields-density-compact-height)}.v-inline-fields--container-v-select-compact-plain .v-input__control,.v-inline-fields--container-v-select-compact-underlined .v-input__control,.v-inline-fields--container-v-text-field-compact-plain .v-input__control,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control{padding-bottom:4px}.v-inline-fields--container-v-select-compact-plain .v-input>div,.v-inline-fields--container-v-select-compact-underlined .v-input>div,.v-inline-fields--container-v-text-field-compact-plain .v-input>div,.v-inline-fields--container-v-text-field-compact-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input input{padding-bottom:10px}.v-inline-fields--container-v-select-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-compact-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-select__selection{align-items:center;padding-bottom:10px}.v-inline-fields--container-v-select-comfortable-plain .v-input,.v-inline-fields--container-v-select-comfortable-underlined .v-input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input{height:var(--v-inline-fields-density-comfortable-height);max-height:var(--v-inline-fields-density-comfortable-height)}.v-inline-fields--container-v-select-comfortable-plain .v-input__control,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control{padding-bottom:8px}.v-inline-fields--container-v-select-comfortable-plain .v-input>div,.v-inline-fields--container-v-select-comfortable-underlined .v-input>div,.v-inline-fields--container-v-text-field-comfortable-plain .v-input>div,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input input{padding-bottom:6px}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-select__selection{align-items:center;padding-bottom:6px}.v-inline-fields--container-v-select-compact-plain .v-field__append-inner,.v-inline-fields--container-v-select-compact-underlined .v-field__append-inner{padding-top:4px!important}.v-inline-fields--container-v-select-comfortable-plain .v-field__append-inner,.v-inline-fields--container-v-select-comfortable-underlined .v-field__append-inner{padding-top:8px!important}.v-inline-fields--container-v-textarea .v-inline-fields--save-fields-container{align-items:flex-end}.v-inline-fields--container-v-select,.v-inline-fields--container-v-textarea,.v-inline-fields--container-v-text-field{width:100%}.v-inline-fields--container-v-checkbox .v-input,.v-inline-fields--container-v-switch .v-input{align-items:center;display:flex;padding-bottom:0}.v-inline-fields--container-v-checkbox .v-input__append,.v-inline-fields--container-v-switch .v-input__append{margin-inline-start:0!important;margin-left:0;padding-bottom:0!important}.v-inline-fields--container-v-checkbox .v-selection-control,.v-inline-fields--container-v-switch .v-selection-control{min-height:unset}.v-inline-fields--container-v-checkbox .v-inline-fields--save-fields-container,.v-inline-fields--container-v-switch .v-inline-fields--save-fields-container{align-items:center!important}.v-inline-fields--container .v-input__append,.v-inline-fields--container .v-input__prepend,.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-top:0!important}.v-inline-fields--container .v-input__append .v-icon,.v-inline-fields--container .v-input__prepend .v-icon,.v-inline-fields--container .v-field__append-inner .v-icon,.v-inline-fields--container .v-field__prepend-inner .v-icon{font-size:1rem!important}.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-compact .v-input__append,.v-inline-fields--container-compact .v-input__prepend,.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-comfortable .v-input__append,.v-inline-fields--container-comfortable .v-input__prepend,.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{padding-bottom:6px!important}.v-inline-fields--container-default .v-input__append,.v-inline-fields--container-default .v-input__prepend,.v-inline-fields--container-default .v-field__append-inner,.v-inline-fields--container-default .v-field__prepend-inner{align-items:flex-end!important;padding-bottom:0!important}.v-inline-fields--container-default .v-input__append .v-icon,.v-inline-fields--container-default .v-input__prepend .v-icon,.v-inline-fields--container-default .v-field__append-inner .v-icon,.v-inline-fields--container-default .v-field__prepend-inner .v-icon{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)!important}.v-inline-fields--container-default .v-inline-fields--save-fields-container{align-items:flex-end!important}.v-inline-fields--card-container{height:fit-content;min-width:fit-content!important;position:absolute}.v-inline-fields--card-container .v-card{border:1px solid hsla(0,0%,50%,.5)}.v-inline-fields--card-container .v-card .v-card-text{padding:5px 10px}.v-inline-fields--card-container .v-card .v-card-text>div{align-items:center;display:flex}.v-inline-fields--card-container-checkbox .v-card .v-card-text .v-input__append{margin-inline-start:0}.v-inline-fields--save-fields-container{align-items:center;display:flex;height:100%;margin-left:.1rem}.v-inline-fields--boolean-icons{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-inline-fields .truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:250px}.v-inline-fields .v-input__append{padding-top:0}[data-v-7c790517] .v-field__field,[data-v-4f65a7ea] .v-field__field{align-items:flex-end!important}")),document.head.appendChild(i)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
