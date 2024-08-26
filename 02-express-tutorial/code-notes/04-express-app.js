const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})


// How express.static() Works:
// Serving Static Files: It serves files from a specified directory, allowing users to access those files via HTTP requests.
// Directory Parameter: You provide a path to the directory containing the static files. Express will then serve files from this directory in response to client requests.
// URL Mapping: The URL path to access these static files is determined by the URL path you use to set up the static middleware.