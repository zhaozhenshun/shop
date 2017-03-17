//与app融合 弹窗关闭 及 打开客户端 后去掉弹窗
(function(){
	var wapToEbay = $.cookie("wapToEbay");
	var appType = $("#appType").val();
	var openappURL = $("#openappURL").val();
	snwapapp = self.sn||{}; 
	snwapapp.dlp = sn.mobileBase+"/search/dlp.html";
	
	if(!navigator.userAgent.match(/SNEBUY-APP;?/i) && !wapToEbay){
		//ajax 读取 开关 配置
		$.ajax({
			 type:"get",
			 url: sn.mobileBase+"/queryNVP/jsonp.do?name="+appType,
	         dataType:"jsonp",
	         success : function(data){
	        	if(data&&data.value == '1'){
	        		$("#cBlue").html(data.description);
	        		$(".detail-fi-xed").show();
	        	}
	         }
		});
		
	}

	$(".a-dds-btn01").click(function(){
		
		switch (appType) {
		
		//二级页浮层
		
		case "channel_wap_app":  
			snwapapp.iphoneUrl = "com.suning.suningebuy://wapToEbuy?adTypeCode=1002"+"&adId=http://${app-domain}/"+openappURL+".html";
			snwapapp.androidUrl = "suning://m.suning.com/index?adTypeCode=1002"+"&adId=http://${app-domain}/"+openappURL+".html";
			 
		break;
		
		//手机专享价
		case "phone_price_app":  
			snwapapp.iphoneUrl = "com.suning.suningebuy://wapToEbuy?adTypeCode=1002"+"&adId=http://${app-domain}/"+openappURL+".html";
			snwapapp.androidUrl = "suning://m.suning.com/index?adTypeCode=1002"+"&adId=http://${app-domain}/"+openappURL+".html";
			 
		break;
		
		//我的收藏浮层
		case "openApp_ Collect":
			snwapapp.iphoneUrl = "com.suning.suningebuy://wapToEbuy?adTypeCode=1010";
			snwapapp.androidUrl = "suning://m.suning.com/index?adTypeCode=1010";
			break;
		//大聚会首页浮层链接   
		case "openApp_HighParty": 
			snwapapp.iphoneUrl = "com.suning.suningebuy://wapToEbuy?adTypeCode=1002&adId=http://${app-domain}/sale/ju_1_1_2_1.html"; 
			snwapapp.androidUrl = "suning://m.suning.com/index?adTypeCode=1002&adId=http://${app-domain}/sale/ju_1_1_2_1.html"; 
 
			break;
		//闪拍首页浮层链接
		case "openApp_FShooting": 
 			snwapapp.iphoneUrl = "com.suning.suningebuy://wapToEbuy?adTypeCode=1002&adId=http://${app-domain}/pai/hotAuction.do?ident=y"; 
 			snwapapp.androidUrl = "suning://m.suning.com/index?adTypeCode=1002&adId=http://${app-domain}/pai/hotAuction.do?ident=y"; 
			//snwapapp.iphoneUrl = "com.suning.suningebuy://wapToEbuy?adTypeCode=1001";
			//snwapapp.androidUrl = "suning://m.suning.com/index?adTypeCode=1001";
		break;
		
		//天天神价
		case "openApp_ttsj": 
			//snwapapp.iphoneUrl = "com.suning.suningebuy://wapToEbuy?adTypeCode=1001";
			//snwapapp.androidUrl = "suning://m.suning.com/index?adTypeCode=1001";
			snwapapp.iphoneUrl = "com.suning.suningebuy://wapToEbuy?adTypeCode=1002"+"&adId=http://${app-domain}/"+openappURL+".html";
			snwapapp.androidUrl = "suning://m.suning.com/index?adTypeCode=1002"+"&adId=http://${app-domain}/"+openappURL+".html";
		break;
		
		//活动聚合页1
		case "openApp_sale1": 
			//snwapapp.iphoneUrl = "com.suning.suningebuy://wapToEbuy?adTypeCode=1001";
			//snwapapp.androidUrl = "suning://m.suning.com/index?adTypeCode=1001";
			snwapapp.iphoneUrl = "com.suning.suningebuy://wapToEbuy?adTypeCode=1002"+"&adId=http://${app-domain}/"+openappURL+".html";
			snwapapp.androidUrl = "suning://m.suning.com/index?adTypeCode=1002"+"&adId=http://${app-domain}/"+openappURL+".html";
		break;
		//活动聚合页2
		case "openApp_sale2": 
			//snwapapp.iphoneUrl = "com.suning.suningebuy://wapToEbuy?adTypeCode=1001";
			//snwapapp.androidUrl = "suning://m.suning.com/index?adTypeCode=1001";
			snwapapp.iphoneUrl = "com.suning.suningebuy://wapToEbuy?adTypeCode=1002"+"&adId=http://${app-domain}/"+openappURL+".html";
			snwapapp.androidUrl = "suning://m.suning.com/index?adTypeCode=1002"+"&adId=http://${app-domain}/"+openappURL+".html";
			 
		break;
		//活动聚合页3
		case "openApp_sale3":  
			snwapapp.iphoneUrl = "com.suning.suningebuy://wapToEbuy?adTypeCode=1002"+"&adId=http://${app-domain}/"+openappURL+".html";
			snwapapp.androidUrl = "suning://m.suning.com/index?adTypeCode=1002"+"&adId=http://${app-domain}/"+openappURL+".html";
			 
		break;
		 
		//活动聚合页6
		case "openApp_sale6": 
			//snwapapp.iphoneUrl = "com.suning.suningebuy://wapToEbuy?adTypeCode=1001";
			//snwapapp.androidUrl = "suning://m.suning.com/index?adTypeCode=1001";
			snwapapp.iphoneUrl = "com.suning.suningebuy://wapToEbuy?adTypeCode=1002"+"&adId=http://${app-domain}/"+openappURL+".html";
			snwapapp.androidUrl = "suning://m.suning.com/index?adTypeCode=1002"+"&adId=http://${app-domain}/"+openappURL+".html";
		break; 
		//活动聚合页11
		case "openApp_sale11": 
			//snwapapp.iphoneUrl = "com.suning.suningebuy://wapToEbuy?adTypeCode=1001";
			//snwapapp.androidUrl = "suning://m.suning.com/index?adTypeCode=1001";
			snwapapp.iphoneUrl = "com.suning.suningebuy://wapToEbuy?adTypeCode=1002"+"&adId=http://${app-domain}/"+openappURL+".html";
			snwapapp.androidUrl = "suning://m.suning.com/index?adTypeCode=1002"+"&adId=http://${app-domain}/"+openappURL+".html";
		break;
		//活动聚合页12
		case "openApp_sale12": 
			//snwapapp.iphoneUrl = "com.suning.suningebuy://wapToEbuy?adTypeCode=1001";
			//snwapapp.androidUrl = "suning://m.suning.com/index?adTypeCode=1001";
			snwapapp.iphoneUrl = "com.suning.suningebuy://wapToEbuy?adTypeCode=1002"+"&adId=http://${app-domain}/"+openappURL+".html";
			snwapapp.androidUrl = "suning://m.suning.com/index?adTypeCode=1002"+"&adId=http://${app-domain}/"+openappURL+".html";
		break;
		//活动聚合页12
		case "openApp_sports": 
			//snwapapp.iphoneUrl = "com.suning.suningebuy://wapToEbuy?adTypeCode=1001";
			//snwapapp.androidUrl = "suning://m.suning.com/index?adTypeCode=1001";
			snwapapp.iphoneUrl = "com.suning.suningebuy://wapToEbuy?adTypeCode=1002"+"&adId=http://${app-domain}/"+openappURL+".html";
			snwapapp.androidUrl = "suning://m.suning.com/index?adTypeCode=1002"+"&adId=http://${app-domain}/"+openappURL+".html";
		break;
		
		
		case "openApp_Search":
			snwapapp.iphoneUrl = "com.suning.suningebuy://wapToEbuy?adTypeCode=30&cityId="+searcher.searchParams.cityId+
							"&keyword="+searcher.searchParams.keyword+
							"&cp="+searcher.searchParams.cp+
							"&ps="+(searcher.searchParams.ps*(searcher.searchParams.cp+1))+
							"&st="+searcher.searchParams.st+
							"&set=5&cf="+searcher.searchParams.cf+
							"&iv="+searcher.searchParams.iv+
							"&ci="+searcher.searchParams.ci;
			snwapapp.androidUrl = "suning://m.suning.com/index?adTypeCode=30&cityId="+searcher.searchParams.cityId+
							"&keyword="+searcher.searchParams.keyword+
							"&cp="+searcher.searchParams.cp+
							"&ps="+(searcher.searchParams.ps*(searcher.searchParams.cp+1))+
							"&st="+searcher.searchParams.st+
							"&set=5&cf="+searcher.searchParams.cf+
							"&iv="+searcher.searchParams.iv+
							"&ci="+searcher.searchParams.ci;
			break;
		case "openApp_MyOrders":
			snwapapp.iphoneUrl = "com.suning.suningebuy://wapToEbuy?adTypeCode=29";
			snwapapp.androidUrl = "suning://m.suning.com/index?adTypeCode=29";
			break;
		case "openApp_MyEbuy":
			snwapapp.iphoneUrl = "com.suning.suningebuy://wapToEbuy?adTypeCode=25";
			snwapapp.androidUrl = "suning://m.suning.com/index?adTypeCode=25";
			break;
		case "openApp_Prd":
			if(sn.initSupplierCode && sn.initSupplierCode.length>0){
				 
				var shopCode = sn.initSupplierCode;
				//苏宁自营
				if(shopCode == '0000000000'){
					shopCode = "";
				}
				snwapapp.iphoneUrl = "com.suning.suningebuy://wapToEbuy?adTypeCode=1013&adId="+sn.partNumber+"_"+shopCode;
				snwapapp.androidUrl = "suning://m.suning.com/index?adTypeCode=1013&adId="+sn.partNumber+"&shopCode="+shopCode;
			}else{ 
//				var shopCode = sn.supplierCode;
//				//苏宁自营
//				if(shopCode == '0000000000'){
//					shopCode = "";
//				}
				snwapapp.iphoneUrl = "com.suning.suningebuy://wapToEbuy?adTypeCode=1013&adId="+sn.partNumber;
				snwapapp.androidUrl = "suning://m.suning.com/index?adTypeCode=1013&adId="+sn.partNumber;
			}
			
			break;
		default:
			break;
		}
		
		if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)){
			var loadDateTime = new Date();
			window.setTimeout(function(){
				var timeOutDateTime = new Date();
				if (timeOutDateTime - loadDateTime < 5000){
					//如果安装了应用宝
					if (navigator.userAgent.match(/MicroMessenger/i)) {
			    		window.location = "http://a.app.qq.com/o/simple.jsp?pkgname=com.suning.mobile.ebuy&g_f=992129";
			    		return ;
			    	}
					window.location.href = "https://itunes.apple.com/cn/app/id424598114?l=en&mt=8";
				}else{
					window.close();
				}
			},2000);
			window.location = snwapapp.iphoneUrl;
		}else if (navigator.userAgent.match(/android/i)){
			//如果安装了应用宝
			if (navigator.userAgent.match(/MicroMessenger/i)) {
	    		window.location = "http://a.app.qq.com/o/simple.jsp?pkgname=com.suning.mobile.ebuy&g_f=992129";
	    		return ;
	    	}
			var isBlur = true;
			window.location = snwapapp.androidUrl;
			//下载 客户端链接
			window.onblur = function(){
				isBlur = false;
				window.location.href = snwapapp.dlp;
			};
			setTimeout(function(){
				if(isBlur){
					window.location.href = snwapapp.dlp;
				}
			},2000);
		}
	});
	
	$(".a-dd-cl-ose01").click(function(){
		$(this).parent().remove();
		var expir = new Date();
		expir.setTime(expir.getTime() + 2 * 60 * 60 * 1000);
		document.cookie = "wapToEbay=clientPrd;path=/;expires=" + expir.toGMTString();
	});
})();