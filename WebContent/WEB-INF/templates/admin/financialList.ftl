<form id="pagerForm" onsubmit="return navTabSearch(this);" action="financialList" method="post">
        <input type="hidden" name="pageCurrent" value="${page.pageCurrent}">
        <input type="hidden" name="pageSize" value="${page.pageSize}">
</form>
<div class="bjui-pageHeader">
    <form id="pagerForm" data-toggle="ajaxsearch" action="financialList" method="post">
        <ul class="bjui-searchBar">
            <li><label>关键词：</label>
            <input type="text" id="key" name="key"  size="15" value="${key!''}"/>
            <button type="submit" class="btn-default" data-icon="search">查询</button>
            <a class="btn btn-orange" href="javascript:;" data-toggle="reloadsearch" data-clear-query="true" data-icon="undo">清空查询</a>可以搜索会员编号、单号</li>
        </ul>
    </form>
</div>
<div class="bjui-pageContent tableContent">
    <table data-toggle="tablefixed" data-width="100%" data-layout-h="0" data-nowrap="true">
        <thead>
			<tr>
				<th orderField="code">ID</th>
				<th orderField="name">所属用户</th>
                <th orderField="name">类型</th>
                <th orderField="type">交易金额</th>
                <th orderField="name">单号</th>
                <th orderField="name">交易方式</th>
                <th orderField="name">备注</th>
                <th orderField="name">时间</th>
                <th orderField="name">操作人</th>
			</tr>
		</thead>
		<tbody>
        <#list financialList as financial>
            <tr>
                <td>${financial.id}</td>
                <td>${financial.user.name}</td>
                <td>
                <#if financial.type==0>
                	扣款
                <#else>
                	入款
                </#if>
                </td>
                <td>${financial.money}</td>
                <td>${financial.no!""}</td>
                <td>${financial.payment!""}</td>
                <td>${financial.remark!""}</td>
                <td>${financial.createDate!""}</td>
                <td>${financial.operator!""}</td>
            </tr>
		</#list>
		</tbody>
    </table>
    <#include "pageBar.ftl"/>
</div>