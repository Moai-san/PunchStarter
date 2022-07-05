import {Component} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UsuariosService } from '../Servicios/usuarios.service';
import { loginVars } from "../Login/loginVars";


@Component(
{
    templateUrl: './cambioClave.html',
    styleUrls: ['./cambioClave.scss']

})

export class cambioClave
{
    formularioCambioClave:FormGroup;
    
    constructor(public formL:FormBuilder, public backEnd:UsuariosService){
        this.formularioCambioClave=this.formL.group({
            actual_password: "",
            new_password: ""
        })
    }

    public changeOnSubmit(){
        this.backEnd.CambiarContraseña({
          "mail":loginVars.getMail(loginVars.getSessionID()),
          "actual_password":this.formularioCambioClave.get("actual_password")?.value,
          "new_password":this.formularioCambioClave.get("new_password")?.value
        }).subscribe(respuesta=>{
          if(respuesta != null){

          }else{
            window.alert("La contraseña es la misma, intente usar otra")
          }
        });
    }
}