$(".top>ul>li").hover(function(){
	$(this).css("backgroundColor","rgba(135,135,135,0.3)");
},function(){
	$(this).css("background","#303030");
})

$(".nav>ul>li").hover(function(){
	$(this).css("backgroundColor","rgba(48,48,48,0.5)");
	$(".spa").css("color","rgba(48,48,48,0.5)")
},function(){
	$(this).css("background","#575757");
})


$(".left>dl>dd>p").each(function(i){
	$(this).click(function(){
		
		if($(this).siblings("ol").css("display")=="none"){			
			$(this).siblings("ol").css("display","block");
			$(this).siblings("ol").siblings("p").css("background","#454545");
		}else{
			$(this).siblings("ol").css("display","none");
			$(this).siblings("ol").siblings("p").css("background","#575757");
		}
	})
})





$("#arrow").click(function(){
	$(".left").css("display","none");
$("#show").css("display","block");
	$(".right").animate({
		width:"94%",		
	})
	
})
