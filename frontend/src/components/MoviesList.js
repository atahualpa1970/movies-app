import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class MoviesList extends Component {

    state = {
        movies: []
    }

    componentDidMount() {
        this.getMovies()
    }

    getMovies = async() => {
        const res = await axios.get('http://localhost:3001/api/movies')
        this.setState({movies: res.data})
    }

    deleteMovie = async (id) => {
        await axios.delete('http://localhost:3001/api/movies/' + id)
        this.getMovies()
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.movies.map(movie => (
                        <div className="col-md-3 p-2" key={movie._id}>
                            <div className="card">
                                <div className="card-header">
                                    <h5>{movie.name}</h5>
                                </div>
                                <div className="card-body">
                                    <p>{movie.director}</p>
                                    <p>{movie.clasification}</p>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <button 
                                        className="btn btn-danger"
                                        onClick={() => this.deleteMovie(movie._id)}
                                    >
                                        Eliminar
                                    </button>
                                    <Link 
                                        className="btn btn-secondary"
                                        to={"/editMovie/" + movie._id}
                                    >
                                        Modificar
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
