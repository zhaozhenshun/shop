<script type="text/javascript">
function E_afterUpload(url) {
    alertMsg.info('上传成功：'+ url);
}
function E_afterSelectFile(url) {
    alertMsg.info('选择成功：'+ url);
}
function E_afterSelect(url) {
    alertMsg.info('成功插入图片：'+ url);
}
</script>
<script type="text/javascript">
//选择事件
function S_NodeCheck(e, treeId, treeNode) {
    var zTree = $.fn.zTree.getZTreeObj(treeId),
        nodes = zTree.getCheckedNodes(true);
    var ids = '', names = '';
    for (var i = 0; i < nodes.length; i++) {
        ids   += ','+ nodes[i].id;
        names += ','+ nodes[i].name;
    }
    if (ids.length > 0) {
        ids = ids.substr(1), names = names.substr(1);
    }
    var $from = $($('#'+ treeId).data('fromObj'));
    if ($from && $from.length)
        $from.val(names);
    $("#fatherId2").val(ids);
}
//单击事件
function S_NodeClick(event, treeId, treeNode) {
    var zTree = $.fn.zTree.getZTreeObj(treeId);
    zTree.checkNode(treeNode, !treeNode.checked, true, true);
    return false;
}
</script>
<div class="bjui-pageContent">
	<form action="articleUpdate" method="post" class="pageForm" data-toggle="validate" data-reload-navtab="true">
        <div class="pageFormContent" data-layout-h="0">
                <div class="tab-content">
                    <div class="tab-pane fade active in" id="cn">
	            <table class="table table-condensed table-hover" width="100%">
	                <thead>
	                    <tr>
	                    	<td colspan="2" align="center"><h3>添加文章</h3></td>
	                    </tr>
	                </thead>
	                <tbody>
	                    <tr>
		                       <td>
		                           <label for="fatherId" class="control-label x90">上级栏目：</label>
		                        <input type="hidden" name="article.id" id="id" value="${article.id}">
	                     		<input type="hidden" name="article.articleCate.id" id="fatherId2" value="${article.articleCate.id}">
	                        	<input type="text" name="menus" id="fathername" data-toggle="selectztree" size="18" data-tree="#j_select_tree2" data-rule="required" value="${article.articleCate.name}" readonly>
                                <ul id="j_select_tree2" class="ztree hide" data-toggle="ztree" data-expand-all="true" data-check-enable="true" data-chk-style="radio" data-radio-type="all" data-on-check="S_NodeCheck" data-on-click="S_NodeClick">
			                    ${zNodes}
			                    </ul>
		                      </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            <label for="title" class="control-label x90">中文标题：</label>
	                            <input type="text" name="article.title" id="title" data-rule="required" size="50" placeholder="请输入中文标题" value="${article.title}">
	                        </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            <label for="content" class="control-label x90">中文摘要：</label>
	                            <div style="display: inline-block; vertical-align: left;">
	                            <textarea name="article.summary" id="summary" class="j-content" data-rule="" style="width: 500px;height:100px;" >${article.summary!""}</textarea>
	                        	</div>
	                        </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            <label for="content" class="control-label x90">中文内容：</label>
	                            <div style="display: inline-block; vertical-align: left;">
	                            <textarea name="article.content" id="j_form_content" class="j-content" data-rule="required" style="width: 880px;height:300px;" 
	                            data-toggle="kindeditor" data-minheight="200" data-upload-json="../res/bjui/plugins/kindeditor_4.1.10/jsp/upload_json.jsp" 
	                             data-file-manager-json="../res/bjui/plugins/kindeditor_4.1.10/jsp/file_manager_json.jsp">${article.content!""}</textarea>
	                        	</div>
	                        </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            <label for="j_custom_content" class="control-label x90">点击数：</label>
	                            <input type="text" name="article.views" id="views" data-rule="required number" size="20" placeholder="请输入点击数" value="${article.views}">
	                        </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            <label for="status" class="control-label x90">状态：</label>
	                            <select name="article.status" id="status" data-rule="required" data-width="auto">
	                                <option value="0" <#if article.status==0>selected="selected"</#if>>未审核</option>
	                                <option value="1" <#if article.status==1>selected="selected"</#if>>已审核</option>
                            	</select>
	                        </td>
	                    </tr>
	                </tbody>
	            </table>
					</div>
                </div>
        </div>
        <div class="bjui-footBar">
            <ul>
                <li><button type="button" class="btn-close">关闭</button></li>
                <li><button type="submit" class="btn-default">保存</button></li>
            </ul>
        </div>
    </form>
</div>