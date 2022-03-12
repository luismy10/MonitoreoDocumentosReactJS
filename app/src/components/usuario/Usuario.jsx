import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import $ from '../../assets/js/jquery-3.3.1.min';
import bootstrap from '../../assets/js/bootstrap';
import ModalUsuario from './ModalUsuario';
import ModalDepAcademico from './ModalDepAcademico';
import ModalPerfilUsuario from './ModalPerfilUsuario';

class Usuario extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            datosUsuario: "Apellidos y Nombes"
        }
    }

    componentDidMount() {

    }

    openModalUsuario = () => {
       
        var myModal = new bootstrap.Modal(document.getElementById('modalUsuario'))
        myModal.show()
        // $("#modalUsuario").modal("show");
    }

    openModalDepAcademico = () => {
        $("#modalDepAcademico").modal("show");
    }

    openModalPerfilUsuario = () => {
        $("#modalPerfilUsuario").modal("show");
    }

    onEventCloseModal = () => {

        $("#modalUsuario").on("hide.bs.modal", function () {

        });

    }


    render() {
        return (
            <>
                <ModalUsuario title={"Registrar Usuario"} />
                <ModalDepAcademico title={"Departamento Academico  - " + this.state.datosUsuario} />
                <ModalPerfilUsuario title={"Perfiles - " + this.state.datosUsuario} />

                <main className="app-content">
                   
                    <div className="app-title">
                        <h1><i className="fa fa-folder"></i> Usuarios <small>Lista</small></h1>
                    </div>

                    <div className="tile">

                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="form-group">
                                    <button className="btn btn-primary" id="btnAgregar" title="Agregar" onClick={this.openModalUsuario}>
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
                                                <th>Apellidos y nombres</th>
                                                <th>Correo</th>
                                                <th>Opciones</th>
                                            </tr>
                                        </thead>
                                        <tbody id="tbList">
                                            <tr>
                                                <td>1</td>
                                                <td>Name</td>
                                                <td>correo</td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary" title="Departamento academico" onClick={this.openModalDepAcademico}><i className="fa fa-cubes"></i></button>
                                                    &nbsp;
                                                    <button type="button" className="btn btn-info" title="Perfiles" onClick={this.openModalPerfilUsuario}><i className="fa fa-edit"></i></button>
                                                    &nbsp;
                                                    <button type="button" className="btn btn-warning" title="Editar"><i className="fa fa-edit"></i></button>
                                                    {/* &nbsp;
                                                    <button type="button" className="btn btn-danger" title="Eliminar"><i className="fa fa-trash"></i></button> */}
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
        );
    }

}

export default Usuario;