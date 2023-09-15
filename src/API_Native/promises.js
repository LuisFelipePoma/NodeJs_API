const file = require('node:fs/promises')
// const { promisify } = require('node:util') // To convert a callback function to a promise

// Best way to read files in NodeJS (Non-Blocking) wih promises
console.log('Reading the first file.....')
file.readFile('./archivo.txt', 'utf-8').then(text => {
  console.log(text)
  console.log('\nFinishing the first file.....')
})

console.log('\nReading the second file......')
file.readFile('./archivo2.txt', 'utf-8').then(text => {
  console.log(text)
  console.log('\nFinishing the second file......')
})
