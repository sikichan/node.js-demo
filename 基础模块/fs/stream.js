const fs = require('fs')
// const rs = fs.createReadStream('test.txt', 'utf-8')
// data事件会多次被触发，chunk是流的一部分
// rs.on('data', (chunk) => {
//   console.log(chunk) // 不传utf-8时，chunk是一个流
// })
// rs.on('end', () => {
//   console.log('read end')
// })
// rs.on('error', (err) => {
//   console.log('err:', err)
// })

// const ws = fs.createWriteStream('output.txt', 'utf-8')
// ws.write('line1\n')
// ws.write('line2  write here')
// ws.end()

// const ws2 = fs.createWriteStream('output2.txt')
// ws2.write(Buffer.from('use stream to write data...\n', 'utf-8'))
// ws2.write(Buffer.from('END.', 'utf-8'))
// ws2.end()

const readable = fs.createReadStream('readable.txt') // Stream.Readable
const writable = fs.createWriteStream('writable.txt') // Stream.Writable
readable.pipe(writable, {end: false})
