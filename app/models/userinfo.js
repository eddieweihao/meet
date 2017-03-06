var mongoose = require('mongoose');
var UserinfoSchema = require('../schemas/userinfo');
var Userinfo = mongoose.model('Userinfo',UserinfoSchema);

module.exports = Userinfo;