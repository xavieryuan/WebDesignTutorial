// JavaScript Document

$(document).ready(function(e) {
	
	//初始化
	$("#content2").css("display","none")
	$("#content3").css("display","none")
	$("#tab2 a").css("background","#ccc")
	$("#tab3 a").css("background","#ccc")
	
    //第一个标签被点击后
	$("#tab1 a").on("click",function(e){
		//显示第一个内容
		$("#content1").css("display","block")
		//隐藏二、三号内容
		$("#content2").css("display","none")
		$("#content3").css("display","none")
		
		$("#tab1 a").css("background","#9C0")
		$("#tab2 a").css("background","#ccc")
		$("#tab3 a").css("background","#ccc")
		return false;
		})
		
	//第二个标签被点击后
	$("#tab2 a").on("click",function(e){
		//显示2号，隐藏1和3
		$("#content2").css("display","block")
		$("#content1").css("display","none")
		$("#content3").css("display","none")
		
		$("#tab2 a").css("background","#9C0")
		$("#tab1 a").css("background","#ccc")
		$("#tab3 a").css("background","#ccc")
		return false;
		})
	
	//第三个标签被点击后
	$("#tab3 a").on("click",function(e){
		//显示3号，隐藏1和2
		$("#content3").css("display","block")
		$("#content1").css("display","none")
		$("#content2").css("display","none")
		
		$("#tab3 a").css("background","#9C0")
		$("#tab2 a").css("background","#ccc")
		$("#tab1 a").css("background","#ccc")
		return false;
		})
});