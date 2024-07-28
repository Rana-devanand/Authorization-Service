const AppError = require("./error-handlers");
const { StatusCodes } = require("http-status-codes");

//  Derived class
class ClientError extends Error {
  constructor(name, message, explanation, statusCode) {
    super();
    this.name = name;
    this.message = message;
    this.explanation = explanation;
    this.statusCode = statusCode;
  }
}

module.exports = ClientError;
