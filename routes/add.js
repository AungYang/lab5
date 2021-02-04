var data = require("../data.json");

exports.addFriend = function(request, response) {   
	var x = request.query.name;
	var y = request.query.description;

	var object = {
		name: x,
		desc: y,
		img: "x"
	}

	data.friends.push(object);

	alert(object);
	
}

