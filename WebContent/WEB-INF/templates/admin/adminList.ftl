<div class="bjui-pageHeader">
        <ul class="bjui-searchBar">
            <li>
			<a href="adminAdd" class="btn btn-default" data-toggle="dialog" data-width="800" data-height="400" data-id="dialog-mask" data-mask="true">添加</a>
			</li>
        </ul>
</div>
<div class="bjui-pageContent">
    <table data-toggle="tablefixed" data-width="100%" data-layout-h="0" data-nowrap="true">
        <thead>
			<tr>
				<th orderField="code">ID</th>
                <th orderField="name">用户名</th>
                <th orderField="name">权限</th>
                <th orderField="name">创建时间</th>
                <th orderField="name">最后登录时间</th>
                <th orderField="name">最后登录IP</th>
                <th orderField="name">登录次数</th>
                <th orderField="name">状态</th>
                <th width="90">操作</th>
			</tr>
		</thead>
		<tbody>
        <#list adminList as admin>
            <tr>
                <td>${admin.id}</td>
                <td>${admin.name}</td>
                <td>
                <#if admin.juri==1>
                	超级管理员
                <#else>
                	普通管理员
                </#if>
                </td>
                <td>${admin.createDate}</td>
                <td>
                <#if admin.lastLoginTime??>
				${admin.lastLoginTime?if_exists}
				</#if>
                </td>
                <td>
                <#if admin.lastLoginIp??>
				${admin.lastLoginIp?if_exists}
				</#if>
                </td>
                <td>${admin.loginCount}</td>
                <td>
                <#if admin.status==0>
                	禁用
                <#else>
                	启用
                </#if>
                </td>
                <td>
                    <a href="adminEdit?id=${admin.id}" class="btn btn-green" data-toggle="dialog" data-width="800" data-height="400" data-id="adminEdit" data-mask="true">编辑</a>
                    <a href="adminDelete?id=${admin.id}" class="btn btn-red" data-toggle="doajax" data-confirm-msg="确定要删除该行信息吗？">删</a>
                </td>
            </tr>
		</#list>
		</tbody>
    </table>
</div>