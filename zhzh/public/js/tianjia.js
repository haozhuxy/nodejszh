
var $divs = $(".divo");
$(".aside>ul>li").click(function(){
	var index = $(this).index();
	$(".aside>ul>li").removeClass("list");
	$(this).addClass("list");

	var l = $divs.length;
	//console.log(l);
	for(var i=0; i<l; i++){
		$divs[i].style.display = "none";
	}
	$divs[index].style.display = "block";
	
	
})
