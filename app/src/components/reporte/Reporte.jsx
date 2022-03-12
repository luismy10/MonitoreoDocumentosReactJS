import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import $ from '../../assets/js/jquery-3.3.1.min';


class Reporte extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <>
                <main className="app-content">

                    <div className="app-title">
                        <h1><i className="fa fa-folder"></i> Formulario de avance</h1>
                    </div>

                    <div className="tile">

                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="form-group">
                                    <label><strong>Conclusión</strong></label>
                                    <div className="input-group">
                                        <textarea className="form-control" placeholder="Dijite la Conclusión"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-12 text-center">
                                <div className="form-group">
                                    <button type="button" className="btn btn-primary" title="Reporte"><i className="fa fa-file"></i> Generar Reporte</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </>
        )
    }
}

export default Reporte