<div class="bjui-footBar">
        <div class="pages">
            <span>每页&nbsp;</span>
            <div class="selectPagesize">
                <select data-toggle="selectpicker" data-toggle-change="changepagesize">
                	<option value="1" <#if page.pageSize==1>selected="selected"</#if>>1</option>
	                <option value="2" <#if page.pageSize==2>selected="selected"</#if>>2</option>
	                <option value="10" <#if page.pageSize==10>selected="selected"</#if>>10</option>
                    <option value="30" <#if page.pageSize==30>selected="selected"</#if>>30</option>
                    <option value="60" <#if page.pageSize==60>selected="selected"</#if>>60</option>
                    <option value="120" <#if page.pageSize==120>selected="selected"</#if>>120</option>
                    <option value="150" <#if page.pageSize==150>selected="selected"</#if>>150</option>
                </select>
            </div>
            <span>&nbsp;条，共${page.totalCount?string('#')}条，共 ${page.totalPage} 页</span>
        </div>
        <div class="pagination-box" data-toggle="pagination" data-total="${page.totalCount?string('#')}" data-page-size="${page.pageSize}" data-page-current="${page.pageCurrent}">
        </div>
    </div>