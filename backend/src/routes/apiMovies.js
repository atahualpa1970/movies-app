const express = require('express')
const api = express.Router()

const {
    getMovies,
    createMovies,
    getMovie,
    updateMovie,
    deleteMovie
} = require('../controllers/movies.controller')

api.route('/')
    .get(getMovies)
    .post(createMovies)

api.route('/:id')
    .get(getMovie)
    .put(updateMovie)
    .delete(deleteMovie)

module.exports = api