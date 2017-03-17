<div class="bjui-pageContent">
    <form action="rechargeCardSave" method="post" class="pageForm" data-toggle="validate" data-reload-navtab="true">
        <div class="pageFormContent" data-layout-h="0">
            <table class="table table-condensed table-hover">
                <thead>
                    <tr>
                    	<td colspan="2" align="center"><h3>生成充值卡</h3></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <label for="name" class="control-label x150">金额：</label>
                            <input type="text" name="money" id="money" data-rule="required number" size="15">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="name" class="control-label x150">数量：</label>
                              <input type="text" name="num" id="num" value="10" size="7" data-toggle="spinner" data-min="1" data-max="1000" data-step="1" data-rule="required integer">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="bjui-footBar">
            <ul>
                <li><button type="button" class="btn-close">关闭</button></li>
                <li><button type="submit" class="btn-default">生成</button></li>
            </ul>
        </div>
    </form>
</div>