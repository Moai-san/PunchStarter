import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UsuariosService } from "../Servicios/usuarios.service";
import { Usuarios } from '../Interfaces/usuarios';
import { HttpParams } from '@angular/common/http';

@Component({
  templateUrl: './solo-admin.html',
  styleUrls: ['./solo-admin.scss']
})

export class SoloAdminComponent implements OnInit {
  usuarios:Array<Usuarios> =[];
  formularioDelete: FormGroup;

  constructor(public formL:FormBuilder, private servicioUsuarios:UsuariosService) {
    this.formularioDelete=this.formL.group({
      id: ""
    })
   }


   ngOnInit(): void {
    this.servicioUsuarios.ConsultarUsuarios().subscribe(datos=>{
      for(let i=0; i<datos.length; i++){
        this.usuarios.push(datos[i]);
      }
    });
  }

  public deleteUser(){
    let id = new HttpParams();
    id.set("id", this.formularioDelete.get("id")?.value);
    this.servicioUsuarios.EliminarUsuarios(
      this.formularioDelete.get("id")?.value
    ).subscribe(respuesta=>{
      if(respuesta != false){
        window.location.reload();
      }else{
        window.alert("El usuario no se pudo eliminar, compruebe la id del usuario")
      }
    });

  }


}
