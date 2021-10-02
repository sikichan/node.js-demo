// fs 文件系统模块，负责读写文件
// readFile readFileSync writeFile
const fs = require('fs')
// fs.readFile('./test.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.error(err)
//   } else {
//     console.log(typeof data)
//     console.log(JSON.stringify(data))
//     data = data.replace(/\n/g, '')
//     console.log(data)
//   }
// })

// fs.readFile('./test.txt', (err, data) =>{
//   console.log('不传入文件编码，返回Buffer对象')
//   console.log(data)
//   const text = data.toString('utf8')
//   const buf = Buffer.from(text, 'utf-8')
//   console.log(buf)
//   // <Buffer 48 65 6c 6c 6f 2c 20 6d 79 20 6e 61 6d 65 20 69 73 20 48 61 72 72 79 20 50 6f 74 74 65 72 2e 0a 43 61 6e 20 79 6f 75 20 74 65 6c 6c 20 6d 65 20 61 62 ... 26 more bytes>
// })

// 同步读,可以try/catch,但不建议使用
// const text = fs.readFileSync('./test.txt', 'utf-8')

const str = `Hello Tom\n my name is Harry Potter`
fs.writeFile('hi.txt', str, err => {
  if (err) {
    console.error(err)
  } else {
    console.log('success !')
    fs.stat('hi.txt', (err, stat) => {
      console.log(stat)
      const proto = stat.__proto__ // Stats
      console.log('proto:', proto)
      console.log(proto.__proto__) // StatsBase
    })
  }
})

