const { user } = require("../models/index");

class UserRepository {
  async createUser(data) {
    try {
      const userInstance = await user.create(data);
      return userInstance;
    } catch (error) {
      console.error("Something went wrong in repository layer", error);
      throw { error };
    }
  }

  async destroy(userID) {
    try {
      await user.destroy({
        where: (id = userID),
      });
    } catch (error) {
      console.error("Something went wrong in repository layer", error);
      throw { error };
    }
  }

  async getByEmail(Email) {
    try {
      const getUser = await user.findOne({
        where: {
          Email: Email,
        },
      });
      console.log(getUser);
      return getUser;
    } catch (error) {
      console.error("Something went wrong in repository layer", error);
      throw { error };
    }
  }
}

module.exports = UserRepository;
