const fs = require('node:fs')
const http = require('node:http')
const desiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200 // OK
    res.setHeader('Content-Type', 'text/plane; charset=utf-8')
    res.end('<h1>Bienvenido a mi página de inicio<h1/>')
  } else if (req.url === '/imagen.jpg') {
    fs.readFile('./arco.jpg', (error, data) => {
      if (error) {
        res.statusCode = 404
        res.end('<h1>404</h1>')
      } else {
        res.statusCode = 200
        res.setHeader('Content-Type', 'image/jpg; charset=utf-8')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200 // OK
    res.setHeader('Content-Type', 'text/plane; charset=utf-8')
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404
    res.end('<h1>404</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Servidor escuchando en el puerto ${desiredPort}`)
})
