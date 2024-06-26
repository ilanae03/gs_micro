import { ApplicationConfig, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { provideHttpClient, withFetch } from '@angular/common/http';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;

const serverConfig: ApplicationConfig = {
    providers: [
      provideHttpClient(withFetch()), // Adicione withFetch() aqui
    ]
  }


