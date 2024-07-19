"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
const { SALT } = require("../config/serverConfig");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.role, {
        through: "users_roles",
      });
      //  This mean one user belongs to many roles through users_roles table.
    }
  }
  user.init(
    {
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, 50],
        },
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  user.beforeCreate((user) => {
    const hashedPassword = bcrypt.hashSync(user.Password, SALT);
    user.Password = hashedPassword;
  });
  return user;
};
