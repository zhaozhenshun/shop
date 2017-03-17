
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><#if articleCate??>
		  	${articleCate.enName}
		  <#else>
		  	All
		  </#if>-${config.siteEnName!""}</title>
		  <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0">
<script type="text/javascript" src="../../js/jquery.min.js"></script>
<link rel="stylesheet" href="../../css/styles.css" type="text/css">
<script type="text/javascript" src="../../js/jquery.min.js"></script>
</head>
<body>
  <div class="wrap bc">
    <div class="title tc pr top">
	  <span class="back-btn"></span>
	  <#if articleCate??>
		  	${articleCate.enName}
		  <#else>
		  	All
		  </#if>
	  <div class="nav-btn">
	    <ul class="pa">
	    <li><a href="../">Home</a></li>
	      <li><a href="../about/index.do">About Us</a></li>
		  <li><a href="../article/list.do?id=1">News</a></li>
		  <li><a href="../product/list.do">Product</a></li>
		  <li><a href="../contact/index.do">Contact</a></li>
		  <li><a href="../../">中文</a></li>
	    </ul>
	  </div>
	</div>
	<div class="list news">
	  <ul>
	  <#list articleList as article>
		<li>
		  <h4><a href="detail.do?id=${article.id?string('#')}">${article.enTitle}</a></h4>
		  <p style="font-size:12px;">
		    <#if article.enSummary??>
							${article.enSummary}
						</#if>
          </p>
		</li>
		</#list>
	  </ul>
	</div>
	<div class="links mt10 oh cb">
	<ul>
	  ${page}
	  </ul>
	</div>
<#include "footer.ftl"/>
</body>
</html>