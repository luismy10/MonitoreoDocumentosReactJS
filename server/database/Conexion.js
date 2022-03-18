const mysql = require('mysql');

class Conextion {

    constructor() {
        this.pool = mysql.createPool({
            host: 'localhost',
            user: 'root',
            port: '3306',
            password: '',
            database: 'tramite-documento'
        });
    }

    query(slq, param = []) {
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err, connection) => {
                if (err) return reject(err.sqlMessage);
                connection.query(slq, param, (err, result) => {
                    if (err) return reject(err.sqlMessage);
                    connection.release();
                    return resolve(result);
                });
            });
        });
    }

    beginTransaction() {
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err, connection) => {
                if (err) {
                    return reject(err.sqlMessage);
                }

                connection.beginTransaction(function (err) {
                    if (err) {
                        return reject(err.sqlMessage);
                    }

                    return resolve(connection)
                });
            });
        });
    }

    execute(connection, slq, param = []) {
        return new Promise((resolve, reject) => {
            connection.query(slq, param, (err, result) => {
                if (err) return reject(err.sqlMessage);
                return resolve(result);
            });
        });
    }

    commit(connection) {
        return new Promise((resolve, reject) => {
            connection.commit((err) => {
                if (err) {
                    return connection.rollback((err) => {
                        reject(err.sqlMessage);
                    });
                };

                connection.release();
                return resolve();
            });
        });
    }

    rollback(connection) {
        return new Promise((resolve, reject) => {
            connection.rollback((err) => {
                if (err) {
                    return reject(err.sqlMessage);                    
                }

                connection.release();
                return resolve();
            });            
        });
    }

}


module.exports = Conextion;