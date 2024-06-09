import { Routes } from '@angular/router';
import { FiltersComponent } from './components/filters/filters.component';

export const routes: Routes = [
    {path: '', component: FiltersComponent},
    {path: '**', component: FiltersComponent},
];
