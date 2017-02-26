var User = require('../models/user');

//admin userlist page
exports.adminuserlist = function(req,res){
	User.fetch(function(err,users){
		if(err){
			console.log(err);
		}

		res.render('userlist',{
			title: '用户列表页',
			users: users
		})
	})
}