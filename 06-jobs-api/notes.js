// spread ooperator (...)
// It is used to expand or "spread" the properties of an object into a new object
// Suppose req.body is: { name: 'John', age: 30, email: 'john@example.com' }
// const user = await User.create({ ...req.body }); - User.create({ name: 'John', age: 30, email: 'john@example.com' });
// const user = await User.create({ req.body }); - User.create({ req.body: { name: 'John', age: 30, email: 'john@example.com' } });
// in reviouse project we didnt used spread because we are using User.create( req.body ) without {}
// eg - body = {name:"krush"}
// console.log({body}) - { body: { name: 'krush' } }
// console.log(body) - { name: 'krush' }
// console.log({...body}) - { name: 'krush' }

// mongoose validators - https://mongoosejs.com/docs/schematypes.html (extension of task manager notes)
// minLength: Number, creates a validator that checks if the value length is not less than the given number
// unique: boolean, whether to define a unique index on this property.
// match: RegExp, creates a validator that checks if the value matches the given regular expression
// enum: Array, creates a validator that checks if the value is in the given array.
// ref: The ref option tells Mongoose which model (collection) the ObjectId field refers to. This allows Mongoose to automatically populate the referenced documents when querying.

// mongoose timestamps - https://mongoosejs.com/docs/timestamps.html
// Mongoose schemas support a timestamps option. If you set timestamps: true, Mongoose will add two properties of type Date to your schema:
// createdAt: a date representing when this document was created
// updatedAt: a date representing when this document was last updated

// bcryptjs
// Salt Rounds: The saltRounds value determines the complexity of the hash. A higher number means more security but requires more computational resources.
// gensalt function is used to generate a salt for hashing passwords. A salt is a random value added to the password before hashing
// bcrypt.gensalt([rounds], [callback]) - callback function is optional If not provided, gensalt returns a promise
// hash function simply look for password and salt. once we provide both of this values we get hashed password
// bcrypt.hash([password], [salt], [callback]) - callback function is optional If not provided, hash returns a promise
// The compare function is used to check if a plain text password matches a hashed password.
// bcrypt.compare([password], [hashedpassword], [callback]) - callback function is optional If not provided, compare returns a promise
// async function hashPassword(password) {
//     try {
//         const salt = await bcrypt.genSalt();
//         const hashPassword = await bcrypt.hash(password, salt);
//         console.log('Hashed password:', hashPassword);
//         const isMatch = await bcrypt.compare(password, hashPassword)
//         console.log('Is Match:' isMatch) //we get true or false
//     } catch (error) {console.error(error);}
// }
// hashPassword('myPassword123');

// mongoose middleware - https://mongoosejs.com/docs/middleware.html#pre
// Middleware (also called pre and post hooks) are functions which are passed control during execution of asynchronous functions. Middleware is specified on the schema level.
// Pre - Pre middleware functions are executed one after another, when each middleware calls next
// Pre middleware defined on one schema does not affect other schemas or global middleware.
// The first argument is the operation you want to hook into (e.g., 'save', 'validate', 'remove'), and the second argument is the middleware function.
// const schema = new Schema({ /* ... */ });
// schema.pre('save', function(next) {
//   // do stuff
//   next();    // pass to next mmiddleware define for sprcific schema only
// });
// instead of calling next() manually, you can use a function that returns a promise. In particular, you can use async/await.
// schema.pre('save', async function () {
//   // do stuff
// });
// note that we need to use function key word instead of arrow function, that way this will alway scope to our document (because we will be using 'this' keyword inside the function)

// mongoose schema's instance methods - https://mongoosejs.com/docs/guide.html#methods
// Instance methods are defined on a Mongoose schema using the methods property.
// These methods are then available to be called on documents created from that schema.
// schema.methods.methodname = function() {function should return method};
// we can also define methods inside schema
// const UserSchema = new mongoose.Schema(
//     { other properties and their types },
//     {
//         methods: {
//             methodname() { function should return method }
//         }
//     });
// note that we need to use function key word instead of arrow function, that way this will alway scope to our document (because we will be using 'this' keyword inside the function)

// generating jwt secret string
// go to any encryption key generator website and use 256 encryption

// seting accesstoken dynamicalyy in postman -
// when we login or register token will be updated automatically for that user
// add following code to login and register route's script and it will create collection veriable with accessToken, token and then we add that in each route which require authorization using auth tab>authtype(Bearer token)>token-{{accessToken}}
// const jsonDaata = pm.response.json()
// pm.collectionVariables.set("accessToken", jsonData.token);

// Mongoose error - making them more userfriendly - ./code/middleware/error-handler.js
// Validation Errors
// Duplicate (Email)
// Cast Error - for wrong id
// first send big error(default) and use its objects to map messages in our ways