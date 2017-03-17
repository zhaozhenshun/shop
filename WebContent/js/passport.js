/*passport.js v2014-1-6 12061710 */

var loginCallbackStack = [];
var intervalVar;
var currentLocation;


function popupLoginContainer(config) {
	if (typeof config == 'undefined') {
		if (typeof passport_config != 'undefined') {
			config = passport_config;
		} else {
			alert('You must define passport_config var.');
			return;
		}
	}
    currentLocation = window.location.href;
    var src = ((typeof config.successCallbackUrl == 'undefined') ?
        (config.base + "popupLoginSuccess?") : config.successCallbackUrl)
        + "topLocation=" + encodeURIComponent(currentLocation.split('#')[0])
        + "&loginTheme=" + config.loginTheme;
   
    $modalOverlay = $("#modalOverlay");
    if ($modalOverlay.length > 0) {
        $modalOverlay.remove();
    }
    $modalContainer = $("#modalContainer");
    if ($modalContainer.length > 0) {
        $modalContainer.remove();
    }
    $("body").append("<div id=\"modalOverlay\" style=\"opacity: 0.3;filter:Alpha(opacity=30);background:none repeat scroll 0 0 #000000;position: absolute;border: 0 none;width: 100%;height: 100%;top: 0;left: 0;z-index:1000097;\"></div><div id=\"modalContainer\" style=\"z-index:1000098;position:fixed;_position: absolute;\"></div>");
    $("#modalOverlay").hide();
    $("#modalOverlay").css("height",$(document).height()+"px");
    $("#modalContainer").html("<iframe id=\"iframeLogin\" style=\"position: fixed ;\" width=\"1\" height=\"1\" src=\"" + src
        + "\" frameborder=\"0\" scrolling=\"no\" allowtransparency=\"yes\"></iframe>");
    if (typeof intervalVar != 'undefined') {
    	clearInterval(intervalVar);
    }
    intervalVar = window.setInterval(checkMsgFromLoginIframe, 200);
}

//check message from popup login page.
function checkMsgFromLoginIframe() {
    var newHash = window.location.hash;
    if (newHash.length > 1) {
        var value = newHash.split('#');
        var params = value[1].split(':');
        switch (params[0]) {
            case 'resize':
                resizeContainer(params[1]);
                break;
            case 'close':
                closeContainer();
                break;
            case 'loginSuccess':
                loginSuccess();
                break;
            default:
                break;
        }
    }
}
var ie6_num=0;
//auto resize pop container
function resizeContainer(widthAndHeight) {
	$("#modalOverlay").show();
    var value = widthAndHeight.split(",");
    var width = value[0];
    var height = value[1];
    $iframe = $("#iframeLogin");
    $iframe.attr("width", width);
    $iframe.attr("height", height);
    var winwidth = window.innerWidth ? window.innerWidth : $(window).width();
    var winheight = window.innerHeight ? window.innerHeight : $(window).height();
    var left = (winwidth - width) / 2;
    var top = (winheight - height) / 2;
	var _sTop = $(document).scrollTop();
    $modalContainer = $("#modalContainer");
   if(!ie6_num){
    	$modalContainer.css("top", Math.max(top, 5));
    	if(!window.XMLHttpRequest){
    		ie6_num = 1;
			top = top + _sTop;
			$modalContainer.css("top", Math.max(top, 5));
    	}
    }
    $modalContainer.css("left", left);
}

function closeContainer() {
    document.getElementById('modalOverlay').style.display = 'none';
    document.getElementById('modalContainer').style.display = 'none';
    window.location.href = (currentLocation.indexOf('#') == -1) ? currentLocation + "#unknown" : currentLocation;
    clearInterval(intervalVar);
}

function loginSuccess() {
    closeContainer();
    var callback = loginCallbackStack.pop();
    if (callback != null)
        callback();
}

function probeAuthStatus(hasLoginCallback, unLoginCallback, config) {
	if (typeof config == 'undefined') {
		if (typeof passport_config != 'undefined') {
			config = passport_config;
		} else {
			alert('You must define passport_config var.');
			return;
		}
	}
    $.ajax({
        url: config.base + 'authStatus',
        crossDomain: true,
        cache: false,
        dataType: 'jsonp',
        success: function (data) {
            if (data.hasLogin) {
            	var principal = data.principal;
                hasLoginCallback(principal);
            } else {
                unLoginCallback();
            }
        }
    });
}

function ensureLogin(callback, config) {
	if (typeof config == 'undefined') {
		if (typeof passport_config != 'undefined') {
			config = passport_config;
		} else {
			alert('You must define passport_config var.');
			return;
		}
	}
	loginCallbackStack.push(callback);
    popupLoginContainer(config);
    //var login = function () {
      //  loginCallbackStack.push(callback);
      //  popupLoginContainer(config);
    //};
    //probeAuthStatus(callback, login, config);
}

function ajaxInSameDomain(url, param, method, success, error, config) {
	if (typeof config == 'undefined') {
		if (typeof passport_config != 'undefined') {
			config = passport_config;
		} else {
			alert('You must define passport_config var.');
			return;
		}
	}
    $.ajax({
        url: url,
        data: param,
        type: method,
        cache: false,
        error: error,
        success: function (result) {
            if (result.idsIntercepted) {
                var requestAgain = function () {
                    ajaxInSameDomain(url, param, method, success, error, config);
                };
                // if current resource is in gateway policy,
                // and current status is unknown, then probe status.
                if (result.policy == "GATEWAY" && result.status == "UNKNOWN") {
                    probeAuthStatus(requestAgain, requestAgain, config);
                    return;
                }
                // if current resource is restricted
                if (result.policy = "RESTRICTED") {
                    if (result.status == "ANONYMOUS") {
                        // and current status is un-login, then popup login
                        // window to let use login.
                        // before popup, push requestAgain into global array.
                        loginCallbackStack.push(requestAgain);
                        popupLoginContainer(config);
                        return;
                    } else if (result.status == "UNKNOWN") {
                        // and current status is unknown, then first to probe
                        // status,
                        // if hasLogin then requestAgain, else popup login
                        // window to let use login.
                        // before popup, push requestAgain into global array.
                        var login = function () {
                            loginCallbackStack.push(requestAgain);
                            popupLoginContainer(config);
                        };
                        probeAuthStatus(requestAgain, login, config);
                        return;
                    }
                }
                console.log("Illegal status.");
                return;
            }
            success(result);
        }
    });
}

function ajaxCrossDomain(url, param, success, error, config) {
	if (typeof config == 'undefined') {
		if (typeof passport_config != 'undefined') {
			config = passport_config;
		} else {
			alert('You must define passport_config var.');
			return;
		}
	}
    $.ajax({
        url: url,
        data: param == null ? "crossDomainJsonpRequest=true" : param
            + "&crossDomainJsonpRequest=true",
        crossDomain: true,
        dataType: 'jsonp',
        cache: false,
        error: error,
        success: function (result) {
            if (result.authStatusResponse) {
                var requestAgain = function () {
                    ajaxCrossDomain(url, param, success, error, config);
                };
                if (result.hasLogin) {
                    requestAgain();
                } else {
                    loginCallbackStack.push(requestAgain);
                    popupLoginContainer(config);
                }
                return;
            }
            success(result);
        }
    });
}
if(!window.XMLHttpRequest){
	$(window).scroll(function(){
		var _dS = $(document).scrollTop();
		var _wH = $(window).height();
		var _h = $("#modalContainer").find("iframe").height();
		var _top = Math.max(0,(_wH-_h)/2);
		 $("#modalContainer").css({
			'top': _dS + _top
		});
	});
	}