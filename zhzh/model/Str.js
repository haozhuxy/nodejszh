var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Str = new Schema({
    userName    : String,
    psw        : String,
    nowDate    :  { type: Date, default: Date.now }
});

var UserModel = mongoose.model('str', Str);

module.exports = UserModel;