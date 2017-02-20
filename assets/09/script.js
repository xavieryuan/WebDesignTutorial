// JavaScript Document

//一个函数
function jumpTo(imgID){
	if(imgID==1)
	{
		$("#cnt ul").css("left","0px")
	}else if(imgID==2){
		$("#cnt ul").css("left","-550px")
	}else if(imgID==3){
		$("#cnt ul").css("left","-1100px")
	}
}
function jumpTo2(imgID){
	$("#cnt ul").css("left",((1-imgID)*550+"px"))
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
    $("#Aside").on("click",function(e){
		
		$("#Aside").css("-webkit-transform","rotateX( -90deg )")
		
		//绑定事件处理，当transition结束的时候，让Bside翻过来
		$("#Aside").on('webkitTransitionEnd', function(e) { 
			$("#Bside").css("-webkit-transform","rotateX( 0deg )")
			
			//该事件处理在执行一次后应自我清除
			$("#Aside").off('webkitTransitionEnd') 
		 
     	});	
	})
	
	//点击B后向A翻转
	 $("#Bside").on("click",function(e){
		
		$("#Bside").css("-webkit-transform","rotateX( 90deg )")
		
		//绑定事件处理，当transition结束的时候，让Aside翻过来
		$("#Bside").on('webkitTransitionEnd', function(e) { 
         
			$("#Aside").css("-webkit-transform","rotateY( 0deg )")
			//该事件处理在执行一次后应自我清除
			$("#Bside").off('webkitTransitionEnd') 
		 
     	});	
	})
});
