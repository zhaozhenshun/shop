<%@ page language="java" import="java.util.*,java.net.InetAddress" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
Properties props = System.getProperties();// 获取当前的系统属性  
Runtime r = Runtime.getRuntime();
InetAddress addr;
addr = InetAddress.getLocalHost();
String ip = addr.getHostAddress();
%>
<!DOCTYPE html>
<head>
<meta http-equiv="content-type" content="text/html;charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>汉三网络hansan后台管理系统</title>
<meta name="Keywords" content="汉三网络hansan"/>
<meta name="Description" content="汉三网络hansan后台管理系统"/> 
<!-- bootstrap - css -->
<link href="../res/bjui/themes/css/bootstrap.min.css" rel="stylesheet">
<!-- core - css -->
<link href="../res/bjui/themes/css/style.css" rel="stylesheet">
<link href="../res/bjui/themes/purple/core.css" id="bjui-link-theme" rel="stylesheet">
<!-- plug - css -->
<link href="../res/bjui/plugins/kindeditor_4.1.10/themes/default/default.css" rel="stylesheet">
<link href="../res/bjui/plugins/colorpicker/css/bootstrap-colorpicker.min.css" rel="stylesheet">
<link href="../res/bjui/plugins/niceValidator/jquery.validator.css" rel="stylesheet">
<link href="../res/bjui/plugins/bootstrapSelect/bootstrap-select.css" rel="stylesheet">
<link href="../res/bjui/themes/css/FA/css/font-awesome.min.css" rel="stylesheet">
<!--[if lte IE 7]>
<link href="../res/bjui/themes/css/ie7.css" rel="stylesheet">
<![endif]-->
<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!--[if lte IE 9]>
    <script src="../res/bjui/other/html5shiv.min.js"></script>
    <script src="../res/bjui/other/respond.min.js"></script>
<![endif]-->
<!-- jquery -->
<script src="../res/bjui/js/jquery-1.7.2.min.js"></script>
<script src="../res/bjui/js/jquery.cookie.js"></script>
<!--[if lte IE 9]>
<script src="../res/bjui/other/jquery.iframe-transport.js"></script>    
<![endif]-->
<!-- BJUI.all 分模块压缩版 -->
<script src="../res/bjui/js/bjui-all.js"></script>
<!-- plugins -->
<!-- swfupload for uploadify && kindeditor -->
<script src="../res/bjui/plugins/swfupload/swfupload.js"></script>
<!-- kindeditor -->
<script src="../res/bjui/plugins/kindeditor_4.1.10/kindeditor-all.min.js"></script>
<script src="../res/bjui/plugins/kindeditor_4.1.10/lang/zh_CN.js"></script>
<!-- colorpicker -->
<script src="../res/bjui/plugins/colorpicker/js/bootstrap-colorpicker.min.js"></script>
<!-- ztree -->
<script src="../res/bjui/plugins/ztree/jquery.ztree.all-3.5.js"></script>
<!-- nice validate -->
<script src="../res/bjui/plugins/niceValidator/jquery.validator.js"></script>
<script src="../res/bjui/plugins/niceValidator/jquery.validator.themes.js"></script>
<!-- bootstrap plugins -->
<script src="../res/bjui/plugins/bootstrap.min.js"></script>
<script src="../res/bjui/plugins/bootstrapSelect/bootstrap-select.min.js"></script>
<!-- icheck -->
<script src="../res/bjui/plugins/icheck/icheck.min.js"></script>
<!-- dragsort -->
<script src="../res/bjui/plugins/dragsort/jquery.dragsort-0.5.1.min.js"></script>
<!-- HighCharts -->
<script src="../res/bjui/plugins/highcharts/highcharts.js"></script>
<script src="../res/bjui/plugins/highcharts/highcharts-3d.js"></script>
<script src="../res/bjui/plugins/highcharts/themes/gray.js"></script>
<!-- ECharts -->
<script src="../res/bjui/plugins/echarts/echarts.js"></script>
<!-- other plugins -->
<script src="../res/bjui/plugins/other/jquery.autosize.js"></script>
<link href="../res/bjui/plugins/uploadify/css/uploadify.css" rel="stylesheet">
<script src="../res/bjui/plugins/uploadify/scripts/jquery.uploadify.min.js"></script>
<!-- init -->
<script type="text/javascript">
$(function() {
    BJUI.init({
        JSPATH       : '../res/bjui/',         //[可选]框架路径
        PLUGINPATH   : '../res/bjui/plugins/', //[可选]插件路径
        loginInfo    : {url:'login_timeout.html', title:'登录', width:400, height:200}, // 会话超时后弹出登录对话框
        statusCode   : {ok:200, error:300, timeout:301}, //[可选]
        ajaxTimeout  : 50000, //[可选]全局Ajax请求超时时间(毫秒)
        alertTimeout : 30000, //[可选]信息提示[info/correct]自动关闭延时(毫秒)
        pageInfo     : {pageCurrent:'pageCurrent', pageSize:'pageSize', orderField:'orderField', orderDirection:'orderDirection'}, //[可选]分页参数
        keys         : {statusCode:'statusCode', message:'message'}, //[可选]
        ui           : {showSlidebar:true, hideMode:'display'}, //[可选]hideMode:navtab组件切换的隐藏方式，支持的值有’display’，’offsets’负数偏移位置的值，默认值为’display’
        debug        : true,    // [可选]调试模式 [true|false，默认false]
        theme        : 'blue' // 若有Cookie['bjui_theme'],优先选择Cookie['bjui_theme']。皮肤[五种皮肤:default, orange, purple, blue, green]
    })
    //时钟
    var today = new Date(), time = today.getTime()
    $('#bjui-date').html(today.formatDate('yyyy/MM/dd'))
    setInterval(function() {
        today = new Date(today.setSeconds(today.getSeconds() + 1))
        $('#bjui-clock').html(today.formatDate('HH:mm:ss'))
    }, 1000)
})

