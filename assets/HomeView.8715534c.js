import{d as e,r as t,bg as i,b0 as a,bh as n,bi as s,al as o,ae as l,aV as r,aR as u,a$ as d,az as p,bj as c,aW as m,aS as x,aX as v,bk as y,a as b,ay as A}from"./index.44eff430.js";const g=d(e({__name:"index",props:{option:{type:Object,required:!0}},setup(e){const d=e,p=t();let c;const m=i.exports.debounce((()=>{null==c||c.resize()}),500);return a((()=>{c=n(s(p.value,void 0,{renderer:"svg"})),c.setOption(d.option,!0),window.addEventListener("resize",m)})),o((()=>{window.removeEventListener("resize",m),null==c||c.dispose()})),l((()=>d.option),(()=>{null==c||c.setOption(d.option,!0)}),{deep:!0}),(e,t)=>(r(),u("div",{ref_key:"chartDom",ref:p,class:"chart"},null,512))}}),[["__scopeId","data-v-6b29cd3f"],["__file","C:/Users/ThinkPad/source/Bonbonniere/bonbon-vue/src/components/demo-echarts/index.vue"]]),f=e=>({title:{text:e.title,subtext:e.subTitle,subtextStyle:{fontSize:11},left:"46%",textAlign:"center"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},valueFormatter:t=>`${t}${e.yUnit}`},grid:{top:"25%",left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:e.xAxis,axisTick:{alignWithLabel:!0},axisLabel:{interval:0,rotate:e.xLabelRotate?20:0,fontSize:10}}],yAxis:[{type:"value",axisLabel:{formatter:`{value} ${e.yUnit}`}}],legend:{show:!0,top:"17%",icon:"circle",itemHeight:9,textStyle:{fontSize:10,color:"#333",padding:[0,0,0,-8]},data:e.yAxisArr.length>1?e.yAxisArr.map((e=>e.yName)):[]},series:e.yAxisArr.map((t=>({name:t.yName,type:"bar",data:t.yAxis,barWidth:60/e.yAxisArr.length+"%",label:{show:!0,position:"top",fontSize:11}})))}),h=e=>({title:{text:e.title,subtext:e.subTitle,subtextStyle:{fontSize:11},left:"center"},tooltip:{trigger:"item",valueFormatter:t=>`${t}${e.unit}`},legend:{top:"17%",icon:"circle",itemHeight:9,textStyle:{fontSize:10,color:"#333",padding:[0,0,0,-8]}},series:[{name:e.name,type:"pie",radius:e.isRing?["45%","80%"]:"75%",startAngle:270,top:"22%",label:{show:!0,position:"inner",fontSize:10,formatter:t=>{var i;return`${t.value}${e.unit}\n${null==(i=t.percent)?void 0:i.toFixed()}%`}},data:e.data}]}),S=f({title:"补偿结算报告",subTitle:"当年度&上一年度已审批通过",xAxis:["招标补偿","库存补偿","利润回收","项目补偿","零售返利"],yAxisArr:[{yName:"Count",yAxis:[37,42,56,27,16]}],yUnit:"份"}),T=f({title:"补偿结算金额",subTitle:"当年度已审批通过 - 718.9M",xAxis:["招标补偿","库存补偿","利润回收","项目补偿","零售返利"],yAxisArr:[{yName:"Amount",yAxis:[359,258,26,1.9,47]}],yUnit:"M"}),_=f({title:"零售返利结算金额",subTitle:"2022&2023年度零售KA返利结算金额 - 484M",xAxis:["Q1","Q2","Q3","Q4"],yAxisArr:[{yName:"2022",yAxis:[33,44,55,66]},{yName:"2023",yAxis:[45,76,126,39]}],yUnit:"M"}),w=h({title:"补偿结算金额-产品类型",subTitle:"当年度已审批通过",name:"Amount",unit:"M",isRing:!0,data:[{value:390,name:"Import"},{value:470,name:"Local"}]}),z=h({title:"补偿结算金额",subTitle:"当年度已审批通过 - 718.9M",name:"Amount",unit:"M",isRing:!0,data:[{value:359,name:"招标补偿"},{value:258,name:"库存补偿"},{value:26,name:"利润回收"},{value:1.9,name:"项目补偿"},{value:47,name:"零售返利"}]}),$=h({title:"补偿方案",subTitle:"当季度&上一季度",name:"Count",unit:"份",data:[{value:821,name:"草稿"},{value:560,name:"审批中"},{value:711,name:"审批通过"},{value:68,name:"审批拒绝"}]}),L=f({title:"零售返利结算报告",subTitle:"当年度&上一年度已审批通过",xAxis:["零售KA","新商业项目","商业项目"],yAxisArr:[{yName:"Amount",yAxis:[52,16,9]}],yUnit:"份"}),U={class:"container"},M={class:"card"},N={class:"card"},k={class:"card"},R={class:"card"},C={class:"card"},H={class:"card"},Q={class:"card"},j=d(e({__name:"HomeView",setup(e){p({slt:"数据团队"});return(e,t)=>{c("vxe-select");const i=g,a=c("page-container");return r(),m(a,null,{default:x((()=>[v("v-if",!0),y("div",U,[y("div",M,[b(i,{option:A(S)},null,8,["option"])]),y("div",N,[b(i,{option:A(T)},null,8,["option"])]),y("div",k,[b(i,{option:A(_)},null,8,["option"])]),y("div",R,[b(i,{option:A(w)},null,8,["option"])]),y("div",C,[b(i,{option:A(z)},null,8,["option"])]),y("div",H,[b(i,{option:A($)},null,8,["option"])]),y("div",Q,[b(i,{option:A(L)},null,8,["option"])])])])),_:1})}}}),[["__file","C:/Users/ThinkPad/source/Bonbonniere/bonbon-vue/src/views/home/HomeView.vue"]]);export{j as default};
