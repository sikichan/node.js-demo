'use strict';
const EventEmitter = require('events')
class SmileEmitter extends EventEmitter {

}
const smileEmitter = new SmileEmitter()
smileEmitter.on('smile', function () {
  console.log('我笑了')
  console.log('this: ', this, this === smileEmitter)
})
smileEmitter.on('smile', (a, b)=> {
  console.log('我笑了2')
  console.log('this: ', this, a + b)
})

smileEmitter.emit('smile', 4, 5)


smileEmitter.once('stop', () => {
  console.log('stop smiling')
})
setTimeout(() => {
  smileEmitter.emit('stop')
  smileEmitter.emit('stop')
}, 400);