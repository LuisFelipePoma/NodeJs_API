const http = require('node:http')
const { findAvailablePort } = require('./free_port.js')

const server = http.createServer((req, res) => {
  console.log('Petición recibida')
  res.end('Hola mundo')
})

findAvailablePort(3000).then(port => {
  server.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`)
  })
})
// Port 0 means random port available
// server.listen(0, () => {
//   console.log(`Servidor escuchando en el puerto ${server.address().port}`)
// })
