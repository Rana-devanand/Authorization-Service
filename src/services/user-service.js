const UserRepository = require("../repository/user-repository");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/serverConfig");

class UserServices {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async registerUser(data) {
    try {
      const user = await this.userRepository.createUser(data);
      return user;
    } catch (error) {
      console.error("Something went wrong in the Service layer", error);
      throw { error };
    }
  }

  async deleteUser(userId) {
    try {
      const deleteUser = await this.UserRepository.destroy(userId);
      return deleteUser;
    } catch (error) {
      console.error("Something went wrong in the Service layer", error);
      throw { error };
    }
  }

  createToken(user) {
    try {
      const response = jwt.sign(user, JWT_KEY, { expiresIn: "1D" });
      return response;
    } catch (error) {
      console.error("Something is wrong with creating a new token", error);
      throw { error };
    }
  }

  verifyToken(token) {
    try {
      const response = jwt.verify(token, JWT_KEY);
      return response;
    } catch (error) {
      console.error("Something is wrong with verifyin g a new token", error);
    }
  }
}

module.exports = UserServices;
