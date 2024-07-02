const __vite__fileDeps=["assets/index-BYzeJpFW.js","assets/index-C15nOd12.js","assets/index-BzQn5emL.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as Ee,m as Y,u as we,a as De,b as Le,i as G,c as je,r as Me,w as Re,t as Ue,e as a,f as i,h as O,_ as qe,o as $e,j as y,k as B,l as e,n as f,p as K,q as I,s as H,v as J,x as Q,y as x,z as Ne,B as C,A as Z,S as Xe,T as Ye,C as ee,D as Ge,E as T,F as W,G as Ke,H as He,I as ne}from"./index-C15nOd12.js";import{u as Je,r as Qe,d as Ze,a as en,b as nn,c as ln,e as an,f as on,g as tn,h as sn,i as rn,j as dn,C as cn,_ as un,t as pn,l as vn}from"./emits-Cpas9fMi.js";import{_ as yn}from"./DisplayedValue.vue_vue_type_script_setup_true_lang-CUvPsg9h.js";import{u as fn}from"./bindings-B6J5umzG.js";const bn=Ee({__name:"VInlineTextField",props:Y(He({clearIcon:{},density:{},rules:{},variant:{},autofocus:{type:Boolean},cancelButtonColor:{},cancelButtonSize:{},cancelButtonTitle:{},cancelButtonVariant:{},cancelIcon:{},cancelIconColor:{},cardField:{type:Boolean},cardOffsetX:{},cardOffsetY:{},cardProps:{},cell:{type:Boolean},cellUnderlineFullWidth:{type:Boolean},closeSiblings:{type:Boolean},color:{},disabled:{type:Boolean},displayAppendIcon:{},displayAppendIconColor:{},displayAppendIconSize:{},displayAppendInnerIcon:{},displayAppendInnerIconColor:{},displayAppendInnerIconSize:{},displayPrependIcon:{},displayPrependIconColor:{},displayPrependIconSize:{},displayPrependInnerIcon:{},displayPrependInnerIconColor:{},displayPrependInnerIconSize:{},emptyText:{},error:{type:Boolean},fieldOnly:{type:Boolean},hideCancelIcon:{type:Boolean},hideDetails:{type:Boolean},hideSaveIcon:{type:Boolean},label:{},loading:{type:Boolean},loadingIcon:{},loadingIconColor:{},loadingWait:{type:Boolean},name:{},required:{type:Boolean},saveButtonColor:{},saveButtonSize:{},saveButtonTitle:{},saveButtonVariant:{},saveIcon:{},saveIconColor:{},tableField:{type:Boolean},truncateLength:{},truncateSuffix:{},underlineColor:{},underlineStyle:{},underlineWidth:{},underlined:{type:Boolean},valueColor:{}},{...pn}),{modelValue:{},modelModifiers:{}}),emits:Y([...vn],["update:modelValue"]),setup(k,{emit:le}){const t=we(k,"modelValue"),h=De(),F=Le(),E=le,w=G(je,{}),m=G(Symbol.for("vuetify:icons")),s=k,n=Me({...h,...s,...w});Re(()=>{Object.assign(n,{...h,...s,...w})});const{cancelButtonColor:ae,cancelButtonSize:oe,cancelButtonTitle:te,cancelButtonVariant:ie,cancelIcon:se,cancelIconColor:re,cardField:g,closeSiblings:P,color:de,fieldOnly:ce,hideCancelIcon:ue,hideDetails:pe,hideSaveIcon:ve,loadingIcon:ye,loadingIconColor:fe,saveButtonColor:Ie,saveButtonSize:Ce,saveButtonTitle:me,saveButtonVariant:ge,saveIcon:be,saveIconColor:Se}=Ue(n),z=a(()=>s.disabled),c=a(()=>s.loading),D=i(!1),r=i(!1),o=i(!1),b=i(null);let V=null;O(()=>c.value,(l,d)=>{!l&&d&&o.value&&S()});const Be=a(()=>Je({icon:s.clearIcon,iconOptions:m,name:"clear"})),he=a(()=>t.value?(L(!1),n.truncateLength?Qe({length:n.truncateLength,suffix:n.truncateSuffix,text:t.value}):t.value):(L(!0),n.emptyText));function L(l){D.value=l}const Fe=a(()=>fn(n)),Pe=a(()=>({color:n.color,displayAppendIcon:n.displayAppendIcon,displayAppendIconColor:n.displayAppendIconColor,displayAppendIconSize:n.displayAppendIconSize,displayAppendInnerIcon:n.displayAppendInnerIcon,displayAppendInnerIconColor:n.displayAppendInnerIconColor,displayAppendInnerIconSize:n.displayAppendInnerIconSize,displayPrependIcon:n.displayPrependIcon,displayPrependIconColor:n.displayPrependIconColor,displayPrependIconSize:n.displayPrependIconSize,displayPrependInnerIcon:n.displayPrependInnerIcon,displayPrependInnerIconColor:n.displayPrependInnerIconColor,displayPrependInnerIconSize:n.displayPrependInnerIconSize,displayValue:he.value,empty:D.value,error:r.value,field:"v-text-field",underlineColor:n.underlineColor,underlineStyle:n.underlineStyle,underlineWidth:n.underlineWidth,underlined:n.underlined,valueColor:n.valueColor})),ze=a(()=>({...Ze,...s.cardProps})),Ve=a(()=>en({cell:n.cell&&!o.value,density:n.density,disabled:z.value,field:"v-text-field",iconSet:m==null?void 0:m.defaultSet,loading:c.value,loadingWait:n.loadingWait,tableField:n.tableField,variant:n.variant})),_e=a(()=>nn({cell:n.cell,cellUnderlineFullWidth:n.cellUnderlineFullWidth,density:n.density,field:"v-text-field"})),Ae=ln({density:n.density,variant:n.variant}),Oe=a(()=>an({active:o.value,name:"text-field"})),xe=a(()=>on({name:"text-field",showField:o.value})),Te=a(()=>tn()),We=a(()=>j.value);function _(){r.value=!1,t.value=V,S()}const j=i(),M=i(null),R=i("body");function S(){var d,u;if(z.value||n.loadingWait&&c.value)return;j.value=sn({cardMinWidth:(d=n.cardProps)==null?void 0:d.minWidth,cardOffsetX:n.cardOffsetX,cardOffsetY:n.cardOffsetY,cardWidth:(u=n.cardProps)==null?void 0:u.width,field:M.value});const l=rn({attrs:h,closeSiblings:P.value,fieldOnly:n.fieldOnly,props:s,showField:o,timeOpened:b.value});o.value=l.showField,b.value=l.timeOpened,p!==null&&P.value&&o.value&&!n.fieldOnly&&p.emit(l.timeOpened),V=t.value}const U=i(),ke=a(()=>U.value);O(()=>o.value,()=>{o.value&&q()}),O(()=>t.value,()=>{o.value&&q()});function q(){const l=dn({required:n.required,rules:n.rules,value:t});return r.value=l.errors,U.value=l.results,l.results}function $(){if(r.value){r.value=!0;return}V=t.value,E("update",t.value),n.loadingWait||S()}let p,N;P.value&&qe(async()=>{const{useEventBus:l}=await import("./index-BYzeJpFW.js");return{useEventBus:l}},__vite__mapDeps([0,1,2])).then(({useEventBus:l})=>{p=l(cn),N=p.on(X)});function X(l){E("update:closeSiblingFields",b),o.value&&b.value!==l&&_()}return $e(()=>{typeof N<"u"&&p.off(X)}),(l,d)=>(y(),B("div",{ref_key:"inlineFieldsContainer",ref:M,class:f(e(Ve)),style:ee(e(Te))},[!e(o)&&!e(n).fieldOnly||e(g)?(y(),B("div",{key:0,class:f(e(_e))},[K("div",{class:f(e(Ae))},[I(yn,Q(e(Pe),{onToggleField:S}),H({_:2},[J(e(F),(u,v)=>({name:v,fn:C(A=>[ne(l.$slots,v,T(W({...A})))])}))]),1040)],2)],2)):x("",!0),e(o)||e(n).fieldOnly||e(g)?(y(),B("div",{key:1,class:f(e(Oe))},[(y(),Ne(Ye,{disabled:!e(g),to:e(R)},[I(Xe,Q(e(Fe),{modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=u=>t.value=u),autofocus:!e(n).fieldOnly||e(n).autofocus,"clear-icon":e(Be),color:e(de),density:e(n).density,disabled:e(c)||e(z),error:e(r),"error-messages":e(ke),"hide-details":e(pe),label:e(n).label,loading:e(c),variant:e(n).variant,width:"100%",onKeyup:[Z($,["enter"]),Z(_,["esc"])]}),H({_:2},[J(e(F),(u,v)=>({name:v,fn:C(A=>[ne(l.$slots,v,T(W({...A})))])})),e(F).append?void 0:{name:"append",fn:C(()=>[I(un,{"cancel-button-color":e(ae),"cancel-button-size":e(oe),"cancel-button-title":e(te),"cancel-button-variant":e(ie),"cancel-icon":e(se),"cancel-icon-color":e(re),error:e(r),"field-only":e(ce),"hide-cancel-icon":e(ue),"hide-save-icon":e(ve),loading:e(c),"loading-icon":e(ye),"loading-icon-color":e(fe),"save-button-color":e(Ie),"save-button-size":e(Ce),"save-button-title":e(me),"save-button-variant":e(ge),"save-icon":e(be),"save-icon-color":e(Se),onClose:_,onSave:$},null,8,["cancel-button-color","cancel-button-size","cancel-button-title","cancel-button-variant","cancel-icon","cancel-icon-color","error","field-only","hide-cancel-icon","hide-save-icon","loading","loading-icon","loading-icon-color","save-button-color","save-button-size","save-button-title","save-button-variant","save-icon","save-icon-color"])]),key:"0"}]),1040,["modelValue","autofocus","clear-icon","color","density","disabled","error","error-messages","hide-details","label","loading","variant"])],8,["disabled","to"]))],2)):x("",!0),e(g)?(y(),B("div",{key:2,class:f(e(xe)),style:ee(e(We))},[I(Ke,T(W(e(ze))),{default:C(()=>[I(Ge,null,{default:C(()=>[K("div",{ref_key:"cardFieldRef",ref:R},null,512)]),_:1})]),_:1},16)],6)):x("",!0)],6))}});export{bn as default};
