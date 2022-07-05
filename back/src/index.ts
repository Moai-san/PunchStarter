const express=require('express');
const {Pool} = require('pg');
const cors=require('cors');
const app=express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Conexion de backend con base de datos Postgres
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'pandora',
    database: 'punchstarter',
    port: '5432'
});

const Configuracion={
    server:"127.0.0.1",
    port : 3018
};
 
pool.connect(function(error:any){
    if(error){
      console.log("No se a logrado conectar con la base de datos")
      return;
    }
    console.log('Se a conectado a la base de datos postgres');
});

app.listen(Configuracion,()=>{
    console.log(`El servidor esta escuchando en ${Configuracion.server}:${Configuracion.port}`);
});



//Metodo usado para la pagina solo-admin, crea una tabla con todos los usuarios en la base de datos
app.get('/usuarios',(req:any,res:any)=>{
      pool.query("SELECT * FROM public.users ORDER BY id ASC",(req1:any,resultados:any)=>{
          console.log(resultados.rows);
          res.status(200).send(resultados.rows);
      });
});

//Metodo usado para iniciar sesion, verifica los datos con la base de datos
app.post('/LogIn', bodyParser.json(), function(request:any, response:any)
{
	let mail = request.body.mail;
	let password = request.body.password;
    console.log(mail, password);
	if (mail && password){
		pool.query("SELECT * FROM public.users WHERE mail = $1 and password = crypt($2, password)", [mail, password], async function(error:any, results:any, fields:any){
            if(results != undefined){
                response.send(results.rows[0]);
            }
            else{
                response.send(null);
            }

            response.end();
            });
	}
    else{
		response.send(JSON.stringify("Que esta pasando aqui"));
		response.end();
	}
});

//Metodo usado para el registro de usuarios
app.post('/crearUsuarios',(req:any,res:any)=>{
    let name=req.body.name;
    let surname=req.body.surname;
    let mail=req.body.mail;
    let password=req.body.password;
    let bdate=req.body.bdate;

    pool.query("INSERT INTO public.users (name, surname, mail, password, bdate) VALUES ($1,$2,$3,crypt($4, gen_salt('bf')),$5)",[name,surname,mail,password,bdate],(req1:any,resultados:any)=>{
        res.status(201).send(resultados);
    });
});

app.put('/modificarClaveUsuarios',(req:any,res:any)=>{
    let mail=req.body.mail;
    let actual_password=req.body.actual_password;
    let new_password=req.body.new_password;

    if(actual_password != new_password){
        pool.query("UPDATE public.users SET password = crypt($1, gen_salt('bf')) WHERE mail=$2",[new_password, mail],(req1:any,resultados:any)=>{
        res.status(200).send(resultados);
    });
    }
    else{
        res.send(null);
    }
});

//METODOS QUE SE TIENEN QUE IMPLEMENTAR --------------------------------------------------------------

// Desinscribir usuarios
app.delete('/eliminarUsuarios',(req:any,res:any)=>{
    let id=req.params.id;
    pool.query('DELETE FROM public.users WHERE id=$1',[id],(res1:any,resultados:any)=>{
     res.status(200).send(resultados);
    });
})