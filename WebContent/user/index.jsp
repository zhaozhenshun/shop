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
	<title>会员中心</title>
	<link rel="stylesheet" type="text/css" href="../css/base.css">
	<link rel="stylesheet" type="text/css" href="../css/member.rem.css">
	<script type="text/javascript" src="../js/jquery.min.js"></script>
	<script>
    $(function(){
		$.ajax({
		    url: "userInfoJson",
		    type: "GET",
		    dataType: "json",
		    async: false,
		    success: function(data) {
		        $("#balance").html(data.balance+"元");
		        $("#commission").html(data.commission+"元");
		    }
		});
	});
    </script>
</head>

<body>

	<!-- 公用头部导航 -->
	<div class="sn-nav sn-block">
		<div class="sn-nav-back"><a class="sn-iconbtn" href="../index.jsp">返回</a></div>
		<div class="sn-nav-title of">会员中心</div>
	<!-- 头像区域 -->
	<div class="meb-banner" style="background:url(../images/banner.jpg) no-repeat center top;background-size:cover;">
		<div class="meb-person-data">
			<div class="meb-head">
				<img src="../images/avatar.png" onerror="this.src='../images/avatar.png'">
			</div>
			<div class="meb-name">
			${sessionScope.loginUser.phone }
			</div>
		</div>
	</div>
	<div class="sn-block meb-list">
		<ul class="sn-list-input">
			
		</ul>
			
			<ul class="sn-list-input">
				<p class="list-title sn-txt-muted">我的信息</p>
				<li style="align:center;">
						货币:<span id="balance">${loginUser.balance }元</span>&nbsp;
						奖金:<span id="commission">${loginUser.commission }元</span>
				</li>
				<li>
					<a href="../list.jsp" class="block wbox" >
						<label class="meb-list-ico" style="background:url('../images/ico-myDate.png') no-repeat left center;background-size:1rem 1rem;">我要购买</label>
						<div class="wbox-flex tr sn-txt-muted arrow">
						</div>
					</a>
				</li>
				<li>
					<a href="info.jsp" class="block wbox" >
						<label class="meb-list-ico" style="background:url('../images/my.jpg') no-repeat left center;background-size:1rem 1rem;">我的信息</label>
						<div class="wbox-flex tr sn-txt-muted arrow">
						</div>
					</a>
				</li>
				<li>
					<a href="promote.jsp" class="block wbox" >
						<label class="meb-list-ico" style="background:url('../images/ico-myTicket.png') no-repeat left center;background-size:1rem 1rem;">推广链接</label>
						<div class="wbox-flex tr sn-txt-muted arrow">
								<span id="toExpiredCouponsNum"></span>
						</div>
					</a>
				</li>
				<li>
				<a href="ordersList.jsp" class="block wbox" id="mts-allorder">
					<label class="meb-list-ico" style="background:url('../images/or.png') no-repeat left center;background-size:1rem 1rem;">订单管理</label>
					<div class="wbox-flex tr sn-txt-muted arrow">查看所有订单</div>
				</a>
				</li>
				<li>
					<a href="levelCount.jsp" class="block wbox" >
						<label class="meb-list-ico" style="background:url('../images/ico-addr.png') no-repeat left center;background-size:1rem 1rem;">下级统计</label>
						<div class="wbox-flex tr sn-txt-muted arrow">
						</div>
					</a>
				</li>
				
			</ul>
			<ul class="sn-list-input">
				<p class="list-title sn-txt-muted">财务信息</p>
				<li>
					<a href="commissionList.jsp" class="block wbox" >
						<label class="meb-list-ico" style="background:url('../images/ico-mylc.png ') no-repeat left center;background-size:1rem 1rem;">佣金明细</label>
						<div class="wbox-flex tr sn-txt-muted arrow">
						</div>
					</a>
				</li>
				
				<li>
					<a href="withdraw.jsp" class="block wbox" >
						<label class="meb-list-ico" style="background:url('../images/ico-myS.png') no-repeat left center;background-size:1rem 1rem;">申请提现</label>
						<div class="wbox-flex tr sn-txt-muted arrow">
						</div>
					</a>
				</li>
				<li>
					<a href="withdrawList.jsp" class="block wbox" >
						<label class="meb-list-ico" style="background:url('../images/143558597675811964.jpg') no-repeat left center;background-size:1rem 1rem;">提现列表</label>
						<div class="wbox-flex tr sn-txt-muted arrow">
						</div>
					</a>
				</li>
				<c:if test="${config.onlinePayIsOpen==1 }">
				<li>
					<a href="recharge.jsp" class="block wbox" >
						<label class="meb-list-ico" style="background:url('../images/143385213411317884.jpg') no-repeat left center;background-size:1rem 1rem;">在线充值</label>
						<div class="wbox-flex tr sn-txt-muted arrow">
						</div>
					</a>
				</li>
				</c:if>
				<c:if test="${config.rechargeCardIsOpen==1 }">
				<li>
					<a href="rechargeCard.jsp" class="block wbox" >
						<label class="meb-list-ico" style="background:url('../images/ico-sales.png') no-repeat left center;background-size:1rem 1rem;">充值卡充值</label>
						<div class="wbox-flex tr sn-txt-muted arrow">
						</div>
					</a>
				</li>
				</c:if>
				<li>
					<a href="financialList.jsp" class="block wbox" >
						<label class="meb-list-ico" style="background:url('../images/ico-myCollection.png') no-repeat left center;background-size:1rem 1rem;">财务明细</label>
						<div class="wbox-flex tr sn-txt-muted arrow">
						</div>
					</a>
				</li>
				<li>
					<a href="commissionToBalance.jsp" class="block wbox" >
						<label class="meb-list-ico" style="background:url('../images/ico-mylqb.png') no-repeat left center;background-size:1rem 1rem;">奖金转入</label>
						<div class="wbox-flex tr sn-txt-muted arrow">
						</div>
					</a>
				</li>
				<li>
					<a href="balanceToUser.jsp" class="block wbox" >
						<label class="meb-list-ico" style="background:url('../images/ico-myDate.png') no-repeat left center;background-size:1rem 1rem;">会员转账</label>
						<div class="wbox-flex tr sn-txt-muted arrow">
						</div>
					</a>
				</li>
			</ul>
	</div>
	<div class="btn-cont" id="tanchuan"><a href="logout" class="sn-btn sn-btn-dark-big sn-btn-outline">退出</a></div>
 

<script type="text/javascript" src="/RES/wap/common/script/lib/zepto/1.1.4/zepto.min.js?v=3.1.3"></script>
<script type="text/javascript" src="http://passport.suning.com/ids/js/passport.js?v=3.1.3"></script>
<script type="text/javascript" src="/RES/wap/common/script/module/alertBox/2.0.0/alertBox.js?v=3.1.3"></script>
<script type="text/javascript" src="/RES/wap/accountcenterv2/script/myneedtodoList.js?v=3.1.3"></script>

<script type="text/javascript" src="/RES/wap/common/script/res/buriedpoint.js?v=3.1.3" id="mts-buriedpoint" 
	mts-path-root="/RES" mts-cache-version="3.1.3">
</script>

<script type="text/javascript">
var pageNumber = 1;
var totalPages = 0;
var pageSize = 10;
var resRoot = '/RES';
var base = '';
$(function(){
	getToExpiredCouponListNum()
})

</script>

</body>
</html>