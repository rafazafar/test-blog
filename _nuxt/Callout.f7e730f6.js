import"./MDCSlot.d41e16fe.js";import{d as m,r as o,b as p,c as f,e as t,g as v,n,M as l,ap as g,aq as h,a6 as y,k as C}from"./entry.770e446c.js";import{r}from"./slot.df3239cb.js";const V={class:"summary"},k={class:"content"},w=m({__name:"Callout",props:{type:{type:String,default:"info",validator(s){return["info","success","warning","danger","primary"].includes(s)}},modelValue:{required:!1,default:()=>o(!1)}},emits:["update:modelValue"],setup(s,{emit:c}){const i=s,u=c,e=o(i.modelValue),d=()=>{e.value=!e.value,u("update:modelValue",e.value)};return(a,x)=>{const _=y;return p(),f("div",{class:n(["callout",[s.type]])},[t("span",{class:"preview",onClick:d},[t("span",V,[r(a.$slots,"summary",{},void 0,!0)]),v(_,{name:"heroicons-outline:chevron-right",class:n(["icon",[l(e)&&"rotate"]])},null,8,["class"])]),g(t("div",k,[r(a.$slots,"content",{},void 0,!0)],512),[[h,l(e)]])],2)}}});const I=C(w,[["__scopeId","data-v-7e35862f"]]);export{I as default};
