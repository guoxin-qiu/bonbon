var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,d=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,i=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&d(e,a,t[a]);if(l)for(var a of l(t))o.call(t,a)&&d(e,a,t[a]);return e},s=(e,l)=>t(e,a(l));import{_ as u}from"./index.a39b0902.js";import{_ as n}from"./index.9fcc5db4.js";import{_ as c}from"./index.efd20b46.js";import{_ as m}from"./index.69084706.js";import{d as f,az as p,cs as h,bj as b,aV as V,aW as w,aS as _,a as y,cj as g,ck as j,ay as v,cf as x,bk as q,a$ as D}from"./index.44eff430.js";import{c as U}from"./retail-rebate-payment.service.9bb518f4.js";import{g as O}from"./vxeTableHelper.6baae079.js";import"./retail-master-data.service.de057498.js";import"./master-data.service.95993c0c.js";const C=q("div",{style:{color:"red"}},"此页面仅为辅助字段及逻辑说明，项目中为后台表，不做界面！",-1),P=D(f({__name:"DeductByBranchView",setup(e){const t=p({showDetail:!1,deductDetails:void 0}),a=p(s(i({},O("grid",U)),{formConfig:{items:[{folding:!1,slots:{default:"search_quarter"}},{folding:!1,slots:{default:"search_headquarter"}},{folding:!1,slots:{default:"search_productMix"}},{folding:!1,slots:{default:"search_product"}},{itemRender:{},slots:{default:"search_operation"}}]},columns:[{field:"quarter",title:"待抵扣季度",width:100},{field:"headquarterCode",title:"总部编码",width:150},{field:"headquarterName",title:"总部名称",width:300},{field:"branchCode",title:"分部编码",width:150},{field:"branchName",title:"分部名称",width:300},{field:"customerCategory",title:"KA属性",width:100},{field:"productMix",title:"产品组合",width:300},{field:"product",title:"产品",width:150},{field:"totalAmount",title:"待抵扣金额",width:100,formatter:({cellValue:e})=>h(e)},{field:"alreadyAmount",title:"已抵扣金额",width:100,formatter:({cellValue:e})=>h(e)},{field:"remainAmount",title:"未抵扣金额",width:100,formatter:({cellValue:e})=>h(e)},{title:"操作",align:"center",width:120,fixed:"right",slots:{default:"operations"}}]})),l=p(s(i({},O("detailGrid")),{pagerConfig:void 0,columns:[{field:"fromQuarter",title:"抵扣来源"},{field:"deductAmount",title:"抵扣金额",formatter:({cellValue:e})=>h(e)},{field:"executeDate",title:"执行日期"},{field:"status",title:"状态"}]}));return(e,r)=>{const o=m,d=c,i=n,s=u,f=b("vxe-button"),p=b("vxe-grid"),h=b("vxe-modal"),q=b("page-container");return V(),w(q,null,{default:_((()=>[C,y(p,g(j(v(a))),{search_quarter:_((({data:e})=>[y(o,{modelValue:e.quarter,"onUpdate:modelValue":t=>e.quarter=t},null,8,["modelValue","onUpdate:modelValue"])])),search_product:_((({data:e})=>[y(d,{modelValue:e.product,"onUpdate:modelValue":t=>e.product=t},null,8,["modelValue","onUpdate:modelValue"])])),search_headquarter:_((({data:e})=>[y(i,{modelValue:e.headquarter,"onUpdate:modelValue":t=>e.headquarter=t},null,8,["modelValue","onUpdate:modelValue"])])),search_productMix:_((({data:e})=>[y(s,{modelValue:e.productMix,"onUpdate:modelValue":t=>e.productMix=t},null,8,["modelValue","onUpdate:modelValue"])])),search_operation:_((()=>[y(f,{status:"primary",type:"submit",content:"搜索"})])),operations:_((({row:e})=>[y(f,{status:"primary",onClick:a=>function(e){t.showDetail=!0,t.deductDetails=e.details}(e),content:"扣减详情"},null,8,["onClick"])])),_:1},16),y(h,{modelValue:v(t).showDetail,"onUpdate:modelValue":r[0]||(r[0]=e=>v(t).showDetail=e),title:"扣减明细",resize:"","destroy-on-close":"",width:"60%"},{default:_((()=>[y(p,x(v(l),{data:v(t).deductDetails}),null,16,["data"])])),_:1},8,["modelValue"])])),_:1})}}}),[["__file","C:/Users/ThinkPad/source/Bonbonniere/bonbon-vue/src/views/retail-rebate-payment/DeductByBranchView.vue"]]);export{P as default};
