const { createReadStream, createWriteStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/big.txt')

stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => console.log(err))

const wstream = createWriteStream('./content/newbig.txt')

// stream.on('data', (result) => {
//   wstream.write(result)
// })
// stream.on('error', (err) => console.log(err))

// or

stream.pipe(wstream)