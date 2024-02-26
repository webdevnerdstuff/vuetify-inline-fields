import { unref as e, defineComponent as Ee, useAttrs as Me, useSlots as qe, reactive as Le, watchEffect as $e, computed as o, openBlock as p, createElementBlock as S, normalizeClass as b, normalizeStyle as K, renderSlot as pe, normalizeProps as U, mergeProps as ve, createBlock as oe, createCommentVNode as M, createElementVNode as ce, createTextVNode as Dn, toDisplayString as bn, inject as Ie, withCtx as $, mergeModels as fe, mergeDefaults as je, useModel as Re, toRefs as rn, ref as v, watch as ie, onUnmounted as Ne, createVNode as T, createSlots as we, renderList as _e, guardReactiveProps as ae, Teleport as He, withKeys as vn, isRef as zn } from "vue";
import { useTheme as Bn } from "vuetify";
import { VIcon as Ge } from "vuetify/lib/components/VIcon/index.mjs";
import { VBtn as gn } from "vuetify/lib/components/VBtn/index.mjs";
import { VAutocomplete as wn } from "vuetify/lib/components/VAutocomplete/index.mjs";
import { VCard as Je, VCardText as Ke } from "vuetify/lib/components/VCard/index.mjs";
import { VIcon as Sn } from "vuetify/components";
import { useWindowSize as _n } from "@vueuse/core";
import { VCheckbox as En } from "vuetify/lib/components/VCheckbox/index.mjs";
import { VSelect as Ln } from "vuetify/lib/components/VSelect/index.mjs";
import { VSwitch as Mn } from "vuetify/lib/components/VSwitch/index.mjs";
import { VTextField as Gn } from "vuetify/lib/components/VTextField/index.mjs";
import { VTextarea as Yn } from "vuetify/lib/components/VTextarea/index.mjs";
/**
 * @name @wdns/vuetify-inline-fields
 * @version 1.0.6
 * @description Vuetify Inline Fields Component Library offers a comprehensive collection of reusable UI components to create elegant and efficient inline form fields within your applications.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2024, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-inline-fields/
 * @repository https://github.com/webdevnerdstuff/vuetify-inline-fields
 * @license MIT License
 */
