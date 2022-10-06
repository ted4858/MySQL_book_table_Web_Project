var express = require("express");
var app = express();
var port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + "/public/test.html");
});

app.listen(port, function(err) {
	if(err) throw err;
	console.log(`App listening on port ${port}`);
});
