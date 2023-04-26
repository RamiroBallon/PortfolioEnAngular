import { HttpClient } from '@angular/common/http';
//suscribirse a los datos y que reciba respuesta asincrona
import { Observable } from 'rxjs';
//Hacer peticiones y CRUD
import { Injectable } from '@angular/core';
import { Contacto } from '../modelos-entidades/contacto';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  conexionUrl= 'http://localhost:8080/contacto'
  constructor(private httpClient:HttpClient) { }

    //metodos
    public verContactos(): Observable<Contacto[]>{
      return this.httpClient.get<Contacto[]>(this.conexionUrl + '/lista');
    }
  
    public verContacto(id: number): Observable<Contacto>{
      return this.httpClient.get<Contacto>(this.conexionUrl + '/ver/${id}');
    }
  
    public agregarContacto(contacto: Contacto): Observable<any>{
      return this.httpClient.post<any>(this.conexionUrl + '/crear', contacto);
    }
  
    public updateContacto(contacto: Contacto): Observable<Contacto[]>{
      return this.httpClient.put<any>(this.conexionUrl + '/editar', contacto);
    }
  
    public eliminarContacto(id: number): Observable<any>{
      return this.httpClient.delete<any>(this.conexionUrl + 'borrar/${id}');
    }
}
