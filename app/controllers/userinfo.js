var _ = require('underscore');

//userinfo detail page '/userinfo/:id'
exports.userinfodetail = function(req,res){
	res.render('userinfodetail',{
		title:'用户详情',
		userinfo:{
			name:'num1@163.com',
			nickName:'一号用户',
			sex:'男',
			stars:'3',
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