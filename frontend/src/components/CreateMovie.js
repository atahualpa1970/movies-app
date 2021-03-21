import React, { Component } from 'react'
import axios from 'axios'

export default class CreateMovie extends Component {

    state = {
        clasifications: [],
        newMovieName: '',
        newDirector: '',
        newClasif: '',
        isEditing: false,
        _id: ''
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:3001/api/clasif')
        this.setState({clasifications: res.data})
        if (this.props.match.params.id) {
            const res = await axios.get('http://localhost:3001/api/movies/' + this.props.match.params.id)
            this.setState({
                newMovieName: res.data.name,
                newDirector: res.data.director,
                newClasif: res.data.clasification,              
                isEditing: true,
                _id: this.props.match.params.id
            })
        }
    }

    onSubmit = async (e) => {
        e.preventDefault()
        const newMovie = {
            name: this.state.newMovieName,
            director: this.state.newDirector,
            clasification: this.state.newClasif
        }
        if (this.state.isEditing) {
            await axios.put('http://localhost:3001/api/movies/' + this.state._id, newMovie)
        } else {
            await axios.post('http://localhost:3001/api/movies', newMovie)
        }
        window.location.href="/"
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className='col-md-6 offset-md-3'>
                <div className='card card-body'>
                    <h4>{(this.state.isEditing) ? 'Modificar Película' : 'Cargar Nueva Película'}</h4>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Título"
                                name="newMovieName"
                                onChange={this.onInputChange}
                                value={this.state.newMovieName || ''}
                                required
                                />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Director"
                                name="newDirector"
                                onChange={this.onInputChange}
                                value={this.state.newDirector || ''}
                                required
                                />
                        </div>

                        {/* Select Clasification */}
                        <div className="form-group">
                            <select
                                className="form-control"
                                name="newClasif"
                                onChange={this.onInputChange}
                                value={this.state.newClasif || ''}
                            >
                                <option value="">Seleccione un Clasificación</option>
                                {
                                    this.state.clasifications.map(clasif => 
                                    <option key={clasif.id} value={clasif.name}>
                                        {clasif.name}
                                    </option>)
                                }
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Guardar
                        </button>
                    </form>
                </div>
            
            </div>
        )
    }
}
