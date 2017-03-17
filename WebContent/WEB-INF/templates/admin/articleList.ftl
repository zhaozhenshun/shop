<form id="pagerForm" onsubmit="return navTabSearch(this);" action="articleList" method="post">
        <input type="hidden" name="pageCurrent" value="${page.pageCurrent}">
        <input type="hidden" name="pageSize" value="${page.pageSize}">
</form>
<div class="bjui-pageHeader">
        <ul class="bjui-searchBar">
            <li>
			<a href="articleAdd" class="btn btn-default" data-toggle="dialog" data-width="1200" data-height="600" data-id="dialog-mask" data-mask="true">添加文章</a>
			</li>
        </ul>
</div>

<div class="bjui-pageContent">
    <table data-toggle="tablefixed" data-width="100%" data-layout-h="0" data-nowrap="true">
        <thead>
			<tr>
				<th orderField="code">ID</th>
                <th orderField="name">标题</th>
                <th orderField="name">所属栏目</th>
                <th orderField="name">发布时间</th>
                <th orderField="name">点击数</th>
                <th orderField="name">状态</th>
                <th width="80">操作</th>
			</tr>
		</thead>
		<tbody>
			<#list list as article>
            <tr>
                <td>${article.id}</td>
                <td>${article.title}</td>
                <td><a href="articleList?cid=${article.articleCate.id}" data-toggle="navtab">
                ${article.articleCate.name}
                </a>
                </td>
                <td>${article.createDate}</td>
                <td>${article.views}</td>
                <td>
                <#if article.status==0>
                	未审核
                <#else>
                	已审核
                </#if>
                </td>
                <td>
                	<a href="articleEdit?id=${article.id}" class="btn btn-green" data-toggle="dialog" data-width="1200" data-height="600" data-id="adminEdit" data-mask="true">编辑</a>
                    <a href="articleDelete?id=${article.id}" class="btn btn-red" data-toggle="doajax" data-confirm-msg="确定要删除该行信息吗？">删</a>
                </td>
            </tr>
		</#list>
		</tbody>
    </table>
    <#include "pageBar.ftl"/>
</div>
