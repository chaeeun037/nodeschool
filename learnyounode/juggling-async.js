/**
 * This problem is the same as the previous problem (HTTP COLLECT) in      
  that you need to use http.get(). However, this time you will be
  provided with three URLs as the first three command-line arguments.     

  You must collect the complete content provided to you by each of the    
  URLs and print it to the console (stdout). You don't need to print out  
  the length, just the data as a String; one line per URL. The catch is   
  that you must print them out in the same order as the URLs are
  provided to you as command-line arguments.
 */

const http = require('http')
const paths = [process.argv[2], process.argv[3], process.argv[4]]

let body = ['', '', '']
let cnt = 0

paths.forEach((e, i) => {
    http.get(e, (response) => {
        response.setEncoding('utf8')
        response.on('data', data => {
            body[i] += data
        })
        response.on('end', () => {
            cnt++
            if (cnt === 3) {
                for (let i = 0; i < 3; i++) {
                    console.log(body[i])
                }
            }
        })
    })
})

