const { user, role } = require("../models/index");

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

  async destroy(id) {
    try {
      await user.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.error("Something went wrong in repository layer", error);
      throw { error };
    }
  }
  async getUsers() {
    try {
      const allUsers = await user.findAll();
      return allUsers;
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
      return getUser;
    } catch (error) {
      console.error("Something went wrong in repository layer", error);
      throw { error };
    }
  }

  async getById(id) {
    try {
      const getUser = await user.findOne({
        where: {
          id: id,
        },
      });
      return getUser;
    } catch (error) {
      console.error("Something went wrong in repository layer", error);
      throw { error };
    }
  }

  async isAdmin(userId) {
    try {
      const User = await user.findByPk(userId);
      const isAdmin = await role.findOne({
        where: {
          name: "CUSTOMER",
        },
      });
      console.log(User);
      return User.hasRole(isAdmin);
    } catch (error) {
      console.error("Something went wrong in repository layer", error);
      throw { error };
    }
  }
}

module.exports = UserRepository;
