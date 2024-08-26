// API VS SSR

// API
// API - json
// send data
// res.json()

// SSR
// SSR - template
// send template
// res.render()

const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
  // res.json([{ name: 'krushna' }, { name: 'prachi' }])
  res.json(products)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
