import React from 'react';
import $ from '../../assets/js/jquery-3.3.1.min';
import ModalEstadoEstandar from "./ModalEstadoEstandar"

class EstadoEstandar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nameStandar: 'Nombre del Estandar',
            stateStandar: 'Logrado'
        }
    }

    openModalEstadoEstandar = () => {
        $("#modalEstadoEstandar").modal("show");
    }

    render() {
        return (
            <>
                <ModalEstadoEstandar title={"Estado: "+this.state.nameStandar} stateStandar={this.state.stateStandar}/>
                <main className="app-content">

                    <div className="app-title">
                        <h1><i className="fa fa-folder"></i> Reporte de estado de estandares <small>Lista</small></h1>
                    </div>

                    <div className="tile">

                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="form-group">

                                    <button className="btn btn-secondary ml-1" id="btnReload" title="Recargar">
                                        <i className="fa fa-refresh"></i> Recargar
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                                <div className="form-group">
                                    <label><strong>Cómites de acreditación</strong></label>
                                    <div className="input-group">
                                        <select className="form-control">
                                            <option value="0">Seleccione</option>
                                            <option value="1">Name 1</option>
                                            <option value="3">Name 2</option>
                                            <option value="4">Name 3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                <div className="form-group">
                                    <label><strong>Estado</strong></label>
                                    <div className="input-group">
                                        <select className="form-control">
                                            <option value="0">Todos</option>
                                            <option value="1">Pendiente</option>
                                            <option value="1">Logrado</option>
                                            <option value="1">No logrado</option>
                                        </select>
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
                                                <th>N°</th>
                                                <th>Dimensión</th>
                                                <th>Factor</th>
                                                <th>Estandar</th>
                                                <th>Estado</th>
                                                <th>Acciones</th>                                            
                                            </tr>
                                        </thead>
                                        <tbody id="tbList">
                                            <tr>
                                                <td>1</td>
                                                <td>Gestión Estrategica</td>
                                                <td>Planificacion de programa de estudios</td>
                                                <td>Propositos Articulados</td>
                                                <td className="text-center">
                                                    <span className="p-1 rounded bg-info text-white">Logrado</span>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary" title="Ver detalle" onClick={this.openModalEstadoEstandar}><i className="fa fa-eye"></i></button>
                                                </td>   
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-12 text-center">
                                <label>Paginación</label>
                                <div className="form-group" id="ulPagination">
                                    <button className="btn btn-outline-secondary">
                                        <i className="fa fa-angle-double-left"></i>
                                    </button>
                                    <button className="btn btn-outline-secondary">
                                        <i className="fa fa-angle-left"></i>
                                    </button>
                                    <span className="btn btn-outline-secondary disabled" id="lblPaginacion">0 - 0</span>
                                    <button className="btn btn-outline-secondary">
                                        <i className="fa fa-angle-right"></i>
                                    </button>
                                    <button className="btn btn-outline-secondary">
                                        <i className="fa fa-angle-double-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </>
        )
    }

}

export default EstadoEstandar

