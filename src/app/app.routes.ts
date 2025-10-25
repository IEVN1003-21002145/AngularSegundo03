import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren:() => import('./auth/features/auth.routers').then(m=>m.default),
    },
    {
        path: 'utl',
        loadChildren:() => import('./utl/utl.routes').then(m=>m.default),
    },
    {
        path: 'formularios',
        loadChildren:() => import('./formularios/formularios.routes').then(m=>m.default),
    },

];
