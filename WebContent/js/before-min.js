(function(a){String.prototype.format=function(){var e=arguments.length==1&&arguments[0] instanceof Object,c=e?arguments[0]:arguments,d=e?/\{(\w+)\}/g:/\{(\d+)\}/g;
return this.replace(d,function(f,g){return c[g]||""
})
};
String.prototype.startWith=function(d){var c=new RegExp("^"+d);
return c.test(this)
};
String.prototype.endWith=function(d){var c=new RegExp(d+"$");
return c.test(this)
};
String.prototype.replaceAll=function(c,d){if(!RegExp.prototype.isPrototypeOf(c)){return this.replace(new RegExp(c,"g"),d)
}else{return this.replace(c,d)
}};
$.fn.showDom=function(){return $U.show(this)
};
$.fn.hideDom=function(){return $U.hide(this)
};
var b=$U=a.Util={};
b.getTpl=function(e){var d=this[e];
if(!d){var c=$(["#"+e+'[type="text/html"]'].join(""));
d=c.html();
c.remove()
}return d
};
b.redirect=function(c,d){c?(location.href=d?b.addURLParam(c,d):c):location.reload()
};
b.show=function(c){c[0].style.display="block";
return c
};
b.hide=function(c){c[0].style.display="none";
return c
};
b.hasItem=function(c,d){return b.roundStr(c.join(","),",").indexOf(b.roundStr(d,","))!==-1
};
b.roundStr=function(d,c){return[c,d,c].join("")
};
b.dateFormat=function(d,f){if(d.indexOf("-")!=-1){d=d.split("-").join("/")
}if(d.indexOf(".")!=-1){d=d.substr(0,d.indexOf("."))
}var c=new Date(d);
var e={M:c.getMonth()+1,d:c.getDate(),h:c.getHours(),m:c.getMinutes(),s:c.getSeconds(),q:Math.floor((c.getMonth()+3)/3),S:c.getMilliseconds()};
f=f.replace(/([yMdhmsqS])+/g,function(i,h){var g=e[h];
if(g!==undefined){if(i.length>1){g="0"+g;
g=g.substr(g.length-2)
}return g
}else{if(h==="y"){return(c.getFullYear()+"").substr(4-i.length)
}}return i
});
return f
},b.getDefError=function(c){console.error(c)
},b.getWholeURL=function(c){return c
},b.req=function(c){!c.error&&(c.error=this.getDefError);
return $.ajax({url:b.getWholeURL(c.url),success:c.success,error:c.error,cache:c.cache||false,async:c.async===undefined?true:c.async,dataType:c.dataType||"json",data:c.data,type:c.type||"post",timeout:60000})
};
b.addURLParam=function(d,h){var e=h||{},g=d.indexOf("?")===-1,c="&{0}={1}",f="";
$.each(h,function(j,i){f+=c.format(j,i)
});
g&&(f=f.replace("&","?"));
return d+f
}
})(window);
(function(a,b){a.timer=function(d){function c(e){this.opts=e||{};
this.obj=this.opts.obj;
this.statusObj=this.opts.statusObj;
this.times=e.times;
this.type=this.opts.type===undefined?1:this.opts.type;
switch(this.type){case 0:this.preLargePoly();
break;
case 1:this.prepanicBuying();
break;
case 2:this.preBook();
break
}this.callback=this.opts.callback||function(){};
this.speed=this.opts.speed||1000;
this.nowTime=this.serviceNowTime=parseInt(this.times.nowtime)
}c.prototype={tpl:"{0}<i>{1}天</i><i>{2}时</i><i>{3}分</i><i>{4}秒</i>",tpl_book:"{0}<i>{1}月{2}日</i><i>{3}:{4}</i> 到 <i>{5}月{6}日</i><i>{7}:{8}</i>",init:function(){var e=this;
e.timer();
e.run()
},getNowTimeDone:function(e){(e&&typeof(e)==="function")&&e(this.nowTime)
},timer:function(){var e=this;
this.getNowTimeDone($.proxy(e.type===0?e.largePoly:this.type===2?e.book:e.panicBuying,e))
},preLargePoly:function(){this.startTime=this.times.starttime;
this.endTime=this.times.endtime;
this.statusQueue="beging ending over"
},prepanicBuying:function(){this.scheduleStartTime=this.times.schedulestarttime;
this.scheduleEndTime=this.times.scheduleendtime;
this.priorPurchaseStartTime=this.times.priorpurchasestarttime;
this.priorPurchaseEndTime=this.times.priorpurchaseendtime;
this.phonePurchaseStartTime=this.times.phonepurchasestarttime;
this.purchaseStartTime=this.times.purchasestarttime;
this.purchaseEndTime=this.times.purchaseendtime;
this.statusQueue="pending booking waiting saleing over"
},preBook:function(){this.actionStartTime=this.times.actionStartTime;
this.actionEndTime=this.times.actionEndTime;
this.depositStartTime=this.times.depositStartTime;
this.depositEndTime=this.times.depositEndTime;
this.balanceStartTime=this.times.balanceStartTime;
this.balanceEndTime=this.times.balanceEndTime;
this.sendTime=this.times.sendTime
},largePoly:function(f){var g=[];
var e=this.statusQueue;
if(this.startTime&&this.startTime>f){g=this.parse(this.startTime-f);
this.obj[0].innerHTML=this.tpl.format("距活动开始",g[3],g[2],g[1],g[0]);
if(!this.statusObj.hasClass("beging")){this.statusObj.removeClass(e).addClass("beging");
this.callback&&this.callback(0,this.sId)
}}else{if(this.endTime&&this.endTime>f){g=this.parse(this.endTime-f);
this.obj[0].innerHTML=this.tpl.format("距活动结束",g[3],g[2],g[1],g[0]);
if(!this.statusObj.hasClass("ending")){this.statusObj.removeClass(e).addClass("ending");
this.callback&&this.callback(1,this.sId)
}}else{clearInterval(this.sId);
this.obj[0].innerHTML=this.tpl.format("距抢购结束","00","00","00","00");
if(!this.statusObj.hasClass("over")){this.statusObj.removeClass(e).addClass("over");
this.callback&&this.callback(10,this.sId)
}}}},panicBuying:function(f){var g=[];
var e=this.statusQueue;
if(this.scheduleStartTime&&this.scheduleStartTime>f){g=this.parse(this.scheduleStartTime-f);
this.obj[0].innerHTML=this.tpl.format("距预约开始",g[3],g[2],g[1],g[0]);
if(!this.statusObj.hasClass("pending")){this.statusObj.removeClass(e).addClass("pending");
this.callback&&this.callback(0,this.sId)
}}else{if(this.scheduleEndTime&&this.scheduleEndTime>f){g=this.parse(this.scheduleEndTime-f);
this.obj[0].innerHTML=this.tpl.format("距预约结束",g[3],g[2],g[1],g[0]);
if(!this.statusObj.hasClass("booking")){this.statusObj.removeClass(e).addClass("booking");
this.callback&&this.callback(1,this.sId)
}}else{if(this.priorPurchaseStartTime&&this.priorPurchaseStartTime>f){g=this.parse(this.priorPurchaseStartTime-f);
this.obj[0].innerHTML=this.tpl.format("距抢购开始",g[3],g[2],g[1],g[0]);
if(!this.statusObj.hasClass("waiting")){this.statusObj.removeClass(e).addClass("waiting");
this.callback&&this.callback(2,this.sId)
}}else{if(this.priorPurchaseEndTime&&this.priorPurchaseEndTime>f){g=this.parse(this.priorPurchaseEndTime-f);
this.obj[0].innerHTML=this.tpl.format("距抢购结束",g[3],g[2],g[1],g[0]);
if(!this.statusObj.hasClass("saleing")){this.statusObj.removeClass(e).addClass("saleing");
this.callback&&this.callback(3,this.sId)
}}else{if(this.phonePurchaseStartTime&&this.phonePurchaseStartTime>f){g=this.parse(this.phonePurchaseStartTime-f);
this.obj[0].innerHTML=this.tpl.format("距抢购开始",g[3],g[2],g[1],g[0]);
if(!this.statusObj.hasClass("waiting")){this.statusObj.removeClass(e).addClass("waiting");
this.callback&&this.callback(4,this.sId)
}}else{if(this.phonePurchaseStartTime&&this.phonePurchaseStartTime<f&&this.purchaseEndTime&&this.purchaseEndTime>f){g=this.parse(this.purchaseEndTime-f);
this.obj[0].innerHTML=this.tpl.format("距抢购结束",g[3],g[2],g[1],g[0]);
if(!this.statusObj.hasClass("saleing")){this.statusObj.removeClass(e).addClass("saleing");
this.callback&&this.callback(5,this.sId)
}}else{if(this.purchaseStartTime&&this.purchaseStartTime>f){g=this.parse(this.purchaseStartTime-f);
this.obj[0].innerHTML=this.tpl.format("距抢购开始",g[3],g[2],g[1],g[0]);
if(!this.statusObj.hasClass("waiting")){this.statusObj.removeClass(e).addClass("waiting");
this.callback&&this.callback(6,this.sId)
}}else{if(this.purchaseEndTime&&this.purchaseEndTime>f){g=this.parse(this.purchaseEndTime-f);
this.obj[0].innerHTML=this.tpl.format("距抢购结束",g[3],g[2],g[1],g[0]);
if(!this.statusObj.hasClass("saleing")){this.statusObj.removeClass(e).addClass("saleing");
this.callback&&this.callback(7,this.sId)
}}else{if(this.priorPurchaseStartTime&&this.priorPurchaseEndTime&&!this.purchaseStartTime&&!this.purchaseEndTime){clearInterval(this.sId);
this.obj[0].innerHTML="抢购时间未定";
if(!this.statusObj.hasClass("waiting")){this.statusObj.removeClass(e).addClass("waiting");
this.callback&&this.callback(8,this.sId)
}}else{if(!this.priorPurchaseStartTime&&!this.priorPurchaseEndTime&&!this.purchaseStartTime&&!this.purchaseEndTime){clearInterval(this.sId);
this.obj[0].innerHTML="抢购时间未定";
if(!this.statusObj.hasClass("waiting")){this.statusObj.removeClass(e).addClass("waiting");
this.callback&&this.callback(9,this.sId)
}}else{clearInterval(this.sId);
this.obj[0].innerHTML=this.tpl.format("距抢购结束","00","00","00","00");
if(!this.statusObj.hasClass("over")){this.statusObj.removeClass(e).addClass("over");
this.callback&&this.callback(10,this.sId)
}}}}}}}}}}}},book:function(f){var g=[],e=[];
if(this.depositStartTime&&this.depositStartTime>f){if(this.flag==true){return
}g=this.parseDate(this.depositStartTime);
e=this.parseDate(this.depositEndTime);
this.obj[0].innerHTML=this.tpl_book.format("付定金时间",g[3],g[2],g[1],g[0],e[3],e[2],e[1],e[0]);
if(this.actionStartTime&&this.actionStartTime>f){this.callback&&this.callback(0,this.sId)
}else{this.callback&&this.callback(1,this.sId)
}this.flag=true
}else{if(this.depositEndTime&&this.depositEndTime>f){g=this.parse(this.depositEndTime-f);
this.obj[0].innerHTML=this.tpl.format("距付定金结束",g[3],g[2],g[1],g[0]);
this.callback&&this.callback(2,this.sId)
}else{if(this.balanceStartTime&&this.balanceStartTime>f){if(this.flag==true){return
}g=this.parseDate(this.balanceStartTime);
e=this.parseDate(this.balanceEndTime);
this.obj[0].innerHTML=this.tpl_book.format("付尾款时间",g[3],g[2],g[1],g[0],e[3],e[2],e[1],e[0]);
this.callback&&this.callback(3,this.sId);
this.flag=true
}else{if(this.balanceEndTime&&this.balanceEndTime>f){g=this.parse(this.balanceEndTime-f);
this.obj[0].innerHTML=this.tpl.format("距付尾款结束",g[3],g[2],g[1],g[0]);
this.callback&&this.callback(4,this.sId)
}else{this.obj.hide();
if(this.actionEndTime&&this.actionEndTime>f){this.callback&&this.callback(5,this.sId)
}else{clearInterval(this.sId);
this.callback&&this.callback(6,this.sId)
}}}}}},parse:function(g){var e=this,f=g/e.speed;
e.second=Math.round(f%60);
e.minute=Math.floor((f/60)%60);
e.hour=Math.floor((f/60/60)%24);
e.day=Math.floor(f/60/60/24);
if(e.second<10){e.second="0"+e.second
}if(e.minute<10){e.minute="0"+e.minute
}if(e.hour<10){e.hour="0"+e.hour
}if(e.day<10){e.day="0"+e.day
}return[e.second,e.minute,e.hour,e.day]
},parseDate:function(f){var e=new Date(parseInt(f));
this.month=e.getMonth()+1;
this.day=e.getDate();
this.hour=e.getHours();
this.minute=e.getMinutes();
if(this.month<10){this.month="0"+this.month
}if(this.day<10){this.day="0"+this.day
}if(this.hour<10){this.hour="0"+this.hour
}if(this.minute<10){this.minute="0"+this.minute
}return[this.minute,this.hour,this.day,this.month]
},run:function(){var e=this;
this.sId=setInterval(function(){e.nowTime+=1000;
e.flag=false;
e.timer()
},1000)
}};
new c(d).init()
}
})(window.Detail=window.Detail||{},window);
(function(f,a){var g;
var b=f.GrahicDetail=function(j){if(!(this instanceof b)){return new b(j).init()
}this.pre();
this.init();
this.initEvent();
this.render();
return this
};
b.prototype={constructor:b,init:function(){sn.catalogid=sn.isBook=="false"?"10051":"22001";
this.isRenderGraphic=false;
this.isRenderLike=false;
this.rootDom=$(".detail-desc");
this.headerDom=$(".detail-desc .sn-tab-nav");
this.contentDom=$(".detail-desc .sn-tab-content");
this.pcDetailDom=$("#pcDetailDesc");
this.recommentDom=$(".detail-desc .desc-recomment");
this.descSpecData={0:"cm-direct-b",1:"cm-direct-t"};
this.graphicCheck={toggle:{isScrolled:false,isSelected:false,isHasPc:false}};
$("#pcDetailDesc").hide();
$(".desc-spec-lists dl dd").remove();
$(".desc-spec-sale dl dd").remove();
$(".desc-graphic .nodata-wrap").remove();
$(".desc-recomment .nodata-wrap").remove()
},initEvent:function(){var q=this;
var k=window.innerHeight||window.screen.height;
var o,n,m=$(".desc-graphic"),l=$(".footer");
var j=$(".pc-detail-desc").css("bottom");
var p=0;
j=parseInt(j.slice(0,j.indexOf("px")));
$(window).on("scroll",function(){p=window.pageYOffset+k;
o=m.offset().top+j;
if(p>o){n=l.offset().top;
q.togglePcGraphic({isScrolled:p>n?false:true})
}else{q.togglePcGraphic({isScrolled:false})
}});
this.contentDom.width(q.headerDom.find("li").length*100+"%");
this.contentDom.css({"-webkit-transform":"translateX(0px)"});
q.contentDom.find(".sn-tab-box").eq(0).css({height:"auto"}).siblings().css({height:0});
this.headerDom.find("li").each(function(){var r=$(this).index();
if(0==r){$(this).addClass("current")
}else{$(this).removeClass("current")
}});
this.headerDom.on("click","li",function(){var r=$(this);
var s=r.index();
q.togglePcGraphic({isSelected:1==s});
r.addClass("current").siblings().removeClass("current");
var t=q.contentDom.find(".sn-tab-box").width();
q.contentDom.css({"-webkit-transform":"translateX("+(-t*s)+"px)"});
q.render(s);
q.contentDom.find(".sn-tab-box").eq(s).css({height:"auto"}).siblings().css({height:0});
q.contentDom.parent().scrollTop(0)
});
$(".desc-recomment").off("click").on("click","li",function(u){var t=$(this);
var s=t.attr("partNumber");
var r=t.attr("vendorCode");
location.href=sn.wapNewUrl+"/product/"+r+"/"+s.substring(9,s.length)+".html";
return
});
this.contentDom.off("click").on("click",function(u){var t=u.target,r=$(t),s=r.attr("data-event");
switch(s){case"desc-spec-param":case"desc-spec-lists":case"desc-spec-sale":q.showDescSpec(r);
return false
}});
c();
e(i)
},render:function(j){switch(j){case 0:return;
case 1:this.rendergGraphic();
return;
case 2:this.renderLike();
return
}},pre:function(){},checkDescRecomment:function(k){if(!this.rootDom.hasClass("page-slideLeft")){return k
}var j=$(k);
j.find("img").each(function(){var l=$(this);
l.attr("src",l.attr("data-src"));
l.attr("data-src","done");
this.onerror=function(m){this.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
}
});
return j
},togglePcGraphic:function(n){var p=this.graphicCheck.toggle,m=[],j=true;
var k=$(".detail-desc.page-slideLeft").length;
if(k){m.push("isScrolled")
}if(n){$.extend(p,n)
}p.isHasPc=this.pcDetailDom.attr("data-flag");
for(var l in p){if($U.hasItem((m),l)){continue
}if(!p[l]){j=false;
break
}}j?this.pcDetailDom.showDom():this.pcDetailDom.hideDom()
},showDescSpec:function(k){var m=k.find("span").length!=0?k.find("span"):k;
k=k.find("span").length!=0?k:k.parent("dt");
var n=m.hasClass("cm-direct-b")?0:1;
var j=n^1;
m.removeClass(this.descSpecData[n]).addClass(this.descSpecData[j]);
var l=k.next();
n?l.hide():l.show()
},rendergGraphic:function(){var j=this;
if(this.isRenderGraphic){return
}h(g);
this.isRenderGraphic=true
},renderLike:function(){if(this.isRenderLike){return
}d(this);
this.isRenderLike=true
}};
function e(k){var j=sn.base+"/pds-web/ajax/itemUniqueInfo_"+sn.passPartNumber+"_"+sn.supplierCode+".html";
$.ajax({url:j,type:"get",cache:true,dataType:"json",error:function(l,n,m){},success:function(l){k(l)
}})
}function i(j){g=j;
var k=j.itemDetail;
sn.itemSource=typeof k.itemSource!="undefined"?k.itemSource:"";
if(("927HWG1"==sn.vendorType||"927HWG"==sn.vendorType)&&sn.itemSource!=""){if($("#serviceInfo").html().indexOf("商品来源地")<0){$("#serviceInfo").append("（商品来源地："+sn.itemSource+"）")
}}$(".desc-spec-lists").find("dd").remove();
$(".desc-spec-sale").find("dd").remove();
if(k!=null&&k!=""&&j.itemDetail.detailParkingList!=null&&j.itemDetail.detailParkingList!=""){$(".desc-spec-lists dl").append("<dd>"+j.itemDetail.detailParkingList+"</dd>")
}else{$(".desc-spec-lists dl").append("<dd>暂无数据</dd>")
}$(".desc-spec-lists").show();
if(k!=null&&k!=""&&j.itemDetail.service!=null&&j.itemDetail.service!=""){$(".desc-spec-sale dl").append("<dd><p>"+j.itemDetail.service+"</p></dd>")
}else{$(".desc-spec-sale dl").append("<dd><p>暂无数据</p></dd>")
}$(".desc-spec-sale").show();
if(k.hasPhoneDetail=="1"&&"22001"!=sn.catalogid){$("#pcDetailDesc").attr("data-flag","1")
}}function h(l){if(l!=null&&l!="undefined"){var v=l.itemDetail;
var s=$(".desc-graphic>div");
s.html("");
if(sn.catalogid==10051){var p=function(z){var y=$("<div></div>");
y.append(z);
var x=y.find("table");
if(x.length){x.removeAttr("width");
x.css({width:"100%",height:"auto"})
}y.find("object,embed,img").attr({width:"100%",height:"auto"});
return y.html()
};
if(v.hasPhoneDetail==1&&v.phoneDetail!=""){s.html(p(v.phoneDetail.replaceAll("src2","data-src")))
}else{if(v.detailUrl==""){if($(".desc-graphic").find(".nodata-wrap").length==0){$(".desc-graphic").append('<div class="nodata-wrap"><div class="no-data"><p>图文详情里一个字都没有哦</p></div></div>')
}}else{s.html(p(v.detailUrl.replaceAll("src2","data-src")))
}}s.lazyload()
}else{if(v!=null){var o="";
var t="";
var q="";
var r="";
var u="";
var j="";
var k="";
var w="";
if(v.recommend!=""){o+="<dl><dt>编辑推荐</dt><dd>"+v.recommend+"</dd></dl>"
}if(v.author!=""){t+="<dl><dt>作者简介</dt><dd>"+v.author+"</dd></dl>"
}if(v.content!=""){q+="<dl><dt>内容简介</dt><dd>"+v.content+"</dd></dl>"
}if(v.directory!=""){var n=v.directory.split("<br/>");
r+="<dl><dt>目录</dt>";
for(var m=0;
m<n.length;
m++){r+="<dd>"+n[m]+"</dd>"
}r+="</dl>"
}if(v.media!=""){u+="<dl><dt>媒体评论</dt><dd>"+v.media+"</dd></dl>"
}if(v.summary){j+="<dl><dt>书摘</dt><dd>"+v.summary+"</dd></dl>"
}if(v.magazine){k+="<dl><dt>杂志社简介</dt><dd>"+v.magazine+"</dd></dl>"
}if(v.journal){w+="<dl><dt>精彩内容</dt><dd>"+v.journal+"</dd></dl>"
}if(sn.bookType=="1"||sn.bookType=="2"){$(".desc-graphic>div").append(o);
$(".desc-graphic>div").append(u);
$(".desc-graphic>div").append(t);
$(".desc-graphic>div").append(q);
$(".desc-graphic>div").append(r);
$(".desc-graphic>div").append(j)
}else{if(sn.bookType=="3"){$(".desc-graphic>div").append(o);
$(".desc-graphic>div").append(u);
$(".desc-graphic>div").append(q);
$(".desc-graphic>div").append(k);
$(".desc-graphic>div").append(r);
$(".desc-graphic>div").append(w)
}else{$(".desc-graphic>div").append(o);
$(".desc-graphic>div").append(t);
$(".desc-graphic>div").append(q);
$(".desc-graphic>div").append(r)
}}if(o==""&&t==""&&q==""&&r==""&&u==""&&j==""&&k==""&&w==""){if($(".desc-graphic").find(".nodata-wrap").length==0){$(".desc-graphic").append('<div class="nodata-wrap"><div class="no-data"><p>图文详情里一个字都没有哦</p></div></div>')
}}}}}else{if($(".desc-graphic").find(".nodata-wrap").length==0){$(".desc-graphic").append('<div class="nodata-wrap"><div class="no-data"><p>图文详情里一个字都没有哦</p></div></div>')
}}}function d(k){var j=sn.recommendDomian+"/recommend-portal/recommendv2/biz.jsonp?parameter="+sn.partNumber+"&cityId="+sn.cityId+"&sceneIds=1-1&sceneIds=1-2&count=9&callback=getRecomData";
$.ajax({url:j,dataType:"jsonp",jsonp:false,jsonpCallback:"getRecomData",timeout:3000,async:false,error:function(l,n,m){},success:function(o){if(o!=null){var r=$(".desc-recomment ul");
r.html("");
var u=o.sugGoods[0];
var t=o.sugGoods[1];
var p=[];
if(u!=undefined&&t!=undefined&&u.resCode!="02"&&t.resCode!="02"){p=u.skus.concat(t.skus)
}var m="";
if(p.length==0){if($(".desc-recomment").find(".nodata-wrap").length==0){$(".desc-recomment").append('<div class="nodata-wrap"><div class="no-data"><p>暂无推荐数据</p></div></div>')
}}else{for(var q=0;
q<p.length;
q++){var n=p[q].sugGoodsName;
var s=p[q].price;
var v=p[q].sugGoodsCode;
var l=p[q].vendorId;
m+='<li data-name="prodDetail_none_main_prodPic" partNumber='+v+" vendorCode="+l+'><img alt="'+n+'" data-src="'+sn.commonResourceURL+"/b2c/catentries/"+v+'_1_400x400.jpg"><p>'+n+"</p><p>¥"+s+"</p></li>"
}r.append(k.checkDescRecomment(m))
}}else{if($(".desc-recomment").find(".nodata-wrap").length==0){$(".desc-recomment").append('<div class="nodata-wrap"><div class="no-data"><p>暂无推荐数据</p></div></div>')
}}}})
}function c(){var j=sn.base+"/pds-web/ajax/itemParameter_"+sn.partNumber+"_"+sn.categoryCode_mdm+"_"+sn.catalogid+".html";
$.ajax({url:j,type:"get",cache:true,dataType:"json",success:function(m){$(".desc-spec-param dd").html("");
if(sn.catalogid=="22001"){if(m!=null&&m!=""&&m.bookParameterInfo!=undefined&&m.bookParameterInfo!=null){var r=m.bookParameterInfo;
sn.bookType=r.bookType;
var p="";
var l='<div class="desc-spec-param-i"><ul></ul></div>';
$(".desc-spec-param dd").append(l);
var o="";
if(r.author!=""&&r.author!=undefined){o+=r.author+"著"
}if(r.editor!=""&&r.editor!=undefined){o+="|"+r.editor+"编"
}if(r.translator!=""&&r.translator!=undefined){o+="|"+r.translator+"译"
}if(r.drawing!=""&&r.drawing!=undefined){o+="|"+r.drawing+"绘"
}if(sn.bookType=="1"){p+="<li><div>作者</div><div>"+o+"</div></li>";
if(r.publication!=""&&r.publication!=undefined){p+="<li><div>出版社</div><div>"+r.publication+"</div></li>"
}if(r.publicationDate!=""&&r.publicationDate!=undefined){p+="<li><div>出版时间</div><div>"+r.publicationDate+"</div></li>"
}if(r.revision!=""&&r.revision!=undefined){p+="<li><div>版次</div><div>"+r.revision+"</div></li>"
}if(r.printCount!=""&&r.printCount!=undefined){p+="<li><div>印次</div><div>"+r.printCount+"</div></li>"
}if(r.printingDate!=""&&r.printingDate!=undefined){p+="<li><div>印刷时间</div><div>"+r.printingDate+"</div></li>"
}if(r.wordsCount!=""&&r.wordsCount!=undefined){p+="<li><div>字数</div><div>"+r.wordsCount+"</div></li>"
}if(r.pageNumber!=""&&r.pageNumber!=undefined){p+="<li><div>页数</div><div>"+r.pageNumber+"</div></li>"
}if(r.kaiben!=""&&r.kaiben!=undefined){p+="<li><div>开本</div><div>"+r.kaiben+"</div></li>"
}if(r.zhuangzhen!=""&&r.zhuangzhen!=undefined){p+="<li><div>装帧</div><div>"+r.zhuangzhen+"</div></li>"
}}else{if(sn.bookType=="2"){p+="<li><div>作者</div><div>"+o+"</div></li>";
if(r.publication!=""&&r.publication!=undefined){p+="<li><div>出版社</div><div>"+r.publication+"</div></li>"
}if(r.country!=""&&r.country!=undefined){p+="<li><div>国别/地区</div><div>"+r.country+"</div></li>"
}if(r.publicationDate!=""&&r.publicationDate!=undefined){p+="<li><div>出版时间</div><div>"+r.publicationDate+"</div></li>"
}if(r.revision!=""&&r.revision!=undefined){p+="<li><div>版次</div><div>"+r.revision+"</div></li>"
}if(r.printCount!=""&&r.printCount!=undefined){p+="<li><div>印次</div><div>"+r.printCount+"</div></li>"
}if(r.printingDate!=""&&r.printingDate!=undefined){p+="<li><div>印刷时间</div><div>"+r.printingDate+"</div></li>"
}if(r.wordsCount!=""&&r.wordsCount!=undefined){p+="<li><div>字数</div><div>"+r.wordsCount+"</div></li>"
}if(r.pageNumber!=""&&r.pageNumber!=undefined){p+="<li><div>页数</div><div>"+r.pageNumber+"</div></li>"
}if(r.bookLanguage!=""&&r.bookLanguage!=undefined){p+="<li><div>正文语种</div><div>"+r.bookLanguage+"</div></li>"
}if(r.zhuangzhen!=""&&r.zhuangzhen!=undefined){p+="<li><div>装帧</div><div>"+r.zhuangzhen+"</div></li>"
}}else{if(sn.bookType=="3"){p+="<li><div>作者</div><div>"+o+"</div></li>";
if(r.publication!=""&&r.publication!=undefined){p+="<li><div>出版社</div><div>"+r.publication+"</div></li>"
}if(r.publicationDate!=""&&r.publicationDate!=undefined){p+="<li><div>出版时间</div><div>"+r.publicationDate+"</div></li>"
}if(r.publicationPeriod!=""&&r.publicationPeriod!=undefined){p+="<li><div>出版周期</div><div>"+r.publicationPeriod+"</div></li>"
}if(r.pageNumber!=""&&r.pageNumber!=undefined){p+="<li><div>页数</div><div>"+r.pageNumber+"</div></li>"
}if(r.magazineDate!=""&&r.magazineDate!=undefined){p+="<li><div>总期号</div><div>"+r.magazineDate+"</div></li>"
}if(r.zhuangzhen!=""&&r.zhuangzhen!=undefined){p+="<li><div>装帧</div><div>"+r.zhuangzhen+"</div></li>"
}}else{if(sn.bookType=="4"){var k="";
if(r.executant!=""&&r.executant!=undefined){k+=r.executant+"唱/奏"
}if(r.compose!=""&&r.compose!=undefined){k+="|"+r.compose+"作曲"
}if(r.conductor!=""&&r.conductor!=undefined){k+="|"+r.conductor+"指挥"
}if(r.philharmonic!=""&&r.philharmonic!=undefined){k+="|"+r.philharmonic+"乐团"
}p+="<li><div>演唱者</div><div>"+k+"</div></li>";
if(r.maufacture!=""&&r.maufacture!=undefined){p+="<li><div>版权提供</div><div>"+r.maufacture+"</div></li>"
}if(r.area!=""&&r.area!=undefined){p+="<li><div>地区</div><div>"+r.area+"</div></li>"
}if(r.cdNum!=""&&r.cdNum!=undefined){p+="<li><div>碟片数</div><div>"+r.cdNum+"</div></li>"
}if(r.agent!=""&&r.agent!=undefined){p+="<li><div>介质</div><div>"+r.agent+"</div></li>"
}}else{if(sn.bookType=="5"){if(r.scriptwriter!=""&&r.scriptwriter!=undefined){p+="<li><div>编剧</div><div>"+r.scriptwriter+"</div></li>"
}if(r.supervisor!=""&&r.supervisor!=undefined){p+="<li><div>监制</div><div>"+r.supervisor+"</div></li>"
}if(r.director!=""&&r.director!=undefined){p+="<li><div>导演</div><div>"+r.director+"</div></li>"
}if(r.performer!=""&&r.performer!=undefined){p+="<li><div>演员</div><div>"+r.performer+"</div></li>"
}if(r.maufacture!=""&&r.maufacture!=undefined){p+="<li><div>版权提供</div><div>"+r.maufacture+"</div></li>"
}if(r.dubbingLanguage!=""&&r.dubbingLanguage!=undefined){p+="<li><div>配音语言</div><div>"+r.dubbingLanguage+"</div></li>"
}if(r.country!=""&&r.country!=undefined){p+="<li><div>国别/地区</div><div>"+r.country+"</div></li>"
}if(r.agent!=""&&r.agent!=undefined){p+="<li><div>介质</div><div>"+r.agent+"</div></li>"
}if(r.subtitlesLanguage!=""&&r.subtitlesLanguage!=undefined){p+="<li><div>字幕语言</div><div>"+r.subtitlesLanguage+"</div></li>"
}if(r.cdNum!=""&&r.cdNum!=undefined){p+="<li><div>碟片数</div><div>"+r.cdNum+"</div></li>"
}if(r.moveCount!=""&&r.moveCount!=undefined){p+="<li><div>片长集数</div><div>"+r.moveCount+"</div></li>"
}if(r.colour!=""&&r.colour!=undefined){p+="<li><div>画面色彩</div><div>"+r.colour+"</div></li>"
}}else{if(r.speaker!=""&&r.speaker!=undefined){p+="<li><div>主讲解说</div><div>"+r.speaker+"</div></li>"
}if(r.maufacture!=""&&r.maufacture!=undefined){p+="<li><div>版权提供</div><div>"+r.maufacture+"</div></li>"
}if(r.dubbingLanguage!=""&&r.dubbingLanguage!=undefined){p+="<li><div>配音语言</div><div>"+r.dubbingLanguage+"</div></li>"
}if(r.area!=""&&r.area!=undefined){p+="<li><div>地区</div><div>"+r.area+"</div></li>"
}if(r.agent!=""&&r.agent!=undefined){p+="<li><div>介质</div><div>"+r.agent+"</div></li>"
}if(r.moveCount!=""&&r.moveCount!=undefined){p+="<li><div>片长集数</div><div>"+r.moveCount+"</div></li>"
}if(r.cdNum!=""&&r.cdNum!=undefined){p+="<li><div>碟片数</div><div>"+r.cdNum+"</div></li>"
}if(r.colour!=""&&r.colour!=undefined){p+="<li><div>画面色彩</div><div>"+r.colour+"</div></li>"
}}}}}}$(".desc-spec-param dd ul").append(p)
}}else{if(m!=null&&m!=""&&m.eleParameterList!=undefined&&m.eleParameterList!=""){var q=m.eleParameterList;
var n;
$.each(q,function(t,s){$.each(s,function(u,v){n='<div class="desc-spec-param-i"><h3>'+u+"</h3><ul></ul></div>";
$(".desc-spec-param dd").append(n);
if(v!=""&&v.length>0){$.each(v,function(x,y){var w="<li><div>"+y.snparameterdesc+"</div><div>"+y.snparameterVal+"</div></li>";
$(".desc-spec-param dd ul").eq(t).append(w)
});
$(".desc-spec-param").show()
}else{$(".desc-spec-param").hide()
}})
})
}else{$(".desc-spec-param dd").html("暂无数据")
}}},error:function(){}})
}return b
})(window.Detail=window.Detail||{},window);