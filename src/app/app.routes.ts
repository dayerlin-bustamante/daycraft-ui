import { Routes } from '@angular/router';
import { MAIN_ROUTES } from './domain/main/main.route';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./domain/main/main.page').then(m => m.MainPage),
        children: MAIN_ROUTES
    }
];
