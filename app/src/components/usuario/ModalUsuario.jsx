import React, { Component } from 'react';
import axios from 'axios';
import { hideModal } from '../tools/Tools';

class ModalUsuario extends Component {

    constructor(props) {
        super(props);     
        this.state = {            
            errormessage: "",
            atribTypeTxtClave: "password",
            txtApellidos: "",
            txtNombres: "",
            txtEmail: "",
            txtClave: ""
        }

        this.refTxtApellidos = React.createRef()
        this.refTxtNombres = React.createRef()
        this.refTxtEmail = React.createRef()
        this.refTxtClave = React.createRef()
    }


    saveUser = async () => {
        if (this.state.txtApellidos == "") {
            this.refTxtApellidos.current.focus();
        } else if (this.state.txtNombres == "") {
            this.refTxtNombres.current.focus();
        } else if (this.state.txtEmail == "") {
            this.refTxtEmail.current.focus();
        } else if (this.state.txtClave == "") {
            this.refTxtClave.current.focus();
        } else {
            try {

                let result = await axios.post('/api/usuario/add', {
                    "apellidos": this.state.txtApellidos.trim().toUpperCase(),
                    "nombres": this.state.txtNombres.trim().toUpperCase(),
                    "correo": this.state.txtEmail.trim().toUpperCase(),
                    "clave": this.state.txtClave.trim().toUpperCase()
                });

                // console.log(result);

                hideModal('modalUsuario');

            } catch (error) {
                // console.log(error)
                console.log(error.response)
            }
        }
    }

    watchPassword = (event) => {
        if (event.type === "mousedown") {
            this.setState({ atribTypeTxtClave: "text" })
        } else {
            this.setState({ atribTypeTxtClave: "password" })
        }
    }

    cleanInput () {
        // console.log("clear")
        this.setState({
            txtApellidos: "",
            txtNombres: "",
            txtEmail: "",
            txtClave: ""
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
                                    <i className="fa fa-window-maximize"></i> {this.props.title}
                                </h4>
                                <button type="button" className="close" data-bs-dismiss="modal" title="Cerrar">
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
                                                    type="text"
                                                    ref={this.refTxtApellidos}
                                                    value={this.state.txtApellidos}
                                                    maxLength={50}
                                                    onChange={(event) => this.setState({ txtApellidos: event.target.value })}
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
                                                    ref={this.refTxtNombres}
                                                    value={this.state.txtNombres}
                                                    maxLength={30}
                                                    onChange={(event) => this.setState({ txtNombres: event.target.value })}
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
                                                    type="email"
                                                    ref={this.refTxtEmail}
                                                    value={this.state.txtEmail}
                                                    maxLength={30}
                                                    onChange={(event) => this.setState({ txtEmail: event.target.value })}
                                                    placeholder="Dijite el email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Clave</label>
                                            <div className="input-group">
                                                <input
                                                    className="form-control"
                                                    type={this.state.atribTypeTxtClave}
                                                    ref={this.refTxtClave}
                                                    value={this.state.txtClave}
                                                    maxLength={12}
                                                    onChange={(event) => this.setState({ txtClave: event.target.value })}
                                                    placeholder="Dijite la clave" />
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
                                        <button onClick={this.saveUser} className="btn btn-success" type="button" title="Guardar datos"><i className="fa fa-save"></i> Guardar</button>
                                        <button className="btn btn-danger ml-1" type="button" id="btnCancelCrudUser" data-bs-dismiss="modal" title="Cancelar"><i className="fa fa-close"></i> Cancelar</button>
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