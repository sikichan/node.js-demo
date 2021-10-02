const http = require('http')
const server = http.createServer((request, response) =>  {
  console.log(request.method + ': ' + request.url)
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.end('<h2>hello server</h2>')
})
server.listen(3000, () => {
  console.log('server is running at 3000')
})