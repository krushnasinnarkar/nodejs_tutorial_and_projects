const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' }) // header
    res.write('<h1>home page</h1>') // body
    res.end() // need to use response end so browser can understand that response is over
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }

  // add by me
  // else if (url = '/query') {
  //   res.writeHead(200, { 'Content-Type': 'text/html' });
  //   var q = url.parse(req.url, true).query; // http://localhost:5000/?year=2024&month=July
  //   var txt = q.year + " " + q.month;
  //   res.end(txt);
  // }

  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000)