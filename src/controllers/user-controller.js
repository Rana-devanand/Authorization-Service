const UserServices = require("../services/user-service");

const userServices = new UserServices();

const create = async (req, res) => {
  try {
    const user = await userServices.registerUser({
      Email: req.body.email,
      Password: req.body.password,
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

module.exports = {
  create,
  signIn,
};
