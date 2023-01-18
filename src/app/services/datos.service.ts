import { Injectable } from '@angular/core';
//suscribirse a los datos y que reciba respuesta asincrona
import { Observable } from 'rxjs';
//Hacer peticiones y CRUD
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
//datosJson = alias
  constructor(private datosJson:HttpClient) { }

  //metodo Observable que devuelve datos
  getDatos():Observable<any>{
    //retorno de datos utilizando el método de get ed HttpClient que llama a la base de datos JSON o a una URL
    return this.datosJson.get('./assets/JSON/db.json');
    //aca podria poner un callback para ver la opcion de problema de conexion del servidor
  }
}
