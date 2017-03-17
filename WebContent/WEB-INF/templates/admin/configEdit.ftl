<script type="text/javascript">
    function logo_upload_success(file, data) {
        var json = $.parseJSON(data)
        
        $(this).bjuiajax('ajaxDone', json)
        if (json[BJUI.keys.statusCode] == BJUI.statusCode.ok) {
            $('#logo').val(json.filename)
            $('#logo_span_pic').html('<img src="../'+ json.filename +'" height="80px">')
        }
    }
    
    function weixin_upload_success(file, data) {
        var json = $.parseJSON(data)
        
        $(this).bjuiajax('ajaxDone', json)
        if (json[BJUI.keys.statusCode] == BJUI.statusCode.ok) {
            $('#weixin').val(json.filename)
            $('#weixin_span_pic').html('<img src="../'+ json.filename +'" height="80px">')
        }
    }
</script>
<div class="bjui-pageContent">
    <form action="configUpdate" method="post" class="pageForm" data-toggle="validate" data-reload-navtab="true">
        <div class="pageFormContent" data-layout-h="0">
            <table class="table table-condensed table-hover">
            <input type="hidden" name="config.id" value="${config.id}">
                <tbody>
                    <tr>
                        <td colspan="2" align="center"><h3>系统设置</h3></td>
                    </tr>
                    <tr>
                    	<td>
                            <label for="j_dialog_code" class="control-label x120">网站名称：</label>
                            <input type="text" name="config.siteName" id="siteName" data-rule="" size="30" value="${config.siteName!''}">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="j_dialog_name" class="control-label x120">网址：</label>
                            <input type="text" name="config.siteUrl" id="siteUrl" data-rule="" size="30" value="${config.siteUrl!''}">如：http://www.919dns.com/
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="j_dialog_name" class="control-label x120">关键词：</label>
                            <input type="text" name="config.siteKeys" id="siteKeys" data-rule="" size="30" value="${config.siteKeys!''}">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="j_dialog_name" class="control-label x120">描述：</label>
                            <textarea cols="30" name="config.siteDescription">${config.siteDescription!''}</textarea>
                        </td>
                    </tr>
                    <tr>
                    	<td>
                            <label for="j_dialog_code" class="control-label x120">LOGO：</label>
                            <input type="hidden" name="config.logo" id="logo" data-rule="" size="30" value="${config.logo!''}">
                        	<span id="logo_span_pic"><#if (config.logo)!=""><img src="../${config.logo!""}" height="80px"/></#if></span>
                        	<div style="display:inline-block; vertical-align:middle;">
							    <div id="logo_pic_up" data-toggle="upload"
							     	data-uploader="uploadImages" 
							        data-file-obj-name="filedata" 
							        data-file-size-limit="1024000000" 
							        data-file-type-exts="*.jpg;*.png;*.gif;*.mpg" 
							        data-multi="false" 
							        data-auto="true" 
							        data-on-upload-success="logo_upload_success" 
							        data-icon="cloud-upload"></div>
							</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="j_dialog_name" class="control-label x120">地址：</label>
                            <input type="text" name="config.address" id="address" data-rule="" size="30" value="${config.address!''}">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="j_dialog_name" class="control-label x120">电话：</label>
                            <input type="text" name="config.phone" id="phone" data-rule="" size="30" value="${config.phone!''}">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="j_dialog_name" class="control-label x120">QQ：</label>
                            <input type="text" name="config.qq" id="qq" data-rule="" size="30" value="${config.qq!''}">请输入QQ号码,如:582866070
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="j_dialog_name" class="control-label x120">首页大图：</label>
                            <input type="hidden" name="config.weixin" id="weixin" data-rule="" size="30" value="${config.weixin!''}">
                        	<span id="weixin_span_pic"><#if (config.weixin)!=""><img src="../${config.weixin!""}" height="80px"/></#if></span>
                        	<div style="display:inline-block; vertical-align:middle;">
							    <div id="weixin_pic_up" data-toggle="upload"
							     	data-uploader="uploadImages" 
							        data-file-obj-name="filedata" 
							        data-file-size-limit="1024000000" 
							        data-file-type-exts="*.jpg;*.png;*.gif;*.mpg" 
							        data-multi="false" 
							        data-auto="true" 
							        data-on-upload-success="weixin_upload_success" 
							        data-icon="cloud-upload"></div>
							</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="j_dialog_name" class="control-label x120">一级奖金比例：</label>
                            <input type="text" name="config.firstLevel" id="firstLevel" data-rule="required;number" size="5" value="${config.firstLevel!''}">%
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <label for="j_dialog_name" class="control-label x120">二级奖金比例：</label>
                            <input type="text" name="config.secondLevel" id="secondLevel" data-rule="required;number" size="5" value="${config.secondLevel!''}">%
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="j_dialog_name" class="control-label x120">三级奖金比例：</label>
                            <input type="text" name="config.thirdLevel" id="thirdLevel" data-rule="required;number" size="5" value="${config.thirdLevel!''}">%
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="j_dialog_name" class="control-label x120">支付宝合作ID：</label>
                            <input type="text" name="config.alipayPartner" id="alipayPartner" data-rule="" size="30" value="${config.alipayPartner!''}">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="j_dialog_name" class="control-label x120">支付宝账号：</label>
                            <input type="text" name="config.alipaySellerEmail" id="alipaySellerEmail" data-rule="" size="30" value="${config.alipaySellerEmail!''}">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="j_dialog_name" class="control-label x120">支付宝商户私钥：</label>
                            <input type="text" name="config.alipayKey" id="alipayKey" data-rule="" size="30" value="${config.alipayKey!''}">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="j_dialog_name" class="control-label x120">软件下载地址：</label>
                            <input type="text" name="config.downloadUrl" id="downloadUrl" data-rule="" size="30" value="${config.downloadUrl!''}">
                        </td>
                    </tr>
                    <tr>
	                        <td>
	                            <label for="status" class="control-label x120">在线充值：</label>
	                            <select name="config.onlinePayIsOpen" id="onlinePayIsOpen" data-style="btn-default btn-sel" data-width="auto">
	                                <option value="0" <#if config.onlinePayIsOpen==0>selected="selected"</#if>>禁用</option>
	                                <option value="1" <#if config.onlinePayIsOpen==1>selected="selected"</#if>>可用</option>
	                            </select>
	                        </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            <label for="status" class="control-label x120">充值卡充值：</label>
	                            <select name="config.rechargeCardIsOpen" id="rechargeCardIsOpen" data-style="btn-default btn-sel" data-width="auto">
	                                <option value="0" <#if config.rechargeCardIsOpen==0>selected="selected"</#if>>禁用</option>
	                                <option value="1" <#if config.rechargeCardIsOpen==1>selected="selected"</#if>>可用</option>
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

