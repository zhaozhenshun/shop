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
	<title>提现</title>
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
  			if(money<=100){
  				$("#money").val("0");
  				alertDefaultStyle("mini", "金额必须大于100");
  			}else{
	  			if(money>commission){
	  				alertDefaultStyle("mini", "余额不足");
	  				$("#money").val("0");
	  			}
  			}
  		}
  	}
  	function withdrawSave(){
  		var money = $("#money").val();
  		var bank = $("#bank").val();
  		var bankNo = $("#bankNo").val();
  		var bankName = $("#bankName").val();
  		var phone = $("#phone").val();
  		if(money == ""){
  			alertDefaultStyle("mini", "请输入提现金额");
  		}else if(bank == ""){
  			alertDefaultStyle("mini", "请选择收款类型");
  		}else if(bankNo == ""){
  			alertDefaultStyle("mini", "请输入收款账号");
  		}else if(bankName == ""){
  			alertDefaultStyle("mini", "请输入收款户名");
  		}else if(phone == ""){
  			alertDefaultStyle("mini", "请输入手机号码");
  		}else{
  			$.ajax({
		    url: "withdrawSave",
		    type: "POST",
		    data: {
		    	"withdraw.money":money,
		    	"withdraw.bank":bank,
		    	"withdraw.bankNo":bankNo,
		    	"withdraw.bankName":bankName,
		    	"withdraw.phone":phone
		    },
		    dataType: "json",
		    async: false,
		    success: function(data) {
		    	alertDefaultStyle("mini", data.message);
		    	if(data.status=="1"){
		    		setTimeout("window.location.href='withdraw.jsp';",2000);
		    	}
		    }
		});
  		}
  	}
    </script>
</head>
<body>
    <div class="sn-nav">
		<div class="sn-nav-back"><a href="javascript:history.back(-1)">返回</a></div>
		<div class="sn-nav-title of" id="addAddr">提现</div>
		<div class="sn-nav-right tr pr"><a href="index.jsp">首页</a></div>
	</div>

	<section class="sn-main pr">
		<div class="input-a sn-block wbox mt30 pr">
			<span>佣金额度:</span>
			<div class="wbox-flex ml30 pr" id="commission">
				${loginUser.commission }元
			</div>
			<em class="delete" style="display:none" name="Wap_reg_person_001"></em>
		</div>
		<div class="input-a sn-block wbox mt30 pr">
			<span>提现金额:</span>
			<div class="wbox-flex ml30 pr">
				<input type="text" id="money" name="money" maxlength="32" onblur="moneyOnblur()">
			</div>
			<em class="delete" style="display:none" name="Wap_reg_person_001"></em>
		</div>
		<div class="input-a sn-block wbox mt30 pr">
			<span>收款类型:</span>
			<div class="wbox-flex ml30 pr">
				<select name="bank" id="bank" style="BORDER-STYLE: none;">
				<option value="支付宝">支付宝</option>
				<option value="微信">微信</option>
				</select>
				<input type="text" id="money" name="money" maxlength="32" onblur="moneyOnblur()">
			</div>
			<em class="delete" style="display:none" name="Wap_reg_person_001"></em>
		</div>
		<div class="input-a sn-block wbox mt30 pr">
			<span>收款账号:</span>
			<div class="wbox-flex ml30 pr">
				<input type="text" id="bankNo" name="bankNo" maxlength="32">
			</div>
			<em class="delete" style="display:none" name="Wap_reg_person_001"></em>
		</div>
		<div class="input-a sn-block wbox mt30 pr">
			<span>个人名字:</span>
			<div class="wbox-flex ml30 pr">
				<input type="text" id="bankName" name="bankName" maxlength="32">
			</div>
			<em class="delete" style="display:none" name="Wap_reg_person_001"></em>
		</div>
		<div class="input-a sn-block wbox mt30 pr">
			<span>手机号:</span>
			<div class="wbox-flex ml30 pr">
				<input type="text" id="phone" name="phone" maxlength="11">
			</div>
			<em class="delete" style="display:none" name="Wap_reg_person_001"></em>
		</div>
		<a href="javascript:withdrawSave()" name="Wap_reg_person_005" class="first-step sn-btn sn-btn-big sn-btn-block m30 sn-btn-positive">提现</a>
	</section>
	<script type="text/javascript" src="../js/zepto.min.js"></script>

</body></html>