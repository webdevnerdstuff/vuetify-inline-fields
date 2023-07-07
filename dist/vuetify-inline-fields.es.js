import { Fragment as pe, reactive as Ae, computed as v, watchEffect as Re, toRefs as Ql, capitalize as eo, warn as ht, watch as q, onScopeDispose as ge, effectScope as Xt, inject as ce, ref as W, unref as u, provide as Ee, shallowRef as ae, defineComponent as Te, camelize as no, h as bt, getCurrentInstance as ga, onBeforeUnmount as Ye, readonly as Jt, toRaw as qe, TransitionGroup as ha, Transition as ln, createVNode as p, mergeProps as H, onBeforeMount as to, nextTick as he, withDirectives as fe, resolveDirective as Me, vShow as Sn, isRef as on, onMounted as Bn, toRef as X, Text as ba, resolveDynamicComponent as Ia, Teleport as Ca, cloneVNode as Sa, createTextVNode as lo, vModelText as Ba, mergeModels as Ce, useModel as en, openBlock as ee, createBlock as je, createElementBlock as ie, normalizeClass as Q, normalizeStyle as Se, createCommentVNode as rn, createElementVNode as Le, toDisplayString as Zt, useAttrs as nn, withCtx as Ie, mergeDefaults as cn, useSlots as _n, onUnmounted as dn, createSlots as Pn, renderList as $n, renderSlot as pn, normalizeProps as vn, guardReactiveProps as fn, withKeys as tt } from "vue";
import { useTheme as Qt } from "vuetify";
/**
 * @name vuetify-inline-fields
 * @version 1.0.0-beta-1.4
 * @description Vuetify Inline Fields Component Library offers a comprehensive collection of reusable UI components to create elegant and efficient inline form fields within your applications.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-inline-fields/
 * @repository https://github.com/webdevnerdstuff/vuetify-inline-fields
 * @license MIT License
 */
