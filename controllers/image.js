module.exports = {
	index: function (req, res) {
		res.render('index');
	},

	create: function(req, res){
		res.render('The image:create POST controller');
	},

	like: function(req, res){
		res.render('The image:like POST controller');
	},

	comment: function(req, res){
		res.render('The image:comment POST controller');
	}
}