const db = require('../path/to/db'); 

class UserModel {
  constructor(userName, email, password, role) {
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  // Method to save a new user to the database
  save(callback) {
    const query = 'INSERT INTO users (UserName, Email, Password, Role) VALUES (?, ?, ?, ?)';
    db.query(query, [this.userName, this.email, this.password, this.role], (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  }

  // Static method to find a user by email
  static findByEmail(email, callback) {
    const query = 'SELECT * FROM users WHERE Email = ?';
    db.query(query, [email], (err, results) => {
      if (err) return callback(err);
      callback(null, results[0]);
    });
  }
}

module.exports = UserModel;
