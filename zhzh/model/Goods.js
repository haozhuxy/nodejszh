var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Goods = new Schema({
	flag           : String,
	goodBianhao    : String,
    goodName       : String,
    goodNumber     : String,
    goodPrice      : String,
    goodUp         : String,
    goodStock      : String,
    
    create_date: { type: Date, default: Date.now }
});
// 创建model对象
var GoodsModel = mongoose.model('goods', Goods);

module.exports = GoodsModel;