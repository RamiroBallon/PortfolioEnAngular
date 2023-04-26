import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../modelos-entidades/persona';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  conexionUrl= 'http://localhost:8080/persona'
  constructor(private httpClient:HttpClient) { }

   //METODOS
   
  public verPersonas(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.conexionUrl + '/lista');
  }

  public verPersona(id: number): Observable<Persona>{
    return this.httpClient.get<Persona>(this.conexionUrl + '/ver/${id}');
  }

  public agregarPersona(persona: Persona): Observable<any>{
    return this.httpClient.post<any>(this.conexionUrl + '/crear', persona);
  }

  public updatePersona(persona: Persona): Observable<Persona[]>{
    return this.httpClient.put<any>(this.conexionUrl + '/editar', persona);
  }

  public eliminarPersona(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.conexionUrl + 'borrar/${id}');
  }
}
