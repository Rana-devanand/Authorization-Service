const UserRepository = require("../repository/user-repository");

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
}

module.exports = UserServices;
