
var $divs = $(".divo");
$(".aside>ul>li").click(function(){
	var ind = $(this).index();
	$(".aside>ul>li").removeClass("list");
	$(this).addClass("list");

	var l = $divs.length;
	console.log(l);
	for(var i=0; i<l; i++){
		$divs[i].style.display = "none";
	}
	$divs[ind].style.display = "block";
	
	
})
