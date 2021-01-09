// Set up MySQL connection.
let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "j21q532mu148i8ms.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "czt4m44avebxfahk",
    password: "j2v6vnrcg2wwwaqx",
    database: "izztdm5te0nbvhcs"
});

// Make connection.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

// Export connection for our ORM to use.
module.exports = connection;
