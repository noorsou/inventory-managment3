const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SignupModel = require('../models/SignupModel'); 
require('dotenv').config();

router.post('/signup', async (req, res) => {
  const { UserName, Email, Password, Role } = req.body;

  if (!UserName || !Email || !Password || !Role) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const existingUser = await SignupModel.findByEmail(Email);
    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(Password, 10);

    const newSignup = { UserName, Email, Password: hashedPassword, Role };

    const result = await SignupModel.createSignup(newSignup);

    if (result) {
      const token = jwt.sign(
        { userId: result.id_users, userName: UserName, role: Role },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '120m' }
      );

      res.cookie('jwt', token, {
        maxAge: 3500000, // Cookie expires in 40 minutes
        httpOnly: true, 
        secure: true, // cookie  HTTPS
        sameSite: 'Strict', 
      });

      return res.status(201).json({ message: 'User created successfully' });
    } else {
      return res.status(500).json({ error: 'Failed to create user' });
    }
  } catch (error) {
    console.error('Error during signup:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
