import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/images/logo.png";

class Menu extends React.Component {

    constructor(props) {
        super(props);
        // console.log(this.props)
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
                            <NavLink to="dashboard" exact activeClassName="active" className="app-menu__item">
                                <i className="app-menu__icon fa fa-dashboard"></i>
                                <span className="app-menu__label">Dashboard</span>
                            </NavLink>
                        </li>

                        <li className="treeview">
                            <a className="app-menu__item" href="#" data-toggle="treeview">
                                <i className="app-menu__icon fa fa-external-link-square rotate180"></i>
                                <span className="app-menu__label">Plan de Estudio</span>
                                <i className="treeview-indicator fa fa-angle-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li>
                                    <NavLink to="comite-acreditacion" exact activeClassName="active" className="app-menu__item" >
                                        <i className="app-menu__icon fa fa-circle-o"></i>
                                        <span className="app-menu__label">Comité de acreditación</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="plan" exact activeClassName="active" className="app-menu__item" >
                                        <i className="app-menu__icon fa fa-circle-o"></i>
                                        <span className="app-menu__label">Plan</span>
                                    </NavLink>
                                </li>
                            </ul>
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
                                    <NavLink to="usuario" exact activeClassName="active" className="app-menu__item" >
                                        <i className="app-menu__icon fa fa-circle-o"></i>
                                        <span className="app-menu__label">Usuarios</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="perfil" exact activeClassName="active" className="app-menu__item">
                                        <i className="app-menu__icon fa fa-circle-o"></i>
                                        <span className="app-menu__label">Perfiles</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <Link to="dashboard" className="app-menu__item" href="#">
                                        <i className="app-menu__icon fa fa-circle-o"></i>
                                        <span className="app-menu__label">Permisos</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <NavLink to="asignacion-estandar" exact activeClassName="active" className="app-menu__item">
                                <i className="app-menu__icon fa fa-server"></i>
                                <span className="app-menu__label">ASIGNACION ESTANDAR</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="estado-estandar" exact activeClassName="active" className="app-menu__item">
                                <i className="app-menu__icon fa fa-copy"></i>
                                <span className="app-menu__label">ESTADO DE ESTANDARES</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="estandar-asignado" exact activeClassName="active" className="app-menu__item">
                                <i className="app-menu__icon fa fa-file"></i>
                                <span className="app-menu__label">ESTANDARES ASIGNADOS</span>
                            </NavLink>
                        </li>

                    </ul>
                </aside>
            </>
        );
    }
}

export default Menu;