var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,i=(e,a,t)=>new Promise(((l,o)=>{var n=e=>{try{i(t.next(e))}catch(a){o(a)}},r=e=>{try{i(t.throw(e))}catch(a){o(a)}},i=e=>e.done?l(e.value):Promise.resolve(e.value).then(n,r);i((t=t.apply(e,a)).next())}));import{d,r as s,aQ as p,az as u,bj as c,aV as m,aW as f,aS as y,a as v,aR as b,ca as h,ay as _,ac as V,bk as k,bJ as g,a_ as D,aX as x,cf as w,a$ as U}from"./index.44eff430.js";import{a as C}from"./c-payment-inventory.service.2a7f2e3b.js";import{r as E}from"./routerHelper.692f5c09.js";import{g as B,a as j,b as P}from"./vxeTableHelper.6baae079.js";import{c as R}from"./temporary-data.4dfd9cc4.js";import{_ as S}from"./index.a1613b4e.js";const O=U(d({__name:"BenefitReclaimPaymentList",setup(e){const d=s(),U=p(),O=u((T=((e,a)=>{for(var t in a||(a={}))o.call(a,t)&&r(e,t,a[t]);if(l)for(var t of l(a))n.call(a,t)&&r(e,t,a[t]);return e})({},B("ReclaimPaymentList",C)),a(T,t({formConfig:{items:[{field:"name",itemRender:{},slots:{default:"search_name"}},{field:"status",itemRender:{},slots:{default:"search_status"}},{field:"approvedDateBegin",folding:!0,itemRender:{},slots:{default:"search_approvedDateBegin"}},{field:"approvedDateEnd",folding:!0,itemRender:{},slots:{default:"search_approvedDateEnd"}},{field:"amountStart",folding:!0,itemRender:{},slots:{default:"search_amountStart"}},{field:"amountEnd",folding:!0,itemRender:{},slots:{default:"search_amountEnd"}},{collapseNode:!0,itemRender:{},slots:{default:"search_operation"}}]},columns:[{field:"checkbox",type:"checkbox",width:50,align:"center",fixed:"left"},{field:"#",type:"seq",width:60},{field:"name",title:"结算报告名称",width:300,slots:{default:"name_link"}},{field:"totalAmount",title:"回收总金额",width:150,titlePrefix:{content:"如果是商务经理或者区域商务总监来查看，需要根据其可查看数据的权限，重新汇总计算",icon:"vxe-icon-question-circle-fill"}},{field:"createdDate",title:"提交日期",width:150},{field:"approvedDate",title:"审批完成日期",width:150},{field:"approvalStatus",title:"审批状态",width:150,fixed:"right"},{title:"操作",align:"left",width:160,fixed:"right",titlePrefix:{content:"按钮名称仅为了展示功能。实际是查看按钮，进入详情后，根据角色和表单状态设置按钮可见"},slots:{default:"operations"}}]}))));var T;const L=s(R),q=()=>i(this,null,(function*(){"confirm"===(yield P("数据团队提交报告后，商务经理可进补充调整一级商"))&&E(U,"payment-benefit-reclaim-calculate")})),H=e=>i(this,null,(function*(){"confirm"===(yield P("计算中"===e.approvalStatus?"数据团队核验":"商务总监核验，对于所管大区内所有省份的数据进行核验通过或拒绝\n  不针对单条或单个省，针对所有数据进行通过或拒绝"))&&E(U,"计算中"===e.approvalStatus?"payment-benefit-reclaim-check-calculate":"payment-benefit-reclaim-confirm-calculate")}));return(e,a)=>{const t=c("vxe-input"),l=c("vxe-option"),o=c("vxe-select"),n=c("vxe-button"),r=S,i=c("vxe-grid"),s=c("page-container");return m(),f(s,null,{default:y((()=>[v(i,w({ref_key:"xGrid",ref:d},_(O)),{search_name:y((({data:e})=>[v(t,{modelValue:e.name,"onUpdate:modelValue":a=>e.name=a,type:"text",placeholder:"报告名称"},null,8,["modelValue","onUpdate:modelValue"])])),search_status:y((({data:e})=>[v(o,{modelValue:e.status,"onUpdate:modelValue":a=>e.status=a,transfer:"",clearable:"",placeholder:"审批状态"},{default:y((()=>[(m(!0),b(V,null,h(_(L),(e=>(m(),f(l,{key:e.value,value:e.value,label:e.label},null,8,["value","label"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),search_startDateBegin:y((({data:e})=>[v(t,{modelValue:e.startDateBegin,"onUpdate:modelValue":a=>e.startDateBegin=a,type:"date",placeholder:"结算开始日期从"},null,8,["modelValue","onUpdate:modelValue"])])),search_startDateEnd:y((({data:e})=>[v(t,{modelValue:e.startDateEnd,"onUpdate:modelValue":a=>e.startDateEnd=a,type:"date",placeholder:"结算开始日期到"},null,8,["modelValue","onUpdate:modelValue"])])),search_endDateBegin:y((({data:e})=>[v(t,{modelValue:e.endDateBegin,"onUpdate:modelValue":a=>e.endDateBegin=a,type:"date",placeholder:"结算结束日期从"},null,8,["modelValue","onUpdate:modelValue"])])),search_endDateEnd:y((({data:e})=>[v(t,{modelValue:e.endDateEnd,"onUpdate:modelValue":a=>e.endDateEnd=a,type:"date",placeholder:"结算结束日期到"},null,8,["modelValue","onUpdate:modelValue"])])),search_approvedDateBegin:y((({data:e})=>[v(t,{modelValue:e.approvedDateBegin,"onUpdate:modelValue":a=>e.approvedDateBegin=a,type:"date",placeholder:"审批完成日期从"},null,8,["modelValue","onUpdate:modelValue"])])),search_approvedDateEnd:y((({data:e})=>[v(t,{modelValue:e.approvedDateEnd,"onUpdate:modelValue":a=>e.approvedDateEnd=a,type:"date",placeholder:"审批完成日期到"},null,8,["modelValue","onUpdate:modelValue"])])),search_operation:y((()=>[v(n,{type:"submit",status:"primary",content:"搜索"}),v(n,{type:"download",status:"primary",content:"下载报告",onClick:a[0]||(a[0]=e=>_(j)("只能下载单个报告"))})])),toolbar_buttons:y((()=>[v(n,{onClick:a[1]||(a[1]=e=>_(E)(_(U),"payment-benefit-reclaim-create")),type:"create",status:"primary",content:"创建报告"}),v(n,{onClick:a[2]||(a[2]=e=>_(j)("至少勾选一条数据；只有草稿状态的报告才允许取消")),type:"cancel",status:"primary",content:"取消报告"}),v(n,{onClick:a[3]||(a[3]=e=>_(j)("至少勾选一条数据；只有审批通过的报告才允许停用")),type:"stop",status:"primary",content:"停用报告"}),v(n,{onClick:a[4]||(a[4]=e=>_(j)("至少勾选一条数据；只有状态为“待审批”的报告允许提交审批；提交审批后，弹出结算审批申请单")),type:"approval",status:"primary",content:"提交审批"})])),name_link:y((({row:e})=>[k("span",{class:"name-link",onClick:a[5]||(a[5]=e=>_(j)("进入表单，根据角色和状态控制显示的内容和按钮"))},g(e.name),1)])),sub_type:y((({row:e})=>[v(r,{color:"单中标价下调"===e.subType?"green":"单出厂价下调"===e.subType?"cyan":"blue"},{default:y((()=>[D(g(e.subType),1)])),_:2},1032,["color"])])),operations:y((({row:e})=>[x(' <vxe-button title="查看" status="primary" @click="viewRowEvent(row)">查看</vxe-button> '),"草稿"===e.approvalStatus?(m(),f(n,{key:0,title:"编辑",status:"primary",onClick:a[6]||(a[6]=e=>_(E)(_(U),"payment-benefit-reclaim-edit"))},{default:y((()=>[D(" 编辑 ")])),_:1})):x("v-if",!0),"计算中"===e.approvalStatus?(m(),f(n,{key:1,title:"填报",status:"primary",onClick:a[7]||(a[7]=e=>q())},{default:y((()=>[D(" 填报 ")])),_:1})):x("v-if",!0),"计算中"===e.approvalStatus?(m(),f(n,{key:2,title:"数据团队核验",status:"primary",onClick:a=>H(e)},{default:y((()=>[D(" 核验 ")])),_:2},1032,["onClick"])):x("v-if",!0),"计算完成"===e.approvalStatus?(m(),f(n,{key:3,title:"发送商务总监",status:"primary",onClick:a[8]||(a[8]=e=>{E(U,"payment-benefit-reclaim-ready-for-finance")})},{default:y((()=>[D(" 发送商务总监 ")])),_:1})):x("v-if",!0),"待商务总监确认"===e.approvalStatus?(m(),f(n,{key:4,title:"商务总监确认",status:"primary",onClick:a=>H(e)},{default:y((()=>[D(" 确认 ")])),_:2},1032,["onClick"])):x("v-if",!0)])),_:1},16)])),_:1})}}}),[["__file","C:/Users/ThinkPad/source/Bonbonniere/bonbon-vue/src/views/c-payment/BenefitReclaimPaymentList.vue"]]);export{O as default};
