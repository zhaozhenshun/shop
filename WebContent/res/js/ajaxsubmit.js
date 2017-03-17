
var reg_rule = {
    'require'    :    /.+/,
    'email'      :    /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    'url'        :    /^http|https:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/,
    'currency'   :    /^\d+(\.\d+)?$/,
    'number'     :    /^\d+$/,
    'zip'        :    /^\d{6}$/,
    'integer'    :    /^[-\+]?\d+$/,
    'double'     :    /^[-\+]?\d+(\.\d+)?$/,
    'english'    :    /^[A-Za-z]+$/,
    'englishOrNull'     :    /^[A-Za-z ]*$/
};

function showTips(msg,type){
	//关闭所有对话框
    var list = window.top.art.dialog.list;
    for (var i in list) {
        list[i].close();
    };
    window.top.art.dialog({
    	time:2,
	    content: msg
	});
}

function ajaxFormTips(form,msg,type){
    var ajax_tips = form.find('.ajax_tips');
    if(ajax_tips[0]){ //表单自定义提示样式
        var type_class = type=='error' ? 'ajax_tips ajax_error' : 'ajax_tips ajax_success';
        $(ajax_tips).html(msg).fadeIn('fast').attr('class',type_class);
        if(type!='loading'){
            setTimeout(function(){
                $(ajax_tips).fadeOut(300);
            },2000);
        }
        return;
    }
    //关闭所有对话框
    var list = window.top.art.dialog.list;
    for (var i in list) {
        list[i].close();
    };
    window.top.art.dialog({
    	time:2,
	    content: msg
	});
}

function get_options(form){
    var options = {
        dataType : 'json',
        timeout : 20000,
        beforeSubmit : function (){
            ajaxFormTips(form,'请求提交中...','loading');
            form.find('.ajax_btn').attr("disabled","true");
        },
        error:function(res,status){
            ajaxFormTips(form,'请求失败 ！','error');
        },
//        complete:function(res,status){
//            form.find('.ajax_btn').removeAttr("disabled");
//            form.removeClass('loading');
//            if(status!='success'){
//                ajaxFormTips(form,'请求失败 ！','error');
//            }
//        },
        success:function(res){
            if(res.type=='success'){
                typeof(success)=='function' ? success(res) : ajaxFormTips(form,res.msg,'success');
            }else if(res.type=='successHref'){
                typeof(success)=='function' ? success(res) : ajaxFormTips(form,res.msg,'success');
                window.location.href=res.href;
            }else if(res.type=='error'){
                typeof(error)=='function' ? error(res) : ajaxFormTips(form,res.msg,'error');
            }else if(res.type=='refresh'){
            	window.location.href=window.location.href;
                ajaxFormTips(form,res.msg,'success');
            }else if(res.type=='refresh_code'){
                ajaxFormTips(form,res.msg,'error');
                $('#verify_img').click();
            }else if(res.type=='reset'){
                ajaxFormTips(form,res.msg,'success');
                form[0].reset();
            }else{
                ajaxFormTips(form, res.msg, res.type);
            }
        }
    };
    return options;
}

function submitByAjax(form){
    if(arguments[0]){//如果传入了form，马上对form进行ajax提交
        var form = typeof(form)=='object' ? $(form) : $('#'+form);
        if(checkForm(form)==false) return false;
        var options = get_options(form);
        form.ajaxSubmit(options);
    }else{//否则，对标志有class="ajax_form"的表单进行ajax提交的绑定操作
        $('.ajax_form').bind('submit',function(){
            var form = $(this);
            if(checkForm(form)==false) return false;
            var options = get_options(form);
            form.ajaxSubmit(options);
            return false; //<-- important!
        });
    }
}

function checkForm(form){
    if(form.hasClass('loading')) return false;
    var check = true;
    form.find('input|textarea|select|checkbox|radio[dataType]').each(function(){
        var val = $.trim( $(this).val() );
        var type = $(this).attr('dataType');
        var alt = $(this).attr('alt');
        if(!reg_rule[type].test(val)){
            ajaxFormTips(form,alt,'error');
            $(this).focus();
            check = false;
            return false;
        }
    });
    return check;
}

//select的onchange提交表单
function selectSubmit(obj,form,url){  
    var okFun = function(){
        document.getElementById(form).action = url ? url : obj.value;
        submitByAjax(form);
        obj.options[0].selected=true;//重置select，为了能够获取此select的值，故把它放后面
    }
    var cancelFun = function(){
        obj.options[0].selected=true;
    }
    if(obj.options[obj.selectedIndex].alt!=''){//如果某选项设置了title，那么弹出确认。
        if(typeof(art)!='undefined'){
            art.dialog({
                lock: true,
                background: '#600',
                opacity: 0.6,
                content: obj.options[obj.selectedIndex].title,
                icon: 'warning',
                ok:okFun,
                cancel: cancelFun
            });
            return;
        }else{
            var check = confirm(obj.options[obj.selectedIndex].title);
            if(check==false){
                cancelFun();
                return;
            }
        }
    }
    okFun();
}

function myAjax(myurl,mytype,mydata){
    $.ajax({
        url: myurl,             // 要提交到的地址
        type: mytype,           // 提交的方式，GET或POST
        data: mydata,           // 提交的数据
        dataType: "json",       // 这里是返回数据的方式，可以是xml，text,html格式
        timeout: 20000,         // 超时时间
        beforeSend: function(){ // 提交之前
            showTips('请求提交中...');
        },
        error: function(){      // 出错
            showTips('请求失败 ！');
         },
        success:function(res){  // 成功
            showTips(res.msg,res.type);
            if(res.type=='refresh'){
            	window.location.href=window.location.href;
            }
        }
    });
}

//a链接以ajax方式提交
function linkAjax(){
    $('a[target="_ajax"]').live('click',function(){
        var url = $(this).attr('href');
        var title = $(this).attr('confirm'); //有confirm属性，则弹出确认
        if(title){
            if(typeof(art)!='undefined'){
                art.dialog({
                    lock: true,
                    background: '#d4d4d4',
                    opacity: 0.6,
                    content: title,
                    icon: 'warning',
                    ok: function(){ myAjax(url,'GET',null); },
                    cancel : true
                });
            }else{
                var check = confirm(title);
                if(check == true) myAjax(url,'GET',null);
            }
        }else{
            myAjax(url,'GET',null);
        }
        return false;
    });
}


$(document).ready(function(){
    submitByAjax();
    linkAjax();
});