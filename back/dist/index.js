var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
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
        console.log("No se a logrado conectar con la base de datos");
        return;
    }
    console.log('Se a conectado a la base de datos postgres');
});
app.listen(Configuracion, () => {
    console.log(`El servidor esta escuchando en ${Configuracion.server}:${Configuracion.port}`);
});
//Metodo usado para la pagina solo-admin, crea una tabla con todos los usuarios en la base de datos
app.get('/usuarios', (req, res) => {
    pool.query("SELECT * FROM public.users ORDER BY id ASC", (req1, resultados) => {
        console.log(resultados.rows);
        res.status(200).send(resultados.rows);
    });
});
//Metodo usado para iniciar sesion, verifica los datos con la base de datos
app.post('/LogIn', bodyParser.json(), function (request, response) {
    let mail = request.body.mail;
    let password = request.body.password;
    if (mail && password) {
        pool.query("SELECT * FROM public.users WHERE mail = $1 and password = crypt($2, password)", [mail, password], function (error, results, fields) {
            return __awaiter(this, void 0, void 0, function* () {
                if (results != undefined) {
                    response.send(results.rows[0]);
                }
                else {
                    response.send(null);
                }
                response.end();
            });
        });
    }
    else {
        response.send(JSON.stringify("Que esta pasando aqui"));
        response.end();
    }
});
//Metodo usado para el registro de usuarios
app.post('/crearUsuarios', (req, res) => {
    let name = req.body.name;
    let surname = req.body.surname;
    let mail = req.body.mail;
    let password = req.body.password;
    let bdate = req.body.bdate;
    pool.query("INSERT INTO public.users (name, surname, mail, password, bdate) VALUES ($1,$2,$3,crypt($4, gen_salt('bf')),$5)", [name, surname, mail, password, bdate], (req1, resultados) => {
        res.status(201).send(resultados);
    });
});
app.put('/modificarClaveUsuarios', (req, res) => {
    let mail = req.body.mail;
    let actual_password = req.body.actual_password;
    let new_password = req.body.new_password;
    if (actual_password != new_password) {
        pool.query("UPDATE public.users SET password = crypt($1, gen_salt('bf')) WHERE mail=$2", [new_password, mail], (req1, resultados) => {
            res.status(200).send(resultados);
        });
    }
    else {
        res.send(null);
    }
});
app.delete('/eliminarUsuarios/:id', (req, res) => {
    let id = req.params.id;
    pool.query('DELETE FROM public.users WHERE id=$1', [id], (res1, resultados) => {
        res.status(200).send(resultados);
    });
});
//# sourceMappingURL=index.js.map