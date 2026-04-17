import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NuevoDestino } from './pages/nuevo-destino/nuevo-destino';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'nuevoDestino',
        component: NuevoDestino
    }
];
