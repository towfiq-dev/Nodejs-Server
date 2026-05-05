// const http = require('http')
// const mySever = http.createServer((req, res)=>{
//   res.end("Hello. I am your first love")
// })
// mySever.listen(3000, ()=>{
//   console.log('server is running')
// })


// const http = require('http')

// const server = http.createServer((req, res)=>{
//   res.end('my first me love')
// })
// server.listen(3000, ()=>{
//   console.log('server is running me');
  
// })

const http = require('http');
const  hostname  = require('os');
const port = 4000;
const hostName = '127.0.0.1';

const sever = http.createServer((req, res)=>{
  res.end('Hello my dear')
})
server.listen(port, hostname, ()=>{
  console.log('server now');
  
})