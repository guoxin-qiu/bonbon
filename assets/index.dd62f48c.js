import{d as e,a9 as l,bj as a,aV as o,aW as u,ay as d,bR as r,a$ as t}from"./index.44eff430.js";const n=t(e({__name:"index",props:{modelValue:{type:null,required:!1},placeholder:{type:String,required:!1},multiple:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,s=l({get:()=>n.modelValue,set:e=>{t("update:modelValue",e)}}),i=[{value:"NKA",label:"NKA"},{value:"RKA",label:"RKA"},{value:"B2B",label:"B2B"},{value:"B2C",label:"B2C"},{value:"PRJ",label:"PRJ"},{value:"NPRJ",label:"NPRJ"}];return(e,l)=>{const p=a("vxe-select");return o(),u(p,{transfer:"",options:i,placeholder:n.placeholder||"KA属性",multiple:n.multiple,modelValue:d(s),"onUpdate:modelValue":l[0]||(l[0]=e=>r(s)?s.value=e:null),disabled:n.disabled,clearable:"",max:"10",onChange:l[1]||(l[1]=e=>t("change"))},null,8,["placeholder","multiple","modelValue","disabled"])}}}),[["__file","C:/Users/ThinkPad/source/Bonbonniere/bonbon-vue/src/components/demo-retail-customer-category/index.vue"]]);export{n as _};
