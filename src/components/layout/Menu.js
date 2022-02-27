import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";

class Menu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="app-sidebar__overlay" data-toggle="sidebar"></div>
                <aside className="app-sidebar">
                    <div className="app-sidebar__user">
                        <div className="m-2">
                            <img className="img-fluid" src={logo} alt="User Image" />
                        </div>

                        <div className="m-1">
                            <p className="app-sidebar__user-name">{"ADMINISTRAR"}</p>
                        </div>
                    </div>
                    <ul className="app-menu">
                        <li>
                            <Link to="dashboard" className="app-menu__item">
                                <i className="app-menu__icon fa fa-dashboard"></i>
                                <span className="app-menu__label">Dashboard</span>
                            </Link>
                        </li>

                        <li className="treeview">
                            <a className="app-menu__item" href="#" data-toggle="treeview">
                                <i className="app-menu__icon fa fa-external-link-square rotate180"></i>
                                <span className="app-menu__label">Seguridad</span>
                                <i className="treeview-indicator fa fa-angle-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li>
                                    <Link to="dashboard" className="app-menu__item" >
                                        <i className="app-menu__icon fa fa-circle-o"></i>
                                        <span className="app-menu__label">Modulos</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="usuario" className="app-menu__item" >
                                        <i className="app-menu__icon fa fa-circle-o"></i>
                                        <span className="app-menu__label">Usuarios</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="dashboard" className="app-menu__item" href="#">
                                        <i className="app-menu__icon fa fa-circle-o"></i>
                                        <span className="app-menu__label">Perfiles</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="dashboard" className="app-menu__item" href="#">
                                        <i className="app-menu__icon fa fa-circle-o"></i>
                                        <span className="app-menu__label">Permisos</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </aside>
            </>
        );
    }
}

export default Menu;