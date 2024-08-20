const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const signupRoutes = require('./routes/SignupRoutes'); // Adjust the path if necessary

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_user',  // Replace with your MySQL username
  password: 'your_mysql_password',  // Replace with your MySQL password
  database: 'inventory_mange'  // Replace with your database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

// Pass the database connection to the routes
app.use((req, res, next) => {
  req.db = connection;
  next();
});

// Use routes
app.use('/api', signupRoutes); // Adjust the path if necessary

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
