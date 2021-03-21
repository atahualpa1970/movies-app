const express = require('express')
const cors = require('cors')
const app = express()

// Config
app.set('port', process.env.PORT || 3001)

// Middleweres
app.use(cors())
app.use(express.json())

// Routes
app.get('/api/prueba', (req, res) => res.send('Ruta de prueba'))
app.use('/api/movies', require('./routes/apiMovies'))
app.use('/api/clasif', require('./routes/apiClasifications'))

module.exports = app