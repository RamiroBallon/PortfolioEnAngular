import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Estudio } from '../modelos-entidades/estudio';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {
  private eliminacionSubject = new Subject<number>(); // creamos el Subject
  conexionUrl= 'http://localhost:8080/estudio'
  constructor(private httpClient:HttpClient) { }

    //metodos
    public verEstudios(): Observable<Estudio[]>{
      return this.httpClient.get<Estudio[]>(this.conexionUrl + '/lista');
    }
  
    public verEstudio(id: number): Observable<Estudio>{
      return this.httpClient.get<Estudio>(this.conexionUrl + '/ver/${id}');
    }
  
    public agregarEstudio(estudio: Estudio): Observable<any>{
      return this.httpClient.post<any>(this.conexionUrl + '/crear', estudio);
    }
  
    public updateEstudio(estudio: Estudio): Observable<Estudio[]>{
      return this.httpClient.put<any>(this.conexionUrl + '/editar', estudio);
    }
  
    // public eliminarEstudio(id: number): Observable<any>{
    //   return this.httpClient.delete<any>(this.conexionUrl + 'borrar/${id}');
    // }

      //borrar experiencias segun id delete
  public eliminarEstudio(id: number): Observable<any>{
    return this.httpClient.delete<any>(`${this.conexionUrl}/borrar/${id}`)
    .pipe(
      tap(() => {
        this.eliminacionSubject.next(id); // notificar a los suscriptores que se eliminó una experiencia con este id
      })
    );
}
}
