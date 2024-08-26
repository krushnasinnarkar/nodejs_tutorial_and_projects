const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    // throw new CustomAPIError('No token provided', 400)
    throw new UnauthenticatedError('No token provided')
  }

  const token = authHeader.split(' ')[1]  //1 because second value is token and first one is Bearer

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const { id, username } = decoded
    req.user = { id, username }
    next()
  } catch (error) {
    throw new UnauthenticatedError('Not authorized to access this route')
  }
}

module.exports = authenticationMiddleware
