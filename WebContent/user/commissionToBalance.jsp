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
	<title>佣金转入货币</title>
	<script type="text/javascript" async="" src="../js/aywmq.js"></script>
	<script async="" src="../js/analytics.js"></script>
	<script type="text/javascript" async="" src="../js/da_opt.js"></script>
	<script type="text/javascript" src="../js/jquery.min.js"></script>
	<script>
	var commission = 0;
    $(function(){
		$.ajax({
		    url: "userInfoJson",
		    type: "GET",
		    dataType: "json",
		    async: false,
		    success: function(data) {
		        $("#balance").html(data.balance+"元");
		        $("#commission").html(data.commission+"元");
		        commission = data.commission;
		    }
		});
	});
	function moneyOnblur(){
  		var money = $("#money").val();
  		var reg = /^[0-9]+\.{0,1}[0-9]{0,2}$/;
  		if(!reg.test(money)){
  			$("#money").val("0");
  		}else{
  			if(money<=0){
  				$("#money").val("0");
  				alertDefaultStyle("mini", "金额必须大于0");
  			}else{
	  			if(money>commission){
	  				alertDefaultStyle("mini", "佣金额度不足");
	  				$("#money").val("0");
	  			}
  			}
  		}
  	}
  	function commissionToBalance(){
  		var money = $("#money").val();
  		$.ajax({
		    url: "commissionToBalance?money="+money,
		    type: "GET",
		    dataType: "json",
		    async: false,
		    success: function(data) {
		    	alertDefaultStyle("mini", data.message);
		    	if(data.status=="1"){
		    		window.location.href=window.location.href;
		    	}
		    }
		});
  	}
    </script>
</head>
<body>
    <div class="sn-nav">
		<div class="sn-nav-back"><a href="javascript:history.back(-1)">返回</a></div>
		<div class="sn-nav-title of" id="addAddr">佣金转入货币</div>
		<div class="sn-nav-right tr pr"><a href="index.jsp">首页</a></div>
	</div>

	<section class="sn-main pr">
		<div class="input-a sn-block wbox mt30 pr">
			<span>货币额度:</span>
			<div class="wbox-flex ml30 pr" id="balance">
				${loginUser.balance }元
			</div>
			<em class="delete" style="display:none" name="Wap_reg_person_001"></em>
		</div>
		<div class="input-a sn-block wbox mt30 pr">
			<span>佣金额度:</span>
			<div class="wbox-flex ml30 pr" id="commission">
				${loginUser.commission }元
			</div>
			<em class="delete" style="display:none" name="Wap_reg_person_001"></em>
		</div>
		<div class="input-a sn-block wbox mt30 pr">
			<span>佣金转入货币金额:</span>
			<div class="wbox-flex ml30 pr">
				<input type="text" id="money" name="money" maxlength="32" onblur="moneyOnblur()">
			</div>
			<em class="delete" style="display:none" name="Wap_reg_person_001"></em>
		</div>
		<a href="javascript:commissionToBalance()" name="Wap_reg_person_005" class="first-step sn-btn sn-btn-big sn-btn-block m30 sn-btn-positive">转入</a>
	</section>
	<script type="text/javascript" src="../js/zepto.min.js"></script>

</body></html>