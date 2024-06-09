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

  private apiUrl = 'https://fiap-3sis-gs-20241.azurewebsites.net/OceanData';

  constructor(private http: HttpClient) {}

  getOceanos(filters?: any, page: number = 1, pageSize: number = 20): Observable<any[]> {
    let url = this.apiUrl;

    if (filters) {
      const params = new URLSearchParams();

      if (filters.regiao) {
        params.append('regiao', filters.regiao);
      }
      if (filters.especies) {
        params.append('especies', filters.especies);
      }
      if (filters.statusConservacao) {
        params.append('statusConservacao', filters.statusConservacao);
      }
      if (filters.nivelPoluicao) {
        params.append('nivelPoluicao', filters.nivelPoluicao);
      }
      if (filters.temperaturaAgua) {
        params.append('temperaturaAgua', filters.temperaturaAgua);
      }
      if (filters.pH) {
        params.append('pH', filters.pH);
      }

      params.append('pagina', page.toString());
      params.append('qtde', pageSize.toString());

      url += `?${params.toString()}`;
    }

    return this.http.get<any[]>(url);
  }
}