const yn = Symbol("identifier"), Wn = { cancelButtonColor: "default", cancelButtonSize: "x-small", cancelButtonTitle: "Cancel", cancelButtonVariant: "text", cancelIcon: void 0, cancelIconColor: "default", closeSiblings: !1, color: "primary", density: "compact", disabled: !1, displayAppendIcon: void 0, displayAppendIconColor: "primary", displayAppendIconSize: "x-small", displayAppendInnerIcon: void 0, displayAppendInnerIconColor: "secondary", displayAppendInnerIconSize: "x-small", displayPrependIcon: void 0, displayPrependIconColor: "danger", displayPrependIconSize: "x-small", displayPrependInnerIcon: void 0, displayPrependInnerIconColor: "success", displayPrependInnerIconSize: "x-small", emptyText: "empty", fieldOnly: !1, hideDetails: !0, label: "", loading: !1, loadingWait: !0, name: "", tableField: !0, underlineColor: "primary", underlineStyle: "dotted", underlineWidth: "2px", underlined: !0, valueColor: "default" }, el = { autofocus: !0 }, It = { hideSaveIcon: !1, loadingIcon: void 0, loadingIconColor: "primary", saveButtonColor: "primary", saveButtonSize: "x-small", saveButtonTitle: "Save", saveButtonVariant: "text", saveIcon: void 0, saveIconColor: "primary" }, oo = { falseValue: !1, iconFalse: void 0, iconFalseColor: "danger", iconFalseTitle: "No", iconTrue: void 0, iconTrueColor: "success", iconTrueTitle: "Yes", icons: !0, trueValue: !0 }, xa = { ...Wn, ...oo, ...It, falseIcon: void 0, icons: !0, trueIcon: void 0 }, wa = { ...Wn, ...el, ...It, clearIcon: void 0, clearable: !1, hideSelected: !0, itemTitle: "title", itemValue: "value", items: () => [], menu: !0, variant: "underlined" }, ka = { ...Wn, ...oo, icons: !0, falseIcon: "" }, Va = { ...el, ...It, ...Wn, autoGrow: !0, rows: 1, truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, ao = { ...Wn, ...el, ...It, truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, Fa = { fa: { checkboxFalse: "$checkboxOff", checkboxTrue: "far fa-square-check", clear: "$clear", false: "$close", loading: "fa-circle-notch", save: "fa-floppy-disk", true: "$complete" }, mdi: { checkboxFalse: "$checkboxOff", checkboxTrue: "mdi:mdi-checkbox-outline", clear: "$clear", false: "$close", loading: "mdi-loading", save: "mdi-content-save", true: "$complete" } }, _e = (e) => {
  const { icon: t, iconOptions: n, name: l } = e;
  if (t)
    return t;
  const o = Fa[n == null ? void 0 : n.defaultSet];
  if (!o)
    throw new Error(`VInlineFields: No VInlineFields default ${n == null ? void 0 : n.defaultSet} icon set found for ${l}. Please set the icon prop.`);
  const i = o[l];
  if (!i)
    throw new Error(`VInlineFields: No ${l} icon found. Please set the icon prop, or set the default icon set to 'mdi' or 'fa'`);
  return i;
};
function N(e, t) {
  return (n) => Object.keys(e).reduce((l, o) => {
    const i = typeof e[o] == "object" && e[o] != null && !Array.isArray(e[o]) ? e[o] : { type: e[o] };
    return l[o] = n && o in n ? { ...i, default: n[o] } : i, t && !l[o].source && (l[o].source = t), l;
  }, {});
}
const re = N({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component");
function Il(e, t, n) {
  const l = t.length - 1;
  if (l < 0)
    return e === void 0 ? n : e;
  for (let o = 0; o < l; o++) {
    if (e == null)
      return n;
    e = e[t[o]];
  }
  return e == null || e[t[l]] === void 0 ? n : e[t[l]];
}
function xn(e, t) {
  if (e === t)
    return !0;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t))
    return !1;
  const n = Object.keys(e);
  return n.length === Object.keys(t).length && n.every((l) => xn(e[l], t[l]));
}
function De(e, t, n) {
  if (t == null)
    return e === void 0 ? n : e;
  if (e !== Object(e)) {
    if (typeof t != "function")
      return n;
    const o = t(e, n);
    return o === void 0 ? n : o;
  }
  if (typeof t == "string")
    return function(o, i, r) {
      return o != null && i && typeof i == "string" ? o[i] !== void 0 ? o[i] : Il(o, (i = (i = i.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), r) : r;
    }(e, t, n);
  if (Array.isArray(t))
    return Il(e, t, n);
  if (typeof t != "function")
    return n;
  const l = t(e, n);
  return l === void 0 ? n : l;
}
function J(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0;
}
function Et(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Ot(e) {
  return e && "$el" in e ? e.$el : e;
}
const Cl = Object.freeze({ enter: 13, tab: 9, delete: 46, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39, end: 35, home: 36, del: 46, backspace: 8, insert: 45, pageup: 33, pagedown: 34, shift: 16 });
function Nn(e, t, n) {
  const l = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    t.some((r) => r instanceof RegExp ? r.test(i) : r === i) && !(n != null && n.some((r) => r === i)) ? l[i] = e[i] : o[i] = e[i];
  return [l, o];
}
function nl(e, t) {
  const n = { ...e };
  return t.forEach((l) => delete n[l]), n;
}
function jn(e) {
  return Nn(e, ["class", "style", "id", /^data-/]);
}
function He(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function On(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function sn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const l = {};
  for (const o in e)
    l[o] = e[o];
  for (const o in t) {
    const i = e[o], r = t[o];
    Et(i) && Et(r) ? l[o] = sn(i, r, n) : Array.isArray(i) && Array.isArray(r) && n ? l[o] = n(i, r) : l[o] = r;
  }
  return l;
}
function io(e) {
  return e.map((t) => t.type === pe ? io(t.children) : t).flat();
}
function tn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (tn.cache.has(e))
    return tn.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return tn.cache.set(e, t), t;
}
function lt(e, t) {
  if (!t || typeof t != "object")
    return [];
  if (Array.isArray(t))
    return t.map((n) => lt(e, n)).flat(1);
  if (Array.isArray(t.children))
    return t.children.map((n) => lt(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertySymbols(t.component.provides).includes(e))
      return [t.component];
    if (t.component.subTree)
      return lt(e, t.component.subTree).flat(1);
  }
  return [];
}
function tl(e) {
  const t = Ae({}), n = v(e);
  return Re(() => {
    for (const l in n.value)
      t[l] = n.value[l];
  }, { flush: "sync" }), Ql(t);
}
function it(e, t) {
  return e.includes(t);
}
tn.cache = /* @__PURE__ */ new Map();
const Aa = /^on[^a-z]/, Tt = (e) => Aa.test(e);
function Sl(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const ze = () => [Function, Array];
function Bl(e, t) {
  return !!(e[t = "on" + eo(t)] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function ro(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
    n[l - 1] = arguments[l];
  if (Array.isArray(e))
    for (const o of e)
      o(...n);
  else
    typeof e == "function" && e(...n);
}
function rt(e, t) {
  var o, i, r;
  const n = function(a) {
    const s = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((c) => `${c}:not([tabindex="-1"]):not([disabled])`).join(", ");
    return [...a.querySelectorAll(s)];
  }(e), l = n.indexOf(document.activeElement);
  if (t)
    if (t === "first")
      (o = n[0]) == null || o.focus();
    else if (t === "last")
      (i = n.at(-1)) == null || i.focus();
    else {
      let a, s = l;
      const c = t === "next" ? 1 : -1;
      do
        s += c, a = n[s];
      while ((!a || a.offsetParent == null) && s < n.length && s >= 0);
      a ? a.focus() : rt(e, t === "next" ? "first" : "last");
    }
  else
    e !== document.activeElement && e.contains(document.activeElement) || ((r = n[0]) == null || r.focus());
}
const so = ["top", "bottom"], _a = ["start", "end", "left", "right"];
function zt(e, t) {
  let [n, l] = e.split(" ");
  return l || (l = it(so, n) ? "start" : it(_a, n) ? "top" : "center"), { side: xl(n, t), align: xl(l, t) };
}
function xl(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function kt(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function Vt(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function wl(e) {
  return { side: e.align, align: e.side };
}
function kl(e) {
  return it(so, e.side) ? "y" : "x";
}
class mn {
  constructor(t) {
    let { x: n, y: l, width: o, height: i } = t;
    this.x = n, this.y = l, this.width = o, this.height = i;
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
function Vl(e, t) {
  return { x: { before: Math.max(0, t.left - e.left), after: Math.max(0, e.right - t.right) }, y: { before: Math.max(0, t.top - e.top), after: Math.max(0, e.bottom - t.bottom) } };
}
function ll(e) {
  const t = e.getBoundingClientRect(), n = getComputedStyle(e), l = n.transform;
  if (l) {
    let o, i, r, a, s;
    if (l.startsWith("matrix3d("))
      o = l.slice(9, -1).split(/, /), i = +o[0], r = +o[5], a = +o[12], s = +o[13];
    else {
      if (!l.startsWith("matrix("))
        return new mn(t);
      o = l.slice(7, -1).split(/, /), i = +o[0], r = +o[3], a = +o[4], s = +o[5];
    }
    const c = n.transformOrigin, y = t.x - a - (1 - i) * parseFloat(c), d = t.y - s - (1 - r) * parseFloat(c.slice(c.indexOf(" ") + 1)), f = i ? t.width / i : e.offsetWidth + 1, m = r ? t.height / r : e.offsetHeight + 1;
    return new mn({ x: y, y: d, width: f, height: m });
  }
  return new mn(t);
}
function un(e, t, n) {
  if (e.animate === void 0)
    return { finished: Promise.resolve() };
  let l;
  try {
    l = e.animate(t, n);
  } catch {
    return { finished: Promise.resolve() };
  }
  return l.finished === void 0 && (l.finished = new Promise((o) => {
    l.onfinish = () => {
      o(l);
    };
  })), l;
}
const et = /* @__PURE__ */ new WeakMap();
function uo(e) {
  ht(`Vuetify: ${e}`);
}
function Fl(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Ue(e, t) {
  let n;
  function l() {
    n = Xt(), n.run(() => t.length ? t(() => {
      n == null || n.stop(), l();
    }) : t());
  }
  q(e, (o) => {
    o && !n ? l() : o || (n == null || n.stop(), n = void 0);
  }, { immediate: !0 }), ge(() => {
    n == null || n.stop();
  });
}
const ol = Symbol.for("vuetify:defaults");
function al() {
  const e = ce(ol);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function wn(e, t) {
  const n = al(), l = W(e), o = v(() => {
    if (u(t == null ? void 0 : t.disabled))
      return n.value;
    const i = u(t == null ? void 0 : t.scoped), r = u(t == null ? void 0 : t.reset), a = u(t == null ? void 0 : t.root);
    let s = sn(l.value, { prev: n.value });
    if (i)
      return s;
    if (r || a) {
      const c = Number(r || 1 / 0);
      for (let y = 0; y <= c && s && "prev" in s; y++)
        s = s.prev;
      return s && typeof a == "string" && a in s && (s = sn(sn(s, { prev: s }), s[a])), s;
    }
    return s.prev ? sn(s.prev, s) : s;
  });
  return Ee(ol, o), o;
}
function Pa() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : al();
  const l = ye("useDefaults");
  if (t = t ?? l.type.name ?? l.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const o = v(() => {
    var a;
    return (a = n.value) == null ? void 0 : a[e._as ?? t];
  }), i = new Proxy(e, { get(a, s) {
    var y, d, f, m;
    const c = Reflect.get(a, s);
    return s === "class" || s === "style" ? [(y = o.value) == null ? void 0 : y[s], c].filter((g) => g != null) : typeof s != "string" || function(g, I) {
      var h, V;
      return ((h = g.props) == null ? void 0 : h[I]) !== void 0 || ((V = g.props) == null ? void 0 : V[tn(I)]) !== void 0;
    }(l.vnode, s) ? c : ((d = o.value) == null ? void 0 : d[s]) ?? ((m = (f = n.value) == null ? void 0 : f.global) == null ? void 0 : m[s]) ?? c;
  } }), r = ae();
  return Re(() => {
    if (o.value) {
      const a = Object.entries(o.value).filter((s) => {
        let [c] = s;
        return c.startsWith(c[0].toUpperCase());
      });
      a.length && (r.value = Object.fromEntries(a));
    }
  }), { props: i, provideSubDefaults: function() {
    Ue(r, () => {
      var a;
      wn(sn(((a = function(s) {
        const { provides: c } = ye("injectSelf");
        if (c && s in c)
          return c[s];
      }(ol)) == null ? void 0 : a.value) ?? {}, r.value));
    });
  } };
}
function Tn(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return uo("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = N(e.props ?? {}, e.name)();
    const t = Object.keys(e.props);
    e.filterProps = function(n) {
      return Nn(n, t, ["class", "style"]);
    }, e.props._as = String, e.setup = function(n, l) {
      const o = al();
      if (!o.value)
        return e._setup(n, l);
      const { props: i, provideSubDefaults: r } = Pa(n, n._as ?? e.name, o), a = e._setup(i, l);
      return r(), a;
    };
  }
  return e;
}
function K() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (t) => (e ? Tn : Te)(t);
}
function co(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return K()({ name: n ?? eo(no(e.replace(/__/g, "-"))), props: { tag: { type: String, default: t }, ...re() }, setup(l, o) {
    let { slots: i } = o;
    return () => {
      var r;
      return bt(l.tag, { class: [e, l.class], style: l.style }, (r = i.default) == null ? void 0 : r.call(i));
    };
  } });
}
function po(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; )
      e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({ composed: !0 }) !== document ? null : t;
}
const st = "cubic-bezier(0.4, 0, 0.2, 1)";
function ye(e, t) {
  const n = ga();
  if (!n)
    throw new Error(`[Vuetify] ${e} ${t || "must be called from inside a setup function"}`);
  return n;
}
function Ne() {
  const e = ye(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return tn((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let vo = 0, ot = /* @__PURE__ */ new WeakMap();
function Pe() {
  const e = ye("getUid");
  if (ot.has(e))
    return ot.get(e);
  {
    const t = vo++;
    return ot.set(e, t), t;
  }
}
function fo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
  for (; e; ) {
    if (t ? $a(e) : il(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function ut(e, t) {
  const n = [];
  if (t && e && !t.contains(e))
    return n;
  for (; e && (il(e) && n.push(e), e !== t); )
    e = e.parentElement;
  return n;
}
function il(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const t = window.getComputedStyle(e);
  return t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function $a(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
Pe.reset = () => {
  vo = 0, ot = /* @__PURE__ */ new WeakMap();
};
const Fe = typeof window < "u", rl = Fe && "IntersectionObserver" in window, Dt = Fe && typeof CSS < "u" && CSS.supports !== void 0 && CSS.supports("selector(:focus-visible)");
function ne(e) {
  ye("useRender").render = e;
}
function sl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = W(), l = W();
  if (Fe) {
    const o = new ResizeObserver((i) => {
      e == null || e(i, o), i.length && (l.value = t === "content" ? i[0].contentRect : i[0].target.getBoundingClientRect());
    });
    Ye(() => {
      o.disconnect();
    }), q(n, (i, r) => {
      r && (o.unobserve(Ot(r)), l.value = void 0), i && o.observe(Ot(i));
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: Jt(l) };
}
function ve(e, t, n) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (y) => y, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (y) => y;
  const i = ye("useProxiedModel"), r = W(e[t] !== void 0 ? e[t] : n), a = tn(t), s = v(a !== t ? () => {
    var y, d, f, m;
    return e[t], !(!((y = i.vnode.props) != null && y.hasOwnProperty(t)) && !((d = i.vnode.props) != null && d.hasOwnProperty(a)) || !((f = i.vnode.props) != null && f.hasOwnProperty(`onUpdate:${t}`)) && !((m = i.vnode.props) != null && m.hasOwnProperty(`onUpdate:${a}`)));
  } : () => {
    var y, d;
    return e[t], !(!((y = i.vnode.props) != null && y.hasOwnProperty(t)) || !((d = i.vnode.props) != null && d.hasOwnProperty(`onUpdate:${t}`)));
  });
  Ue(() => !s.value, () => {
    q(() => e[t], (y) => {
      r.value = y;
    });
  });
  const c = v({ get() {
    const y = e[t];
    return l(s.value ? y : r.value);
  }, set(y) {
    const d = o(y), f = qe(s.value ? e[t] : r.value);
    f !== d && l(f) !== y && (r.value = d, i == null || i.emit(`update:${t}`, d));
  } });
  return Object.defineProperty(c, "externalValue", { get: () => s.value ? e[t] : r.value }), c;
}
const yo = Symbol.for("vuetify:locale");
function ul() {
  const e = ce(yo);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Gn() {
  const e = ce(yo);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const Al = Symbol.for("vuetify:theme"), me = N({ theme: String }, "theme");
function xe(e) {
  ye("provideTheme");
  const t = ce(Al, null);
  if (!t)
    throw new Error("Could not find Vuetify theme injection");
  const n = v(() => e.theme ?? (t == null ? void 0 : t.name.value)), l = v(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), o = { ...t, name: n, themeClasses: l };
  return Ee(Al, o), o;
}
const ke = N({ tag: { type: String, default: "div" } }, "tag"), Ea = N({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function be(e, t, n) {
  return K()({ name: e, props: Ea({ mode: n, origin: t }), setup(l, o) {
    let { slots: i } = o;
    const r = { onBeforeEnter(a) {
      l.origin && (a.style.transformOrigin = l.origin);
    }, onLeave(a) {
      if (l.leaveAbsolute) {
        const { offsetTop: s, offsetLeft: c, offsetWidth: y, offsetHeight: d } = a;
        a._transitionInitialStyles = { position: a.style.position, top: a.style.top, left: a.style.left, width: a.style.width, height: a.style.height }, a.style.position = "absolute", a.style.top = `${s}px`, a.style.left = `${c}px`, a.style.width = `${y}px`, a.style.height = `${d}px`;
      }
      l.hideOnLeave && a.style.setProperty("display", "none", "important");
    }, onAfterLeave(a) {
      if (l.leaveAbsolute && (a != null && a._transitionInitialStyles)) {
        const { position: s, top: c, left: y, width: d, height: f } = a._transitionInitialStyles;
        delete a._transitionInitialStyles, a.style.position = s || "", a.style.top = c || "", a.style.left = y || "", a.style.width = d || "", a.style.height = f || "";
      }
    } };
    return () => {
      const a = l.group ? ha : ln;
      return bt(a, { name: l.disabled ? "" : e, css: !l.disabled, ...l.group ? void 0 : { mode: l.mode }, ...l.disabled ? {} : r }, i.default);
    };
  } });
}
function mo(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return K()({ name: e, props: { mode: { type: String, default: n }, disabled: Boolean }, setup(l, o) {
    let { slots: i } = o;
    return () => bt(ln, { name: l.disabled ? "" : e, css: !l.disabled, ...l.disabled ? {} : t }, i.default);
  } });
}
function go() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", n = no(`offset-${t}`);
  return { onBeforeEnter(i) {
    i._parent = i.parentNode, i._initialStyle = { transition: i.style.transition, overflow: i.style.overflow, [t]: i.style[t] };
  }, onEnter(i) {
    const r = i._initialStyle;
    i.style.setProperty("transition", "none", "important"), i.style.overflow = "hidden";
    const a = `${i[n]}px`;
    i.style[t] = "0", i.offsetHeight, i.style.transition = r.transition, e && i._parent && i._parent.classList.add(e), requestAnimationFrame(() => {
      i.style[t] = a;
    });
  }, onAfterEnter: o, onEnterCancelled: o, onLeave(i) {
    i._initialStyle = { transition: "", overflow: i.style.overflow, [t]: i.style[t] }, i.style.overflow = "hidden", i.style[t] = `${i[n]}px`, i.offsetHeight, requestAnimationFrame(() => i.style[t] = "0");
  }, onAfterLeave: l, onLeaveCancelled: l };
  function l(i) {
    e && i._parent && i._parent.classList.remove(e), o(i);
  }
  function o(i) {
    const r = i._initialStyle[t];
    i.style.overflow = i._initialStyle.overflow, r != null && (i.style[t] = r), delete i._initialStyle;
  }
}
const Oa = N({ target: Object }, "v-dialog-transition"), ho = K()({ name: "VDialogTransition", props: Oa(), setup(e, t) {
  let { slots: n } = t;
  const l = { onBeforeEnter(o) {
    o.style.pointerEvents = "none", o.style.visibility = "hidden";
  }, async onEnter(o, i) {
    var f;
    await new Promise((m) => requestAnimationFrame(m)), await new Promise((m) => requestAnimationFrame(m)), o.style.visibility = "";
    const { x: r, y: a, sx: s, sy: c, speed: y } = Pl(e.target, o), d = un(o, [{ transform: `translate(${r}px, ${a}px) scale(${s}, ${c})`, opacity: 0 }, {}], { duration: 225 * y, easing: "cubic-bezier(0.0, 0, 0.2, 1)" });
    (f = _l(o)) == null || f.forEach((m) => {
      un(m, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * y, easing: st });
    }), d.finished.then(() => i());
  }, onAfterEnter(o) {
    o.style.removeProperty("pointer-events");
  }, onBeforeLeave(o) {
    o.style.pointerEvents = "none";
  }, async onLeave(o, i) {
    var d;
    await new Promise((f) => requestAnimationFrame(f));
    const { x: r, y: a, sx: s, sy: c, speed: y } = Pl(e.target, o);
    un(o, [{}, { transform: `translate(${r}px, ${a}px) scale(${s}, ${c})`, opacity: 0 }], { duration: 125 * y, easing: "cubic-bezier(0.4, 0, 1, 1)" }).finished.then(() => i()), (d = _l(o)) == null || d.forEach((f) => {
      un(f, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * y, easing: st });
    });
  }, onAfterLeave(o) {
    o.style.removeProperty("pointer-events");
  } };
  return () => e.target ? p(ln, H({ name: "dialog-transition" }, l, { css: !1 }), n) : p(ln, { name: "dialog-transition" }, n);
} });
function _l(e) {
  var n;
  const t = (n = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : n.children;
  return t && [...t];
}
function Pl(e, t) {
  const n = e.getBoundingClientRect(), l = ll(t), [o, i] = getComputedStyle(t).transformOrigin.split(" ").map((V) => parseFloat(V)), [r, a] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = n.left + n.width / 2;
  r === "left" || a === "left" ? s -= n.width / 2 : r !== "right" && a !== "right" || (s += n.width / 2);
  let c = n.top + n.height / 2;
  r === "top" || a === "top" ? c -= n.height / 2 : r !== "bottom" && a !== "bottom" || (c += n.height / 2);
  const y = n.width / l.width, d = n.height / l.height, f = Math.max(1, y, d), m = y / f || 0, g = d / f || 0, I = l.width * l.height / (window.innerWidth * window.innerHeight), h = I > 0.12 ? Math.min(1.5, 10 * (I - 0.12) + 1) : 1;
  return { x: s - (o + l.left), y: c - (i + l.top), sx: m, sy: g, speed: h };
}
be("fab-transition", "center center", "out-in"), be("dialog-bottom-transition"), be("dialog-top-transition"), be("fade-transition"), be("scale-transition"), be("scroll-x-transition"), be("scroll-x-reverse-transition"), be("scroll-y-transition"), be("scroll-y-reverse-transition"), be("slide-x-transition"), be("slide-x-reverse-transition");
const bo = be("slide-y-transition");
be("slide-y-reverse-transition");
const Ta = mo("expand-transition", go()), Io = mo("expand-x-transition", go("", !0)), za = N({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), we = K(!1)({ name: "VDefaultsProvider", props: za(), setup(e, t) {
  let { slots: n } = t;
  const { defaults: l, disabled: o, reset: i, root: r, scoped: a } = Ql(e);
  return wn(l, { reset: i, root: r, scoped: a, disabled: o }), () => {
    var s;
    return (s = n.default) == null ? void 0 : s.call(n);
  };
} }), kn = N({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function Vn(e) {
  return { dimensionStyles: v(() => ({ height: J(e.height), maxHeight: J(e.maxHeight), maxWidth: J(e.maxWidth), minHeight: J(e.minHeight), minWidth: J(e.minWidth), width: J(e.width) })) };
}
const Co = N({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...re(), ...kn() }, "VResponsive"), $l = K()({ name: "VResponsive", props: Co(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: l } = function(i) {
    return { aspectStyles: v(() => {
      const r = Number(i.aspectRatio);
      return r ? { paddingBottom: String(1 / r * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: o } = Vn(e);
  return ne(() => {
    var i;
    return p("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [o.value, e.style] }, [p("div", { class: "v-responsive__sizer", style: l.value }, null), (i = n.additional) == null ? void 0 : i.call(n), n.default && p("div", { class: ["v-responsive__content", e.contentClass] }, [n.default()])]);
  }), {};
} }), qn = N({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), Ge = (e, t) => {
  let { slots: n } = t;
  const { transition: l, disabled: o, ...i } = e, { component: r = ln, ...a } = typeof l == "object" ? l : {};
  return bt(r, H(typeof l == "string" ? { name: o ? "" : l } : a, i, { disabled: o }), n);
};
function El(e, t) {
  var l;
  const n = (l = e._observe) == null ? void 0 : l[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const cl = { mounted: function(e, t) {
  if (!rl)
    return;
  const n = t.modifiers || {}, l = t.value, { handler: o, options: i } = typeof l == "object" ? l : { handler: l, options: {} }, r = new IntersectionObserver(function() {
    var d;
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const c = (d = e._observe) == null ? void 0 : d[t.instance.$.uid];
    if (!c)
      return;
    const y = a.some((f) => f.isIntersecting);
    !o || n.quiet && !c.init || n.once && !y && !c.init || o(y, a, s), y && n.once ? El(e, t) : c.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = { init: !1, observer: r }, r.observe(e);
}, unmounted: El }, Da = N({ alt: String, cover: Boolean, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, srcset: String, ...Co(), ...re(), ...qn() }, "VImg"), La = K()({ name: "VImg", directives: { intersect: cl }, props: Da(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, t) {
  let { emit: n, slots: l } = t;
  const o = ae(""), i = W(), r = ae(e.eager ? "loading" : "idle"), a = ae(), s = ae(), c = v(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), y = v(() => c.value.aspect || a.value / s.value || 0);
  function d(C) {
    if ((!e.eager || !C) && (!rl || C || e.eager)) {
      if (r.value = "loading", c.value.lazySrc) {
        const b = new Image();
        b.src = c.value.lazySrc, h(b, null);
      }
      c.value.src && he(() => {
        var b, P;
        if (n("loadstart", ((b = i.value) == null ? void 0 : b.currentSrc) || c.value.src), (P = i.value) == null ? void 0 : P.complete) {
          if (i.value.naturalWidth || m(), r.value === "error")
            return;
          y.value || h(i.value, null), f();
        } else
          y.value || h(i.value), g();
      });
    }
  }
  function f() {
    var C;
    g(), r.value = "loaded", n("load", ((C = i.value) == null ? void 0 : C.currentSrc) || c.value.src);
  }
  function m() {
    var C;
    r.value = "error", n("error", ((C = i.value) == null ? void 0 : C.currentSrc) || c.value.src);
  }
  function g() {
    const C = i.value;
    C && (o.value = C.currentSrc || C.src);
  }
  q(() => e.src, () => {
    d(r.value !== "idle");
  }), q(y, (C, b) => {
    !C && b && i.value && h(i.value);
  }), to(() => d());
  let I = -1;
  function h(C) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const P = () => {
      clearTimeout(I);
      const { naturalHeight: w, naturalWidth: A } = C;
      w || A ? (a.value = A, s.value = w) : C.complete || r.value !== "loading" || b == null ? (C.currentSrc.endsWith(".svg") || C.currentSrc.startsWith("data:image/svg+xml")) && (a.value = 1, s.value = 1) : I = window.setTimeout(P, b);
    };
    P();
  }
  const V = v(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), $ = () => {
    var P;
    if (!c.value.src || r.value === "idle")
      return null;
    const C = p("img", { class: ["v-img__img", V.value], src: c.value.src, srcset: c.value.srcset, alt: e.alt, sizes: e.sizes, ref: i, onLoad: f, onError: m }, null), b = (P = l.sources) == null ? void 0 : P.call(l);
    return p(Ge, { transition: e.transition, appear: !0 }, { default: () => [fe(b ? p("picture", { class: "v-img__picture" }, [b, C]) : C, [[Sn, r.value === "loaded"]])] });
  }, x = () => p(Ge, { transition: e.transition }, { default: () => [c.value.lazySrc && r.value !== "loaded" && p("img", { class: ["v-img__img", "v-img__img--preload", V.value], src: c.value.lazySrc, alt: e.alt }, null)] }), E = () => l.placeholder ? p(Ge, { transition: e.transition, appear: !0 }, { default: () => [(r.value === "loading" || r.value === "error" && !l.error) && p("div", { class: "v-img__placeholder" }, [l.placeholder()])] }) : null, L = () => l.error ? p(Ge, { transition: e.transition, appear: !0 }, { default: () => [r.value === "error" && p("div", { class: "v-img__error" }, [l.error()])] }) : null, _ = () => e.gradient ? p("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, B = ae(!1);
  {
    const C = q(y, (b) => {
      b && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          B.value = !0;
        });
      }), C());
    });
  }
  return ne(() => {
    const [C] = $l.filterProps(e);
    return fe(p($l, H({ class: ["v-img", { "v-img--booting": !B.value }, e.class], style: [{ width: J(e.width === "auto" ? a.value : e.width) }, e.style] }, C, { aspectRatio: y.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => p(pe, null, [p($, null, null), p(x, null, null), p(_, null, null), p(E, null, null), p(L, null, null)]), default: l.default }), [[Me("intersect"), { handler: d, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: o, image: i, state: r, naturalWidth: a, naturalHeight: s };
} }), Hn = N({ border: [Boolean, Number, String] }, "border");
function Un(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ne();
  return { borderClasses: v(() => {
    const n = on(e) ? e.value : e.border, l = [];
    if (n === !0 || n === "")
      l.push(`${t}--border`);
    else if (typeof n == "string" || n === 0)
      for (const o of String(n).split(" "))
        l.push(`border-${o}`);
    return l;
  }) };
}
function dl(e) {
  return tl(() => {
    const t = [], n = {};
    return e.value.background && (Fl(e.value.background) ? n.backgroundColor = e.value.background : t.push(`bg-${e.value.background}`)), e.value.text && (Fl(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), { colorClasses: t, colorStyles: n };
  });
}
function We(e, t) {
  const n = v(() => ({ text: on(e) ? e.value : t ? e[t] : null })), { colorClasses: l, colorStyles: o } = dl(n);
  return { textColorClasses: l, textColorStyles: o };
}
function zn(e, t) {
  const n = v(() => ({ background: on(e) ? e.value : t ? e[t] : null })), { colorClasses: l, colorStyles: o } = dl(n);
  return { backgroundColorClasses: l, backgroundColorStyles: o };
}
const Kn = N({ elevation: { type: [Number, String], validator(e) {
  const t = parseInt(e);
  return !isNaN(t) && t >= 0 && t <= 24;
} } }, "elevation");
function Yn(e) {
  return { elevationClasses: v(() => {
    const t = on(e) ? e.value : e.elevation, n = [];
    return t == null || n.push(`elevation-${t}`), n;
  }) };
}
const Xe = N({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function Je(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ne();
  return { roundedClasses: v(() => {
    const n = on(e) ? e.value : e.rounded, l = [];
    if (n === !0 || n === "")
      l.push(`${t}--rounded`);
    else if (typeof n == "string" || n === 0)
      for (const o of String(n).split(" "))
        l.push(`rounded-${o}`);
    return l;
  }) };
}
const Ra = [null, "default", "comfortable", "compact"], Ze = N({ density: { type: String, default: "default", validator: (e) => Ra.includes(e) } }, "density");
function Qe(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ne();
  return { densityClasses: v(() => `${t}--density-${e.density}`) };
}
const Ma = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Ct(e, t) {
  return p(pe, null, [e && p("span", { key: "overlay", class: `${t}__overlay` }, null), p("span", { key: "underlay", class: `${t}__underlay` }, null)]);
}
const an = N({ color: String, variant: { type: String, default: "elevated", validator: (e) => Ma.includes(e) } }, "variant");
function St(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ne();
  const n = v(() => {
    const { variant: i } = u(e);
    return `${t}--variant-${i}`;
  }), { colorClasses: l, colorStyles: o } = dl(v(() => {
    const { variant: i, color: r } = u(e);
    return { [["elevated", "flat"].includes(i) ? "background" : "text"]: r };
  }));
  return { colorClasses: l, colorStyles: o, variantClasses: n };
}
const So = N({ divided: Boolean, ...Hn(), ...re(), ...Ze(), ...Kn(), ...Xe(), ...ke(), ...me(), ...an() }, "VBtnGroup"), Ol = K()({ name: "VBtnGroup", props: So(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = xe(e), { densityClasses: o } = Qe(e), { borderClasses: i } = Un(e), { elevationClasses: r } = Yn(e), { roundedClasses: a } = Je(e);
  wn({ VBtn: { height: "auto", color: X(e, "color"), density: X(e, "density"), flat: !0, variant: X(e, "variant") } }), ne(() => p(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, l.value, i.value, o.value, r.value, a.value, e.class], style: e.style }, n));
} }), Bo = N({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), xo = N({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function wo(e, t) {
  let n = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
  const l = ye("useGroupItem");
  if (!l)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const o = Pe();
  Ee(Symbol.for(`${t.description}:id`), o);
  const i = ce(t, null);
  if (!i) {
    if (!n)
      return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const r = X(e, "value"), a = v(() => i.disabled.value || e.disabled);
  i.register({ id: o, value: r, disabled: a }, l), Ye(() => {
    i.unregister(o);
  });
  const s = v(() => i.isSelected(o)), c = v(() => s.value && [i.selectedClass.value, e.selectedClass]);
  return q(s, (y) => {
    l.emit("group:selected", { value: y });
  }), { id: o, isSelected: s, toggle: () => i.select(o, !s.value), select: (y) => i.select(o, y), selectedClass: c, value: r, disabled: a, group: i };
}
function ko(e, t) {
  let n = !1;
  const l = Ae([]), o = ve(e, "modelValue", [], (c) => c == null ? [] : Tl(l, He(c)), (c) => {
    const y = function(d, f) {
      const m = [];
      return f.forEach((g) => {
        const I = d.findIndex((h) => h.id === g);
        if (~I) {
          const h = d[I];
          m.push(h.value != null ? h.value : I);
        }
      }), m;
    }(l, c);
    return e.multiple ? y : y[0];
  }), i = ye("useGroup");
  function r() {
    const c = l.find((y) => !y.disabled);
    c && e.mandatory === "force" && !o.value.length && (o.value = [c.id]);
  }
  function a(c) {
    if (e.multiple && uo('This method is not supported when using "multiple" prop'), o.value.length) {
      const y = o.value[0], d = l.findIndex((g) => g.id === y);
      let f = (d + c) % l.length, m = l[f];
      for (; m.disabled && f !== d; )
        f = (f + c) % l.length, m = l[f];
      if (m.disabled)
        return;
      o.value = [l[f].id];
    } else {
      const y = l.find((d) => !d.disabled);
      y && (o.value = [y.id]);
    }
  }
  Bn(() => {
    r();
  }), Ye(() => {
    n = !0;
  });
  const s = { register: function(c, y) {
    const d = c, f = lt(Symbol.for(`${t.description}:id`), i == null ? void 0 : i.vnode).indexOf(y);
    f > -1 ? l.splice(f, 0, d) : l.push(d);
  }, unregister: function(c) {
    if (n)
      return;
    r();
    const y = l.findIndex((d) => d.id === c);
    l.splice(y, 1);
  }, selected: o, select: function(c, y) {
    const d = l.find((f) => f.id === c);
    if (!y || !(d != null && d.disabled))
      if (e.multiple) {
        const f = o.value.slice(), m = f.findIndex((I) => I === c), g = ~m;
        if (y = y ?? !g, g && e.mandatory && f.length <= 1 || !g && e.max != null && f.length + 1 > e.max)
          return;
        m < 0 && y ? f.push(c) : m >= 0 && !y && f.splice(m, 1), o.value = f;
      } else {
        const f = o.value.includes(c);
        if (e.mandatory && f)
          return;
        o.value = y ?? !f ? [c] : [];
      }
  }, disabled: X(e, "disabled"), prev: () => a(l.length - 1), next: () => a(1), isSelected: (c) => o.value.includes(c), selectedClass: v(() => e.selectedClass), items: v(() => l), getItemIndex: (c) => function(y, d) {
    const f = Tl(y, [d]);
    return f.length ? y.findIndex((m) => m.id === f[0]) : -1;
  }(l, c) };
  return Ee(t, s), s;
}
function Tl(e, t) {
  const n = [];
  return t.forEach((l) => {
    const o = e.find((r) => xn(l, r.value)), i = e[l];
    (o == null ? void 0 : o.value) != null ? n.push(o.id) : i != null && n.push(i.id);
  }), n;
}
const Vo = Symbol.for("vuetify:v-btn-toggle"), Wa = N({ ...So(), ...Bo() }, "VBtnToggle");
K()({ name: "VBtnToggle", props: Wa(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: l, next: o, prev: i, select: r, selected: a } = ko(e, Vo);
  return ne(() => {
    const [s] = Ol.filterProps(e);
    return p(Ol, H({ class: ["v-btn-toggle", e.class] }, s, { style: e.style }), { default: () => {
      var c;
      return [(c = n.default) == null ? void 0 : c.call(n, { isSelected: l, next: o, prev: i, select: r, selected: a })];
    } });
  }), { next: o, prev: i, select: r };
} });
const de = [String, Function, Object, Array], Na = Symbol.for("vuetify:icons"), ct = N({ icon: { type: de }, tag: { type: String, required: !0 } }, "icon"), zl = K()({ name: "VComponentIcon", props: ct(), setup(e, t) {
  let { slots: n } = t;
  return () => {
    const l = e.icon;
    return p(e.tag, null, { default: () => {
      var o;
      return [e.icon ? p(l, null, null) : (o = n.default) == null ? void 0 : o.call(n)];
    } });
  };
} }), ja = Tn({ name: "VSvgIcon", inheritAttrs: !1, props: ct(), setup(e, t) {
  let { attrs: n } = t;
  return () => p(e.tag, H(n, { style: null }), { default: () => [p("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((l) => Array.isArray(l) ? p("path", { d: l[0], "fill-opacity": l[1] }, null) : p("path", { d: l }, null)) : p("path", { d: e.icon }, null)])] });
} });
Tn({ name: "VLigatureIcon", props: ct(), setup: (e) => () => p(e.tag, null, { default: () => [e.icon] }) }), Tn({ name: "VClassIcon", props: ct(), setup: (e) => () => p(e.tag, { class: e.icon }, null) });
const Ga = ["x-small", "small", "default", "large", "x-large"], Xn = N({ size: { type: [String, Number], default: "default" } }, "size");
function Jn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ne();
  return tl(() => {
    let n, l;
    return it(Ga, e.size) ? n = `${t}--size-${e.size}` : e.size && (l = { width: J(e.size), height: J(e.size) }), { sizeClasses: n, sizeStyles: l };
  });
}
const qa = N({ color: String, start: Boolean, end: Boolean, icon: de, ...re(), ...Xn(), ...ke({ tag: "i" }), ...me() }, "VIcon"), se = K()({ name: "VIcon", props: qa(), setup(e, t) {
  let { attrs: n, slots: l } = t;
  const o = W(), { themeClasses: i } = xe(e), { iconData: r } = ((y) => {
    const d = ce(Na);
    if (!d)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: v(() => {
      var h;
      const f = u(y);
      if (!f)
        return { component: zl };
      let m = f;
      if (typeof m == "string" && (m = m.trim(), m.startsWith("$") && (m = (h = d.aliases) == null ? void 0 : h[m.slice(1)])), !m)
        throw new Error(`Could not find aliased icon "${f}"`);
      if (Array.isArray(m))
        return { component: ja, icon: m };
      if (typeof m != "string")
        return { component: zl, icon: m };
      const g = Object.keys(d.sets).find((V) => typeof m == "string" && m.startsWith(`${V}:`)), I = g ? m.slice(g.length + 1) : m;
      return { component: d.sets[g ?? d.defaultSet].component, icon: I };
    }) };
  })(v(() => o.value || e.icon)), { sizeClasses: a } = Jn(e), { textColorClasses: s, textColorStyles: c } = We(X(e, "color"));
  return ne(() => {
    var d, f;
    const y = (d = l.default) == null ? void 0 : d.call(l);
    return y && (o.value = (f = io(y).filter((m) => m.type === ba && m.children && typeof m.children == "string")[0]) == null ? void 0 : f.children), p(r.value.component, { tag: e.tag, icon: r.value.icon, class: ["v-icon", "notranslate", i.value, a.value, s.value, { "v-icon--clickable": !!n.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [a.value ? void 0 : { fontSize: J(e.size), height: J(e.size), width: J(e.size) }, c.value, e.style], role: n.onClick ? "button" : void 0, "aria-hidden": !n.onClick }, { default: () => [y] });
  }), {};
} });
function Fo(e, t) {
  const n = W(), l = ae(!1);
  if (rl) {
    const o = new IntersectionObserver((i) => {
      e == null || e(i, o), l.value = !!i.find((r) => r.isIntersecting);
    }, t);
    Ye(() => {
      o.disconnect();
    }), q(n, (i, r) => {
      r && (o.unobserve(r), l.value = !1), i && o.observe(i);
    }, { flush: "post" });
  }
  return { intersectionRef: n, isIntersecting: l };
}
const Ha = N({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...re(), ...Xn(), ...ke({ tag: "div" }), ...me() }, "VProgressCircular"), Ao = K()({ name: "VProgressCircular", props: Ha(), setup(e, t) {
  let { slots: n } = t;
  const l = 2 * Math.PI * 20, o = W(), { themeClasses: i } = xe(e), { sizeClasses: r, sizeStyles: a } = Jn(e), { textColorClasses: s, textColorStyles: c } = We(X(e, "color")), { textColorClasses: y, textColorStyles: d } = We(X(e, "bgColor")), { intersectionRef: f, isIntersecting: m } = Fo(), { resizeRef: g, contentRect: I } = sl(), h = v(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), V = v(() => Number(e.width)), $ = v(() => a.value ? Number(e.size) : I.value ? I.value.width : Math.max(V.value, 32)), x = v(() => 20 / (1 - V.value / $.value) * 2), E = v(() => V.value / $.value * x.value), L = v(() => J((100 - h.value) / 100 * l));
  return Re(() => {
    f.value = o.value, g.value = o.value;
  }), ne(() => p(e.tag, { ref: o, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": m.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, i.value, r.value, s.value, e.class], style: [a.value, c.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : h.value }, { default: () => [p("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${x.value} ${x.value}` }, [p("circle", { class: ["v-progress-circular__underlay", y.value], style: d.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": E.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), p("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": E.value, "stroke-dasharray": l, "stroke-dashoffset": L.value }, null)]), n.default && p("div", { class: "v-progress-circular__content" }, [n.default({ value: h.value })])] })), {};
} }), Dl = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, _o = N({ location: String }, "location");
function Po(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: l } = Gn();
  return { locationStyles: v(() => {
    if (!e.location)
      return {};
    const { side: i, align: r } = zt(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, l.value);
    function a(c) {
      return n ? n(c) : 0;
    }
    const s = {};
    return i !== "center" && (t ? s[Dl[i]] = `calc(100% - ${a(i)}px)` : s[i] = 0), r !== "center" ? t ? s[Dl[r]] = `calc(100% - ${a(r)}px)` : s[r] = 0 : (i === "center" ? s.top = s.left = "50%" : s[{ top: "left", bottom: "left", left: "top", right: "top" }[i]] = "50%", s.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[i]), s;
  }) };
}
const Ua = N({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...re(), ..._o({ location: "top" }), ...Xe(), ...ke(), ...me() }, "VProgressLinear"), Ka = K()({ name: "VProgressLinear", props: Ua(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = ve(e, "modelValue"), { isRtl: o, rtlClasses: i } = Gn(), { themeClasses: r } = xe(e), { locationStyles: a } = Po(e), { textColorClasses: s, textColorStyles: c } = We(e, "color"), { backgroundColorClasses: y, backgroundColorStyles: d } = zn(v(() => e.bgColor || e.color)), { backgroundColorClasses: f, backgroundColorStyles: m } = zn(e, "color"), { roundedClasses: g } = Je(e), { intersectionRef: I, isIntersecting: h } = Fo(), V = v(() => parseInt(e.max, 10)), $ = v(() => parseInt(e.height, 10)), x = v(() => parseFloat(e.bufferValue) / V.value * 100), E = v(() => parseFloat(l.value) / V.value * 100), L = v(() => o.value !== e.reverse), _ = v(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), B = v(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function C(b) {
    if (!I.value)
      return;
    const { left: P, right: w, width: A } = I.value.getBoundingClientRect(), k = L.value ? A - b.clientX + (w - A) : b.clientX - P;
    l.value = Math.round(k / A * V.value);
  }
  return ne(() => p(e.tag, { ref: I, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && h.value, "v-progress-linear--reverse": L.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, g.value, r.value, i.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? J($.value) : 0, "--v-progress-linear-height": J($.value), ...a.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : E.value, onClick: e.clickable && C }, { default: () => [e.stream && p("div", { key: "stream", class: ["v-progress-linear__stream", s.value], style: { ...c.value, [L.value ? "left" : "right"]: J(-$.value), borderTop: `${J($.value / 2)} dotted`, opacity: B.value, top: `calc(50% - ${J($.value / 4)})`, width: J(100 - x.value, "%"), "--v-progress-linear-stream-to": J($.value * (L.value ? 1 : -1)) } }, null), p("div", { class: ["v-progress-linear__background", y.value], style: [d.value, { opacity: B.value, width: J(e.stream ? x.value : 100, "%") }] }, null), p(ln, { name: _.value }, { default: () => [e.indeterminate ? p("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((b) => p("div", { key: b, class: ["v-progress-linear__indeterminate", b, f.value], style: m.value }, null))]) : p("div", { class: ["v-progress-linear__determinate", f.value], style: [m.value, { width: J(E.value, "%") }] }, null)] }), n.default && p("div", { class: "v-progress-linear__content" }, [n.default({ value: E.value, buffer: x.value })])] })), {};
} }), $o = N({ loading: [Boolean, String] }, "loader");
function pl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ne();
  return { loaderClasses: v(() => ({ [`${t}--loading`]: e.loading })) };
}
function Eo(e, t) {
  var l;
  let { slots: n } = t;
  return p("div", { class: `${e.name}__loader` }, [((l = n.default) == null ? void 0 : l.call(n, { color: e.color, isActive: e.active })) || p(Ka, { active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const Ya = ["static", "relative", "fixed", "absolute", "sticky"], Xa = N({ position: { type: String, validator: (e) => Ya.includes(e) } }, "position");
function vl(e, t) {
  const n = Ia("RouterLink"), l = v(() => !(!e.href && !e.to)), o = v(() => (l == null ? void 0 : l.value) || Bl(t, "click") || Bl(e, "click"));
  if (typeof n == "string")
    return { isLink: l, isClickable: o, href: X(e, "href") };
  const i = e.to ? n.useLink(e) : void 0;
  return { isLink: l, isClickable: o, route: i == null ? void 0 : i.route, navigate: i == null ? void 0 : i.navigate, isActive: i && v(() => {
    var r, a;
    return e.exact ? (r = i.isExactActive) == null ? void 0 : r.value : (a = i.isActive) == null ? void 0 : a.value;
  }), href: v(() => e.to ? i == null ? void 0 : i.route.value.href : e.href) };
}
const fl = N({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let Ft = !1;
const Lt = Symbol("rippleStop"), Ja = 80;
function Ll(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function Rt(e) {
  return e.constructor.name === "TouchEvent";
}
function Oo(e) {
  return e.constructor.name === "KeyboardEvent";
}
const dt = { show(e, t) {
  var m;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((m = t == null ? void 0 : t._ripple) != null && m.enabled))
    return;
  const l = document.createElement("span"), o = document.createElement("span");
  l.appendChild(o), l.className = "v-ripple__container", n.class && (l.className += ` ${n.class}`);
  const { radius: i, scale: r, x: a, y: s, centerX: c, centerY: y } = function(g, I) {
    var B;
    let h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, V = 0, $ = 0;
    if (!Oo(g)) {
      const C = I.getBoundingClientRect(), b = Rt(g) ? g.touches[g.touches.length - 1] : g;
      V = b.clientX - C.left, $ = b.clientY - C.top;
    }
    let x = 0, E = 0.3;
    (B = I._ripple) != null && B.circle ? (E = 0.15, x = I.clientWidth / 2, x = h.center ? x : x + Math.sqrt((V - x) ** 2 + ($ - x) ** 2) / 4) : x = Math.sqrt(I.clientWidth ** 2 + I.clientHeight ** 2) / 2;
    const L = (I.clientWidth - 2 * x) / 2 + "px", _ = (I.clientHeight - 2 * x) / 2 + "px";
    return { radius: x, scale: E, x: h.center ? L : V - x + "px", y: h.center ? _ : $ - x + "px", centerX: L, centerY: _ };
  }(e, t, n), d = 2 * i + "px";
  o.className = "v-ripple__animation", o.style.width = d, o.style.height = d, t.appendChild(l);
  const f = window.getComputedStyle(t);
  f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), o.classList.add("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--visible"), Ll(o, `translate(${a}, ${s}) scale3d(${r},${r},${r})`), o.dataset.activated = String(performance.now()), setTimeout(() => {
    o.classList.remove("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--in"), Ll(o, `translate(${c}, ${y}) scale3d(1,1,1)`);
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
  const l = performance.now() - Number(n.dataset.activated), o = Math.max(250 - l, 0);
  setTimeout(() => {
    n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
      var r;
      e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((r = n.parentNode) == null ? void 0 : r.parentNode) === e && e.removeChild(n.parentNode);
    }, 300);
  }, o);
} };
function To(e) {
  return e === void 0 || !!e;
}
function Dn(e) {
  const t = {}, n = e.currentTarget;
  if (n != null && n._ripple && !n._ripple.touched && !e[Lt]) {
    if (e[Lt] = !0, Rt(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch)
      return;
    if (t.center = n._ripple.centered || Oo(e), n._ripple.class && (t.class = n._ripple.class), Rt(e)) {
      if (n._ripple.showTimerCommit)
        return;
      n._ripple.showTimerCommit = () => {
        dt.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var l;
        (l = n == null ? void 0 : n._ripple) != null && l.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, Ja);
    } else
      dt.show(e, n, t);
  }
}
function Rl(e) {
  e[Lt] = !0;
}
function Be(e) {
  const t = e.currentTarget;
  if (t != null && t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit)
      return t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, void (t._ripple.showTimer = window.setTimeout(() => {
        Be(e);
      }));
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), dt.hide(t);
  }
}
function zo(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let Ln = !1;
function Do(e) {
  Ln || e.keyCode !== Cl.enter && e.keyCode !== Cl.space || (Ln = !0, Dn(e));
}
function Lo(e) {
  Ln = !1, Be(e);
}
function Ro(e) {
  Ln && (Ln = !1, Be(e));
}
function Ml(e, t, n) {
  const { value: l, modifiers: o } = t, i = To(l);
  if (i || dt.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = o.center, e._ripple.circle = o.circle, Et(l) && l.class && (e._ripple.class = l.class), i && !n) {
    if (o.stop)
      return e.addEventListener("touchstart", Rl, { passive: !0 }), void e.addEventListener("mousedown", Rl);
    e.addEventListener("touchstart", Dn, { passive: !0 }), e.addEventListener("touchend", Be, { passive: !0 }), e.addEventListener("touchmove", zo, { passive: !0 }), e.addEventListener("touchcancel", Be), e.addEventListener("mousedown", Dn), e.addEventListener("mouseup", Be), e.addEventListener("mouseleave", Be), e.addEventListener("keydown", Do), e.addEventListener("keyup", Lo), e.addEventListener("blur", Ro), e.addEventListener("dragstart", Be, { passive: !0 });
  } else
    !i && n && Mo(e);
}
function Mo(e) {
  e.removeEventListener("mousedown", Dn), e.removeEventListener("touchstart", Dn), e.removeEventListener("touchend", Be), e.removeEventListener("touchmove", zo), e.removeEventListener("touchcancel", Be), e.removeEventListener("mouseup", Be), e.removeEventListener("mouseleave", Be), e.removeEventListener("keydown", Do), e.removeEventListener("keyup", Lo), e.removeEventListener("dragstart", Be), e.removeEventListener("blur", Ro);
}
const Bt = { mounted: function(e, t) {
  Ml(e, t, !1);
}, unmounted: function(e) {
  delete e._ripple, Mo(e);
}, updated: function(e, t) {
  t.value !== t.oldValue && Ml(e, t, To(t.oldValue));
} }, Za = N({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: Vo }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: de, appendIcon: de, block: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...Hn(), ...re(), ...Ze(), ...kn(), ...Kn(), ...xo(), ...$o(), ..._o(), ...Xa(), ...Xe(), ...fl(), ...Xn(), ...ke({ tag: "button" }), ...me(), ...an({ variant: "elevated" }) }, "VBtn"), Mt = K()({ name: "VBtn", directives: { Ripple: Bt }, props: Za(), emits: { "group:selected": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { themeClasses: o } = xe(e), { borderClasses: i } = Un(e), { colorClasses: r, colorStyles: a, variantClasses: s } = St(e), { densityClasses: c } = Qe(e), { dimensionStyles: y } = Vn(e), { elevationClasses: d } = Yn(e), { loaderClasses: f } = pl(e), { locationStyles: m } = Po(e), { positionClasses: g } = function(b) {
    let P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ne();
    return { positionClasses: v(() => b.position ? `${P}--${b.position}` : void 0) };
  }(e), { roundedClasses: I } = Je(e), { sizeClasses: h, sizeStyles: V } = Jn(e), $ = wo(e, e.symbol, !1), x = vl(e, n), E = v(() => {
    var b;
    return e.active !== void 0 ? e.active : x.isLink.value ? (b = x.isActive) == null ? void 0 : b.value : $ == null ? void 0 : $.isSelected.value;
  }), L = v(() => ($ == null ? void 0 : $.disabled.value) || e.disabled), _ = v(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), B = v(() => {
    if (e.value !== void 0)
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function C(b) {
    var P;
    L.value || x.isLink.value && (b.metaKey || b.ctrlKey || b.shiftKey || b.button !== 0 || n.target === "_blank") || ((P = x.navigate) == null || P.call(x, b), $ == null || $.toggle());
  }
  return function(b, P) {
    q(() => {
      var w;
      return (w = b.isActive) == null ? void 0 : w.value;
    }, (w) => {
      b.isLink.value && w && P && he(() => {
        P(!0);
      });
    }, { immediate: !0 });
  }(x, $ == null ? void 0 : $.select), ne(() => {
    var S, O;
    const b = x.isLink.value ? "a" : e.tag, P = !(!e.prependIcon && !l.prepend), w = !(!e.appendIcon && !l.append), A = !(!e.icon || e.icon === !0), k = ($ == null ? void 0 : $.isSelected.value) && (!x.isLink.value || ((S = x.isActive) == null ? void 0 : S.value)) || !$ || ((O = x.isActive) == null ? void 0 : O.value);
    return fe(p(b, { type: b === "a" ? void 0 : "button", class: ["v-btn", $ == null ? void 0 : $.selectedClass.value, { "v-btn--active": E.value, "v-btn--block": e.block, "v-btn--disabled": L.value, "v-btn--elevated": _.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--stacked": e.stacked }, o.value, i.value, k ? r.value : void 0, c.value, d.value, f.value, g.value, I.value, h.value, s.value, e.class], style: [k ? a.value : void 0, y.value, m.value, V.value, e.style], disabled: L.value || void 0, href: x.href.value, onClick: C, value: B.value }, { default: () => {
      var F;
      return [Ct(!0, "v-btn"), !e.icon && P && p("span", { key: "prepend", class: "v-btn__prepend" }, [l.prepend ? p(we, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, l.prepend) : p(se, { key: "prepend-icon", icon: e.prependIcon }, null)]), p("span", { class: "v-btn__content", "data-no-activator": "" }, [!l.default && A ? p(se, { key: "content-icon", icon: e.icon }, null) : p(we, { key: "content-defaults", disabled: !A, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var z;
        return [((z = l.default) == null ? void 0 : z.call(l)) ?? e.text];
      } })]), !e.icon && w && p("span", { key: "append", class: "v-btn__append" }, [l.append ? p(we, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, l.append) : p(se, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && p("span", { key: "loader", class: "v-btn__loader" }, [((F = l.loader) == null ? void 0 : F.call(l)) ?? p(Ao, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[Me("ripple"), !L.value && e.ripple, null]]);
  }), {};
} }), Qa = N({ text: String, clickable: Boolean, ...re(), ...me() }, "VLabel"), Wo = K()({ name: "VLabel", props: Qa(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => {
    var l;
    return p("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (l = n.default) == null ? void 0 : l.call(n)]);
  }), {};
} }), No = Symbol.for("vuetify:selection-control-group"), jo = N({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: de, trueIcon: de, ripple: { type: Boolean, default: !0 }, multiple: { type: Boolean, default: null }, name: String, readonly: Boolean, modelValue: null, type: String, valueComparator: { type: Function, default: xn }, ...re(), ...Ze(), ...me() }, "SelectionControlGroup"), ei = N({ ...jo({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup");
K()({ name: "VSelectionControlGroup", props: ei(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = ve(e, "modelValue"), o = Pe(), i = v(() => e.id || `v-selection-control-group-${o}`), r = v(() => e.name || i.value), a = /* @__PURE__ */ new Set();
  return Ee(No, { modelValue: l, forceUpdate: () => {
    a.forEach((s) => s());
  }, onForceUpdate: (s) => {
    a.add(s), ge(() => {
      a.delete(s);
    });
  } }), wn({ [e.defaultsTarget]: { color: X(e, "color"), disabled: X(e, "disabled"), density: X(e, "density"), error: X(e, "error"), inline: X(e, "inline"), modelValue: l, multiple: v(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)), name: r, falseIcon: X(e, "falseIcon"), trueIcon: X(e, "trueIcon"), readonly: X(e, "readonly"), ripple: X(e, "ripple"), type: X(e, "type"), valueComparator: X(e, "valueComparator") } }), ne(() => {
    var s;
    return p("div", { class: ["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class], style: e.style, role: e.type === "radio" ? "radiogroup" : void 0 }, [(s = n.default) == null ? void 0 : s.call(n)]);
  }), {};
} });
const yl = N({ label: String, trueValue: null, falseValue: null, value: null, ...re(), ...jo() }, "VSelectionControl"), Wt = K()({ name: "VSelectionControl", directives: { Ripple: Bt }, inheritAttrs: !1, props: yl(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { group: o, densityClasses: i, icon: r, model: a, textColorClasses: s, textColorStyles: c, trueValue: y } = function(x) {
    const E = ce(No, void 0), { densityClasses: L } = Qe(x), _ = ve(x, "modelValue"), B = v(() => x.trueValue !== void 0 ? x.trueValue : x.value === void 0 || x.value), C = v(() => x.falseValue !== void 0 && x.falseValue), b = v(() => !!x.multiple || x.multiple == null && Array.isArray(_.value)), P = v({ get() {
      const S = E ? E.modelValue.value : _.value;
      return b.value ? S.some((O) => x.valueComparator(O, B.value)) : x.valueComparator(S, B.value);
    }, set(S) {
      if (x.readonly)
        return;
      const O = S ? B.value : C.value;
      let F = O;
      b.value && (F = S ? [...He(_.value), O] : He(_.value).filter((z) => !x.valueComparator(z, B.value))), E ? E.modelValue.value = F : _.value = F;
    } }), { textColorClasses: w, textColorStyles: A } = We(v(() => !P.value || x.error || x.disabled ? void 0 : x.color)), k = v(() => P.value ? x.trueIcon : x.falseIcon);
    return { group: E, densityClasses: L, trueValue: B, falseValue: C, model: P, textColorClasses: w, textColorStyles: A, icon: k };
  }(e), d = Pe(), f = v(() => e.id || `input-${d}`), m = ae(!1), g = ae(!1), I = W();
  function h(x) {
    m.value = !0, (!Dt || Dt && x.target.matches(":focus-visible")) && (g.value = !0);
  }
  function V() {
    m.value = !1, g.value = !1;
  }
  function $(x) {
    e.readonly && o && he(() => o.forceUpdate()), a.value = x.target.checked;
  }
  return o == null || o.onForceUpdate(() => {
    I.value && (I.value.checked = a.value);
  }), ne(() => {
    var _, B;
    const x = l.label ? l.label({ label: e.label, props: { for: f.value } }) : e.label, [E, L] = jn(n);
    return p("div", H({ class: ["v-selection-control", { "v-selection-control--dirty": a.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": m.value, "v-selection-control--focus-visible": g.value, "v-selection-control--inline": e.inline }, i.value, e.class] }, E, { style: e.style }), [p("div", { class: ["v-selection-control__wrapper", s.value], style: c.value }, [(_ = l.default) == null ? void 0 : _.call(l), fe(p("div", { class: ["v-selection-control__input"] }, [r.value && p(se, { key: "icon", icon: r.value }, null), p("input", H({ ref: I, checked: a.value, disabled: !(!e.readonly && !e.disabled), id: f.value, onBlur: V, onFocus: h, onInput: $, "aria-disabled": !(!e.readonly && !e.disabled), type: e.type, value: y.value, name: e.name, "aria-checked": e.type === "checkbox" ? a.value : void 0 }, L), null), (B = l.input) == null ? void 0 : B.call(l, { model: a, textColorClasses: s, textColorStyles: c, props: { onFocus: h, onBlur: V, id: f.value } })]), [[Me("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), x && p(Wo, { for: f.value, clickable: !0 }, { default: () => [x] })]);
  }), { isFocused: m, input: I };
} }), Go = N({ indeterminate: Boolean, indeterminateIcon: { type: de, default: "$checkboxIndeterminate" }, ...yl({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), Nt = K()({ name: "VCheckboxBtn", props: Go(), emits: { "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = ve(e, "indeterminate"), o = ve(e, "modelValue");
  function i(s) {
    l.value && (l.value = !1);
  }
  const r = v(() => l.value ? e.indeterminateIcon : e.falseIcon), a = v(() => l.value ? e.indeterminateIcon : e.trueIcon);
  return ne(() => p(Wt, H(e, { modelValue: o.value, "onUpdate:modelValue": [(s) => o.value = s, i], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: r.value, trueIcon: a.value, "aria-checked": l.value ? "mixed" : void 0 }), n)), {};
} });
function qo(e) {
  const { t } = ul();
  return { InputIcon: function(n) {
    let { name: l } = n;
    const o = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[l], i = e[`onClick:${l}`], r = i && o ? t(`$vuetify.input.${o}`, e.label ?? "") : void 0;
    return p(se, { icon: e[`${l}Icon`], "aria-label": r, onClick: i }, null);
  } };
}
const ni = N({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...re(), ...qn({ transition: { component: bo, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), ti = K()({ name: "VMessages", props: ni(), setup(e, t) {
  let { slots: n } = t;
  const l = v(() => He(e.messages)), { textColorClasses: o, textColorStyles: i } = We(v(() => e.color));
  return ne(() => p(Ge, { transition: e.transition, tag: "div", class: ["v-messages", o.value, e.class], style: [i.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && l.value.map((r, a) => p("div", { class: "v-messages__message", key: `${a}-${l.value}` }, [n.message ? n.message({ message: r }) : r]))] })), {};
} }), Ho = N({ focused: Boolean, "onUpdate:focused": ze() }, "focus");
function Zn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ne();
  const n = ve(e, "focused");
  return { focusClasses: v(() => ({ [`${t}--focused`]: n.value })), isFocused: n, focus: function() {
    n.value = !0;
  }, blur: function() {
    n.value = !1;
  } };
}
const li = Symbol.for("vuetify:form");
function Uo() {
  return ce(li, null);
}
const oi = N({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...Ho() }, "validation"), Qn = N({ id: String, appendIcon: de, centerAffix: { type: Boolean, default: !0 }, prependIcon: de, hideDetails: [Boolean, String], hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": ze(), "onClick:append": ze(), ...re(), ...Ze(), ...oi() }, "VInput"), Ke = K()({ name: "VInput", props: { ...Qn() }, emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l, emit: o } = t;
  const { densityClasses: i } = Qe(e), { rtlClasses: r } = Gn(), { InputIcon: a } = qo(e), s = Pe(), c = v(() => e.id || `input-${s}`), y = v(() => `${c.value}-messages`), { errorMessages: d, isDirty: f, isDisabled: m, isReadonly: g, isPristine: I, isValid: h, isValidating: V, reset: $, resetValidation: x, validate: E, validationClasses: L } = function(C) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ne(), P = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Pe();
    const w = ve(C, "modelValue"), A = v(() => C.validationValue === void 0 ? w.value : C.validationValue), k = Uo(), S = W([]), O = ae(!0), F = v(() => !(!He(w.value === "" ? null : w.value).length && !He(A.value === "" ? null : A.value).length)), z = v(() => !!(C.disabled ?? (k == null ? void 0 : k.isDisabled.value))), R = v(() => !!(C.readonly ?? (k == null ? void 0 : k.isReadonly.value))), D = v(() => C.errorMessages.length ? He(C.errorMessages).slice(0, Math.max(0, +C.maxErrors)) : S.value), j = v(() => {
      let Z = (C.validateOn ?? (k == null ? void 0 : k.validateOn.value)) || "input";
      Z === "lazy" && (Z = "input lazy");
      const ue = new Set((Z == null ? void 0 : Z.split(" ")) ?? []);
      return { blur: ue.has("blur") || ue.has("input"), input: ue.has("input"), submit: ue.has("submit"), lazy: ue.has("lazy") };
    }), U = v(() => !C.error && !C.errorMessages.length && (!C.rules.length || (O.value ? !S.value.length && !j.value.lazy || null : !S.value.length))), T = ae(!1), M = v(() => ({ [`${b}--error`]: U.value === !1, [`${b}--dirty`]: F.value, [`${b}--disabled`]: z.value, [`${b}--readonly`]: R.value })), G = v(() => C.name ?? u(P));
    function Y() {
      w.value = null, he(le);
    }
    function le() {
      O.value = !0, j.value.lazy ? S.value = [] : oe(!0);
    }
    async function oe() {
      let Z = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      const ue = [];
      T.value = !0;
      for (const Ve of C.rules) {
        if (ue.length >= +(C.maxErrors ?? 1))
          break;
        const wt = typeof Ve == "function" ? Ve : () => Ve, Oe = await wt(A.value);
        Oe !== !0 && (Oe === !1 || typeof Oe == "string" ? ue.push(Oe || "") : console.warn(`${Oe} is not a valid value. Rule functions must return boolean true or a string.`));
      }
      return S.value = ue, T.value = !1, O.value = Z, S.value;
    }
    return to(() => {
      k == null || k.register({ id: G.value, validate: oe, reset: Y, resetValidation: le });
    }), Ye(() => {
      k == null || k.unregister(G.value);
    }), Bn(async () => {
      j.value.lazy || await oe(!0), k == null || k.update(G.value, U.value, D.value);
    }), Ue(() => j.value.input, () => {
      q(A, () => {
        if (A.value != null)
          oe();
        else if (C.focused) {
          const Z = q(() => C.focused, (ue) => {
            ue || oe(), Z();
          });
        }
      });
    }), Ue(() => j.value.blur, () => {
      q(() => C.focused, (Z) => {
        Z || oe();
      });
    }), q(U, () => {
      k == null || k.update(G.value, U.value, D.value);
    }), { errorMessages: D, isDirty: F, isDisabled: z, isReadonly: R, isPristine: O, isValid: U, isValidating: T, reset: Y, resetValidation: le, validate: oe, validationClasses: M };
  }(e, "v-input", c), _ = v(() => ({ id: c, messagesId: y, isDirty: f, isDisabled: m, isReadonly: g, isPristine: I, isValid: h, isValidating: V, reset: $, resetValidation: x, validate: E })), B = v(() => {
    var C;
    return (C = e.errorMessages) != null && C.length || !I.value && d.value.length ? d.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return ne(() => {
    var A, k, S, O;
    const C = !(!l.prepend && !e.prependIcon), b = !(!l.append && !e.appendIcon), P = B.value.length > 0, w = !e.hideDetails || e.hideDetails === "auto" && (P || !!l.details);
    return p("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix }, i.value, r.value, L.value, e.class], style: e.style }, [C && p("div", { key: "prepend", class: "v-input__prepend" }, [(A = l.prepend) == null ? void 0 : A.call(l, _.value), e.prependIcon && p(a, { key: "prepend-icon", name: "prepend" }, null)]), l.default && p("div", { class: "v-input__control" }, [(k = l.default) == null ? void 0 : k.call(l, _.value)]), b && p("div", { key: "append", class: "v-input__append" }, [e.appendIcon && p(a, { key: "append-icon", name: "append" }, null), (S = l.append) == null ? void 0 : S.call(l, _.value)]), w && p("div", { class: "v-input__details" }, [p(ti, { id: y.value, active: P, messages: B.value }, { message: l.message }), (O = l.details) == null ? void 0 : O.call(l, _.value)])]);
  }), { reset: $, resetValidation: x, validate: E };
} }), ai = N({ ...Qn(), ...nl(Go(), ["inline"]) }, "VCheckbox"), ii = K()({ name: "VCheckbox", inheritAttrs: !1, props: ai(), emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const o = ve(e, "modelValue"), { isFocused: i, focus: r, blur: a } = Zn(e), s = Pe(), c = v(() => e.id || `checkbox-${s}`);
  return ne(() => {
    const [y, d] = jn(n), [f, m] = Ke.filterProps(e), [g, I] = Nt.filterProps(e);
    return p(Ke, H({ class: ["v-checkbox", e.class] }, y, f, { modelValue: o.value, "onUpdate:modelValue": (h) => o.value = h, id: c.value, focused: i.value, style: e.style }), { ...l, default: (h) => {
      let { id: V, messagesId: $, isDisabled: x, isReadonly: E } = h;
      return p(Nt, H(g, { id: V.value, "aria-describedby": $.value, disabled: x.value, readonly: E.value }, d, { modelValue: o.value, "onUpdate:modelValue": (L) => o.value = L, onFocus: r, onBlur: a }), l);
    } });
  }), {};
} }), ri = N({ start: Boolean, end: Boolean, icon: de, image: String, ...re(), ...Ze(), ...Xe(), ...Xn(), ...ke(), ...me(), ...an({ variant: "flat" }) }, "VAvatar"), pt = K()({ name: "VAvatar", props: ri(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = xe(e), { colorClasses: o, colorStyles: i, variantClasses: r } = St(e), { densityClasses: a } = Qe(e), { roundedClasses: s } = Je(e), { sizeClasses: c, sizeStyles: y } = Jn(e);
  return ne(() => p(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, l.value, o.value, a.value, s.value, c.value, r.value, e.class], style: [i.value, y.value, e.style] }, { default: () => {
    var d;
    return [e.image ? p(La, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? p(se, { key: "icon", icon: e.icon }, null) : (d = n.default) == null ? void 0 : d.call(n), Ct(!1, "v-avatar")];
  } })), {};
} }), Ko = Symbol.for("vuetify:v-chip-group"), si = N({ column: Boolean, filter: Boolean, valueComparator: { type: Function, default: xn }, ...re(), ...Bo({ selectedClass: "v-chip--selected" }), ...ke(), ...me(), ...an({ variant: "tonal" }) }, "VChipGroup");
K()({ name: "VChipGroup", props: si(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = xe(e), { isSelected: o, select: i, next: r, prev: a, selected: s } = ko(e, Ko);
  return wn({ VChip: { color: X(e, "color"), disabled: X(e, "disabled"), filter: X(e, "filter"), variant: X(e, "variant") } }), ne(() => p(e.tag, { class: ["v-chip-group", { "v-chip-group--column": e.column }, l.value, e.class], style: e.style }, { default: () => {
    var c;
    return [(c = n.default) == null ? void 0 : c.call(n, { isSelected: o, select: i, next: r, prev: a, selected: s.value })];
  } })), {};
} });
const ui = N({ activeClass: String, appendAvatar: String, appendIcon: de, closable: Boolean, closeIcon: { type: de, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: String, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: de, ripple: { type: [Boolean, Object], default: !0 }, text: String, modelValue: { type: Boolean, default: !0 }, onClick: ze(), onClickOnce: ze(), ...Hn(), ...re(), ...Ze(), ...Kn(), ...xo(), ...Xe(), ...fl(), ...Xn(), ...ke({ tag: "span" }), ...me(), ...an({ variant: "tonal" }) }, "VChip"), ci = K()({ name: "VChip", directives: { Ripple: Bt }, props: ui(), emits: { "click:close": (e) => !0, "update:modelValue": (e) => !0, "group:selected": (e) => !0, click: (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: o } = t;
  const { t: i } = ul(), { borderClasses: r } = Un(e), { colorClasses: a, colorStyles: s, variantClasses: c } = St(e), { densityClasses: y } = Qe(e), { elevationClasses: d } = Yn(e), { roundedClasses: f } = Je(e), { sizeClasses: m } = Jn(e), { themeClasses: g } = xe(e), I = ve(e, "modelValue"), h = wo(e, Ko, !1), V = vl(e, n), $ = v(() => e.link !== !1 && V.isLink.value), x = v(() => !e.disabled && e.link !== !1 && (!!h || e.link || V.isClickable.value)), E = v(() => ({ "aria-label": i(e.closeLabel), onClick(B) {
    I.value = !1, l("click:close", B);
  } }));
  function L(B) {
    var C;
    l("click", B), x.value && ((C = V.navigate) == null || C.call(V, B), h == null || h.toggle());
  }
  function _(B) {
    B.key !== "Enter" && B.key !== " " || (B.preventDefault(), L(B));
  }
  return () => {
    const B = V.isLink.value ? "a" : e.tag, C = !(!e.appendIcon && !e.appendAvatar), b = !(!C && !o.append), P = !(!o.close && !e.closable), w = !(!o.filter && !e.filter) && h, A = !(!e.prependIcon && !e.prependAvatar), k = !(!A && !o.prepend), S = !h || h.isSelected.value;
    return I.value && fe(p(B, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": x.value, "v-chip--filter": w, "v-chip--pill": e.pill }, g.value, r.value, S ? a.value : void 0, y.value, d.value, f.value, m.value, c.value, h == null ? void 0 : h.selectedClass.value, e.class], style: [S ? s.value : void 0, e.style], disabled: e.disabled || void 0, draggable: e.draggable, href: V.href.value, tabindex: x.value ? 0 : void 0, onClick: L, onKeydown: x.value && !$.value && _ }, { default: () => {
      var O;
      return [Ct(x.value, "v-chip"), w && p(Io, { key: "filter" }, { default: () => [fe(p("div", { class: "v-chip__filter" }, [o.filter ? fe(p(we, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, null), [[Me("slot"), o.filter, "default"]]) : p(se, { key: "filter-icon", icon: e.filterIcon }, null)]), [[Sn, h.isSelected.value]])] }), k && p("div", { key: "prepend", class: "v-chip__prepend" }, [o.prepend ? p(we, { key: "prepend-defaults", disabled: !A, defaults: { VAvatar: { image: e.prependAvatar, start: !0 }, VIcon: { icon: e.prependIcon, start: !0 } } }, o.prepend) : p(pe, null, [e.prependIcon && p(se, { key: "prepend-icon", icon: e.prependIcon, start: !0 }, null), e.prependAvatar && p(pt, { key: "prepend-avatar", image: e.prependAvatar, start: !0 }, null)])]), p("div", { class: "v-chip__content" }, [((O = o.default) == null ? void 0 : O.call(o, { isSelected: h == null ? void 0 : h.isSelected.value, selectedClass: h == null ? void 0 : h.selectedClass.value, select: h == null ? void 0 : h.select, toggle: h == null ? void 0 : h.toggle, value: h == null ? void 0 : h.value.value, disabled: e.disabled })) ?? e.text]), b && p("div", { key: "append", class: "v-chip__append" }, [o.append ? p(we, { key: "append-defaults", disabled: !C, defaults: { VAvatar: { end: !0, image: e.appendAvatar }, VIcon: { end: !0, icon: e.appendIcon } } }, o.append) : p(pe, null, [e.appendIcon && p(se, { key: "append-icon", end: !0, icon: e.appendIcon }, null), e.appendAvatar && p(pt, { key: "append-avatar", end: !0, image: e.appendAvatar }, null)])]), P && p("div", H({ key: "close", class: "v-chip__close" }, E.value), [o.close ? p(we, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, o.close) : p(se, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[Me("ripple"), x.value && e.ripple, null]]);
  };
} }), jt = Symbol.for("vuetify:list");
function Yo() {
  const e = ce(jt, { hasPrepend: ae(!1), updateHasPrepend: () => null }), t = { hasPrepend: ae(!1), updateHasPrepend: (n) => {
    n && (t.hasPrepend.value = n);
  } };
  return Ee(jt, t), e;
}
function Xo() {
  return ce(jt, null);
}
const di = { open: (e) => {
  let { id: t, value: n, opened: l, parents: o } = e;
  if (n) {
    const i = /* @__PURE__ */ new Set();
    i.add(t);
    let r = o.get(t);
    for (; r != null; )
      i.add(r), r = o.get(r);
    return i;
  }
  return l.delete(t), l;
}, select: () => null }, Jo = { open: (e) => {
  let { id: t, value: n, opened: l, parents: o } = e;
  if (n) {
    let i = o.get(t);
    for (l.add(t); i != null && i !== t; )
      l.add(i), i = o.get(i);
    return l;
  }
  return l.delete(t), l;
}, select: () => null }, pi = { open: Jo.open, select: (e) => {
  let { id: t, value: n, opened: l, parents: o } = e;
  if (!n)
    return l;
  const i = [];
  let r = o.get(t);
  for (; r != null; )
    i.push(r), r = o.get(r);
  return new Set(i);
} }, Gt = (e) => {
  const t = { select: (n) => {
    let { id: l, value: o, selected: i } = n;
    if (l = qe(l), e && !o) {
      const r = Array.from(i.entries()).reduce((a, s) => {
        let [c, y] = s;
        return y === "on" ? [...a, c] : a;
      }, []);
      if (r.length === 1 && r[0] === l)
        return i;
    }
    return i.set(l, o ? "on" : "off"), i;
  }, in: (n, l, o) => {
    let i = /* @__PURE__ */ new Map();
    for (const r of n || [])
      i = t.select({ id: r, value: !0, selected: new Map(i), children: l, parents: o });
    return i;
  }, out: (n) => {
    const l = [];
    for (const [o, i] of n.entries())
      i === "on" && l.push(o);
    return l;
  } };
  return t;
}, Wl = (e) => {
  const t = Gt(e);
  return { select: (n) => {
    let { selected: l, id: o, ...i } = n;
    o = qe(o);
    const r = l.has(o) ? /* @__PURE__ */ new Map([[o, l.get(o)]]) : /* @__PURE__ */ new Map();
    return t.select({ ...i, id: o, selected: r });
  }, in: (n, l, o) => {
    let i = /* @__PURE__ */ new Map();
    return n != null && n.length && (i = t.in(n.slice(0, 1), l, o)), i;
  }, out: (n, l, o) => t.out(n, l, o) };
}, Rn = Symbol.for("vuetify:nested"), Zo = { id: ae(), root: { register: () => null, unregister: () => null, parents: W(/* @__PURE__ */ new Map()), children: W(/* @__PURE__ */ new Map()), open: () => null, openOnSelect: () => null, select: () => null, opened: W(/* @__PURE__ */ new Set()), selected: W(/* @__PURE__ */ new Map()), selectedValues: W([]) } }, vi = N({ selectStrategy: [String, Function], openStrategy: [String, Object], opened: Array, selected: Array, mandatory: Boolean }, "nested"), fi = (e) => {
  let t = !1;
  const n = W(/* @__PURE__ */ new Map()), l = W(/* @__PURE__ */ new Map()), o = ve(e, "opened", e.opened, (d) => new Set(d), (d) => [...d.values()]), i = v(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return ((d) => {
          const f = Wl(d);
          return { select: (m) => {
            let { id: g, selected: I, children: h, ...V } = m;
            return g = qe(g), h.has(g) ? I : f.select({ id: g, selected: I, children: h, ...V });
          }, in: f.in, out: f.out };
        })(e.mandatory);
      case "leaf":
        return ((d) => {
          const f = Gt(d);
          return { select: (m) => {
            let { id: g, selected: I, children: h, ...V } = m;
            return g = qe(g), h.has(g) ? I : f.select({ id: g, selected: I, children: h, ...V });
          }, in: f.in, out: f.out };
        })(e.mandatory);
      case "independent":
        return Gt(e.mandatory);
      case "single-independent":
        return Wl(e.mandatory);
      default:
        return ((d) => {
          const f = { select: (m) => {
            let { id: g, value: I, selected: h, children: V, parents: $ } = m;
            g = qe(g);
            const x = new Map(h), E = [g];
            for (; E.length; ) {
              const _ = E.shift();
              h.set(_, I ? "on" : "off"), V.has(_) && E.push(...V.get(_));
            }
            let L = $.get(g);
            for (; L; ) {
              const _ = V.get(L), B = _.every((b) => h.get(b) === "on"), C = _.every((b) => !h.has(b) || h.get(b) === "off");
              h.set(L, B ? "on" : C ? "off" : "indeterminate"), L = $.get(L);
            }
            return d && !I && Array.from(h.entries()).reduce((B, C) => {
              let [b, P] = C;
              return P === "on" ? [...B, b] : B;
            }, []).length === 0 ? x : h;
          }, in: (m, g, I) => {
            let h = /* @__PURE__ */ new Map();
            for (const V of m || [])
              h = f.select({ id: V, value: !0, selected: new Map(h), children: g, parents: I });
            return h;
          }, out: (m, g) => {
            const I = [];
            for (const [h, V] of m.entries())
              V !== "on" || g.has(h) || I.push(h);
            return I;
          } };
          return f;
        })(e.mandatory);
    }
  }), r = v(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return pi;
      case "single":
        return di;
      default:
        return Jo;
    }
  }), a = ve(e, "selected", e.selected, (d) => i.value.in(d, n.value, l.value), (d) => i.value.out(d, n.value, l.value));
  function s(d) {
    const f = [];
    let m = d;
    for (; m != null; )
      f.unshift(m), m = l.value.get(m);
    return f;
  }
  Ye(() => {
    t = !0;
  });
  const c = ye("nested"), y = { id: ae(), root: { opened: o, selected: a, selectedValues: v(() => {
    const d = [];
    for (const [f, m] of a.value.entries())
      m === "on" && d.push(f);
    return d;
  }), register: (d, f, m) => {
    f && d !== f && l.value.set(d, f), m && n.value.set(d, []), f != null && n.value.set(f, [...n.value.get(f) || [], d]);
  }, unregister: (d) => {
    if (t)
      return;
    n.value.delete(d);
    const f = l.value.get(d);
    if (f) {
      const m = n.value.get(f) ?? [];
      n.value.set(f, m.filter((g) => g !== d));
    }
    l.value.delete(d), o.value.delete(d);
  }, open: (d, f, m) => {
    c.emit("click:open", { id: d, value: f, path: s(d), event: m });
    const g = r.value.open({ id: d, value: f, opened: new Set(o.value), children: n.value, parents: l.value, event: m });
    g && (o.value = g);
  }, openOnSelect: (d, f, m) => {
    const g = r.value.select({ id: d, value: f, selected: new Map(a.value), opened: new Set(o.value), children: n.value, parents: l.value, event: m });
    g && (o.value = g);
  }, select: (d, f, m) => {
    c.emit("click:select", { id: d, value: f, path: s(d), event: m });
    const g = i.value.select({ id: d, value: f, selected: new Map(a.value), children: n.value, parents: l.value, event: m });
    g && (a.value = g), y.root.openOnSelect(d, f, m);
  }, children: n, parents: l } };
  return Ee(Rn, y), y.root;
}, Qo = (e, t) => {
  const n = ce(Rn, Zo), l = Symbol(Pe()), o = v(() => e.value !== void 0 ? e.value : l), i = { ...n, id: o, open: (r, a) => n.root.open(o.value, r, a), openOnSelect: (r, a) => n.root.openOnSelect(o.value, r, a), isOpen: v(() => n.root.opened.value.has(o.value)), parent: v(() => n.root.parents.value.get(o.value)), select: (r, a) => n.root.select(o.value, r, a), isSelected: v(() => n.root.selected.value.get(qe(o.value)) === "on"), isIndeterminate: v(() => n.root.selected.value.get(o.value) === "indeterminate"), isLeaf: v(() => !n.root.children.value.get(o.value)), isGroupActivator: n.isGroupActivator };
  return !n.isGroupActivator && n.root.register(o.value, n.id.value, t), Ye(() => {
    !n.isGroupActivator && n.root.unregister(o.value);
  }), t && Ee(Rn, i), i;
}, yi = Tn({ name: "VListGroupActivator", setup(e, t) {
  let { slots: n } = t;
  return (() => {
    const l = ce(Rn, Zo);
    Ee(Rn, { ...l, isGroupActivator: !0 });
  })(), () => {
    var l;
    return (l = n.default) == null ? void 0 : l.call(n);
  };
} }), mi = N({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: de, default: "$collapse" }, expandIcon: { type: de, default: "$expand" }, prependIcon: de, appendIcon: de, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...re(), ...ke() }, "VListGroup"), Nl = K()({ name: "VListGroup", props: mi(), setup(e, t) {
  let { slots: n } = t;
  const { isOpen: l, open: o, id: i } = Qo(X(e, "value"), !0), r = v(() => `v-list-group--id-${String(i.value)}`), a = Xo(), { isBooted: s } = function() {
    const m = ae(!1);
    return Bn(() => {
      window.requestAnimationFrame(() => {
        m.value = !0;
      });
    }), { ssrBootStyles: v(() => m.value ? void 0 : { transition: "none !important" }), isBooted: Jt(m) };
  }();
  function c(m) {
    o(!l.value, m);
  }
  const y = v(() => ({ onClick: c, class: "v-list-group__header", id: r.value })), d = v(() => l.value ? e.collapseIcon : e.expandIcon), f = v(() => ({ VListItem: { active: l.value, activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && d.value, appendIcon: e.appendIcon || !e.subgroup && d.value, title: e.title, value: e.value } }));
  return ne(() => p(e.tag, { class: ["v-list-group", { "v-list-group--prepend": a == null ? void 0 : a.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": l.value }, e.class], style: e.style }, { default: () => [n.activator && p(we, { defaults: f.value }, { default: () => [p(yi, null, { default: () => [n.activator({ props: y.value, isOpen: l.value })] })] }), p(Ge, { transition: { component: Ta }, disabled: !s.value }, { default: () => {
    var m;
    return [fe(p("div", { class: "v-list-group__items", role: "group", "aria-labelledby": r.value }, [(m = n.default) == null ? void 0 : m.call(n)]), [[Sn, l.value]])];
  } })] })), {};
} }), gi = co("v-list-item-subtitle"), hi = co("v-list-item-title"), bi = N({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: de, baseColor: String, disabled: Boolean, lines: String, link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: de, ripple: { type: [Boolean, Object], default: !0 }, subtitle: [String, Number, Boolean], title: [String, Number, Boolean], value: null, onClick: ze(), onClickOnce: ze(), ...Hn(), ...re(), ...Ze(), ...kn(), ...Kn(), ...Xe(), ...fl(), ...ke(), ...me(), ...an({ variant: "text" }) }, "VListItem"), vt = K()({ name: "VListItem", directives: { Ripple: Bt }, props: bi(), emits: { click: (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l, emit: o } = t;
  const i = vl(e, n), r = v(() => e.value === void 0 ? i.href.value : e.value), { select: a, isSelected: s, isIndeterminate: c, isGroupActivator: y, root: d, parent: f, openOnSelect: m } = Qo(r, !1), g = Xo(), I = v(() => {
    var R;
    return e.active !== !1 && (e.active || ((R = i.isActive) == null ? void 0 : R.value) || s.value);
  }), h = v(() => e.link !== !1 && i.isLink.value), V = v(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || e.value != null && !!g)), $ = v(() => e.rounded || e.nav), x = v(() => e.color ?? e.activeColor), E = v(() => ({ color: I.value ? x.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  q(() => {
    var R;
    return (R = i.isActive) == null ? void 0 : R.value;
  }, (R) => {
    R && f.value != null && d.open(f.value, !0), R && m(R);
  }, { immediate: !0 });
  const { themeClasses: L } = xe(e), { borderClasses: _ } = Un(e), { colorClasses: B, colorStyles: C, variantClasses: b } = St(E), { densityClasses: P } = Qe(e), { dimensionStyles: w } = Vn(e), { elevationClasses: A } = Yn(e), { roundedClasses: k } = Je($), S = v(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), O = v(() => ({ isActive: I.value, select: a, isSelected: s.value, isIndeterminate: c.value }));
  function F(R) {
    var D;
    o("click", R), !y && V.value && ((D = i.navigate) == null || D.call(i, R), e.value != null && a(!s.value, R));
  }
  function z(R) {
    R.key !== "Enter" && R.key !== " " || (R.preventDefault(), F(R));
  }
  return ne(() => {
    const R = h.value ? "a" : e.tag, D = l.title || e.title, j = l.subtitle || e.subtitle, U = !(!e.appendAvatar && !e.appendIcon), T = !(!U && !l.append), M = !(!e.prependAvatar && !e.prependIcon), G = !(!M && !l.prepend);
    var Y, le;
    return g == null || g.updateHasPrepend(G), e.activeColor && (Y = "active-color", le = ["color", "base-color"], le = Array.isArray(le) ? le.slice(0, -1).map((oe) => `'${oe}'`).join(", ") + ` or '${le.at(-1)}'` : `'${le}'`, ht(`[Vuetify UPGRADE] '${Y}' is deprecated, use ${le} instead.`)), fe(p(R, { class: ["v-list-item", { "v-list-item--active": I.value, "v-list-item--disabled": e.disabled, "v-list-item--link": V.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !G && (g == null ? void 0 : g.hasPrepend.value), [`${e.activeClass}`]: e.activeClass && I.value }, L.value, _.value, B.value, P.value, A.value, S.value, k.value, b.value, e.class], style: [C.value, w.value, e.style], href: i.href.value, tabindex: V.value ? g ? -2 : 0 : void 0, onClick: F, onKeydown: V.value && !h.value && z }, { default: () => {
      var oe;
      return [Ct(V.value || I.value, "v-list-item"), G && p("div", { key: "prepend", class: "v-list-item__prepend" }, [l.prepend ? p(we, { key: "prepend-defaults", disabled: !M, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: !0 } } }, { default: () => {
        var Z;
        return [(Z = l.prepend) == null ? void 0 : Z.call(l, O.value)];
      } }) : p(pe, null, [e.prependAvatar && p(pt, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && p(se, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]), p("div", { class: "v-list-item__content", "data-no-activator": "" }, [D && p(hi, { key: "title" }, { default: () => {
        var Z;
        return [((Z = l.title) == null ? void 0 : Z.call(l, { title: e.title })) ?? e.title];
      } }), j && p(gi, { key: "subtitle" }, { default: () => {
        var Z;
        return [((Z = l.subtitle) == null ? void 0 : Z.call(l, { subtitle: e.subtitle })) ?? e.subtitle];
      } }), (oe = l.default) == null ? void 0 : oe.call(l, O.value)]), T && p("div", { key: "append", class: "v-list-item__append" }, [l.append ? p(we, { key: "append-defaults", disabled: !U, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: !0 } } }, { default: () => {
        var Z;
        return [(Z = l.append) == null ? void 0 : Z.call(l, O.value)];
      } }) : p(pe, null, [e.appendIcon && p(se, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && p(pt, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)])])];
    } }), [[Me("ripple"), V.value && e.ripple]]);
  }), {};
} }), Ii = N({ color: String, inset: Boolean, sticky: Boolean, title: String, ...re(), ...ke() }, "VListSubheader"), Ci = K()({ name: "VListSubheader", props: Ii(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: l, textColorStyles: o } = We(X(e, "color"));
  return ne(() => {
    const i = !(!n.default && !e.title);
    return p(e.tag, { class: ["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, l.value, e.class], style: [{ textColorStyles: o }, e.style] }, { default: () => {
      var r;
      return [i && p("div", { class: "v-list-subheader__text" }, [((r = n.default) == null ? void 0 : r.call(n)) ?? e.title])];
    } });
  }), {};
} }), Si = N({ color: String, inset: Boolean, length: [Number, String], thickness: [Number, String], vertical: Boolean, ...re(), ...me() }, "VDivider"), Bi = K()({ name: "VDivider", props: Si(), setup(e, t) {
  let { attrs: n } = t;
  const { themeClasses: l } = xe(e), { textColorClasses: o, textColorStyles: i } = We(X(e, "color")), r = v(() => {
    const a = {};
    return e.length && (a[e.vertical ? "maxHeight" : "maxWidth"] = J(e.length)), e.thickness && (a[e.vertical ? "borderRightWidth" : "borderTopWidth"] = J(e.thickness)), a;
  });
  return ne(() => p("hr", { class: [{ "v-divider": !0, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, l.value, o.value, e.class], style: [r.value, i.value, e.style], "aria-orientation": n.role && n.role !== "separator" ? void 0 : e.vertical ? "vertical" : "horizontal", role: `${n.role || "separator"}` }, null)), {};
} }), xi = N({ items: Array }, "VListChildren"), ea = K()({ name: "VListChildren", props: xi(), setup(e, t) {
  let { slots: n } = t;
  return Yo(), () => {
    var l, o;
    return ((l = n.default) == null ? void 0 : l.call(n)) ?? ((o = e.items) == null ? void 0 : o.map((i) => {
      var m, g;
      let { children: r, props: a, type: s, raw: c } = i;
      if (s === "divider")
        return ((m = n.divider) == null ? void 0 : m.call(n, { props: a })) ?? p(Bi, a, null);
      if (s === "subheader")
        return ((g = n.subheader) == null ? void 0 : g.call(n, { props: a })) ?? p(Ci, a, null);
      const y = { subtitle: n.subtitle ? (I) => {
        var h;
        return (h = n.subtitle) == null ? void 0 : h.call(n, { ...I, item: c });
      } : void 0, prepend: n.prepend ? (I) => {
        var h;
        return (h = n.prepend) == null ? void 0 : h.call(n, { ...I, item: c });
      } : void 0, append: n.append ? (I) => {
        var h;
        return (h = n.append) == null ? void 0 : h.call(n, { ...I, item: c });
      } : void 0, title: n.title ? (I) => {
        var h;
        return (h = n.title) == null ? void 0 : h.call(n, { ...I, item: c });
      } : void 0 }, [d, f] = Nl.filterProps(a);
      return r ? p(Nl, H({ value: a == null ? void 0 : a.value }, d), { activator: (I) => {
        let { props: h } = I;
        return n.header ? n.header({ props: { ...a, ...h } }) : p(vt, H(a, h), y);
      }, default: () => p(ea, { items: r }, n) }) : n.item ? n.item({ props: a }) : p(vt, a, y);
    }));
  };
} }), na = N({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, returnObject: Boolean }, "list-items");
function ta(e, t) {
  const n = De(t, e.itemTitle, t), l = e.returnObject ? t : De(t, e.itemValue, n), o = De(t, e.itemChildren), i = { title: n, value: l, ...e.itemProps === !0 ? typeof t != "object" || t == null || Array.isArray(t) ? void 0 : "children" in t ? Nn(t, ["children"])[1] : t : De(t, e.itemProps) };
  return { title: String(i.title ?? ""), value: i.value, props: i, children: Array.isArray(o) ? la(e, o) : void 0, raw: t };
}
function la(e, t) {
  const n = [];
  for (const l of t)
    n.push(ta(e, l));
  return n;
}
function wi(e) {
  return function(t, n) {
    function l(i) {
      return i.filter((r) => r !== null || t.value.some((a) => a.value === null)).map((r) => t.value.find((a) => xn(r, a.value)) ?? n(r));
    }
    function o(i) {
      return i.map((r) => {
        let { value: a } = r;
        return a;
      });
    }
    return { items: t, transformIn: l, transformOut: o };
  }(v(() => la(e, e.items)), (t) => ta(e, t));
}
function ki(e, t) {
  const n = De(t, e.itemType, "item"), l = function(a) {
    return typeof a == "string" || typeof a == "number" || typeof a == "boolean";
  }(t) ? t : De(t, e.itemTitle), o = De(t, e.itemValue, void 0), i = De(t, e.itemChildren), r = { title: l, value: o, ...e.itemProps === !0 ? Nn(t, ["children"])[1] : De(t, e.itemProps) };
  return { type: n, title: r.title, value: r.value, props: r, children: n === "item" && i ? oa(e, i) : void 0, raw: t };
}
function oa(e, t) {
  const n = [];
  for (const l of t)
    n.push(ki(e, l));
  return n;
}
const Vi = N({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, lines: { type: [Boolean, String], default: "one" }, nav: Boolean, ...vi({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Hn(), ...re(), ...Ze(), ...kn(), ...Kn(), itemType: { type: String, default: "type" }, ...na(), ...Xe(), ...ke(), ...me(), ...an({ variant: "text" }) }, "VList"), Fi = K()({ name: "VList", props: Vi(), emits: { "update:selected": (e) => !0, "update:opened": (e) => !0, "click:open": (e) => !0, "click:select": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { items: l } = function(b) {
    return { items: v(() => oa(b, b.items)) };
  }(e), { themeClasses: o } = xe(e), { backgroundColorClasses: i, backgroundColorStyles: r } = zn(X(e, "bgColor")), { borderClasses: a } = Un(e), { densityClasses: s } = Qe(e), { dimensionStyles: c } = Vn(e), { elevationClasses: y } = Yn(e), { roundedClasses: d } = Je(e), { open: f, select: m } = fi(e), g = v(() => e.lines ? `v-list--${e.lines}-line` : void 0), I = X(e, "activeColor"), h = X(e, "baseColor"), V = X(e, "color");
  Yo(), wn({ VListGroup: { activeColor: I, baseColor: h, color: V }, VListItem: { activeClass: X(e, "activeClass"), activeColor: I, baseColor: h, color: V, density: X(e, "density"), disabled: X(e, "disabled"), lines: X(e, "lines"), nav: X(e, "nav"), variant: X(e, "variant") } });
  const $ = ae(!1), x = W();
  function E(b) {
    $.value = !0;
  }
  function L(b) {
    $.value = !1;
  }
  function _(b) {
    var P;
    $.value || b.relatedTarget && ((P = x.value) != null && P.contains(b.relatedTarget)) || C();
  }
  function B(b) {
    if (x.value) {
      if (b.key === "ArrowDown")
        C("next");
      else if (b.key === "ArrowUp")
        C("prev");
      else if (b.key === "Home")
        C("first");
      else {
        if (b.key !== "End")
          return;
        C("last");
      }
      b.preventDefault();
    }
  }
  function C(b) {
    if (x.value)
      return rt(x.value, b);
  }
  return ne(() => p(e.tag, { ref: x, class: ["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav }, o.value, i.value, a.value, s.value, y.value, g.value, d.value, e.class], style: [r.value, c.value, e.style], tabindex: e.disabled || $.value ? -1 : 0, role: "listbox", "aria-activedescendant": void 0, onFocusin: E, onFocusout: L, onFocus: _, onKeydown: B }, { default: () => [p(ea, { items: l.value }, n)] })), { open: f, select: m, focus: C };
} });
function At(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
function jl(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: n, align: l } = e;
    return At({ x: l === "left" ? 0 : l === "center" ? t.width / 2 : l === "right" ? t.width : l, y: n === "top" ? 0 : n === "bottom" ? t.height : n }, t);
  }
  if (e.side === "left" || e.side === "right") {
    const { side: n, align: l } = e;
    return At({ x: n === "left" ? 0 : n === "right" ? t.width : n, y: l === "top" ? 0 : l === "center" ? t.height / 2 : l === "bottom" ? t.height : l }, t);
  }
  return At({ x: t.width / 2, y: t.height / 2 }, t);
}
const aa = { static: function() {
}, connected: function(e, t, n) {
  (function(m) {
    for (; m; ) {
      if (window.getComputedStyle(m).position === "fixed")
        return !0;
      m = m.offsetParent;
    }
    return !1;
  })(e.activatorEl.value) && Object.assign(n.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: l, preferredOrigin: o } = tl(() => {
    const m = zt(t.location, e.isRtl.value), g = t.origin === "overlap" ? m : t.origin === "auto" ? kt(m) : zt(t.origin, e.isRtl.value);
    return m.side === g.side && m.align === Vt(g).align ? { preferredAnchor: wl(m), preferredOrigin: wl(g) } : { preferredAnchor: m, preferredOrigin: g };
  }), [i, r, a, s] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((m) => v(() => {
    const g = parseFloat(t[m]);
    return isNaN(g) ? 1 / 0 : g;
  })), c = v(() => {
    if (Array.isArray(t.offset))
      return t.offset;
    if (typeof t.offset == "string") {
      const m = t.offset.split(" ").map(parseFloat);
      return m.length < 2 && m.push(0), m;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let y = !1;
  const d = new ResizeObserver(() => {
    y && f();
  });
  function f() {
    if (y = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => y = !0);
    }), !e.activatorEl.value || !e.contentEl.value)
      return;
    const m = e.activatorEl.value.getBoundingClientRect(), g = function(b, P) {
      const w = ll(b);
      return P ? w.x += parseFloat(b.style.right || 0) : w.x -= parseFloat(b.style.left || 0), w.y -= parseFloat(b.style.top || 0), w;
    }(e.contentEl.value, e.isRtl.value), I = ut(e.contentEl.value);
    I.length || (I.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (g.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), g.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const h = I.reduce((b, P) => {
      const w = P.getBoundingClientRect(), A = new mn({ x: P === document.documentElement ? 0 : w.x, y: P === document.documentElement ? 0 : w.y, width: P.clientWidth, height: P.clientHeight });
      return b ? new mn({ x: Math.max(b.left, A.left), y: Math.max(b.top, A.top), width: Math.min(b.right, A.right) - Math.max(b.left, A.left), height: Math.min(b.bottom, A.bottom) - Math.max(b.top, A.top) }) : A;
    }, void 0);
    h.x += 12, h.y += 12, h.width -= 24, h.height -= 24;
    let V = { anchor: l.value, origin: o.value };
    function $(b) {
      const P = new mn(g), w = jl(b.anchor, m), A = jl(b.origin, P);
      let { x: k, y: S } = (F = A, { x: (O = w).x - F.x, y: O.y - F.y });
      var O, F;
      switch (b.anchor.side) {
        case "top":
          S -= c.value[0];
          break;
        case "bottom":
          S += c.value[0];
          break;
        case "left":
          k -= c.value[0];
          break;
        case "right":
          k += c.value[0];
      }
      switch (b.anchor.align) {
        case "top":
          S -= c.value[1];
          break;
        case "bottom":
          S += c.value[1];
          break;
        case "left":
          k -= c.value[1];
          break;
        case "right":
          k += c.value[1];
      }
      return P.x += k, P.y += S, P.width = Math.min(P.width, a.value), P.height = Math.min(P.height, s.value), { overflows: Vl(P, h), x: k, y: S };
    }
    let x = 0, E = 0;
    const L = { x: 0, y: 0 }, _ = { x: !1, y: !1 };
    let B = -1;
    for (; ; ) {
      if (B++ > 10) {
        ht("Vuetify error: Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const { x: b, y: P, overflows: w } = $(V);
      x += b, E += P, g.x += b, g.y += P;
      {
        const A = kl(V.anchor), k = w.x.before || w.x.after, S = w.y.before || w.y.after;
        let O = !1;
        if (["x", "y"].forEach((F) => {
          if (F === "x" && k && !_.x || F === "y" && S && !_.y) {
            const z = { anchor: { ...V.anchor }, origin: { ...V.origin } }, R = F === "x" ? A === "y" ? Vt : kt : A === "y" ? kt : Vt;
            z.anchor = R(z.anchor), z.origin = R(z.origin);
            const { overflows: D } = $(z);
            (D[F].before <= w[F].before && D[F].after <= w[F].after || D[F].before + D[F].after < (w[F].before + w[F].after) / 2) && (V = z, O = _[F] = !0);
          }
        }), O)
          continue;
      }
      w.x.before && (x += w.x.before, g.x += w.x.before), w.x.after && (x -= w.x.after, g.x -= w.x.after), w.y.before && (E += w.y.before, g.y += w.y.before), w.y.after && (E -= w.y.after, g.y -= w.y.after);
      {
        const A = Vl(g, h);
        L.x = h.width - A.x.before - A.x.after, L.y = h.height - A.y.before - A.y.after, x += A.x.before, g.x += A.x.before, E += A.y.before, g.y += A.y.before;
      }
      break;
    }
    const C = kl(V.anchor);
    return Object.assign(n.value, { "--v-overlay-anchor-origin": `${V.anchor.side} ${V.anchor.align}`, transformOrigin: `${V.origin.side} ${V.origin.align}`, top: J(_t(E)), left: e.isRtl.value ? void 0 : J(_t(x)), right: e.isRtl.value ? J(_t(-x)) : void 0, minWidth: J(C === "y" ? Math.min(i.value, m.width) : i.value), maxWidth: J(Gl(On(L.x, i.value === 1 / 0 ? 0 : i.value, a.value))), maxHeight: J(Gl(On(L.y, r.value === 1 / 0 ? 0 : r.value, s.value))) }), { available: L, contentBox: g };
  }
  return q([e.activatorEl, e.contentEl], (m, g) => {
    let [I, h] = m, [V, $] = g;
    V && d.unobserve(V), I && d.observe(I), $ && d.unobserve($), h && d.observe(h);
  }, { immediate: !0 }), ge(() => {
    d.disconnect();
  }), q(() => [l.value, o.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => f()), he(() => {
    const m = f();
    if (!m)
      return;
    const { available: g, contentBox: I } = m;
    I.height > g.y && requestAnimationFrame(() => {
      f(), requestAnimationFrame(() => {
        f();
      });
    });
  }), { updateLocation: f };
} }, Ai = N({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in aa }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array] }, "VOverlay-location-strategies");
function _t(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Gl(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let qt = !0;
const ft = [];
let ql = -1;
function Ht() {
  cancelAnimationFrame(ql), ql = requestAnimationFrame(() => {
    const e = ft.shift();
    e && e(), ft.length ? Ht() : qt = !0;
  });
}
const at = { none: null, close: function(e) {
  Hl(e.activatorEl.value ?? e.contentEl.value, function(t) {
    e.isActive.value = !1;
  });
}, block: function(e, t) {
  var a;
  const n = (a = e.root.value) == null ? void 0 : a.offsetParent, l = [.../* @__PURE__ */ new Set([...ut(e.activatorEl.value, t.contained ? n : void 0), ...ut(e.contentEl.value, t.contained ? n : void 0)])].filter((s) => !s.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, i = (r = n || document.documentElement, il(r) && r);
  var r;
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((s, c) => {
    s.style.setProperty("--v-body-scroll-x", J(-s.scrollLeft)), s.style.setProperty("--v-body-scroll-y", J(-s.scrollTop)), s !== document.documentElement && s.style.setProperty("--v-scrollbar-offset", J(o)), s.classList.add("v-overlay-scroll-blocked");
  }), ge(() => {
    l.forEach((s, c) => {
      const y = parseFloat(s.style.getPropertyValue("--v-body-scroll-x")), d = parseFloat(s.style.getPropertyValue("--v-body-scroll-y"));
      s.style.removeProperty("--v-body-scroll-x"), s.style.removeProperty("--v-body-scroll-y"), s.style.removeProperty("--v-scrollbar-offset"), s.classList.remove("v-overlay-scroll-blocked"), s.scrollLeft = -y, s.scrollTop = -d;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}, reposition: function(e, t, n) {
  let l = !1, o = -1, i = -1;
  function r(a) {
    var s;
    s = () => {
      var d, f;
      const c = performance.now();
      (f = (d = e.updateLocation).value) == null || f.call(d, a), l = (performance.now() - c) / (1e3 / 60) > 2;
    }, !qt || ft.length ? (ft.push(s), Ht()) : (qt = !1, s(), Ht());
  }
  i = (typeof requestIdleCallback > "u" ? (a) => a() : requestIdleCallback)(() => {
    n.run(() => {
      Hl(e.activatorEl.value ?? e.contentEl.value, (a) => {
        l ? (cancelAnimationFrame(o), o = requestAnimationFrame(() => {
          o = requestAnimationFrame(() => {
            r(a);
          });
        })) : r(a);
      });
    });
  }), ge(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(o);
  });
} }, _i = N({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in at } }, "VOverlay-scroll-strategies");
function Hl(e, t) {
  const n = [document, ...ut(e)];
  n.forEach((l) => {
    l.addEventListener("scroll", t, { passive: !0 });
  }), ge(() => {
    n.forEach((l) => {
      l.removeEventListener("scroll", t);
    });
  });
}
const Ut = Symbol.for("vuetify:v-menu"), Pi = N({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay"), $i = N({ activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...Pi() }, "VOverlay-activator");
function Ei(e, t) {
  let { isActive: n, isTop: l } = t;
  const o = W();
  let i = !1, r = !1, a = !0;
  const s = v(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), c = v(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !s.value), { runOpenDelay: y, runCloseDelay: d } = function(B, C) {
    const b = {}, P = (w) => () => {
      if (!Fe)
        return Promise.resolve(!0);
      const A = w === "openDelay";
      return b.closeDelay && window.clearTimeout(b.closeDelay), delete b.closeDelay, b.openDelay && window.clearTimeout(b.openDelay), delete b.openDelay, new Promise((k) => {
        const S = parseInt(B[w] ?? 0, 10);
        b[w] = window.setTimeout(() => {
          C == null || C(A), k(A);
        }, S);
      });
    };
    return { runCloseDelay: P("closeDelay"), runOpenDelay: P("openDelay") };
  }(e, (B) => {
    B !== (e.openOnHover && i || s.value && r) || e.openOnHover && n.value && !l.value || (n.value !== B && (a = !0), n.value = B);
  }), f = (B) => {
    B.stopPropagation(), o.value = B.currentTarget || B.target, n.value = !n.value;
  }, m = (B) => {
    var C;
    (C = B.sourceCapabilities) != null && C.firesTouchEvents || (i = !0, o.value = B.currentTarget || B.target, y());
  }, g = (B) => {
    i = !1, d();
  }, I = (B) => {
    Dt && !B.target.matches(":focus-visible") || (r = !0, B.stopPropagation(), o.value = B.currentTarget || B.target, y());
  }, h = (B) => {
    r = !1, B.stopPropagation(), d();
  }, V = v(() => {
    const B = {};
    return c.value && (B.onClick = f), e.openOnHover && (B.onMouseenter = m, B.onMouseleave = g), s.value && (B.onFocus = I, B.onBlur = h), B;
  }), $ = v(() => {
    const B = {};
    if (e.openOnHover && (B.onMouseenter = () => {
      i = !0, y();
    }, B.onMouseleave = () => {
      i = !1, d();
    }), s.value && (B.onFocusin = () => {
      r = !0, y();
    }, B.onFocusout = () => {
      r = !1, d();
    }), e.closeOnContentClick) {
      const C = ce(Ut, null);
      B.onClick = () => {
        n.value = !1, C == null || C.closeParents();
      };
    }
    return B;
  }), x = v(() => {
    const B = {};
    return e.openOnHover && (B.onMouseenter = () => {
      a && (i = !0, a = !1, y());
    }, B.onMouseleave = () => {
      i = !1, d();
    }), B;
  });
  q(l, (B) => {
    !B || (!e.openOnHover || i || s.value && r) && (!s.value || r || e.openOnHover && i) || (n.value = !1);
  });
  const E = W();
  Re(() => {
    E.value && he(() => {
      o.value = Ot(E.value);
    });
  });
  const L = ye("useActivator");
  let _;
  return q(() => !!e.activator, (B) => {
    B && Fe ? (_ = Xt(), _.run(() => {
      (function(C, b, P) {
        let { activatorEl: w, activatorEvents: A } = P;
        function k() {
          let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : O(), z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : C.activatorProps;
          F && function(R, D) {
            Object.keys(D).forEach((j) => {
              if (Tt(j)) {
                const U = Sl(j), T = et.get(R);
                if (D[j] == null)
                  T == null || T.forEach((M) => {
                    const [G, Y] = M;
                    G === U && (R.removeEventListener(U, Y), T.delete(M));
                  });
                else if (!T || ![...T].some((M) => M[0] === U && M[1] === D[j])) {
                  R.addEventListener(U, D[j]);
                  const M = T || /* @__PURE__ */ new Set();
                  M.add([U, D[j]]), et.has(R) || et.set(R, M);
                }
              } else
                D[j] == null ? R.removeAttribute(j) : R.setAttribute(j, D[j]);
            });
          }(F, H(A.value, z));
        }
        function S() {
          let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : O(), z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : C.activatorProps;
          F && function(R, D) {
            Object.keys(D).forEach((j) => {
              if (Tt(j)) {
                const U = Sl(j), T = et.get(R);
                T == null || T.forEach((M) => {
                  const [G, Y] = M;
                  G === U && (R.removeEventListener(U, Y), T.delete(M));
                });
              } else
                R.removeAttribute(j);
            });
          }(F, H(A.value, z));
        }
        function O() {
          var R, D;
          let F, z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : C.activator;
          if (z)
            if (z === "parent") {
              let j = (D = (R = b == null ? void 0 : b.proxy) == null ? void 0 : R.$el) == null ? void 0 : D.parentNode;
              for (; j.hasAttribute("data-no-activator"); )
                j = j.parentNode;
              F = j;
            } else
              F = typeof z == "string" ? document.querySelector(z) : "$el" in z ? z.$el : z;
          return w.value = (F == null ? void 0 : F.nodeType) === Node.ELEMENT_NODE ? F : null, w.value;
        }
        q(() => C.activator, (F, z) => {
          if (z && F !== z) {
            const R = O(z);
            R && S(R);
          }
          F && he(() => k());
        }, { immediate: !0 }), q(() => C.activatorProps, () => {
          k();
        }), ge(() => {
          S();
        });
      })(e, L, { activatorEl: o, activatorEvents: V });
    })) : _ && _.stop();
  }, { flush: "post", immediate: !0 }), ge(() => {
    _ == null || _.stop();
  }), { activatorEl: o, activatorRef: E, activatorEvents: V, contentEvents: $, scrimEvents: x };
}
const Oi = Symbol.for("vuetify:display");
function ia() {
  const e = ce(Oi);
  if (!e)
    throw new Error("Could not find Vuetify display injection");
  return e;
}
const Ti = N({ eager: Boolean }, "lazy");
function ra() {
  const e = ye("useScopeId").vnode.scopeId;
  return { scopeId: e ? { [e]: "" } : void 0 };
}
const Ul = Symbol.for("vuetify:stack"), An = Ae([]);
function zi() {
  return !0;
}
function Kl(e, t, n) {
  if (!e || sa(e, n) === !1)
    return !1;
  const l = po(t);
  if (typeof ShadowRoot < "u" && l instanceof ShadowRoot && l.host === e.target)
    return !1;
  const o = (typeof n.value == "object" && n.value.include || (() => []))();
  return o.push(t), !o.some((i) => i == null ? void 0 : i.contains(e.target));
}
function sa(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || zi)(e);
}
function Yl(e, t) {
  const n = po(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const Di = { mounted(e, t) {
  const n = (o) => function(i, r, a) {
    const s = typeof a.value == "function" ? a.value : a.value.handler;
    r._clickOutside.lastMousedownWasOutside && Kl(i, r, a) && setTimeout(() => {
      sa(i, a) && s && s(i);
    }, 0);
  }(o, e, t), l = (o) => {
    e._clickOutside.lastMousedownWasOutside = Kl(o, e, t);
  };
  Yl(e, (o) => {
    o.addEventListener("click", n, !0), o.addEventListener("mousedown", l, !0);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: !1 }), e._clickOutside[t.instance.$.uid] = { onClick: n, onMousedown: l };
}, unmounted(e, t) {
  e._clickOutside && (Yl(e, (n) => {
    var i;
    if (!n || !((i = e._clickOutside) != null && i[t.instance.$.uid]))
      return;
    const { onClick: l, onMousedown: o } = e._clickOutside[t.instance.$.uid];
    n.removeEventListener("click", l, !0), n.removeEventListener("mousedown", o, !0);
  }), delete e._clickOutside[t.instance.$.uid]);
} };
function Li(e) {
  const { modelValue: t, color: n, ...l } = e;
  return p(ln, { name: "fade-transition", appear: !0 }, { default: () => [e.modelValue && p("div", H({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, l), null)] });
}
const ua = N({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: !0 }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: !0 }, zIndex: { type: [Number, String], default: 2e3 }, ...$i(), ...re(), ...kn(), ...Ti(), ...Ai(), ..._i(), ...me(), ...qn() }, "VOverlay"), Xl = K()({ name: "VOverlay", directives: { ClickOutside: Di }, inheritAttrs: !1, props: { _disableGlobalStack: Boolean, ...ua() }, emits: { "click:outside": (e) => !0, "update:modelValue": (e) => !0, afterLeave: () => !0 }, setup(e, t) {
  var j, U;
  let { slots: n, attrs: l, emit: o } = t;
  const i = ve(e, "modelValue"), r = v({ get: () => i.value, set: (T) => {
    T && e.disabled || (i.value = T);
  } }), { teleportTarget: a } = (s = v(() => e.attach || e.contained), { teleportTarget: v(() => {
    const T = s.value;
    if (T === !0 || !Fe)
      return;
    const M = T === !1 ? document.body : typeof T == "string" ? document.querySelector(T) : T;
    if (M == null)
      return void ht(`Unable to locate target ${T}`);
    let G = M.querySelector(":scope > .v-overlay-container");
    return G || (G = document.createElement("div"), G.className = "v-overlay-container", M.appendChild(G)), G;
  }) });
  var s;
  const { themeClasses: c } = xe(e), { rtlClasses: y, isRtl: d } = Gn(), { hasContent: f, onAfterLeave: m } = function(T, M) {
    const G = ae(!1), Y = v(() => G.value || T.eager || M.value);
    return q(M, () => G.value = !0), { isBooted: G, hasContent: Y, onAfterLeave: function() {
      T.eager || (G.value = !1);
    } };
  }(e, r), g = zn(v(() => typeof e.scrim == "string" ? e.scrim : null)), { globalTop: I, localTop: h, stackStyles: V } = function(T, M, G) {
    const Y = ye("useStack"), le = !G, oe = ce(Ul, void 0), Z = Ae({ activeChildren: /* @__PURE__ */ new Set() });
    Ee(Ul, Z);
    const ue = ae(+M.value);
    Ue(T, () => {
      var Fn;
      const Oe = (Fn = An.at(-1)) == null ? void 0 : Fn[1];
      ue.value = Oe ? Oe + 10 : +M.value, le && An.push([Y.uid, ue.value]), oe == null || oe.activeChildren.add(Y.uid), ge(() => {
        if (le) {
          const ya = qe(An).findIndex((ma) => ma[0] === Y.uid);
          An.splice(ya, 1);
        }
        oe == null || oe.activeChildren.delete(Y.uid);
      });
    });
    const Ve = ae(!0);
    le && Re(() => {
      var Fn;
      const Oe = ((Fn = An.at(-1)) == null ? void 0 : Fn[0]) === Y.uid;
      setTimeout(() => Ve.value = Oe);
    });
    const wt = v(() => !Z.activeChildren.size);
    return { globalTop: Jt(Ve), localTop: wt, stackStyles: v(() => ({ zIndex: ue.value })) };
  }(r, X(e, "zIndex"), e._disableGlobalStack), { activatorEl: $, activatorRef: x, activatorEvents: E, contentEvents: L, scrimEvents: _ } = Ei(e, { isActive: r, isTop: h }), { dimensionStyles: B } = Vn(e), C = function() {
    if (!Fe)
      return ae(!1);
    const { ssr: T } = ia();
    if (T) {
      const M = ae(!1);
      return Bn(() => {
        M.value = !0;
      }), M;
    }
    return ae(!0);
  }(), { scopeId: b } = ra();
  q(() => e.disabled, (T) => {
    T && (r.value = !1);
  });
  const P = W(), w = W(), { contentStyles: A, updateLocation: k } = function(T, M) {
    const G = W({}), Y = W();
    function le(oe) {
      var Z;
      (Z = Y.value) == null || Z.call(Y, oe);
    }
    return Fe && (Ue(() => !(!M.isActive.value || !T.locationStrategy), (oe) => {
      var Z, ue;
      q(() => T.locationStrategy, oe), ge(() => {
        Y.value = void 0;
      }), typeof T.locationStrategy == "function" ? Y.value = (Z = T.locationStrategy(M, T, G)) == null ? void 0 : Z.updateLocation : Y.value = (ue = aa[T.locationStrategy](M, T, G)) == null ? void 0 : ue.updateLocation;
    }), window.addEventListener("resize", le, { passive: !0 }), ge(() => {
      window.removeEventListener("resize", le), Y.value = void 0;
    })), { contentStyles: G, updateLocation: Y };
  }(e, { isRtl: d, contentEl: w, activatorEl: $, isActive: r });
  function S(T) {
    o("click:outside", T), e.persistent ? D() : r.value = !1;
  }
  function O() {
    return r.value && I.value;
  }
  function F(T) {
    var M, G;
    T.key === "Escape" && I.value && (e.persistent ? D() : (r.value = !1, (M = w.value) != null && M.contains(document.activeElement) && ((G = $.value) == null || G.focus())));
  }
  (function(T, M) {
    if (!Fe)
      return;
    let G;
    Re(async () => {
      G == null || G.stop(), M.isActive.value && T.scrollStrategy && (G = Xt(), await he(), G.active && G.run(() => {
        var Y;
        typeof T.scrollStrategy == "function" ? T.scrollStrategy(M, T, G) : (Y = at[T.scrollStrategy]) == null || Y.call(at, M, T, G);
      }));
    }), ge(() => {
      G == null || G.stop();
    });
  })(e, { root: P, contentEl: w, activatorEl: $, isActive: r, updateLocation: k }), Fe && q(r, (T) => {
    T ? window.addEventListener("keydown", F) : window.removeEventListener("keydown", F);
  }, { immediate: !0 });
  const z = (U = (j = ye("useRouter")) == null ? void 0 : j.proxy) == null ? void 0 : U.$router;
  Ue(() => e.closeOnBack, () => {
    (function(T, M) {
      let G, Y, le = !1;
      function oe(Z) {
        var ue;
        (ue = Z.state) != null && ue.replaced || (le = !0, setTimeout(() => le = !1));
      }
      Fe && (he(() => {
        window.addEventListener("popstate", oe), G = T == null ? void 0 : T.beforeEach((Z, ue, Ve) => {
          Ft ? le ? M(Ve) : Ve() : setTimeout(() => le ? M(Ve) : Ve()), Ft = !0;
        }), Y = T == null ? void 0 : T.afterEach(() => {
          Ft = !1;
        });
      }), ge(() => {
        window.removeEventListener("popstate", oe), G == null || G(), Y == null || Y();
      }));
    })(z, (T) => {
      I.value && r.value ? (T(!1), e.persistent ? D() : r.value = !1) : T();
    });
  });
  const R = W();
  function D() {
    e.noClickAnimation || w.value && un(w.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: st });
  }
  return q(() => r.value && (e.absolute || e.contained) && a.value == null, (T) => {
    if (T) {
      const M = fo(P.value);
      M && M !== document.scrollingElement && (R.value = M.scrollTop);
    }
  }), ne(() => {
    var T;
    return p(pe, null, [(T = n.activator) == null ? void 0 : T.call(n, { isActive: r.value, props: H({ ref: x }, E.value, e.activatorProps) }), C.value && p(Ca, { disabled: !a.value, to: a.value }, { default: () => [f.value && p("div", H({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": r.value, "v-overlay--contained": e.contained }, c.value, y.value, e.class], style: [V.value, { top: J(R.value) }, e.style], ref: P }, b, l), [p(Li, H({ color: g, modelValue: r.value && !!e.scrim }, _.value), null), p(Ge, { appear: !0, persisted: !0, transition: e.transition, target: $.value, onAfterLeave: () => {
      m(), o("afterLeave");
    } }, { default: () => {
      var M;
      return [fe(p("div", H({ ref: w, class: ["v-overlay__content", e.contentClass], style: [B.value, A.value] }, L.value, e.contentProps), [(M = n.default) == null ? void 0 : M.call(n, { isActive: r })]), [[Sn, r.value], [Me("click-outside"), { handler: S, closeConditional: O, include: () => [$.value] }]])];
    } })])] })]);
  }), { activatorEl: $, animateClick: D, contentEl: w, globalTop: I, localTop: h, updateLocation: k };
} }), Pt = Symbol("Forwarded refs");
function $t(e, t) {
  let n = e;
  for (; n; ) {
    const l = Reflect.getOwnPropertyDescriptor(n, t);
    if (l)
      return l;
    n = Object.getPrototypeOf(n);
  }
}
function xt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
    n[l - 1] = arguments[l];
  return e[Pt] = n, new Proxy(e, { get(o, i) {
    if (Reflect.has(o, i))
      return Reflect.get(o, i);
    if (typeof i != "symbol" && !i.startsWith("__")) {
      for (const r of n)
        if (r.value && Reflect.has(r.value, i)) {
          const a = Reflect.get(r.value, i);
          return typeof a == "function" ? a.bind(r.value) : a;
        }
    }
  }, has(o, i) {
    if (Reflect.has(o, i))
      return !0;
    if (typeof i == "symbol" || i.startsWith("__"))
      return !1;
    for (const r of n)
      if (r.value && Reflect.has(r.value, i))
        return !0;
    return !1;
  }, getOwnPropertyDescriptor(o, i) {
    var a;
    const r = Reflect.getOwnPropertyDescriptor(o, i);
    if (r)
      return r;
    if (typeof i != "symbol" && !i.startsWith("__")) {
      for (const s of n) {
        if (!s.value)
          continue;
        const c = $t(s.value, i) ?? ("_" in s.value ? $t((a = s.value._) == null ? void 0 : a.setupState, i) : void 0);
        if (c)
          return c;
      }
      for (const s of n) {
        const c = s.value && s.value[Pt];
        if (!c)
          continue;
        const y = c.slice();
        for (; y.length; ) {
          const d = y.shift(), f = $t(d.value, i);
          if (f)
            return f;
          const m = d.value && d.value[Pt];
          m && y.push(...m);
        }
      }
    }
  } });
}
const Ri = N({ id: String, ...nl(ua({ closeDelay: 250, closeOnContentClick: !0, locationStrategy: "connected", openDelay: 300, scrim: !1, scrollStrategy: "reposition", transition: { component: ho } }), ["absolute"]) }, "VMenu"), Mi = K()({ name: "VMenu", props: Ri(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = ve(e, "modelValue"), { scopeId: o } = ra(), i = Pe(), r = v(() => e.id || `v-menu-${i}`), a = W(), s = ce(Ut, null), c = ae(0);
  function y() {
    s == null || s.closeParents();
  }
  function d(g) {
    var I, h;
    e.disabled || g.key === "Tab" && (l.value = !1, (h = (I = a.value) == null ? void 0 : I.activatorEl) == null || h.focus());
  }
  function f(g) {
    var h;
    if (e.disabled)
      return;
    const I = (h = a.value) == null ? void 0 : h.contentEl;
    I && l.value ? g.key === "ArrowDown" ? (g.preventDefault(), rt(I, "next")) : g.key === "ArrowUp" && (g.preventDefault(), rt(I, "prev")) : ["ArrowDown", "ArrowUp"].includes(g.key) && (l.value = !0, g.preventDefault(), setTimeout(() => setTimeout(() => f(g))));
  }
  Ee(Ut, { register() {
    ++c.value;
  }, unregister() {
    --c.value;
  }, closeParents() {
    setTimeout(() => {
      c.value || (l.value = !1, s == null || s.closeParents());
    }, 40);
  } }), q(l, (g) => {
    g ? s == null || s.register() : s == null || s.unregister();
  });
  const m = v(() => H({ "aria-haspopup": "menu", "aria-expanded": String(l.value), "aria-owns": r.value, onKeydown: f }, e.activatorProps));
  return ne(() => {
    const [g] = Xl.filterProps(e);
    return p(Xl, H({ ref: a, class: ["v-menu", e.class], style: e.style }, g, { modelValue: l.value, "onUpdate:modelValue": (I) => l.value = I, absolute: !0, activatorProps: m.value, "onClick:outside": y, onKeydown: d }, o), { activator: n.activator, default: function() {
      for (var I = arguments.length, h = new Array(I), V = 0; V < I; V++)
        h[V] = arguments[V];
      return p(we, { root: "VMenu" }, { default: () => {
        var $;
        return [($ = n.default) == null ? void 0 : $.call(n, ...h)];
      } });
    } });
  }), xt({ id: r, ΨopenChildren: c }, a);
} }), Wi = N({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...re(), ...qn({ transition: { component: bo } }) }, "VCounter"), ca = K()({ name: "VCounter", functional: !0, props: Wi(), setup(e, t) {
  let { slots: n } = t;
  const l = v(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return ne(() => p(Ge, { transition: e.transition }, { default: () => [fe(p("div", { class: ["v-counter", e.class], style: e.style }, [n.default ? n.default({ counter: l.value, max: e.max, value: e.value }) : l.value]), [[Sn, e.active]])] })), {};
} }), Ni = N({ floating: Boolean, ...re() }, "VFieldLabel"), nt = K()({ name: "VFieldLabel", props: Ni(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => p(Wo, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, n)), {};
} }), ji = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], ml = N({ appendInnerIcon: de, bgColor: String, clearable: Boolean, clearIcon: { type: de, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: de, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => ji.includes(e) }, "onClick:clear": ze(), "onClick:appendInner": ze(), "onClick:prependInner": ze(), ...re(), ...$o(), ...Xe(), ...me() }, "VField"), gl = K()({ name: "VField", inheritAttrs: !1, props: { id: String, ...Ho(), ...ml() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: o } = t;
  const { themeClasses: i } = xe(e), { loaderClasses: r } = pl(e), { focusClasses: a, isFocused: s, focus: c, blur: y } = Zn(e), { InputIcon: d } = qo(e), { roundedClasses: f } = Je(e), { rtlClasses: m } = Gn(), g = v(() => e.dirty || e.active), I = v(() => !(e.singleLine || !e.label && !o.label)), h = Pe(), V = v(() => e.id || `input-${h}`), $ = v(() => `${V.value}-messages`), x = W(), E = W(), L = W(), _ = v(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: B, backgroundColorStyles: C } = zn(X(e, "bgColor")), { textColorClasses: b, textColorStyles: P } = We(v(() => e.error || e.disabled ? void 0 : g.value && s.value ? e.color : e.baseColor));
  q(g, (k) => {
    if (I.value) {
      const S = x.value.$el, O = E.value.$el;
      requestAnimationFrame(() => {
        const F = ll(S), z = O.getBoundingClientRect(), R = z.x - F.x, D = z.y - F.y - (F.height / 2 - z.height / 2), j = z.width / 0.75, U = Math.abs(j - F.width) > 1 ? { maxWidth: J(j) } : void 0, T = getComputedStyle(S), M = getComputedStyle(O), G = 1e3 * parseFloat(T.transitionDuration) || 150, Y = parseFloat(M.getPropertyValue("--v-field-label-scale")), le = M.getPropertyValue("color");
        S.style.visibility = "visible", O.style.visibility = "hidden", un(S, { transform: `translate(${R}px, ${D}px) scale(${Y})`, color: le, ...U }, { duration: G, easing: st, direction: k ? "normal" : "reverse" }).finished.then(() => {
          S.style.removeProperty("visibility"), O.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const w = v(() => ({ isActive: g, isFocused: s, controlRef: L, blur: y, focus: c }));
  function A(k) {
    k.target !== document.activeElement && k.preventDefault();
  }
  return ne(() => {
    var R, D, j;
    const k = e.variant === "outlined", S = o["prepend-inner"] || e.prependInnerIcon, O = !(!e.clearable && !o.clear), F = !!(o["append-inner"] || e.appendInnerIcon || O), z = o.label ? o.label({ ...w.value, label: e.label, props: { for: V.value } }) : e.label;
    return p("div", H({ class: ["v-field", { "v-field--active": g.value, "v-field--appended": F, "v-field--center-affix": e.centerAffix ?? !_.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": S, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !z, [`v-field--variant-${e.variant}`]: !0 }, i.value, B.value, a.value, r.value, f.value, m.value, e.class], style: [C.value, P.value, e.style], onClick: A }, n), [p("div", { class: "v-field__overlay" }, null), p(Eo, { name: "v-field", active: !!e.loading, color: e.error ? "error" : e.color }, { default: o.loader }), S && p("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && p(d, { key: "prepend-icon", name: "prependInner" }, null), (R = o["prepend-inner"]) == null ? void 0 : R.call(o, w.value)]), p("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && I.value && p(nt, { key: "floating-label", ref: E, class: [b.value], floating: !0, for: V.value }, { default: () => [z] }), p(nt, { ref: x, for: V.value }, { default: () => [z] }), (D = o.default) == null ? void 0 : D.call(o, { ...w.value, props: { id: V.value, class: "v-field__input", "aria-describedby": $.value }, focus: c, blur: y })]), O && p(Io, { key: "clear" }, { default: () => [fe(p("div", { class: "v-field__clearable", onMousedown: (U) => {
      U.preventDefault(), U.stopPropagation();
    } }, [o.clear ? o.clear() : p(d, { name: "clear" }, null)]), [[Sn, e.dirty]])] }), F && p("div", { key: "append", class: "v-field__append-inner" }, [(j = o["append-inner"]) == null ? void 0 : j.call(o, w.value), e.appendInnerIcon && p(d, { key: "append-icon", name: "appendInner" }, null)]), p("div", { class: ["v-field__outline", b.value] }, [k && p(pe, null, [p("div", { class: "v-field__outline__start" }, null), I.value && p("div", { class: "v-field__outline__notch" }, [p(nt, { ref: E, floating: !0, for: V.value }, { default: () => [z] })]), p("div", { class: "v-field__outline__end" }, null)]), _.value && I.value && p(nt, { ref: E, floating: !0, for: V.value }, { default: () => [z] })])]);
  }), { controlRef: L };
} });
function da(e) {
  return Nn(e, Object.keys(gl.props).filter((t) => !Tt(t) && t !== "class" && t !== "style"));
}
const Gi = ["color", "file", "time", "date", "datetime-local", "week", "month"], pa = N({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, type: { type: String, default: "text" }, modelModifiers: Object, ...Qn(), ...ml() }, "VTextField"), Kt = K()({ name: "VTextField", directives: { Intersect: cl }, inheritAttrs: !1, props: pa(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: o } = t;
  const i = ve(e, "modelValue"), { isFocused: r, focus: a, blur: s } = Zn(e), c = v(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : (i.value ?? "").toString().length), y = v(() => n.maxlength ? n.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), d = v(() => ["plain", "underlined"].includes(e.variant));
  function f(_, B) {
    var C, b;
    e.autofocus && _ && ((b = (C = B[0].target) == null ? void 0 : C.focus) == null || b.call(C));
  }
  const m = W(), g = W(), I = W(), h = v(() => Gi.includes(e.type) || e.persistentPlaceholder || r.value || e.active);
  function V() {
    var _;
    I.value !== document.activeElement && ((_ = I.value) == null || _.focus()), r.value || a();
  }
  function $(_) {
    l("mousedown:control", _), _.target !== I.value && (V(), _.preventDefault());
  }
  function x(_) {
    V(), l("click:control", _);
  }
  function E(_) {
    _.stopPropagation(), V(), he(() => {
      i.value = null, ro(e["onClick:clear"], _);
    });
  }
  function L(_) {
    var C;
    const B = _.target;
    if (i.value = B.value, ((C = e.modelModifiers) == null ? void 0 : C.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const b = [B.selectionStart, B.selectionEnd];
      he(() => {
        B.selectionStart = b[0], B.selectionEnd = b[1];
      });
    }
  }
  return ne(() => {
    const _ = !!(o.counter || e.counter || e.counterValue), B = !(!_ && !o.details), [C, b] = jn(n), [{ modelValue: P, ...w }] = Ke.filterProps(e), [A] = da(e);
    return p(Ke, H({ ref: m, modelValue: i.value, "onUpdate:modelValue": (k) => i.value = k, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-text-field--plain-underlined": ["plain", "underlined"].includes(e.variant) }, e.class], style: e.style }, C, w, { centerAffix: !d.value, focused: r.value }), { ...o, default: (k) => {
      let { id: S, isDisabled: O, isDirty: F, isReadonly: z, isValid: R } = k;
      return p(gl, H({ ref: g, onMousedown: $, onClick: x, "onClick:clear": E, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: "textbox" }, A, { id: S.value, active: h.value || F.value, dirty: F.value || e.dirty, disabled: O.value, focused: r.value, error: R.value === !1 }), { ...o, default: (D) => {
        let { props: { class: j, ...U } } = D;
        const T = fe(p("input", H({ ref: I, value: i.value, onInput: L, autofocus: e.autofocus, readonly: z.value, disabled: O.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: V, onBlur: s }, U, b), null), [[Me("intersect"), { handler: f }, null, { once: !0 }]]);
        return p(pe, null, [e.prefix && p("span", { class: "v-text-field__prefix" }, [p("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), p("div", { class: j, "data-no-activator": "" }, [o.default ? p(pe, null, [o.default(), T]) : Sa(T)]), e.suffix && p("span", { class: "v-text-field__suffix" }, [p("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: B ? (k) => {
      var S;
      return p(pe, null, [(S = o.details) == null ? void 0 : S.call(o, k), _ && p(pe, null, [p("span", null, null), p(ca, { active: e.persistentCounter || r.value, value: c.value, max: y.value }, o.counter)])]);
    } : void 0 });
  }), xt({}, m, g, I);
} }), qi = N({ renderless: Boolean, ...re() }, "VVirtualScrollItem"), Hi = K()({ name: "VVirtualScrollItem", inheritAttrs: !1, props: qi(), emits: { "update:height": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: o } = t;
  const { resizeRef: i, contentRect: r } = sl(void 0, "border");
  q(() => {
    var a;
    return (a = r.value) == null ? void 0 : a.height;
  }, (a) => {
    a != null && l("update:height", a);
  }), ne(() => {
    var a, s;
    return e.renderless ? p(pe, null, [(a = o.default) == null ? void 0 : a.call(o, { itemRef: i })]) : p("div", H({ ref: i, class: ["v-virtual-scroll__item", e.class], style: e.style }, n), [(s = o.default) == null ? void 0 : s.call(o)]);
  });
} }), Ui = N({ itemHeight: { type: [Number, String], default: 48 } }, "virtual");
function Ki(e, t, n) {
  const l = ae(0), o = ae(e.itemHeight), i = v({ get: () => parseInt(o.value ?? 0, 10), set(x) {
    o.value = x;
  } }), r = W(), { resizeRef: a, contentRect: s } = sl();
  Re(() => {
    a.value = r.value;
  });
  const c = ia(), y = /* @__PURE__ */ new Map();
  let d = Array.from({ length: t.value.length });
  const f = v(() => {
    const x = (s.value && r.value !== document.documentElement ? s.value.height : c.height.value) - ((n == null ? void 0 : n.value) ?? 0);
    return Math.ceil(x / i.value * 1.7 + 1);
  });
  function m(x) {
    return d.slice(0, x).reduce((E, L) => E + (L || i.value), 0);
  }
  let g = 0;
  const I = v(() => Math.min(t.value.length, l.value + f.value)), h = v(() => t.value.slice(l.value, I.value).map((x, E) => ({ raw: x, index: E + l.value }))), V = v(() => m(l.value)), $ = v(() => m(t.value.length) - m(I.value));
  return q(() => t.value.length, () => {
    d = function(x) {
      let E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return Array.from({ length: x }, (L, _) => E + _);
    }(t.value.length).map(() => i.value), y.forEach((x, E) => {
      const L = t.value.indexOf(E);
      L === -1 ? y.delete(E) : d[L] = x;
    });
  }), { containerRef: r, computedItems: h, itemHeight: i, paddingTop: V, paddingBottom: $, scrollToIndex: function(x) {
    if (!r.value)
      return;
    const E = m(x);
    r.value.scrollTop = E;
  }, handleScroll: function() {
    if (!r.value || !s.value)
      return;
    const x = s.value.height - 56, E = r.value.scrollTop, L = E < g ? -1 : 1, _ = function(P) {
      const w = t.value.length;
      let A = 0, k = 0;
      for (; k < P && A < w; )
        k += d[A++] || i.value;
      return A - 1;
    }(E + x / 2), B = Math.round(f.value / 3), C = _ - B, b = l.value + 2 * B - 1;
    L === -1 && _ <= b ? l.value = On(C, 0, t.value.length) : L === 1 && _ >= b && (l.value = On(C, 0, t.value.length - f.value)), g = E;
  }, handleItemResize: function(x, E) {
    i.value = Math.max(i.value, E), d[x] = E, y.set(t.value[x], E);
  } };
}
const Yi = N({ items: { type: Array, default: () => [] }, renderless: Boolean, ...Ui(), ...re(), ...kn() }, "VVirtualScroll"), Xi = K()({ name: "VVirtualScroll", props: Yi(), setup(e, t) {
  let { slots: n } = t;
  const l = ye("VVirtualScroll"), { dimensionStyles: o } = Vn(e), { containerRef: i, handleScroll: r, handleItemResize: a, scrollToIndex: s, paddingTop: c, paddingBottom: y, computedItems: d } = Ki(e, X(e, "items"));
  return Ue(() => e.renderless, () => {
    Bn(() => {
      var f;
      i.value = fo(l.vnode.el, !0), (f = i.value) == null || f.addEventListener("scroll", r);
    }), ge(() => {
      var f;
      (f = i.value) == null || f.removeEventListener("scroll", r);
    });
  }), ne(() => {
    const f = d.value.map((m) => p(Hi, { key: m.index, renderless: e.renderless, "onUpdate:height": (g) => a(m.index, g) }, { default: (g) => {
      var I;
      return (I = n.default) == null ? void 0 : I.call(n, { item: m.raw, index: m.index, ...g });
    } }));
    return e.renderless ? p(pe, null, [p("div", { class: "v-virtual-scroll__spacer", style: { paddingTop: J(c.value) } }, null), f, p("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: J(y.value) } }, null)]) : p("div", { ref: i, class: ["v-virtual-scroll", e.class], onScroll: r, style: [o.value, e.style] }, [p("div", { class: "v-virtual-scroll__container", style: { paddingTop: J(c.value), paddingBottom: J(y.value) } }, [f])]);
  }), { scrollToIndex: s };
} });
function Ji(e, t) {
  const n = ae(!1);
  let l;
  return { onListScroll: function(o) {
    cancelAnimationFrame(l), n.value = !0, l = requestAnimationFrame(() => {
      l = requestAnimationFrame(() => {
        n.value = !1;
      });
    });
  }, onListKeydown: async function(o) {
    var a, s;
    if (o.key === "Tab" && ((a = t.value) == null || a.focus()), !["PageDown", "PageUp", "Home", "End"].includes(o.key))
      return;
    const i = (s = e.value) == null ? void 0 : s.$el;
    if (!i)
      return;
    o.key !== "Home" && o.key !== "End" || i.scrollTo({ top: o.key === "Home" ? 0 : i.scrollHeight, behavior: "smooth" }), await async function() {
      await new Promise((c) => requestAnimationFrame(c)), await new Promise((c) => requestAnimationFrame(c)), await new Promise((c) => requestAnimationFrame(c)), await new Promise((c) => {
        if (n.value) {
          const y = q(n, () => {
            y(), c();
          });
        } else
          c();
      });
    }();
    const r = i.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (o.key === "PageDown" || o.key === "Home") {
      const c = i.getBoundingClientRect().top;
      for (const y of r)
        if (y.getBoundingClientRect().top >= c) {
          y.focus();
          break;
        }
    } else {
      const c = i.getBoundingClientRect().bottom;
      for (const y of [...r].reverse())
        if (y.getBoundingClientRect().bottom <= c) {
          y.focus();
          break;
        }
    }
  } };
}
const Zi = N({ chips: Boolean, closableChips: Boolean, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, menu: Boolean, menuIcon: { type: de, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, valueComparator: { type: Function, default: xn }, ...na({ itemChildren: !1 }) }, "Select"), Qi = N({ ...Zi(), ...nl(pa({ modelValue: null }), ["validationValue", "dirty", "appendInnerIcon"]), ...qn({ transition: { component: ho } }) }, "VSelect"), er = K()({ name: "VSelect", props: Qi(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:menu": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { t: l } = ul(), o = W(), i = W(), r = ve(e, "menu"), a = v({ get: () => r.value, set: (S) => {
    var O;
    r.value && !S && ((O = i.value) != null && O.ΨopenChildren) || (r.value = S);
  } }), { items: s, transformIn: c, transformOut: y } = wi(e), d = ve(e, "modelValue", [], (S) => c(S === null ? [null] : He(S)), (S) => {
    const O = y(S);
    return e.multiple ? O : O[0] ?? null;
  }), f = Uo(), m = v(() => d.value.map((S) => s.value.find((O) => e.valueComparator(O.value, S.value)) || S)), g = v(() => m.value.map((S) => S.props.value)), I = ae(!1);
  let h, V = "";
  const $ = v(() => e.hideSelected ? s.value.filter((S) => !m.value.some((O) => O === S)) : s.value), x = v(() => e.hideNoData && !s.value.length || e.readonly || (f == null ? void 0 : f.isReadonly.value)), E = W(), { onListScroll: L, onListKeydown: _ } = Ji(E, o);
  function B(S) {
    e.openOnClear && (a.value = !0);
  }
  function C() {
    x.value || (a.value = !a.value);
  }
  function b(S) {
    var z, R;
    if (e.readonly || f != null && f.isReadonly.value || (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(S.key) && S.preventDefault(), ["Enter", "ArrowDown", " "].includes(S.key) && (a.value = !0), ["Escape", "Tab"].includes(S.key) && (a.value = !1), S.key === "Home" ? (z = E.value) == null || z.focus("first") : S.key === "End" && ((R = E.value) == null || R.focus("last")), e.multiple || !function(D) {
      const j = D.key.length === 1, U = !D.ctrlKey && !D.metaKey && !D.altKey;
      return j && U;
    }(S)))
      return;
    const O = performance.now();
    O - h > 1e3 && (V = ""), V += S.key.toLowerCase(), h = O;
    const F = s.value.find((D) => D.title.toLowerCase().startsWith(V));
    F !== void 0 && (d.value = [F]);
  }
  function P(S) {
    if (e.multiple) {
      const O = g.value.findIndex((F) => e.valueComparator(F, S.value));
      if (O === -1)
        d.value = [...d.value, S];
      else {
        const F = [...d.value];
        F.splice(O, 1), d.value = F;
      }
    } else
      d.value = [S], a.value = !1;
  }
  function w(S) {
    var O;
    (O = E.value) != null && O.$el.contains(S.relatedTarget) || (a.value = !1);
  }
  function A() {
    var S;
    I.value && ((S = o.value) == null || S.focus());
  }
  function k(S) {
    I.value = !0;
  }
  return ne(() => {
    const S = !(!e.chips && !n.chip), O = !!(!e.hideNoData || $.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), F = d.value.length > 0, [z] = Kt.filterProps(e), R = F || !I.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
    return p(Kt, H({ ref: o }, z, { modelValue: d.value.map((D) => D.props.value).join(", "), "onUpdate:modelValue": (D) => {
      D == null && (d.value = []);
    }, focused: I.value, "onUpdate:focused": (D) => I.value = D, validationValue: d.externalValue, dirty: F, class: ["v-select", { "v-select--active-menu": a.value, "v-select--chips": !!e.chips, ["v-select--" + (e.multiple ? "multiple" : "single")]: !0, "v-select--selected": d.value.length, "v-select--selection-slot": !!n.selection }, e.class], style: e.style, readonly: !0, placeholder: R, "onClick:clear": B, "onMousedown:control": C, onBlur: w, onKeydown: b }), { ...n, default: () => p(pe, null, [p(Mi, H({ ref: i, modelValue: a.value, "onUpdate:modelValue": (D) => a.value = D, activator: "parent", contentClass: "v-select__content", disabled: x.value, eager: e.eager, maxHeight: 310, openOnClick: !1, closeOnContentClick: !1, transition: e.transition, onAfterLeave: A }, e.menuProps), { default: () => [O && p(Fi, { ref: E, selected: g.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (D) => D.preventDefault(), onKeydown: _, onFocusin: k, onScrollPassive: L, tabindex: "-1" }, { default: () => {
      var D, j, U;
      return [(D = n["prepend-item"]) == null ? void 0 : D.call(n), !$.value.length && !e.hideNoData && (((j = n["no-data"]) == null ? void 0 : j.call(n)) ?? p(vt, { title: l(e.noDataText) }, null)), p(Xi, { renderless: !0, items: $.value }, { default: (T) => {
        var oe;
        let { item: M, index: G, itemRef: Y } = T;
        const le = H(M.props, { ref: Y, key: G, onClick: () => P(M) });
        return ((oe = n.item) == null ? void 0 : oe.call(n, { item: M, index: G, props: le })) ?? p(vt, le, { prepend: (Z) => {
          let { isSelected: ue } = Z;
          return p(pe, null, [e.multiple && !e.hideSelected ? p(Nt, { key: M.value, modelValue: ue, ripple: !1, tabindex: "-1" }, null) : void 0, M.props.prependIcon && p(se, { icon: M.props.prependIcon }, null)]);
        } });
      } }), (U = n["append-item"]) == null ? void 0 : U.call(n)];
    } })] }), m.value.map((D, j) => {
      var T;
      const U = { "onClick:close": function(M) {
        M.stopPropagation(), M.preventDefault(), P(D);
      }, onMousedown(M) {
        M.preventDefault(), M.stopPropagation();
      }, modelValue: !0, "onUpdate:modelValue": void 0 };
      return p("div", { key: D.value, class: "v-select__selection" }, [S ? n.chip ? p(we, { key: "chip-defaults", defaults: { VChip: { closable: e.closableChips, size: "small", text: D.title } } }, { default: () => {
        var M;
        return [(M = n.chip) == null ? void 0 : M.call(n, { item: D, index: j, props: U })];
      } }) : p(ci, H({ key: "chip", closable: e.closableChips, size: "small", text: D.title }, U), null) : ((T = n.selection) == null ? void 0 : T.call(n, { item: D, index: j })) ?? p("span", { class: "v-select__selection-text" }, [D.title, e.multiple && j < m.value.length - 1 && p("span", { class: "v-select__selection-comma" }, [lo(",")])])]);
    })]), "append-inner": function() {
      var T;
      for (var D = arguments.length, j = new Array(D), U = 0; U < D; U++)
        j[U] = arguments[U];
      return p(pe, null, [(T = n["append-inner"]) == null ? void 0 : T.call(n, ...j), e.menuIcon ? p(se, { class: "v-select__menu-icon", icon: e.menuIcon }, null) : void 0]);
    } });
  }), xt({ isFocused: I, menu: a, select: P }, o);
} }), nr = N({ indeterminate: Boolean, inset: Boolean, flat: Boolean, loading: { type: [Boolean, String], default: !1 }, ...Qn(), ...yl() }, "VSwitch"), tr = K()({ name: "VSwitch", inheritAttrs: !1, props: nr(), emits: { "update:focused": (e) => !0, "update:modelValue": () => !0, "update:indeterminate": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const o = ve(e, "indeterminate"), i = ve(e, "modelValue"), { loaderClasses: r } = pl(e), { isFocused: a, focus: s, blur: c } = Zn(e), y = v(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), d = Pe(), f = v(() => e.id || `switch-${d}`);
  function m() {
    o.value && (o.value = !1);
  }
  return ne(() => {
    const [g, I] = jn(n), [h, V] = Ke.filterProps(e), [$, x] = Wt.filterProps(e), E = W();
    function L(_) {
      var B, C;
      _.stopPropagation(), _.preventDefault(), (C = (B = E.value) == null ? void 0 : B.input) == null || C.click();
    }
    return p(Ke, H({ class: ["v-switch", { "v-switch--inset": e.inset }, { "v-switch--indeterminate": o.value }, r.value, e.class], style: e.style }, g, h, { id: f.value, focused: a.value }), { ...l, default: (_) => {
      let { id: B, messagesId: C, isDisabled: b, isReadonly: P, isValid: w } = _;
      return p(Wt, H({ ref: E }, $, { modelValue: i.value, "onUpdate:modelValue": [(A) => i.value = A, m], id: B.value, "aria-describedby": C.value, type: "checkbox", "aria-checked": o.value ? "mixed" : void 0, disabled: b.value, readonly: P.value, onFocus: s, onBlur: c }, I), { ...l, default: () => p("div", { class: "v-switch__track", onClick: L }, null), input: (A) => {
        let { textColorClasses: k, textColorStyles: S } = A;
        return p("div", { class: ["v-switch__thumb", k.value], style: S.value }, [e.loading && p(Eo, { name: "v-switch", active: !0, color: w.value === !1 ? void 0 : y.value }, { default: (O) => l.loader ? l.loader(O) : p(Ao, { active: O.isActive, color: O.color, indeterminate: !0, size: "16", width: "2" }, null) })]);
      } });
    } });
  }), {};
} }), lr = N({ autoGrow: Boolean, autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, noResize: Boolean, rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) }, maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, suffix: String, modelModifiers: Object, ...Qn(), ...ml() }, "VTextarea"), or = K()({ name: "VTextarea", directives: { Intersect: cl }, inheritAttrs: !1, props: lr(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: o } = t;
  const i = ve(e, "modelValue"), { isFocused: r, focus: a, blur: s } = Zn(e), c = v(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : (i.value || "").toString().length), y = v(() => n.maxlength ? n.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter);
  function d(w, A) {
    var k, S;
    e.autofocus && w && ((S = (k = A[0].target) == null ? void 0 : k.focus) == null || S.call(k));
  }
  const f = W(), m = W(), g = ae(""), I = W(), h = v(() => e.persistentPlaceholder || r.value || e.active);
  function V() {
    var w;
    I.value !== document.activeElement && ((w = I.value) == null || w.focus()), r.value || a();
  }
  function $(w) {
    V(), l("click:control", w);
  }
  function x(w) {
    l("mousedown:control", w);
  }
  function E(w) {
    w.stopPropagation(), V(), he(() => {
      i.value = "", ro(e["onClick:clear"], w);
    });
  }
  function L(w) {
    var k;
    const A = w.target;
    if (i.value = A.value, (k = e.modelModifiers) == null ? void 0 : k.trim) {
      const S = [A.selectionStart, A.selectionEnd];
      he(() => {
        A.selectionStart = S[0], A.selectionEnd = S[1];
      });
    }
  }
  const _ = W(), B = W(+e.rows), C = v(() => ["plain", "underlined"].includes(e.variant));
  function b() {
    e.autoGrow && he(() => {
      if (!_.value || !m.value)
        return;
      const w = getComputedStyle(_.value), A = getComputedStyle(m.value.$el), k = parseFloat(w.getPropertyValue("--v-field-padding-top")) + parseFloat(w.getPropertyValue("--v-input-padding-top")) + parseFloat(w.getPropertyValue("--v-field-padding-bottom")), S = _.value.scrollHeight, O = parseFloat(w.lineHeight), F = On(S ?? 0, Math.max(parseFloat(e.rows) * O + k, parseFloat(A.getPropertyValue("--v-input-control-height"))), parseFloat(e.maxRows) * O + k || 1 / 0);
      B.value = Math.floor((F - k) / O), g.value = J(F);
    });
  }
  let P;
  return Re(() => {
    e.autoGrow || (B.value = +e.rows);
  }), Bn(b), q(i, b), q(() => e.rows, b), q(() => e.maxRows, b), q(() => e.density, b), q(_, (w) => {
    w ? (P = new ResizeObserver(b), P.observe(_.value)) : P == null || P.disconnect();
  }), Ye(() => {
    P == null || P.disconnect();
  }), ne(() => {
    const w = !!(o.counter || e.counter || e.counterValue), A = !(!w && !o.details), [k, S] = jn(n), [{ modelValue: O, ...F }] = Ke.filterProps(e), [z] = da(e);
    return p(Ke, H({ ref: f, modelValue: i.value, "onUpdate:modelValue": (R) => i.value = R, class: ["v-textarea v-text-field", { "v-textarea--prefixed": e.prefix, "v-textarea--suffixed": e.suffix, "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-textarea--auto-grow": e.autoGrow, "v-textarea--no-resize": e.noResize || e.autoGrow, "v-text-field--plain-underlined": C.value }, e.class], style: e.style }, k, F, { centerAffix: B.value === 1 && !C.value, focused: r.value }), { ...o, default: (R) => {
      let { isDisabled: D, isDirty: j, isReadonly: U, isValid: T } = R;
      return p(gl, H({ ref: m, style: { "--v-textarea-control-height": g.value }, onClick: $, onMousedown: x, "onClick:clear": E, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: "textbox" }, z, { active: h.value || j.value, centerAffix: B.value === 1 && !C.value, dirty: j.value || e.dirty, disabled: D.value, focused: r.value, error: T.value === !1 }), { ...o, default: (M) => {
        let { props: { class: G, ...Y } } = M;
        return p(pe, null, [e.prefix && p("span", { class: "v-text-field__prefix" }, [e.prefix]), fe(p("textarea", H({ ref: I, class: G, value: i.value, onInput: L, autofocus: e.autofocus, readonly: U.value, disabled: D.value, placeholder: e.placeholder, rows: e.rows, name: e.name, onFocus: V, onBlur: s }, Y, S), null), [[Me("intersect"), { handler: d }, null, { once: !0 }]]), e.autoGrow && fe(p("textarea", { class: [G, "v-textarea__sizer"], "onUpdate:modelValue": (le) => i.value = le, ref: _, readonly: !0, "aria-hidden": "true" }, null), [[Ba, i.value]]), e.suffix && p("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: A ? (R) => {
      var D;
      return p(pe, null, [(D = o.details) == null ? void 0 : D.call(o, R), w && p(pe, null, [p("span", null, null), p(ca, { active: e.persistentCounter || r.value, value: c.value, max: y.value }, o.counter)])]);
    } : void 0 });
  }), xt({}, f, m, I);
} }), va = Te({ __name: "BooleanIcons", props: Ce({ iconFalseColor: {}, iconFalseTitle: {}, iconTrueColor: {}, iconTrueTitle: {}, iconFalse: {}, iconTrue: {} }, { modelValue: {} }), emits: ["update:modelValue"], setup(e) {
  const t = e, n = ce(Symbol.for("vuetify:icons")), l = en(e, "modelValue"), o = v(() => _e({ icon: t.iconFalse, iconOptions: n, name: "false" })), i = v(() => _e({ icon: t.iconTrue, iconOptions: n, name: "true" }));
  return (r, a) => l.value ? (ee(), je(u(se), { key: 0, class: "v-inline-fields--boolean-icons fa-fw", color: r.iconTrueColor, icon: u(i), size: "x-small", title: r.iconTrueTitle }, null, 8, ["color", "icon", "title"])) : (ee(), je(u(se), { key: 1, class: "v-inline-fields--boolean-icons fa-fw", color: r.iconFalseColor, icon: u(o), size: "x-small", title: r.iconFalseTitle }, null, 8, ["color", "icon", "title"]));
} }), te = "v-inline-fields", gn = (e) => {
  const { field: t = "", density: n = "", disabled: l = !1, iconSet: o = "mdi", loading: i = !1, loadingWait: r, tableField: a = !1, variant: s } = e, c = n && s;
  return { [`${te}`]: !0, [`${te}--container`]: !0, [`${te}--container-disabled`]: u(l), [`${te}--container-table`]: a, [`${te}--container-icon-set-${o}`]: !0, [`${te}--container-loading`]: i && r, [`${te}--container-${t}`]: !0, [`${te}--container-${t}-${n}`]: !0, [`${te}--container-${t}-${n}-${s}`]: c, [`${te}--container-${t}-${s}`]: s, [`${te}--container-${t}-${s}-${n}`]: c, [`${te}--container-${n}`]: n, [`${te}--container-${n}-${t}`]: n, [`${te}--container-${n}-${s}`]: c, [`${te}--container-${s}`]: s, [`${te}--container-${s}-${n}`]: c, [`${te}--container-${s}-${t}`]: s };
}, hn = (e) => {
  const { field: t = "", density: n = "" } = e;
  return { [`${te}--display-container`]: !0, [`${te}--display-wrapper-value`]: !0, [`${t}`]: !0, "v-input": !0, [`v-input--density-${n}`]: !0, "v-input--horizontal": !0 };
}, yt = (e) => {
  const { density: t = "", variant: n = "" } = e;
  return { "v-input": !0, "v-input--dirty": !0, "v-input--horizontal": !0, "v-text-field": !0, [`v-input--density-${t}`]: !0, [`v-text-field--plain-${n}`]: !0 };
}, fa = (e) => {
  const { density: t = "" } = e;
  return { [`v-selection-control--density-${t}`]: !0 };
}, hl = (e, t, n) => {
  const { error: l = !1, empty: o = !1 } = n;
  return { [`${te}`]: !0, [`${te}--display-value-${e}`]: !0, [`${te}--display-value`]: !0, [`${te}--display-value-empty`]: u(o), [`text-${t}`]: !u(l), "text-danger": u(l) };
}, bn = (e) => {
  const { name: t, active: n = !1 } = e;
  return { [`${te}`]: !0, [`${te}--field`]: !0, [`${te}--field-${t}`]: !0, [`${te}--field-active`]: n };
};
function Jl(e) {
  if (!e)
    return 100;
  if (e.toString().includes(".")) {
    const t = 100 * Number(e);
    return t >= 100 ? 100 : t;
  }
  return Number(e) >= 100 ? 100 : Number(e);
}
function Zl(e) {
  let t = function(d) {
    const f = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let m = d;
    return Object.entries(f).forEach(([g, I]) => {
      d.toLowerCase() != g.toLowerCase() || (m = I);
    }), m;
  }(e), n = 0, l = 0, o = 0, i = 100, r = 0, a = 0, s = 0;
  if (t.substring(0, 1) === "#")
    t = function(d) {
      let f = d.replace("#", "");
      f.length === 3 && (f = f.split("").map((V) => V + V).join(""));
      const m = parseInt(f.substring(0, 2), 16), g = parseInt(f.substring(2, 4), 16), I = parseInt(f.substring(4, 6), 16);
      return [m, g, I, 100];
    }(t);
  else if (t.includes("rgb"))
    t = [...t.matchAll(/[\d+.\d+]+/g)].map(Number);
  else if (t.includes("hsl"))
    return t = [...t.matchAll(/[\d+.\d+]+/g)].map(String), n = t[0], l = t[1], o = t[2], i = Jl(t[3]), `${n} ${l}% ${o}% / ${i}%`;
  [r, a, s, i] = t, r /= 255, a /= 255, s /= 255, i = Jl(i);
  const c = Math.max(r, a, s), y = Math.min(r, a, s);
  if (c === null || !y === null || isNaN(c) || isNaN(y)) {
    const d = "0 0% 100% / 12%";
    return console.warn(`[VuetifyInlineFields: The "color" prop value using "${t}" doesn't exist. Using the value "hsl(${d})" in it's place.`), d;
  }
  if (n = (c + y) / 2, l = (c + y) / 2, o = (c + y) / 2, c == y)
    n = l = 0;
  else {
    const d = c - y;
    switch (l = o > 0.5 ? d / (2 - c - y) : d / (c + y), c) {
      case r:
        n = (a - s) / d + (a < s ? 6 : 0);
        break;
      case a:
        n = (s - r) / d + 2;
        break;
      case s:
        n = (r - a) / d + 4;
    }
    n /= 6;
  }
  return n = Math.round(360 * n), l = Math.round(100 * l), o = Math.round(100 * o), `${n} ${l}% ${o}% / ${i}%`;
}
const ar = (e, t) => {
  if (function(l) {
    return l === "transparent" || l === "none" || l === "inherit" || l === "currentColor" || l === "initial" || l === "unset";
  }(e))
    return e;
  if (function(l) {
    return l.includes("--v-theme");
  }(e))
    return `rgb(var(${e}))`;
  const n = function(l, o) {
    const i = o.global.current.value.colors;
    return Object.entries(i).find(([r]) => r === l);
  }(e, t);
  return n ? `hsl(${Zl(n[1])})` : `hsl(${Zl(e)})`;
}, bl = (e) => {
  const { underlineStyle: t, underlineWidth: n, color: l, error: o, theme: i, underlined: r } = e;
  let { underlineColor: a } = e;
  a = a || l;
  const s = { "border-bottom-color": ar(a, i), "border-bottom-style": t, "border-bottom-width": n };
  return u(o) && (s["border-bottom-color"] = "rgb(var(--v-theme-danger))"), r || (s["border-bottom"] = "none"), s;
}, ir = { class: "v-inline-fields--display-wrapper" }, mt = Te({ __name: "DisplayedValue", props: { color: {}, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayValue: {}, empty: { type: Boolean }, error: { type: Boolean }, field: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean } }, emits: ["toggleField"], setup(e, { emit: t }) {
  const n = e, l = Qt(), o = v(() => hl(n.field, n.valueColor, { empty: n.empty, error: n.error })), i = v(() => bl({ color: n.color, error: n.error, theme: l, underlineColor: n.underlineColor, underlineStyle: n.underlineStyle, underlineWidth: n.underlineWidth, underlined: n.underlined })), r = v(() => ((c) => {
    const { underlineWidth: y } = c;
    return { borderBottom: `${y || "0px"} solid transparent` };
  })({ underlineWidth: n.underlineWidth })), a = (c, y = !1) => ((d) => {
    const { inner: f = !1, position: m } = d;
    return { [`${te}--display-icon`]: !f, [`${te}--display-${m}-icon`]: !f, [`${te}--display-${m}-inner-icon`]: f, "me-1": m === "prepend", "ms-1": m === "append" };
  })({ inner: y, position: c });
  function s() {
    t("toggleField");
  }
  return (c, y) => (ee(), ie("div", ir, [c.displayPrependIcon ? (ee(), ie("div", { key: 0, class: Q(a("prepend")), style: Se(u(r)) }, [p(se, { color: c.displayPrependIconColor, icon: c.displayPrependIcon, size: "x-small" }, null, 8, ["color", "icon"])], 6)) : rn("", !0), Le("div", { class: Q(["d-inline-flex", u(o)]), style: Se(u(i)), onClick: s }, [c.displayPrependInnerIcon ? (ee(), ie("div", { key: 0, class: Q(a("prepend", !0)) }, [p(se, { color: c.displayPrependInnerIconColor, icon: c.displayPrependInnerIcon, size: "x-small" }, null, 8, ["color", "icon"])], 2)) : rn("", !0), lo(" " + Zt(c.displayValue) + " ", 1), c.displayAppendInnerIcon ? (ee(), ie("div", { key: 1, class: Q(a("append", !0)) }, [p(se, { color: c.displayAppendInnerIconColor, icon: c.displayAppendInnerIcon, size: "x-small" }, null, 8, ["color", "icon"])], 2)) : rn("", !0)], 6), c.displayAppendIcon ? (ee(), ie("div", { key: 1, class: Q(a("append")), style: Se(u(r)) }, [p(se, { color: c.displayAppendIconColor, icon: c.displayAppendIcon, size: "x-small" }, null, 8, ["color", "icon"])], 6)) : rn("", !0)]));
} }), Mn = Te({ __name: "SaveFieldButtons", props: { loading: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonVariant: {}, cancelButtonTitle: {}, cancelIconColor: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideSaveIcon: { type: Boolean }, loadingIconColor: {}, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIconColor: {}, cancelIcon: {}, loadingIcon: {}, saveIcon: {} }, emits: ["close", "save"], setup(e, { emit: t }) {
  const n = e, l = nn(), o = ce(Symbol.for("vuetify:icons")), i = v(() => n.error), r = v(() => ({ [`${te}--save-fields-container`]: !0 })), a = v(() => n.loading), s = Ae({ ...l, ...n }), c = v(() => (o == null ? void 0 : o.defaultSet) === "fa" ? "fa-spin" : (o == null ? void 0 : o.defaultSet) === "mdi" ? "mdi-spin" : ""), y = v(() => ((h) => {
    const { cancelButtonVariant: V } = h;
    return { "me-1": V === "elevated", "ms-1": !0 };
  })({ cancelButtonVariant: s.cancelButtonVariant })), d = v(() => _e({ icon: n.cancelIcon, iconOptions: o, name: "false" })), f = v(() => _e({ icon: n.loadingIcon, iconOptions: o, name: "loading" })), m = v(() => _e({ icon: n.saveIcon, iconOptions: o, name: "save" }));
  function g() {
    t("close");
  }
  function I() {
    t("save");
  }
  return (h, V) => (ee(), ie("div", H({ class: u(r) }, h.$attrs), [u(s).hideSaveIcon ? rn("", !0) : (ee(), je(Mt, { key: 0, class: "ms-1", color: u(s).saveButtonColor, disabled: u(i), icon: "", size: u(s).saveButtonSize, title: u(a) ? "Loading" : u(s).saveButtonTitle, variant: u(s).saveButtonVariant, onClick: I }, { default: Ie(() => [u(a) ? (ee(), je(se, { key: 1, class: Q(u(c)), color: u(s).loadingIconColor, icon: u(f) }, null, 8, ["class", "color", "icon"])) : (ee(), je(se, { key: 0, color: u(i) ? "error" : u(s).saveIconColor, icon: u(m) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["color", "disabled", "size", "title", "variant"])), p(Mt, { class: Q(u(y)), color: u(s).cancelButtonColor, icon: "", size: u(s).cancelButtonSize, title: u(s).cancelButtonTitle, variant: u(s).cancelButtonVariant, onClick: g }, { default: Ie(() => [u(s).hideSaveIcon && u(a) ? (ee(), je(se, { key: 0, class: Q(u(c)), color: u(s).loadingIconColor, icon: u(f) }, null, 8, ["class", "color", "icon"])) : (ee(), je(se, { key: 1, class: "text-default", color: u(s).cancelIconColor, icon: u(d) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["class", "color", "size", "title", "variant"])], 16));
} }), gt = (e) => {
  const { required: t, rules: n } = e;
  let { value: l } = e;
  l = u(l);
  const o = [];
  let i = !1;
  if (t && !l)
    return o.push("Field is required."), { errors: !0, results: o };
  if (n) {
    for (const r of n) {
      const a = (typeof r == "function" ? r : () => r)(l);
      a !== !0 && (typeof a == "string" ? o.push(a) : console.warn(`${a} is not a valid value. Rule functions must return boolean true or a string.`));
    }
    i = o.length > 0;
  }
  return { errors: i, results: o };
}, In = (e) => {
  const { attrs: t, closeSiblings: n, fieldOnly: l, props: o, showField: i, timeOpened: r } = e;
  let a = r;
  return n && !l && (a = /* @__PURE__ */ new Date()), { settings: { ...t, ...o }, showField: !u(i), timeOpened: a };
}, Yt = (e) => {
  const { length: t = 0 } = e;
  let { suffix: n, text: l } = e;
  return l = l.toString(), n = n || "...", l.length > t ? `${l.substring(0, t)}${n}` : l;
}, Cn = ["error", "update", "update:closeSiblingFields", "update:model-value"], rr = ["cancelButtonColor", "cancelButtonSize", "cancelButtonTitle", "cancelButtonVariant", "cancelIcon", "cancelIconColor", "closeSiblings", "displayAppendIcon", "displayAppendIconColor", "displayAppendIconSize", "displayAppendInnerIcon", "displayAppendInnerIconColor", "displayAppendInnerIconSize", "displayPrependIcon", "displayPrependIconColor", "displayPrependIconSize", "displayPrependInnerIcon", "displayPrependInnerIconColor", "displayPrependInnerIconSize", "emptyText", "fieldOnly", "hideSaveIcon", "item", "loadingIcon", "loadingIconColor", "loadingWait", "saveButtonColor", "saveButtonSize", "saveButtonTitle", "saveButtonVariant", "saveIcon", "saveIconColor", "tableField", "truncateLength", "truncateSuffix", "underlineColor", "underlineStyle", "underlineWidth", "underlined", "valueColor"], En = (e) => {
  let t = e;
  return t = Object.entries(t).filter(([n]) => !rr.includes(n)), Object.fromEntries(t);
}, sr = { class: "v-selection-control__wrapper" }, ur = Te({ __name: "VInlineCheckbox", props: Ce(cn({ density: {}, falseIcon: {}, trueIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, closeSiblings: { type: Boolean }, color: {}, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, disabled: { type: Boolean }, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...xa }), { modelValue: { type: Boolean } }), emits: Ce([...Cn], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = e, l = en(e, "modelValue"), o = nn(), i = _n(), r = ce(Symbol.for("vuetify:icons")), a = Qt();
  let s = Ae({ ...o, ...n });
  const c = v(() => n.loading), y = W(!1), d = W(!1), f = W(null), m = v(() => En(s));
  q(() => c.value, (S, O) => {
    !S && O && d.value && b();
  });
  const g = v(() => _e({ icon: n.trueIcon, iconOptions: r, name: "checkboxFalse" })), I = v(() => _e({ icon: n.iconTrue, iconOptions: r, name: "checkboxTrue" })), h = v(() => l.value == s.trueValue), V = v(() => gn({ density: s.density, disabled: s.disabled, field: "v-checkbox", loading: c.value, loadingWait: s.loadingWait, tableField: s.tableField })), $ = v(() => hn({ density: s.density, field: "v-checkbox" })), x = fa({ density: s.density }), E = v(() => bn({ active: d.value, name: "checkbox" })), L = v(() => hl("checkbox", s.valueColor, { error: y })), _ = v(() => ({})), B = v(() => bl({ color: s.color, error: y, theme: a, underlineColor: s.underlineColor, underlineStyle: s.underlineStyle, underlineWidth: s.underlineWidth, underlined: s.underlined }));
  function C() {
    y.value = !1, b();
  }
  function b() {
    if (s.disabled || s.loadingWait && c.value)
      return;
    const S = In({ attrs: o, closeSiblings: s.closeSiblings, fieldOnly: s.fieldOnly, props: n, showField: d, timeOpened: f.value });
    s = { ...s, ...S.settings }, d.value = S.showField, f.value = S.timeOpened, w !== null && s.closeSiblings && d.value && !s.fieldOnly && w.emit(S.timeOpened);
  }
  function P(S) {
    l.value = S, t("update", S), s.loadingWait || b();
  }
  let w, A;
  function k(S) {
    t("update:closeSiblingFields", f), d.value && f.value !== S && b();
  }
  return s.closeSiblings && import("@vueuse/core").then(({ useEventBus: S }) => {
    w = S(yn), A = w.on(k);
  }), dn(() => {
    A !== void 0 && w.off(k);
  }), (S, O) => (ee(), ie("div", { class: Q(u(V)), style: Se(u(_)) }, [u(d) || u(s).fieldOnly ? (ee(), ie("div", { key: 1, class: Q(u(E)) }, [p(ii, H(u(m), { modelValue: l.value, "onUpdate:modelValue": [O[1] || (O[1] = (F) => l.value = F), P], color: u(s).color, density: u(s).density, disabled: u(c), error: u(y), "false-icon": u(g), "false-value": u(s).falseValue, "hide-details": u(s).hideDetails, label: u(s).label, "true-icon": u(I), value: u(s).trueValue }), Pn({ _: 2 }, [$n(u(i), (F, z) => ({ name: z, fn: Ie((R) => [pn(S.$slots, z, vn(fn({ ...R })))]) })), u(i).append ? void 0 : { name: "append", fn: Ie(() => [p(u(Mn), { "cancel-button-color": u(s).cancelButtonColor, "cancel-button-size": u(s).cancelButtonSize, "cancel-button-title": u(s).cancelButtonTitle, "cancel-button-variant": u(s).cancelButtonVariant, "cancel-icon": u(s).cancelIcon, "cancel-icon-color": u(s).cancelIconColor, error: u(y), "field-only": u(s).fieldOnly, "hide-save-icon": !0, loading: u(c), "loading-icon": u(s).loadingIcon, "loading-icon-color": u(s).loadingIconColor, "save-button-color": u(s).saveButtonColor, "save-button-size": u(s).saveButtonSize, "save-button-title": u(s).saveButtonTitle, "save-button-variant": u(s).saveButtonVariant, "save-icon": u(s).saveIcon, "save-icon-color": u(s).saveIconColor, onClose: C, onSave: P }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "true-icon", "value"])], 2)) : (ee(), ie("div", { key: 0, class: Q(["v-inline-fields--container-display-container", u($)]) }, [Le("div", { class: Q(u(x)) }, [Le("div", sr, [S.icons ? (ee(), ie("div", { key: 0, class: Q(["v-inline-fields--container-display-container-value-icons", u(L)]), style: Se(u(B)), onClick: b }, [p(u(va), { modelValue: u(h), "onUpdate:modelValue": O[0] || (O[0] = (F) => on(h) ? h.value = F : null), "icon-false": u(s).iconFalse, "icon-false-color": u(s).iconFalseColor, "icon-false-title": u(s).iconFalseTitle, "icon-true": u(s).iconTrue, "icon-true-color": u(s).iconTrueColor, "icon-true-title": u(s).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (ee(), ie("div", { key: 1, class: Q(["d-inline-flex align-center justify-center", u(L)]), style: Se(u(B)), onClick: b }, Zt(u(h)), 7))])], 2)], 2))], 6));
} }), cr = Te({ __name: "VInlineCustomField", props: Ce(cn({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, closeSiblings: { type: Boolean }, color: {}, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, disabled: { type: Boolean }, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...ao }), { modelValue: { type: Boolean } }), emits: Ce([...Cn], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = e, l = en(e, "modelValue"), o = nn(), i = ce(Symbol.for("vuetify:icons"));
  let r = Ae({ ...o, ...n });
  const a = v(() => n.loading), s = W(!1), c = W(!1), y = W(!1), d = W(null);
  let f = l.value;
  q(() => a.value, (k, S) => {
    !k && S && y.value && _();
  });
  const m = v(() => l.value ? (s.value = !1, r.truncateLength ? Yt({ length: r.truncateLength, suffix: r.truncateSuffix, text: l.value }) : l.value) : (s.value = !0, r.emptyText)), g = v(() => ({ ...r, loading: a.value, modelValue: l.value, originalValue: f })), I = v(() => ({ color: r.color, displayAppendIcon: n.displayAppendIcon, displayAppendIconColor: n.displayAppendIconColor, displayAppendIconSize: n.displayAppendIconSize, displayAppendInnerIcon: n.displayAppendInnerIcon, displayAppendInnerIconColor: n.displayAppendInnerIconColor, displayAppendInnerIconSize: n.displayAppendInnerIconSize, displayPrependIcon: n.displayPrependIcon, displayPrependIconColor: n.displayPrependIconColor, displayPrependIconSize: n.displayPrependIconSize, displayPrependInnerIcon: n.displayPrependInnerIcon, displayPrependInnerIconColor: n.displayPrependInnerIconColor, displayPrependInnerIconSize: n.displayPrependInnerIconSize, displayValue: m.value, empty: s, error: c, field: "v-text-field", underlineColor: r.underlineColor, underlineStyle: r.underlineStyle, underlineWidth: r.underlineWidth, underlined: r.underlined, valueColor: r.valueColor })), h = v(() => gn({ density: r.density, disabled: r.disabled, field: "v-text-field", iconSet: i == null ? void 0 : i.defaultSet, loading: a.value, loadingWait: r.loadingWait, tableField: r.tableField, variant: r.variant })), V = v(() => hn({ density: r.density, field: "v-text-field" })), $ = yt({ density: r.density, variant: r.variant }), x = v(() => bn({ active: y.value, name: "text-field" })), E = v(() => ({}));
  function L() {
    c.value = !1, l.value = f, _();
  }
  function _() {
    if (r.disabled || r.loadingWait && a.value)
      return;
    const k = In({ attrs: o, closeSiblings: r.closeSiblings, fieldOnly: r.fieldOnly, props: n, showField: y, timeOpened: d.value });
    r = { ...r, ...k.settings }, y.value = k.showField, d.value = k.timeOpened, P !== null && r.closeSiblings && y.value && !r.fieldOnly && P.emit(k.timeOpened);
  }
  const B = W();
  function C() {
    const k = gt({ required: r.required, rules: r.rules, value: l });
    return c.value = k.errors, B.value = k.results, k.results;
  }
  function b() {
    c.value ? c.value = !0 : (f = l.value, t("update", l.value), r.loadingWait || _());
  }
  let P, w;
  function A(k) {
    t("update:closeSiblingFields", d), y.value && d.value !== k && L();
  }
  return q(() => y.value, () => {
    y.value && C();
  }), q(() => l.value, () => {
    y.value && C();
  }), r.closeSiblings && import("@vueuse/core").then(({ useEventBus: k }) => {
    P = k(yn), w = P.on(A);
  }), dn(() => {
    w !== void 0 && P.off(A);
  }), (k, S) => (ee(), ie("div", { class: Q(u(h)), style: Se(u(E)) }, [u(y) || u(r).fieldOnly ? (ee(), ie("div", { key: 1, class: Q(["d-flex align-center py-2", u(x)]) }, [pn(k.$slots, "default", vn(fn(u(g)))), p(u(Mn), { modelValue: l.value, "onUpdate:modelValue": S[0] || (S[0] = (O) => l.value = O), "cancel-button-color": u(r).cancelButtonColor, "cancel-button-size": u(r).cancelButtonSize, "cancel-button-title": u(r).cancelButtonTitle, "cancel-button-variant": u(r).cancelButtonVariant, "cancel-icon": u(r).cancelIcon, "cancel-icon-color": u(r).cancelIconColor, error: u(c), "field-only": u(r).fieldOnly, "hide-save-icon": u(r).hideSaveIcon, loading: u(a), "loading-icon": u(r).loadingIcon, "loading-icon-color": u(r).loadingIconColor, required: u(r).required, "save-button-color": u(r).saveButtonColor, "save-button-size": u(r).saveButtonSize, "save-button-title": u(r).saveButtonTitle, "save-button-variant": u(r).saveButtonVariant, "save-icon": u(r).saveIcon, "save-icon-color": u(r).saveIconColor, onClose: L, onSave: b }, null, 8, ["modelValue", "cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "required", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])], 2)) : (ee(), ie("div", { key: 0, class: Q(u(V)) }, [Le("div", { class: Q(u($)) }, [p(u(mt), H(u(I), { onToggleField: _ }), null, 16)], 2)], 2))], 6));
} }), dr = Te({ __name: "VInlineSelect", props: Ce(cn({ clearIcon: {}, clearable: {}, density: {}, hideSelected: {}, itemTitle: {}, itemValue: {}, items: {}, menu: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, closeSiblings: { type: Boolean }, color: {}, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, disabled: { type: Boolean }, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...wa }), { modelValue: { type: Boolean } }), emits: Ce([...Cn], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = e, l = en(e, "modelValue"), o = nn(), i = _n(), r = ce(Symbol.for("vuetify:icons"));
  let a = Ae({ ...o, ...n });
  const s = v(() => n.loading), c = W(!1), y = W(!1), d = W(), f = W(!1), m = W(null);
  let g = l.value;
  q(() => s.value, (z, R) => {
    !z && R && f.value && b();
  });
  const I = v(() => _e({ icon: n.clearIcon, iconOptions: r, name: "clear" })), h = v(() => l.value && l.value[a.itemTitle] ? (c.value = !1, l.value[a.itemTitle]) : (l.value = "", c.value = !0, a.emptyText)), V = v(() => En(a)), $ = v(() => ({ color: a.color, displayAppendIcon: n.displayAppendIcon, displayAppendIconColor: n.displayAppendIconColor, displayAppendIconSize: n.displayAppendIconSize, displayAppendInnerIcon: n.displayAppendInnerIcon, displayAppendInnerIconColor: n.displayAppendInnerIconColor, displayAppendInnerIconSize: n.displayAppendInnerIconSize, displayPrependIcon: n.displayPrependIcon, displayPrependIconColor: n.displayPrependIconColor, displayPrependIconSize: n.displayPrependIconSize, displayPrependInnerIcon: n.displayPrependInnerIcon, displayPrependInnerIconColor: n.displayPrependInnerIconColor, displayPrependInnerIconSize: n.displayPrependInnerIconSize, displayValue: h.value, empty: c, error: y, field: "v-text-field", underlineColor: a.underlineColor, underlineStyle: a.underlineStyle, underlineWidth: a.underlineWidth, underlined: a.underlined, valueColor: a.valueColor }));
  Re(() => {
    d.value = a.items || [];
  });
  const x = v(() => gn({ density: a.density, disabled: a.disabled, field: "v-select", iconSet: r == null ? void 0 : r.defaultSet, loading: s.value, loadingWait: a.loadingWait, tableField: a.tableField, variant: a.variant })), E = v(() => hn({ density: a.density, field: "v-select" })), L = yt({ density: a.density, variant: a.variant }), _ = v(() => bn({ active: f.value, name: "select" })), B = v(() => ({}));
  function C() {
    y.value = !1, l.value = g, b();
  }
  function b() {
    if (a.disabled || a.loadingWait && s.value)
      return;
    const z = In({ attrs: o, closeSiblings: a.closeSiblings, fieldOnly: a.fieldOnly, props: n, showField: f, timeOpened: m.value });
    a = { ...a, ...z.settings }, f.value = z.showField, m.value = z.timeOpened, S !== null && a.closeSiblings && f.value && !a.fieldOnly && S.emit(z.timeOpened);
  }
  const P = W(), w = v(() => P.value);
  function A() {
    const z = gt({ required: a.required, rules: a.rules, value: l });
    return y.value = z.errors, P.value = z.results, z.results;
  }
  function k() {
    g = l.value, t("update", l.value), a.loadingWait || b();
  }
  let S, O;
  function F(z) {
    t("update:closeSiblingFields", m), f.value && m.value !== z && C();
  }
  return q(() => f.value, () => {
    f.value && A();
  }), q(() => l.value, () => {
    f.value && A();
  }), a.closeSiblings && import("@vueuse/core").then(({ useEventBus: z }) => {
    S = z(yn), O = S.on(F);
  }), dn(() => {
    O !== void 0 && S.off(F);
  }), (z, R) => (ee(), ie("div", { class: Q(u(x)), style: Se(u(B)) }, [u(f) || u(a).fieldOnly ? (ee(), ie("div", { key: 1, class: Q(u(_)) }, [p(er, H(u(V), { modelValue: l.value, "onUpdate:modelValue": R[0] || (R[0] = (D) => l.value = D), autofocus: !u(a).fieldOnly || u(a).autofocus, "clear-icon": u(I), clearable: u(a).clearable, color: u(a).color, density: u(a).density, disabled: u(s), error: u(y), "error-messages": u(w), "hide-details": u(a).hideDetails, "hide-selected": u(a).hideSelected, "item-title": u(a).itemTitle, "item-value": u(a).itemValue, items: u(d), label: u(a).label, loading: u(s), menu: u(a).menu && !u(a).fieldOnly, variant: u(a).variant, width: "100%", onKeyup: tt(C, ["esc"]) }), Pn({ _: 2 }, [$n(u(i), (D, j) => ({ name: j, fn: Ie((U) => [pn(z.$slots, j, vn(fn({ ...U })), void 0, !0)]) })), u(i).append ? void 0 : { name: "append", fn: Ie(() => [p(u(Mn), { "cancel-button-color": u(a).cancelButtonColor, "cancel-button-size": u(a).cancelButtonSize, "cancel-button-title": u(a).cancelButtonTitle, "cancel-button-variant": u(a).cancelButtonVariant, "cancel-icon": u(a).cancelIcon, "cancel-icon-color": u(a).cancelIconColor, error: u(y), "field-only": u(a).fieldOnly, "hide-save-icon": u(a).hideSaveIcon, loading: u(s), "loading-icon": u(a).loadingIcon, "loading-icon-color": u(a).loadingIconColor, "save-button-color": u(a).saveButtonColor, "save-button-size": u(a).saveButtonSize, "save-button-title": u(a).saveButtonTitle, "save-button-variant": u(a).saveButtonVariant, "save-icon": u(a).saveIcon, "save-icon-color": u(a).saveIconColor, onClose: C, onSave: k }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "clearable", "color", "density", "disabled", "error", "error-messages", "hide-details", "hide-selected", "item-title", "item-value", "items", "label", "loading", "menu", "variant", "onKeyup"])], 2)) : (ee(), ie("div", { key: 0, class: Q(u(E)) }, [Le("div", { class: Q(u(L)) }, [p(u(mt), H(u($), { onToggleField: b }), null, 16)], 2)], 2))], 6));
} }), pr = { class: "v-selection-control__wrapper" }, $e = { VInlineCheckbox: ur, VInlineCustomField: cr, VInlineSelect: ((e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
})(dr, [["__scopeId", "data-v-fe47a020"]]), VInlineSwitch: Te({ __name: "VInlineSwitch", props: Ce(cn({ density: {}, falseIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, closeSiblings: { type: Boolean }, color: {}, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, disabled: { type: Boolean }, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...ka }), { modelValue: { type: Boolean } }), emits: Ce([...Cn], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = e, l = en(e, "modelValue"), o = nn(), i = _n(), r = ce(Symbol.for("vuetify:icons")), a = Qt();
  let s = Ae({ ...o, ...n });
  const c = v(() => n.loading), y = W(!1), d = W(!1), f = W(null), m = v(() => En(s));
  q(() => c.value, (A, k) => {
    !A && k && d.value && B();
  });
  const g = v(() => _e({ icon: s.cancelIcon, iconOptions: r, name: "false" })), I = v(() => l.value == s.trueValue), h = v(() => gn({ density: s.density, disabled: s.disabled, field: "v-switch", loading: c.value, loadingWait: s.loadingWait, tableField: s.tableField })), V = v(() => hn({ density: s.density, field: "v-switch" })), $ = fa({ density: s.density }), x = v(() => bn({ active: d.value, name: "switch" })), E = v(() => hl("switch", s.valueColor, { error: y })), L = v(() => ({})), _ = v(() => bl({ color: s.color, error: y, theme: a, underlineColor: s.underlineColor, underlineStyle: s.underlineStyle, underlineWidth: s.underlineWidth, underlined: s.underlined }));
  function B() {
    if (s.disabled || s.loadingWait && c.value)
      return;
    const A = In({ attrs: o, closeSiblings: s.closeSiblings, fieldOnly: s.fieldOnly, props: n, showField: d.value, timeOpened: f.value });
    s = { ...s, ...A.settings }, d.value = A.showField, f.value = A.timeOpened, b !== null && s.closeSiblings && d.value && !s.fieldOnly && b.emit(A.timeOpened);
  }
  function C(A) {
    l.value = A, t("update", A), s.loadingWait || B();
  }
  let b, P;
  function w(A) {
    t("update:closeSiblingFields", f), d.value && f.value !== A && B();
  }
  return s.closeSiblings && import("@vueuse/core").then(({ useEventBus: A }) => {
    b = A(yn), P = b.on(w);
  }), dn(() => {
    P !== void 0 && b.off(w);
  }), (A, k) => (ee(), ie("div", { class: Q(u(h)), style: Se(u(L)) }, [u(d) || u(s).fieldOnly ? (ee(), ie("div", { key: 1, class: Q(u(x)) }, [p(tr, H(u(m), { modelValue: l.value, "onUpdate:modelValue": [k[1] || (k[1] = (S) => l.value = S), C], color: u(s).color, density: u(s).density, disabled: u(c), error: u(y), "false-icon": u(s).falseIcon, "false-value": u(s).falseValue, "hide-details": u(s).hideDetails, label: u(s).label, loading: u(c), value: u(s).trueValue }), Pn({ _: 2 }, [$n(u(i), (S, O) => ({ name: O, fn: Ie((F) => [pn(A.$slots, O, vn(fn({ ...F })))]) })), u(i).append ? void 0 : { name: "append", fn: Ie(() => [u(s).fieldOnly ? rn("", !0) : (ee(), je(Mt, { key: 0, class: "ms-3", color: u(s).cancelButtonColor, icon: "", size: u(s).cancelButtonSize, title: u(s).cancelButtonTitle, variant: u(s).cancelButtonVariant, onClick: B }, { default: Ie(() => [p(se, { color: u(s).cancelIconColor, icon: u(g) }, null, 8, ["color", "icon"])]), _: 1 }, 8, ["color", "size", "title", "variant"]))]), key: "0" }]), 1040, ["modelValue", "color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "loading", "value"])], 2)) : (ee(), ie("div", { key: 0, class: Q(u(V)) }, [Le("div", { class: Q(u($)) }, [Le("div", pr, [A.icons ? (ee(), ie("div", { key: 0, class: Q(u(E)), style: Se(u(_)), onClick: B }, [p(u(va), { modelValue: u(I), "onUpdate:modelValue": k[0] || (k[0] = (S) => on(I) ? I.value = S : null), "icon-false": u(s).iconFalse, "icon-false-color": u(s).iconFalseColor, "icon-false-title": u(s).iconFalseTitle, "icon-true": u(s).iconTrue, "icon-true-color": u(s).iconTrueColor, "icon-true-title": u(s).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (ee(), ie("div", { key: 1, class: Q(["d-inline-flex align-center justify-center", u(E)]), style: Se(u(_)), onClick: B }, Zt(u(I)), 7))])], 2)], 2))], 6));
} }), VInlineTextField: Te({ __name: "VInlineTextField", props: Ce(cn({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, closeSiblings: { type: Boolean }, color: {}, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, disabled: { type: Boolean }, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...ao }), { modelValue: { type: Boolean } }), emits: Ce([...Cn], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = e, l = en(e, "modelValue"), o = nn(), i = _n(), r = ce(Symbol.for("vuetify:icons"));
  let a = Ae({ ...o, ...n });
  const s = v(() => n.loading), c = W(!1), y = W(!1), d = W(!1), f = W(null);
  let m = l.value;
  q(() => s.value, (F, z) => {
    !F && z && d.value && C();
  });
  const g = v(() => _e({ icon: n.clearIcon, iconOptions: r, name: "clear" })), I = v(() => l.value ? (c.value = !1, a.truncateLength ? Yt({ length: a.truncateLength, suffix: a.truncateSuffix, text: l.value }) : l.value) : (c.value = !0, a.emptyText)), h = v(() => En(a)), V = v(() => ({ color: a.color, displayAppendIcon: n.displayAppendIcon, displayAppendIconColor: n.displayAppendIconColor, displayAppendIconSize: n.displayAppendIconSize, displayAppendInnerIcon: n.displayAppendInnerIcon, displayAppendInnerIconColor: n.displayAppendInnerIconColor, displayAppendInnerIconSize: n.displayAppendInnerIconSize, displayPrependIcon: n.displayPrependIcon, displayPrependIconColor: n.displayPrependIconColor, displayPrependIconSize: n.displayPrependIconSize, displayPrependInnerIcon: n.displayPrependInnerIcon, displayPrependInnerIconColor: n.displayPrependInnerIconColor, displayPrependInnerIconSize: n.displayPrependInnerIconSize, displayValue: I.value, empty: c, error: y, field: "v-text-field", underlineColor: a.underlineColor, underlineStyle: a.underlineStyle, underlineWidth: a.underlineWidth, underlined: a.underlined, valueColor: a.valueColor })), $ = v(() => gn({ density: a.density, disabled: a.disabled, field: "v-text-field", iconSet: r == null ? void 0 : r.defaultSet, loading: s.value, loadingWait: a.loadingWait, tableField: a.tableField, variant: a.variant })), x = v(() => hn({ density: a.density, field: "v-text-field" })), E = yt({ density: a.density, variant: a.variant }), L = v(() => bn({ active: d.value, name: "text-field" })), _ = v(() => ({}));
  function B() {
    y.value = !1, l.value = m, C();
  }
  function C() {
    if (a.disabled || a.loadingWait && s.value)
      return;
    const F = In({ attrs: o, closeSiblings: a.closeSiblings, fieldOnly: a.fieldOnly, props: n, showField: d, timeOpened: f.value });
    a = { ...a, ...F.settings }, d.value = F.showField, f.value = F.timeOpened, k !== null && a.closeSiblings && d.value && !a.fieldOnly && k.emit(F.timeOpened);
  }
  const b = W(), P = v(() => b.value);
  function w() {
    const F = gt({ required: a.required, rules: a.rules, value: l });
    return y.value = F.errors, b.value = F.results, F.results;
  }
  function A() {
    y.value ? y.value = !0 : (m = l.value, t("update", l.value), a.loadingWait || C());
  }
  let k, S;
  function O(F) {
    t("update:closeSiblingFields", f), d.value && f.value !== F && B();
  }
  return q(() => d.value, () => {
    d.value && w();
  }), q(() => l.value, () => {
    d.value && w();
  }), a.closeSiblings && import("@vueuse/core").then(({ useEventBus: F }) => {
    k = F(yn), S = k.on(O);
  }), dn(() => {
    S !== void 0 && k.off(O);
  }), (F, z) => (ee(), ie("div", { class: Q(u($)), style: Se(u(_)) }, [u(d) || u(a).fieldOnly ? (ee(), ie("div", { key: 1, class: Q(u(L)) }, [p(Kt, H(u(h), { modelValue: l.value, "onUpdate:modelValue": z[1] || (z[1] = (R) => l.value = R), autofocus: !u(a).fieldOnly || u(a).autofocus, "clear-icon": u(g), disabled: u(s), error: u(y), "error-messages": u(P), label: u(a).label, loading: u(s), width: "100%", onKeyup: [tt(A, ["enter"]), tt(B, ["esc"])] }), Pn({ _: 2 }, [$n(u(i), (R, D) => ({ name: D, fn: Ie((j) => [pn(F.$slots, D, vn(fn({ ...j })))]) })), u(i).append ? void 0 : { name: "append", fn: Ie(() => [p(u(Mn), { modelValue: l.value, "onUpdate:modelValue": z[0] || (z[0] = (R) => l.value = R), "cancel-button-color": u(a).cancelButtonColor, "cancel-button-size": u(a).cancelButtonSize, "cancel-button-title": u(a).cancelButtonTitle, "cancel-button-variant": u(a).cancelButtonVariant, "cancel-icon": u(a).cancelIcon, "cancel-icon-color": u(a).cancelIconColor, error: u(y), "field-only": u(a).fieldOnly, "hide-save-icon": u(a).hideSaveIcon, loading: u(s), "loading-icon": u(a).loadingIcon, "loading-icon-color": u(a).loadingIconColor, required: u(a).required, "save-button-color": u(a).saveButtonColor, "save-button-size": u(a).saveButtonSize, "save-button-title": u(a).saveButtonTitle, "save-button-variant": u(a).saveButtonVariant, "save-icon": u(a).saveIcon, "save-icon-color": u(a).saveIconColor, onClose: B, onSave: A }, null, 8, ["modelValue", "cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "required", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "disabled", "error", "error-messages", "label", "loading", "onKeyup"])], 2)) : (ee(), ie("div", { key: 0, class: Q(u(x)) }, [Le("div", { class: Q(u(E)) }, [p(u(mt), H(u(V), { onToggleField: C }), null, 16)], 2)], 2))], 6));
} }), VInlineTextarea: Te({ __name: "VInlineTextarea", props: Ce(cn({ autoGrow: {}, clearIcon: {}, density: {}, rows: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, closeSiblings: { type: Boolean }, color: {}, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, disabled: { type: Boolean }, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Va }), { modelValue: { type: Boolean } }), emits: Ce([...Cn], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = e, l = en(e, "modelValue"), o = nn(), i = _n(), r = ce(Symbol.for("vuetify:icons"));
  let a = Ae({ ...o, ...n });
  const s = v(() => n.loading), c = W(!1), y = W(!1), d = W(!1), f = W(null);
  let m = l.value;
  q(() => s.value, (F, z) => {
    !F && z && d.value && C();
  });
  const g = v(() => _e({ icon: n.clearIcon, iconOptions: r, name: "clear" })), I = v(() => l.value ? (c.value = !1, a.truncateLength ? Yt({ length: a.truncateLength, suffix: a.truncateSuffix, text: l.value }) : l.value) : (c.value = !0, a.emptyText)), h = v(() => En(a)), V = v(() => ({ color: a.color, displayAppendIcon: n.displayAppendIcon, displayAppendIconColor: n.displayAppendIconColor, displayAppendIconSize: n.displayAppendIconSize, displayAppendInnerIcon: n.displayAppendInnerIcon, displayAppendInnerIconColor: n.displayAppendInnerIconColor, displayAppendInnerIconSize: n.displayAppendInnerIconSize, displayPrependIcon: n.displayPrependIcon, displayPrependIconColor: n.displayPrependIconColor, displayPrependIconSize: n.displayPrependIconSize, displayPrependInnerIcon: n.displayPrependInnerIcon, displayPrependInnerIconColor: n.displayPrependInnerIconColor, displayPrependInnerIconSize: n.displayPrependInnerIconSize, displayValue: I.value, empty: c, error: y, field: "v-text-field", underlineColor: a.underlineColor, underlineStyle: a.underlineStyle, underlineWidth: a.underlineWidth, underlined: a.underlined, valueColor: a.valueColor })), $ = v(() => gn({ density: a.density, disabled: a.disabled, field: "v-textarea", iconSet: r == null ? void 0 : r.defaultSet, loading: s.value, loadingWait: a.loadingWait, tableField: a.tableField, variant: a.variant })), x = v(() => hn({ density: a.density, field: "v-textarea" })), E = yt({ density: a.density, variant: a.variant }), L = v(() => bn({ active: d.value, name: "textarea" })), _ = v(() => ({}));
  function B() {
    y.value = !1, l.value = m, C();
  }
  function C() {
    if (a.disabled || a.loadingWait && s.value)
      return;
    const F = In({ attrs: o, closeSiblings: a.closeSiblings, fieldOnly: a.fieldOnly, props: n, showField: d, timeOpened: f.value });
    a = { ...a, ...F.settings }, d.value = F.showField, f.value = F.timeOpened, k !== null && a.closeSiblings && d.value && !a.fieldOnly && k.emit(F.timeOpened);
  }
  const b = W(), P = v(() => b.value);
  function w() {
    const F = gt({ required: a.required, rules: a.rules, value: l });
    return y.value = F.errors, b.value = F.results, F.results;
  }
  function A() {
    m = l.value, t("update", l.value), a.loadingWait || C();
  }
  let k, S;
  function O(F) {
    t("update:closeSiblingFields", f), d.value && f.value !== F && B();
  }
  return q(() => d.value, () => {
    d.value && w();
  }), q(() => l.value, () => {
    d.value && w();
  }), a.closeSiblings && import("@vueuse/core").then(({ useEventBus: F }) => {
    k = F(yn), S = k.on(O);
  }), dn(() => {
    S !== void 0 && k.off(O);
  }), (F, z) => (ee(), ie("div", { class: Q(u($)), style: Se(u(_)) }, [u(d) || u(a).fieldOnly ? (ee(), ie("div", { key: 1, class: Q(u(L)) }, [p(or, H(u(h), { modelValue: l.value, "onUpdate:modelValue": z[0] || (z[0] = (R) => l.value = R), "auto-grow": u(a).autoGrow, autofocus: !u(a).fieldOnly || u(a).autofocus, "clear-icon": u(g), color: u(a).color, density: u(a).density, disabled: u(s), error: u(y), "error-messages": u(P), "hide-details": u(a).hideDetails, label: u(a).label, loading: u(s), rows: u(a).rows, variant: u(a).variant, width: "100%", onKeyup: tt(B, ["esc"]) }), Pn({ _: 2 }, [$n(u(i), (R, D) => ({ name: D, fn: Ie((j) => [pn(F.$slots, D, vn(fn({ ...j })))]) })), u(i).append ? void 0 : { name: "append", fn: Ie(() => [p(u(Mn), { "cancel-button-color": u(a).cancelButtonColor, "cancel-button-size": u(a).cancelButtonSize, "cancel-button-title": u(a).cancelButtonTitle, "cancel-button-variant": u(a).cancelButtonVariant, "cancel-icon": u(a).cancelIcon, "cancel-icon-color": u(a).cancelIconColor, error: u(y), "field-only": u(a).fieldOnly, "hide-save-icon": u(a).hideSaveIcon, loading: u(s), "loading-icon": u(a).loadingIcon, "loading-icon-color": u(a).loadingIconColor, "save-button-color": u(a).saveButtonColor, "save-button-size": u(a).saveButtonSize, "save-button-title": u(a).saveButtonTitle, "save-button-variant": u(a).saveButtonVariant, "save-icon": u(a).saveIcon, "save-icon-color": u(a).saveIconColor, onClose: B, onSave: A }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "auto-grow", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "rows", "variant", "onKeyup"])], 2)) : (ee(), ie("div", { key: 0, class: Q(u(x)) }, [Le("div", { class: Q(u(E)) }, [p(u(mt), H(u(V), { onToggleField: C }), null, 16)], 2)], 2))], 6));
} }) }, vr = (e) => {
  for (const t in $e) {
    const n = $e[t];
    e.component(n.name, n);
  }
};
for (const e in $e)
  $e[e].install = vr;
const mr = $e.VInlineCheckbox, gr = $e.VInlineCustomField, hr = $e.VInlineSelect, br = $e.VInlineSwitch, Ir = $e.VInlineTextField, Cr = $e.VInlineTextarea, Sr = { VInlineFields: $e };
export {
  mr as VInlineCheckbox,
  gr as VInlineCustomField,
  hr as VInlineSelect,
  br as VInlineSwitch,
  Ir as VInlineTextField,
  Cr as VInlineTextarea,
  Sr as default
};
(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode('.v-img{--v-theme-overlay-multiplier: 3;z-index:0}.v-img--booting .v-responsive__sizer{transition:none}.v-img__img,.v-img__picture,.v-img__gradient,.v-img__placeholder,.v-img__error{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-img__img--preload{filter:blur(4px)}.v-img__img--contain{object-fit:contain}.v-img__img--cover{object-fit:cover}.v-img__gradient{background-repeat:no-repeat}.v-responsive{display:flex;flex:1 0 auto;max-height:100%;max-width:100%;overflow:hidden;position:relative}.v-responsive--inline{display:inline-flex;flex:0 0 auto}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-responsive__sizer~.v-responsive__content{margin-inline-start:-100%}.v-responsive__sizer{flex:1 0 0px;transition:padding-bottom .2s cubic-bezier(.4,0,.2,1);pointer-events:none}.v-btn{align-items:center;border-radius:4px;display:inline-grid;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;font-weight:500;justify-content:center;letter-spacing:.0892857143em;line-height:normal;max-width:100%;outline:none;position:relative;text-decoration:none;text-indent:.0892857143em;text-transform:uppercase;transition-property:box-shadow,transform,opacity,background;transition-duration:.28s;transition-timing-function:cubic-bezier(.4,0,.2,1);user-select:none;vertical-align:middle;flex-shrink:0;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0}.v-btn--size-x-small{--v-btn-size: .625rem;--v-btn-height: 20px;font-size:var(--v-btn-size);min-width:36px;padding:0 8px}.v-btn--size-small{--v-btn-size: .75rem;--v-btn-height: 28px;font-size:var(--v-btn-size);min-width:50px;padding:0 12px}.v-btn--size-default{--v-btn-size: .875rem;--v-btn-height: 36px;font-size:var(--v-btn-size);min-width:64px;padding:0 16px}.v-btn--size-large{--v-btn-size: 1rem;--v-btn-height: 44px;font-size:var(--v-btn-size);min-width:78px;padding:0 20px}.v-btn--size-x-large{--v-btn-size: 1.125rem;--v-btn-height: 52px;font-size:var(--v-btn-size);min-width:92px;padding:0 24px}.v-btn.v-btn--density-default{height:calc(var(--v-btn-height) + 0px)}.v-btn.v-btn--density-comfortable{height:calc(var(--v-btn-height) + -8px)}.v-btn.v-btn--density-compact{height:calc(var(--v-btn-height) + -12px)}.v-btn--border{border-width:thin;box-shadow:none}.v-btn--absolute{position:absolute}.v-btn--fixed{position:fixed}.v-btn:hover>.v-btn__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-btn:focus-visible>.v-btn__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn:focus>.v-btn__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-btn--active>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]>.v-btn__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-btn--active:hover>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:hover>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-btn--active:focus-visible>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn--active:focus>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-btn--variant-plain,.v-btn--variant-outlined,.v-btn--variant-text,.v-btn--variant-tonal{background:transparent;color:inherit}.v-btn--variant-plain{opacity:.62}.v-btn--variant-plain:focus,.v-btn--variant-plain:hover{opacity:1}.v-btn--variant-plain .v-btn__overlay{display:none}.v-btn--variant-elevated,.v-btn--variant-flat{background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn--variant-elevated{box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--variant-outlined{border:thin solid currentColor}.v-btn--variant-text .v-btn__overlay{background:currentColor}.v-btn--variant-tonal .v-btn__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}@supports selector(:focus-visible){.v-btn:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border:2px solid currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn:focus-visible:after{opacity:calc(.25 * var(--v-theme-overlay-multiplier))}}.v-btn--icon{border-radius:50%;min-width:0;padding:0}.v-btn--icon.v-btn--size-default{--v-btn-size: 1rem}.v-btn--icon.v-btn--density-default{width:calc(var(--v-btn-height) + 12px);height:calc(var(--v-btn-height) + 12px)}.v-btn--icon.v-btn--density-comfortable{width:calc(var(--v-btn-height) + 0px);height:calc(var(--v-btn-height) + 0px)}.v-btn--icon.v-btn--density-compact{width:calc(var(--v-btn-height) + -8px);height:calc(var(--v-btn-height) + -8px)}.v-btn--elevated:hover,.v-btn--elevated:focus{box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--elevated:active{box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--flat{box-shadow:none}.v-btn--block{display:flex;flex:1 0 auto;min-width:100%}.v-btn--disabled{pointer-events:none;opacity:.26}.v-btn--disabled.v-btn--variant-elevated,.v-btn--disabled.v-btn--variant-flat{box-shadow:none;opacity:1;color:rgba(var(--v-theme-on-surface),.26);background:rgb(var(--v-theme-surface))}.v-btn--disabled.v-btn--variant-elevated .v-btn__overlay,.v-btn--disabled.v-btn--variant-flat .v-btn__overlay{opacity:.4615384615}.v-btn--loading{pointer-events:none}.v-btn--loading .v-btn__content,.v-btn--loading .v-btn__prepend,.v-btn--loading .v-btn__append{opacity:0}.v-btn--stacked{grid-template-areas:"prepend" "content" "append";grid-template-columns:auto;grid-template-rows:max-content max-content max-content;justify-items:center;align-content:center}.v-btn--stacked .v-btn__content{flex-direction:column;line-height:1.25}.v-btn--stacked .v-btn__prepend,.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--start,.v-btn--stacked .v-btn__content>.v-icon--end{margin-inline-start:0;margin-inline-end:0}.v-btn--stacked .v-btn__prepend,.v-btn--stacked .v-btn__content>.v-icon--start{margin-bottom:4px}.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--end{margin-top:4px}.v-btn--stacked.v-btn--size-x-small{--v-btn-size: .625rem;--v-btn-height: 56px;font-size:var(--v-btn-size);min-width:56px;padding:0 12px}.v-btn--stacked.v-btn--size-small{--v-btn-size: .75rem;--v-btn-height: 64px;font-size:var(--v-btn-size);min-width:64px;padding:0 14px}.v-btn--stacked.v-btn--size-default{--v-btn-size: .875rem;--v-btn-height: 72px;font-size:var(--v-btn-size);min-width:72px;padding:0 16px}.v-btn--stacked.v-btn--size-large{--v-btn-size: 1rem;--v-btn-height: 80px;font-size:var(--v-btn-size);min-width:80px;padding:0 18px}.v-btn--stacked.v-btn--size-x-large{--v-btn-size: 1.125rem;--v-btn-height: 88px;font-size:var(--v-btn-size);min-width:88px;padding:0 20px}.v-btn--stacked.v-btn--density-default{height:calc(var(--v-btn-height) + 0px)}.v-btn--stacked.v-btn--density-comfortable{height:calc(var(--v-btn-height) + -16px)}.v-btn--stacked.v-btn--density-compact{height:calc(var(--v-btn-height) + -24px)}.v-btn--rounded{border-radius:24px}.v-btn .v-icon{--v-icon-size-multiplier: .8571428571}.v-btn--icon .v-icon{--v-icon-size-multiplier: 1}.v-btn--stacked .v-icon{--v-icon-size-multiplier: 1.1428571429}.v-btn__loader{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.v-btn__content,.v-btn__prepend,.v-btn__append{align-items:center;display:flex;transition:transform,opacity .2s cubic-bezier(.4,0,.2,1)}.v-btn__prepend{grid-area:prepend;margin-inline-start:calc(var(--v-btn-height) / -9);margin-inline-end:calc(var(--v-btn-height) / 4.5)}.v-btn__append{grid-area:append;margin-inline-start:calc(var(--v-btn-height) / 4.5);margin-inline-end:calc(var(--v-btn-height) / -9)}.v-btn__content{grid-area:content;justify-content:center;white-space:nowrap}.v-btn__content>.v-icon--start{margin-inline-start:calc(var(--v-btn-height) / -9);margin-inline-end:calc(var(--v-btn-height) / 4.5)}.v-btn__content>.v-icon--end{margin-inline-start:calc(var(--v-btn-height) / 4.5);margin-inline-end:calc(var(--v-btn-height) / -9)}.v-btn--stacked .v-btn__content{white-space:normal}.v-btn__overlay{background-color:currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn__overlay,.v-btn__underlay{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.v-card-actions .v-btn{padding:0 8px}.v-card-actions .v-btn~.v-btn:not(.v-btn-toggle .v-btn){margin-inline-start:.5rem}.v-banner-actions .v-btn{padding:0 8px}.v-pagination .v-btn{border-radius:4px}.v-btn__overlay{transition:none}.v-pagination__item--is-active .v-btn__overlay{opacity:var(--v-border-opacity)}.v-snackbar-actions .v-btn{padding:0 8px}.v-btn-toggle .v-btn.v-btn--selected:not(.v-btn--disabled) .v-btn__overlay{opacity:var(--v-activated-opacity)}.v-btn-group{display:inline-flex;flex-wrap:nowrap;max-width:100%;min-width:0;overflow:hidden;vertical-align:middle;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:4px;background:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn-group--border{border-width:thin;box-shadow:none}.v-btn-group--density-default.v-btn-group{height:48px}.v-btn-group--density-comfortable.v-btn-group{height:40px}.v-btn-group--density-compact.v-btn-group{height:36px}.v-btn-group .v-btn{border-radius:0;border-color:inherit}.v-btn-group .v-btn:not(:last-child){border-inline-end:none}.v-btn-group .v-btn:not(:first-child){border-inline-start:none}.v-btn-group .v-btn:first-child{border-start-start-radius:inherit;border-end-start-radius:inherit}.v-btn-group .v-btn:last-child{border-start-end-radius:inherit;border-end-end-radius:inherit}.v-btn-group--divided .v-btn:not(:last-child){border-inline-end-width:thin;border-inline-end-style:solid;border-inline-end-color:rgba(var(--v-border-color),var(--v-border-opacity))}.v-btn-group--tile{border-radius:0}.v-icon{--v-icon-size-multiplier: 1;align-items:center;display:inline-flex;font-feature-settings:"liga";height:1em;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;text-align:center;user-select:none;vertical-align:middle;width:1em}.v-icon--clickable{cursor:pointer}.v-icon--size-x-small{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-icon--size-small{font-size:calc(var(--v-icon-size-multiplier) * 1.25em)}.v-icon--size-default{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)}.v-icon--size-large{font-size:calc(var(--v-icon-size-multiplier) * 1.75em)}.v-icon--size-x-large{font-size:calc(var(--v-icon-size-multiplier) * 2em)}.v-icon__svg{fill:currentColor;width:100%;height:100%}.v-icon--start{margin-inline-end:8px}.v-icon--end{margin-inline-start:8px}.v-progress-circular{align-items:center;display:inline-flex;justify-content:center;position:relative;vertical-align:middle}.v-progress-circular>svg{width:100%;height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;z-index:0}.v-progress-circular__content{align-items:center;display:flex;justify-content:center}.v-progress-circular__underlay{color:rgba(var(--v-border-color),var(--v-border-opacity));stroke:currentColor;z-index:1}.v-progress-circular__overlay{stroke:currentColor;transition:all .2s ease-in-out,stroke-width 0s;z-index:2}.v-progress-circular--size-x-small{height:16px;width:16px}.v-progress-circular--size-small{height:24px;width:24px}.v-progress-circular--size-default{height:32px;width:32px}.v-progress-circular--size-large{height:48px;width:48px}.v-progress-circular--size-x-large{height:64px;width:64px}.v-progress-circular--indeterminate>svg{animation:progress-circular-rotate 1.4s linear infinite;transform-origin:center center;transition:all .2s ease-in-out}.v-progress-circular--indeterminate .v-progress-circular__overlay{animation:progress-circular-dash 1.4s ease-in-out infinite,progress-circular-rotate 1.4s linear infinite;stroke-dasharray:25,200;stroke-dashoffset:0;stroke-linecap:round;transform-origin:center center;transform:rotate(-90deg)}.v-progress-circular--disable-shrink>svg{animation-duration:.7s}.v-progress-circular--disable-shrink .v-progress-circular__overlay{animation:none}.v-progress-circular--indeterminate:not(.v-progress-circular--visible)>svg,.v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay{animation-play-state:paused!important}@keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@keyframes progress-circular-rotate{to{transform:rotate(270deg)}}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.2,1);width:100%}.v-progress-linear__background{background:currentColor;bottom:0;left:0;opacity:var(--v-border-opacity);position:absolute;top:0;transition-property:width,left,right;transition:inherit}.v-progress-linear__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-progress-linear__determinate,.v-progress-linear__indeterminate{background:currentColor}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear__indeterminate .long,.v-progress-linear__indeterminate .short{animation-play-state:paused;animation-duration:2.2s;animation-iteration-count:infinite;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear__indeterminate .long{animation-name:indeterminate-ltr}.v-progress-linear__indeterminate .short{animation-name:indeterminate-short-ltr}.v-progress-linear__stream{animation:stream .25s infinite linear;animation-play-state:paused;bottom:0;left:auto;opacity:.3;pointer-events:none;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear--reverse .v-progress-linear__background,.v-progress-linear--reverse .v-progress-linear__determinate,.v-progress-linear--reverse .v-progress-linear__content,.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate .long{animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate .short{animation-name:indeterminate-short-rtl}.v-progress-linear--reverse .v-progress-linear__stream{right:auto}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--rounded{border-radius:9999px}.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__indeterminate{border-radius:inherit}.v-progress-linear--striped .v-progress-linear__determinate{animation:progress-linear-stripes 1s infinite linear;background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-repeat:repeat;background-size:var(--v-progress-linear-height)}.v-progress-linear--active .v-progress-linear__indeterminate .long,.v-progress-linear--active .v-progress-linear__indeterminate .short,.v-progress-linear--active .v-progress-linear__stream{animation-play-state:running}.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded-bar .v-progress-linear__indeterminate,.v-progress-linear--rounded-bar .v-progress-linear__stream+.v-progress-linear__background{border-radius:9999px}.v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-ltr,.v-locale--is-ltr .v-progress-linear--rounded-bar .v-progress-linear__determinate{border-top-left-radius:0;border-bottom-left-radius:0}.v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-rtl,.v-locale--is-rtl .v-progress-linear--rounded-bar .v-progress-linear__determinate{border-top-right-radius:0;border-bottom-right-radius:0}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes stream{to{transform:translate(var(--v-progress-linear-stream-to))}}@keyframes progress-linear-stripes{0%{background-position-x:var(--v-progress-linear-height)}}.v-ripple__container{color:inherit;border-radius:inherit;position:absolute;width:100%;height:100%;left:0;top:0;overflow:hidden;z-index:0;pointer-events:none;contain:strict}.v-ripple__animation{color:inherit;position:absolute;top:0;left:0;border-radius:50%;background:currentColor;opacity:0;pointer-events:none;overflow:hidden;will-change:transform,opacity}.v-ripple__animation--enter{transition:none;opacity:0}.v-ripple__animation--in{transition:transform .25s cubic-bezier(0,0,.2,1),opacity .1s cubic-bezier(0,0,.2,1);opacity:calc(.25 * var(--v-theme-overlay-multiplier))}.v-ripple__animation--out{transition:opacity .3s cubic-bezier(0,0,.2,1);opacity:0}.v-checkbox .v-selection-control{min-height:var(--v-input-control-height)}.v-selection-control{align-items:center;contain:layout;display:flex;flex:1 0;grid-area:control;position:relative;user-select:none}.v-selection-control .v-label{white-space:normal;word-break:break-word;height:100%;width:100%}.v-selection-control--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-selection-control--error .v-label,.v-selection-control--disabled .v-label{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-label{color:rgb(var(--v-theme-error))}.v-selection-control--inline{display:inline-flex;flex:0 0 auto;min-width:0;max-width:100%}.v-selection-control--inline .v-label{width:auto}.v-selection-control--density-default{--v-selection-control-size: 40px}.v-selection-control--density-comfortable{--v-selection-control-size: 36px}.v-selection-control--density-compact{--v-selection-control-size: 28px}.v-selection-control__wrapper{width:var(--v-selection-control-size);height:var(--v-selection-control-size);display:inline-flex;align-items:center;position:relative;justify-content:center;flex:none}.v-selection-control__input{width:var(--v-selection-control-size);height:var(--v-selection-control-size);align-items:center;display:flex;flex:none;justify-content:center;position:relative;border-radius:50%}.v-selection-control__input input{cursor:pointer;position:absolute;left:0;top:0;width:100%;height:100%;opacity:0}.v-selection-control__input:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100%;background-color:currentColor;opacity:0;pointer-events:none}.v-selection-control__input:hover:before{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-selection-control__input>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-selection-control--disabled .v-selection-control__input>.v-icon,.v-selection-control--dirty .v-selection-control__input>.v-icon,.v-selection-control--error .v-selection-control__input>.v-icon{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-selection-control__input>.v-icon{color:rgb(var(--v-theme-error))}.v-selection-control--focus-visible .v-selection-control__input:before{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}.v-label{align-items:center;display:inline-flex;font-size:1rem;letter-spacing:.009375em;min-width:0;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-label--clickable{cursor:pointer}.v-selection-control-group{grid-area:control;display:flex;flex-direction:column}.v-selection-control-group--inline{flex-direction:row;flex-wrap:wrap}.v-input{display:grid;flex:1 1 auto;font-size:1rem;font-weight:400;line-height:1.5;--v-input-chips-margin-top: 2px}.v-input--disabled{pointer-events:none}.v-input--density-default{--v-input-control-height: 56px;--v-input-padding-top: 15px}.v-input--density-comfortable{--v-input-control-height: 48px;--v-input-padding-top: 11px}.v-input--density-compact{--v-input-control-height: 40px;--v-input-padding-top: 7px}.v-input--density-default{--v-input-chips-margin-bottom: 0px}.v-input--density-comfortable{--v-input-chips-margin-bottom: 2px}.v-input--density-compact{--v-input-chips-margin-bottom: 4px}.v-input--vertical{grid-template-areas:"append" "control" "prepend";grid-template-rows:max-content auto max-content;grid-template-columns:min-content}.v-input--vertical .v-input__prepend{margin-block-start:16px}.v-input--vertical .v-input__append{margin-block-end:16px}.v-input--horizontal{grid-template-areas:"prepend control append" "a messages b";grid-template-columns:max-content minmax(0,1fr) max-content;grid-template-rows:auto auto}.v-input--horizontal .v-input__prepend{margin-inline-end:16px}.v-input--horizontal .v-input__append{margin-inline-start:16px}.v-input__details{align-items:flex-end;display:flex;font-size:.75rem;font-weight:400;grid-area:messages;letter-spacing:.0333333333em;line-height:normal;min-height:22px;padding-top:6px;overflow:hidden;justify-content:space-between}.v-input__details>.v-icon,.v-input__prepend>.v-icon,.v-input__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-input--disabled .v-input__details>.v-icon,.v-input--disabled .v-input__details .v-messages,.v-input--error .v-input__details>.v-icon,.v-input--error .v-input__details .v-messages,.v-input--disabled .v-input__prepend>.v-icon,.v-input--disabled .v-input__prepend .v-messages,.v-input--error .v-input__prepend>.v-icon,.v-input--error .v-input__prepend .v-messages,.v-input--disabled .v-input__append>.v-icon,.v-input--disabled .v-input__append .v-messages,.v-input--error .v-input__append>.v-icon,.v-input--error .v-input__append .v-messages{opacity:1}.v-input--disabled .v-input__details,.v-input--disabled .v-input__prepend,.v-input--disabled .v-input__append{opacity:var(--v-disabled-opacity)}.v-input--error:not(.v-input--disabled) .v-input__details>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__details .v-messages,.v-input--error:not(.v-input--disabled) .v-input__prepend>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__prepend .v-messages,.v-input--error:not(.v-input--disabled) .v-input__append>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__append .v-messages{color:rgb(var(--v-theme-error))}.v-input__prepend,.v-input__append{display:flex;align-items:flex-start;padding-top:var(--v-input-padding-top)}.v-input--center-affix .v-input__prepend,.v-input--center-affix .v-input__append{align-items:center;padding-top:0}.v-input__prepend{grid-area:prepend}.v-input__append{grid-area:append}.v-input__control{display:flex;grid-area:control}.v-messages{flex:1 1 auto;font-size:12px;min-height:14px;min-width:1px;opacity:var(--v-medium-emphasis-opacity);position:relative}.v-messages__message{line-height:12px;word-break:break-word;overflow-wrap:break-word;word-wrap:break-word;hyphens:auto;transition-duration:.15s}.v-chip{align-items:center;cursor:default;display:inline-flex;font-weight:400;max-width:100%;min-width:0;overflow:hidden;position:relative;text-decoration:none;white-space:nowrap;vertical-align:middle;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:9999px}.v-chip.v-chip--size-x-small{--v-chip-size: .625rem;--v-chip-height: 18px;font-size:.625rem;padding:0 7px}.v-chip.v-chip--size-x-small .v-avatar{--v-avatar-height: 12px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar{--v-avatar-height: 18px}.v-chip.v-chip--size-x-small .v-avatar--start{margin-inline-start:-4.9px;margin-inline-end:3.5px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--start{margin-inline-start:-7px}.v-chip.v-chip--size-x-small .v-avatar--end{margin-inline-start:3.5px;margin-inline-end:-4.9px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--end{margin-inline-end:-7px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--end+.v-chip__close{margin-inline-start:10.5px}.v-chip.v-chip--size-x-small .v-icon--start,.v-chip.v-chip--size-x-small .v-chip__filter{margin-inline-start:-3.5px;margin-inline-end:3.5px}.v-chip.v-chip--size-x-small .v-icon--end,.v-chip.v-chip--size-x-small .v-chip__close{margin-inline-start:3.5px;margin-inline-end:-3.5px}.v-chip.v-chip--size-x-small .v-icon--end+.v-chip__close,.v-chip.v-chip--size-x-small .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-x-small .v-chip__append+.v-chip__close{margin-inline-start:7px}.v-chip.v-chip--size-small{--v-chip-size: .75rem;--v-chip-height: 24px;font-size:.75rem;padding:0 9px}.v-chip.v-chip--size-small .v-avatar{--v-avatar-height: 18px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar{--v-avatar-height: 24px}.v-chip.v-chip--size-small .v-avatar--start{margin-inline-start:-6.3px;margin-inline-end:4.5px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--start{margin-inline-start:-9px}.v-chip.v-chip--size-small .v-avatar--end{margin-inline-start:4.5px;margin-inline-end:-6.3px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--end{margin-inline-end:-9px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--end+.v-chip__close{margin-inline-start:13.5px}.v-chip.v-chip--size-small .v-icon--start,.v-chip.v-chip--size-small .v-chip__filter{margin-inline-start:-4.5px;margin-inline-end:4.5px}.v-chip.v-chip--size-small .v-icon--end,.v-chip.v-chip--size-small .v-chip__close{margin-inline-start:4.5px;margin-inline-end:-4.5px}.v-chip.v-chip--size-small .v-icon--end+.v-chip__close,.v-chip.v-chip--size-small .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-small .v-chip__append+.v-chip__close{margin-inline-start:9px}.v-chip.v-chip--size-default{--v-chip-size: .875rem;--v-chip-height: 30px;font-size:.875rem;padding:0 11px}.v-chip.v-chip--size-default .v-avatar{--v-avatar-height: 24px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar{--v-avatar-height: 30px}.v-chip.v-chip--size-default .v-avatar--start{margin-inline-start:-7.7px;margin-inline-end:5.5px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--start{margin-inline-start:-11px}.v-chip.v-chip--size-default .v-avatar--end{margin-inline-start:5.5px;margin-inline-end:-7.7px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--end{margin-inline-end:-11px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--end+.v-chip__close{margin-inline-start:16.5px}.v-chip.v-chip--size-default .v-icon--start,.v-chip.v-chip--size-default .v-chip__filter{margin-inline-start:-5.5px;margin-inline-end:5.5px}.v-chip.v-chip--size-default .v-icon--end,.v-chip.v-chip--size-default .v-chip__close{margin-inline-start:5.5px;margin-inline-end:-5.5px}.v-chip.v-chip--size-default .v-icon--end+.v-chip__close,.v-chip.v-chip--size-default .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-default .v-chip__append+.v-chip__close{margin-inline-start:11px}.v-chip.v-chip--size-large{--v-chip-size: 1rem;--v-chip-height: 36px;font-size:1rem;padding:0 14px}.v-chip.v-chip--size-large .v-avatar{--v-avatar-height: 30px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar{--v-avatar-height: 36px}.v-chip.v-chip--size-large .v-avatar--start{margin-inline-start:-9.8px;margin-inline-end:7px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--start{margin-inline-start:-14px}.v-chip.v-chip--size-large .v-avatar--end{margin-inline-start:7px;margin-inline-end:-9.8px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--end{margin-inline-end:-14px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--end+.v-chip__close{margin-inline-start:21px}.v-chip.v-chip--size-large .v-icon--start,.v-chip.v-chip--size-large .v-chip__filter{margin-inline-start:-7px;margin-inline-end:7px}.v-chip.v-chip--size-large .v-icon--end,.v-chip.v-chip--size-large .v-chip__close{margin-inline-start:7px;margin-inline-end:-7px}.v-chip.v-chip--size-large .v-icon--end+.v-chip__close,.v-chip.v-chip--size-large .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-large .v-chip__append+.v-chip__close{margin-inline-start:14px}.v-chip.v-chip--size-x-large{--v-chip-size: 1.125rem;--v-chip-height: 42px;font-size:1.125rem;padding:0 16px}.v-chip.v-chip--size-x-large .v-avatar{--v-avatar-height: 36px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar{--v-avatar-height: 42px}.v-chip.v-chip--size-x-large .v-avatar--start{margin-inline-start:-11.2px;margin-inline-end:8px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--start{margin-inline-start:-16px}.v-chip.v-chip--size-x-large .v-avatar--end{margin-inline-start:8px;margin-inline-end:-11.2px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--end{margin-inline-end:-16px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--end+.v-chip__close{margin-inline-start:24px}.v-chip.v-chip--size-x-large .v-icon--start,.v-chip.v-chip--size-x-large .v-chip__filter{margin-inline-start:-8px;margin-inline-end:8px}.v-chip.v-chip--size-x-large .v-icon--end,.v-chip.v-chip--size-x-large .v-chip__close{margin-inline-start:8px;margin-inline-end:-8px}.v-chip.v-chip--size-x-large .v-icon--end+.v-chip__close,.v-chip.v-chip--size-x-large .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-x-large .v-chip__append+.v-chip__close{margin-inline-start:16px}.v-chip.v-chip--density-default{height:calc(var(--v-chip-height) + 0px)}.v-chip.v-chip--density-comfortable{height:calc(var(--v-chip-height) + -8px)}.v-chip.v-chip--density-compact{height:calc(var(--v-chip-height) + -12px)}.v-chip:hover>.v-chip__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-chip:focus-visible>.v-chip__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-chip:focus>.v-chip__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-chip--active>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]>.v-chip__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-chip--active:hover>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:hover>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-chip--active:focus-visible>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-chip--active:focus>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:focus>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-chip--variant-plain,.v-chip--variant-outlined,.v-chip--variant-text,.v-chip--variant-tonal{background:transparent;color:inherit}.v-chip--variant-plain{opacity:.26}.v-chip--variant-plain:focus,.v-chip--variant-plain:hover{opacity:1}.v-chip--variant-plain .v-chip__overlay{display:none}.v-chip--variant-elevated,.v-chip--variant-flat{background:rgb(var(--v-theme-surface-variant));color:rgb(var(--v-theme-on-surface-variant))}.v-chip--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-chip--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-chip--variant-outlined{border:thin solid currentColor}.v-chip--variant-text .v-chip__overlay{background:currentColor}.v-chip--variant-tonal .v-chip__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.v-chip--border{border-width:thin}.v-chip--link{cursor:pointer}.v-chip--filter{user-select:none}.v-chip__content{align-items:center;display:inline-flex}.v-autocomplete__selection .v-chip__content,.v-combobox__selection .v-chip__content,.v-select__selection .v-chip__content{overflow:hidden}.v-chip__filter,.v-chip__prepend,.v-chip__append,.v-chip__close{align-items:center;display:inline-flex}.v-chip__close{cursor:pointer;flex:0 1 auto;font-size:18px;max-height:18px;max-width:18px;user-select:none}.v-chip__close .v-icon{font-size:inherit}.v-chip__filter{transition:.15s cubic-bezier(.4,0,.2,1)}.v-chip__overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:currentColor;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .2s ease-in-out}.v-chip--disabled{opacity:.3;pointer-events:none;user-select:none}.v-chip--label{border-radius:4px}.v-avatar{flex:none;align-items:center;display:inline-flex;justify-content:center;line-height:normal;overflow:hidden;position:relative;text-align:center;transition:.2s cubic-bezier(.4,0,.2,1);transition-property:width,height;vertical-align:middle;border-radius:50%}.v-avatar.v-avatar--size-x-small{--v-avatar-height: 24px}.v-avatar.v-avatar--size-small{--v-avatar-height: 32px}.v-avatar.v-avatar--size-default{--v-avatar-height: 40px}.v-avatar.v-avatar--size-large{--v-avatar-height: 48px}.v-avatar.v-avatar--size-x-large{--v-avatar-height: 56px}.v-avatar.v-avatar--density-default{height:calc(var(--v-avatar-height) + 0px);width:calc(var(--v-avatar-height) + 0px)}.v-avatar.v-avatar--density-comfortable{height:calc(var(--v-avatar-height) + -4px);width:calc(var(--v-avatar-height) + -4px)}.v-avatar.v-avatar--density-compact{height:calc(var(--v-avatar-height) + -8px);width:calc(var(--v-avatar-height) + -8px)}.v-avatar--variant-plain,.v-avatar--variant-outlined,.v-avatar--variant-text,.v-avatar--variant-tonal{background:transparent;color:inherit}.v-avatar--variant-plain{opacity:.62}.v-avatar--variant-plain:focus,.v-avatar--variant-plain:hover{opacity:1}.v-avatar--variant-plain .v-avatar__overlay{display:none}.v-avatar--variant-elevated,.v-avatar--variant-flat{background:var(--v-theme-surface);color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}.v-avatar--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-avatar--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-avatar--variant-outlined{border:thin solid currentColor}.v-avatar--variant-text .v-avatar__overlay{background:currentColor}.v-avatar--variant-tonal .v-avatar__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.v-avatar--rounded{border-radius:4px}.v-avatar .v-img{height:100%;width:100%}.v-chip-group{display:flex;max-width:100%;min-width:0;overflow-x:auto;padding:4px 0;flex-wrap:wrap}.v-chip-group .v-chip{margin:4px 8px 4px 0}.v-chip-group .v-chip.v-chip--selected:not(.v-chip--disabled) .v-chip__overlay{opacity:var(--v-activated-opacity)}.v-chip-group--column{flex-wrap:wrap;white-space:normal}.v-list{overflow:auto;padding:8px 0;position:relative;outline:none;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:0;background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list--border{border-width:thin;box-shadow:none}.v-list--disabled{pointer-events:none;user-select:none}.v-list--nav{padding-inline-start:8px;padding-inline-end:8px}.v-navigation-drawer--rail:not(.v-navigation-drawer--is-hovering) .v-list .v-avatar{--v-avatar-height: 24px}.v-list--rounded{border-radius:4px}.v-list--subheader{padding-top:0}.v-list-img{border-radius:inherit;display:flex;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%;z-index:-1}.v-list-subheader{align-items:center;background:inherit;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));display:flex;font-size:.875rem;font-weight:400;line-height:1.375rem;padding-inline-end:16px;min-height:40px;transition:.2s min-height cubic-bezier(.4,0,.2,1)}.v-list-subheader__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-list--density-default .v-list-subheader{min-height:40px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list--density-comfortable .v-list-subheader{min-height:36px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list--density-compact .v-list-subheader{min-height:32px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-subheader--inset{--indent-padding: 56px}.v-list--nav .v-list-subheader{font-size:.75rem}.v-list-subheader--sticky{background:inherit;left:0;position:sticky;top:0;z-index:1}.v-list__overlay{background-color:currentColor;border-radius:inherit;bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s ease-in-out}.v-list-item{align-items:center;display:grid;flex:none;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;outline:none;max-width:100%;padding:4px 16px;position:relative;text-decoration:none;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:0}.v-list-item--border{border-width:thin;box-shadow:none}.v-list-item:hover>.v-list-item__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item:focus-visible>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item:focus>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-list-item--active>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]>.v-list-item__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item--active:hover>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:hover>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-list-item--active:focus-visible>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item--active:focus>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-list-item--variant-plain,.v-list-item--variant-outlined,.v-list-item--variant-text,.v-list-item--variant-tonal{background:transparent;color:inherit}.v-list-item--variant-plain{opacity:.62}.v-list-item--variant-plain:focus,.v-list-item--variant-plain:hover{opacity:1}.v-list-item--variant-plain .v-list-item__overlay{display:none}.v-list-item--variant-elevated,.v-list-item--variant-flat{background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list-item--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-list-item--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-list-item--variant-outlined{border:thin solid currentColor}.v-list-item--variant-text .v-list-item__overlay{background:currentColor}.v-list-item--variant-tonal .v-list-item__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}@supports selector(:focus-visible){.v-list-item:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border:2px solid currentColor;border-radius:4px;opacity:0;transition:opacity .2s ease-in-out}.v-list-item:focus-visible:after{opacity:calc(.15 * var(--v-theme-overlay-multiplier))}}.v-list-item__prepend>.v-icon,.v-list-item__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-list-item--active .v-list-item__prepend>.v-icon,.v-list-item--active .v-list-item__append>.v-icon{opacity:1}.v-list-item--rounded{border-radius:4px}.v-list-item--disabled{pointer-events:none;user-select:none;opacity:.6}.v-list-item--link{cursor:pointer}.v-list-item__prepend{align-items:center;align-self:center;display:flex;grid-area:prepend}.v-list-item__prepend>.v-avatar{margin-inline-end:16px}.v-list-item__prepend>.v-icon{margin-inline-end:32px}.v-list-item--three-line .v-list-item__prepend{align-self:start}.v-list-item__append{align-self:center;display:flex;align-items:center;grid-area:append}.v-list-item__append>.v-avatar{margin-inline-start:16px}.v-list-item__append>.v-icon{margin-inline-start:32px}.v-list-item--three-line .v-list-item__append{align-self:start}.v-list-item__content{align-self:center;grid-area:content;overflow:hidden}.v-list-item-action{align-self:center;display:flex;align-items:center;grid-area:prepend;flex:none;transition:inherit;transition-property:height,width}.v-list-item-action--start{margin-inline-end:12px}.v-list-item-action--end{margin-inline-start:12px}.v-list-item-media{margin-top:0;margin-bottom:0}.v-list-item-media--start{margin-inline-end:16px}.v-list-item-media--end{margin-inline-start:16px}.v-list-item--two-line .v-list-item-media{margin-top:-4px;margin-bottom:-4px}.v-list-item--three-line .v-list-item-media{margin-top:0;margin-bottom:0}.v-list-item-subtitle{-webkit-box-orient:vertical;display:-webkit-box;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;padding:0;text-overflow:ellipsis;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem;text-transform:none}.v-list-item--one-line .v-list-item-subtitle{-webkit-line-clamp:1}.v-list-item--two-line .v-list-item-subtitle{-webkit-line-clamp:2}.v-list-item--three-line .v-list-item-subtitle{-webkit-line-clamp:3}.v-list-item--nav .v-list-item-subtitle{font-size:.75rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem}.v-list-item-title{hyphens:auto;overflow-wrap:normal;overflow:hidden;padding:0;white-space:nowrap;text-overflow:ellipsis;word-break:normal;word-wrap:break-word;font-size:1rem;font-weight:400;letter-spacing:.009375em;line-height:1.5rem;text-transform:none}.v-list-item--nav .v-list-item-title{font-size:.8125rem;font-weight:500;letter-spacing:normal;line-height:1rem}.v-list-item--density-default{min-height:40px}.v-list-item--density-default.v-list-item--one-line{min-height:48px;padding-top:4px;padding-bottom:4px}.v-list-item--density-default.v-list-item--two-line{min-height:64px;padding-top:12px;padding-bottom:12px}.v-list-item--density-default.v-list-item--three-line{min-height:88px;padding-top:16px;padding-bottom:16px}.v-list-item--density-default.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-default.v-list-item--three-line .v-list-item__append{padding-top:8px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable{min-height:36px}.v-list-item--density-comfortable.v-list-item--one-line{min-height:44px}.v-list-item--density-comfortable.v-list-item--two-line{min-height:60px;padding-top:8px;padding-bottom:8px}.v-list-item--density-comfortable.v-list-item--three-line{min-height:84px;padding-top:12px;padding-bottom:12px}.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__append{padding-top:6px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact{min-height:32px}.v-list-item--density-compact.v-list-item--one-line{min-height:40px}.v-list-item--density-compact.v-list-item--two-line{min-height:56px;padding-top:4px;padding-bottom:4px}.v-list-item--density-compact.v-list-item--three-line{min-height:80px;padding-top:8px;padding-bottom:8px}.v-list-item--density-compact.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-compact.v-list-item--three-line .v-list-item__append{padding-top:4px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--nav{padding-inline-start:8px;padding-inline-end:8px}.v-list .v-list-item--nav:not(:only-child){margin-bottom:4px}.v-list-item__underlay{position:absolute}.v-list-item__overlay{background-color:currentColor;border-radius:inherit;bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s ease-in-out}.v-list-item--active.v-list-item--variant-elevated .v-list-item__overlay{--v-theme-overlay-multiplier: 0}.v-list{--indent-padding: 0px}.v-list--nav{--indent-padding: -8px}.v-list-group{--list-indent-size: 16px;--parent-padding: var(--indent-padding);--prepend-width: 40px}.v-list-group--fluid{--list-indent-size: 0px}.v-list-group--prepend{--parent-padding: calc(var(--indent-padding) + var(--prepend-width))}.v-list-group--fluid.v-list-group--prepend{--parent-padding: var(--indent-padding)}.v-list-group__items{--indent-padding: calc(var(--parent-padding) + var(--list-indent-size))}.v-list-group__items .v-list-item{padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-group__header.v-list-item--active:not(:focus-visible) .v-list-item__overlay{opacity:0}.v-divider{display:block;flex:1 1 100%;height:0px;max-height:0px;opacity:var(--v-border-opacity);transition:inherit;border-style:solid;border-width:thin 0 0 0}.v-divider--vertical{align-self:stretch;border-width:0 thin 0 0;display:inline-flex;height:inherit;margin-left:-1px;max-height:100%;max-width:0px;vertical-align:text-bottom;width:0px}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px);margin-inline-start:72px}.v-divider--inset.v-divider--vertical{margin-bottom:8px;margin-top:8px;max-height:calc(100% - 16px)}.v-menu>.v-overlay__content{display:flex;flex-direction:column;border-radius:4px}.v-menu>.v-overlay__content>.v-card,.v-menu>.v-overlay__content>.v-sheet,.v-menu>.v-overlay__content>.v-list{background:rgb(var(--v-theme-surface));border-radius:inherit;overflow:auto;height:100%;box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-overlay-container{contain:layout;left:0;pointer-events:none;position:absolute;top:0;display:contents}.v-overlay-scroll-blocked{padding-inline-end:var(--v-scrollbar-offset)}.v-overlay-scroll-blocked:not(html){overflow-y:hidden!important}html.v-overlay-scroll-blocked{position:fixed;top:var(--v-body-scroll-y);left:var(--v-body-scroll-x);width:100%;height:100%}.v-overlay{border-radius:inherit;display:flex;left:0;pointer-events:none;position:fixed;top:0;bottom:0;right:0}.v-overlay__content{outline:none;position:absolute;pointer-events:auto;contain:layout}.v-overlay__scrim{pointer-events:auto;background:rgb(var(--v-theme-on-surface));border-radius:inherit;bottom:0;left:0;opacity:.32;position:fixed;right:0;top:0}.v-overlay--absolute,.v-overlay--contained .v-overlay__scrim{position:absolute}.v-overlay--scroll-blocked{padding-inline-end:var(--v-scrollbar-offset)}.v-select .v-field .v-text-field__prefix,.v-select .v-field .v-text-field__suffix,.v-select .v-field .v-field__input,.v-select .v-field.v-field{cursor:pointer}.v-select .v-field .v-field__input>input{align-self:flex-start;opacity:1;flex:0 0;position:absolute;width:100%;transition:none;pointer-events:none}.v-select .v-field--dirty .v-select__selection{margin-inline-end:2px}.v-select .v-select__selection-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-select__content{overflow:hidden;box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:4px}.v-select__selection{display:inline-flex;align-items:center;letter-spacing:inherit;line-height:inherit;max-width:100%}.v-select .v-select__selection{margin-top:var(--v-input-chips-margin-top);margin-bottom:var(--v-input-chips-margin-bottom)}.v-select .v-select__selection:first-child{margin-inline-start:0}.v-select--selected .v-field .v-field__input>input{opacity:0}.v-select__menu-icon{margin-inline-start:4px;transition:.2s cubic-bezier(.4,0,.2,1)}.v-select--active-menu .v-select__menu-icon{opacity:var(--v-high-emphasis-opacity);transform:rotate(180deg)}.v-text-field input{color:inherit;opacity:0;flex:1;transition:.15s opacity cubic-bezier(.4,0,.2,1);min-width:0;margin-top:var(--v-input-chips-margin-top);margin-bottom:var(--v-input-chips-margin-bottom)}.v-text-field input:focus,.v-text-field input:active{outline:none}.v-text-field input:invalid{box-shadow:none}.v-text-field .v-field{cursor:text}.v-text-field--prefixed.v-text-field .v-field__input{--v-field-padding-start: 6px}.v-text-field--suffixed.v-text-field .v-field__input{--v-field-padding-end: 0}.v-text-field .v-input__details{padding-inline-start:16px;padding-inline-end:16px}.v-text-field .v-field--no-label input,.v-text-field .v-field--active input{opacity:1}.v-text-field .v-field--single-line input{transition:none}.v-text-field__prefix,.v-text-field__suffix{align-items:center;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));cursor:default;display:flex;opacity:0;transition:inherit;white-space:nowrap;min-height:calc(max(var(--v-input-control-height, 56px),1.5rem + var(--v-field-input-padding-top) + var(--v-field-input-padding-bottom)) + var(--v-input-chips-margin-bottom) + 2px);padding-top:calc(var(--v-field-padding-top, 4px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 6px)}.v-text-field__prefix__text,.v-text-field__suffix__text{margin-top:var(--v-input-chips-margin-top);margin-bottom:var(--v-input-chips-margin-bottom)}.v-field--active .v-text-field__prefix,.v-field--active .v-text-field__suffix{opacity:1}.v-field--disabled .v-text-field__prefix,.v-field--disabled .v-text-field__suffix{color:rgba(var(--v-theme-on-surface),var(--v-disabled-opacity))}.v-text-field__prefix{padding-inline-start:var(--v-field-padding-start)}.v-text-field__suffix{padding-inline-end:var(--v-field-padding-end)}.v-text-field--plain-underlined{--v-field-padding-top--plain-underlined: 6px}.v-text-field--plain-underlined .v-input__details{padding:0}.v-text-field--plain-underlined .v-input__prepend,.v-text-field--plain-underlined .v-input__append{align-items:flex-start;padding-top:calc(var(--v-field-padding-top--plain-underlined) + var(--v-input-padding-top))}.v-counter{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));flex:0 1 auto;font-size:12px;transition-duration:.15s}.v-field{display:grid;grid-template-areas:"prepend-inner field clear append-inner";grid-template-columns:min-content minmax(0,1fr) min-content min-content;font-size:16px;letter-spacing:.009375em;max-width:100%;border-radius:4px;contain:layout;flex:1 0;grid-area:control;position:relative;--v-field-padding-start: 16px;--v-field-padding-end: 16px;--v-field-padding-top: 10px;--v-field-padding-bottom: 5px;--v-field-input-padding-top: calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0));--v-field-input-padding-bottom: var(--v-field-padding-bottom, 5px)}.v-field--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-field--prepended{padding-inline-start:12px}.v-field--appended{padding-inline-end:12px}.v-field--variant-solo,.v-field--variant-solo-filled,.v-field--variant-solo-inverted{background:rgb(var(--v-theme-surface));border-color:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-field--variant-solo-inverted.v-field--focused{color:rgb(var(--v-theme-on-surface-variant))}.v-field--variant-filled{border-bottom-left-radius:0;border-bottom-right-radius:0}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 54px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 52px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 50px;--v-field-padding-bottom: 5px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 46px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 44px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 42px;--v-field-padding-bottom: 1px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 38px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 36px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 34px;--v-field-padding-bottom: 0px}.v-field--variant-outlined,.v-field--single-line,.v-field--no-label{--v-field-padding-top: 0px}.v-input--density-default .v-field--variant-outlined,.v-input--density-default .v-field--single-line,.v-input--density-default .v-field--no-label{--v-field-padding-bottom: 15px}.v-input--density-comfortable .v-field--variant-outlined,.v-input--density-comfortable .v-field--single-line,.v-input--density-comfortable .v-field--no-label{--v-field-padding-bottom: 11px}.v-input--density-compact .v-field--variant-outlined,.v-input--density-compact .v-field--single-line,.v-input--density-compact .v-field--no-label{--v-field-padding-bottom: 7px}.v-field--variant-plain,.v-field--variant-underlined{border-radius:0;padding:0}.v-field--variant-plain.v-field,.v-field--variant-underlined.v-field{--v-field-padding-start: 0px;--v-field-padding-end: 0px;--v-field-padding-top: var(--v-field-padding-top--plain-underlined, 6px)}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 46px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 44px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 42px;--v-field-padding-bottom: 5px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 38px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 36px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 34px;--v-field-padding-bottom: 1px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 30px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 28px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 26px;--v-field-padding-bottom: 0px}.v-field--variant-outlined{--v-input-chips-margin-bottom: 2px}.v-field--flat{box-shadow:none}.v-field--rounded{border-radius:9999px}.v-field.v-field--prepended{--v-field-padding-start: 6px}.v-field.v-field--appended{--v-field-padding-end: 6px}.v-field__input{color:inherit;display:flex;flex-wrap:wrap;letter-spacing:.009375em;opacity:var(--v-high-emphasis-opacity);min-height:calc(max(var(--v-input-control-height, 56px),1.5rem + var(--v-field-input-padding-top) + var(--v-field-input-padding-bottom)) + var(--v-input-chips-margin-bottom) + 2px);padding-inline-start:var(--v-field-padding-start);padding-inline-end:var(--v-field-padding-end);padding-top:var(--v-field-input-padding-top);padding-bottom:var(--v-field-input-padding-bottom);position:relative;width:100%}.v-field__input input{letter-spacing:inherit}.v-field__input input::placeholder,input.v-field__input::placeholder,textarea.v-field__input::placeholder{color:currentColor;opacity:var(--v-disabled-opacity)}.v-field__input:focus,.v-field__input:active{outline:none}.v-field__input:invalid{box-shadow:none}.v-field__field{flex:1 0;grid-area:field;position:relative;align-items:flex-start;display:flex}.v-field__prepend-inner{grid-area:prepend-inner;padding-inline-end:var(--v-field-padding-after)}.v-field__clearable{grid-area:clear}.v-field__append-inner{grid-area:append-inner;padding-inline-start:var(--v-field-padding-after)}.v-field__append-inner,.v-field__clearable,.v-field__prepend-inner{display:flex;align-items:flex-start;padding-top:var(--v-input-padding-top, 10px)}.v-field--center-affix .v-field__append-inner,.v-field--center-affix .v-field__clearable,.v-field--center-affix .v-field__prepend-inner{align-items:center;padding-top:0}.v-field.v-field--variant-underlined .v-field__append-inner,.v-field.v-field--variant-underlined .v-field__clearable,.v-field.v-field--variant-underlined .v-field__prepend-inner,.v-field.v-field--variant-plain .v-field__append-inner,.v-field.v-field--variant-plain .v-field__clearable,.v-field.v-field--variant-plain .v-field__prepend-inner{align-items:flex-start;padding-top:calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 5px)}.v-field--focused .v-field__prepend-inner,.v-field--focused .v-field__append-inner{opacity:1}.v-field__prepend-inner>.v-icon,.v-field__append-inner>.v-icon,.v-field__clearable>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-field--disabled .v-field__prepend-inner>.v-icon,.v-field--error .v-field__prepend-inner>.v-icon,.v-field--disabled .v-field__append-inner>.v-icon,.v-field--error .v-field__append-inner>.v-icon,.v-field--disabled .v-field__clearable>.v-icon,.v-field--error .v-field__clearable>.v-icon{opacity:1}.v-field--error:not(.v-field--disabled) .v-field__prepend-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__append-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__clearable>.v-icon{color:rgb(var(--v-theme-error))}.v-field__clearable{cursor:pointer;opacity:0;margin-inline-start:4px;margin-inline-end:4px;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform,width}.v-field--focused .v-field__clearable,.v-field--persistent-clear .v-field__clearable{opacity:1}@media (hover: hover){.v-field:hover .v-field__clearable{opacity:1}}.v-label.v-field-label{contain:layout paint;margin-inline-start:var(--v-field-padding-start);margin-inline-end:var(--v-field-padding-end);max-width:calc(100% - var(--v-field-padding-start) - var(--v-field-padding-end));pointer-events:none;position:absolute;top:var(--v-input-padding-top);transform-origin:left center;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform}.v-field--variant-underlined .v-label.v-field-label,.v-field--variant-plain .v-label.v-field-label{top:calc(var(--v-input-padding-top) + var(--v-field-padding-top))}.v-field--center-affix .v-label.v-field-label{top:50%;transform:translateY(-50%)}.v-field--active .v-label.v-field-label{visibility:hidden}.v-field--focused .v-label.v-field-label,.v-field--error .v-label.v-field-label{opacity:1}.v-field--error:not(.v-field--disabled) .v-label.v-field-label{color:rgb(var(--v-theme-error))}.v-label.v-field-label--floating{--v-field-label-scale: .75em;font-size:var(--v-field-label-scale);visibility:hidden;max-width:100%}.v-field--center-affix .v-label.v-field-label--floating{transform:none}.v-field.v-field--active .v-label.v-field-label--floating{visibility:visible}.v-input--density-default .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-filled .v-label.v-field-label--floating{top:7px}.v-input--density-comfortable .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-filled .v-label.v-field-label--floating{top:5px}.v-input--density-compact .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-filled .v-label.v-field-label--floating{top:3px}.v-field--variant-plain .v-label.v-field-label--floating,.v-field--variant-underlined .v-label.v-field-label--floating{transform:translateY(-16px);margin:0;top:var(--v-input-padding-top)}.v-field--variant-outlined .v-label.v-field-label--floating{transform:translateY(-50%);transform-origin:center;position:static;margin:0 4px}.v-field__outline{--v-field-border-width: 1px;--v-field-border-opacity: .38;align-items:stretch;contain:layout;display:flex;height:100%;left:0;pointer-events:none;position:absolute;right:0;width:100%}@media (hover: hover){.v-field:hover .v-field__outline{--v-field-border-opacity: var(--v-high-emphasis-opacity)}}.v-field--error:not(.v-field--disabled) .v-field__outline{color:rgb(var(--v-theme-error))}.v-field.v-field--focused .v-field__outline,.v-input.v-input--error .v-field__outline{--v-field-border-opacity: 1}.v-field--variant-outlined.v-field--focused .v-field__outline{--v-field-border-width: 2px}.v-field--variant-filled .v-field__outline:before,.v-field--variant-underlined .v-field__outline:before{border-style:solid;border-width:0 0 var(--v-field-border-width);opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__outline:after,.v-field--variant-underlined .v-field__outline:after{border-color:currentColor;border-style:solid;border-width:0 0 2px;transform:scaleX(0);transition:transform .15s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--focused.v-field--variant-filled .v-field__outline:after,.v-field--focused.v-field--variant-underlined .v-field__outline:after{transform:scaleX(1)}.v-field--variant-outlined .v-field__outline{border-radius:inherit}.v-field--variant-outlined .v-field__outline__start,.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after,.v-field--variant-outlined .v-field__outline__end{border:0 solid currentColor;opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-outlined .v-field__outline__start{flex:0 0 12px;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-start-width:var(--v-field-border-width)}.v-field--variant-outlined .v-field__outline__start.v-locale--is-ltr,.v-locale--is-ltr .v-field--variant-outlined .v-field__outline__start{border-top-left-radius:inherit;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:inherit}.v-field--variant-outlined .v-field__outline__start.v-locale--is-rtl,.v-locale--is-rtl .v-field--variant-outlined .v-field__outline__start{border-top-left-radius:0;border-top-right-radius:inherit;border-bottom-right-radius:inherit;border-bottom-left-radius:0}.v-field--variant-outlined .v-field__outline__notch{flex:none;position:relative}.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after{opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-outlined .v-field__outline__notch:before{border-width:var(--v-field-border-width) 0 0}.v-field--variant-outlined .v-field__outline__notch:after{bottom:0;border-width:0 0 var(--v-field-border-width)}.v-field--active.v-field--variant-outlined .v-field__outline__notch:before{opacity:0}.v-field--variant-outlined .v-field__outline__end{flex:1;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-end-width:var(--v-field-border-width)}.v-field--variant-outlined .v-field__outline__end.v-locale--is-ltr,.v-locale--is-ltr .v-field--variant-outlined .v-field__outline__end{border-top-left-radius:0;border-top-right-radius:inherit;border-bottom-right-radius:inherit;border-bottom-left-radius:0}.v-field--variant-outlined .v-field__outline__end.v-locale--is-rtl,.v-locale--is-rtl .v-field--variant-outlined .v-field__outline__end{border-top-left-radius:inherit;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:inherit}.v-field__loader{bottom:0;left:0;position:absolute;right:0;width:100%}.v-field__overlay{border-radius:inherit;pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-filled.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}@media (hover: hover){.v-field--variant-solo-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-inverted .v-field__overlay{transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-solo-inverted.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-solo-inverted:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-inverted.v-field--focused .v-field__overlay{background-color:rgb(var(--v-theme-surface-variant));opacity:1}.v-field--reverse .v-field__input.v-locale--is-ltr,.v-locale--is-ltr .v-field--reverse .v-field__input{text-align:right}.v-field--reverse .v-field__input.v-locale--is-rtl,.v-locale--is-rtl .v-field--reverse .v-field__input{text-align:left}.v-input--disabled .v-field--variant-filled .v-field__outline:before,.v-input--disabled .v-field--variant-underlined .v-field__outline:before{border-image:repeating-linear-gradient(to right,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 0px,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 2px,transparent 2px,transparent 4px) 1 repeat}.v-field--loading .v-field__outline:after,.v-field--loading .v-field__outline:before{opacity:0}.v-virtual-scroll{display:block;flex:1 1 auto;max-width:100%;overflow:auto;position:relative}.v-virtual-scroll__container{display:block}.v-switch .v-label{padding-inline-start:10px}.v-switch__loader{display:flex}.v-switch__track,.v-switch__thumb{background-color:currentColor;transition:none}.v-selection-control--error:not(.v-selection-control--disabled) .v-switch__track,.v-selection-control--error:not(.v-selection-control--disabled) .v-switch__thumb{background-color:rgb(var(--v-theme-error))}.v-selection-control--dirty .v-switch__thumb{color:currentColor}.v-switch__track{border-radius:8px;height:14px;opacity:.6;width:36px;cursor:pointer}.v-switch--inset .v-switch__track{border-radius:14px;height:28px;width:48px}.v-switch__thumb{align-items:center;border-radius:50%;color:rgb(var(--v-theme-surface));display:flex;height:20px;justify-content:center;width:20px;pointer-events:none;transition:.15s transform cubic-bezier(.4,0,.2,1);box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-switch--inset .v-switch__thumb{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-switch:not(.v-switch--loading) .v-icon~.v-switch__thumb{display:none}.v-switch--loading .v-selection-control__input>.v-icon{display:none}.v-switch .v-selection-control{min-height:var(--v-input-control-height)}.v-switch .v-selection-control__input{border-radius:50%;transition:.15s transform cubic-bezier(.4,0,.2,1);transform:translate(-10px);position:absolute}.v-switch .v-selection-control--dirty .v-selection-control__input{transform:translate(10px)}.v-switch.v-switch--indeterminate .v-selection-control__input{transform:scale(.8)}.v-switch.v-switch--indeterminate .v-switch__thumb{transform:scale(.75);box-shadow:none}.v-switch.v-switch--inset .v-selection-control__wrapper{width:auto}.v-textarea .v-field{--v-textarea-control-height: var(--v-input-control-height)}.v-textarea .v-field__field{--v-input-control-height: var(--v-textarea-control-height)}.v-textarea .v-field__input{flex:1 1 auto;outline:none;-webkit-mask-image:linear-gradient(to bottom,transparent,transparent calc(var(--v-field-padding-top, 0) + var(--v-input-padding-top, 0) - 6px),black calc(var(--v-field-padding-top, 0) + var(--v-input-padding-top, 0) + 4px));mask-image:linear-gradient(to bottom,transparent,transparent calc(var(--v-field-padding-top, 0) + var(--v-input-padding-top, 0) - 6px),black calc(var(--v-field-padding-top, 0) + var(--v-input-padding-top, 0) + 4px))}.v-textarea .v-field__input.v-textarea__sizer{visibility:hidden;position:absolute;top:0;left:0;height:0!important;min-height:0!important;pointer-events:none}.v-textarea--auto-grow .v-field__input{overflow:hidden}.v-textarea--no-resize .v-field__input{resize:none}.v-textarea .v-field--no-label textarea,.v-textarea .v-field--active textarea{opacity:1}.v-textarea textarea{opacity:0;flex:1;min-width:0;transition:.15s opacity cubic-bezier(.4,0,.2,1)}.v-textarea textarea:focus,.v-textarea textarea:active{outline:none}.v-textarea textarea:invalid{box-shadow:none}[data-v-fe47a020] .v-field__field{align-items:flex-end!important}:root{--v-inline-fields-top-padding-compact: 13px;--v-inline-fields-top-padding-comfortable: 17px;--v-inline-fields-top-padding-default: 21px;--v-inline-fields-input-height: 24px;--v-inline-fields-density-compact-height: 32px;--v-inline-fields-density-comfortable-height: 40px}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append{padding-top:0!important}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append .v-icon{font-size:1rem!important}.v-inline-fields--display-container *{align-items:center;display:flex}.v-inline-fields--display-value{cursor:pointer;letter-spacing:.009375em!important}.v-inline-fields--display-value-empty{color:#909090;font-style:italic}.v-inline-fields--display-value-checkbox,.v-inline-fields--display-value-switch{padding-bottom:2px;padding-top:6px}.v-inline-fields--display-append-icon,.v-inline-fields--display-prepend-icon,.v-inline-fields--display-append-inner-icon,.v-inline-fields--display-prepend-inner-icon{align-items:flex-end;display:inline-flex}.v-inline-fields--container-disabled .v-inline-fields--display-value{cursor:default!important;opacity:var(--v-disabled-opacity)}.v-inline-fields--container-loading .v-inline-fields--display-value{cursor:wait!important}.v-inline-fields--container-icon-set-fa .v-field__clearable{font-size:.8rem}.v-inline-fields--container-icon-set-fa .v-field__append-inner{align-items:flex-end}.v-inline-fields--container-v-select-compact-plain .v-input,.v-inline-fields--container-v-select-compact-underlined .v-input,.v-inline-fields--container-v-text-field-compact-plain .v-input,.v-inline-fields--container-v-text-field-compact-underlined .v-input{height:var(--v-inline-fields-density-compact-height);max-height:var(--v-inline-fields-density-compact-height)}.v-inline-fields--container-v-select-compact-plain .v-input__control,.v-inline-fields--container-v-select-compact-underlined .v-input__control,.v-inline-fields--container-v-text-field-compact-plain .v-input__control,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control{padding-bottom:4px}.v-inline-fields--container-v-select-compact-plain .v-input>div,.v-inline-fields--container-v-select-compact-underlined .v-input>div,.v-inline-fields--container-v-text-field-compact-plain .v-input>div,.v-inline-fields--container-v-text-field-compact-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input input{padding-bottom:10px}.v-inline-fields--container-v-select-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-compact-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-select__selection{align-items:center;padding-bottom:10px}.v-inline-fields--container-v-select-comfortable-plain .v-input,.v-inline-fields--container-v-select-comfortable-underlined .v-input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input{height:var(--v-inline-fields-density-comfortable-height);max-height:var(--v-inline-fields-density-comfortable-height)}.v-inline-fields--container-v-select-comfortable-plain .v-input__control,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control{padding-bottom:8px}.v-inline-fields--container-v-select-comfortable-plain .v-input>div,.v-inline-fields--container-v-select-comfortable-underlined .v-input>div,.v-inline-fields--container-v-text-field-comfortable-plain .v-input>div,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input input{padding-bottom:6px}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-select__selection{align-items:center;padding-bottom:6px}.v-inline-fields--container-v-select-compact-plain .v-field__append-inner,.v-inline-fields--container-v-select-compact-underlined .v-field__append-inner{padding-top:4px!important}.v-inline-fields--container-v-select-comfortable-plain .v-field__append-inner,.v-inline-fields--container-v-select-comfortable-underlined .v-field__append-inner{padding-top:8px!important}.v-inline-fields--container-v-textarea .v-inline-fields--save-fields-container{align-items:flex-end}.v-inline-fields--container-v-select,.v-inline-fields--container-v-textarea,.v-inline-fields--container-v-text-field{width:100%}.v-inline-fields--container-v-checkbox .v-input,.v-inline-fields--container-v-switch .v-input{align-items:center;display:flex;padding-bottom:0}.v-inline-fields--container-v-checkbox .v-input__append,.v-inline-fields--container-v-switch .v-input__append{margin-left:0;padding-bottom:0!important}.v-inline-fields--container-v-checkbox .v-selection-control,.v-inline-fields--container-v-switch .v-selection-control{min-height:unset}.v-inline-fields--container-v-checkbox .v-inline-fields--save-fields-container,.v-inline-fields--container-v-switch .v-inline-fields--save-fields-container{align-items:center!important}.v-inline-fields--container .v-input__append,.v-inline-fields--container .v-input__prepend,.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-top:0!important}.v-inline-fields--container .v-input__append .v-icon,.v-inline-fields--container .v-input__prepend .v-icon,.v-inline-fields--container .v-field__append-inner .v-icon,.v-inline-fields--container .v-field__prepend-inner .v-icon{font-size:1rem!important}.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-compact .v-input__append,.v-inline-fields--container-compact .v-input__prepend,.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-comfortable .v-input__append,.v-inline-fields--container-comfortable .v-input__prepend,.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{padding-bottom:6px!important}.v-inline-fields--container-default .v-input__append,.v-inline-fields--container-default .v-input__prepend,.v-inline-fields--container-default .v-field__append-inner,.v-inline-fields--container-default .v-field__prepend-inner{align-items:flex-end!important;padding-bottom:6px!important}.v-inline-fields--container-default .v-input__append .v-icon,.v-inline-fields--container-default .v-input__prepend .v-icon,.v-inline-fields--container-default .v-field__append-inner .v-icon,.v-inline-fields--container-default .v-field__prepend-inner .v-icon{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)!important}.v-inline-fields--container-default .v-inline-fields--save-fields-container{align-items:flex-end!important}.v-inline-fields--save-fields-container{align-items:center;display:flex;height:100%;margin-left:.1rem}.v-inline-fields--boolean-icons{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-inline-fields .truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:250px}.v-inline-fields .v-input__append{padding-top:0}')),document.head.appendChild(i)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
