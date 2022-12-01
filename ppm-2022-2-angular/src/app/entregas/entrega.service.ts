import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Entrega } from './entrega.interface';

@Injectable({
  providedIn: 'root',
})
export class EntregaService {
  constructor(private http: HttpClient) { }

  getEntrega(id: number): Observable<Entrega> {
    return this.http.get<Entrega>(`${environment.apiUrl}/entrega/${id}`);
  }

  getEntregas(): Observable<Entrega[]> {
    return this.http.get<Entrega[]>(`${environment.apiUrl}/entrega`);
  }

  save(entrega: Entrega): Observable<Entrega> {
    return this.http.post<Entrega>(`${environment.apiUrl}/entrega`, entrega);
  }


  update(entrega: Entrega): Observable<Entrega> {
    return this.http.put<Entrega>(`${environment.apiUrl}/entrega/${entrega.id}`, entrega);
  }

  remove({ id }: Entrega): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/entrega/${id}`);
  }
}
