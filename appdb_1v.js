var mysql = require('mysql');
var express = require('express');
var app = express();
var port = 3000;

var bodyParser = require('body-parser'); // HTML 요청 데이터 해석
var conn = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "mysql123",
	database: "testdb"
	});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended : true}));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/public/main.html');
});

app.post('/w', function (req, res) {
	const command = req.body.command;
	//console.log(req.body.order);
//	conn.connect(function(err) {
//		if(err) throw err;
/*		else*/ if(command == "select") {
			var sql = "SELECT * FROM book";
			conn.query(sql, function(err, result) {
				if(err) throw err;
				//console.log(result);
				res.send(result);
			});
		}
//	});
	//res.send('OK');
});

app.listen(port, function(err) {
	if(err) throw err;
	console.log(`App listening on port ${port}`);
});
