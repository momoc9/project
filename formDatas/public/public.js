var locations = window.self.location.toString().split("/");
var publicurl = locations[0]+"//"+locations[2]+"/apptc/ws/jsonXml?jsonString="
//正式环境
//var publicurl = "http://42.99.16.176:20060/apptc/ws/jsonXml?jsonString=";
//验证环境
//var publicurl = "http://42.99.16.145:20060/apptc/ws/jsonXml?jsonString=";
var isshare = getQueryString("share")
/**
 * 存请求路径中得到相应参数值
 */
function hrefs(data){
	if(isshare == 1){
		return
	}else{
		window.location.href = data;
	}
}
//返回去掉第一个元素的新数组
function arr1(arr){
	arr.splice(0,1);
	return arr;
}

//安卓和ios交互返回
function returns(data) {
	var ua = navigator.userAgent.toLowerCase();
	if(/android/.test(ua)) {
		window.Androids.methodToHome()
	} else {
		document.location = "iphone://methodToHome?{\"index\":\"0\"}";
	};
}
//数据报表返回竖屏
function landreturns(data) {
	var ua = navigator.userAgent.toLowerCase();
	if(/android/.test(ua)) {
		window.Androids.landreturns(data)
	} else {
		document.location = "iphone://landreturns?{\"index\":\"0\"}";
		window.location.href = "../"+data;
	};
}
//横屏展示
function toLandscape(data) {
	var ua = navigator.userAgent.toLowerCase();
	console.log("http://192.168.1.181:8080/test/html/landscape/"+data)
	if(/android/.test(ua)) {
		window.Androids.toLandscape(data)
	} else {
		document.location = "iphone://toLandscape?{\"index\":\"0\"}";
		window.location.href = "../"+data;
	};
}
//导航点击事件
function profunc(){
	document.getElementById("scroll1").scrollLeft += 130;
}
function nextfunc(){
	document.getElementById("scroll1").scrollLeft -= 130;
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
//修改数字格式,增加逗号,小数点后两位
function formatNum(str) {
	var newStr = "";
	var count = 0;
	if(str.indexOf(".") == -1) {
		for(var i = str.length - 1; i >= 0; i--) {
			if(count % 3 == 0 && count != 0) {
				newStr = str.charAt(i) + "," + newStr;
			} else {
				newStr = str.charAt(i) + newStr;
			}
			count++;
		}
		str = newStr + ".00"; //自动补小数点后两位
		return str
	} else {
		for(var i = str.indexOf(".") - 1; i >= 0; i--) {
			if(count % 3 == 0 && count != 0) {
				newStr = str.charAt(i) + "," + newStr;
			} else {
				newStr = str.charAt(i) + newStr; //逐个字符相接起来
			}
			count++;
		}
		str = newStr + (str + "00").substr((str + "00").indexOf("."), 3);
		return str
	}
}
function formatNum2(str) {
	var newStr = "";
	var count = 0;
	if(str.indexOf(".") == -1) {
		for(var i = str.length - 1; i >= 0; i--) {
			if(count % 3 == 0 && count != 0) {
				newStr = str.charAt(i) + "," + newStr;
			} else {
				newStr = str.charAt(i) + newStr;
			}
			count++;
		}
		str = newStr; //自动补小数点后两位
		return str
	} else {
		for(var i = str.indexOf(".") - 1; i >= 0; i--) {
			if(count % 3 == 0 && count != 0) {
				newStr = str.charAt(i) + "," + newStr;
			} else {
				newStr = str.charAt(i) + newStr; //逐个字符相接起来
			}
			count++;
		}
		str = newStr + (str + "00").substr((str + "00").indexOf("."), 3);
		return str
	}
}
//百分数转为数字
function toPoint(percent){
    var str=percent.replace("%","");
    str= str/100;
    return str;
}
//阻止冒泡
function stopBubble(e) {
	if(e && e.stopPropagation) {
		e.stopPropagation();
	} else {
		window.event.cancelBubble = true;
	}
}
//滚动条到达底部方法
// $(document).ready(function (){
//  var nScrollHight = 0; //滚动距离总长(注意不是滚动条的长度)
//  var nScrollTop = 0;  //滚动到的当前位置
//  var nDivHight = $("#div1").height();
// 
//  $("#div1").scroll(function(){
//   nScrollHight = $(this)[0].scrollHeight;
//   nScrollTop = $(this)[0].scrollTop;
//   if(nScrollTop + nDivHight >= nScrollHight)
//    alert("滚动条到底部了");
//   });
// });