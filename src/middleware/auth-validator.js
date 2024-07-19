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

const isAdminUserAuth = (req, res, next) => {
  if (!req.body.id === "ADMIN") {
    return res.status(400).json({
      success: false,
      message: "Unauthorized user",
      err: "You are not an admin",
    });
  }
  next();
};

module.exports = {
  ValidateUserAuth,
  isAdminUserAuth,
};
