// client/src/services/auth.service.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

const register = (username, email, password) => {
  return axios.post(API_URL + 'signup', {
    username,
    email,
    password
  });
};

export default {
  register
};
