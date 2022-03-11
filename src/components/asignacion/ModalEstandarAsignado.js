import React, { Component } from 'react';

class ModalEstandarAsignado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            stateStandar: this.props.stateStandar
        }

    }

    render() {
        return (
            <div className="row" >
                <div className="modal fade" id="modalEstandarAsignado" data-backdrop="static">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title">
                                    <i className="fa fa-window-maximize"></i> {this.state.title} <small className="p-1 rounded bg-danger text-white">{this.state.stateStandar}</small>
                                </h4>
                                <button type="button" className="close" data-dismiss="modal" title="Cerrar">
                                    <i className="fa fa-close"></i>
                                </button>
                            </div>
 
                           <div className="modal-body">

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label><strong>FACULTAD:</strong></label> <span>FACULTAD DE CIENCIAS ECONOMICAS</span>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label><strong>ESTADO:</strong></label> <span>ADMINISTRACION EN TURISMO</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label><strong>ENCARGADO:</strong></label> <span>-</span>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label><strong>TELEFONO:</strong></label> <span>-</span>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label><strong>CORREO:</strong></label> <span>-</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <thead className="table-header-background">
                                                    <tr>
                                                        <th>Descripcion del estándar</th>
                                                        <th>Criterio de Evaluación</th>
                                                        <th>Fecha Inicio</th>
                                                        <th>Fecha Inicio</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="tbList">
                                                    <tr>
                                                        <td>Descripcion del estándar 1</td>
                                                        <td>Criterio de Evaluación 1</td>
                                                        <td>08/03/2022</td>
                                                        <td>08/03/2022</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <thead className="table-header-background">
                                                    <tr>
                                                        <th>N°</th>
                                                        <th>Nivel de avance</th>
                                                        <th>Etapa</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="tbList2">
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Nivel de avance 1</td>
                                                        <td>25%</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="modal-footer">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <button className="btn btn-danger" type="button" data-dismiss="modal" title="Cerrar"><i className="fa fa-close"></i> Cerrar</button>
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

export default ModalEstandarAsignado;