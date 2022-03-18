import React from 'react';
import ModalUsuario from './ModalUsuario';
import ModalUpdateUsuario from './ModalUpdateUsuario'
import ModalDepAcademico from './ModalDepAcademico';
import ModalPerfilUsuario from './ModalPerfilUsuario';
import { showModal, viewModal, clearModal } from '../tools/Tools'
import axios from 'axios';

function PaginacionElement(props) {//eso lo podemos seperar en un componente luego 
    const pageNumbers = [];
    for (let i = 1; i <= props.totalPaginacion; i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number, index) => {
        if (number === 1 && props.paginacion === 1) {
            return (
                <li key={index} className="page-item active" aria-current="page">
                    <span className="page-link">{number}</span>
                </li>
            );
        } else if ((number < props.upperPageBound + 1) && number > props.lowerPageBound) {
            return (
                <li key={index} className={`page-item ${number === props.paginacion ? "active" : ""}`}>
                    {
                        number === props.paginacion
                            ? <span id={number} className="page-link">{number}</span>
                            : <button id={number} className="page-link" onClick={props.handleClick}>{number}</button>
                    }
                </li>
            );
        }
    });

    let pageIncrementBtn = null;
    if (pageNumbers.length > props.upperPageBound) {
        pageIncrementBtn = <li className="page-item"><button className="page-link" onClick={props.btnIncrementClick}> &hellip; </button></li>;
    }

    let pageDecrementBtn = null;
    if (props.lowerPageBound >= 1) {
        pageDecrementBtn = <li className="page-item"><button className="page-link" onClick={props.btnDecrementClick}> &hellip; </button></li>;
    }

    let renderPrevBtn = null;
    if (props.isPrevBtnActive === 'disabled') {
        renderPrevBtn = <li className="page-item disabled"><span className="page-link"> Ante. </span></li>;
    } else {
        renderPrevBtn = <li className="page-item"><button className="page-link" onClick={props.btnPrevClick}> Ante.  </button></li>;
    }

    let renderNextBtn = null;
    if (props.isNextBtnActive === 'disabled') {
        renderNextBtn = <li className="page-item disabled"><span className="page-link"> Sigui. </span></li>;
    } else {
        renderNextBtn = <li className="page-item"><button className="page-link" onClick={props.btnNextClick}> Sigui. </button></li>;
    }

    return (
        <>
            {renderPrevBtn}
            {pageDecrementBtn}
            {renderPageNumbers}
            {pageIncrementBtn}
            {renderNextBtn}
        </>
    );
}

