function Sample(io){
	Sample.get = function(req, res){	
		var data = {
			"test": "sample data"
		}
		//optional
		io.sockets.emit('getcalled', data);
		//return json
		res.json(data);	
		//if error, etc... 
		//res.status(404);
		//res.status(500);
		//...
	}
	return Sample;
}

module.exports = Sample;
