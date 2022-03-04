import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Usuario extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <>
                <main className="app-content">

                    <div className="tile mb-4">

                        {/* titulo */}
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="form-group">
                                    <h4> USUARIOS</h4>
                                </div>
                            </div>
                        </div>

                        {/* buscar */}

                        <div className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <div className="dataTables_length" id="sampleTable_length">
                                        <label>Show <select name="sampleTable_length" aria-controls="sampleTable" className="form-control">
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select> entries</label>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div id="sampleTable_filter" className="dataTables_filter">
                                        <label>Search:
                                            <input type="search" className="form-control" placeholder="" aria-controls="sampleTable" />
                                            <button type="button" className="btn btn-secondary btn-flat">holdReady</button>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <table className="table table-hover table-bordered" role="grid" aria-describedby="sampleTable_info">
                                    <thead>
                                        <tr>
                                            <th>Sample</th>
                                            <th>Sample</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Sample 1 </td>
                                            <td>Sample 2</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </main>

            </>
        );
    }

}



export default Usuario;