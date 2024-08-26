const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)
// {
//   uid: -1,
//   gid: -1,
//   username: 'krush',
//   homedir: 'C:\\Users\\krush',
//   shell: null
// }

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)
// The System Uptime is 230897.765 seconds

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS)
// {
//   name: 'Windows_NT',
//   release: '10.0.22631',
//   totalMem: 16969424896,
//   freeMem: 9224019968
// }