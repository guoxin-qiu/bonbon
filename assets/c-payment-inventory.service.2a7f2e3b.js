var t=(t,a,e)=>new Promise(((p,n)=>{var r=t=>{try{u(e.next(t))}catch(a){n(a)}},o=t=>{try{u(e.throw(t))}catch(a){n(a)}},u=t=>t.done?p(t.value):Promise.resolve(t.value).then(r,o);u((e=e.apply(t,a)).next())}));function a(a){return t(this,null,(function*(){const t=null==a?void 0:a.subType,e=[{id:1,name:"单中标价下调库存结算报告-草稿",type:"库存补偿",subType:"单中标价下调",startDate:"2022-03-01",endDate:"2022-05-30",totalAmount:0,createdDate:"2022-06-11",approvedDate:null,approvalStatus:"草稿"},{id:2,name:"单中标价下调库存结算报告-计算中",type:"库存补偿",subType:"单中标价下调",startDate:"2022-09-01",endDate:"2022-11-30",totalAmount:3290.91,createdDate:"2022-12-18",approvedDate:"",approvalStatus:"计算中"},{id:3,name:"单中标价下调库存结算报告-计算完成",type:"库存补偿",subType:"单中标价下调",startDate:"2022-09-01",endDate:"2022-11-30",totalAmount:1875,createdDate:"2022-12-18",approvedDate:"",approvalStatus:"计算完成"},{id:4,name:"单中标价下调库存结算报告-待商务总监确认",type:"库存补偿",subType:"单中标价下调",startDate:"2022-09-01",endDate:"2022-11-30",totalAmount:318391.39,createdDate:"2022-12-18",approvedDate:"",approvalStatus:"待商务总监确认"},{id:5,name:"单出厂价下调库存结算报告-草稿",type:"库存补偿",subType:"单出厂价下调",startDate:"2022-06-01",endDate:"2022-08-30",totalAmount:"",createdDate:"2022-09-03",approvedDate:null,approvalStatus:"草稿"},{id:6,name:"单出厂价下调库存结算报告-计算中",type:"库存补偿",subType:"单出厂价下调",startDate:"2022-06-01",endDate:"2022-08-30",totalAmount:3901.31,createdDate:"2022-09-03",approvedDate:null,approvalStatus:"计算中"},{id:7,name:"单出厂价下调库存结算报告-计算完成",type:"库存补偿",subType:"单出厂价下调",startDate:"2022-06-01",endDate:"2022-08-30",totalAmount:9103.11,createdDate:"2022-09-03",approvedDate:null,approvalStatus:"计算完成"},{id:8,name:"单出厂价下调库存结算报告-待商务总监确认",type:"库存补偿",subType:"单出厂价下调",startDate:"2022-06-01",endDate:"2022-08-30",totalAmount:78651,createdDate:"2022-09-03",approvedDate:null,approvalStatus:"待商务总监确认"},{id:9,name:"中标价&出厂价同时下调库存结算报告-草稿",type:"库存补偿",subType:"中标价&出厂价同时下调",startDate:"2022-06-01",endDate:"2022-08-30",totalAmount:"",createdDate:"2022-09-03",approvedDate:null,approvalStatus:"草稿"},{id:10,name:"中标价&出厂价同时下调库存结算报告-计算中",type:"库存补偿",subType:"中标价&出厂价同时下调",startDate:"2022-06-01",endDate:"2022-08-30",totalAmount:3901.31,createdDate:"2022-09-03",approvedDate:null,approvalStatus:"计算中"},{id:11,name:"中标价&出厂价同时下调库存结算报告-计算完成",type:"库存补偿",subType:"中标价&出厂价同时下调",startDate:"2022-06-01",endDate:"2022-08-30",totalAmount:9103.11,createdDate:"2022-09-03",approvedDate:null,approvalStatus:"计算完成"},{id:12,name:"中标价&出厂价同时下调库存结算报告-待商务总监确认",type:"库存补偿",subType:"中标价&出厂价同时下调",startDate:"2022-06-01",endDate:"2022-08-30",totalAmount:78651,createdDate:"2022-09-03",approvedDate:null,approvalStatus:"待商务总监确认"}],p=t?e.filter((a=>a.subType===t)):e;return{success:!0,code:200,message:"",data:{list:p,count:p.length}}}))}function e(){return t(this,null,(function*(){const t=[{id:1,name:"利润回收结算报告-草稿",startDate:"2022-03-01",endDate:"2022-05-30",totalAmount:0,createdDate:"2022-06-11",approvedDate:"",approvalStatus:"草稿"},{id:2,name:"利润回收结算报告-计算中",startDate:"2022-09-01",endDate:"2022-11-30",totalAmount:3290.91,createdDate:"2022-12-18",approvedDate:"",approvalStatus:"计算中"},{id:3,name:"利润回收结算报告-计算完成",startDate:"2022-09-01",endDate:"2022-11-30",totalAmount:1875,createdDate:"2022-12-18",approvedDate:"",approvalStatus:"计算完成"},{id:4,name:"利润回收结算报告-待商务总监确认",startDate:"2022-09-01",endDate:"2022-11-30",totalAmount:318391.39,createdDate:"2022-12-18",approvedDate:"",approvalStatus:"待商务总监确认"}];return{success:!0,code:200,message:"",data:{list:t,count:t.length}}}))}export{e as a,a as g};
