import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NuevoDestino } from './pages/nuevo-destino/nuevo-destino';
import { Destinos } from './pages/destinos/destinos';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
      {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home').then(c => c.Home),
    title: 'Nuevo Destino',
    data: {
      description: 'Nuevo Destino ',
      canonical: '/',
/*       canActivate: [authGuard],
 */    },
  },
    {
        path: 'nuevoDestino',
          loadComponent: () => import('./pages/nuevo-destino/nuevo-destino').then(m => m.NuevoDestino)
  
    },
    {
        path: 'destinos',
          loadComponent: () => import('./pages/destinos/destinos').then(m => m.Destinos)
  
    }
];
