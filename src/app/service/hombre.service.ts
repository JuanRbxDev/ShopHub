import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Hombre } from '../interface/hombre';

@Injectable({
  providedIn: 'root'
})
export class HombreService {

  private ApiUrlHombre = 'http://localhost:9090/shophub/hombre';

  constructor(private http: HttpClient) { }

  getHombres(): Observable<Hombre[]> {
    return this.http.get<Hombre[]>(this.ApiUrlHombre);
  }

  createHombre(hombre: Hombre): Observable<Hombre> {
    return this.http.post<Hombre>(`${this.ApiUrlHombre}/new`, hombre);
  }


  getHombreById(id: string): Observable<Hombre> {
    return this.http.get<Hombre>(`${this.ApiUrlHombre}/${id}`);
}



}
