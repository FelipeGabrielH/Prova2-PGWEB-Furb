import { Routes } from '@angular/router';

import { InitialPage } from './components/initial-page/initial-page';
import { Funcionarios } from './pages/funcionarios/funcionarios';

import { CadastroComponent } from './pages/cadastro/cadastro';

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
    path: 'cadastro',
    component: CadastroComponent
  },

  {
    path: '**',
    redirectTo: ''
  }

];