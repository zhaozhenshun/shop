<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
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
	<title>修改密码</title>
	<script type="text/javascript" async="" src="../js/aywmq.js"></script>
	<script async="" src="../js/analytics.js"></script>
	<script type="text/javascript" async="" src="../js/da_opt.js"></script>
	<script type="text/javascript" src="../js/jquery.min.js"></script>
</head>
<body>
    <div class="sn-nav">
		<div class="sn-nav-back">
		<a class="sn-iconbtn" href="javascript:history.go(-1)">返回</a></div>
		<div class="sn-nav-title of">修改密码</div>
		<div class="sn-nav-right tr pr"><a href="index.jsp">首页</a></div>
	</div>
	<section class="sn-main pr">
		<div class="input-a sn-block wbox mt30 pr">
			<span>原密码</span>
			<div class="wbox-flex ml30 pr">
				<input type="password" id="oldPassword" name="oldPassword" value="" placeholder="请输入原密码" maxlength="32">	
			</div>
			<em class="delete" style="display:none" name="Wap_reg_person_001"></em>
		</div>
		<div class="input-a sn-block wbox mt30 pr">
			<span>新密码</span>
			<div class="wbox-flex ml30 pr">
				<input type="password" id="newPassword" name="newPassword" value="" placeholder="请输入新密码" maxlength="32">	
			</div>
			<em class="delete" style="display:none" name="Wap_reg_person_001"></em>
		</div>
		<div class="input-a sn-block wbox mt30 pr">
			<span>确认新密码</span>
			<div class="wbox-flex ml30 pr">
				<input type="password" id="renewPassword" name="renewPassword" value="" placeholder="请重新输入新密码" maxlength="32">	
			</div>
			<em class="delete" style="display:none" name="Wap_reg_person_001"></em>
		</div>
		<a href="javascript:void(0)" id="nextStep" name="Wap_reg_person_005" onclick="changePassword();return false;" class="first-step sn-btn sn-btn-big sn-btn-block m30 sn-btn-positive">修改</a>
	</section>
	<script type="text/javascript" src="../js/zepto.min.js"></script>

</body></html>