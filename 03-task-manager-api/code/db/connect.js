const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url)
}

module.exports = connectDB

// const connectionString = 'mongodb atlas connection string'

// mongoose
//   .connect(connectionString, {
//    // These options are used to configure the behavior of Mongoose when connecting to MongoDB
//    // (no need to add in latest mongoose)
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('Connected to db...'))
//   .catch((err) => console.log(err))
