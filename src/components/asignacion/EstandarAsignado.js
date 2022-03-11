import React from 'react';
import $ from '../../assets/js/jquery-3.3.1.min';
import ModalEstandarAsignado from './ModalEstandarAsignado'

class EstandarAsignado extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nameStandar: 'Nombre del Estandar',
            stateStandar: 'No logrado'
        }
    }

    openModalEstandarAsignado = () => {
        $("#modalEstandarAsignado").modal("show");
    }

    render() {
        return (
            <>
                <ModalEstandarAsignado title={"Estado: "+this.state.nameStandar} stateStandar={this.state.stateStandar}/>
                <main className="app-content">

                    <div className="app-title">
                        <h1><i className="fa fa-folder"></i> Estandares Asignados <small>Lista</small></h1>
                    </div>

                    <div className="tile">

                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="form-group">
                                    <button className="btn btn-primary" id="btnAgregar" title="Agregar">
                                        <i className="fa fa-plus"></i> Agregar
                                    </button>
                                    <button className="btn btn-secondary ml-1" id="btnReload" title="Recargar">
                                        <i className="fa fa-refresh"></i> Recargar
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="row dataTables_wrapper">
                            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                                <div className="form-group d-flex">
                                    <label className="pt-1 pr-1">Buscar: </label>
                                    <div className="input-group">
                                        <input type="search" className="form-control" placeholder="Escribir para filtrar por apellidos o nombres" id="txtSearch" />
                                        <div className="input-group-append">
                                            <button className="btn btn-success" type="button" id="btnBuscar" title="Buscar"><i className="fa fa-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                                <div className="form-group dataTables_length text-right">
                                    <label className="py-1 pr-1">Mostar</label>
                                    <select className="form-control">
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select>
                                    <label className="py-1 pl-1">Registros</label>
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
                                                <th>Etapa</th>
                                                <th>Estado</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody id="tbList">
                                            <tr>
                                                <td>1</td>
                                                <td>Dimensión 1</td>
                                                <td>Factor 1</td>
                                                <td>Estandar 1</td>
                                                <td>Etapa 1</td>
                                                <td className="text-center">
                                                    <span className="p-1 rounded bg-info text-white">Logrado</span>                                               
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary" title="Ver detalle" onClick={this.openModalEstandarAsignado}><i className="fa fa-eye"></i></button>
                                                    <button type="button" className="btn btn-danger ml-1" title="Imprimir"><i className="fa fa-print"></i></button>
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

export default EstandarAsignado;

