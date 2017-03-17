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
	<title>重置密码</title>
	<script type="text/javascript" async="" src="js/aywmq.js"></script>
	<script async="" src="js/analytics.js"></script>
	<script type="text/javascript" async="" src="js/da_opt.js"></script>
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript">
	function resetPassword(){
	var phone = $("#phone").val();
	var password = $("#password").val();
	var repassword = $("#repassword").val();
	if(password==""){
		alertDefaultStyle('mini','密码不能为空');
	}else if(repassword==""){
		alertDefaultStyle('mini','确认密码不能为空');
	}else if(password!=repassword){
		alertDefaultStyle('mini','两次密码输入不一致');
	}else{
		$.ajax({
	        url: "resetPassword",
	        type: "POST",
	        data: {
	        	"phone": phone,
	            "password": password
	        },
	        dataType: "json",
	        async: true,
	        success: function(data) {
	        	alertDefaultStyle("mini", data.message);
	            if ("1" == data.status) {
	            	setTimeout("window.location.href='login.jsp';",2000);
	            }
	        },
	        error: function() {
	            alertDefaultStyle("mini", "连接失败")
	        }
	    });
	}
}
	</script>
</head>
<body>
    <div class="sn-nav">
		<div class="sn-nav-back">
		<a class="sn-iconbtn" href="javascript:history.go(-1)">返回</a></div>
		<div class="sn-nav-title of">重置密码</div>
	</div>
	<section class="sn-main pr">
		<div class="input-a sn-block wbox mt30 pr">
			<span>手机号</span>
			<div class="wbox-flex ml30 pr">${phone }
				<input type="hidden" id="phone" name="phone" value="${phone }" placeholder="请输入手机号" maxlength="11">	
			</div>
			<em class="delete" style="display:none" name="Wap_reg_person_001"></em>
		</div>
		<div class="input-a sn-block wbox mt30 pr">
			<span>新密码</span>
			<div class="wbox-flex ml30 pr">
				<input type="password" id="password" name="password" value="" placeholder="请输入密码" maxlength="32">	
			</div>
			<em class="delete" style="display:none" name="Wap_reg_person_001"></em>
		</div>
		<div class="input-a sn-block wbox mt30 pr">
			<span>确认新密码</span>
			<div class="wbox-flex ml30 pr">
				<input type="password" id="repassword" value="" placeholder="请重新输入密码" maxlength="32">	
			</div>
			<em class="delete" style="display:none" name="Wap_reg_person_001"></em>
		</div>
		<a href="javascript:void(0)" id="nextStep" name="Wap_reg_person_005" onclick="resetPassword();return false;" class="first-step sn-btn sn-btn-big sn-btn-block m30 sn-btn-positive">重置密码</a>
		<p class="assisFun f14 m30">
		<a href="login.jsp" name="WAP_login_none_forgetPswd">登录</a>
		<a href="register.jsp" name="WAP_login_none_register">快速注册</a>
		</p>
		
	</section>
	<script type="text/javascript" src="js/zepto.min.js"></script>

</body></html>