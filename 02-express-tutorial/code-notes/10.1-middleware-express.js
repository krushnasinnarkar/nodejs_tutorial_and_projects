// addded by me

// How express.json() Works:
// Parsing JSON Requests: It parses the JSON payload in the request body and makes it available as a JavaScript object on req.body.
// Content-Type Header: The middleware only processes requests where the Content-Type header is application/json.
// Error Handling: If the request body contains invalid JSON, express.json() will return a 400 Bad Request response with an error message.

// Input: JSON object in the request body (e.g., { "name": "John Doe", "age": 30 }).
// Output: JavaScript object available in req.body (e.g., { name: 'John Doe', age: 30 }).


// How express.urlencoded() Works:
// Parsing URL-Encoded Requests: It parses the URL-encoded payload in the request body and makes it available as a JavaScript object on req.body.
// Content-Type Header: The middleware processes requests where the Content-Type header is application/x-www-form-urlencoded.

// Options:
// extended: A boolean value that determines how the data should be parsed.

// extended: true: Uses the qs library to parse the data, allowing for rich objects and arrays.
// Input: URL-encoded form data in the request body (e.g., user[name]=John&user[age]=30).
// Output: JavaScript object available in req.body (e.g., { user: { name: 'John', age: '30' } }).

// extended: false: Uses the querystring library to parse the data, resulting in simpler objects.
// Input: URL-encoded form data in the request body (e.g., user[name]=John&user[age]=30).
// Output: JavaScript object available in req.body (e.g., { 'user[name]': 'John', 'user[age]': '30' }).

// Input: URL-encoded form data in the request body (e.g., name=Jane+Doe&age=25).
// Output: JavaScript object available in req.body (e.g., { name: 'Jane Doe', age: '25' }).