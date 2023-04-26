import { HttpClient } from '@angular/common/http';
//suscribirse a los datos y que reciba respuesta asincrona
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
//Hacer peticiones y CRUD
import { Injectable } from '@angular/core';
import { Experiencia } from '../modelos-entidades/experiencia';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private eliminacionSubject = new Subject<number>(); // creamos el Subject
  conexionUrl= 'http://localhost:8080/experiencia'  //trae los metodos de loca host 8080 oesa del backend
  constructor(private httpClient:HttpClient) { }

  //metodos del controller

  //trae la lista array de experiencias  get
  public verExperiencias(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.conexionUrl + '/lista');
  }
  //trae una experienca segun id get
  public verExperiencia(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.conexionUrl + `/ver/${id}`); //los id<(es dinamico) van con acento grave " ` "
  }
  //agrega/crear experiencias post
  public agregarExperiencia(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.conexionUrl + '/crear', experiencia);
  }
  //modifica experiencias put
  public updateExperiencia(experiencia: Experiencia): Observable<Experiencia[]>{
    return this.httpClient.put<any>(this.conexionUrl + '/editar', experiencia);
  }
  //borrar experiencias segun id delete
  public eliminarExperiencia(id: number): Observable<any>{
    return this.httpClient.delete<any>(`${this.conexionUrl}/borrar/${id}`)
    .pipe(
      tap(() => {
        this.eliminacionSubject.next(id); // notificar a los suscriptores que se eliminó una experiencia con este id
      })
    );
  }

// public getEliminacionSubject(): Subject<number> {
//   return this.eliminacionSubject; // devolver el Subject para que los componentes puedan suscribirse a él
// }

}

