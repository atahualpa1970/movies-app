import React, { Component } from 'react'
import axios from 'axios'

export default class CreateClasification extends Component {

    state = {
        clasifications: [],
        id: '',
        clasifName: ''
    }

    async componentDidMount() {
        this.getClasifications()
    }

    getClasifications = async () => {
        const res = await axios.get('http://localhost:3001/api/clasif')
        this.setState({clasifications: res.data})
    }

    onChangeId = (e) => {
        this.setState({
            id: e.target.value,
        })
    }

    onChangeClasification = (e) => {
        this.setState({
            clasifName: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3001/api/clasif', {
            id: this.state.id,
            name: this.state.clasifName
        })
        this.setState({
            id: '',
            clasifName: ''
        })
        this.getClasifications() 
    }

    deleteClasif = async (id) => {
        if (window.confirm("Está seguro de borrar esta clasificación?")) {
            await axios.delete('http://localhost:3001/api/clasif/' + id)
        }
        this.getClasifications()
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    * Doble click para eliminar
                    <ul className="list-group">
                        {
                            this.state.clasifications.map(clasif => (
                                <li className="list-group-item list-group-item-action"
                                    key={clasif._id}
                                    onDoubleClick={() => this.deleteClasif(clasif._id) } >
                                    { clasif.id + ' - ' + clasif.name }
                                </li>)
                            )
                        }
                    </ul>
                </div>
                <div className="col-md-4">
                    <div className="card card-body">
                        <h4>Agregar Clasificación</h4>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            Id:
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.id}
                                onChange={this.onChangeId}
                                />
                        </div>
                        <div className="form-group">
                            Clasificación:
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.clasifName}
                                onChange={this.onChangeClasification}
                                />
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
