const AppError = require("./error-handlers");
const { StatusCodes } = require("http-status-codes");

//  Derived class
class ValidationError extends AppError {
  constructor(error) {
    let errorName = error.name;
    let explanation = [];
    error.errors.forEach((err) => {
      explanation.push(err.message);
    });

    super(
      errorName,
      "Not able to validate the data sent in the request",
      explanation,
      StatusCodes.BAD_REQUEST
    );
  }
}

module.exports = ValidationError;