//console.log('IE:'+ (!$.support.leadingWhitespace))
//菜单-事件
function MainMenuClick(event, treeId, treeNode) {
    if (treeNode.isParent) {
        var zTree = $.fn.zTree.getZTreeObj(treeId)
        
        zTree.expandNode(treeNode)
        return
    }
    
    if (treeNode.target && treeNode.target == 'dialog')
        $(event.target).dialog({id:treeNode.tabid, url:treeNode.url, title:treeNode.name})
    else
        $(event.target).navtab({id:treeNode.tabid, url:treeNode.url, title:treeNode.name, fresh:treeNode.fresh, external:treeNode.external})
    event.preventDefault()
}
</script>
<!-- for doc begin -->
<link type="text/css" rel="stylesheet" href="/js/syntaxhighlighter-2.1.382/styles/shCore.css"/>
<link type="text/css" rel="stylesheet" href="/js/syntaxhighlighter-2.1.382/styles/shThemeEclipse.css"/>
<script type="text/javascript" src="/js/syntaxhighlighter-2.1.382/scripts/brush.js"></script>
<link href="doc/doc.css" rel="stylesheet">
<script type="text/javascript">
$(function(){
    SyntaxHighlighter.config.clipboardSwf = '/js/syntaxhighlighter-2.1.382/scripts/clipboard.swf'
    $(document).on(BJUI.eventType.initUI, function(e) {
        SyntaxHighlighter.highlight();
    })
})
</script>
<!-- for doc end -->
<!-- for git 挂件 begin -->
<style type="text/css">
    .pro_name a{color:#4183c4;}
    .osc_git_title{background-color:#d8e5f1;}
    .osc_git_box{background-color:#fafafa;}
    .osc_git_box{border-color:#ddd;}
    .osc_git_info{color:#666;}
    .osc_git_main a{color:#4183c4; font-size:14px; line-height:1.5;}
    .osc_git_main li{line-height:1.5;}
</style>
<!-- for git 挂件 end -->
</head>
<body>
    <!--[if lte IE 7]>
        <div id="errorie"><div>您还在使用老掉牙的IE，正常使用系统前请升级您的浏览器到 IE8以上版本 <a target="_blank" href="http://windows.microsoft.com/zh-cn/internet-explorer/ie-8-worldwide-languages">点击升级</a>&nbsp;&nbsp;强烈建议您更改换浏览器：<a href="http://down.tech.sina.com.cn/content/40975.html" target="_blank">谷歌 Chrome</a></div></div>
    <![endif]-->
    <header class="navbar navbar-default" id="bjui-header">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bjui-navbar-collapse">
                <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="http://www.hansan.com" target="_blank"><img src="../res/images/hansanlogo.png"></a>
        </div>
        <nav class="collapse navbar-collapse" id="bjui-navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
                <li class="datetime"><div><span id="bjui-date"></span><br><i class="fa fa-clock-o"></i> <span id="bjui-clock"></span></div></li>
                <li><a href="javascript:void(0)">
					    ${loginAdmin.name}
					</a></li>
                <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">我的账户 <span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                        <li><a href="changePwd" data-toggle="dialog" data-id="changepwd_page" data-mask="true" data-width="400" data-height="260">&nbsp;
                        <span class="glyphicon glyphicon-lock"></span>修改密码&nbsp;</a></li>
                        <li class="divider"></li>
                        <li><a href="logout" class="red">&nbsp;<span class="glyphicon glyphicon-off"></span> 注销登陆</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>

    <div class="bjui-leftside" id="bjui-leftside">
        <div id="bjui-sidebar-s">
            <div class="collapse">
                <div class="toggleCollapse"><div title="展开菜单"><i class="fa fa-angle-double-right"></i></div></div>
            </div>
        </div>
        <div id="bjui-sidebar">
            <div class="toggleCollapse"><h2>主菜单</h2><div title="收缩菜单"><i class="fa fa-angle-double-left"></i></div></div>
            <div class="panel-group panel-main" data-toggle="accordion" id="bjui-accordionmenu" data-heightbox="#bjui-sidebar" data-offsety="26">
                <div class="panel panel-default">
                    <div class="panel-heading panelContent">
                        <h4 class="panel-title"><a data-toggle="collapse" data-parent="#bjui-accordionmenu" href="#bjui-collapse0" class="active">
                        <i class="fa fa-caret-square-o-down"></i>&nbsp;管理员</a></h4>
                    </div>
                    <div id="bjui-collapse0" class="panel-collapse panelContent collapse in">
                        <div class="panel-body" >
                            <ul id="bjui-tree0" class="ztree ztree_main" data-toggle="ztree" data-on-click="MainMenuClick" data-expand-all="true">
                                <li data-id="10" data-pid="1" data-url="configEdit" data-tabid="configEdit">系统设置</li>
                                <li data-id="18" data-pid="1" data-url="adminList" data-tabid="adminList">管理员列表</li>
                                <li data-id="11" data-pid="1" data-url="articleCateList" data-tabid="articleCateList">文章栏目</li>
                                <li data-id="12" data-pid="1" data-url="articleList" data-tabid="articleList">文章管理</li>
                                <li data-id="12" data-pid="1" data-url="productCateList" data-tabid="productCateList">产品分类</li>
                                <li data-id="12" data-pid="1" data-url="productList" data-tabid="productList">产品管理</li>
                                <li data-id="15" data-pid="1" data-url="messageList" data-tabid="messageList">留言管理</li>
                                <li data-id="15" data-pid="1" data-url="ordersList" data-tabid="ordersList">订单管理</li>
                                <li data-id="15" data-pid="1" data-url="userList" data-tabid="userList">会员管理</li>
                                <li data-id="15" data-pid="1" data-url="financialList" data-tabid="financialList">财务明细</li>
                                <li data-id="15" data-pid="1" data-url="commissionList" data-tabid="commissionList">佣金明细</li>
                                <li data-id="15" data-pid="1" data-url="withdrawList" data-tabid="withdrawList">提现管理</li>
                                <li data-id="15" data-pid="1" data-url="rechargeList" data-tabid="rechargeList">充值管理</li>
                                <li data-id="15" data-pid="1" data-url="rechargeCardList" data-tabid="rechargeCardList">充值卡管理</li>
                            </ul>
                        </div>
                    </div>
                    <div class="panelFooter"><div class="panelFooterContent"></div></div>
                    
                    
                </div>
             </div>
        </div>
    </div>
    <div id="bjui-container">
        <div id="bjui-navtab" class="tabsPage">
            <div class="tabsPageHeader">
                <div class="tabsPageHeaderContent">
                    <ul class="navtab-tab nav nav-tabs">
                        <li data-tabid="main" class="main active"><a href="javascript:;"><span><i class="fa fa-home"></i> #maintab#</span></a></li>
                    </ul>
                </div>
                <div class="tabsLeft"><i class="fa fa-angle-double-left"></i></div>
                <div class="tabsRight"><i class="fa fa-angle-double-right"></i></div>
                <div class="tabsMore"><i class="fa fa-angle-double-down"></i></div>
            </div>
            <ul class="tabsMoreList">
                <li><a href="javascript:;">#maintab#</a></li>
            </ul>
            <div class="navtab-panel tabsPageContent layoutBox">
                <div class="page unitBox">
                    <div class="bjui-pageHeader" style="background:#FFF;">
                        <div style="padding: 0 5px;">
                            <hr style="margin: 12px 0 0px;">
                            <div class="row alert alert-success" style="margin: 10px 10px 10px 10px;">
                            <h4 style="margin-bottom:20px;">欢迎使用汉三网络卡密微商城程序&nbsp;<small>最好用的卡密微商城程序</small></h4>
                            	<div class="col-md-6">
                            		<h5>汉三网络卡密微商城程序</h5>
                                    <h5>919数据中心：<a href="http://www.919dns.com/" target="_blank">http://www.919dns.com/</a></h5>
                                    <h5>919站长站：<a href="http://www.919zzz.com/" target="_blank">http://www.919zzz.com/</a></h5>
                                </div>
                                <div class="col-md-6">
                                	<h5>客服QQ：582866070</h5>
                                	<h5>汉三网络：<a href="http://www.hansan.com/" target="_blank">http://www.hansan.com/</a></h5>
                                    <h5>汉三网络论坛：<a href="http://bbs.hansan.com/" target="_blank">http://bbs.hansan.com/</a></h5>        
                                </div>
                            </div>
                        </div>
                    </div>
                  <div class="bjui-pageContent">
				    <div style="margin-top:5px; margin-right:10px;">
				        <div class="row" style="padding: 0 8px;">
				            <div class="col-md-12">
				                <div class="panel panel-default">
				                    <div class="panel-heading"><h3 class="panel-title">当前版本：<code>V1.0</code></h3></div>
					                    <div class="panel-body bjui-doc" style="padding:0;">
					                        <div class="col-md-6">
                            		<h5>服务器操作系统：<%=props.getProperty("os.name") %></h5>
                                    <h5>服务器CPU：<%=r.availableProcessors() %>核</h5>
                                    <h5>本地IP地址：<%=ip %></h5>
                                    <h5>本地主机名：<%=addr.getHostName() %></h5>
                                </div>
                                <div class="col-md-6">
                                	<h5>Java版本：<%=props.getProperty("java.version") %></h5>
                                	<h5>Java安装路径：<%=props.getProperty("java.home") %></h5>
                                	<h5>用户主目录：<%=props.getProperty("user.home") %></h5>
                                    <h5>JVM总内存：<%=r.totalMemory()/1024L/1024L %>M</h5>
                                    <h5>JVM剩余内存：<%=r.freeMemory()/1024L/1024L %>M</h5>
                                    <h5>JVM CPU个数：<%=r.availableProcessors() %></h5>
                                    
                                </div>
					                    </div>
					                </div>
					            </div>
					        </div>
					    </div>
					</div>
                </div>
            </div>
        </div>
    </div>
    <footer id="bjui-footer">Copyright &copy; 2015 - 2020 <a href="http://www.hansan.com" target="_blank">汉三网络</a> <a href="http://bbs.hansan.com" target="_blank">汉三网络论坛</a> <a href="http://www.919dns.com" target="_blank">hansan数据中心</a>
    </footer>
</body>
</html>