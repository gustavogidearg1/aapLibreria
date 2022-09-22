import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibrosAdminService {

  url = 'http://localhost/planidear/app-Biblioteca/src/app/Conexion/';


  constructor(private http: HttpClient) { }

   mostrarTodos(){

    return this.http.get(`${this.url}mostrarTodos.php`);

  }
  agregar(Titul: any){
    return this.http.post(`${this.url}agregar.php`, JSON.stringify(Titul));

  }
  eliminar(id :number){
    return this.http.get(`${this.url}eliminar.php?id=${id}`);
  }

  seleccionar(id :number){
    return this.http.get(`${this.url}seleccionar.php?id=${id}`);
  }
  update(Titul: any){
    return this.http.post(`${this.url}update.php`, JSON.stringify(Titul));
  }

}
