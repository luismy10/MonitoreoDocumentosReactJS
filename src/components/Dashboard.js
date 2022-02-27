import React from 'react';


class Dashboard extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <main className="app-content">
                <div className="tile mb-4">

                    <div className="overlay" id="divOverlayIndex">
                        <div className="m-loader mr-4">
                            <svg className="m-circular" viewBox="25 25 50 50">
                                <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeMiterlimit="10">
                                </circle>
                            </svg>
                        </div>
                        <h4 className="l-text text-white" id="lblTextOverlayIndex">Cargando información...</h4>
                    </div>

                    <div className="tile-body">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="card mb-3 text-white bg-primary">
                                    <div className="card-body">
                                        <h3 id="lblTotalVentas" className="text-white">S/ 0.00</h3>
                                        <p className="m-0">VENTAS DEL DÍA</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="card mb-3 text-white bg-danger">
                                    <div className="card-body">
                                        <h3 id="lblTotalCompras" className="text-white">S/ 0.00</h3>
                                        <p className="m-0">COMPRAS DEL DÍA</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="card mb-3 text-white bg-warning">
                                    <div className="card-body">
                                        <h3 id="lblTotalCuentasPorCobrar" className="text-white">0</h3>
                                        <p className="m-0">CUENTAS POR COBRAR</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="card mb-3 text-white bg-success">
                                    <div className="card-body">
                                        <h3 id="lblTotalCuentasPorPagar" className="text-white">0</h3>
                                        <p className="m-0">CUENTAS POR PAGAR</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </main>
        );
    }

}

export default Dashboard;