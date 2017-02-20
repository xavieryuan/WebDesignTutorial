// JavaScript Document

$(document).ready(function(e) {
	//初始化
	//隐藏所有子菜单
	$("#menuA ul").css("height","0")
	$("#menuB ul").css("display","none")
	$("#menuC ul").css("display","none")
	
	$("#btnA").on("mouseover",function(e){		
		//显示menuA
		$("#menuA ul").css("height","120px")
		
		})
	$("#menuA ul").on("mouseover",function(e){
		//显示menuA
		$("#menuA ul").css("height","120px")
		
		})
		
	$("#btnA").on("mouseout",function(e){
		//隐藏menuA
		$("#menuA ul").css("height","0")
		
		})
	$("#menuA ul").on("mouseout",function(e){
		//隐藏menuA
		$("#menuA ul").css("height","0")
		
		})
	//////menuB
	$("#btnB").on("mouseover",function(e){		
		//显示menuB
		$("#menuB ul").css("display","block")
		
		})
	$("#menuB ul").on("mouseover",function(e){
		//显示menB
		$("#menuB ul").css("display","block")
		
		})
		
	$("#btnB").on("mouseout",function(e){
		//隐藏menuB
		$("#menuB ul").css("display","none")
		
		})
	$("#menuB ul").on("mouseout",function(e){
		//隐藏menuB
		$("#menuB ul").css("display","none")
		
		})
		
	//////menuC
	$("#btnC").on("mouseover",function(e){		
		//显示menuC
		$("#menuC ul").css("display","block")
		
		})
	$("#menuC ul").on("mouseover",function(e){
		//显示menC
		$("#menuC ul").css("display","block")
		
		})
		
	$("#btnC").on("mouseout",function(e){
		//隐藏menuC
		$("#menuC ul").css("display","none")
		
		})
	$("#menuC ul").on("mouseout",function(e){
		//隐藏menuC
		$("#menuC ul").css("display","none")
		
		})
	/*---------------------*/
    
	$("#jqbardemo").on("click",function(e){
		
		$("#jqbardemo").addClass("large");
	})
	
	$("#jqbardemo2").on("click",function(e){
		
		$("#jqbardemo2").addClass("long");
	})
    $("#jqbardemo2").on("transitionend",function(e){
		
		if($("#jqbardemo2").hasClass("long")&& !$("#jqbardemo2").hasClass("tall"))
        $("#jqbardemo2").addClass("tall");
	})
	
});