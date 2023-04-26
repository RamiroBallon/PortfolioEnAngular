import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RedSocial } from '../modelos-entidades/red-social';

@Injectable({
  providedIn: 'root'
})
export class RedSocialService {
  conexionUrl= 'http://localhost:8080/redSocial'
  constructor(private httpClient:HttpClient) { }

   //metodos
  public verRedesSociales(): Observable<RedSocial[]>{
    return this.httpClient.get<RedSocial[]>(this.conexionUrl + '/lista');
  }

  public verRedSocial(id: number): Observable<RedSocial>{
    return this.httpClient.get<RedSocial>(this.conexionUrl + '/ver/${id}');
  }

  public agregarRedSocial(redSocial: RedSocial): Observable<any>{
    return this.httpClient.post<any>(this.conexionUrl + '/crear', redSocial);
  }

  public updateRedSocial(redSocial: RedSocial): Observable<RedSocial[]>{
    return this.httpClient.put<any>(this.conexionUrl + '/editar', redSocial);
  }

  public eliminarRedSocial(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.conexionUrl + 'borrar/${id}');
  }
}
