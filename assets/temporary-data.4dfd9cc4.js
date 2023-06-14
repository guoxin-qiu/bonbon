const e=[{value:"草稿",label:"草稿"},{value:"计算中",label:"计算中"},{value:"计算完成",label:"计算完成"},{value:"待商务总监确认",label:"待商务总监确认"},{value:"待提交审批",label:"待提交审批"},{value:"待数据及进口负责人审批",label:"待数据及进口负责人审批"},{value:"待DCM负责人审批",label:"待DCM负责人审批"},{value:"待财务运营负责人审批",label:"待财务运营负责人审批"},{value:"待财务负责人审批",label:"待财务负责人审批"},{value:"待中国区总裁审批",label:"待中国区总裁审批"},{value:"审批拒绝",label:"审批拒绝"},{value:"审批通过",label:"审批通过"},{value:"已停用",label:"已停用"},{value:"已取消",label:"已取消"}],a=[{value:"单中标价下调",label:"单中标价下调"},{value:"单出厂价下调",label:"单出厂价下调"},{value:"中标价&出厂价同时下调",label:"中标价&出厂价同时下调"}],n=[{value:"2022Q1",label:"2022Q1"},{value:"2022Q2",label:"2022Q2"},{value:"2022Q3",label:"2022Q3"},{value:"2022Q4",label:"2022Q4"},{value:"2023Q1",label:"2023Q1"}],c=[{id:1,province:"辽宁",city:"",skuCode:"90070",skuName:"泰阁 针剂 50毫克 进口"}],m=[{id:1,name:"全国",parentId:0},{id:1e3,name:"辽宁",parentId:0},{id:2e3,name:"山东",parentId:0},{id:3e3,name:"安徽",parentId:0},{id:4e3,name:"广东",parentId:0},{id:1001,name:"大连市",parentId:1e3},{id:1002,name:"沈阳市",parentId:1e3},{id:2001,name:"青岛市",parentId:2e3},{id:2002,name:"威海市",parentId:2e3},{id:3001,name:"黄山市",parentId:3e3},{id:3002,name:"合肥市",parentId:3e3},{id:4001,name:"广州市",parentId:4e3},{id:4002,name:"佛山市",parentId:4e3}],o=[{code:20003,name:"BENEFIX RT INJ 250 IU 1VL ES/UK/PT"},{code:20001,name:"BENEFIX-RT INJ 250 IU 1VL US"},{code:20002,name:"BENEFIX-RT INJ 500 IU 1VL US"},{code:55105,name:"SLM 针剂 40毫克 进口"},{code:55302,name:"阿诺新 片剂 25毫克x15 进口"},{code:55301,name:"阿诺新 片剂 25毫克x30 进口"},{code:80010,name:"艾可拓 片剂 15毫克×7 进口"},{code:60010,name:"艾乐妥 片剂 2.5mgx10 进口"},{code:60011,name:"艾乐妥 片剂 2.5mgx14 进口"},{code:55801,name:"艾去适 胶囊 140毫克x40 进口"},{code:72002,name:"爱博新 胶囊 100毫克 进口"},{code:72003,name:"爱博新 胶囊 125毫克 进口"},{code:72001,name:"爱博新 胶囊 75毫克 进口"},{code:14002,name:"安素泰 注射液 25ml:150mg 进口"},{code:14001,name:"安素泰 注射液 5ml:30mg 进口"},{code:70010,name:"傲坦 片剂 20毫克×7"},{code:56701,name:"奥斯克 片剂 - 进口"},{code:80101,name:"贝博萨 针剂 1.0 mg/瓶 进口"},{code:57103,name:"贝赋 粉针 1000 IU/5ml 1VL 进口"},{code:57104,name:"贝赋 粉针 2000 IU 1VL 进口"},{code:57101,name:"贝赋 粉针 250 IU 1VL 进口"},{code:57102,name:"贝赋 粉针 500 IU 1VL 进口"},{code:90040,name:"倍美力 片剂 0.3mg×28"},{code:90041,name:"倍美力 片剂 0.625mg×28"},{code:90042,name:"倍美力 软膏 14g×1"},{code:90043,name:"倍美罗 0.3mg/1.5mg×28 进口"},{code:90201,name:"博瑞纳 片剂 100毫克*30 进口"},{code:90202,name:"博瑞纳 片剂 25毫克*30 进口"},{code:90203,name:"博瑞纳 片剂 25毫克*90 进口"},{code:54601,name:"畅沛 片剂 0.5毫克x11+1毫克x14 进口"},{code:54602,name:"畅沛 片剂 1毫克x28 进口"},{code:10602,name:"大扶康 胶囊 150毫克x1"},{code:10603,name:"大扶康 胶囊 50毫克x7"},{code:10606,name:"大扶康 针剂 100毫克 进口"},{code:10604,name:"大扶康 针剂 100毫克-样品"},{code:10607,name:"大扶康 针剂 200毫克 进口"},{code:10605,name:"大扶康 针剂 200毫克-样品"},{code:54701,name:"得妥 缓释胶囊 4毫克x7 进口"},{code:56201,name:"狄波-普维拉 针剂 150毫克 进口"},{code:13002,name:"多达一片 5mg/10mg x 7/盒"},{code:13001,name:"多达一片 5mg/10mg x 7/瓶/盒"},{code:50201,name:"多柔比星 针剂 10毫克"},{code:50202,name:"多柔比星 针剂 10毫克 进口"},{code:80002,name:"多泽润 片剂 15毫克x30 进口"},{code:90080,name:"恩利 粉针 25mgx2 进口"},{code:90082,name:"恩利 注射液 0.47ml：25mgx4 进口"},{code:90081,name:"恩利 注射液 0.94ml：50mgx2 进口"},{code:55502,name:"法安明 针剂 2500IU 进口"},{code:55501,name:"法安明 针剂 5000IU 进口"},{code:55504,name:"法安明 针剂 5000IU/0.2ml×10"},{code:55505,name:"法安明 针剂 7500IU"},{code:55503,name:"法安明 针剂 7500IU 进口"},{code:55901,name:"法禄达 片剂 500毫克x30 进口"},{code:50101,name:"法玛新 针剂 10毫克"},{code:50103,name:"法玛新 针剂 10毫克 进口"},{code:50102,name:"法玛新 针剂 50毫克"},{code:54301,name:"法益宁 针剂 100毫克 进口"},{code:30601,name:"法益宁 针剂 30毫克"},{code:90502,name:"费蒙格 针剂 120毫克 进口"},{code:90501,name:"费蒙格 针剂 80毫克 进口"},{code:12502,name:"格列吡嗪 片剂 5毫克x30 进口"},{code:90801,name:"格思杰 片剂 100毫克x30 进口"},{code:90802,name:"格思杰 片剂 25毫克x60 进口"},{code:55601,name:"甲氨蝶呤 针剂 1.0克 进口"},{code:55602,name:"甲氨蝶呤 针剂 500毫克 进口"},{code:55603,name:"甲氨蝶呤 针剂 50毫克 进口"},{code:55101,name:"甲强龙 针剂 40毫克 进口"},{code:55102,name:"甲强龙 针剂 500毫克 进口"},{code:56102,name:"健豪宁 针剂 1.3毫克 进口"},{code:56101,name:"健豪宁 针剂 5.3毫克 进口"},{code:12702,name:"开普拓 针剂 100毫克 进口"},{code:12701,name:"开普拓 针剂 40毫克 进口"},{code:90701,name:"康新博 胶囊 100毫克x14 进口"},{code:90702,name:"康新博 针剂 200毫克 进口"},{code:10402,name:"科福乐 片剂 20毫克x20 "},{code:11801,name:"可多华 缓释片 4毫克x10"},{code:13104,name:"乐瑞卡 胶囊 150mgx8"},{code:13103,name:"乐瑞卡 胶囊 75mgx8"},{code:77777,name:"乐瑞卡 片剂"},{code:56401,name:"乐知苹 片剂 250毫克x30 进口"},{code:90031,name:"雷帕鸣 口服液 60ml(1mg/1ml) 进口"},{code:90030,name:"雷帕鸣 片剂 1mg×10 进口"},{code:15001,name:"立可林 注射液 10ml:0.1g 进口"},{code:15002,name:"立可林 注射液 30ml:0.3g 进口"},{code:11703,name:"立普妥 片剂 10毫克x28 (国产)"},{code:11701,name:"立普妥 片剂 10毫克x7"},{code:11705,name:"立普妥 片剂 10毫克x7 (国产)"},{code:11704,name:"立普妥 片剂 20毫克x28 (国产)"},{code:11702,name:"立普妥 片剂 20毫克x7"},{code:11706,name:"立普妥 片剂 20毫克x7 (国产)"},{code:11707,name:"立普妥 片剂 40毫克x7"},{code:11708,name:"立普妥 片剂 40毫克x7 (国产)"},{code:30001,name:"丽可胜 片剂 - 进口"},{code:10505,name:"络活喜 片剂 10毫克x10"},{code:10504,name:"络活喜 片剂 10毫克x30"},{code:10503,name:"络活喜 片剂 5毫克x28"},{code:10502,name:"络活喜 片剂 5毫克x7"},{code:90090,name:"玛特纳 片剂 30片"},{code:12501,name:"曼迪宝片剂5毫克x30"},{code:90010,name:"玫满 胶囊 100mg×10"},{code:90011,name:"玫满 胶囊 50mg×20"},{code:30401,name:"美吡哒 片剂 5毫克x30"},{code:30402,name:"美吡哒 片剂 5毫克x30 进口"},{code:56601,name:"美西肯 片剂 - 进口"},{code:55103,name:"美卓乐 片剂 4毫克x30 进口"},{code:90901,name:"奈玛特韦片/利托那韦片组合包装 150/100mg FCT 5x4/2 进口"},{code:12201,name:"耐较咛 片剂 0.6毫克 4瓶x25 进口"},{code:90060,name:"沛儿 0.5ml 进口"},{code:90061,name:"沛儿 0.5ml/支*10支/盒"},{code:90062,name:"沛儿 13 0.5ml 1x1 进口"},{code:56001,name:"普维拉 片剂 100毫克x100 进口"},{code:56002,name:"普维拉 片剂 5毫克x100 进口"},{code:70001,name:"其他产品"},{code:99999,name:"其它产品"},{code:30201,name:"曲必星 针剂 2.0克"},{code:58102,name:"任捷 粉针 1000 IU 1x4ml VL 进口"},{code:58103,name:"任捷 粉针 2000 IU 1x4ml VL 进口"},{code:58100,name:"任捷 粉针 250 IU 1VL 进口"},{code:58101,name:"任捷 粉针 500 IU 1x4ml VL 进口"},{code:55701,name:"柔红霉素 针剂 20毫克 进口"},{code:81001,name:"瑞万托 片剂 20毫克x90 进口"},{code:81002,name:"瑞万托 片剂 20毫克x90 进口 (JD)"},{code:11302,name:"瑞易宁 控释片 5毫克x14"},{code:55203,name:"赛德萨 针剂 100毫克 国产"},{code:55201,name:"赛德萨 针剂 100毫克 进口"},{code:55204,name:"赛德萨 针剂 500毫克 国产"},{code:55202,name:"赛德萨 针剂 500毫克 进口"},{code:16003,name:"赛德威 注射液 10ml:1g 进口"},{code:16001,name:"赛德威 注射液 1ml:0.1g 进口"},{code:16002,name:"赛德威 注射液 5ml:500mg 进口"},{code:59101,name:"赛可瑞 胶囊 200毫克x60 进口"},{code:59102,name:"赛可瑞 胶囊 250毫克x60 进口"},{code:50304,name:"善唯达 胶囊 10毫克x1 进口"},{code:50305,name:"善唯达 针剂 10毫克 进口"},{code:50307,name:"善唯达 针剂 10毫克（国产）"},{code:50303,name:"善唯达 针剂 5毫克 进口"},{code:50306,name:"善唯达 针剂 5毫克（国产）"},{code:71002,name:"尚杰 缓释片剂 11毫克 1*30  瓶 进口"},{code:71001,name:"尚杰 片剂 5毫克 1x28 进口"},{code:55401,name:"适利达 滴眼剂 125微克x1 进口"},{code:54501,name:"适利加 滴眼剂 2.5毫升x1 进口"},{code:10202,name:"舒普深 粉针 1.0克"},{code:10205,name:"舒普深 粉针 1.5克"},{code:10206,name:"舒普深 粉针 3.0克"},{code:10207,name:"舒普深 粉针 750毫克"},{code:90101,name:"舒坦明 软膏 30克x1 进口"},{code:18001,name:"输液泵用输液管路13261 套 进口"},{code:17001,name:"顺铂 注射液 50ml:50mg 进口"},{code:30301,name:"思尔明 10-JV"},{code:12301,name:"思尔明 片剂 10毫克x30"},{code:30302,name:"思尔明 片剂 10毫克x30 进口"},{code:30303,name:"思尔明 针剂 4毫克 进口"},{code:90003,name:"思福妥 粉针 2000/500毫克×10瓶 进口"},{code:90002,name:"思福妥 粉针 2000/500毫克×1瓶 进口"},{code:54103,name:"斯沃 干混 100毫克/5毫升 进口"},{code:54102,name:"斯沃 片剂 600毫克x10 进口"},{code:54101,name:"斯沃 针剂 600毫克 进口"},{code:54401,name:"索坦 胶囊 12.5毫克x28 进口"},{code:90070,name:"泰阁 针剂 50毫克 进口"},{code:90071,name:"泰阁 针剂 50毫克×10支 进口"},{code:12401,name:"特丽仙 胶囊 150毫克x12"},{code:30103,name:"特丽仙 胶囊 150毫克x12 进口"},{code:12402,name:"特丽仙 胶囊 300毫克x12"},{code:30104,name:"特丽仙 胶囊 300毫克x12 进口"},{code:30101,name:"特丽仙 针剂 300毫克"},{code:30102,name:"特丽仙 针剂 600毫克"},{code:12901,name:"特耐 粉针 40毫克"},{code:90402,name:"特泽纳 胶囊 0.25毫克x30 进口"},{code:90401,name:"特泽纳 胶囊 1毫克x30 进口"},{code:90020,name:"特治星 注射剂 4.5g"},{code:11510,name:"万艾可 口崩片 50毫克x4 进口"},{code:11507,name:"万艾可 片剂 100毫克x1"},{code:11508,name:"万艾可 片剂 100毫克x10"},{code:11506,name:"万艾可 片剂 100毫克x5"},{code:11503,name:"万艾可 片剂 25毫克x1"},{code:11511,name:"万艾可 片剂 25毫克x2"},{code:11505,name:"万艾可 片剂 25毫克x28"},{code:11504,name:"万艾可 片剂 25毫克x7"},{code:11502,name:"万艾可 片剂 50毫克x1"},{code:11501,name:"万艾可 片剂 50毫克x10"},{code:11500,name:"万艾可 片剂 50毫克x2"},{code:11509,name:"万艾可 片剂 50毫克x5"},{code:12803,name:"威凡 干混悬剂 45克:3克  进口"},{code:12802,name:"威凡 片剂 200毫克x10 进口"},{code:12805,name:"威凡 片剂 50毫克×10-样品"},{code:12801,name:"威凡 针剂 200毫克 进口"},{code:80004,name:"维达全 胶囊 20毫克 3x10 进口"},{code:90301,name:"维万心 胶囊 61毫克 3x10 进口"},{code:12602,name:"西乐葆 200毫克*2片 - 样品"},{code:30502,name:"西乐葆 胶囊 100毫克x10 进口"},{code:30503,name:"西乐葆 胶囊 200毫克x10 进口"},{code:12603,name:"西乐葆 胶囊 200毫克x18"},{code:12601,name:"西乐葆 胶囊 200毫克x6"},{code:30501,name:"西乐葆 胶囊 200毫克x6 进口"},{code:80201,name:"希必可 片剂 100毫克*14 进口"},{code:10802,name:"希舒美 干混 100毫克x6"},{code:10806,name:"希舒美 片剂 250毫克x4"},{code:10805,name:"希舒美 片剂 250毫克x6"},{code:10810,name:"希舒美 针剂 500毫克"},{code:10809,name:"希舒美 针剂 500毫克 进口"},{code:56501,name:"喜克馈 片剂 200微克x30 进口"},{code:56901,name:"喜朗 片剂 0.4ml 进口"},{code:56902,name:"喜朗 片剂 0.55ml 进口"},{code:56903,name:"喜朗 片剂 0.6ml 进口"},{code:56806,name:"喜望人工晶体 片剂 722A 进口"},{code:56801,name:"喜望人工晶体 片剂 722C 进口"},{code:56802,name:"喜望人工晶体 片剂 812A 进口"},{code:56803,name:"喜望人工晶体 片剂 812C 进口"},{code:56804,name:"喜望人工晶体 片剂 911A 进口"},{code:56805,name:"喜望人工晶体 片剂 912A 进口"},{code:10102,name:"先锋必 粉针 1.0克"},{code:10104,name:"先锋必 粉针 2.0克"},{code:10103,name:"先锋必 粉针 500毫克"},{code:56301,name:"欣母沛 针剂 250微克 进口"},{code:30602,name:"亚叶酸钙 针剂 100毫克"},{code:90050,name:"怡诺思 缓释胶囊 150mg×14"},{code:90051,name:"怡诺思 缓释胶囊 75mg×14"},{code:51001,name:"英立达 片剂 1毫克 1x14 进口"},{code:51002,name:"英立达 片剂 5毫克 2x14 进口"},{code:10704,name:"优立新 粉针 750毫克 进口"},{code:10703,name:"优立新 片剂 375毫克x10 进口"},{code:90601,name:"择捷美 针剂 600毫克 国产"},{code:54201,name:"卓乐定 胶囊 20毫克x10 进口"},{code:54200,name:"卓乐定 胶囊 20毫克x4 进口"},{code:54202,name:"卓乐定 胶囊 40毫克x10 进口"},{code:54203,name:"卓乐定 胶囊 60毫克x10 进口"},{code:54204,name:"卓乐定 针剂 30毫克 进口"},{code:11402,name:"左洛复 片剂 100毫克x7"},{code:11401,name:"左洛复 片剂 50毫克x14"}],d=[{value:"未修改",label:"未修改"},{value:"已修改",label:"已修改"},{value:"流向已提交",label:"流向已提交"},{value:"流向核验通过",label:"流向核验通过"},{value:"流向核验拒绝",label:"流向核验拒绝"},{value:"发票核验通过",label:"发票核验通过"},{value:"发票核验拒绝",label:"发票核验拒绝"},{value:"商务总监核验通过",label:"商务总监核验通过"},{value:"商务总监核验拒绝",label:"商务总监核验拒绝"}],l=[{type:"退货流向",salesDate:"2022-07-08",skuCode:"10602",skuName:"大扶康 胶囊 150毫克x1",quantity:-30,price:12.34,itemType:"???",paymentObject:"吉林药业",buyerCode:"DS0055858",buyerName:"安心堂药房",buyerProvince:"辽宁",buyerCity:"大连市",buyerType:"药店",sellerCode:"DI00005812",sellerName:"红惠医药有限公司",sellerProvince:"辽宁",sellerType:"经销商",batchNo:"1234567",invoiceNo:"04871356",t1:"嘉事堂药业股份有限公司",voucherNo:"",planId:"1003",planName:"大扶康辽宁省中标价下调【需按标准设置】",biddingPrice:11.1,basePrice:10.2,gross:"8%",unitPrice:1.78,planIdOld:"1009",planNameOld:"大扶康辽宁省中标价二次下调",biddingPriceOld:44.1,basePriceOld:33.2,grossOld:"7%",unitPriceOld:11.78,finalUnitPrice:10,cPrice:3333.01,shouldCheck:"",status:"已提交",approvalComment:"",appealReason:""},{type:"冲差流向",salesDate:"2022-07-08",skuCode:"10603",skuName:"大扶康 胶囊 500毫克x10",quantity:-10,price:59.34,itemType:"???",paymentObject:"吉林药业",buyerCode:"DS0055858",buyerName:"安心堂药房",buyerProvince:"辽宁",buyerCity:"大连市",buyerType:"药店",sellerCode:"DI00005812",sellerName:"红惠医药有限公司",sellerProvince:"辽宁",sellerType:"经销商",batchNo:"7654321",invoiceNo:"14871356",t1:"嘉事堂药业股份有限公司",voucherNo:"",planId:"1004",planName:"大扶康辽宁省中标价下调【需按标准设置】",biddingPrice:50.1,basePrice:44.2,gross:"7%",unitPrice:8.78,planIdOld:"",planNameOld:"",biddingPriceOld:0,basePriceOld:0,grossOld:"",unitPriceOld:0,finalUnitPrice:8.78,cPrice:-3413.01,shouldCheck:"",status:"已提交",approvalComment:"",appealReason:""},{type:"冲差流向",salesDate:"2022-07-08",skuCode:"10603",skuName:"大扶康 胶囊 500毫克x10",quantity:10,price:33.34,itemType:"???",paymentObject:"吉林药业",buyerCode:"DS0055858",buyerName:"安心堂药房",buyerProvince:"辽宁",buyerCity:"大连市",buyerType:"药店",sellerCode:"DI00005812",sellerName:"红惠医药有限公司",sellerProvince:"辽宁",sellerType:"经销商",batchNo:"7654321",invoiceNo:"14871356",t1:"嘉事堂药业股份有限公司",voucherNo:"",planId:"1004",planName:"大扶康辽宁省中标价下调【需按标准设置】",biddingPrice:66.1,basePrice:55.2,gross:"8%",unitPrice:14,planIdOld:"",planNameOld:"",biddingPriceOld:0,basePriceOld:0,grossOld:"",unitPriceOld:0,finalUnitPrice:14,cPrice:4524.01,shouldCheck:"",status:"已提交",approvalComment:"",appealReason:""}],r=[{salesDate:"2022-07-08",skuCode:"10602",skuName:"大扶康 胶囊 150毫克x1",quantity:-30,price:12.34,itemType:"???",buyerCode:"DS0055858",buyerName:"安心堂药房",buyerProvince:"辽宁",buyerCity:"大连市",buyerType:"药店",sellerCode:"DI00005812",sellerName:"红惠医药有限公司",sellerProvince:"辽宁",sellerType:"经销商",batchNo:"1234567",invoiceNo:"04871356",isPreMatch:"",isSelected:!1},{salesDate:"2022-07-08",skuCode:"10603",skuName:"大扶康 胶囊 500毫克x10",quantity:10,price:59.34,itemType:"???",buyerCode:"DS0055858",buyerName:"安心堂药房",buyerProvince:"辽宁",buyerCity:"大连市",buyerType:"药店",sellerCode:"DI00005812",sellerName:"红惠医药有限公司",sellerProvince:"辽宁",sellerType:"经销商",batchNo:"7654321",invoiceNo:"14871356",isPreMatch:"正负冲销",isSelected:!0}],t=[{planId:"1004",planName:"大扶康辽宁省中标价下调【需按标准设置】",province:"辽宁",city:"",skuCode:"10603",skuName:"大扶康 胶囊 500毫克x10",buyerCode:"DS0055858",buyerName:"安心堂药房",sellerCode:"",sellerName:"",biddingPrice:50.1,basePrice:44.2,gross:"7%",unitPrice:8.78,planDate:"2022-03-01"}],i=[{type:"终端库存",inventoryDate:"2022-04-30",skuCode:"10603",skuName:"大扶康 胶囊 500毫克x10",paymentObject:"吉林药业",buyerProvince:"辽宁",sellerProvince:"辽宁",sellerCode:"DI00005812",sellerName:"红惠医药有限公司",t1:"嘉事堂药业股份有限公司",inventoryNum:333,quantity:333,inventoryStatus:"????",batchNo:"39381",StocktakingDate:"2022-05-01",reduceDate:"2022-05-01",planId:"1003",planName:"大扶康辽宁省中标价下调【需按标准设置】",biddingPriceNew:11.1,basePriceNew:10.2,grossNew:"8%",unitPriceNew:1.78,planIdOld:"1009",planNameOld:"大扶康辽宁省中标价二次下调",biddingPriceOld:44.1,basePriceOld:33.2,grossOld:"7%",unitPriceOld:11.78,unitPrice:22.12,cPrice:3333.01,status:"已提交",approvalComment:"",appealReason:""}],u=[{value:"单出厂价下调",label:"单出厂价下调"},{value:"中标价&出厂价同时下调",label:"中标价&出厂价同时下调"}],s=[{value:"草稿",label:"草稿"},{value:"待数据及进口负责人审批",label:"待数据及进口负责人审批"},{value:"待DCM负责人审批",label:"待DCM负责人审批"},{value:"审批通过",label:"审批通过"},{value:"审批拒绝",label:"审批拒绝"},{value:"已停用",label:"已停用"},{value:"已取消",label:"已取消"}],b=[{id:1,cObject:"进口商",skuCode:"90070",skuName:"泰阁 针剂 50毫克 进口",province:"",inventoryDate:"2022-05-10",priceReductionDate:"2022-05-11",basePriceNew:110,basePriceOld:210.12,unitPrice:100.12},{id:2,cObject:"渠道",skuCode:"10202",skuName:"舒普深 粉针 1.0克",province:"辽宁",inventoryDate:"2022-05-18",priceReductionDate:"2022-05-19",basePriceNew:30,basePriceOld:40.56,unitPrice:10.56},{id:3,cObject:"终端",skuCode:"10202",skuName:"舒普深 粉针 1.0克",province:"辽宁",inventoryDate:"2022-05-18",priceReductionDate:"2022-05-19",basePriceNew:30,basePriceOld:40.56,unitPrice:10.56}],p=[{value:"可销",label:"可销"},{value:"在途",label:"在途"},{value:"在检",label:"在检"},{value:"不可销",label:"不可销"}],y=[{id:1,source:"系统",cObject:"进口商",skuCode:"90070",skuName:"泰阁 针剂 50毫克 进口",province:"",dealerCode:"DI00005812",dealerName:"红惠医药有限公司",paymentObject:"吉林药业",InventoryQuantity:231,InventoryStatus:"在销",LotNo:"",inventoryDate:"2022-05-10",priceReductionDate:"2022-05-11",basePriceNew:110,basePriceOld:210.12,unitPrice:100.12,amount:23127.72,isPre:"是",t1:"嘉事堂药业股份有限公司",isMarked:"是",remark:"",approvalStatus:"核验通过",approvalRemark:""},{id:2,source:"手工添加",cObject:"渠道",skuCode:"10202",skuName:"舒普深 粉针 1.0克",province:"辽宁",dealerCode:"DI00005812",dealerName:"红惠医药有限公司",paymentObject:"吉林药业",InventoryQuantity:10,InventoryStatus:"在销",LotNo:"",inventoryDate:"2022-05-18",priceReductionDate:"2022-05-19",basePriceNew:30,basePriceOld:40.56,unitPrice:10.56,amount:105.6,isPre:"是",t1:"嘉事堂药业股份有限公司",isMarked:"是",remark:"",approvalStatus:"核验拒绝",approvalRemark:"库存凭证缺失"}],x=[{id:1,reclaimObject:"经销商",salesDate:"2022-10-21",skuCode:"90101",skuName:"舒坦明 软膏 30克x1 进口",buyerCode:"HO00002231",buyerName:"北京新世纪儿童医院",buyerProvince:"北京",buyerCity:"北京市",buyerType:"医院",sellerCode:"DI00007929",sellerName:"北京科园信海医药经营有限公司",sellerProvince:"北京",sellerType:"分销商",startDate:"2022-10-01",endDate:"2022-11-30",unitPrice:50,quantity:3,amount:150,t1:"北京科园信海医药经营有限公司",payObject:"上药控股有限公司",approvalStatus:"核验通过",remark:"",approvalRemark:""},{id:2,reclaimObject:"进口商",salesDate:"2022-10-19",skuCode:"90101",skuName:"舒坦明 软膏 30克x1 进口",buyerCode:"DI00007941",buyerName:"广州医药股份有限公司",buyerProvince:"广东",buyerCity:"广州市",buyerType:"分销商",sellerCode:"DI00007968",sellerName:"上药控股有限公司",sellerProvince:"上海",sellerType:"分销商",startDate:"2022-10-01",endDate:"2022-11-30",unitPrice:150,quantity:30,amount:4500,t1:"",payObject:"上药控股有限公司",approvalStatus:"核验通过",remark:"",approvalRemark:""},{id:3,reclaimObject:"进口商",salesDate:"2022-10-19",skuCode:"90101",skuName:"舒坦明 软膏 30克x1 进口",buyerCode:"DI00007968",buyerName:"上药控股有限公司",buyerProvince:"",buyerCity:"",buyerType:"进口商",sellerCode:"Pfizer",sellerName:"Pfizer",sellerProvince:"",sellerType:"",startDate:"2022-10-01",endDate:"2022-11-30",unitPrice:666,quantity:1,amount:666,t1:"",payObject:"上药控股有限公司",approvalStatus:"核验通过",remark:"从TTD来",approvalRemark:""}];x.filter((e=>"进口商"===e.reclaimObject)).map((e=>({payObject:e.payObject,skuCode:e.skuCode,skuName:e.skuName,buyerName:e.buyerName,unitPrice:e.unitPrice,quantity:e.quantity,amount:e.amount,startDate:e.startDate,endDate:e.endDate}))),x.filter((e=>"经销商"===e.reclaimObject)).map((e=>({payObject:e.payObject,t1:e.t1,buyerProvince:e.sellerProvince,buyerName:e.sellerName,skuCode:e.skuCode,skuName:e.skuName,unitPrice:e.unitPrice,quantity:e.quantity,amount:e.amount,startDate:e.startDate,endDate:e.endDate})));export{s as a,a as b,e as c,c as d,l as e,r as f,m as g,t as h,u as i,d as j,b as k,y as l,p as m,x as n,n as q,o as s,i as t};
