import{m as p,u as c}from"./emits-B3ozKNna.js";import{d as F,m as h,i as y,r as v,w as C,u as I,e as n,l as e,j as r,z as u,Q as m}from"./index-B_mzHhvS.js";const w=F({__name:"BooleanIcons",props:h({iconFalseColor:{},iconFalseTitle:{},iconTrueColor:{},iconTrueTitle:{},iconFalse:{},iconTrue:{},trueValue:{},falseValue:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(s){const a=s,t=y(Symbol.for("vuetify:icons")),o=v({...a});C(()=>{Object.assign(o,{...a})});const i=I(s,"modelValue"),f=n(()=>p({modelValue:i,trueValue:o.trueValue})),d=n(()=>o.trueValue??!0),V=n(()=>c({icon:o.iconFalse,iconOptions:t,name:"false"})),T=n(()=>c({icon:o.iconTrue,iconOptions:t,name:"true"}));return(l,M)=>e(f)===!0||i.value===e(d)?(r(),u(e(m),{key:0,class:"v-inline-fields--boolean-icons fa-fw",color:l.iconTrueColor,icon:e(T),size:"x-small",title:l.iconTrueTitle},null,8,["color","icon","title"])):(r(),u(e(m),{key:1,class:"v-inline-fields--boolean-icons fa-fw",color:l.iconFalseColor,icon:e(V),size:"x-small",title:l.iconFalseTitle},null,8,["color","icon","title"]))}});export{w as _};