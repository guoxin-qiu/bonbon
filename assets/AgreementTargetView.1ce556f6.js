var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,d=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l;import{_ as i}from"./index.9b869bd5.js";import{_ as s}from"./index.36147ed9.js";import{_ as u}from"./index.a39b0902.js";import{_ as n}from"./index.9fcc5db4.js";import{_ as m}from"./index.69084706.js";import{_ as p}from"./index.4d216ae4.js";import{d as f,r as c,az as h,cs as V,bj as y,aV as _,aW as w,aS as b,a as g,a_ as q,ay as x,aX as U,cf as v,a$ as C}from"./index.44eff430.js";import{f as j}from"./retail-master-data.service.de057498.js";import{g as k,a as A}from"./vxeTableHelper.6baae079.js";import"./dayjs.min.7438ea6f.js";const M=C(f({__name:"AgreementTargetView",setup(e){const f=c(),C=h((M=((e,t)=>{for(var a in t||(t={}))r.call(t,a)&&d(e,a,t[a]);if(l)for(var a of l(t))o.call(t,a)&&d(e,a,t[a]);return e})({},k("grid",j)),t(M,a({formConfig:{items:[{folding:!1,slots:{default:"search_year"}},{folding:!1,slots:{default:"search_quarter"}},{folding:!1,slots:{default:"search_headquarter"}},{folding:!0,slots:{default:"search_headquarterCategory"}},{folding:!1,slots:{default:"search_productMix"}},{folding:!0,itemRender:{name:"$input",props:{placeholder:"追溯日期从",type:"date"}}},{folding:!0,itemRender:{name:"$input",props:{placeholder:"追溯日期到",type:"date"}}},{folding:!0,slots:{default:"search_status"}},{collapseNode:!0,itemRender:{},slots:{default:"search_operation"}}]},columns:[{field:"checkbox",type:"checkbox",width:50,align:"center",fixed:"left"},{field:"year",title:"年份",width:100},{field:"quarter",title:"季度",width:100},{field:"headquarterCode",title:"总部编码",width:100},{field:"headquarterName",title:"总部名称",width:300},{field:"headquarterAbbr",title:"总部简称",width:200},{field:"headquarterCategory",title:"KA属性",width:100},{field:"productMix",title:"产品组合",width:300},{field:"targetAmount",title:"协议目标金额",width:150,formatter:({cellValue:e})=>V(e)},{field:"retroactiveDate",title:"追溯日期",width:100},{title:"审批邮件",width:100,slots:{default:"approvalEmail"}},{field:"status",title:"状态",width:100},{field:"createdBy",title:"创建人",width:100},{field:"createdOn",title:"创建时间",width:100},{field:"modifiedBy",title:"修改人",width:100},{field:"modifiedOn",title:"修改时间",width:100},{title:"操作",align:"center",width:180,fixed:"right",slots:{default:"operations"}}]}))));var M;const O=h({formData:{quarter:"2023Q1",headquarter:"",productMix:"",targetAmount:"",retroactiveDate:""},formRules:{headquarter:[{required:!0}],quarter:[{required:!0}],productMix:[{required:!0}],targetAmount:[{required:!0}],retroactiveDate:[{required:!0}]},formItems:[{field:"quarter",title:"季度",span:11,slots:{default:"quarter"}},{field:"headquarter",title:"总部",span:11,slots:{default:"headquarter"}},{field:"productMix",title:"产品组合",span:11,slots:{default:"productMix"}},{field:"retroactiveDate",title:"追溯日期",span:11,itemRender:{name:"$input",props:{type:"date"}}},{field:"targetAmount",title:"协议目标金额",span:11,itemRender:{name:"$input",props:{type:"number"}}},{align:"center",span:24,itemRender:{},slots:{default:"form_buttons"}}],showCreator:!1,showFileUpload:!1,showFileUploadA:!1});return(e,t)=>{const a=p,l=m,r=n,o=u,d=s,c=y("vxe-button"),h=y("vxe-grid"),V=y("vxe-form"),j=y("vxe-modal"),k=i,M=y("page-container");return _(),w(M,null,{default:b((()=>[g(h,v({ref_key:"xGrid",ref:f},x(C)),{search_year:b((({data:e})=>[g(a,{modelValue:e.year,"onUpdate:modelValue":t=>e.year=t},null,8,["modelValue","onUpdate:modelValue"])])),search_quarter:b((({data:e})=>[g(l,{modelValue:e.quarter,"onUpdate:modelValue":t=>e.quarter=t},null,8,["modelValue","onUpdate:modelValue"])])),search_headquarter:b((({data:e})=>[g(r,{modelValue:e.headquarter,"onUpdate:modelValue":t=>e.headquarter=t},null,8,["modelValue","onUpdate:modelValue"])])),search_productMix:b((({data:e})=>[g(o,{modelValue:e.productMix,"onUpdate:modelValue":t=>e.productMix=t},null,8,["modelValue","onUpdate:modelValue"])])),search_status:b((({data:e})=>[g(d,{modelValue:e.status,"onUpdate:modelValue":t=>e.status=t},null,8,["modelValue","onUpdate:modelValue"])])),search_operation:b((()=>[g(c,{status:"primary",type:"submit"},{default:b((()=>[q("搜索")])),_:1})])),toolbar_buttons:b((()=>[g(c,{status:"primary",onClick:t[0]||(t[0]=e=>x(O).showCreator=!0)},{default:b((()=>[q("新建")])),_:1}),g(c,{status:"primary",onClick:t[1]||(t[1]=e=>x(A)("数据团队用户\n        季度(Y)、总部编码(Y)、产品组合(Y)、协议目标金额(Y)、追溯日期(Y)\n        季度+总部编码+产品组合唯一"))},{default:b((()=>[q(" 数据导入 ")])),_:1}),g(c,{status:"primary",onClick:t[2]||(t[2]=e=>x(A)("数据团队、零售KA团队、零售运营团队"))},{default:b((()=>[q(" 数据下载 ")])),_:1}),g(c,{status:"primary",content:"发布",onClick:t[3]||(t[3]=e=>x(A)("仅数据团队操作。有勾选按勾选，不勾选按查询条件；只有自己创建的草稿状态的数据才可以发布；后续所有类似按钮都同样逻辑"))}),g(c,{status:"danger",onClick:t[4]||(t[4]=e=>x(A)("只能删除自己创建的草稿状态数据，批量删除，勾选则删除勾选，不勾选按查询条件；所有发布、删除、生效、失效操作，都要有confirm提示框")),content:"删除"}),g(c,{status:"primary",onClick:t[5]||(t[5]=e=>x(A)("仅数据团队可见。可以按年度上传多个附件，以上传时间倒序显示").then((()=>x(O).showFileUploadA=!0)))},{default:b((()=>[q(" 年度附件 ")])),_:1})])),approvalEmail:b((()=>[g(c,{type:"text",status:"primary",content:"点击查看",onClick:t[6]||(t[6]=e=>x(A)("仅数据团队可上传").then((()=>x(O).showFileUpload=!0)))})])),operations:b((({row:e})=>[g(c,{status:"primary",onClick:t[7]||(t[7]=e=>x(A)("仅能编辑追溯日期和协议目标金额，任何状态都可以编辑")),content:"编辑"}),"失效"===e.status?(_(),w(c,{key:0,status:"danger",onClick:t[8]||(t[8]=e=>x(A)("只有失效的才可以生效")),content:"生效"})):U("v-if",!0),"生效"===e.status?(_(),w(c,{key:1,status:"danger",onClick:t[9]||(t[9]=e=>x(A)("只有生效的才可以失效")),content:"失效"})):U("v-if",!0)])),_:1},16),g(j,{modelValue:x(O).showCreator,"onUpdate:modelValue":t[11]||(t[11]=e=>x(O).showCreator=e),title:"新建协议目标",width:"80%",resize:"","destroy-on-close":""},{default:b((()=>[g(V,{data:x(O).formData,rules:x(O).formRules,items:x(O).formItems,"title-align":"right","title-width":"150"},{year:b((({data:e})=>[g(a,{modelValue:e.year,"onUpdate:modelValue":t=>e.year=t},null,8,["modelValue","onUpdate:modelValue"])])),quarter:b((({data:e})=>[g(l,{modelValue:e.quarter,"onUpdate:modelValue":t=>e.quarter=t},null,8,["modelValue","onUpdate:modelValue"])])),headquarter:b((({data:e})=>[g(r,{modelValue:e.headquarter,"onUpdate:modelValue":t=>e.headquarter=t},null,8,["modelValue","onUpdate:modelValue"])])),productMix:b((({data:e})=>[g(o,{modelValue:e.productMix,"onUpdate:modelValue":t=>e.productMix=t},null,8,["modelValue","onUpdate:modelValue"])])),form_buttons:b((()=>[g(c,{type:"submit",status:"primary"},{default:b((()=>[q("保存")])),_:1}),g(c,{onClick:t[10]||(t[10]=e=>x(O).showCreator=!1)},{default:b((()=>[q("取消")])),_:1})])),_:1},8,["data","rules","items"])])),_:1},8,["modelValue"]),g(j,{modelValue:x(O).showFileUpload,"onUpdate:modelValue":t[12]||(t[12]=e=>x(O).showFileUpload=e),title:"审批邮件",width:"80%",resize:"","destroy-on-close":""},{default:b((()=>[g(k,{"enable-insert":"","enable-remove":""})])),_:1},8,["modelValue"]),g(j,{modelValue:x(O).showFileUploadA,"onUpdate:modelValue":t[13]||(t[13]=e=>x(O).showFileUploadA=e),title:"年度附件",width:"80%",resize:"","destroy-on-close":""},{default:b((()=>[g(k,{"enable-insert":"","enable-remove":""})])),_:1},8,["modelValue"])])),_:1})}}}),[["__scopeId","data-v-821c2296"],["__file","C:/Users/ThinkPad/source/Bonbonniere/bonbon-vue/src/views/retail-master-data/AgreementTargetView.vue"]]);export{M as default};
