<form id="pagerForm" onsubmit="return navTabSearch(this);" action="withdrawList" method="post">
        <input type="hidden" name="pageCurrent" value="${page.pageCurrent}">
        <input type="hidden" name="pageSize" value="${page.pageSize}">
</form>
<div class="bjui-pageHeader">
    <form id="pagerForm" data-toggle="ajaxsearch" action="withdrawList" method="post">
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
                <th orderField="name">提款金额</th>
                <th orderField="type">用户名</th>
                <th orderField="name">开户银行</th>
                <th orderField="name">银行户名</th>
                <th orderField="grade">银行卡号</th>
                <th orderField="idno">提交时间</th>
                <th orderField="idno">状态</th>
                <th width="120">操作</th>
			</tr>
		</thead>
		<tbody>
        <#list withdrawList as withdraw>
            <tr>
                <td>${withdraw.id}</td>
                <td>${withdraw.money}</td>
                <td>${withdraw.user.name}</td>
                <td>${withdraw.bank!""}</td>
                <td>${withdraw.bankName!""}</td>
                <td>${withdraw.bankNo!""}</td>
                <td>${withdraw.createDate}</td>
                <td>
                <#if withdraw.status==0>
                	未处理
                <#else>
                	已处理
                </#if>
                </td>
                <td>
                <#if withdraw.status==0>
                	<a href="withdrawDetail?id=${withdraw.id?string('#')}" class="btn btn-red" data-toggle="doajax" data-confirm-msg="确定处理完成了吗？">处理完成</a>
                </#if>
                    <a href="withdrawDelete?id=${withdraw.id?string('#')}" class="btn btn-red" data-toggle="doajax" data-confirm-msg="确定要删除该行信息吗？">删</a>
                </td>
            </tr>
		</#list>
		</tbody>
    </table>
    <#include "pageBar.ftl"/>
</div>