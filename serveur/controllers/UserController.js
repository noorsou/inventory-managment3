const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('./models/Usermodel');
require('dotenv').config();

class UserController {
  static async signup(req, res) {
    const { userName, email, password, role } = req.body;

    try {
      const existingUser = await UserModel.findByEmail(email);
      if (existingUser) {
        return res.status(400).json({ message: 'Email already in use' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user instance
      const newUser = new UserModel(userName, email, hashedPassword, role);

      // Save the new user to the database
      const result = await newUser.save();
      if (result) {
        // Generate JWT token
        const token = jwt.sign(
          { userId: result.id_users, userName: result.userName, role: result.role },
          process.env.JWT_SECRET_KEY,
          { expiresIn: '120m' }
        );

        res.cookie('jwt', token, {
          maxAge: 3500000,
          httpOnly: true,
          secure: true,
          sameSite: 'Strict',
        });

        return res.status(201).json({ message: 'User signed up successfully!', data: result });
      } else {
        return res.status(500).json({ message: 'Failed to save user' });
      }
    } catch (error) {
      console.error('Signup error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

static async login(req, res) {
  try {
    const { email, password } = req.body;
    const loginResult = await UserModel.login(email, password);

    if (loginResult.success) {
      const token = jwt.sign(
        { userId: loginResult.user.id_users, fullname: loginResult.user.fullname, role: loginResult.user.role },

        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "120m", 
        }}
      );

module.exports = UserController;
