import {Component} from '@angular/core';
import { UserLogin } from "./userLogin";
import { UserRegister } from "./userRegister";
import usersData from '../../assets/users.json';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UsuariosService } from '../Servicios/usuarios.service';

interface User {  
    name: String;
    surname: String;
    mail: String;
    password: String;
    bDate: String;
}

@Component(
{
    templateUrl: './login.html',
    styleUrls: ['./login.scss']

})
export class login
{
    formularioLogIn: FormGroup;
    loginModel = new UserLogin('', '');
    users: User[] = usersData;
    usuarioIngresado:boolean = false;

    constructor(public formL:FormBuilder, public backEnd:UsuariosService){
        this.formularioLogIn=this.formL.group({
            mail: "",
            password: ""
        })
    }

    loginsubmitted = false;

    public loginOnSubmit(){
        
        this.backEnd.postInicioS({          
          "mail":this.formularioLogIn.get("mail")?.value,
          "password":this.formularioLogIn.get("password")?.value
        }).subscribe(respuesta=>{
          //console.log(respuesta[0].rut);
          if(respuesta != "F"){
           this.setSesionIniciada(true); 
          }else{
            window.alert("Verifique sus datos nuevamente o en su defecto verifique que usted pueda votar")
          }
        });
    }
    public setSesionIniciada(valor:boolean)
    {
      this.usuarioIngresado = valor;
    }
    public getSesionIniciada(){
      return this.usuarioIngresado;
    }






    registerModel = new UserRegister('', '', '', '', '');
    registersubmitted = false;
    registerOnSubmit() { this.registersubmitted = true; }
}