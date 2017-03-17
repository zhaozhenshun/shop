<!DOCTYPE HTML>
<html>
<head>
<title><#if productCate??>
		  ${productCate.name}
		  <#else>
		  	产品列表
		  </#if>-${config.siteName!""}</title>
<!-- Bootstrap -->
<script src="http://siteapp.baidu.com/static/webappservice/uaredirect.js" type="text/javascript"></script>
<script type="text/javascript">uaredirect("http://www.pangu-stone.com/m");</script>
<link href="../res/css/bootstrap.min.css" rel='stylesheet' type='text/css' />
<link href="../res/css/bootstrap.css" rel='stylesheet' type='text/css' />
<meta name="viewport" content="width=device-width, initial-scale=1">
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<link href="../res/css/blue.css" rel="stylesheet" type="text/css" media="all" />
<!----font-Awesome----->
   	<link rel="stylesheet" href="../res/fonts/css/font-awesome.min.css">
<!----font-Awesome----->
<!-- start plugins -->
<script type="text/javascript" src="../res/js/jquery.min.js"></script>
<script src="../res/js/menu.js" type="text/javascript"></script>
		<script type="text/javascript" src="../res/js/fliplightbox.min.js"></script>
		<script type="text/javascript">
			$('body').flipLightBox()
		</script>
		<script type="text/javascript" src="../res/js/jquery.easing.min.js"></script>
		<script type="text/javascript" src="../res/js/jquery.mixitup.min.js"></script>
		<script type="text/javascript">
			$(function() {

				var filterList = {

					init : function() {

						// MixItUp plugin
						// http://mixitup.io
						$('#portfoliolist').mixitup({
							targetSelector : '.portfolio',
							filterSelector : '.filter',
							effects : ['fade'],
							easing : 'snap',
							// call the hover effect
							onMixEnd : filterList.hoverEffect()
						});

					},

					hoverEffect : function() {

						// Simple parallax effect
						$('#portfoliolist .portfolio').hover(function() {
							$(this).find('.label').stop().animate({
								bottom : 0
							}, 200, 'easeOutQuad');
							$(this).find('img').stop().animate({
								top : -30
							}, 500, 'easeOutQuad');
						}, function() {
							$(this).find('.label').stop().animate({
								bottom : -40
							}, 200, 'easeInQuad');
							$(this).find('img').stop().animate({
								top : 0
							}, 300, 'easeOutQuad');
						});

					}
				};

				// Run the show!
				filterList.init();

			});
		</script>
<!-- start light_box -->
<link rel="stylesheet" type="text/css" href="../res/css/jquery.fancybox.css" media="screen" />
<!--
<script type="text/javascript" src="../res/js/jquery-1.3.2.min.js"></script>
<script type="text/javascript" src="../res/js/jquery.easing.1.3.js"></script>
-->
<script type="text/javascript" src="../res/js/jquery.fancybox-1.2.1.js"></script>
	<script type="text/javascript">
		$(document).ready(function() {
			$("div.fancyDemo a").fancybox();
		});
	</script>

</head>
<body>
<div class="header_bg">
<div class="container">
	<div class="header">
		<div class="logo">
			<a href="../"><img src="../res/images/logo.png" alt=""/></a>
		</div>
		<div class="h_menu">
		<a id="touch-menu" class="mobile-menu" href="#">菜单</a>
		<nav>
		<ul class="menu list-unstyled">
			<li><a href="../">首页</a></li>
			<li><a href="../about/index.do">关于我们</a></li>
			<li><a href="../article/list.do?id=1">新闻动态</a></li>
			<li class="activate"><a href="../product/list.do">产品展示</a>
			<li><a href="../contact/index.do">联系我们</a>
			<li><a href="../en">English</a>
		</ul>
		</nav>
		</div>
		<div class="clearfix"></div>
	</div>
</div>
</div>
<div class="main_bg"><!-- start main -->
<div class="container">
	<div class="main_grid1">
		<h3 class="style pull-left">产品列表</h3>
		<ol class="breadcrumb pull-right">
		  <li><a href="../">首页</a></li>
		  <li class="active">
		  <#if productCate??>
		  ${productCate.name}
		  <#else>
		  	产品列表
		  </#if>
		  </li>
		</ol>
		<div class="clearfix"></div>
	</div>
</div>
</div>
<div class="main_btm1"><!-- start main_btm -->
<div class="container">
	<div class="portfolio_main">
						<ul id="filters" class="clearfix">
							<li>
								<a href="list.do" style="text-decoration:none;"><span class="filter active" data-filter="app card icon web">
								所有</span></a>
							</li>
							<#if productCate??>
							<#if productCate.fatherId!=0>
							<li>
								<a href="list.do?id=${productCate.fatherId}" style="text-decoration:none;">
								<span class="filter" data-filter="app  icon">
								上级分类
								</span>
								</a>
							</li>
							</#if>
							</#if>
							<#list productCateList as productCate>
							<li>
								<a href="list.do?id=${productCate.id}" style="text-decoration:none;">
								<span class="filter" data-filter="card ">
								${productCate.name}
								</span>
								</a>
							</li>
							</#list>
						</ul>
						<div id="portfoliolist">
						<#list productList as product>
							<div class="portfolio logo1" data-cat="${product.title!''}">
								<div class="portfolio-wrapper">
									<div class="fancy">
										<a title="${product.title!''}" href="detail.do?id=${product.id!''}">
										<img src="../${product.picture!''}" alt="${product.title!''}" width="265px" height="185px"/>
										</a>
									</div>
									<div class="label">
										<div class="label-text">
											<span class="text-category">${product.title!''}</span>
										</div>
										<div class="label-bg"></div>
									</div>
								</div>
							</div>
						</#list>
						</div>
			<div class="clearfix"></div>
			<ul class="pagination">
			  ${page}
			</ul>
		</div>
	</div>
</div>
<#include "footer.ftl"/>
</body>
</html>