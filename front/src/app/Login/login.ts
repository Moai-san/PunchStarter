import {Component} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UsuariosService } from '../Servicios/usuarios.service';
import { loginVars } from './loginVars'


@Component(
{
    templateUrl: './login.html',
    styleUrls: ['./login.scss']

})

export class login
{
    formularioLogIn: FormGroup;
    formularioRegister: FormGroup;
    
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
            loginVars.setIsAdmin(respuesta.isAdmin);
            loginVars.setIsLogged(true); 
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
            loginVars.setIsAdmin(false);
            loginVars.setIsLogged(true); 
          }else{
            window.alert("Datos incorrectos, verifique los datos de registro")
          }
        });
    }

    public getSesionIniciada()
    {
      return (loginVars.getIsLogged());
    }

}