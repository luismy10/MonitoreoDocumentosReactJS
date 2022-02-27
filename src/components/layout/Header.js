import React from 'react';
import { Link } from 'react-router-dom';
import usuario from "../../assets/images/usuario.png";

class Header extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <header className="app-header">
                <Link to="/" className="app-header__logo">
                    SysSoft Integra
                </Link>

                <a
                    className="app-sidebar__toggle"
                    href="#"
                    data-toggle="sidebar"
                    aria-label="Hide Sidebar"
                ></a>

                <ul className="app-nav">
                    <li className="dropdown">
                        <a className="app-nav__item" href="puntoventa.php">
                            <i className="fa fa fa-shopping-cart fa-sm"></i>
                            <span className="app-nav_text">&nbsp; Punto de Venta</span>
                        </a>
                    </li>
                    <li className="dropdown">
                        <a
                            className="app-nav__item"
                            href="#"
                            data-toggle="dropdown"
                            aria-label="Show notifications"
                        >
                            <i className="fa fa-bell-o fa-sm"></i>
                            <span
                                id="lblNumeroNotificaciones"
                                className="pl-1 pr-1 badge-warning rounded h7 icon-absolute "
                            >
                                0
                            </span>
                        </a>
                        <ul className="app-notification dropdown-menu dropdown-menu-right">
                            <div
                                className="app-notification__content"
                                id="divNotificaciones"
                            ></div>
                            <li className="app-notification__footer" id="lblNotificaciones">
                                <span>Lista de Notificaciones</span>
                            </li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <a
                            className="app-nav__item"
                            href="#"
                            data-toggle="dropdown"
                            aria-label="Open Profile Menu"
                        >
                            <img src={usuario} className="user-image" alt="Usuario" />
                        </a>
                        <ul className="dropdown-menu settings-menu dropdown-menu-right">
                            <li className="user-header">
                                <img src={usuario} className="img-circle" alt="Usuario" />
                                <p>
                                    <span>asdasd</span>
                                    <small>
                                        {" "}
                                        <i>sdfsdf</i>{" "}
                                    </small>
                                </p>
                            </li>
                            <li className="user-footer">
                                <div className="pull-left">
                                    <a href="perfil.php" className="btn btn-secondary btn-flat">
                                        <i className="fa fa-user fa-sm"></i> Perfil Usuario
                                    </a>
                                </div>
                                <div className="pull-right">
                                    <a
                                        href="logout.php"
                                        id="btnCloseSesion"
                                        className="btn btn-secondary btn-flat"
                                    >
                                        <i className="fa fa-sign-out fa-sm"></i> Cerrar Sesión
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Header;