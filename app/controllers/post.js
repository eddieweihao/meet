//post list page
exports.post = function(req, res){
	res.render('post',{
		title:'树洞',
		postlist:[
			{
				nickName:"3号用户",
				image:"/upload/1.jpg",
				content:"土地是以它的肥沃和收获而被估价的；才能也是土地，不过它生产的不是粮食，而是真理。如果只能滋生瞑想和幻想的话，即使再大的才能也只是砂地或盐池，那上面连小草也长不出来的。"
			},
			{
				nickName:"1号用户",
				image:"/upload/1.jpg",
				content:"世界上一成不变的东西，只有“任何事物都是在不断变化的”这条真理。"
			},
			{
				nickName:"2号用户",
				image:"/upload/1.jpg",
				content:"真理惟一可靠的标准就是永远自相符合。"
			},
			{
				nickName:"1号用户",
				image:"/upload/1.jpg",
				content:"时间是一切财富中最宝贵的财富。"
			},
			{
				nickName:"4号用户",
				image:"/upload/1.jpg",
				content:"爱情原如树叶一样，在人忽视里绿了，在忍耐里露出蓓蕾。"
			},
			{
				nickName:"5号用户",
				image:"/upload/1.jpg",
				content:"友谊是一棵可以庇荫的树。"
			}
		]
	})
}

//post page
exports.postsubject = function(req, res){
	res.render('postsubject',{
		title:'发表主题'
	})
}

