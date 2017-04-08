var User = require('../models/user');
var Userinfo = require('../models/Userinfo');
var Usermatch = require('../models/Usermatch');

//signin page
exports.showsignin = function(req, res){
	res.render('signin',{
		title:'登录'
	})
}

//signin page
exports.showsignup = function(req, res){
	res.render('signup',{
		title:'注册'
	})
}

//logout
exports.logout = function(req, res){
	delete req.session.user;
	res.redirect('/');
}

//signup back-end
exports.signup = function(req,res){
	var _user = req.body.user;
	var userinfo;
	var usermatch;

	User.findOne({name: _user.name},  function(err, user) {
		if (err) {
		  console.log(err)
		}

		if (user) {
		  return res.redirect('/signin')
		}
		else {
		  user = new User(_user)
		  user.save(function(err, user) {
		    if (err) {
		      console.log(err)
		    }
		  })

		  userinfo = new Userinfo();
		  userinfo._id = user._id;
		  userinfo.name = user.name;
		  userinfo.save(function(err, user) {
		    if (err) {
		      console.log(err)
		    }
		  })

		  usermatch = new Usermatch();
		  usermatch._id = user._id;
		  usermatch.name = user.name;
		  usermatch.save(function(err, user) {
		    if (err) {
		      console.log(err)
		    }
		  })

		  console.log(user);
		  console.log(userinfo);
		  console.log(usermatch);
		  req.session.user = user;
		  res.redirect('/')
		}
	})
}

//signin back-end
exports.signin = function(req,res){
	var _user = req.body.user;
	var name = _user.name;
	var password = _user.password;

	User.findOne({name:name},function(err,user){
		if(err){ console.log(err); }
		if(!user){
			return res.redirect('/signup');
		}

		user.comparePassword(password,function(err,isMatch){
			if(err){ console.log(err); }
			if(isMatch){
				req.session.user = user;
				return res.redirect('/');
			}else{
				return res.redirect('/signin');
			}
		})

	});
}

//reset password
exports.resetpw = function(req, res, next){
	var _user = req.body.user;
	var _id = req.session.user._id;
	var oldpassword = _user.oldpassword;
	var newpassword = _user.newpassword;

	console.log(req.session.user);

	User.findOne({_id:_id},function(err,user){
		if(err){ console.log(err); }

		user.comparePassword(oldpassword, function(err, isMatch){
			if(err){ console.log(err); }
			if(isMatch){

				user.password = newpassword;
				user.save(function(err, user) {
				    if (err) {
				      console.log(err)
				    }
				    req.session.user = user;
				})
				
				req.session.user = null;
				return res.redirect('/signin');
			}else{
				return res.redirect('/setting');
			}
		});
	});
}



// midware for user
exports.signinRequired = function(req, res, next) {
  var user = req.session.user

  if (!user) {
    return res.redirect('/signin')
  }

  next()
}

exports.adminRequired = function(req, res, next) {
  var user = req.session.user

  if (user.role <= 10) {
    return res.redirect('/signin')
  }

  next()
}