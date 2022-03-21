const express = require('express');
const router = express.Router();
const conexion = require('../database/Conexion');

router.get('/list', async function (req, res) {
    const conec = new conexion();

    try {
        let lista = await conec.query('select * from facultad')
        // if(lista.length > 0){
        res.status(200).send({"result":lista})
        // } else {
        //     res.status(400).send("Datos no encontrados")
        // }
        
    } catch (err) {
        res.status(500).send(err)
        console.log(err)
    }
});

router.post('/add', async function (req, res){
    const conec =  new conexion()
    let connection = null;
    try{
        connection = await conec.beginTransaction();
        await conec.execute(connection, 'insert into facultad (nombre, estado, descripcion) values (?,?,?)', [
            req.body.nombre,
            req.body.estado,
            req.body.descripcion
        ])

        await conec.commit(connection);
        res.status(200).send({ "message": "ok" })
        
    } catch (err) {
        if(connection != null){
            conec.rollback(connection);
        }
        res.status(500).send(connection);
    }
});

router.post('/update', async function(req, res) {
    const conec = new conexion();
    let connection = null;

    try{

        connection = await conec.beginTransaction();
        await conec.execute(connection, 'update facultad set nombre=?, estado=?, descripcion=? where idfacultad=?', [
            req.body.nombre,
            req.body.estado,
            req.body.descripcion,
            req.body.idfacultad,
        ])

        await conec.commit(connection)

        res.status(200).send('Datos actulizados correctamente')
        // console.log(req.body)

    }catch (error) {
        if (connection != null) {
            conec.rollback(connection);
            
        }
        res.status(500).send(error);
        // console.log(error)
    }
})

router.get('/id', async function(req, res) {
    const conec = new conexion(); 
    try{
        let result = await conec.query('select * from facultad where idfacultad = ?',[
            req.query.idfacultad,
        ]);

        if(result.length > 0){
            res.status(200).send(result[0]);
        }else{
            res.status(400).send( "Datos no encontrados" );
        } 

    } catch(error){
        res.status(500).send("Error interno de conexión, intente nuevamente.");
    }
    
});

module.exports = router;
