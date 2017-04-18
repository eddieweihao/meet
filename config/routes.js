var Index = require('../app/controllers/index');
var Userinfo = require('../app/controllers/userinfo');
var Meet = require('../app/controllers/meet');
var Personalinfo = require('../app/controllers/personalinfo');
var Post = require('../app/controllers/post');
var Setting = require('../app/controllers/setting');
var User = require('../app/controllers/user');
var Admin = require('../app/controllers/admin');

module.exports = function(app){
	//pre handle user
	app.use(function(req, res, next){
		var _user = req.session.user;
		app.locals.user = _user;
		next();
	})

	//routes
	  // Index
  	app.get('/', Index.index);

  	//Userinfo
  	app.get('/userinfo/:id',User.signinRequired, Userinfo.userinfodetail);

  	//Meet
  	app.get('/meet',User.signinRequired, Meet.meet);
    app.get('/matchresult',User.signinRequired, Meet.matchresult);
    app.get('/matchtest',User.signinRequired, Meet.matchtest);
    app.get('/match',User.signinRequired, Meet.match);

  	//Personalinfo
  	app.get('/personalinfo',User.signinRequired, Personalinfo.personalinfo);

    //Post
    app.get('/post',User.signinRequired, Post.post);
    app.get('/postsubject',User.signinRequired, Post.postsubject);

  	//Setting
  	app.get('/setting',User.signinRequired, Setting.setting);
    app.get('/auth',User.signinRequired, Setting.auth);

  	// User
  	app.post('/user/signup', User.signup);
  	app.post('/user/signin', User.signin);
    app.post('/user/resetpw', User.resetpw);
  	app.get('/signin', User.showsignin);
  	app.get('/signup', User.showsignup);
  	app.get('/logout', User.logout);

  	//Admin
  	app.get('/admin/userlist',User.signinRequired, User.adminRequired, Admin.adminuserlist);

}

