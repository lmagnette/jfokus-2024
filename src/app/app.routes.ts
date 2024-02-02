import { Routes } from '@angular/router';
import DinoListComponent from './features/dino/components/dino-list/dino-list.component';
import DinoDetailsComponent from './features/dino/components/dino-details/dino-details.component';
import { AnalyticsComponent } from './features/analytics/analytics/analytics.component';

export const routes: Routes = [
  {
    path: 'dinos',
    component: DinoListComponent,
  },
  {
    path: 'analytics',
    component: AnalyticsComponent,
  },
  {
    path: 'dinos/:id',
    component: DinoDetailsComponent,
  },
  {
    path: '',
    redirectTo: 'dinos',
    pathMatch:'full'
  },
];
