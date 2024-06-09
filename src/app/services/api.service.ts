import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Oceanos } from '../interfaces/oceanos';
import { Especie } from '../interfaces/especies';
import { ProjetoConservacao } from '../interfaces/projetos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://fiap-3sis-gs-20241.azurewebsites.net/OceanData' 

  constructor(private http: HttpClient) {}

  getOceanos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?oceanos`);
  }

  getEspecies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?especie`);
  }

  getStatusConservacao(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?statusConservacao`);
  }
}

