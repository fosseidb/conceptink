var data = require('../requests.json');
exports.addRequest = function(req, res) {

	var title = req.query.title;
	var description = req.query.description;
	var imageURL= req.query.imageURL;
	var keywords =req.query.keywords;
	var deadline=req.query.dropdown;

	var nRequest = {
		'title': title,
		'keywords': keywords,
		'deadline': deadline,
		'description': description,
		'imageURL': imageURL
	};
	res.render('request', nRequest);
	console.log(nRequest);
	data["requests"].push(nRequest);
};