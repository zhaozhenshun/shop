<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html>
<html class="index-page">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta content="telephone=no" name="format-detection">
	<meta name="wap-font-scale" content="no">
    <meta name="keywords" content="${config.siteKeys }">
    <meta name="description" content="${config.siteDescription }">
    <title>${config.siteName }</title>
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <link rel="stylesheet" href="css/base.css?v=3.1.3">
	<link rel="stylesheet" href="css/search.css?v=3.1.3">
    <script type="text/javascript" src="js/jquery.min.js"></script>
	<style type="text/css">
	.ij25sz5a9s img{width: 100%}
	.ij25sz5a9s .clo-se{position:absolute;right:0;top:0;width:40px;height:40px;z-index:10;}
	.ij25sz5a9s .click{position:relative;display:block;z-index:9;}
	.ij25sz5a9s .openClient{position:absolute;right:15px;top:40px;width:50px;height:35px;}
	</style>
	<script>
		var page = 1;
	</script>
</head>
<body>
<!-- loading -->

	<div class="sn-nav sn-block sn-nav-search">
		<div class="sn-nav index-nav wbox sticky" id="searchFixed" style="position: static;">
				<img src="${config.logo }" class="logo">
				<div class="sn-nav-title of">
				${config.siteName }
				</div>
				<span class="logo"></span>
		</div>
	</div>
<br/><br/><br/>
<div class="index-wrap lazyimg" id="indexWrap">
	<div class="floor w lazyimg" id="floor">
	<section class="cnn-banner w" id="S_banner">
					<ul class="slide-ul fix">
						<li>
							<a name="sjzx_none_floor1_lb1" href="javascript:void(0)">
								<img src="${config.weixin }">
							</a>
						</li>
					</ul>
				</section>

		<div class="app01"></div>
		<div class="app06 floor-area" id="navCarousel_box">
				<ul class="fix">
					<li><a name="index_none_floor3_330052" href="user">
					<img alt="" data-src="done" src="images/143262193526726791.jpg"><div class="title">会员中心</div></a></li>
					<li><a name="index_none_floor3_330051" href="user/promote.jsp">
					<img alt="" data-src="done" src="images/143262190460206422.jpg"><div class="title">推广链接</div>
					</a></li>
					<li><a name="index_none_floor3_330053" href="user/ordersList.jsp"><img alt="" data-src="done" src="images/143262692801385199.jpg"><div class="title">我的订单</div></a></li>
					<li><a name="index_none_floor3_330054" href="user/financialList.jsp">
					<img alt="" data-src="done" src="images/143385213411317884.jpg">
					<div class="title">财务明细</div></a></li>
					<li><a name="index_none_floor3_330055" href="${config.downloadUrl }">
					<img alt="" data-src="done" src="images/143385208970280372.jpg"><div class="title">客户端下载</div></a></li>
				</ul>
		</div>
		<div class="app01"></div>
		<div class="app34 hide" id="guessulikeCon">
			<ul class="pro-list fix">
				<li>
					<div class="sn-html5-loading"><div class="blueball"></div><div class="orangeball"></div></div>
				</li>
			</ul>
		</div>
	</div>
	<div class="result-wrap">
	<script>
$(function(){
	list();
});
function list(){
	$.ajax({
	    url: "list?p="+page,
	    type: "GET",
	    dataType: "json",
	    async: true,
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
</script>
	<!-- 商品列表 -->

	<div class="result-list lazyimg result-list-img">
	<div class="app02 floor-wp fix">
				<h4 class="title"><a href="list.jsp">商品列表</a></h4>
			</div>
	
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
					 
			<div class="copyright sn-block tc pdlayout sn-txt-muted">
				Copyright © 2015 -<script type="text/javascript">document.write(new Date().getFullYear())</script> ${config.siteName } 版权所有
			</div>
</div>

</body></html>