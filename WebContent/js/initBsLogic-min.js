var FourPage=FourPage||{};
hasStoragePrice=function(){$(".product-set-num-tip").html("");
sn.preBuyType=0;
sn.bookGoodsId="";
sn.cFreightFreeFlag="0";
initCartNum();
$(".intro-price").html("<div id='priceInfo'></div>");
var a=sn.supplierCode;
if(undefined!=sn.shopType&&"-1"==sn.shopType){a=""
}var c=$.cookie("districtId");
var b="http://"+sn.mainHostDomain+"/webapp/wcs/stores/ItemPrice/"+sn.partNumber+"_"+a+"_"+sn.cityId+"_"+c+"_5.html";
return $.ajax({url:b,dataType:"jsonp",jsonp:false,jsonpCallback:"showSaleStatus",timeout:3000,cache:true,error:function(d,f,e){$(".buy-choose").hide();
$(".buy-service").hide();
$("#assessDiv").hide();
$("#shopInfoDiv").hide();
$(".intro-prom").hide();
$(".intro-price").html("<div id='priceInfo'></div>");
$("#addShoppingCart").html("加入购物车");
$("#addShoppingCart").addClass("the-disable");
$("#addShoppingCart").show();
$("#buyNow").html("立即购买");
$("#buyNow").addClass("the-disable");
$("#buyNow").show();
$U.show($(".shopping-car"))
}}).done(hasStoragePriceSuccess)
};
hasStoragePriceSuccess=function(b){if(b){initProductBaseInfo(b.saleInfo[0]);
if(sn.isCShop=="0"&&sn.isPublished!="1"){var a=checkIsAppoint();
if(!a){$("#priceInfo").html("<p class='off'>已下架</p>");
$("#addShoppingCart").hide();
$("#buyNow").html("已下架");
$("#buyNow").addClass("the-disable");
$U.show($(".shopping-car"));
$("#choosePrice").html("已下架");
initChooseProInfo();
$(".buy-service").hide();
$("#assessDiv").hide();
$("#shopInfoDiv").hide();
$(".intro-prom").hide();
sn.supplierCode="0000000000"
}else{commonLogic(b)
}}else{commonLogic(b)
}initFavor()
}else{$(".buy-choose").hide();
$(".buy-service").hide();
$("#assessDiv").hide();
$("#shopInfoDiv").hide();
$(".intro-prom").hide();
$(".intro-price").html("<div id='priceInfo'></div>");
$("#addShoppingCart").html("加入购物车");
$("#addShoppingCart").addClass("the-disable");
$("#addShoppingCart").show();
$("#buyNow").html("立即购买");
$("#buyNow").addClass("the-disable");
$("#buyNow").show();
$U.show($(".shopping-car"))
}changeTempCartCity()
};
function changeTempCartCity(){var a={operationChannel:"50",operationTerminal:"01",operationEquipment:"02",operationStoreCode:"",provinceCode:$.cookie("provinceCode"),cityCode:$.cookie("cityId"),districtCode:$.cookie("districtId"),operationUser:"",townCode:""};
$.ajax({type:"get",url:sn.mCartUrl+"app/cart1/gateway/changeTempCartCity.do",dataType:"jsonp",data:{data:JSON.stringify(a)},jsonp:"callback",success:function(b){initCartNum()
}})
}function commonLogic(a){initStorage(a.saleInfo[0]);
if(sn.hasStorage!="N"){if(sn.isCShop=="0"||sn.swlShopFlag=="true"){initDeliveryAndYunfeiInfo(a.saleInfo[0])
}else{initYunfeiAndDeliveryInfo(a.saleInfo[0])
}}else{initActivityInfo(a.saleInfo[0])
}initUniqueSaleInfo();
if(((sn.isPublished=="1"||sn.isCShop=="1")&&sn.hasStorage=="Y")||sn.bookGoodsId==""){initPromotionInfo(a.saleInfo[0])
}else{$(".intro-prom").hide()
}initChooseProInfo();
initShopBaseInfo(a.saleInfo[0]);
initServiceAttachInfo(a.saleInfo[0]);
initProductCommentInfo();
initConsulationInfo();
initShopEvaluationInfo();
initOtherShopInfo()
}function checkIsAppoint(){var a=sn.base+"/pds-web/ajax/scrice_"+sn.partNumber+"_"+sn.supplierCode+".html";
var b=false;
$.ajax({url:a,dataType:"json",cache:true,error:function(c,e,d){},success:function(c){if(c&&c.isPreBuy=="1"){sn.preBuyActivityID=c.activeID;
sn.resultRurchaseType=c.purchaseType;
b=true
}}});
return b
}function initArayacak(a){if(a){if(null!=a&&a.factorySendFlag=="0"){if(sn.supplierCode=="0000000000"&&sn.sizeAttribute=="2"){$(".buy-service-act").show();
$("#selfDiv").show();
checkArrowStatus(true)
}else{$("#selfDiv").hide();
checkArrowStatus(false)
}}else{if(sn.swlShopFlag=="true"){$(".buy-service-act").show();
$("#selfDiv").show();
checkArrowStatus(true)
}else{$("#selfDiv").hide();
checkArrowStatus(false)
}}}}hasYunfei=function(b){var a="http://"+sn.mainHostDomain+"/emall/pfc_10052_"+sn.catalogid+"_"+sn.partNumber+"_"+sn.cityId+"_showFreightList_.html";
$.ajax({url:a,dataType:"jsonp",jsonp:false,jsonpCallback:"showFreightList",timeout:3000,cache:true,error:function(c,e,d){},success:function(d){var c=false;
$.each(d,function(e,f){if(f.vendorCode==sn.supplierCode&&f.snslt&&f.snslt>0){c=true;
$(".buy-service-act").show();
$("#snltDiv").show();
$(".support-a").html("满"+f.snslt+"免运费");
$("#snltDesc").html("苏宁易购自营商品，满"+f.snslt+"免运费");
checkArrowStatus(true)
}});
if(!c){$("#snltDiv").hide();
checkArrowStatus(false)
}}})
};
hasDeliveryInfo=function(a,d){var b="";
var c=$.cookie("districtId");
if(sn.isCShop=="1"){if(sn.swlShopFlag=="true"){b="http://"+sn.mainHostDomain+"/emall/swlship_10052_"+sn.catalogid+"_swl_"+sn.partNumber+"_0000000000_"+sn.cityId+"_"+c+"_"+a.ownerPlace+"_showDeliveryInfo_.html"
}else{b="http://"+sn.mainHostDomain+"/emall/cship_10052_"+sn.catalogid+"_"+sn.partNumber+"_"+a.vendor+"_"+sn.cityId+"_"+a.ownerPlace+"_showDeliveryInfo_.html"
}}else{b="http://"+sn.mainHostDomain+"/emall/ship_10052_"+sn.catalogid+"_"+sn.partNumber+"_"+a.vendor+"_"+sn.cityId+"_"+c+"_"+a.deptNo+"_"+a.salesOrg+"_"+a.ownerPlace+"_"+a.accountPlace+"_"+a.factorySendFlag+"_"+a.manageInvFlag+"_"+a.sendAvalidTime+"_"+a.invStatus+"_showDeliveryInfo_.html"
}$.ajax({url:b,dataType:"jsonp",jsonp:false,jsonpCallback:"showDeliveryInfo",timeout:3000,cache:true,error:function(e,g,f){},success:function(e){if(e.shipOffSetText){$(".buy-addr-time").html(d+e.shipOffSetText);
sn.shipOffSetText=e.shipOffSetText
}if(sn.hwgType=="1"&&e.sendCityName&&e.sendCityName!=""){$(".intro-title .ico").after("<span>【"+e.sendCityName+"】</span>")
}initActivityInfo(a);
sn.shipOffset=e.shipOffset;
setMaidianInfo()
}})
};
function hasReturnOrd(b,c){var a;
if(sn.supplierCode=="0000000000"){a="http://"+sn.mainHostDomain+"/emall/ret_10052_10051_"+sn.partNumber+"__"+sn.categoryCode_mdm+"_FourPage.showReturnOrchange_.html"
}else{a="http://"+sn.mainHostDomain+"/emall/ret_10052_10051_"+sn.partNumber+"_"+sn.supplierCode+"_"+sn.categoryCode_mdm+"_FourPage.showReturnOrchange_.html"
}$.ajax({url:a,dataType:"jsonp",jsonp:false,jsonpCallback:"FourPage.showReturnOrchange",timeout:3000,cache:true,error:function(d,f,e){},success:function(d){}})
}function checkArrowStatus(a){var b=$("#serviceInfo").parent("ul");
if(a){b.addClass("cm-direct-b");
b.attr("show",true)
}else{if("true"==b.attr("show")){return
}b.removeClass("cm-direct-b");
b.attr("show",false)
}}FourPage.showReturnOrchange=function(b){var a=b.returnFlag;
if("3"==a){var c="15天";
if(sn.supplierCode==lgs_vendor_code||"927HWG"==sn.vendorType||"927HWG1"==sn.vendorType||"3"==sn.vendorType){c="7天"
}$(".buy-service-act").show();
$("#returnDiv").show();
$(".support-d").show();
$(".support-d").html(c+"无理由退换货");
$("#returnDesc").html("自实际收货日期的次日起"+c+"内，商品完好，可进行无理由退换货");
checkArrowStatus(true)
}else{$(".support-d").hide();
$("#returnDesc").hide();
checkArrowStatus(false)
}};
initStorage=function(a){sn.promotionPrice=a.promotionPrice;
sn.netPrice=a.netPrice;
sn.vendor_=a.vendor;
if(sn.promotionPrice!=""){$("#choosePrice").html(sn.promotionPrice)
}else{$("#choosePrice").html("暂不销售")
}if(a.promotionPrice==""){sn.hasStorage="Z";
return
}if(sn.isCShop=="1"){if(a.invStatus=="1"){sn.hasStorage="Y"
}else{sn.hasStorage="N"
}}if(sn.isCShop=="0"){if(a.invStatus=="1"||a.invStatus=="4"){sn.hasStorage="Y"
}else{if(a.invStatus=="2"||a.invStatus=="3"){sn.hasStorage="N"
}else{if(a.invStatus=="0"){sn.hasStorage="Z"
}}}}if("928TM"==a.vendorType){sn.hasStorage="Z"
}};
function initProductCommentInfo(){var a=sn.zoneDomain+"/review/ajax/mobile_detail/"+sn.partNumber+"_jsonp.htm";
$.ajax({url:a,dataType:"jsonp",jsonp:false,jsonpCallback:"aa",timeout:3000,cache:true,error:function(b,d,c){},success:function(c){if(c&&c.mobileReviewDetailDTO){$(".assess-comment").show();
$("#totalEvaluation").html("("+c.mobileReviewDetailDTO.reviewCount+"人评价)");
if(0!=c.mobileReviewDetailDTO.reviewCount){$("#theRateCommodity").html("好评率 "+c.mobileReviewDetailDTO.goodRate+"%")
}var b=sn.base+"/pds-web/comment/"+sn.supplierCode+"/"+sn.partNumber+"_"+sn.gType+"_"+sn.gValue+"_"+sn.currentColor+"_"+sn.currentVersion+".html";
$("#theRateCommodity").parent().parent().click(function(){window.location.href=b
})
}else{$(".assess-comment").hide()
}}})
}function initConsulationInfo(){var b="1"==sn.isCShop?"0":"1";
var a=sn.zoneDomain+"/review/ajax/wcs_consulation_rank/"+sn.partNumber+"-"+sn.supplierCode+"-"+sn.isBook+"-"+b+"-consulationCallback.html?callback=consulationCallback";
$.ajax({url:a,dataType:"jsonp",jsonp:false,jsonpCallback:"consulationCallback",timeout:3000,cache:true,error:function(c,e,d){},success:function(d){if(d){$(".sn-btn-outline").html("用户咨询("+d.totalCount+")");
var c=sn.base+"/pds-web/consult/"+sn.supplierCode+"/"+sn.partNumber+"_"+sn.catalogid+"_1.html";
$(".sn-btn-outline").click(function(){window.location.href=c
})
}}})
}function initShopEvaluationInfo(){var a=sn.zoneDomain+"/review/ajax/supplierEval/"+sn.supplierCode+"-FourPage.showShopScore.html?callback=FourPage.showShopScore";
$.ajax({url:a,dataType:"jsonp",jsonp:false,jsonpCallback:"FourPage.showShopScore",timeout:3000,cache:true,error:function(b,d,c){},success:function(b){}})
}FourPage.showShopScore=function(d){if(d&&d[0]){var c=d[0];
var e=c.quality;
if(parseFloat(e)<=0){e=e.substring(1,e.length);
$("#partQuality").removeClass("the-desc").addClass("the-asc")
}var a=c.attitude;
if(parseFloat(a)<=0){a=a.substring(1,a.length);
$("#partAttitude").removeClass("the-desc").addClass("the-asc")
}var b=c.deliverySpeed;
if(parseFloat(b)<=0){b=b.substring(1,b.length);
$("#the-delivery").removeClass("the-desc").addClass("the-asc")
}$("#saleShopName").find("span").find("em").html(c.shopStar);
$("#partQuality").find("em").html(e);
$("#partAttitude").find("em").html(a);
$("#the-delivery").find("em").html(b)
}};
function initOtherShopInfo(){var a=sn.base+"/pds-web/app/getShopList_"+sn.partNumber.substring(9,sn.partNumber.length)+"_"+sn.cityId+"_"+$.cookie("districtId")+"_"+1+".html";
$.ajax({url:a,dataType:"json",cache:true,error:function(b,d,c){$("#shopList").parent().parent().hide()
},success:function(b){if(b&&b.data){if(b.data.shopCount>1){$("#shopCount").html(b.data.shopCount+"个商家出售此商品");
$("#shopList").click(function(){var d=$.cookie("districtId");
var c=sn.base+"/pds-web/shoplist/"+sn.supplierCode+"/"+sn.partNumber+"_"+sn.cityId+"_"+$.cookie("districtId")+"_"+sn.catalogid+"_"+sn.promotionPrice+".html";
window.location.href=c
});
if(b.data.lowPrice){$("#productPrice").html("<em>￥"+parseFloat(b.data.lowPrice).toFixed(2)+"起</em>")
}else{$("#productPrice").html("")
}}else{$("#shopList").parent().parent().hide()
}if(!b.data.shopCount&&!b.data.lowPrice){$("#shopCount").html("");
$("#productPrice").html("");
$("#shopList").parent().parent().hide()
}}else{$("#shopList").parent().parent().hide()
}}})
}function initShopBaseInfo(a){var b=sn.base+"/pds-web/ajax/vendorInfo_"+sn.supplierCode+".html";
$.ajax({url:b,dataType:"json",cache:true,error:function(c,e,d){},success:function(c){if(c){sn.cshopName=c.shopName;
$(".saleshopname").html(sn.cshopName);
$(".shop-other").show();
$(".buy-service").show();
serviceInfo(a)
}else{$(".shop-other").hide();
$(".buy-service").hide()
}}})
}serviceInfo=function(a){var b="";
if("0"==sn.isCShop){if("1"==a.factorySendFlag){b='由"苏宁"销售，厂家发货，并享受售后服务'
}else{b='由"苏宁"销售和发货，并享受售后服务'
}}else{if("921C店"==sn.vendorType||"927HWG1"==sn.vendorType||"927HWG"==sn.vendorType||"1"==sn.vendorType||"3"==sn.vendorType){b='由 "'+sn.cshopName+'" 销售和发货，并提供售后服务'
}else{if("925SWL"==sn.vendorType||"2"==sn.vendorType){b='由"苏宁"销售和发货，并享受售后服务'
}}}$("#serviceInfo").html(b);
if(("927HWG1"==sn.vendorType||"927HWG"==sn.vendorType)&&sn.itemSource&&sn.itemSource!=""){if($("#serviceInfo").html().indexOf("商品来源地")<0){$("#serviceInfo").append("（商品来源地："+sn.itemSource+"）")
}}};
function initServiceAttachInfo(a){hasReturnOrd();
initArayacak(a)
}function initChooseProInfo(){var g="";
if("p"==sn.gType){$(".buy-choose").find("ul").find("li:eq(1)").html("<span data-event='to-choose'>1件</span>")
}else{try{if(typeof sn.clusterMap!="undefined"&&sn.clusterMap.length!=0){$("#versionItemList").find("label").each(function(){$(this).find("input").attr("disabled","disabled")
});
var b="";
$.each(sn.clusterMap,function(j,e){$.each(e.itemCuPartNumber,function(k,i){if(i.partNumber==sn.partNumber){b=i.versionId;
if($("#colorItemList").find("input:checked").length==0){$("input[colorid='"+e.color+"']").prop("checked",true)
}}})
});
$.each(sn.clusterMap,function(j,e){if(e.color==$("#colorItemList").find("input:checked").attr("colorid")){$.each(e.itemCuPartNumber,function(k,i){$("input[versionid='"+i.versionId+"']").removeAttr("disabled")
})
}});
$("input[versionid='"+b+"']").parent().siblings().each(function(){$(this).find(".sn-input-radio-filter").prop("checked",false)
});
$("input[versionid='"+b+"']").prop("checked",true)
}else{if(typeof sn.gInfo!="undefined"&&sn.gInfo.length!=0){var c=$(".type-choose").eq(0).find("label");
var a=$(".type-choose").eq(1).find("label");
var h="";
if(sn.gPassType!="undefined"&&sn.gPassType>=2){$.each(c,function(e,j){var k=$(j).find("input").attr("colorid");
$.each(a,function(m,l){var i=$(l).find("input").attr("colorid");
if(typeof sn.gInfo[0][k+i]!="undefined"&&sn.gInfo[0][k+i].partNumber==sn.partNumber){h=$(j).find("input").attr("colorid");
if($(j).find("input:checked").length==0){$(j).find("input[colorid='"+h+"']").prop("checked",true)
}}})
});
$.each(a,function(k,i){var e=$(i).find("input").attr("colorid");
if(typeof sn.gInfo[0][h+e]!="undefined"&&sn.gInfo[0][h+e].partNumber==sn.partNumber){$(i).find("input[colorid='"+e+"']").prop("checked",true)
}else{if(typeof sn.gInfo[0][h+e]=="undefined"){$("input[colorid='"+e+"']").removeAttr("disabled")
}}})
}if(sn.gPassType!="undefined"&&sn.gPassType==1){$.each(c,function(e,j){var k=$(j).find("input").attr("colorid");
if(typeof sn.gInfo[0][k]=="undefined"){if($(j).find("input:checked").length==0){$("input[colorid='"+k+"']").prop("checked",true)
}}if(typeof sn.gInfo[0][k]!="undefined"&&sn.gInfo[0][k].partNumber==sn.partNumber){$("input[colorid='"+k+"']").prop("checked",true).siblings().prop("checked",false)
}})
}}else{$("#versionItemList").find("input").each(function(){var e=$(this).attr("sku");
if(sn.partNumber==e){$(this).prop("checked",true);
$(this).siblings().removeAttr("disabled")
}$(this).removeAttr("disabled")
})
}}$(".sn-list-common").find("input:checked").each(function(){g+="<span data-event='to-choose'>"+$(this).attr("data-name")+"</span>"
});
var d=1;
if($.cookie("countNumber_"+sn.partNumber)){d=$.cookie("countNumber_"+sn.partNumber)
}CmpChoose&&CmpChoose.resetLimit({value:d});
$(".buy-choose").find("ul").find("li:eq(1)").html(g+"<span data-event='to-choose'>"+d+"件</span>")
}catch(f){}}}changeVersion=function(c,d,g,h){try{var b="";
var a="";
if($(h).attr("colorid")!=undefined){b=$(h).attr("colorid");
a=$("#versionItemList").find("input:checked").attr("versionid")
}else{a=$(h).attr("versionid");
b=$("#colorItemList").find("input:checked").attr("colorid")
}$.each(sn.clusterMap,function(j,e){if(e.color==b){$.each(e.itemCuPartNumber,function(k,i){if(i.versionId==a){d=i.partNumber
}})
}});
sn.partNumber=d;
if(!sn.initSupplierCode){sn.supplierCode=""
}$.ajax({url:sn.base+"/pds-web/ajax/itemInfo_"+d+".html",type:"get",cache:true,async:false,dataType:"json",success:function(i){try{if(i.published){sn.isPublished=i.published
}hasStoragePrice();
var k=sn.imageUrl+"/b2c/catentries/"+d+"_1_100x100.jpg";
$("#proImg").attr("src",k);
$("#productName").html(i.itemDisplayName.length>18?i.itemDisplayName.substring(0,18)+"...":i.itemDisplayName);
$("#itemDisplayName").html(i.itemDisplayName);
$("#fourPageTitle").html($("#itemDisplayName").html())
}catch(j){}}});
$(h).parent().siblings().each(function(){$(this).find("input").removeAttr("checked")
})
}catch(f){}};
changeSubCode=function(d,f,h,i){try{var b="";
var a="";
var f="";
$(i).attr("checked","checked");
$(i).parent().siblings().find("input").removeAttr("checked");
if($(".type-choose").find("input:checked")!=undefined){var c=$(".type-choose").find("input:checked").length;
b=$(".type-choose").eq(0).find("input:checked").attr("colorid");
a=$(".type-choose").eq(1).find("input:checked").attr("colorid");
if(c==2){f=sn.gInfo[0][b+a].partNumber
}else{f=sn.gInfo[0][b].partNumber
}}sn.partNumber=f;
if(!sn.initSupplierCode){sn.supplierCode=""
}$.ajax({url:sn.base+"/pds-web/ajax/itemInfo_"+f+".html",type:"get",cache:true,async:false,dataType:"json",success:function(j){try{if(j.published){sn.isPublished=j.published
}hasStoragePrice();
var l=sn.imageUrl+"/b2c/catentries/"+f+"_1_100x100.jpg";
$("#proImg").attr("src",l);
$("#productName").html(j.itemDisplayName.length>18?j.itemDisplayName.substring(0,18)+"...":j.itemDisplayName);
$("#itemDisplayName").html(j.itemDisplayName);
$("#fourPageTitle").html($("#itemDisplayName").html())
}catch(k){}}})
}catch(g){}};
reloadPage=function(){try{var c=$(".count-num").val();
if(sn.cuPartNumber!=sn.partNumber){if(sn.shopType=="-1"){window.location.href=sn.base+"/product/"+sn.partNumber.substring(9,18)+".html"
}else{window.location.href=sn.base+"/product/"+sn.supplierCode+"/"+sn.partNumber.substring(9,18)+".html"
}}else{if(undefined==c||""==c){c=1;
$(".product-set-num .count-num").val(c)
}var b="";
$(".sn-list-common").find("input:checked").each(function(){b+="<span data-event='to-choose'>"+$(this).attr("data-name")+"</span>"
});
$(".buy-choose").find("ul").find("li:eq(1)").html(b+"<span data-event='to-choose'>"+c+"件</span>")
}$.cookie("countNumber_"+sn.partNumber,c,{path:"/",domain:sn.cookieDomain})
}catch(a){}};
function initUniqueSaleInfo(){var a=sn.base+"/pds-web/ajax/getItemdesc_"+sn.partNumber+"_"+sn.supplierCode+".html";
$.ajax({url:a,dataType:"json",cache:true,success:function(d){if(d){var c=false;
var f="";
for(var b=0;
b<d.length;
b++){var e=d[b];
if("1"==e.descType){c=true;
f=e.description;
break
}}if(c){$(".intro-title-desc a").html(f)
}else{$(".intro-title-desc a").hide()
}}else{$(".intro-title-desc a").hide()
}}})
}function initPromotionInfo(b){sn.vendor_=b.vendor;
if(b.vendor==""){sn.vendor_="0000000000"
}sn.salesOrg=b.salesOrg;
var a="http://"+sn.mainHostDomain+"/emall/snsearchpromapp_10052_10051_5__"+sn.cityId+"_"+$.cookie("provinceCode")+"_"+sn.partNumber+"_"+sn.vendor_+"_"+b.promotionPrice+"_"+b.promotionPrice+"__"+sn.salesOrg+"_FourPage.showPromStatus_.html";
$.ajax({url:a,dataType:"jsonp",jsonp:false,jsonpCallback:"FourPage.showPromStatus()",timeout:3000,cache:true,error:function(c,e,d){},success:function(c){}})
}FourPage.showPromStatus=function(c){var h="";
var f="";
var b="";
var i=0;
var a="";
var d=0;
if(c&&c.activityList){$.each(c.activityList,function(k,j){if(j.activityTypeId=="5"&&!sn.promotionActiveId){h+=j.activityDescription+";"
}else{if(j.activityTypeId=="4"&&!sn.promotionActiveId){f+=j.activityDescription+";"
}else{if(j.activityTypeId=="7"){b+=j.activityDescription+";";
if(j.activityLink!=""&&j.activityLink=="1"){sn.cFreightFreeFlag="1"
}}else{if(j.activityTypeId=="8"&&!sn.promotionActiveId){i++
}else{if(j.activityTypeId=="6"&&!sn.promotionActiveId){d++;
if(d<=2){a+="<em data-name='prodDetail_none_main_xYn' onclick=enterTjinfo('"+j.activityId+"') class='desc-a'>"+j.activityDescription+"</em>"
}}}}}}});
addPromotionInfo(h,"fj");
addPromotionInfo(f,"mj");
addPromotionInfo(b,"myf");
addPromotionLqInfo(i);
addPromotionTjInfo(a);
if(sn.cFreightFreeFlag=="1"){$(".buy-addr-time").html(sn.shipOffSetText)
}}var g=5;
if(sn.vendorCode==""){g=6
}if(sn.hwgType==""||sn.hwgType=="0"){var e="http://"+sn.mainHostDomain+"/emall/calcPointAndSend_"+g+"_"+sn.categoryCode_mdm+"_"+sn.promotionPrice+"_FourPage.yunzuanCallbackFunp_.html";
$.ajax({url:e,type:"get",cache:true,timeout:3000,dataType:"jsonp",error:function(j,l,k){hidePromotionInfo()
},jsonpCallback:"FourPage.yunzuanCallbackFunp()",success:function(j){}})
}};
FourPage.yunzuanCallbackFunp=function(a){if(a&&a.accountAmt&&"0.00"!=a.accountAmt&&"0"!=a.accountAmt){$(".intro-prom").show();
$("#fyzdesc").html("购买可返"+Math.floor(a.accountAmt)+"云钻");
$("#fyz").show();
$("#fyzli").show()
}else{$("#fyz").hide();
$("#fyzli").hide()
}hidePromotionInfo()
};
function addPromotionInfo(b,a){if(b){b=b.substring(0,b.length-1);
$(".intro-prom").show();
$("#"+a).show();
$("#"+a+"desc").html(b);
$("#"+a+"li").show()
}else{$("#"+a).hide();
$("#"+a+"li").hide()
}}function addPromotionLqInfo(a){if(a>0){$(".intro-prom").show();
$("#lq").show();
$("#lqli").addClass("receive");
$("#lqli").show();
$("#lqli").click(function(){var b=sn.cityId+"_"+$.cookie("provinceCode")+"_"+sn.partNumber+"_"+sn.vendor_+"_"+sn.promotionPrice+"_"+sn.salesOrg+"_0";
location.href=sn.base+"/pds-web/coupon/coupon_"+b+".html"
})
}else{$("#lq").hide();
$("#lqli").hide();
$("#lqli").removeClass("receive")
}}function addPromotionTjInfo(a){if(a){a=a.substring(0,a.length-1);
$(".intro-prom").show();
$("#tj").show();
$("#J_suite").html(a);
$("#tjli").show()
}else{$("#tj").hide();
$("#tjli").hide()
}}function enterTjinfo(a){window.location.href=sn.mobileBase+"/xngoods/xn_"+a+"_0.html"
}function hidePromotionInfo(){var a=0;
$(".prom-list li").each(function(b,c){if($("#"+c.id).is(":hidden")){a++
}});
if(a==6||sn.bookGoodsId!=""){$(".intro-prom").hide()
}}initProductBaseInfo=function(a){sn.hwgType="";
if(sn.supplierCode==""||sn.supplierCode=="null"){var b=a.vendorCode;
if(b==""){sn.supplierCode="0000000000"
}else{sn.supplierCode=b
}}sn.catalogid=sn.isBook=="false"?"10051":"22001";
if(sn.vendorType=="1"||a.vendorType=="921C店"||sn.vendorType=="921C店"){sn.isCShop="1";
if(a.vendorType){sn.vendorType=a.vendorType
}}else{if(sn.vendorType=="2"||a.vendorType=="925SWL"||sn.vendorType=="925SWL"){sn.swlShopFlag="true";
sn.isCShop="1";
if(a.vendorType){sn.vendorType=a.vendorType
}}else{if(sn.vendorType=="3"||a.vendorType=="927HWG"||a.vendorType=="927HWG1"||sn.vendorType=="927HWG"||sn.vendorType=="927HWG1"){if(a.vendorType){sn.vendorType=a.vendorType
}sn.isCShop="1";
if(a.ownerPlace.indexOf("H")==0){sn.hwgType="2"
}else{if(a.ownerPlace.indexOf("B")==0||a.ownerPlace.indexOf("L")==0){sn.hwgType="1"
}else{sn.hwgType="0"
}}}else{sn.isCShop="0"
}}}if(sn.isCShop=="0"){$(".intro-title a").find("i").remove();
$(".intro-title a").find("span").remove();
$(".intro-title a").prepend("<i></i>")
}else{if(sn.hwgType!=""){$(".intro-title a").find("i").remove();
$(".intro-title a").find("span").remove();
$(".intro-title a").prepend('<span class="ico tc">海外购</span>');
if(sn.hwgType=="2"){$(".intro-title .ico").after("<span>【海外直邮】</span>")
}if(sn.hwgType!="0"){$("#hwgDiv").show();
$(".buy-service-act").show();
checkArrowStatus(true)
}else{checkArrowStatus(false)
}}else{$(".intro-title a").find("i").remove();
$(".intro-title a").find("span").remove()
}}if(sn.isCShop=="1"){$("#saleShopName").addClass("cm-direct-r");
$("#saleShopName").attr("data-name","prodDetail_none_main_shopDetail");
$("#saleShopName").click(function(){var c="";
if(sn.supplierCode.length>8){c=sn.supplierCode.substring(2,sn.supplierCode.length)
}else{c=sn.supplierCode
}window.location.href="http://"+sn.refShopUrl+c+".html"
})
}else{$("#saleShopName").click(function(){});
$("#saleShopName").removeClass("cm-direct-r");
$("#saleShopName").removeAttr("data-name")
}sn.priceType=a.priceType;
sn.promotionActiveId=a.juId;
if(sn.priceType&&sn.priceType.indexOf("4")!=0&&sn.promotionActiveId){sn.promotionActiveId=""
}window.Detail&&Detail.GrahicDetail()
};
function initActivityInfo(a){if(sn.preBuyActivityID&&sn.resultRurchaseType){$("#tj").hide();
$("#tjli").hide();
hidePromotionInfo();
initPreBuyPriceInfo(sn.preBuyActivityID,sn.resultRurchaseType)
}else{var b=sn.base+"/pds-web/ajax/scrice_"+sn.partNumber+"_"+sn.supplierCode+".html";
$.ajax({url:b,dataType:"json",cache:true,error:function(c,e,d){},success:function(d){if(d&&d.isPreBuy=="1"){$("#tj").hide();
$("#tjli").hide();
hidePromotionInfo();
sn.preBuyActivityID=d.activeID;
initPreBuyPriceInfo(d.activeID,d.purchaseType)
}else{if(sn.priceType&&sn.priceType.indexOf("4")==0){var c="";
if(sn.hwgType!=""){c="闪购"
}else{if("4-1"==sn.priceType){c="大聚惠"
}if("4-2"==sn.priceType){c="抢购"
}if("4-3"==sn.priceType){c="团购"
}if("4-4"==sn.priceType){c="闪购"
}}if("4-5"!=sn.priceType){a.djhFlag="1";
initPriceInfo(a)
}else{$("#priceInfo").html('<span class="price-a"><em>￥</em>'+a.promotionPrice+"</span>")
}if(c){$("#priceInfo").append('<span class="ico tc red">'+c+"</span>")
}initDjhInfo(a)
}else{initPriceInfo(a);
setCartInfo()
}}}})
}}function getPreBookActivite(a,b){var c=sn.base+"/pds-web/ajax/getActionInfo_"+sn.partNumber+"_"+sn.vendor_+"_"+a+"_"+b+".html";
$.ajax({url:c,dataType:"json",cache:false,success:function(e,f,d){if(e){if(sn.netPrice&&sn.netPrice>e.bookPrice){$("#priceInfo").prepend('<span class="price-b">¥'+parseFloat(sn.netPrice).toFixed(2)+"</span>")
}$("#priceInfo").prepend('<span class="price-a"><em>¥</em>'+parseFloat(e.bookPrice).toFixed(2)+"</span>");
$("#choosePrice").html(parseFloat(e.bookPrice).toFixed(2));
initPreBookActivite(e)
}}})
}function initPreBookActivite(a){var g=sn.cityId;
var i=a.disCityList;
window.isSupport=true;
if(a.commerceCityStr){var f=a.commerceCityStr.split(",");
if($.inArray(sn.cityId,f)<0){isSupport=false
}}var e=0;
if(sn.isCShop=="1"){e=a.realBookedCount
}else{e=a.realBookedCount+a.virtualBookedCount
}if(parseFloat(e)<0){e=0
}sn.bookData=a;
var d=a.bookPrice-a.depositAmount;
var c="该城市不参与预订！";
var b='<div class="act-info">';
if(sn.netPrice==""||a.bookRemain==3){c="该城市暂不支持预订！";
isSupport=false
}else{b+='<span class="buy-info">已预订:&nbsp;&nbsp;<em class="amount">'+e+'</em>件</span><a href="http://sale.suning.com/images/advertise/ydgz0529/index.html" class="act-rule fr">预订规则?</a>'
}b+='<div class="count-down" nowTime="'+a.curTime+'" depositStartTime="'+a.depositStartTime+'" depositEndTime="'+a.depositEndTime+'" balanceStartTime="'+a.balanceStartTime+'" balanceEndTime="'+a.balanceEndTime+'" sendTime="'+a.sendTime+'"></div></div><div class="act-info" id="bookNotSupport" style="display: none;">'+c+"</div>";
$(".intro-price").append(b);
var h='<ul class="book-list wbox"><li id="J_deposit"><div class="book-block"><span class="info">付定金</span><span class="info">¥<em class="mount">'+parseFloat(a.depositAmount).toFixed(2)+'</em></span></div></li><li id="J_balance"><div class="book-block"><span class="info">付尾款</span><span class="info">¥<em class="mount">'+parseFloat(d).toFixed(2)+'</em></span></div></li><li><div class="book-block"><span class="info">发货</span></div></li></ul>';
$(".intro-book").html(h);
if(a.personBuyLimit!=0&&a.personBuyLimit!=""&&typeof a.personBuyLimit!="undefined"){$(".product-set-num-tip").html("每人限购"+a.personBuyLimit+"件");
CmpChoose.resetLimit({min:1,max:a.personBuyLimit})
}else{$(".product-set-num-tip").html("");
CmpChoose.resetLimit({min:1,max:99})
}if(!isSupport){$("#bookNotSupport").show();
$(".intro .count-down").hide();
AlertBox({type:"mini",msg:"非常抱歉，"+c})
}Detail.timer({obj:$(".intro .count-down"),statusObj:$(".intro .act-info"),times:{actionStartTime:a.actionStartTime,actionEndTime:a.actionEndTime,depositStartTime:a.depositStartTime,depositEndTime:a.depositEndTime,balanceStartTime:a.balanceStartTime,balanceEndTime:a.balanceEndTime,sendTime:a.sendTime,nowtime:a.curTime},type:2,callback:function(k,j){if(0==k||1==k){$(".intro-price .buy-info").hide();
$("#addShoppingCart").html("等待预订");
$("#addShoppingCart").addClass("the-disable")
}else{if(2==k){if(sn.bookData.bookRemain==0){$("#addShoppingCart").html("已订完");
$("#addShoppingCart").addClass("the-disable")
}else{if(sn.bookData.bookRemain==1){$("#addShoppingCart").html("已订完");
$("#addShoppingCart").addClass("the-disable");
if(!this._flag&&sn.bookData.unPayedNum&&sn.bookData.unPayedNum>0){AlertBox({type:"onceConfirm",msg:"预订资格已抢完，还有"+sn.bookData.unPayedNum+"位客户尚未支付定金，您还有机会，请稍后再来试试"});
this._flag=true
}}else{if(isSupport){$("#addShoppingCart").html("支付定金");
$("#addShoppingCart").removeClass("the-disable");
sn.preBuyType=3
}else{$("#addShoppingCart").html("支付定金");
$("#addShoppingCart").addClass("the-disable");
sn.preBuyType=3
}}}$("#J_deposit").addClass("past cur");
$("#J_balance").removeClass()
}else{if(3==k){$("#addShoppingCart").html("等待付尾款");
$("#addShoppingCart").addClass("the-disable");
$("#J_deposit").removeClass().addClass("past");
$("#J_balance").removeClass()
}else{if(4==k){if(isSupport){$("#addShoppingCart").html("支付尾款");
sn.preBuyType=4;
if(sn.hasStorage=="N"){$("#addShoppingCart").addClass("the-disable");
$("bookNotSupport").html("无货");
$("bookNotSupport").show();
$(".intro .count-down").hide()
}else{if(sn.hasStorage=="Z"){$("#addShoppingCart").addClass("the-disable");
$("bookNotSupport").html("暂不销售");
$("bookNotSupport").show();
$(".intro .count-down").hide()
}else{$("#addShoppingCart").removeClass("the-disable")
}}}else{$("#addShoppingCart").html("支付尾款");
$("#addShoppingCart").addClass("the-disable")
}$("#J_deposit").removeClass().addClass("past");
$("#J_balance").removeClass().addClass("past cur")
}else{if(5==k){$(".intro-book").hide();
$("#addShoppingCart").html("已结束");
$("#addShoppingCart").addClass("the-disable");
$("#J_deposit").removeClass().addClass("past");
$("#J_balance").removeClass().addClass("past")
}else{if(6==k){$("#J_deposit").removeClass().addClass("past");
$("#J_balance").removeClass().addClass("past")
}}}}}}}});
$("#addShoppingCart").show();
$("#buyNow").hide();
$U.show($(".shopping-car"))
}function initPriceInfo(a){a.sn=sn;
var b=template("price_tmpl",a);
$("#priceInfo").html(b)
}function initPreBuyPriceInfo(a,b){var c=sn.yushouDomain+"/jsonp/appoint/getGoodsPrice-"+sn.partNumber+"-"+sn.supplierCode+"-"+a+"-prcessPSSPrice.htm";
$.ajax({url:c,dataType:"jsonp",jsonp:false,jsonpCallback:"prcessPSSPrice",timeout:3000,cache:true,error:function(d,f,e){},success:function(d){if(d){if(d.price){$("#priceInfo").html('<span class="price-a"><em>&yen;</em>'+d.price+"</span>")
}else{$("#priceInfo").html('<span class="price-a"><em>&yen;</em>暂无报价</span>')
}}else{$("#priceInfo").html('<span class="price-a"><em>&yen;</em>暂无报价</span>')
}preBuyDetailInfo(b)
}})
}function preBuyDetailInfo(a){var c=sn.supplierCode;
if(c=="0000000000"){c=""
}var b=sn.base+"/pds-web/ajax/getActionInfo_"+sn.partNumber+"_"+c+"_"+sn.preBuyActivityID+"_.html";
$.ajax({url:b,dataType:"json",cache:true,error:function(d,f,e){},success:function(f){if(f){var g=sn.cityId;
var j=f.disCityList;
var i=false;
if(j){for(var l=0;
l<j.length;
l++){if(g==j[l]){i=true;
break
}}}if("2"==f.adapteTerminal){$("#priceInfo").append('<span id="prebuylab" class="ico tc red">手机专享预售</span>')
}else{if("3"==f.adapteTerminal){$("#priceInfo").append('<span id="prebuylab" class="ico tc red">预售</span>')
}}if(i){$(".count-down").remove();
var p="<div class='act-info'><div style='color:red'>该地区不参加预约活动</div></div>";
$(".intro-price").append(p);
sn.preBuyType=0;
$("#addShoppingCart").html("加入购物车");
$("#addShoppingCart").addClass("the-disable");
$("#addShoppingCart").show();
$("#buyNow").hide();
$U.show($(".shopping-car"))
}else{sn.limitBuyNum=f.personBuysLimit;
sn.purchaseType=f.purchaseTypes;
if(a&&a.indexOf("P03")>=0){sn.purchaseType="P03"
}if(f.personBuysLimit!=0){sn.priceType="5";
$(".product-set-num-tip").html("每人限购"+f.personBuysLimit+"件");
CmpChoose.resetLimit({min:1,max:f.personBuysLimit})
}else{sn.priceType="";
$(".product-set-num-tip").html("");
CmpChoose.resetLimit({min:1,max:99})
}var n=f.scheduleStartTime;
var e=f.scheduleEndTime;
var q=f.priorPurchaseStartTime;
var k=f.priorPurchaseEndTime;
var m=f.phonePurchaseStartTime;
var h=f.purStartTime;
var d=f.purEndTime;
var o=f.curTime;
if(m){h=m
}var p="<div class='act-info'><div class='count-down'></div></div>";
$(".intro-price").append(p);
Detail.timer({obj:$(".intro .count-down"),statusObj:$(".intro .act-info"),times:{schedulestarttime:n,scheduleendtime:e,priorpurchasestarttime:q,priorpurchaseendtime:k,phonepurchasestarttime:m,purchasestarttime:h,purchaseendtime:d,nowtime:o},type:1,callback:function(s,r){if(0==s){$("#addShoppingCart").html("等待预约");
$("#addShoppingCart").addClass("the-disable");
$("#addShoppingCart").show();
$("#buyNow").hide();
$U.show($(".shopping-car"))
}else{if(1==s){$("#addShoppingCart").html("立即预约");
$("#addShoppingCart").removeClass("the-disable");
$("#addShoppingCart").attr("data-name","prodDetail_none_main_ljyy");
$("#addShoppingCart").show();
$("#buyNow").hide();
$U.show($(".shopping-car"));
sn.preBuyType=1
}else{if(2==s){$("#addShoppingCart").html("等待抢购");
$("#addShoppingCart").addClass("the-disable");
$("#addShoppingCart").show();
$("#buyNow").hide();
$U.show($(".shopping-car"))
}else{if(3==s){setCartInfoForPre(1,r)
}else{if(4==s){$("#addShoppingCart").html("等待抢购");
$("#addShoppingCart").addClass("the-disable");
$("#addShoppingCart").show();
$("#buyNow").hide();
$U.show($(".shopping-car"))
}else{if(5==s){setCartInfoForPre(0,r)
}else{if(6==s){$("#addShoppingCart").html("等待抢购");
$("#addShoppingCart").addClass("the-disable");
$("#addShoppingCart").show();
$("#buyNow").hide();
$U.show($(".shopping-car"))
}else{if(7==s){setCartInfoForPre(0,r)
}else{if(8==s){$("#addShoppingCart").html("立即抢购");
$("#addShoppingCart").addClass("the-disable");
$("#addShoppingCart").show();
$("#buyNow").hide();
$U.show($(".shopping-car"))
}else{if(9==s){$("#addShoppingCart").html("立即抢购");
$("#addShoppingCart").addClass("the-disable");
$("#addShoppingCart").show();
$("#buyNow").hide();
$U.show($(".shopping-car"))
}else{if(10==s){$("#addShoppingCart").html("已抢完");
$("#addShoppingCart").addClass("the-disable");
$("#addShoppingCart").show();
$("#buyNow").hide();
$U.show($(".shopping-car"))
}}}}}}}}}}}}})
}}else{sn.preBuyType=0;
setCartInfo()
}}})
}function setCartInfoForPre(b,a){if(sn.isCShop=="0"&&sn.isPublished!="1"){$("#priceInfo").html("<p class='off'>已下架</p>");
$("#addShoppingCart").hide();
$("#buyNow").html("已下架");
$("#buyNow").addClass("the-disable");
$U.show($(".shopping-car"));
$(".buy-choose").hide();
$(".buy-service").hide();
$("#assessDiv").hide();
$("#shopInfoDiv").hide();
sn.supplierCode="0000000000"
}else{if(sn.hasStorage=="N"||sn.hasStorage=="Z"){$("#addShoppingCart").hide();
if(1==b){$("#buyNow").html("特权通道")
}else{$("#buyNow").html("立即抢购")
}$("#buyNow").addClass("the-disable");
$("#buyNow").show();
$U.show($(".shopping-car"))
}else{if(1==b){if("P03"==sn.purchaseType){$("#addShoppingCart").html("特权通道");
$("#addShoppingCart").attr("data-name","prodDetail_none_main_tqtd")
}}else{sn.purchaseType="P01";
$("#addShoppingCart").html("立即抢购");
$("#addShoppingCart").attr("data-name","")
}$("#addShoppingCart").removeClass("the-disable");
$("#addShoppingCart").show();
$("#buyNow").hide();
$U.show($(".shopping-car"));
sn.preBuyType=2
}}}function appointNow(){var a=sn.yushouDomain+"/appointwap/passport/gotoAppoint.do?actionCode="+sn.preBuyActivityID+"&productCode="+sn.partNumber+"&venderCode="+sn.supplierCode+"&purchaseType="+sn.purchaseType+"&terminalFlag=0";
window.location.href=a
}function appointBuyNow(){var a={base:sn.mobileBase+"/",loginTheme:sn.idsLoginTheme};
var b=sn.yushouDomain+"/jsonp/appoint/checkQualificationStatus-"+sn.preBuyActivityID+"-"+sn.partNumber+"-"+sn.supplierCode+"-"+sn.purchaseType+"-2-buyNowCall.do";
probeAuthStatus(function(){$.ajax({url:b,dataType:"jsonp",jsonp:false,jsonpCallback:"buyNowCall",timeout:3000,cache:true,error:function(c,e,d){},success:function(c){if(0==c){uncheckItems()
}else{AlertBox({type:"mini",msg:"抱歉！您还木有预约资格或者资格已用完！"});
return
}}})
},function(){var d=window.location.href;
if(d&&d.indexOf("?")>=0){d=d.substring(0,d.indexOf("?"))
}var c=sn.authUrl+"?targetUrl="+encodeURIComponent(d);
window.location.href=sn.authServerUrl+"/login?loginTheme=wap_new&service="+encodeURIComponent(c)
},a)
}function depositNow(){var a=sn.yushouDomain+"/wap/book/gotoBookOrder.do?partNumber="+sn.partNumber+"&bookGoodsId="+sn.bookGoodsId+"&buyNum="+$(".count-num").val()+"&adapteTerminal=WAP&terminalFlag=0";
window.location.href=a
}function balanceNow(){var a=sn.yushouDomain+"/book/outerIntf/validatePayBalanceByJsonp-"+sn.bookActivityID+"-"+sn.partNumber+"-"+sn.supplierCode+"-inits.do";
probeAuthStatus(function(){$.ajax({url:a,dataType:"jsonp",jsonp:false,jsonpCallback:"inits",timeout:3000,cache:true,error:function(b,d,c){},success:function(b){if(b.resultFlag){if(b.resultCode=="100-01-00"){window.location.href=sn.mCartUrl+"project/cart/orderListPre.html?terminalFlag=0"
}else{AlertBox({type:"onceConfirm",msg:b.resultMsg})
}}}})
},function(){var c=window.location.href;
if(c&&c.indexOf("?")>=0){c=c.substring(0,c.indexOf("?"))
}var b=sn.authUrl+"?targetUrl="+encodeURIComponent(c);
window.location.href=sn.authServerUrl+"/login?loginTheme=wap_new&service="+encodeURIComponent(b)
},passport_config)
}function initDeliveryAndYunfeiInfo(a){var b="";
var c=$.cookie("districtId");
if(sn.isCShop=="1"){if(sn.swlShopFlag=="true"){b="http://"+sn.mainHostDomain+"/emall/swlship_10052_"+sn.catalogid+"_swl_"+sn.partNumber+"_0000000000_"+sn.cityId+"_"+c+"_"+a.ownerPlace+"_showDeliveryInfo_.html"
}else{b="http://"+sn.mainHostDomain+"/emall/cship_10052_"+sn.catalogid+"_"+sn.partNumber+"_"+a.vendor+"_"+sn.cityId+"_"+a.ownerPlace+"_showDeliveryInfo_.html"
}}else{b="http://"+sn.mainHostDomain+"/emall/ship_10052_"+sn.catalogid+"_"+sn.partNumber+"_"+a.vendor+"_"+sn.cityId+"_"+c+"_"+a.deptNo+"_"+a.salesOrg+"_"+a.ownerPlace+"_"+a.accountPlace+"_"+a.factorySendFlag+"_"+a.manageInvFlag+"_"+a.sendAvalidTime+"_"+a.invStatus+"_showDeliveryInfo_.html"
}$.ajax({url:b,dataType:"jsonp",jsonp:false,jsonpCallback:"showDeliveryInfo",timeout:3000,cache:true,error:function(d,f,e){},success:function(d){if(d.shipOffSetText){$(".buy-addr-time").html(d.shipOffSetText);
hasYunfei(a)
}else{sn.hasStorage="Z";
$(".buy-addr-time").html("");
$(".buy-addr-time").hide();
$("#choosePrice").html("暂不销售")
}initActivityInfo(a);
sn.shipOffset=d.shipOffSet;
setMaidianInfo()
}})
}function setMaidianInfo(){snga=self.snga||{};
if(sn.hasStorage=="Z"){snga.productStatus=3;
snga.shipOffset=-2
}else{if(sn.hasStorage=="N"){snga.productStatus=2;
snga.shipOffset=-1
}else{snga.productStatus=1;
snga.shipOffset=sn.shipOffset
}}}function initYunfeiAndDeliveryInfo(b){var a="http://"+sn.mainHostDomain+"/emall/pfc_10052_"+sn.catalogid+"_"+sn.partNumber+"_"+sn.cityId+"_showFreightList_.html";
$.ajax({url:a,dataType:"jsonp",jsonp:false,jsonpCallback:"showFreightList",timeout:3000,cache:true,error:function(c,e,d){},success:function(d){var e="";
var c=false;
$.each(d,function(f,g){if(g.vendorCode==sn.supplierCode){c=true;
if(g.fare==""||g.fare=="0"||g.fare=="0.00"||g.fare==".00"||g.fare=="免运费"){if(sn.isCShop!="0"){e="免运费&nbsp;&nbsp;";
$(".buy-addr-time").html(e)
}hasDeliveryInfo(b,e)
}else{if(g.fare<=-1&&sn.isCShop=="1"){sn.hasStorage="Z";
$(".buy-addr-time").html("");
$(".buy-addr-time").hide();
$("#choosePrice").html("暂不销售");
initActivityInfo(b)
}else{if("0"==sn.cFreightFreeFlag){e="运费：￥"+parseFloat(g.fare).toFixed(2)+"&nbsp;&nbsp;";
$(".buy-addr-time").html(e)
}hasDeliveryInfo(b,e)
}}}});
if(!c){initPriceInfo(b);
sn.hasStorage="Z";
$("#choosePrice").html("暂不销售");
setCartInfo()
}}})
}function initDjhInfo(a){var b=sn.base+"/pds-web/sale/djhAct_"+sn.partNumber+"_"+sn.supplierCode+"_WAP.html";
$.ajax({url:b,dataType:"json",cache:false,success:function(g,e,k){if(sn.promotionPrice){if(g.isDjhActive==1&&g.djhActiveStatus!=1&&(g.gPActivityInfo.gbCommNum-g.gPActivityInfo.saleNum!=0)){var j=g.gPActivityInfo.gbPrice==null?"":g.gPActivityInfo.gbPrice;
sn.commNum=g.gPActivityInfo.gbCommNum-g.gPActivityInfo.saleNum;
sn.promotionActiveId=g.gPActivityInfo.grppurId;
sn.limitBuyNum=g.gPActivityInfo.limitBuyNum;
if(g.gPActivityInfo.limitBuyNum!=0){$(".product-set-num-tip").html("每人限购"+g.gPActivityInfo.limitBuyNum+"件");
CmpChoose.resetLimit({min:1,max:g.gPActivityInfo.limitBuyNum})
}else{$(".product-set-num-tip").html("");
CmpChoose.resetLimit({min:1,max:99})
}var h="<div class='act-info'>";
var c="";
if(g.gPActivityInfo.attractType=="5"){var f=0;
if(g.mtsPriceBean){f=g.mtsPriceBean.promotionPrice==null?"":g.mtsPriceBean.promotionPrice
}if(Number(f)>Number(j)){var i="<div class='forapp'><span class='ico'>手机专享</span><span class='desc'>(比电脑买优惠<em>"+accSub(j,f)+"</em>元)</span></div>";
$(".intro-price").append(i)
}else{if(sn.commNum==0){c+="<span class='buy-info'>已抢完</span>"
}else{c="<span class='buy-info'>已购买:&nbsp;&nbsp;<em class='amount'>"+g.gPActivityInfo.saleNum+"</em>件</span>"
}}}else{if(sn.commNum==0){c+="<span class='buy-info'>已抢完</span>"
}else{c="<span class='buy-info'>已购买:&nbsp;&nbsp;<em class='amount'>"+g.gPActivityInfo.saleNum+"</em>件</span>"
}}h+="<div class='count-down' data-now='"+g.currentTime+"' data-startTime='"+g.startTime+"' data-endTime='"+g.endTime+"' ></div></div>";
$(".intro-price").append(h);
var d=false;
Detail.timer({obj:$(".intro .count-down"),statusObj:$(".intro .act-info"),times:{starttime:g.startTime,endtime:g.endTime,nowtime:g.currentTime},type:0,callback:function(m,l){if(0==m){$("#buyNow").html("立即购买");
$("#buyNow").addClass("the-disable");
$("#buyNow").show();
$("#addShoppingCart").html("加入购物车");
$("#addShoppingCart").addClass("the-disable");
$("#addShoppingCart").show();
$U.show($(".shopping-car"))
}else{if(1==m){$(".act-info").prepend(c);
d=true;
setCartInfoForDjh(l)
}else{if(10==m){if(!d){$(".act-info").prepend(c)
}$("#addShoppingCart").hide();
$("#buyNow").html("已结束");
$("#buyNow").addClass("the-disable");
$("#buyNow").show();
$U.show($(".shopping-car"))
}}}}})
}else{setCartInfo()
}}else{$("#addShoppingCart").hide();
$("#buyNow").html("暂不销售");
$("#buyNow").addClass("the-disable");
$("#buyNow").show();
$U.show($(".shopping-car"))
}},error:function(){setCartInfo()
}})
}function setCartInfoForDjh(a){if(sn.hasStorage=="N"){$(".act-info").hide();
if(a){window.clearInterval(a)
}$("#addShoppingCart").hide();
$("#buyNow").html("无货");
$("#buyNow").addClass("the-disable");
$("#buyNow").show();
$U.show($(".shopping-car"))
}else{if(sn.hasStorage=="Z"){$(".act-info").hide();
if(a){window.clearInterval(a)
}$("#addShoppingCart").hide();
$("#buyNow").html("暂不销售");
$("#buyNow").addClass("the-disable");
$("#buyNow").show();
$U.show($(".shopping-car"))
}else{$("#addShoppingCart").removeClass("the-disable");
$("#addShoppingCart").html("加入购物车");
$("#addShoppingCart").show();
$("#buyNow").html("立即购买");
$("#buyNow").removeClass("the-disable");
$("#buyNow").show();
$U.show($(".shopping-car"))
}}}function setCartInfo(){if(sn.isCShop=="1"){if(sn.hasStorage=="N"){$("#addShoppingCart").hide();
$("#buyNow").html("无货");
$("#buyNow").addClass("the-disable");
$("#buyNow").show();
$U.show($(".shopping-car"))
}else{if(sn.hasStorage=="Z"){$("#addShoppingCart").hide();
$("#buyNow").html("暂不销售");
$("#buyNow").addClass("the-disable");
$("#buyNow").show();
$U.show($(".shopping-car"))
}else{$("#addShoppingCart").removeClass("the-disable");
$("#addShoppingCart").html("加入购物车");
$("#addShoppingCart").show();
$("#buyNow").html("立即购买");
$("#buyNow").removeClass("the-disable");
$("#buyNow").show();
$U.show($(".shopping-car"))
}}}else{if(sn.isCShop=="0"){if(sn.isPublished!="1"){$("#priceInfo").html("<p class='off'>已下架</p>");
$("#addShoppingCart").hide();
$("#buyNow").html("已下架");
$("#buyNow").addClass("the-disable");
$("#buyNow").show();
$U.show($(".shopping-car"))
}else{if(sn.hasStorage=="Y"){$("#addShoppingCart").removeClass("the-disable");
$("#addShoppingCart").html("加入购物车");
$("#addShoppingCart").show();
$("#buyNow").html("立即购买");
$("#buyNow").removeClass("the-disable");
$("#buyNow").show();
$U.show($(".shopping-car"))
}else{if(sn.hasStorage=="N"){$("#addShoppingCart").hide();
$("#buyNow").html("无货");
$("#buyNow").addClass("the-disable");
$("#buyNow").show();
$U.show($(".shopping-car"))
}else{if(sn.hasStorage=="Z"){$("#addShoppingCart").hide();
$("#buyNow").html("暂不销售");
$("#buyNow").addClass("the-disable");
$("#buyNow").show();
$U.show($(".shopping-car"))
}}}}}}}function accSub(f,d){var c,b,a,h;
try{c=f.toString().split(".")[1].length
}catch(g){c=0
}try{b=d.toString().split(".")[1].length
}catch(g){b=0
}a=Math.pow(10,Math.max(c,b));
h=(c>=b)?c:b;
return((d*a-f*a)/a).toFixed(h)
}function initCartNum(){var a=(parseInt($.cookie("totalProdQtyv3"))||0)+(parseInt($.cookie("mtisCartQty"))||0);
if(a>99){$("#cartNum").html("99+");
$("#cartNum").parent().show()
}else{if(a>0){$("#cartNum").html(a);
$("#cartNum").parent().show()
}else{$("#cartNum").html("");
$("#cartNum").parent().hide()
}}}function initFavor(){var a={base:sn.mobileBase+"/",loginTheme:sn.idsLoginTheme};
probeAuthStatus(function(){var b='[{"partnumber":"'+sn.partNumber+'","shopId":"'+sn.supplierCode+'"}]';
var c=sn.favUrl+"/favorite/private/checkProductFavoriteBatch.do?checkFavoriteList="+b+"&callback=initFavorInfo";
$.ajax({url:c,type:"post",dataType:"jsonp",jsonpCallback:"initFavorInfo",success:function(e){if(e&&"SUC001"==e.code){if(e.data){var d=e.data[0];
if("SUC004"==d.bookmarkFlag){$(".shopping-car-fav").removeClass("the-selected");
$("#favId").attr("data-name","prodDetail_none_main_collect")
}else{if("SUC003"==d.bookmarkFlag){$(".shopping-car-fav").addClass("the-selected");
$("#favId").attr("data-name","prodDetail_none_main_cacelCollect")
}}}}},error:function(){}})
},function(){},a)
}function checkIsFavorite(){var a={base:sn.mobileBase+"/",loginTheme:sn.idsLoginTheme};
probeAuthStatus(function(){var b='[{"partnumber":"'+sn.partNumber+'","shopId":"'+sn.supplierCode+'"}]';
var c=sn.favUrl+"/favorite/private/checkProductFavoriteBatch.do?checkFavoriteList="+b+"&callback=checkIsFav";
$.ajax({url:c,type:"post",dataType:"jsonp",jsonpCallback:"checkIsFav",success:function(e){if(e&&"SUC001"==e.code){if(e.data){var d=e.data[0];
if("SUC004"==d.bookmarkFlag){addGoodsFavorite()
}else{if("SUC003"==d.bookmarkFlag){deleteGoodsFavorite()
}}}}},error:function(){}})
},function(){var c=window.location.href;
if(c&&c.indexOf("?")>=0){c=c.substring(0,c.indexOf("?"))
}var b=sn.authUrl+"?targetUrl="+encodeURIComponent(c);
window.location.href=sn.authServerUrl+"/login?loginTheme=wap_new&service="+encodeURIComponent(b)
},a)
}function addGoodsFavorite(){var b='[{"partnumber":"'+sn.partNumber+'","shopId":"'+sn.supplierCode+'","favoritePrice":""}]';
var a=sn.favUrl+"/favorite/private/addProductFavorite.do?entrance=productDetail&channel=3&addFavList="+b+"&callback=addFavorite";
$.ajax({url:a,type:"post",dataType:"jsonp",jsonpCallback:"addFavorite",success:function(c){if("SUC001"==c.code){AlertBox({type:"mini",msg:"收藏成功"});
$(".shopping-car-fav").addClass("the-selected");
$("#favId").attr("data-name","prodDetail_none_main_cacelCollect")
}else{AlertBox({type:"mini",msg:"收藏失败"})
}},error:function(){AlertBox({type:"mini",msg:"收藏失败"});
$(".shopping-car-fav").removeClass("the-selected");
$("#favId").attr("data-name","prodDetail_none_main_collect")
}})
}function deleteGoodsFavorite(){var b='[{"partnumber":"'+sn.partNumber+'","shopId":"'+sn.supplierCode+'"}]';
var a=sn.favUrl+"/favorite/private/cancelProductFavoriteBatch.do?isClearAll=0&channel=3&cancelFavList="+b+"&callback=deleteFavorite";
$.ajax({url:a,type:"post",dataType:"jsonp",jsonpCallback:"deleteFavorite",success:function(c){if("SUC001"==c.code){AlertBox({type:"mini",msg:"取消收藏成功"});
$(".shopping-car-fav").removeClass("the-selected");
$("#favId").attr("data-name","prodDetail_none_main_collect")
}else{AlertBox({type:"mini",msg:"取消收藏失败"})
}},error:function(){AlertBox({type:"mini",msg:"取消收藏失败"});
$(".shopping-car-fav").addClass("the-selected");
$("#favId").attr("data-name","prodDetail_none_main_cacelCollect")
}})
}$(document).ready(function(){$(document).delegate(".shopping-car-fav","click",function(){checkIsFavorite()
});
$(document).delegate("#addShoppingCart","click",function(){if($("#addShoppingCart").attr("class")!="the-disable"){if(sn.preBuyType==0){if(sn.hwgType!=""){if(sn.priceType&&sn.priceType.indexOf("4")==0&&sn.promotionActiveId!=""){predo(self.addShoppingCloudCart)
}else{addShoppingCloudCart()
}}else{if(sn.priceType&&sn.priceType.indexOf("4")==0&&sn.promotionActiveId!=""){predo(self.addShoppingCart)
}else{addShoppingCart()
}}}else{if(sn.preBuyType==1){appointNow()
}else{if(sn.preBuyType==2){appointBuyNow()
}}}}});
$(document).delegate("#buyNow","click",function(){if($("#buyNow").attr("class")!="the-disable"){uncheckItems()
}})
});
function jdhAddCheck(){var a=parseInt($(".count-num").val());
if(sn.priceType&&sn.priceType.indexOf("4")==0&&a>parseInt(sn.commNum)){AlertBox({type:"mini",msg:"大聚惠仅剩"+sn.commNum+"件"});
return false
}return true
}function addShoppingCart(){var a=sn.supplierCode;
if(sn.supplierCode=="0000000000"){a=""
}if(sn.promotionActiveId){sn.priceType="4"
}var b={storeId:"10052",catEntryId_1:sn.productId,quantity:$(".count-num").val(),supplierCode:a,rushCityId:"",rushActId:"",rushMemberId:"",promotionType:"",priceType:sn.priceType,promotionActiveId:sn.promotionActiveId,channel:"5",mpsChannel:"5",cmmdtyCode:sn.partNumber};
if(sn.isBundle=="yes"){b.isKitWare="1";
b.configurationId_1=partNumber
}else{b.isKitWare="0"
}$.ajax({type:"GET",url:sn.addCartUrl,dataType:"jsonp",data:b,jsonp:"callback",success:function(c){if(c.isSuccess=="1"){b.catEntryId_1=c.productId;
var f=$.cookie("cityId");
b.cityId=f;
if(sn.isBundle=="yes"){b.isKitWare="1";
b.catEntryIds="";
for(var d=0;
d<smallpacks.length;
d++){if(d==smallpacks.lenth-1){b.catEntryIds+=smallpacks[d].productId
}else{b.catEntryIds+=smallpacks[d].productId+"_"
}}}else{b.isKitWare="0"
}addCart1Cookie(b,c);
AlertBox({type:"mini",msg:"添加购物车成功"})
}else{if(sn.priceType&&sn.priceType.indexOf("4")==0&&sn.promotionActiveId!=""){var e=getErrorDesc(c);
if(e.errorDesc!=null&&e.errorDesc!=""){AlertBox({type:"mini",msg:e.errorDesc})
}else{AlertBox({type:"mini",msg:c.errorMessage||"商品库存不足，立即购买失败！"})
}}else{AlertBox({type:"mini",msg:c.errorMessage||"商品库存不足，立即购买失败！"})
}}},complete:function(){}})
}function addShoppingCloudCart(){var b="";
var a="01";
if(sn.promotionActiveId!=""){b=sn.promotionActiveId;
a="02"
}var c={cmmdtyInfos:[{cmmdtyHeadBasicInfo:{activityId:b,activityType:a,itemNo:"1"},mainCmmdtyInfo:{mainCmmdtyBasicInfo:{itemNo:"1",cmmdtyQty:$(".count-num").val(),shopName:sn.cshopName,shopCode:sn.supplierCode,tickStatus:"1",overSeasFlag:sn.vendorType,cmmdtyCode:sn.partNumber}}}],cartHeadInfo:{provinceCode:$.cookie("provinceCode"),cityCode:$.cookie("cityId"),districtCode:$.cookie("districtId"),operationTerminal:"01",operationChannel:"50",townCode:"",userFlag:"0",operationEquipment:"02",operationUser:""}};
$.ajax({type:"get",url:sn.mCartUrl+"app/cart1/gateway/addCmmdty.do",dataType:"jsonp",data:{data:JSON.stringify(c)},jsonp:"callback",success:function(e){if(e&&e.msg&&e.msg!=""){AlertBox({type:"mini",msg:e.msg})
}else{if(e&&e.data&&e.data){var g=e.data;
if(g.cartHeadInfo&&g.cartHeadInfo.isSuccess&&g.cartHeadInfo.isSuccess=="Y"){AlertBox({type:"mini",msg:"添加购物车成功"});
var d=(parseInt(g.cartHeadInfo.cartTotalQty)||0)+(parseInt($.cookie("totalProdQtyv3"))||0);
if(d>99){$("#cartNum").parent().show();
$("#cartNum").html("99+")
}else{if(d>0){$("#cartNum").parent().show();
$("#cartNum").html(d)
}else{$("#cartNum").parent().hide();
$("#cartNum").html("")
}}}else{var f=g.errorInfos[0];
if(typeof f!="undefined"&&f.errorMessage!=null&&f.errorMessage!=""){AlertBox({type:"mini",msg:f.errorMessage})
}else{AlertBox({type:"mini",msg:e.errorMessage||"网络异常，请稍后再试！"})
}}}else{AlertBox({type:"mini",msg:e.errorMessage||"网络异常，请稍后再试！"})
}}},complete:function(){}})
}function uncheckItems(){if(sn.hwgType!=""){predo(self.goSettlementCloud)
}else{predo(self.goSettlement)
}}function addCart1Cookie(c,a){var b=sn.mobileBase+"/cart1/addCart1Cookie.do";
$.ajax({type:"GET",url:b,dataType:"jsonp",data:c,complete:function(){var f=a.logonStatus;
var d=0;
var e=parseInt($.cookie("mtisCartQty"))||0;
if(f=="true"){d=parseInt(a.totalQuantity)||0+e
}else{d=parseInt($.cookie("totalProdQtyv3"))||0+e
}if(d>99){$("#cartNum").parent().show();
$("#cartNum").html("99+")
}else{if(d>0){$("#cartNum").parent().show();
$("#cartNum").html(d)
}else{$("#cartNum").parent().hide();
$("#cartNum").html("")
}}}})
}function predo(a){var b={base:sn.mobileBase+"/",loginTheme:sn.idsLoginTheme};
probeAuthStatus(function(){a()
},function(){var d=window.location.href;
if(d&&d.indexOf("?")>=0){d=d.substring(0,d.indexOf("?"))
}var c=sn.authUrl+"?targetUrl="+encodeURIComponent(d);
window.location.href=sn.authServerUrl+"/login?loginTheme=wap_new&service="+encodeURIComponent(c)
},b)
}function goSettlement(){var e=sn.supplierCode;
if(sn.supplierCode=="0000000000"){e=""
}var a="[";
if(sn.isBundle=="yes"){var d=$(".count-num").val();
for(var c=0;
c<smallpacks.length;
c++){if(c==smallpacks.length-1){a+='{"productId":"'+smallpacks[c].productId+'","quantity":"'+d+'","cityId":"'+$.cookie("cityId")+'","saleOrg":"","supplierCode":"'+e+'"}'
}else{a+='{"productId":"'+smallpacks[c].productId+'","quantity":"'+d+'","cityId":"'+$.cookie("cityId")+'","saleOrg":"","supplierCode":"'+e+'"},'
}}}var g="";
if(sn.preBuyActivityID){g="psell"
}a+="]";
var b={items:[{productId:sn.productId,quantity:$(".count-num").val(),cityId:$.cookie("cityId"),flag:"1",saleOrg:"",supplierCode:e,special:(sn.promotionActiveId!=null&&sn.promotionActiveId!=""&&sn.promotionActiveId!="undefined")?"7":"",actId:sn.promotionActiveId,smallPackageList:a,cmmdtyCode:sn.partNumber,}]};
var f={storeId:"10052",submit_method:"1",channel:"5",mpsChannel:"5",cshopFlag:"",promType:g,cartInfo:JSON.stringify(b)};
$.ajax({type:"GET",url:sn.settleUrl,dataType:"jsonp",data:f,jsonp:"callback",success:function(h){if("1"==h.isSuccess){window.location.href=sn.mCartUrl+"project/cart/cart2.html"
}else{var i=getErrorDesc(h);
if(i.errorDesc!=null&&i.errorDesc!=""){AlertBox({type:"mini",msg:i.errorDesc})
}else{AlertBox({type:"mini",msg:h.errorMessage||"商品库存不足，立即购买失败！"})
}}},complete:function(){}})
}function goSettlementCloud(){var b="";
var a="01";
if(sn.promotionActiveId!=""){b=sn.promotionActiveId;
a="02"
}var c={immediateBuyItems:[{itemHeadInfo:{activityId:b,activityType:a,itemNo:"1"},mainCmmdtyInfo:{basicInfo:{itemNo:"1",cmmdtyQty:$(".count-num").val(),shopName:sn.cshopName,shopCode:sn.supplierCode,overSeasFlag:sn.vendorType,cmmdtyCode:sn.partNumber}}}],cartHeadInfo:{provinceCode:$.cookie("provinceCode"),cityCode:$.cookie("cityId"),districtCode:$.cookie("districtId"),directFlag:"1",operationTerminal:"01",operationChannel:"50",userFlag:"0",operationEquipment:"02",operationUser:"",limitType:"02",commodityAttribute:"1"}};
$.ajax({type:"get",url:sn.mCartUrl+"app/cart1/private/settlement.do",dataType:"jsonp",data:{data:JSON.stringify(c)},jsonp:"callback",success:function(d){if(d&&d.msg&&d.msg!=""){AlertBox({type:"mini",msg:d.msg})
}else{if(d&&d.data){var f=d.data;
if(f.result&&f.result.isSuccess&&f.result.isSuccess=="Y"){window.location.href=sn.mCartUrl+"project/cart/cart2.html?cartType=mtis"
}else{if(f.errorInfos&&f.errorInfos.length>0){var e=f.errorInfos[0];
if(typeof e!="undefined"&&e.errorMessage!=null&&e.errorMessage!=""){AlertBox({type:"mini",msg:e.errorMessage})
}else{AlertBox({type:"mini",msg:d.errorMessage||"网络异常，请稍后再试！"})
}}else{AlertBox({type:"mini",msg:d.errorMessage||"网络异常，请稍后再试！"})
}}}else{AlertBox({type:"mini",msg:d.errorMessage||"网络异常，请稍后再试！"})
}}},complete:function(){}})
}function getErrorDesc(b){var c={errorDesc:"",actErrorItemIds:"",actErrorDesc:""};
var a="";
var e="";
var d="";
if(b.exceptionList!=null&&b.exceptionList!="undefined"){$.each(b.exceptionList,function(f,g){a+=g.errorDesc+"<br>"
})
}if(b.cShopExceptionList!=null&&b.cShopExceptionList!="undefined"){$.each(b.cShopExceptionList,function(g,f){$.each(f.itemList,function(h,j){a+=j.errorDesc+"<br>"
})
})
}c.errorDesc=a;
c.actErrorItemIds=e;
c.actErrorDesc=d;
return c
}function initFitting(){if(("0000000000"==sn.supplierCode||""==sn.supplierCode)||categoryCode_mdm!=""){try{$.ajax({url:sn.recommendDomian+"/recommend-portal/recommend/paramsBiz.jsonp?parameter="+sn.partNumber+"&vendorId="+(sn.supplierCode!=""?sn.supplierCode:"0000000000")+"&catGroupId="+sn.categoryCode_mdm+"&cityId="+sn.cityId+"&sceneIds=8-10&count=12",type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:callback,success:function(b){}})
}catch(a){}}else{}}function callBackInitFittingReady(d){try{Recommend.fittingIndexs=[];
Recommend.fitingPartNumber=[];
var j=d.sugGoods[0];
if(typeof j!="undefined"&&j.resCode!="02"&&j.skus.length>0){var a='<figcaption><p>配件套餐</p><a class="product-set-pay-know">套餐已优惠</a>  <div class="snPrice sn-txt-black fs30">¥4899.00</div></figcaption>';
a+="<ul>";
if(j.skus.length>0){for(var f=0;
f<j.skus.length;
f++){var l=j.skus[f].sugGoodsCode;
if($.inArray(l,Recommend.fitingPartNumber)<0){var c=j.skus[f].diffPrice;
var k=j.skus[f].accPrice;
if(k!=""&&k>0){var g=j.skus[f].accPrice;
if(c!=null&&c!=""&&k!=null&&k!=""){g=parseFloat(parseFloat(c)+parseFloat(k)).toFixed(2)
}Recommend.fitingPartNumber.push(l);
var b=sn.elecProductDomain+"/"+l.substring(9,18)+".html";
a+='<li class="product-set-package-i"><div class="sn-block"><input type="checkbox" class="input-reset sn-checkbox" data-price="'+c+'"></div>';
a+='<div><a class="product-set-package-desc">';
a+='<div><img src="'+sn.imageDomianDir+"/b2c/catentries/"+l+'_1_60x60.jpg" alt=""></div>';
a+="<div><p>"+j.skus[f].sugGoodsName+"</p>";
a+='<div class="snPrice sn-txt-black fs30">'+k+"</div></div></a></div>";
a+='<input class="fitPartNumber" type="hidden" value="'+j.skus[f].sugGoodsCode+'">';
a+='<input class="accessoryId" type="hidden" value="'+j.skus[f].activityId+'"></li>'
}}}}}else{}}catch(h){}}function location2PCDetailPage(){var a=sn.base+"/pds-web/pcDetail/"+sn.partNumber+"_"+sn.supplierCode+"_"+sn.catalogid+"_"+sn.bookType+".html";
window.location.href=a
};