const Qe = Symbol("identifier"), Ze = { elevation: 5, variant: "flat" }, cn = { cancelButtonColor: "default", cancelButtonSize: "x-small", cancelButtonTitle: "Cancel", cancelButtonVariant: "text", cancelIcon: void 0, cancelIconColor: "default", cardField: !1, cardOffsetX: 0, cardOffsetY: 0, cardProps: () => ({}), cell: !1, cellUnderlineFullWidth: !0, closeSiblings: !1, color: "primary", density: "compact", disabled: !1, displayAppendIcon: void 0, displayAppendIconColor: void 0, displayAppendIconSize: "x-small", displayAppendInnerIcon: void 0, displayAppendInnerIconColor: void 0, displayAppendInnerIconSize: "x-small", displayPrependIcon: void 0, displayPrependIconColor: void 0, displayPrependIconSize: "x-small", displayPrependInnerIcon: void 0, displayPrependInnerIconColor: void 0, displayPrependInnerIconSize: "x-small", emptyText: "empty", error: !1, fieldOnly: !1, hideCancelIcon: !1, hideDetails: !0, label: "", loading: !1, loadingWait: !0, name: "", required: !1, tableField: !0, underlineColor: "primary", underlineStyle: "dotted", underlineWidth: "2px", underlined: !0, valueColor: "default" }, mn = { autofocus: !0 }, sn = { hideCancelIcon: !1, hideSaveIcon: !1, loadingIcon: void 0, loadingIconColor: "primary", saveButtonColor: "primary", saveButtonSize: "x-small", saveButtonTitle: "Save", saveButtonVariant: "text", saveIcon: void 0, saveIconColor: "primary" }, Vn = { falseValue: !1, iconFalse: void 0, iconFalseColor: "danger", iconFalseTitle: "No", iconTrue: void 0, iconTrueColor: "success", iconTrueTitle: "Yes", icons: !0, trueValue: !0 }, qn = { ...cn, ...Vn, ...sn, falseIcon: void 0, icons: !0, trueIcon: void 0 }, Rn = { ...cn, ...mn, ...sn, clearIcon: "$clear", clearable: !1, hideSelected: !0, itemTitle: "title", itemValue: "value", items: () => [], menu: !0, rules: () => [], variant: "underlined" }, Un = { ...cn, ...mn, ...sn, autoSelectFirst: !1, clearIcon: "$clear", clearable: !1, hideSelected: !0, itemTitle: "title", itemValue: "value", items: () => [], menu: !0, menuIcon: "$dropdown", rules: () => [], variant: "underlined" }, Xn = { ...cn, ...Vn, ...sn, icons: !0, falseIcon: "" }, jn = { ...mn, ...sn, ...cn, autoGrow: !0, clearIcon: "$clear", rows: 1, truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, kn = { ...cn, ...mn, ...sn, clearIcon: "$clear", truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, O = "v-inline-fields", en = (c) => {
  const { cell: t = !1, field: l = "", density: a = "", disabled: r = !1, iconSet: u = "mdi", loading: y = !1, loadingWait: s, tableField: d = !1, variant: n } = c, i = a && n;
  return { [`${O}`]: !0, [`${O}--container`]: !0, [`${O}--container-cell`]: t, [`${O}--container-disabled`]: e(r), [`${O}--container-table`]: d, [`${O}--container-icon-set-${u}`]: !0, [`${O}--container-loading`]: y && s, [`${O}--container-${l}`]: !0, [`${O}--container-${l}-${a}`]: !0, [`${O}--container-${l}-${a}-${n}`]: i, [`${O}--container-${l}-${n}`]: n, [`${O}--container-${l}-${n}-${a}`]: i, [`${O}--container-${a}`]: a, [`${O}--container-${a}-${l}`]: a, [`${O}--container-${a}-${n}`]: i, [`${O}--container-${n}`]: n, [`${O}--container-${n}-${a}`]: i, [`${O}--container-${n}-${l}`]: n };
}, nn = (c) => {
  const { cell: t = !1, cellUnderlineFullWidth: l = !0, field: a = "", density: r = "" } = c;
  return { [`${O}--display-container-cell`]: t, [`${O}--display-container-cell-underline-full-width`]: t && l, [`${O}--display-container`]: !0, [`${O}--display-wrapper-value`]: !0, [`${a}`]: !0, "v-input": !0, [`v-input--density-${r}`]: !0, "v-input--horizontal": !0 };
}, yn = (c) => {
  const { density: t = "", variant: l = "" } = c;
  return { "v-input": !0, "v-input--dirty": !0, "v-input--horizontal": !0, "v-text-field": !0, [`v-input--density-${t}`]: !0, [`v-text-field--plain-${l}`]: !0 };
}, Wn = (c) => {
  const { density: t = "" } = c;
  return { [`${O}--selection-control`]: !0, [`v-selection-control--density-${t}`]: !0 };
}, Cn = (c, t, l) => {
  const { error: a = !1, empty: r = !1 } = l;
  return { [`${O}`]: !0, [`${O}--display-value-${c}`]: !0, [`${O}--display-value`]: !0, [`${O}--display-value-empty`]: e(r), [`text-${t}`]: !e(a), "text-danger": e(a) };
}, ln = (c) => {
  const { name: t, active: l = !1 } = c;
  return { [`${O}`]: !0, [`${O}--field`]: !0, [`${O}--field-${t}`]: !0, [`${O}--field-active`]: l };
}, on = (c) => {
  const { name: t, showField: l } = c;
  return { [`${O}--card-container`]: !0, [`${O}--card-container-${t}`]: !0, "d-none": !l };
};
function An(c) {
  if (!c)
    return 100;
  if (c.toString().includes(".")) {
    const t = 100 * Number(c);
    return t >= 100 ? 100 : t;
  }
  return Number(c) >= 100 ? 100 : Number(c);
}
function Pn(c) {
  let t = function(A) {
    const z = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let _ = A;
    return Object.entries(z).forEach(([F, k]) => {
      A.toLowerCase() != F.toLowerCase() || (_ = k);
    }), _;
  }(c), l = 0, a = 0, r = 0, u = 100, y = 0, s = 0, d = 0;
  if (t.substring(0, 1) === "#")
    t = function(A) {
      let z = A.replace("#", "");
      z.length === 3 && (z = z.split("").map((g) => g + g).join(""));
      const _ = parseInt(z.substring(0, 2), 16), F = parseInt(z.substring(2, 4), 16), k = parseInt(z.substring(4, 6), 16);
      return [_, F, k, 100];
    }(t);
  else if (t.includes("rgb"))
    t = [...t.matchAll(/[\d+.\d+]+/g)].map(Number);
  else if (t.includes("hsl"))
    return t = [...t.matchAll(/[\d+.\d+]+/g)].map(String), l = t[0], a = t[1], r = t[2], u = An(t[3]), `${l} ${a}% ${r}% / ${u}%`;
  [y, s, d, u] = t, y /= 255, s /= 255, d /= 255, u = An(u);
  const n = Math.max(y, s, d), i = Math.min(y, s, d);
  if (n === null || !i === null || isNaN(n) || isNaN(i)) {
    const A = "0 0% 100% / 12%";
    return console.warn(`[VuetifyInlineFields]: The "color" prop value using "${t}" doesn't exist. Using the value "hsl(${A})" in it's place.`), A;
  }
  if (l = (n + i) / 2, a = (n + i) / 2, r = (n + i) / 2, n == i)
    l = a = 0;
  else {
    const A = n - i;
    switch (a = r > 0.5 ? A / (2 - n - i) : A / (n + i), n) {
      case y:
        l = (s - d) / A + (s < d ? 6 : 0);
        break;
      case s:
        l = (d - y) / A + 2;
        break;
      case d:
        l = (y - s) / A + 4;
    }
    l /= 6;
  }
  return l = Math.round(360 * l), a = Math.round(100 * a), r = Math.round(100 * r), `${l} ${a}% ${r}% / ${u}%`;
}
const Nn = (c, t) => {
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
  return l ? `hsl(${Pn(l[1])})` : `hsl(${Pn(c)})`;
}, pn = (c) => {
  const { str: t, unit: l = "px" } = c;
  if (t != null && t !== "")
    return +t ? `${Number(t)}${l}` : String(t);
}, Tn = (c) => {
  var r;
  const { modelValue: t, trueValue: l } = c, a = e(t);
  return ((r = a == null ? void 0 : a.toLowerCase) == null ? void 0 : r.call(a)) === "true" || a === "1" || a == "1" || a === !0 || a == l || a === l;
}, hn = (c) => {
  const { underlineStyle: t, underlineWidth: l, color: a, error: r, theme: u, underlined: y } = c;
  let { underlineColor: s } = c;
  s = s || a;
  const d = { "border-bottom-color": Nn(s, u), "border-bottom-style": t, "border-bottom-width": l };
  return e(r) && (d["border-bottom-color"] = "rgb(var(--v-theme-danger))"), y || (d["border-bottom"] = "none"), d;
}, Ye = (c) => {
  const { cardMinWidth: t, cardOffsetX: l, cardOffsetY: a, cardWidth: r, field: u, name: y = "" } = c, s = ((i) => {
    const { cardOffsetX: A, cardOffsetY: z, field: _ } = i;
    if (!_)
      return { bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0, x: 0, y: 0 };
    const { x: F, y: k } = _.getBoundingClientRect(), { width: h, height: g } = _.getBoundingClientRect(), { right: Y, bottom: ye } = _.getBoundingClientRect();
    return { bottom: pn({ str: ye + Number(z) }), height: g, left: pn({ str: 0 + Number(A) }), right: pn({ str: Y + Number(A) }), top: pn({ str: 2 + Number(z) }), width: pn({ str: h }), x: F, y: k };
  })({ cardOffsetX: l, cardOffsetY: a, field: u });
  let d = t, n = r;
  return n || (n = y === "checkbox" ? "fit-content" : s.width), d || (d = y === "checkbox" ? "fit-content" : s.width), { left: s.left, top: s.top, width: n, zIndex: 10 };
}, In = Ee({ __name: "DisplayedValue", props: { color: {}, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayValue: {}, empty: { type: [Object, Boolean] }, error: { type: Boolean }, field: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, emits: ["toggleField"], setup(c, { emit: t }) {
  const l = Me(), a = t, r = c, u = qe(), y = Bn(), s = Le({ ...l, ...r });
  $e(() => {
    Object.assign(s, { ...l, ...r });
  });
  const d = { displayValue: r.displayValue, empty: r.empty, error: r.error }, n = o(() => Cn(r.field, r.valueColor, { empty: r.empty, error: r.error })), i = o(() => hn({ color: r.color, error: r.error, theme: y, underlineColor: r.underlineColor, underlineStyle: r.underlineStyle, underlineWidth: r.underlineWidth, underlined: r.underlined })), A = o(() => ((F) => {
    const { underlineWidth: k } = F;
    return { borderBottom: `${k || "0px"} solid transparent` };
  })({ underlineWidth: r.underlineWidth })), z = (F, k = !1) => ((h) => {
    const { inner: g = !1, position: Y } = h;
    return { [`${O}--display-icon`]: !g, [`${O}--display-${Y}-icon`]: !g, [`${O}--display-${Y}-inner-icon`]: g, "me-1": Y === "prepend", "ms-1": Y === "append" };
  })({ inner: k, position: F });
  function _() {
    a("toggleField");
  }
  return (F, k) => (p(), S("div", { class: "v-inline-fields--display-wrapper", onClick: _ }, [F.displayPrependIcon || e(u)["display.prepend"] ? (p(), S("div", { key: 0, class: b(z("prepend")), style: K(e(A)) }, [e(u)["display.prepend"] ? pe(F.$slots, "display.prepend", U(ve({ key: 0 }, d))) : (p(), oe(Ge, { key: 1, color: e(s).displayPrependIconColor, icon: e(s).displayPrependIcon, size: e(s).displayPrependIconSize }, null, 8, ["color", "icon", "size"]))], 6)) : M("", !0), ce("div", { class: b(["d-inline-flex", e(n)]), style: K(e(i)) }, [F.displayPrependInnerIcon || e(u)["display.prependInner"] ? (p(), S("div", { key: 0, class: b(z("prepend", !0)) }, [e(u)["display.prependInner"] ? pe(F.$slots, "display.prependInner", U(ve({ key: 0 }, d))) : (p(), oe(Ge, { key: 1, color: e(s).displayPrependInnerIconColor, icon: e(s).displayPrependInnerIcon, size: e(s).displayPrependInnerIconSize }, null, 8, ["color", "icon", "size"]))], 2)) : M("", !0), Dn(" " + bn(F.displayValue) + " ", 1), F.displayAppendInnerIcon || e(u)["display.appendInner"] ? (p(), S("div", { key: 1, class: b(z("append", !0)) }, [e(u)["display.appendInner"] ? pe(F.$slots, "display.appendInner", U(ve({ key: 0 }, d))) : (p(), oe(Ge, { key: 1, color: e(s).displayAppendInnerIconColor, icon: e(s).displayAppendInnerIcon, size: e(s).displayAppendInnerIconSize }, null, 8, ["color", "icon", "size"]))], 2)) : M("", !0)], 6), F.displayAppendIcon || e(u)["display.append"] ? (p(), S("div", { key: 1, class: b(z("append")), style: K(e(A)) }, [e(u)["display.append"] ? pe(F.$slots, "display.append", U(ve({ key: 0 }, d))) : (p(), oe(Ge, { key: 1, color: e(s).displayAppendIconColor, icon: e(s).displayAppendIcon, size: e(s).displayAppendIconSize }, null, 8, ["color", "icon", "size"]))], 6)) : M("", !0)]));
} }), Hn = { fa: { checkboxFalse: "$checkboxOff", checkboxTrue: "far fa-square-check", clear: "$clear", false: "$close", loading: "fa-circle-notch", save: "fa-floppy-disk", true: "$complete" }, mdi: { checkboxFalse: "$checkboxOff", checkboxTrue: "mdi:mdi-checkbox-outline", clear: "$clear", false: "$close", loading: "mdi-loading", save: "mdi-content-save", true: "$complete" } }, De = (c) => {
  const { icon: t, iconOptions: l, name: a } = c;
  if (t)
    return t;
  const r = Hn[l == null ? void 0 : l.defaultSet];
  if (!r)
    throw new Error(`[VInlineFields]: No default ${l == null ? void 0 : l.defaultSet} icon set found.`);
  const u = r[a];
  if (!u)
    throw new Error(`[VInlineFields]: No ${a} icon found.`);
  return u;
}, an = Ee({ __name: "SaveFieldButtons", props: { loading: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonVariant: {}, cancelButtonTitle: {}, cancelIconColor: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideSaveIcon: { type: Boolean }, cancelIcon: {}, loadingIcon: {}, loadingIconColor: {}, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIconColor: {}, saveIcon: {} }, emits: ["close", "save"], setup(c, { emit: t }) {
  const l = Me(), a = t, r = c, u = Ie(Symbol.for("vuetify:icons")), y = o(() => r.error), s = o(() => ({ [`${O}--save-fields-container`]: !0 })), d = o(() => r.loading), n = Le({ ...l, ...r });
  $e(() => {
    Object.assign(n, { ...l, ...r });
  });
  const i = o(() => (u == null ? void 0 : u.defaultSet) === "fa" ? "fa-spin" : (u == null ? void 0 : u.defaultSet) === "mdi" ? "mdi-spin" : ""), A = o(() => ((g) => {
    const { cancelButtonVariant: Y } = g;
    return { "me-1": Y === "elevated", "ms-1": !0 };
  })({ cancelButtonVariant: n.cancelButtonVariant })), z = o(() => De({ icon: r.cancelIcon, iconOptions: u, name: "false" })), _ = o(() => De({ icon: r.loadingIcon, iconOptions: u, name: "loading" })), F = o(() => De({ icon: r.saveIcon, iconOptions: u, name: "save" }));
  function k() {
    a("close");
  }
  function h() {
    a("save");
  }
  return (g, Y) => (p(), S("div", ve({ class: e(s) }, g.$attrs), [e(n).hideSaveIcon ? M("", !0) : (p(), oe(gn, { key: 0, class: "ms-1", color: e(n).saveButtonColor, disabled: e(y), icon: "", size: e(n).saveButtonSize, title: e(d) ? "Loading" : e(n).saveButtonTitle, variant: e(n).saveButtonVariant, onClick: h }, { default: $(() => [e(d) ? (p(), oe(Ge, { key: 1, class: b(e(i)), color: e(n).loadingIconColor, icon: e(_) }, null, 8, ["class", "color", "icon"])) : (p(), oe(Ge, { key: 0, color: e(y) ? "error" : e(n).saveIconColor, icon: e(F) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["color", "disabled", "size", "title", "variant"])), e(n).hideCancelIcon ? M("", !0) : (p(), oe(gn, { key: 1, class: b(e(A)), color: e(n).cancelButtonColor, icon: "", size: e(n).cancelButtonSize, title: e(n).cancelButtonTitle, variant: e(n).cancelButtonVariant, onClick: k }, { default: $(() => [e(n).hideSaveIcon && e(d) ? (p(), oe(Ge, { key: 0, class: b(e(i)), color: e(n).loadingIconColor, icon: e(_) }, null, 8, ["class", "color", "icon"])) : (p(), oe(Ge, { key: 1, class: "text-default", color: e(n).cancelIconColor, icon: e(z) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["class", "color", "size", "title", "variant"]))], 16));
} }), fn = (c) => {
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
}, tn = (c) => {
  const { attrs: t, closeSiblings: l, fieldOnly: a, props: r, showField: u, timeOpened: y } = c;
  let s = y;
  return l && !a && (s = /* @__PURE__ */ new Date()), { settings: { ...t, ...r }, showField: !e(u), timeOpened: s };
}, Fn = (c) => {
  const { length: t = 0 } = c;
  let { suffix: l, text: a } = c;
  return a = a.toString(), l = l || "...", a.length > t ? `${a.substring(0, t)}${l}` : a;
}, dn = ["error", "update", "update:closeSiblingFields", "update:model-value"], Jn = ["cancelButtonColor", "cancelButtonSize", "cancelButtonTitle", "cancelButtonVariant", "cancelIcon", "cancelIconColor", "closeSiblings", "displayAppendIcon", "displayAppendIconColor", "displayAppendIconSize", "displayAppendInnerIcon", "displayAppendInnerIconColor", "displayAppendInnerIconSize", "displayPrependIcon", "displayPrependIconColor", "displayPrependIconSize", "displayPrependInnerIcon", "displayPrependInnerIconColor", "displayPrependInnerIconSize", "emptyText", "fieldOnly", "hideSaveIcon", "loadingIcon", "loadingIconColor", "loadingWait", "saveButtonColor", "saveButtonSize", "saveButtonTitle", "saveButtonVariant", "saveIcon", "saveIconColor", "tableField", "truncateLength", "truncateSuffix", "underlineColor", "underlineStyle", "underlineWidth", "underlined", "valueColor"], un = (c) => {
  let t = c;
  return t = Object.entries(t).filter(([l]) => !Jn.includes(l)), Object.fromEntries(t);
}, $n = (c, t) => {
  const l = c.__vccOpts || c;
  for (const [a, r] of t)
    l[a] = r;
  return l;
}, Kn = $n(Ee({ __name: "VInlineAutocomplete", props: fe(je({ autoSelectFirst: {}, clearIcon: {}, clearable: {}, density: {}, hideSelected: {}, itemTitle: {}, itemValue: {}, items: {}, menu: {}, menuIcon: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Un }), { modelValue: {}, modelModifiers: {} }), emits: fe([...dn], ["update:modelValue"]), setup(c, { emit: t }) {
  const l = Re(c, "modelValue"), a = Me(), r = qe(), u = t, y = Ie(Ue, {}), s = Ie(Symbol.for("vuetify:icons")), d = c, n = Le({ ...a, ...d, ...y });
  $e(() => {
    Object.assign(n, { ...a, ...d, ...y });
  });
  const { cancelButtonColor: i, cancelButtonSize: A, cancelButtonTitle: z, cancelButtonVariant: _, cancelIcon: F, cancelIconColor: k, cardField: h, closeSiblings: g, color: Y, fieldOnly: ye, hideCancelIcon: ge, hideDetails: Se, hideSaveIcon: se, loadingIcon: Ae, loadingIconColor: Pe, saveButtonColor: Oe, saveButtonSize: ze, saveButtonTitle: me, saveButtonVariant: Ve, saveIcon: be, saveIconColor: Q, valueColor: G } = rn(n), V = o(() => d.disabled), I = o(() => d.loading), W = v(!1), f = v(!1), N = v(), B = v(!1), q = v(null);
  let ee = l.value;
  ie(() => I.value, (m, L) => {
    !m && L && B.value && le();
  });
  const Be = o(() => De({ icon: d.clearIcon, iconOptions: s, name: "clear" })), Ce = o(() => l.value && l.value[n.itemTitle] ? (W.value = !1, l.value[n.itemTitle]) : l.value ? l.value : (W.value = !0, n.emptyText)), D = o(() => un(n)), E = o(() => ({ color: n.color, displayAppendIcon: n.displayAppendIcon, displayAppendIconColor: n.displayAppendIconColor, displayAppendIconSize: n.displayAppendIconSize, displayAppendInnerIcon: n.displayAppendInnerIcon, displayAppendInnerIconColor: n.displayAppendInnerIconColor, displayAppendInnerIconSize: n.displayAppendInnerIconSize, displayPrependIcon: n.displayPrependIcon, displayPrependIconColor: n.displayPrependIconColor, displayPrependIconSize: n.displayPrependIconSize, displayPrependInnerIcon: n.displayPrependInnerIcon, displayPrependInnerIconColor: n.displayPrependInnerIconColor, displayPrependInnerIconSize: n.displayPrependInnerIconSize, displayValue: Ce.value, empty: W.value, error: f.value, field: "v-text-field", underlineColor: n.underlineColor, underlineStyle: n.underlineStyle, underlineWidth: n.underlineWidth, underlined: n.underlined, valueColor: G.value })), ne = o(() => ({ ...Ze, ...d.cardProps }));
  $e(() => {
    N.value = n.items || [];
  });
  const he = o(() => en({ cell: n.cell && !B.value, density: n.density, disabled: V.value, field: "v-select", iconSet: s == null ? void 0 : s.defaultSet, loading: I.value, loadingWait: n.loadingWait, tableField: n.tableField, variant: n.variant })), Fe = o(() => nn({ cell: n.cell, cellUnderlineFullWidth: n.cellUnderlineFullWidth, density: n.density, field: "v-select" })), We = yn({ density: n.density, variant: n.variant }), Te = o(() => ln({ active: B.value, name: "select" })), ke = o(() => on({ name: "select", showField: B.value })), te = o(() => ({})), de = o(() => re.value);
  function X() {
    f.value = !1, l.value = ee, le();
  }
  const re = v(), R = v(null), Z = v("body");
  function le() {
    var L, J;
    if (V.value || n.loadingWait && I.value)
      return;
    re.value = Ye({ cardMinWidth: (L = n.cardProps) == null ? void 0 : L.minWidth, cardOffsetX: n.cardOffsetX, cardOffsetY: n.cardOffsetY, cardWidth: (J = n.cardProps) == null ? void 0 : J.width, field: R.value });
    const m = tn({ attrs: a, closeSiblings: g.value, fieldOnly: n.fieldOnly, props: d, showField: B, timeOpened: q.value });
    B.value = m.showField, q.value = m.timeOpened, j !== null && g.value && B.value && !n.fieldOnly && j.emit(m.timeOpened);
  }
  const w = v(), P = o(() => w.value);
  function x() {
    const m = fn({ required: n.required, rules: n.rules, value: l });
    return f.value = m.errors, w.value = m.results, m.results;
  }
  function ue() {
    ee = l.value, u("update", l.value), n.loadingWait || le();
  }
  let j, C;
  function H(m) {
    u("update:closeSiblingFields", q), B.value && q.value !== m && X();
  }
  return ie(() => B.value, () => {
    B.value && x();
  }), ie(() => l.value, () => {
    B.value && x();
  }), g.value && import("@vueuse/core").then(({ useEventBus: m }) => {
    j = m(Qe), C = j.on(H);
  }), Ne(() => {
    C !== void 0 && j.off(H);
  }), (m, L) => (p(), S("div", { ref_key: "inlineFieldsContainer", ref: R, class: b(e(he)), style: K(e(te)) }, [!e(B) && !e(n).fieldOnly || e(h) ? (p(), S("div", { key: 0, class: b(e(Fe)) }, [ce("div", { class: b(e(We)) }, [T(In, ve(e(E), { onToggleField: le }), we({ _: 2 }, [_e(e(r), (J, xe) => ({ name: xe, fn: $((Xe) => [pe(m.$slots, xe, U(ae({ ...Xe })), void 0, !0)]) }))]), 1040)], 2)], 2)) : M("", !0), e(B) || e(n).fieldOnly || e(h) ? (p(), S("div", { key: 1, class: b(e(Te)) }, [(p(), oe(He, { disabled: !e(h), to: e(Z) }, [T(wn, ve(e(D), { modelValue: l.value, "onUpdate:modelValue": L[0] || (L[0] = (J) => l.value = J), autofocus: !e(n).fieldOnly || e(n).autofocus, "clear-icon": e(Be), clearable: e(n).clearable, color: e(Y), density: e(n).density, disabled: e(I) || e(V), error: e(f), "error-messages": e(P), "hide-details": e(Se), "hide-selected": e(n).hideSelected, "item-title": e(n).itemTitle, "item-value": e(n).itemValue, items: e(N), label: e(n).label, loading: e(I), menu: e(n).menu && !e(n).fieldOnly && e(B), variant: e(n).variant, width: "100%", onKeyup: vn(X, ["esc"]) }), we({ _: 2 }, [_e(e(r), (J, xe) => ({ name: xe, fn: $((Xe) => [pe(m.$slots, xe, U(ae({ ...Xe })), void 0, !0)]) })), e(r).append ? void 0 : { name: "append", fn: $(() => [T(an, { "cancel-button-color": e(i), "cancel-button-size": e(A), "cancel-button-title": e(z), "cancel-button-variant": e(_), "cancel-icon": e(F), "cancel-icon-color": e(k), error: e(f), "field-only": e(ye), "hide-cancel-icon": e(ge), "hide-save-icon": e(se), loading: e(I), "loading-icon": e(Ae), "loading-icon-color": e(Pe), "save-button-color": e(Oe), "save-button-size": e(ze), "save-button-title": e(me), "save-button-variant": e(Ve), "save-icon": e(be), "save-icon-color": e(Q), onClose: X, onSave: ue }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "clearable", "color", "density", "disabled", "error", "error-messages", "hide-details", "hide-selected", "item-title", "item-value", "items", "label", "loading", "menu", "variant"])], 8, ["disabled", "to"]))], 2)) : M("", !0), e(h) ? (p(), S("div", { key: 2, class: b(e(ke)), style: K(e(de)) }, [T(Je, U(ae(e(ne))), { default: $(() => [T(Ke, null, { default: $(() => [ce("div", { ref_key: "cardFieldRef", ref: Z }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : M("", !0)], 6));
} }), [["__scopeId", "data-v-f9b47ea2"]]), xn = Ee({ __name: "BooleanIcons", props: fe({ iconFalseColor: {}, iconFalseTitle: {}, iconTrueColor: {}, iconTrueTitle: {}, iconFalse: {}, iconTrue: {} }, { modelValue: {}, modelModifiers: {} }), emits: ["update:modelValue"], setup(c) {
  const t = c, l = Ie(Symbol.for("vuetify:icons")), a = Le({ ...t });
  $e(() => {
    Object.assign(a, { ...t });
  });
  const r = Re(c, "modelValue"), u = o(() => De({ icon: a.iconFalse, iconOptions: l, name: "false" })), y = o(() => De({ icon: a.iconTrue, iconOptions: l, name: "true" }));
  return (s, d) => r.value ? (p(), oe(e(Sn), { key: 0, class: "v-inline-fields--boolean-icons fa-fw", color: s.iconTrueColor, icon: e(y), size: "x-small", title: s.iconTrueTitle }, null, 8, ["color", "icon", "title"])) : (p(), oe(e(Sn), { key: 1, class: "v-inline-fields--boolean-icons fa-fw", color: s.iconFalseColor, icon: e(u), size: "x-small", title: s.iconFalseTitle }, null, 8, ["color", "icon", "title"]));
} }), Qn = { class: "v-selection-control__wrapper" }, Zn = Ee({ __name: "VInlineCheckbox", props: fe(je({ density: {}, falseIcon: {}, trueIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...qn }), { modelValue: {}, modelModifiers: {} }), emits: fe([...dn], ["update:modelValue"]), setup(c, { emit: t }) {
  const l = Re(c, "modelValue"), a = Me(), r = qe(), u = t, y = Ie(Ue, {}), s = Ie(Symbol.for("vuetify:icons")), d = Bn(), n = c, i = Le({ ...a, ...n, ...y });
  $e(() => {
    Object.assign(i, { ...a, ...n, ...y });
  });
  const A = o(() => n.disabled), z = o(() => n.loading), _ = o(() => i.underlineColor), F = v(!1), k = v(!1), h = v(null), g = o(() => un(i)), Y = o(() => ({ ...Ze, ...n.cardProps }));
  ie(() => z.value, (D, E) => {
    !D && E && k.value && B();
  });
  const ye = o(() => De({ icon: n.trueIcon, iconOptions: s, name: "checkboxFalse" })), ge = o(() => De({ icon: n.iconTrue, iconOptions: s, name: "checkboxTrue" })), Se = o(() => l.value == i.trueValue), se = o(() => Tn({ modelValue: l, trueValue: i.trueValue })), Ae = o(() => en({ cell: i.cell && !k.value, density: i.density, disabled: A.value, field: "v-checkbox", loading: z.value, loadingWait: i.loadingWait, tableField: i.tableField })), Pe = o(() => nn({ cell: i.cell, cellUnderlineFullWidth: i.cellUnderlineFullWidth, density: i.density, field: "v-checkbox" })), Oe = Wn({ density: i.density }), ze = o(() => ln({ active: k.value, name: "checkbox" })), me = o(() => Cn("checkbox", i.valueColor, { error: F })), Ve = o(() => on({ name: "checkbox", showField: k.value })), be = o(() => ({})), Q = o(() => hn({ color: i.color, error: F, theme: d, underlineColor: _.value, underlineStyle: i.underlineStyle, underlineWidth: i.underlineWidth, underlined: i.underlined })), G = o(() => I.value);
  function V() {
    F.value = !1, B();
  }
  const I = v(), W = v(null), f = v("body"), N = _n();
  function B() {
    var E, ne;
    if (A.value || i.loadingWait && z.value)
      return;
    I.value = Ye({ cardMinWidth: (E = i.cardProps) == null ? void 0 : E.minWidth, cardOffsetX: i.cardOffsetX, cardOffsetY: i.cardOffsetY, cardWidth: (ne = i.cardProps) == null ? void 0 : ne.width, field: W.value, name: "checkbox" });
    const D = tn({ attrs: a, closeSiblings: i.closeSiblings, fieldOnly: i.fieldOnly, props: n, showField: k, timeOpened: h.value });
    k.value = D.showField, h.value = D.timeOpened, ee !== null && i.closeSiblings && k.value && !i.fieldOnly && ee.emit(D.timeOpened);
  }
  function q(D) {
    l.value = D, u("update", D), i.loadingWait || B();
  }
  let ee, Be;
  function Ce(D) {
    u("update:closeSiblingFields", h), k.value && h.value !== D && B();
  }
  return ie(() => N, () => {
    var D, E;
    I.value = Ye({ cardMinWidth: (D = i.cardProps) == null ? void 0 : D.minWidth, cardOffsetX: i.cardOffsetX, cardOffsetY: i.cardOffsetY, cardWidth: (E = i.cardProps) == null ? void 0 : E.width, field: W.value, name: "checkbox" });
  }, { deep: !0 }), i.closeSiblings && import("@vueuse/core").then(({ useEventBus: D }) => {
    ee = D(Qe), Be = ee.on(Ce);
  }), Ne(() => {
    Be !== void 0 && ee.off(Ce);
  }), (D, E) => (p(), S("div", { ref_key: "inlineFieldsContainer", ref: W, class: b(e(Ae)), style: K(e(be)) }, [!e(k) && !e(i).fieldOnly || e(i).cardField ? (p(), S("div", { key: 0, class: b(e(Pe)), onClick: E[2] || (E[2] = (ne) => e(i).cell ? B() : void 0) }, [ce("div", { class: b(e(Oe)), onClick: E[1] || (E[1] = (ne) => e(i).cell ? void 0 : B()) }, [ce("div", Qn, [e(i).icons ? (p(), S("div", { key: 0, class: b(["v-inline-fields--boolean-icons-container", e(me)]), style: K(e(Q)) }, [T(xn, { modelValue: e(se), "onUpdate:modelValue": E[0] || (E[0] = (ne) => zn(se) ? se.value = ne : null), "icon-false": e(i).iconFalse, "icon-false-color": e(i).iconFalseColor, "icon-false-title": e(i).iconFalseTitle, "icon-true": e(i).iconTrue, "icon-true-color": e(i).iconTrueColor, "icon-true-title": e(i).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (p(), S("div", { key: 1, class: b(["d-inline-flex align-center justify-center", e(me)]), style: K(e(Q)) }, bn(e(Se)), 7))])], 2)], 2)) : M("", !0), e(k) || e(i).fieldOnly || e(i).cardField ? (p(), S("div", { key: 1, class: b(e(ze)) }, [(p(), oe(He, { disabled: !e(i).cardField, to: e(f) }, [T(En, ve(e(g), { color: e(i).color, density: e(i).density, disabled: e(z) || e(A), error: e(F), "false-icon": e(ye), "false-value": e(i).falseValue, "hide-details": e(i).hideDetails, label: e(i).label, "model-value": e(se), "true-icon": e(ge), "true-value": e(i).trueValue, "onUpdate:modelValue": q }), we({ _: 2 }, [_e(e(r), (ne, he) => ({ name: he, fn: $((Fe) => [pe(D.$slots, he, U(ae({ ...Fe })))]) })), e(r).append ? void 0 : { name: "append", fn: $(() => [T(an, { "cancel-button-color": e(i).cancelButtonColor, "cancel-button-size": e(i).cancelButtonSize, "cancel-button-title": e(i).cancelButtonTitle, "cancel-button-variant": e(i).cancelButtonVariant, "cancel-icon": e(i).cancelIcon, "cancel-icon-color": e(i).cancelIconColor, error: e(F), "field-only": e(i).fieldOnly, "hide-cancel-icon": e(i).hideCancelIcon, "hide-save-icon": !0, loading: e(z), "loading-icon": e(i).loadingIcon, "loading-icon-color": e(i).loadingIconColor, "save-button-color": e(i).saveButtonColor, "save-button-size": e(i).saveButtonSize, "save-button-title": e(i).saveButtonTitle, "save-button-variant": e(i).saveButtonVariant, "save-icon": e(i).saveIcon, "save-icon-color": e(i).saveIconColor, onClose: V, onSave: q }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "model-value", "true-icon", "true-value"])], 8, ["disabled", "to"]))], 2)) : M("", !0), e(i).cardField ? (p(), S("div", { key: 2, class: b(e(Ve)), style: K(e(G)) }, [T(Je, U(ae(e(Y))), { default: $(() => [T(Ke, null, { default: $(() => [ce("div", { ref_key: "cardFieldRef", ref: f }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : M("", !0)], 6));
} }), el = Ee({ __name: "VInlineCustomField", props: fe(je({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...kn }), { modelValue: {}, modelModifiers: {} }), emits: fe([...dn], ["update:modelValue"]), setup(c, { emit: t }) {
  const l = Re(c, "modelValue"), a = Me(), r = qe(), u = t, y = Ie(Ue, {}), s = Ie(Symbol.for("vuetify:icons")), d = c, n = Le({ ...a, ...d, ...y });
  $e(() => {
    Object.assign(n, { ...a, ...d, ...y });
  });
  const { cancelButtonColor: i, cancelButtonSize: A, cancelButtonTitle: z, cancelButtonVariant: _, cancelIcon: F, cancelIconColor: k, cardField: h, closeSiblings: g, fieldOnly: Y, hideCancelIcon: ye, hideSaveIcon: ge, loadingIcon: Se, loadingIconColor: se, saveButtonColor: Ae, saveButtonSize: Pe, saveButtonTitle: Oe, saveButtonVariant: ze, saveIcon: me, saveIconColor: Ve } = rn(n), be = o(() => d.disabled), Q = o(() => d.loading), G = v(!1), V = v(!1), I = v(!1), W = v(null);
  let f = l.value;
  ie(() => Q.value, (P, x) => {
    !P && x && I.value && de();
  });
  const N = o(() => l.value ? (G.value = !1, n.truncateLength ? Fn({ length: n.truncateLength, suffix: n.truncateSuffix, text: l.value }) : l.value) : (G.value = !0, n.emptyText)), B = o(() => ({ ...n, loading: Q.value, modelValue: l.value, originalValue: f })), q = o(() => ({ color: n.color, displayAppendIcon: d.displayAppendIcon, displayAppendIconColor: d.displayAppendIconColor, displayAppendIconSize: d.displayAppendIconSize, displayAppendInnerIcon: d.displayAppendInnerIcon, displayAppendInnerIconColor: d.displayAppendInnerIconColor, displayAppendInnerIconSize: d.displayAppendInnerIconSize, displayPrependIcon: d.displayPrependIcon, displayPrependIconColor: d.displayPrependIconColor, displayPrependIconSize: d.displayPrependIconSize, displayPrependInnerIcon: d.displayPrependInnerIcon, displayPrependInnerIconColor: d.displayPrependInnerIconColor, displayPrependInnerIconSize: d.displayPrependInnerIconSize, displayValue: N.value, empty: G.value, error: V.value, field: "v-text-field", underlineColor: n.underlineColor, underlineStyle: n.underlineStyle, underlineWidth: n.underlineWidth, underlined: n.underlined, valueColor: n.valueColor })), ee = o(() => ({ ...Ze, ...d.cardProps })), Be = o(() => en({ cell: n.cell && !I.value, density: n.density, disabled: be.value, field: "v-text-field", iconSet: s == null ? void 0 : s.defaultSet, loading: Q.value, loadingWait: n.loadingWait, tableField: n.tableField, variant: n.variant })), Ce = o(() => nn({ cell: n.cell, cellUnderlineFullWidth: n.cellUnderlineFullWidth, density: n.density, field: "v-text-field" })), D = yn({ density: n.density, variant: n.variant }), E = o(() => ln({ active: I.value, name: "text-field" })), ne = o(() => on({ name: "custom-field", showField: I.value })), he = o(() => ({})), Fe = o(() => Te.value);
  function We() {
    V.value = !1, l.value = f, de();
  }
  const Te = v(), ke = v(null), te = v("body");
  function de() {
    var x, ue;
    if (be.value || n.loadingWait && Q.value)
      return;
    Te.value = Ye({ cardMinWidth: (x = n.cardProps) == null ? void 0 : x.minWidth, cardOffsetX: n.cardOffsetX, cardOffsetY: n.cardOffsetY, cardWidth: (ue = n.cardProps) == null ? void 0 : ue.width, field: ke.value });
    const P = tn({ attrs: a, closeSiblings: g.value, fieldOnly: n.fieldOnly, props: d, showField: I, timeOpened: W.value });
    I.value = P.showField, W.value = P.timeOpened, Z !== null && g.value && I.value && !n.fieldOnly && Z.emit(P.timeOpened);
  }
  const X = v();
  function re() {
    const P = fn({ required: n.required, rules: n.rules, value: l });
    return V.value = P.errors, X.value = P.results, P.results;
  }
  function R() {
    V.value ? V.value = !0 : (f = l.value, u("update", l.value), n.loadingWait || de());
  }
  let Z, le;
  function w(P) {
    u("update:closeSiblingFields", W), I.value && W.value !== P && We();
  }
  return ie(() => I.value, () => {
    I.value && re();
  }), ie(() => l.value, () => {
    I.value && re();
  }), g.value && import("@vueuse/core").then(({ useEventBus: P }) => {
    Z = P(Qe), le = Z.on(w);
  }), Ne(() => {
    le !== void 0 && Z.off(w);
  }), (P, x) => (p(), S("div", { ref_key: "inlineFieldsContainer", ref: ke, class: b(e(Be)), style: K(e(he)) }, [!e(I) && !e(n).fieldOnly || e(h) ? (p(), S("div", { key: 0, class: b(e(Ce)) }, [ce("div", { class: b(e(D)) }, [T(In, ve(e(q), { onToggleField: de }), we({ _: 2 }, [_e(e(r), (ue, j) => ({ name: j, fn: $((C) => [pe(P.$slots, j, U(ae({ ...C })))]) }))]), 1040)], 2)], 2)) : M("", !0), e(I) || e(n).fieldOnly || e(h) ? (p(), S("div", { key: 1, class: b(["d-flex align-center py-2", e(E)]) }, [(p(), oe(He, { disabled: !e(h), to: e(te) }, [pe(P.$slots, "default", U(ae(e(B)))), T(an, { "cancel-button-color": e(i), "cancel-button-size": e(A), "cancel-button-title": e(z), "cancel-button-variant": e(_), "cancel-icon": e(F), "cancel-icon-color": e(k), error: e(V), "field-only": e(Y), "hide-cancel-icon": e(ye), "hide-save-icon": e(ge), loading: e(Q), "loading-icon": e(Se), "loading-icon-color": e(se), "save-button-color": e(Ae), "save-button-size": e(Pe), "save-button-title": e(Oe), "save-button-variant": e(ze), "save-icon": e(me), "save-icon-color": e(Ve), onClose: We, onSave: R }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])], 8, ["disabled", "to"]))], 2)) : M("", !0), e(h) ? (p(), S("div", { key: 2, class: b(e(ne)), style: K(e(Fe)) }, [T(Je, U(ae(e(ee))), { default: $(() => [T(Ke, null, { default: $(() => [ce("div", { ref_key: "cardFieldRef", ref: te }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : M("", !0)], 6));
} }), nl = $n(Ee({ __name: "VInlineSelect", props: fe(je({ clearIcon: {}, clearable: {}, density: {}, hideSelected: {}, itemTitle: {}, itemValue: {}, items: {}, menu: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Rn }), { modelValue: {}, modelModifiers: {} }), emits: fe([...dn], ["update:modelValue"]), setup(c, { emit: t }) {
  const l = Re(c, "modelValue"), a = Me(), r = qe(), u = t, y = Ie(Ue, {}), s = Ie(Symbol.for("vuetify:icons")), d = c, n = Le({ ...a, ...d, ...y });
  $e(() => {
    Object.assign(n, { ...a, ...d, ...y });
  });
  const { cancelButtonColor: i, cancelButtonSize: A, cancelButtonTitle: z, cancelButtonVariant: _, cancelIcon: F, cancelIconColor: k, cardField: h, closeSiblings: g, color: Y, fieldOnly: ye, hideCancelIcon: ge, hideDetails: Se, hideSaveIcon: se, loadingIcon: Ae, loadingIconColor: Pe, saveButtonColor: Oe, saveButtonSize: ze, saveButtonTitle: me, saveButtonVariant: Ve, saveIcon: be, saveIconColor: Q, valueColor: G } = rn(n), V = o(() => d.disabled), I = o(() => d.loading), W = v(!1), f = v(!1), N = v(), B = v(!1), q = v(null);
  let ee = l.value;
  ie(() => I.value, (m, L) => {
    !m && L && B.value && le();
  });
  const Be = o(() => De({ icon: d.clearIcon, iconOptions: s, name: "clear" })), Ce = o(() => l.value && l.value[n.itemTitle] ? (W.value = !1, l.value[n.itemTitle]) : l.value ? l.value : (W.value = !0, n.emptyText)), D = o(() => un(n)), E = o(() => ({ color: n.color, displayAppendIcon: n.displayAppendIcon, displayAppendIconColor: n.displayAppendIconColor, displayAppendIconSize: n.displayAppendIconSize, displayAppendInnerIcon: n.displayAppendInnerIcon, displayAppendInnerIconColor: n.displayAppendInnerIconColor, displayAppendInnerIconSize: n.displayAppendInnerIconSize, displayPrependIcon: n.displayPrependIcon, displayPrependIconColor: n.displayPrependIconColor, displayPrependIconSize: n.displayPrependIconSize, displayPrependInnerIcon: n.displayPrependInnerIcon, displayPrependInnerIconColor: n.displayPrependInnerIconColor, displayPrependInnerIconSize: n.displayPrependInnerIconSize, displayValue: Ce.value, empty: W.value, error: f.value, field: "v-text-field", underlineColor: n.underlineColor, underlineStyle: n.underlineStyle, underlineWidth: n.underlineWidth, underlined: n.underlined, valueColor: G.value })), ne = o(() => ({ ...Ze, ...d.cardProps }));
  $e(() => {
    N.value = n.items || [];
  });
  const he = o(() => en({ cell: n.cell && !B.value, density: n.density, disabled: V.value, field: "v-select", iconSet: s == null ? void 0 : s.defaultSet, loading: I.value, loadingWait: n.loadingWait, tableField: n.tableField, variant: n.variant })), Fe = o(() => nn({ cell: n.cell, cellUnderlineFullWidth: n.cellUnderlineFullWidth, density: n.density, field: "v-select" })), We = yn({ density: n.density, variant: n.variant }), Te = o(() => ln({ active: B.value, name: "select" })), ke = o(() => on({ name: "select", showField: B.value })), te = o(() => ({})), de = o(() => re.value);
  function X() {
    f.value = !1, l.value = ee, le();
  }
  const re = v(), R = v(null), Z = v("body");
  function le() {
    var L, J;
    if (V.value || n.loadingWait && I.value)
      return;
    re.value = Ye({ cardMinWidth: (L = n.cardProps) == null ? void 0 : L.minWidth, cardOffsetX: n.cardOffsetX, cardOffsetY: n.cardOffsetY, cardWidth: (J = n.cardProps) == null ? void 0 : J.width, field: R.value });
    const m = tn({ attrs: a, closeSiblings: g.value, fieldOnly: n.fieldOnly, props: d, showField: B, timeOpened: q.value });
    B.value = m.showField, q.value = m.timeOpened, j !== null && g.value && B.value && !n.fieldOnly && j.emit(m.timeOpened);
  }
  const w = v(), P = o(() => w.value);
  function x() {
    const m = fn({ required: n.required, rules: n.rules, value: l });
    return f.value = m.errors, w.value = m.results, m.results;
  }
  function ue() {
    ee = l.value, u("update", l.value), n.loadingWait || le();
  }
  let j, C;
  function H(m) {
    u("update:closeSiblingFields", q), B.value && q.value !== m && X();
  }
  return ie(() => B.value, () => {
    B.value && x();
  }), ie(() => l.value, () => {
    B.value && x();
  }), g.value && import("@vueuse/core").then(({ useEventBus: m }) => {
    j = m(Qe), C = j.on(H);
  }), Ne(() => {
    C !== void 0 && j.off(H);
  }), (m, L) => (p(), S("div", { ref_key: "inlineFieldsContainer", ref: R, class: b(e(he)), style: K(e(te)) }, [!e(B) && !e(n).fieldOnly || e(h) ? (p(), S("div", { key: 0, class: b(e(Fe)) }, [ce("div", { class: b(e(We)) }, [T(In, ve(e(E), { onToggleField: le }), we({ _: 2 }, [_e(e(r), (J, xe) => ({ name: xe, fn: $((Xe) => [pe(m.$slots, xe, U(ae({ ...Xe })), void 0, !0)]) }))]), 1040)], 2)], 2)) : M("", !0), e(B) || e(n).fieldOnly || e(h) ? (p(), S("div", { key: 1, class: b(e(Te)) }, [(p(), oe(He, { disabled: !e(h), to: e(Z) }, [T(Ln, ve(e(D), { modelValue: l.value, "onUpdate:modelValue": L[0] || (L[0] = (J) => l.value = J), autofocus: !e(n).fieldOnly || e(n).autofocus, "clear-icon": e(Be), clearable: e(n).clearable, color: e(Y), density: e(n).density, disabled: e(I) || e(V), error: e(f), "error-messages": e(P), "hide-details": e(Se), "hide-selected": e(n).hideSelected, "item-title": e(n).itemTitle, "item-value": e(n).itemValue, items: e(N), label: e(n).label, loading: e(I), menu: e(n).menu && !e(n).fieldOnly && e(B), variant: e(n).variant, width: "100%", onKeyup: vn(X, ["esc"]) }), we({ _: 2 }, [_e(e(r), (J, xe) => ({ name: xe, fn: $((Xe) => [pe(m.$slots, xe, U(ae({ ...Xe })), void 0, !0)]) })), e(r).append ? void 0 : { name: "append", fn: $(() => [T(an, { "cancel-button-color": e(i), "cancel-button-size": e(A), "cancel-button-title": e(z), "cancel-button-variant": e(_), "cancel-icon": e(F), "cancel-icon-color": e(k), error: e(f), "field-only": e(ye), "hide-cancel-icon": e(ge), "hide-save-icon": e(se), loading: e(I), "loading-icon": e(Ae), "loading-icon-color": e(Pe), "save-button-color": e(Oe), "save-button-size": e(ze), "save-button-title": e(me), "save-button-variant": e(Ve), "save-icon": e(be), "save-icon-color": e(Q), onClose: X, onSave: ue }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "clearable", "color", "density", "disabled", "error", "error-messages", "hide-details", "hide-selected", "item-title", "item-value", "items", "label", "loading", "menu", "variant"])], 8, ["disabled", "to"]))], 2)) : M("", !0), e(h) ? (p(), S("div", { key: 2, class: b(e(ke)), style: K(e(de)) }, [T(Je, U(ae(e(ne))), { default: $(() => [T(Ke, null, { default: $(() => [ce("div", { ref_key: "cardFieldRef", ref: Z }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : M("", !0)], 6));
} }), [["__scopeId", "data-v-4f65a7ea"]]), ll = { class: "v-selection-control__wrapper" }, ol = Ee({ __name: "VInlineSwitch", props: fe(je({ density: {}, falseIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Xn }), { modelValue: {}, modelModifiers: {} }), emits: fe([...dn], ["update:modelValue"]), setup(c, { emit: t }) {
  const l = Re(c, "modelValue"), a = Me(), r = qe(), u = t, y = Ie(Ue, {}), s = Bn(), d = c, n = Le({ ...a, ...d, ...y });
  $e(() => {
    Object.assign(n, { ...a, ...d, ...y });
  });
  const { cancelButtonColor: i, cancelButtonSize: A, cancelButtonTitle: z, cancelButtonVariant: _, cancelIcon: F, cancelIconColor: k, cardField: h, closeSiblings: g, color: Y, fieldOnly: ye, hideCancelIcon: ge, hideDetails: Se, loadingIcon: se, loadingIconColor: Ae, saveButtonColor: Pe, saveButtonSize: Oe, saveButtonTitle: ze, saveButtonVariant: me, saveIcon: Ve, saveIconColor: be } = rn(n), Q = o(() => d.disabled), G = o(() => d.loading), V = v(!1), I = v(!1), W = v(null), f = o(() => un(n)), N = o(() => ({ ...Ze, ...d.cardProps }));
  ie(() => G.value, (w, P) => {
    !w && P && I.value && X();
  });
  const B = o(() => l.value == n.trueValue), q = o(() => Tn({ modelValue: l, trueValue: n.trueValue })), ee = o(() => en({ cell: n.cell && !I.value, density: n.density, disabled: Q.value, field: "v-switch", loading: G.value, loadingWait: n.loadingWait, tableField: n.tableField })), Be = o(() => nn({ cell: n.cell, cellUnderlineFullWidth: n.cellUnderlineFullWidth, density: n.density, field: "v-switch" })), Ce = Wn({ density: n.density }), D = o(() => ln({ active: I.value, name: "switch" })), E = o(() => Cn("switch", n.valueColor, { error: V })), ne = o(() => on({ name: "switch", showField: I.value })), he = o(() => ({})), Fe = o(() => hn({ color: n.color, error: V, theme: s, underlineColor: n.underlineColor, underlineStyle: n.underlineStyle, underlineWidth: n.underlineWidth, underlined: n.underlined })), We = o(() => ke.value);
  function Te() {
    V.value = !1, X();
  }
  const ke = v(), te = v(null), de = v("body");
  function X() {
    var P, x;
    if (Q.value || n.loadingWait && G.value)
      return;
    ke.value = Ye({ cardMinWidth: (P = n.cardProps) == null ? void 0 : P.minWidth, cardOffsetX: n.cardOffsetX, cardOffsetY: n.cardOffsetY, cardWidth: (x = n.cardProps) == null ? void 0 : x.width, field: te.value });
    const w = tn({ attrs: a, closeSiblings: g.value, fieldOnly: n.fieldOnly, props: d, showField: I.value, timeOpened: W.value });
    I.value = w.showField, W.value = w.timeOpened, R !== null && g.value && I.value && !n.fieldOnly && R.emit(w.timeOpened);
  }
  function re(w) {
    l.value = w, u("update", w), n.loadingWait || X();
  }
  let R, Z;
  function le(w) {
    u("update:closeSiblingFields", W), I.value && W.value !== w && X();
  }
  return g.value && import("@vueuse/core").then(({ useEventBus: w }) => {
    R = w(Qe), Z = R.on(le);
  }), Ne(() => {
    Z !== void 0 && R.off(le);
  }), (w, P) => (p(), S("div", { ref_key: "inlineFieldsContainer", ref: te, class: b(e(ee)), style: K(e(he)) }, [!e(I) && !e(n).fieldOnly || e(n).cardField ? (p(), S("div", { key: 0, class: b(e(Be)), onClick: P[2] || (P[2] = (x) => e(n).cell ? X() : void 0) }, [ce("div", { class: b(e(Ce)), onClick: P[1] || (P[1] = (x) => e(n).cell ? void 0 : X()) }, [ce("div", ll, [e(n).icons ? (p(), S("div", { key: 0, class: b(["v-inline-fields--boolean-icons-container", e(E)]), style: K(e(Fe)) }, [T(xn, { modelValue: e(q), "onUpdate:modelValue": P[0] || (P[0] = (x) => zn(q) ? q.value = x : null), "icon-false": e(n).iconFalse, "icon-false-color": e(n).iconFalseColor, "icon-false-title": e(n).iconFalseTitle, "icon-true": e(n).iconTrue, "icon-true-color": e(n).iconTrueColor, "icon-true-title": e(n).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (p(), S("div", { key: 1, class: b(["d-inline-flex align-center justify-center", e(E)]), style: K(e(Fe)) }, bn(e(B)), 7))])], 2)], 2)) : M("", !0), e(I) || e(n).fieldOnly || e(h) ? (p(), S("div", { key: 1, class: b(e(D)) }, [(p(), oe(He, { disabled: !e(h), to: e(de) }, [T(Mn, ve(e(f), { color: e(Y), density: e(n).density, disabled: e(G) || e(Q), error: e(V), "false-icon": e(n).falseIcon, "false-value": e(n).falseValue, "hide-details": e(Se), label: e(n).label, loading: e(G), "model-value": e(q), "true-value": e(n).trueValue, "onUpdate:modelValue": re }), we({ _: 2 }, [_e(e(r), (x, ue) => ({ name: ue, fn: $((j) => [pe(w.$slots, ue, U(ae({ ...j })))]) })), e(r).append ? void 0 : { name: "append", fn: $(() => [T(an, { "cancel-button-color": e(i), "cancel-button-size": e(A), "cancel-button-title": e(z), "cancel-button-variant": e(_), "cancel-icon": e(F), "cancel-icon-color": e(k), class: "ms-3", error: e(V), "field-only": e(ye), "hide-cancel-icon": e(ge), "hide-save-icon": !0, loading: e(G), "loading-icon": e(se), "loading-icon-color": e(Ae), "save-button-color": e(Pe), "save-button-size": e(Oe), "save-button-title": e(ze), "save-button-variant": e(me), "save-icon": e(Ve), "save-icon-color": e(be), onClose: Te, onSave: re }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "loading", "model-value", "true-value"])], 8, ["disabled", "to"]))], 2)) : M("", !0), e(h) ? (p(), S("div", { key: 2, class: b(e(ne)), style: K(e(We)) }, [T(Je, U(ae(e(N))), { default: $(() => [T(Ke, null, { default: $(() => [ce("div", { ref_key: "cardFieldRef", ref: de }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : M("", !0)], 6));
} }), al = Ee({ __name: "VInlineTextField", props: fe(je({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...kn }), { modelValue: {}, modelModifiers: {} }), emits: fe([...dn], ["update:modelValue"]), setup(c, { emit: t }) {
  const l = Re(c, "modelValue"), a = Me(), r = qe(), u = t, y = Ie(Ue, {}), s = Ie(Symbol.for("vuetify:icons")), d = c, n = Le({ ...a, ...d, ...y });
  $e(() => {
    Object.assign(n, { ...a, ...d, ...y });
  });
  const { cancelButtonColor: i, cancelButtonSize: A, cancelButtonTitle: z, cancelButtonVariant: _, cancelIcon: F, cancelIconColor: k, cardField: h, closeSiblings: g, color: Y, fieldOnly: ye, hideCancelIcon: ge, hideDetails: Se, hideSaveIcon: se, loadingIcon: Ae, loadingIconColor: Pe, saveButtonColor: Oe, saveButtonSize: ze, saveButtonTitle: me, saveButtonVariant: Ve, saveIcon: be, saveIconColor: Q } = rn(n), G = o(() => d.disabled), V = o(() => d.loading), I = v(!1), W = v(!1), f = v(!1), N = v(null);
  let B = l.value;
  ie(() => V.value, (C, H) => {
    !C && H && f.value && R();
  });
  const q = o(() => De({ icon: d.clearIcon, iconOptions: s, name: "clear" })), ee = o(() => l.value ? (I.value = !1, n.truncateLength ? Fn({ length: n.truncateLength, suffix: n.truncateSuffix, text: l.value }) : l.value) : (I.value = !0, n.emptyText)), Be = o(() => un(n)), Ce = o(() => ({ color: n.color, displayAppendIcon: n.displayAppendIcon, displayAppendIconColor: n.displayAppendIconColor, displayAppendIconSize: n.displayAppendIconSize, displayAppendInnerIcon: n.displayAppendInnerIcon, displayAppendInnerIconColor: n.displayAppendInnerIconColor, displayAppendInnerIconSize: n.displayAppendInnerIconSize, displayPrependIcon: n.displayPrependIcon, displayPrependIconColor: n.displayPrependIconColor, displayPrependIconSize: n.displayPrependIconSize, displayPrependInnerIcon: n.displayPrependInnerIcon, displayPrependInnerIconColor: n.displayPrependInnerIconColor, displayPrependInnerIconSize: n.displayPrependInnerIconSize, displayValue: ee.value, empty: I.value, error: W.value, field: "v-text-field", underlineColor: n.underlineColor, underlineStyle: n.underlineStyle, underlineWidth: n.underlineWidth, underlined: n.underlined, valueColor: n.valueColor })), D = o(() => ({ ...Ze, ...d.cardProps })), E = o(() => en({ cell: n.cell && !f.value, density: n.density, disabled: G.value, field: "v-text-field", iconSet: s == null ? void 0 : s.defaultSet, loading: V.value, loadingWait: n.loadingWait, tableField: n.tableField, variant: n.variant })), ne = o(() => nn({ cell: n.cell, cellUnderlineFullWidth: n.cellUnderlineFullWidth, density: n.density, field: "v-text-field" })), he = yn({ density: n.density, variant: n.variant }), Fe = o(() => ln({ active: f.value, name: "text-field" })), We = o(() => on({ name: "text-field", showField: f.value })), Te = o(() => ({})), ke = o(() => de.value);
  function te() {
    W.value = !1, l.value = B, R();
  }
  const de = v(), X = v(null), re = v("body");
  function R() {
    var H, m;
    if (G.value || n.loadingWait && V.value)
      return;
    de.value = Ye({ cardMinWidth: (H = n.cardProps) == null ? void 0 : H.minWidth, cardOffsetX: n.cardOffsetX, cardOffsetY: n.cardOffsetY, cardWidth: (m = n.cardProps) == null ? void 0 : m.width, field: X.value });
    const C = tn({ attrs: a, closeSiblings: g.value, fieldOnly: n.fieldOnly, props: d, showField: f, timeOpened: N.value });
    f.value = C.showField, N.value = C.timeOpened, x !== null && g.value && f.value && !n.fieldOnly && x.emit(C.timeOpened);
  }
  const Z = v(), le = o(() => Z.value);
  function w() {
    const C = fn({ required: n.required, rules: n.rules, value: l });
    return W.value = C.errors, Z.value = C.results, C.results;
  }
  function P() {
    W.value ? W.value = !0 : (B = l.value, u("update", l.value), n.loadingWait || R());
  }
  let x, ue;
  function j(C) {
    u("update:closeSiblingFields", N), f.value && N.value !== C && te();
  }
  return ie(() => f.value, () => {
    f.value && w();
  }), ie(() => l.value, () => {
    f.value && w();
  }), g.value && import("@vueuse/core").then(({ useEventBus: C }) => {
    x = C(Qe), ue = x.on(j);
  }), Ne(() => {
    ue !== void 0 && x.off(j);
  }), (C, H) => (p(), S("div", { ref_key: "inlineFieldsContainer", ref: X, class: b(e(E)), style: K(e(Te)) }, [!e(f) && !e(n).fieldOnly || e(h) ? (p(), S("div", { key: 0, class: b(e(ne)) }, [ce("div", { class: b(e(he)) }, [T(In, ve(e(Ce), { onToggleField: R }), we({ _: 2 }, [_e(e(r), (m, L) => ({ name: L, fn: $((J) => [pe(C.$slots, L, U(ae({ ...J })))]) }))]), 1040)], 2)], 2)) : M("", !0), e(f) || e(n).fieldOnly || e(h) ? (p(), S("div", { key: 1, class: b(e(Fe)) }, [(p(), oe(He, { disabled: !e(h), to: e(re) }, [T(Gn, ve(e(Be), { modelValue: l.value, "onUpdate:modelValue": H[0] || (H[0] = (m) => l.value = m), autofocus: !e(n).fieldOnly || e(n).autofocus, "clear-icon": e(q), color: e(Y), density: e(n).density, disabled: e(V) || e(G), error: e(W), "error-messages": e(le), "hide-details": e(Se), label: e(n).label, loading: e(V), variant: e(n).variant, width: "100%", onKeyup: [vn(P, ["enter"]), vn(te, ["esc"])] }), we({ _: 2 }, [_e(e(r), (m, L) => ({ name: L, fn: $((J) => [pe(C.$slots, L, U(ae({ ...J })))]) })), e(r).append ? void 0 : { name: "append", fn: $(() => [T(an, { "cancel-button-color": e(i), "cancel-button-size": e(A), "cancel-button-title": e(z), "cancel-button-variant": e(_), "cancel-icon": e(F), "cancel-icon-color": e(k), error: e(W), "field-only": e(ye), "hide-cancel-icon": e(ge), "hide-save-icon": e(se), loading: e(V), "loading-icon": e(Ae), "loading-icon-color": e(Pe), "save-button-color": e(Oe), "save-button-size": e(ze), "save-button-title": e(me), "save-button-variant": e(Ve), "save-icon": e(be), "save-icon-color": e(Q), onClose: te, onSave: P }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "variant"])], 8, ["disabled", "to"]))], 2)) : M("", !0), e(h) ? (p(), S("div", { key: 2, class: b(e(We)), style: K(e(ke)) }, [T(Je, U(ae(e(D))), { default: $(() => [T(Ke, null, { default: $(() => [ce("div", { ref_key: "cardFieldRef", ref: re }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : M("", !0)], 6));
} }), il = Ee({ __name: "VInlineTextarea", props: fe(je({ autoGrow: {}, clearIcon: {}, density: {}, rows: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...jn }), { modelValue: {}, modelModifiers: {} }), emits: fe([...dn], ["update:modelValue"]), setup(c, { emit: t }) {
  const l = Re(c, "modelValue"), a = Me(), r = qe(), u = t, y = Ie(Ue, {}), s = Ie(Symbol.for("vuetify:icons")), d = c, n = Le({ ...a, ...d, ...y });
  $e(() => {
    Object.assign(n, { ...a, ...d, ...y });
  });
  const { cancelButtonColor: i, cancelButtonSize: A, cancelButtonTitle: z, cancelButtonVariant: _, cancelIcon: F, cancelIconColor: k, cardField: h, closeSiblings: g, color: Y, fieldOnly: ye, hideCancelIcon: ge, hideDetails: Se, hideSaveIcon: se, loadingIcon: Ae, loadingIconColor: Pe, saveButtonColor: Oe, saveButtonSize: ze, saveButtonTitle: me, saveButtonVariant: Ve, saveIcon: be, saveIconColor: Q } = rn(n), G = o(() => d.disabled), V = o(() => d.loading), I = v(!1), W = v(!1), f = v(!1), N = v(null);
  let B = l.value;
  ie(() => V.value, (C, H) => {
    !C && H && f.value && R();
  });
  const q = o(() => De({ icon: d.clearIcon, iconOptions: s, name: "clear" })), ee = o(() => l.value ? (I.value = !1, n.truncateLength ? Fn({ length: n.truncateLength, suffix: n.truncateSuffix, text: l.value }) : l.value) : (I.value = !0, n.emptyText)), Be = o(() => un(n)), Ce = o(() => ({ color: n.color, displayAppendIcon: n.displayAppendIcon, displayAppendIconColor: n.displayAppendIconColor, displayAppendIconSize: n.displayAppendIconSize, displayAppendInnerIcon: n.displayAppendInnerIcon, displayAppendInnerIconColor: n.displayAppendInnerIconColor, displayAppendInnerIconSize: n.displayAppendInnerIconSize, displayPrependIcon: n.displayPrependIcon, displayPrependIconColor: n.displayPrependIconColor, displayPrependIconSize: n.displayPrependIconSize, displayPrependInnerIcon: n.displayPrependInnerIcon, displayPrependInnerIconColor: n.displayPrependInnerIconColor, displayPrependInnerIconSize: n.displayPrependInnerIconSize, displayValue: ee.value, empty: I.value, error: W.value, field: "v-text-field", underlineColor: n.underlineColor, underlineStyle: n.underlineStyle, underlineWidth: n.underlineWidth, underlined: n.underlined, valueColor: n.valueColor })), D = o(() => ({ ...Ze, ...d.cardProps })), E = o(() => en({ cell: n.cell && !f.value, density: n.density, disabled: G.value, field: "v-textarea", iconSet: s == null ? void 0 : s.defaultSet, loading: V.value, loadingWait: n.loadingWait, tableField: n.tableField, variant: n.variant })), ne = o(() => nn({ cell: n.cell, cellUnderlineFullWidth: n.cellUnderlineFullWidth, density: n.density, field: "v-textarea" })), he = yn({ density: n.density, variant: n.variant }), Fe = o(() => ln({ active: f.value, name: "textarea" })), We = o(() => on({ name: "textarea", showField: f.value })), Te = o(() => ({})), ke = o(() => de.value);
  function te() {
    W.value = !1, l.value = B, R();
  }
  const de = v(), X = v(null), re = v("body");
  function R() {
    var H, m;
    if (G.value || n.loadingWait && V.value)
      return;
    de.value = Ye({ cardMinWidth: (H = n.cardProps) == null ? void 0 : H.minWidth, cardOffsetX: n.cardOffsetX, cardOffsetY: n.cardOffsetY, cardWidth: (m = n.cardProps) == null ? void 0 : m.width, field: X.value });
    const C = tn({ attrs: a, closeSiblings: g.value, fieldOnly: n.fieldOnly, props: d, showField: f, timeOpened: N.value });
    f.value = C.showField, N.value = C.timeOpened, x !== null && g.value && f.value && !n.fieldOnly && x.emit(C.timeOpened);
  }
  const Z = v(), le = o(() => Z.value);
  function w() {
    const C = fn({ required: n.required, rules: n.rules, value: l });
    return W.value = C.errors, Z.value = C.results, C.results;
  }
  function P() {
    B = l.value, u("update", l.value), n.loadingWait || R();
  }
  let x, ue;
  function j(C) {
    u("update:closeSiblingFields", N), f.value && N.value !== C && te();
  }
  return ie(() => f.value, () => {
    f.value && w();
  }), ie(() => l.value, () => {
    f.value && w();
  }), g.value && import("@vueuse/core").then(({ useEventBus: C }) => {
    x = C(Qe), ue = x.on(j);
  }), Ne(() => {
    ue !== void 0 && x.off(j);
  }), (C, H) => (p(), S("div", { ref_key: "inlineFieldsContainer", ref: X, class: b(e(E)), style: K(e(Te)) }, [!e(f) && !e(n).fieldOnly || e(h) ? (p(), S("div", { key: 0, class: b(e(ne)) }, [ce("div", { class: b(e(he)) }, [T(In, ve(e(Ce), { onToggleField: R }), we({ _: 2 }, [_e(e(r), (m, L) => ({ name: L, fn: $((J) => [pe(C.$slots, L, U(ae({ ...J })))]) }))]), 1040)], 2)], 2)) : M("", !0), e(f) || e(n).fieldOnly || e(h) ? (p(), S("div", { key: 1, class: b(e(Fe)) }, [(p(), oe(He, { disabled: !e(h), to: e(re) }, [T(Yn, ve(e(Be), { modelValue: l.value, "onUpdate:modelValue": H[0] || (H[0] = (m) => l.value = m), "auto-grow": e(n).autoGrow, autofocus: !e(n).fieldOnly || e(n).autofocus, "clear-icon": e(q), color: e(Y), density: e(n).density, disabled: e(V) || e(G), error: e(W), "error-messages": e(le), "hide-details": e(Se), label: e(n).label, loading: e(V), rows: e(n).rows, variant: e(n).variant, width: "100%", onKeyup: vn(te, ["esc"]) }), we({ _: 2 }, [_e(e(r), (m, L) => ({ name: L, fn: $((J) => [pe(C.$slots, L, U(ae({ ...J })))]) })), e(r).append ? void 0 : { name: "append", fn: $(() => [T(an, { "cancel-button-color": e(i), "cancel-button-size": e(A), "cancel-button-title": e(z), "cancel-button-variant": e(_), "cancel-icon": e(F), "cancel-icon-color": e(k), error: e(W), "field-only": e(ye), "hide-cancel-icon": e(ge), "hide-save-icon": e(se), loading: e(V), "loading-icon": e(Ae), "loading-icon-color": e(Pe), "save-button-color": e(Oe), "save-button-size": e(ze), "save-button-title": e(me), "save-button-variant": e(Ve), "save-icon": e(be), "save-icon-color": e(Q), onClose: te, onSave: P }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "auto-grow", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "rows", "variant"])], 8, ["disabled", "to"]))], 2)) : M("", !0), e(h) ? (p(), S("div", { key: 2, class: b(e(We)), style: K(e(ke)) }, [T(Je, U(ae(e(D))), { default: $(() => [T(Ke, null, { default: $(() => [ce("div", { ref_key: "cardFieldRef", ref: re }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : M("", !0)], 6));
} }), On = Object.freeze(Object.defineProperty({ __proto__: null, VInlineAutocomplete: Kn, VInlineCheckbox: Zn, VInlineCustomField: el, VInlineSelect: nl, VInlineSwitch: ol, VInlineTextField: al, VInlineTextarea: il }, Symbol.toStringTag, { value: "Module" })), Ue = Symbol();
function Bl(c = {}) {
  return { install: (t) => {
    t.provide(Ue, c);
    for (const l in On)
      t.component(l, On[l]);
  } };
}
export {
  Kn as VInlineAutocomplete,
  Zn as VInlineCheckbox,
  el as VInlineCustomField,
  nl as VInlineSelect,
  ol as VInlineSwitch,
  al as VInlineTextField,
  il as VInlineTextarea,
  Bl as createVInlineFields,
  On as default,
  Ue as globalOptions
};
(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode(":root{--v-inline-fields-top-padding-compact: 13px;--v-inline-fields-top-padding-comfortable: 17px;--v-inline-fields-top-padding-default: 21px;--v-inline-fields-input-height: 24px;--v-inline-fields-density-compact-height: 32px;--v-inline-fields-density-comfortable-height: 40px;--v-inline-fields-grey: #909090}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append{padding-top:0!important}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append .v-icon{font-size:1rem!important}.v-inline-fields{position:relative}.v-inline-fields--display-container *{align-items:center;display:flex}.v-inline-fields--display-container-cell{cursor:pointer;display:block;max-height:unset!important}.v-inline-fields--display-container-cell>div{width:100%}.v-inline-fields--display-container-cell-underline-full-width .v-inline-fields--display-value{width:100%}.v-inline-fields--display-container-cell .v-inline-fields--selection-control .v-inline-fields--display-value{justify-content:center}.v-inline-fields--display-container-cell,.v-inline-fields--display-container-cell .v-input,.v-inline-fields--display-container-cell .v-inline-fields--display-wrapper,.v-inline-fields--display-container-cell .v-selection-control__wrapper{height:100%!important;width:100%}.v-inline-fields--display-value{cursor:pointer;letter-spacing:.009375em!important}.v-inline-fields--display-value-empty{color:var(--v-inline-fields-grey);font-style:italic}.v-inline-fields--display-value-checkbox,.v-inline-fields--display-value-switch{padding-bottom:2px;padding-top:6px}.v-inline-fields--display-append-icon,.v-inline-fields--display-prepend-icon,.v-inline-fields--display-append-inner-icon,.v-inline-fields--display-prepend-inner-icon{align-items:flex-end;display:inline-flex}.v-inline-fields--container-cell{height:100%;width:100%}.v-inline-fields--container-disabled .v-inline-fields--display-value{cursor:default!important;opacity:var(--v-disabled-opacity)}.v-inline-fields--container-loading .v-inline-fields--display-value{cursor:wait!important}.v-inline-fields--container-icon-set-fa .v-field__clearable{font-size:.8rem}.v-inline-fields--container-icon-set-fa .v-field__append-inner{align-items:flex-end;padding-bottom:0!important}.v-inline-fields--container-v-select-compact-plain .v-input,.v-inline-fields--container-v-select-compact-underlined .v-input,.v-inline-fields--container-v-text-field-compact-plain .v-input,.v-inline-fields--container-v-text-field-compact-underlined .v-input{height:var(--v-inline-fields-density-compact-height);max-height:var(--v-inline-fields-density-compact-height)}.v-inline-fields--container-v-select-compact-plain .v-input__control,.v-inline-fields--container-v-select-compact-underlined .v-input__control,.v-inline-fields--container-v-text-field-compact-plain .v-input__control,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control{padding-bottom:4px}.v-inline-fields--container-v-select-compact-plain .v-input>div,.v-inline-fields--container-v-select-compact-underlined .v-input>div,.v-inline-fields--container-v-text-field-compact-plain .v-input>div,.v-inline-fields--container-v-text-field-compact-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input input{padding-bottom:10px}.v-inline-fields--container-v-select-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-compact-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-select__selection{align-items:center;padding-bottom:10px}.v-inline-fields--container-v-select-comfortable-plain .v-input,.v-inline-fields--container-v-select-comfortable-underlined .v-input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input{height:var(--v-inline-fields-density-comfortable-height);max-height:var(--v-inline-fields-density-comfortable-height)}.v-inline-fields--container-v-select-comfortable-plain .v-input__control,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control{padding-bottom:8px}.v-inline-fields--container-v-select-comfortable-plain .v-input>div,.v-inline-fields--container-v-select-comfortable-underlined .v-input>div,.v-inline-fields--container-v-text-field-comfortable-plain .v-input>div,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input input{padding-bottom:6px}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-select__selection{align-items:center;padding-bottom:6px}.v-inline-fields--container-v-select-compact-plain .v-field__append-inner,.v-inline-fields--container-v-select-compact-underlined .v-field__append-inner{padding-top:4px!important}.v-inline-fields--container-v-select-comfortable-plain .v-field__append-inner,.v-inline-fields--container-v-select-comfortable-underlined .v-field__append-inner{padding-top:8px!important}.v-inline-fields--container-v-textarea .v-inline-fields--save-fields-container{align-items:flex-end}.v-inline-fields--container-v-select,.v-inline-fields--container-v-textarea,.v-inline-fields--container-v-text-field{width:100%}.v-inline-fields--container-v-checkbox .v-input,.v-inline-fields--container-v-switch .v-input{align-items:center;display:flex;padding-bottom:0}.v-inline-fields--container-v-checkbox .v-input__append,.v-inline-fields--container-v-switch .v-input__append{margin-inline-start:0!important;margin-left:0;padding-bottom:0!important}.v-inline-fields--container-v-checkbox .v-selection-control,.v-inline-fields--container-v-switch .v-selection-control{min-height:unset}.v-inline-fields--container-v-checkbox .v-inline-fields--save-fields-container,.v-inline-fields--container-v-switch .v-inline-fields--save-fields-container{align-items:center!important}.v-inline-fields--container .v-input__append,.v-inline-fields--container .v-input__prepend,.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-top:0!important}.v-inline-fields--container .v-input__append .v-icon,.v-inline-fields--container .v-input__prepend .v-icon,.v-inline-fields--container .v-field__append-inner .v-icon,.v-inline-fields--container .v-field__prepend-inner .v-icon{font-size:1rem!important}.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-compact .v-input__append,.v-inline-fields--container-compact .v-input__prepend,.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-comfortable .v-input__append,.v-inline-fields--container-comfortable .v-input__prepend,.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{padding-bottom:6px!important}.v-inline-fields--container-default .v-input__append,.v-inline-fields--container-default .v-input__prepend,.v-inline-fields--container-default .v-field__append-inner,.v-inline-fields--container-default .v-field__prepend-inner{align-items:flex-end!important;padding-bottom:0!important}.v-inline-fields--container-default .v-input__append .v-icon,.v-inline-fields--container-default .v-input__prepend .v-icon,.v-inline-fields--container-default .v-field__append-inner .v-icon,.v-inline-fields--container-default .v-field__prepend-inner .v-icon{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)!important}.v-inline-fields--container-default .v-inline-fields--save-fields-container{align-items:flex-end!important}.v-inline-fields--card-container{height:fit-content;min-width:fit-content!important;position:absolute}.v-inline-fields--card-container .v-card{border:1px solid hsla(0,0%,50%,.5)}.v-inline-fields--card-container .v-card .v-card-text{padding:5px 10px}.v-inline-fields--card-container .v-card .v-card-text>div{align-items:center;display:flex}.v-inline-fields--card-container-checkbox .v-card .v-card-text .v-input__append{margin-inline-start:0}.v-inline-fields--save-fields-container{align-items:center;display:flex;height:100%;margin-left:.1rem}.v-inline-fields--boolean-icons{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-inline-fields .truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:250px}.v-inline-fields .v-input__append{padding-top:0}[data-v-f9b47ea2] .v-field__field,[data-v-4f65a7ea] .v-field__field{align-items:flex-end!important}")),document.head.appendChild(i)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
