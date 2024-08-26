// how we exchange data on web
// http-messages.png
// when we visit website we request to server to serving those resourese and that server send us back the resourses (response)
// user sends the http request message and the server send the http resonse message
// servers are just computers and their job is to always make that resourse available.

// request-response.png
// structure - start line, headers(optional), body(optional)
// for request -
// start line - http method(get as default), url, http version
// header - meta information about request (content tyep) (optional)
// b0dy - payload(resourse we want to add to server) (optional)
// for response -
// start line - http version, status code(200-ok,400-unauthrize,404-not found), status text
// header - meta information about request (content tyep)
// body - response data from server

// http-methods.png
// get - Read Data
// post - Insert Data
// put - Update Data
// delete - Delete Data

// every website using https secure connection uses 443 port (ipAdress:443), and http uses port 80