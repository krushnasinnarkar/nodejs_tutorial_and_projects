const path = require('path')

console.log(path.sep)   // \

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)   //\content\subfolder\test.txt

const base = path.basename(filePath)
console.log(base)   //test.txt

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')    // or path.join
console.log(absolute)   //C:\Users\krush\Desktop\tuts\Node JS\node-express-course\01-node-tutorial\content\subfolder\test.txt
