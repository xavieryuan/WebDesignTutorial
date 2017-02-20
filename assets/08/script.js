// JavaScript Document

//一个函数
function jumpTo(imgID){
	if(imgID==1)
	{
		$("#cnt ul").css("transform","translateX(0px)")
	}else if(imgID==2){
		$("#cnt ul").css("transform","translateX(-550px)")
	}else if(imgID==3){
		$("#cnt ul").css("transform","translateX(-1100)")
	}
}
function jumpTo2(imgID){
	$("#cnt ul").css("transform",("translateX("+(1-imgID)*550+"px)"))
}
	

$(document).ready(function(e) {
	
	$("#btn1").on("click",function(evt){		
		jumpTo2(1)
		return false
		})
	$("#btn2").on("click",function(evt){		
		jumpTo2(2)
		return false
		})
	$("#btn3").on("click",function(evt){		
		jumpTo2(3)
		return false
		})
	
	
	
	
	
	////卡片翻转demo
	//点击A后向B翻转
    $("#a-side").on("click",function(e){
		
		$("#a-side").css("-webkit-transform","rotateY( 180deg )")
		$("#b-side").css("-webkit-transform","rotateY( 0deg )")			
	})
	
	//点击B后向A翻转
	 $("#b-side").on("click",function(e){
		
		$("#a-side").css("-webkit-transform","rotateY( 0deg )")
		$("#b-side").css("-webkit-transform","rotateY( -180deg )")
	})
	
	////层叠列表 demo
		$(".toolbar a").on("click",function(e){
		
	var targetMainText=$(e.target).parent(".toolbar").next(".maintext")
	
	if(targetMainText.hasClass("collapsed")){
		targetMainText.removeClass("collapsed")
		$(e.target).text("-")
		}else{
			targetMainText.addClass("collapsed")
			$(e.target).text("+")
			}
		return false;
		})
});
