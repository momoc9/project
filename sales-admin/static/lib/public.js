//var url_r = "http://172.16.1.77:8008/sales-platform";  //本地
var url_r ="http://42.99.16.145:20060/sales-platform";  //体验
//var url_r ="http://42.99.16.176:20060/sales-platform";  //生产

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

function isPhoneNo(phoneNum) {
	var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
	if(!myreg.test(phoneNum)) {
		return false;
	} else {
		return true;
	}
}