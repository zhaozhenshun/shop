<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta content="telephone=no" name="format-detection">
	<link rel="stylesheet" type="text/css" href="../css/style.css">
	<link rel="stylesheet" type="text/css" href="../css/cart.css">
	<title>充值卡充值</title>
	<script type="text/javascript" async="" src="../js/aywmq.js"></script>
	<script async="" src="../js/analytics.js"></script>
	<script type="text/javascript" async="" src="../js/da_opt.js"></script>
	<script type="text/javascript" src="../js/jquery.min.js"></script>
	<script>
  	function rechargeCardSave(){
  		var no = $("#no").val();
  		if(no == ""){
  			alertDefaultStyle("mini", "请输入充值卡卡号");
  		}else{
  			if(no.length<10){
  				alertDefaultStyle("mini", "卡号格式错误");
  			}else{
  				$.ajax({
				    url: "userUseRechargeCard?no="+no,
				    type: "GET",
				    dataType: "json",
				    async: false,
				    success: function(data) {
				        alertDefaultStyle("mini", data.message);
				    	if(data.status=="1"){
				    		setTimeout("window.location.href='rechargeCard.jsp';",2000);
				    	}
				    }
				});
  			}
  		}
  	}
    </script>
</head>
<body>
    <div class="sn-nav">
		<div class="sn-nav-back"><a href="javascript:history.back(-1)">返回</a></div>
		<div class="sn-nav-title of" id="addAddr">充值卡充值</div>
		<div class="sn-nav-right tr pr"><a href="index.jsp">首页</a></div>
	</div>

	<section class="sn-main pr">
		<div class="input-a sn-block wbox mt30 pr">
			<span>充值卡卡号:</span>
			<div class="wbox-flex ml30 pr">
				<input type="text" id="no" name="no" maxlength="32">
			</div>
			<em class="delete" style="display:none" name="Wap_reg_person_001"></em>
		</div>
		<a href="javascript:rechargeCardSave()" name="Wap_reg_person_005" class="first-step sn-btn sn-btn-big sn-btn-block m30 sn-btn-positive">充值</a>
	</section>
	<script type="text/javascript" src="../js/zepto.min.js"></script>

</body></html>