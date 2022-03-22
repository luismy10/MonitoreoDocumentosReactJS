const express = require('express');
const router = express.Router();
const conexion = require('../database/Conexion');

router.get('/login', async function (req, res) {

    const conec = new conexion();
    try {

        let result = await conec.query('select * from usuario where correo = ? and clave = ?', [
            req.query.correo,
            req.query.clave
        ]);

        if (result.length > 0) {
            res.status(200).send(result[0]);
            // console.log('1')
        } else {
            res.status(400).send("Datos no encontrados");
            // console.log('2')
        }
    } catch (error) {
        console.log(error)
        res.status(500).send("Error interno de conexión, intente nuevamente.");
    }
});


router.get('/list', async function (req, res) {
    const conec = new conexion();
    console.log(req.query)
    try {
        let lista = await conec.query(`select idusuario, apellidos, nombres, correo, clave from usuario 
        where 
        ? = 0
        or
        ? = 1 and apellidos like concat(?,'%') 
        or 
        ? = 1 and nombres like concat(?,'%') 
        or
        ? = 1 and correo like concat(?,'%') 
        limit ?, ?`, [
            parseInt(req.query.opcion),

            parseInt(req.query.opcion),
            req.query.buscar,

            parseInt(req.query.opcion),
            req.query.buscar,

            parseInt(req.query.opcion),
            req.query.buscar,

            parseInt(req.query.posicionPagina),
            parseInt(req.query.filasPorPagina)
        ]);

        let resultLista = lista.map(function (item, index) {
            return {
                ...item,
                id: (index + 1) + parseInt(req.query.posicionPagina),
            };
        });

        let total = await conec.query('SELECT COUNT(*) AS Total FROM usuario');

        res.status(200).send({ "result": resultLista, "total": total[0].Total });
    } catch (error) {
        res.status(500).send(error);
    }
})


router.post('/add', async function (req, res) {

    const conec = new conexion();
    let connection = null;
    try {
        connection = await conec.beginTransaction()

        await conec.execute(connection, 'insert into usuario(apellidos, nombres, correo, clave) values (?,?,?,?)', [
            req.body.apellidos,
            req.body.nombres,
            req.body.correo,
            req.body.clave
        ])

        await conec.commit(connection)

        res.status(200).send("datos insertados correctamente");

    } catch (error) {
        // console.log(error);
        if (connection != null) {
            conec.rollback(connection);
        }
        res.status(500).send(error);
    }

});


router.post('/update', async function (req, res) {
    const conec = new conexion();
    let connection = null;
    try {
        connection = await conec.beginTransaction();
        await conec.execute(connection, 'update usuario set apellidos=?, nombres=?, correo=?, clave=? where idusuario=?', [
            req.body.apellidos,
            req.body.nombres,
            req.body.correo,
            req.body.clave,
            req.body.idusuario
        ])

        await conec.commit(connection);
        res.status(200).send('Datos actulizados correctamente');
    } catch (error) {
        if (connection != null) {
            conec.rollback(connection);
        }
        res.status(500).send(error);
    }
})


router.get('/id', async function (req, res) {
    const conec = new conexion();
    try {
        let result = await conec.query('select * from usuario where idusuario = ?', [
            req.query.idusuario,
        ]);

        if (result.length > 0) {
            res.status(200).send(result[0]);
        } else {
            res.status(400).send("Datos no encontrados");
        }

    } catch (error) {
        res.status(500).send("Error interno de conexión, intente nuevamente.");
    }

});


router.get('/add', async function (req, res) {

    const conec = new conexion();
    let connection = null;
    try {

        connection = await conec.beginTransaction();
        await conec.execute(connection, 'insert into usuario(apellidos, nombres, correo, clave) values (?,?,?,?)', [
            req.body.apellidos,
            req.body.nombres,
            req.body.correo,
            req.body.clave
        ]);

        // await conec.execute(connection, 'insert into datos(nombref) values (?)', [
        //     "nombre ssdasd"
        // ]);

        await conec.commit(connection);

        res.status(200).send({ "message": "ok" });
    } catch (error) {
        // console.log(error);
        if (connection != null) {
            conec.rollback(connection);
        }
        res.status(500).send(error);
    }
});


router.get('/:id/:name', async function (req, res) {
    // var pool = mysql.createPool({
    //     host: 'localhost',
    //     user: 'root',
    //     password: '',
    //     database: 'tramite-documento'
    // });

    console.log(req.params)
    console.log(req.body)
    console.log(req.query)

    try {
        // let result = await promise;
        res.status(200).send({ "message": "OK" });
    } catch (error) {
        res.status(500).send({ "message": error });
    }
});

router.post('/', async function (req, res) {

    try {
        // let result = await promise;
        res.status(201).send({ "message": "" });
    } catch (error) {
        console.error(error)
        res.status(500).send({ "message": error });
    }
});


module.exports = router;