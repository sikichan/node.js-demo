// 实现一个文件服务器，模拟在服务器上读本地文件
'use strict';
const url = require('url')
const path = require('path')
const http = require('http')
const fs = require('fs')
console.log('命令行参数: ', process.argv[2])
const root = process.argv[2] || '../../'
const server = http.createServer((request, response) => {
  const pathname = request.url.slice(1)
  const dir = path.resolve(__dirname, root)
  console.log('DIR:', dir)
  let filename = path.resolve(dir, pathname)
  filename = decodeURIComponent(filename)
  console.log('filename:', filename)

  fs.stat(filename, (err, stats) => {err
    if (!err && stats.isFile()) {
      console.log('200 : ' + request.url)
      const type = request.url.endsWith('.html') ? 'text/html;charset=utf-8' : 'text/plain;charset=utf-8'
      response.writeHead(200, {'Content-Type': type})
      fs.createReadStream(filename).pipe(response)
    } else if (!err && stats.isDirectory()){
      fs.readdir(filename, 'utf-8', (err, files) => {
        response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
        const path = url.pathToFileURL(request.url).pathname
        const hrefs = files.map(f => {
          const url = path === '/' ? `${decodeURIComponent(f)}` :`${decodeURIComponent(path)}/${decodeURIComponent(f)}`
          return `<a href=${url}>${f}</a>`
        })
        response.end(hrefs.join('<br>'))
      })
    } else {
      response.writeHead(404)
      response.end(pathname + ' is not found')
    }
  })
  
})

server.listen(3000, () => console.log('listen at port 3000'))