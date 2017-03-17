<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html>
<html class="">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" async="" src="js/aywmq.js"></script>
<script async="" src="js/analytics.js"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta content="telephone=no" name="format-detection">
	<meta name="wap-font-scale" content="no">
	<title>产品列表</title>
	<link rel="stylesheet" href="css/base.css?v=3.1.3">
	<link rel="stylesheet" href="css/search.css?v=3.1.3">
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/zepto.min.js"></script>
	<script>
		var page = 1;
	</script>
<script src="js/da_opt.js" type="text/javascript"></script></head>
<body>
<!-- 公用头部导航 -->
<div class="sn-nav sn-block sn-nav-search">
			<div class="sn-nav-back"><a class="sn-iconbtn" href="javascript:void(history.go(-1));">返回</a></div>
	<div class="sn-nav-title of">
				商品列表
	</div>
	<a href="javascript:void(0);" class="search-btn hide" id="wapSearchURL" name="wapssjgy_none_ssan_ssan" style="display: none;">搜索</a>
	<a href="javascript:;" class="result-type result-type-img" name="wapssjgy_none_dtqh_dtqh" style="-webkit-transform-origin: 0px 0px 0px; opacity: 1; -webkit-transform: scale(1, 1);"></a>
</div>
<div class="search-h88"></div>
<!-- 联想词 -->
<div class="search-ass" id="searchAss">
	<div class="list-ass-wrap" id="typesList">
    </div>
	<ul class="keywords-ass" id="keywordsList">
	</ul>
</div>
<!-- 热门搜索 -->
<div class="search-hot overtouch" id="searchHot">
	<dl class="search-keywords" id="hotwords" style="-webkit-transform-origin: 0px 0px 0px; opacity: 1; -webkit-transform: scale(1, 1);">
		<dt>热门搜索</dt>
		<dd class="keywords-list" id="hotwordsBox" style="-webkit-transform-origin: 0px 0px 0px; opacity: 1; -webkit-transform: scale(1, 1);"><a name="wapsssry_none_rsc_rsc1" href="javascript:searchHistoryOrHotword('纸尿裤');">纸尿裤</a><a name="wapsssry_none_rsc_rsc2" href="javascript:searchHistoryOrHotword('华为P8');">华为P8</a><a name="wapsssry_none_rsc_rsc3" href="javascript:searchHistoryOrHotword('长虹电视');">长虹电视</a><a name="wapsssry_none_rsc_rsc4" href="javascript:searchHistoryOrHotword('凉席');">凉席</a><a name="wapsssry_none_rsc_rsc5" href="javascript:searchHistoryOrHotword('志高空调');">志高空调</a><a name="wapsssry_none_rsc_rsc6" href="javascript:searchHistoryOrHotword('热水器');">热水器</a><a name="wapsssry_none_rsc_rsc7" href="javascript:searchHistoryOrHotword('精华');">精华</a><a name="wapsssry_none_rsc_rsc8" href="javascript:searchHistoryOrHotword('男士T恤');">男士T恤</a><a name="wapsssry_none_rsc_rsc9" href="javascript:searchHistoryOrHotword('牛奶');">牛奶</a><a name="wapsssry_none_rsc_rsc10" href="javascript:searchHistoryOrHotword('微波炉');">微波炉</a><a name="wapsssry_none_rsc_rsc11" href="javascript:searchHistoryOrHotword('ipad');">ipad</a><a name="wapsssry_none_rsc_rsc12" href="javascript:searchHistoryOrHotword('冰箱');">冰箱</a></dd>
		<dd class="keywords-err hide" style="display: none;">网络异常，您可以尝试<a href="javascript:queryHotWrods();" name="wapssjgy_none_rsc_wlyc">重新加载</a></dd>
	</dl>

	<!-- 历史记录 -->
	<dl class="search-keywords">
		<dt>历史记录</dt>
		<dd class="keywords-list" id="historyList" style="display: none;">
			
		</dd>
		<dd class="keywords-tip hide" id="historyEmpty" style="display: block; -webkit-transform-origin: 0px 0px 0px; opacity: 1; -webkit-transform: scale(1, 1);">搜索历史为空</dd>
		<dd class="keywords-tip hide" id="historyCleanSuccess" style="display: none;">历史记录清除成功</dd>
		<dd class="clear-btn hide" id="historyClean" style="display: none;">
			<a href="javascript:;" class="sn-btn sn-btn-dark sn-btn-outline" id="clearBtn" name="wapssjgy_none_lsc_qkls">清空历史</a>
		</dd>
	</dl>
</div>

<script>
$(function(){
	list();
});
function list(){
	$.ajax({
	    url: "list?p="+page,
	    type: "GET",
	    dataType: "json",
	    async: false,
	    success: function(data) {
	        if(data.status==1){
	        	var list = data.list;
	        	for(var i=0;i<list.length;i++){
	        		$("#productsList").append("<li class='wbox' id='"+list[i].id+"'><a class='link' href='detail?id="+list[i].id+"'></a><a href='detail?id="+list[i].id+"'><div class='img'><img data-src='done' alt='' src='"+list[i].picture+"' id='pi"+list[i].id+"'><span class='bang-t bang-t-35'></span></div></a><div class='wbox-flex'><a href='detail?id="+list[i].id+"'><p class='name'>"+list[i].title+"</p></a><p class='info'></p><div class='price' id='sp"+list[i].id+"'><span class='fl' id='sprice"+list[i].id+"'>¥"+list[i].money+"</span></div></div></li>");
	        	}
	        	if(data.isNextPage==0){
	        		$("#nextPage").html("已全部加载完");
	        		$("#nextPage").attr("disabled","disabled");
	        	}
	        	page ++;
	        }else{
	        	alertDefaultStyle("mini", "已全部加载完");
	        }
	    }
	});
}
document.onkeydown=function(event){
    var e = event || window.event || arguments.callee.caller.arguments[0];
     if(e && e.keyCode==13){ // enter 键
         $("#wapSearchURL").click();
    }
};

function searchSubmit(){
	$("#wapSearchURL").click();
}
</script>
<!-- 推荐店铺 -->
<div class="result-propose-store lazyimg hide">
</div>

<div class="result-wrap">
	
	<!-- 商品列表 -->

	<div class="result-list lazyimg result-list-img">
		<ul id="productsList">
						
		</ul>
	</div>
	<!-- 加载更多 -->
	<div class="loadmore">
	<a href="javascript:void(0)" id="nextPage" name="Wap_reg_person_005" onclick="list();return false;" class="first-step sn-btn sn-btn-big sn-btn-block m30">加载更多</a>
	</div>
	<!-- 加载完成提示 -->
	<div class="result-loaded-tip hide" id="end_load" style="display: none;"><span>Duang～到底了</span></div>
	<!-- 搜索无结果 -->
	<div class="result-none" id="noResultMsg" style="display: none;">
		
	</div>

	<!-- 遮罩 -->
	<div class="mask" style="display: none;"></div>
	
</div>
<div class="app01"></div><div class="app01"></div><div class="app01"></div>
<br/><br/>
<div class="copyright sn-block tc pdlayout sn-txt-muted">
				Copyright © 2015 -<script type="text/javascript">document.write(new Date().getFullYear())</script> ${config.siteName } 版权所有
			</div>

<script type="text/javascript" src="js/iscroll-lite.js"></script>
<script type="text/javascript" src="js/waputils.js"></script>
<script type="text/javascript" src="js/search.js"></script>
<script type="text/javascript" src="js/wapsearch.js"></script>
</body></html>