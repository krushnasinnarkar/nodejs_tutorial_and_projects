// class CustomAPIError extends Error {  //extend from Error class
//   constructor(message, statusCode) {
//     super(message)
//     this.statusCode = statusCode
//   }
// }

class CustomAPIError extends Error {
  constructor(message) {
    super(message)
  }
}

module.exports = CustomAPIError

