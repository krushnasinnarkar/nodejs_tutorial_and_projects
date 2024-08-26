// validation layers - we can add multiple layers
// 1 mongoose validation - in schema/model require true
// 2 Joi package - see this in future projects
// 3 check in the controller - as we did in 03-task-manager-api controllers, and here too. (check if usesername/password exist or throw error)

// till now, user sending request and getting response from server
// from now on we will be having two types of route
// 1. public - accessible to everyone
// 2. restrict - accessible only to signed JWT

// in this project we are not connecting to db we testing using postman only

// ./jwt.png
// if the user provide correct credentials we send back the signed JSON Web Token (jwt)
// And in order to acces routes user(frontend) needs to provide same token otherwise we get back an error response

// jwt - JSON Web Token is just a way to exchange data between two parties (frontend app and api)
// jwt has security feature
// more details about jwt - https://jwt.io/introduction

// JSON Web Token structure -
// In its compact form, JSON Web Tokens consist of three parts separated by dots (.), which are:
// Header - The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA.
// {
//   "alg": "HS256",
//   "typ": "JWT"
// }
// Payload - The second part of the token is the payload, which contains the claims. Claims are statements about an entity (typically, the user) and additional data
// {
//     "sub": "1234567890",
//     "name": "John Doe",
//     "admin": true
// }
// Signature - To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.
// HMACSHA256(  //algorithm
//     base64UrlEncode(header) + "." +
//     base64UrlEncode(payload),
//     secret)  //secret string - if someone got it they might start signing token on our behalf
// Therefore, a JWT typically looks like - xxxxx.yyyyy.zzzzz
// (frontend part) Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer schema. The content of the header should look like the following:
// (frontend part) Authorization: Bearer <token>
// expireIn is a jwt option, by default it uses milliseconds unit '120'='120ms'. so always add unit '30d','10h',..
// ./code/controllers/main.js

// in this project we are extending custom error by bad request and unauthenticated error class with hard coded statuse code
// instead of next() and creating instance of error like we did in task manager api, we are using throw error
// using http-status-code for giving status code
// for status codes - https://www.npmjs.com/package/http-status-codes