var User = require('../models/user');

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
	var _user = req.body.user

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
		    req.session.user = user;
		    res.redirect('/')
		  })
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