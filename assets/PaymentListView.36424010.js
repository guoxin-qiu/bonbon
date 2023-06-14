var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l;import{d as s,r as i,aQ as p,az as d,bj as u,aV as c,aW as f,aS as m,a as y,bk as b,bJ as h,ay as v,aR as _,ca as g,ac as w,a_ as k,aX as x,cf as j,a$ as V}from"./index.44eff430.js";import{g as C,a as O,b as P}from"./other-payment.service.bad70aa5.js";import{g as R,a as $}from"./vxeTableHelper.6baae079.js";import{r as D}from"./routerHelper.692f5c09.js";const U=V(s({__name:"PaymentListView",setup(e){const s=i(),V=p(),U=C(),S=O(),N=d((H=((e,t)=>{for(var a in t||(t={}))r.call(t,a)&&n(e,a,t[a]);if(l)for(var a of l(t))o.call(t,a)&&n(e,a,t[a]);return e})({},R("grid",P)),t(H,a({formConfig:{items:[{folding:!1,itemRender:{name:"$input",props:{placeholder:"报告名称"}}},{folding:!1,slots:{default:"search_report_type"}},{folding:!1,slots:{default:"search_status"}},{folding:!0,itemRender:{name:"$input",props:{type:"date",placeholder:"结算开始日期从"}}},{folding:!0,itemRender:{name:"$input",props:{type:"date",placeholder:"结算开始日期到"}}},{folding:!0,itemRender:{name:"$input",props:{type:"date",placeholder:"结算结束日期从"}}},{folding:!0,itemRender:{name:"$input",props:{type:"date",placeholder:"结算结束日期到"}}},{collapseNode:!0,itemRender:{},slots:{default:"search_operation"}}]},columns:[{field:"checkbox",type:"checkbox",width:50,align:"center",fixed:"left"},{field:"cnName",title:"报告名称",width:300,slots:{default:"name_link"}},{field:"type",title:"类型",width:180},{field:"startDate",title:"结算开始日期",width:150},{field:"endDate",title:"结算结束日期",width:150},{field:"amount",title:"补偿总金额",width:150},{field:"reAmount",title:"待回收总金额",width:150},{field:"submitDate",title:"提交日期",width:150},{field:"approvedDate",title:"审批完成日期",width:150},{field:"approvalStatus",title:"审批状态",width:150,fixed:"right"},{title:"操作",align:"center",width:120,fixed:"right",slots:{default:"operations"}}]}))));var H;const L=()=>{D(V,"payment-others-create")};return(e,t)=>{const a=u("vxe-option"),l=u("vxe-select"),r=u("vxe-button"),o=u("vxe-grid"),n=u("page-container");return c(),f(n,null,{default:m((()=>[y(o,j({ref_key:"xGrid",ref:s},v(N)),{name_link:m((({row:e})=>[b("span",{class:"name-link",onClick:t[0]||(t[0]=e=>v($)("进入表单，根据角色和状态控制显示的内容和按钮"))},h(e.cnName),1)])),search_report_type:m((({data:e})=>[y(l,{modelValue:e.report_type,"onUpdate:modelValue":t=>e.report_type=t,transfer:"",clearable:"",placeholder:"类型"},{default:m((()=>[(c(!0),_(w,null,g(v(S),(e=>(c(),f(a,{key:e.value,value:e.value,label:e.label},null,8,["value","label"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),search_status:m((({data:e})=>[y(l,{modelValue:e.status,"onUpdate:modelValue":t=>e.status=t,transfer:"",clearable:"",placeholder:"审批状态"},{default:m((()=>[(c(!0),_(w,null,g(v(U),(e=>(c(),f(a,{key:e.value,value:e.value,label:e.label},null,8,["value","label"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),search_operation:m((()=>[y(r,{status:"primary",type:"submit"},{default:m((()=>[k("搜索")])),_:1})])),toolbar_buttons:m((()=>[y(r,{onClick:L,type:"create",status:"primary",content:"创建报告"}),y(r,{onClick:t[1]||(t[1]=e=>v($)("至少勾选一条数据；只有草稿状态的报告才允许取消")),type:"cancel",status:"primary",content:"取消报告"}),y(r,{onClick:t[2]||(t[2]=e=>v($)("至少勾选一条数据；只有审批通过的报告才允许停用")),type:"stop",status:"primary",content:"停用报告"}),y(r,{onClick:t[3]||(t[3]=e=>v($)("至少勾选一条数据；只有状态为“待审批”的报告允许提交审批；提交审批后，弹出结算审批申请单")),type:"approval",status:"primary",content:"提交审批"}),y(r,{onClick:t[4]||(t[4]=e=>v($)("数据团队、审批链上所有角色、商务经理、商务总监，可以看到所有的数据")),status:"danger",content:"业务说明"})])),operations:m((({row:e})=>["草稿"===e.approvalStatus?(c(),f(r,{key:0,content:"编辑",status:"primary",onClick:t[5]||(t[5]=e=>v($)("只有草稿状态可以编辑。"))})):x("v-if",!0)])),_:1},16)])),_:1})}}}),[["__file","C:/Users/ThinkPad/source/Bonbonniere/bonbon-vue/src/views/other-payment/PaymentListView.vue"]]);export{U as default};
