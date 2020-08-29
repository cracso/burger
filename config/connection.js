// Set up MySQL connection.
var mysql = require("mysql");
require('dotenv').config()

var connection;
if (process.envJAWSDB_URL) {
  connection = mysql.createConnection(process.env.envJAWSDB_URL);
} else {
  connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_KEY,
    database: 'burgers_db'

  });
};
// Export connection for our ORM to use.
module.exports = connection;
