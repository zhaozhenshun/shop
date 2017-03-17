var sa;
if(!sa){sa={}
}if(!sa.click){sa.click={}
}(function(){var y=/^\w*?.suning.com$/,z=document.location.hostname,J=(("https:"==document.location.protocol)?"https://":"http://"),D=I(),O="|",N=location.href,F=G(C(N));
function B(a,p){var b=a.name?G(a.name):"name undefined";
if(b=="name undefined"){var an=a.attributes.name;
if(an!=undefined&&an!=null){b=an.value?G(an.value):"name undefined"
}}if(p!=undefined&&p!=null&&p!=""){var t=a.attributes[p];
if(t!=undefined&&t!=null){b=t.value?G(t.value):p+" undefined"
}}var o=a.id?G(a.id):"id undefined",l=new Array(),s=(L(a,l),l)?G(l.join("").replace(/\s|\|/ig,"")):"text undefined",g=(g=document.getElementById("resourceType"))?g.value:"",aj=o+O+b+O+s,i=(i=document.getElementById("errorCode"))?i.value:"",d=J+D+"/ajaxClick.gif",u=x(),ak="_snck";
H(ak,u,"/","","");
var c=E("_snmp"),ag=typeof sn=="object"?sn.cityId:"can not get cityId",w=u+O+c+O+aj+O+F,e=a.href?a.href:"",ac=(e?j(e):"-"),r=document.getElementById("URLPattern"),m=(r?r.value:"");
var ah="";
var ae=E("logonStatus");
if(ae!=undefined&&ae!=null){ah=ae
}var af="";
var al=E("_snma");
if(al!=undefined&&al!=null&&al.indexOf("|")>=0){try{af=al.split("|")[1]
}catch(f){}}var ai="";
var v=E("idsLoginUserIdLastTime");
if(v!=undefined&&v!=null){ai=v
}var h="";
var n=E("custno");
if(n!=undefined&&n!=null){h=n
}var q="";
var am=E("_snmb");
if(am!=undefined&&am!=null&&am.indexOf("|")>=0){try{q=am.split("|")[0]
}catch(f){}}var ad=d+"?_snmk="+w+"&_snme="+i+"&_type="+g+"&_cId="+ag+"&_sid="+ac+"&urlPattern="+m+"&vid="+af+"&lu="+ai+"&sid="+q+"&mid="+h+"&ls="+ah;
k(ad)
}function x(){var b=new Date(),c=Math.round(100000*Math.random()),a=b.getTime().toString().concat(c);
return a
}function E(b){var c=document.cookie.split("; ");
for(var a=0;
a<c.length;
a++){var d=c[a].split("=");
if(d[0]==b){return unescape(d[1])
}}}function k(c){var a="log_"+(new Date()).getTime();
var b=window[a]=new Image();
b.onload=(b.onerror=function(){window[a]=null
});
b.src=c+"&iId="+a;
b=null
}function I(){if(y.test(z)){return"click.suning.cn/sa"
}else{return"clicksit.suning.cn/sa"
}}function M(){return document.domain
}function H(c,d,f,h,b){var e=c+"="+escape(d);
if(h!=""){var g=new Date();
g.setTime(g.getTime()+h);
e+=";expires="+g.toGMTString()
}if(f!=""){e+=";path="+f
}var a=M();
if(a.indexOf(".suning.com")!=-1){e+=";domain=.suning.com"
}else{if(a.indexOf(".cnsuning.com")!=-1){e+=";domain=.cnsuning.com"
}else{e+=";domain="+b
}}document.cookie=e
}function j(a){var b="-";
if(!P(a)){b=K(a,"tid","&")
}return b
}function C(a){if(a.length>301){a=a.substring(0,300)
}while(a.indexOf(O)!=-1){a=a.replace(O,"--")
}return a
}function L(a,b){if(a.nodeType==3){b.push(a.nodeValue)
}else{if(a.nodeType==1){for(var c=a.firstChild;
c!=null;
c=c.nextSibling){L(c,b)
}}}}function G(a){return a!=null?encodeURIComponent(a):""
}function K(b,c,a){var e="-",d;
if(!P(b)&&!P(c)&&!P(a)){d=b.indexOf(c);
if(d>-1){var f=b.indexOf(a,d);
if(f<0){f=b.length
}e=b.substring(d+c.length+1,f)
}}return e
}function P(a){return(undefined==a||""==a||"-"==a)
}var A=sa.click;
A.sendDatasIndex=B
})();
function runDapushWhenReady(){if(typeof(_dapush)=="function"){_dapush()
}else{setTimeout(runDapushWhenReady,1000)
}}function _loadAsyncJs(e){var f=e;
var d=document.getElementsByTagName("script");
for(var a=0;
a<d.length;
a++){if(d[a].src==f){return
}}var b=document.createElement("script");
b.type="text/javascript";
b.async=true;
b.src=f;
var c=d[0];
c.parentNode.insertBefore(b,c)
}function _getJsFilePath(b){var a=document.location.hostname;
var c=/^\w*?.\w*?.suning.com$/;
var f=/^\w*?.\w*?pre.cnsuning.com$/;
var e=/^\w*?.\w*?sit.cnsuning.com$/;
var d="";
if(c.test(a)){d=("https:"==document.location.protocol)?"https://imgssl.suning.com":"http://script.suning.cn"
}else{if(f.test(a)){d=("https:"==document.location.protocol)?"https://preimgssl.suning.com":"http://prescript.suning.cn"
}else{if(e.test(a)){d=("https:"==document.location.protocol)?"https://sit1imgssl.suning.com":"http://sit1script.suning.cn"
}else{d=("https:"==document.location.protocol)?"https://preimgssl.suning.com":"http://prescript.suning.cn"
}}}d=d+"/javascript/sn_da/"+b;
return d
}(function(){setTimeout(function(){_loadAsyncJs(_getJsFilePath("da_opt.js"))
},100)
})();