<form id="pagerForm" onsubmit="return navTabSearch(this);" action="kamiList" method="post">
        <input type="hidden" name="pageCurrent" value="${page.pageCurrent}">
        <input type="hidden" name="pageSize" value="${page.pageSize}">
</form>
<div class="bjui-pageContent">
    <table data-toggle="tablefixed" data-width="100%" data-layout-h="0" data-nowrap="true">
        <thead>
			<tr>
				<th orderField="code">ID</th>
                <th orderField="name">所属产品</th>
                <th orderField="name">卡号</th>
                <th orderField="name">密码</th>
                <th orderField="name">状态</th>
                <th orderField="name">添加时间</th>
                <th orderField="name">销售时间</th>
                <th width="90">操作</th>
			</tr>
		</thead>
		<tbody>
			<#list list as kami>
            <tr>
                <td>${kami.id}</td>
                <td>${kami.product.title}</td>
                <td>${kami.no!""}</td>
                <td>${kami.password!""}</td>
                <td>
                <#if kami.status==0>
               	 	未销售
                <#else>
                	已销售
                </#if>
                </td>
                <td>${kami.createDate}</td>
                <td>${kami.saleTime!""}</td>
                <td>
                    <a href="kamiDelete?id=${kami.id}" class="btn btn-red" data-toggle="doajax" data-confirm-msg="确定要删除该行信息吗？">删</a>
                </td>
            </tr>
		</#list>
		</tbody>
    </table>
    <#include "pageBar.ftl"/>
</div>
