import React, { Component } from 'react';


class ModalMiembros extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,

        }

    }

    render() {
        return (
            <div className="row">
                <div className="modal fade" id="modalMiembros" data-backdrop="static">
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
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Docente</label>
                                            <div className="input-group">
                                                <select className="form-control">
                                                    <option value="1">Docente 1</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Cargo</label>
                                            <div className="input-group">
                                                <select className="form-control">
                                                    <option value="10">Cargo 1</option>
                                                </select>
                                                <div className="input-group-append">
                                                    <button className="btn btn-success" type="button" id="btnBuscar" title="Agregar miembro"><i className="fa fa-user-plus"></i></button>
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
                                                        <th>Docente</th>
                                                        <th>Cargo</th>
                                                        <th>Opciones</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="tbList">
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Full Name</td>
                                                        <td>Presidente</td>
                                                        <td className="text-center">
                                                            <button type="button" className="btn btn-danger" title="Eliminar"><i className="fa fa-trash"></i></button>
                                                        </td>
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
                                        {/* <button className="btn btn-success" type="button" id="btnSaveUser" title="Guardar datos"><i className="fa fa-save"></i> Guardar</button> */}
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

export default ModalMiembros;

