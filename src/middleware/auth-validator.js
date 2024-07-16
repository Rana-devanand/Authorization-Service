const ValidateUserAuth = (req, res, next) => {
  if (!req.body.Email || !req.body.Password) {
    return res.status(400).json({
      success: false,
      message: "Invalid email or password",
      err: "Missing required fields",
    });
  }
  next();
};

module.exports = {
  ValidateUserAuth,
};
