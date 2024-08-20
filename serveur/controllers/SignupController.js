const bcrypt = require('bcrypt');
const SignupModel = require('./models/SignupModel');

// Signup controller function
const signup = (req, res) => {
  const { UserName, Email, Password, Role } = req.body;

  if (!UserName || !Email || !Password || !Role) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  bcrypt.hash(Password, 10, (err, hashedPassword) => {
    if (err) {
      console.error('Error hashing password:', err);
      return res.status(500).json({ error: 'Server error' });
    }

    const newSignup = { UserName, Email, Password: hashedPassword, Role };
    SignupModel.createSignup(newSignup, (err, results) => {
      if (err) {
        console.error('Error inserting user:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(201).json({ message: 'User created successfully' });
    });
  });
};

module.exports = {
  signup
};
