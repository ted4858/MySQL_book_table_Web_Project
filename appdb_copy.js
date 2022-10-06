var mysql = require('mysql');
var express = require('express');
var app = express();
var router = express.Router();
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

	if(command == "select") {
		var sql = "SELECT * FROM book";
		conn.query(sql, function(err, result) {
			if(err) throw err;
		 	res.render('list.ejs', {rows: result});
		});
	} else if(command == "desc") {
      var sql = "DESC book";
      conn.query(sql, function(err, result) {
         if(err) throw err;
         res.render('desc.ejs', {rows: result});
      });
   } else if(command == "show") {
      var sql = "SHOW TABLES";
      conn.query(sql, function(err, result) {
         if(err) throw err;
         res.render('show.ejs', {rows: result});
      });
   } else if(command == "name" || command == "price" || command == "author") {
      var sql = "SELECT " + command + " FROM book";
      conn.query(sql, function(err, result) {
         if(err) throw err;
         if(command == "name") {
         	res.render('name.ejs', {rows: result});
         } else if(command == "price") {
            res.render('price.ejs', {rows: result});
         } else if(command == "author") {
            res.render('author.ejs', {rows: result});
         }
      });
   }
});

app.listen(port, function(err) {
	if(err) throw err;
	console.log(`App listening on port ${port}`);
});
