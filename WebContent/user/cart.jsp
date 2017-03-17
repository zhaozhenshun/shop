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
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  <meta content="telephone=no" name="format-detection" />
  <title>提交订单</title>
  <link rel="stylesheet" href="../css/cart1.css" />
  <script type="text/javascript" src="../js/jquery.min.js"></script>
  <script type="text/javascript">
  	var money = ${requestScope.product.money };
  	var pid = ${requestScope.product.id };
  	var number = 1;
  	function updateQuantity(num){
  		var quantity = $("#quantity").val();
  		quantity = parseInt(quantity);
  		num = parseInt(num);
  		if(num==-1){
  			if(quantity==1){
  				return;
  			}
  		}
  		quantity = quantity+num;
  		$("#quantity").val(quantity);
  		$("#userPayAllPrice").html(quantity*money);
  		number = quantity;
  	}
  	function updateQuantityOnblur(){
  		var quantity = $("#quantity").val();
  		quantity = parseInt(quantity);
  		var reg = /^\+?[1-9][0-9]*$/;
  		if(!reg.test(quantity)){
  			$("#quantity").val("1");
  			$("#userPayAllPrice").html(money);
  			number = 1;
  		}else{
  			$("#quantity").val(quantity);
  			$("#userPayAllPrice").html(quantity*money);
  			number = quantity;
  		}
  	}
  	
  	function ordersSave(){
  		window.location.href="ordersSave?pid="+pid+"&num="+number;
  	}
  </script>
 </head>
 <body>
  <section class="ww" style="min-height:11rem;">
   <div class="loagMask" id="loading" style="-webkit-transform-origin: 0px 0px 0px; opacity: 1; -webkit-transform: scale(1, 1); display: none;">
    <div class="sn-mask-loading fixedLoading"></div>
   </div>
   <div class="sn-nav sn-block">
    <div class="sn-nav-back">
     <a class="sn-iconbtn" href="javascript:history.go(-1);">返回</a>
    </div>
    <div class="sn-nav-title of">
     	提交订单
    </div>
    <div class="sn-nav-right tr pr"><a href="index.jsp">首页</a></div>
   </div>
   <div class="cart-1-6" style="display:none;" id="cartLogin">
    <div class="cart-cont">
     <i></i>
     <p></p>
     <span><a href="javascript:void(0);" class="sn-btn sn-btn-positive" id="cartBtn"></a></span>
    </div>
   </div>
   <div id="hwgList" class="mt30"></div>
   <div id="cartList" class="mt30">
    <div class="cart-list" id="snList"> 
     <ul class="cart-item"> 
      <li id="li_0"> 
       <dl> 
        <dt> 
        <c:if test="${requestScope.status==0 }">
        <div class="pr"> 
          <div class="wbox "> 
           <div class="pro-box"> 
            <a href="javascript:void(0);" class="pro-name"> 
            <p class="text-clamp2 fs26">${requestScope.message }</p>
             </a> 
           </div> 
          </div> 
         <div class="cart-active sn-txt-assertive wbox" id="error_message_0"></div> 
        </c:if>
        <c:if test="${requestScope.status==1 }">
         <div class="pr"> 
          <div class="wbox "> 
           <div class="pro-img pr"> 
            <a href="javascript:void(0)"> 
            <img src="../${requestScope.product.picture }"/> </a> 
            <div class="pro-mask"></div> 
           </div> 
           <div class="pro-box"> 
            <a href="javascript:void(0)" class="pro-name"> 
            <p class="text-clamp2 fs26">${requestScope.product.title }</p>
             </a> 
            <div class="sn-count"> 
             <a href="javascript:void(0);" class="count-min " onclick="updateQuantity(-1);"></a> 
             <input type="text" value="1" class="input-reset count-num" maxlength="3" id="quantity" onblur="updateQuantityOnblur()" /> 
             <a href="javascript:void(0);" class="count-add " onclick="updateQuantity(1);"></a> 
            </div> 
           </div> 
          </div> 
          <div class="cart-list-opra wbox"> 
           <div class="wbox-flex tr"> 
            <p class="fs26 sn-txt-assertive ofv ">&yen;${requestScope.product.money }</p> 
           </div> 
           <em class="cart-edit-ico cart-fav-ico"></em> 
           <em class="cart-edit-ico cart-del-ico"></em> 
          </div> 
         </div> 
         <div class="cart-active sn-txt-assertive wbox" id="error_message_0"></div>
         </c:if> 
        </dt> 
       </dl> </li>
     </ul> 
    </div>
   </div>
  </section>
  <c:if test="${requestScope.status==1 }">
  <section class="cart-foot-bar hide" id="cartTotal" style="display: block;">
   <div class="cart-fixed">
    <div class="wbox pd">
     <div class="wbox-flex sn-txt-muted">
      <div class="fs30">
       合计:
       <i class="sn-txt-assertive">&yen;<span id="userPayAllPrice">${requestScope.product.money }</span></i>
      </div>
     </div>
     <div class="cart-btn-box" id="goSettlement">
      <a href="javascript:ordersSave();" class="sn-btn sn-btn-assertive sn-btn-big">结算</a>
     </div>
    </div>
   </div>
  </section>
  </c:if> 
 </body>
</html>