// Set up MySQL connection.
var mysql = require("mysql");
require('dotenv').config();
console.log("loaded");

var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection ({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'burgers_db'

  });
};
// Export connection for our ORM to use.
module.exports = connection;