class Usuario extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            datosUsuario: "Apellidos y Nombes",
            idUsuario: null,

            lista: [],
            upperPageBound: 3,
            lowerPageBound: 0,
            isPrevBtnActive: 'disabled',
            isNextBtnActive: '',
            pageBound: 3,
            paginacion: 0,
            totalPaginacion: 0,
            filasPorPagina: 5,
            mostrarPaginacion: null,
            messagePaginacion: 'Mostranto 0 de 0 Páginas'
        }

        this.refModalUsuario = React.createRef();
        this.refModalUpdateUsuario = React.createRef();
    }

    async componentDidMount() {
        console.log(this.refModalUsuario)
        clearModal("modalUsuario", () => {
            this.refModalUsuario.current.cleanInput();
        });

        // modal actualizar

        viewModal("modalUpdateUsuario", () => {
            this.refModalUpdateUsuario.current.loadData(this.state.idUsuario);
        });

        clearModal("modalUpdateUsuario", () => {
            this.setState({ idUsuario: null });
            this.refModalUpdateUsuario.current.cleanInput();
        });

        //aca crea tu llamada ala api altoque perra que
        //hijo de perra como vas a poner una funcion dentra de otra funcion esta
        this.fillTableUsuario(1);
    }

    //diferencia entre =()=> y () 

    addOpenModalUsuario() {
        showModal('modalUsuario');
    }

    editOpenModalUsuario(id) {
        this.setState({ idUsuario: id }, () => {
            showModal('modalUpdateUsuario');
        });
    }

    openModalUpdateUsuario(id) {
        this.setState({ idUsuario: id });
    }

    openModalDepAcademico = () => {
        showModal('modalDepAcademico');
    }

    openModalPerfilUsuario = () => {
        showModal('modalPerfilUsuario');
    }

    handleClick = async (event) => {
        console.log(event.target.id)
        let listid = parseInt(event.target.id);
        this.setPrevAndNextBtnClass(listid);
    }

    btnIncrementClick = async () => {
        await this.setStateAsync({
            upperPageBound: this.state.upperPageBound + this.state.pageBound,
            lowerPageBound: this.state.lowerPageBound + this.state.pageBound
        });
        let listid = this.state.lowerPageBound + 1;
        this.setPrevAndNextBtnClass(listid);
    }

    btnDecrementClick = async () => {
        await this.setStateAsync({
            upperPageBound: this.state.upperPageBound - this.state.pageBound,
            lowerPageBound: this.state.lowerPageBound - this.state.pageBound
        });
        let listid = this.state.upperPageBound;
        this.setPrevAndNextBtnClass(listid);
    }

    btnPrevClick = async () => {
        if ((this.state.paginacion - 1) % this.state.pageBound === 0) {
            await this.setStateAsync({
                upperPageBound: this.state.upperPageBound - this.state.pageBound,
                lowerPageBound: this.state.lowerPageBound - this.state.pageBound
            });
        }
        let listid = this.state.paginacion - 1;
        this.setPrevAndNextBtnClass(listid);
    }

    btnNextClick = async () => {
        if ((this.state.paginacion + 1) > this.state.upperPageBound) {
            await this.setStateAsync({
                upperPageBound: this.state.upperPageBound + this.state.pageBound,
                lowerPageBound: this.state.lowerPageBound + this.state.pageBound
            });
        }
        let listid = this.state.paginacion + 1;
        this.setPrevAndNextBtnClass(listid);
    }

    setPrevAndNextBtnClass = async (listid) => {
        await this.setStateAsync({ isNextBtnActive: 'disabled', isPrevBtnActive: 'disabled' });

        if (this.state.totalPaginacion === listid && this.state.totalPaginacion > 1) {
            await this.setStateAsync({ isPrevBtnActive: '' });
        } else if (listid === 1 && this.state.totalPaginacion > 1) {
            await this.setStateAsync({ isNextBtnActive: '' });
        } else if (this.state.totalPaginacion > 1) {
            await this.setStateAsync({ isNextBtnActive: '', isPrevBtnActive: '' });
        }

        this.fillTableUsuario(listid);
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        });
    }

    async fillTableUsuario(paginacion) {
        try {
            await this.setStateAsync({ paginacion: paginacion });

            const result = await axios.get("/api/usuario/list", {
                params: {
                    "posicionPagina": ((this.state.paginacion - 1) * this.state.filasPorPagina),
                    "filasPorPagina": this.state.filasPorPagina
                }
            });

            let totalPaginacion = parseInt(Math.ceil((parseFloat(result.data.total) / this.state.filasPorPagina)));
            let messagePaginacion = `Mostrando ${result.data.result.length} de ${totalPaginacion} Páginas`;

            this.setState({
                lista: result.data.result,
                totalPaginacion: totalPaginacion,
                messagePaginacion: messagePaginacion
            });
            console.log(result)
        } catch (err) {
            console.log(err)
            console.log(err.response)
        }
    }

    render() {
        return (
            <>
                <ModalUsuario ref={this.refModalUsuario} title={"Registrar Usuario"} />
                <ModalUpdateUsuario ref={this.refModalUpdateUsuario} title={"Editar Usuario"} />
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
                                    <button className="btn btn-primary" id="btnAgregar" title="Agregar" onClick={() => this.addOpenModalUsuario()}>
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
                                        <tbody>
                                            {
                                                this.state.lista.length === 0 ? (
                                                    <tr>
                                                        <td className="text-center" colSpan="4">¡No hay Usuarios registrados!</td>
                                                    </tr>
                                                ) :
                                                    this.state.lista.map(function (item, index) {
                                                        return (
                                                            <tr key={index}>
                                                                <td className="text-center">{index + 1}</td>
                                                                <td>{item.apellidos + ', ' + item.nombres}</td>
                                                                <td>{item.correo}</td>
                                                                <td>

                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                            }
                                            {/* <tr>
                                                <td>1</td>
                                                <td>Name</td>
                                                <td>correo</td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary" title="Departamento academico" onClick={this.openModalDepAcademico}><i className="fa fa-cubes"></i></button>
                                                    &nbsp;
                                                    <button type="button" className="btn btn-info" title="Perfiles" onClick={this.openModalPerfilUsuario}><i className="fa fa-edit"></i></button>
                                                    &nbsp;
                                                    <button type="button" className="btn btn-warning" title="Editar" onClick={() => this.editOpenModalUsuario(1)}><i className="fa fa-edit"></i></button>
                                                </td>
                                            </tr> */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
                            <div className="row">
                                <div className="col-sm-12 col-md-5">
                                    <div className="dataTables_info" role="status" aria-live="polite">{this.state.messagePaginacion}</div>
                                </div>
                                <div className="col-sm-12 col-md-7">
                                    <div className="dataTables_paginate paging_simple_numbers">
                                        <ul className="pagination">
                                            <PaginacionElement
                                                totalPaginacion={this.state.totalPaginacion}
                                                paginacion={this.state.paginacion}
                                                upperPageBound={this.state.upperPageBound}
                                                lowerPageBound={this.state.lowerPageBound}
                                                isPrevBtnActive={this.state.isPrevBtnActive}
                                                isNextBtnActive={this.state.isNextBtnActive}
                                                pageBound={this.state.pageBound}

                                                handleClick={this.handleClick}
                                                btnIncrementClick={this.btnIncrementClick}
                                                btnDecrementClick={this.btnDecrementClick}
                                                btnPrevClick={this.btnPrevClick}
                                                btnNextClick={this.btnNextClick}
                                            />
                                            {/* <li className="paginate_button page-item previous disabled" id="sampleTable_previous">
                                                <a href="#" aria-controls="sampleTable" data-dt-idx="0" tabIndex="0" className="page-link">Previous</a>
                                            </li>
                                            <li className="paginate_button page-item active">
                                                <a href="#" aria-controls="sampleTable" data-dt-idx="1" tabIndex="0" className="page-link">1</a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="#" aria-controls="sampleTable" data-dt-idx="2" tabIndex="0" className="page-link">2</a></li>
                                            <li className="paginate_button page-item "><a href="#" aria-controls="sampleTable" data-dt-idx="3" tabIndex="0" className="page-link">3</a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="#" aria-controls="sampleTable" data-dt-idx="4" tabIndex="0" className="page-link">4</a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="#" aria-controls="sampleTable" data-dt-idx="5" tabIndex="0" className="page-link">5</a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="#" aria-controls="sampleTable" data-dt-idx="6" tabIndex="0" className="page-link">6</a>
                                            </li>
                                            <li className="paginate_button page-item next" id="sampleTable_next">
                                                <a href="#" aria-controls="sampleTable" data-dt-idx="7" tabIndex="0" className="page-link">Next</a>
                                            </li> */}
                                        </ul>
                                    </div>
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