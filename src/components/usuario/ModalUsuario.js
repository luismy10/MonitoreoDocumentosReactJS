import React, { Component } from 'react';


class ModalUsuario extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            title: props.title,
            AtribTypeTxtClave: "password",

            txtApellidos: "",
            txtNombres: "",
            txtEmail: "",
            txtClave: ""
        }

    
    }

    watchPassword = (event) => {
        if (event.type === "mousedown") {
            this.setState({ AtribTypeTxtClave: "text" })
        } else {
            this.setState({ AtribTypeTxtClave: "password" })
        }
    }

    cleanInput =  () => {
        this.setState({
            txtApellidos: "",
            txtNombres: "",
            txtEmail: "",
            txtClave
        })
    }

    render() {
        return (
            <div className="row">
                <div className="modal fade" id="modalUsuario" data-backdrop="static">
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
                                            <label>Apellidos</label>
                                            <div className="input-group">
                                                <input 
                                                    className="form-control" 
                                                    type="text" value={this.state.txtApellidos} 
                                                    onChange={() => this.setState({txtApellidos: txtApellidos}) }
                                                    placeholder="Dijite los apellidos" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Nombre(s)</label>
                                            <div className="input-group">
                                                <input 
                                                    className="form-control" 
                                                    type="text" 
                                                    value={this.state.txtNombres} 
                                                    onChange={ () => this.setState({txtNombres : txtNombres})} 
                                                    placeholder="Dijite los nombres" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <div className="input-group">
                                                <input 
                                                    className="form-control" 
                                                    type="email" value={this.state.txtEmail} 
                                                    onChange={ () =>this.setState({txtEmail: txtEmail})} placeholder="Dijite el email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Clave</label>
                                            <div className="input-group">
                                                <input 
                                                    className="form-control" 
                                                    type={this.state.AtribTypeTxtClave} 
                                                    value={this.state.txtClave} 
                                                    onChange={ () => this.setState({txtClave: txtClave})} maxLength={12} placeholder="Dijite la clave" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="button" onMouseDown={this.watchPassword} onMouseUp={this.watchPassword} title="Ver clave"><i className="fa fa-eye"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="modal-footer">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <button className="btn btn-success" type="button" id="btnSaveUser" title="Guardar datos"><i className="fa fa-save"></i> Guardar</button>
                                        <button className="btn btn-danger ml-1" type="button" id="btnCancelCrudUser" data-dismiss="modal" title="Cancelar"><i className="fa fa-close"></i> Cancelar</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ModalUsuario;