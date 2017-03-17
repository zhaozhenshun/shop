
<!DOCTYPE HTML>
<html>
<head>
<title>${article.title!""}-${config.siteName!""}</title>
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
			<li class="activate"><a href="../article/list.do?id=1">新闻动态</a></li>
			<li><a href="../product/list.do">产品展示</a>
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
		<h3 class="style pull-left">${article.title!""}</h3>
		<ol class="breadcrumb pull-right">
		  <li><a href="../">首页</a></li>
		  <li class="active"><a href="list.do?id=${article.articleCate.id}">${article.articleCate.name}</a></li>
		</ol>
		<div class="clearfix"></div>
	</div>
</div>
</div>
<div class="main_btm1"><!-- start main_btm -->
<div class="container">
		<div class="details">
			<p class="para">
			${article.content!""}
			</p>
		</div>
</div>
</div>
<#include "footer.ftl"/>
</body>
</html>