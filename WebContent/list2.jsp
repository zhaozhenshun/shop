<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black" />
	<meta content="telephone=no" name="format-detection" />
	<title>商品列表</title>
	<link rel="stylesheet" type="text/css" href="css/base.css">
	<link rel="stylesheet" type="text/css" href="css/member.rem.css">
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script>
		var page = 1;
	</script>
	
</head>

<body>

	<!-- 公用头部导航 -->
	<div class="sn-nav sn-block">
		<div class="sn-nav-back"><a class="sn-iconbtn" href="javascript:void(history.go(-1));">返回</a></div>
		<div class="sn-nav-title of">商品列表</div>
	<div class="sn-block meb-list">
			<ul class="sn-list-input" id="productsList">
				
			</ul>
	</div>
	<div class="btn-cont" id="tanchuan"><a href="javascript:void(0)" id="nextPage" class="sn-btn sn-btn-dark-big sn-btn-outline" onclick="list();return false;">加载更多</a></div>
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
	        		$("#productsList").append("<li><a href='detail?id="+list[i].id+"' class='block wbox' ><label class='meb-list-ico' style='background:url(\"images/ico-myDate.png\") no-repeat left center;background-size:1rem 1rem;'>"+list[i].title+"</label><div class='wbox-flex tr sn-txt-muted arrow'>¥"+list[i].money+"</div></a></li>");
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

</body>
</html>