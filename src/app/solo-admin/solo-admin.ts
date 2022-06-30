import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../Servicios/usuarios.service";
import { Usuarios } from '../Interfaces/usuarios';

@Component({
  templateUrl: './solo-admin.html',
  styleUrls: ['./solo-admin.scss']
})
export class SoloAdminComponent implements OnInit {

  usuarios:Array<Usuarios> = [];
  
  constructor(private servicioUsuarios:UsuariosService) { }

  ngOnInit(): void {
    this.servicioUsuarios.ConsultarUsuarios().subscribe(datos=>{
      for(let i=0; i<datos.length; i++){
        this.usuarios.push(datos[i]);
      }

      console.log(datos);
    });
  }

}
