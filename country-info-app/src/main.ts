import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {routes} from './app/app.routes';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
})
  .catch((err) => console.error(err));
