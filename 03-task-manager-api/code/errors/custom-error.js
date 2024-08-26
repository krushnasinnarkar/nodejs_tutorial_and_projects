class CustomAPIError extends Error {  //extend from Error class
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
  }
}

// return instunce of custome error
const createCustomError = (msg, statusCode) => {
  return new CustomAPIError(msg, statusCode)
}

module.exports = { createCustomError, CustomAPIError }

// instance class is require
// without it we have to instance every time while using it
// like const error = new CustomAPIError('An error occurred', 400)

// we can also do without creating instance
// but for that we need to throw error instead of passing it to next() (in controllerr, also need to update requires)