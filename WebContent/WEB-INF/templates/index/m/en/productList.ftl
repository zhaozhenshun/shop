
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><#if productCate??>
		  ${productCate.enName}
		  <#else>
		  	All
		  </#if>-${config.siteEnName!""}</title>
<script type="text/javascript" src="../../js/jquery.min.js"></script>
<link rel="stylesheet" href="../../css/styles.css" type="text/css">
<script type="text/javascript" src="../../js/jquery.min.js"></script>
</head>
<body>
  <div class="wrap bc">
    <div class="title tc pr top">
	  <span class="back-btn"></span>Product List
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
	<div class="links mt10 oh cb">
	  <ul class="tc">
	    <li><a href="list.do">All</a></li>
	    <#list productCateList as productCate>
		<li><a href="list.do?id=${productCate.id}">${productCate.enName}</a></li>
		</#list>
	  </ul>
	</div>
	
	<div class="products">
	  <ul>
	  <#list productList as product>
	    <li>
		  <a href="detail.do?id=${product.id!''}"><img src="../../${product.picture!''}"></a>
		  <h4 class="f13 mt10">
		  <#if product.enTitle??>
		  <#if product.enTitle?length gt 20>
			${product.enTitle?substring(0,20)}
			<#else>
			${product.enTitle}
			</#if>
			</#if>
		  </h4>
		</li>
		</#list>
	  </ul>
	  <div>
	  
	  </div>
	</div>
	<div class="links mt10 oh cb">
	<ul>
	  ${page}
	  </ul>
	</div>
<#include "footer.ftl"/>
</body>
</html>