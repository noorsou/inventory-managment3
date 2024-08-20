const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',  // Replace with your MySQL host
  user: 'your_username',  // Replace with your MySQL username
  password: 'your_password',  // Replace with your MySQL password
  database: 'your_database_name'  // Replace with your database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

module.exports = connection;
