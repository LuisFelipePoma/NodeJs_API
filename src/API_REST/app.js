const express = require('express')
const crypto = require('crypto')
const movies = require('./movies.json')
const { validateMovie, validatePartialMovie } = require('./schemas/movies')

const app = express()

app.disable('x-powered-by')
app.use(express.json())

// Todos los recursos que sean MOVIES son /movies
app.get('/movies', (req, res) => {
  const { genre } = req.query
  if (genre) {
    const filterMovies = movies.filter(movie =>
      movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filterMovies)
  }
  res.json(movies)
})

app.get('/movies/:id', (req, res) => {
  // path-to-regexp
  const { id } = req.params
  const movie = movies.find(movie => movie.id === id)
  if (movie) return res.json(movie)

  res.status(404).json({ message: 'Movie not Found' })
})

// POSt
app.post('/movies', (req, res) => {
  const result = validateMovie(req.body)
  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  // NO REST, por guardar en memoria
  const newMovie = {
    id: crypto.randomUUID(),
    ...result.data
  }
  movies.push(newMovie)

  res.status(201).json(newMovie)
})

// PATCH
app.patch('/movies/:id', (req, res) => {
  const { id } = req.params
  const movieIndex = movies.findIndex(movie => movie.id === id)
  if (movieIndex === -1) {
    return res.status(404).json({ message: 'Movie not found' })
  }

  const result = validatePartialMovie(req.body)
  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  movies[movieIndex] = {
    ...movies[movieIndex],
    ...result.data
  }

  res.json(movies[movieIndex])
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
