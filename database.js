
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"savoys"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

  con.query("SELECT * FROM login", function (err, result, fields) {
    if (err) throw err;
    var username=document.getElementById("exampleInputName");
    var password=document.getElementById("exampleInputPassword");
    console.log(username);
        for(i=0;i<result.length;i++){
          ifresult[i].user_name;
          console.log(result[i].password);
        }
  });
