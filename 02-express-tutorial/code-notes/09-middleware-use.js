const express = require('express')
const app = express()
const logger = require('./middleware/logger')
const authorize = require('./middleware/authorize')
//  req => middleware => res

//logger middleware will be going to apply to all routes 
// app.use(logger) 

//logger middleware will be going to apply to routes starting with/api
// app.use('/api', logger) 

//both logger and authorize are apply, also their sequence matters
app.use([logger, authorize])

// api/home/about/products
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
