const { StatusCode } = require("http-status-codes");

// Parent class

class AppError extends Error {
  // This code run when the error comes out from the server.
  constructor(
    name = "AppError",
    message = "Something went wrong",
    explanation = "Something went wrong",
    statusCode = StatusCode.INTERNAL_SERVER_ERROR
  ) {
    super();
    this.name = name;
    this.message = message;
    this.explanation = explanation;
    this.statusCode = statusCode;
  }
}

module.exports = AppError;
