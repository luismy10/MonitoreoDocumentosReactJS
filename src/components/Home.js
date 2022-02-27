import React from 'react';


class Home extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <main className="app-content">
                <div className="app-title">
                    <h1>
                        <i className="fa fa-folder"></i> Bancos <small>Lista</small>
                    </h1>
                </div>

                <div className="tile">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                                <button className="btn btn-primary" id="btnAgregar">
                                    <i className="fa fa-plus"></i> Agregar
                                </button>{" "}
                                <button className="btn btn-secondary" id="btnReload">
                                    <i className="fa fa-refresh"></i> Recargar
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <label>Buscar por el nombre del banco:</label>
                            <div className="form-group d-flex">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Ingrese los datos requeridos"
                                        id="txtBuscar"
                                    />
                                    <div className="input-group-append">
                                        <button
                                            className="btn btn-success"
                                            type="button"
                                            id="btnBuscar"
                                        >
                                            Buscar
                                        </button>
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
                                            <th>N°</th>
                                            <th>Nombre de la Cuenta</th>
                                            <th>Número de la Cuenta</th>
                                            <th>Descripción</th>
                                            <th>Tipo de Cuenta</th>
                                            <th>Mostrar Cuenta</th>
                                            <th>Saldo</th>
                                            <th>Editar</th>
                                            <th>Eliminar</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbList">
                                        <tr>
                                            <td colSpan="9" className="text-center">
                                                !Aún no has registrado ningún banco¡
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
                                </button>{" "}
                                <button className="btn btn-outline-secondary">
                                    <i className="fa fa-angle-left"></i>
                                </button>{" "}
                                <span
                                    className="btn btn-outline-secondary disabled"
                                    id="lblPaginacion"
                                >
                                    0 - 0
                                </span>{" "}
                                <button className="btn btn-outline-secondary">
                                    <i className="fa fa-angle-right"></i>
                                </button>{" "}
                                <button className="btn btn-outline-secondary">
                                    <i className="fa fa-angle-double-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

}

export default Home;