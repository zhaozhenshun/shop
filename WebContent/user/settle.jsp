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
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  <meta content="telephone=no" name="format-detection" />
  <title>结算信息</title>
  <link rel="stylesheet" href="../css/cart2.css" />
  <script type="text/javascript" src="../js/jquery.min.js"></script>
  <script type="text/javascript" src="../js/zepto.min.js"></script>
  <script type="text/javascript">
  function pay(){
  		$.ajax({
	        url: "../ordersPay?no=${requestScope.orders.no }",
	        type: "get",
	        dataType: "json",
	        async: false,
	        success: function(data) {
	        	alertDefaultStyle("mini", data.message);
	        	if(data.href!=null){
	        		setTimeout("window.location.href='"+data.href+"';",2000);
	        	}
	        	if ("1" == data.status) {
	            	setTimeout("window.location.href='ordersDetail?no="+data.no+"';",2000);
	            }
	        },
	        error: function() {
	            alertDefaultStyle("mini", "请求失败");
	        }
	    });
  }
  </script>
 </head>
 <body>
  <section class="ww">
   <div class="loagMask" id="loading" style="-webkit-transform-origin: 0px 0px 0px; opacity: 1; -webkit-transform: scale(1, 1); display: none;">
    <div class="sn-mask-loading fixedLoading"></div>
   </div>
   <section class="cart-main">
    <div class="sn-nav sn-block">
     <div id="back" class="sn-nav-back">
      <a class="sn-iconbtn">返回</a>
     </div>
     <div class="sn-nav-title of">
      结算信息
     </div>
     <div class="sn-nav-right tr pr"><a href="index.jsp">首页</a></div>
    </div>
    <div class="sn-block cart-send-box fs30">
     <ul class="sn-list-input">
      <li><label>配送方式：</label>
       <div class="wbox-flex tr">
        <div id="selectShipModel" style="-webkit-transform-origin: 0px 0px 0px; opacity: 1; -webkit-transform: scale(1, 1);">
         	自动发货
        </div>
       </div></li>
     </ul>
    </div>
    <div class="sn-block mt30 fs30">
     <ul class="sn-list-input">
      <li><label>支付方式</label>
       <div class="wbox-flex tr">
        <div id="selectShipModel" style="-webkit-transform-origin: 0px 0px 0px; opacity: 1; -webkit-transform: scale(1, 1);">
         	余额支付
        </div>
       </div></li>
     </ul>
    </div>
    <div id="snProdListDivId">
     <div class="cart-list mt30"> 
      <div class="cart-title wbox of"> 
       <div class="fs30">
        	商品信息
       </div> 
       <div class="wbox-flex tr sn-txt-muted">
         	 
       </div> 
      </div> 
      <div class="cart-more-list pr "> 
       <ul class="sn-list-common sn-block"> 
        <li> 
         <div class="wbox-flex ovf"> 
          <a class="pro-list"> 
           <div class="wbox "> 
            <div class="pro-info wbox-flex"> 
             <div class="pro-name of">
              	${requestScope.orders.productName }
             </div> 
             <div class="snPrice">
              	￥${requestScope.orders.productMoney }
             </div> 
             <span class="cart-number">x ${requestScope.orders.productNum }</span> 
            </div> 
           </div> </a> 
         </div> </li> 
       </ul> 
      </div> 
     </div>
    </div>
    <div class="cart-order-total cart-box mb30">
     <dl>
      <dt>
       <label>订单总额</label>
       <div class="wbox-flex tr">
        <div id="needPayAmountId" class="snPrice">
         	￥${requestScope.orders.money }
        </div>
       </div>
      </dt>
      <dd>
       <label class="mt10 sn-txt-muted">商品总额</label>
       <div class="wbox-flex tr">
        <div id="productAllPrice" class="snPrice fs30">
         	￥${requestScope.orders.money }
        </div>
       </div>
      </dd>
     </dl>
    </div>
   </section>
  </section>
  <section class="cart-foot-bar h120">
   <div class="cart-fixed">
    <div class="wbox pd">
     <div class="wbox-flex sn-txt-muted">
      <div class="cart-total-price">
       	应付金额: 
       <i id="totalAmountId" class="sn-txt-assertive">￥${requestScope.orders.money }</i>
      </div>
     </div>
     <div class="cart-btn-box">
      <a href="javascript:pay()" id="submitOrderDivId" class="sn-btn sn-btn-assertive sn-btn-big">付款</a>
     </div>
    </div>
   </div>
  </section>
 </body>
</html>