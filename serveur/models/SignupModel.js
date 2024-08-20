const createSignup = (signupData, callback) => {
  const query = 'INSERT INTO users (UserName, Email, Password, Role) VALUES (?, ?, ?, ?)';
  db.query(query, [signupData.UserName, signupData.Email, signupData.Password, signupData.Role], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

module.exports = {
  createSignup
};
