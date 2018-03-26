var locations = window.self.location.toString().split("/");
var publicurl = locations[0]+"//"+locations[2]+"/app/services/third/"
//正式环境
//var publicurl = "http://42.99.16.176:20060/apptc/ws/jsonXml?jsonString=";
//验证环境
//var publicurl = "http://42.99.16.145:20060/apptc/ws/jsonXml?jsonString=";
/**
 * 存请求路径中得到相应参数值
 */
//安卓和ios交互返回
function returns(data) {
	stopBubble(data)
	var ua = navigator.userAgent.toLowerCase();
	if(/android/.test(ua)) {
		window.Androids.methodToHome()
	} else {
		document.location = "iphone://methodToHome?{\"index\":\"0\"}";
	};
}

function online(){
	$("#iframe",parent.document).parent().remove();
	console.log($("#iframe",parent.document).parent())
}

function stopBubble(e) {
	if(e && e.stopPropagation) {
		e.stopPropagation();
	} else {
		window.event.cancelBubble = true;
	}
}
//获取参数
function getQueryString(name) {
	/*定义正则，用于获取相应参数*/
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	/*字符串截取，获取匹配参数值*/
	var r = window.location.search.substr(1).match(reg);
	/*但会参数值*/
	if(r != null) {
		return decodeURI(r[2]);
	}
	return null;
}

