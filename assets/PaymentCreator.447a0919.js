import{_ as e}from"./index.9b869bd5.js";import{d as a,aQ as t,r as l,az as d,bj as o,aV as i,aW as r,aS as n,a as u,aR as m,ca as s,ay as p,ac as f,a_ as V,a$ as h}from"./index.44eff430.js";import{a as c}from"./vxeTableHelper.6baae079.js";import{r as _}from"./routerHelper.692f5c09.js";import{Q as y}from"./vue-quill.snow.40f2bfe1.js";import{a as b}from"./other-payment.service.bad70aa5.js";import"./dayjs.min.7438ea6f.js";const v=h(a({__name:"PaymentCreator",setup(a){const h=t(),v=l(),x=b(),w=d({formData:{},formRules:{chineseName:[{required:!0}],englishName:[{required:!0}],type:[{required:!0}],amount:[{required:!0}],reAmount:[{required:!0}],period:[{required:!0}]},showPlanSelector:!1});return(a,t)=>{const l=o("vxe-option"),d=o("vxe-select"),b=o("vxe-form-item"),U=o("vxe-input"),g=e,j=o("vxe-form"),k=o("vxe-button"),N=o("page-container");return i(),r(N,null,{default:n((()=>[u(j,{"title-align":"right","title-width":"100",data:p(w).formData,rules:p(w).formRules,ref_key:"xForm",ref:v},{default:n((()=>[u(b,{"title-width":"180",field:"type",title:"类型",span:12,"item-render":{},"title-prefix":{content:"可以做到字典表里面，查询也需要"}},{default:n((({data:e})=>[u(d,{modelValue:e.type,"onUpdate:modelValue":a=>e.type=a,transfer:"",placeholder:""},{default:n((()=>[(i(!0),m(f,null,s(p(x),(e=>(i(),r(l,{key:e.value,value:e.value,label:e.label},null,8,["value","label"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1}),u(b,{"title-width":"180",field:"chineseName",title:"报告名称（中文）",span:24,"item-render":{}},{default:n((({data:e})=>[u(U,{modelValue:e.chineseName,"onUpdate:modelValue":a=>e.chineseName=a},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),u(b,{"title-width":"180",field:"englishName",title:"报告名称（英文）",span:24,"item-render":{}},{default:n((({data:e})=>[u(U,{modelValue:e.englishName,"onUpdate:modelValue":a=>e.englishName=a},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),u(b,{"title-width":"180",field:"amount",title:"补偿总金额",span:12,"item-render":{}},{default:n((({data:e})=>[u(U,{modelValue:e.amount,"onUpdate:modelValue":a=>e.amount=a},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),u(b,{"title-width":"180",field:"reAmount",title:"待回收总金额",span:12,"item-render":{}},{default:n((({data:e})=>[u(U,{modelValue:e.amount,"onUpdate:modelValue":a=>e.amount=a},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),u(b,{"title-width":"180",field:"period",title:"结算周期",span:16,"item-render":{}},{default:n((({data:e})=>[u(U,{modelValue:e.periodStart,"onUpdate:modelValue":a=>e.periodStart=a,type:"date",style:{width:"150px"}},null,8,["modelValue","onUpdate:modelValue"]),V(" 至 "),u(U,{modelValue:e.periodEnd,"onUpdate:modelValue":a=>e.periodEnd=a,type:"date",style:{width:"150px"}},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),u(b,{"title-width":"180",field:"remark",title:"结算概要",span:24,"item-render":{}},{default:n((({data:e})=>[u(p(y),{content:e.remark},null,8,["content"])])),_:1}),u(b,{title:"关联文件","title-align":"left","title-width":200,span:24,"title-prefix":{icon:"vxe-icon-comment"}}),u(b,{span:24},{default:n((()=>[u(g,{"enable-insert":!0,"enable-remove":!0})])),_:1})])),_:1},8,["data","rules"]),u(j,{"title-align":"right","title-width":"100",rules:p(w).formRules,ref_key:"xForm",ref:v},{default:n((()=>[u(b,{align:"center","title-align":"left",span:24},{default:n((()=>[u(k,{type:"submit",status:"primary",onClick:t[0]||(t[0]=e=>p(c)("检验必填项，操作成功后，状态变为提交待审批，可以被审批单选到"))},{default:n((()=>[V(" 发布终版 ")])),_:1}),u(k,{type:"submit",status:"primary",onClick:t[1]||(t[1]=e=>p(c)("保存草稿数据，校验必填项"))},{default:n((()=>[V(" 保存草稿 ")])),_:1}),u(k,{onClick:t[2]||(t[2]=e=>p(_)(p(h),"payment-others"))},{default:n((()=>[V("返回列表")])),_:1})])),_:1})])),_:1},8,["rules"])])),_:1})}}}),[["__file","C:/Users/ThinkPad/source/Bonbonniere/bonbon-vue/src/views/other-payment/PaymentCreator.vue"]]);export{v as default};
