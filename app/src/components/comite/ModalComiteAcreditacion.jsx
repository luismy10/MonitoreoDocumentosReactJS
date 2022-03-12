import React, { Component } from 'react';

class ModalComiteAcreditacion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,

        }

    }

    render() {
        return (
            <div className="row">
                <div className="modal fade" id="modalComiteAcreditacion" data-backdrop="static">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title">
                                    <i className="fa fa-window-maximize"></i> {this.state.title}
                                </h4>
                                <button type="button" className="close" data-dismiss="modal" title="Cerrar">
                                    <i className="fa fa-close"></i>
                                </button>
                            </div>

                            <div className="modal-body">

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Facultad</label>
                                            <div className="input-group">
                                                <select className="form-control">
                                                    <option value="1">Facultad 1</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Escuela</label>
                                            <div className="input-group">
                                                <select className="form-control">
                                                    <option value="1">Escuela 1</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Formato</label>
                                            <div className="input-group">
                                                <select className="form-control">
                                                    <option value="1">Formato 1</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Resolución</label>
                                            <div className="input-group">
                                                <input 
                                                    className="form-control p-1" 
                                                    type="file" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>CUI</label>
                                            <div className="input-group">
                                                <input 
                                                    className="form-control" 
                                                    type="text"
                                                    placeholder="Dijite el CUI" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Fecha Inicio</label>
                                            <div className="input-group">
                                                <input 
                                                    className="form-control" 
                                                    type="date"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Fecha Fin</label>
                                            <div className="input-group">
                                                <input 
                                                    className="form-control" 
                                                    type="date"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="modal-footer">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <button className="btn btn-success" type="button" title="Guardar datos"><i className="fa fa-save"></i> Guardar</button>
                                        <button className="btn btn-danger ml-1" type="button" data-dismiss="modal" title="Cancelar"><i className="fa fa-close"></i> Cancelar</button>
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

export default ModalComiteAcreditacion
