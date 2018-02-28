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
//点击的时候变换验证码		
	$(".ver").click(function(){
		var str = "";
		for(var i=0; i<4;i++){
			var m = parseInt(Math.random()*72);	
			str = arr[m] + str;
		}
		$(this).html(str);
	})

//登录验证
	//用户名
	/*$(".iptName").blur(function(){
		if($(".iptName").val() == ""){
			alert("请输入用户名");
		}
		else if($(".iptName").val()
		.match(/^[a-zA-Z_]\w{5,14}$/)){			
		
		}else{
			alert("用户名错误");
		}
	})
	
	//密码
	$(".iptPassword").blur(function(){
		if($(".iptPassword").val() == ""){
			alert("请输入密码");
		}
		else if($(".iptPassword").val().match(/(\d[A-z]|[A-z]\d)/)){
			
		}else{
			alert("密码错误");
		}
	})
	
	//验证码
	$(".iptVer").blur(function(){
		if($(".iptVer").val() == ""){
			alert("请输入验证码");
		}
		else if($(".iptVer").val() == $(".ver").html()){
			
		}else{
			alert("验证码错误");
		}
	})
	*/
	
	//点击登录按钮
	/*$(".btnLoad").click(function(){
		if($(".iptName").val().match(/^[a-zA-Z_]\w{5,14}$/) &&
		$(".iptName").val() != "" && $(".iptPassword").val().match(/(\d[A-z]|[A-z]\d)/) && $(".iptPassword").val() != "" && 
		$(".iptVer").val() == $(".ver").html()){

			//window.location = "shang.html";
			$(".iptName").val(" ");
			$(".iptPassword").val(" ");
			$(".iptVer").val(" ");
		}else{

		}		
		
	})*/



})


