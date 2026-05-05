const http = require('http')
const rs = require('fs')
const port = 4000
const hostname = '127.0.0.1'

const server = http.createServer((req, res)=>{
  //res.end('i am succesful')
  if (req.url=== '/') {
    fs.readFile("index.html", 'utf-8',
      (err, data)=>{
        if (err) {
          console.log(err);
          
        }else{
          res.writeHead(200, {
            'Content-Type': 'text/html'
          })
        }
      }
    )
  }

})
server.listen(port, hostname, ()=>{
  console.log(`hellow http://${hostname}:${port}`);
  
})