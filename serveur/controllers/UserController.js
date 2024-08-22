const bcrypt = require('bcrypt');
const UserModel = require('./model/usermodel');

const signupController = (req, res) => {
  const { userName, email, password, role } = req.body;

  // Check if the email is already registered
  UserModel.findByEmail(email, (err, existingUser) => {
    if (err) return res.status(500).json({ error: err.message });
    if (existingUser) return res.status(400).json({ message: 'Email already in use' });

    // Create a new user instance
    const newUser = new UserModel(userName, email, password, role);

    // Save the new user to the database
    newUser.save((err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'User signed up successfully!', data: results });
    });
  });
};

module.exports = {
  signupController };
