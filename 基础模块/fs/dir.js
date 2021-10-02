const fs = require('fs')

const getFilenames = (path) => {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, filenames) => {
      if (err) reject(err)
      else resolve(filenames)
    })
  })
}

const rename = (oldName, newName) => {
  return new Promise((resolve, reject) => {
    fs.rename(oldName, newName, (err) => {
      if (err) reject(err)
      else resolve()
    })
  })
}

async function run() {
  const filenames = await getFilenames('.')
  for (let name of filenames) {
    console.log(name)
  }
}
run()