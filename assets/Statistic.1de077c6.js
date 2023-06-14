import{bq as t,a as e,_ as n,a8 as a,r as l,ac as o,br as r,bs as c,bt as i,h as u,P as s,d as f,u as d,bu as p,b8 as v,W as y,al as b,a7 as m,bv as S,a9 as x,b9 as g,bw as h,b as C,aG as w,bl as j,V as k,c as O,aD as D}from"./index.44eff430.js";import{a as E,b as B,t as N}from"./toInteger.87b1adf8.js";var A=Math.floor;function M(t,e){var n="";if(!t||e<1||e>9007199254740991)return n;do{e%2&&(n+=t),(e=A(e/2))&&(t+=t)}while(e);return n}var z=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");function I(t){return z.test(t)}const P=B("length");var R="\\ud800-\\udfff",q="["+R+"]",L="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",_="\\ud83c[\\udffb-\\udfff]",G="[^"+R+"]",H="(?:\\ud83c[\\udde6-\\uddff]){2}",T="[\\ud800-\\udbff][\\udc00-\\udfff]",V="(?:"+L+"|"+_+")"+"?",W="[\\ufe0e\\ufe0f]?",$=W+V+("(?:\\u200d(?:"+[G,H,T].join("|")+")"+W+V+")*"),F="(?:"+[G+L+"?",L,H,T,q].join("|")+")",J=RegExp(_+"(?="+_+")|"+F+$,"g");function K(t){return I(t)?function(t){for(var e=J.lastIndex=0;J.test(t);)++e;return e}(t):P(t)}var Q="\\ud800-\\udfff",U="["+Q+"]",X="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",Y="\\ud83c[\\udffb-\\udfff]",Z="[^"+Q+"]",tt="(?:\\ud83c[\\udde6-\\uddff]){2}",et="[\\ud800-\\udbff][\\udc00-\\udfff]",nt="(?:"+X+"|"+Y+")"+"?",at="[\\ufe0e\\ufe0f]?",lt=at+nt+("(?:\\u200d(?:"+[Z,tt,et].join("|")+")"+at+nt+")*"),ot="(?:"+[Z+X+"?",X,tt,et,U].join("|")+")",rt=RegExp(Y+"(?="+Y+")|"+ot+lt,"g");function ct(t){return I(t)?function(t){return t.match(rt)||[]}(t):function(t){return t.split("")}(t)}var it=Math.ceil;function ut(e,n){var a=(n=void 0===n?" ":t(n)).length;if(a<2)return a?M(n,e):n;var l=M(n,it(e/K(n)));return I(n)?function(t,e,n){var a=t.length;return n=void 0===n?a:n,!e&&n>=a?t:E(t,e,n)}(ct(l),0,e).join(""):l.slice(0,e)}function st(t){return null!=t}const ft=function(t){var a,l=t.itemPrefixCls,o=t.component,r=t.span,c=t.labelStyle,i=t.contentStyle,u=t.bordered,s=t.label,f=t.content,d=t.colon,p=o;return u?e(p,{class:[(a={},n(a,"".concat(l,"-item-label"),st(s)),n(a,"".concat(l,"-item-content"),st(f)),a)],colSpan:r},{default:function(){return[st(s)&&e("span",{style:c},[s]),st(f)&&e("span",{style:i},[f])]}}):e(p,{class:["".concat(l,"-item")],colSpan:r},{default:function(){return[e("div",{class:"".concat(l,"-item-container")},[s&&e("span",{class:["".concat(l,"-item-label"),n({},"".concat(l,"-item-no-colon"),!d)],style:c},[s]),f&&e("span",{class:"".concat(l,"-item-content"),style:i},[f])])]}})};const dt=function(t){var n=function(t,n,a){var l=n.colon,o=n.prefixCls,s=n.bordered,f=a.component,d=a.type,p=a.showLabel,v=a.showContent,y=a.labelStyle,b=a.contentStyle;return t.map((function(t,n){var a,m,S=t.props||{},x=S.prefixCls,g=void 0===x?o:x,h=S.span,C=void 0===h?1:h,w=S.labelStyle,j=void 0===w?S["label-style"]:w,k=S.contentStyle,O=void 0===k?S["content-style"]:k,D=S.label,E=void 0===D?null===(a=t.children)||void 0===a||null===(m=a.label)||void 0===m?void 0:m.call(a):D,B=r(t),N=c(t),A=i(t),M=t.key;return"string"==typeof f?e(ft,{key:"".concat(d,"-").concat(String(M)||n),class:N,style:A,labelStyle:u(u({},y),j),contentStyle:u(u({},b),O),span:C,colon:l,component:f,itemPrefixCls:g,bordered:s,label:p?E:null,content:v?B:null},null):[e(ft,{key:"label-".concat(String(M)||n),class:N,style:u(u(u({},y),A),j),span:1,colon:l,component:f[0],itemPrefixCls:g,bordered:s,label:E},null),e(ft,{key:"content-".concat(String(M)||n),class:N,style:u(u(u({},b),A),O),span:2*C-1,component:f[1],itemPrefixCls:g,bordered:s,content:B},null)]}))},s=t.prefixCls,f=t.vertical,d=t.row,p=t.index,v=t.bordered,y=a(bt,{labelStyle:l({}),contentStyle:l({})}),b=y.labelStyle,m=y.contentStyle;return f?e(o,null,[e("tr",{key:"label-".concat(p),class:"".concat(s,"-row")},[n(d,t,{component:"th",type:"label",showLabel:!0,labelStyle:b.value,contentStyle:m.value})]),e("tr",{key:"content-".concat(p),class:"".concat(s,"-row")},[n(d,t,{component:"td",type:"content",showContent:!0,labelStyle:b.value,contentStyle:m.value})])]):e("tr",{key:p,class:"".concat(s,"-row")},[n(d,t,{component:v?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0,labelStyle:b.value,contentStyle:m.value})])};s.any;var pt=f({compatConfig:{MODE:3},name:"ADescriptionsItem",props:{prefixCls:String,label:s.any,labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0},span:{type:Number,default:1}},slots:["label"],setup:function(t,e){var n=e.slots;return function(){var t;return null===(t=n.default)||void 0===t?void 0:t.call(n)}}}),vt={xxxl:3,xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function yt(t,e,n){var a=t;return(void 0===e||e>n)&&(a=C(t,{span:n}),w(void 0===e,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),a}var bt=Symbol("descriptionsContext"),mt=f({compatConfig:{MODE:3},name:"ADescriptions",props:{prefixCls:String,bordered:{type:Boolean,default:void 0},size:{type:String,default:"default"},title:s.any,extra:s.any,column:{type:[Number,Object],default:function(){return vt}},layout:String,colon:{type:Boolean,default:void 0},labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0}},slots:["title","extra"],Item:pt,setup:function(t,a){var o,r=a.slots,c=d("descriptions",t),i=c.prefixCls,u=c.direction,s=l({});p((function(){o=v.subscribe((function(e){"object"===y(t.column)&&(s.value=e)}))})),b((function(){v.unsubscribe(o)})),m(bt,{labelStyle:S(t,"labelStyle"),contentStyle:S(t,"contentStyle")});var f=x((function(){return function(t,e){if("number"==typeof t)return t;if("object"===y(t))for(var n=0;n<g.length;n++){var a=g[n];if(e[a]&&void 0!==t[a])return t[a]||vt[a]}return 3}(t.column,s.value)}));return function(){var a,l,o,c,s=t.size,d=t.bordered,p=void 0!==d&&d,v=t.layout,y=void 0===v?"horizontal":v,b=t.colon,m=void 0===b||b,S=t.title,x=void 0===S?null===(a=r.title)||void 0===a?void 0:a.call(r):S,g=t.extra,C=void 0===g?null===(l=r.extra)||void 0===l?void 0:l.call(r):g,w=function(t,e){var n=h(t),a=[],l=[],o=e;return n.forEach((function(t,r){var c,i=null===(c=t.props)||void 0===c?void 0:c.span,u=i||1;if(r===n.length-1)return l.push(yt(t,i,o)),void a.push(l);u<o?(o-=u,l.push(t)):(l.push(yt(t,u,o)),a.push(l),o=e,l=[])})),a}(null===(o=r.default)||void 0===o?void 0:o.call(r),f.value);return e("div",{class:[i.value,(c={},n(c,"".concat(i.value,"-").concat(s),"default"!==s),n(c,"".concat(i.value,"-bordered"),!!p),n(c,"".concat(i.value,"-rtl"),"rtl"===u.value),c)]},[(x||C)&&e("div",{class:"".concat(i.value,"-header")},[x&&e("div",{class:"".concat(i.value,"-title")},[x]),C&&e("div",{class:"".concat(i.value,"-extra")},[C])]),e("div",{class:"".concat(i.value,"-view")},[e("table",null,[e("tbody",null,[w.map((function(t,n){return e(dt,{key:n,index:n,colon:m,prefixCls:i.value,vertical:"vertical"===y,bordered:p,row:t},null)}))])])])])}}});mt.install=function(t){return t.component(mt.name,mt),t.component(mt.Item.name,mt.Item),t};const St=mt;var xt=function(t){var n,a=t.value,l=t.formatter,o=t.precision,r=t.decimalSeparator,c=t.groupSeparator,i=void 0===c?"":c,u=t.prefixCls;if("function"==typeof l)n=l({value:a});else{var s=String(a),f=s.match(/^(-?)(\d*)(\.(\d+))?$/);if(f){var d=f[1],p=f[2]||"0",v=f[4]||"";p=p.replace(/\B(?=(\d{3})+(?!\d))/g,i),"number"==typeof o&&(v=function(t,e,n){t=j(t);var a=(e=N(e))?K(t):0;return e&&a<e?t+ut(e-a,n):t}(v,o,"0").slice(0,o)),v&&(v="".concat(r).concat(v)),n=[e("span",{key:"int",class:"".concat(u,"-content-value-int")},[d,p]),v&&e("span",{key:"decimal",class:"".concat(u,"-content-value-decimal")},[v])]}else n=s}return e("span",{class:"".concat(u,"-content-value")},[n])};xt.displayName="StatisticNumber";const gt=xt;const ht=f({compatConfig:{MODE:3},name:"SkeletonTitle",props:{prefixCls:String,width:{type:[Number,String]}},setup:function(t){return function(){var n=t.prefixCls,a=t.width,l="number"==typeof a?"".concat(a,"px"):a;return e("h3",{class:n,style:{width:l}},null)}}});const Ct=f({compatConfig:{MODE:3},name:"SkeletonParagraph",props:{prefixCls:String,width:{type:[Number,String,Array]},rows:Number},setup:function(t){return function(){var n=t.prefixCls,a=t.rows,l=k(Array(a)).map((function(n,a){var l=function(e){var n=t.width,a=t.rows,l=void 0===a?2:a;return Array.isArray(n)?n[e]:l-1===e?n:void 0}(a);return e("li",{key:a,style:{width:"number"==typeof l?"".concat(l,"px"):l}},null)}));return e("ul",{class:n},[l])}}});var wt=function(t){var a,l,o=t.prefixCls,r=t.size,c=t.shape,i=O((n(a={},"".concat(o,"-lg"),"large"===r),n(a,"".concat(o,"-sm"),"small"===r),a)),u=O((n(l={},"".concat(o,"-circle"),"circle"===c),n(l,"".concat(o,"-square"),"square"===c),n(l,"".concat(o,"-round"),"round"===c),l)),s="number"==typeof r?{width:"".concat(r,"px"),height:"".concat(r,"px"),lineHeight:"".concat(r,"px")}:{};return e("span",{class:O(o,i,u),style:s},null)};wt.displayName="SkeletonElement";const jt=wt;function kt(t){return t&&"object"===y(t)?t:{}}const Ot=f({compatConfig:{MODE:3},name:"ASkeleton",props:D({active:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},prefixCls:String,avatar:{type:[Boolean,Object],default:void 0},title:{type:[Boolean,Object],default:void 0},paragraph:{type:[Boolean,Object],default:void 0},round:{type:Boolean,default:void 0}},{avatar:!1,title:!0,paragraph:!0}),setup:function(t,a){var l=a.slots,o=d("skeleton",t),r=o.prefixCls,c=o.direction;return function(){var a,o=t.loading,i=t.avatar,s=t.title,f=t.paragraph,d=t.active,p=t.round,v=r.value;if(o||void 0===t.loading){var y,b,m,S=!!i||""===i,x=!!s||""===s,g=!!f||""===f;if(S){var h=u(u({prefixCls:"".concat(v,"-avatar")},function(t,e){return t&&!e?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(x,g)),kt(i));b=e("div",{class:"".concat(v,"-header")},[e(jt,h,null)])}if(x||g){var C,w;if(x){var j=u(u({prefixCls:"".concat(v,"-title")},function(t,e){return!t&&e?{width:"38%"}:t&&e?{width:"50%"}:{}}(S,g)),kt(s));C=e(ht,j,null)}if(g){var k=u(u({prefixCls:"".concat(v,"-paragraph")},function(t,e){var n={};return t&&e||(n.width="61%"),n.rows=!t&&e?3:2,n}(S,x)),kt(f));w=e(Ct,k,null)}m=e("div",{class:"".concat(v,"-content")},[C,w])}var D=O(v,(n(y={},"".concat(v,"-with-avatar"),S),n(y,"".concat(v,"-active"),d),n(y,"".concat(v,"-rtl"),"rtl"===c.value),n(y,"".concat(v,"-round"),p),y));return e("div",{class:D},[b,m])}return null===(a=l.default)||void 0===a?void 0:a.call(l)}}});var Dt=function(){return{prefixCls:String,decimalSeparator:String,groupSeparator:String,format:String,value:{type:[String,Number,Object]},valueStyle:{type:Object,default:void 0},valueRender:s.any,formatter:s.any,precision:Number,prefix:s.any,suffix:s.any,title:s.any,loading:{type:Boolean,default:void 0}}};const Et=f({compatConfig:{MODE:3},name:"AStatistic",props:D(Dt(),{decimalSeparator:".",groupSeparator:",",loading:!1}),slots:["title","prefix","suffix","formatter"],setup:function(t,a){var l=a.slots,o=d("statistic",t),r=o.prefixCls,c=o.direction;return function(){var a,o,i,s,f,d,p,v=t.value,y=void 0===v?0:v,b=t.valueStyle,m=t.valueRender,S=r.value,x=null!==(a=t.title)&&void 0!==a?a:null===(o=l.title)||void 0===o?void 0:o.call(l),g=null!==(i=t.prefix)&&void 0!==i?i:null===(s=l.prefix)||void 0===s?void 0:s.call(l),h=null!==(f=t.suffix)&&void 0!==f?f:null===(d=l.suffix)||void 0===d?void 0:d.call(l),C=null!==(p=t.formatter)&&void 0!==p?p:l.formatter,w=e(gt,u({"data-for-update":Date.now()},u(u({},t),{},{prefixCls:S,value:y,formatter:C})),null);return m&&(w=m(w)),e("div",{class:[S,n({},"".concat(S,"-rtl"),"rtl"===c.value)]},[x&&e("div",{class:"".concat(S,"-title")},[x]),e(Ot,{paragraph:!1,loading:t.loading},{default:function(){return[e("div",{style:b,class:"".concat(S,"-content")},[g&&e("span",{class:"".concat(S,"-content-prefix")},[g]),w,h&&e("span",{class:"".concat(S,"-content-suffix")},[h])])]}})])}}});export{pt as D,Et as S,St as _,Dt as a,ut as c,K as s};
