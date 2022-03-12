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

                                <hr className="bg-dark" />
                                <div className="bs-component">
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#tabPrimero" id="navTabPrimero">Historial de avance</a></li>
                                        {/* <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#tabSegundo" id="navTabSegundo">Datos de contacto</a></li> */}
                                    </ul>
                                    <div className="tab-content bg-light">
                                        <div className="tab-pane fade active show p-2" id="tabPrimero">

                                            <div className="row">

                                                <div className="col-auto text-center flex-column d-none d-sm-flex">
                                                    <div className="row h-50">
                                                        <div className="col">&nbsp;</div>
                                                        <div className="col">&nbsp;</div>
                                                    </div>
                                                    <h5 className="m-2">
                                                        <span className="badge badge-pill bg-secondary border">&nbsp;</span>
                                                    </h5>
                                                    <div className="row h-50">
                                                        <div className="col border-right">&nbsp;</div>
                                                        <div className="col">&nbsp;</div>
                                                    </div>
                                                </div>
                                                <div className="col py-2">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="float-right text-muted">11/03/2022 - 7:00 AM</div>
                                                            <h4 className="card-title"><span className="text-primary">Encargado: Nombre completo </span><small>realizo cambios</small></h4>
                                                            <p className="card-text"><strong>Estado de Evaluacion: </strong><small className="p-1 rounded bg-info text-white">Pendiente</small></p>
                                                            <p className="card-text"><strong>Nivel de Avance: </strong>Descripcion del Nivel de Avance</p>
                                                            <p className="card-text"><strong>Etapa: </strong>Descripcion de la Etapa</p>
                                                            <p className="card-text"><strong>Mensaje: </strong>Descripcion de la Mensaje</p>
                                                            <div className="table-responsive">
                                                                <table className="table table-striped">
                                                                    <thead className="table-header-background">
                                                                        <tr>
                                                                            <th>Medio de Verificación</th>
                                                                            <th>Archivo</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody id="tbListHistorialAvance">
                                                                        <tr>
                                                                            <td>Medio 1</td>
                                                                            <td className="text-center">
                                                                                <button type="button" className="btn btn-success" title="Ver"><i className="fa fa-eye"></i></button>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-auto text-center flex-column d-none d-sm-flex">
                                                    <div className="row h-50">
                                                        <div className="col border-right">&nbsp;</div>
                                                        <div className="col">&nbsp;</div>
                                                    </div>
                                                    <h5 className="m-2">
                                                        <span className="badge badge-pill bg-secondary border">&nbsp;</span>
                                                    </h5>
                                                    <div className="row h-50">
                                                        <div className="col border-right">&nbsp;</div>
                                                        <div className="col">&nbsp;</div>
                                                    </div>
                                                </div>
                                                <div class="col py-2">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="float-right text-muted">12/03/2022 - 7:00 AM</div>
                                                            <h4 className="card-title"><span className="text-primary">Encargado: Nombre completo </span><small>realizo cambios</small></h4>
                                                            <p className="card-text"><strong>Estado de Evaluacion: </strong><small className="p-1 rounded bg-info text-white">Pendiente</small></p>
                                                            <p className="card-text"><strong>Nivel de Avance: </strong>Descripcion del Nivel de Avance</p>
                                                            <p className="card-text"><strong>Etapa: </strong>Descripcion de la Etapa</p>
                                                            <p className="card-text"><strong>Mensaje: </strong>Descripcion de la Mensaje</p>
                                                            <div className="table-responsive">
                                                                <table className="table table-striped">
                                                                    <thead className="table-header-background">
                                                                        <tr>
                                                                            <th>Medio de Verificación</th>
                                                                            <th>Archivo</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody id="tbListHistorialAvance">
                                                                        <tr>
                                                                            <td>Medio 1</td>
                                                                            <td className="text-center">
                                                                                <button type="button" className="btn btn-success" title="Ver"><i className="fa fa-eye"></i></button>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-auto text-center flex-column d-none d-sm-flex">
                                                    <div className="row h-50">
                                                        <div className="col border-right">&nbsp;</div>
                                                        <div className="col">&nbsp;</div>
                                                    </div>
                                                    <h5 className="m-2">
                                                        <span className="badge badge-pill bg-secondary border">&nbsp;</span>
                                                    </h5>
                                                    <div className="row h-50">
                                                        <div className="col border-right">&nbsp;</div>
                                                        <div className="col">&nbsp;</div>
                                                    </div>
                                                </div>
                                                <div class="col py-2">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="float-right text-muted">13/03/2022 - 7:00 AM</div>
                                                            <h4 className="card-title"><span className="text-primary">Encargado: Nombre completo </span><small>realizo cambios</small></h4>
                                                            <p className="card-text"><strong>Estado de Evaluacion: </strong><small className="p-1 rounded bg-info text-white">Pendiente</small></p>
                                                            <p className="card-text"><strong>Nivel de Avance: </strong>Descripcion del Nivel de Avance</p>
                                                            <p className="card-text"><strong>Etapa: </strong>Descripcion de la Etapa</p>
                                                            <p className="card-text"><strong>Mensaje: </strong>Descripcion de la Mensaje</p>
                                                            <div className="table-responsive">
                                                                <table className="table table-striped">
                                                                    <thead className="table-header-background">
                                                                        <tr>
                                                                            <th>Medio de Verificación</th>
                                                                            <th>Archivo</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody id="tbListHistorialAvance">
                                                                        <tr>
                                                                            <td>Medio 1</td>
                                                                            <td className="text-center">
                                                                                <button type="button" className="btn btn-success" title="Ver"><i className="fa fa-eye"></i></button>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <hr className="bg-dark" />

                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label><strong>Medio de verificación</strong></label>
                                            <div className="input-group">
                                                <select className="form-control">
                                                    <option value="0">SELECCIONE</option>
                                                </select>
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="button" title="Nuevo medio de verificación"><i className="fa fa-plus"></i> Nuevo</button>
                                                </div>
                                                <div className="input-group-append ml-4">
                                                    <button className="btn btn-success" type="button" title="Agregar medio de verificación"><i className="fa fa-plus"></i> Agregar medio de verificación</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <thead className="table-header-background">
                                                    <tr>
                                                        <th>Medio de Verificación</th>
                                                        <th>Archivo</th>
                                                        <th>Quitar</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="tbList2">
                                                    <tr>
                                                        <td>Medio 1</td>
                                                        <td>
                                                            <input
                                                                className="form-control p-1"
                                                                type="file" />
                                                        </td>
                                                        <td className="text-center">
                                                            <button type="button" className="btn btn-danger" title="Quitar"><i className="fa fa-trash"></i></button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label><strong>Argumentacion de cumplimiento</strong></label>
                                            <div className="input-group">
                                                <textarea className="form-control" placeholder="Dijite la argumentación de cumplimiento"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="modal-footer">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <button className="btn btn-success" type="button" title="Guardar"><i className="fa fa-save"></i> Guardar</button>
                                        <button className="btn btn-danger ml-1" type="button" data-dismiss="modal" title="Cerrar"><i className="fa fa-close"></i> Cerrar</button>
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