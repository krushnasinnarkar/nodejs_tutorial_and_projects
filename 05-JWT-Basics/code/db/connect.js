const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url)
}

module.exports = connectDB

// no use in this project
