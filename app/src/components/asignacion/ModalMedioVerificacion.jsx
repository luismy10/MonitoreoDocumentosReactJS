import React, { Component } from 'react';

class ModalMedioVerificacion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title
        }

    }

    render() {
        return (
            <div className="row">
                <div className="modal fade" id="modalMedioVerificacion" data-backdrop="static">
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
                                            <label>Descripción</label>
                                            <div className="input-group">
                                                <input 
                                                    className="form-control" 
                                                    type="text"
                                                    placeholder="Dijite el medio de verificaion" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="modal-footer">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <button className="btn btn-success" type="button" id="btnSaveUser" title="Guardar"><i className="fa fa-save"></i> Guardar</button>
                                        <button className="btn btn-danger ml-1" type="button" id="btnCancelCrudUser" data-dismiss="modal" title="Cancelar"><i className="fa fa-close"></i> Cancelar</button>
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

export default ModalMedioVerificacion

