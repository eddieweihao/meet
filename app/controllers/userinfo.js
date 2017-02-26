var _ = require('underscore');

//userinfo detail page '/userinfo/:id'
exports.userinfodetail = function(req,res){
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
}