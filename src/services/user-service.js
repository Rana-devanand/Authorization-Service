const UserRepository = require("../repository/user-repository");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/serverConfig");
const bcrypt = require("bcrypt");

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

  async deleteUser(id) {
    try {
      const User = await this.userRepository.destroy(id);
      return User;
    } catch (error) {
      console.error("Something went wrong in the Service layer", error);
      throw { error };
    }
  }

  async getAllUsers() {
    try {
      const getAllUsers = await this.userRepository.getUsers();
      return getAllUsers;
    } catch (error) {
      console.error("Something went wrong in the Service layer", error);
      throw { error };
    }
  }

  async signIn(Email, plainPassword) {
    try {
      // step 1-> Fetch the user to using email
      const user = await this.userRepository.getByEmail(Email);
      // step 2 -> compare incoming plain password with stores encrypted password.
      const passwordMatch = this.passwordAuthentication(
        plainPassword,
        user.Password
      );

      // if password doesn't match ok ->
      if (!passwordMatch) {
        console.log("Password doesn't match");
        throw { error: "Invalid Password" };
      }

      // step -> if password match then create the token and send to the user.
      const newJWT = this.createToken({ Email: user.Email, id: user.id });
      return newJWT;
    } catch (error) {
      console.error("Something went wrong in the Service layer", error);
      throw { error };
    }
  }

  async isAuthenticate(token) {
    try {
      const response = this.verifyToken(token);
      if (!response) {
        throw { error: "Invalid token" };
      }
      const user = this.userRepository.getById(response.id);
      if (!user) {
        throw { error: "No user with the corresponding token exists" };
      }
      return user.id;
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
      console.error("Something is wrong with verifying a new token", error);
    }
  }
  passwordAuthentication(userPlainPassword, encryptedPassword) {
    try {
      return bcrypt.compareSync(userPlainPassword, encryptedPassword);
    } catch (error) {
      console.error("Something is wrong with password authentication", error);
      throw { error };
    }
  }
}

module.exports = UserServices;
