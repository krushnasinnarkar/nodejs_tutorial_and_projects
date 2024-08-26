const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./middleware/logger')
const authorize = require('./middleware/authorize')
//  req => middleware => res

// 1. use vs route
// 2. options - our own / express / third party

// app.use([logger, authorize]) // oue own middleware
// app.use(express.static('./public')) // middleware by express
app.use(morgan('tiny')) // thirdparty middleware need to install before use
// morgan gives o/p req.method req.url status time

app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
