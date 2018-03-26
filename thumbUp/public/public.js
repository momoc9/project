var locations = window.self.location.toString().split("/");
var publicurl = locations[0]+"//"+locations[2]+"/appkms"
//正式环境
//var publicurl = "http://42.99.16.176:20060/apptc/ws/jsonXml?jsonString=";
//验证环境
//var publicurl = "http://42.99.16.145:20060/appkms";
//李凡本地
//var publicurl = "http://172.16.1.61:8082/apptc/ws/jsonXml?jsonString="
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


//返回去掉第一个元素的新数组
function arr1(arr) {
	arr.splice(0, 1);
	return arr;
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
//阻止冒泡
function stopBubble(e) {
	if(e && e.stopPropagation) {
		e.stopPropagation();
	} else {
		window.event.cancelBubble = true;
	}
}
function tooahome(){
	window.location.href = "www.baidu.com?oa=page_list_cs.do";
}
function tooahome1(){
	window.location.href = "www.baidu.com?oa=#HomePage";
}

Date.prototype.format = function(fmt) {
	var o = {
		"M+": this.getMonth() + 1, //月份 
		"d+": this.getDate(), //日 
		"h+": this.getHours(), //小时 
		"m+": this.getMinutes(), //分 
		"s+": this.getSeconds(), //秒 
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
		"S": this.getMilliseconds() //毫秒 
	};
	if(/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	for(var k in o) {
		if(new RegExp("(" + k + ")").test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		}
	}
	return fmt;
}
//时间戳转码//时间戳转码//时间戳转码
var TimeStamps = new Date().format("yyyyMMddhhmmss");
//console.log(TimeStamps)