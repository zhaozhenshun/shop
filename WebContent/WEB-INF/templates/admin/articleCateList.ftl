<script type="text/javascript">

 var $panel = $.CurrentNavtab;
	var t = 2;
    var $t = $('#ztree1');
     var $span  = $('#ztree-'+ t);
     var $log   = $('#ztree-log');
     var op     = $t.data();
        var edit   = op.showRenameBtn=false;
                 var rename = op.showRenameBtn=false;
                var remove = op.showRemoveBtn=false;
                
            $t.data('editEnable', edit).data('showRenameBtn', rename).data('showRemoveBtn', remove)
            
            $log.val('data-edit-enable="'+ edit +'"\r\n' + 'data-show-rename-btn="'+ rename +'"\r\n' + 'data-show-remove-btn="'+ remove +'"')
            $span.text(($span.text() == '无') ? '显示' : '无')
            $panel.initui();

//删除前事件
function M_BeforeRemove(treeId, treeNode) {
	alertMsg.confirm("确定删除 "+ treeNode.name +" 吗?", {
		okCall: function(){
			ajaxPost("articleCateDelete","id="+treeNode.id, "");
			 return true;
		}
	});
   return false;
}

//删除结束事件
function M_NodeRemove(event, treeId, treeNode) {
   alert("2");
}
function M_BeforeRename(event, treeId, treeNode) {
    alert("a");
}

//单击事件
function ZtreeClick(event, treeId, treeNode) {
	$(this).dialog({id:"articleCateEdit"+treeNode.id, url:'articleCateEdit?id='+treeNode.id, title:"修改",mask:true});
}
</script>
<div class="bjui-pageHeader">
        <ul class="bjui-searchBar">
            <li>
			<a href="articleCateAdd" class="btn btn-default" data-toggle="dialog" data-width="800" data-height="400" data-id="dialog-mask" data-mask="true">添加</a>
			</li>
        </ul>
</div>
<div class="bjui-pageContent">
    <div class="pageFormContent" data-layout-h="0">
        <div style="float: left; width: 100%;">
            <fieldset>
                <div class="clearfix">
                     <div style="float:left; width:500px; height:450px; overflow:auto;">
                        <ul id="ztree1" class="ztree" data-toggle="ztree" data-expand-all="true" data-on-click="ZtreeClick">
                            ${zNodes}
                        </ul>
                    </div>
                </div>
            </fieldset>
        </div>
    </div>
</div>