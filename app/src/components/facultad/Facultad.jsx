import React from 'react';
import { showModal, viewModal, clearModal } from '../tools/Tools'
import axios from 'axios';
import ModalFacultad from './ModalFacultad';
import ModalEspecialidad from './ModalEspecialidad'


class Facultad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idFacultad: '',
            idEspecialidad: '',
            listaFacultad: [],
            listaEspecialidad: []
        }

        this.refModalFacultad = React.createRef();
        this.refModalEspecialidad = React.createRef();
    }

    
     async componentDidMount(){

        clearModal('modalFacultad', () => {
            this.setState({ idFacultad: '' });
            this.refModalFacultad.current.clearInput();
        });

        clearModal('modalEspecialidad', () => {
            this.setState({ idEspecialidad: ''})
            this.refModalEspecialidad.current.clearInput()
        })

        this.fillTableFacultad()

    }

    openModalFacultad(id) {
        // console.log(id)
        if(id == ''){
            showModal('modalFacultad')
            // console.log('Agregar')
        } else{
            // console.log('Editar')
            this.setState({ idFacultad: id }, () => {
                showModal('modalFacultad')
                this.refModalFacultad.current.loadData(id)
            })
        }
    }

    openModalEspecilidad(idE){
        if(idE == ''){
            showModal('modalEspecialidad')
        } else{
            this.setState({ idEspecialidad : idE }, ()=>{
                showModal('modalEspecialidad')
            })
        }
        
    }

    async fillTableFacultad(){
        try{
            const result = await axios.get("/api/facultad/list")
            // console.log(result)
            this.setState({
                listaFacultad: result.data.result
            })
        }catch(err){
            console.log(err)
            console.log(err.response)
        }
    }


    render() {
        return (
            <>
                <ModalFacultad ref={this.refModalFacultad} title={ this.state.idFacultad == '' ? 'Registrar Facultad': 'Editar Facultad'} />
                <ModalEspecialidad ref={this.refModalEspecialidad} title={ this.state.idEspecialidad == '' ? 'Registrar Especialidad':'Editar Especialidad'}/>
                <main className="app-content">

                    <div className="app-title">
                        <h1><i className="fa fa-folder"></i> Facultad y Especialidad <small>Lista</small></h1>
                    </div>

                    <div className="tile">

                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="form-group">
                                    <button className="btn btn-primary" id="btnAgregar" title="Agregar facultad" onClick={ ()=>this.openModalFacultad(this.state.idFacultad) } >
                                        <i className="fa fa-plus"></i> Agregar
                                    </button>
                                    <button className="btn btn-secondary ml-1" id="btnReload" title="Recargar tabla Facultad" onClick={ ()=>this.fillTableFacultad() }>
                                        <i className="fa fa-refresh"></i> Recargar
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-5 col-md-12 col-sm-12">
                                <label> Facultad: <span id="lblFacultad"></span></label>
                                <div className="form-group d-flex">
                                    <div className="input-group">
                                        <input type="search" className="form-control" id="txtBuscarFacultad" placeholder="Buscar..." />
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead className="bg-primary text-white">
                                            <tr>
                                                <th className="th-porcent-5">N°</th>
                                                <th className="th-porcent-15">Nombre</th>
                                                <th className="th-porcent-5">Opción</th>
                                            </tr>
                                        </thead>
                                        <tbody id="tbListMantenimiento">
                                            {
                                                this.state.listaFacultad.length === 0 ? (
                                                    <tr>
                                                        <td className="text-center" colSpan={3}>No hay datos para mostrar</td>
                                                    </tr>
                                                ) : this.state.listaFacultad.map(  (item, index) => {
                                                    return (
                                                        <tr key={index}>
                                                                <td className="text-center">{index + 1}</td>
                                                                <td>{item.nombre}</td>
                                                                <td className="text-center">
                                                                    <span className="bg-info px-2 py-1 rounded" title="Ver especialidades" onClick={()=>console.log('Ver especialidades')}>
                                                                        <i className="text-white fa fa-external-link-square"></i>
                                                                    </span>
                                                                    <span className="ml-1 bg-warning px-2 py-1 rounded" title="Editar Facultad" onClick={ ()=>this.openModalFacultad(item.idfacultad) }>
                                                                        <i className="text-white fa fa-edit"></i>
                                                                    </span>
                                                                </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12 col-sm-12">
                                <label> Especilidad: <span id="lblEspecialidad"></span></label>
                                <div className="form-group d-flex">
                                    <div className="input-group">
                                        <input type="search" className="form-control" id="txtBuscarEspecialidad" placeholder="Buscar..." />
                                    </div>
                                    <div className="input-group-append">
                                        <button className="btn btn-success" id="btnAgregar" title="Agregar especialidad" onClick={ ()=> this.openModalEspecilidad(this.state.idEspecialidad)}>
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                    <div className="input-group-append">
                                        <button className="btn btn-secondary" id="btnAgregar" title="Recargar Tabla especialidad">
                                            <i className="fa fa-refresh"></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead className="table-header-background">
                                            <tr>
                                                <th scope="col" width="10%">N°</th>
                                                <th scope="col" width="50%">Nombre</th>
                                                <th scope="col" width="20%">Estado</th>
                                                <th scope="col" width="20%">Opciones</th>
                                            </tr>
                                        </thead>
                                        <tbody id="tbListDetalle">
                                            <tr>
                                                <td className="text-center" colSpan={4}>No hay datos para mostrar</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <label> Las opciones del detalle están en el panel de los botones.</label>
                            </div>
                        </div>

                        {/* <div className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
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

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </main>

            </>
        )
    }

}

export default Facultad