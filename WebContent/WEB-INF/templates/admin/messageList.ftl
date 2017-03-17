<form id="pagerForm" onsubmit="return navTabSearch(this);" action="messageList.do" method="post">
        <input type="hidden" name="pageCurrent" value="${page.pageCurrent}">
        <input type="hidden" name="pageSize" value="${page.pageSize}">
</form>
<div class="bjui-pageHeader">
        <ul class="bjui-searchBar">
            <li>
			</li>
        </ul>
</div>

<div class="bjui-pageContent">
    <table data-toggle="tablefixed" data-width="100%" data-layout-h="0" data-nowrap="true">
        <thead>
			<tr>
				<th orderField="code">ID</th>
                <th orderField="name">标题</th>
                <th orderField="name">内容</th>
                <th orderField="name">回复</th>
                <th width="80">操作</th>
			</tr>
		</thead>
		<tbody>
			<#list list as message>
            <tr>
                <td>${message.id}</td>
                <td>${message.title!""}</td>
                <td>${message.content!""}</td>
                <td>${message.reply!""}</td>
                <td>
                	<a href="messageReply.do?id=${message.id}" class="btn btn-green" data-toggle="dialog" data-width="800" data-height="600" data-id="adminEdit" data-mask="true">回复</a>
                    <a href="messageDelete.do?id=${message.id}" class="btn btn-red" data-toggle="doajax" data-confirm-msg="确定要删除该行信息吗？">删</a>
                </td>
            </tr>
		</#list>
		</tbody>
    </table>
    <#include "pageBar.ftl"/>
</div>
