import { HttpClient, HttpParams, provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, Injectable, mergeApplicationConfig } from '@angular/core';
import { Observable } from 'rxjs';
import { Oceanos } from '../interfaces/oceanos';
import { appConfig } from '../app.config';

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

const serverConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()), // Adicione withFetch() aqui
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
