const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')
// const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {

  // password hashing with bcrypt (we are using mongoose middleware for hashing)
  // const { name, email, password } = req.body
  // const salt = await bcrypt.genSalt(10) //generate salt - random bytes
  // const hashedPassword = await bcrypt.hash(password, salt)  //hash method
  // const tempUser = { name, email, password: hashedPassword }
  // const user = await User.create({ ...tempUser })

  // validation layers(check in the controller) - no needed as we are already using mongoose validation for sending more meaningfull error messages
  // if (!name || !email || !password) {
  //   throw new BadRequestError('Please provide name, email and password')
  // }

  const user = await User.create({ ...req.body }) //look notes for spread operator(...)
  // we are using  instance method to geneerat jwt
  // const token = jwt.sign({ userID: user._id, name: user.name }, 'jwtSecret', {
  //   expiresIn: '30d'
  // })

  // //if we want to hash password with instance method
  // await user.hashPassword();
  // await user.save(); //need to use as user creaded then we are updating its password so nedd to save user changes

  const token = user.createJWT()  //created method called creatJWT in user schema
  // res.status(StatusCodes.CREATED).json({ user })
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
}

const login = async (req, res) => {
  const { email, password } = req.body

  // validation layer - we are using because if we didnt error will be thrown but will get empty message in response. and mongoose validator ae used only while creating user
  if (!email || !password) {
    throw new BadRequestError('Please provide email and password')
  }
  const user = await User.findOne({ email })
  if (!user) {
    throw new UnauthenticatedError('Invalid Credentials')
  }

  // compare password
  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid Credentials')
  }

  const token = user.createJWT()
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token })
  // res.send('login user')
}

module.exports = {
  register,
  login,
}
