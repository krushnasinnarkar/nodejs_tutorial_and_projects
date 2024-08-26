// mongodb
// NoSQl, Non relational db
// stores JSON

// Atlas setup
// create an atlas account
// create a cluster
// create database user (database access) - remember to add built in role
// add ip address to your access list (network access) - we can use local ip address while developing but once we deploy project we need to allow acces from everywhere otherwise will get error
// get connection string from cluster (Driver)
// add user and pasword in connection string (sometimes database name is not added to string you need to add maanually - mongodb.net/<dbname>?)
// (manually) go to collections > create database and collection (inside db we can add create collections)
// (manually) adding items - go to collection(user) > insert document/item (documents in same collection dont need to have same structure)
// (manually) Crud - we can create, read, update and delete document/item
// the above manual steps can be done automatically once we connect to our application

// Mongoose - https://mongoosejs.com/docs/
// Schemas: Define the structure and validation of documents.
// Models: Interact with collections using schema-defined models.
// CRUD Operations: Easily perform Create, Read, Update, and Delete operations.
// Validation and Middleware: Enforce data constraints and add hooks for additional functionality.

// mongoose validators - https://mongoosejs.com/docs/schematypes.html (more validators in jobs-api)
// type - string, number, date, boolen..., set type of property
// required: boolean or function, if true adds a required validator for this property
// default: Any or function, sets a default value for the path.
// trim: boolean, whether to always call .trim() on the value
// maxLength: Number, creates a validator that checks if the value length is not greater than the given number

// notes about schema and model - ./code/models/task.js

// Mongoose models provide several static helper functions for CRUD operations. Each of these functions returns a mongoose Query object.
// Model.deleteMany()
// Model.deleteOne()
// Model.find()
// Model.findById()
// Model.findByIdAndDelete()
// Model.findByIdAndRemove()
// Model.findByIdAndUpdate()
// Model.findOne()
// Model.findOneAndDelete()
// Model.findOneAndReplace()
// Model.findOneAndUpdate()
// Model.replaceOne()
// Model.updateMany()
// Model.updateOne()
// for more details - https://mongoosejs.com/docs/queries.html

// checkout ./code/errors/custom-error.js and ./code/middleware/error-handler.js to understand error handling
// ./code/errors/custom-error.js - we have created custom error with status code and error message
// ./code/middleware/error-handler.js - we are handling error if the error is instance of custom error we send sam status code and message any other error we are sendin 500 with message 