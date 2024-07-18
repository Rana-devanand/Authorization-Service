const UserServices = require("../services/user-service");

const userServices = new UserServices();

const create = async (req, res) => {
  try {
    const user = await userServices.registerUser({
      Email: req.body.Email,
      Password: req.body.Password,
    });
    return res.status(201).json({
      data: user,
      success: true,
      message: "Successfully registered the user",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Something went wrong",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await userServices.deleteUser(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted the user",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Something went wrong ",
      err: error,
    });
  }
};

const allUsers = async (req, res) => {
  try {
    const users = await userServices.getAllUsers();
    return res.status(200).json({
      data: users,
      message: "Successfully fetched all users",
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: "Something went wrong",
      success: false,
      err: error,
    });
  }
};

const signIn = async (req, res) => {
  try {
    const response = await userServices.signIn(
      req.body.Email,
      req.body.Password
    );
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully signed in",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Something went wrong",
      err: error,
    });
  }
};

const isAuthenticated = async (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    const response = await userServices.isAuthenticate(token);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Authenticated User",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Something went wrong",
      err: error,
    });
  }
};

module.exports = {
  create,
  signIn,
  allUsers,
  destroy,
  isAuthenticated,
};
