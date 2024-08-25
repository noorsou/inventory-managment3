const db = require("../config/db");
const bcrypt = require("bcrypt"); 

class UserModel {
  static async getUserByEmail(email) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result.length > 0 ? result[0] : null);
          }
        }
      );
    });
  }
  static async login(email, password) {
    try {
      const user = await UserModel.getUserByEmail(email);
      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (!user) {
        return { success: false, message: "User not found" };
      }

      if (user.tag_actif === 0) {
        return { success: false, message: "User not activated" };
      }
      if (isPasswordMatch) {
        await UserModel.updateLastActivity(user.id_users);
        return { success: true, user };
      } else {
        // Passwords do not match
        return { success: false, message: "Invalid password" };
      }
    } catch (error) {
      return { success: false, message: "Internal Server Error" };
    }
  }


  static async signUp(name, email, password, role) {
  try {
    // Check if the email already exists
    const existingUser = await UsersModels.getUserByEmail(email);
    if (existingUser) {
      return { success: false, message: "Email already in use" };
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
        [name, email, hashedPassword, role],
        (err, result) => {
          if (err) {
            reject({ success: false, message: "Internal Server Error" });
          } else {
            resolve({ success: true, message: "User created successfully" });
          }
        }
      );
    });
  } catch (error) {
    return { success: false, message: "Internal Server Error" };
  }
}

}
module.exports = UserModel;
