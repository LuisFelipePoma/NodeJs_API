const express = require('express')
const dittoJSON = require('../MyAPI/pokemon/ditto.json')

const PORT = process.env.PORT ?? 3000

const app = express()

// Disable the header 'x-powered-by'
app.disable('x-powered-by')

// Instead of using the middleware body-parser
// app.use(express.json())

// Middleware
app.use((req, use, next) => {
  console.log('mi first middleware')
  if (req.method !== 'POST') return next()
  if (req.header['content-type'] !== 'application/json') return next()

  // Just reach the request that match the conditions
  let body = ''
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    req.body = data
    next()
  })
})

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.json(dittoJSON)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

// In case of error with the routes
app.use((req, res) => {
  res.status(404).send('Not found')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
