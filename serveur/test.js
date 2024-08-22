// test.js
const db = require('./config/db.js');

db.query('SELECT * FROM users', (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log('Results:', results);
});
