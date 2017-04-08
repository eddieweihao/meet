var mongoose = require('mongoose');
var UsermatchSchema = require('../schemas/usermatch');
var Usermatch = mongoose.model('Usermatch',UsermatchSchema);

module.exports = Usermatch;