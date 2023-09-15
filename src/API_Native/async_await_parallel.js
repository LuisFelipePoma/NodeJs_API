const file = require('node:fs/promises')

Promise.all([
  file.readFile('./archivo.txt', 'utf-8'),
  file.readFile('./archivo2.txt', 'utf-8')
])
  .then(values => {
    console.log(values)
  })
  .catch(err => {
    console.log(err)
  })
