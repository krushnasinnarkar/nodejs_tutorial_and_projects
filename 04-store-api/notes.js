// require('express-async-errors');
// works same as asyncwraper from 03-task-manager-api
// no need to add try catch in async function to catch error
// this package will take care of errors, it will catch err and pass it to error handler middleware

// Error Handling in Express JS and express-async-errors package - https://medium.com/@utkuu/error-handling-in-express-js-and-express-async-errors-package-639c91ba3aa2
// express-async-errors helps Express catch asynchoronous errors without using next method so we don’t need to use try-catch block.

// Query and projection operators
// Comparison -
// $eq - Matches values that are equal to a specified value.
// $gt - Matches values that are greater than a specified value.
// $gte - Matches values that are greater than or equal to a specified value.
// $lt - Matches values that are less than a specified value.
// $lte - Matches values that are less than or equal to a specified value.
// Evaluation -
// $regex - Selects documents where values match a specified regular expression.
// for more operators visit - https://www.mongodb.com/docs/manual/reference/operator/query/

// Queries -
// A Query enables you to build up a query using chaining syntax, rather than specifying a JSON object.
// With a JSON doc
// await Person.
//     find({
//         occupation: /host/,
//         'name.last': 'Ghost',
//         age: { $gt: 17, $lt: 66 },
//         likes: { $in: ['vaporizing', 'talking'] }
//     }).
//     limit(10).
//     sort({ occupation: -1 }).
//     select({ name: 1, occupation: 1 }).
//     exec();
// Using query builder
// await Person.
//     find({ occupation: /host/ }).
//     where('name.last').equals('Ghost').
//     where('age').gt(17).lt(66).
//     where('likes').in(['vaporizing', 'talking']).
//     limit(10).
//     sort('-occupation').
//     select('name occupation').
//     exec();
// for more details visit - https://mongoosejs.com/docs/queries.html

// use of queries and operators - ./code/controllers/products.js