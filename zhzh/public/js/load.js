//随机验证码
$(function(){

	var arr = 	["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
	"p","q","e","s","t","u","v","w","x","y","z","0","1","2","3",
	"4","5","6","7","8","9","0","A","B","C","D","E","F","G","H",
	"I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
	"X","Y","Z","1","2","3","4","5","6","7","8","9"];
//页面一加载就出现验证码	
	var sum = "";
	for(i=0; i<4; i++){
		var krr = arr[parseInt(Math.random()*72)];
		    sum = sum + krr;	 		
	}
	
	$(".ver").html(sum);
//点击变换验证码		
	$(".ver").click(function(){
		var str = "";
		for(var i=0; i<4;i++){
			var m = parseInt(Math.random()*72);	
			str = arr[m] + str;
		}
		$(this).html(str);
	})





})


