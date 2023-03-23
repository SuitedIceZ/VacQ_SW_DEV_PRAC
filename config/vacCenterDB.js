const mysql = require("mysql");

var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Bt%b^mqZjrF89Dfq",
  database: "vacCenter",
});

module.exports = connection;
