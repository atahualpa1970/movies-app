const moviesCtrl = {}

const Movie = require('../models/movies')

moviesCtrl.getMovies = async (req, res) => {
    const movies = await Movie.find()
    res.json(movies)
}

moviesCtrl.createMovies = async (req, res) => {
    const { name, director, clasification } = req.body
    const newMovie = new Movie ({
        name: name,
        director: director,
        clasification: clasification
    })
    await newMovie.save()
    res.json({message: 'Pelicula Guardada'})
}

moviesCtrl.getMovie = async (req, res) => {
    const movie = await Movie.findById(req.params.id)
    res.json(movie)
}

moviesCtrl.updateMovie = async (req, res) => {
    const { name, director, clasification } = req.body
    await Movie.findByIdAndUpdate(req.params.id, {
        name: name,
        director: director,
        cclasification: clasification
    })
    res.json({message: 'Pelicula Modificada'})
}

moviesCtrl.deleteMovie = async (req, res) => {
    const movie = await Movie.findByIdAndDelete(req.params.id)
    res.json({message: 'Película Eliminada'})
}


module.exports = moviesCtrl