<div class="bjui-pageContent">
    <form action="adminUpdate" method="post" class="pageForm" data-toggle="validate" data-reload-navtab="true">
        <input type="hidden" name="admin.id" value="${admin.id}">
        <div class="pageFormContent" data-layout-h="0">
            <table class="table table-condensed table-hover">
            	<thead>
                    <tr>
                        <td colspan="2" align="center"><h3>修改管理员</h3></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    	<td>
                            <label for="j_dialog_code" class="control-label x90">用户名：</label>
                            <input type="text" name="admin.name" id="name" data-rule="required" size="20" value="${admin.name}">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="j_dialog_name" class="control-label x90">密码：</label>
                            <input type="password" name="admin.password" id="password" data-rule="" size="20">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="j_dialog_operation" class="control-label x90">权限：</label>
                            <select class="combox" name="admin.juri"  data-toggle="selectpicker">
								<option value="0" <#if admin.juri==0>selected="selected"</#if>>普通管理员</option>
								<option value="1" <#if admin.juri==1>selected="selected"</#if>>超级管理员</option>
							</select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="j_dialog_operation" class="control-label x90">状态：</label>
                            <select class="combox" name="admin.status"  data-toggle="selectpicker">
								<option value="0" <#if admin.status==0>selected="selected"</#if>>禁用</option>
								<option value="1" <#if admin.status==1>selected="selected"</#if>>可用</option>
							</select>
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