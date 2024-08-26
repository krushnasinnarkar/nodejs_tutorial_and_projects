// added by me

var express = require('express')
var cors = require('cors')  //install cors first by npm i cors
var app = express()

// Enable CORS for a Single Route
// app.get('/products/:id', cors(), (req, res) => {
//     res.json({ msg: 'This is CORS-enabled for all origins!' })
// })

// Simple Usage (Enable All CORS Requests)
// app.use(cors())

// app.get('/products/:id', (req, res) => {
//     res.json({ msg: 'This is CORS-enabled for all origins!' })
// })

// Configuring CORS
// var corsOptions = {
//     origin: 'http://example.com',
//     optionsSuccessStatus: 200
// }

// app.use(cors(corsOptions))

// app.get('/products/:id', function (req, res, next) {
//     res.json({ msg: 'This is CORS-enabled for only example.com.' })
// })

// Configuring CORS Asynchronously
var allowlist = ['http://example1.com', 'http://example2.com']
var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(cors(corsOptionsDelegate))

app.get('/products/:id', function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for an allowed domain.' })
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})