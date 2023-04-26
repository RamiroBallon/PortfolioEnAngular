import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Proyecto } from '../modelos-entidades/proyecto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private eliminacionSubject = new Subject<number>(); // creamos el Subject
  conexionUrl= 'http://localhost:8080/proyecto'
  constructor(private httpClient:HttpClient) { }

   //metodos
   public verProyectos(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.conexionUrl + '/lista');
  }

  public verProyecto(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.conexionUrl + `/ver/${id}`);
  }

  public agregarProyecto(proyecto: Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.conexionUrl + '/crear', proyecto);
  }

  public updateProyecto(proyecto: Proyecto): Observable<Proyecto[]>{
    return this.httpClient.put<any>(this.conexionUrl + '/editar', proyecto);
  }

  // public eliminarProyecto(id: number): Observable<any>{
  //   return this.httpClient.delete<any>(this.conexionUrl + `borrar/${id}`);
  // }

   //borrar proyectos segun id delete
   public eliminarProyecto(id: number): Observable<any>{
    return this.httpClient.delete<any>(`${this.conexionUrl}/borrar/${id}`)
    .pipe(
      tap(() => {
        this.eliminacionSubject.next(id); // notificar a los suscriptores que se eliminó una experiencia con este id
      })
    );
}
}
