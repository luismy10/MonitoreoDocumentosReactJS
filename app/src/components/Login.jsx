import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../redux/actions';
// import $ from '../assets/js/jquery-3.3.1.min';
import logo from "../assets/images/logo.png"

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            idusuario: '',
            apellidos: '',
            nombres: '',
            correo: '',
            usuario: '',
            clave: ''
        }

        this.refTxtUsuario = React.createRef()
        this.refTxtClave = React.createRef()
    }

    onEventForm = async () => {
        if (this.state.usuario == "") {
            this.refTxtUsuario.current.focus();
        } else if (this.state.clave == "") {
            this.refTxtClave.current.focus();
        } else {
            try {

                let user = JSON.stringify({
                    "id": Math.floor(Math.random() * 562000),
                    "email": "alexander_dx_10@hotmail.com",
                    "password": "123456"
                });

                await localStorage.setItem('login', user);
                this.props.restore(user);
                // this.props.history.push("principal");
            } catch (error) {
                console.log(error)
            }
        }
    }

    render() {
        return (
            <>
                <section className="login-content">

                    <div className="tile p-0">

                        {/* <div className="overlay d-none" id="divOverlayLogin">
                            <div className="m-loader mr-4">
                                <svg className="m-circular" viewBox="25 25 50 50">
                                    <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"></circle>
                                </svg>
                            </div>
                            <h4 className="l-text" id="lblTextOverlayLogin">Procesando Petición...</h4>
                        </div> */}

                        <div className="tile-body">
                            <div className="login-box">
                                <div className="login-form">
                                    <h4 className="text-center mb-3">
                                        <img className="img-fluid" src={logo} alt="User Image" />
                                    </h4>
                                    <h4 className="login-head"><i className="fa fa-lg fa-fw fa-user"></i>Credenciales de Acceso</h4>
                                    <div className="form-group">
                                        <label className="control-label">Usuario</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={this.state.usuario}
                                            placeholder="Dijite el usuario"
                                            ref={this.refTxtUsuario}
                                            maxLength={20}
                                            autoFocus
                                            onChange={(event) => this.setState({ usuario: event.target.value })} />
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">Contraseña</label>
                                        <input
                                            className="form-control"
                                            type="password"
                                            placeholder="Dijite la contraseña"
                                            ref={this.refTxtClave}
                                            maxLength={12}
                                            onChange={(event) => this.setState({ clave: event.target.value })} />
                                    </div>
                                    <div className="form-group btn-container">
                                        <button onClick={this.onEventForm} className="btn btn-primary btn-block"><i className="fa fa-sign-in fa-lg fa-fw"></i>ACEPTAR</button>
                                    </div>
                                    <div className="form-group text-center">
                                        <label className="control-label text-danger" id="lblErrorMessage"></label>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </section>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.reducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        restore: (user) => dispatch(signIn(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);