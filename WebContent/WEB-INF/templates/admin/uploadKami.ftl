<script type="text/javascript">
    function file_upload_success(file, data) {
        var json = $.parseJSON(data)
        
        $(this).bjuiajax('ajaxDone', json)
        if (json[BJUI.keys.statusCode] == BJUI.statusCode.ok) {
            $('#filePath').val(json.filename)
        }
    }
</script>
<div class="bjui-pageContent">
    <form action="uploadKami" method="post" class="pageForm" data-toggle="validate" data-reload-navtab="true">
        <div class="pageFormContent" data-layout-h="0">
            <table class="table table-condensed table-hover">
            <input type="hidden" name="pid" value="${product.id}">
                <tbody>
                    <tr>
                        <td colspan="2" align="center"><h3>导入卡密（.txt）</h3></td>
                    </tr>
                    <tr>
                    	<td>
                            <label for="j_dialog_code" class="control-label x120">请选择文件：</label>
                            <input type="text" name="filePath" id="filePath" data-rule="" size="30">
                        	<div style="display:inline-block; vertical-align:middle;">
							    <div id="logo_pic_up" data-toggle="upload"
							     	data-uploader="uploadImages" 
							        data-file-obj-name="filedata" 
							        data-file-size-limit="1024000000" 
							        data-file-type-exts="*.txt" 
							        data-multi="false" 
							        data-auto="true" 
							        data-on-upload-success="file_upload_success" 
							        data-icon="cloud-upload"></div>
							</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="bjui-footBar">
            <ul>
                <li><button type="button" class="btn-close">关闭</button></li>
                <li><button type="submit" class="btn-default">保存</button></li>
            </ul>
        </div>
    </form>
</div>

