const http = require('http')
const port = 3000
const hostname = '127.0.0.1'
const server = http.createServer((req, res)=>{
  if (req.url === '/') {
    fs.readfile("index.html", (err, data)=>{
      res.writeHead(200, {"Content-Type": 'text/html'})
      res.write(data)
      res.end();
    })
  }
})
server.listen(port, hostname, ()=>{
  console.log(`server is running http://${hostname}:${port}`);
  
})