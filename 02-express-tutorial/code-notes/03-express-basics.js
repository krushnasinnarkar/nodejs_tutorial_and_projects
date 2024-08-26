const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log('user hit the resource')
  res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
  res.status(200).send('About Page')
})

app.get('/old-about', (req, res) => {
  res.redirect(301, '/about') // redirects to /about 301-this page is premenantly moved
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})

// app.get - Used to retrieve data from the server
// app.post - Used to send data to the server to create new resources
// app.put - Used to update or replace existing resources on the server
// app.patch - Used to partially update existing resources
// difference between put and patch is that patch only update changes and keep remaining as it is but put update changes and remove everything else
// app.delete - Used to delete resources on the server
// app.all - Useful for handling all methods for a particular route
// app.use - for midddleware
// app.listen - Starts the Express server and listens for incoming requests on a specified port

// we can also pass multiple route ^/$|/index(.html)?  this is same as / or .index(.html)? (.html)? means optional