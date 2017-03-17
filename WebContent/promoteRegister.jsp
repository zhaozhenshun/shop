<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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
	<title>会员注册</title>
	<script type="text/javascript" async="" src="js/aywmq.js"></script>
	<script async="" src="js/analytics.js"></script>
	<script type="text/javascript" async="" src="js/da_opt.js"></script>
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript">
	$(document).ready(function() {
		createUserNo();
	});
	</script>
</head>
<body>
    <div class="sn-nav">
		<div class="sn-nav-back">
		<a class="sn-iconbtn" href="">返回</a></div>
		<div class="sn-nav-title of">注册</div>
	</div>
	<section class="sn-main pr">
	<c:if test="${requestScope.status==0 }">
		<div class="input-a sn-block wbox mt30 pr">
			<span>推广链接无效</span>
		</div>
	</c:if>
	<c:if test="${requestScope.status==1 }">
		<div class="input-a sn-block wbox mt30 pr">
			<span>编号</span>
			<div class="wbox-flex ml30 pr">
				<input type="text" id="no" name="user.no" value="" placeholder="请刷新生成编号" maxlength="6" readonly="readonly">	
			</div>
			<em class="delete" style="display:none" name="Wap_reg_person_001"></em>
		</div>
		<div class="input-a sn-block wbox mt30 pr">
			<span>用户名</span>
			<div class="wbox-flex ml30 pr">
				<input type="text" id="name" name="user.name" value="" placeholder="请输入用户名" maxlength="32">	
			</div>
			<em class="delete" style="display:none" name="Wap_reg_person_001"></em>
		</div>
		<div class="input-a sn-block wbox mt30 pr">
			<span>手机号</span>
			<div class="wbox-flex ml30 pr">
				<input type="tel" id="phone" name="user.phone" value="" placeholder="请输入11位手机号码" maxlength="11">	
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
		<div class="input-a sn-block wbox mt30 pr">
			<span>确认密码</span>
			<div class="wbox-flex ml30 pr">
				<input type="password" id="repassword" value="" placeholder="请重新输入密码" maxlength="32">	
			</div>
			<em class="delete" style="display:none" name="Wap_reg_person_001"></em>
		</div>
		<div class="input-a sn-block wbox mt30 pr">
			<span>推荐人</span>
			<div class="wbox-flex ml30 pr">
				<input type="text" id="tuijianren" name="tuijianren" value="${requestScope.no }" placeholder="请输入推荐人编号" readonly="readonly" maxlength="32">	
			</div>
			<em class="delete" style="display:none" name="Wap_reg_person_001"></em>
		</div>
		<a href="javascript:void(0)" id="nextStep" name="Wap_reg_person_005" onclick="register();return false;" class="first-step sn-btn sn-btn-big sn-btn-block m30 sn-btn-positive">注册</a>
	</c:if>
	</section>
	<script type="text/javascript" src="js/zepto.min.js"></script>

</body></html>