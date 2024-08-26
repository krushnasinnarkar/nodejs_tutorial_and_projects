// added by me (written by john smilga)

// npm - global command, comes with code
// npm --version

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// package-lock.json - not only contain versions of dependencies but also contain version of dependencies that our dependencies use

// local dependency (prefered) - use it only in thi particular project
// npm i <packagename>

// global dependency - use it in any project
//npm install -g <packagename>

// devDependencies - used only for production
// npm i <packagename> -D

// uninstalling package
// npm uninstall <packagename>
// manual approach - remove packagename from package.json, delete node_module and package-lock.json, run npm install

// scripts in package.json - instead of runing node app.js every time we can setup "start":"node app.js" and we can use npm start to run node app.js

// pusing code to github, just push package.json and install dependencies rather than sending heavy node_modules folder
// npm i or npm install to install dependencies from package.json

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItem = _.flattenDeep(items)
console.log(newItem)    // [1,2,3,4]