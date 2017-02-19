/**
 * Created by Administrator on 2017/2/18.
 */
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var _ = require('underscore');
var port = process.env.PORT || 3000;
var app = express();

mongoose.connect('mongodb://localhost/meet');

app.set('views','./views/pages');
app.set('view engine','jade');
app.use(bodyParser.json());
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

//
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