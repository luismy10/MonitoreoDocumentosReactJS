import React, { Component } from 'react'
import axios from 'axios'
import { hideModal } from '../tools/Tools'

class ModalEspecialidad extends Component {
    constructor(props) {
        super(props)
        this.state = {
            idEspecialidad: '',
            selectFacultad: 1,
            txtNombre: '',
            selectEstado: 1,
            txtDescripcion: ''

        }

        this.refSelectFacultad = React.createRef()
        this.refTxtNombre = React.createRef()
        this.refSelectEstado = React.createRef()
        this.refTxtDescripcion = React.createRef()
    }

    clearInput(){
        this.setState({
            idEspecialidad: '',
            selectFacultad: 1,
            txtNombre: '',
            selectEstado: 1,
            txtDescripcion: ''
        })
    }

    render() {
        return (
            <div className="row">
                <div className="modal fade" id="modalEspecialidad" data-backdrop="static">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title">
                                    <i className="fa fa-window-maximize"></i> {this.props.title}
                                </h4>
                                <button type="button" className="close" data-bs-dismiss="modal" title="Cerrar">
                                    <i className="fa fa-close"></i>
                                </button>
                            </div>

                            <div className="modal-body">

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Facultad</label>
                                            <div className="input-group">
                                                <select
                                                    className="form-control"
                                                    ref={this.refSelectFacultad}
                                                    value={this.state.selectFacultad}
                                                    onChange={(event) => this.setState({ selectFacultad: event.target.value })} >
                                                    <option value="1">Activo</option>
                                                    <option value="0">Inactivo</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Nombre</label>
                                            <div className="input-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    ref={this.refTxtNombre}
                                                    value={this.state.txtNombre}
                                                    maxLength={80}
                                                    onChange={(event) => this.setState({ txtNombre: event.target.value })}
                                                    placeholder="Dijite un nombre de especialidad" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Estado</label>
                                            <div className="input-group">
                                                <select
                                                    className="form-control"
                                                    ref={this.refSelectEstado}
                                                    value={this.state.selectEstado}
                                                    onChange={(event) => this.setState({ selectEstado: event.target.value })} >
                                                    <option value="1">Activo</option>
                                                    <option value="0">Inactivo</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Descripción</label>
                                            <div className="input-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    ref={this.refTxtDescripcion}
                                                    value={this.state.txtDescripcion}
                                                    maxLength={200}
                                                    onChange={(event) => this.setState({ txtDescripcion: event.target.value })}
                                                    placeholder="Dijite una descripción" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="modal-footer">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <button onClick={() => this.saveFacultad()} className="btn btn-success" type="button" title="Guardar datos"><i className="fa fa-save"></i> Guardar</button>
                                        <button className="btn btn-danger ml-1" type="button" id="btnCancelCrudUser" data-bs-dismiss="modal" title="Cancelar"><i className="fa fa-close"></i> Cancelar</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalEspecialidad