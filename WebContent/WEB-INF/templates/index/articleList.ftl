<!DOCTYPE HTML>
<html>
<head>
<title><#if articleCate??>
		  	${articleCate.name}
		  <#else>
		  	所有文章
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
   	<link rel="stylesheet" href="../fonts/res/css/font-awesome.min.css">
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
		<h3 class="style pull-left">
		<#if articleCate??>
		  	${articleCate.name}
		  <#else>
		  	所有文章
		  </#if></h3>
		<ol class="breadcrumb pull-right">
		  <li><a href="../">首页</a></li>
		  <li class="active">
		  <#if articleCate??>
		  	${articleCate.name}
		  <#else>
		  	所有文章
		  </#if>
		  </li>
		</ol>
		<div class="clearfix"></div>
	</div>
</div>
</div>
<div class="main_btm1"><!-- start main_btm -->
<div class="container">
	<div class="blog"><!-- start blog -->
			<div class="blog_main col-md-9">
			<#list articleList as article>
				<div class="blog_list">
					<div class="col-md-2 blog_date">
						<span class="date">${article.createDate?string('MM月')} <p>${article.createDate?string('dd日')}<p></p></span>
					</div>
					<div class="col-md-10 blog_left">
						<h4>
						<a href="detail.do?id=${article.id?string('#')}">
						${article.title}
						</a>
						</h4>
						<span><a href="${config.siteUrl}">${config.siteName}</a> <i class="fa fa-eye"></i>${article.views} 浏览</span>
						<p class="para">
						<#if article.summary??>
							${article.summary}
						</#if>
						</p>
					</div>
					<div class="clearfix"></div>
				</div>
			</#list>
				<div style="width:90%;text-align:right;">${page}</div>
				<div class="clearfix"></div>
			</div>
			<div class="col-md-3 blog_right">
				<div class="news_letter">
					<h4>搜索文章</h4>
						<form>
							<input type="text" placeholder="请输入关键词">
							<input type="submit" value="搜索">
						</form>
				</div>
			</div>
			<div class="clearfix"></div>
	</div><!-- end blog -->
</div>
</div>
<#include "footer.ftl"/>
</body>
</html>