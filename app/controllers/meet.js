//meet page
exports.meet = function(req, res){
	res.render('meet',{
		title:'遇见'
	})
}

//matchresult page
exports.matchresult = function(req, res){
	res.render('matchresult',{
		title:'匹配结果',
		matchresult:[
			{name:"num1@163.com",nickName:"1号用户"},
			{name:"num3@163.com",nickName:"3号用户"}
		]
	})
}

//matchtest page
exports.matchtest = function(req, res){
	res.render('matchtest',{
		title:'性格测试'
	})
}

//match page
exports.match = function(req, res){
	res.render('match',{
		title:'用户匹配',
		userinfo:{
			name:'num1@163.com',
			nickName:'一号用户',
			sex:'男',
			stars:'2',
			auth:'未认证',
			grade:'大二',
			colleg:'软件学院',
			age:'22',
			height:'175',
			weight:'65',
			selfIntroduction:'一段自我介绍',
			image:'/upload/1.jpg',
			contact:'微信号XXXXXXXXXX',
		}
	})
}