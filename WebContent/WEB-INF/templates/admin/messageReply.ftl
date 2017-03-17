<div class="bjui-pageContent">
	<form action="messageUpdate.do" class="pageForm" data-toggle="validate" data-reload-navtab="true">
        <div class="pageFormContent" data-layout-h="0">
            <table class="table table-condensed table-hover" width="100%">
            <input type="hidden" name="message.id" value="${message.id}">
                <thead>
                    <tr>
                    	<td colspan="2" align="center"><h3>回复留言</h3></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <label for="title" class="control-label x90">标题：</label>
                            <input type="text" name="message.title" id="title" data-rule="required" size="50" placeholder="请输入标题" value="${message.title!''}">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="content" class="control-label x90">内容：</label>
                            <div style="display: inline-block; vertical-align: middle;">
                            <textarea name="message.content" id="j_form_content" class="j-content" data-rule="required" style="width: 680px;height:200px;" >${message.content!''}</textarea>
                        	</div>
                        </td>
                    </tr>
                   <tr>
                        <td>
                            <label for="content" class="control-label x90">回复：</label>
                            <div style="display: inline-block; vertical-align: middle;">
                            <textarea name="message.reply" id="j_form_content" class="j-content" data-rule="required" style="width: 680px;height:200px;" >${message.reply!''}</textarea>
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