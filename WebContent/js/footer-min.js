var passport_config={base:sn.mobileBase+"/",loginTheme:sn.idsLoginTheme};
$(function(){getLogonInfo();
initEvent();
checkMergeCart()
});
function initEvent(){topc();
logon();
register();
logonOff();
cart();
userEvent();
$("#suningapp").click(function(){openClient()
})
}function topc(){$("#gotopc").click(function(){var b=$(this).attr("res-cd");
document.cookie="terminal_flag=0;domain="+(b?b:".suning.com")+";path=/";
var a=$(this).attr("res-url");
if(a){window.location.href=a
}else{window.location.href="http://www.suning.com/?utm_source=suning&utm_medium=pc"
}})
}function logon(){$("#footerLogin").click(function(){var a=window.location.href;
window.location.href=sn.authServerUrl+"/login?service="+sn.authUrl+"?targetUrl="+a+"&loginTheme=wap_new"
})
}function register(){$("#footerRegister").click(function(){window.location.href="http://"+sn.mtsDomain+"/wap/register/getRegister.do"
})
}function logonOff(){$("#footerLogout").click(function(){var a=window.location.href;
window.location.href=sn.wapLogOffUrl+"?storeId=10052&synPassportFlg=true&URL=http://"+sn.mtsDomain+"/accountcenter/logoff.do?targetURL="+a
})
}function cart(){$("#shopCartTip").click(function(){window.location.href="http://"+sn.mtsDomain+"/cart1/gateway/cart1View.do"
})
}function userEvent(){$("#footerUserName").click(function(){window.location.href=sn.mobileBase+"/"+sn.wapMtsWeb+"/accountcenter/private/getAccountCenter.do"
})
}function getLogonInfo(){probeAuthStatus(function(){logonCallback()
},function(){})
}function logonCallback(){var a=$.cookie("nick");
$("#footerLogin").hide();
$("#footerUserName span").html(a);
$("#footerUserName").show();
$("#footerRegister").hide();
$("#footerLogout").show()
}function downloadApp(){if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)){var a=new Date();
window.setTimeout(function(){var b=new Date();
if(b-a<5000){if(navigator.userAgent.match(/MicroMessenger/i)){window.location="http://a.app.qq.com/o/simple.jsp?pkgname=com.suning.mobile.ebuy&g_f=992129";
return
}window.location="https://itunes.apple.com/cn/app/id424598114?l=en&mt=8"
}else{window.close()
}},25);
window.location="com.suning.SuningEbuy://"
}else{if(navigator.userAgent.match(/android/i)){if(navigator.userAgent.match(/MicroMessenger/i)){window.location="http://a.app.qq.com/o/simple.jsp?pkgname=com.suning.mobile.ebuy&g_f=992129";
return
}window.location="http://mapp.suning.com/a.php?s=qrcode/offline&f=ygznwpdt&pack=com.suning.mobile.ebuy"
}}}function openApp(){if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)){var a=new Date();
window.setTimeout(function(){var b=new Date();
if(b-a<5000){if(navigator.userAgent.match(/MicroMessenger/i)){window.location="http://a.app.qq.com/o/simple.jsp?pkgname=com.suning.mobile.ebuy&g_f=992129";
return
}window.location="https://itunes.apple.com/cn/app/id424598114?l=en&mt=8"
}else{window.close()
}},25);
window.location="com.suning.SuningEbuy://"
}else{if(navigator.userAgent.match(/android/i)){if(navigator.userAgent.match(/MicroMessenger/i)){window.location="http://a.app.qq.com/o/simple.jsp?pkgname=com.suning.mobile.ebuy&g_f=992129";
return
}window.location="suning://m.suning.com/index"
}}}function checkMergeCart(){probeAuthStatus(function(){var a=$.cookie("mergeFlag");
if(typeof a==="undefined"||a!="1"){mergeCart()
}},function(){})
}function mergeCart(){var a={storeId:"10052",isMerge:"1",supportPackage:"1",supportAccePack:"0",supportSunPack:"0",supportCheck:"1",supportCShop:"1",supportCShopCheck:"1",supportGroupbuy:"1",mpsChannel:"5",channel:"5",updateWAPCartCookie:"1"};
$.ajax({type:"GET",url:"http://"+sn.mainHostDomain+"/webapp/wcs/stores/servlet/SNMobileShoppingCartQuery",cache:false,async:false,dataType:"jsonp",data:a,jsonp:"callback",success:function(b){},complete:function(){}})
}function openClient(){var e="";
var b="";
if(sn.supplierCode&&sn.supplierCode.length>0){var a=sn.supplierCode;
if(a=="0000000000"){a=""
}e="com.suning.suningebuy://wapToEbuy?adTypeCode=1013&adId="+sn.partNumber+"_"+a;
b="suning://m.suning.com/index?adTypeCode=1013&adId="+sn.partNumber+"&shopCode="+a
}if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)){if(navigator.userAgent.indexOf("SNEBUY-APP")!=-1){window.location=e
}else{var c=new Date();
window.setTimeout(function(){var f=new Date();
if(f-c<5000){window.location.href="https://itunes.apple.com/cn/app/id424598114?l=en&mt=8"
}else{window.close()
}},2000);
window.location=e
}}else{if(navigator.userAgent.match(/android/i)){var d=true;
window.location=b;
window.onblur=function(){d=false
};
setTimeout(function(){if(d){window.location.href="http://mapp.suning.com/a.php?s=qrcode/offline&f=sjyzx&pack=com.suning.mobile.ebuy"
}},5000)
}}};