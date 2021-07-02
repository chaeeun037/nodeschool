/**
 * Write a TCP time server!

  Your server should listen to TCP connections on the port provided by    
  the first argument to your program. For each connection you must write  
  the current date & 24 hour time in the format:

     "YYYY-MM-DD hh:mm"

  followed by a newline character. Month, day, hour and minute must be    
  zero-filled to 2 integers. For example:

     "2013-07-06 17:42"

  After sending the string, close the connection.
 */

const net = require('net')
const port = process.argv[2]

const fillZero = (n) => {
    return n < 10 ? '0' + n : n
}

const server = net.createServer(socket => {
    const date = new Date()
    const YYYY = fillZero(date.getFullYear())
    const MM = fillZero(date.getMonth() + 1)
    const DD = fillZero(date.getDate())
    const hh = fillZero(date.getHours())
    const mm = fillZero(date.getMinutes())
    socket.end(YYYY + '-' + MM + '-' + DD + ' ' + hh + ':' + mm + '\n')
})
server.listen(port)