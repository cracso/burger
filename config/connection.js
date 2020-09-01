// Set up MySQL connection.
var mysql = require("mysql");
require('dotenv').config()

var connection;
if (process.envJAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection ({
    host: process.env.DB_HOST,
    port: 3306,
    user:proccess.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'burgers_db'

  });
};
// Export connection for our ORM to use.
module.exports = connection;
