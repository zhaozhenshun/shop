<form id="pagerForm" onsubmit="return navTabSearch(this);" action="rechargeCardList" method="post">
        <input type="hidden" name="pageCurrent" value="${page.pageCurrent?string('#')}">
        <input type="hidden" name="pageSize" value="${page.pageSize?string('#')}">
</form>
<div class="bjui-pageHeader">
        <ul class="bjui-searchBar">
            <li>
            <form id="pagerForm" data-toggle="ajaxsearch" action="rechargeCardList" method="post">
			<a href="rechargeCardAdd" class="btn btn-default" data-toggle="dialog" data-width="800" data-height="400" data-id="dialog-mask" data-mask="true">添加</a>
			<a href="rechargeCardList?status=1" class="btn btn-default" data-toggle="navtab" data-id="dialog-mask" data-mask="true">已使用列表</a>
			<a href="rechargeCardList?status=0" class="btn btn-default" data-toggle="navtab" data-id="dialog-mask" data-mask="true">未使用列表</a>
            <label>卡号：</label>
            <input type="text" id="key" name="no"  size="40" value="${no!''}"/>
            <button type="submit" class="btn-default" data-icon="search">查询</button>
            <a class="btn btn-orange" href="javascript:;" data-toggle="reloadsearch" data-clear-query="true" data-icon="undo">清空查询</a></li>
        </ul>
    </form>
        </ul>
</div>
<div class="bjui-pageContent">
    <table data-toggle="tablefixed" data-width="100%" data-layout-h="0" data-nowrap="true">
        <thead>
			<tr>
				<th orderField="code">ID</th>
                <th orderField="type">卡号</th>
                <th orderField="name">充值卡金额</th>
                <th orderField="grade">生成时间</th>
                <th orderField="idno">状态</th>
                <th orderField="grade">使用时间</th>
                <th orderField="grade">使用用户编号</th>
                <th width="60">操作</th>
			</tr>
		</thead>
		<tbody>
        <#list rechargeCardList as rechargeCard>
            <tr>
                <td>${rechargeCard.id}</td>
                <td>${rechargeCard.no}</td>
                <td>${rechargeCard.money}</td>
                <td>${rechargeCard.createDate}</td>
                <td>
                <#if rechargeCard.status==0>
                	未使用
                <#else>
                	已使用
                </#if>
                </td>
                <td>${rechargeCard.useTime!""}</td>
                <td>${rechargeCard.useUserNo!""}</td>
                <td>
                    <a href="rechargeCardDelete.action?id=${rechargeCard.id?string('#')}" class="btn btn-red" data-toggle="doajax" data-confirm-msg="确定要删除该行信息吗？">删</a>
                </td>
            </tr>
		</#list>
		</tbody>
    </table>
    <#include "pageBar.ftl"/>
</div>