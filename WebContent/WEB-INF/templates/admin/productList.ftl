<form id="pagerForm" onsubmit="return navTabSearch(this);" action="productList" method="post">
        <input type="hidden" name="pageCurrent" value="${page.pageCurrent}">
        <input type="hidden" name="pageSize" value="${page.pageSize}">
</form>
<div class="bjui-pageHeader">
        <ul class="bjui-searchBar">
            <li>
			<a href="productAdd" class="btn btn-default" data-toggle="dialog" data-width="1000" data-height="600" data-id="dialog-mask" data-mask="true">添加产品</a>
			</li>
        </ul>
</div>

<div class="bjui-pageContent">
    <table data-toggle="tablefixed" data-width="100%" data-layout-h="0" data-nowrap="true">
        <thead>
			<tr>
				<th orderField="code">ID</th>
                <th orderField="name">标题</th>
                <th orderField="name">所属分类</th>
                <th orderField="name">面额</th>
                <th orderField="name">售价</th>
                <th orderField="name">发布时间</th>
                <th width="300">操作</th>
			</tr>
		</thead>
		<tbody>
			<#list list as product>
            <tr>
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>
                <a href="productList?cid=${product.productCate.id}" data-toggle="navtab">
                	${product.productCate.name}
                </a>
                </td>
                <td>${product.bills}元</td>
                <td>${product.money}元</td>
                <td>${product.createDate}</td>
                <td>
                	<a href="kamiList?pid=${product.id}" class="btn btn-green" data-toggle="dialog" data-width="1000" data-height="600" data-id="lookKami" data-mask="true">查看卡密</a>
                	<a href="kamiAdd?pid=${product.id}" class="btn btn-green" data-toggle="dialog" data-width="800" data-height="500" data-id="addKami" data-mask="true">添加卡密</a>
                	<a href="uploadKamiPage?pid=${product.id}" class="btn btn-green" data-toggle="dialog" data-width="800" data-height="500" data-id="uploadKami" data-mask="true">导入卡密</a>
                	<a href="productEdit?id=${product.id}" class="btn btn-green" data-toggle="dialog" data-width="1000" data-height="600" data-id="productEdit" data-mask="true">编辑</a>
                    <a href="productDelete?id=${product.id}" class="btn btn-red" data-toggle="doajax" data-confirm-msg="确定要删除该产品吗？删除之后，该产品的所有卡密将被清空！！！">删</a>
                </td>
            </tr>
		</#list>
		</tbody>
    </table>
    <#include "pageBar.ftl"/>
</div>
