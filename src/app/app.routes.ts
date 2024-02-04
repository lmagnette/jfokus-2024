import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dinos',
    loadComponent: () => import('./features/dino/components/dino-list/dino-list.component'),
    title: 'Dinosaur list'
  },
  {
    path: 'analytics',
    loadComponent: () => import('./features/analytics/analytics/analytics.component'),
    title: 'Analytics'
  },
  {
    path: 'dinos/:id',
    loadComponent: () => import('./features/dino/components/dino-details/dino-details.component'),
    title: 'Dinosaur details'
  },
  {
    path: '',
    redirectTo: 'dinos',
    pathMatch:'full'
  },
];
