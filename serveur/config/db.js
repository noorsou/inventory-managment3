const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'localhost',  // Replace with your MySQL host
  user: 'your_username',  // Replace with your MySQL username
  password: 'your_password',  // Replace with your MySQL password
  database: 'your_database_name'  // Replace with your database name
});

db.getconnection((err,connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  else {
    console.log('Connected to the MySQL database.');
    connection.release();
}
});

module.exports = db;
