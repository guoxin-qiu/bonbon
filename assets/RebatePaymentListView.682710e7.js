var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,r=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l;import{_ as d}from"./index.36147ed9.js";import{_ as n}from"./index.bbe7fb6c.js";import{_ as s}from"./index.b9b9b125.js";import{_ as u}from"./index.dd62f48c.js";import{_ as m}from"./index.a39b0902.js";import{_ as c}from"./index.eb643f6e.js";import{_ as p}from"./index.69084706.js";import{_ as f}from"./index.4d216ae4.js";import{d as y,r as h,aQ as b,az as V,ct as _,bj as g,aV as w,aW as x,aS as j,a as v,a_ as U,ay as C,cf as k,a$ as P}from"./index.44eff430.js";import{g as D}from"./retail-rebate-payment.service.9bb518f4.js";import{g as O,a as R}from"./vxeTableHelper.6baae079.js";import{r as A}from"./routerHelper.692f5c09.js";const K=P(y({__name:"RebatePaymentListView",setup(e){const y=h(),P=b(),K=V((L=((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&r(e,a,t[a]);if(l)for(var a of l(t))i.call(t,a)&&r(e,a,t[a]);return e})({},O("grid",D)),t(L,a({formConfig:{items:[{folding:!1,slots:{default:"search_year"}},{folding:!1,slots:{default:"search_quarter"},title:"注意",titlePrefix:{content:"按照报告结束季度来查询"}},{folding:!1,slots:{default:"search_type"}},{folding:!1,slots:{default:"search_customerCategory"}},{folding:!0,slots:{default:"search_productMix"}},{folding:!0,itemRender:{name:"$input",props:{type:"date",placeholder:"开始日期从"}}},{folding:!0,itemRender:{name:"$input",props:{type:"date",placeholder:"开始日期到"}}},{folding:!0,itemRender:{name:"$input",props:{type:"date",placeholder:"结束日期从"}}},{folding:!0,itemRender:{name:"$input",props:{type:"date",placeholder:"结束日期到"}}},{folding:!0,slots:{default:"search_customerLevelType"}},{folding:!0,slots:{default:"search_automaticDeduction"}},{folding:!0,slots:{default:"search_status"}},{collapseNode:!0,itemRender:{},slots:{default:"search_operation"}}]},columns:[{field:"checkbox",type:"checkbox",width:50,align:"center",fixed:"left"},{field:"id",title:"ID",width:100},{field:"year",title:"年份",width:100},{field:"type",title:"报告类型",width:150},{field:"name",title:"报告名称",width:300},{field:"customerCategory",title:"KA属性",width:100},{field:"customerLevelType",title:"客户级别类型",width:150},{field:"productMix",title:"产品组合",width:300},{field:"amount1",title:"返利金额（含税）",width:200,titlePrefix:{content:"草稿时就计算；考虑KA角色不显示，省去复杂计算逻辑"}},{field:"amount2",title:"返利金额（无税）",width:200,titlePrefix:{content:"草稿时就计算；考虑KA角色不显示，省去复杂计算逻辑"}},{field:"amount3",title:"待回收金额（无税）",width:200,titlePrefix:{content:"草稿时就计算；考虑KA角色不显示，省去复杂计算逻辑"}},{field:"amount4",title:"待回收金额（含税）",width:200,titlePrefix:{content:"草稿时就计算；考虑KA角色不显示，省去复杂计算逻辑"}},{field:"paymentRatio",title:"支付比例",width:100,formatter:({cellValue:e})=>_(e)},{field:"automaticDeduction",title:"自动抵扣",width:100},{field:"startDate",title:"结算开始日期",width:150},{field:"endDate",title:"结算结束日期",width:150},{field:"windowPeriodStart",title:"窗口期开始",width:150},{field:"windowPeriodEnd",title:"窗口期结束",width:150},{field:"status",title:"状态",width:100},{title:"操作",align:"center",width:400,fixed:"right",slots:{default:"operations"}}]}))));var L;return(e,t)=>{const a=f,l=p,o=c,i=m,r=u,h=s,b=n,V=d,_=g("vxe-button"),D=g("vxe-grid"),O=g("page-container");return w(),x(O,null,{default:j((()=>[v(D,k({ref_key:"xGrid",ref:y},C(K)),{search_year:j((({data:e})=>[v(a,{modelValue:e.year,"onUpdate:modelValue":t=>e.year=t},null,8,["modelValue","onUpdate:modelValue"])])),search_quarter:j((({data:e})=>[v(l,{modelValue:e.quarter,"onUpdate:modelValue":t=>e.quarter=t},null,8,["modelValue","onUpdate:modelValue"])])),search_type:j((({data:e})=>[v(o,{modelValue:e.type,"onUpdate:modelValue":t=>e.type=t},null,8,["modelValue","onUpdate:modelValue"])])),search_productMix:j((({data:e})=>[v(i,{modelValue:e.productMix,"onUpdate:modelValue":t=>e.productMix=t},null,8,["modelValue","onUpdate:modelValue"])])),search_customerCategory:j((({data:e})=>[v(r,{modelValue:e.customerCategory,"onUpdate:modelValue":t=>e.customerCategory=t},null,8,["modelValue","onUpdate:modelValue"])])),search_customerLevelType:j((({data:e})=>[v(h,{modelValue:e.customerLevelType,"onUpdate:modelValue":t=>e.customerLevelType=t},null,8,["modelValue","onUpdate:modelValue"])])),search_automaticDeduction:j((({data:e})=>[v(b,{modelValue:e.automaticDeduction,"onUpdate:modelValue":t=>e.automaticDeduction=t,placeholder:"是否自动抵扣"},null,8,["modelValue","onUpdate:modelValue"])])),search_status:j((({data:e})=>[v(V,{modelValue:e.status,"onUpdate:modelValue":t=>e.status=t,type:"零售返利类型"},null,8,["modelValue","onUpdate:modelValue"])])),search_operation:j((()=>[v(_,{status:"primary",type:"submit"},{default:j((()=>[U("搜索")])),_:1})])),toolbar_buttons:j((()=>[v(_,{onClick:t[0]||(t[0]=e=>C(A)(C(P),"payment-retail-rebate-create")),type:"create",status:"primary",content:"创建报告"})])),operations:j((({row:e})=>[v(_,{content:"编辑",status:"primary",onClick:t=>function(e){A(P,"payment-retail-rebate-edit",{id:e.id})}(e)},null,8,["onClick"]),v(_,{content:"支付",status:"primary",onClick:t=>function(e){R("零售KA团队成员根据KA架构-零售客户-总部获取数据查看权限").then((()=>A(P,"payment-retail-rebate-appealing",{id:e.id})))}(e)},null,8,["onClick"]),v(_,{content:"核验",status:"primary",onClick:t=>function(e){A(P,"payment-retail-rebate-checking",{id:e.id})}(e)},null,8,["onClick"]),v(_,{content:"完成",status:"primary",onClick:t=>function(e){A(P,"payment-retail-rebate-checked",{id:e.id})}(e)},null,8,["onClick"]),v(_,{content:"删除",status:"danger"})])),_:1},16)])),_:1})}}}),[["__file","C:/Users/ThinkPad/source/Bonbonniere/bonbon-vue/src/views/retail-rebate-payment/RebatePaymentListView.vue"]]);export{K as default};
