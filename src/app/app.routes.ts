import { Routes } from '@angular/router';

import { InitialPage } from './components/initial-page/initial-page';
import { Funcionarios } from './pages/funcionarios/funcionarios';

export const routes: Routes = [
    {
        path: '',
        component: InitialPage
    },
    {
        path: 'funcionarios',
        component: Funcionarios
    },
    {
        path: '**',
        redirectTo: ''
    }
];