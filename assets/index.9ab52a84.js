import{d as e,a9 as a,r as l,b0 as t,bj as r,aV as o,aW as s,ay as n,bR as d,a$ as u}from"./index.44eff430.js";import{b as i}from"./master-data.service.95993c0c.js";const p=u(e({__name:"index",props:{type:{type:String,required:!1},subType:{type:String,required:!1},modelValue:{type:null,required:!1},placeholder:{type:String,required:!1},multiple:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1}},emits:["update:modelValue","change"],setup(e,{emit:u}){const p=e,m=a({get:()=>p.modelValue,set:e=>{u("update:modelValue",e)}}),c=l([]);return t((()=>{return e=this,a=null,l=function*(){const e=yield i({size:1e3,type:p.type,drugstoreType:p.subType});c.value=e.data.list.map((e=>({value:e.id,label:`${e.name}(${e.code})`})))},new Promise(((t,r)=>{var o=e=>{try{n(l.next(e))}catch(a){r(a)}},s=e=>{try{n(l.throw(e))}catch(a){r(a)}},n=e=>e.done?t(e.value):Promise.resolve(e.value).then(o,s);n((l=l.apply(e,a)).next())}));var e,a,l})),(e,a)=>{const l=r("vxe-select");return o(),s(l,{transfer:"",options:n(c),placeholder:p.placeholder||"分销商&药店",multiple:p.multiple,modelValue:n(m),"onUpdate:modelValue":a[0]||(a[0]=e=>d(m)?m.value=e:null),disabled:p.disabled,clearable:"",filterable:"",onChange:a[1]||(a[1]=e=>u("change"))},null,8,["options","placeholder","multiple","modelValue","disabled"])}}}),[["__file","C:/Users/ThinkPad/source/Bonbonniere/bonbon-vue/src/components/demo-customer/index.vue"]]);export{p as _};
