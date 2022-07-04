import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  postInicioS(datos:any):Observable<any>{
    return this.servicio.post(`${this.servidor}/LogIn`,JSON.stringify(datos), HttpOption);
  }

  putRegistroS(datos:any):Observable<any>{
    return this.servicio.put(`${this.servidor}/LogIn`,JSON.stringify(datos), HttpOption);
  }
}
