const { CustomAPIError } = require('../errors')
const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send('Something went wrong try again later')
}

module.exports = errorHandlerMiddleware


// const { CustomAPIError } = require('../errors/custom-error')

// const errorHandlerMiddleware = (err, req, res, next) => {
//   if (err instanceof CustomAPIError) {
//     return res.status(err.statusCode).json({ msg: err.message })
//   }
//   return res.status(500).json({ msg: 'Something went wrong, please try again' })
// }

// module.exports = errorHandlerMiddleware

