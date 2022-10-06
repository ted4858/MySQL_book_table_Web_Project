var mysql = require("mysql");

var conn = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "mysql123",
	database: "testdb"
});

conn.connect(function(err) {
	if(err) throw err;
	console.log("connected!!");

	var sql = "create table customers(name varchar(20), phone varchar(20))";
	conn.query(sql, function(err, result) {
		if(err) throw err;
		console.log("Table create!!");
	});
});
