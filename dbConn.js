var mysql = require('mysql');

var conn = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "mysql123"
	});

conn.connect(function(err) {
	if(err) throw err;
	console.log("Connected!!");
});
