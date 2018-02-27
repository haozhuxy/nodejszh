var express = require('express');
var router = express.Router();
var UserModel=require("../model/UserModel");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('regist', { title: '注册' });
});

router.post("/api/regist",function(req,res){
	var username=req.body.username;
	var psw=req.body.psw;
	
	var um=new UserModel();
	um.username=username;
	um.psw=psw;
	um.save(function(err){
		if(err){
			console.log("注册失败",err);
			res.send("注册失败");
		}else{
			console.log("注册成功");
			res.send("注册成功");
		}
	})
})
module.exports = router;
