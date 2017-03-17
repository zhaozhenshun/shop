function Swipe(k,e){var f=function(){};
var s=function(A){setTimeout(A||f,0)
};
var z={addEventListener:!!window.addEventListener,touch:("ontouchstart" in window)||window.DocumentTouch&&document instanceof DocumentTouch,transitions:(function(A){var C=["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"];
for(var B in C){if(A.style[C[B]]!==undefined){return true
}}return false
})(document.createElement("swipe"))};
if(!k){return
}var c=k.children[0];
var q,d,p;
e=e||{};
var i=parseInt(e.startSlide,10)||0;
var t=e.speed||300;
e.continuous=e.continuous?e.continuous:true;
function l(){q=c.children;
d=new Array(q.length);
p=k.getBoundingClientRect().width||k.offsetWidth;
c.style.width=(q.length*p)+"px";
var B=q.length;
while(B--){var A=q[B];
A.style.width=p+"px";
A.setAttribute("data-index",B);
if(z.transitions){A.style.left=(B*-p)+"px";
o(B,i>B?-p:(i<B?p:0),0)
}}if(!z.transitions){c.style.left=(i*-p)+"px"
}k.style.visibility="visible"
}function m(){if(i){a(i-1)
}else{if(e.continuous){a(q.length-1)
}}}function n(){if(i<q.length-1){a(i+1)
}else{if(e.continuous){a(0)
}}}function a(D,A){if(i==D){return
}if(z.transitions){var C=Math.abs(i-D)-1;
var B=Math.abs(i-D)/(i-D);
while(C--){o((D>i?D:i)-C-1,p*B,0)
}o(i,p*B,A||t);
o(D,0,A||t)
}else{h(i*-p,D*-p,A||t)
}i=D;
s(e.callback&&e.callback(i,q[i]))
}function o(A,C,B){j(A,C,B);
d[A]=C
}function j(B,E,D){var A=q[B];
var C=A&&A.style;
if(!C){return
}C.webkitTransitionDuration=C.MozTransitionDuration=C.msTransitionDuration=C.OTransitionDuration=C.transitionDuration=D+"ms";
C.webkitTransform="translate("+E+"px,0)translateZ(0)";
C.msTransform=C.MozTransform=C.OTransform="translateX("+E+"px)"
}function h(E,D,A){if(!A){c.style.left=D+"px";
return
}var C=+new Date;
var B=setInterval(function(){var F=+new Date-C;
if(F>A){c.style.left=D+"px";
if(y){v()
}e.transitionEnd&&e.transitionEnd.call(event,i,q[i]);
clearInterval(B);
return
}c.style.left=(((D-E)*(Math.floor((F/A)*100)/100))+E)+"px"
},4)
}var y=e.auto||0;
var u;
function v(){u=setTimeout(n,y)
}function r(){y=0;
clearTimeout(u)
}var g={};
var w={};
var x;
var b={handleEvent:function(A){switch(A.type){case"touchstart":this.start(A);
break;
case"touchmove":this.move(A);
break;
case"touchend":s(this.end(A));
break;
case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":s(this.transitionEnd(A));
break;
case"resize":s(l.call());
break
}if(e.stopPropagation){A.stopPropagation()
}},start:function(A){var B=A.touches[0];
g={x:B.pageX,y:B.pageY,time:+new Date};
x=undefined;
w={};
c.addEventListener("touchmove",this,false);
c.addEventListener("touchend",this,false)
},move:function(A){if(A.touches.length>1||A.scale&&A.scale!==1){return
}if(e.disableScroll){A.preventDefault()
}var B=A.touches[0];
w={x:B.pageX-g.x,y:B.pageY-g.y};
if(typeof x=="undefined"){x=!!(x||Math.abs(w.x)<Math.abs(w.y))
}if(!x){A.preventDefault();
r();
w.x=w.x/((!i&&w.x>0||i==q.length-1&&w.x<0)?(Math.abs(w.x)/p+1):1);
j(i-1,w.x+d[i-1],0);
j(i,w.x+d[i],0);
j(i+1,w.x+d[i+1],0)
}},end:function(C){var E=+new Date-g.time;
var B=Number(E)<250&&Math.abs(w.x)>20||Math.abs(w.x)>p/2;
var A=!i&&w.x>0||i==q.length-1&&w.x<0;
var D=w.x<0;
if(!x){if(B&&!A){if(D){o(i-1,-p,0);
o(i,d[i]-p,t);
o(i+1,d[i+1]-p,t);
i+=1
}else{o(i+1,p,0);
o(i,d[i]+p,t);
o(i-1,d[i-1]+p,t);
i+=-1
}e.callback&&e.callback(i,q[i])
}else{o(i-1,-p,t);
o(i,0,t);
o(i+1,p,t)
}}c.removeEventListener("touchmove",b,false);
c.removeEventListener("touchend",b,false)
},transitionEnd:function(A){if(parseInt(A.target.getAttribute("data-index"),10)==i){if(y){v()
}e.transitionEnd&&e.transitionEnd.call(A,i,q[i])
}}};
l();
if(y){v()
}if(z.addEventListener){if(z.touch){c.addEventListener("touchstart",b,false)
}if(z.transitions){c.addEventListener("webkitTransitionEnd",b,false);
c.addEventListener("msTransitionEnd",b,false);
c.addEventListener("oTransitionEnd",b,false);
c.addEventListener("otransitionend",b,false);
c.addEventListener("transitionend",b,false)
}window.addEventListener("resize",b,false)
}else{window.onresize=function(){l()
}
}return{setup:function(){l()
},slide:function(B,A){a(B,A)
},prev:function(){r();
m()
},next:function(){r();
n()
},getPos:function(){return i
},kill:function(){r();
c.style.width="auto";
c.style.left=0;
var B=q.length;
while(B--){var A=q[B];
A.style.width="100%";
A.style.left=0;
if(z.transitions){j(B,0,0)
}}if(z.addEventListener){c.removeEventListener("touchstart",b,false);
c.removeEventListener("webkitTransitionEnd",b,false);
c.removeEventListener("msTransitionEnd",b,false);
c.removeEventListener("oTransitionEnd",b,false);
c.removeEventListener("otransitionend",b,false);
c.removeEventListener("transitionend",b,false);
window.removeEventListener("resize",b,false)
}else{window.onresize=null
}}}
}if(window.jQuery||window.Zepto){(function(a){a.fn.Swipe=function(b){return this.each(function(){a(this).data("Swipe",new Swipe(a(this)[0],b))
})
}
})(window.jQuery||window.Zepto)
}(function(b,a){b.Geo=function(d){var c=function(e){this.callback=e||function(){};
this._postDataDefault={location:{lng:39.938574,lat:116.421885},formatted_address:"北京市东城区",business:"",addressComponent:{city:"北京",district:"东城区",province:"北京",street:"",street_number:""},cityCode:316};
this.getPositionByIp(true);
this.navError()
};
c.prototype={getPositionByIp:function(e){if(this.isGeo){return
}var f=this;
setTimeout(function(){$.ajax({type:"GET",url:sn.wapIpUrl,cache:true,async:false,dataType:"jsonp",jsonpCallback:"jsonpCallback",success:function(g){if(f.isGeo){return
}f.isGeo=true;
f._postDataDefault.addressComponent.province=g.provinceName;
f._postDataDefault.addressComponent.city=g.cityName;
f._postDataDefault.addressComponent.district=g.districtName;
f._postDataDefault.formatted_address=g.provinceName+"省"+g.cityName+"市"+g.districtName;
f._postDataDefault.addressComponent.ipFlag=true;
d(f._postDataDefault)
},error:function(){f.defaultHandler(true)
}})
},0)
},navError:function(){var e=this;
setTimeout(function(){e.defaultHandler(false)
},1000)
},defaultHandler:function(e){if(this.isGeo){return
}this.isGeo=true;
this.callback(this._postDataDefault)
}};
return new c(d)
}
}(window.Wap=window.Wap||{},window));
(function(c,b){var a={p:sn.base+"/pds-web/getProvinceList/jsonp.html",c:sn.base+"/pds-web/getCityList/jsonp/{0}.html",a:sn.base+"/pds-web/getDistrictList/jsonp/{0}.html"};
c.Address=function(d){var e=function(f){this.options=f;
var g=this.options.value;
this.callback=this.options.callback;
this.initCallback=this.options.initCallback;
this.province=g.p;
this.city=g.c;
this.area=g.a;
this.provinceId="";
this.cityId="";
this.areaId="";
this.root=$(".cmp-address");
this.headerDom=$(".cmp-address .sn-tab-nav");
this.contentDom=$(".cmp-address .sn-tab-content");
this.contextDom=this.contentDom.find("ul");
this.init();
this.initEvent();
this.render()
};
e.prototype={TPL_HEAER:'<li class="current">{0}</li><li>{1}</li><li>{2}</li>',TPL_ITEM:'<li class="{1}" data-meta="{2}" data-id="{3}">{0}</li>',init:function(){this.preData={1:"",2:"",3:""};
var f=this.ops;
this.initValue();
this.isMunicipality=false;
this.municipalityData=[10,30,320,20]
},initEvent:function(){var f=this;
this.contentDom.width(f.headerDom.find("li").length*100+"%");
f.headerDom.on("click","li",function(){var g=$(this);
if(g.hasClass("disabled")){return false
}var h=g.index();
f.changeTab(g,h)
});
$(".cmp-address .city-list").off("click").on("click","li",function(n){var g=$(this);
var j=g.index();
var h=f.headerDom.find("li.current").index()+1;
g.addClass("cur").siblings().removeClass("cur");
var o=f.getID(g),m=g.text();
if(f.preData[h]!=o){if(h==1){f.valProvince(g.text());
f.city={};
f.area={};
f.provinceId=o;
f.reqCity(o)
}else{if(h==2){f.valCity(g.text());
f.area={};
f.cityId=o;
f.reqArea(o)
}else{f.valArea(m);
this.areaId=o;
var l=f.callback;
if(l instanceof Array){for(var k=0;
k<l.length;
k++){l[k](f.val(),f.meta())
}}else{l(f.val(),f.meta())
}return false
}}f.preData[h]=o
}(f.isMunicipality=$U.hasItem(f.municipalityData,o))&&++h;
f.changeTab(f.headerDom.find("li").eq(h),h)
})
},render:function(){},getID:function(f){return f.attr("data-id")
},initValue:function(){var f=this.options;
this.headerDom.append(this.TPL_HEAER.format(this.province.v,this.city.v,this.area.v));
this.reqProvince()
},changeTab:function(h,f){h.addClass("current").siblings().removeClass("current");
var g=this.contentDom.find(".sn-tab-box").width();
this.contentDom.css({"-webkit-transform":"translate("+(-g*f)+"px, 0px) translateZ(0px)"});
this.contentDom.parent().scrollTop(0)
},reqProvince:function(){return $U.req({url:a.p,type:"get",cache:true}).done($.proxy(this.renderProvince,this)).then($.proxy(this.reqCity,this))
},renderProvince:function(j){var n=j.provinceList,m=n!="null"?n.length:0,k="",g=this.province.v,l=this.province.id,f,p,o;
for(var h=0;
h<m;
h++){p=n[h].provinceName;
f=l?(l==n[h].provinceCode):(g?(p+"省"==g&&"cur"):(h==0&&"cur"));
if(f){o="cur";
this.isMunicipality=$U.hasItem(this.municipalityData,n[h].provinceCode)
}else{o=""
}if(o){this.provinceId=n[h].provinceCode;
this.municipalityDone();
this.valProvince(p)
}k+=this.TPL_ITEM.format(p,o,JSON.stringify(n[h]),n[h].provinceCode)
}this.contextDom.eq(0).empty().append(k)
},reqCity:function(f){return $U.req({url:a.c.format(this.provinceId),type:"get",cache:true}).done($.proxy(this.renderCity,this)).done($.proxy(this.municipalityDone,this)).then($.proxy(this.reqArea,this))
},renderCity:function(j){var n=j.cityList,m=n.length,k="",g=this.city.v,l=this.city.id,f,p,o;
for(var h=0;
h<m;
h++){p=n[h].cityName;
f=l?(l==n[h].cityNo):(g?(p==g&&"cur"):(h==0&&"cur"));
o=f&&"cur";
if(o){this.cityId=n[h].cityNo;
this.valCity(p)
}k+=this.TPL_ITEM.format(p,o,JSON.stringify(n[h]),n[h].cityNo)
}this.contextDom.eq(1).empty().append(k)
},reqArea:function(f){return $U.req({url:a.a.format(this.cityId),type:"get",cache:true}).done($.proxy(this.renderArea,this))
},renderArea:function(j){var m=j.districtList,l=m.length,k="",f=this.area.v,o=this.area.id,g,p,n;
for(var h=0;
h<l;
h++){p=m[h].distName;
g=o?(o==m[h].distNo):(f?(p==f&&"cur"):(h==0&&"cur"));
n=g&&"cur";
if(n){this.areaId=m[h].distNo;
this.valArea(p)
}k+=this.TPL_ITEM.format(p,n,JSON.stringify(m[h]),m[h].distNo)
}this.contextDom.eq(2).empty().append(k);
if(this.initCallback){while(fn=this.initCallback.shift()){fn(this.val(),this.meta())
}}},municipalityDone:function(f){!this.headerCity&&(this.headerCity=this.headerDom.find("li").eq(1));
this.isMunicipality?this.headerCity.addClass("disabled"):this.headerCity.removeClass("disabled")
},valProvince:function(f){return f?this.headerDom.find("li").eq(0).text(f):this.headerDom.find("li").eq(0).text()
},valCity:function(f){return f?this.headerDom.find("li").eq(1).text(f):this.headerDom.find("li").eq(1).text()
},valArea:function(f){return f?this.headerDom.find("li").eq(2).text(f):this.headerDom.find("li").eq(2).text()
},val:function(){return{p:{v:this.valProvince()},c:{v:!this.isMunicipality&&this.valCity()},a:{v:this.valArea()}}
},meta:function(){return{cityNo:this.cityId,provinceCode:this.provinceId,distNo:this.areaId}
}};
return new e(d)
}
})(window.Detail=window.Detail||{},window);
(function(b,a){b.ChooseSpec=function(c){var d=function(e){this.options=e||{};
this.payFn=this.options.payFn;
this.root=$(".cmp-choose");
this.init();
this.initEvent();
this.render();
return this
};
d.prototype={init:function(){var e=this.options;
this.SetNumData={min:parseInt(e.min)||1,max:parseInt(e.max)||99};
this.$setRed=this.root.find(".count-min");
this.$setAdd=this.root.find(".count-add");
this.$num=this.root.find(".count-num")
},initEvent:function(){var g=this;
this.root.off("click").on("click",function(l){var k=l.target,h=$(k),m=k.id,j=k.dataset,i=j.event;
switch(i){case"set-num":g.setNumHandler(h);
return false;
case"choose-pay":g.payHandler(h);
return false
}});
var f=/[^\d+]*/g;
this.root.on("keyup",".count-num",function(j){var h=$(this),i=h.val();
if(!i){return
}i=i.replace(f,"");
i=i?parseInt(i):1;
i=g.numDisable(i);
h.val(i);
return false
});
var e=$(".shopping-car");
this.root.on("focusin",".count-num",function(h){e.hideDom();
return false
});
this.root.on("focusout",".count-num",function(h){e.showDom();
return false
})
},render:function(){},setNumHandler:function(f){if(f.hasClass("cover")){return false
}var e=this.SetNumData.max,i=this.SetNumData.min;
var g=f.hasClass("count-add");
var h=f.siblings("input");
var j=parseInt(h.val());
j=g?(j<e?++j:j):(j>i?--j:j);
j=this.numDisable(j);
h.val(j)
},numDisable:function(f,g){if($.isPlainObject(f)){this.minDisable(f.min);
this.maxDisable(f.max)
}else{if(g===true){return this.maxDisable(f)
}else{if(g===false){return this.minDisable(f)
}else{var e=this.maxDisable(f);
return this.minDisable(e)
}}}},minDisable:function(e){var f=this.SetNumData.min;
(e<f)&&(e=f);
e==this.SetNumData.min?this.$setRed.addClass("cover"):this.$setRed.removeClass("cover");
return e
},maxDisable:function(f){var e=this.SetNumData.max;
(f>e)&&(f=e);
f==this.SetNumData.max?this.$setAdd.addClass("cover"):this.$setAdd.removeClass("cover");
return f
},payHandler:function(e){this.payFn&&this.payFn();
alert("分期购买")
},resetLimit:function(h){var e=h.max,g=h.min,f=h.value;
if(e||g){this.SetNumData={min:g||1,max:e||99};
g=this.SetNumData.min
}!f&&(f=g);
this.$num.val(f);
this.numDisable(f)
}};
return new d(c)
}
})(window.Detail=window.Detail||{},window);
(function(a,b){a.Route=function(c){var d=function(e){var f=this.ops=e||{};
this.id=f.id;
this.urlMap=f.urlMap;
this.regHash=/([^#|\&]\w*=\w*)/g;
this.vUrls={anchor:{}};
this.status=this.factStatus=this.preStatus=f.status;
this.historys=[this.status];
this.factUrl=location.href;
this.win=$(b);
this.isErrorFn=f.isErrorFn;
this.init();
this.initEvent();
this.render();
return this
};
d.prototype={init:function(){this.initStatus()
},initEvent:function(){var e=this;
this.win.on("popstate",function(g,f){var f=g.state||f;
if(f){e.changeStatus(f)
}},false)
},render:function(){var f=this.status;
var e=this.preStatus;
if(!f){return
}var g=this.urlMap[f];
g&&g({preStatus:e,status:f})
},initStatus:function(){var f=this.parseUrl();
var e=f.anchor[this.id];
var g=location.href;
if(e){var i=location.hash;
var h=g.indexOf("?#")!==-1;
g=g.slice(0,h?g.indexOf(i)-1:g.indexOf(i))
}this.factUrl=g;
history.replaceState(this.status,this.status,g)
},parseUrl:function(){var i=location.hash;
var h=this.regHash,e=/\w+/g,f,j=[],g=this.vUrls.anchor;
g[this.id]="";
while(f=this.regHash.exec(i)){j=f[0].match(e);
g[j[0]]=j[1]
}return this.vUrls
},changeStatus:function(g,h){var e=g;
if(e===this.status){return
}this.preStatus=this.status;
this.status=g;
if(this.factStatus!=g||(!$U.hasItem(this.historys,g))){this.parseUrl();
if(this.vUrls.anchor[this.id]==g){this.historys.push(g)
}else{var f=this.createUrl(g);
b.history.pushState(g,g,f);
this.historys.push(g);
this.stateError({url:f})
}}this.render()
},addHash:function(f){var h=location.href.indexOf("?")!==-1,k=location.hash;
this.vUrls.anchor[this.id]=f;
var e=this.vUrls.anchor,j=h?"#":"?#";
for(var g in e){j+=g+"="+e[g]
}return j
},createUrl:function(f){var g=this.addHash(f);
var e=location.href,h=location.hash;
h&&(e=e.slice(0,e.indexOf(h)));
return e+g
},backFactPage:function(){this.win.trigger("popstate",[this.factStatus])
},stateError:function(f){if(this.isStateErrored){return
}var j=this,g=f.url,i=this.errorFn,h;
var e=b.setInterval(function(){h=location.href;
if(g==h){return
}else{if(j.isErrorFn()){j.backFactPage()
}clearInterval(e);
j.isStateErrored=true
}},10)
}};
return new d(c)
}
})(window.Detail,window);
(function(h,f,e){var H,C,K;
function G(){l();
q()
}function i(){var L=window.innerHeight||window.screen.height,M=$("#topScroll");
$(window).on("scroll",function(){window.pageYOffset<1*L?M.hideDom():M.showDom()
});
$(document).off("click").on("click",function(S){var R=S.target,N=$(R),Q=N.parent(),T=R.id&&R.id.slice(1),P=R.dataset,O=P.event;
switch(O){case"show-prom":c();
return false;
case"show-service":t(N);
return false;
case"to-address":K.changeStatus("addr");
return false;
case"to-choose":K.changeStatus("choose");
return false;
case"to-grahic":K.changeStatus("grahic");
return false
}return true
})
}function B(){v();
$(".desc-recomment").lazyload();
K=Detail.Route({id:"id",status:"detail",urlMap:{addr:a,choose:E,grahic:d,detail:s},isErrorFn:z});
var L=navigator.control||{};
if(L.gesture){L.gesture(false)
}}function F(L){L.toggleClass("the-selected")
}var u={direct:{0:"cm-direct-b",1:"cm-direct-t"},service:{0:"the-fold",1:"the-unfold"}};
function c(){var M=$(".intro-prom .intro-fold"),L=$(".intro-prom .intro-unfold");
if(M.is(":visible")){M.hide();
L.show()
}else{M.show();
L.hide()
}}function t(M){var N=$("#serviceInfo").parent("ul");
if("false"==N.attr("show")){return
}if(M[0].nodeName.toLowerCase()=="li"){M=M.parent()
}var O=M.hasClass("cm-direct-b")?0:1;
var L=O^1;
M.removeClass(u.direct[O]).addClass(u.direct[L]);
$(".buy-service-act").removeClass(u.service[O]).addClass(u.service[L])
}function m(L){var M=$(".shopping-car");
L?$U.show(M):$U.hide(M)
}function n(L){return L.find(".cmp-nav").height()
}var j=$(".content-address .sn-tab>div");
function a(L){var M=$(".cmp-address");
$(".content-address .sn-tab-nav").addClass("cur");
m();
p(M,j,{hideFn:function(){return n(M)+M.find(".sn-tab-nav").height()
}})
}function E(L){p($(".cmp-choose"),$(".content-choose"))
}var J=$(".detail-desc"),r=$(".detail-desc .cmp-nav"),x=$(".detail-desc .sn-tab>div");
$grahicFix=$(".pc-detail-desc");
function d(L){J.addClass("the-slider");
x.addClass("overtouch");
r.show();
$grahicFix.css({"z-index":101});
p(J,x,{hideFn:function(){return n(r)+J.find(".sn-tab-nav").height()
}});
$(".detail-desc .sn-tab-nav li.current").click();
m()
}var y=$("html"),w=$("body");
function p(P,L,M){var O,Q;
if(M){O=M.hideFn;
Q=M.hash
}var N=$(window).height();
P.addClass("page-slideLeft");
L.css({height:N-(O?O():n(P))});
y.css({"overflow-y":"hidden"});
w.css({"overflow-y":"hidden"});
return false
}function s(N){var M=N.status;
var L=N.preStatus;
switch(L){case"grahic":g();
break;
case"addr":D();
break;
case"choose":I();
break
}}function D(L){var M=$(".content-address .sn-tab-nav");
if(M.hasClass("cur")){M.removeClass("cur")
}b(".cmp-address");
j.removeClass("overtouch");
m(true)
}function I(L){b(".cmp-choose");
reloadPage()
}function g(L){$(".detail-desc.the-slider").css({"-webkit-transition":"all .5s ease-out"});
x.css({height:"auto"});
x.removeClass("overtouch");
b(".detail-desc");
$grahicFix.attr("style","");
$(".detail-desc .sn-tab-nav li.current").click();
m(true);
setTimeout(function(){J.attr("style","");
r.hide();
J.removeClass("the-slider")
},500)
}function b(L){$("html").attr("style","");
$("body").attr("style","");
$(L).removeClass("page-slideLeft")
}function o(L){this.height=this.ownerDocument.body.scrollHeight
}function v(){var L=$(".pic-nav li");
var M=$(".pic-slider img");
Swipe($(".pic-slider")[0],{speed:400,startSlide:0,callback:function(O){L.eq(O).addClass("pic-nav-s").siblings().removeClass("pic-nav-s");
var P=M.eq(O);
var N=P.attr("data-src");
if(N!=undefined&&N!="done"){!P.hasClass("lazyimg")&&P.addClass("lazyimg");
P.attr("src",P.attr("data-src"));
P.attr("data-src","done")
}}})
}function z(){return $(".page-slideLeft").length
}function l(){var M=function(Q){var P=function(S,R){return Q.indexOf(R)==-1?"":Q.slice(S?Q.indexOf(S)+1:0,Q.indexOf(R)+1)
};
return{p:{v:P("","省")},c:{v:P("省","市")},a:{v:P("市","区")}}
};
var O=function(Q){var P=M(Q.formatted_address);
L(P)
};
var L=function(P){H=h.Address({value:P,callback:[function(){history.back()
},A,k,initCartNum,hasStoragePrice],initCallback:[A,k,initCartNum,hasStoragePrice]})
};
var N=$.cookie("cityId")||$.cookie("provinceCode");
if(N){L({p:{id:$.cookie("provinceCode")},c:{id:$.cookie("cityId")},a:{id:$.cookie("districtId")}})
}else{f.Geo(O)
}}function q(){CmpChoose=h.ChooseSpec({min:1,max:99})
}function A(N,P,L){if(typeof N!=="string"){var O=N;
N=O.p.v;
P=O.c.v;
L=O.a.v
}P&&P.indexOf("市")&&(P=P.slice(0,-1));
var M=['<li data-name="prodDetail_none_main_city" data-event="to-address">','	<span data-event="to-address">{0}</span>       ','	<span data-event="to-address">{1}</span>       ','	<span data-event="to-address">{2}</span>       ',"</li>                        "].join("");
$(".buy-addr-v").find("li").eq(1).remove();
$(".buy-addr-v").append(M.format(N,P,L))
}function k(N,M){var L=new Date();
L.setTime(L.getTime()+(180*24*60*60*1000));
$.cookie("cityId",M.cityNo,{path:"/",domain:sn.cookieDomain,expires:L});
$.cookie("provinceCode",M.provinceCode,{path:"/",domain:sn.cookieDomain,expires:L});
$.cookie("districtId",M.distNo,{path:"/",domain:sn.cookieDomain,expires:L});
sn.cityId=$.cookie("cityId")
}B();
G();
i()
})(window.Detail,window.Wap,window);