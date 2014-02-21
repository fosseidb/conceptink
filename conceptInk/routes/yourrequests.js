var data = require('../requests.json');
exports.viewRequest = function(req, res){
	// controller code goes here
	console.log("The project name is yourrquest");
	console.log(data);
	res.render('yourrequests', data);
}

exports.projectInfo = function(req, res) { 
  var requestID = req.params.id;

  // query for the specific project and
  // call the following callback
  models.Request
    .find({"_id": requestID})
    .exec(afterQuery);

  function afterQuery(err, projects) {
    if(err) console.log(err);
    res.json(projects[0]);
  }
}