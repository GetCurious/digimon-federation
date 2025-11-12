import { Routes } from '@angular/router';
import { DigimonListComponent } from './digimon-list-component/digimon-list-component';
import { DigimonDetailComponent } from './digimon-detail-component/digimon-detail-component';

export const routes: Routes = [
    { path: '', redirectTo: 'digimons', pathMatch: 'full' },
    { path: 'digimons', component: DigimonListComponent },
    { path: 'digimons/:id', component: DigimonDetailComponent },
];
