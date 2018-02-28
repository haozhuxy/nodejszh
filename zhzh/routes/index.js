var express = require('express');
var router = express.Router();
var UserModel = require("../model/Str.js")
var GoodsModel = require("../model/Goods");
var multiparty = require("multiparty");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//登录页面
router.get('/load', function(req, res, next) {
  res.render('load', { title: 'load' });
});

//注册页面
router.get('/reg', function(req, res, next) {
  res.render('reg', { title: 'reg' });
});

//管理页
router.get('/shangs', function(req, res, next) {
	if(req.session == null || req.session.userName == null) {
		res.redirect("/shangs");
		return;
	}
	
  res.render('shangs', { title: 'shangs' });
});


router.get('/tianjia', function(req, res, next) {
  res.render('tianjia', {});
});

router.get('/right', function(req, res, next) {
  res.render('right', {});
});

router.post('/api/right', function(req, res, next) {
  
  // 分页查询
   var fag = req.body.fag;
	
   var condition = req.body.condition; 
	 var pageNO = req.body.pageNO || 1;
	 pageNO = parseInt(pageNO);
	 var perPageCnt = req.body.perPageCnt || 10;
	 perPageCnt = parseInt(perPageCnt);

		
		GoodsModel.count({flag:1,goodName: {$regex: condition}}, function(err, count){
			
			GoodsModel.update({goodBianhao:fag},{$set:{flag:0}},function(err){
						
						var query = GoodsModel.find({flag:1,goodName: {$regex: condition}})
						.skip((pageNO-1)*perPageCnt).limit(perPageCnt);
						
						query.exec(function(err, docs){
		

							var result = {
								total: count,
								data: docs,
								pageNO: pageNO
							}
							res.json(result);
						});
				})		
		});
 	 	 
});

router.post('/api/rights', function(req, res, next) {
  
  // 分页查询
   var fag = req.body.fag;
	
   var condition = req.body.condition; 
	 var pageNO = req.body.pageNO || 1;
	 pageNO = parseInt(pageNO);
	 var perPageCnt = req.body.perPageCnt || 10;
	 perPageCnt = parseInt(perPageCnt);

		console.log("时:"+fag+condition+perPageCnt);
		GoodsModel.count({flag:1,goodName: {$regex: condition}}, function(err, count){
			
			GoodsModel.update({goodBianhao:fag},{$set:{flag:0}},function(err){
						
						var query = GoodsModel.find({flag:1,goodName: {$regex: condition}})
						.skip((pageNO-1)*perPageCnt).limit(perPageCnt);
						
						query.exec(function(err, docs){
		

							var result = {
								total: count,
								data: docs,
								pageNO: pageNO
							}
							res.json(result);
						});
				})		
		});
 	 	 
});


router.post('/api/goodload', function(req, res, next) {
	var form = new multiparty.Form({});
			
	var result = {
		code: 1,
		message: "商品信息保存成功"
	};
	form.parse(req, function(err, body, files){
		if(err) {
			console.log(err);
		}
		
		var goodBianhao = body.goodBianhao[0];
		var goodName = body.goodName[0];
		var goodNumber = body.goodNumber[0];
		var goodPrice = body.goodPrice[0];
		var goodUp = body.goodUp[0];
		var goodStock = body.goodStock[0];
		var flag = 1;
		var gm = new GoodsModel();
		gm.goodBianhao = goodBianhao
		gm.goodName = goodName;
		gm.goodNumber = goodNumber;
		gm.goodPrice = goodPrice;
		gm.goodUp = goodUp;
		gm.goodStock = goodStock;
		gm.flag = 1;

		gm.save(function(err){
			if(err) {
				result.code = -99;
				result.message = "商品保存失败";
			}
			res.json(result);

		})
	})
});

//登录
router.post('/api/load5ajax', function(req, res, next) {
	
	var userName = req.body.userName; 
	var psw = req.body.psw;
console.log(userName,psw);
	var result = {
			code : 1,
			message : "登录成功了"
	};
	
	UserModel.find({userName:userName,psw:psw}, function (err, docs) {
	  	if(docs.length==0){
	  		result.code = -101;
	  		result.message = "您的账号或密码错误，请重新登录";
	
	  	}else{
					req.session.userName = userName;					
			}
	  		res.json(result);
		});
  	 	
});





//注册
router.post('/api/reg5ajax', function(req, res, next) {
	var userName = req.body.userName; 
	var psw = req.body.psw;

	var result = {
			code : 1,
			message : "注册成功了"
	};
	
	UserModel.find({userName:userName}, function (err, docs) {
  	if(docs.length>0){
  		result.code = -109;
  		result.message = "你的用户名已被注册";
  		res.json(result);
  		return;
  	}
  	var um = new UserModel;
		um.userName = userName;
		um.psw = psw;
		um.save(function(err){
			
			if(err){
				result.code = -110;
				result.message = "注册失败了";
				res.send("注册失败了");
			}
			res.json(result);
			
		});
  	 	
	});

});

module.exports = router;
