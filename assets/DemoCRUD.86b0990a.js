var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,r=(e,a,t)=>new Promise(((l,s)=>{var o=e=>{try{r(t.next(e))}catch(a){s(a)}},i=e=>{try{r(t.throw(e))}catch(a){s(a)}},r=e=>e.done?l(e.value):Promise.resolve(e.value).then(o,i);r((t=t.apply(e,a)).next())}));import{ce as n,d,r as u,bn as m,az as c,bj as f,aV as p,aW as v,aS as h,a as b,aR as w,ca as g,ay as y,ac as U,a_ as _,bk as V,bJ as x,cf as R,aX as D,cg as k,ch as C,a$ as E}from"./index.44eff430.js";import{g as O}from"./vxeTableHelper.6baae079.js";function j(e){return n.get({url:"/api/users",data:e})}const P=["onClick"],S=E(d({__name:"DemoCRUD",setup(e){const d=u(),E=u([{value:"ADMIN",label:"Admin"},{value:"USER",label:"User"}]),S=m(),N=c((L=((e,a)=>{for(var t in a||(a={}))s.call(a,t)&&i(e,t,a[t]);if(l)for(var t of l(a))o.call(a,t)&&i(e,t,a[t]);return e})({},O("CRUDGrid",j)),q={formConfig:{items:[{field:"name",title:"Name",itemRender:{},slots:{default:"search_name"}},{field:"role",title:"Role",itemRender:{},slots:{default:"search_role"}},{itemRender:{},slots:{default:"search_operation"}}]},columns:[{field:"checkbox",type:"checkbox",width:50,align:"center",fixed:"left"},{field:"#",type:"seq",width:60},{field:"id",title:"ID",width:100,slots:{default:"id_link"}},{field:"name",title:"Name",sortable:!0,width:200,titlePrefix:{content:"Custom",icon:"vxe-icon-question-circle-fill"}},{field:"email",title:"Email",sortable:!0,width:200},{field:"passwordHash",title:"Password",sortable:!1,width:600,titlePrefix:{useHTML:!0,content:'<a class="link" href="javascript:alert(123456);">Check the password</a>'}},{field:"avatarUrl",title:"AvatarUrl",width:100,showOverflow:!0,slots:{default:"avatarUrl"}},{field:"role",title:"Role",sortable:!0,width:100,filters:E.value},{field:"operation",title:"Operation",align:"center",width:180,fixed:"right",slots:{default:"operations"}}]},a(L,t(q))));var L,q;const A=c({submitLoading:!1,tableData:[],selectRow:null,showEdit:!1,formData:{id:0,name:"",email:"",avatarUrl:"",role:""},formRules:{name:[{required:!0,message:"please input name"},{min:5,message:"No less than 5 characters"}],email:[{required:!0,message:"please input email"}],role:[{required:!0,message:"please select role"}]}}),H=e=>r(this,null,(function*(){d.value&&k.modal.message({content:`Name: ${e.name}`,status:"info"})})),I=()=>{A.formData={id:0,name:"",email:"",avatarUrl:"",role:""},A.selectRow=null,A.showEdit=!0},T=e=>r(this,null,(function*(){const a=yield k.modal.confirm("Are you sure to remove the data you selected?"),t=d.value;if(t&&"confirm"===a){const a=yield(l=e.id,n.delete({url:"/api/users/:id",placeHolders:{id:l}}));a.success?(k.modal.message({content:"Delete Success",status:"success"}),yield t.remove(e)):k.modal.message({content:a.message,status:"error"})}var l})),z=()=>r(this,null,(function*(){A.submitLoading=!0;const e=d.value;if(A.selectRow){const e=yield(a=A.formData,n.put({url:"/api/users",data:a}));A.submitLoading=!1,e.success?(k.modal.message({content:"Edit Success",status:"success"}),Object.assign(A.selectRow,e.data),A.showEdit=!1):k.modal.message({content:e.message,status:"error"})}else{const a=yield function(e){return n.post({url:"/api/users",data:e})}(A.formData);A.submitLoading=!1,a.success?(k.modal.message({content:"Create Success",status:"success"}),e.insert(a.data),A.showEdit=!1):k.modal.message({content:a.message,status:"error"})}var a}));return(e,a)=>{const t=f("vxe-input"),l=f("vxe-option"),s=f("vxe-select"),o=f("vxe-button"),i=C,r=f("vxe-grid"),n=f("vxe-form-item"),u=f("vxe-form"),m=f("vxe-modal"),c=f("page-container");return p(),v(c,{title:y(S).meta.title,"sub-title":"Normal CRUD Demo"},{default:h((()=>[b(r,R({ref_key:"xGrid",ref:d},y(N)),{search_name:h((({data:e})=>[b(t,{modelValue:e.name,"onUpdate:modelValue":a=>e.name=a,type:"text",placeholder:"please input name"},null,8,["modelValue","onUpdate:modelValue"])])),search_role:h((({data:e})=>[b(s,{modelValue:e.role,"onUpdate:modelValue":a=>e.role=a,transfer:"",clearable:""},{default:h((()=>[(p(!0),w(U,null,g(y(E),(e=>(p(),v(l,{key:e.value,value:e.value,label:e.label},null,8,["value","label"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),search_operation:h((()=>[b(o,{type:"submit",status:"primary",content:"Search"}),b(o,{type:"reset",content:"Reset"})])),toolbar_buttons:h((()=>[b(o,{onClick:I},{default:h((()=>[_("Create")])),_:1})])),operations:h((({row:e})=>[b(o,{title:"Edit",status:"primary",onClick:a=>(e=>{A.formData={id:e.id,name:e.name,email:e.email,role:e.role,avatarUrl:e.avatarUrl},A.selectRow=e,A.showEdit=!0})(e)},{default:h((()=>[_("Edit")])),_:2},1032,["onClick"]),b(o,{title:"Delete",status:"danger",onClick:a=>T(e)},{default:h((()=>[_("Delete")])),_:2},1032,["onClick"])])),id_link:h((({row:e})=>[V("span",{style:{color:"blue","text-decoration":"underline",cursor:"pointer"},onClick:a=>H(e)},x(e.id),9,P)])),avatarUrl:h((({row:e})=>[b(i,{src:e.avatarUrl},null,8,["src"])])),_:1},16),b(m,{modelValue:y(A).showEdit,"onUpdate:modelValue":a[0]||(a[0]=e=>y(A).showEdit=e),title:y(A).selectRow?"Edit&Save":"Create&Save",width:"800","min-width":"600","min-height":"300",loading:y(A).submitLoading,resize:"","destroy-on-close":""},{default:h((()=>[b(u,{data:y(A).formData,rules:y(A).formRules,"title-align":"right","title-width":"100",onSubmit:z},{default:h((()=>[b(n,{title:"Basic information","title-align":"left","title-width":200,span:24,"title-prefix":{icon:"vxe-icon-comment"}}),b(n,{field:"name",title:"Name",span:12,"item-render":{}},{default:h((({data:e})=>[b(t,{modelValue:e.name,"onUpdate:modelValue":a=>e.name=a,placeholder:"please input name"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),b(n,{field:"email",title:"Email",span:12,"item-render":{}},{default:h((({data:e})=>[b(t,{modelValue:e.email,"onUpdate:modelValue":a=>e.email=a,placeholder:"please input email",disabled:!!y(A).selectRow},null,8,["modelValue","onUpdate:modelValue","disabled"])])),_:1}),b(n,{field:"role",title:"Role",span:12,"item-render":{}},{default:h((({data:e})=>[b(s,{modelValue:e.role,"onUpdate:modelValue":a=>e.role=a,transfer:""},{default:h((()=>[(p(!0),w(U,null,g(y(E),(e=>(p(),v(l,{key:e.value,value:e.value,label:e.label},null,8,["value","label"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1}),b(n,{field:"avatarUrl",title:"Avatar",span:12,"item-render":{}},{default:h((({data:e})=>[b(t,{modelValue:e.avatarUrl,"onUpdate:modelValue":a=>e.avatarUrl=a,placeholder:"please input avatar"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),b(n,{align:"center","title-align":"left",span:24},{default:h((()=>[b(o,{type:"submit"},{default:h((()=>[_("Submit")])),_:1}),y(A).selectRow?D("v-if",!0):(p(),v(o,{key:0,type:"reset"},{default:h((()=>[_("Reset")])),_:1}))])),_:1})])),_:1},8,["data","rules"])])),_:1},8,["modelValue","title","loading"])])),_:1},8,["title"])}}}),[["__file","C:/Users/ThinkPad/source/Bonbonniere/bonbon-vue/src/views/demo/DemoCRUD.vue"]]);export{S as default};
