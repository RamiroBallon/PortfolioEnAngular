import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Skill } from '../modelos-entidades/skill';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private eliminacionSubject = new Subject<number>(); // creamos el Subject
  conexionUrl= 'http://localhost:8080/skill'
  constructor(private httpClient:HttpClient) { }

   //metodos
  public verSkills(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.conexionUrl + '/lista');
  }

  public verSkill(id: number): Observable<Skill>{
    return this.httpClient.get<Skill>(this.conexionUrl + '/ver/${id}');
  }

  public agregarSkill(skill: Skill): Observable<any>{
    return this.httpClient.post<any>(this.conexionUrl + '/crear', skill);
  }

  public updateSkill(skill: Skill): Observable<Skill[]>{
    return this.httpClient.put<any>(this.conexionUrl + '/editar', skill);
  }

  // public eliminarSkill(id: number): Observable<any>{
  //   return this.httpClient.delete<any>(this.conexionUrl + 'borrar/${id}');
  // }

  //borrar experiencias segun id delete
  public eliminarSkill(id: number): Observable<any>{
    return this.httpClient.delete<any>(`${this.conexionUrl}/borrar/${id}`)
    .pipe(
      tap(() => {
        this.eliminacionSubject.next(id); // notificar a los suscriptores que se eliminó una experiencia con este id
      })
    );
  }
}

