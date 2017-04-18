//setting page
exports.setting = function(req, res){
	res.render('setting',{
		title:'设置'
	})
}

//auth page
exports.auth = function(req, res){
	res.render('auth',{
		title:'校友认证'
	})
}
