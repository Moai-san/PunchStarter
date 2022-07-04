import {Component, Output} from '@angular/core';
import { UserLogin } from "./userLogin";
import { UserRegister } from "./userRegister";
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UsuariosService } from '../Servicios/usuarios.service';

interface User {  
    name: String;
    surname: String;
    mail: String;
    password: String;
    bDate: String;
    isAdmin: Boolean;
}

@Component(
{
    templateUrl: './login.html',
    styleUrls: ['./login.scss']

})
export class login
{
    formularioLogIn: FormGroup;
    formularioRegister: FormGroup;
    loginModel = new UserLogin('', '');
    registerModel = new UserRegister('', '', '', '', '');
    usuarioIngresado:boolean = false;
    static isAdmin:boolean = false;

    constructor(public formL:FormBuilder, public backEnd:UsuariosService){
        this.formularioLogIn=this.formL.group({
            mail: "",
            password: ""
        })

        this.formularioRegister=this.formL.group({
          name: "",
          surname: "",
          mail: "",
          password: "",
          bdate: "",
      })
    }

    public loginOnSubmit(){
        this.backEnd.postInicioS({          
          "mail":this.formularioLogIn.get("mail")?.value,
          "password":this.formularioLogIn.get("password")?.value
        }).subscribe(respuesta=>{
          if(respuesta != null){
            login.isAdmin = respuesta.isAdmin;
            this.setSesionIniciada(true); 
          }else{
            window.alert("Datos incorrectos, verifique su correo o contraseña")
          }
        });
    }

    public registerOnSubmit(){
        this.backEnd.putRegistroS({
          "name":this.formularioRegister.get("name")?.value,
          "surname":this.formularioRegister.get("surname")?.value,
          "mail":this.formularioRegister.get("mail")?.value,
          "password":this.formularioRegister.get("password")?.value,
          "bdate":this.formularioRegister.get("bdate")?.value
        }).subscribe(respuesta=>{
          if(respuesta != null){
            login.isAdmin = false;
            this.setSesionIniciada(true); 
          }else{
            window.alert("Datos incorrectos, verifique los datos de registro")
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

    public userIsAdmin(){
      return login.isAdmin;
    }

}

export function userIsAdmin() {return login.isAdmin;}