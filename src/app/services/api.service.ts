import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Oceanos } from '../interfaces/oceanos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://fiap-3sis-gs-20241.azurewebsites.net';

  constructor(private http: HttpClient) { }

  getDados(): Observable<Oceanos[]> {
    return this.http.get<Oceanos[]>(this.apiUrl);
  }
}
