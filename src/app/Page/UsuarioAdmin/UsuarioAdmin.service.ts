import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioAdminService {

  url = 'http://localhost/planidear/app-Biblioteca/src/app/Conexion/';

  constructor(private http: HttpClient) { }

   mostrarTodos(){

    return this.http.get(`${this.url}mostrarUsuarios.php`);

  }
  agregar(Name: any){
    return this.http.post(`${this.url}agregarUsuarios.php`, JSON.stringify(Name));

  }
  eliminar(id :number){
    return this.http.get(`${this.url}eliminarUsuarios.php?id=${id}`);
  }

  seleccionar(id :number){
    return this.http.get(`${this.url}seleccionarUsuarios.php?id=${id}`);
  }
  seleccionar1(id:number){
    return this.http.get(`${this.url}seleccionarUsuarios.php?id=${id}`);
  }
  update(Name: any){
    return this.http.post(`${this.url}updateUsuarios.php`, JSON.stringify(Name));
  }

}
