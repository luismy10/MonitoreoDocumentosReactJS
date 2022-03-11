import React, { Component } from 'react';

class ModalDepAcademico extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,

        }

    }

    render() {
        return (
            <div className="row" >
                <div className="modal fade" id="modalDepAcademico" data-backdrop="static">
                    <div className="modal-dialog">
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
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Facultad</label>
                                            <div className="input-group">
                                                <select id="cbFacultad" className="form-control">
                                                    <option value="">--selected--</option>
                                                    <option value="1">Facultad 1</option>
                                                    <option value="1">Facultad 2</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Departamento</label>
                                            <div className="input-group">
                                                <select id="cbFacultad" className="form-control">
                                                    <option value="">--selected--</option>
                                                    <option value="1">Departamento 1</option>
                                                    <option value="1">Departamento 2</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="modal-footer">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <button className="btn btn-success" type="button" id="btnSave" title="Guardar datos"><i className="fa fa-save"></i> Guardar</button>
                                        <button className="btn btn-danger ml-1" type="button" id="btnCancel" data-dismiss="modal" title="Cancelar"><i className="fa fa-close"></i> Cancelar</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default ModalDepAcademico;