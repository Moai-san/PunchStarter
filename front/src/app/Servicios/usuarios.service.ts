import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const HttpOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  servidor="http://127.0.0.1:3018";

  constructor(private servicio:HttpClient) { }

  ConsultarUsuarios():Observable<any>{
    return this.servicio.get(`${this.servidor}/usuarios`);
  }

  EliminarUsuarios(id:string):Observable<any>{
    return this.servicio.delete(`${this.servidor}/eliminarUsuarios/${id}`, HttpOption);
  }

  CambiarContraseña(datos:any):Observable<any>{
    return this.servicio.put(`${this.servidor}/modificarClaveUsuarios`,JSON.stringify(datos), HttpOption);
  }

  postInicioS(datos:any):Observable<any>{
    return this.servicio.post(`${this.servidor}/LogIn`,JSON.stringify(datos), HttpOption);
  }

  putRegistroS(datos:any):Observable<any>{
    return this.servicio.post(`${this.servidor}/crearUsuarios`,JSON.stringify(datos), HttpOption);
  }
}
