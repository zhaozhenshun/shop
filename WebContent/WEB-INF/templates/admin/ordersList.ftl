<form id="pagerForm" onsubmit="return navTabSearch(this);" action="ordersList" method="post">
        <input type="hidden" name="pageCurrent" value="${page.pageCurrent}">
        <input type="hidden" name="pageSize" value="${page.pageSize}">
</form>
<div class="bjui-pageHeader">
    <form id="pagerForm" data-toggle="ajaxsearch" action="ordersList" method="post">
        <ul class="bjui-searchBar">
            <li><label>关键词：</label>
            <input type="text" id="key" name="key"  size="30" value="${key!''}"/>
            <button type="submit" class="btn-default" data-icon="search">查询</button>
            <a class="btn btn-orange" href="javascript:;" data-toggle="reloadsearch" data-clear-query="true" data-icon="undo">清空查询</a>可以搜索会员名、订单号、产品名称</li>
        </ul>
    </form>
</div>
<div class="bjui-pageContent">
    <table data-toggle="tablefixed" data-width="100%" data-layout-h="0" data-nowrap="true">
        <thead>
			<tr>
				<th orderField="code">ID</th>
				<th orderField="name">订单号</th>
				<th orderField="name">会员名</th>
                <th orderField="name">产品名称</th>
                <th orderField="type">产品单价</th>
                <th orderField="type">产品数量</th>
                <th orderField="grade">订单总额</th>
                <th orderField="grade">订单摘要</th>
                <th orderField="idno">下单时间</th>
                <th orderField="idno">状态</th>
                <th width="40">操作</th>
			</tr>
		</thead>
		<tbody>
        <#list ordersList as orders>
            <tr>
                <td>${orders.id}</td>
                <td>${orders.no}</td>
                <td>${orders.user.name}</td>
                <td>${orders.productName!""}</td>
                <td>${orders.productMoney!""}</td>
                <td>${orders.productNum!""}</td>
                <td>${orders.money}</td>
                <td>${orders.summary!""}</td>
                <td>${orders.createDate}</td>
                <td>
                <#if orders.status==0>
                	未付款
                <#else>
                	已付款
                </#if>
                </td>
                <td>
                    <a href="ordersDelete?id=${orders.id?string('#')}" class="btn btn-red" data-toggle="doajax" data-confirm-msg="确定要删除该行信息吗？">删</a>
                </td>
            </tr>
		</#list>
		</tbody>
    </table>
    <#include "pageBar.ftl"/>
</div>