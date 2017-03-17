<script type="text/javascript">
    function picture_upload_success(file, data) {
        var json = $.parseJSON(data)
        
        $(this).bjuiajax('ajaxDone', json)
        if (json[BJUI.keys.statusCode] == BJUI.statusCode.ok) {
            $('#picture').val(json.filename)
            $('#picture_span_pic').html('<img src="../'+ json.filename +'" height="80px">')
        }
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
	<form action="productUpdate" method="post" class="pageForm" data-toggle="validate" data-reload-navtab="true">
        <div class="pageFormContent" data-layout-h="0">
                <div class="tab-content">
                    <div class="tab-pane fade active in" id="cn">
	            <table class="table table-condensed table-hover" width="100%">
	                <thead>
	                    <tr>
	                    	<td colspan="2" align="center"><h3>修改产品</h3></td>
	                    </tr>
	                </thead>
	                <tbody>
	                    <tr>
		                       <td>
		                           <label for="fatherId" class="control-label x90">上级分类：</label>
		                        <input type="hidden" name="product.id" id="id" value="${product.id}">
	                     		<input type="hidden" name="product.productCate.id" id="fatherId2" value="${product.productCate.id}">
	                        	<input type="text" name="menus" id="fathername" data-toggle="selectztree" size="18" data-tree="#j_select_tree2" data-rule="required" value="${product.productCate.name}" readonly>
                                <ul id="j_select_tree2" class="ztree hide" data-toggle="ztree" data-expand-all="true" data-check-enable="true" data-chk-style="radio" data-radio-type="all" data-on-check="S_NodeCheck" data-on-click="S_NodeClick">
			                    ${zNodes}
			                    </ul>
		                      </td>
	                    </tr>
	                    <tr>
                    	<td>
                            <label for="j_dialog_code" class="control-label x90">产品主图：</label>
                            <input type="hidden" name="product.picture" id="picture" data-rule="" size="30" value="${product.picture!''}">
                        	<div style="display:inline-block; vertical-align:middle;">
							    <div id="picture_pic_up" data-toggle="upload"
							     	data-uploader="uploadImages" 
							        data-file-obj-name="filedata" 
							        data-file-size-limit="1024000000" 
							        data-file-type-exts="*.jpg;*.png;*.gif;*.mpg" 
							        data-multi="false" 
							        data-auto="true" 
							        data-on-upload-success="picture_upload_success" 
							        data-icon="cloud-upload"></div>
							</div>
							<span id="picture_span_pic"><#if product.picture??><img src="../${product.picture}" height="80px"></#if></span>
                        </td>
                    </tr>
	                    <tr>
	                        <td>
	                            <label for="title" class="control-label x90">标题：</label>
	                            <input type="text" name="product.title" id="title" data-rule="required" size="50" placeholder="请输入标题" value="${product.title}">
	                        </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            <label for="title" class="control-label x90">面额：</label>
	                            <input type="text" name="product.bills" id="bills" data-rule="required;number" size="10" placeholder="请输入面额" value="${product.bills}">元
	                        </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            <label for="title" class="control-label x90">售价：</label>
	                            <input type="text" name="product.money" id="money" data-rule="required;number" size="10" placeholder="请输入售价" value="${product.money}">元
	                        </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            <label for="content" class="control-label x90">内容：</label>
	                            <div style="display: inline-block; vertical-align: left;">
	                            <textarea name="product.content" id="j_form_content" class="j-content" data-rule="required" style="width: 680px;height:300px;" 
	                            data-toggle="kindeditor" data-minheight="200" data-upload-json="../res/bjui/plugins/kindeditor_4.1.10/jsp/upload_json.jsp" 
	                             data-file-manager-json="../res/bjui/plugins/kindeditor_4.1.10/jsp/file_manager_json.jsp">${product.content}</textarea>
	                        	</div>
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