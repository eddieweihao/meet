var mongoose = require('mongoose');
var UserpostSchema = require('../schemas/userpost');
var Userpost = mongoose.model('Userpost',UserpostSchema);

module.exports = Userpost;