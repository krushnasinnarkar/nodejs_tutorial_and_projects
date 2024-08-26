const mongoose = require('mongoose')

// mongodb doesnot have structure so we use schema to define the structure for document/item
// only the properties we specified in schema will be pass on to db and everything else will be ignore
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],  //custome message for error
    trim: true, //remove space
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
  // name:String, completed:Boolean //without mongoose valiidators
})

module.exports = mongoose.model('Task', TaskSchema) //collection name will be tasks
// model('name', schema) - The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural, lowercased version of your model name. Thus, for the example above, the model Task is for the tasks collection in the database.
// models are fancy constructors compiled from schema definations
// instance of model is called document, models are responsible for creating and reading documents from db