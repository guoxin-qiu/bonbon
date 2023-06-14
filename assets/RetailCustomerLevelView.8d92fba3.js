var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{_ as s}from"./index.36147ed9.js";import{_ as u}from"./index.b422e771.js";import{_ as i}from"./index.b9b9b125.js";import{_ as n}from"./index.a39b0902.js";import{_ as m}from"./index.dd62f48c.js";import{_ as p}from"./index.9fcc5db4.js";import{_ as f}from"./index.4d216ae4.js";import{d as c,r as h,az as y,bj as V,aV as v,aW as _,aS as b,a as x,a_ as g,ay as w,aX as U,cf as q,a$ as C}from"./index.44eff430.js";import{j}from"./retail-master-data.service.de057498.js";import{g as k,a as T}from"./vxeTableHelper.6baae079.js";const M=C(c({__name:"RetailCustomerLevelView",setup(e){const c=h(),C=y((M=((e,a)=>{for(var l in a||(a={}))d.call(a,l)&&r(e,l,a[l]);if(t)for(var l of t(a))o.call(a,l)&&r(e,l,a[l]);return e})({},k("grid",j)),a(M,l({formConfig:{items:[{folding:!1,slots:{default:"search_year"}},{folding:!1,slots:{default:"search_headquarter"}},{folding:!1,slots:{default:"search_headquarterCategory"}},{folding:!0,slots:{default:"search_productMix"}},{folding:!0,slots:{default:"search_levelType"}},{folding:!0,slots:{default:"search_level"}},{folding:!0,slots:{default:"search_status"}},{collapseNode:!0,itemRender:{},slots:{default:"search_operation"}}]},columns:[{field:"checkbox",type:"checkbox",width:50,align:"center",fixed:"left"},{field:"year",title:"年份",width:100},{field:"headquarterCode",title:"总部编码",width:100},{field:"headquarterName",title:"总部名称",width:300},{field:"headquarterCategory",title:"KA属性",width:100},{field:"productMix",title:"产品组合",width:200},{field:"levelType",title:"级别类型",width:200},{field:"level",title:"客户级别",width:100},{field:"status",title:"状态",width:100},{field:"createdBy",title:"创建人",width:100},{field:"createdOn",title:"创建时间",width:100},{field:"modifiedBy",title:"修改人",width:100},{field:"modifiedOn",title:"修改时间",width:100},{title:"操作",align:"center",width:180,fixed:"right",slots:{default:"operations"}}]}))));var M;const O=y({formData:{year:2023,headquarter:"",productMix:"",levelType:"",level:""},formRules:{year:[{required:!0}],quarter:[{required:!0}],headquarter:[{required:!0}],productMix:[{required:!0}],levelType:[{required:!0}],level:[{required:!0}]},formItems:[{field:"year",title:"年份",span:22,slots:{default:"year"}},{field:"headquarter",title:"零售总部",span:22,slots:{default:"headquarter"}},{field:"productMix",title:"产品组合",span:22,slots:{default:"productMix"}},{field:"levelType",title:"级别类型",span:22,slots:{default:"levelType"}},{field:"level",title:"客户级别",span:22,slots:{default:"level"}},{align:"center",span:24,itemRender:{},slots:{default:"form_buttons"}}],showCreator:!1,showFileUpload:!1});return(e,a)=>{const l=f,t=p,d=m,o=n,r=i,h=u,y=s,j=V("vxe-button"),k=V("vxe-grid"),M=V("vxe-select"),P=V("vxe-form"),R=V("vxe-modal"),Y=V("page-container");return v(),_(Y,null,{default:b((()=>[x(k,q({ref_key:"xGrid",ref:c},w(C)),{search_year:b((({data:e})=>[x(l,{modelValue:e.year,"onUpdate:modelValue":a=>e.year=a},null,8,["modelValue","onUpdate:modelValue"])])),search_headquarter:b((({data:e})=>[x(t,{modelValue:e.headquarter,"onUpdate:modelValue":a=>e.headquarter=a},null,8,["modelValue","onUpdate:modelValue"])])),search_headquarterCategory:b((({data:e})=>[x(d,{modelValue:e.headquarterCategory,"onUpdate:modelValue":a=>e.headquarterCategory=a},null,8,["modelValue","onUpdate:modelValue"])])),search_productMix:b((({data:e})=>[x(o,{modelValue:e.productMix,"onUpdate:modelValue":a=>e.productMix=a},null,8,["modelValue","onUpdate:modelValue"])])),search_levelType:b((({data:e})=>[x(r,{modelValue:e.levelType,"onUpdate:modelValue":a=>e.levelType=a},null,8,["modelValue","onUpdate:modelValue"])])),search_level:b((({data:e})=>[x(h,{modelValue:e.level,"onUpdate:modelValue":a=>e.level=a},null,8,["modelValue","onUpdate:modelValue"])])),search_status:b((({data:e})=>[x(y,{modelValue:e.status,"onUpdate:modelValue":a=>e.status=a,type:"发布状态"},null,8,["modelValue","onUpdate:modelValue"])])),search_operation:b((()=>[x(j,{status:"primary",type:"submit"},{default:b((()=>[g("搜索")])),_:1})])),toolbar_buttons:b((()=>[x(j,{status:"primary",onClick:a[0]||(a[0]=e=>w(O).showCreator=!0)},{default:b((()=>[g("新建")])),_:1}),x(j,{status:"primary",onClick:a[1]||(a[1]=e=>w(T)("数据团队用户\n        年份(Y)、总部编码(Y)、产品组合(Y)、级别类型(Y)、客户级别(Y)\n        年份+总部编码+产品组合+级别类型唯一"))},{default:b((()=>[g(" 数据导入 ")])),_:1}),x(j,{status:"primary",onClick:a[2]||(a[2]=e=>w(T)("数据团队、零售KA团队、零售运营团队"))},{default:b((()=>[g(" 数据下载 ")])),_:1}),x(j,{status:"primary",content:"发布",onClick:a[3]||(a[3]=e=>w(T)("仅数据团队操作。有勾选按勾选，不勾选按查询条件；只有自己创建的草稿状态的数据才可以发布；后续所有类似按钮都同样逻辑"))}),x(j,{status:"danger",onClick:a[4]||(a[4]=e=>w(T)("只能删除自己创建的草稿状态数据，批量删除，勾选则删除勾选，不勾选按查询条件；所有发布、删除、生效、失效操作，都要有confirm提示框")),content:"删除"})])),operations:b((({row:e})=>[x(j,{status:"primary",onClick:a[5]||(a[5]=e=>w(T)("仅能编辑客户级别，任何状态都可以编辑")),content:"编辑"}),"失效"===e.status?(v(),_(j,{key:0,status:"danger",onClick:a[6]||(a[6]=e=>w(T)("只有失效的才可以生效")),content:"生效"})):U("v-if",!0),"生效"===e.status?(v(),_(j,{key:1,status:"danger",onClick:a[7]||(a[7]=e=>w(T)("只有生效的才可以失效")),content:"失效"})):U("v-if",!0)])),_:1},16),x(R,{modelValue:w(O).showCreator,"onUpdate:modelValue":a[9]||(a[9]=e=>w(O).showCreator=e),title:"新建总部客户级别",resize:"","destroy-on-close":""},{default:b((()=>[x(P,{data:w(O).formData,rules:w(O).formRules,items:w(O).formItems,"title-align":"right","title-width":"150"},{year:b((({data:e})=>[x(l,{modelValue:e.year,"onUpdate:modelValue":a=>e.year=a},null,8,["modelValue","onUpdate:modelValue"])])),headquarter:b((({data:e})=>[x(t,{modelValue:e.headquarter,"onUpdate:modelValue":a=>e.headquarter=a},null,8,["modelValue","onUpdate:modelValue"])])),productMix:b((({data:e})=>[x(o,{modelValue:e.productMix,"onUpdate:modelValue":a=>e.productMix=a},null,8,["modelValue","onUpdate:modelValue"])])),levelType:b((({data:e})=>[x(M,{transfer:"",options:[{value:"年度协议级别",label:"年度协议级别"},{value:"年度回溯级别",label:"年度回溯级别"}],placeholder:"级别类型",modelValue:e.levelType,"onUpdate:modelValue":a=>e.levelType=a,clearable:""},null,8,["modelValue","onUpdate:modelValue"])])),level:b((({data:e})=>[x(h,{modelValue:e.level,"onUpdate:modelValue":a=>e.level=a},null,8,["modelValue","onUpdate:modelValue"])])),form_buttons:b((()=>[x(j,{type:"submit",status:"primary"},{default:b((()=>[g("保存")])),_:1}),x(j,{onClick:a[8]||(a[8]=e=>w(O).showCreator=!1)},{default:b((()=>[g("取消")])),_:1})])),_:1},8,["data","rules","items"])])),_:1},8,["modelValue"])])),_:1})}}}),[["__scopeId","data-v-cc67a131"],["__file","C:/Users/ThinkPad/source/Bonbonniere/bonbon-vue/src/views/retail-master-data/RetailCustomerLevelView.vue"]]);export{M as default};
