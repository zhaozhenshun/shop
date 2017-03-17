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
		<link rel="stylesheet" type="text/css" href="css/style.css" media="all">
	<title>会员登录</title>
	<script type="text/javascript" async="" src="js/aywmq.js"></script>
	<script async="" src="js/analytics.js"></script>
	<script type="text/javascript" async="" src="js/da_opt.js"></script>
	<script type="text/javascript" src="js/jquery.min.js"></script>
</head>
<body>
    <div class="sn-nav">
		<div class="sn-nav-back">
		<a class="sn-iconbtn" href="index.jsp">返回</a></div>
		<div class="sn-nav-title of">登录</div>
	</div>
	<section class="sn-main pr">
		<div class="input-a sn-block wbox mt30 pr">
			<span>用户名</span>
			<div class="wbox-flex ml30 pr">
				<input type="text" id="name" name="user.name" value="" placeholder="请输入用户名" maxlength="32">	
			</div>
			<em class="delete" style="display:none" name="Wap_reg_person_001"></em>
		</div>
		
		<div class="input-a sn-block wbox mt30 pr">
			<span>密码</span>
			<div class="wbox-flex ml30 pr">
				<input type="password" id="password" name="user.password" value="" placeholder="请输入密码" maxlength="32">	
			</div>
			<em class="delete" style="display:none" name="Wap_reg_person_001"></em>
		</div>
		<a href="javascript:void(0)" id="nextStep" name="Wap_reg_person_005" onclick="login();return false;" class="first-step sn-btn sn-btn-big sn-btn-block m30 sn-btn-positive">登录</a>
		<p class="assisFun f14 m30">
		<a href="register.jsp">快速注册</a>
		<a href="findPassword.jsp">忘记密码?</a>
		</p>
		
	</section>
	<script type="text/javascript" src="js/zepto.min.js"></script>

</body></html>