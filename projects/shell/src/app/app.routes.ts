import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
    { path: '', redirectTo: 'digimons', pathMatch: 'full' },
    { path: 'digimons', loadComponent: () => import('digimon/DigimonListComponent').then(m => m.DigimonListComponent) },
    { path: 'digimons/:id', loadComponent: () => import('digimon/DigimonDetailComponent').then(m => m.DigimonDetailComponent) },
];
