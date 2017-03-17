
<!DOCTYPE HTML>
<html>
<head>
<title>Contact-${config.siteEnName!""}</title>
<!-- Bootstrap -->
<link href="../../res/css/bootstrap.min.css" rel='stylesheet' type='text/css' />
<link href="../../res/css/bootstrap.css" rel='stylesheet' type='text/css' />
<meta name="viewport" content="width=device-width, initial-scale=1">
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<link href="../../res/css/blue.css" rel="stylesheet" type="text/css" media="all" />
<!----font-Awesome----->
   	<link rel="stylesheet" href="../../res/fonts/css/font-awesome.min.css">
<!----font-Awesome----->
<!-- start plugins -->
<script type="text/javascript" src="../../res/js/jquery.min.js"></script>
<script src="../../res/js/menu.js" type="text/javascript"></script>
</head>
<body>
<div class="header_bg">
<div class="container">
	<div class="header">
		<div class="logo">
			<a href="../"><img src="../../res/images/logo.png" alt=""/></a>
		</div>
		<div class="h_menu">
		<a id="touch-menu" class="mobile-menu" href="#">Menu</a>
		<nav>
		<ul class="menu list-unstyled">
			<li><a href="../">Home</a></li>
			<li><a href="../about/index.do">About Us</a></li>
			<li><a href="../article/list.do?id=1">News</a></li>
			<li><a href="../product/list.do">Product</a>
			<li class="activate"><a href="../contact/index.do">Contact</a>
			<li><a href="../../">中文</a>
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
		<h3 class="style pull-left">Contact</h3>
		<ol class="breadcrumb pull-right">
		  <li><a href="../">Home</a></li>
		  <li class="active">Contact</li>
		</ol>
		<div class="clearfix"></div>
	</div>
</div>
</div>
<div class="main_btm1"><!-- start main_btm -->
<div class="container">
	<div class="contact">
		<iframe width="100%" height="550" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="../map.jsp"></iframe>
	</div>
</div>
<#include "footer.ftl"/>
</body>
</html>