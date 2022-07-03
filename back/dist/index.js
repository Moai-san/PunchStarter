const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
// Conexion de backend con base de datos Postgres
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '5440',
    database: 'punchstarter',
    port: '5432'
});
const Configuracion = {
    server: "127.0.0.1",
    port: 3018
};
pool.connect(function (error) {
    if (error) {
        console.log("no se logro conectar");
        return;
    }
    console.log('conectado a postgres');
});
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//
//
//
//  REVISAR TODO LO DE ABAJO, FALTA AGREGAR METODOS CRUD
//
//
//
//
//métodos CRUD=Create ==post, Read==get, Update==put, Delete==delete
app.get('/', (req, res) => {
    res.send("hola mundo");
});
app.get('/usuarios', (req, res) => {
    pool.query("SELECT * FROM public.users", (req1, resultados) => {
        console.log("resultados");
        //res.send(resultados);
        res.status(200).send(resultados);
    });
});
app.get('/usuarios/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
    pool.query("SELECT * FROM public.users WHERE id=?", id, (req1, resultados) => {
        res.status(200).send(resultados);
    });
});
//insertar [nombre ,correoelectronico,clave]
app.post('/crearUsuarios', (req, res) => {
    let nombre = req.body.nombre;
    let correoeletronico = req.body.correoelectronico;
    let clave = req.body.clave;
    console.log(nombre);
    pool.query("INSERT INTO usuarios(nombre,correo_electronico,contrasena)VALUES('" + nombre + "','" + correoeletronico + "','" + clave + "')", (req1, resultados) => {
        res.status(201).send(`Usuario creado con el id:${resultados.insertId}`);
        //console.log(resultados);
    });
});
/*
app.put('/modificarusuario/:idUsuario',(req:any,res:any)=>{
     let id=req.params.idUsuario;
     let nombre=req.body.nombre;
     
     connection.query("UPDATE usuarios SET nombre=? WHERE id=?",[nombre,id],(req1:any,resultados:any)=>{
         res.status(200).send("OK actualizado");
     });
});
*/
app.put('/modificarusuario', (req, res) => {
    let id = req.body.idUsuario;
    let nombre = req.body.nombre;
    pool.query("UPDATE usuarios SET nombre=? WHERE id=?", [nombre, id], (req1, resultados) => {
        res.status(200).send("OK actualizado");
    });
});
app.delete('/borrar/:id', (req, res) => {
    let id = req.params.id;
    pool.query('DELETE FROM usuarios WHERE id=?', id, (res1, resultados) => {
        res.status(200).send("dato eliminado");
    });
});
app.listen(Configuracion, () => {
    console.log(`servidor escuchando ${Configuracion.server}:${Configuracion.port}`);
});
//# sourceMappingURL=index.js.map