/**
 * Created by Administrator on 2017/2/18.
 */
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var path = require('path');
var mongoose = require('mongoose');
var mongoStore = require('connect-mongo')(session);
var User = require('./models/user');
var _ = require('underscore');
var port = process.env.PORT || 3000;
var app = express();
var dbUrl = 'mongodb://localhost/meet'

mongoose.connect(dbUrl)

app.set('views','./views/pages');
app.set('view engine','jade');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: 'meet',
    store: new mongoStore({
	    url: dbUrl,
	    collection: 'sessions'
  })
}));

app.use(express.static(path.join(__dirname,'public')));
app.locals.moment = require('moment');
app.listen(port);


console.log('meet started on port' + port);


//index page
app.get('/',function(req, res){
	res.render('index',{
		title:'首页',
		userinfos:[
		{
			name:'1号用户',
			_id: 1,
			image:'mock-data/1.jpg'
		},
		{
			name:'2号用户',
			_id: 2,
			image:'mock-data/1.jpg'
		},
		{
			name:'3号用户',
			_id: 3,
			image:'mock-data/1.jpg'
		},
		{
			name:'4号用户',
			_id: 4,
			image:'mock-data/1.jpg'
		},
		{
			name:'5号用户',
			_id: 5,
			image:'mock-data/1.jpg'
		}]
	})
})

//userinfo detail page
app.get('/userinfo/:id',function(req,res){
	res.render('userinfodetail',{
		title:'用户详情',
		userinfo:{
			name:'1号用户',
			_id: 1,
			image:'mock-data/1.jpg',
			age:'21',
			college:'XX学院',
			summary:'一段自我介绍',
		}
	})
})

//meet page
app.get('/meet',function(req, res){
	res.render('meet',{
		title:'遇见'
	})
})

//personalinfo page
app.get('/personalinfo',function(req, res){
	res.render('personalinfo',{
		title:'个人信息'
	})
})

//setting page
app.get('/setting',function(req, res){
	res.render('setting',{
		title:'设置'
	})
})

//signin page
app.get('/signin',function(req, res){
	res.render('signin',{
		title:'登录'
	})
})

//signup page
app.get('/signup',function(req, res){
	res.render('signup',{
		title:'注册'
	})
})

//signup back-end
app.post('/user/signup',function(req,res){
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

		    res.redirect('/')
		  })
		}
	})
})

//signin back-end
app.post('/user/signin',function(req,res){
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
				return res.redirect('/');
			}else{
				return res.redirect('/signin');
			}
		})

	});
})



//admin userlist page
app.get('/admin/userlist',function(req,res){
	User.fetch(function(err,users){
		if(err){
			console.log(err);
		}

		res.render('userlist',{
			title: '用户列表页',
			users: users
		})
	})
})