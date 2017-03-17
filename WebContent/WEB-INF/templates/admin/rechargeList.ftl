<form id="pagerForm" onsubmit="return navTabSearch(this);" action="rechargeList" method="post">
        <input type="hidden" name="pageCurrent" value="${page.pageCurrent}">
        <input type="hidden" name="pageSize" value="${page.pageSize}">
</form>
<div class="bjui-pageHeader">
    <form id="pagerForm" data-toggle="ajaxsearch" action="rechargeList" method="post">
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
                <th orderField="name">充值金额</th>
                <th orderField="type">充值用户</th>
                <th orderField="grade">充值单号</th>
                <th orderField="idno">充值时间</th>
                <th orderField="idno">状态</th>
                <th width="90">操作</th>
			</tr>
		</thead>
		<tbody>
        <#list rechargeList as recharge>
            <tr>
                <td>${recharge.id}</td>
                <td>${recharge.money}</td>
                <td>${recharge.user.name}</td>
                <td>${recharge.no}</td>
                <td>${recharge.createDate}</td>
                <td>
                <#if recharge.status==0>
                	未付款
                <#else>
                	已付款
                </#if>
                </td>
                <td>
                    <a href="rechargeDelete.action?id=${recharge.id?string('#')}" class="btn btn-red" data-toggle="doajax" data-confirm-msg="确定要删除该行信息吗？">删</a>
                </td>
            </tr>
		</#list>
		</tbody>
    </table>
    <#include "pageBar.ftl"/>
</div>