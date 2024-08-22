const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'localhost',  
  user: 'root',  
  password: 'MySQL$2024!',  
  database: 'inventory_mange_users'  
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
