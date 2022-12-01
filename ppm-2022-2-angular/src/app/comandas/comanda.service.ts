import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comanda } from './comanda.interface';

@Injectable({
  providedIn: 'root',
})
export class ComandaService {
  constructor(private http: HttpClient) { }

  getComanda(id: number): Observable<Comanda> {
    return this.http.get<Comanda>(`${environment.apiUrl}/comanda/${id}`);
  }

  getComandas(): Observable<Comanda[]> {
    return this.http.get<Comanda[]>(`${environment.apiUrl}/comanda`);
  }

  save(comanda: Comanda): Observable<Comanda> {
    return this.http.post<Comanda>(`${environment.apiUrl}/comanda`, comanda);
  }


  update(comanda: Comanda): Observable<Comanda> {
    return this.http.put<Comanda>(`${environment.apiUrl}/comanda/${comanda.id}`, comanda);
  }

  remove({ id }: Comanda): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/comanda/${id}`);
  }
}